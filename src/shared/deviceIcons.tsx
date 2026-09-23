/* 도면용 장치 아이콘 헬퍼 — 여러 페이지에서 공용으로 사용.
   각 함수는 cx(가로 중심)와 top(아이콘 상단 y)을 받아 <g> 아이콘 + 라벨을 반환한다.
   스타일 클래스(.ic/.screen/.sep/.vent/.led/.lbl 등)는 global.css 에 정의되어 있다. */

// 모니터 (PC · 브라우저 · 클라이언트)
export const pc = (cx: number, label: string, top = 6) => (
  <g>
    <rect class="ic" x={cx - 28} y={top} width="56" height="34" rx="4" />
    <rect class="screen" x={cx - 23} y={top + 5} width="46" height="20" rx="2" />
    <rect class="ic" x={cx - 4} y={top + 34} width="8" height="6" />
    <rect class="ic" x={cx - 15} y={top + 40} width="30" height="4.5" rx="2.25" />
    <text x={cx} y={top + 60} text-anchor="middle" class="lbl">{label}</text>
  </g>
)

// 서버 (랙)
export const srv = (cx: number, label: string, top = 4) => (
  <g>
    <rect class="ic" x={cx - 20} y={top} width="40" height="44" rx="5" />
    <line class="sep" x1={cx - 15} y1={top + 22} x2={cx + 15} y2={top + 22} />
    <circle class="led" cx={cx - 12} cy={top + 11} r="2.5" />
    <rect class="vent" x={cx - 6} y={top + 8} width="18" height="2.5" rx="1.25" />
    <rect class="vent" x={cx - 6} y={top + 13} width="18" height="2.5" rx="1.25" />
    <circle class="led" cx={cx - 12} cy={top + 33} r="2.5" />
    <rect class="vent" x={cx - 6} y={top + 30} width="18" height="2.5" rx="1.25" />
    <rect class="vent" x={cx - 6} y={top + 35} width="18" height="2.5" rx="1.25" />
    <text x={cx} y={top + 62} text-anchor="middle" class="lbl">{label}</text>
  </g>
)

// 스마트폰 (기기 · 인증앱)
export const phone = (cx: number, label: string, top = 4) => (
  <g>
    <rect class="ic" x={cx - 13} y={top} width="26" height="46" rx="5" />
    <rect class="screen" x={cx - 9.5} y={top + 5} width="19" height="31" rx="2" />
    <circle cx={cx} cy={top + 41} r="2" fill="var(--muted)" />
    <text x={cx} y={top + 62} text-anchor="middle" class="lbl">{label}</text>
  </g>
)

// 데이터베이스 (원통)
export const db = (cx: number, label: string, top = 6) => (
  <g>
    <path class="ic" d={`M${cx - 20} ${top + 6} v26 a20 6 0 0 0 40 0 v-26`} />
    <ellipse class="ic" cx={cx} cy={top + 6} rx="20" ry="6" />
    <path class="sep" d={`M${cx - 20} ${top + 16} a20 6 0 0 0 40 0`} />
    <text x={cx} y={top + 58} text-anchor="middle" class="lbl">{label}</text>
  </g>
)

// 이메일 사서함 (봉투)
export const mail = (cx: number, label: string, top = 8) => (
  <g>
    <rect class="ic" x={cx - 22} y={top} width="44" height="30" rx="3" />
    <path class="sep" d={`M${cx - 22} ${top + 3} L${cx} ${top + 17} L${cx + 22} ${top + 3}`} />
    <text x={cx} y={top + 50} text-anchor="middle" class="lbl">{label}</text>
  </g>
)

// 사람 (사용자 · 공격자 · 관리자)
export const person = (cx: number, label: string, top = 4) => (
  <g>
    <circle class="ic" cx={cx} cy={top + 11} r="9" />
    <path class="ic" d={`M${cx - 16} ${top + 44} v-4 a16 15 0 0 1 32 0 v4 z`} />
    <text x={cx} y={top + 62} text-anchor="middle" class="lbl">{label}</text>
  </g>
)

// 클라우드 (인터넷 · 외부 서비스)
export const cloud = (cx: number, label: string, top = 10) => (
  <g>
    <path class="ic" d={`M${cx - 26} ${top + 26} a13 13 0 0 1 3 -25 a17 17 0 0 1 31 -3 a12 12 0 0 1 4 28 z`} />
    <text x={cx} y={top + 48} text-anchor="middle" class="lbl">{label}</text>
  </g>
)
