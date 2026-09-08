import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './performance-improve.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 애플리케이션 성능 측정 지표를 쓰시오.',
    code: `온라인 쇼핑몰 서버가 1초 동안 처리를 완료한 주문 트랜잭션의 수처럼,
애플리케이션이 주어진(단위) 시간 내에 처리할 수 있는
트랜잭션(일)의 수를 나타내는 지표이다. 대표적인 예로 TPS가 있다.`,
    answers: ['처리량', '처리량 (Throughput)', 'throughput', '스루풋'],
    answerLabel: '처리량 (Throughput)',
    explanation: '"단위 시간 내에 처리할 수 있는 트랜잭션의 수"는 처리량(Throughput)의 정의다. 초당 처리 건수(TPS)가 대표 예시다.',
  },
  {
    num: 2,
    question: '다음 설명에 해당하는 애플리케이션 성능 측정 지표를 쓰시오.',
    code: `사용자가 조회 버튼을 클릭한 시점부터 화면에 결과가
출력되기 "시작"할 때까지 걸린 시간처럼, 요청을 전달한 시점부터
애플리케이션의 응답(출력)이 시작될 때까지 걸린 시간을 나타내는 지표이다.`,
    answers: ['응답 시간', '응답 시간 (Response Time)', 'response time', '응답시간', '리스폰스 타임'],
    answerLabel: '응답 시간 (Response Time)',
    explanation: '응답이 "시작"될 때까지의 시간은 응답 시간(Response Time)이다. 결과 출력이 "완료"될 때까지의 시간인 반환(경과) 시간과 구분해야 한다.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 애플리케이션 성능 측정 지표를 쓰시오.',
    code: `사용자가 애플리케이션에 작업을 의뢰한 시점부터 처리가 모두
완료되어 결과의 출력이 "끝날 때까지" 걸린 시간을 나타내는 지표로,
응답 시간(Response Time)보다 항상 길거나 같다.`,
    answers: ['경과 시간', '반환 시간', '경과 시간 (반환 시간)', 'turnaround time', '턴어라운드 타임', '경과시간', '반환시간'],
    answerLabel: '경과 시간 (반환 시간, Turnaround Time)',
    explanation: '"출력이 완료될 때까지"가 핵심 키워드로, 경과 시간(반환 시간, Turnaround Time)의 정의다. 응답 시간은 응답이 시작될 때까지만 측정한다.',
  },
  {
    num: 4,
    question: '애플리케이션 성능 측정 지표에 대한 다음 설명에서 괄호 안에 들어갈 지표의 이름을 쓰시오.',
    code: `· 처리량        : 주어진 시간 내에 처리할 수 있는 트랜잭션의 수
· 응답 시간     : 요청 후 응답(출력)이 시작될 때까지 걸린 시간
· 경과 시간     : 요청 후 결과의 출력이 완료될 때까지 걸린 시간
· (          )  : 트랜잭션을 처리하는 동안의 CPU 사용량,
                  메모리 사용량, 네트워크 사용량 등의 사용 정도`,
    answers: ['자원 사용률', '자원사용률', 'resource usage', '자원 사용률 (Resource Usage)', '리소스 사용률'],
    answerLabel: '자원 사용률 (Resource Usage)',
    explanation: '성능 측정 지표 4가지는 처리량·응답 시간·경과(반환) 시간·자원 사용률이다. CPU·메모리·네트워크 사용량을 보는 지표가 자원 사용률이다.',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 배드 코드(Bad Code) 유형의 용어를 쓰시오.',
    code: `유지보수를 위해 소스 코드를 열어 보니 GOTO문과 분기가 뒤엉켜
로직이 서로 복잡하게 얽히고설켜 있어, 개발자가 실행 흐름을
따라가기 매우 어려운 비구조적인 코드였다.`,
    answers: ['스파게티 코드', '스파게티코드', 'spaghetti code', '스파게티 코드 (Spaghetti Code)', '스파게티'],
    answerLabel: '스파게티 코드 (Spaghetti Code)',
    explanation: '"로직이 복잡하게 얽힌 비구조적인 코드"는 스파게티 코드다. 문서·개발자가 없어 유지보수가 어려운 외계인 코드와 구분해서 기억하자.',
  },
  {
    num: 6,
    question: '다음 설명에 해당하는 배드 코드(Bad Code) 유형의 용어를 쓰시오.',
    code: `15년 전에 퇴사한 개발자가 만든 시스템을 인수받았는데,
참고할 문서가 전혀 없고 개발자와도 연락이 닿지 않아
유지보수 작업이 매우 어려운 코드이다.`,
    answers: ['외계인 코드', '외계인코드', 'alien code', '외계인 코드 (Alien Code)', '에일리언 코드'],
    answerLabel: '외계인 코드 (Alien Code)',
    explanation: '"아주 오래되었거나 참고 문서·개발자가 없어 유지보수가 매우 어려운 코드"가 외계인 코드(Alien Code)의 정의다.',
  },
  {
    num: 7,
    question: '클린 코드 작성 원칙 5가지에 대한 다음 설명에서 괄호 안에 들어갈 원칙의 이름을 쓰시오.',
    code: `· 가독성        : 누구든지 코드를 쉽게 읽을 수 있도록 작성
· (          )  : 한 번에 한 가지 기능만 처리하도록 코드를 간단하게
                  작성하고, 클래스·메서드·함수를 최소 단위로 분리
· 의존성 배제   : 다른 모듈에 미치는 영향을 최소화
· 중복성 최소화 : 중복 코드를 삭제하고 공통 코드를 모듈로 분리
· 추상화        : 상위 클래스에서는 큰 개념만 정의`,
    answers: ['단순성', '단순성 (Simplicity)', 'simplicity', '단순함'],
    answerLabel: '단순성 (Simplicity)',
    explanation: '"한 번에 한 가지 기능만 처리, 최소 단위로 분리"는 단순성의 정의다. 클린 코드 5원칙은 가독성·단순성·의존성 배제·중복성 최소화·추상화다.',
  },
  {
    num: 8,
    question: '다음 설명에 해당하는 클린 코드 작성 원칙을 쓰시오.',
    code: `상위 클래스(모듈)에서는 전반적인 특성 등 큰 개념만 정의하고,
세부적인 상세 내용은 하위 클래스(모듈)에서 구현하도록 작성한다.`,
    answers: ['추상화', '추상화 (Abstraction)', 'abstraction'],
    answerLabel: '추상화 (Abstraction)',
    explanation: '"상위에서는 큰 개념만, 상세 내용은 하위에서"라는 키워드가 나오면 추상화다. 다른 모듈에 미치는 영향 최소화(의존성 배제)와 혼동하지 않도록 주의한다.',
  },
  {
    num: 9,
    question: '다음 설명의 괄호 안에 공통으로 들어갈 용어를 쓰시오.',
    code: `(          )은/는 소프트웨어의 외부 동작(기능·결과)은 변경하지
않으면서 내부 구조를 개선하여, 이해하기 쉽고 수정하기 쉬운 코드로
만드는 작업이다. (          )의 목적은 유지보수성 향상, 가독성 향상,
생산성 향상, 품질 향상이다.`,
    answers: ['리팩토링', '리팩터링', 'refactoring', '리팩토링 (Refactoring)'],
    answerLabel: '리팩토링 (Refactoring)',
    explanation: '"기능(결과)의 변경 없이 내부 구조를 개선"이 리팩토링 정의의 핵심 문구다. 결과가 바뀌면 리팩토링이 아니라는 점이 채점 포인트다.',
  },
  {
    num: 10,
    question: '리팩토링(Refactoring)의 정의에 대한 다음 설명에서 괄호 안에 들어갈 말을 쓰시오.',
    code: `리팩토링은 소프트웨어의 ( )은/는 변경하지 않으면서
내부 구조를 개선하는 작업이다. 즉, 리팩토링 전과 후에
프로그램이 내놓는 결과는 동일해야 한다.`,
    answers: ['외부 동작', '기능', '결과', '동작', '외부 동작(기능)', '외부 기능', '외부동작'],
    answerLabel: '외부 동작 (기능·결과)',
    explanation: '리팩토링에서 바꾸는 것은 내부 구조이고, 바꾸지 않아야 하는 것은 외부 동작(기능·결과)이다. 이 조건이 깨지면 리팩토링이 아니다.',
  },
  {
    num: 11,
    question: '다음 보기의 소스 코드 품질 분석 도구 중 프로그램을 실행하면서(런타임) 분석하는 동적 분석 도구를 모두 골라 기호로 쓰시오.',
    code: `[보기]
㉠ pmd   ㉡ Valgrind   ㉢ SonarQube   ㉣ Avalanche   ㉤ checkstyle`,
    answers: ['㉡, ㉣', '㉡㉣', '㉣㉡', '㉡ ㉣', 'Valgrind, Avalanche', 'Avalanche, Valgrind', 'valgrind avalanche', 'avalanche valgrind'],
    answerLabel: '㉡ Valgrind, ㉣ Avalanche',
    explanation: '동적 분석 도구는 Valgrind와 Avalanche 둘뿐이라고 기억하면 된다. pmd·SonarQube·checkstyle은 실행 없이 소스를 검사하는 정적 분석 도구다.',
  },
  {
    num: 12,
    question: '다음 보기의 소스 코드 품질 분석 도구 중 프로그램을 실행하지 않고 소스 코드 자체를 분석하는 정적 분석 도구를 모두 골라 기호로 쓰시오.',
    code: `[보기]
㉠ cppcheck   ㉡ Avalanche   ㉢ cobertura   ㉣ ccm   ㉤ Valgrind`,
    answers: ['㉠, ㉢, ㉣', '㉠㉢㉣', '㉠ ㉢ ㉣', '㉣㉢㉠', 'cppcheck, cobertura, ccm', 'cppcheck cobertura ccm', 'ccm cobertura cppcheck'],
    answerLabel: '㉠ cppcheck, ㉢ cobertura, ㉣ ccm',
    explanation: 'cppcheck(C/C++ 결함 검사)·cobertura(커버리지 측정)·ccm(복잡도 분석)은 정적 분석 도구다. 실행하면서 분석하는 Avalanche·Valgrind만 동적 분석 도구다.',
  },
  {
    num: 13,
    question: '퀵 정렬(Quick Sort)에서 피벗이 매번 최솟값이나 최댓값으로 치우쳐 분할이 한쪽으로 쏠리는 경우의 최악 시간 복잡도를 빅오 표기법으로 쓰시오.',
    answers: ['O(n²)', 'O(n^2)', 'O(n2)', 'n²', 'n^2', 'n2', '오엔제곱'],
    answerLabel: 'O(n²)',
    explanation: '퀵 정렬은 평균 O(n log n)이지만, 이미 정렬된 데이터 등에서 분할이 한쪽으로 쏠리면 최악 O(n²)이 된다. 평균과 최악이 다른 점이 단골 출제 포인트다.',
  },
  {
    num: 14,
    question: '힙 정렬(Heap Sort)과 합병 정렬(Merge Sort)이 최악의 경우에도 공통으로 보장하는 시간 복잡도를 빅오 표기법으로 쓰시오.',
    answers: ['O(n log n)', 'O(nlogn)', 'O(n logn)', 'nlogn', 'n log n', 'O(nlog n)'],
    answerLabel: 'O(n log n)',
    explanation: '힙 정렬과 합병 정렬은 평균·최악 모두 O(n log n)이다. 최악에 O(n²)로 떨어지는 퀵 정렬과 대비해서 기억하자.',
  },
  {
    num: 15,
    question: '인접한 두 값을 비교하여 자리를 교환하며 정렬하는 버블 정렬(Bubble Sort)의 평균 시간 복잡도를 빅오 표기법으로 쓰시오.',
    answers: ['O(n²)', 'O(n^2)', 'O(n2)', 'n²', 'n^2', 'n2', '오엔제곱'],
    answerLabel: 'O(n²)',
    explanation: '버블·선택·삽입 정렬은 평균과 최악 모두 O(n²)이다. 이중 루프로 인접 원소를 반복 비교·교환하기 때문이다.',
  },
  {
    num: 16,
    question: '정렬된 배열에서 중앙값과 비교하며 탐색 범위를 절반씩 줄여 나가는 이진 탐색(Binary Search)의 시간 복잡도를 빅오 표기법으로 쓰시오.',
    answers: ['O(log n)', 'O(logn)', 'logn', 'log n', 'O(log₂n)', 'O(log2n)'],
    answerLabel: 'O(log n)',
    explanation: '이진 탐색은 비교할 때마다 범위가 절반으로 줄어 O(log n)이다. 단, 반드시 정렬된 데이터에서만 사용할 수 있다는 조건도 함께 기억하자.',
  },
  {
    num: 17,
    question: '시간 복잡도를 효율이 좋은 것부터 나쁜 것 순으로 나열한 다음 순서에서 괄호 안에 들어갈 빅오 표기를 쓰시오.',
    code: `O(1) → O(log n) → (      ) → O(n log n) → O(n²) → O(2ⁿ)`,
    answers: ['O(n)', 'n', '오엔', '선형 시간'],
    answerLabel: 'O(n)',
    explanation: '빅오 크기 순서는 O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)이다. 로그 시간과 선형 로그 시간 사이에 선형 시간 O(n)이 들어간다.',
  },
  {
    num: 18,
    question: '다음 설명에 해당하는 메모리 관리 기법의 용어를 쓰시오.',
    code: `프로그램이 동적으로 할당한 메모리 중 더 이상 참조(사용)되지 않는
영역을 시스템이 자동으로 탐지하여 해제·회수하는 기법이다.
Java, C# 등의 언어에서 개발자가 직접 메모리를 해제하지 않아도 되게
해 주지만, 동작하는 동안 애플리케이션이 잠시 멈추는 부담이 생길 수 있다.`,
    answers: ['가비지 컬렉션', '가비지컬렉션', 'garbage collection', 'GC', '가비지 콜렉션', '가비지 컬렉션 (Garbage Collection)'],
    answerLabel: '가비지 컬렉션 (Garbage Collection, GC)',
    explanation: '"사용하지 않는 메모리를 자동으로 해제·회수"가 가비지 컬렉션 정의의 핵심이다. GC 중 일시 정지(Stop-the-World) 부담이 있어 불필요한 객체 생성을 줄이는 것이 성능 개선의 기본이다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 용어를 영문 약어로 쓰시오.',
    code: `운영 중인 애플리케이션의 성능과 가용성을 실시간으로 모니터링·관리하여
장애를 사전에 예방하고 원인을 분석할 수 있게 해 주는 도구(체계)이다.
오픈소스인 스카우터(Scouter), 상용 제품인 제니퍼(Jennifer)와
뉴렐릭(New Relic) 등이 대표적이다.`,
    answers: ['APM', 'A.P.M', 'apm', 'Application Performance Management', 'Application Performance Monitoring'],
    answerLabel: 'APM (Application Performance Management/Monitoring)',
    explanation: '애플리케이션 성능을 실시간으로 모니터링·관리하는 도구를 통칭하는 용어가 APM이다. 스카우터·제니퍼·뉴렐릭을 예시로 함께 기억해 두자.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `중복 코드, 지나치게 긴 메서드, 거대한 클래스, 긴 매개변수 목록처럼
당장 버그는 아니지만 더 깊은 문제가 숨어 있을 가능성을 암시하는
코드의 징후를 말하며, 발견되면 리팩토링의 대상이 된다.`,
    answers: ['코드 스멜', '코드스멜', 'code smell', '코드 스멜 (Code Smell)', '코드 냄새'],
    answerLabel: '코드 스멜 (Code Smell)',
    explanation: '"버그는 아니지만 문제 가능성을 암시하는 코드의 징후"가 코드 스멜의 정의다. 코드 스멜을 제거하는 활동이 리팩토링이다.',
  },
]

export default defineComponent({
  name: 'VariantPerformanceImprovePage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 애플리케이션 성능 분석과 개선</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 보기와 예시를 바꾼 변형 20문제입니다.
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

        <footer>애플리케이션 성능 분석과 개선 기출 변형 20문제 · 2026-09</footer>
      </div>
    )
  },
})
