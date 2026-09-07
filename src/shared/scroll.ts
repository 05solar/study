/** 목차(TOC) 앵커용 스크롤 헬퍼.
 *  해시 라우터(#/...)와 충돌하지 않도록 href 기본 동작을 막고 직접 스크롤한다. */
export function scrollToId(e: Event, id: string): void {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
