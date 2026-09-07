import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './module-impl.css'

export default defineComponent({
  name: 'ModuleImplPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>모듈 구현 · 모듈 테스트</h1>
          <p>정보처리기사 실기 대비 학습 문서. 모듈화 개요 → 응집도 7단계 → 결합도 6단계 →
          팬인/팬아웃 → 공통 모듈 → 모듈 구현 기법 → 모듈(단위) 테스트와 테스트 커버리지 순서로,
          실기 최최단골인 응집도·결합도의 <strong>순서와 정의</strong>를 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 품질 방향·호출 흐름의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>모듈화 개요</a></li>
            <li><a href="#cohesion" onClick={(e) => scrollToId(e, 'cohesion')}>응집도(Cohesion) 7단계</a></li>
            <li><a href="#coupling" onClick={(e) => scrollToId(e, 'coupling')}>결합도(Coupling) 6단계</a></li>
            <li><a href="#fan" onClick={(e) => scrollToId(e, 'fan')}>팬인(Fan-In) · 팬아웃(Fan-Out)</a></li>
            <li><a href="#common" onClick={(e) => scrollToId(e, 'common')}>공통 모듈 — 명세 원칙과 재사용 수준</a></li>
            <li><a href="#impl" onClick={(e) => scrollToId(e, 'impl')}>모듈 구현 기법</a></li>
            <li><a href="#unittest" onClick={(e) => scrollToId(e, 'unittest')}>모듈 테스트(단위 테스트)와 커버리지</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 모듈화 개요 ===================== */}
        <section id="overview">
          <h2>1. 모듈화 개요</h2>
          <p class="sub">소프트웨어를 기능 단위로 잘게 나누는 것이 모듈화다. "좋은 설계 = 응집도는 높게, 결합도는 낮게"는 실기 최단골 문장이다.</p>

          <h3>1-1. 모듈(Module)이란</h3>
          <p><strong>모듈</strong>은 소프트웨어를 기능 단위로 분해한 <strong>독립적인 부분</strong>으로,
          이름을 가지며 독립적으로 컴파일할 수 있고 다른 프로그램에서 <strong>재사용</strong>할 수 있는 단위다.
          서브루틴, 함수, 서브시스템, 작업 단위 등이 모두 모듈이 될 수 있다.
          모듈로 나누는 작업 전체를 <strong>모듈화(Modularity)</strong>라고 한다.</p>

          <h3>1-2. 모듈 vs 컴포넌트</h3>
          <table>
            <tr><th>구분</th><th>모듈(Module)</th><th>컴포넌트(Component)</th></tr>
            <tr>
              <td><strong>관점</strong></td>
              <td>설계·구현 시점의 <strong>소스 코드 분해 단위</strong></td>
              <td>배포·실행 시점의 <strong>독립적인 실행(배포) 단위</strong></td>
            </tr>
            <tr>
              <td><strong>크기</strong></td>
              <td>상대적으로 작은 단위(함수, 클래스 등)</td>
              <td>모듈보다 큰 단위. 하나 이상의 모듈이 모여 구성</td>
            </tr>
            <tr>
              <td><strong>사용 방식</strong></td>
              <td>다른 모듈이 소스 수준에서 호출·포함</td>
              <td>내부를 몰라도 <strong>인터페이스(API)</strong>를 통해 서비스 이용</td>
            </tr>
          </table>

          <h3>1-3. 모듈화의 장점</h3>
          <ul>
            <li>프로그램의 <strong>복잡도 감소</strong> — 이해하기 쉬워진다.</li>
            <li>모듈 <strong>재사용</strong> 가능 — 개발 비용·기간 단축.</li>
            <li><strong>유지보수 용이</strong> — 수정 범위가 모듈 안으로 한정된다.</li>
            <li>오류의 <strong>파급 효과 최소화</strong> — 한 모듈의 결함이 다른 모듈로 번지지 않게 한다.</li>
            <li>기능 분리로 <strong>병렬 개발</strong>·분업이 가능하고, 테스트와 통합이 쉬워진다.</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            좋은 모듈 설계의 대원칙 — <strong>응집도(Cohesion)는 높게, 결합도(Coupling)는 낮게</strong>.
            모듈의 <strong>독립성</strong>을 높이는 방향이며, 독립성이 높을수록 재사용·유지보수·테스트가 쉬워진다.
            "응집도는 낮게, 결합도는 높게"로 뒤집은 보기는 무조건 오답이다.
          </div>
        </section>

        {/* ===================== 2. 응집도 7단계 ===================== */}
        <section id="cohesion">
          <h2>2. 응집도(Cohesion) 7단계</h2>
          <p class="sub">응집도는 모듈 내부 요소들이 서로 얼마나 관련되어 있는지의 정도다. 낮음→높음 순서와 각 단계의 정의는 실기 최최단골 — 통째로 암기한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 185">
              <rect class="boxsoft" x="20" y="30" width="115" height="48"/>
              <text x="77.5" y="50" text-anchor="middle" class="strong">우연적</text>
              <text x="77.5" y="68" text-anchor="middle" class="small">Coincidental</text>
              <rect class="box" x="144" y="30" width="115" height="48"/>
              <text x="201.5" y="50" text-anchor="middle" class="strong">논리적</text>
              <text x="201.5" y="68" text-anchor="middle" class="small">Logical</text>
              <rect class="box" x="268" y="30" width="115" height="48"/>
              <text x="325.5" y="50" text-anchor="middle" class="strong">시간적</text>
              <text x="325.5" y="68" text-anchor="middle" class="small">Temporal</text>
              <rect class="box" x="392" y="30" width="115" height="48"/>
              <text x="449.5" y="50" text-anchor="middle" class="strong">절차적</text>
              <text x="449.5" y="68" text-anchor="middle" class="small">Procedural</text>
              <rect class="box" x="516" y="30" width="115" height="48"/>
              <text x="573.5" y="50" text-anchor="middle" class="strong">통신적</text>
              <text x="573.5" y="68" text-anchor="middle" class="small">Communication</text>
              <rect class="box" x="640" y="30" width="115" height="48"/>
              <text x="697.5" y="50" text-anchor="middle" class="strong">순차적</text>
              <text x="697.5" y="68" text-anchor="middle" class="small">Sequential</text>
              <rect class="boxdark" x="764" y="30" width="115" height="48"/>
              <text x="821.5" y="50" text-anchor="middle" class="strong">기능적</text>
              <text x="821.5" y="68" text-anchor="middle" class="small">Functional</text>
              <g class="msg" data-step="1">
                <line class="arrow" x1="30" y1="118" x2="860" y2="118"/>
                <text x="445" y="108" text-anchor="middle" class="small">응집도가 높아지는 방향</text>
              </g>
              <text x="30" y="148" class="small">낮음 · 품질 나쁨 (우연적)</text>
              <text x="860" y="148" text-anchor="end" class="small">높음 · 품질 좋음 (기능적)</text>
            </svg>
            <figcaption>도면 1. 응집도 스펙트럼 — 낮음(우연적)에서 높음(기능적)으로 갈수록 좋은 모듈</figcaption>
          </figure>

          <h3>2-1. 7단계 정의 (낮음 → 높음)</h3>
          <table>
            <tr><th>순서</th><th>응집도</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td>1 (최저)</td><td><strong>우연적 응집도</strong></td><td>Coincidental</td>
              <td>모듈 내부의 구성 요소들이 <strong>서로 아무 관련 없이</strong> 우연히 모여 있는 경우</td>
            </tr>
            <tr>
              <td>2</td><td><strong>논리적 응집도</strong></td><td>Logical</td>
              <td><strong>유사한 성격</strong>을 갖거나 특정 형태로 분류되는 처리 요소들이 하나의 모듈에 모인 경우
              (예: 모든 종류의 출력 처리를 한 모듈에)</td>
            </tr>
            <tr>
              <td>3</td><td><strong>시간적 응집도</strong></td><td>Temporal</td>
              <td><strong>특정 시간(같은 시점)</strong>에 처리되어야 하는 여러 기능을 한 모듈에 모은 경우
              (예: 초기화 모듈, 종료 처리 모듈)</td>
            </tr>
            <tr>
              <td>4</td><td><strong>절차적 응집도</strong></td><td>Procedural</td>
              <td>모듈 안의 구성 요소들이 그 모듈의 기능을 <strong>순차적으로 수행</strong>하지만,
              데이터를 주고받지는 않는 경우</td>
            </tr>
            <tr>
              <td>5</td><td><strong>통신적(교환적) 응집도</strong></td><td>Communication</td>
              <td><strong>동일한 입력과 출력(같은 데이터)</strong>을 사용하는 소단위 작업들이 모인 경우</td>
            </tr>
            <tr>
              <td>6</td><td><strong>순차적 응집도</strong></td><td>Sequential</td>
              <td>한 활동(요소)의 <strong>출력이 다음 활동의 입력</strong>으로 사용되는 경우</td>
            </tr>
            <tr>
              <td>7 (최고)</td><td><strong>기능적 응집도</strong></td><td>Functional</td>
              <td>모듈 내부의 <strong>모든 요소가 단일 기능(하나의 문제)</strong>을 수행하기 위해 구성된 경우
              — 가장 바람직한 응집도</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">암기법</span><br/>
            낮음 → 높음: <strong>"우 · 논 · 시 · 절 · 통 · 순 · 기"</strong>
            (<strong>우</strong>연적 → <strong>논</strong>리적 → <strong>시</strong>간적 → <strong>절</strong>차적 →
            <strong>통</strong>신적 → <strong>순</strong>차적 → <strong>기</strong>능적).
            "우리 논에서 시절 좋게 통째로 순서대로 기능한다"처럼 문장으로 외워도 좋다.
          </div>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            절차적과 순차적을 혼동하기 쉽다. <strong>데이터가 이어지면 순차적</strong>(출력→입력),
            <strong>순서만 이어지고 데이터 전달이 없으면 절차적</strong>이다.
            통신적은 "순서와 무관하게 <strong>같은 데이터</strong>를 쓰는" 경우다.
          </div>
        </section>

        {/* ===================== 3. 결합도 6단계 ===================== */}
        <section id="coupling">
          <h2>3. 결합도(Coupling) 6단계</h2>
          <p class="sub">결합도는 모듈과 모듈 사이의 상호 의존 정도다. 응집도와 반대로 낮을수록 좋다. 결합도는 7가지가 아니라 6가지임에 주의 — 순서와 정의가 실기 최최단골이다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 185">
              <rect class="boxdark" x="20" y="30" width="130" height="48"/>
              <text x="85" y="50" text-anchor="middle" class="strong">자료</text>
              <text x="85" y="68" text-anchor="middle" class="small">Data</text>
              <rect class="box" x="165" y="30" width="130" height="48"/>
              <text x="230" y="50" text-anchor="middle" class="strong">스탬프</text>
              <text x="230" y="68" text-anchor="middle" class="small">Stamp</text>
              <rect class="box" x="310" y="30" width="130" height="48"/>
              <text x="375" y="50" text-anchor="middle" class="strong">제어</text>
              <text x="375" y="68" text-anchor="middle" class="small">Control</text>
              <rect class="box" x="455" y="30" width="130" height="48"/>
              <text x="520" y="50" text-anchor="middle" class="strong">외부</text>
              <text x="520" y="68" text-anchor="middle" class="small">External</text>
              <rect class="box" x="600" y="30" width="130" height="48"/>
              <text x="665" y="50" text-anchor="middle" class="strong">공통</text>
              <text x="665" y="68" text-anchor="middle" class="small">Common</text>
              <rect class="boxsoft" x="745" y="30" width="130" height="48"/>
              <text x="810" y="50" text-anchor="middle" class="strong">내용</text>
              <text x="810" y="68" text-anchor="middle" class="small">Content</text>
              <g class="msg" data-step="1">
                <line class="arrow" x1="30" y1="118" x2="860" y2="118"/>
                <text x="445" y="108" text-anchor="middle" class="small">결합도가 높아지는 방향</text>
              </g>
              <text x="30" y="148" class="small">낮음 · 품질 좋음 (자료)</text>
              <text x="860" y="148" text-anchor="end" class="small">높음 · 품질 나쁨 (내용)</text>
            </svg>
            <figcaption>도면 2. 결합도 스펙트럼 — 낮음(자료)에서 높음(내용)으로 갈수록 나쁜 결합</figcaption>
          </figure>

          <h3>3-1. 6단계 정의 (낮음 → 높음)</h3>
          <table>
            <tr><th>순서</th><th>결합도</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td>1 (최저·최선)</td><td><strong>자료 결합도</strong></td><td>Data</td>
              <td>모듈 간 인터페이스가 <strong>단순한 자료 요소(값, 매개변수)</strong>로만 구성된 경우 — 가장 바람직</td>
            </tr>
            <tr>
              <td>2</td><td><strong>스탬프 결합도</strong></td><td>Stamp</td>
              <td><strong>배열·레코드 같은 자료 구조</strong>가 모듈 간에 통째로 전달되는 경우
              (일부 필드만 필요해도 구조 전체를 전달)</td>
            </tr>
            <tr>
              <td>3</td><td><strong>제어 결합도</strong></td><td>Control</td>
              <td>처리 방법을 지시하는 <strong>제어 신호(플래그, 스위치)</strong>를 전달하는 경우.
              하위 모듈이 상위 모듈의 처리를 지시하는 <strong>권리 전도 현상</strong>이 발생할 수 있다</td>
            </tr>
            <tr>
              <td>4</td><td><strong>외부 결합도</strong></td><td>External</td>
              <td>어떤 모듈이 <strong>외부의 다른 모듈에서 선언한 데이터(변수)</strong>를 참조하는 경우
              (통신 프로토콜, 외부 장치 인터페이스 공유 등)</td>
            </tr>
            <tr>
              <td>5</td><td><strong>공통 결합도</strong></td><td>Common</td>
              <td>여러 모듈이 <strong>공통 데이터 영역(전역 변수)</strong>을 함께 사용하는 경우.
              전역 변수 변경이 모든 모듈에 파급된다</td>
            </tr>
            <tr>
              <td>6 (최고·최악)</td><td><strong>내용 결합도</strong></td><td>Content</td>
              <td>한 모듈이 <strong>다른 모듈 내부의 기능·자료를 직접 참조하거나 수정</strong>하는 경우 — 가장 나쁨</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">암기법</span><br/>
            낮음 → 높음: <strong>"자 · 스 · 제 · 외 · 공 · 내"</strong>
            (<strong>자</strong>료 → <strong>스</strong>탬프 → <strong>제</strong>어 → <strong>외</strong>부 →
            <strong>공</strong>통 → <strong>내</strong>용).
            응집도는 높을수록 좋고 <strong>결합도는 낮을수록 좋으므로</strong>,
            "가장 결합도가 낮은(좋은) 것"을 고르라면 <strong>자료 결합도</strong>다.
          </div>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            외부 결합도와 공통 결합도의 구분 — <strong>전역 변수(공통 데이터 영역) 공유는 공통 결합도</strong>,
            다른 모듈에서 선언한 데이터·프로토콜을 참조하는 것은 외부 결합도다.
            또한 "값이냐 구조냐"로 자료(값)와 스탬프(자료 구조)를 구분한다.
          </div>
        </section>

        {/* ===================== 4. 팬인 / 팬아웃 ===================== */}
        <section id="fan">
          <h2>4. 팬인(Fan-In) · 팬아웃(Fan-Out)</h2>
          <p class="sub">모듈 구조도에서 어떤 모듈을 기준으로 위에서 들어오는 화살표 수가 팬인, 아래로 나가는 화살표 수가 팬아웃이다. 두 용어의 구분이 실기 최단골이다.</p>

          <table>
            <tr><th>구분</th><th>정의</th><th>구조도에서 보는 법</th></tr>
            <tr>
              <td><strong>팬인 (Fan-In)</strong></td>
              <td><strong>자신을 호출하는</strong> 상위 모듈의 수 (제어받는 정도)</td>
              <td>기준 모듈 <strong>위쪽</strong>에서 들어오는 화살표 개수</td>
            </tr>
            <tr>
              <td><strong>팬아웃 (Fan-Out)</strong></td>
              <td><strong>자신이 호출하는</strong> 하위 모듈의 수 (제어하는 정도)</td>
              <td>기준 모듈 <strong>아래쪽</strong>으로 나가는 화살표 개수</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330">
              <text x="880" y="28" text-anchor="end" class="small">Fan-In = 위에서 들어오는 화살표 수</text>
              <text x="880" y="46" text-anchor="end" class="small">Fan-Out = 아래로 나가는 화살표 수</text>
              <rect class="box" x="405" y="20" width="90" height="40"/>
              <text x="450" y="45" text-anchor="middle" class="strong">A</text>
              <rect class="box" x="150" y="130" width="90" height="40"/>
              <text x="195" y="155" text-anchor="middle" class="strong">B</text>
              <rect class="box" x="405" y="130" width="90" height="40"/>
              <text x="450" y="155" text-anchor="middle" class="strong">C</text>
              <rect class="box" x="660" y="130" width="90" height="40"/>
              <text x="705" y="155" text-anchor="middle" class="strong">D</text>
              <rect class="box" x="100" y="240" width="90" height="40"/>
              <text x="145" y="265" text-anchor="middle" class="strong">E</text>
              <rect class="boxdark" x="285" y="240" width="90" height="40"/>
              <text x="330" y="265" text-anchor="middle" class="strong">F</text>
              <rect class="box" x="535" y="240" width="90" height="40"/>
              <text x="580" y="265" text-anchor="middle" class="strong">G</text>
              <line class="arrow" x1="450" y1="60" x2="195" y2="130"/>
              <line class="arrow" x1="450" y1="60" x2="450" y2="130"/>
              <line class="arrow" x1="450" y1="60" x2="705" y2="130"/>
              <line class="arrow" x1="195" y1="170" x2="145" y2="240"/>
              <line class="arrow" x1="450" y1="170" x2="580" y2="240"/>
              <line class="arrow" x1="705" y1="170" x2="580" y2="240"/>
              <g class="msg" data-step="1">
                <line class="arrow" x1="195" y1="170" x2="315" y2="240"/>
                <text x="200" y="212" text-anchor="end" class="small">① B가 F 호출</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="450" y1="170" x2="345" y2="240"/>
                <text x="412" y="225" text-anchor="start" class="small">② C가 F 호출</text>
              </g>
              <text x="450" y="312" text-anchor="middle" class="small">F의 Fan-In = 2 (B, C) · Fan-Out = 0 — 두 모듈이 F를 재사용하고 있다</text>
            </svg>
            <figcaption>도면 3. 모듈 구조도(A~G)에서 F의 팬인 계산 — 위에서 들어오는 호출이 2개</figcaption>
          </figure>

          <h3>4-1. 도면 3의 전체 계산 (검산)</h3>
          <p>도면 3의 호출 관계는 A→B, A→C, A→D, B→E, B→F, C→F, C→G, D→G 의 8개다.
          모든 모듈의 팬인 합(8)과 팬아웃 합(8)은 화살표 총수와 같아야 한다 — 이것이 검산 방법이다.</p>
          <table>
            <tr><th>모듈</th><th>Fan-In (호출받음)</th><th>Fan-Out (호출함)</th></tr>
            <tr><td><strong>A</strong></td><td>0</td><td>3 (B, C, D)</td></tr>
            <tr><td><strong>B</strong></td><td>1 (A)</td><td>2 (E, F)</td></tr>
            <tr><td><strong>C</strong></td><td>1 (A)</td><td>2 (F, G)</td></tr>
            <tr><td><strong>D</strong></td><td>1 (A)</td><td>1 (G)</td></tr>
            <tr><td><strong>E</strong></td><td>1 (B)</td><td>0</td></tr>
            <tr><td><strong>F</strong></td><td>2 (B, C)</td><td>0</td></tr>
            <tr><td><strong>G</strong></td><td>2 (C, D)</td><td>0</td></tr>
            <tr><td><strong>합계</strong></td><td><strong>8</strong></td><td><strong>8</strong> (화살표 총수와 일치)</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <strong>팬인이 높다</strong> = 여러 모듈이 그 모듈을 쓴다 = <strong>재사용성이 좋다</strong>는 신호.
            다만 그 모듈에 장애가 나면 파급이 크므로 <strong>단일 장애점(SPOF) 관리·중점 테스트</strong>가 필요하다.<br/>
            <strong>팬아웃이 높다</strong> = 한 모듈이 너무 많은 하위 모듈을 제어한다 =
            불필요한 호출이 없는지 <strong>모듈 단순화(분해·재설계)를 검토</strong>해야 한다.
            일반적으로 팬아웃은 적정 수준(예: 7 이하)으로 유지하는 것이 좋다.
          </div>
        </section>

        {/* ===================== 5. 공통 모듈 ===================== */}
        <section id="common">
          <h2>5. 공통 모듈 — 명세 원칙과 재사용 수준</h2>
          <p class="sub">공통 모듈은 여러 프로그램에서 재사용할 수 있도록 만든 모듈이다. 명세 원칙 5가지(정확성·명확성·완전성·일관성·추적성)와 재사용 수준 3가지가 단골이다.</p>

          <h3>5-1. 공통 모듈 명세 기법의 원칙 5가지 (단골)</h3>
          <table>
            <tr><th>원칙</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td><strong>정확성</strong></td><td>Correctness</td>
              <td>시스템 구현 시 해당 기능이 <strong>실제로 필요하다는 것을 알 수 있도록</strong> 정확히 작성</td>
            </tr>
            <tr>
              <td><strong>명확성</strong></td><td>Clarity</td>
              <td>해당 기능을 이해할 때 <strong>중의적으로 해석되지 않도록</strong> 명확하게 작성</td>
            </tr>
            <tr>
              <td><strong>완전성</strong></td><td>Completeness</td>
              <td>시스템 구현을 위해 <strong>필요한 모든 것</strong>을 빠짐없이 기술</td>
            </tr>
            <tr>
              <td><strong>일관성</strong></td><td>Consistency</td>
              <td>공통 기능들 간에 <strong>상호 충돌이 발생하지 않도록</strong> 작성</td>
            </tr>
            <tr>
              <td><strong>추적성</strong></td><td>Traceability</td>
              <td>기능에 대한 <strong>요구사항의 출처, 관련 시스템의 관계</strong>를 파악할 수 있도록 작성</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기법</span><br/>
            <strong>"정 · 명 · 완 · 일 · 추"</strong> — 정확성, 명확성, 완전성, 일관성, 추적성.
            "중의적 해석 금지 = 명확성", "출처 추적 = 추적성"처럼 정의의 키워드로 원칙 이름을 답하게 한다.
          </div>

          <h3>5-2. 재사용(Reuse) 수준 3가지 (단골)</h3>
          <table>
            <tr><th>수준</th><th>범위</th><th>설명</th></tr>
            <tr>
              <td><strong>함수와 객체</strong></td><td>가장 작은 단위</td>
              <td><strong>클래스·메서드·함수</strong> 수준의 코드를 재사용</td>
            </tr>
            <tr>
              <td><strong>컴포넌트</strong></td><td>중간 단위</td>
              <td>컴포넌트 자체를 수정하지 않고 <strong>인터페이스를 통해 통신</strong>하는 방식으로 재사용</td>
            </tr>
            <tr>
              <td><strong>애플리케이션</strong></td><td>가장 큰 단위</td>
              <td><strong>공통 업무를 처리하는 애플리케이션 전체</strong>를 공유·재사용</td>
            </tr>
          </table>
        </section>

        {/* ===================== 6. 모듈 구현 기법 ===================== */}
        <section id="impl">
          <h2>6. 모듈 구현 기법</h2>
          <p class="sub">모듈을 코드로 구현할 때 쓰는 대표 기법들이다. 루틴·매크로·인라인의 구분과 MVC 패턴의 세 구성 요소가 출제 포인트다.</p>

          <h3>6-1. 루틴 · 매크로 · 인라인</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr>
              <td><strong>루틴 (Routine)</strong></td>
              <td>특정 작업을 수행하는 <strong>프로그램 코드의 단위</strong>.
              프로그램 실행의 시작점이 되는 <strong>메인 루틴</strong>과,
              메인 루틴에서 호출되어 특정 기능을 수행하고 되돌아오는 <strong>서브루틴(Subroutine)</strong>으로 나뉜다</td>
            </tr>
            <tr>
              <td><strong>매크로 (Macro)</strong></td>
              <td>반복 사용되는 코드 조각에 이름을 붙여 두고, 컴파일(전처리) 시
              호출 위치에 <strong>코드를 그대로 치환(전개)</strong>하는 기법</td>
            </tr>
            <tr>
              <td><strong>인라인 (Inline)</strong></td>
              <td>함수 <strong>호출 오버헤드를 없애기 위해</strong> 호출 지점에 함수 본문 코드를 직접 삽입하도록
              컴파일러에 요청하는 기법 (예: C++의 inline 함수)</td>
            </tr>
          </table>

          <h3>6-2. MVC 패턴 (단골)</h3>
          <p>MVC는 애플리케이션을 세 부분으로 나누어 <strong>화면(표현)과 데이터(로직)를 분리</strong>하는 대표적인 아키텍처 패턴이다.</p>
          <table>
            <tr><th>구성 요소</th><th>역할</th></tr>
            <tr>
              <td><strong>Model (모델)</strong></td>
              <td>애플리케이션의 <strong>데이터와 비즈니스 로직</strong>을 담당. 상태가 바뀌면 View에 알린다</td>
            </tr>
            <tr>
              <td><strong>View (뷰)</strong></td>
              <td>사용자에게 보이는 <strong>화면(UI) 표시</strong>를 담당. Model의 데이터를 시각화한다</td>
            </tr>
            <tr>
              <td><strong>Controller (컨트롤러)</strong></td>
              <td><strong>사용자 입력을 받아 처리</strong>하고, Model과 View 사이의 흐름을 <strong>제어·연결</strong>한다</td>
            </tr>
          </table>
          <p>이 외에도 재사용 가능한 설계 해법을 정리한 <strong>디자인 패턴(GoF 패턴 — 생성·구조·행위)</strong>이
          모듈 구현에 널리 쓰인다. 디자인 패턴의 상세 분류는 별도 문서에서 다룬다.</p>
        </section>

        {/* ===================== 7. 모듈 테스트 ===================== */}
        <section id="unittest">
          <h2>7. 모듈 테스트(단위 테스트)와 커버리지</h2>
          <p class="sub">단위 테스트는 구현된 모듈 하나하나가 명세대로 동작하는지 검증하는 단계다. 테스트 케이스 구성 요소, xUnit, 그리고 커버리지 6종의 정의가 단골이다.</p>

          <h3>7-1. 단위 테스트(Unit Test) 개념</h3>
          <p><strong>단위 테스트</strong>는 개발자가 구현한 <strong>모듈·컴포넌트 단위</strong>의 기능이
          설계 명세대로 동작하는지 확인하는 테스트다. 개발 단계 중 가장 먼저 수행되며,
          내부 구조를 보는 <strong>화이트박스 테스트</strong>와 입출력만 보는 <strong>블랙박스 테스트</strong> 기법을 모두 사용할 수 있다.
          단위 테스트를 통과한 모듈들을 결합하며 검증하는 것이 통합 테스트다.</p>

          <h3>7-2. 테스트 케이스(Test Case) 구성 요소</h3>
          <p>테스트 케이스는 요구사항 준수 여부를 확인하기 위한 <strong>입력값, 실행 조건, 예상 결과</strong>의 집합이다.
          국제 표준(ISO/IEC/IEEE 29119 계열)이 제시하는 구성 요소는 다음과 같다.</p>
          <table>
            <tr><th>구성 요소</th><th>설명</th></tr>
            <tr><td><strong>식별자 (Identifier)</strong></td><td>테스트 케이스를 구분하는 항목 식별자·번호</td></tr>
            <tr><td><strong>테스트 항목 (Test Item)</strong></td><td>테스트할 대상 모듈·기능</td></tr>
            <tr><td><strong>입력 명세 (Input Specification)</strong></td><td>테스트에 사용할 입력값·조건</td></tr>
            <tr><td><strong>출력 명세 (Output Specification)</strong></td><td>입력에 대해 기대하는 <strong>예상 결과</strong></td></tr>
            <tr><td><strong>환경 설정 (Environmental Needs)</strong></td><td>테스트 수행에 필요한 하드웨어·소프트웨어 환경</td></tr>
            <tr><td><strong>특수 절차 요구 (Special Procedure Requirement)</strong></td><td>테스트 수행 전후에 필요한 특별한 절차</td></tr>
            <tr><td><strong>의존성 기술 (Inter-case Dependencies)</strong></td><td>다른 테스트 케이스와의 선후·의존 관계</td></tr>
          </table>

          <h3>7-3. 스텁과 드라이버 (간단 소개)</h3>
          <p>단위·통합 테스트 시 아직 완성되지 않은 모듈을 대신하는 <strong>테스트 하네스</strong> 도구다.</p>
          <ul>
            <li><strong>스텁(Stub)</strong> — 테스트 대상이 호출하는 <strong>하위 모듈을 대신</strong>하는 가짜 모듈. <strong>하향식</strong> 통합에서 사용.</li>
            <li><strong>드라이버(Driver)</strong> — 테스트 대상을 호출해 주는 <strong>상위 모듈을 대신</strong>하는 가짜 모듈. <strong>상향식</strong> 통합에서 사용.</li>
          </ul>
          <p>상세한 통합 전략(하향식·상향식·샌드위치)은 통합 테스트 문서에서 다룬다.</p>

          <h3>7-4. xUnit 테스트 프레임워크</h3>
          <p><strong>xUnit</strong>은 단위 테스트를 자동화하는 프레임워크 계열의 총칭이다.
          언어별로 <strong>JUnit(Java)</strong>, <strong>CppUnit(C++)</strong>, <strong>NUnit(.NET)</strong>,
          <strong>PHPUnit(PHP)</strong>, <strong>HttpUnit(웹)</strong> 등이 있다.
          테스트 케이스를 코드로 작성해 반복 실행하고, 결과를 자동으로 검증(assert)한다.</p>

          <h3>7-5. 테스트 커버리지 6종 (단골)</h3>
          <p>커버리지는 테스트가 소스 코드를 <strong>얼마나 충분히 실행했는지</strong>의 측정 지표다. 아래로 갈수록 강한(엄격한) 커버리지다.</p>
          <table>
            <tr><th>커버리지</th><th>정의</th></tr>
            <tr>
              <td><strong>구문(문장) 커버리지<br/>(Statement)</strong></td>
              <td>프로그램의 <strong>모든 문장(구문)</strong>이 최소 한 번 이상 수행되도록 하는 기준</td>
            </tr>
            <tr>
              <td><strong>결정(분기) 커버리지<br/>(Decision / Branch)</strong></td>
              <td>결정 포인트의 <strong>전체 조건식 결과가 참/거짓을 각각</strong> 최소 한 번 이상 갖도록 하는 기준</td>
            </tr>
            <tr>
              <td><strong>조건 커버리지<br/>(Condition)</strong></td>
              <td>전체 조건식의 결과와 관계없이 <strong>개별 조건식이 참/거짓을 각각</strong> 한 번 이상 갖도록 하는 기준</td>
            </tr>
            <tr>
              <td><strong>조건/결정 커버리지<br/>(Condition/Decision)</strong></td>
              <td><strong>전체 조건식의 참/거짓과 개별 조건식의 참/거짓을 모두</strong> 한 번 이상 만족하는 기준</td>
            </tr>
            <tr>
              <td><strong>변경 조건/결정 커버리지<br/>(MC/DC)</strong></td>
              <td>각 <strong>개별 조건식이 다른 조건식에 영향을 받지 않고 전체 조건식의 결과에
              독립적으로 영향</strong>을 주도록 하는 기준</td>
            </tr>
            <tr>
              <td><strong>다중 조건 커버리지<br/>(Multiple Condition)</strong></td>
              <td>개별 조건식의 <strong>모든 가능한 참/거짓 조합(100%)</strong>을 테스트하는 가장 강한 기준</td>
            </tr>
          </table>

          <h3>7-6. 커버리지 계산 간단 예시</h3>
          <pre>{`S1: read(x, y)
S2: if (x > 0 and y > 0) then
S3:     print("양수 쌍")
S4: end`}</pre>
          <ul>
            <li>테스트 케이스 <strong>TC1 (x=1, y=1)</strong> 하나만 실행하면 → 조건식이 참이 되어 S1~S4 모든 문장이 실행된다.
            <strong>구문 커버리지 100%</strong>. 그러나 전체 조건식은 참만 나왔으므로 <strong>결정 커버리지 50%</strong>.</li>
            <li><strong>TC2 (x=-1, y=1)</strong>을 추가하면 → 전체 조건식이 거짓도 한 번 나오므로 <strong>결정 커버리지 100%</strong>.</li>
            <li>이때 개별 조건식을 보면 x{'>'}0은 참(TC1)·거짓(TC2)을 모두 가졌지만, y{'>'}0은 두 케이스 모두 참이다.
            따라서 <strong>조건 커버리지는 아직 미충족</strong> — y{'>'}0이 거짓이 되는 케이스(예: x=1, y=-1)가 더 필요하다.</li>
          </ul>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "구문 100%라고 결정 100%가 아니고, 결정 100%라고 조건 100%가 아니다."
            커버리지 계산 문제는 <strong>어떤 값이 실행되었는지 표로 그려 확인</strong>하면 실수를 줄일 수 있다.
          </div>
        </section>

        {/* ===================== 8. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">응집도·결합도 용어 쓰기, 순서 나열, 팬인/팬아웃 계산 등 실기 기출 유형 10문항. 답을 가리고 직접 써 본 뒤 정답을 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 응집도의 종류를 쓰시오.</p>
            <pre>{`모듈 내부의 모든 요소들이 단일 문제(하나의 기능)를 수행하기 위해
구성되어 있는 경우로, 가장 바람직한(가장 높은) 응집도이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>기능적 응집도 (Functional Cohesion)<br/>
                <span class="label">해설: </span>"단일 기능", "가장 높은/바람직한"이 나오면 기능적 응집도다.
                응집도 7단계 중 최상위 단계에 해당한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 응집도의 종류를 쓰시오.</p>
            <pre>{`특정 시간에 처리되어야 하는 몇 개의 기능을 하나의 모듈에 모아 놓은
경우로, 프로그램 초기화 모듈이나 종료 처리 모듈이 대표적인 예이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>시간적 응집도 (Temporal Cohesion)<br/>
                <span class="label">해설: </span>"특정 시간(같은 시점)", "초기화 모듈"이 결정적 키워드다.
                유사한 성격끼리 모으면 논리적, 같은 데이터를 쓰면 통신적 응집도로 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 결합도의 종류를 쓰시오.</p>
            <pre>{`여러 모듈이 공통 데이터 영역(전역 변수)을 함께 사용하는 경우로,
전역 변수의 변경이 이를 사용하는 모든 모듈에 영향을 미친다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>공통 결합도 (Common Coupling)<br/>
                <span class="label">해설: </span>"공통 데이터 영역", "전역 변수"가 키워드다.
                다른 모듈에서 선언한 데이터·프로토콜을 참조하는 외부 결합도와 혼동하지 않도록 주의한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 결합도의 종류를 쓰시오.</p>
            <pre>{`한 모듈이 다른 모듈 내부의 기능이나 자료를 직접 참조하거나 수정하는
경우로, 결합도 중 가장 높은(가장 나쁜) 결합도이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>내용 결합도 (Content Coupling)<br/>
                <span class="label">해설: </span>"다른 모듈 내부를 직접 참조·수정", "가장 나쁜 결합도"가 키워드다.
                자료 구조(배열·레코드)가 통째로 전달되면 스탬프 결합도, 플래그 전달은 제어 결합도다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 보기의 응집도를 낮은 것부터 높은 것 순서로 나열하시오.</p>
            <pre>{`보기: 기능적, 우연적, 시간적, 논리적, 절차적, 순차적, 통신적`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>우연적 → 논리적 → 시간적 → 절차적 → 통신적 → 순차적 → 기능적<br/>
                <span class="label">해설: </span>암기법 "우논시절통순기". 응집도는 높을수록 좋으므로
                맨 끝의 기능적 응집도가 가장 바람직하다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 모듈 호출 관계에서 모듈 F의 팬인(Fan-In)과 팬아웃(Fan-Out)을 각각 구하시오.</p>
            <pre>{`호출 관계 (화살표는 왼쪽 모듈이 오른쪽 모듈을 호출한다는 뜻)
A → B, C, D
B → F
C → F, G
D → F, G`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Fan-In = 3, Fan-Out = 0<br/>
                <span class="label">해설: </span>F를 호출하는 모듈은 B, C, D의 3개이므로 Fan-In = 3이고,
                F가 호출하는 모듈은 없으므로 Fan-Out = 0이다.
                검산: 전체 화살표 수는 3(A)+1(B)+2(C)+2(D) = 8개이고,
                팬인 합도 B(1)+C(1)+D(1)+F(3)+G(2) = 8로 일치한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">공통 모듈 명세 기법의 원칙에 대한 설명이다. 괄호 ①, ②에 들어갈 원칙의 이름을 쓰시오.</p>
            <pre>{`( ① ) : 해당 기능을 이해할 때 중의적으로 해석되지 않도록 작성하는 원칙
( ② ) : 기능에 대한 요구사항의 출처와 관련 시스템의 관계를 파악할 수
         있도록 작성하는 원칙`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 명확성(Clarity), ② 추적성(Traceability)<br/>
                <span class="label">해설: </span>명세 원칙 5가지는 정확성·명확성·완전성·일관성·추적성("정명완일추")이다.
                "중의적 해석 금지"는 명확성, "출처·관계 파악"은 추적성의 결정 키워드다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 설명에 해당하는 테스트 커버리지의 종류를 쓰시오.</p>
            <pre>{`각 개별 조건식이 다른 개별 조건식에 영향을 받지 않고 전체 조건식의
결과에 독립적으로 영향을 주도록 테스트 케이스를 구성하는 커버리지`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>변경 조건/결정 커버리지 (MC/DC, Modified Condition/Decision Coverage)<br/>
                <span class="label">해설: </span>"독립적으로 영향"이 MC/DC의 결정 키워드다.
                모든 조합을 다 보면 다중 조건 커버리지, 전체 조건식의 참/거짓만 보면 결정(분기) 커버리지다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">MVC 패턴에 대한 설명이다. 괄호 ①~③에 들어갈 구성 요소의 이름을 쓰시오.</p>
            <pre>{`( ① ) : 애플리케이션의 데이터와 비즈니스 로직을 담당한다.
( ② ) : 사용자에게 보이는 화면(UI) 표시를 담당한다.
( ③ ) : 사용자 입력을 받아 처리하고 ①과 ②를 연결·제어한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① Model(모델), ② View(뷰), ③ Controller(컨트롤러)<br/>
                <span class="label">해설: </span>데이터·로직 = Model, 화면 = View, 입력 처리·흐름 제어 = Controller.
                화면과 로직을 분리해 유지보수성과 재사용성을 높이는 아키텍처 패턴이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 보기 중 결합도가 가장 낮은(가장 바람직한) 것을 골라 쓰시오.</p>
            <pre>{`보기: 내용 결합도, 공통 결합도, 스탬프 결합도, 자료 결합도, 제어 결합도`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>자료 결합도 (Data Coupling)<br/>
                <span class="label">해설: </span>결합도 낮음 → 높음 순서는 "자스제외공내"
                (자료 → 스탬프 → 제어 → 외부 → 공통 → 내용)이다.
                보기 중 순서상 맨 앞인 자료 결합도가 가장 낮고 바람직하다.
              </div>
            </details>
          </div>

          <hr class="divider"/>
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">정보 은닉</span>
            <span class="kw">추상화</span>
            <span class="kw">IPO(입력-처리-출력) 모듈 설계</span>
            <span class="kw">GoF 디자인 패턴</span>
            <span class="kw">코드 인스펙션 · 리뷰</span>
            <span class="kw">통합 테스트(하향식 · 상향식)</span>
            <span class="kw">테스트 오라클</span>
            <span class="kw">경계값 분석 · 동등 분할</span>
            <span class="kw">McCabe 순환 복잡도</span>
          </p>
        </section>

        <footer>모듈 구현과 모듈 테스트 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
