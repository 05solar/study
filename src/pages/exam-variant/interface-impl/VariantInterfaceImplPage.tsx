import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './interface-impl.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.',
    code: `Java의 JUnit, C++의 CppUnit, .NET의 NUnit처럼 언어마다 구현체가 존재하며,
다양한 언어를 지원하는 단위(Unit) 테스트 프레임워크의 총칭이다.`,
    answers: ['xUnit', '엑스유닛'],
    explanation:
      '"다양한 언어 + 단위 테스트"가 결정적 키워드다. JUnit·CppUnit·NUnit 등 언어별 구현체의 공통 형태를 xUnit이라 부른다.',
  },
  {
    num: 2,
    question: '다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.',
    code: `서비스 호출, 컴포넌트 재사용 등 다양한 환경을 지원하는 테스트 프레임워크로,
각 시스템에 데몬(Daemon)을 두어 분산 환경에서의 테스트를 지원한다.`,
    answers: ['STAF', '스타프'],
    explanation:
      '"데몬"과 "분산 환경"이 나오면 답은 STAF다. 웹 기반 테스트 케이스가 키워드인 FitNesse와 혼동하지 말 것.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.',
    code: `웹 기반으로 테스트 케이스의 설계·실행·결과 확인 등을 지원하는
테스트 프레임워크이다.`,
    answers: ['FitNesse', '핏네스'],
    explanation:
      '"웹 기반 테스트 케이스 설계·실행·결과 확인"이 FitNesse의 정의 문장이다. 브라우저 자동화 도구인 Selenium과 구분하자.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.',
    code: `NHN에서 개발한 테스트 자동화 프레임워크로,
STAF와 FitNesse를 통합한 형태이다.`,
    answers: ['NTAF', '엔타프'],
    explanation: '"NHN"과 "STAF + FitNesse 통합"이 NTAF를 가리키는 두 키워드다.',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.',
    code: `다양한 브라우저와 다양한 개발 언어를 지원하는
웹 애플리케이션 테스트 프레임워크이다.`,
    answers: ['Selenium', '셀레늄', '셀레니움'],
    explanation:
      '"다양한 브라우저 지원"이 Selenium의 시그니처 키워드다. 같은 웹 테스트라도 Ruby 기반이면 watir다.',
  },
  {
    num: 6,
    question: '다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.',
    code: `Ruby(루비) 언어를 기반으로 하는
웹 애플리케이션 테스트 프레임워크이다.`,
    answers: ['watir', '와티어', '와티르'],
    explanation: '"Ruby 기반"이 watir의 유일한 구분 키워드다. Web Application Testing In Ruby의 약자다.',
  },
  {
    num: 7,
    question: '다음 설명에 해당하는 기술을 쓰시오.',
    code: `자바스크립트를 이용해 클라이언트와 서버 간에 비동기 방식으로
XML(또는 JSON) 데이터를 주고받는 기술이다. 전체 페이지를 새로 고치지 않고
필요한 일부 데이터만 받아 화면을 갱신하며, 내부적으로
XMLHttpRequest 객체를 사용한다.`,
    answers: ['AJAX', '에이잭스', '에이젝스', 'Asynchronous JavaScript And XML'],
    answerLabel: 'AJAX (Asynchronous JavaScript And XML)',
    explanation:
      '"비동기 통신 + 전체 페이지를 새로 고치지 않고 일부만 갱신"이 AJAX의 시그니처 표현이다. XMLHttpRequest 객체가 힌트로 함께 자주 나온다.',
  },
  {
    num: 8,
    question: '다음 설명에 해당하는 데이터 포맷을 쓰시오.',
    code: `속성-값 쌍(Attribute-Value Pair)으로 이루어진 데이터 오브젝트를
전달하기 위한 개방형 표준 포맷으로, 언어 독립적이며
AJAX에서 XML을 대체하는 주요 데이터 형식으로 널리 쓰인다.`,
    answers: ['JSON', '제이슨', 'JavaScript Object Notation'],
    answerLabel: 'JSON (JavaScript Object Notation)',
    explanation:
      '"속성-값 쌍"과 "개방형 표준 포맷"이 JSON 정의의 핵심 표현으로, 실기에서 여러 차례 그대로 출제된 지문이다.',
  },
  {
    num: 9,
    question:
      'JSON 표기법에서 객체(Object)를 표현할 때 "키": 값 쌍들을 쉼표로 구분해 감싸는 괄호가 무엇인지 쓰시오.',
    code: `예)  ▢ "name": "홍길동", "age": 20 ▢
     → ▢ 자리에 들어가는 괄호로 객체 전체를 감싼다.`,
    answers: ['중괄호', '{}', '{ }', '중괄호{}'],
    answerLabel: '중괄호 { }',
    explanation: 'JSON에서 객체는 중괄호 { }로, 배열은 대괄호 [ ]로 감싼다. 두 괄호의 용도를 구분해 두자.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 네트워크 보안 프로토콜을 쓰시오.',
    code: `네트워크 계층(IP 계층, 3계층)에서 IP 패킷 단위로 인증과 암호화를
수행하는 보안 프로토콜이다. 인증 헤더(AH)와 암호화(ESP)를 이용하며,
전송 모드와 터널 모드를 지원한다.`,
    answers: ['IPSec', 'IP Sec', '아이피섹', 'IP Security'],
    answerLabel: 'IPSec (IP Security)',
    explanation:
      '"IP 계층(3계층) + 패킷 단위 + AH/ESP"가 IPSec의 결정적 키워드다. 전송 계층 위에서 동작하는 SSL/TLS와 계층으로 구분한다.',
  },
  {
    num: 11,
    question: '다음 설명에 해당하는 보안 프로토콜을 쓰시오.',
    code: `전송 계층과 응용 계층 사이에서 클라이언트와 서버 간
인증서 기반의 인증과 암호화를 수행하는 보안 프로토콜이다.
HTTP에 이 프로토콜을 적용한 것이 HTTPS다.`,
    answers: ['SSL/TLS', 'SSL', 'TLS', 'SSL·TLS', '에스에스엘'],
    answerLabel: 'SSL/TLS',
    explanation:
      '"전송 계층과 응용 계층 사이 + 인증서 기반 + HTTPS"가 SSL/TLS의 키워드다. 연결(세션) 전체를 암호화한다는 점에서 S-HTTP와 구분된다.',
  },
  {
    num: 12,
    question: '다음 설명에 해당하는 보안 프로토콜을 쓰시오.',
    code: `클라이언트와 서버 간에 주고받는 HTTP 메시지(전송되는 웹 문서)
단위로 암호화를 수행하는 보안 프로토콜이다.`,
    answers: ['S-HTTP', 'SHTTP', 'Secure HTTP', '에스HTTP'],
    answerLabel: 'S-HTTP (Secure HTTP)',
    explanation:
      '연결 전체를 암호화하는 SSL/TLS와 달리 "메시지(웹 문서) 단위 암호화"가 S-HTTP의 구분 포인트다.',
  },
  {
    num: 13,
    question:
      '인터페이스 보안 기능은 애플리케이션·네트워크·데이터베이스의 세 구간에 적용한다. 이 중 IPSec, SSL/TLS, S-HTTP 같은 보안 프로토콜을 적용하는 구간을 쓰시오.',
    answers: ['네트워크', '네트워크 구간', '전송 구간', '네트워크(전송) 구간'],
    answerLabel: '네트워크 구간',
    explanation:
      '보안 기능 적용 3구간은 애플리케이션(시큐어 코딩), 네트워크(IPSec·SSL/TLS·S-HTTP), 데이터베이스(암호화·접근 제어)다.',
  },
  {
    num: 14,
    question:
      '네트워크를 지나는 인터페이스 데이터를 몰래 도청(엿보기)하여 정보를 탈취하는 수동적(Passive) 공격 기법을 쓰시오.',
    answers: ['스니핑', 'Sniffing', '스니핑 공격'],
    answerLabel: '스니핑 (Sniffing)',
    explanation:
      '"몰래 도청·엿보기 + 수동적 공격"이 스니핑이다. 자신을 다른 대상으로 속이는 능동적 공격인 스푸핑(Spoofing)과 구분하자.',
  },
  {
    num: 15,
    question:
      '전송 중인 인터페이스 데이터를 가로채 내용을 몰래 바꾸어 무결성을 훼손하는 공격 기법을 쓰시오.',
    answers: ['변조', '데이터 변조', '위변조', '위조변조', 'Modification'],
    answerLabel: '(데이터) 변조',
    explanation:
      '내용을 바꾸면 변조, 가짜 데이터를 만들어 끼워 넣으면 위조다. 둘 다 무결성을 훼손하는 능동적 공격이며, 도청만 하는 스니핑과 구분된다.',
  },
  {
    num: 16,
    question:
      '인터페이스가 정상 동작하는지 애플리케이션의 성능과 동작 상태를 실시간으로 감시(모니터링)하는 도구를 무엇이라 하는지 쓰시오. (대표 제품: 스카우터, 제니퍼)',
    answers: ['APM', '애플리케이션 성능 관리', '애플리케이션 성능 관리 도구', 'Application Performance Management'],
    answerLabel: 'APM (Application Performance Management/Monitoring)',
    explanation:
      '검증 도구(xUnit 등)는 구현이 올바른지 테스트하는 도구이고, 감시 도구(APM)는 운영 중 동작 상태를 지켜보는 도구다.',
  },
  {
    num: 17,
    question: '다음 설명에 해당하는 인터페이스 감시(APM) 도구의 이름을 쓰시오.',
    code: `국내에서 널리 쓰이는 오픈 소스 APM 도구로,
애플리케이션의 성능과 인터페이스 동작 상태를 모니터링한다.
(상용 제품인 제니퍼와 대비된다)`,
    answers: ['스카우터', 'Scouter'],
    answerLabel: '스카우터 (Scouter)',
    explanation: 'APM 도구 중 스카우터는 오픈 소스, 제니퍼(Jennifer)는 상용 제품이라는 대비로 출제된다.',
  },
  {
    num: 18,
    question: '인터페이스 오류 발생 시 처리·보고 방안에 대한 다음 설명에서 괄호 안에 들어갈 말을 쓰시오.',
    code: `· 사용자 화면 표시 : 오류를 사용자가 즉시 인지할 수 있는 직관적 방법
· 시스템 로그 기록  : 오류 시각·내용·위치를 파일로 남겨 원인을 분석
· 인터페이스 (   ) 기록 : 오류 내역을 전용 테이블에 저장하여
                          조회·통계·재전송 등 후속 처리에 활용`,
    answers: ['오류 테이블', '인터페이스 오류 테이블', '오류테이블', '에러 테이블'],
    answerLabel: '오류 테이블',
    explanation:
      '오류 처리·보고 3대 방안은 사용자 화면 표시, 시스템 로그 기록, 인터페이스 오류 테이블 기록이다. 오류 테이블은 조회·통계·재전송에 유리하다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 인터페이스 설계 산출물(문서)을 쓰시오.',
    code: `인터페이스의 목록과 개요를 정리한 문서로, 인터페이스 ID·인터페이스명,
송신·수신 시스템 정보, 연계 방식, 최대 처리 횟수,
전송 데이터의 크기와 주기 등을 기술한다.`,
    answers: ['인터페이스 정의서', '정의서'],
    answerLabel: '인터페이스 정의서',
    explanation:
      '"목록과 개요, 크기·주기"면 인터페이스 정의서다. 기능 단위로 사전·사후 조건, 파라미터, 반환값까지 상세화한 문서는 인터페이스 명세서다.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 인터페이스 구현 방식을 쓰시오.',
    code: `송신 시스템과 수신 시스템 사이에 인터페이스 전용 테이블을 두고,
송신 측이 테이블에 데이터를 기록하면 프로시저·트리거·배치 작업 등이
수신 측 테이블로 전달하여 수신 시스템이 읽어 반영하는 방식이다.`,
    answers: [
      '인터페이스 엔터티',
      '인터페이스 엔티티',
      '인터페이스 테이블',
      '인터페이스 엔터티 방식',
      '인터페이스 테이블 방식',
    ],
    answerLabel: '인터페이스 엔터티(테이블) 방식',
    explanation:
      '인터페이스 구현 방식은 크게 두 가지다. JSON·XML을 직접 송수신하면 데이터 통신 방식, 전용 테이블을 사이에 두면 인터페이스 엔터티(테이블) 방식이다.',
  },
]

export default defineComponent({
  name: 'VariantInterfaceImplPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 인터페이스 기능 구현</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 지문과 보기를 바꾼 변형 문제 20문항입니다.
            구현 검증 도구(xUnit·STAF·FitNesse·NTAF·Selenium·watir), AJAX·JSON,
            인터페이스 보안(IPSec·SSL/TLS·S-HTTP)과 공격 기법, APM 감시 도구, 오류 처리를 다룹니다.
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

        <footer>기출 변형문제 — 인터페이스 기능 구현 · 2026-09</footer>
      </div>
    )
  },
})
