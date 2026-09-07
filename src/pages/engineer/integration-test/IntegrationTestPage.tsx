import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './integration-test.css'

export default defineComponent({
  name: 'IntegrationTestPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>애플리케이션 통합 테스트 · 테스트 결함 관리</h1>
          <p>정보처리기사 실기 대비 학습 문서. 통합 테스트의 개념과 분류(점증적 vs 비점증적) →
          하향식 통합과 스텁 → 상향식 통합과 드라이버 → 빅뱅·샌드위치·회귀 테스트 →
          테스트 자동화 도구 → 테스트 하네스 구성 요소 → 결함 관리(용어 구분·생명주기·심각도와 우선순위) 순서로,
          실기 단골 개념을 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 통합·처리 흐름의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>통합 테스트 개요 — 점증적 vs 비점증적</a></li>
            <li><a href="#topdown" onClick={(e) => scrollToId(e, 'topdown')}>하향식 통합(Top-Down)과 스텁</a></li>
            <li><a href="#bottomup" onClick={(e) => scrollToId(e, 'bottomup')}>상향식 통합(Bottom-Up)과 드라이버</a></li>
            <li><a href="#others" onClick={(e) => scrollToId(e, 'others')}>기타 통합 전략 — 빅뱅 · 샌드위치 · 회귀 테스트</a></li>
            <li><a href="#tools" onClick={(e) => scrollToId(e, 'tools')}>테스트 자동화 도구</a></li>
            <li><a href="#harness" onClick={(e) => scrollToId(e, 'harness')}>테스트 하네스 구성 요소</a></li>
            <li><a href="#defect" onClick={(e) => scrollToId(e, 'defect')}>결함(Defect) 관리</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 통합 테스트 개요 ===================== */}
        <section id="overview">
          <h2>1. 통합 테스트 개요 — 점증적 vs 비점증적</h2>
          <p class="sub">통합 테스트(Integration Test)는 단위 테스트가 끝난 모듈들을 결합하는 과정에서 발생하는 오류를 찾는 테스트다. "어떤 순서로 결합하며 테스트하는가"에 따른 분류가 실기 단골이다.</p>

          <p><strong>통합 테스트</strong>는 단위 테스트를 통과한 모듈(컴포넌트)들을 <strong>점진적으로 결합</strong>하면서
          모듈 간 <strong>인터페이스 오류</strong>, 결합 후에만 드러나는 기능 오류를 찾아내는 단계다.
          단위 테스트에서 개별 모듈이 정상이어도, 모듈을 붙이는 순간 매개변수 전달·호출 순서·데이터 형식 불일치 같은
          새로운 결함이 나타날 수 있기 때문에 반드시 필요하다.</p>

          <h3>1-1. 통합 방식의 분류 (실기 단골 구분)</h3>
          <table>
            <tr><th>분류</th><th>방식</th><th>설명</th></tr>
            <tr>
              <td rowspan={3}><strong>점증적(Incremental)<br/>통합</strong></td>
              <td><strong>하향식(Top-Down)</strong></td>
              <td>상위 모듈부터 아래로 내려가며 통합. 하위 모듈 자리는 <strong>스텁(Stub)</strong>으로 대체</td>
            </tr>
            <tr>
              <td><strong>상향식(Bottom-Up)</strong></td>
              <td>하위 모듈부터 위로 올라가며 통합. 상위 모듈 자리는 <strong>드라이버(Driver)</strong>로 대체</td>
            </tr>
            <tr>
              <td><strong>샌드위치(혼합식)</strong></td>
              <td>하향식 + 상향식을 <strong>동시에 병행</strong>하는 방식</td>
            </tr>
            <tr>
              <td><strong>비점증적(Non-Incremental)<br/>통합</strong></td>
              <td><strong>빅뱅(Big Bang)</strong></td>
              <td>모든 모듈을 <strong>한꺼번에 결합</strong>하여 한 번에 테스트</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250">
              <rect class="boxdark" x="330" y="20" width="240" height="44" />
              <text class="strong" x="450" y="48" text-anchor="middle">통합 테스트 방식</text>

              <line class="arrow" x1="380" y1="64" x2="235" y2="106" />
              <line class="arrow" x1="520" y1="64" x2="665" y2="106" />

              <rect class="box" x="115" y="110" width="240" height="44" />
              <text class="strong" x="235" y="138" text-anchor="middle">점증적 통합</text>
              <rect class="box" x="545" y="110" width="240" height="44" />
              <text class="strong" x="665" y="138" text-anchor="middle">비점증적 통합</text>

              <line class="arrow" x1="160" y1="154" x2="100" y2="192" />
              <line class="arrow" x1="235" y1="154" x2="235" y2="192" />
              <line class="arrow" x1="310" y1="154" x2="370" y2="192" />
              <line class="arrow" x1="665" y1="154" x2="665" y2="192" />

              <rect class="boxsoft" x="30" y="196" width="140" height="38" />
              <text x="100" y="221" text-anchor="middle">하향식</text>
              <rect class="boxsoft" x="165" y="196" width="140" height="38" />
              <text x="235" y="221" text-anchor="middle">상향식</text>
              <rect class="boxsoft" x="300" y="196" width="140" height="38" />
              <text x="370" y="221" text-anchor="middle">샌드위치</text>
              <rect class="boxsoft" x="595" y="196" width="140" height="38" />
              <text x="665" y="221" text-anchor="middle">빅뱅</text>
            </svg>
            <figcaption>도면 1. 통합 테스트 방식의 분류 — 점증적(하향식·상향식·샌드위치) vs 비점증적(빅뱅)</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "모듈을 <strong>점진적으로 결합</strong>하며 테스트"하면 점증적, "<strong>전부 결합한 뒤 한꺼번에</strong>" 테스트하면
            비점증적(빅뱅)이다. 점증적 방식은 오류의 <strong>원인 위치를 파악하기 쉽고</strong>,
            빅뱅은 준비는 간단하지만 오류가 나면 어느 모듈 탓인지 찾기 어렵다.
          </div>
        </section>

        {/* ===================== 2. 하향식 통합 ===================== */}
        <section id="topdown">
          <h2>2. 하향식 통합(Top-Down)과 스텁</h2>
          <p class="sub">상위 모듈에서 하위 모듈 방향으로 통합한다. 아직 없는 하위 모듈을 대신하는 더미 모듈 "스텁(Stub)"은 실기 최다 빈출 용어다.</p>

          <h3>2-1. 진행 방법</h3>
          <ol>
            <li><strong>주요 제어 모듈(최상위)</strong>을 먼저 테스트한다. 이때 그 아래에 붙을 하위 모듈들은
            아직 통합되지 않았으므로 <strong>스텁(Stub)</strong>으로 대체한다.</li>
            <li>통합 순서(깊이 우선 또는 너비 우선)에 따라 스텁을 하나씩 <strong>실제 모듈로 교체</strong>한다.</li>
            <li>모듈이 통합될 때마다 테스트를 실시하고, 새로운 오류가 없는지 <strong>회귀 테스트</strong>를 수행한다.</li>
          </ol>
          <ul>
            <li><strong>깊이 우선(Depth-First)</strong>: 한 갈래(주요 제어 경로)를 끝까지 먼저 통합 — 예: A → B → D → E → C</li>
            <li><strong>너비 우선(Breadth-First)</strong>: 같은 계층(수준)의 모듈을 먼저 모두 통합 — 예: A → B → C → D → E</li>
          </ul>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330">
              <rect class="boxdark" x="370" y="20" width="160" height="44" />
              <text class="strong" x="450" y="48" text-anchor="middle">A (최상위)</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="400" y1="64" x2="265" y2="130" />
                <text class="small" x="270" y="90">① B 통합 (스텁 → 실제 모듈)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="500" y1="64" x2="635" y2="130" />
                <text class="small" x="570" y="90">② C 통합</text>
              </g>

              <rect class="box" x="170" y="134" width="160" height="44" />
              <text class="strong" x="250" y="162" text-anchor="middle">B</text>
              <rect class="box" x="570" y="134" width="160" height="44" />
              <text class="strong" x="650" y="162" text-anchor="middle">C</text>

              <g class="msg" data-step="3">
                <line class="arrow" x1="210" y1="178" x2="140" y2="244" />
                <text class="small" x="60" y="205">③ D 통합</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="290" y1="178" x2="360" y2="244" />
                <text class="small" x="345" y="205">④ E 통합</text>
              </g>

              <rect class="boxsoft" x="70" y="248" width="140" height="44" />
              <text x="140" y="270" text-anchor="middle">D</text>
              <text class="small" x="140" y="287" text-anchor="middle">(처음엔 스텁)</text>
              <rect class="boxsoft" x="290" y="248" width="140" height="44" />
              <text x="360" y="270" text-anchor="middle">E</text>
              <text class="small" x="360" y="287" text-anchor="middle">(처음엔 스텁)</text>
              <rect class="boxsoft" x="580" y="248" width="140" height="44" />
              <text x="650" y="270" text-anchor="middle">스텁(Stub)</text>
              <text class="small" x="650" y="287" text-anchor="middle">하위 모듈 대체 더미</text>
              <line class="life" x1="650" y1="248" x2="650" y2="178" />
            </svg>
            <figcaption>도면 2. 하향식 통합 진행 — 최상위 A부터 시작해 스텁을 실제 모듈(B → C → D → E, 너비 우선)로 하나씩 교체하며 통합한다</figcaption>
          </figure>

          <h3>2-2. 스텁(Stub) — 실기 최다 빈출</h3>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <strong>스텁(Stub)</strong>: 하향식 통합에서 아직 완성되지 않은 <strong>하위 모듈을 대체하는 시험용 더미(가짜) 모듈</strong>.
            상위 모듈이 호출하면 미리 정해 둔 값을 돌려주는 정도의 <strong>최소한의 기능</strong>만 수행한다.
            "상위 모듈은 있는데 하위 모듈이 없다 → 스텁"으로 기억하자.
          </div>

          <h3>2-3. 장점과 단점</h3>
          <table>
            <tr><th>장점</th><th>단점</th></tr>
            <tr>
              <td>
                · 설계상 <strong>중요한 상위(제어) 모듈의 결함을 조기에 발견</strong>할 수 있다<br/>
                · 프로그램의 뼈대(주요 기능)를 초기에 시연할 수 있다<br/>
                · 깊이 우선으로 진행하면 특정 경로의 기능을 빨리 확인할 수 있다
              </td>
              <td>
                · 하위 모듈 수만큼 <strong>스텁을 만들어야 하는 비용</strong>이 든다<br/>
                · 스텁은 단순 더미라서 <strong>하위 수준의 구체적인 처리를 충분히 검증하기 어렵다</strong><br/>
                · 입출력을 실제로 수행하는 하위 모듈 테스트가 뒤로 밀린다
              </td>
            </tr>
          </table>
        </section>

        {/* ===================== 3. 상향식 통합 ===================== */}
        <section id="bottomup">
          <h2>3. 상향식 통합(Bottom-Up)과 드라이버</h2>
          <p class="sub">하위 모듈에서 상위 모듈 방향으로 통합한다. 아직 없는 상위 모듈을 대신해 하위 모듈을 호출해 주는 "드라이버(Driver)"와 하위 모듈 묶음 "클러스터"가 단골이다.</p>

          <h3>3-1. 진행 방법</h3>
          <ol>
            <li>가장 아래의 하위 모듈들을 기능 단위로 묶어 <strong>클러스터(Cluster)</strong>를 구성한다.</li>
            <li>아직 상위 모듈이 없으므로, 클러스터를 호출·제어하는 <strong>테스트 드라이버(Driver)</strong>를 작성해 테스트한다.</li>
            <li>클러스터 테스트가 끝나면 드라이버를 제거하고 <strong>실제 상위 모듈로 교체</strong>하며 위로 올라간다.</li>
          </ol>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 300">
              <rect class="boxsoft" x="140" y="20" width="220" height="44" />
              <text x="250" y="42" text-anchor="middle">드라이버(Driver)</text>
              <text class="small" x="250" y="59" text-anchor="middle">상위 모듈 대체 · 호출 담당</text>
              <rect class="boxsoft" x="540" y="20" width="220" height="44" />
              <text x="650" y="42" text-anchor="middle">드라이버(Driver)</text>
              <text class="small" x="650" y="59" text-anchor="middle">나중에 실제 상위 모듈로 교체</text>

              <line class="arrow" x1="200" y1="64" x2="150" y2="130" />
              <line class="arrow" x1="300" y1="64" x2="350" y2="130" />
              <line class="arrow" x1="600" y1="64" x2="550" y2="130" />
              <line class="arrow" x1="700" y1="64" x2="750" y2="130" />

              <rect class="life" x="60" y="118" width="380" height="140" fill="none" />
              <text class="small" x="250" y="286" text-anchor="middle">클러스터 1 (하위 모듈 묶음)</text>
              <rect class="life" x="460" y="118" width="380" height="140" fill="none" />
              <text class="small" x="650" y="286" text-anchor="middle">클러스터 2</text>

              <rect class="box" x="80" y="134" width="140" height="44" />
              <text class="strong" x="150" y="162" text-anchor="middle">D</text>
              <rect class="box" x="280" y="134" width="140" height="44" />
              <text class="strong" x="350" y="162" text-anchor="middle">E</text>
              <rect class="box" x="480" y="134" width="140" height="44" />
              <text class="strong" x="550" y="162" text-anchor="middle">F</text>
              <rect class="box" x="680" y="134" width="140" height="44" />
              <text class="strong" x="750" y="162" text-anchor="middle">G</text>

              <line class="arrow" x1="150" y1="178" x2="180" y2="220" />
              <line class="arrow" x1="350" y1="178" x2="320" y2="220" />
              <line class="arrow" x1="550" y1="178" x2="580" y2="220" />
              <line class="arrow" x1="750" y1="178" x2="720" y2="220" />

              <rect class="boxsoft" x="180" y="212" width="140" height="38" />
              <text x="250" y="237" text-anchor="middle">하위 유틸 모듈</text>
              <rect class="boxsoft" x="580" y="212" width="140" height="38" />
              <text x="650" y="237" text-anchor="middle">하위 유틸 모듈</text>
            </svg>
            <figcaption>도면 3. 상향식 통합 — 하위 모듈을 클러스터로 묶고 드라이버가 상위 모듈을 대신해 호출한다. 테스트 후 드라이버를 실제 상위 모듈로 교체하며 위로 통합한다</figcaption>
          </figure>

          <h3>3-2. 장점과 단점</h3>
          <table>
            <tr><th>장점</th><th>단점</th></tr>
            <tr>
              <td>
                · 데이터 처리·연산 등 <strong>하위 모듈의 구체적 기능을 초기에 충분히 검증</strong>할 수 있다<br/>
                · 스텁이 필요 없다 (드라이버만 필요)<br/>
                · 오류 발생 시 원인 모듈을 좁히기 쉽다
              </td>
              <td>
                · 클러스터마다 <strong>드라이버 작성 비용</strong>이 든다<br/>
                · <strong>상위(제어) 구조의 결함을 늦게 발견</strong>한다<br/>
                · 마지막 상위 모듈이 통합될 때까지 전체 골격을 시연하기 어렵다
              </td>
            </tr>
          </table>

          <h3>3-3. 스텁 vs 드라이버 비교 (실기 최최단골)</h3>
          <table>
            <tr><th>구분</th><th>스텁(Stub)</th><th>드라이버(Driver)</th></tr>
            <tr>
              <td><strong>사용되는 방식</strong></td>
              <td><strong>하향식(Top-Down)</strong> 통합</td>
              <td><strong>상향식(Bottom-Up)</strong> 통합</td>
            </tr>
            <tr>
              <td><strong>대체 대상</strong></td>
              <td>아직 없는 <strong>하위 모듈</strong>을 대체</td>
              <td>아직 없는 <strong>상위 모듈</strong>을 대체</td>
            </tr>
            <tr>
              <td><strong>하는 일</strong></td>
              <td>상위 모듈의 호출을 받아 <strong>미리 정한 값을 반환</strong>하는 더미</td>
              <td>테스트 대상 하위 모듈을 <strong>호출하고 매개변수를 전달·결과를 수집</strong></td>
            </tr>
            <tr>
              <td><strong>호출 관계</strong></td>
              <td>호출을 <strong>당하는</strong> 쪽(피호출자 흉내)</td>
              <td>호출을 <strong>하는</strong> 쪽(호출자 흉내)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            "<strong>하</strong>향식 - 스<strong>텁</strong> / <strong>상</strong>향식 - 드<strong>라</strong>이버".
            문제에서 "테스트 대상 모듈을 호출하는 상위 모듈 역할의 시험용 모듈"이 나오면 <strong>드라이버</strong>,
            "호출당하는 하위 모듈 역할의 더미"가 나오면 <strong>스텁</strong>이다.
          </div>
        </section>

        {/* ===================== 4. 기타 통합 전략 ===================== */}
        <section id="others">
          <h2>4. 기타 통합 전략 — 빅뱅 · 샌드위치 · 회귀 테스트</h2>
          <p class="sub">하향식·상향식 외의 통합 전략과, 통합 과정 내내 반복되는 회귀 테스트를 정리한다. 회귀 테스트의 정의는 실기 최단골이다.</p>

          <h3>4-1. 빅뱅(Big Bang) 통합 — 단골</h3>
          <ul>
            <li>단위 테스트가 끝난 <strong>모든 모듈을 한꺼번에 결합</strong>해 한 번에 테스트하는 <strong>비점증적</strong> 방식.</li>
            <li>스텁·드라이버 같은 보조 모듈이 필요 없고 절차가 단순하여 <strong>소규모 시스템</strong>에 적합.</li>
            <li>오류가 발견되면 <strong>어느 모듈·인터페이스가 원인인지 찾기 어렵다</strong>는 것이 대표적 단점.</li>
          </ul>

          <h3>4-2. 샌드위치(Sandwich) 통합 — 단골</h3>
          <ul>
            <li><strong>하향식 + 상향식을 동시에 병행</strong>하는 혼합(Hybrid) 방식.</li>
            <li>상위 계층은 하향식으로(스텁 사용), 하위 계층은 상향식으로(드라이버 사용) 통합해 <strong>중간에서 만난다</strong>.</li>
            <li>병렬 진행으로 <strong>기간을 단축</strong>할 수 있으나, 스텁과 드라이버가 모두 필요해 <strong>비용이 크다</strong>.</li>
          </ul>

          <h3>4-3. 회귀 테스트(Regression Test) — 실기 최단골</h3>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <strong>회귀 테스트</strong>: 오류를 <strong>수정하거나 모듈을 변경·통합한 후</strong>, 그 수정이
            <strong>새로운 결함을 만들지 않았는지(기존 기능이 여전히 정상인지)</strong> 이미 테스트했던 부분을
            <strong>반복 재실행</strong>하여 확인하는 테스트. 통합 단계마다 반복 수행된다.
          </div>
          <p>모든 테스트 케이스를 매번 다시 돌리기는 비용이 크므로, 회귀 테스트용 케이스는 다음 기준으로 선정한다.</p>
          <ul>
            <li>모든 애플리케이션의 <strong>주요 기능을 두루 확인</strong>할 수 있는 대표 테스트 케이스</li>
            <li>변경(수정)의 <strong>영향을 받는 부분</strong>과 그 주변 기능을 검사하는 테스트 케이스</li>
            <li>실제 <strong>수정이 일어난 모듈·컴포넌트</strong>를 직접 검사하는 테스트 케이스</li>
          </ul>
        </section>

        {/* ===================== 5. 테스트 자동화 도구 ===================== */}
        <section id="tools">
          <h2>5. 테스트 자동화 도구</h2>
          <p class="sub">사람이 반복 수행하던 테스트 절차를 스크립트로 자동화하는 도구들. "설명 → 도구 유형"을 쓰게 하는 표 문제와, 데이터 주도 vs 키워드 주도 구분이 단골이다.</p>

          <table>
            <tr><th>설명</th><th>도구 유형</th></tr>
            <tr>
              <td>프로그램을 <strong>실행하지 않고</strong> 소스 코드를 분석하여 코딩 표준 위반, 결함 가능성,
              복잡도 등을 찾아낸다</td>
              <td><strong>정적 분석 도구</strong><br/>(Static Analysis)</td>
            </tr>
            <tr>
              <td>작성된 <strong>스크립트</strong>를 이용해 테스트를 자동으로 <strong>실행</strong>한다.
              스크립트 방식에 따라 <strong>데이터 주도</strong>·<strong>키워드 주도</strong> 접근으로 나뉜다</td>
              <td><strong>테스트 실행 도구</strong><br/>(Test Execution)</td>
            </tr>
            <tr>
              <td>가상의 사용자(부하)를 만들어 시스템에 <strong>부하를 생성·인가</strong>하면서
              처리량·응답 시간·자원 사용률 등 성능 목표 달성 여부를 확인한다</td>
              <td><strong>성능 테스트 도구</strong><br/>(Performance)</td>
            </tr>
            <tr>
              <td>테스트 계획·수행을 관리한다 — <strong>형상 관리, 결함 추적·관리, 테스트 관리</strong> 도구 등</td>
              <td><strong>테스트 통제 도구</strong><br/>(Test Control)</td>
            </tr>
            <tr>
              <td>테스트가 실행될 <strong>환경 자체</strong>를 만들어 주는 소프트웨어·데이터의 모음
              (드라이버, 스텁, 슈트, 케이스, 스크립트 등으로 구성)</td>
              <td><strong>테스트 하네스</strong><br/>(Test Harness)</td>
            </tr>
          </table>

          <h3>5-1. 테스트 실행 도구의 스크립트 접근 방식 (단골 구분)</h3>
          <table>
            <tr><th>구분</th><th>데이터 주도(Data-Driven) 접근</th><th>키워드 주도(Keyword-Driven) 접근</th></tr>
            <tr>
              <td><strong>방식</strong></td>
              <td>테스트 데이터를 <strong>스프레드시트(파일)에 저장</strong>하고,
              하나의 스크립트가 데이터를 바꿔 읽으며 반복 실행</td>
              <td>수행할 <strong>동작을 나타내는 키워드</strong>와 데이터를 함께 시트에 정의하고,
              키워드에 매핑된 동작을 실행</td>
            </tr>
            <tr>
              <td><strong>특징</strong></td>
              <td>같은 절차를 <strong>다양한 데이터</strong>로 재사용 —
              스크립트 지식이 적어도 데이터만 추가하면 테스트 확장 가능</td>
              <td>동작(절차)까지 시트에서 제어 — 기술 지식이 없는 테스터도
              <strong>키워드로 테스트를 정의</strong>할 수 있다</td>
            </tr>
          </table>
        </section>

        {/* ===================== 6. 테스트 하네스 구성 요소 ===================== */}
        <section id="harness">
          <h2>6. 테스트 하네스 구성 요소</h2>
          <p class="sub">테스트 하네스(Test Harness)는 애플리케이션 컴포넌트와 모듈을 테스트하는 환경의 일부로, 테스트를 지원하기 위해 만든 코드와 데이터의 모음이다. "설명 → 구성 요소 이름" 문제가 단골이다.</p>

          <table>
            <tr><th>설명</th><th>구성 요소</th></tr>
            <tr>
              <td>테스트 대상 하위 모듈을 <strong>호출</strong>하고, 매개변수를 전달하고, 결과를 도출하는 등
              <strong>상위 모듈 역할</strong>을 하는 시험용 모듈 (상향식에서 사용)</td>
              <td><strong>테스트 드라이버</strong><br/>(Test Driver)</td>
            </tr>
            <tr>
              <td>제어 모듈이 호출하는 <strong>하위 모듈 역할</strong>을 하는 더미 모듈 —
              일부 기능만 흉내 낸다 (하향식에서 사용)</td>
              <td><strong>테스트 스텁</strong><br/>(Test Stub)</td>
            </tr>
            <tr>
              <td>테스트 대상 시스템에 사용되는 <strong>테스트 케이스의 집합(묶음)</strong> — 단골</td>
              <td><strong>테스트 슈트</strong><br/>(Test Suite)</td>
            </tr>
            <tr>
              <td>요구사항 준수 여부를 확인하기 위한 <strong>입력값, 실행 조건, 기대 결과</strong>의 집합</td>
              <td><strong>테스트 케이스</strong><br/>(Test Case)</td>
            </tr>
            <tr>
              <td>테스트 케이스의 <strong>실행 절차(순서)를 자동화</strong>한 스크립트(프로그램)</td>
              <td><strong>테스트 스크립트</strong><br/>(Test Script)</td>
            </tr>
            <tr>
              <td>여러 테스트 케이스를 묶어 <strong>수행 절차·순서를 기술한 문서</strong> —
              어떤 순서로, 어떤 조건에서 테스트할지의 동작 시나리오</td>
              <td><strong>테스트 시나리오</strong><br/>(Test Scenario)</td>
            </tr>
            <tr>
              <td>사전에 사용자의 행위를 <strong>조건부로 미리 정의</strong>해 두고, 호출되면
              그 정의된 대로 동작하는 가짜 객체</td>
              <td><strong>목 오브젝트</strong><br/>(Mock Object)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            <strong>슈트 vs 시나리오</strong>: 둘 다 "테스트 케이스의 묶음"이지만,
            <strong>슈트</strong>는 케이스의 <strong>집합 그 자체</strong>이고
            <strong>시나리오</strong>는 <strong>수행 절차·순서까지 기술</strong>한 것이다.
            "테스트 케이스들의 집합"이라는 짧은 설명이 나오면 답은 <strong>테스트 슈트</strong>.
          </div>
        </section>

        {/* ===================== 7. 결함 관리 ===================== */}
        <section id="defect">
          <h2>7. 결함(Defect) 관리</h2>
          <p class="sub">테스트로 찾아낸 결함을 등록하고 추적·관리하는 활동. 에러/결함/장애의 용어 구분, 결함 생명주기, 심각도 vs 우선순위 구분이 실기 단골이다.</p>

          <h3>7-1. 용어 구분 — 에러 · 결함 · 버그 · 장애 (단골)</h3>
          <table>
            <tr><th>용어</th><th>발생 위치</th><th>정의</th></tr>
            <tr>
              <td><strong>에러/오류<br/>(Error)</strong></td>
              <td><strong>사람(개발자)</strong></td>
              <td>결함의 원인이 되는 <strong>사람의 실수·잘못된 행위</strong> (설계 착오, 코딩 실수 등)</td>
            </tr>
            <tr>
              <td><strong>결함(Defect)<br/>/ 버그(Bug)</strong></td>
              <td><strong>산출물(코드·문서)</strong></td>
              <td>에러의 결과로 <strong>제품(소스 코드, 설계서 등 산출물) 안에 존재</strong>하는 잘못.
              실행 중 발견된 결함을 흔히 버그라 부른다</td>
            </tr>
            <tr>
              <td><strong>장애/실패<br/>(Failure/Fault)</strong></td>
              <td><strong>시스템(실행 시점)</strong></td>
              <td>결함이 실행되어 시스템이 <strong>기대와 다르게 동작하거나 서비스가 중단</strong>되는 현상 —
              사용자 관점에서 드러난 문제</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            발생 순서로 기억: <strong>에러(사람의 실수) → 결함(산출물에 남음) → 장애(시스템에서 드러남)</strong>.
            "사람이 저지른 실수"는 에러, "코드에 박혀 있는 잘못"은 결함, "시스템이 멈춘 현상"은 장애다.
          </div>

          <h3>7-2. 결함 관리 프로세스와 결함 생명주기</h3>
          <p>결함은 <strong>등록 → 검토 → 할당 → 수정 → 재확인(재테스트) → 종료</strong>의 절차로 관리하며,
          결함 하나하나는 아래와 같은 <strong>상태(생명주기)</strong>를 가진다.</p>
          <ul>
            <li><strong>Open(등록)</strong>: 결함이 발견되어 보고서에 등록된 상태</li>
            <li><strong>Assigned(할당)</strong>: 검토를 거쳐 수정 담당 개발자에게 할당된 상태</li>
            <li><strong>Fixed(수정)</strong>: 개발자가 결함을 수정 완료한 상태</li>
            <li><strong>Closed(종료)</strong>: 테스터가 재테스트로 수정을 확인하고 종료한 상태.
            재테스트에서 결함이 재현되면 다시 <strong>Reopened(재등록)</strong> 된다</li>
            <li><strong>Deferred(보류/연기)</strong>: 우선순위가 낮아 수정을 다음 릴리스로 연기한 상태</li>
            <li><strong>Rejected/Clarified(거부/무효)</strong>: 검토 결과 결함이 아니라고 판정된 상태</li>
          </ul>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 260">
              <rect class="boxdark" x="30" y="60" width="150" height="48" />
              <text class="strong" x="105" y="82" text-anchor="middle">Open</text>
              <text class="small" x="105" y="99" text-anchor="middle">결함 등록</text>

              <rect class="box" x="260" y="60" width="150" height="48" />
              <text class="strong" x="335" y="82" text-anchor="middle">Assigned</text>
              <text class="small" x="335" y="99" text-anchor="middle">담당자 할당</text>

              <rect class="box" x="490" y="60" width="150" height="48" />
              <text class="strong" x="565" y="82" text-anchor="middle">Fixed</text>
              <text class="small" x="565" y="99" text-anchor="middle">수정 완료</text>

              <rect class="boxdark" x="720" y="60" width="150" height="48" />
              <text class="strong" x="795" y="82" text-anchor="middle">Closed</text>
              <text class="small" x="795" y="99" text-anchor="middle">확인 후 종료</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="180" y1="84" x2="252" y2="84" />
                <text class="small" x="216" y="52" text-anchor="middle">① 검토·할당</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="410" y1="84" x2="482" y2="84" />
                <text class="small" x="446" y="52" text-anchor="middle">② 결함 수정</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="640" y1="84" x2="712" y2="84" />
                <text class="small" x="676" y="52" text-anchor="middle">③ 재테스트 통과</text>
              </g>
              <g class="msg" data-step="4">
                <path class="arrow ret" d="M 795 108 L 795 170 L 105 170 L 105 116" />
                <text class="small" x="450" y="163" text-anchor="middle">④ 재테스트 실패 시 Reopened (다시 Open으로)</text>
              </g>

              <rect class="boxsoft" x="260" y="196" width="150" height="44" />
              <text x="335" y="218" text-anchor="middle">Deferred</text>
              <text class="small" x="335" y="234" text-anchor="middle">수정 보류·연기</text>
              <line class="blocked" x1="335" y1="108" x2="335" y2="196" />

              <rect class="boxsoft" x="490" y="196" width="180" height="44" />
              <text x="580" y="218" text-anchor="middle">Rejected</text>
              <text class="small" x="580" y="234" text-anchor="middle">결함 아님 판정</text>
              <line class="blocked" x1="440" y1="108" x2="530" y2="196" />
            </svg>
            <figcaption>도면 4. 결함 생명주기 — Open → Assigned → Fixed → Closed 흐름과 Reopened(점선), 보류(Deferred)·거부(Rejected) 분기</figcaption>
          </figure>

          <h3>7-3. 결함 심각도 vs 우선순위 (단골 구분)</h3>
          <table>
            <tr><th>구분</th><th>결함 심각도 (Severity)</th><th>결함 우선순위 (Priority)</th></tr>
            <tr>
              <td><strong>의미</strong></td>
              <td>결함이 시스템(운영)에 미치는 <strong>영향의 심각한 정도</strong> — 기술적 관점</td>
              <td>결함을 <strong>얼마나 먼저(긴급하게) 처리</strong>해야 하는가 — 업무적 관점</td>
            </tr>
            <tr>
              <td><strong>등급 예</strong></td>
              <td>치명적(Critical) / 주요(Major) / 보통(Normal) / 경미(Minor) / 단순(Simple)</td>
              <td>결정적(Critical) / 높음(High) / 보통(Medium) / 낮음(Low)</td>
            </tr>
            <tr>
              <td><strong>주의</strong></td>
              <td colspan={2}>심각도가 높다고 우선순위가 항상 높은 것은 아니다 —
              예: 거의 안 쓰는 기능의 치명적 결함(심각도 높음·우선순위 낮음),
              메인 화면 회사 로고 오탈자(심각도 낮음·우선순위 높음)</td>
            </tr>
          </table>

          <h3>7-4. 결함 추이 분석 (단골)</h3>
          <table>
            <tr><th>분석 유형</th><th>설명</th></tr>
            <tr>
              <td><strong>결함 분포 분석</strong></td>
              <td>모듈·컴포넌트별 <strong>결함 수의 분포</strong>를 분석 — 결함이 몰린 모듈을 찾는다</td>
            </tr>
            <tr>
              <td><strong>결함 추세 분석</strong></td>
              <td><strong>시간의 흐름</strong>에 따른 결함 수(발생·해결)의 추이를 분석</td>
            </tr>
            <tr>
              <td><strong>결함 에이징 분석</strong></td>
              <td>특정 결함 상태(예: Open)로 <strong>머무른 시간</strong>을 분석 — 오래 방치된 결함을 찾는다</td>
            </tr>
          </table>

          <h3>7-5. 결함 관리(추적) 도구</h3>
          <table>
            <tr><th>도구</th><th>특징</th></tr>
            <tr><td><strong>Bugzilla</strong></td><td>모질라 재단의 오픈 소스 결함(버그) 추적 도구 — 심각도·우선순위 지정 관리</td></tr>
            <tr><td><strong>JIRA</strong></td><td>아틀라시안의 결함·이슈 추적 및 프로젝트 관리 도구 (상용, 가장 널리 사용)</td></tr>
            <tr><td><strong>Redmine</strong></td><td>오픈 소스 프로젝트 관리 + 결함 추적 도구 (위키·간트 차트 등 포함)</td></tr>
            <tr><td><strong>Trac</strong></td><td>오픈 소스 결함 추적 + 위키 + 형상 관리(소스 저장소) 연동 도구</td></tr>
          </table>
        </section>

        {/* ===================== 8. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">아래 문제를 먼저 풀고 "정답 보기"로 확인하자. 스텁·드라이버 정의 쓰기가 최다 빈출이다.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.</p>
            <pre>{`하향식 통합 테스트에서, 아직 작성되지 않은 하위 모듈을 대신하여
상위 모듈의 호출에 미리 정해진 값을 돌려주는 시험용 더미(가짜) 모듈`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>스텁(Stub, 테스트 스텁)<br/>
                <span class="label">해설: </span>하향식 통합은 상위부터 통합하므로 없는 것은 하위 모듈이고,
                이를 대체하는 더미가 스텁이다. "하향식 - 스텁, 상향식 - 드라이버"로 짝을 기억한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 테스트 하네스 구성 요소를 쓰시오.</p>
            <pre>{`상향식 통합 테스트에서 아직 없는 상위 모듈을 대신하여,
테스트 대상 하위 모듈을 호출하고 매개변수를 전달하며
결과를 도출·수집하는 시험용 모듈`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>테스트 드라이버(Test Driver)<br/>
                <span class="label">해설: </span>"호출하는 쪽(상위 역할)"이면 드라이버, "호출당하는 쪽(하위 역할)"이면 스텁이다.
                상향식 통합에서 클러스터를 제어하는 데 사용된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 괄호 안에 들어갈 통합 테스트 방식을 각각 쓰시오.</p>
            <pre>{`( ① ) 통합: 상위 모듈에서 하위 모듈 방향으로 통합하며,
             깊이 우선 또는 너비 우선 순서로 스텁을 실제 모듈로 교체한다.
( ② ) 통합: 하위 모듈을 클러스터로 묶어 드라이버로 테스트한 후
             상위 방향으로 통합한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 하향식(Top-Down) 통합, ② 상향식(Bottom-Up) 통합<br/>
                <span class="label">해설: </span>진행 방향(상위→하위 / 하위→상위)과 보조 도구(스텁/드라이버·클러스터)가
                각 방식을 구분하는 결정적 힌트다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">오류를 수정하거나 모듈을 변경·통합한 후, 그 수정으로 인해 새로운 결함이
            생기지 않았는지 이미 테스트했던 부분을 반복하여 재실행하는 테스트 기법을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>회귀 테스트(Regression Test)<br/>
                <span class="label">해설: </span>키워드는 "수정 후" + "새로운 결함 여부 확인" + "반복 재실행".
                통합 테스트의 각 단계마다 반복 수행되는 실기 최단골 용어다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 통합 테스트 방식을 각각 쓰시오.</p>
            <pre>{`( ① ): 단위 테스트가 끝난 모든 모듈을 한꺼번에 결합하여
        한 번에 테스트하는 비점증적 방식. 소규모 시스템에 적합하다.
( ② ): 하향식과 상향식을 동시에 병행하는 혼합 방식.
        기간을 단축할 수 있으나 스텁과 드라이버가 모두 필요하다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 빅뱅(Big Bang) 통합, ② 샌드위치(Sandwich) 통합<br/>
                <span class="label">해설: </span>"한꺼번에"는 빅뱅, "혼합·병행"은 샌드위치.
                빅뱅은 오류 원인 모듈을 찾기 어렵다는 단점까지 함께 기억하자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">테스트 대상 시스템에 사용되는 테스트 케이스의 집합(묶음)을 가리키는
            테스트 하네스 구성 요소를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>테스트 슈트(Test Suite)<br/>
                <span class="label">해설: </span>"케이스의 집합"이면 슈트. 수행 절차·순서까지 기술한 문서라면
                테스트 시나리오이므로 구분에 주의한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">테스트 실행 도구의 스크립트 작성 방식에 대한 다음 설명에서
            괄호 안에 들어갈 접근 방식을 각각 쓰시오.</p>
            <pre>{`( ① ) 접근: 테스트 데이터를 스프레드시트에 저장해 두고, 하나의
        스크립트가 데이터를 바꿔 읽으며 반복 실행하는 방식.
( ② ) 접근: 수행할 동작을 나타내는 키워드와 데이터를 시트에 정의하고,
        키워드에 매핑된 동작을 실행하는 방식.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 데이터 주도(Data-Driven) 접근, ② 키워드 주도(Keyword-Driven) 접근<br/>
                <span class="label">해설: </span>"스프레드시트의 데이터 반복"이면 데이터 주도,
                "동작 키워드까지 정의"하면 키워드 주도다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">결함 생명주기의 상태를 처리 순서대로 나열하시오.</p>
            <pre>{`보기: Assigned, Closed, Fixed, Open`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Open → Assigned → Fixed → Closed<br/>
                <span class="label">해설: </span>등록(Open) → 담당자 할당(Assigned) → 수정 완료(Fixed) →
                재테스트 확인 후 종료(Closed). 재테스트 실패 시 Reopened, 수정 연기는 Deferred다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 각 설명에 해당하는 용어를 보기에서 골라 쓰시오.</p>
            <pre>{`보기: 에러(Error), 결함(Defect), 장애(Failure)

① 결함의 원인이 되는 사람(개발자)의 실수·잘못된 행위
② 에러의 결과로 소스 코드·설계서 등 산출물 안에 존재하는 잘못
③ 결함이 실행되어 시스템이 기대와 다르게 동작하거나 서비스가 중단되는 현상`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 에러(Error), ② 결함(Defect), ③ 장애(Failure)<br/>
                <span class="label">해설: </span>발생 위치로 구분한다 — 사람이면 에러, 산출물이면 결함,
                실행 중인 시스템이면 장애. "에러 → 결함 → 장애" 순서로 이어진다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">결함이 시스템에 미치는 영향의 심각한 정도를 나타내는 지표를 ( ① ),
            결함을 얼마나 먼저 처리해야 하는지 그 긴급한 정도를 나타내는 지표를 ( ② )라고 한다.
            ①과 ②에 들어갈 용어를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 결함 심각도(Severity), ② 결함 우선순위(Priority)<br/>
                <span class="label">해설: </span>심각도는 "영향의 크기(기술적)", 우선순위는 "처리 순서(업무적)".
                심각도가 높아도 우선순위는 낮을 수 있다는 점이 함정 보기로 나온다.
              </div>
            </details>
          </div>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">단위 테스트</span>
            <span class="kw">시스템 테스트</span>
            <span class="kw">인수 테스트</span>
            <span class="kw">블랙박스 · 화이트박스</span>
            <span class="kw">테스트 오라클</span>
            <span class="kw">동등 분할 · 경계값 분석</span>
            <span class="kw">xUnit</span>
            <span class="kw">테스트 커버리지</span>
            <span class="kw">인스펙션 · 워크스루</span>
          </p>
        </section>

        <footer>애플리케이션 통합 테스트와 결함 관리 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
