import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './module-impl.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 응집도의 종류를 쓰시오.',
    code: `모듈 안에서 한 구성 요소의 출력 데이터가 그다음 구성 요소의 입력으로
그대로 사용되는 경우이다. 예를 들어 한 모듈이 파일에서 데이터를 읽은 뒤,
읽어 낸 그 데이터를 이어서 가공하는 작업으로 넘겨 처리한다.`,
    answers: ['순차적 응집도', '순차적', 'Sequential Cohesion', 'Sequential', '순차 응집도'],
    answerLabel: '순차적 응집도 (Sequential Cohesion)',
    explanation:
      '"출력이 다음 요소의 입력으로 사용"이 순차적 응집도의 결정 키워드다. 순서만 이어지고 데이터 전달이 없으면 절차적 응집도이므로 구분에 주의한다.',
  },
  {
    num: 2,
    question: '다음 설명에 해당하는 응집도의 종류를 쓰시오.',
    code: `동일한 입력 자료를 사용하거나 동일한 출력 데이터를 만들어 내는
소단위 작업들이 하나의 모듈에 모여 있는 경우로,
구성 요소들의 처리 순서와는 무관하다는 점이 특징이다.`,
    answers: ['통신적 응집도', '통신적', '교환적 응집도', '교환적', 'Communication Cohesion', 'Communicational Cohesion'],
    answerLabel: '통신적(교환적) 응집도 (Communication Cohesion)',
    explanation:
      '"같은 입력·출력(같은 데이터)을 사용"하면 통신적(교환적) 응집도다. 데이터가 앞 요소의 출력 → 뒤 요소의 입력으로 이어지면 순차적 응집도로 올라간다.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 응집도의 종류를 쓰시오.',
    code: `모듈 안의 구성 요소들이 그 모듈의 기능을 순서에 따라 차례대로
수행하기는 하지만, 요소들 사이에 데이터를 주고받지는 않는 경우이다.`,
    answers: ['절차적 응집도', '절차적', 'Procedural Cohesion', 'Procedural'],
    answerLabel: '절차적 응집도 (Procedural Cohesion)',
    explanation:
      '"순차적으로 수행하지만 데이터 전달은 없음"이 절차적 응집도의 정의다. 데이터까지 이어지면 순차적 응집도이므로, 두 단계는 데이터 전달 여부로 구분한다.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 응집도의 종류를 쓰시오.',
    code: `유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들이 하나의
모듈에 모여 있는 경우이다. 예를 들어 화면 출력, 프린터 출력, 파일 출력 등
모든 종류의 출력 처리를 한 모듈에 모아 두고 호출 시 하나를 골라 수행한다.`,
    answers: ['논리적 응집도', '논리적', 'Logical Cohesion', 'Logical'],
    answerLabel: '논리적 응집도 (Logical Cohesion)',
    explanation:
      '"유사한 성격·특정 형태로 분류되는 요소들"이 논리적 응집도의 키워드다. 같은 시점에 실행되어야 해서 모였으면 시간적 응집도로 구분한다.',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 응집도의 종류를 쓰시오.',
    code: `같은 시점에 처리되어야 하는 여러 기능을 하나의 모듈로 모은 경우이다.
예를 들어 시스템 기동 시 환경 변수 로딩, 로그 파일 열기,
DB 커넥션 준비를 하나의 초기화 모듈에서 함께 수행한다.`,
    answers: ['시간적 응집도', '시간적', 'Temporal Cohesion', 'Temporal'],
    answerLabel: '시간적 응집도 (Temporal Cohesion)',
    explanation:
      '"특정 시간(같은 시점)에 처리", "초기화/종료 처리 모듈"이 시간적 응집도의 결정 키워드다. 성격이 유사해서 모였으면 논리적 응집도다.',
  },
  {
    num: 6,
    question: '다음 설명에 해당하는 응집도의 종류를 쓰시오.',
    code: `모듈 내부의 구성 요소들이 서로 아무런 관련 없이 우연히 모여 있는
경우로, 응집도 7단계 중 가장 낮은(가장 나쁜) 응집도이다.`,
    answers: ['우연적 응집도', '우연적', 'Coincidental Cohesion', 'Coincidental'],
    answerLabel: '우연적 응집도 (Coincidental Cohesion)',
    explanation:
      '"서로 관련 없음", "가장 낮은 응집도"가 우연적 응집도의 키워드다. 응집도는 우연적 → 논리적 → 시간적 → 절차적 → 통신적 → 순차적 → 기능적 순으로 높아진다.',
  },
  {
    num: 7,
    question: '다음 설명에 해당하는 결합도의 종류를 쓰시오.',
    code: `두 모듈이 배열이나 레코드(구조체) 같은 자료 구조를 통째로 주고받는
경우이다. 호출된 모듈이 그중 일부 필드만 사용하더라도
자료 구조 전체가 전달된다.`,
    answers: ['스탬프 결합도', '스탬프', 'Stamp Coupling', 'Stamp'],
    answerLabel: '스탬프 결합도 (Stamp Coupling)',
    explanation:
      '"배열·레코드 같은 자료 구조를 통째로 전달"이 스탬프 결합도의 키워드다. 단순한 값(매개변수)만 주고받으면 자료 결합도로 구분한다.',
  },
  {
    num: 8,
    question: '다음 설명에 해당하는 결합도의 종류를 쓰시오.',
    code: `한 모듈이 다른 모듈에게 처리 방법을 지시하는 제어 신호(플래그, 스위치)를
전달하는 경우로, 하위 모듈이 상위 모듈의 처리를 지시하는
권리 전도 현상이 발생할 수 있다.`,
    answers: ['제어 결합도', '제어', 'Control Coupling', 'Control'],
    answerLabel: '제어 결합도 (Control Coupling)',
    explanation:
      '"제어 신호(플래그·스위치) 전달"과 "권리 전도 현상"이 제어 결합도의 결정 키워드다. 데이터가 아니라 처리 방법을 지시하는 요소를 넘긴다는 점이 핵심이다.',
  },
  {
    num: 9,
    question: '다음 설명에 해당하는 결합도의 종류를 쓰시오.',
    code: `어떤 모듈이 외부의 다른 모듈에서 선언한 데이터(변수)나
통신 프로토콜, 외부 장치 인터페이스 등을 참조하는 경우이다.
(공통 데이터 영역인 전역 변수를 공유하는 경우는 아니다.)`,
    answers: ['외부 결합도', '외부', 'External Coupling', 'External'],
    answerLabel: '외부 결합도 (External Coupling)',
    explanation:
      '"다른 모듈에서 선언한 데이터·프로토콜을 참조"하면 외부 결합도다. 여러 모듈이 전역 변수(공통 데이터 영역)를 함께 쓰면 공통 결합도이므로 두 단계를 혼동하지 않는다.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 결합도의 종류를 쓰시오.',
    code: `모듈 간의 인터페이스가 단순한 자료 요소(값, 매개변수)로만 구성되어
있는 경우로, 결합도 6단계 중 가장 낮은(가장 바람직한) 결합도이다.`,
    answers: ['자료 결합도', '자료', '데이터 결합도', 'Data Coupling', 'Data'],
    answerLabel: '자료 결합도 (Data Coupling)',
    explanation:
      '"단순한 자료 요소(값)만 전달", "가장 낮은(바람직한) 결합도"가 자료 결합도의 키워드다. 자료 구조를 통째로 넘기면 스탬프 결합도로 한 단계 올라간다.',
  },
  {
    num: 11,
    question: '다음 보기의 결합도를 낮은 것부터 높은 것 순서로 나열하시오. (화살표 → 로 구분)',
    code: `보기: 내용, 제어, 자료, 공통, 스탬프, 외부`,
    answers: [
      '자료 → 스탬프 → 제어 → 외부 → 공통 → 내용',
      '자료 스탬프 제어 외부 공통 내용',
      '자료, 스탬프, 제어, 외부, 공통, 내용',
      '자료 결합도 → 스탬프 결합도 → 제어 결합도 → 외부 결합도 → 공통 결합도 → 내용 결합도',
      '자료 결합도, 스탬프 결합도, 제어 결합도, 외부 결합도, 공통 결합도, 내용 결합도',
      '자스제외공내',
    ],
    answerLabel: '자료 → 스탬프 → 제어 → 외부 → 공통 → 내용',
    explanation:
      '결합도 낮음 → 높음 순서는 "자스제외공내"(자료 → 스탬프 → 제어 → 외부 → 공통 → 내용)다. 결합도는 낮을수록 좋으므로 맨 앞의 자료 결합도가 가장 바람직하다.',
  },
  {
    num: 12,
    question: '다음 보기 중 응집도가 가장 높은(가장 바람직한) 것을 골라 쓰시오.',
    code: `보기: 논리적 응집도, 절차적 응집도, 기능적 응집도, 시간적 응집도, 통신적 응집도`,
    answers: ['기능적 응집도', '기능적', 'Functional Cohesion', 'Functional'],
    answerLabel: '기능적 응집도 (Functional Cohesion)',
    explanation:
      '응집도 낮음 → 높음 순서는 "우논시절통순기"이며, 모듈의 모든 요소가 단일 기능을 수행하는 기능적 응집도가 7단계 중 최상위로 가장 바람직하다.',
  },
  {
    num: 13,
    question: '다음 모듈 호출 구조에서 모듈 C의 팬인(Fan-In)과 팬아웃(Fan-Out)을 각각 구하시오.',
    code: `A ─┬─→ B ─┬─→ E
   │      └─→ F
   ├─→ C ─┬─→ F
   │      └─→ G
   └─→ D ───→ G

(화살표는 왼쪽 모듈이 오른쪽 모듈을 호출한다는 뜻이다.)`,
    answers: [
      '팬인 1, 팬아웃 2',
      '팬인: 1, 팬아웃: 2',
      '팬인은 1, 팬아웃은 2',
      'Fan-In 1, Fan-Out 2',
      'Fan-In = 1, Fan-Out = 2',
      'FanIn 1, FanOut 2',
      '1, 2',
      '1 2',
    ],
    answerLabel: 'Fan-In = 1, Fan-Out = 2',
    explanation:
      'C를 호출하는 모듈은 A 하나이므로 Fan-In = 1이고, C가 호출하는 모듈은 F와 G의 2개이므로 Fan-Out = 2다. 검산: 전체 화살표는 A(3)+B(2)+C(2)+D(1) = 8개이고, 팬인 합도 B(1)+C(1)+D(1)+E(1)+F(2)+G(2) = 8로 일치한다.',
  },
  {
    num: 14,
    question: '다음 모듈 호출 구조에서 모듈 T의 팬인(Fan-In)을 구하시오.',
    code: `MAIN ─┬─→ P ─┬─→ S
      │      └─→ T
      ├─→ Q ───→ T
      └─→ R ─┬─→ T
             └─→ U

(화살표는 왼쪽 모듈이 오른쪽 모듈을 호출한다는 뜻이다.)`,
    answers: ['3', '3개', 'Fan-In 3', 'Fan-In = 3', '팬인 3'],
    answerLabel: 'Fan-In = 3',
    explanation:
      'T를 호출하는 상위 모듈은 P, Q, R의 3개이므로 Fan-In = 3이다. 검산: 전체 화살표는 MAIN(3)+P(2)+Q(1)+R(2) = 8개이고, 팬인 합도 P(1)+Q(1)+R(1)+S(1)+T(3)+U(1) = 8로 일치한다.',
  },
  {
    num: 15,
    question: '공통 모듈 명세 기법의 원칙에 대한 설명이다. 괄호에 공통으로 들어갈 원칙의 이름을 쓰시오.',
    code: `공통 모듈 명세 기법의 원칙: 정확성, 명확성, ( ), 일관성, 추적성

( ) : 시스템 구현을 위해 필요한 모든 것을 빠짐없이 기술하는 원칙`,
    answers: ['완전성', 'Completeness', '완전성(Completeness)'],
    answerLabel: '완전성 (Completeness)',
    explanation:
      '공통 모듈 명세 원칙 5가지는 정확성·명확성·완전성·일관성·추적성("정명완일추")이다. "필요한 모든 것을 빠짐없이"가 완전성의 결정 키워드다.',
  },
  {
    num: 16,
    question: '소프트웨어 재사용 수준에 대한 설명이다. 괄호에 들어갈 재사용 수준의 이름을 쓰시오.',
    code: `재사용 수준 3가지 (작은 단위 → 큰 단위)
함수와 객체 → ( ) → 애플리케이션

( ) : 대상을 수정하지 않고 인터페이스를 통해 통신하는 방식으로
      재사용하는 중간 단위의 수준`,
    answers: ['컴포넌트', 'Component', '컴포넌트 수준'],
    answerLabel: '컴포넌트 (Component)',
    explanation:
      '재사용 수준 3가지는 함수와 객체(가장 작음) → 컴포넌트(중간) → 애플리케이션(가장 큼)이다. "수정 없이 인터페이스를 통해 통신"이 컴포넌트 수준의 키워드다.',
  },
  {
    num: 17,
    question: 'MVC 패턴에 대한 설명이다. 괄호에 들어갈 구성 요소의 이름을 쓰시오.',
    code: `MVC 패턴은 애플리케이션을 Model, View, ( ) 세 부분으로 나눈다.

( ) : 사용자의 입력을 받아 처리하고,
      Model과 View 사이의 흐름을 제어·연결하는 역할을 담당한다.`,
    answers: ['Controller', '컨트롤러', 'Controller(컨트롤러)', '콘트롤러'],
    answerLabel: 'Controller (컨트롤러)',
    explanation:
      'MVC에서 데이터·비즈니스 로직은 Model, 화면(UI) 표시는 View, 사용자 입력 처리와 흐름 제어는 Controller가 담당한다.',
  },
  {
    num: 18,
    question: '다음 설명에 해당하는 테스트 커버리지의 종류를 쓰시오.',
    code: `결정 포인트 내의 전체 조건식의 결과가 참(True)과 거짓(False)을
각각 최소 한 번 이상 갖도록 테스트 케이스를 구성하는 커버리지이다.`,
    answers: [
      '결정 커버리지',
      '분기 커버리지',
      '결정(분기) 커버리지',
      'Decision Coverage',
      'Branch Coverage',
      '결정',
      '분기',
    ],
    answerLabel: '결정(분기) 커버리지 (Decision / Branch Coverage)',
    explanation:
      '"전체 조건식의 결과가 참/거짓을 각각"이 결정(분기) 커버리지의 키워드다. 개별 조건식의 참/거짓을 보면 조건 커버리지, 모든 문장 실행이면 구문 커버리지다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 테스트 커버리지의 종류를 쓰시오.',
    code: `전체 조건식의 결과와 관계없이, 각 개별 조건식이 참(True)과 거짓(False)을
각각 최소 한 번 이상 갖도록 테스트 케이스를 구성하는 커버리지이다.`,
    answers: ['조건 커버리지', 'Condition Coverage', '조건'],
    answerLabel: '조건 커버리지 (Condition Coverage)',
    explanation:
      '"전체 조건식의 결과와 관계없이 개별 조건식의 참/거짓"이 조건 커버리지의 정의다. 전체 조건식의 참/거짓까지 함께 보면 조건/결정 커버리지가 된다.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 테스트의 종류를 쓰시오.',
    code: `개발자가 구현한 모듈·컴포넌트 하나하나가 설계 명세대로 동작하는지
확인하는 테스트로, 개발 단계에서 가장 먼저 수행된다.
JUnit(Java), NUnit(.NET), CppUnit(C++) 같은 xUnit 계열 프레임워크로
자동화할 수 있다.`,
    answers: ['단위 테스트', '단위테스트', 'Unit Test', '유닛 테스트', '유닛테스트', '모듈 테스트'],
    answerLabel: '단위 테스트 (Unit Test)',
    explanation:
      '"모듈 단위", "가장 먼저 수행", "xUnit 프레임워크"가 단위 테스트의 키워드다. 단위 테스트를 통과한 모듈들을 결합하며 검증하는 것이 통합 테스트다.',
  },
]

export default defineComponent({
  name: 'VariantModuleImplPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 모듈 구현과 모듈 테스트</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 지문과 보기를 바꾼 변형 문제 20문항입니다.
            응집도 7단계·결합도 6단계(최다 빈출), 팬인/팬아웃 계산, 공통 모듈 명세 원칙과
            재사용 수준, MVC 패턴, 테스트 커버리지와 단위 테스트를 다룹니다.
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

        <footer>기출 변형문제 — 모듈 구현과 모듈 테스트 · 2026-09</footer>
      </div>
    )
  },
})
