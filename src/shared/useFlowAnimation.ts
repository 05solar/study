import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/* ---------- 흐름 애니메이션 엔진 ----------
   컨테이너 안의 svg.anim에서 [data-step] 그룹을 단계 순서대로 재생한다.
   각 그룹의 line/path를 따라 점(dot)이 이동하고,
   진행 중인 단계에는 .active 클래스가 붙어 강조된다.
   ?seek=3.2 처럼 초 단위 쿼리로 시작 시점을 지정할 수 있다(미리보기용). */

const MOVE = 1500 // 이동 시간(ms)
const PAUSE = 500 // 단계 사이 정지 시간(ms)

function ease(p: number): number {
  return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
}

export function useFlowAnimation(root: Ref<HTMLElement | null>): void {
  const rafIds: number[] = []
  const observers: IntersectionObserver[] = []

  let seek = 0
  try {
    const q = new URLSearchParams(window.location.search).get('seek')
    if (q !== null && isFinite(parseFloat(q))) seek = parseFloat(q) * 1000
  } catch {
    /* 무시 */
  }

  function setupDiagram(svg: SVGSVGElement, slot: number): void {
    const groups = Array.from(svg.querySelectorAll<SVGGElement>('[data-step]'))
    groups.sort((a, b) => Number(a.dataset.step) - Number(b.dataset.step))
    if (!groups.length) return

    const geos = groups.map((g) =>
      g.matches('line,path') ? (g as unknown as SVGGeometryElement) : g.querySelector<SVGGeometryElement>('line, path'),
    )

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    dot.setAttribute('r', '6')
    dot.setAttribute('class', 'dot')
    dot.style.opacity = '0'
    svg.appendChild(dot)

    const stepDur = MOVE + PAUSE
    const total = groups.length * stepDur
    let visible = true
    let startTime: number | null = null

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
        { threshold: 0.05 },
      )
      io.observe(svg)
      observers.push(io)
    }

    function frame(t: number): void {
      if (startTime === null) startTime = t
      if (visible) {
        const elapsed = (t - startTime + seek) % total
        const idx = Math.floor(elapsed / stepDur)
        const progress = Math.min((elapsed - idx * stepDur) / MOVE, 1)

        groups.forEach((g, i) => g.classList.toggle('active', i === idx))

        const geo = geos[idx]
        if (geo && typeof geo.getTotalLength === 'function') {
          try {
            const len = geo.getTotalLength()
            const pt = geo.getPointAtLength(len * ease(progress))
            dot.setAttribute('cx', String(pt.x))
            dot.setAttribute('cy', String(pt.y))
            dot.style.opacity = progress >= 1 ? '0' : '1'
          } catch {
            dot.style.opacity = '0'
          }
        } else {
          dot.style.opacity = '0'
        }
      }
      rafIds[slot] = window.requestAnimationFrame(frame)
    }
    rafIds[slot] = window.requestAnimationFrame(frame)
  }

  onMounted(() => {
    const el = root.value
    if (!el) return
    const svgs = el.querySelectorAll<SVGSVGElement>('svg.anim')
    svgs.forEach((svg, i) => setupDiagram(svg, i))
  })

  onBeforeUnmount(() => {
    rafIds.forEach((id) => window.cancelAnimationFrame(id))
    observers.forEach((io) => io.disconnect())
  })
}
