import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './current-system.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '요구사항 개발 프로세스(CMM 기준) 4단계에서 괄호에 들어갈 단계를 쓰시오.',
    code: `도출(Elicitation) → 분석(Analysis) → (        ) → 확인(Validation)`,
    answers: ['명세', 'Specification', '명세(Specification)', '요구사항 명세', '명세화'],
    answerLabel: '명세(Specification)',
    explanation:
      '요구사항 개발은 도출 → 분석 → 명세 → 확인 순서로 진행된다. 명세 단계에서는 분석 결과를 체계적으로 문서화하며, 대표 산출물이 소프트웨어 요구사항 명세서(SRS)다.',
  },
  {
    num: 2,
    question:
      '요구사항 개발 4단계 중, 작성된 요구사항 명세서가 이해관계자의 실제 요구를 정확하고 완전하게 반영했는지 검토·검증하는 단계를 쓰시오.',
    answers: ['확인', 'Validation', '확인(Validation)', '요구사항 확인', '검증(Validation)'],
    answerLabel: '확인(Validation)',
    explanation:
      '확인(Validation) 단계에서는 검토(동료 검토·워크스루·인스펙션), 프로토타이핑, 모델 검증, 인수 테스트 등으로 명세서를 검증한다.',
  },
  {
    num: 3,
    question: '다음 요구사항 중 비기능 요구사항에 해당하는 것을 모두 골라 기호로 쓰시오.',
    code: `ㄱ. 주문 완료 시 고객에게 알림 메시지를 발송할 수 있어야 한다.
ㄴ. 시스템은 동시 접속자 5,000명까지 지연 없이 처리해야 한다.
ㄷ. 판매자는 상품 재고 수량을 수정할 수 있어야 한다.
ㄹ. 시스템 가동률은 연간 99.9% 이상이어야 한다.`,
    answers: ['ㄴ, ㄹ', 'ㄴㄹ', 'ㄴ과 ㄹ', 'ㄴ ㄹ'],
    answerLabel: 'ㄴ, ㄹ',
    explanation:
      'ㄴ은 성능, ㄹ은 가용성에 대한 요구이므로 비기능 요구사항이다. ㄱ·ㄷ은 시스템이 제공해야 할 기능 자체를 말하므로 기능 요구사항이다.',
  },
  {
    num: 4,
    question:
      '"조회 화면의 응답 시간은 3초 이내여야 한다"라는 요구사항은 기능 요구사항과 비기능 요구사항 중 어디에 해당하는지 쓰시오.',
    answers: ['비기능 요구사항', '비기능', '비기능적 요구사항', 'Non-functional Requirement', 'non functional'],
    answerLabel: '비기능 요구사항',
    explanation:
      '숫자가 들어 있어 기능처럼 보이지만 "무슨 기능"이 아니라 "얼마나 잘(성능)"을 말하고 있으므로 비기능 요구사항이다.',
  },
  {
    num: 5,
    question: '자료 흐름도(DFD)의 구성 요소 중 다음 설명에 해당하는 요소를 쓰시오.',
    code: `입력된 자료를 원하는 형태로 변환하여 출력하는 처리 과정으로,
원(○)으로 표기하며 버블(Bubble)이라고도 부른다.`,
    answers: ['프로세스', 'Process', '처리', '프로세스(Process)', '처리 과정'],
    answerLabel: '프로세스(Process)',
    explanation:
      'DFD 4요소는 프로세스(원), 자료 흐름(화살표), 자료 저장소(평행선), 단말(사각형)이다. 원으로 그리는 처리 과정이 프로세스다.',
  },
  {
    num: 6,
    question: '자료 흐름도(DFD)의 구성 요소 중 다음 설명에 해당하는 요소를 쓰시오.',
    code: `시스템과 자료를 주고받는 외부 개체로, 자료의 출발지 또는
도착지를 나타내며 사각형(□)으로 표기한다.`,
    answers: ['단말', 'Terminator', '단말(Terminator)', '터미네이터', '외부 개체'],
    answerLabel: '단말(Terminator)',
    explanation:
      '단말(Terminator)은 시스템 외부에서 자료가 출발하거나 도착하는 개체(예: 고객, 관리자)로 사각형으로 표기한다. 자료가 머무는 자료 저장소(평행선)와 혼동하지 말자.',
  },
  {
    num: 7,
    question: '자료 사전(Data Dictionary)의 기호 정의에서 괄호 ①, ②에 들어갈 용어를 순서대로 쓰시오.',
    code: `=    : 자료의 정의
+    : 자료의 연결
( )  : 자료의 ( ① )
{ }  : 자료의 ( ② )
* *  : 자료의 설명(주석)`,
    answers: ['① 생략, ② 반복', '생략, 반복', '생략 반복', '①생략②반복', '생략반복'],
    answerLabel: '① 생략, ② 반복',
    explanation:
      '자료 사전 기호는 = 정의, + 연결, ( ) 생략(optional), [ | ] 선택(or), 반복(iteration)은 중괄호, * * 설명(주석)이다. 여섯 개 전부 단답형 출제 범위다.',
  },
  {
    num: 8,
    question: '다음 자료 사전 정의에서 대괄호와 세로 막대 기호가 의미하는 것을 쓰시오.',
    code: `결제수단 = [ 카드 | 계좌이체 | 포인트 ]`,
    answers: ['선택', '자료의 선택', '택일', 'or', '선택(or)'],
    answerLabel: '선택',
    explanation:
      '[ | ]는 나열된 여러 항목 중 하나를 고르는 자료의 선택(or)을 의미한다. 위 정의는 "결제수단은 카드, 계좌이체, 포인트 중 하나"라고 읽는다.',
  },
  {
    num: 9,
    question: '다음 설명에 해당하는 요구사항 검토 기법을 쓰시오.',
    code: `검토 회의 전에 명세서 등 검토 자료를 참석자에게 미리 배포하여
사전 검토하게 한 뒤, 짧은 회의를 통해 결함을 발견하는
비형식적 검토 방법이다.`,
    answers: ['워크스루', 'Walk Through', 'walkthrough', '워크쓰루', '워크스루(Walk Through)'],
    answerLabel: '워크스루(Walk Through)',
    explanation:
      '"자료를 미리 배포하여 사전 검토 + 짧은 회의"가 워크스루의 핵심 키워드다. 훈련된 전문가가 공식 절차로 검토하면 인스펙션이다.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 요구사항 검토 기법을 쓰시오.',
    code: `명세서 작성자가 요구사항 명세서 내용을 직접 설명하고,
동료 2~3명이 이를 들으면서 결함을 발견하는
비격식적 검토 방법이다.`,
    answers: ['동료 검토', 'Peer Review', '동료검토', '피어 리뷰', '동료 검토(Peer Review)'],
    answerLabel: '동료 검토(Peer Review)',
    explanation:
      '"작성자가 직접 설명 + 동료가 청취"가 동료 검토의 핵심이다. 검토 격식은 동료 검토 → 워크스루 → 인스펙션 순으로 높아진다.',
  },
  {
    num: 11,
    question: '다음 설명에 해당하는 요구사항 검토 기법을 쓰시오.',
    code: `작성자가 아닌 훈련된 전문가 팀이 중재자(Moderator)의 주관 아래
정해진 절차와 체크리스트에 따라 산출물을 검토하는,
가장 격식 있는 공식적 검토 방법이다.`,
    answers: ['인스펙션', 'Inspection', '인스펙션(Inspection)', '인스팩션'],
    answerLabel: '인스펙션(Inspection)',
    explanation:
      '"작성자 이외의 전문가 + 중재자 + 공식 절차·체크리스트"가 인스펙션의 핵심 키워드다. 세 가지 검토 형태 중 격식 수준이 가장 높다.',
  },
  {
    num: 12,
    question:
      '요구사항 명세 기법 중 자연어와 다이어그램을 중심으로 작성하여 누구나 이해하기 쉽지만, 표현의 모호성으로 해석이 갈릴 수 있는 기법을 쓰시오.',
    answers: ['비정형 명세 기법', '비정형 명세', '비정형', 'informal', '비정형 기법'],
    answerLabel: '비정형 명세 기법',
    explanation:
      '비정형 명세 기법은 자연어·다이어그램 기반(FSM, E-R 모델링, 유스케이스 등)으로 이해가 쉽다. 반대로 Z 스키마·VDM·Petri-net 등 수학 기반은 정형 명세 기법이다.',
  },
  {
    num: 13,
    question:
      'CASE 도구 중 상세 설계·구현·테스트 등 소프트웨어 생명 주기의 뒷부분을 지원하며, 코드 자동 생성과 테스트 지원 기능을 제공하는 도구를 쓰시오.',
    answers: ['하위 CASE', 'Lower CASE', '하위케이스', '하위 CASE(Lower CASE)', 'lower'],
    answerLabel: '하위 CASE(Lower CASE)',
    explanation:
      '하위 CASE는 개발 뒷 단계(상세 설계·구현·테스트)를 지원한다. 계획·요구 분석·기본 설계 등 앞 단계를 지원하면 상위 CASE, 전 단계를 지원하면 통합 CASE다.',
  },
  {
    num: 14,
    question:
      '플랫폼 성능 특성 분석 항목 중, 사용자가 요청을 보낸 시점부터 응답(결과)이 도착할 때까지 걸린 시간을 뜻하는 항목을 쓰시오.',
    answers: ['응답 시간', 'Response Time', '응답시간(Response Time)', '리스폰스 타임', '응답속도'],
    answerLabel: '응답 시간(Response Time)',
    explanation:
      '플랫폼 성능 특성 분석 항목 4가지는 가용성, 응답 시간, 정확성, 사용률("가·응·정·사")이다.',
  },
  {
    num: 15,
    question: '플랫폼 성능 특성 분석 항목에 대한 설명에서 괄호 ①, ②에 들어갈 항목을 순서대로 쓰시오.',
    code: `· ( ① )  : 작업 처리 동안 CPU·메모리·네트워크 등 자원을 사용하는 정도
· ( ② )  : 서비스가 정상적으로 사용 가능한 시간의 비율 (예: 가동률 99.9%)`,
    answers: ['① 사용률, ② 가용성', '사용률, 가용성', '사용률 가용성', '①사용률②가용성', '사용률가용성'],
    answerLabel: '① 사용률(Utilization), ② 가용성(Availability)',
    explanation:
      '자원 사용 정도는 사용률(Utilization), 정상 사용 가능 시간의 비율은 가용성(Availability)이다. 나머지 두 항목은 응답 시간과 정확성이다.',
  },
  {
    num: 16,
    question: '다음 설명에 해당하는 요구사항 도출 기법을 쓰시오.',
    code: `여러 명이 모여 자유롭게 아이디어를 쏟아내는 회의 기법으로,
타인의 아이디어에 대한 비판을 금지하고
아이디어의 질보다 양을 우선한다.`,
    answers: ['브레인스토밍', 'Brainstorming', '브레인 스토밍', '브레인스토밍(Brainstorming)'],
    answerLabel: '브레인스토밍(Brainstorming)',
    explanation:
      '"비판 금지 + 질보다 양"이 브레인스토밍의 핵심 키워드다. 전문가에게 익명 설문을 반복하는 델파이 기법과 구분하자.',
  },
  {
    num: 17,
    question: '다음 설명에 해당하는 요구사항 도출 기법을 쓰시오.',
    code: `전문가 집단에게 익명 설문을 보내 의견을 수집하고, 결과를 요약해
다시 배포하여 재응답을 받는 과정을 반복함으로써
의견을 수렴·정제해 가는 기법이다.`,
    answers: ['델파이 기법', '델파이', 'Delphi', 'Delphi Method', '델파이기법(Delphi)'],
    answerLabel: '델파이 기법(Delphi Method)',
    explanation:
      '"전문가 + 익명 + 반복 설문"이 델파이 기법의 핵심 키워드다. 대면 회의 없이 설문을 반복한다는 점이 워크숍·브레인스토밍과 다르다.',
  },
  {
    num: 18,
    question:
      '검증을 통과해 공식 합의된 요구사항 명세서처럼, "이 시점 이후의 변경은 공식적인 변경 통제 절차를 거쳐야 한다"는 기준점 역할을 하는 형상 관리 용어를 쓰시오.',
    answers: ['베이스라인', 'Baseline', '기준선', '베이스라인(기준선)', 'base line'],
    answerLabel: '베이스라인(Baseline, 기준선)',
    explanation:
      '베이스라인 확정 이후의 변경은 형상 관리의 변경 통제 절차(변경 요청 → 영향 분석 → 승인 → 반영 → 기록)를 따라야 한다.',
  },
  {
    num: 19,
    question:
      '럼바우(Rumbaugh)의 객체지향 분석 3가지 모델링 중, 상태 다이어그램(상태도)을 이용해 시간의 흐름에 따른 객체의 상태 변화와 동작 순서를 표현하는 모델링을 쓰시오.',
    answers: ['동적 모델링', 'Dynamic Modeling', '동적', '동적 모델링(Dynamic Modeling)', '다이나믹 모델링'],
    answerLabel: '동적 모델링(Dynamic Modeling)',
    explanation:
      '럼바우 분석은 객체 → 동적 → 기능 모델링 순으로 진행된다. 상태도를 쓰는 것이 동적 모델링, 객체 다이어그램(ERD 계열)은 객체 모델링, DFD는 기능 모델링이다.',
  },
  {
    num: 20,
    question:
      '럼바우(Rumbaugh)의 객체지향 분석 3가지 모델링 중, 자료 흐름도(DFD)를 이용해 프로세스 간 자료 흐름을 중심으로 처리 과정을 표현하는 모델링을 쓰시오.',
    answers: ['기능 모델링', 'Functional Modeling', '기능', '기능 모델링(Functional Modeling)', '펑셔널 모델링'],
    answerLabel: '기능 모델링(Functional Modeling)',
    explanation:
      '기능 모델링은 DFD로 어떤 데이터가 어떻게 처리되는지를 표현하며, 럼바우 분석 3단계(객체 → 동적 → 기능) 중 마지막에 수행된다.',
  },
]

export default defineComponent({
  name: 'VariantCurrentSystemPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 현행 시스템 분석과 요구사항 확인</h1>
          <p>실기 기출 유형을 변형한 20문제입니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>

        {QUESTIONS.map((q) => (
          <QuizInput {...q} key={q.num} />
        ))}

        <footer>기출 변형문제 — 현행 시스템 분석과 요구사항 확인 · 2026-09</footer>
      </div>
    )
  },
})
