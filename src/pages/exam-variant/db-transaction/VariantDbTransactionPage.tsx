import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './db-transaction.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '관계 대수의 기호 σ에 해당하는 연산의 이름을 쓰시오.',
    code: `σ 학년=3 (학생)

위 연산은 릴레이션 [학생]에서 학년이 3인 튜플(행)만 골라내며,
릴레이션을 수평(가로)으로 자르는 것과 같은 결과를 만든다.`,
    answers: ['Select', '셀렉트', 'σ', '시그마', '실렉트'],
    answerLabel: 'Select (셀렉트)',
    explanation:
      '조건을 만족하는 행(튜플)을 선택하여 수평으로 자르는 연산은 σ(시그마), 즉 Select다. 열(속성)을 골라내는 π(Project)와 반드시 구분해야 한다.',
  },
  {
    num: 2,
    question:
      '다음 설명에 해당하는 관계 대수 연산의 기호를 쓰시오.',
    code: `릴레이션에서 지정한 열(속성)만 추출하여 릴레이션을
수직(세로)으로 자르는 연산으로, 결과에서 중복된 튜플은
제거된다.`,
    answers: ['π', '파이', 'pi', 'project', '프로젝트'],
    answerLabel: 'π (파이, Project)',
    explanation:
      '"열(속성) 추출 + 수직 분할 + 중복 튜플 제거"가 π(Project)의 결정적 단서다. 행을 골라내는 σ(Select)는 수평 분할이라는 점과 대비해서 외운다.',
  },
  {
    num: 3,
    question:
      '다음 설명에 해당하는 관계 대수 연산의 기호를 쓰시오.',
    code: `수강(학번, 과목) 릴레이션을 과목(과목) 릴레이션으로 이 연산을
수행하면, 과목 릴레이션에 있는 모든 과목을 빠짐없이 수강한
학생의 학번만 결과로 남는다.`,
    answers: ['÷', 'division', '디비전', '나누기'],
    answerLabel: '÷ (Division, 디비전)',
    explanation:
      '"나누는 릴레이션의 모든 값과 대응되는 튜플만 골라낸다(모두를 만족하는 것 찾기)"가 ÷(Division)의 단서다. "모든 과목을 수강한 학생 찾기"가 대표 예시다.',
  },
  {
    num: 4,
    question: '관계 대수의 기호 ⋈에 해당하는 연산의 이름을 쓰시오.',
    code: `학생 ⋈ 수강

두 릴레이션 [학생]과 [수강]을 공통 속성(학번)을 기준으로
결합하여 하나의 릴레이션을 만든다.`,
    answers: ['Join', '조인', '⋈'],
    answerLabel: 'Join (조인)',
    explanation:
      '두 릴레이션을 공통 속성 기준으로 결합하는 ⋈는 Join(조인)이다. 순수 관계 연산 4가지 σ·π·⋈·÷의 기호와 연산명 매칭은 실기 최단골이다.',
  },
  {
    num: 5,
    question:
      '다음 설명에 해당하는 관계 데이터 언어의 이름을 쓰시오.',
    code: `원하는 정보가 무엇(What)인지만 정의하는 비절차적 언어로,
수학의 술어 해석(Predicate Calculus)에 기반하며 변수의 종류에
따라 튜플 방식과 도메인 방식으로 나뉜다.`,
    answers: ['관계 해석', '관계해석', 'Relational Calculus', '릴레이셔널 캘큘러스'],
    answerLabel: '관계 해석 (Relational Calculus)',
    explanation:
      '"비절차적 + 술어 해석 기반 + 튜플/도메인"이 관계 해석의 단서다. 연산자로 "어떻게(How)" 구할지 기술하는 절차적 언어인 관계 대수와 표현 능력은 서로 동등하다.',
  },
  {
    num: 6,
    question:
      '다음 사례에서 지켜지지 않은 트랜잭션의 특성을 쓰시오.',
    code: `계좌 이체 트랜잭션에서 A 계좌의 출금 UPDATE만 반영된 채
B 계좌의 입금 UPDATE가 수행되지 않고 종료되어, 이체 금액이
사라져 버렸다.`,
    answers: ['원자성', 'Atomicity', '어토미시티'],
    answerLabel: '원자성 (Atomicity)',
    explanation:
      '트랜잭션의 연산은 모두 반영되거나(All) 전혀 반영되지 않아야(Nothing) 한다는 특성이 원자성이다. 일부만 수행된 채 끝났으므로 원자성이 깨진 사례다.',
  },
  {
    num: 7,
    question:
      '다음 설명에 해당하는 트랜잭션의 특성을 쓰시오.',
    code: `트랜잭션이 성공적으로 완료되면 데이터베이스는 모순 없는
상태를 유지해야 하며, 실행 전과 실행 후의 데이터베이스가
같은 무결성 제약 조건을 만족해야 한다.`,
    answers: ['일관성', 'Consistency', '컨시스턴시'],
    answerLabel: '일관성 (Consistency)',
    explanation:
      '"모순 없는 일관된 상태 유지, 실행 전후 제약 조건 만족"이 일관성의 단서다. "All or Nothing"이면 원자성, "중간 결과 접근 불가"면 격리성이다.',
  },
  {
    num: 8,
    question:
      '다음 설명에 해당하는 트랜잭션의 특성을 쓰시오.',
    code: `둘 이상의 트랜잭션이 병행 실행될 때, 어느 한 트랜잭션이
실행 중이면 다른 트랜잭션은 그 중간 수행 결과에 접근(참조)할
수 없다.`,
    answers: ['격리성', '고립성', 'Isolation', '아이솔레이션'],
    answerLabel: '격리성 (고립성, Isolation)',
    explanation:
      '"병행 실행 중 중간 결과 접근 불가"가 격리성의 결정적 단서다. 격리성은 "고립성"이라는 이름으로도 출제되며 둘 다 정답으로 인정된다.',
  },
  {
    num: 9,
    question:
      '다음 설명에 해당하는 트랜잭션의 특성을 쓰시오.',
    code: `성공적으로 완료(COMMIT)된 트랜잭션의 결과는 이후 시스템에
장애가 발생하더라도 데이터베이스에 영구적으로 반영(보존)되어야
한다.`,
    answers: ['영속성', '지속성', 'Durability', '듀러빌리티'],
    answerLabel: '영속성 (지속성, Durability)',
    explanation:
      '"완료된 결과는 장애가 나도 영구 반영"이 영속성의 단서다. 지속성이라고 써도 정답이며, 회복 연산 REDO가 이 특성을 보장하기 위한 연산이다.',
  },
  {
    num: 10,
    question:
      '다음은 트랜잭션의 상태에 대한 설명이다. 괄호 안에 들어갈 상태의 이름을 쓰시오.',
    code: `트랜잭션이 마지막 연산까지 모두 실행했지만, 그 결과가 아직
데이터베이스(디스크)에 반영되지 않은 COMMIT 직전의 상태를
( ) 상태라고 한다.`,
    answers: ['부분 완료', '부분완료', 'Partially Committed', '파셜리 커미티드'],
    answerLabel: '부분 완료 (Partially Committed)',
    explanation:
      '"다 실행했지만 아직 디스크 반영 전"이 부분 완료의 단서다. COMMIT까지 끝나면 완료(Committed), 오류로 중단되면 실패(Failed), ROLLBACK까지 수행하면 철회(Aborted)다.',
  },
  {
    num: 11,
    question:
      '다음 설명에 해당하는 TCL(트랜잭션 제어어) 명령어를 쓰시오.',
    code: `트랜잭션 내에 중간 저장 지점을 만들어 두고, 문제가 생기면
트랜잭션 전체가 아니라 그 지점까지만 부분적으로 ROLLBACK할 수
있게 하는 명령어이다.`,
    answers: ['SAVEPOINT', '세이브포인트', '저장점'],
    answerLabel: 'SAVEPOINT',
    explanation:
      '트랜잭션 안에 저장점을 만들어 "ROLLBACK TO 저장점명"으로 부분 복귀를 가능하게 하는 명령어가 SAVEPOINT다. 영구 반영은 COMMIT, 전체 취소는 ROLLBACK이다.',
  },
  {
    num: 12,
    question:
      '다음 사례에 해당하는 병행 수행의 문제점을 쓰시오.',
    code: `트랜잭션 T1과 T2가 같은 재고 데이터를 동시에 읽어 각각
갱신한 뒤 저장했더니, 나중에 저장한 T2의 결과가 T1의 갱신
결과를 덮어써서 T1의 갱신 내용이 사라졌다.`,
    answers: ['갱신 손실', '갱신손실', 'Lost Update', '로스트 업데이트', '갱신 분실'],
    answerLabel: '갱신 손실 (Lost Update)',
    explanation:
      '"한 트랜잭션의 갱신 결과를 다른 트랜잭션이 덮어써서 사라진다"가 갱신 손실의 단서다. 중간 결과 참조로 인한 오류는 비완료 의존성, 모순된 상태가 되면 모순성이다.',
  },
  {
    num: 13,
    question:
      '다음 설명에 해당하는 병행 수행의 문제점을 쓰시오.',
    code: `병행 수행 중이던 트랜잭션 T1이 ROLLBACK되자, T1의 갱신
결과를 참조하고 있던 T2, T3까지 연달아 ROLLBACK해야 했다.`,
    answers: ['연쇄 복귀', '연쇄복귀', 'Cascading Rollback', '캐스케이딩 롤백'],
    answerLabel: '연쇄 복귀 (Cascading Rollback)',
    explanation:
      '하나의 ROLLBACK이 그 결과를 참조한 다른 트랜잭션들의 ROLLBACK으로 번지는 현상이 연쇄 복귀다. 병행 수행 문제점은 갱신 손실·모순성·연쇄 복귀·비완료 의존성 4가지를 세트로 외운다.',
  },
  {
    num: 14,
    question:
      '다음은 로킹 단위에 대한 설명이다. 괄호 안에 들어갈 말을 [증가/감소]에서 골라 쓰시오.',
    code: `로킹 단위가 필드처럼 작아지면 관리할 락의 수와 로킹
오버헤드는 증가하고, 병행성(공유도)은 ( )한다.`,
    answers: ['증가', '증가한다', '높아진다', '상승'],
    answerLabel: '증가',
    explanation:
      '로킹 단위가 작아지면 락 수·오버헤드·병행성이 전부 증가하고, 커지면 전부 감소한다. "단위가 크면 병행성이 높아진다"로 뒤집은 함정 보기에 주의한다.',
  },
  {
    num: 15,
    question:
      '다음은 2단계 로킹 규약(2PL)에 대한 설명이다. 괄호 안에 들어갈 단계의 이름을 쓰시오.',
    code: `( ) 단계 : 트랜잭션이 락을 획득만 할 수 있고 해제는 할 수
           없는 단계
수축 단계 : 락을 해제만 할 수 있고 새로 획득할 수는 없는 단계`,
    answers: ['확장', '확장 단계', '확장단계', 'Growing Phase', '성장', '성장 단계'],
    answerLabel: '확장 (Growing Phase)',
    explanation:
      '2PL은 락 연산을 확장 단계(획득만)와 수축 단계(해제만)로 나누어 직렬 가능성을 보장한다. 단, 교착상태(Deadlock)는 예방하지 못한다는 점까지 세트로 기억한다.',
  },
  {
    num: 16,
    question:
      '다음 설명에 해당하는 병행 제어 기법을 쓰시오.',
    code: `트랜잭션이 시스템에 들어온 실행 시작 시각을 부여해 두고,
그 시각의 순서대로 연산을 수행하도록 제어하는 기법이다.
교착상태는 발생하지 않지만 롤백 발생률이 높다.`,
    answers: ['타임스탬프', '타임스탬프 순서', '타임 스탬프', 'Timestamp', 'Timestamp Ordering', '타임스탬프 순서 기법'],
    answerLabel: '타임스탬프 순서 (Timestamp Ordering)',
    explanation:
      '"시작 시각을 부여하고 그 순서대로 제어 + 교착상태 없음"이 타임스탬프 순서 기법의 단서다. 락을 걸어 제어하는 로킹, 종료 시 검사하는 낙관적 검증과 구분한다.',
  },
  {
    num: 17,
    question:
      '다음 로그 상황에서 장애 발생 시 트랜잭션 T2에 수행해야 하는 회복 연산을 쓰시오.',
    code: `[로그]
<T1, START>
<T1, X, 100, 200>
<T1, COMMIT>
<T2, START>
<T2, Y, 50, 80>
------ 이 시점에서 시스템 장애 발생 ------`,
    answers: ['UNDO', '언두', '취소'],
    answerLabel: 'UNDO (취소)',
    explanation:
      'T2는 COMMIT 기록이 없는 미완료 트랜잭션이므로 로그를 역순으로 따라가며 변경을 취소하는 UNDO를 수행한다. 반대로 COMMIT 기록이 있는 T1은 REDO 대상이다.',
  },
  {
    num: 18,
    question:
      '다음 설명에 해당하는 로그 기반 회복 기법을 쓰시오.',
    code: `트랜잭션이 부분 완료될 때까지 변경 내용을 실제 데이터베이스에
반영하지 않고 로그에만 기록해 두었다가 완료 후 한꺼번에
반영한다. 따라서 회복 시 REDO만 필요하고 UNDO는 필요 없다.`,
    answers: ['지연 갱신', '지연갱신', 'Deferred Update', '지연 갱신 회복 기법'],
    answerLabel: '지연 갱신 (Deferred Update)',
    explanation:
      '"로그에만 기록해 두었다가 완료 후 반영 + UNDO 불필요"가 지연 갱신의 단서다. 갱신 즉시 반영하는 즉각 갱신은 REDO와 UNDO가 모두 필요하다는 점과 대비된다.',
  },
  {
    num: 19,
    question:
      '다음 설명의 괄호 안에 공통으로 들어갈 회복 관련 용어를 쓰시오.',
    code: `회복 시 로그 전체를 조사하지 않도록 일정 주기마다 로그에
( )을(를) 기록해 두고, 장애가 발생하면 ( ) 이후의
트랜잭션에 대해서만 REDO/UNDO를 수행하여 회복 시간을 단축한다.`,
    answers: ['검사점', '체크포인트', 'Checkpoint', '검사 시점'],
    answerLabel: '검사점 (Checkpoint, 체크포인트)',
    explanation:
      '"로그 전체가 아니라 특정 지점 이후만 회복하여 시간 단축"이 검사점(체크포인트)의 결정적 단서다. 검사점 회복 기법은 로그 기반 회복의 보완 기법이다.',
  },
  {
    num: 20,
    question:
      '다음 설명에 해당하는 회복 기법을 쓰시오.',
    code: `로그를 사용하지 않고, 갱신하기 전 페이지의 복사본을 별도의
공간에 보관해 두었다가 장애가 발생하면 그 복사본으로 교체하여
데이터베이스를 회복한다.`,
    answers: ['그림자 페이징', '그림자페이징', 'Shadow Paging', '섀도 페이징', '섀도우 페이징', '그림자 페이지 기법'],
    answerLabel: '그림자 페이징 (Shadow Paging)',
    explanation:
      '"로그 없이 페이지 복사본(그림자 페이지)으로 회복"이 그림자 페이징의 단서다. 로그의 특정 지점 이후만 회복하면 검사점, 덤프를 적재해 회복하면 미디어 회복이다.',
  },
]

export default defineComponent({
  name: 'VariantDbTransactionPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 데이터베이스 기본과 트랜잭션</h1>
          <p>실기 기출 유형을 변형한 20문제입니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>

        {QUESTIONS.map((q) => (
          <QuizInput
            key={q.num}
            num={q.num}
            question={q.question}
            code={q.code}
            answers={q.answers}
            answerLabel={q.answerLabel}
            explanation={q.explanation}
          />
        ))}

        <footer>기출 변형문제 — 데이터베이스 기본과 트랜잭션 · 2026-09</footer>
      </div>
    )
  },
})
