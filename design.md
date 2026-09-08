# 디자인 가이드 (design.md)

학습 노트 사이트의 디자인 양식 문서. 새 페이지·컴포넌트를 만들 때 반드시 이 문서를 따른다.
공통 스타일 구현체는 `src/styles/global.css`, 페이지 전용 스타일은 각 페이지 폴더의 `*.css`에 둔다.

---

## ⚠ 절대 규칙

- **사이드 마커(왼쪽/오른쪽 강조 바) 절대 사용 금지.**
  - `border-left: 5px solid ...`, `border-left-width: 10px` 같은 한쪽 면만 두껍게 칠하는 액센트 바를 어떤 요소에도 쓰지 않는다.
  - 강조가 필요하면 **전체 테두리**(`border: 1px|3px solid`), **배경색**(`--soft`, `--accent-soft`, `--danger-soft`), **태그 라벨**(`.tag-line`)로 표현한다.
  - 제목의 `border-bottom`(밑줄)은 사이드 마커가 아니므로 허용.

## 디자인 토큰 (CSS 변수)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--bg` / `--card` | `#ffffff` | 페이지/카드 배경 |
| `--ink` / `--muted` | `#111111` | 본문·제목 글자색 (제목 포함 전부 검정) |
| `--line` | `#d6d6d6` | 기본 테두리 |
| `--soft` | `#f4f4f4` | 연한 배경 (강조 박스, SVG boxsoft) |
| `--code-bg` | `#f5f5f5` | 코드 배경 |
| `--accent` | `#2b5cd9` | 파랑 액센트 (링크, 테두리, 애니메이션 점) |
| `--accent-dark` | `#1e46ad` | 진한 파랑 (보조) |
| `--accent-soft` | `#e9effc` | 연파랑 배경 (표 헤더, SVG boxdark, hover) |
| `--danger` | `#d23c3c` | 경고 빨강 |
| `--danger-soft` | `#fdecec` | 경고 배경 |

색은 위 토큰만 사용한다. 새 색상 하드코딩 금지 (예외: SVG marker `#ahA`의 fill은 `--accent` 값과 동일한 `#2b5cd9` 리터럴 — SVG marker는 CSS 변수를 못 받는 브라우저 제약 때문).

## 타이포그래피

- 폰트: `"Segoe UI", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif`
- 본문 15px, `line-height: 1.65`
- **본문 계열 글자 크기는 전부 1em으로 통일** — 표, 캡션, 배지(.kw/.tag-line/.q-num), 부제(.sub), 코드, footer 등에
  0.8em~0.95em 같은 축소 크기를 쓰지 않는다. 크기 차이는 제목(h1~h3)과 굵기로만 표현한다.
- 제목 크기: h1 `1.5em` / h2 `1.25em` / h3 `1.05em` / h4 `1em`
- **모든 제목 글자색은 검정(`--ink`)** — 색으로 꾸미지 않는다.
- **한글 줄바꿈은 단어 단위**: body와 표 셀에 `word-break: keep-all; overflow-wrap: break-word`가 걸려 있다.
  표 셀에서 글자가 한 글자씩 세로로 쌓이는 배치는 금지 — 셀이 좁으면 두 줄로 자연 줄바꿈되게 두거나 열 구성을 조정한다.
- 여백은 컴팩트하게 (섹션 padding 18~22px, 요소 간 margin 12~18px 수준).
- 모서리는 각지게: `border-radius` 사용하지 않음.

## 페이지 공통 구조

문서 페이지는 아래 순서를 지킨다.

```
<div class="wrap">        ← max-width 900px 중앙 정렬 (홈은 1000px 가능)
  <ArrowDefs />           ← SVG 화살촉 defs (도면 있는 페이지 필수)
  <header class="hero">   ← 제목 + 소개. 3px 파랑 전체 테두리
  <nav class="toc">       ← 목차. 2단 <ol>, 앵커는 scrollToId() 헬퍼 사용
  <section id="...">      ← 번호 붙은 h2 ("1. 제목") + <p class="sub"> 요약
  ...
  <footer>                ← "OOO 학습 문서 · YYYY-MM"
</div>
```

## 컴포넌트 양식

- **강조 박스 `.box`**: 회색 전체 테두리 + `--soft` 배경 + `.tag-line` 라벨(핵심/주의 등).
  경고는 `.box.deny`(빨강 라벨 + `--danger-soft` 배경). ~~왼쪽 굵은 바~~ 금지.
- **표**: 전체 1px 테두리, 헤더 배경 `--accent-soft`.
- **키워드 배지 `.kw`**: 파랑 1px 테두리의 인라인 칩. 문서 끝 "더 공부할 키워드"에 사용.
- **구분선 `.divider`**: 1px 회색 수평선.
- **채점형 퀴즈 `QuizInput`** (`src/shared/QuizInput.tsx`): 정답 입력란 + 제출 버튼이 있는 문항 컴포넌트.
  제출하면 정규화 비교(대소문자·공백·문장부호 무시)로 채점되어, 정답이면 초록 결과(`--ok`)와 해설,
  오답이면 빨강 결과(`--danger`)와 정답·해설이 표시된다. 문항 데이터는 `QuizData[]` 배열로 정의해
  `{QUESTIONS.map((q) => <QuizInput {...q} key={q.num} />)}` 로 렌더링한다.
  `answers`에는 인정할 표기 변형(한글/영문/약어)을 넉넉히 넣고, 대표 표기는 `answerLabel`로 지정한다.
  기출 변형문제(`/variant`)와 복원문제(`/archive`) 페이지에서 사용.
- **로컬 전용 폴더**: `src/pages/exam-archive/`(실기 기출 복원문제)는 저작권 문제로 `.gitignore`에
  등록된 로컬 전용이다. 라우터는 이 폴더의 `routes.ts`를 `import.meta.glob`으로 조건부 로드하므로
  폴더가 없어도(공개 빌드) 빌드가 깨지지 않고, 홈의 폴더 카드는 `archiveAvailable`일 때만 표시된다.
- **실전 문제 `.quiz-item`**: 정보처리기사 실기 스타일 문제 블록. 구조는
  `div.quiz-item > span.q-num("문제 N") + p.q-body(발문) [+ pre(보기/코드)] + details > summary("정답 보기") + div.answer`.
  answer 안에는 `<span class="label">정답:</span>` 뒤에 답, 이어서 `<span class="label">해설:</span>` 뒤에 짧은 해설.
  문제 페이지의 마지막 섹션("실전 문제")에 10문항 배치가 기본.

## 도면(다이어그램) 양식

- `figure.diagram` 안에 `svg.d` + `figcaption`("도면 N. 설명") 순서.
- SVG는 `viewBox="0 0 900 H"` 기준으로 그리고, 요소 클래스를 통일한다:
  - `.box`(흰 상자) / `.boxsoft`(회색 상자) / `.boxdark`(연파랑 강조 상자)
  - `.arrow`(실선 화살표) / `.ret`(점선 = 응답·반환) / `.blocked`(회색 점선 = 불가능한 경로) / `.xmark`(빨강 X)
  - 텍스트: `.strong`(굵게), `.small`(13px 보조)
- 화살촉은 페이지당 한 번 렌더링하는 `ArrowDefs` 컴포넌트의 `#ah`(기본), `#ahA`(활성 파랑)를 참조.

## 흐름 애니메이션 양식

- 애니메이션이 필요한 도면은 `svg.d.anim`으로 표시하고, 순서가 있는 단계를
  `<g class="msg" data-step="1">` 그룹으로 감싼다 (그룹 안에 line/path 하나 + 라벨 텍스트).
- 엔진은 `useFlowAnimation(rootRef)` 컴포저블 하나만 사용 (`src/shared/useFlowAnimation.ts`).
  - 파란 점(`.dot`)이 단계의 선을 따라 이동하고, 진행 중 단계에 `.active`가 붙어 굵은 파랑으로 강조된다.
  - 이동 1.5초 + 정지 0.5초, 무한 반복. 화면 밖 도면은 일시정지(IntersectionObserver).
  - `?seek=초` 쿼리로 시작 시점을 지정할 수 있다 (미리보기/디버그용).

## 코드 구조 규칙

- 프레임워크: **Vue 3 + TSX** (`@vitejs/plugin-vue-jsx`), 라우팅은 vue-router 해시 모드.
- **페이지마다 폴더 하나**: `src/pages/<이름>/` 안에 `<이름>Page.tsx` + `<이름>.css`.
- **문서 묶음(폴더)**: 주제 묶음은 `src/pages/<묶음>/<이름>/`으로 한 단계 더 들어간다.
  정보처리기사 실기 대비 문서는 전부 `src/pages/engineer/` 아래(라우트 `/engineer/...`)에 두고,
  묶음 전용 목록 페이지(`engineer/home/`)를 갖는다. 홈에서는 `.doc-card.folder` 카드로 진입한다.
- 목록 카드(`.doc-card`, `.doc-num`, `.chev`, `.group-title`)는 global.css 공용 컴포넌트다.
- 공통 스타일은 `src/styles/global.css`에만, 페이지 고유 스타일은 페이지 폴더 css에만 둔다. 중복 정의 금지.
- 공용 로직/컴포넌트는 `src/shared/` (ArrowDefs, useFlowAnimation, scrollToId).
- 목차 앵커는 `href="#id"` 직접 사용 금지(해시 라우터와 충돌) — `scrollToId(e, 'id')` 헬퍼를 onClick으로 사용.
