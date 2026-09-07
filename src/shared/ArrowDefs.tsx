import { defineComponent } from 'vue'

/** 모든 도면이 공유하는 SVG 화살촉(marker) 정의. 문서 페이지 최상단에 한 번 렌더링한다. */
export const ArrowDefs = defineComponent({
  name: 'ArrowDefs',
  setup() {
    return () => (
      <svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path id="ahead" d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
          <marker id="ahA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2b5cd9" />
          </marker>
        </defs>
      </svg>
    )
  },
})
