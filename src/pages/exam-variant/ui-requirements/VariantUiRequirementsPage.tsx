import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './ui-requirements.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 UI 설계 원칙을 쓰시오.',
    code: `처음 접하는 사용자라도 화면을 보자마자 누구나 쉽게 이해하고
사용할 수 있어야 한다.`,
    answers: ['직관성', 'intuitiveness', 'intuition'],
    explanation:
      '"쉽게 이해하고 사용"이 직관성의 정의 키워드다. UI 설계 원칙 4가지는 직관성·유효성·학습성·유연성이다.',
  },
  {
    num: 2,
    question: '다음 괄호 안에 공통으로 들어갈 UI 설계 원칙을 쓰시오.',
    code: `( )은 사용자가 시스템을 통해 자신의 목적을 정확하고
완벽하게 달성할 수 있어야 한다는 UI 설계 원칙이다.`,
    answers: ['유효성', 'efficiency', 'effectiveness'],
    explanation:
      '"목적을 정확하고 완벽하게 달성"이 나오면 유효성이다. 요구사항 수용과 오류 최소화가 나오는 유연성과 혼동하지 않도록 주의한다.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 UI 설계 원칙을 쓰시오.',
    code: `별도의 훈련 과정이 없어도 누구나 쉽게 배우고 익혀서
사용할 수 있어야 한다.`,
    answers: ['학습성', 'learnability'],
    explanation:
      '"쉽게 배우고 익힘"이 학습성의 정의 키워드다. "이해하고 사용"이 나오는 직관성과 구분해서 답해야 한다.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 UI 설계 원칙을 쓰시오.',
    code: `사용자의 요구사항을 최대한 수용하면서 실수나 오류의 발생을
최소화하여야 한다.`,
    answers: ['유연성', 'flexibility'],
    explanation:
      '"요구사항 최대 수용 + 오류 최소화" 두 키워드가 한 세트로 나오면 유연성이다. 목적 달성이 키워드인 유효성과 헷갈리지 말자.',
  },
  {
    num: 5,
    question:
      '다음 사례에서 만족하고 있는 UI 설계 원칙을 쓰시오.',
    code: `쇼핑몰 앱을 처음 설치한 사용자가 사용 설명서를 읽지 않고도
장바구니 아이콘과 돋보기 아이콘만 보고 각 기능을 바로 파악하여
상품 검색과 구매를 완료하였다.`,
    answers: ['직관성', 'intuitiveness', 'intuition'],
    explanation:
      '설명서 없이 보자마자 이해하고 사용했다는 상황은 직관성에 해당한다. 실기에서는 정의 문장뿐 아니라 사례를 주고 원칙을 묻는 형태로도 출제된다.',
  },
  {
    num: 6,
    question:
      '다음 설명에 해당하는 사용자 인터페이스 유형을 영문 약어로 쓰시오.',
    code: `그래픽 요소 없이 사용자가 키보드로 명령어(텍스트)를 직접
입력하여 시스템과 상호작용하는 인터페이스로, 유닉스 셸이나
터미널이 대표적인 예이다.`,
    answers: ['CLI', 'Command Line Interface', '명령 줄 인터페이스', '커맨드 라인 인터페이스'],
    answerLabel: 'CLI (Command Line Interface)',
    explanation:
      '명령어 텍스트를 직접 입력하면 CLI다. 그래픽 요소를 마우스로 조작하는 GUI와 대비하여 기억한다.',
  },
  {
    num: 7,
    question:
      '다음 설명에 해당하는 사용자 인터페이스 유형을 영문 약어로 쓰시오.',
    code: `마우스나 키보드 같은 중간 장치 없이 터치, 음성, 제스처 등
인간의 자연스러운 신체 움직임과 감각으로 시스템을 조작하는
인터페이스로, AI 스피커의 음성 명령이 대표적인 예이다.`,
    answers: ['NUI', 'Natural User Interface', '내추럴 유저 인터페이스'],
    answerLabel: 'NUI (Natural User Interface)',
    explanation:
      '터치·음성·제스처 등 "자연스러운" 상호작용이 핵심 키워드다. N은 Natural의 약자다.',
  },
  {
    num: 8,
    question:
      '현실 세계의 모든 사물이 입출력장치가 되어 사용자와 상호작용하는 인터페이스를 OUI라고 한다. 이때 약어 O에 해당하는 영어 단어를 쓰시오.',
    answers: ['Organic', '오가닉', '유기적'],
    answerLabel: 'Organic',
    explanation:
      'OUI는 Organic User Interface의 약어다. 사물 인터넷(IoT) 기기, 플렉서블 디스플레이처럼 사물 자체가 인터페이스가 되는 유형이다.',
  },
  {
    num: 9,
    question: '다음 설명에 해당하는 용어를 영문 약어로 쓰시오.',
    code: `단순한 화면 구성이나 조작 방법을 넘어, 사용자가 제품이나
서비스를 이용하면서 느끼는 만족감, 감정, 가치 등 총체적 경험을
의미하는 용어`,
    answers: ['UX', 'User Experience', '사용자 경험'],
    answerLabel: 'UX (User Experience)',
    explanation:
      '"총체적 경험"이 나오면 UX, "사용자와 시스템 간의 접점(매개체)"이 나오면 UI다. 두 정의 문장을 구분해서 외운다.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 웹의 3요소 중 하나를 쓰시오.',
    code: `HTML, CSS 등 W3C가 권고하는 표준화 규격을 준수하여 어떤
환경에서도 웹 페이지가 동일한 결과를 내도록 하는 것`,
    answers: ['웹 표준', 'web standard', 'web standards', '웹표준'],
    explanation:
      'W3C 권고안·표준화 규격이 나오면 웹 표준이다. 웹의 3요소는 웹 표준·웹 접근성·웹 호환성이다.',
  },
  {
    num: 11,
    question: '다음 설명에 해당하는 웹의 3요소 중 하나를 쓰시오.',
    code: `장애인이나 고령자 등 신체적 조건이나 이용 환경에 관계없이
누구나 웹 콘텐츠를 동등하게 인식하고 이용할 수 있도록 보장하는 것`,
    answers: ['웹 접근성', 'web accessibility', '웹접근성'],
    explanation:
      '장애인·고령자 배려가 나오면 웹 접근성이다. 관련 지침으로 WCAG와 국내의 KWCAG가 있다.',
  },
  {
    num: 12,
    question: '다음 괄호 안에 들어갈 웹의 3요소 중 하나를 쓰시오.',
    code: `웹의 3요소 : 웹 표준, 웹 접근성, ( )

( ) : 운영체제나 브라우저의 종류·버전에 관계없이 웹 페이지가
동등하게 보이고 동작하는 것으로, 크로스 브라우징과 관련된다.`,
    answers: ['웹 호환성', 'web compatibility', '웹호환성'],
    explanation:
      '브라우저 종류·버전, 크로스 브라우징이 키워드로 나오면 웹 호환성이다.',
  },
  {
    num: 13,
    question:
      '다음 설명에 해당하는 ISO/IEC 9126의 소프트웨어 품질 특성을 쓰시오.',
    code: `사용자가 소프트웨어를 쉽게 이해하고, 배우고, 사용할 수 있는
정도를 나타내며 이해성, 학습성, 운용성, 친밀성을 부특성으로 갖는다.`,
    answers: ['사용성', 'usability'],
    explanation:
      '"이해·학습·사용"이 나오면 사용성이다. ISO/IEC 9126의 6가지 특성은 기능성·신뢰성·사용성·효율성·유지보수성·이식성("기·신·사·효·유·이")이다.',
  },
  {
    num: 14,
    question:
      '다음 설명에 해당하는 ISO/IEC 9126의 소프트웨어 품질 특성을 쓰시오.',
    code: `소프트웨어를 다른 하드웨어나 운영체제 환경으로 옮겨도 잘
동작하는 정도를 나타내며 적응성, 설치성, 대체성, 공존성을
부특성으로 갖는다.`,
    answers: ['이식성', 'portability'],
    explanation:
      '"다른 환경으로 이동"이 나오면 이식성이다. 부특성(적응성·설치성·대체성·공존성)과 함께 단골 빈칸으로 출제된다.',
  },
  {
    num: 15,
    question:
      '성숙성, 결함 허용성, 회복성을 부특성으로 가지며, 일정 시간 동안 의도한 기능을 오류 없이 수행하는 정도를 나타내는 ISO/IEC 9126의 품질 특성을 쓰시오.',
    answers: ['신뢰성', 'reliability'],
    explanation:
      '오류 없이 기능을 지속 수행하는 정도는 신뢰성이며, 부특성은 성숙성·결함 허용성·회복성이다.',
  },
  {
    num: 16,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `화면 구성이나 화면 이동 방식 등 시스템 전체의 모든 UI에
공통으로 적용되는 규칙`,
    answers: ['UI 표준', 'UI standard', 'ui표준', '사용자 인터페이스 표준'],
    explanation:
      '"전체 시스템에 공통 적용되는 규칙"은 UI 표준이다. 개발 과정에서 지켜야 할 세부 사항을 규정한 UI 지침과 바꿔 쓰지 않도록 주의한다.',
  },
  {
    num: 17,
    question: '다음 괄호 안에 들어갈 용어를 쓰시오.',
    code: `UI ( ) : UI 설계와 개발 과정에서 준수해야 할 세부 사항을
규정한 것. 예를 들어 "삭제 버튼은 반드시 확인 대화상자를 거친 뒤
실행한다"와 같은 개별 수준의 규칙이 해당한다.`,
    answers: ['지침', 'UI 지침', 'guideline', 'UI guideline'],
    answerLabel: 'UI 지침',
    explanation:
      '"개발 과정의 세부 사항"이면 UI 지침이다. 표준은 크고 공통, 지침은 세부로 구분해 외운다.',
  },
  {
    num: 18,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `잠재적 사용자들의 목적과 관찰된 행동 패턴을 바탕으로
이름, 나이, 직업, 목표 등을 구체적으로 부여하여 만든
가상의 대표 사용자 모델`,
    answers: ['페르소나', 'persona'],
    answerLabel: '페르소나(Persona)',
    explanation:
      '"가상의 대표 사용자"가 핵심 키워드다. 페르소나가 목표를 달성해 가는 과정을 이야기 형식으로 쓴 것은 유저 시나리오다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `인간의 감성을 정성적·정량적으로 측정하고 과학적으로 분석하여
그 결과를 제품이나 환경 설계에 반영하는 기술로, HCI 설계에
인간의 감성적 특성을 반영해 만족감을 높이는 것을 목표로 한다.`,
    answers: ['감성공학', '감성 공학', 'sensibility engineering', 'human sensibility ergonomics'],
    explanation:
      '"감성의 측정·분석 → 설계 반영"이 감성공학 정의의 뼈대다. 편리함을 넘어 "기분 좋게 쓰이는가"를 다루는 기술이다.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 문서를 쓰시오.',
    code: `레이아웃, 색상, 폰트(서체), 아이콘 등 시각 요소의 사용 규칙을
정리하여 여러 사람이 함께 개발해도 하나의 제품처럼 보이게 하는 문서`,
    answers: ['스타일 가이드', 'style guide', '스타일가이드'],
    explanation:
      '시각 요소의 사용 규칙을 정리한 문서는 스타일 가이드다. 반복 사용되는 UI 구성 요소를 모아 둔 것은 패턴 라이브러리다.',
  },
]

export default defineComponent({
  name: 'VariantUiRequirementsPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — UI 요구사항 확인과 UI 지침</h1>
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

        <footer>기출 변형문제 — UI 요구사항 확인과 UI 지침 · 2026-09</footer>
      </div>
    )
  },
})
