import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './test-design.css'

export default defineComponent({
  name: 'TestDesignPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>애플리케이션 테스트 케이스 설계 — 테스트 케이스 작성 · 테스트 시나리오 작성</h1>
          <p>정보처리기사 실기 대비 학습 문서. 테스트의 목적과 7가지 기본 원리 → 테스트 분류(정적/동적, 검증/확인, 목적별) →
          화이트박스 테스트(기초 경로·커버리지 6종) → 블랙박스 테스트(동등 분할·경계값 분석 등 실기 최다 빈출 기법) →
          V모델과 테스트 레벨 → 테스트 케이스·시나리오·오라클 순서로, 실기 단골 개념을 도면·표·실전 문제로 정리한다.<br/>
          <span>도면의 파란 점은 진행 순서를 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#basics" onClick={(e) => scrollToId(e, 'basics')}>테스트 기본 — 목적과 7가지 원리</a></li>
            <li><a href="#category" onClick={(e) => scrollToId(e, 'category')}>테스트 분류 — 정적/동적 · 검증/확인 · 목적별</a></li>
            <li><a href="#whitebox" onClick={(e) => scrollToId(e, 'whitebox')}>화이트박스 테스트 — 기초 경로와 커버리지</a></li>
            <li><a href="#blackbox" onClick={(e) => scrollToId(e, 'blackbox')}>블랙박스 테스트 — 명세 기반 기법 (최다 빈출)</a></li>
            <li><a href="#vmodel" onClick={(e) => scrollToId(e, 'vmodel')}>V모델과 테스트 레벨 — 단위·통합·시스템·인수</a></li>
            <li><a href="#case" onClick={(e) => scrollToId(e, 'case')}>테스트 케이스 · 시나리오 · 오라클</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 테스트 기본 ===================== */}
        <section id="basics">
          <h2>1. 테스트 기본 — 목적과 7가지 원리</h2>
          <p class="sub">테스트가 무엇을 위한 활동인지, 그리고 모든 테스트 활동의 전제가 되는 7가지 기본 원리를 정리한다. 원리는 "설명 → 원리 이름 쓰기" 형태로 출제된다.</p>

          <h3>1-1. 테스트의 목적</h3>
          <p>소프트웨어 테스트는 애플리케이션에 잠재된 <strong>결함(Defect)을 발견</strong>하고,
          요구사항을 충족하는지 <strong>품질을 확인</strong>하기 위해 수행하는 활동이다.
          즉 "동작함을 보여 주는 것"이 아니라 <strong>"결함이 있음을 밝혀내는 것"</strong>이 1차 목적이며,
          이를 통해 소프트웨어의 품질에 대한 신뢰(확신)를 제공한다.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            테스트의 목적 두 가지: <strong>결함 발견</strong> + <strong>품질(요구사항 충족) 확인</strong>.
            "오류가 없음을 증명하는 활동"이라는 표현이 보기에 나오면 오답이다 — 테스트는 오류 부재를 증명할 수 없다.
          </div>

          <h3>1-2. 테스트의 기본 원리 7가지 (실기 단골)</h3>
          <table>
            <tr><th>설명</th><th>원리 이름</th></tr>
            <tr>
              <td>테스트는 결함이 <strong>존재함을 밝히는 활동</strong>이다.
              결함이 발견되지 않았다고 해서 결함이 없다고 증명할 수는 없다</td>
              <td><strong>테스팅은 결함이 존재함을 밝히는 활동</strong></td>
            </tr>
            <tr>
              <td>무한 경로·무한 입력값 때문에 모든 경우를 테스트하는 것은 <strong>불가능</strong>하다.
              따라서 위험 분석과 우선순위에 따라 테스트를 집중한다</td>
              <td><strong>완벽한 테스팅은 불가능</strong></td>
            </tr>
            <tr>
              <td>결함은 개발 <strong>초기(요구분석·설계 단계)</strong>에 발견할수록 수정 비용이 적다.
              테스트 활동은 가능한 한 빨리 시작해야 한다</td>
              <td><strong>조기 테스팅 (Early Testing)</strong></td>
            </tr>
            <tr>
              <td>결함의 대부분(약 80%)은 <strong>소수의 특정 모듈(약 20%)에 집중</strong>되어 발생한다
              — <strong>파레토(Pareto) 법칙</strong> (실기 단골)</td>
              <td><strong>결함 집중 (Defect Clustering)</strong></td>
            </tr>
            <tr>
              <td><strong>동일한 테스트 케이스를 반복 사용하면 더 이상 새로운 결함을 찾지 못한다</strong>.
              테스트 케이스를 정기적으로 점검·개선해야 한다 (실기 최단골)</td>
              <td><strong>살충제 패러독스 (Pesticide Paradox)</strong></td>
            </tr>
            <tr>
              <td>테스트는 <strong>소프트웨어의 성격·맥락(정황)</strong>에 따라 다르게 수행된다.
              예: 은행 시스템과 게임의 테스트 방법은 다르다</td>
              <td><strong>정황(Context) 의존성</strong></td>
            </tr>
            <tr>
              <td>결함을 모두 제거해도 <strong>사용자의 요구를 만족하지 못하면</strong> 그 소프트웨어는
              품질이 높다고 할 수 없다 (실기 단골)</td>
              <td><strong>오류-부재의 궤변 (Absence of Errors Fallacy)</strong></td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            빈출 3인방 — <strong>살충제 패러독스</strong>(같은 케이스 반복 → 결함 발견 불가),
            <strong>결함 집중</strong>(파레토, 80:20), <strong>오류-부재의 궤변</strong>(결함 0이어도 요구 불만족이면 실패).
            설명 문장에서 "반복", "80%/20%", "요구사항 만족" 키워드로 구분한다.
          </div>
        </section>

        {/* ===================== 2. 테스트 분류 ===================== */}
        <section id="category">
          <h2>2. 테스트 분류 — 정적/동적 · 검증/확인 · 목적별</h2>
          <p class="sub">프로그램 실행 여부, 바라보는 시각, 테스트 목적이라는 세 가지 축으로 테스트를 분류한다. "검증 vs 확인" 구분과 "목적별 테스트 이름 쓰기"가 단골이다.</p>

          <h3>2-1. 프로그램 실행 여부에 따른 분류 (실기 단골)</h3>
          <table>
            <tr><th>구분</th><th>정의</th><th>대표 기법</th></tr>
            <tr>
              <td><strong>정적 테스트<br/>(Static Test)</strong></td>
              <td>프로그램을 <strong>실행하지 않고</strong> 명세서·소스 코드를 대상으로
              분석·검토하는 테스트. 개발 초기에 결함을 발견할 수 있다</td>
              <td>리뷰(워크스루, 인스펙션, 동료 검토), 정적 분석 도구</td>
            </tr>
            <tr>
              <td><strong>동적 테스트<br/>(Dynamic Test)</strong></td>
              <td>프로그램을 <strong>실행하면서</strong> 오류를 찾는 테스트.
              화이트박스·블랙박스 테스트가 모두 여기에 속한다</td>
              <td>화이트박스 테스트, 블랙박스 테스트</td>
            </tr>
          </table>

          <h4>정적 테스트의 리뷰(Review) 세 가지</h4>
          <table>
            <tr><th>설명</th><th>종류</th></tr>
            <tr>
              <td><strong>작성자(개발자)가 명세서·코드를 직접 설명</strong>하고 참석자들이 검토하며 결함을 찾는
              비공식적 검토 회의</td>
              <td><strong>워크스루 (Walkthrough)</strong></td>
            </tr>
            <tr>
              <td>작성자 이외의 <strong>전문가(중재자·검토 전문 팀)가 공식적인 절차</strong>에 따라
              산출물을 확인하며 결함을 찾는 가장 형식적인 검토</td>
              <td><strong>인스펙션 (Inspection)</strong></td>
            </tr>
            <tr>
              <td>2~3명의 <strong>동료가 비공식적으로</strong> 산출물을 검토하며 의견을 나누는 방식</td>
              <td><strong>동료 검토 (Peer Review)</strong></td>
            </tr>
          </table>

          <h3>2-2. 시각에 따른 분류 — 검증 vs 확인 (구분 단골)</h3>
          <table>
            <tr><th>구분</th><th>질문</th><th>의미</th></tr>
            <tr>
              <td><strong>검증 (Verification)</strong></td>
              <td>"제품을 <strong>올바르게</strong> 만들고 있는가?"</td>
              <td><strong>개발 과정</strong>을 대상으로, 명세(설계)대로 만들어지는지를
              <strong>개발자(생산자) 시각</strong>에서 점검</td>
            </tr>
            <tr>
              <td><strong>확인 (Validation)</strong></td>
              <td>"<strong>올바른 제품</strong>을 만들었는가?"</td>
              <td><strong>완성된 결과물</strong>을 대상으로, 사용자의 요구대로 동작하는지를
              <strong>사용자 시각</strong>에서 점검</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            검증(Verification) = <strong>과정</strong> · 개발자 시각, 확인(Validation) = <strong>결과</strong> · 사용자 시각.
            "과정/결과", "개발자/사용자" 대응만 정확히 외우면 구분 문제는 끝난다.
          </div>

          <h3>2-3. 목적에 따른 분류 (설명 → 종류 쓰기)</h3>
          <table>
            <tr><th>설명</th><th>종류</th></tr>
            <tr>
              <td>시스템에 <strong>고의로 결함(장애)을 일으킨 뒤 올바르게 복구되는지</strong> 확인</td>
              <td><strong>회복(Recovery) 테스트</strong></td>
            </tr>
            <tr>
              <td>불법적인 침입·해킹으로부터 시스템이 <strong>소스 코드와 데이터를 보호</strong>하는지 확인</td>
              <td><strong>안전(Security) 테스트</strong></td>
            </tr>
            <tr>
              <td>과도한 정보량·빈도 등 <strong>비정상적으로 높은 부하</strong>를 걸어 시스템의 한계를 확인
              (스트레스 테스트)</td>
              <td><strong>강도(Stress) 테스트</strong></td>
            </tr>
            <tr>
              <td>응답 시간, 처리량, 반응 속도 등 시스템의 <strong>실시간 성능·효율성</strong>을 확인</td>
              <td><strong>성능(Performance) 테스트</strong></td>
            </tr>
            <tr>
              <td>시스템 <strong>내부의 논리 경로, 소스 코드의 복잡도</strong>를 평가</td>
              <td><strong>구조(Structure) 테스트</strong></td>
            </tr>
            <tr>
              <td>변경·수정된 코드에 <strong>새로운 결함이 생기지 않았는지</strong>, 이전 기능이 여전히
              올바른지 반복 확인 (실기 단골)</td>
              <td><strong>회귀(Regression) 테스트</strong></td>
            </tr>
            <tr>
              <td>변경된 시스템과 기존 시스템에 <strong>동일한 데이터를 입력해 결과를 비교</strong></td>
              <td><strong>병행(Parallel) 테스트</strong></td>
            </tr>
          </table>
        </section>

        {/* ===================== 3. 화이트박스 테스트 ===================== */}
        <section id="whitebox">
          <h2>3. 화이트박스 테스트 — 기초 경로와 커버리지</h2>
          <p class="sub">소스 코드 내부를 들여다보며 논리 경로를 검사하는 테스트. 맥케이브 순환 복잡도 계산과 커버리지 6종의 정의·강도 순서가 실기 최단골이다.</p>

          <h3>3-1. 개념</h3>
          <p>화이트박스 테스트(White-box Test)는 모듈의 <strong>소스 코드(내부 구조·논리 흐름)를 오픈시킨 상태</strong>에서
          코드의 논리적 경로를 기준으로 테스트 케이스를 설계하는 <strong>구조 기반 테스트</strong>다.
          원시 코드의 모든 문장을 한 번 이상 수행하는 것을 기본 목표로 하며, 주로 <strong>단위 테스트</strong> 단계에서 적용한다.</p>

          <h3>3-2. 기초 경로 검사 — 맥케이브 순환 복잡도 (계산 단골)</h3>
          <p>기초 경로 검사(Basis Path Testing)는 제어 흐름 그래프를 그려 <strong>독립적인 실행 경로의 개수</strong>만큼
          테스트 케이스를 설계하는 대표적 화이트박스 기법이다. 경로 개수는 맥케이브(McCabe)의
          <strong>순환 복잡도 V(G)</strong>로 계산한다.</p>
          <pre>{`V(G) = E - N + 2
  E = 간선(Edge, 화살표) 수
  N = 노드(Node) 수

또는  V(G) = 판단(분기) 노드 수 + 1

예) 제어 흐름 그래프의 간선이 7개, 노드가 6개라면
    V(G) = 7 - 6 + 2 = 3  →  독립 경로 3개, 테스트 케이스 최소 3개`}</pre>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            공식의 부호를 헷갈리지 말 것: <strong>V(G) = E − N + 2</strong> (간선 − 노드 + 2).
            복잡도가 10을 넘으면 매우 복잡한 모듈로 판단해 분리를 검토한다.
          </div>

          <h3>3-3. 제어 구조 검사</h3>
          <table>
            <tr><th>기법</th><th>검사 대상</th></tr>
            <tr><td><strong>조건 검사 (Condition Testing)</strong></td><td>모듈 안의 <strong>논리적 조건식</strong>(참/거짓)을 중점 검사</td></tr>
            <tr><td><strong>루프 검사 (Loop Testing)</strong></td><td><strong>반복 구조</strong>(0회, 1회, 최대 반복 등)를 중점 검사</td></tr>
            <tr><td><strong>데이터 흐름 검사 (Data Flow Testing)</strong></td><td>변수의 <strong>정의와 사용 위치</strong>(정의-사용 경로)를 중점 검사</td></tr>
          </table>

          <h3>3-4. 테스트 커버리지 6종 (실기 최단골)</h3>
          <p>커버리지(Coverage)는 테스트가 코드를 <strong>얼마나 충분히 실행했는지</strong>를 나타내는 척도다.
          아래로 갈수록 더 강한(더 많은 경우를 요구하는) 커버리지다.</p>
          <table>
            <tr><th>커버리지</th><th>정의 (무엇을 최소 한 번씩 보장하는가)</th></tr>
            <tr>
              <td><strong>구문(문장) 커버리지<br/>Statement Coverage</strong></td>
              <td>코드의 <strong>모든 문장</strong>이 최소 한 번 이상 실행되도록 보장</td>
            </tr>
            <tr>
              <td><strong>결정(분기) 커버리지<br/>Decision/Branch Coverage</strong></td>
              <td>모든 <strong>결정문(분기)의 전체 결과가 참/거짓</strong>을 각각 최소 한 번 이상 갖도록 보장</td>
            </tr>
            <tr>
              <td><strong>조건 커버리지<br/>Condition Coverage</strong></td>
              <td>결정문 안의 <strong>각 개별 조건식</strong>이 참/거짓을 각각 최소 한 번 이상 갖도록 보장
              (전체 결과는 고려하지 않음)</td>
            </tr>
            <tr>
              <td><strong>조건/결정 커버리지<br/>Condition/Decision Coverage</strong></td>
              <td><strong>전체 결정문의 참/거짓 + 각 개별 조건식의 참/거짓</strong>을 모두 최소 한 번씩 보장
              (결정 + 조건을 동시에 만족)</td>
            </tr>
            <tr>
              <td><strong>변경 조건/결정 커버리지<br/>MC/DC (Modified Condition/Decision)</strong></td>
              <td>각 개별 조건식이 <strong>다른 조건식과 무관하게 단독으로 전체 결정 결과를 바꾸는</strong> 경우를
              보장 (항공 등 고안전 분야 요구)</td>
            </tr>
            <tr>
              <td><strong>다중 조건 커버리지<br/>Multiple Condition Coverage</strong></td>
              <td>결정문 안 개별 조건식의 <strong>모든 참/거짓 조합</strong>(2ⁿ가지)을 보장 — 가장 강력</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 170" role="img" aria-label="커버리지 강도 순서">
              <line class="arrow" x1={20} y1={26} x2={876} y2={26} />
              <text class="small" x={20} y={16}>약함 (요구 조건 적음)</text>
              <text class="small" x={700} y={16}>강함 (요구 조건 많음)</text>

              <rect class="boxsoft" x={12} y={56} width={132} height={56} />
              <text class="strong" x={78} y={80} text-anchor="middle">구문</text>
              <text class="small" x={78} y={100} text-anchor="middle">(문장)</text>

              <rect class="boxsoft" x={158} y={56} width={132} height={56} />
              <text class="strong" x={224} y={80} text-anchor="middle">결정</text>
              <text class="small" x={224} y={100} text-anchor="middle">(분기)</text>

              <rect class="boxsoft" x={304} y={56} width={132} height={56} />
              <text class="strong" x={370} y={90} text-anchor="middle">조건</text>

              <rect class="box" x={450} y={56} width={132} height={56} />
              <text class="strong" x={516} y={90} text-anchor="middle">조건/결정</text>

              <rect class="box" x={596} y={56} width={132} height={56} />
              <text class="strong" x={662} y={80} text-anchor="middle">변경</text>
              <text class="strong" x={662} y={100} text-anchor="middle">조건/결정</text>

              <rect class="boxdark" x={742} y={56} width={132} height={56} />
              <text class="strong" x={808} y={80} text-anchor="middle">다중 조건</text>
              <text class="small" x={808} y={100} text-anchor="middle">(최강)</text>

              <line class="arrow" x1={144} y1={84} x2={154} y2={84} />
              <line class="arrow" x1={290} y1={84} x2={300} y2={84} />
              <line class="arrow" x1={436} y1={84} x2={446} y2={84} />
              <line class="arrow" x1={582} y1={84} x2={592} y2={84} />
              <line class="arrow" x1={728} y1={84} x2={738} y2={84} />

              <text class="small" x={450} y={140} text-anchor="middle">오른쪽 커버리지를 만족하면 왼쪽 커버리지도 대체로 함께 만족한다 (포함 관계)</text>
            </svg>
            <figcaption>도면 1. 커버리지 강도 순서 — 구문 → 결정 → 조건 → 조건/결정 → 변경 조건/결정 → 다중 조건</figcaption>
          </figure>

          <h3>3-5. 예시 — 구문 vs 결정 커버리지에 필요한 케이스 수</h3>
          <pre>{`read(x)          // S1
if (x > 0)       // D1 (판단문)
    y = 1        // S2  (참일 때만 실행)
print(y)         // S3`}</pre>
          <ul>
            <li><strong>구문(문장) 커버리지</strong>: x = 5 하나만 넣으면 S1 → D1 → S2 → S3 가 모두 실행된다.
            → 테스트 케이스 <strong>1개</strong>로 100% 달성.</li>
            <li><strong>결정(분기) 커버리지</strong>: D1이 참(x = 5)과 거짓(x = −3)을 모두 가져야 한다.
            → 테스트 케이스 <strong>2개</strong> 필요.</li>
          </ul>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            같은 코드라도 커버리지 기준이 강해질수록 필요한 테스트 케이스 수가 늘어난다.
            "구문 100%이지만 결정은 100%가 아닌 상황"(위 예에서 x = 5 하나만 실행한 경우)이 가능함을 이해하자.
          </div>
        </section>

        {/* ===================== 4. 블랙박스 테스트 ===================== */}
        <section id="blackbox">
          <h2>4. 블랙박스 테스트 — 명세 기반 기법 (실기 최다 빈출)</h2>
          <p class="sub">내부 코드를 보지 않고 요구사항 명세(입력과 출력)만으로 테스트하는 기법. 실기에서 가장 많이 나오는 영역으로, "설명 → 기법 이름 쓰기"가 기본 출제 형식이다.</p>

          <h3>4-1. 개념</h3>
          <p>블랙박스 테스트(Black-box Test)는 프로그램 내부 구조를 보지 않고
          <strong>요구사항 명세서(기능 명세)를 기반으로 입력과 출력만 확인</strong>하는 <strong>명세 기반(기능) 테스트</strong>다.
          사용자의 요구사항 관점에서 수행하므로 주로 <strong>통합 테스트 이후(시스템·인수 테스트)</strong> 단계에서 적용한다.</p>

          <h3>4-2. 주요 기법 (설명 → 기법 쓰기)</h3>
          <table>
            <tr><th>설명</th><th>기법</th></tr>
            <tr>
              <td>입력 데이터를 <strong>유효한 값과 무효한 값의 그룹(동치 클래스)으로 나누고</strong>
              각 그룹에서 대표값을 뽑아 테스트 (실기 단골)</td>
              <td><strong>동등 분할 (동치 분할, Equivalence Partitioning)</strong></td>
            </tr>
            <tr>
              <td>오류는 입력 범위의 <strong>경계에서 집중적으로 발생</strong>한다는 점에 착안해
              경계값과 그 바로 안팎의 값을 테스트 (실기 최다 빈출)</td>
              <td><strong>경계값 분석 (Boundary Value Analysis)</strong></td>
            </tr>
            <tr>
              <td>입력(원인)과 출력(효과)의 <strong>논리적 관계를 그래프로 표현</strong>하고,
              효용성 높은 테스트 케이스를 선정</td>
              <td><strong>원인-효과 그래프 (Cause-Effect Graph)</strong></td>
            </tr>
            <tr>
              <td>과거 경험이나 <strong>테스터의 감각·직관</strong>으로 오류가 날 만한 곳을 예측해 테스트</td>
              <td><strong>오류 추정 (Error Guessing)</strong></td>
            </tr>
            <tr>
              <td>시스템의 <strong>상태가 이벤트에 따라 어떻게 전이되는지</strong>를 모델링해
              상태 변화를 검증</td>
              <td><strong>상태 전이 테스트 (State Transition Testing)</strong></td>
            </tr>
            <tr>
              <td>여러 <strong>조건의 조합과 그에 따른 동작(결과)을 표</strong>로 정리해
              모든 조합을 테스트</td>
              <td><strong>결정 테이블 테스트 (Decision Table Testing)</strong></td>
            </tr>
            <tr>
              <td>사용자의 <strong>유스케이스(사용 사례) 시나리오</strong>를 기반으로
              실제 사용 흐름을 테스트</td>
              <td><strong>유스케이스 기반 테스트 (Use Case Testing)</strong></td>
            </tr>
            <tr>
              <td>대부분의 결함이 <strong>두 요소(파라미터)의 상호작용</strong>에서 발생한다는 점을 이용해,
              모든 값의 <strong>2개씩 조합</strong>을 최소 한 번씩 커버하도록 케이스 수를 줄이는 조합 기법</td>
              <td><strong>페어와이즈 테스트 (Pairwise Testing)</strong></td>
            </tr>
            <tr>
              <td>입력 도메인을 <strong>트리 구조로 분류(분석)</strong>한 뒤 잎 노드들을 조합해
              테스트 케이스를 설계</td>
              <td><strong>분류 트리 기법 (Classification Tree Method)</strong></td>
            </tr>
          </table>

          <h3>4-3. 경계값 분석 예시 (최다 빈출)</h3>
          <p>조건이 <strong>0 ≤ x ≤ 100</strong> 이라면, 경계인 0과 100을 중심으로 바로 바깥·경계·바로 안쪽 값을 뽑는다.</p>
          <pre>{`유효 범위: 0 ≤ x ≤ 100

  하한 경계  →  -1 (무효) ,   0 (경계) ,   1 (유효)
  상한 경계  →  99 (유효) , 100 (경계) , 101 (무효)

테스트 값: -1, 0, 1, 99, 100, 101`}</pre>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            <strong>동등 분할</strong> = "그룹(클래스)으로 나누어 대표값", <strong>경계값 분석</strong> = "경계와 그 안팎".
            설명 문장에 "경계"가 보이면 경계값 분석, "동치 클래스·그룹·대표값"이 보이면 동등 분할이다.
          </div>
        </section>

        {/* ===================== 5. V모델과 테스트 레벨 ===================== */}
        <section id="vmodel">
          <h2>5. V모델과 테스트 레벨 — 단위·통합·시스템·인수</h2>
          <p class="sub">개발 단계마다 대응하는 테스트 레벨이 있다는 것이 V모델의 핵심이다. 테스트 레벨 4가지의 정의와 알파/베타 테스트 구분이 단골이다.</p>

          <h3>5-1. V모델 — 개발 단계와 테스트 레벨의 대응</h3>
          <p>V모델은 폭포수 모델에 <strong>테스트 단계를 확장</strong>한 모델로, 왼쪽의 개발(구체화) 단계와
          오른쪽의 테스트(검증) 단계가 서로 대응한다:
          <strong>요구사항 분석 ↔ 인수 테스트</strong>, <strong>설계 ↔ 시스템/통합 테스트</strong>, <strong>구현 ↔ 단위 테스트</strong>.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="V모델">
              <rect class="boxdark" x={20} y={18} width={170} height={44} />
              <text class="strong" x={105} y={45} text-anchor="middle">요구사항 분석</text>
              <rect class="box" x={100} y={88} width={170} height={44} />
              <text class="strong" x={185} y={115} text-anchor="middle">기본(시스템) 설계</text>
              <rect class="box" x={180} y={158} width={170} height={44} />
              <text class="strong" x={265} y={185} text-anchor="middle">상세 설계</text>
              <rect class="boxsoft" x={260} y={228} width={170} height={44} />
              <text class="strong" x={345} y={255} text-anchor="middle">구현 (코딩)</text>

              <rect class="boxsoft" x={470} y={228} width={170} height={44} />
              <text class="strong" x={555} y={255} text-anchor="middle">단위 테스트</text>
              <rect class="box" x={550} y={158} width={170} height={44} />
              <text class="strong" x={635} y={185} text-anchor="middle">통합 테스트</text>
              <rect class="box" x={630} y={88} width={170} height={44} />
              <text class="strong" x={715} y={115} text-anchor="middle">시스템 테스트</text>
              <rect class="boxdark" x={710} y={18} width={170} height={44} />
              <text class="strong" x={795} y={45} text-anchor="middle">인수 테스트</text>

              <line class="life" x1={195} y1={40} x2={705} y2={40} />
              <line class="life" x1={275} y1={110} x2={625} y2={110} />
              <line class="life" x1={355} y1={180} x2={545} y2={180} />
              <text class="small" x={450} y={32} text-anchor="middle">요구사항이 인수 테스트의 기준</text>
              <text class="small" x={450} y={102} text-anchor="middle">설계가 시스템·통합 테스트의 기준</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1={112} y1={64} x2={178} y2={86} />
                <text class="small" x={110} y={84}>구체화</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1={192} y1={134} x2={258} y2={156} />
                <text class="small" x={190} y={154}>구체화</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1={272} y1={204} x2={338} y2={226} />
                <text class="small" x={270} y={224}>코딩</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1={434} y1={250} x2={466} y2={250} />
                <text class="small" x={450} y={292} text-anchor="middle">테스트 시작</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1={562} y1={226} x2={628} y2={204} />
                <text class="small" x={628} y={228}>모듈 결합</text>
              </g>
              <g class="msg" data-step="6">
                <line class="arrow" x1={642} y1={156} x2={708} y2={134} />
                <text class="small" x={708} y={158}>전체 시스템</text>
              </g>
              <g class="msg" data-step="7">
                <line class="arrow" x1={722} y1={86} x2={788} y2={64} />
                <text class="small" x={788} y={88}>사용자 인수</text>
              </g>
            </svg>
            <figcaption>도면 2. V모델 — 왼쪽 개발 단계와 오른쪽 테스트 레벨이 점선으로 대응한다</figcaption>
          </figure>

          <h3>5-2. 테스트 레벨 4가지 (실기 단골)</h3>
          <table>
            <tr><th>레벨</th><th>정의</th></tr>
            <tr>
              <td><strong>단위 테스트 (Unit Test)</strong></td>
              <td>구현 단계에서 <strong>개별 모듈(함수·클래스)</strong> 하나하나를 독립적으로 테스트.
              주로 화이트박스 기법 사용</td>
            </tr>
            <tr>
              <td><strong>통합 테스트 (Integration Test)</strong></td>
              <td>단위 테스트를 통과한 모듈들을 <strong>결합하면서 모듈 간 인터페이스</strong>의 오류를 검사
              (상향식·하향식·빅뱅)</td>
            </tr>
            <tr>
              <td><strong>시스템 테스트 (System Test)</strong></td>
              <td>완전히 통합된 <strong>전체 시스템</strong>이 기능·비기능(성능 등) 요구사항을 만족하는지
              실제 환경과 유사한 환경에서 검사</td>
            </tr>
            <tr>
              <td><strong>인수 테스트 (Acceptance Test)</strong></td>
              <td><strong>사용자(고객)가 요구사항 충족 여부를 직접 확인</strong>하고 인수 여부를 결정하는 테스트</td>
            </tr>
          </table>

          <h3>5-3. 인수 테스트의 종류 — 알파 vs 베타 (구분 최단골)</h3>
          <table>
            <tr><th>종류</th><th>수행 장소·주체</th><th>특징</th></tr>
            <tr>
              <td><strong>알파(Alpha) 테스트</strong></td>
              <td><strong>개발자 환경(개발 조직 내부)</strong>에서 사용자가 수행</td>
              <td>개발자가 지켜보는 <strong>통제된 환경</strong>에서 오류·사용상 문제를 함께 기록</td>
            </tr>
            <tr>
              <td><strong>베타(Beta) 테스트</strong></td>
              <td><strong>사용자 실제 환경</strong>에서 다수의 사용자가 수행</td>
              <td>개발자 통제 없이 사용자가 직접 사용해 보고 <strong>문제점을 개발자에게 보고</strong></td>
            </tr>
            <tr>
              <td><strong>계약 인수 테스트</strong></td>
              <td>발주자·개발사</td>
              <td><strong>계약 조건(계약서의 인수 기준)</strong> 충족 여부를 확인</td>
            </tr>
            <tr>
              <td><strong>규정 인수 테스트</strong></td>
              <td>감독 기관 등</td>
              <td>법·규정·<strong>표준(규제) 준수</strong> 여부를 확인</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            <strong>알파 = 개발자 환경(통제된 장소)</strong>, <strong>베타 = 사용자 환경(통제 없음)</strong>.
            "통제된", "개발자가 지켜보는"이 보이면 알파, "실제 사용 환경", "다수 사용자"가 보이면 베타.
          </div>
        </section>

        {/* ===================== 6. 테스트 케이스·시나리오·오라클 ===================== */}
        <section id="case">
          <h2>6. 테스트 케이스 · 시나리오 · 오라클</h2>
          <p class="sub">테스트를 실제로 "작성"할 때 필요한 산출물 세 가지. 케이스 구성 요소와 오라클 4유형의 "설명 → 유형 이름"이 단골이다.</p>

          <h3>6-1. 테스트 케이스 (Test Case) — 구성 요소 (실기 단골)</h3>
          <p>테스트 케이스는 특정 요구사항 준수 여부를 확인하기 위해 만든
          <strong>입력값, 실행 조건, 예상 결과의 집합</strong>이다. 대표 구성 요소는 다음과 같다.</p>
          <table>
            <tr><th>구성 요소</th><th>내용</th></tr>
            <tr><td><strong>식별자 (Identifier)</strong></td><td>테스트 케이스를 구분하는 고유 항목 식별 번호</td></tr>
            <tr><td><strong>테스트 항목 (Test Item)</strong></td><td>테스트할 대상 모듈·기능</td></tr>
            <tr><td><strong>입력 명세 (Input Specification)</strong></td><td>테스트에 사용할 입력값·조건</td></tr>
            <tr><td><strong>출력 명세 (Output Specification)</strong></td><td>입력에 대해 기대하는 <strong>예상 결과</strong></td></tr>
            <tr><td><strong>환경 설정 (Environmental Needs)</strong></td><td>테스트 수행에 필요한 하드웨어·소프트웨어 환경</td></tr>
          </table>

          <h3>6-2. 테스트 시나리오 (Test Scenario)</h3>
          <p>테스트 시나리오는 <strong>여러 테스트 케이스를 묶어 케이스의 동작(적용) 순서</strong>를 기술한 문서다.
          어떤 케이스를 어떤 순서로, 어떤 절차에 따라 수행할지를 정의해 테스트가 누락 없이 진행되게 한다.</p>
          <h4>작성 시 유의점</h4>
          <ul>
            <li>시스템별·모듈별·항목별로 <strong>분리해 작성</strong>한다 (하나의 시나리오에 모든 것을 몰아넣지 않는다).</li>
            <li>각 케이스의 <strong>사전 조건, 입력 데이터, 수행 절차, 예상 결과</strong>를 명확히 기재한다.</li>
            <li>요구사항이나 기능 명세와 <strong>추적 가능</strong>하도록 유지하고, 유스케이스 흐름을 반영한다.</li>
          </ul>

          <h3>6-3. 테스트 오라클 (Test Oracle) 4유형 (설명 → 유형 단골)</h3>
          <p>테스트 오라클은 테스트 결과가 올바른지 판단하기 위해 <strong>사전에 정의된 참(기대) 값을 대입해 비교</strong>하는
          기법·활동이다.</p>
          <table>
            <tr><th>설명</th><th>유형</th></tr>
            <tr>
              <td><strong>모든 입력값</strong>에 대해 기대 결과를 제공해 발생한 오류를 모두 검출할 수 있는
              이상적 오라클 (비용이 매우 크다)</td>
              <td><strong>참(True) 오라클</strong></td>
            </tr>
            <tr>
              <td>전체가 아닌 <strong>특정 몇 개의 입력값</strong>에 대해서만 기대 결과를 제공</td>
              <td><strong>샘플링(Sampling) 오라클</strong></td>
            </tr>
            <tr>
              <td>샘플링 오라클을 개선한 것으로, 특정 입력값은 정확한 결과를 제공하고
              나머지는 <strong>휴리스틱(추정)으로 처리</strong></td>
              <td><strong>휴리스틱(Heuristic) 오라클</strong></td>
            </tr>
            <tr>
              <td>애플리케이션 <strong>변경 전과 후의 결과값이 동일한지</strong>를 확인</td>
              <td><strong>일관성 검사(Consistent) 오라클</strong></td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            키워드 매칭: "모든 입력" = 참, "특정 몇 개" = 샘플링, "샘플링 + 추정" = 휴리스틱,
            "변경 전후 동일" = 일관성 검사.
          </div>
        </section>

        {/* ===================== 7. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">아래 설명을 읽고 답을 먼저 떠올린 뒤 "정답 보기"를 눌러 확인하자. 실기 기출 형식(용어 쓰기·계산·구분)으로 구성했다.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 블랙박스 테스트 기법을 쓰시오.</p>
            <pre>{`오류는 입력 범위의 경계 부근에서 집중적으로 발생한다는 점에 착안하여,
입력 조건이 0 ≤ x ≤ 100 일 때 -1, 0, 1, 99, 100, 101 과 같이
경계와 그 바로 안팎의 값을 테스트 케이스로 선정하는 기법이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>경계값 분석 (Boundary Value Analysis)<br/>
                <span class="label">해설: </span>"경계"라는 키워드가 결정적이다. 경계값과 경계 바로 안팎의 값을 테스트하는 실기 최다 빈출 기법.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 블랙박스 테스트 기법을 쓰시오.</p>
            <pre>{`입력 데이터를 유효한 값의 그룹과 무효한 값의 그룹(동치 클래스)으로 나누고,
각 그룹에서 대표값을 하나씩 선정하여 테스트 케이스를 설계하는 기법이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>동등 분할 (동치 분할, Equivalence Partitioning)<br/>
                <span class="label">해설: </span>"그룹(동치 클래스)으로 나누어 대표값 선정"이 핵심 키워드. 경계값 분석과 짝으로 자주 출제된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">입력(원인)과 출력(효과) 사이의 논리적 관계를 그래프로 표현하고, 효용성이 높은
            테스트 케이스를 선정하는 블랙박스 테스트 기법을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>원인-효과 그래프 (Cause-Effect Graph) 기법<br/>
                <span class="label">해설: </span>"원인과 효과의 관계를 그래프로" 표현한다는 문장이 그대로 정의다. 결정 테이블과 함께 쓰이기도 한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">테스트의 기본 원리 중, 동일한 테스트 케이스를 반복해서 사용하면 더 이상 새로운 결함을
            발견하지 못하므로 테스트 케이스를 정기적으로 점검·개선해야 한다는 원리를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>살충제 패러독스 (Pesticide Paradox)<br/>
                <span class="label">해설: </span>같은 살충제를 계속 쓰면 벌레(결함)에 내성이 생긴다는 비유. "동일 케이스 반복 → 결함 발견 불가"가 키워드다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 테스트 커버리지를 쓰시오.</p>
            <pre>{`프로그램 안의 모든 결정문(분기)에 대해 전체 조건식의 결과가
참(True)과 거짓(False)을 각각 최소 한 번 이상 갖도록 보장하는 커버리지이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>결정 커버리지 (분기 커버리지, Decision/Branch Coverage)<br/>
                <span class="label">해설: </span>"전체 조건식(결정)의 참/거짓"이면 결정 커버리지. "개별 조건식의 참/거짓"이면 조건 커버리지다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">전체 결정문의 결과와 관계없이, 결정문 안의 <strong>각 개별 조건식</strong>이 참과 거짓을
            각각 최소 한 번 이상 갖도록 보장하는 커버리지를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>조건 커버리지 (Condition Coverage)<br/>
                <span class="label">해설: </span>결정 커버리지와의 구분 포인트: 조건 커버리지는 "개별 조건식" 기준이며 전체 결과(분기)는 고려하지 않는다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 괄호 ①, ②에 들어갈 인수 테스트의 종류를 각각 쓰시오.</p>
            <pre>{`( ① ) 테스트: 개발자의 장소(통제된 환경)에서 개발자가 지켜보는 가운데
              사용자가 수행하는 인수 테스트
( ② ) 테스트: 사용자의 실제 환경에서 개발자의 통제 없이 다수의 사용자가
              직접 사용해 보고 문제점을 보고하는 인수 테스트`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 알파(Alpha) 테스트, ② 베타(Beta) 테스트<br/>
                <span class="label">해설: </span>"통제된 환경·개발자 장소" = 알파, "실제 사용자 환경·통제 없음" = 베타. 구분 최단골이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">테스트 오라클 중, 전체 입력값이 아닌 <strong>특정 몇 개의 입력값</strong>에 대해서만
            기대하는 결과를 제공하는 오라클 유형을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>샘플링(Sampling) 오라클<br/>
                <span class="label">해설: </span>"모든 입력" = 참 오라클, "특정 몇 개" = 샘플링, "샘플링 + 나머지는 추정" = 휴리스틱, "변경 전후 동일" = 일관성 검사.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">어떤 모듈의 제어 흐름 그래프에서 간선(Edge)이 12개, 노드(Node)가 9개일 때
            맥케이브(McCabe)의 순환 복잡도 V(G)를 계산하시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>5<br/>
                <span class="label">해설: </span>V(G) = E − N + 2 = 12 − 9 + 2 = 5. 독립 경로가 5개이므로 테스트 케이스도 최소 5개 필요하다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">워크스루(Walkthrough), 인스펙션(Inspection), 동료 검토(Peer Review)와 같이
            프로그램을 <strong>실행하지 않고</strong> 명세서나 소스 코드를 검토하여 결함을 찾는 테스트는
            정적 테스트와 동적 테스트 중 무엇에 해당하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>정적 테스트 (Static Test)<br/>
                <span class="label">해설: </span>실행 여부가 기준이다. 실행하지 않으면 정적(리뷰·정적 분석), 실행하면 동적(화이트박스·블랙박스).
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">테스트 하네스</span>
            <span class="kw">테스트 드라이버 / 스텁</span>
            <span class="kw">상향식·하향식 통합</span>
            <span class="kw">빅뱅 통합</span>
            <span class="kw">회귀 테스트 자동화</span>
            <span class="kw">결함 관리 (심각도·우선순위)</span>
            <span class="kw">테스트 케이스 자동 생성 도구</span>
            <span class="kw">스모크 테스트</span>
          </p>
        </section>

        <footer>애플리케이션 테스트 케이스 설계 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
