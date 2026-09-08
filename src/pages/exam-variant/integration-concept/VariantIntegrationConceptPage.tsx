import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './integration-concept.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 보기 중 간접 연계 방식에 해당하는 기술을 모두 골라, 보기 순서대로 기호로 쓰시오.',
    code: `ㄱ. JDBC          ㄴ. 웹 서비스(Web Service)   ㄷ. DB Link
ㄹ. EAI           ㅁ. 화면 링크(Hyper Link)     ㅂ. ESB`,
    answers: ['ㄴ, ㄹ, ㅂ', 'ㄴㄹㅂ', 'ㄴ ㄹ ㅂ', '웹 서비스, EAI, ESB', 'EAI, ESB, 웹 서비스', 'Web Service, EAI, ESB'],
    answerLabel: 'ㄴ, ㄹ, ㅂ (웹 서비스 · EAI · ESB)',
    explanation:
      '간접 연계는 연계 솔루션·미들웨어를 경유하는 방식으로 EAI, ESB, 웹 서비스가 대표 기술이다. JDBC, DB Link, 화면 링크는 중간 매개체 없이 연결하는 직접 연계 기술이다.',
  },
  {
    num: 2,
    question: '다음 보기 중 직접 연계 방식에 해당하는 기술을 모두 골라, 보기 순서대로 기호로 쓰시오.',
    code: `ㄱ. ESB           ㄴ. DB Connection(DBCP)   ㄷ. Open API
ㄹ. 웹 서비스(Web Service)   ㅁ. JDBC`,
    answers: ['ㄴ, ㄷ, ㅁ', 'ㄴㄷㅁ', 'ㄴ ㄷ ㅁ', 'DB Connection, Open API, JDBC', 'DBCP, Open API, JDBC'],
    answerLabel: 'ㄴ, ㄷ, ㅁ (DB Connection · Open API · JDBC)',
    explanation:
      '직접 연계는 중간 매개체 없이 송·수신 시스템을 1:1로 연결하는 방식으로 DB Link, DB Connection, API/Open API, JDBC, 화면 링크 등이 해당한다. ESB와 웹 서비스는 간접 연계 기술이다.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 직접 연계 기술을 쓰시오.',
    code: `수신 시스템의 데이터베이스에서 송신 시스템의 데이터베이스로
연결되는 링크 객체를 생성하고, 이 객체를 통해 원격 DB의
테이블 등에 직접 접근하여 데이터를 연계한다.
DBMS 자체에서 제공하는 기능이다.`,
    answers: ['DB 링크', 'DB Link', 'DBLink', '디비 링크', '디비링크'],
    answerLabel: 'DB 링크 (DB Link)',
    explanation:
      '"DBMS가 제공하는 링크 객체를 생성하여 원격 DB 객체에 직접 접근"이 DB Link의 핵심 단서다. WAS의 커넥션 풀을 이용하면 DB Connection, 드라이버로 접속하면 JDBC로 구분한다.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 직접 연계 기술을 쓰시오.',
    code: `수신 시스템의 WAS(웹 애플리케이션 서버)에서 송신 시스템의
데이터베이스로 연결되는 커넥션 풀을 생성해 두고,
이 커넥션 풀을 이용하여 데이터를 연계하는 방식이다.`,
    answers: ['DB 커넥션', 'DB Connection', 'DBCP', '디비 커넥션', '디비커넥션', 'DB 커넥션 풀'],
    answerLabel: 'DB 커넥션 (DB Connection, DBCP)',
    explanation:
      '"WAS에서 커넥션 풀(DBCP)을 생성하여 연계"가 DB Connection의 핵심 단서다. DB에서 제공하는 링크 객체를 쓰는 DB Link와 혼동하지 않도록 주의한다.',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 직접 연계 기술을 쓰시오.',
    code: `송신 시스템의 데이터베이스 데이터를 제공하는
응용 프로그램 인터페이스(함수·프로그램 또는 URL)를 만들어 두고,
수신 측이 이를 호출하는 방식으로 데이터를 연계한다.
누구나 쓸 수 있게 공개하면 'Open ~'이라고 부른다.`,
    answers: ['API', 'Open API', '오픈 API', '에이피아이', 'API/Open API'],
    answerLabel: 'API (Open API)',
    explanation:
      '"데이터를 제공하는 응용 프로그램 인터페이스를 호출 방식으로 이용"하면 API, 외부에 공개된 것이 Open API다. API 방식은 직접 연계 기술로 분류된다.',
  },
  {
    num: 6,
    question: '다음 설명에 해당하는 직접 연계 기술을 쓰시오.',
    code: `수신 시스템의 응용 프로그램에서 전용 드라이버를 이용하여
송신 시스템의 데이터베이스에 직접 연결하고 데이터를 조회한다.
자바(Java) 프로그램이 DB에 접속할 때 사용하는 표준 인터페이스이다.`,
    answers: ['JDBC', '제이디비씨', 'Java Database Connectivity'],
    answerLabel: 'JDBC (Java Database Connectivity)',
    explanation:
      '"자바 프로그램에서 드라이버로 송신 시스템 DB에 직접 연결"이 JDBC의 핵심 단서다. DB Link(링크 객체), DB Connection(커넥션 풀)과 단서 키워드로 구분한다.',
  },
  {
    num: 7,
    question: '다음 설명에 해당하는 직접 연계 기술을 쓰시오.',
    code: `웹 애플리케이션 화면에서 상대 시스템의 웹 화면 주소를
직접 연결해 두어, 클릭 시 해당 화면으로 이동하게 하는
가장 단순한 형태의 연계 기술이다.`,
    answers: ['화면 링크', '하이퍼링크', 'Hyper Link', 'Hyperlink', '하이퍼 링크', '화면 링크(하이퍼링크)'],
    answerLabel: '화면 링크 (하이퍼링크, Hyper Link)',
    explanation:
      '웹 화면에서 하이퍼링크로 상대 시스템 화면을 직접 연결하는 방식으로, 직접 연계 기술 중 가장 단순한 형태다. 데이터가 아닌 화면(URL) 수준의 연계라는 점이 특징이다.',
  },
  {
    num: 8,
    question: '다음 설명에 해당하는 연계 기술을 쓰시오.',
    code: `서버가 통신을 위한 포트를 할당하고 클라이언트의 요청을
대기하다가, 요청이 오면 연결을 맺어 데이터를 송수신하는
네트워크 기술이다.`,
    answers: ['소켓', 'Socket', '소켓(Socket)', '네트워크 소켓'],
    answerLabel: '소켓 (Socket)',
    explanation:
      '"서버가 포트를 열어 대기하고 클라이언트 요청 시 연결을 맺는다"가 소켓의 핵심 단서다. 소켓은 구현 형태에 따라 직접·간접 연계 양쪽에서 모두 활용될 수 있다.',
  },
  {
    num: 9,
    question: '다음 설명에 해당하는 간접 연계 기술을 쓰시오.',
    code: `기업 내에서 서로 다른 플랫폼·언어로 만들어진 애플리케이션들을
중앙에서 통합·중계·변환해 주는 연계 솔루션으로,
Point-to-Point, Hub & Spoke, Message Bus, Hybrid의
구축 유형으로 나뉜다.`,
    answers: ['EAI', 'Enterprise Application Integration', '이에이아이', 'EAI(기업 애플리케이션 통합)'],
    answerLabel: 'EAI (Enterprise Application Integration)',
    explanation:
      '"기업 내 애플리케이션의 중앙 집중식 통합·중계"와 4가지 구축 유형(Point-to-Point, Hub & Spoke, Message Bus, Hybrid)이 EAI의 단서다. 버스 형태 미들웨어·느슨한 결합이 강조되면 ESB로 답한다.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 간접 연계 기술을 쓰시오.',
    code: `애플리케이션 간 연계·데이터 변환·웹 서비스 지원 기능을
표준 기반의 버스(Bus) 형태 미들웨어로 제공하며,
서비스 중심의 통합과 애플리케이션 간의
느슨한 결합(Loosely Coupled)을 지향한다.`,
    answers: ['ESB', 'Enterprise Service Bus', '이에스비', '엔터프라이즈 서비스 버스'],
    answerLabel: 'ESB (Enterprise Service Bus)',
    explanation:
      '"버스 형태 미들웨어 + 서비스 중심 + 느슨한 결합"의 조합이면 ESB다. EAI가 기업 내부 통합·중계에 초점을 둔다면, ESB는 표준·서비스 기반의 유연한 통합을 지향한다.',
  },
  {
    num: 11,
    question: '다음 설명에 해당하는 간접 연계 기술을 쓰시오.',
    code: `WSDL로 서비스의 명세를 기술하고 UDDI에 등록·검색하며,
SOAP 프로토콜(또는 REST 방식)을 이용해 네트워크를 통해
시스템 간에 서비스를 주고받는 기술이다.`,
    answers: ['웹 서비스', 'Web Service', '웹서비스', 'WebService'],
    answerLabel: '웹 서비스 (Web Service)',
    explanation:
      '웹 서비스의 3요소는 WSDL(서비스 기술), UDDI(등록·검색), SOAP(통신 프로토콜)이다. 이 세 용어가 함께 나오면 웹 서비스로 답하며, 간접 연계 기술로 분류된다.',
  },
  {
    num: 12,
    question: '다음 설명에 해당하는 통합 구현의 구성 요소를 쓰시오.',
    code: `송신 시스템과 수신 시스템의 중간에 위치하여 연계 데이터를
전달하는 시스템이다. 내부 네트워크와 외부 네트워크 구간을
분리해 보안을 강화하며, 대외 기관과의 안전한 연계나
연계 관리의 일원화가 필요할 때 설치한다.`,
    answers: ['중계 시스템', '중계시스템', '중계 서버', 'relay system'],
    answerLabel: '중계 시스템',
    explanation:
      '중계 시스템의 핵심 키워드는 "내·외부 구간 분리"와 "보안 강화"다. 필수 구성 요소는 아니지만 대외 기관 연계처럼 보안이 중요한 경우에 둔다.',
  },
  {
    num: 13,
    question: '다음 설명에 해당하는 통합 구현의 구성 요소를 쓰시오.',
    code: `운영 데이터베이스에서 연계할 데이터를 생성·추출하고,
코드 매핑과 데이터 변환을 거쳐 인터페이스 테이블 또는
파일 형태로 만든 뒤 상대 시스템으로 전송하는 시스템이다.`,
    answers: ['송신 시스템', '송신시스템', 'sender system', '송신측 시스템'],
    answerLabel: '송신 시스템',
    explanation:
      '데이터를 "생성·추출·변환하여 전송"하는 쪽이 송신 시스템이다. 반대로 전송받은 데이터를 자신의 형식으로 변환해 운영 DB에 반영하는 쪽은 수신 시스템이다.',
  },
  {
    num: 14,
    question: '다음 설명에 해당하는 연계 처리 유형을 쓰시오.',
    code: `요청을 보낸 뒤 응답을 기다리지 않고 곧바로 다음 작업을
진행하는 방식이다. 응답은 이후에 콜백이나 별도 조회로
처리하며, 요청과 응답 사이에 큐(Queue)를 두는 경우가 많다.
알림 발송, 통계 집계처럼 즉시 결과가 필요 없는 업무에 적합하다.`,
    answers: ['비동기', 'async', 'asynchronous', '비동기 방식', '비동기식', 'Async 방식'],
    answerLabel: '비동기 (Asynchronous)',
    explanation:
      '"대기 없이 다음 작업 진행"이면 비동기, "응답이 올 때까지 대기(블로킹)"하면 동기다. 동기는 계좌 이체·결제 승인처럼 결과를 즉시 알아야 하는 업무에 쓰인다.',
  },
  {
    num: 15,
    question: '다음 설명에 해당하는 연계 처리 유형을 쓰시오.',
    code: `데이터가 발생할 때마다 즉시 보내지 않고, 일 단위·주 단위 등
일정 주기마다 대량의 데이터를 모아 한꺼번에 일괄 처리하는
방식이다. 주로 야간 등 시스템 부하가 적은 시간대에 수행하며,
일 마감 정산이나 대외 기관 일일 보고 등에 사용된다.`,
    answers: ['배치', 'Batch', '배치 처리', '일괄 처리', '배치(Batch)', '일괄처리'],
    answerLabel: '배치 (Batch, 일괄 처리)',
    explanation:
      '"일정 주기 + 대량 데이터 + 일괄 처리"의 조합이면 배치다. 데이터 발생 즉시 처리하면 실시간, 수 초에서 수 분 단위의 짧은 주기로 모아 보내면 근실시간으로 구분한다.',
  },
  {
    num: 16,
    question:
      '연계 메커니즘에서 송신 체계의 처리 절차를 순서대로 기호로 나열하시오. (예: ㄱ→ㄴ→ㄷ→ㄹ→ㅁ)',
    code: `ㄱ. 로그 기록
ㄴ. 인터페이스 테이블/파일 생성
ㄷ. 연계 데이터 생성 및 추출
ㄹ. 전송
ㅁ. 코드 매핑 및 데이터 변환`,
    answers: ['ㄷ→ㅁ→ㄴ→ㄱ→ㄹ', 'ㄷㅁㄴㄱㄹ', 'ㄷ, ㅁ, ㄴ, ㄱ, ㄹ', 'ㄷ-ㅁ-ㄴ-ㄱ-ㄹ'],
    answerLabel: 'ㄷ → ㅁ → ㄴ → ㄱ → ㄹ',
    explanation:
      '송신 체계는 연계 데이터 생성·추출 → 코드 매핑·데이터 변환 → 인터페이스 테이블/파일 생성 → 로그 기록 → 전송 순으로 진행된다. 수신 체계는 수신 → 로그 기록 → 코드·형식 변환 → 운영 DB 반영 순이다.',
  },
  {
    num: 17,
    question: '다음은 코드 매핑 과정을 나타낸 것이다. 괄호 안에 공통으로 들어갈 용어를 쓰시오.',
    code: `송신 시스템 코드  D001(인사팀)  ──변환──▶  ( ○○ 코드 ) STD-10  ──변환──▶  수신 시스템 코드  HR

· 송신 측은 자신의 코드를 ( ○○ 코드 )로 변환하여 전송하고,
  수신 측은 ( ○○ 코드 )를 자신의 코드로 변환하여 반영한다.
· 이 코드를 두면 연계 상대가 늘어나도 각 시스템은
  이 코드와의 매핑만 관리하면 된다.`,
    answers: ['표준 코드', '표준코드', 'standard code', '표준'],
    answerLabel: '표준 코드',
    explanation:
      '코드 매핑은 송신 코드 → 표준 코드 → 수신 코드의 2단계 변환으로 이루어진다. 중간에 표준 코드를 두면 연계 시스템이 늘어나도 각자 표준과의 매핑만 관리하면 되어 유지보수가 쉬워진다.',
  },
  {
    num: 18,
    question: '다음 설명에 해당하는 산출물(문서)의 이름을 쓰시오.',
    code: `연계 데이터 식별·표준화의 최종 산출물로, 인터페이스마다
인터페이스 ID·명, 송신 시스템과 수신 시스템, 연계 데이터 항목
(이름·타입·길이), 연계 방식(직접/간접), 연계 주기(실시간/배치),
처리 유형(동기/비동기), 코드 매핑·변환 규칙 등을 정의한다.`,
    answers: ['인터페이스 정의서', '연계 정의서', '인터페이스정의서', '연계(인터페이스) 정의서', 'interface 정의서'],
    answerLabel: '인터페이스 정의서 (연계 정의서)',
    explanation:
      '인터페이스 정의서는 데이터 식별·표준화 단계의 산출물로, 어떤 데이터를 어떤 형식·방식으로 주고받는지를 인터페이스별로 정의한다. 분석 단계의 산출물인 연계 요구사항 정의서와 혼동하지 않도록 주의한다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 전송 구간 보안 기술을 쓰시오.',
    code: `인터넷 같은 공중망 위에 터널링과 암호화를 적용하여
마치 전용선을 이용하는 것처럼 안전하게 통신할 수 있게 하는
가상의 사설 통신망이다. 물리적인 전용선보다 비용 대비
효율이 높아 연계 데이터의 전송 구간 보호에 널리 쓰인다.`,
    answers: ['VPN', '가상 사설망', 'Virtual Private Network', '가상사설망', '브이피엔', 'VPN(가상 사설망)'],
    answerLabel: 'VPN (Virtual Private Network, 가상 사설망)',
    explanation:
      '"공중망을 전용선처럼 + 터널링·암호화 + 가상 사설망"이 VPN의 단서다. 물리적으로 독립된 회선을 쓰는 전용선은 보안성이 높은 대신 비용이 크다.',
  },
  {
    num: 20,
    question:
      '연계 과정에서 장애·오류가 발생했을 때의 처리 절차를 순서대로 기호로 나열하시오. (예: ㄱ→ㄴ→ㄷ→ㄹ)',
    code: `ㄱ. 원인 분석 및 해결 방안 수립
ㄴ. 오류 식별 (모니터링·알림으로 오류 발생 인지, 오류 코드 확인)
ㄷ. 수정 및 재작업 (조치 후 실패 데이터 재전송·재반영)
ㄹ. 로그 확인 (오류가 발생한 구간·단계의 로그 조회)`,
    answers: ['ㄴ→ㄹ→ㄱ→ㄷ', 'ㄴㄹㄱㄷ', 'ㄴ, ㄹ, ㄱ, ㄷ', 'ㄴ-ㄹ-ㄱ-ㄷ'],
    answerLabel: 'ㄴ → ㄹ → ㄱ → ㄷ',
    explanation:
      '장애 처리는 오류 식별 → 로그 확인 → 원인 분석 → 수정 및 재작업 순으로 진행된다. 송·수신 양쪽에 남긴 연계 로그가 원인 분석과 재처리의 근거가 된다.',
  },
]

export default defineComponent({
  name: 'VariantIntegrationConceptPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 연계 메커니즘 구성과 개념</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 보기·지문·숫자를 바꾼 변형 문제 20문항입니다.
            정답을 입력하고 제출하면 채점되며, 맞으면 해설이, 틀리면 정답과 해설이 함께 표시됩니다.
          </p>
        </header>

        {QUESTIONS.map((q) => (
          <QuizInput
            key={String(q.num)}
            num={q.num}
            question={q.question}
            code={q.code}
            answers={q.answers}
            answerLabel={q.answerLabel}
            explanation={q.explanation}
          />
        ))}

        <footer>기출 변형문제 — 연계 메커니즘 구성과 개념 · 2026-09</footer>
      </div>
    )
  },
})
