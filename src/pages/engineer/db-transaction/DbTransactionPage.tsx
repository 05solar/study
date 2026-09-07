import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './db-transaction.css'

export default defineComponent({
  name: 'DbTransactionPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>데이터베이스 기본 · 트랜잭션</h1>
          <p>정보처리기사 실기 대비 학습 문서. 관계 데이터 연산(관계 대수 σ·π·⋈·÷ / 관계 해석) →
          트랜잭션의 개념과 TCL → ACID 4대 특성 → 트랜잭션 상태 전이 5단계 →
          병행 제어(로킹 · 2PL · 타임스탬프 · MVCC) → 회복(REDO/UNDO · 체크포인트) 순서로,
          실기 단골 개념을 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 상태·요청의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#algebra" onClick={(e) => scrollToId(e, 'algebra')}>관계 데이터 연산 — 관계 대수와 관계 해석</a></li>
            <li><a href="#transaction" onClick={(e) => scrollToId(e, 'transaction')}>트랜잭션 개념과 TCL</a></li>
            <li><a href="#acid" onClick={(e) => scrollToId(e, 'acid')}>트랜잭션 특성 — ACID</a></li>
            <li><a href="#state" onClick={(e) => scrollToId(e, 'state')}>트랜잭션 상태 5가지와 전이</a></li>
            <li><a href="#concurrency" onClick={(e) => scrollToId(e, 'concurrency')}>병행 제어 — 문제점과 기법</a></li>
            <li><a href="#recovery" onClick={(e) => scrollToId(e, 'recovery')}>회복(Recovery) — REDO/UNDO와 로그</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 관계 데이터 연산 ===================== */}
        <section id="algebra">
          <h2>1. 관계 데이터 연산 — 관계 대수와 관계 해석</h2>
          <p class="sub">관계 대수는 "어떻게(How) 유도하는가"를 절차적으로 기술하고, 관계 해석은 "무엇(What)을 원하는가"만 비절차적으로 기술한다. 순수 관계 연산 4가지의 기호는 실기 최단골이다.</p>

          <h3>1-1. 관계 대수(Relational Algebra) — 절차적 언어</h3>
          <p>관계 대수는 원하는 릴레이션을 유도하기 위해 연산자와 연산 규칙을 이용하는
          <strong> 절차적(Procedural) 언어</strong>다. 피연산자와 결과가 모두 릴레이션이며,
          <strong>순수 관계 연산 4가지</strong>와 <strong>일반 집합 연산 4가지</strong>로 나뉜다.</p>

          <h4>순수 관계 연산 4가지 (기호 암기 — 실기 최단골)</h4>
          <table>
            <tr><th>연산</th><th>기호</th><th>기능</th></tr>
            <tr>
              <td><strong>Select (셀렉트)</strong></td>
              <td><strong>σ (시그마)</strong></td>
              <td>조건을 만족하는 <strong>행(튜플)</strong>을 선택한다. 릴레이션을 <strong>수평(가로)</strong>으로 자르는 연산</td>
            </tr>
            <tr>
              <td><strong>Project (프로젝트)</strong></td>
              <td><strong>π (파이)</strong></td>
              <td>지정한 <strong>열(속성)</strong>만 추출한다. 릴레이션을 <strong>수직(세로)</strong>으로 자르며, 결과에서 <strong>중복 튜플은 제거</strong>된다</td>
            </tr>
            <tr>
              <td><strong>Join (조인)</strong></td>
              <td><strong>⋈</strong></td>
              <td>두 릴레이션을 <strong>공통 속성</strong>을 기준으로 결합하여 하나의 릴레이션을 만든다</td>
            </tr>
            <tr>
              <td><strong>Division (디비전)</strong></td>
              <td><strong>÷</strong></td>
              <td>나누는 릴레이션 R2의 <strong>모든 값과 대응되는 튜플</strong>만 R1에서 골라낸다 ("모두를 만족하는 것 찾기")</td>
            </tr>
          </table>

          <h4>일반 집합 연산 4가지</h4>
          <table>
            <tr><th>연산</th><th>기호</th><th>기능</th></tr>
            <tr><td><strong>합집합 (Union)</strong></td><td><strong>∪</strong></td><td>두 릴레이션의 튜플을 <strong>모두 합침</strong> (중복 제거)</td></tr>
            <tr><td><strong>교집합 (Intersection)</strong></td><td><strong>∩</strong></td><td>두 릴레이션에 <strong>공통으로 존재</strong>하는 튜플만 추출</td></tr>
            <tr><td><strong>차집합 (Difference)</strong></td><td><strong>−</strong></td><td>R1에는 있지만 <strong>R2에는 없는</strong> 튜플만 추출</td></tr>
            <tr><td><strong>카티션 곱 (Cartesian Product)</strong></td><td><strong>×</strong></td><td>두 릴레이션 튜플들의 <strong>모든 조합</strong>을 만든다 (차수는 더하고, 튜플 수는 곱한다)</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            합집합·교집합·차집합은 두 릴레이션의 <strong>속성 구성이 같아야(합병 가능)</strong> 연산할 수 있다.
            카티션 곱의 결과 크기: <strong>차수(degree)는 두 릴레이션 차수의 합, 카디널리티(튜플 수)는 곱</strong>.
          </div>

          <h3>1-2. 예시로 보는 σ와 π</h3>
          <p>릴레이션 [학생]에 Select와 Project를 적용한 결과를 비교해 보자.
          σ는 행이 줄고, π는 열이 줄면서 <strong>중복이 제거</strong>되는 점이 포인트다.</p>
          <div class="rel-pair">
            <div class="rel">
              <span class="rel-name">원본 릴레이션 [학생]</span>
              <table>
                <tr><th>이름</th><th>학년</th><th>전공</th></tr>
                <tr><td>민수</td><td>2</td><td>컴퓨터</td></tr>
                <tr><td>지영</td><td>3</td><td>전자</td></tr>
                <tr><td>수한</td><td>2</td><td>컴퓨터</td></tr>
                <tr><td>하늘</td><td>1</td><td>경영</td></tr>
              </table>
            </div>
            <div class="rel">
              <span class="rel-name">σ 학년=2 (학생) — 행 선택</span>
              <table>
                <tr><th>이름</th><th>학년</th><th>전공</th></tr>
                <tr><td>민수</td><td>2</td><td>컴퓨터</td></tr>
                <tr><td>수한</td><td>2</td><td>컴퓨터</td></tr>
              </table>
            </div>
            <div class="rel">
              <span class="rel-name">π 전공 (학생) — 열 추출 + 중복 제거</span>
              <table>
                <tr><th>전공</th></tr>
                <tr><td>컴퓨터</td></tr>
                <tr><td>전자</td></tr>
                <tr><td>경영</td></tr>
              </table>
            </div>
          </div>

          <h3>1-3. 관계 해석(Relational Calculus) — 비절차적 언어</h3>
          <p>관계 해석은 원하는 정보가 <strong>무엇(What)</strong>인지만 정의하는
          <strong> 비절차적(Non-Procedural) 언어</strong>로, 수학의 <strong>술어 해석(Predicate Calculus)</strong>에
          기반한다. 변수의 종류에 따라 <strong>튜플 관계 해석</strong>과 <strong>도메인 관계 해석</strong>으로 나뉜다.</p>
          <table>
            <tr><th>구분</th><th>관계 대수</th><th>관계 해석</th></tr>
            <tr><td>성격</td><td><strong>절차적</strong> — 어떻게(How) 구할지 순서를 기술</td><td><strong>비절차적</strong> — 무엇(What)을 원하는지만 기술</td></tr>
            <tr><td>기반</td><td>연산자(σ, π, ⋈, ÷, ∪ 등)</td><td>술어 해석 (∃ 존재 정량자, ∀ 전칭 정량자)</td></tr>
            <tr><td>표현력</td><td colspan="2">두 언어의 표현 능력은 <strong>동등</strong>하다 (상호 변환 가능)</td></tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "절차적 = 관계 대수, 비절차적 = 관계 해석" 구분이 단골 출제. 이름이 비슷해 뒤집어 낸 보기에 속지 말 것.
          </div>
        </section>

        {/* ===================== 2. 트랜잭션 개념 ===================== */}
        <section id="transaction">
          <h2>2. 트랜잭션 개념과 TCL</h2>
          <p class="sub">트랜잭션의 정의 문장("논리적 작업 단위")과 TCL 명령어 3가지는 그대로 답안에 쓰게 되는 암기 대상이다.</p>

          <h3>2-1. 트랜잭션(Transaction)의 정의</h3>
          <p><strong>트랜잭션</strong>은 데이터베이스의 상태를 변환시키는 <strong>하나의 논리적 작업 단위(Logical Unit of Work)</strong>를
          구성하는 연산들의 집합이다. 예를 들어 계좌 이체는 "출금 UPDATE + 입금 UPDATE" 두 연산이지만
          논리적으로는 <strong>분리할 수 없는 한 덩어리</strong>이며, 전부 성공하거나 전부 취소되어야 한다.</p>
          <ul>
            <li>병행 제어와 <strong>회복 작업의 기본 단위</strong>가 된다.</li>
            <li>하나의 트랜잭션은 <strong>COMMIT(완료)</strong>되거나 <strong>ROLLBACK(철회)</strong>되어야 한다.</li>
          </ul>

          <h3>2-2. TCL (Transaction Control Language) — 실기 단골</h3>
          <table>
            <tr><th>명령어</th><th>기능</th></tr>
            <tr>
              <td><strong>COMMIT</strong></td>
              <td>트랜잭션이 수행한 변경 내용을 <strong>데이터베이스에 영구적으로 반영</strong>하고 트랜잭션을 정상 종료한다</td>
            </tr>
            <tr>
              <td><strong>ROLLBACK</strong></td>
              <td>트랜잭션이 수행한 변경 내용을 <strong>모두 취소</strong>하고 트랜잭션 <strong>이전 상태로 되돌린다</strong></td>
            </tr>
            <tr>
              <td><strong>SAVEPOINT</strong></td>
              <td>트랜잭션 내에 <strong>저장점(중간 지점)</strong>을 만들어, 전체가 아닌
              <strong>저장점까지 부분 ROLLBACK</strong>할 수 있게 한다 (ROLLBACK TO 저장점명)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            TCL은 SQL 분류에서 DCL에 포함시키기도 하지만, 실기에서는
            <strong> COMMIT · ROLLBACK · SAVEPOINT = 트랜잭션 제어어(TCL)</strong>로 답하는 것이 안전하다.
          </div>
        </section>

        {/* ===================== 3. ACID ===================== */}
        <section id="acid">
          <h2>3. 트랜잭션 특성 — ACID</h2>
          <p class="sub">실기 최단골: 특성의 "설명 문장"을 주고 특성명을 쓰게 한다. 네 정의를 문장째 정확히 외우자.</p>

          <table>
            <tr><th>특성</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td><strong>원자성</strong></td>
              <td>Atomicity</td>
              <td>트랜잭션의 연산은 데이터베이스에 <strong>모두 반영되거나(All), 전혀 반영되지 않아야(Nothing)</strong> 한다.
              일부만 수행된 상태로 끝나면 안 된다 (All or Nothing)</td>
            </tr>
            <tr>
              <td><strong>일관성</strong></td>
              <td>Consistency</td>
              <td>트랜잭션이 성공적으로 완료되면 데이터베이스는 <strong>모순 없이 일관된 상태를 유지</strong>해야 한다.
              실행 전과 실행 후의 데이터베이스 상태가 같은 제약 조건을 만족한다</td>
            </tr>
            <tr>
              <td><strong>격리성 (고립성)</strong></td>
              <td>Isolation</td>
              <td>둘 이상의 트랜잭션이 병행 실행될 때, 어느 하나의 트랜잭션이 실행 중이면
              다른 트랜잭션은 그 <strong>중간 수행 결과에 접근(참조)할 수 없다</strong></td>
            </tr>
            <tr>
              <td><strong>영속성 (지속성)</strong></td>
              <td>Durability</td>
              <td>성공적으로 <strong>완료된 트랜잭션의 결과는</strong> 시스템에 장애가 발생하더라도
              <strong>영구적으로 반영(보존)</strong>되어야 한다</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            설명 → 특성명 연결 고리: <strong>"All or Nothing" = 원자성</strong>,
            <strong>"모순 없는 상태 유지" = 일관성</strong>,
            <strong>"중간 결과 접근 불가" = 격리성</strong>,
            <strong>"장애가 나도 영구 반영" = 영속성</strong>.
            격리성은 "고립성", 영속성은 "지속성"으로도 출제된다 — 둘 다 정답으로 인정되는 동의어다.
          </div>
        </section>

        {/* ===================== 4. 트랜잭션 상태 ===================== */}
        <section id="state">
          <h2>4. 트랜잭션 상태 5가지와 전이</h2>
          <p class="sub">활동 → 부분 완료 → 완료의 성공 경로와, 실패 → 철회의 실패 경로를 상태 전이도로 그려 두면 괄호 문제를 놓치지 않는다.</p>

          <table>
            <tr><th>상태</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td><strong>활동</strong></td><td>Active</td>
              <td>트랜잭션이 <strong>실행 중</strong>인 상태</td>
            </tr>
            <tr>
              <td><strong>부분 완료</strong></td><td>Partially Committed</td>
              <td><strong>마지막 연산까지 실행했지만</strong>, 결과가 아직 데이터베이스(디스크)에
              <strong>반영되지 않은</strong> 상태 — COMMIT 직전 단계</td>
            </tr>
            <tr>
              <td><strong>완료</strong></td><td>Committed</td>
              <td>트랜잭션이 성공적으로 끝나 <strong>COMMIT 연산을 실행한</strong> 상태.
              결과가 데이터베이스에 영구 반영되었다</td>
            </tr>
            <tr>
              <td><strong>실패</strong></td><td>Failed</td>
              <td>오류가 발생하여 트랜잭션 실행이 <strong>중단된</strong> 상태 (더 이상 정상 진행 불가)</td>
            </tr>
            <tr>
              <td><strong>철회</strong></td><td>Aborted</td>
              <td>트랜잭션이 비정상 종료되어 <strong>ROLLBACK 연산을 수행한</strong> 상태.
              실행 이전 상태로 되돌아갔으며, 재시작하거나 폐기한다</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 320" role="img" aria-label="트랜잭션 상태 전이도">
              {/* 상태 상자 */}
              <rect class="boxdark" x="60" y="130" width="170" height="60" />
              <text x="145" y="155" text-anchor="middle" class="strong">활동</text>
              <text x="145" y="176" text-anchor="middle" class="small">Active — 실행 중</text>

              <rect class="boxsoft" x="370" y="40" width="190" height="60" />
              <text x="465" y="65" text-anchor="middle" class="strong">부분 완료</text>
              <text x="465" y="86" text-anchor="middle" class="small">Partially Committed</text>

              <rect class="box" x="680" y="40" width="170" height="60" />
              <text x="765" y="65" text-anchor="middle" class="strong">완료</text>
              <text x="765" y="86" text-anchor="middle" class="small">Committed</text>

              <rect class="boxsoft" x="370" y="220" width="170" height="60" />
              <text x="455" y="245" text-anchor="middle" class="strong">실패</text>
              <text x="455" y="266" text-anchor="middle" class="small">Failed — 중단</text>

              <rect class="box" x="680" y="220" width="170" height="60" />
              <text x="765" y="245" text-anchor="middle" class="strong">철회</text>
              <text x="765" y="266" text-anchor="middle" class="small">Aborted — 원상 복구</text>

              {/* 정적 경로: 부분 완료 중 장애 → 실패 */}
              <line class="arrow ret" x1="465" y1="100" x2="460" y2="216" />
              <text x="512" y="165" text-anchor="middle" class="small">반영 실패 시</text>

              {/* 애니메이션 단계: 성공 경로 → 실패 경로 */}
              <g class="msg" data-step="1">
                <line class="arrow" x1="230" y1="145" x2="366" y2="82" />
                <text x="280" y="90" text-anchor="middle" class="small">1. 마지막 연산 실행 완료</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="560" y1="70" x2="676" y2="70" />
                <text x="618" y="30" text-anchor="middle" class="small">2. COMMIT — 디스크 반영</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="230" y1="178" x2="366" y2="240" />
                <text x="268" y="235" text-anchor="middle" class="small">3. 오류 발생 — 실행 중단</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="540" y1="250" x2="676" y2="250" />
                <text x="608" y="305" text-anchor="middle" class="small">4. ROLLBACK — 연산 취소</text>
              </g>
            </svg>
            <figcaption>도면 1. 트랜잭션 상태 전이도 — 성공 시 활동 → 부분 완료 → 완료,
            오류 발생 시 활동(또는 부분 완료) → 실패 → 철회로 전이한다.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <strong>부분 완료</strong>는 "다 실행했지만 아직 디스크에 반영 전",
            <strong>완료</strong>는 "COMMIT까지 끝남", <strong>철회</strong>는 "ROLLBACK까지 끝남".
            실패와 철회의 차이(중단됨 vs 되돌림 완료)를 구분해서 써야 한다.
          </div>
        </section>

        {/* ===================== 5. 병행 제어 ===================== */}
        <section id="concurrency">
          <h2>5. 병행 제어 — 문제점과 기법</h2>
          <p class="sub">병행 제어(Concurrency Control)는 여러 트랜잭션을 동시에 수행할 때 일관성을 해치지 않도록 제어하는 기술이다. 문제점 4가지의 용어와, 로킹 단위 크기의 관계가 최단골이다.</p>

          <h3>5-1. 병행 수행의 문제점 4가지 (실기 단골)</h3>
          <table>
            <tr><th>문제점</th><th>영문</th><th>설명</th></tr>
            <tr>
              <td><strong>갱신 손실</strong></td><td>Lost Update</td>
              <td>두 트랜잭션이 <strong>같은 데이터를 동시에 갱신</strong>할 때,
              한 트랜잭션의 갱신 결과를 다른 트랜잭션이 <strong>덮어써서 사라지는</strong> 현상</td>
            </tr>
            <tr>
              <td><strong>현황 파악 오류 (모순성)</strong></td><td>Inconsistency</td>
              <td>한 트랜잭션이 갱신하는 <strong>중간에</strong> 다른 트랜잭션이 개입하여
              데이터베이스가 <strong>서로 모순된 상태</strong>가 되는 현상</td>
            </tr>
            <tr>
              <td><strong>연쇄 복귀</strong></td><td>Cascading Rollback</td>
              <td>병행 중인 어느 한 트랜잭션이 ROLLBACK되면, 그 트랜잭션의 결과를 참조한
              <strong>다른 트랜잭션들까지 연쇄적으로 ROLLBACK</strong>해야 하는 현상</td>
            </tr>
            <tr>
              <td><strong>비완료 의존성</strong></td><td>Uncommitted Dependency</td>
              <td>아직 <strong>완료(COMMIT)되지 않은</strong> 트랜잭션의 <strong>중간 결과를 다른 트랜잭션이 참조</strong>하여
              발생하는 오류 (Dirty Read)</td>
            </tr>
          </table>

          <h3>5-2. 로킹(Locking) — 공유 락과 배타 락</h3>
          <p>로킹은 트랜잭션이 데이터에 접근하기 전에 <strong>잠금(Lock)을 획득</strong>해야만
          연산을 수행할 수 있게 하는 대표적 병행 제어 기법이다.</p>
          <table>
            <tr><th>락</th><th>영문</th><th>허용 연산</th><th>동시 획득</th></tr>
            <tr>
              <td><strong>공유 락</strong></td><td>Shared Lock (S-lock)</td>
              <td><strong>읽기(READ)만 가능</strong>, 쓰기 불가</td>
              <td>여러 트랜잭션이 <strong>동시에 획득 가능</strong></td>
            </tr>
            <tr>
              <td><strong>배타 락</strong></td><td>Exclusive Lock (X-lock)</td>
              <td><strong>읽기·쓰기 모두 가능</strong> (독점)</td>
              <td>한 트랜잭션만 획득 — 다른 트랜잭션은 <strong>읽기도 불가</strong></td>
            </tr>
          </table>

          <h4>로킹 단위(Locking Granularity)와 병행성 (실기 최단골)</h4>
          <p>로킹의 대상이 되는 단위는 데이터베이스 전체부터 필드 하나까지 다양하다.
          <strong>단위가 커지면 관리할 락의 수가 줄어 오버헤드는 감소하지만, 동시에 접근할 수 있는
          트랜잭션이 줄어 병행성(공유도)도 낮아진다.</strong> 반대로 단위가 작아지면 병행성은 높아지고
          로킹 오버헤드는 커진다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 260" role="img" aria-label="로킹 단위 크기와 병행성·오버헤드 관계 도면">
              {/* 위쪽: 단위가 작아지는 방향 */}
              <line class="arrow" x1="120" y1="52" x2="790" y2="52" />
              <text x="450" y="24" text-anchor="middle" class="strong">로킹 단위가 작아짐 →</text>
              <text x="450" y="44" text-anchor="middle" class="small">락 개수 증가 · 로킹 오버헤드 증가 · 병행성(공유도) 증가</text>

              {/* 로킹 단위 스펙트럼 */}
              <rect class="boxdark" x="70" y="100" width="170" height="56" />
              <text x="155" y="124" text-anchor="middle" class="strong">데이터베이스</text>
              <text x="155" y="145" text-anchor="middle" class="small">가장 큰 단위</text>
              <rect class="boxsoft" x="290" y="100" width="150" height="56" />
              <text x="365" y="124" text-anchor="middle" class="strong">파일 · 테이블</text>
              <text x="365" y="145" text-anchor="middle" class="small">릴레이션</text>
              <rect class="boxsoft" x="490" y="100" width="150" height="56" />
              <text x="565" y="124" text-anchor="middle" class="strong">레코드</text>
              <text x="565" y="145" text-anchor="middle" class="small">튜플(행)</text>
              <rect class="box" x="690" y="100" width="150" height="56" />
              <text x="765" y="124" text-anchor="middle" class="strong">필드</text>
              <text x="765" y="145" text-anchor="middle" class="small">속성 — 가장 작은 단위</text>

              <line class="arrow" x1="240" y1="128" x2="286" y2="128" />
              <line class="arrow" x1="440" y1="128" x2="486" y2="128" />
              <line class="arrow" x1="640" y1="128" x2="686" y2="128" />

              {/* 아래쪽: 단위가 커지는 방향 */}
              <line class="arrow" x1="790" y1="205" x2="120" y2="205" />
              <text x="450" y="240" text-anchor="middle" class="strong">← 로킹 단위가 커짐</text>
              <text x="450" y="196" text-anchor="middle" class="small">락 개수 감소 · 로킹 오버헤드 감소 · 병행성(공유도) 감소</text>
            </svg>
            <figcaption>도면 2. 로킹 단위 크기와 병행성·오버헤드의 관계 —
            단위가 크면 관리가 쉬운 대신 병행성이 낮아지고, 단위가 작으면 병행성은 높지만 오버헤드가 커진다.</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            암기 공식: <strong>로킹 단위 크면 → 락 수 감소, 오버헤드 감소, 병행성 감소</strong> /
            <strong>작으면 → 전부 반대(증가)</strong>. "단위가 크면 병행성이 높아진다"는 보기가 대표 함정이다.
          </div>

          <h3>5-3. 2단계 로킹 규약 (2PL, Two-Phase Locking)</h3>
          <p>모든 트랜잭션이 락 연산을 <strong>두 단계로 나누어</strong> 수행하게 하는 규약으로,
          <strong>직렬 가능성(Serializability)을 보장</strong>하는 대표 기법이다.</p>
          <ul>
            <li><strong>확장 단계 (Growing Phase):</strong> 트랜잭션이 락을 <strong>획득만 할 수 있고 해제할 수 없는</strong> 단계</li>
            <li><strong>수축 단계 (Shrinking Phase):</strong> 락을 <strong>해제만 할 수 있고 새로 획득할 수 없는</strong> 단계</li>
          </ul>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            2PL은 직렬 가능성을 보장하지만 <strong>교착상태(Deadlock)는 예방하지 못한다</strong>.
            "직렬 가능성 보장 O / 교착상태 발생 가능"을 세트로 기억하자.
          </div>

          <h3>5-4. 그 밖의 병행 제어 기법</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr>
              <td><strong>타임스탬프 순서<br/>(Timestamp Ordering)</strong></td>
              <td>트랜잭션 실행 <strong>시작 시각(타임스탬프)을 부여</strong>하고, 그 <strong>순서대로</strong> 연산을
              수행하도록 제어한다. 교착상태가 발생하지 않지만 롤백 발생률이 높다</td>
            </tr>
            <tr>
              <td><strong>낙관적 검증<br/>(Optimistic Validation)</strong></td>
              <td>일단 트랜잭션을 <strong>제약 없이 수행</strong>하고, <strong>종료 시 검증</strong>을 거쳐
              문제가 없으면 반영하고 문제가 있으면 롤백한다. 충돌이 드문 환경에 유리</td>
            </tr>
            <tr>
              <td><strong>다중 버전 병행 제어<br/>(MVCC, Multi-Version CC)</strong></td>
              <td>데이터를 갱신할 때마다 <strong>여러 버전을 유지</strong>하고, 트랜잭션의 타임스탬프에 맞는
              버전을 읽게 하여 <strong>읽기와 쓰기가 서로 방해하지 않게</strong> 한다</td>
            </tr>
          </table>
        </section>

        {/* ===================== 6. 회복 ===================== */}
        <section id="recovery">
          <h2>6. 회복(Recovery) — REDO/UNDO와 로그</h2>
          <p class="sub">회복은 장애가 발생했을 때 데이터베이스를 장애 이전의 정상 상태로 복구하는 작업이다. REDO/UNDO의 구분과 지연 갱신 vs 즉각 갱신이 최단골이다.</p>

          <h3>6-1. 장애(Failure)의 유형</h3>
          <table>
            <tr><th>유형</th><th>설명</th></tr>
            <tr>
              <td><strong>트랜잭션 장애</strong></td>
              <td>논리 오류(잘못된 입력, 오버플로), 시스템 오류(교착상태) 등으로 <strong>트랜잭션 하나가</strong> 비정상 종료</td>
            </tr>
            <tr>
              <td><strong>시스템 장애</strong></td>
              <td>전원 공급 중단, 하드웨어·소프트웨어 오류 등으로 <strong>시스템 전체가 정지</strong>
              (주기억장치 내용은 손실되지만 디스크는 무사)</td>
            </tr>
            <tr>
              <td><strong>미디어 장애</strong></td>
              <td>디스크 헤드 손상 등 <strong>저장 장치(디스크) 자체의 결함</strong>으로 저장된 데이터가 손실</td>
            </tr>
          </table>

          <h3>6-2. 회복 연산 — REDO와 UNDO (구분 최단골)</h3>
          <table>
            <tr><th>연산</th><th>대상</th><th>동작</th></tr>
            <tr>
              <td><strong>REDO (재실행)</strong></td>
              <td>장애 전에 <strong>완료(COMMIT)된</strong> 트랜잭션</td>
              <td>로그를 이용해 변경 내용을 <strong>다시 실행하여 데이터베이스에 반영</strong>한다
              (영속성 보장)</td>
            </tr>
            <tr>
              <td><strong>UNDO (취소)</strong></td>
              <td>장애 시점에 <strong>완료되지 못한(미완료)</strong> 트랜잭션</td>
              <td>로그를 <strong>역순으로</strong> 따라가며 변경 내용을 <strong>취소하고 이전 상태로 되돌린다</strong>
              (원자성 보장)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            연결 고리: <strong>완료된 트랜잭션 = REDO(다시 반영)</strong>,
            <strong>미완료 트랜잭션 = UNDO(되돌리기)</strong>.
            REDO는 영속성을, UNDO는 원자성을 지키기 위한 연산이라는 점까지 쓰면 완벽하다.
          </div>

          <h3>6-3. 로그 기반 회복 기법 — 지연 갱신 vs 즉각 갱신 (단골)</h3>
          <table>
            <tr><th>기법</th><th>갱신 시점</th><th>필요한 회복 연산</th></tr>
            <tr>
              <td><strong>지연 갱신<br/>(Deferred Update)</strong></td>
              <td>트랜잭션이 <strong>부분 완료될 때까지</strong> 실제 데이터베이스에 반영하지 않고
              <strong>로그에만 기록</strong>해 두었다가, 완료 후 한꺼번에 반영</td>
              <td><strong>REDO만 필요</strong> — 미완료 트랜잭션은 반영된 것이 없으므로
              <strong>UNDO가 필요 없다</strong></td>
            </tr>
            <tr>
              <td><strong>즉각 갱신<br/>(Immediate Update)</strong></td>
              <td>트랜잭션 수행 중 <strong>갱신 즉시</strong> 데이터베이스에 반영
              (반영 전 로그를 먼저 기록 — WAL)</td>
              <td><strong>REDO와 UNDO 모두 필요</strong> — 미완료 트랜잭션의 변경이
              이미 반영되어 있을 수 있으므로 UNDO가 필요하다</td>
            </tr>
          </table>

          <h3>6-4. 검사점 · 그림자 페이징 · 미디어 회복</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr>
              <td><strong>검사점 회복<br/>(Checkpoint Recovery)</strong></td>
              <td>일정 주기마다 로그에 <strong>검사점(Checkpoint)을 기록</strong>해 두고, 장애가 발생하면
              로그 전체가 아니라 <strong>검사점 이후의 트랜잭션에 대해서만</strong> REDO/UNDO를 수행하여
              <strong>회복 시간을 단축</strong>한다 (단골)</td>
            </tr>
            <tr>
              <td><strong>그림자 페이징<br/>(Shadow Paging)</strong></td>
              <td><strong>로그를 사용하지 않고</strong>, 갱신 전 페이지의 복사본(그림자 페이지)을
              별도로 보관해 두었다가 장애 시 <strong>복사본으로 교체</strong>하여 회복한다
              (UNDO는 간단하지만 REDO 개념이 없다)</td>
            </tr>
            <tr>
              <td><strong>미디어 회복<br/>(Media Recovery)</strong></td>
              <td>디스크 자체가 손상되는 미디어 장애에 대비해 주기적으로 <strong>덤프(Dump, 전체 복사본)</strong>를
              다른 안전한 저장 장치에 보관하고, 장애 시 <strong>가장 최근 덤프를 적재한 뒤</strong>
              로그로 그 이후의 완료 트랜잭션을 REDO한다</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "지연 갱신 = UNDO 불필요(REDO만)", "즉각 갱신 = REDO + UNDO 모두",
            "그림자 페이징 = 로그 없이 회복"이 서로 뒤바뀐 보기로 자주 출제된다.
          </div>
        </section>

        {/* ===================== 7. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">설명을 읽고 답을 먼저 종이에 쓴 뒤 "정답 보기"로 확인하자. 기호·용어는 실기처럼 정확하게 쓰는 연습이 중요하다.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 관계 대수 기호 ①~④에 해당하는 연산의 이름을 각각 쓰시오.</p>
            <pre>{`① σ    ② π    ③ ⋈    ④ ÷`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① Select(셀렉트), ② Project(프로젝트), ③ Join(조인), ④ Division(디비전)<br/>
                <span class="label">해설: </span>σ는 조건을 만족하는 행(튜플) 선택, π는 열(속성) 추출, ⋈는 공통 속성 기준 결합, ÷는 나누는 릴레이션의 모든 값과 대응되는 튜플 추출이다. 기호 ↔ 연산명 매칭은 매 회차 나올 수 있는 최단골이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명 ①, ②에 해당하는 관계 대수 연산의 기호를 각각 쓰시오.</p>
            <pre>{`① 릴레이션에서 조건을 만족하는 튜플(행)을 골라내는 연산으로,
   릴레이션을 수평으로 자르는 것과 같다.
② 릴레이션 R1이 나누는 릴레이션 R2의 모든 값과 대응되는
   튜플만 골라내는 연산이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① σ (Select), ② ÷ (Division)<br/>
                <span class="label">해설: </span>"조건 만족 행 선택 · 수평 분할"은 σ의 결정적 단서다. "모든 값과 대응(모두를 만족)"은 ÷의 단서로, "모든 과목을 수강한 학생 찾기" 같은 예가 대표적이다. 열을 골라내는 π(수직 분할)와 혼동하지 말 것.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 트랜잭션의 특성을 쓰시오.<br/>
            "트랜잭션의 연산은 데이터베이스에 모두 반영되거나, 전혀 반영되지 않아야 한다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>원자성(Atomicity)<br/>
                <span class="label">해설: </span>"All or Nothing"이 원자성의 결정적 단서다. "모순 없는 상태 유지"면 일관성, "중간 결과 접근 불가"면 격리성(고립성), "완료 결과의 영구 반영"이면 영속성(지속성)이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음은 트랜잭션의 상태에 대한 설명이다. 괄호 ①, ②에 들어갈 상태의 이름을 쓰시오.</p>
            <pre>{`· ( ① ) : 트랜잭션의 마지막 연산까지 실행했지만, 결과가 아직
           데이터베이스에 반영되지 않은 상태
· ( ② ) : 트랜잭션이 비정상 종료되어 ROLLBACK 연산을 수행한 상태`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 부분 완료(Partially Committed), ② 철회(Aborted)<br/>
                <span class="label">해설: </span>"다 실행했지만 반영 전" = 부분 완료, "ROLLBACK까지 수행" = 철회다. 오류로 실행이 중단만 된 상태는 실패(Failed)로, 철회와 구분해야 한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음은 로킹 단위에 대한 설명이다. 괄호 ①~③에 들어갈 말을 [증가/감소]에서 골라 쓰시오.</p>
            <pre>{`로킹 단위가 커지면 관리해야 할 락의 수는 ( ① )하고,
로킹 오버헤드는 ( ② )하며, 병행성(공유도)은 ( ③ )한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 감소, ② 감소, ③ 감소<br/>
                <span class="label">해설: </span>로킹 단위가 크면 락 수·오버헤드·병행성이 전부 감소하고, 작으면 전부 증가한다. "커지면 전부 감소, 작아지면 전부 증가"로 한 번에 외우면 함정 보기에 흔들리지 않는다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 설명 ①, ②에 해당하는 회복 연산의 이름을 각각 쓰시오.</p>
            <pre>{`① 장애 전에 완료(COMMIT)된 트랜잭션의 변경 내용을 로그를 이용해
   다시 실행하여 데이터베이스에 반영한다.
② 장애 시점에 완료되지 못한 트랜잭션의 변경 내용을 로그를 역순으로
   따라가며 취소하여 이전 상태로 되돌린다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① REDO(재실행), ② UNDO(취소)<br/>
                <span class="label">해설: </span>"완료된 트랜잭션 = REDO, 미완료 트랜잭션 = UNDO"가 핵심 구분이다. REDO는 영속성을, UNDO는 원자성을 보장하기 위한 연산이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명에 해당하는 회복 기법 관련 용어를 쓰시오.<br/>
            "회복 시 로그 전체를 조사하지 않도록, 일정 주기마다 로그에 특정 지점을 기록해 두고
            장애가 발생하면 그 지점 이후의 트랜잭션에 대해서만 회복 작업을 수행하여 회복 시간을 단축한다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>검사점(Checkpoint, 체크포인트)<br/>
                <span class="label">해설: </span>"로그 전체를 조사하지 않고 특정 지점 이후만 회복"이 검사점의 결정적 단서다. 로그 없이 페이지 복사본으로 회복하면 그림자 페이징, 덤프를 이용하면 미디어 회복이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">2단계 로킹 규약(2PL)에서 락 연산을 수행하는 두 단계의 이름을 쓰고, 각 단계에서 허용되는 락 연산을 간단히 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>확장 단계(Growing Phase) — 락 획득만 가능, 해제 불가 / 수축 단계(Shrinking Phase) — 락 해제만 가능, 새로 획득 불가<br/>
                <span class="label">해설: </span>2PL은 모든 트랜잭션이 "획득만 하는 구간"과 "해제만 하는 구간"으로 락 연산을 나누게 하여 직렬 가능성을 보장한다. 단, 교착상태(Deadlock)는 예방하지 못한다는 점까지 기억하자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 병행 수행의 문제점을 쓰시오.<br/>
            "병행 수행 중인 트랜잭션 하나가 ROLLBACK되면, 그 트랜잭션의 갱신 결과를 참조했던
            다른 트랜잭션들도 함께 ROLLBACK해야 한다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>연쇄 복귀(Cascading Rollback)<br/>
                <span class="label">해설: </span>"하나의 ROLLBACK이 참조한 트랜잭션들의 ROLLBACK으로 번진다"가 연쇄 복귀의 단서다. 갱신 결과가 덮어써져 사라지면 갱신 손실, 미완료 트랜잭션의 중간 결과를 참조해 오류가 나면 비완료 의존성이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음은 관계 데이터 연산에 대한 설명이다. 괄호 ①, ②에 들어갈 용어를 쓰시오.</p>
            <pre>{`· ( ① )는 원하는 릴레이션을 유도하기 위해 연산자를 이용하여
  "어떻게 구할 것인가"를 기술하는 절차적 언어이다.
· ( ② )는 술어 해석에 기반하여 "무엇을 원하는가"만 기술하는
  비절차적 언어이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 관계 대수(Relational Algebra), ② 관계 해석(Relational Calculus)<br/>
                <span class="label">해설: </span>절차적 = 관계 대수, 비절차적 = 관계 해석이다. 두 언어의 표현 능력은 동등하며 상호 변환이 가능하다는 점도 함께 출제된다.
              </div>
            </details>
          </div>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">세타 조인 · 동등 조인 · 자연 조인</span>
            <span class="kw">외부 조인(Outer Join)</span>
            <span class="kw">튜플 · 도메인 관계 해석</span>
            <span class="kw">직렬 가능성(Serializability)</span>
            <span class="kw">교착상태(Deadlock)</span>
            <span class="kw">격리 수준(Isolation Level)</span>
            <span class="kw">Dirty Read · Phantom Read</span>
            <span class="kw">로그 선행 기입(WAL)</span>
            <span class="kw">MVCC 스냅숏</span>
            <span class="kw">덤프(Dump)</span>
          </p>
        </section>

        <footer>데이터베이스 기본과 트랜잭션 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
