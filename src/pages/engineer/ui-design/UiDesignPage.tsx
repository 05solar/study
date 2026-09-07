import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './ui-design.css'

export default defineComponent({
  name: 'UiDesignPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>UI 설계 · UML 완전 정리</h1>
          <p>UI 설계 프로세스 → 설계 도구(와이어프레임·목업·스토리보드·프로토타입) → UML 개요 → 관계 6종 →<br/>
          구조적 다이어그램 6종 → 행위 다이어그램 7종 → 실전 문제 순서로 정리한 정보처리기사 실기 대비 학습 문서입니다.<br/>
          <span>애니메이션 도면의 파란 점은 흐름의 이동을 나타내며, 진행 중인 단계가 진하게 강조됩니다. 자동으로 반복 재생됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#process" onClick={(e) => scrollToId(e, 'process')}>UI 설계 프로세스</a></li>
            <li><a href="#tools" onClick={(e) => scrollToId(e, 'tools')}>UI 설계 도구 — 와이어프레임 · 목업 · 스토리보드 · 프로토타입</a></li>
            <li><a href="#uml" onClick={(e) => scrollToId(e, 'uml')}>UML 개요 — 사물 · 관계 · 다이어그램</a></li>
            <li><a href="#relations" onClick={(e) => scrollToId(e, 'relations')}>UML 관계 6종</a></li>
            <li><a href="#structural" onClick={(e) => scrollToId(e, 'structural')}>구조적(정적) 다이어그램 6종</a></li>
            <li><a href="#behavioral" onClick={(e) => scrollToId(e, 'behavioral')}>행위(동적) 다이어그램 7종</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ================================================================ 1. UI 설계 프로세스 */}
        <section id="process">
          <h2>1. UI 설계 프로세스</h2>
          <p class="sub">UI 설계는 "예쁘게 그리는 일"이 아니라, 사용자를 분석하고 → 화면과 기능을 정의하고 → 평가하는 공학적 절차다.</p>

          <h3>1-1. UI(User Interface)란</h3>
          <p><strong>UI</strong>는 사용자와 시스템 사이에서 의사소통이 일어나도록 만들어진 물리적·가상적 매개체다.
          화면의 버튼, 입력 폼, 메뉴는 물론 명령어 입력창까지 모두 UI다.
          비슷한 용어인 <strong>UX(User Experience)</strong>는 UI를 포함해 제품을 사용하며 느끼는 총체적 경험(감정·만족도)을 뜻한다.
          <strong>UI는 수단, UX는 목적</strong>이라고 기억하면 쉽다.</p>
          <table>
            <tr><th>UI 유형</th><th>설명</th></tr>
            <tr><td><strong>CLI</strong> (Command Line Interface)</td><td>명령어를 텍스트로 입력해 조작하는 인터페이스</td></tr>
            <tr><td><strong>GUI</strong> (Graphical UI)</td><td>아이콘·메뉴 등 그래픽 요소를 마우스로 조작하는 인터페이스</td></tr>
            <tr><td><strong>NUI</strong> (Natural UI)</td><td>터치·음성·제스처 등 사람의 자연스러운 행동으로 조작</td></tr>
            <tr><td><strong>OUI</strong> (Organic UI)</td><td>모든 사물이 입출력 장치가 되는 유기적 인터페이스</td></tr>
          </table>

          <h3>1-2. UI 설계 원칙 4가지 (직·유·학·유)</h3>
          <table>
            <tr><th>원칙</th><th>의미</th></tr>
            <tr><td><strong>직관성</strong></td><td>누구나 쉽게 이해하고 바로 사용할 수 있어야 한다</td></tr>
            <tr><td><strong>유효성</strong></td><td>사용자의 목적을 정확하고 완벽하게 달성해야 한다</td></tr>
            <tr><td><strong>학습성</strong></td><td>누구나 쉽게 배우고 익힐 수 있어야 한다</td></tr>
            <tr><td><strong>유연성</strong></td><td>사용자의 요구사항을 최대한 수용하고 실수를 방지·최소화해야 한다</td></tr>
          </table>

          <h3>1-3. UI 설계 프로세스 6단계</h3>
          <ol>
            <li><strong>문제 정의:</strong> 시스템의 목적과 해결해야 할 문제를 정의한다.</li>
            <li><strong>사용자 모델 정의:</strong> 사용자의 특성을 파악한다. 소프트웨어 사용 지식에 따라 초보자·중급자·숙련자로 분류한다.</li>
            <li><strong>작업 분석:</strong> 사용자의 특징을 세분화하고, 사용자가 수행할 과업(Task)을 정의·분석한다.</li>
            <li><strong>컴퓨터 오브젝트 및 기능 정의:</strong> 분석한 작업을 어떤 화면 객체(오브젝트)와 기능으로 지원할지 정의한다.</li>
            <li><strong>사용자 인터페이스 정의:</strong> 실제 상호작용 수단(입력 장치, 화면 구성 등)을 정의한다.</li>
            <li><strong>디자인 평가:</strong> 설계한 UI가 작업에 적합한지, 사용자 요구를 만족하는지 평가한다(사용성 평가·GOMS·휴리스틱 평가 등).</li>
          </ol>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 280" role="img" aria-label="UI 설계 프로세스 6단계 흐름 도면">
              <rect class="boxdark" x="40" y="45" width="240" height="60" />
              <text x="160" y="70" text-anchor="middle" class="strong">① 문제 정의</text>
              <text x="160" y="92" text-anchor="middle" class="small">목적 · 해결할 문제</text>

              <rect class="box" x="330" y="45" width="240" height="60" />
              <text x="450" y="70" text-anchor="middle" class="strong">② 사용자 모델 정의</text>
              <text x="450" y="92" text-anchor="middle" class="small">초보자 · 중급자 · 숙련자</text>

              <rect class="box" x="620" y="45" width="240" height="60" />
              <text x="740" y="70" text-anchor="middle" class="strong">③ 작업 분석</text>
              <text x="740" y="92" text-anchor="middle" class="small">과업(Task) 정의 · 분석</text>

              <rect class="box" x="40" y="180" width="240" height="60" />
              <text x="160" y="205" text-anchor="middle" class="strong">④ 오브젝트·기능 정의</text>
              <text x="160" y="227" text-anchor="middle" class="small">화면 객체와 기능 결정</text>

              <rect class="box" x="330" y="180" width="240" height="60" />
              <text x="450" y="205" text-anchor="middle" class="strong">⑤ 인터페이스 정의</text>
              <text x="450" y="227" text-anchor="middle" class="small">상호작용 수단 정의</text>

              <rect class="boxdark" x="620" y="180" width="240" height="60" />
              <text x="740" y="205" text-anchor="middle" class="strong">⑥ 디자인 평가</text>
              <text x="740" y="227" text-anchor="middle" class="small">사용성 평가 · 피드백</text>

              <line class="arrow" x1="280" y1="75" x2="324" y2="75" />
              <line class="arrow" x1="570" y1="75" x2="614" y2="75" />
              <path class="arrow" d="M 740 105 L 740 142 L 160 142 L 160 174" />
              <line class="arrow" x1="280" y1="210" x2="324" y2="210" />
              <line class="arrow" x1="570" y1="210" x2="614" y2="210" />
            </svg>
            <figcaption>도면 1. UI 설계 프로세스 — 문제 정의에서 출발해 사용자 분석을 거쳐 디자인 평가로 마무리한다.</figcaption>
          </figure>

          <h3>1-4. UI 흐름 설계와 상세 설계</h3>
          <table>
            <tr><th>구분</th><th>내용</th></tr>
            <tr>
              <td><strong>UI 흐름 설계</strong></td>
              <td>업무 수행에 필요한 <strong>화면과 화면 사이의 이동 흐름</strong>(화면 전환, 입력 요소 간 순서)을 설계한다.
              기능 작동 경로를 파악하고 화면 간 인터랙션을 정의한다.</td>
            </tr>
            <tr>
              <td><strong>UI 상세 설계</strong></td>
              <td>UI 설계서를 바탕으로 <strong>화면 하나하나의 실제 구성</strong>(레이아웃, 입력 항목, 버튼, 메시지)을 상세하게 설계한다.
              요구사항 확인 → UI 설계서 표지·개정 이력 작성 → 구조 설계 → 메뉴 구조 설계 → 화면 설계 순으로 진행한다.</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            실기에서는 <strong>프로세스 6단계의 순서</strong>와 <strong>설계 원칙 4가지(직관성·유효성·학습성·유연성)</strong>를 묻는다.
            "사용자를 초보자·중급자·숙련자로 나누는 단계"가 <strong>사용자 모델 정의</strong>라는 것까지 짝지어 기억하자.
          </div>
        </section>

        {/* ================================================================ 2. UI 설계 도구 */}
        <section id="tools">
          <h2>2. UI 설계 도구 — 와이어프레임 · 목업 · 스토리보드 · 프로토타입</h2>
          <p class="sub">설계 산출물은 "얼마나 구체적인가"와 "움직이는가"로 구분된다. 설명을 보고 용어를 쓰는 문제가 실기 단골이다.</p>

          <h3>2-1. 도구별 정의</h3>
          <ul>
            <li><strong>와이어프레임(Wireframe):</strong> 화면 단위의 <strong>뼈대</strong>. 기획 초기에 레이아웃(UI 요소의 배치)을 선과 상자만으로 개략적으로 그린 것. 손그림, 파워포인트, 스케치 등으로 제작한다.</li>
            <li><strong>목업(Mockup):</strong> 와이어프레임보다 발전한 <strong>실제 화면과 유사한 정적 모형</strong>. 시각적으로만 완성도가 높고, 실제로 기능이 동작하지는 않는다.</li>
            <li><strong>스토리보드(Storyboard):</strong> <strong>와이어프레임에 콘텐츠 설명, 페이지 간 이동 흐름 등을 추가한 문서</strong>. 디자이너·개발자가 최종적으로 참고하는 작업 지침서다.</li>
            <li><strong>프로토타입(Prototype):</strong> 인터랙션(상호작용)을 적용해 <strong>실제로 동작하는 것처럼 만든 동적 모형</strong>. 사용자 피드백을 받아 설계를 검증한다. 종이로 만드는 <strong>페이퍼 프로토타입</strong>과 도구로 만드는 <strong>디지털 프로토타입</strong>이 있다.</li>
            <li><strong>유스케이스(Use Case):</strong> 사용자 관점에서 <strong>시스템이 제공해야 하는 기능(요구사항)</strong>을 다이어그램과 명세서로 표현한 것. 6장의 유스케이스 다이어그램으로 시각화한다.</li>
          </ul>

          <h3>2-2. 4개 도구 비교 표</h3>
          <table>
            <tr><th>도구</th><th>형태</th><th>동작 여부</th><th>핵심 키워드</th></tr>
            <tr><td><strong>와이어프레임</strong></td><td>선·상자 수준의 개략적 배치</td><td>정적</td><td>뼈대, 레이아웃, 기획 초기</td></tr>
            <tr><td><strong>목업</strong></td><td>실물과 유사한 화면</td><td>정적 (기능 동작 없음)</td><td>정적 모형, 시각적 완성</td></tr>
            <tr><td><strong>스토리보드</strong></td><td>와이어프레임 + 설명·이동 흐름</td><td>정적 (문서)</td><td>작업 지침서, 최종 참고 문서</td></tr>
            <tr><td><strong>프로토타입</strong></td><td>동작하는 화면</td><td><strong>동적</strong> (인터랙션 가능)</td><td>테스트 · 피드백 · 검증</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 240" role="img" aria-label="와이어프레임에서 스토리보드, 프로토타입으로 발전하는 흐름 도면">
              <rect class="box" x="60" y="70" width="200" height="90" />
              <text x="160" y="100" text-anchor="middle" class="strong">와이어프레임</text>
              <text x="160" y="124" text-anchor="middle" class="small">화면의 뼈대</text>
              <text x="160" y="144" text-anchor="middle" class="small">레이아웃만 배치</text>

              <rect class="box" x="350" y="70" width="200" height="90" />
              <text x="450" y="100" text-anchor="middle" class="strong">스토리보드</text>
              <text x="450" y="124" text-anchor="middle" class="small">설명 · 이동 흐름 추가</text>
              <text x="450" y="144" text-anchor="middle" class="small">개발 작업 지침서</text>

              <rect class="boxdark" x="640" y="70" width="200" height="90" />
              <text x="740" y="100" text-anchor="middle" class="strong">프로토타입</text>
              <text x="740" y="124" text-anchor="middle" class="small">인터랙션 적용</text>
              <text x="740" y="144" text-anchor="middle" class="small">동적 · 테스트 가능</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="260" y1="115" x2="344" y2="115" />
                <text x="302" y="50" text-anchor="middle" class="small">1. 설명 · 흐름 추가</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="550" y1="115" x2="634" y2="115" />
                <text x="592" y="50" text-anchor="middle" class="small">2. 동적 인터랙션 부여</text>
              </g>
              <text x="450" y="205" text-anchor="middle" class="small">목업은 와이어프레임과 스토리보드 사이의 "실물 유사 정적 모형" 단계에 해당한다</text>
            </svg>
            <figcaption>도면 2. 설계 산출물의 발전 흐름 — 뼈대(와이어프레임)에 설명을 붙이고(스토리보드), 동작을 입힌다(프로토타입).</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <strong>목업 vs 프로토타입</strong> 구분이 가장 많이 틀리는 포인트다.
            둘 다 실제 화면과 비슷하지만 <strong>목업은 정적(동작 X)</strong>, <strong>프로토타입은 동적(인터랙션 O)</strong>이다.
            문제에 "정적", "기능은 동작하지 않는다"가 보이면 목업, "동적", "테스트 가능"이 보이면 프로토타입이다.
          </div>
        </section>

        {/* ================================================================ 3. UML 개요 */}
        <section id="uml">
          <h2>3. UML 개요 — 사물 · 관계 · 다이어그램</h2>
          <p class="sub">말로 하면 서로 다르게 이해하는 설계를, 표준화된 그림 언어로 통일한 것이 UML이다.</p>

          <h3>3-1. UML이란</h3>
          <p><strong>UML(Unified Modeling Language, 통합 모델링 언어)</strong>은 시스템 개발 과정에서
          개발자 사이의 의사소통을 원활하게 하기 위해 <strong>표준화한 객체지향 모델링 언어</strong>다.
          Rumbaugh(OMT), Booch, Jacobson(OOSE)의 방법론을 통합해 만들어졌고, <strong>OMG</strong>에서 표준으로 지정했다.</p>

          <h3>3-2. UML 구성 요소 3가지</h3>
          <table>
            <tr><th>구성 요소</th><th>설명</th></tr>
            <tr><td><strong>사물 (Things)</strong></td><td>모델을 구성하는 기본 요소. 다이어그램 안의 개념적 존재(클래스, 유스케이스, 노드 등)</td></tr>
            <tr><td><strong>관계 (Relationships)</strong></td><td>사물과 사물 사이의 연관성 표현 (연관·집합·복합·일반화·의존·실체화)</td></tr>
            <tr><td><strong>다이어그램 (Diagrams)</strong></td><td>사물과 관계를 도형으로 표현한 그림 (구조적 6종 + 행위 7종)</td></tr>
          </table>

          <h3>3-3. 사물(Things)의 4가지 종류</h3>
          <table>
            <tr><th>사물</th><th>설명</th><th>예</th></tr>
            <tr><td><strong>구조 사물</strong> (Structural)</td><td>시스템의 정적인 부분, 개념적·물리적 요소</td><td>클래스, 인터페이스, 컴포넌트, 노드, 유스케이스</td></tr>
            <tr><td><strong>행동 사물</strong> (Behavioral)</td><td>시간과 공간에 따른 동적인 행위</td><td>상호작용, 상태 머신</td></tr>
            <tr><td><strong>그룹 사물</strong> (Grouping)</td><td>요소들을 묶어 그룹화</td><td>패키지</td></tr>
            <tr><td><strong>주해 사물</strong> (Annotation)</td><td>부가 설명, 제약조건 표기</td><td>노트(Note)</td></tr>
          </table>

          <h3>3-4. 스테레오타입(Stereotype)</h3>
          <p>UML의 기본 요소 외에 새로운 의미를 부여하고 확장할 때 쓰는 표기로,
          <strong>길러멧(Guillemet)</strong>이라 부르는 겹화살괄호 <strong>« »</strong> 안에 이름을 적는다.</p>
          <table>
            <tr><th>표기</th><th>의미</th></tr>
            <tr><td><code>«include»</code></td><td>다른 유스케이스를 반드시 포함(호출)한다</td></tr>
            <tr><td><code>«extend»</code></td><td>특정 조건에서 다른 유스케이스를 확장(선택적 실행)한다</td></tr>
            <tr><td><code>«interface»</code></td><td>이 요소가 인터페이스임을 표시</td></tr>
            <tr><td><code>«entity»</code>, <code>«boundary»</code>, <code>«control»</code></td><td>클래스의 역할 구분(엔티티·경계·제어)</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "UML의 구성 요소 3가지를 쓰시오" → <strong>사물(Things), 관계(Relationships), 다이어그램(Diagrams)</strong>.
            스테레오타입은 <strong>« » (길러멧)</strong> 기호로 표기한다는 것까지가 한 세트다.
          </div>
        </section>

        {/* ================================================================ 4. UML 관계 6종 */}
        <section id="relations">
          <h2>4. UML 관계(Relationships) 6종</h2>
          <p class="sub">선 모양(실선/점선)과 화살촉 모양(마름모/삼각형)만 정확히 구분하면 6종이 전부 풀린다.</p>

          <table>
            <tr><th>관계</th><th>표기</th><th>의미</th><th>예</th></tr>
            <tr><td><strong>연관 (Association)</strong></td><td>실선 (방향성 있으면 화살표)</td><td>2개 이상의 사물이 서로 관련되어 있음</td><td>학생 — 과목</td></tr>
            <tr><td><strong>집합 (Aggregation)</strong></td><td>실선 + <strong>빈 마름모</strong>(전체 쪽)</td><td>전체-부분 관계. 부분이 전체와 <strong>독립적</strong>으로 존재 가능</td><td>컴퓨터 ◇— 프린터</td></tr>
            <tr><td><strong>복합 (Composition)</strong></td><td>실선 + <strong>채운 마름모</strong>(전체 쪽)</td><td>강한 전체-부분 관계. 전체가 소멸하면 부분도 소멸 (<strong>독립 불가</strong>)</td><td>방 ◆— 문</td></tr>
            <tr><td><strong>일반화 (Generalization)</strong></td><td>실선 + <strong>빈 삼각형</strong>(부모 쪽)</td><td>상속 관계. 자식(구체)에서 부모(일반)로 화살표</td><td>소나타 —▷ 자동차</td></tr>
            <tr><td><strong>의존 (Dependency)</strong></td><td><strong>점선</strong> + 화살표</td><td>필요할 때만 짧은 시간 관계를 맺고 영향을 줌</td><td>주문 ⤍ 할인정책</td></tr>
            <tr><td><strong>실체화 (Realization)</strong></td><td><strong>점선</strong> + <strong>빈 삼각형</strong></td><td>인터페이스(기능 명세)와 그것을 구현(수행)하는 사물의 관계</td><td>비행기 ⤍▷ «interface» 날다</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 400" role="img" aria-label="UML 관계 6종의 실제 표기법 도면">
              {/* ---- 1행 왼쪽: 연관 ---- */}
              <text x="230" y="50" text-anchor="middle" class="strong">연관 (Association)</text>
              <rect class="box" x="60" y="64" width="120" height="36" />
              <text x="120" y="88" text-anchor="middle" class="small">학생</text>
              <rect class="box" x="330" y="64" width="120" height="36" />
              <text x="390" y="88" text-anchor="middle" class="small">과목</text>
              <line class="rel" x1="180" y1="82" x2="330" y2="82" />
              <text x="230" y="126" text-anchor="middle" class="small">실선 — 서로 관련 (수강한다)</text>

              {/* ---- 1행 오른쪽: 집합 ---- */}
              <text x="680" y="50" text-anchor="middle" class="strong">집합 (Aggregation)</text>
              <rect class="box" x="510" y="64" width="120" height="36" />
              <text x="570" y="88" text-anchor="middle" class="small">프린터 (부분)</text>
              <rect class="box" x="760" y="64" width="120" height="36" />
              <text x="820" y="88" text-anchor="middle" class="small">컴퓨터 (전체)</text>
              <line class="rel" x1="630" y1="82" x2="732" y2="82" />
              <polygon class="uml-hollow" points="760,82 746,75 732,82 746,89" />
              <text x="695" y="126" text-anchor="middle" class="small">빈 마름모(전체 쪽) — 부분이 독립 가능</text>

              {/* ---- 2행 왼쪽: 복합 ---- */}
              <text x="230" y="180" text-anchor="middle" class="strong">복합 (Composition)</text>
              <rect class="box" x="60" y="194" width="120" height="36" />
              <text x="120" y="218" text-anchor="middle" class="small">문 (부분)</text>
              <rect class="box" x="330" y="194" width="120" height="36" />
              <text x="390" y="218" text-anchor="middle" class="small">방 (전체)</text>
              <line class="rel" x1="180" y1="212" x2="302" y2="212" />
              <polygon class="uml-solid" points="330,212 316,205 302,212 316,219" />
              <text x="230" y="256" text-anchor="middle" class="small">채운 마름모 — 전체가 사라지면 부분도 소멸</text>

              {/* ---- 2행 오른쪽: 일반화 ---- */}
              <text x="680" y="180" text-anchor="middle" class="strong">일반화 (Generalization)</text>
              <rect class="box" x="510" y="194" width="120" height="36" />
              <text x="570" y="218" text-anchor="middle" class="small">소나타 (자식)</text>
              <rect class="box" x="760" y="194" width="120" height="36" />
              <text x="820" y="218" text-anchor="middle" class="small">자동차 (부모)</text>
              <line class="rel" x1="630" y1="212" x2="740" y2="212" />
              <polygon class="uml-hollow" points="760,212 740,202 740,222" />
              <text x="695" y="256" text-anchor="middle" class="small">실선 + 빈 삼각형(부모 쪽) — 상속 (is-a)</text>

              {/* ---- 3행 왼쪽: 의존 ---- */}
              <text x="230" y="310" text-anchor="middle" class="strong">의존 (Dependency)</text>
              <rect class="box" x="60" y="324" width="120" height="36" />
              <text x="120" y="348" text-anchor="middle" class="small">주문</text>
              <rect class="box" x="330" y="324" width="120" height="36" />
              <text x="390" y="348" text-anchor="middle" class="small">할인정책</text>
              <line class="rel dash" x1="180" y1="342" x2="324" y2="342" marker-end="url(#ah)" />
              <text x="230" y="386" text-anchor="middle" class="small">점선 화살표 — 잠깐 사용하며 영향을 받음</text>

              {/* ---- 3행 오른쪽: 실체화 ---- */}
              <text x="680" y="310" text-anchor="middle" class="strong">실체화 (Realization)</text>
              <rect class="box" x="510" y="324" width="120" height="36" />
              <text x="570" y="348" text-anchor="middle" class="small">비행기</text>
              <rect class="box" x="760" y="324" width="120" height="36" />
              <text x="820" y="341" text-anchor="middle" class="small">«interface»</text>
              <text x="820" y="356" text-anchor="middle" class="small">날다</text>
              <line class="rel dash" x1="630" y1="342" x2="740" y2="342" />
              <polygon class="uml-hollow" points="760,342 740,332 740,352" />
              <text x="695" y="386" text-anchor="middle" class="small">점선 + 빈 삼각형 — 인터페이스를 구현</text>
            </svg>
            <figcaption>도면 3. UML 관계 6종의 표기법 — 마름모는 "전체" 쪽에, 삼각형은 "부모·인터페이스" 쪽에 붙는다.</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <strong>집합 vs 복합</strong>은 마름모의 채움 여부 + "부분의 독립 가능 여부"로 구분한다.
            프린터는 컴퓨터가 없어도 존재하므로 <strong>집합(빈 마름모)</strong>,
            문은 방이 사라지면 함께 사라지므로 <strong>복합(채운 마름모)</strong>.
            또 <strong>일반화(실선+삼각형)</strong>와 <strong>실체화(점선+삼각형)</strong>는 선 종류로 구분한다.
          </div>
        </section>

        {/* ================================================================ 5. 구조적 다이어그램 */}
        <section id="structural">
          <h2>5. 구조적(정적, Structural) 다이어그램 6종</h2>
          <p class="sub">시스템의 "구조"를 시간과 무관하게 찍은 사진. 클래스 다이어그램이 대표 주자다.</p>

          <h3>5-1. 6종 한 줄 정리</h3>
          <table>
            <tr><th>다이어그램</th><th>정의</th></tr>
            <tr><td><strong>클래스 (Class)</strong></td><td>클래스의 속성·연산과 클래스 사이의 관계를 표현. 시스템 구조 파악의 핵심</td></tr>
            <tr><td><strong>객체 (Object)</strong></td><td>클래스의 인스턴스(객체)들을 특정 시점의 모습으로 표현</td></tr>
            <tr><td><strong>컴포넌트 (Component)</strong></td><td>컴포넌트(실제 구현 모듈) 간의 관계와 인터페이스를 표현 (구현 단계)</td></tr>
            <tr><td><strong>배치 (Deployment)</strong></td><td>결과물·프로세스·컴포넌트 등 물리적 요소의 위치(노드)를 표현 (구현 단계)</td></tr>
            <tr><td><strong>패키지 (Package)</strong></td><td>유스케이스·클래스 등의 모델 요소를 그룹화한 패키지 간 관계를 표현</td></tr>
            <tr><td><strong>복합체 구조 (Composite Structure)</strong></td><td>클래스나 컴포넌트가 복합 구조를 가질 때 그 내부 구조를 표현</td></tr>
          </table>

          <h3>5-2. 클래스 다이어그램 상세 — 3칸 구조</h3>
          <p>클래스 하나는 위에서부터 <strong>① 클래스 이름 ② 속성(Attribute) ③ 연산(Operation)</strong>의 3칸 상자로 그린다.
          속성과 연산 앞에는 <strong>접근제어자(가시성)</strong> 기호를 붙인다.</p>
          <table>
            <tr><th>기호</th><th>접근제어자</th><th>의미</th></tr>
            <tr><td><code>+</code></td><td><strong>public</strong></td><td>어디서나 접근 가능</td></tr>
            <tr><td><code>-</code></td><td><strong>private</strong></td><td>해당 클래스 내부에서만 접근 가능</td></tr>
            <tr><td><code>#</code></td><td><strong>protected</strong></td><td>동일 클래스 또는 자식(상속) 클래스에서만 접근 가능</td></tr>
            <tr><td><code>~</code></td><td><strong>package</strong> (default)</td><td>동일 패키지 안에서만 접근 가능</td></tr>
          </table>

          <h3>5-3. 다중성(Multiplicity) 표기</h3>
          <table>
            <tr><th>표기</th><th>의미</th></tr>
            <tr><td><code>1</code></td><td>정확히 1개</td></tr>
            <tr><td><code>0..1</code></td><td>0개 또는 1개</td></tr>
            <tr><td><code>0..*</code> 또는 <code>*</code></td><td>0개 이상</td></tr>
            <tr><td><code>1..*</code></td><td>1개 이상</td></tr>
            <tr><td><code>n..m</code></td><td>n개부터 m개까지 (예: <code>2..5</code>)</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 260" role="img" aria-label="회원과 주문 클래스 다이어그램 예시 도면">
              {/* 회원 클래스 */}
              <rect class="boxdark" x="80" y="40" width="260" height="36" />
              <text x="210" y="64" text-anchor="middle" class="strong">회원 (Member)</text>
              <rect class="box" x="80" y="76" width="260" height="66" />
              <text x="96" y="98" class="small">- memberId : String</text>
              <text x="96" y="118" class="small"># point : int</text>
              <text x="96" y="138" class="small">+ name : String</text>
              <rect class="box" x="80" y="142" width="260" height="50" />
              <text x="96" y="164" class="small">+ login() : boolean</text>
              <text x="96" y="184" class="small">+ order() : void</text>

              {/* 주문 클래스 */}
              <rect class="boxdark" x="560" y="40" width="260" height="36" />
              <text x="690" y="64" text-anchor="middle" class="strong">주문 (Order)</text>
              <rect class="box" x="560" y="76" width="260" height="66" />
              <text x="576" y="98" class="small">- orderNo : String</text>
              <text x="576" y="118" class="small">- orderDate : Date</text>
              <text x="576" y="138" class="small">- amount : int</text>
              <rect class="box" x="560" y="142" width="260" height="50" />
              <text x="576" y="164" class="small">+ cancel() : void</text>
              <text x="576" y="184" class="small">+ getAmount() : int</text>

              {/* 연관 + 다중성 */}
              <line class="rel" x1="340" y1="110" x2="560" y2="110" />
              <text x="356" y="100" class="small strong">1</text>
              <text x="522" y="100" class="small strong">0..*</text>
              <text x="450" y="100" text-anchor="middle" class="small">주문한다 →</text>
              <text x="450" y="236" text-anchor="middle" class="small">회원 1명은 주문을 0개 이상 가진다 (1 : 0..* 연관 관계)</text>
            </svg>
            <figcaption>도면 4. 클래스 다이어그램 예시 — 이름/속성/연산 3칸, 접근제어자 기호, 연관선 양 끝의 다중성.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            실기에서 가장 자주 나오는 조합: <strong>"# 기호의 접근제어자는?" → protected</strong>,
            <strong>"클래스 3칸의 구성은?" → 이름 · 속성 · 연산</strong>,
            <strong>"0..*의 의미는?" → 0개 이상</strong>. 기호 → 용어 방향으로 즉답할 수 있게 외우자.
          </div>
        </section>

        {/* ================================================================ 6. 행위 다이어그램 */}
        <section id="behavioral">
          <h2>6. 행위(동적, Behavioral) 다이어그램 7종</h2>
          <p class="sub">시간의 흐름에 따라 시스템이 "어떻게 동작하는가"를 찍은 동영상. 유스케이스와 시퀀스가 시험의 중심이다.</p>

          <h3>6-1. 7종 한 줄 정리</h3>
          <table>
            <tr><th>다이어그램</th><th>정의</th></tr>
            <tr><td><strong>유스케이스 (Use Case)</strong></td><td>사용자(액터) 관점에서 시스템이 제공하는 기능과 그 관계를 표현. 요구사항 분석 단계</td></tr>
            <tr><td><strong>시퀀스 (Sequence)</strong></td><td>객체들이 주고받는 메시지를 <strong>시간의 흐름(순서)</strong>에 따라 표현</td></tr>
            <tr><td><strong>커뮤니케이션 (Communication)</strong></td><td>메시지와 함께 객체 간 <strong>연관(연결 구조)</strong>까지 표현 (구 협업 다이어그램)</td></tr>
            <tr><td><strong>상태 (State Machine)</strong></td><td>하나의 객체가 이벤트에 따라 <strong>상태가 어떻게 변하는지</strong> 표현</td></tr>
            <tr><td><strong>활동 (Activity)</strong></td><td>시스템의 처리 흐름(로직)을 순서도처럼 <strong>활동 단위</strong>로 표현</td></tr>
            <tr><td><strong>타이밍 (Timing)</strong></td><td>객체의 상태 변화를 <strong>시간 제약(시각)</strong>과 함께 명시적으로 표현</td></tr>
            <tr><td><strong>상호작용 개요 (Interaction Overview)</strong></td><td>여러 상호작용 다이어그램 사이의 제어 흐름을 활동 다이어그램처럼 표현</td></tr>
          </table>

          <h3>6-2. 유스케이스 다이어그램 구성 요소</h3>
          <table>
            <tr><th>구성 요소</th><th>표기</th><th>설명</th></tr>
            <tr><td><strong>시스템 (System)</strong></td><td>사각형 경계</td><td>만들려는 시스템의 범위. 유스케이스들을 감싼다</td></tr>
            <tr><td><strong>액터 (Actor)</strong></td><td>막대 인형 (사람) / «actor» 상자</td><td>시스템과 상호작용하는 사람 또는 외부 시스템</td></tr>
            <tr><td><strong>유스케이스 (Use Case)</strong></td><td>타원</td><td>시스템이 제공하는 기능(서비스) 단위</td></tr>
            <tr><td><strong>포함 관계</strong></td><td>점선 화살표 + <code>«include»</code></td><td>실행하려면 다른 유스케이스가 <strong>반드시</strong> 먼저/함께 실행됨. 화살표는 <strong>포함되는(필수) 기능 쪽</strong>으로</td></tr>
            <tr><td><strong>확장 관계</strong></td><td>점선 화살표 + <code>«extend»</code></td><td><strong>특정 조건에서만 선택적으로</strong> 실행되는 기능. 화살표는 <strong>확장 대상(기본 기능) 쪽</strong>으로</td></tr>
            <tr><td><strong>일반화 관계</strong></td><td>실선 + 빈 삼각형</td><td>액터나 유스케이스의 상속(추상화) 관계</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 340" role="img" aria-label="온라인 쇼핑 시스템 유스케이스 다이어그램 예시 도면">
              {/* 시스템 경계 */}
              <rect class="box" x="280" y="30" width="460" height="290" />
              <text x="510" y="56" text-anchor="middle" class="strong">온라인 쇼핑 시스템</text>

              {/* 액터: 고객 */}
              <circle class="uml-hollow" cx="130" cy="120" r="16" />
              <line class="stick" x1="130" y1="136" x2="130" y2="185" />
              <line class="stick" x1="100" y1="152" x2="160" y2="152" />
              <line class="stick" x1="130" y1="185" x2="106" y2="220" />
              <line class="stick" x1="130" y1="185" x2="154" y2="220" />
              <text x="130" y="248" text-anchor="middle" class="small strong">고객 (액터)</text>

              {/* 유스케이스 타원 */}
              <ellipse class="box" cx="430" cy="120" rx="95" ry="32" />
              <text x="430" y="126" text-anchor="middle" class="small">상품 주문</text>
              <ellipse class="boxdark" cx="430" cy="245" rx="95" ry="32" />
              <text x="430" y="251" text-anchor="middle" class="small">결제</text>
              <ellipse class="box" cx="640" cy="150" rx="85" ry="30" />
              <text x="640" y="156" text-anchor="middle" class="small">쿠폰 적용</text>

              {/* 액터-유스케이스 연관 */}
              <line class="rel" x1="162" y1="140" x2="335" y2="122" />

              {/* include: 상품 주문 → 결제 */}
              <line class="rel dash" x1="430" y1="152" x2="430" y2="207" marker-end="url(#ah)" />
              <text x="452" y="185" class="small">«include»</text>

              {/* extend: 쿠폰 적용 → 결제 */}
              <line class="rel dash" x1="600" y1="177" x2="497" y2="222" marker-end="url(#ah)" />
              <text x="580" y="215" class="small">«extend»</text>

              <text x="640" y="300" text-anchor="middle" class="small">주문에는 결제가 필수(«include»), 쿠폰은 있을 때만(«extend»)</text>
            </svg>
            <figcaption>도면 5. 유스케이스 다이어그램 예시 — «include» 화살표는 필수 기능 쪽으로, «extend» 화살표는 기본 기능 쪽으로 향한다.</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <strong>«include» vs «extend»</strong> 구분 기준은 "반드시 실행되는가".
            <strong>항상 함께 실행되면 포함(«include»)</strong>,
            <strong>특정 조건에서만 선택적으로 실행되면 확장(«extend»)</strong>이다.
            화살표 방향도 반대라는 점(포함: 기본 → 필수 기능, 확장: 부가 기능 → 기본)에 주의하자.
          </div>

          <h3>6-3. 시퀀스 다이어그램 구성 요소</h3>
          <table>
            <tr><th>구성 요소</th><th>표기</th><th>설명</th></tr>
            <tr><td><strong>액터 (Actor)</strong></td><td>막대 인형</td><td>상호작용을 시작하는 사용자·외부 시스템</td></tr>
            <tr><td><strong>객체 (Object)</strong></td><td>상자 안에 <code>객체명 : 클래스명</code> (밑줄)</td><td>메시지를 주고받는 참여자</td></tr>
            <tr><td><strong>생명선 (Lifeline)</strong></td><td>객체 아래로 내려가는 <strong>점선</strong></td><td>객체가 존재하는 시간의 흐름 (위 → 아래)</td></tr>
            <tr><td><strong>활성 상자 (Activation Box)</strong></td><td>생명선 위의 <strong>가늘고 긴 직사각형</strong></td><td>객체가 실제로 연산을 수행(활성화)하는 구간</td></tr>
            <tr><td><strong>메시지 (Message)</strong></td><td>실선 화살표 (응답·반환은 점선)</td><td>객체 간 주고받는 요청과 응답</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 360" role="img" aria-label="주문 처리 시퀀스 다이어그램 애니메이션 도면">
              {/* 참여자 헤더 */}
              <circle class="uml-hollow" cx="140" cy="38" r="11" />
              <line class="stick" x1="140" y1="49" x2="140" y2="72" />
              <line class="stick" x1="122" y1="58" x2="158" y2="58" />
              <line class="stick" x1="140" y1="72" x2="127" y2="88" />
              <line class="stick" x1="140" y1="72" x2="153" y2="88" />
              <text x="200" y="66" class="small strong">고객 (액터)</text>
              <rect class="box" x="380" y="30" width="140" height="40" />
              <text x="450" y="56" text-anchor="middle" class="small strong">: 주문 화면</text>
              <rect class="box" x="690" y="30" width="140" height="40" />
              <text x="760" y="56" text-anchor="middle" class="small strong">: 주문 서버</text>

              {/* 생명선 */}
              <line class="life" x1="140" y1="92" x2="140" y2="330" />
              <line class="life" x1="450" y1="70" x2="450" y2="330" />
              <line class="life" x1="760" y1="70" x2="760" y2="330" />

              {/* 활성 상자 */}
              <rect class="boxsoft" x="444" y="104" width="12" height="186" />
              <rect class="boxsoft" x="754" y="154" width="12" height="86" />

              {/* 메시지 */}
              <g class="msg" data-step="1">
                <line class="arrow" x1="140" y1="110" x2="438" y2="110" />
                <text x="290" y="100" text-anchor="middle" class="small">1. 주문 요청</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="456" y1="160" x2="748" y2="160" />
                <text x="600" y="150" text-anchor="middle" class="small">2. 결제 처리 요청</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="748" y1="230" x2="456" y2="230" />
                <text x="600" y="220" text-anchor="middle" class="small">3. 처리 결과 반환 (점선 = 응답)</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="438" y1="280" x2="146" y2="280" />
                <text x="290" y="270" text-anchor="middle" class="small">4. 주문 완료 표시</text>
              </g>
              <text x="450" y="350" text-anchor="middle" class="small">세로 점선 = 생명선, 생명선 위의 가는 직사각형 = 활성 상자</text>
            </svg>
            <figcaption>도면 6. 시퀀스 다이어그램 예시 — 시간은 위에서 아래로 흐르고, 요청은 실선·응답은 점선 화살표로 그린다.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            시퀀스 다이어그램의 5대 구성 요소 <strong>액터 · 객체 · 생명선 · 활성 상자 · 메시지</strong>는
            괄호 채우기로 그대로 출제된다. 특히 <strong>"객체가 존재하는 기간을 나타내는 점선" = 생명선(Lifeline)</strong>,
            <strong>"연산이 실행되는 구간의 직사각형" = 활성 상자</strong>를 짝지어 두자.
          </div>
        </section>

        {/* ================================================================ 7. 실전 문제 */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">설명을 읽고 용어를 직접 쓰는 실기 방식 그대로 연습한다. 먼저 답을 적어 본 뒤 "정답 보기"를 열자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">UML(Unified Modeling Language)을 구성하는 3가지 기본 구성 요소를 모두 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>사물(Things), 관계(Relationships), 다이어그램(Diagrams)<br/>
                <span class="label">해설: </span>UML은 모델의 기본 요소인 사물, 사물 간의 연관성인 관계, 이를 그림으로 표현한 다이어그램으로 구성된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 UML 관계의 명칭을 쓰시오.</p>
            <pre>{`전체와 부분의 관계를 나타내며, 부분(포함되는 쪽)이 전체와
독립적으로 존재할 수 있다. 전체 쪽에 속이 빈 마름모로 표기한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>집합 관계 (Aggregation)<br/>
                <span class="label">해설: </span>부분이 독립 가능하면 집합(빈 마름모), 전체가 소멸할 때 부분도 함께 소멸하면 복합(채운 마름모)이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 UML 관계의 명칭을 쓰시오.</p>
            <pre>{`인터페이스와 같이 기능(오퍼레이션)을 정의만 해 둔 사물과,
그 기능을 실제로 구현(수행)하는 사물 사이의 관계이다.
점선과 속이 빈 삼각형 화살표로 표기한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>실체화 관계 (Realization)<br/>
                <span class="label">해설: </span>점선+빈 삼각형은 실체화, 실선+빈 삼각형은 일반화(상속)다. 선의 종류로 두 관계를 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 UML 다이어그램의 이름을 쓰고, 구조적(정적) 다이어그램과 행위(동적) 다이어그램 중 어느 쪽에 속하는지 쓰시오.</p>
            <pre>{`객체들이 주고받는 메시지를 시간의 흐름(순서)에 따라 표현하는
다이어그램으로, 생명선과 활성 상자, 메시지 화살표로 구성된다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>시퀀스 다이어그램 (Sequence Diagram), 행위(동적) 다이어그램<br/>
                <span class="label">해설: </span>"시간의 흐름·순서"가 핵심 키워드다. 메시지에 더해 객체 간 연결 구조까지 강조하면 커뮤니케이션 다이어그램이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">유스케이스 다이어그램의 관계에 대한 다음 설명에서 괄호 ①, ②에 들어갈 스테레오타입을 각각 쓰시오.</p>
            <pre>{`· ( ① ) 관계 : 하나의 유스케이스가 실행되기 위해 다른 유스케이스가
  반드시 실행되어야 하는 관계
· ( ② ) 관계 : 특정 조건이 만족될 때만 선택적으로 다른 유스케이스가
  실행되는 관계`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① «include» (포함), ② «extend» (확장)<br/>
                <span class="label">해설: </span>"반드시"면 포함, "조건부·선택적"이면 확장이다. 화살표 방향은 포함이 필수 기능 쪽, 확장이 기본 기능 쪽으로 반대다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 설명에 해당하는 UI 설계 도구의 명칭을 쓰시오.</p>
            <pre>{`와이어프레임보다 좀 더 실제 화면과 유사하게 만든 정적인 형태의
모형으로, 시각적으로만 구성되며 실제로 기능이 동작하지는 않는다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>목업 (Mockup)<br/>
                <span class="label">해설: </span>"정적", "기능 동작 없음"이 목업의 키워드다. 인터랙션이 가능한 동적 모형이라면 프로토타입이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명에 해당하는 UI 설계 도구의 명칭을 쓰시오.</p>
            <pre>{`와이어프레임에 콘텐츠에 대한 설명, 페이지 간의 이동 흐름 등을
추가한 문서로, 디자이너와 개발자가 최종적으로 참고하는 작업
지침서 역할을 한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>스토리보드 (Storyboard)<br/>
                <span class="label">해설: </span>"와이어프레임 + 설명 + 이동 흐름 = 스토리보드"로 기억한다. 뼈대만 있으면 와이어프레임이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 보기에서 구조적(정적) 다이어그램에 해당하는 것을 모두 골라 기호로 쓰시오.</p>
            <pre>{`㉠ 클래스 다이어그램     ㉡ 활동 다이어그램     ㉢ 배치 다이어그램
㉣ 시퀀스 다이어그램     ㉤ 패키지 다이어그램   ㉥ 상태 다이어그램`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠, ㉢, ㉤<br/>
                <span class="label">해설: </span>구조적 6종은 클래스·객체·컴포넌트·배치·패키지·복합체 구조다. 활동·시퀀스·상태는 시간에 따른 동작을 그리는 행위(동적) 다이어그램이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">시퀀스 다이어그램에 대한 다음 설명에서 괄호 ①, ②에 들어갈 구성 요소의 명칭을 각각 쓰시오.</p>
            <pre>{`· ( ① ) : 객체 아래로 이어지는 세로 점선으로, 객체가 존재하는
  시간의 흐름을 나타낸다.
· ( ② ) : ( ① ) 위에 그리는 가늘고 긴 직사각형으로, 객체가
  실제로 연산을 수행하고 있는 구간을 나타낸다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 생명선(Lifeline), ② 활성 상자(Activation Box, 활성 구간)<br/>
                <span class="label">해설: </span>시퀀스 다이어그램의 구성 요소는 액터·객체·생명선·활성 상자·메시지 5가지다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">클래스 다이어그램에서 속성과 연산 앞에 붙는 접근제어자(가시성) 기호에 대한 다음 표의 괄호 ①, ②를 채우시오.</p>
            <pre>{`+  : public   — 어디서나 접근 가능
-  : ( ① )   — 해당 클래스 내부에서만 접근 가능
#  : ( ② )   — 동일 클래스와 상속받은 자식 클래스에서만 접근 가능
~  : package  — 동일 패키지 안에서만 접근 가능`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① private, ② protected<br/>
                <span class="label">해설: </span>+ public / - private / # protected / ~ package. 특히 #(protected)는 "상속 관계까지 허용"이라는 설명과 함께 자주 출제된다.
              </div>
            </details>
          </div>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">UX (사용자 경험)</span>
            <span class="kw">감성공학</span>
            <span class="kw">페르소나</span>
            <span class="kw">UI 품질 요구사항 (ISO/IEC 9126)</span>
            <span class="kw">사용성 평가 · 휴리스틱 평가</span>
            <span class="kw">유스케이스 명세서</span>
            <span class="kw">럼바우 분석 기법 (객체·동적·기능 모델링)</span>
            <span class="kw">OMG</span>
            <span class="kw">액터 일반화</span>
            <span class="kw">커뮤니케이션 다이어그램</span>
            <span class="kw">타이밍 다이어그램</span>
            <span class="kw">패키지 다이어그램 의존 표기</span>
          </p>
        </section>

        <footer>UI 설계와 UML 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
