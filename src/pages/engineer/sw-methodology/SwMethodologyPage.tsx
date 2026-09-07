import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './sw-methodology.css'

export default defineComponent({
  name: 'SwMethodologyPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>소프트웨어 개발 방법론과 프로젝트 관리</h1>
          <p>SDLC 모델(폭포수·프로토타입·나선형) → 애자일(XP·스크럼·칸반) → 개발 방법론 5종 → 테일러링 →<br/>
          프로젝트 관리(WBS·PERT/CPM) → 비용 산정(LOC·COCOMO·FP) → 프로세스 성숙도(CMMI·SPICE) 순서로,<br/>
          정보처리기사 실기에 출제되는 개념을 표·도면·실전 문제로 정리한 학습 문서입니다.<br/>
          <span>애니메이션 도면의 파란 점은 진행 순서를 나타내며, 현재 단계가 진하게 강조되어 자동 반복 재생됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#sdlc" onClick={(e) => scrollToId(e, 'sdlc')}>소프트웨어 생명주기(SDLC) 모델</a></li>
            <li><a href="#agile" onClick={(e) => scrollToId(e, 'agile')}>애자일 — XP · 스크럼 · 칸반</a></li>
            <li><a href="#methodology" onClick={(e) => scrollToId(e, 'methodology')}>소프트웨어 개발 방법론 5종</a></li>
            <li><a href="#tailoring" onClick={(e) => scrollToId(e, 'tailoring')}>방법론 테일러링</a></li>
            <li><a href="#pm" onClick={(e) => scrollToId(e, 'pm')}>프로젝트 관리 — WBS · PERT/CPM</a></li>
            <li><a href="#cost" onClick={(e) => scrollToId(e, 'cost')}>비용 산정 모델 — LOC · COCOMO · FP</a></li>
            <li><a href="#maturity" onClick={(e) => scrollToId(e, 'maturity')}>프로세스 품질과 성숙도 — CMMI · SPICE</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ============================================================ 1. SDLC */}
        <section id="sdlc">
          <h2>1. 소프트웨어 생명주기(SDLC) 모델</h2>
          <p class="sub">소프트웨어가 태어나서 폐기될 때까지의 전 과정을 단계로 나눈 것이 생명주기(Software Development Life Cycle)다. "어떤 순서로 개발할 것인가"에 대한 청사진.</p>

          <h3>1-1. 생명주기의 기본 단계</h3>
          <p>모델마다 순서와 반복 방식은 다르지만, 공통으로 아래 다섯 단계를 포함한다.</p>
          <p><strong>요구사항 분석 → 설계 → 구현(코딩) → 테스트 → 유지보수</strong></p>

          <h3>1-2. 폭포수 모델 (Waterfall Model)</h3>
          <ul>
            <li>가장 오래된 고전적 모델. 각 단계를 <strong>확실히 마무리한 뒤</strong> 다음 단계로 넘어가는 <strong>선형 순차적</strong> 모델.</li>
            <li>단계별 정형화된 접근과 <strong>체계적인 문서화(산출물)</strong>가 장점 — 관리가 쉽다.</li>
            <li>단점: 개발 도중 <strong>요구사항 변경 반영이 어렵고</strong>, 결과물을 마지막에야 볼 수 있어 오류 발견이 늦다.</li>
            <li>요구사항이 명확하고 변경이 적은 프로젝트에 적합.</li>
          </ul>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 330" role="img" aria-label="폭포수 모델 단계 도면">
              <rect class="boxdark" x="30" y="20" width="160" height="50" />
              <text x="110" y="51" text-anchor="middle" class="strong">요구사항 분석</text>
              <rect class="box" x="205" y="85" width="160" height="50" />
              <text x="285" y="116" text-anchor="middle" class="strong">설계</text>
              <rect class="box" x="380" y="150" width="160" height="50" />
              <text x="460" y="181" text-anchor="middle" class="strong">구현</text>
              <rect class="box" x="555" y="215" width="160" height="50" />
              <text x="635" y="246" text-anchor="middle" class="strong">테스트</text>
              <rect class="boxsoft" x="730" y="270" width="150" height="50" />
              <text x="805" y="301" text-anchor="middle" class="strong">유지보수</text>

              <path class="arrow" d="M 190 45 L 285 45 L 285 79" />
              <path class="arrow" d="M 365 110 L 460 110 L 460 144" />
              <path class="arrow" d="M 540 175 L 635 175 L 635 209" />
              <path class="arrow" d="M 715 240 L 805 240 L 805 264" />

              <path class="blocked" d="M 380 190 C 300 250 220 220 250 140" />
              <text x="255" y="255" text-anchor="middle" class="small">이전 단계로의 역행이 어렵다</text>
              <text x="110" y="100" text-anchor="middle" class="small">폭포처럼 아래로만 흐른다</text>
            </svg>
            <figcaption>도면 1. 폭포수 모델 — 각 단계를 완료해야 다음으로 내려가며, 되돌아가기 어렵다.</figcaption>
          </figure>

          <h3>1-3. 프로토타입 모델 (Prototype Model)</h3>
          <ul>
            <li>본격 개발 전에 <strong>시제품(프로토타입)</strong>을 빠르게 만들어 사용자에게 보여 주고 피드백을 받는 모델.</li>
            <li>사용자가 <strong>요구사항을 미리 확인·보완</strong>할 수 있어 요구사항 도출이 쉽다 (폭포수의 단점 보완).</li>
            <li>단점: 시제품을 최종 제품으로 오해할 수 있고, 프로토타입 폐기 시 비용이 낭비될 수 있다.</li>
          </ul>

          <h3>1-4. 나선형 모델 (Spiral Model)</h3>
          <ul>
            <li><strong>보엠(Boehm)</strong>이 제안. 폭포수 + 프로토타입 장점에 <strong>위험 분석(Risk Analysis)</strong>을 추가한 모델.</li>
            <li>나선을 돌 듯 <strong>4단계를 반복(점진적 개발)</strong>하며 시스템을 완성 — 대규모·고위험 프로젝트에 적합.</li>
            <li>단점: 관리가 복잡하고, 위험 분석 능력에 따라 성패가 좌우된다.</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            나선형 모델의 4단계 순서는 실기 단골 출제:
            <strong>계획 및 정의 → 위험 분석 → 공학적 개발 → 고객 평가</strong>.
            "위험 분석"이 들어가면 무조건 나선형 모델이다.
          </div>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="나선형 모델 4단계 반복 도면">
              <line class="life" x1="450" y1="20" x2="450" y2="280" />
              <line class="life" x1="60" y1="150" x2="840" y2="150" />

              <rect class="boxdark" x="110" y="40" width="220" height="60" />
              <text x="220" y="66" text-anchor="middle" class="strong">① 계획 및 정의</text>
              <text x="220" y="88" text-anchor="middle" class="small">목표·제약조건 설정</text>

              <rect class="box" x="570" y="40" width="220" height="60" />
              <text x="680" y="66" text-anchor="middle" class="strong">② 위험 분석</text>
              <text x="680" y="88" text-anchor="middle" class="small">위험 요소 식별·대안 평가</text>

              <rect class="box" x="570" y="190" width="220" height="60" />
              <text x="680" y="216" text-anchor="middle" class="strong">③ 공학적 개발</text>
              <text x="680" y="238" text-anchor="middle" class="small">개발 및 검증</text>

              <rect class="box" x="110" y="190" width="220" height="60" />
              <text x="220" y="216" text-anchor="middle" class="strong">④ 고객 평가</text>
              <text x="220" y="238" text-anchor="middle" class="small">평가 후 다음 반복 결정</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="336" y1="70" x2="564" y2="70" />
                <text x="450" y="58" text-anchor="middle" class="small">1. 계획 수립</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="680" y1="106" x2="680" y2="184" />
                <text x="760" y="150" text-anchor="middle" class="small">2. 위험 평가</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="564" y1="220" x2="336" y2="220" />
                <text x="450" y="278" text-anchor="middle" class="small">3. 개발·검증</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="220" y1="184" x2="220" y2="106" />
                <text x="130" y="150" text-anchor="middle" class="small">4. 다음 반복</text>
              </g>
            </svg>
            <figcaption>도면 2. 나선형 모델 — 계획 → 위험 분석 → 공학적 개발 → 고객 평가를 나선처럼 반복하며 완성도를 높인다.</figcaption>
          </figure>

          <h3>1-5. 반복적 모델 (Iterative Model)</h3>
          <ul>
            <li><strong>증분형(Incremental):</strong> 시스템을 여러 개의 증분(기능 묶음)으로 나누어 <strong>병렬 개발 후 통합</strong>. 릴리즈마다 완성 기능이 늘어난다.</li>
            <li><strong>진화형(Evolutionary):</strong> 핵심 기능의 시스템을 먼저 만들고, 사용하며 <strong>전체를 점진적으로 발전</strong>시킨다.</li>
          </ul>

          <table>
            <tr><th>모델</th><th>진행 방식</th><th>장점</th><th>단점 / 적합한 경우</th></tr>
            <tr><td><strong>폭포수</strong></td><td>선형 순차</td><td>관리 용이, 문서화 체계적</td><td>변경 반영 곤란 / 요구사항이 명확할 때</td></tr>
            <tr><td><strong>프로토타입</strong></td><td>시제품 → 피드백</td><td>요구사항 도출 용이</td><td>시제품 오해 소지 / 요구사항이 불명확할 때</td></tr>
            <tr><td><strong>나선형</strong></td><td>4단계 반복</td><td>위험 최소화, 대규모 적합</td><td>관리 복잡 / 고위험·대규모 프로젝트</td></tr>
            <tr><td><strong>반복적</strong></td><td>증분/진화 반복</td><td>부분 릴리즈 가능</td><td>통합 비용 발생 / 단계적 인도가 필요할 때</td></tr>
          </table>
        </section>

        {/* ============================================================ 2. 애자일 */}
        <section id="agile">
          <h2>2. 애자일(Agile) — XP · 스크럼 · 칸반</h2>
          <p class="sub">"계획대로"보다 "변화에 민첩하게". 짧은 주기로 동작하는 소프트웨어를 반복 인도하며 고객과 협력하는 경량 개발 문화.</p>

          <h3>2-1. 애자일 선언문의 4가지 가치 (2001)</h3>
          <table>
            <tr><th>왼쪽(덜 중요한 것)</th><th></th><th>오른쪽(더 가치 있는 것)</th></tr>
            <tr><td>공정(프로세스)과 도구</td><td>보다</td><td><strong>개인과 상호작용</strong></td></tr>
            <tr><td>포괄적인 문서</td><td>보다</td><td><strong>동작하는 소프트웨어</strong></td></tr>
            <tr><td>계약 협상</td><td>보다</td><td><strong>고객과의 협력</strong></td></tr>
            <tr><td>계획을 따르기</td><td>보다</td><td><strong>변화에 대응하기</strong></td></tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            선언문은 왼쪽 항목이 <strong>가치 없다는 뜻이 아니다</strong>. "왼쪽도 가치가 있지만,
            오른쪽에 <strong>더 높은 가치</strong>를 둔다"가 정확한 표현 — 서술형으로 출제될 수 있다.
          </div>

          <h3>2-2. XP (eXtreme Programming)</h3>
          <p>고객의 참여와 짧은 릴리즈 주기를 극단(extreme)까지 끌어올린 방법론. <strong>5가지 가치</strong>와 12가지 실천 사항(Practice)으로 구성된다.</p>
          <table>
            <tr><th>5가지 가치</th><th>의미</th></tr>
            <tr><td><strong>용기 (Courage)</strong></td><td>요구 변경에 능동적으로 대처하고, 과감히 리팩토링한다</td></tr>
            <tr><td><strong>단순성 (Simplicity)</strong></td><td>지금 필요한 것만 가장 단순하게 만든다</td></tr>
            <tr><td><strong>의사소통 (Communication)</strong></td><td>개발자·관리자·고객 간 원활한 소통</td></tr>
            <tr><td><strong>피드백 (Feedback)</strong></td><td>빠르고 지속적인 피드백으로 방향을 교정</td></tr>
            <tr><td><strong>존중 (Respect)</strong></td><td>팀원 간 상호 존중</td></tr>
          </table>
          <h4>대표 실천 사항 (12가지 중)</h4>
          <ul>
            <li><strong>짝 프로그래밍(Pair Programming):</strong> 두 사람이 한 컴퓨터로 함께 코딩 — 한 명은 코드 작성, 한 명은 검토.</li>
            <li><strong>테스트 주도 개발(TDD, Test-Driven Development):</strong> 테스트 코드를 먼저 작성한 뒤 이를 통과하는 코드를 구현.</li>
            <li><strong>리팩토링(Refactoring):</strong> 기능(외부 동작)은 그대로 두고 코드 내부 구조를 개선.</li>
            <li><strong>지속적 통합(CI, Continuous Integration):</strong> 코드를 수시로 통합·빌드·테스트하여 통합 오류를 조기 발견.</li>
            <li>그 외: 계획 게임, 소규모 릴리즈, 공동 코드 소유, 40시간 작업, 고객 상주, 코딩 표준 등.</li>
          </ul>

          <h3>2-3. 스크럼 (Scrum)</h3>
          <table>
            <tr><th>구성 요소</th><th>설명</th></tr>
            <tr><td><strong>제품 백로그 (Product Backlog)</strong></td><td>제품에 필요한 요구사항을 우선순위에 따라 나열한 목록</td></tr>
            <tr><td><strong>스프린트 (Sprint)</strong></td><td>실제 개발이 이루어지는 2~4주의 짧은 반복 주기</td></tr>
            <tr><td><strong>일일 스크럼 (Daily Scrum)</strong></td><td>매일 약 15분간 서서 진행 상황을 공유하는 회의</td></tr>
            <tr><td><strong>번다운 차트 (Burn-down Chart)</strong></td><td>남은 작업량(백로그)을 시간 경과에 따라 우하향 그래프로 시각화</td></tr>
            <tr><td><strong>스프린트 검토/회고</strong></td><td>스프린트 종료 시 결과물 검토(Review)와 과정 개선(Retrospective)</td></tr>
          </table>
          <h4>스크럼의 3가지 역할</h4>
          <ul>
            <li><strong>제품 책임자(PO, Product Owner):</strong> 요구사항의 우선순위를 정하고 제품 백로그를 관리 — 백로그에 대한 최종 책임.</li>
            <li><strong>스크럼 마스터(Scrum Master):</strong> 팀이 스크럼을 잘 수행하도록 장애물을 제거하는 조력자(통제자가 아님).</li>
            <li><strong>개발팀(Development Team):</strong> 스프린트 목표 달성을 위해 실제 개발을 수행하는 자율적 팀.</li>
          </ul>

          <h3>2-4. 칸반 (Kanban)</h3>
          <ul>
            <li>작업을 칸반 보드(할 일 → 진행 중 → 완료)로 <strong>시각화</strong>하고 흐름을 관리.</li>
            <li><strong>WIP(Work In Progress) 제한:</strong> 동시에 진행하는 작업 수를 제한해 병목을 드러내고 흐름을 최적화.</li>
            <li>스크럼과 달리 고정 주기(스프린트)가 없고, 필요할 때 지속적으로 인도한다.</li>
          </ul>
        </section>

        {/* ============================================================ 3. 개발 방법론 */}
        <section id="methodology">
          <h2>3. 소프트웨어 개발 방법론 5종</h2>
          <p class="sub">방법론 = 개발 전 과정에 적용할 절차·기법·산출물을 정리한 체계. 시대 순으로 프로세스 중심 → 데이터 중심 → 객체 → 컴포넌트 → 제품 계열로 발전했다.</p>

          <table>
            <tr><th>방법론</th><th>시기</th><th>중심 관점</th><th>주요 기법·도구</th></tr>
            <tr>
              <td><strong>구조적 방법론</strong></td><td>1970년대</td>
              <td>프로세스(기능) 중심 — 정형화된 절차와 <strong>분할과 정복</strong>, 하향식 설계</td>
              <td>DFD(자료 흐름도), DD(자료 사전), 나씨-슈나이더만(N-S) 차트</td>
            </tr>
            <tr>
              <td><strong>정보공학 방법론</strong></td><td>1980년대</td>
              <td><strong>데이터 중심</strong> — 기업 전체 정보 시스템을 계획적으로 구축</td>
              <td>ERD(개체-관계도), ISP(정보전략계획), CASE 도구</td>
            </tr>
            <tr>
              <td><strong>객체지향 방법론</strong></td><td>1990년대</td>
              <td>데이터(속성)와 기능(메서드)을 묶은 <strong>객체</strong> 단위로 시스템 구성</td>
              <td>UML, 유스케이스, 클래스 다이어그램</td>
            </tr>
            <tr>
              <td><strong>CBD (컴포넌트 기반)</strong></td><td>2000년대</td>
              <td>검증된 <strong>컴포넌트를 조립</strong>하여 개발 — 재사용으로 생산성·품질 향상, 개발 기간 단축</td>
              <td>컴포넌트 명세, 인터페이스 정의</td>
            </tr>
            <tr>
              <td><strong>제품 계열 방법론</strong></td><td>2000년대~</td>
              <td>특정 제품군(제품 라인)에 공통되는 <strong>핵심 자산을 재사용</strong> — 영역공학과 응용공학으로 구분</td>
              <td>임베디드 소프트웨어 개발에 적합</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            암기 축: <strong>구조적 = 프로세스(DFD)</strong>, <strong>정보공학 = 데이터(ERD)</strong>,
            <strong>객체지향 = 객체(UML)</strong>, <strong>CBD = 컴포넌트 재사용</strong>,
            <strong>제품 계열 = 제품군 핵심 자산 재사용(영역공학 + 응용공학)</strong>.
            "어떤 방법론인지 쓰시오" 유형은 중심 관점 키워드로 판별한다.
          </div>
        </section>

        {/* ============================================================ 4. 테일러링 */}
        <section id="tailoring">
          <h2>4. 방법론 테일러링 (Tailoring)</h2>
          <p class="sub">기성복을 몸에 맞게 수선하듯, 표준 방법론을 프로젝트 상황·특성에 맞게 수정·보완하는 작업.</p>

          <p><strong>테일러링</strong>이란 프로젝트의 상황과 특성에 맞도록 정의된 소프트웨어 개발 방법론의
          절차·사용 기법·산출물 등을 <strong>수정·보완하여 적용</strong>하는 활동이다.
          모든 프로젝트에 하나의 방법론을 그대로 강제하면 비효율이 생기므로 필요하다.</p>

          <table>
            <tr><th>구분</th><th>고려 기준</th><th>설명</th></tr>
            <tr><td rowspan="4"><strong>내부적 기준</strong></td><td>목표 환경</td><td>시스템의 개발 환경·유형이 서로 다른 경우</td></tr>
            <tr><td>요구사항</td><td>생명주기 활동에서 개발·운영·유지보수 등 프로젝트가 필요로 하는 요구사항이 다른 경우</td></tr>
            <tr><td>프로젝트 규모</td><td>비용·인력·기간 등 프로젝트 규모가 서로 다른 경우</td></tr>
            <tr><td>보유 기술</td><td>프로세스·방법론·산출물·구성원의 능력 등이 서로 다른 경우</td></tr>
            <tr><td rowspan="2"><strong>외부적 기준</strong></td><td>법적 제약사항</td><td>프로젝트별로 적용될 IT 관련 법규·제도가 서로 다른 경우</td></tr>
            <tr><td>표준 품질 기준</td><td>금융·의료 등 분야별로 요구되는 표준 품질 기준이 서로 다른 경우</td></tr>
          </table>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            내부/외부 기준을 구분하는 문제가 출제된다. <strong>법적 제약사항과 표준 품질 기준만 외부적 기준</strong>이고,
            나머지(목표 환경·요구사항·규모·보유 기술)는 전부 내부적 기준이다.
          </div>
        </section>

        {/* ============================================================ 5. 프로젝트 관리 */}
        <section id="pm">
          <h2>5. 프로젝트 관리 — WBS · PERT/CPM · 간트 차트</h2>
          <p class="sub">주어진 기간·비용 안에서 품질 목표를 달성하도록 계획하고 통제하는 활동. 일정 관리 기법의 계산 문제가 자주 나온다.</p>

          <h3>5-1. 프로젝트 관리 영역</h3>
          <table>
            <tr><th>관리 영역</th><th>내용</th></tr>
            <tr><td><strong>범위(Scope) 관리</strong></td><td>프로젝트가 해야 할 일의 경계를 정의 — WBS 작성</td></tr>
            <tr><td><strong>일정(Time) 관리</strong></td><td>활동 순서·기간 산정, 일정 개발·통제 — PERT/CPM, 간트 차트</td></tr>
            <tr><td><strong>비용(Cost) 관리</strong></td><td>비용 산정·예산 편성·통제 — LOC, COCOMO, FP</td></tr>
            <tr><td><strong>품질(Quality) 관리</strong></td><td>품질 계획·보증(QA)·통제(QC)</td></tr>
            <tr><td><strong>위험(Risk) 관리</strong></td><td>위험 식별 → 분석 → 대응 계획 → 감시·통제</td></tr>
            <tr><td>기타</td><td>인적자원, 의사소통, 조달, 이해관계자, 통합 관리</td></tr>
          </table>

          <h3>5-2. WBS (Work Breakdown Structure, 작업 분해 구조)</h3>
          <p>프로젝트 전체 작업을 <strong>계층적으로 세분화</strong>한 구조도.
          최하위 단위(워크 패키지)까지 나누면 일정·비용 산정과 담당자 배정의 기준이 된다.
          범위 관리의 핵심 산출물이며, 일정 관리(PERT/CPM)의 입력이 된다.</p>

          <h3>5-3. PERT와 CPM</h3>
          <table>
            <tr><th>구분</th><th>PERT</th><th>CPM</th></tr>
            <tr><td>목적</td><td>일정 <strong>기간 추정</strong> (불확실한 경우)</td><td>비용 절감·<strong>일정 단축</strong> (경험 있는 경우)</td></tr>
            <tr><td>시간 추정</td><td>낙관치·기대치·비관치의 <strong>3점 추정(확률적)</strong></td><td>과거 경험 기반 <strong>1점 추정(확정적)</strong></td></tr>
            <tr><td>공통점</td><td colspan="2">작업 네트워크(노드·화살표)로 표현, <strong>임계 경로(Critical Path)</strong> 산출</td></tr>
          </table>
          <p><strong>임계 경로(Critical Path):</strong> 네트워크의 시작에서 끝까지 가는 경로 중 <strong>소요 기간이 가장 긴 경로</strong>.
          이 경로의 작업이 지연되면 전체 프로젝트가 지연되므로, 임계 경로의 길이가 곧 <strong>최단 완성 가능 기간</strong>이다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 270" role="img" aria-label="CPM 네트워크와 임계 경로 예시 도면">
              <circle class="box" cx="90" cy="135" r="30" />
              <text x="90" y="141" text-anchor="middle" class="strong">1</text>
              <circle class="box" cx="330" cy="60" r="30" />
              <text x="330" y="66" text-anchor="middle" class="strong">2</text>
              <circle class="box" cx="330" cy="210" r="30" />
              <text x="330" y="216" text-anchor="middle" class="strong">3</text>
              <circle class="box" cx="590" cy="135" r="30" />
              <text x="590" y="141" text-anchor="middle" class="strong">4</text>
              <circle class="box" cx="820" cy="135" r="30" />
              <text x="820" y="141" text-anchor="middle" class="strong">5</text>

              <line class="arrow" x1="115" y1="119" x2="302" y2="72" />
              <text x="195" y="72" text-anchor="middle" class="small">A (3일)</text>
              <line class="arrow" x1="355" y1="76" x2="567" y2="120" />
              <text x="470" y="76" text-anchor="middle" class="small">C (4일)</text>

              <line class="crit" x1="115" y1="151" x2="302" y2="198" />
              <text x="195" y="200" text-anchor="middle" class="small crit-label">B (6일)</text>
              <line class="crit" x1="355" y1="194" x2="567" y2="150" />
              <text x="470" y="200" text-anchor="middle" class="small crit-label">D (2일)</text>
              <line class="crit" x1="620" y1="135" x2="787" y2="135" />
              <text x="703" y="122" text-anchor="middle" class="small crit-label">E (4일)</text>

              <text x="450" y="252" text-anchor="middle" class="small">경로 ① A→C→E = 3+4+4 = 11일 · 경로 ② B→D→E = 6+2+4 = 12일</text>
              <text x="450" y="30" text-anchor="middle" class="small strong">임계 경로 = B→D→E (12일) — 빨간 경로가 지연되면 전체가 지연된다</text>
            </svg>
            <figcaption>도면 3. CPM 네트워크 예시 — 가장 긴 경로(B→D→E, 12일)가 임계 경로이자 최단 완성 기간이다.</figcaption>
          </figure>

          <h3>5-4. 간트 차트 (Gantt Chart)</h3>
          <ul>
            <li>작업 목록을 세로축, 시간을 가로축으로 두고 각 작업의 시작~종료를 <strong>수평 막대</strong>로 표시한 차트.</li>
            <li>일정 계획과 진행 상황을 한눈에 파악하기 좋지만, 작업 간 <strong>의존 관계 표현은 약하다</strong>(네트워크 기법으로 보완).</li>
            <li>이정표(마일스톤)·기간·산출물을 함께 표시할 수 있다.</li>
          </ul>
        </section>

        {/* ============================================================ 6. 비용 산정 */}
        <section id="cost">
          <h2>6. 비용 산정 모델 — LOC · COCOMO · Putnam · FP</h2>
          <p class="sub">"이 프로젝트에 사람과 돈이 얼마나 드는가"를 산정하는 기법. 하향식·상향식·수학적 산정으로 나뉘며 계산 문제가 자주 출제된다.</p>

          <h3>6-1. 하향식(Top-Down) 산정</h3>
          <ul>
            <li><strong>전문가 판단:</strong> 경험 많은 전문가 2인 이상에게 의뢰 — 빠르지만 주관적.</li>
            <li><strong>델파이(Delphi) 기법:</strong> 여러 전문가가 <strong>익명으로</strong> 산정치를 내고 조정자가 취합·회람을 반복하여 합의에 도달 — 전문가 판단의 주관성을 보완.</li>
          </ul>

          <h3>6-2. 상향식(Bottom-Up) 산정 — LOC와 Man-Month</h3>
          <p><strong>LOC(source Line Of Code) 기법:</strong> 소프트웨어 각 기능의 원시 코드 라인 수를
          낙관치·기대치·비관치로 측정해 예측치를 구한다.</p>
          <pre><code>{`예측치 = (낙관치 + 4 × 기대치 + 비관치) / 6

Man-Month(인월) = LOC / 1인당 월평균 생산 LOC
개발 기간      = Man-Month / 투입 인원
개발 비용      = Man-Month × 1인당 월 인건비`}</code></pre>

          <div class="box">
            <span class="tag-line">계산 예시</span><br/>
            낙관치 6,000라인, 기대치 9,000라인, 비관치 12,000라인이면<br/>
            예측치 = (6,000 + 4×9,000 + 12,000) / 6 = 54,000 / 6 = <strong>9,000라인</strong>.<br/>
            1인당 월 300라인 생산 시 Man-Month = 9,000 / 300 = <strong>30인월</strong>,
            5명 투입 시 개발 기간 = 30 / 5 = <strong>6개월</strong>.
          </div>

          <h3>6-3. 수학적(경험적) 산정 모델</h3>
          <h4>COCOMO (COnstructive COst MOdel) — Boehm</h4>
          <p>LOC(프로그램 규모)를 기반으로 비용을 산정하며, 제품 복잡도에 따라 3가지 유형으로 나눈다.</p>
          <table>
            <tr><th>유형</th><th>규모</th><th>특징</th></tr>
            <tr><td><strong>조직형 (Organic Mode)</strong></td><td><strong>5만 라인 이하</strong></td><td>일괄 자료 처리, 과학용 응용, 사무 처리용 등 소규모 소프트웨어</td></tr>
            <tr><td><strong>반분리형 (Semi-detached Mode)</strong></td><td>30만 라인 이하</td><td>트랜잭션 처리, 컴파일러, DBMS 등 — 조직형과 내장형의 중간</td></tr>
            <tr><td><strong>내장형 (Embedded Mode)</strong></td><td><strong>30만 라인 초과</strong></td><td>미사일 유도, 실시간 시스템 등 초대형·고신뢰 소프트웨어</td></tr>
          </table>
          <h4>Putnam 모델</h4>
          <ul>
            <li>생명주기 전 과정에 걸쳐 인력 분포를 가정하는 모델 — <strong>Rayleigh-Norden 곡선</strong>의 노력 분포를 기초로 한다.</li>
            <li>대형 프로젝트에 적합하며, 자동화 도구로 <strong>SLIM</strong>이 있다. (COCOMO의 자동화 도구는 SLIM이 아니라는 점 구분)</li>
          </ul>
          <h4>FP (Function Point, 기능 점수) 모델</h4>
          <ul>
            <li>코드 라인 수가 아니라 <strong>기능의 수와 복잡도</strong>로 규모를 산정 — 요구사항만으로 조기 산정 가능.</li>
            <li>측정 요소: <strong>외부 입력, 외부 출력, 외부 질의(조회), 내부 논리 파일, 외부 인터페이스 파일</strong>에 가중치를 곱해 합산.</li>
            <li>자동화 도구: <strong>ESTIMACS</strong>.</li>
          </ul>

          <table>
            <tr><th>분류</th><th>기법</th><th>한 줄 요약</th></tr>
            <tr><td rowspan="2">하향식</td><td>전문가 판단</td><td>전문가 경험으로 빠르게 산정</td></tr>
            <tr><td>델파이</td><td>익명 전문가 합의로 주관성 보완</td></tr>
            <tr><td rowspan="2">상향식</td><td>LOC</td><td>(낙관 + 4×기대 + 비관) / 6</td></tr>
            <tr><td>Man-Month</td><td>LOC ÷ 인당 월 생산 라인</td></tr>
            <tr><td rowspan="3">수학적</td><td>COCOMO</td><td>규모(LOC) 기반 3유형: Organic / Semi-detached / Embedded</td></tr>
            <tr><td>Putnam</td><td>Rayleigh-Norden 곡선 기반, 도구 SLIM</td></tr>
            <tr><td>FP</td><td>기능 수·복잡도 기반, 도구 ESTIMACS</td></tr>
          </table>
        </section>

        {/* ============================================================ 7. 성숙도 */}
        <section id="maturity">
          <h2>7. 프로세스 품질과 성숙도 — ISO/IEC 12207 · CMMI · SPICE</h2>
          <p class="sub">"이 조직은 소프트웨어를 얼마나 체계적으로 만드는가"를 평가하는 국제 표준과 성숙도 모델.</p>

          <h3>7-1. ISO/IEC 12207 — 소프트웨어 생명주기 프로세스 표준</h3>
          <table>
            <tr><th>프로세스 구분</th><th>내용</th></tr>
            <tr><td><strong>기본 생명주기 프로세스</strong></td><td>획득, 공급, 개발, 운영, 유지보수</td></tr>
            <tr><td><strong>지원 생명주기 프로세스</strong></td><td>품질 보증, 검증, 확인(Validation), 활동 검토, 감사, 문서화, 형상 관리, 문제 해결</td></tr>
            <tr><td><strong>조직 생명주기 프로세스</strong></td><td>관리, 기반 구조, 훈련, 개선</td></tr>
          </table>

          <h3>7-2. CMMI (Capability Maturity Model Integration) — 성숙도 5단계</h3>
          <table>
            <tr><th>단계</th><th>이름</th><th>특징</th></tr>
            <tr><td>1</td><td><strong>초기 (Initial)</strong></td><td>정해진 프로세스 없이 개인 역량에 의존, 예측 불가</td></tr>
            <tr><td>2</td><td><strong>관리 (Managed)</strong></td><td>프로젝트 단위로 기본 프로세스(계획·관리) 수립</td></tr>
            <tr><td>3</td><td><strong>정의 (Defined)</strong></td><td>조직 차원의 표준 프로세스 확립, 프로젝트가 이를 준수</td></tr>
            <tr><td>4</td><td><strong>정량적 관리 (Quantitatively Managed)</strong></td><td>프로세스를 정량적(통계적)으로 측정·통제</td></tr>
            <tr><td>5</td><td><strong>최적화 (Optimizing)</strong></td><td>지속적인 프로세스 개선이 조직에 내재화</td></tr>
          </table>

          <h3>7-3. SPICE (ISO/IEC 15504) — 프로세스 수행 능력 6단계</h3>
          <table>
            <tr><th>수준</th><th>이름</th><th>특징</th></tr>
            <tr><td>0</td><td><strong>불완전 (Incomplete)</strong></td><td>프로세스가 구현되지 않거나 목적 달성 실패</td></tr>
            <tr><td>1</td><td><strong>수행 (Performed)</strong></td><td>프로세스가 수행되어 목적은 달성</td></tr>
            <tr><td>2</td><td><strong>관리 (Managed)</strong></td><td>작업 산출물을 계획·관리하며 인도</td></tr>
            <tr><td>3</td><td><strong>확립 (Established)</strong></td><td>정의된 표준 프로세스 기반으로 수행</td></tr>
            <tr><td>4</td><td><strong>예측 (Predictable)</strong></td><td>프로세스를 정량적으로 측정하여 예측 가능하게 운영</td></tr>
            <tr><td>5</td><td><strong>최적화 (Optimizing)</strong></td><td>프로세스를 지속적으로 개선</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            CMMI는 <strong>1~5의 5단계</strong>(초기→관리→정의→정량적 관리→최적화),
            SPICE는 <strong>0~5의 6단계</strong>(불완전→수행→관리→확립→예측→최적화).
            "관리"가 CMMI에서는 2단계, SPICE에서는 수준 2라는 점, SPICE에는 <strong>수준 0(불완전)</strong>이
            있다는 점이 구분 포인트다.
          </div>
        </section>

        {/* ============================================================ 8. 실전 문제 */}
        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 유형(단답형·괄호 채우기·계산)으로 구성한 연습 문제 10선. 먼저 풀어 본 뒤 정답을 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">보엠(Boehm)이 제안한 나선형 모델은 4단계를 반복하며 진행된다. 다음 괄호 (①), (②)에 들어갈 단계를 쓰시오.</p>
            <pre>{`계획 및 정의 → ( ① ) → 공학적 개발 → ( ② )`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 위험 분석, ② 고객 평가<br/>
                <span class="label">해설: </span>나선형 모델은 계획 및 정의 → 위험 분석 → 공학적 개발 → 고객 평가의 4단계를 나선처럼 반복한다. 위험 분석 단계가 있는 것이 다른 모델과의 가장 큰 차이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">애자일 선언문의 4가지 가치에 대한 다음 문장에서 괄호 (①), (②)에 들어갈 내용을 쓰시오.</p>
            <pre>{`공정과 도구보다 ( ① )을,
포괄적인 문서보다 동작하는 소프트웨어를,
계약 협상보다 고객과의 협력을,
계획을 따르기보다 ( ② )하기를 더 가치 있게 여긴다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 개인과 상호작용, ② 변화에 대응<br/>
                <span class="label">해설: </span>애자일 선언문의 4가지 가치는 개인과 상호작용, 동작하는 소프트웨어, 고객과의 협력, 변화에 대응이다. 왼쪽 항목도 가치 있지만 오른쪽에 더 높은 가치를 둔다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">XP(eXtreme Programming)의 5가지 가치 중 다음 보기에 제시되지 않은 나머지 2가지를 쓰시오.</p>
            <pre>{`용기(Courage), 단순성(Simplicity), 존중(Respect)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>의사소통(Communication), 피드백(Feedback)<br/>
                <span class="label">해설: </span>XP의 5가지 가치는 용기, 단순성, 의사소통, 피드백, 존중이다. 12가지 실천 사항(짝 프로그래밍, TDD 등)과 구분하여 암기한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 스크럼(Scrum)의 용어를 쓰시오.</p>
            <pre>{`스프린트에서 남아 있는 작업량을 시간의 흐름에 따라
우하향 그래프로 표현하여, 작업 진척 상황과 완료 예상 시점을
시각적으로 확인할 수 있게 하는 차트`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>번다운 차트(Burn-down Chart)<br/>
                <span class="label">해설: </span>남은 백로그(작업량)를 세로축, 시간을 가로축으로 그려 이상적인 진행선과 실제 진행을 비교한다. 스프린트 진척 관리의 대표 도구다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.</p>
            <pre>{`프로젝트의 상황과 특성(규모, 보유 기술, 법적 제약사항 등)에 맞도록
이미 정의된 소프트웨어 개발 방법론의 절차, 사용 기법, 산출물 등을
수정·보완하여 적용하는 활동`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>테일러링(Tailoring)<br/>
                <span class="label">해설: </span>내부적 기준(목표 환경, 요구사항, 프로젝트 규모, 보유 기술)과 외부적 기준(법적 제약사항, 표준 품질 기준)을 고려하여 방법론을 프로젝트에 맞게 커스터마이징한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">LOC 기법으로 측정한 결과 낙관치 6,000라인, 기대치 9,000라인, 비관치 12,000라인이었다. ① 예측치(라인 수)를 구하고, 개발자 1인당 월평균 300라인을 생산할 때 ② 필요한 노력(Man-Month)을 구하시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 9,000라인, ② 30 Man-Month(인월)<br/>
                <span class="label">해설: </span>예측치 = (낙관치 + 4×기대치 + 비관치) / 6 = (6,000 + 36,000 + 12,000) / 6 = 9,000라인. Man-Month = 9,000 / 300 = 30인월이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">COCOMO 모델의 3가지 프로젝트 유형 중, 5만 라인 이하의 사무 처리용·과학용 응용 등 소규모 소프트웨어를 개발하는 유형을 영문으로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Organic Mode(조직형)<br/>
                <span class="label">해설: </span>COCOMO는 규모에 따라 Organic(5만 라인 이하), Semi-detached(30만 라인 이하), Embedded(30만 라인 초과)로 나뉜다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 작업 목록으로 CPM 네트워크를 구성했을 때, ① 임계 경로와 ② 프로젝트의 최단 완성 기간(일)을 구하시오.</p>
            <pre>{`작업  소요 기간  선행 작업
 A       3일      없음
 B       6일      없음
 C       4일      A
 D       2일      B
 E       4일      C, D`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① B → D → E, ② 12일<br/>
                <span class="label">해설: </span>가능한 경로는 A→C→E = 3+4+4 = 11일, B→D→E = 6+2+4 = 12일이다. 임계 경로는 가장 긴 경로인 B→D→E이며, 그 길이 12일이 최단 완성 기간이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">프로젝트 범위 관리에서 전체 작업을 계층적으로 세분화하여 일정·비용 산정의 기준으로 삼는 구조도인 WBS의 영문 풀네임(Full Name)을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Work Breakdown Structure<br/>
                <span class="label">해설: </span>WBS(작업 분해 구조)는 프로젝트 작업을 관리 가능한 최소 단위(워크 패키지)까지 계층적으로 분해한 것으로, 범위 관리의 핵심 산출물이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">CMMI의 프로세스 성숙도 5단계에 대한 다음 괄호 (①), (②)에 들어갈 단계 이름을 쓰시오.</p>
            <pre>{`1단계 초기(Initial) → 2단계 관리(Managed) → 3단계 ( ① )
→ 4단계 정량적 관리(Quantitatively Managed) → 5단계 ( ② )`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 정의(Defined), ② 최적화(Optimizing)<br/>
                <span class="label">해설: </span>CMMI 5단계는 초기 → 관리 → 정의 → 정량적 관리 → 최적화 순서다. 3단계 정의는 조직 차원의 표준 프로세스가 확립된 수준을 뜻한다.
              </div>
            </details>
          </div>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">V-모델</span>
            <span class="kw">RAD 모델</span>
            <span class="kw">애자일 스크럼 이벤트</span>
            <span class="kw">린(Lean) 개발</span>
            <span class="kw">SDLC 산출물</span>
            <span class="kw">3점 추정(PERT 기대 시간)</span>
            <span class="kw">여유 시간(Slack)</span>
            <span class="kw">COCOMO II</span>
            <span class="kw">기능 점수 보정 계수</span>
            <span class="kw">ISO/IEC 25010</span>
            <span class="kw">CMMI 연속적 표현</span>
            <span class="kw">SPICE 프로세스 범주</span>
          </p>
        </section>

        <footer>소프트웨어 개발 방법론과 프로젝트 관리 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
