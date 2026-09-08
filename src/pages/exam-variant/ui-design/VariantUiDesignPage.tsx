import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './ui-design.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: 'UML(Unified Modeling Language)의 기본 구성 요소 3가지에 대한 다음 설명에서 괄호 안에 공통으로 들어갈 용어를 쓰시오.',
    code: `· 사물(Things)        : 모델을 구성하는 기본 요소
· (              )    : 사물과 사물 사이의 연관성을 표현하며,
                        연관·집합·복합·일반화·의존·실체화의 6가지가 있다
· 다이어그램(Diagrams) : 사물과 (              )를 도형으로 표현한 그림`,
    answers: ['관계', '관계 (Relationships)', 'relationships', 'relationship', '릴레이션십'],
    answerLabel: '관계 (Relationships)',
    explanation: 'UML의 3대 구성 요소는 사물(Things)·관계(Relationships)·다이어그램(Diagrams)이다. 관계에는 연관·집합·복합·일반화·의존·실체화 6종이 있다.',
  },
  {
    num: 2,
    question: '다음 설명에 해당하는 UML 관계의 명칭을 쓰시오.',
    code: `학교와 학생처럼 전체와 부분의 관계를 나타내지만, 부분(학생)이
전체(학교)와 독립적으로 존재할 수 있다.
전체 쪽에 속이 빈 마름모를 붙인 실선으로 표기한다.`,
    answers: ['집합', '집합 관계', 'aggregation', '집합 관계 (Aggregation)', '어그리게이션'],
    answerLabel: '집합 관계 (Aggregation)',
    explanation: '부분이 전체 없이도 존재할 수 있으면 집합(빈 마름모), 전체가 소멸할 때 부분도 함께 소멸하면 복합(채운 마름모)이다.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 UML 관계의 명칭을 쓰시오.',
    code: `책과 페이지처럼 강한 전체-부분 관계로, 전체(책)가 소멸하면
부분(페이지)도 함께 소멸하여 독립적으로 존재할 수 없다.
전체 쪽에 속이 채워진 마름모를 붙인 실선으로 표기한다.`,
    answers: ['복합', '복합 관계', 'composition', '복합 관계 (Composition)', '컴포지션', '합성', '합성 관계'],
    answerLabel: '복합 관계 (Composition)',
    explanation: '채운 마름모와 "독립 불가·함께 소멸"이 복합 관계의 키워드다. 빈 마름모(독립 가능)인 집합 관계와 반드시 구분하자.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 UML 관계의 명칭을 쓰시오.',
    code: `인터페이스처럼 기능(오퍼레이션)을 정의만 해 둔 사물과,
그 기능을 실제로 구현하여 수행하는 사물 사이의 관계이다.
점선과 속이 빈 삼각형 화살표로 표기한다.`,
    answers: ['실체화', '실체화 관계', 'realization', '실체화 관계 (Realization)', '리얼라이제이션'],
    answerLabel: '실체화 관계 (Realization)',
    explanation: '점선 + 빈 삼각형은 실체화, 실선 + 빈 삼각형은 일반화(상속)다. 선의 종류(점선/실선)로 두 관계를 구분한다.',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 UML 관계의 명칭을 쓰시오.',
    code: `주문 클래스가 할인 정책 클래스를 필요할 때만 잠깐 사용하는
것처럼, 짧은 시간 동안만 관계를 유지하며 영향을 주고받는다.
점선 화살표로 표기한다.`,
    answers: ['의존', '의존 관계', 'dependency', '의존 관계 (Dependency)', '디펜던시'],
    answerLabel: '의존 관계 (Dependency)',
    explanation: '"필요할 때만 짧은 시간 동안"이 의존 관계의 키워드다. 지속적으로 서로 관련되어 있는 연관 관계(실선)와 구분된다.',
  },
  {
    num: 6,
    question: '다음 설명에 해당하는 UML 관계의 명칭을 쓰시오.',
    code: `"전기차는 자동차이다(is-a)"처럼 한 사물(자식·구체)이 다른
사물(부모·일반)보다 구체적인 상속 구조를 나타낸다.
자식에서 부모 쪽으로 실선과 속이 빈 삼각형 화살표를 그린다.`,
    answers: ['일반화', '일반화 관계', 'generalization', '일반화 관계 (Generalization)', '제너럴라이제이션'],
    answerLabel: '일반화 관계 (Generalization)',
    explanation: '상속(is-a) 관계는 일반화이며 실선 + 빈 삼각형으로 표기한다. 삼각형 화살표는 항상 부모(일반적인 쪽)를 향한다.',
  },
  {
    num: 7,
    question: '다음 설명에 해당하는 UML 다이어그램의 이름을 쓰시오.',
    code: `클래스의 속성(Attribute)과 연산(Operation), 그리고 클래스
사이의 관계를 표현하여 시스템의 정적인 구조를 파악하는 데
사용하는 대표적인 구조적 다이어그램이다.`,
    answers: ['클래스 다이어그램', '클래스', 'class diagram', 'class', '클래스다이어그램 (Class Diagram)'],
    answerLabel: '클래스 다이어그램 (Class Diagram)',
    explanation: '클래스 다이어그램은 이름·속성·연산의 3칸 상자와 관계선으로 시스템 구조를 나타내는 구조적(정적) 다이어그램의 대표 주자다.',
  },
  {
    num: 8,
    question: '다음 설명에 해당하는 UML 다이어그램의 이름을 쓰시오.',
    code: `객체들이 주고받는 메시지를 시간의 흐름(순서)에 따라 위에서
아래로 표현하는 다이어그램으로, 생명선과 활성 상자,
메시지 화살표로 구성된다.`,
    answers: ['시퀀스 다이어그램', '시퀀스', 'sequence diagram', 'sequence', '순차 다이어그램'],
    answerLabel: '시퀀스 다이어그램 (Sequence Diagram)',
    explanation: '"시간의 흐름·순서"가 시퀀스 다이어그램의 핵심 키워드다. 메시지와 함께 객체 간 연결 구조까지 강조하면 커뮤니케이션 다이어그램이다.',
  },
  {
    num: 9,
    question: '다음 설명에 해당하는 UML 다이어그램의 이름을 쓰시오.',
    code: `사용자(액터)의 관점에서 시스템이 제공해야 하는 기능과 그
관계를 표현하는 다이어그램으로, 기능은 타원으로 그리며
주로 요구사항 분석 단계에서 사용된다.`,
    answers: ['유스케이스 다이어그램', '유스케이스', 'use case diagram', 'usecase', '유즈케이스 다이어그램'],
    answerLabel: '유스케이스 다이어그램 (Use Case Diagram)',
    explanation: '액터·시스템 경계·타원(유스케이스)으로 구성되며, «include»·«extend» 관계와 함께 실기에 가장 자주 출제되는 행위 다이어그램이다.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 UML 다이어그램의 이름을 쓰시오.',
    code: `시스템이 기능을 수행할 때의 처리 흐름(로직)을 순서도처럼
활동 단위로 표현하는 다이어그램으로, 조건에 따른 분기와
병렬 처리도 나타낼 수 있다.`,
    answers: ['활동 다이어그램', '활동', 'activity diagram', 'activity', '액티비티 다이어그램'],
    answerLabel: '활동 다이어그램 (Activity Diagram)',
    explanation: '"처리 흐름을 순서도처럼"이 활동 다이어그램의 키워드다. 시간 순서의 메시지 교환(시퀀스)과 구분해서 기억하자.',
  },
  {
    num: 11,
    question: '다음 설명에 해당하는 UML 다이어그램의 이름을 쓰시오.',
    code: `결과물·프로세스·컴포넌트 등 물리적 요소들이 어느 노드(하드웨어)
에 배치되는지 그 위치를 표현하는 구조적 다이어그램으로,
구현 단계에서 사용된다.`,
    answers: ['배치 다이어그램', '배치', 'deployment diagram', 'deployment', '디플로이먼트 다이어그램'],
    answerLabel: '배치 다이어그램 (Deployment Diagram)',
    explanation: '"물리적 요소의 위치·노드"가 배치 다이어그램의 키워드다. 컴포넌트 다이어그램과 함께 구현 단계에서 쓰이는 구조적 다이어그램이다.',
  },
  {
    num: 12,
    question: '다음 보기에서 구조적(정적) 다이어그램에 해당하는 것을 모두 골라 기호로 쓰시오.',
    code: `㉠ 상태 다이어그램        ㉡ 패키지 다이어그램
㉢ 컴포넌트 다이어그램    ㉣ 커뮤니케이션 다이어그램
㉤ 객체 다이어그램        ㉥ 타이밍 다이어그램`,
    answers: ['㉡, ㉢, ㉤', '㉡, ㉤, ㉢', '㉢, ㉡, ㉤', '㉢, ㉤, ㉡', '㉤, ㉡, ㉢', '㉤, ㉢, ㉡'],
    answerLabel: '㉡, ㉢, ㉤',
    explanation: '구조적 6종은 클래스·객체·컴포넌트·배치·패키지·복합체 구조다. 상태·커뮤니케이션·타이밍은 시간에 따른 동작을 그리는 행위(동적) 다이어그램이다.',
  },
  {
    num: 13,
    question: '유스케이스 다이어그램의 관계에 대한 다음 설명에서 괄호 안에 들어갈 스테레오타입을 쓰시오.',
    code: `'상품 주문' 유스케이스가 실행되려면 '결제' 유스케이스가
반드시 함께 실행되어야 한다. 이때 두 유스케이스는
« (        ) » 관계이며, 점선 화살표는 반드시 실행되는
'결제' 쪽을 향한다.`,
    answers: ['include', '«include»', '포함', '포함 관계', '인클루드'],
    answerLabel: '«include» (포함)',
    explanation: '"반드시 함께 실행"이면 포함(«include»)이다. 화살표는 포함되는(필수) 기능 쪽으로 향한다.',
  },
  {
    num: 14,
    question: '유스케이스 다이어그램의 관계에 대한 다음 설명에서 괄호 안에 들어갈 스테레오타입을 쓰시오.',
    code: `'쿠폰 적용' 유스케이스는 고객이 쿠폰을 가지고 있는 특정
조건에서만 선택적으로 실행되어 '결제' 유스케이스를 보완한다.
이때 두 유스케이스는 « (        ) » 관계이며, 점선 화살표는
기본 기능인 '결제' 쪽을 향한다.`,
    answers: ['extend', '«extend»', '확장', '확장 관계', '익스텐드'],
    answerLabel: '«extend» (확장)',
    explanation: '"특정 조건에서만 선택적으로 실행"이면 확장(«extend»)이다. 화살표 방향은 포함(기본 → 필수 기능)과 반대로, 부가 기능에서 기본 기능 쪽을 향한다.',
  },
  {
    num: 15,
    question: '«include», «extend»처럼 UML의 기본 요소에 새로운 의미를 부여해 확장할 때 사용하는 표기법으로, 겹화살괄호(« ») 안에 이름을 적는 이 표기법의 명칭을 쓰시오.',
    answers: ['스테레오타입', 'stereotype', '스테레오 타입', '스테레오타입 (Stereotype)'],
    answerLabel: '스테레오타입 (Stereotype)',
    explanation: '스테레오타입은 UML 확장 표기법으로, 길러멧(Guillemet)이라 부르는 겹화살괄호 « » 안에 이름을 적는다.',
  },
  {
    num: 16,
    question: '시퀀스 다이어그램에 대한 다음 설명에서 괄호 안에 들어갈 구성 요소의 명칭을 쓰시오.',
    code: `시퀀스 다이어그램에서 ( )은/는 객체 아래로 이어지는
세로 점선으로, 해당 객체가 존재하는 시간의 흐름을 나타낸다.
시간은 위에서 아래로 흐른다.`,
    answers: ['생명선', 'lifeline', '라이프라인', '생명선 (Lifeline)'],
    answerLabel: '생명선 (Lifeline)',
    explanation: '시퀀스 다이어그램의 구성 요소는 액터·객체·생명선·활성 상자·메시지 5가지다. "객체 아래의 세로 점선"이 생명선이다.',
  },
  {
    num: 17,
    question: '시퀀스 다이어그램에 대한 다음 설명에서 괄호 안에 들어갈 구성 요소의 명칭을 쓰시오.',
    code: `시퀀스 다이어그램에서 ( )은/는 생명선 위에 그리는
가늘고 긴 직사각형으로, 객체가 실제로 연산(오퍼레이션)을
수행하고 있는 활성화 구간을 나타낸다.`,
    answers: ['활성 상자', '활성상자', 'activation box', 'activation', '활성 구간', '활성 박스', '활성화 상자'],
    answerLabel: '활성 상자 (Activation Box)',
    explanation: '생명선 위의 가는 직사각형이 활성 상자이며, 객체가 연산을 수행하는 동안만 그린다. 생명선(점선)과 짝지어 출제된다.',
  },
  {
    num: 18,
    question: '다음 클래스 다이어그램 표기에서 속성 balance 앞에 붙은 기호 #이 의미하는 접근제어자(가시성)를 쓰시오.',
    code: `Account
--------------------------
# balance : int
- password : String
--------------------------
+ deposit(amount : int) : void`,
    answers: ['protected', '프로텍티드', 'protected (프로텍티드)'],
    answerLabel: 'protected',
    explanation: '접근제어자 기호는 + public, - private, # protected, ~ package다. #(protected)은 동일 클래스와 상속받은 자식 클래스에서만 접근할 수 있다.',
  },
  {
    num: 19,
    question: '클래스 다이어그램의 연관 관계 양 끝에는 참여하는 객체의 개수를 다중성(Multiplicity)으로 표기한다. "0개 또는 1개"를 의미하는 다중성 표기를 쓰시오.',
    answers: ['0..1'],
    answerLabel: '0..1',
    explanation: '다중성 표기는 1(정확히 1개), 0..1(0개 또는 1개), 0..* 또는 *(0개 이상), 1..*(1개 이상), n..m(n개부터 m개까지)이다.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 UI 설계 도구의 명칭을 쓰시오.',
    code: `기획 초기 단계에서 화면 단위의 뼈대를 잡기 위해 선과 상자만으로
UI 요소의 배치(레이아웃)를 개략적으로 그린 것이다.
손그림이나 파워포인트 등으로 빠르게 제작한다.`,
    answers: ['와이어프레임', 'wireframe', '와이어 프레임', '와이어프레임 (Wireframe)'],
    answerLabel: '와이어프레임 (Wireframe)',
    explanation: '"뼈대·레이아웃·기획 초기"가 와이어프레임의 키워드다. 여기에 설명과 이동 흐름을 더하면 스토리보드, 실물과 유사한 정적 모형이면 목업, 인터랙션이 동작하는 동적 모형이면 프로토타입이다.',
  },
]

export default defineComponent({
  name: 'VariantUiDesignPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — UI 설계와 UML</h1>
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

        <footer>UI 설계와 UML 기출 변형 20문제 · 2026-09</footer>
      </div>
    )
  },
})
