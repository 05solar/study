import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './integration-impl.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '다음 설명에 해당하는 통합 솔루션을 영문 약어로 쓰시오. — 기업 내에서 운영되는 ERP, CRM, 레거시 시스템 등 서로 다른 플랫폼의 애플리케이션들을 어댑터·브로커 같은 미들웨어를 통해 유기적으로 연동하여, 데이터의 통합과 동기화 및 프로세스의 효율적 운영을 가능하게 한다.',
    answers: ['EAI', 'Enterprise Application Integration', '이에이아이', '기업 애플리케이션 통합'],
    answerLabel: 'EAI (Enterprise Application Integration)',
    explanation:
      '"기업 내부 애플리케이션 통합 + 미들웨어(어댑터·브로커)"가 EAI의 정의 키워드다. 서비스 중심으로 느슨하게 묶는 ESB와 구분해서 기억하자.',
  },
  {
    num: 2,
    question:
      '어느 회사가 사내 4개 시스템을 다음 구조도와 같이 미들웨어 없이 1:1로 직접 연결하여 통합하였다. 이에 해당하는 EAI 구축 유형을 쓰시오.',
    code: `회계 ───── 인사
 │ ╲     ╱ │
 │   ╳     │
 │ ╱     ╲ │
영업 ───── 물류
(4개 시스템이 서로 총 6개의 회선으로 직접 연결됨)`,
    answers: ['Point-to-Point', '포인트 투 포인트', 'point to point', '포인트투포인트', 'P2P', '포인트 to 포인트'],
    answerLabel: 'Point-to-Point (포인트 투 포인트)',
    explanation:
      '미들웨어 없이 애플리케이션끼리 1:1 직접 연결하는 가장 기본적인 방식이다. 시스템이 N개면 연결이 N(N−1)/2개로 늘어나 변경과 유지보수가 어렵다.',
  },
  {
    num: 3,
    question:
      '다음 구조도와 같이 단일 접점인 중앙 시스템을 통해 모든 연계 데이터를 중계하는 EAI 구축 유형을 쓰시오.',
    code: `        인사
         │
회계 ── [허브] ── 물류
         │
        영업
(모든 시스템이 중앙의 허브에만 연결된다)`,
    answers: ['Hub & Spoke', '허브 앤 스포크', 'hub and spoke', '허브앤스포크', '허브 앤드 스포크', 'Hub and Spoke', '허브 & 스포크'],
    answerLabel: 'Hub & Spoke (허브 앤 스포크)',
    explanation:
      '중앙 집중형 방식으로 연결 수가 줄어 관리와 확장이 쉽지만, 허브에 부하가 집중되고 허브 장애 시 전체 연계가 마비되는 단점이 있다.',
  },
  {
    num: 4,
    question:
      '다음 구조도와 같이 애플리케이션 사이에 미들웨어를 두어 연계하는 방식으로, 확장성이 뛰어나고 대용량 데이터 처리에 유리한 EAI 구축 유형을 쓰시오.',
    code: `회계   인사   영업   물류
 │      │      │      │
═══════════════════════════
      (미들웨어 버스)`,
    answers: ['Message Bus', '메시지 버스', '메세지 버스', '메시지버스', 'Bus', 'ESB/Message Bus'],
    answerLabel: 'Message Bus (메시지 버스)',
    explanation:
      '애플리케이션 사이에 버스(미들웨어)를 두고 연계하는 방식이다. "확장성 + 대용량 처리"가 결정 키워드이며, 버스 도입 비용과 버스 자체의 병목 가능성이 단점이다.',
  },
  {
    num: 5,
    question:
      '다음 구조도와 같이 그룹 내에서는 Hub & Spoke 방식을, 그룹 간에는 Message Bus 방식을 사용하여 필요에 따라 유연하게 통합하는 EAI 구축 유형을 쓰시오.',
    code: `[본사 그룹]        [공장 그룹]
 앱  앱             앱  앱
  ╲  ╱               ╲  ╱
 (허브1)            (허브2)
    │                  │
════════════════════════════
        (Message Bus)`,
    answers: ['Hybrid', '하이브리드', '하이브리드 방식'],
    answerLabel: 'Hybrid (하이브리드)',
    explanation:
      '"그룹 내 Hub & Spoke + 그룹 간 Message Bus"의 혼합형이 Hybrid다. 환경에 맞는 유연한 통합과 데이터 병목 최소화가 장점이다.',
  },
  {
    num: 6,
    question:
      '다음 설명에 해당하는 통합 기술을 영문 약어로 쓰시오. — 애플리케이션 사이에 버스(Bus) 형태의 미들웨어를 두고, 기능을 표준화된 서비스 단위로 노출·중개하여 시스템들을 느슨하게 결합(Loosely Coupled)시키는 기술로, SOA를 실현하는 핵심 기반 인프라로 사용된다.',
    answers: ['ESB', 'Enterprise Service Bus', '엔터프라이즈 서비스 버스', '이에스비'],
    answerLabel: 'ESB (Enterprise Service Bus)',
    explanation:
      '"서비스 중심 · 버스 기반 · 느슨한 결합"이 ESB의 3대 키워드다. 애플리케이션(데이터) 중심 통합인 EAI와 구분한다.',
  },
  {
    num: 7,
    question:
      '웹 서비스의 구성 3요소 중, XML 기반의 메시지를 HTTP·HTTPS·SMTP 등의 프로토콜에 실어 네트워크 상에서 교환하는 통신 프로토콜을 영문 약어로 쓰시오.',
    answers: ['SOAP', 'Simple Object Access Protocol', '소프', '솝', '심플 오브젝트 액세스 프로토콜'],
    answerLabel: 'SOAP (Simple Object Access Protocol)',
    explanation:
      '웹 서비스 3요소 중 SOAP은 "말하는 규칙(통신 프로토콜)"이다. XML 기반 메시지를 표준 프로토콜에 실어 교환한다.',
  },
  {
    num: 8,
    question:
      '웹 서비스가 제공하는 메서드, 파라미터, 서비스 위치, 사용 프로토콜 등 인터페이스 정보를 XML 형식으로 기술한 "웹 서비스 명세서" 역할의 언어를 영문 약어로 쓰시오.',
    answers: ['WSDL', 'Web Services Description Language', 'Web Service Description Language', '웹 서비스 기술 언어'],
    answerLabel: 'WSDL (Web Services Description Language)',
    explanation:
      'WSDL은 웹 서비스의 "설명서(기술 언어)"다. 제공자가 WSDL을 UDDI에 게시(Publish)하면 요청자가 이를 탐색(Find)한 뒤 SOAP으로 바인딩(Bind)한다.',
  },
  {
    num: 9,
    question:
      '웹 서비스의 구성 3요소 중, 서비스 제공자가 WSDL을 등록해 두고 서비스 요청자가 필요한 웹 서비스를 검색할 수 있도록 하는 "전화번호부" 역할의 등록·검색 저장소(레지스트리)를 영문 약어로 쓰시오.',
    answers: ['UDDI', 'Universal Description Discovery and Integration', 'Universal Description, Discovery and Integration', '유디디아이'],
    answerLabel: 'UDDI (Universal Description, Discovery and Integration)',
    explanation:
      'UDDI는 웹 서비스를 등록(게시)하고 검색(탐색)하는 레지스트리다. "등록 + 검색 + 저장소"가 결정 키워드다.',
  },
  {
    num: 10,
    question: '웹 서비스 구성 요소인 WSDL의 풀네임(영문 정식 명칭)을 쓰시오.',
    answers: ['Web Services Description Language', 'Web Service Description Language', '웹 서비스 기술 언어'],
    answerLabel: 'Web Services Description Language',
    explanation:
      '3요소의 풀네임까지 함께 암기한다 — SOAP(Simple Object Access Protocol), WSDL(Web Services Description Language), UDDI(Universal Description, Discovery and Integration).',
  },
  {
    num: 11,
    question:
      '다음은 SOAP 메시지의 구조이다. 괄호 안에 공통으로 들어갈, 메시지 전체를 감싸는 최상위 필수 요소의 이름을 쓰시오.',
    code: `<soap:(   ①   ) xmlns:soap="...">
  <soap:Header>
    <auth:token>인증 정보 (선택)</auth:token>
  </soap:Header>
  <soap:Body>
    <getBook><isbn>979-11-0000</isbn></getBook>
  </soap:Body>
</soap:(   ①   )>`,
    answers: ['Envelope', '엔벨로프', '인벨로프', 'SOAP Envelope', '엔빌로프'],
    answerLabel: 'Envelope (엔벨로프)',
    explanation:
      'SOAP 메시지는 최상위 필수 요소인 Envelope 안에 Header(선택)와 Body(필수)가 들어가는 XML 문서다.',
  },
  {
    num: 12,
    question:
      'SOAP 메시지의 구성 요소 중, 인증·트랜잭션·라우팅 등 부가 정보를 담는 "선택(Optional)" 요소의 이름을 쓰시오.',
    answers: ['Header', '헤더', 'SOAP Header', '해더'],
    answerLabel: 'Header (헤더)',
    explanation:
      'Envelope는 필수, Header는 선택, Body는 필수 요소다. 실제 호출 데이터는 Body에, 오류 발생 시 Fault 요소도 Body에 포함된다.',
  },
  {
    num: 13,
    question:
      '다음 설명에 해당하는 아키텍처 스타일을 영문 약어로 쓰시오. — 웹의 자원(Resource)을 URI로 고유하게 식별하고, 그 자원에 대한 행위를 GET·POST·PUT·DELETE 등의 HTTP 메서드로 표현하며, 결과를 JSON·XML 같은 표현(Representation)으로 주고받는다.',
    answers: ['REST', 'Representational State Transfer', '레스트', 'RESTful'],
    answerLabel: 'REST (Representational State Transfer)',
    explanation:
      'REST의 3요소는 자원(URI) · 행위(HTTP 메서드) · 표현(Representation)이다. 이 원칙을 따르는 API를 RESTful API라고 부른다.',
  },
  {
    num: 14,
    question:
      '다음은 REST의 특징에 대한 설명이다. 괄호 안에 들어갈 특성을 쓰시오.',
    code: `REST에서 서버는 클라이언트의 상태(세션 등)를 저장하지 않으며,
각 요청은 처리에 필요한 모든 정보를 스스로 포함해야 한다.
이러한 특성을 ( ① )(이)라고 한다.`,
    answers: ['무상태', 'Stateless', '스테이트리스', '무상태성', '무상태(Stateless)'],
    answerLabel: '무상태 (Stateless)',
    explanation:
      'REST의 주요 특징 — 클라이언트-서버 분리, 무상태(Stateless), 캐시 가능, 계층화 구조, 유니폼 인터페이스. "서버가 상태를 저장하지 않음"이 무상태의 정의다.',
  },
  {
    num: 15,
    question:
      '다음 예시와 같이 속성-값(Attribute-Value) 쌍으로 이루어진 경량의 개방형 데이터 교환 형식으로, AJAX·REST API에서 XML을 대체하여 널리 사용되는 포맷의 이름을 쓰시오.',
    code: `{
  "title": "정보처리기사 실기",
  "price": 28000,
  "tags": ["연계", "EAI", "REST"]
}`,
    answers: ['JSON', 'JavaScript Object Notation', '제이슨', '자바스크립트 객체 표기법'],
    answerLabel: 'JSON (JavaScript Object Notation)',
    explanation:
      '"속성-값 쌍 + 경량 데이터 교환 형식"이 JSON의 정의 키워드다. 중괄호 객체와 대괄호 배열로 구조를 표현해 태그 기반 XML보다 전송량이 적다.',
  },
  {
    num: 16,
    question:
      '다음 예시와 같이 여닫는 태그로 문서 구조를 표현하며, DTD나 스키마로 엄격한 검증이 가능하고 SOAP 메시지의 기반이 되는 확장 가능한 마크업 언어를 영문 약어로 쓰시오.',
    code: `<book>
  <title>정보처리기사 실기</title>
  <price>28000</price>
  <tags>
    <tag>연계</tag>
    <tag>EAI</tag>
  </tags>
</book>`,
    answers: ['XML', 'eXtensible Markup Language', 'Extensible Markup Language', '엑스엠엘', '확장성 마크업 언어'],
    answerLabel: 'XML (eXtensible Markup Language)',
    explanation:
      'XML은 태그 쌍으로 구조를 표현하는 확장 가능한 마크업 언어다. SOAP 메시지·설정 파일·문서 교환에 쓰이며, JSON에 비해 태그 반복으로 무겁다.',
  },
  {
    num: 17,
    question:
      '웹 페이지 전체를 다시 로드하지 않고, 자바스크립트를 이용해 서버와 비동기적으로 데이터를 교환하여 화면의 일부만 갱신하는 웹 개발 기술을 쓰시오.',
    answers: ['AJAX', 'Asynchronous JavaScript and XML', '에이잭스', '아약스', '에이젝스', 'Ajax'],
    answerLabel: 'AJAX (Asynchronous JavaScript And XML)',
    explanation:
      '"비동기 + 부분 갱신"이 AJAX의 결정 키워드다. 이름에는 XML이 들어 있지만 오늘날에는 주로 JSON 형식으로 데이터를 주고받는다.',
  },
  {
    num: 18,
    question:
      '프로세스 간 통신(IPC) 기법 중, 여러 프로세스가 동일한 메모리 영역을 함께 사용하여 데이터를 주고받는 방식으로, IPC 기법 가운데 속도가 가장 빠르지만 동기화 문제를 별도로 해결해야 하는 기법을 쓰시오.',
    answers: ['공유 메모리', 'Shared Memory', '공유메모리', '쉐어드 메모리', '셰어드 메모리'],
    answerLabel: '공유 메모리 (Shared Memory)',
    explanation:
      'IPC 5대 기법 — 공유 메모리 · 소켓 · 세마포어 · 파이프 · 메시지 큐. "동일 메모리 영역 공유 + 가장 빠름"은 공유 메모리다.',
  },
  {
    num: 19,
    question:
      '프로세스 간 통신(IPC) 관련 기법 중, 공유 자원에 대한 접근을 카운터(정수 값)로 제어하여 여러 프로세스 간의 동기화를 맞추는 기법을 쓰시오.',
    answers: ['세마포어', 'Semaphore', '세마포', '쎄마포어'],
    answerLabel: '세마포어 (Semaphore)',
    explanation:
      '"카운터로 공유 자원 접근 제어 + 동기화"가 세마포어의 정의 키워드다. 한 프로세스의 출력이 다른 프로세스의 입력이 되는 단방향 통로인 파이프와 구분하자.',
  },
  {
    num: 20,
    question:
      '프로세스 간 통신(IPC) 기법 중, IP 주소와 포트 번호를 이용해 네트워크를 통해 원격지 프로세스와 통신할 수 있는 종단점(End Point)을 무엇이라 하는지 쓰시오.',
    answers: ['소켓', 'Socket', '네트워크 소켓', 'socket'],
    answerLabel: '소켓 (Socket)',
    explanation:
      '"IP + 포트 + 네트워크 통신의 종단점"은 소켓이다. 원격지 시스템 간 연계의 기본 수단이며, 메시지를 큐에 넣어 비동기로 주고받는 메시지 큐와 구분한다.',
  },
]

export default defineComponent({
  name: 'VariantIntegrationImplPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 내외부 연계 모듈 구현</h1>
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

        <footer>기출 변형문제 — 내외부 연계 모듈 구현 · 2026-09</footer>
      </div>
    )
  },
})
