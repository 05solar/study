import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './test-design.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '어느 쇼핑몰의 포인트 충전 기능은 1,000 ≤ 충전 금액 ≤ 50,000 조건을 만족해야 한다. 테스터가 아래와 같이 테스트 값을 도출했다면, 적용한 블랙박스 테스트 기법이 무엇인지 쓰시오.',
    code: `유효 범위: 1,000 ≤ 충전 금액 ≤ 50,000

  하한 부근 → 999 (무효), 1,000 (경계), 1,001 (유효)
  상한 부근 → 49,999 (유효), 50,000 (경계), 50,001 (무효)

테스트 값: 999, 1000, 1001, 49999, 50000, 50001`,
    answers: [
      '경계값 분석',
      '경계값분석',
      '경계 값 분석',
      'Boundary Value Analysis',
      'boundary value analysis',
      'BVA',
      '한계값 분석',
      '경계값 테스트',
      '경계값 분석 테스트',
    ],
    answerLabel: '경계값 분석 (Boundary Value Analysis)',
    explanation:
      '오류는 입력 범위의 경계 부근에서 집중적으로 발생한다는 점에 착안해 경계와 그 바로 안팎의 값을 선정하는 기법이다. "경계·바로 안팎"이 결정 키워드로, 실기 최다 빈출 기법이다.',
  },
  {
    num: 2,
    question:
      '성적 입력 프로그램은 0 이상 100 이하의 점수만 유효하다. 테스터가 입력 도메인을 유효한 값의 그룹과 무효한 값의 그룹(동치 클래스)으로 나눈 뒤, 각 그룹에서 대표값 55, -20, 150을 하나씩 뽑아 테스트했다. 이때 적용한 블랙박스 테스트 기법을 쓰시오.',
    code: `무효 클래스 1: 점수 < 0     → 대표값 -20
유효 클래스  : 0 ≤ 점수 ≤ 100 → 대표값 55
무효 클래스 2: 점수 > 100   → 대표값 150`,
    answers: [
      '동등 분할',
      '동등분할',
      '동치 분할',
      '동치분할',
      '균등 분할',
      '동등 분할 기법',
      '동치 클래스 분할',
      'Equivalence Partitioning',
      'equivalence partitioning',
      '동등 분할 테스트',
      '동치 분할 테스트',
    ],
    answerLabel: '동등 분할 (동치 분할, Equivalence Partitioning)',
    explanation:
      '입력을 동치 클래스(그룹)로 나누고 각 그룹에서 대표값 하나만 테스트하는 기법이다. "그룹으로 나누어 대표값"이면 동등 분할, "경계와 그 안팎"이면 경계값 분석으로 구분한다.',
  },
  {
    num: 3,
    question:
      '로그인 기능을 아래와 같이 모델링하여, 이벤트에 따라 시스템의 상태가 올바르게 바뀌는지를 검증하는 테스트 케이스를 설계했다. 이에 해당하는 블랙박스 테스트 기법을 쓰시오.',
    code: `[로그아웃 상태] --(로그인 성공)--> [로그인 상태]
[로그아웃 상태] --(비밀번호 3회 오류)--> [계정 잠금 상태]
[계정 잠금 상태] --(본인 인증)--> [로그아웃 상태]`,
    answers: [
      '상태 전이 테스트',
      '상태전이 테스트',
      '상태 전이',
      '상태전이',
      '상태 전이 기법',
      'State Transition Testing',
      'state transition',
      '상태 전환 테스트',
    ],
    answerLabel: '상태 전이 테스트 (State Transition Testing)',
    explanation:
      '시스템의 상태가 이벤트에 따라 어떻게 전이되는지를 상태 다이어그램으로 모델링해 검증하는 기법이다. "상태 + 이벤트 + 전이"가 결정 키워드다.',
  },
  {
    num: 4,
    question:
      '할인 정책을 아래와 같이 조건들의 모든 조합과 그에 따른 동작(결과)을 표로 정리한 뒤, 각 조합을 테스트 케이스로 만드는 블랙박스 테스트 기법을 쓰시오.',
    code: `조건: 회원 여부      | Y | Y | N | N |
조건: 쿠폰 보유      | Y | N | Y | N |
---------------------+---+---+---+---+
동작: 20% 할인       | X |   |   |   |
동작: 10% 할인       |   | X | X |   |
동작: 할인 없음      |   |   |   | X |`,
    answers: [
      '결정 테이블 테스트',
      '결정 테이블',
      '결정테이블 테스트',
      '결정테이블',
      '의사결정 테이블 테스트',
      '의사결정 테이블',
      'Decision Table Testing',
      'decision table',
      '디시전 테이블',
    ],
    answerLabel: '결정 테이블 테스트 (Decision Table Testing)',
    explanation:
      '여러 조건의 조합과 그에 따른 동작(결과)을 표로 정리해 모든 조합을 테스트하는 기법이다. "조건 조합을 표로"가 결정 키워드이며, 원인-효과 그래프의 결과를 표로 옮길 때도 사용된다.',
  },
  {
    num: 5,
    question:
      '입력(원인)과 출력(효과) 사이의 논리적 관계를 그래프로 표현하고, 효용성이 높은 테스트 케이스를 선정하는 블랙박스 테스트 기법을 쓰시오.',
    answers: [
      '원인-효과 그래프',
      '원인 효과 그래프',
      '원인효과 그래프',
      '원인효과그래프',
      '원인-효과 그래프 기법',
      '원인-효과 그래프 테스트',
      'Cause-Effect Graph',
      'cause effect graph',
      'Cause-Effect Graphing',
    ],
    answerLabel: '원인-효과 그래프 (Cause-Effect Graph)',
    explanation:
      '"원인(입력)과 효과(출력)의 논리적 관계를 그래프로 표현"한다는 문장이 그대로 정의다. 그래프에서 효용성 높은 케이스를 골라내므로 케이스 수를 줄이는 효과가 있다.',
  },
  {
    num: 6,
    question:
      'OS 3종, 브라우저 3종, 해상도 2종을 모두 조합하면 18가지 테스트가 필요하다. 그러나 대부분의 결함은 두 요소(파라미터) 간의 상호작용에서 발생한다는 점을 이용해, 모든 값의 2개씩 조합이 최소 한 번씩만 커버되도록 테스트 케이스를 9개로 줄였다. 이 블랙박스 조합 테스트 기법을 쓰시오.',
    answers: [
      '페어와이즈 테스트',
      '페어와이즈',
      '페어와이즈 기법',
      '페어와이즈 조합 테스트',
      'Pairwise Testing',
      'pairwise',
      'pair wise',
      '2-way 테스트',
      '올페어 테스트',
    ],
    answerLabel: '페어와이즈 테스트 (Pairwise Testing)',
    explanation:
      '"두 요소의 상호작용 + 2개씩 조합을 최소 한 번씩 커버"가 페어와이즈의 정의 키워드다. 전수 조합(18개) 대비 케이스 수를 크게 줄이면서도 쌍 단위 결함을 대부분 검출할 수 있다.',
  },
  {
    num: 7,
    question:
      '화이트박스 테스트 커버리지 중, 프로그램 소스 코드의 모든 문장이 최소 한 번 이상 실행되도록 보장하는 가장 기본적인 커버리지를 쓰시오.',
    answers: [
      '구문 커버리지',
      '구문커버리지',
      '문장 커버리지',
      '문장커버리지',
      '구문(문장) 커버리지',
      'Statement Coverage',
      'statement coverage',
      '스테이트먼트 커버리지',
    ],
    answerLabel: '구문(문장) 커버리지 (Statement Coverage)',
    explanation:
      '"모든 문장을 최소 한 번"이면 구문(문장) 커버리지다. 커버리지 강도는 구문 → 결정(분기) → 조건 → 조건/결정 → 변경 조건/결정(MC/DC) → 다중 조건 순으로 강해진다.',
  },
  {
    num: 8,
    question:
      '화이트박스 테스트 커버리지 중, 결정문(분기) 전체의 결과와는 관계없이 결정문 안의 각 개별 조건식이 참과 거짓을 각각 최소 한 번 이상 갖도록 보장하는 커버리지를 쓰시오.',
    answers: [
      '조건 커버리지',
      '조건커버리지',
      'Condition Coverage',
      'condition coverage',
      '컨디션 커버리지',
    ],
    answerLabel: '조건 커버리지 (Condition Coverage)',
    explanation:
      '"개별 조건식의 참/거짓"이면 조건 커버리지, "결정문 전체 결과의 참/거짓"이면 결정(분기) 커버리지다. 두 커버리지를 동시에 만족시키는 것이 조건/결정 커버리지다.',
  },
  {
    num: 9,
    question:
      '항공기 소프트웨어 등 고안전성이 요구되는 분야에서 사용하는 화이트박스 커버리지로, 각 개별 조건식이 다른 조건식과 무관하게 단독으로 전체 결정 결과에 영향을 주는 경우를 보장하는 커버리지를 쓰시오.',
    answers: [
      'MC/DC',
      'MCDC',
      'MC DC',
      '변경 조건/결정 커버리지',
      '변경 조건 결정 커버리지',
      '변경조건/결정 커버리지',
      '변경 조건-결정 커버리지',
      'Modified Condition/Decision Coverage',
      'modified condition decision coverage',
      '수정된 조건/결정 커버리지',
    ],
    answerLabel: 'MC/DC (변경 조건/결정 커버리지, Modified Condition/Decision Coverage)',
    explanation:
      '"개별 조건식이 단독으로 전체 결과를 바꾸는 경우 보장 + 항공 등 고안전 분야"가 MC/DC의 키워드다. 모든 조건 조합(2의 n제곱 가지)을 요구하는 다중 조건 커버리지보다는 약하지만 실용적으로 매우 강한 커버리지다.',
  },
  {
    num: 10,
    question:
      '어떤 모듈의 제어 흐름 그래프가 간선(Edge) 10개, 노드(Node) 8개, 판단(분기) 노드 3개로 구성되어 있다. 맥케이브(McCabe)의 순환 복잡도 V(G)를 구하시오.',
    code: `V(G) = E - N + 2   (E: 간선 수, N: 노드 수)
또는 V(G) = 판단(분기) 노드 수 + 1`,
    answers: ['4', '4개', 'V(G)=4', 'V(G) = 4', '사'],
    answerLabel: '4',
    explanation:
      'V(G) = E − N + 2 = 10 − 8 + 2 = 4. 판단 노드 공식으로 검산해도 3 + 1 = 4로 일치한다. 독립 경로가 4개이므로 테스트 케이스도 최소 4개가 필요하다.',
  },
  {
    num: 11,
    question:
      '테스트의 기본 원리 중, 동일한 테스트 케이스로 반복해서 테스트하면 더 이상 새로운 결함을 발견할 수 없으므로 테스트 케이스를 정기적으로 점검하고 개선해야 한다는 원리를 쓰시오.',
    answers: [
      '살충제 패러독스',
      '살충제패러독스',
      '살충제 역설',
      'Pesticide Paradox',
      'pesticide paradox',
      '살충제의 역설',
    ],
    answerLabel: '살충제 패러독스 (Pesticide Paradox)',
    explanation:
      '같은 살충제를 계속 쓰면 벌레에 내성이 생겨 죽지 않는다는 비유다. "동일 케이스 반복 → 새로운 결함 발견 불가"가 결정 키워드로, 실기 최단골 원리다.',
  },
  {
    num: 12,
    question:
      '테스트에서 발견되는 결함의 약 80%는 전체 모듈 중 약 20%에 해당하는 소수의 특정 모듈에 집중되어 발생한다. 이러한 결함 집중(Defect Clustering) 원리의 근거가 되는 법칙을 쓰시오.',
    answers: [
      '파레토 법칙',
      '파레토법칙',
      '파레토의 법칙',
      '파레토',
      'Pareto 법칙',
      'Pareto Principle',
      'pareto principle',
      'Pareto Law',
      '80대20 법칙',
      '8020 법칙',
    ],
    answerLabel: '파레토(Pareto) 법칙',
    explanation:
      '"결함의 80%는 20%의 모듈에서 발견된다"는 결함 집중 원리는 80:20으로 알려진 파레토 법칙을 테스트에 적용한 것이다. 결함이 많은 모듈에 테스트를 집중해야 효율적이다.',
  },
  {
    num: 13,
    question:
      '테스트의 기본 원리 중, 소프트웨어의 결함을 모두 찾아 제거했더라도 사용자의 요구사항을 만족하지 못하면 그 소프트웨어는 품질이 높다고 할 수 없다는 원리를 쓰시오.',
    answers: [
      '오류-부재의 궤변',
      '오류 부재의 궤변',
      '오류부재의 궤변',
      '오류부재의궤변',
      '오류 부재 궤변',
      'Absence of Errors Fallacy',
      'absence of errors fallacy',
      '오류-부재 궤변',
    ],
    answerLabel: '오류-부재의 궤변 (Absence of Errors Fallacy)',
    explanation:
      '"결함이 0이어도 요구사항을 만족하지 못하면 실패"가 키워드다. 결함 제거 자체가 목적이 아니라 사용자 요구 충족이 최종 목표임을 강조하는 원리다.',
  },
  {
    num: 14,
    question:
      '화이트박스 테스트와 블랙박스 테스트처럼 프로그램을 직접 실행하면서 오류를 찾는 테스트는 정적(Static) 테스트와 동적(Dynamic) 테스트 중 무엇에 해당하는지 쓰시오.',
    answers: [
      '동적 테스트',
      '동적테스트',
      '동적',
      'Dynamic Test',
      'dynamic test',
      '동적 테스팅',
      'Dynamic Testing',
    ],
    answerLabel: '동적 테스트 (Dynamic Test)',
    explanation:
      '실행 여부가 분류 기준이다. 프로그램을 실행하면 동적 테스트(화이트박스·블랙박스), 실행하지 않고 명세서·코드를 검토하면 정적 테스트(워크스루·인스펙션·동료 검토·정적 분석)다.',
  },
  {
    num: 15,
    question:
      '다음 설명에 해당하는 용어를 쓰시오. — "올바른 제품을 만들었는가?"라는 질문처럼, 완성된 소프트웨어가 사용자의 요구사항대로 동작하는지를 사용자의 시각에서 점검하는 활동이다.',
    answers: [
      '확인',
      'Validation',
      'validation',
      '밸리데이션',
      '확인(Validation)',
      '벨리데이션',
    ],
    answerLabel: '확인 (Validation)',
    explanation:
      '검증(Verification)은 "올바르게 만들고 있는가?" — 개발 과정·개발자 시각, 확인(Validation)은 "올바른 제품을 만들었는가?" — 완성된 결과물·사용자 시각이다. 과정/결과 대응으로 구분한다.',
  },
  {
    num: 16,
    question:
      '오류를 수정하거나 기능을 변경한 후, 그 변경이 새로운 결함을 만들지 않았는지와 기존 기능이 여전히 올바르게 동작하는지를 반복해서 확인하는 테스트의 종류를 쓰시오.',
    answers: [
      '회귀 테스트',
      '회귀테스트',
      '회귀',
      'Regression Test',
      'regression test',
      '리그레션 테스트',
      'Regression Testing',
      '회귀 테스팅',
    ],
    answerLabel: '회귀(Regression) 테스트',
    explanation:
      '"변경 후 새로운 결함 유입 여부 + 기존 기능 재확인"이 회귀 테스트의 키워드다. 고의로 장애를 일으켜 복구를 확인하면 회복(Recovery), 비정상적 부하를 걸면 강도(Stress), 응답 시간·처리량을 재면 성능(Performance) 테스트다.',
  },
  {
    num: 17,
    question:
      '인수 테스트의 종류 중, 개발자의 통제 없이 사용자의 실제 사용 환경에서 다수의 사용자가 소프트웨어를 직접 사용해 보고 발견한 문제점을 개발자에게 보고하는 테스트를 쓰시오.',
    answers: [
      '베타 테스트',
      '베타테스트',
      '베타',
      'Beta Test',
      'beta test',
      '베타 테스팅',
      'Beta Testing',
    ],
    answerLabel: '베타(Beta) 테스트',
    explanation:
      '"사용자 실제 환경 + 통제 없음 + 다수 사용자"가 베타 테스트의 키워드다. 반대로 개발자의 장소(통제된 환경)에서 개발자가 지켜보는 가운데 수행하면 알파 테스트다.',
  },
  {
    num: 18,
    question:
      '테스트 레벨 4가지(단위·통합·시스템·인수) 중, 단위 테스트를 통과한 모듈들을 서로 결합해 가면서 모듈 간 인터페이스에서 발생하는 오류를 검사하는 테스트 레벨을 쓰시오.',
    answers: [
      '통합 테스트',
      '통합테스트',
      '통합',
      'Integration Test',
      'integration test',
      '통합 테스팅',
      'Integration Testing',
    ],
    answerLabel: '통합 테스트 (Integration Test)',
    explanation:
      '"모듈 결합 + 모듈 간 인터페이스 오류"가 통합 테스트의 키워드다. 개별 모듈 하나는 단위, 전체 시스템의 요구사항 충족은 시스템, 사용자가 인수 여부를 결정하면 인수 테스트다.',
  },
  {
    num: 19,
    question:
      '테스트 오라클의 유형 중, 특정 입력값에 대해서는 정확한 기대 결과를 제공하고 나머지 입력값에 대해서는 추정(어림짐작)으로 처리하는, 샘플링 오라클을 개선한 유형을 쓰시오.',
    answers: [
      '휴리스틱 오라클',
      '휴리스틱오라클',
      '휴리스틱',
      'Heuristic Oracle',
      'heuristic oracle',
      '추정 오라클',
      '휴리스틱(추정) 오라클',
    ],
    answerLabel: '휴리스틱(Heuristic) 오라클',
    explanation:
      '키워드 매칭: "모든 입력값" = 참(True) 오라클, "특정 몇 개의 입력값만" = 샘플링 오라클, "샘플링 + 나머지는 추정" = 휴리스틱 오라클, "변경 전후 결과 동일 확인" = 일관성 검사 오라클.',
  },
  {
    num: 20,
    question:
      '테스트 케이스의 구성 요소(식별자, 테스트 항목, 입력 명세, 출력 명세, 환경 설정) 중, 입력값에 대해 시스템이 반환할 것으로 기대하는 예상 결과를 기술하는 항목을 쓰시오.',
    answers: [
      '출력 명세',
      '출력명세',
      'Output Specification',
      'output specification',
      '출력 명세서',
      '예상 결과',
      '출력 명세(예상 결과)',
    ],
    answerLabel: '출력 명세 (Output Specification)',
    explanation:
      '테스트 케이스는 입력값·실행 조건·예상 결과의 집합이며, 그중 기대하는 예상 결과를 적는 항목이 출력 명세다. 입력값과 조건은 입력 명세, 필요한 하드웨어·소프트웨어 환경은 환경 설정에 기술한다.',
  },
]

export default defineComponent({
  name: 'VariantTestDesignPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 애플리케이션 테스트 케이스 설계</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 숫자·코드·보기를 바꾼 변형 문제 20개입니다.
            정답을 입력하고 제출하면 채점되며, 맞으면 해설이, 틀리면 정답과 해설이 함께 표시됩니다.
          </p>
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

        <footer>기출 변형문제 — 애플리케이션 테스트 케이스 설계 · 2026-09</footer>
      </div>
    )
  },
})
