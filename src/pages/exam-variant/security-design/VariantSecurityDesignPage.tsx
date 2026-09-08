import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './security-design.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 암호 알고리즘의 이름을 쓰시오.',
    code: `· 1977년 MIT의 세 학자(Rivest, Shamir, Adleman)가 개발한
  공개키(비대칭키) 암호 알고리즘이다.
· 큰 수의 소인수분해가 어렵다는 점을 안전성의 근거로 하며,
  현재 가장 널리 사용되는 공개키 알고리즘이다.`,
    answers: ['RSA', 'RSA 알고리즘', '알에스에이'],
    answerLabel: 'RSA',
    explanation:
      '"소인수분해"가 결정적 키워드다. 타원 곡선이면 ECC, 이산대수면 ElGamal 또는 디피-헬만으로 구분한다.',
  },
  {
    num: 2,
    question:
      '1976년에 발표된 최초의 공개키 방식 키 교환 알고리즘으로, 공개된 통신 채널에서도 두 사용자가 안전하게 공통의 비밀키(대칭키)를 나눠 가질 수 있게 하는 알고리즘의 이름을 쓰시오.',
    answers: ['디피-헬만', '디피헬만', '디피 헬만', 'Diffie-Hellman', 'diffie hellman', 'DH'],
    answerLabel: '디피-헬만 (Diffie-Hellman)',
    explanation:
      '"최초"와 "키 교환"이 판별 키워드다. 디피-헬만은 이산대수 문제에 기반하며, 데이터 암호화 자체가 아니라 대칭키를 안전하게 나눠 갖는 키 교환이 목적이다.',
  },
  {
    num: 3,
    question:
      '1999년 한국인터넷진흥원(KISA)이 개발한 국산 128비트 블록 대칭키 암호 알고리즘의 이름을 쓰시오.',
    answers: ['SEED', '시드'],
    answerLabel: 'SEED',
    explanation:
      '"KISA(한국인터넷진흥원) 개발"이 나오면 SEED다. 학·연·관 공동 개발은 ARIA, 경량(IoT용) 국산 블록 암호는 LEA로 개발 주체·용도를 짝지어 암기한다.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 암호 알고리즘의 이름을 쓰시오.',
    code: `· 2004년 국내 학계·연구소·정부(학·연·관)가 공동 개발한
  국산 블록 대칭키 암호 알고리즘이다.
· 128비트 블록을 사용하며 키 길이 128/192/256비트를 지원한다.`,
    answers: ['ARIA', '아리아'],
    answerLabel: 'ARIA',
    explanation:
      '"학·연·관 공동 개발"이 결정적 키워드다. ARIA라는 이름 자체가 Academy(학계)·Research Institute(연구소)·Agency(정부 기관)의 머리글자에서 왔다.',
  },
  {
    num: 5,
    question:
      '미국 NIST가 안전성이 떨어진 DES를 대체하기 위해 2001년 표준으로 채택한 블록 암호 알고리즘으로, 128비트 블록에 키 길이 128 · 192 · 256비트를 지원하는 알고리즘의 이름을 쓰시오.',
    answers: ['AES', 'Advanced Encryption Standard'],
    answerLabel: 'AES (Advanced Encryption Standard)',
    explanation:
      '"DES 대체 미국 표준"이 키워드다. AES의 블록 크기는 128비트로 고정이고 키 길이만 128/192/256비트 세 가지라는 점, DES는 64비트 블록에 56비트 키라는 점을 비교해 두자.',
  },
  {
    num: 6,
    question:
      'IoT · 모바일 등 저전력 경량 환경에서 사용하기 위해 개발된 국산 경량 블록 대칭키 암호 알고리즘의 이름을 쓰시오.',
    answers: ['LEA', 'Lightweight Encryption Algorithm'],
    answerLabel: 'LEA (Lightweight Encryption Algorithm)',
    explanation:
      '"국산 + 경량(IoT · 저전력)"이 키워드다. 국산 암호는 SEED(KISA 개발) · ARIA(학·연·관 개발) · LEA(경량) · HAS-160(해시)을 세트로 암기한다.',
  },
  {
    num: 7,
    question:
      '타원 곡선 위의 이산대수 문제를 안전성의 근거로 하는 공개키 암호 알고리즘으로, RSA보다 짧은 키 길이로 같은 수준의 보안 강도를 제공하여 모바일 · IoT 환경에 적합한 알고리즘의 이름을 쓰시오.',
    answers: ['ECC', '타원 곡선 암호', '타원곡선암호', 'Elliptic Curve Cryptography', '타원 곡선 암호화'],
    answerLabel: 'ECC (타원 곡선 암호)',
    explanation:
      '"타원 곡선"과 "짧은 키로 같은 보안 강도"가 판별 키워드다. 소인수분해 기반이면 RSA, 일반 이산대수 기반이면 ElGamal이다.',
  },
  {
    num: 8,
    question: '다음 보기의 암호 알고리즘 중 비대칭키(공개키) 암호에 해당하는 것 1개를 골라 쓰시오.',
    code: `AES, SEED, RSA, ARIA, LEA`,
    answers: ['RSA', '알에스에이'],
    answerLabel: 'RSA',
    explanation:
      '보기 중 RSA만 공개키(비대칭키) 암호이고 나머지(AES, SEED, ARIA, LEA)는 모두 블록 대칭키 암호다. 수학 문제 기반(RSA · ECC · ElGamal · 디피-헬만)은 비대칭키로 분류한다.',
  },
  {
    num: 9,
    question: '다음 보기의 암호 알고리즘 중 해시(일방향) 함수에 해당하는 것 1개를 골라 쓰시오.',
    code: `DES, ECC, MD5, SEED`,
    answers: ['MD5', '엠디5'],
    answerLabel: 'MD5',
    explanation:
      'MD · SHA · HAS 계열은 해시 함수다. 해시 함수는 임의 길이의 입력을 고정 길이 해시값으로 바꾸는 일방향 함수로 복호화가 불가능하며, MD5(128비트)는 충돌이 발견되어 현재 보안 용도로는 부적합하다.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 보안의 3요소 중 하나를 쓰시오.',
    code: `인가된(허가된) 사용자만 정보에 접근할 수 있도록 하여, 인가되지 않은
사용자에게 정보가 노출·유출되지 않도록 보호하는 성질`,
    answers: ['기밀성', 'Confidentiality', '기밀성(Confidentiality)'],
    answerLabel: '기밀성 (Confidentiality)',
    explanation:
      '"노출 · 유출 방지"가 나오면 기밀성이다. 수정 · 위변조 방지는 무결성, 언제든지 사용 가능은 가용성으로 키워드를 구분한다.',
  },
  {
    num: 11,
    question:
      '대량의 트래픽을 보내 서버를 마비시키는 DDoS(분산 서비스 거부) 공격이 침해하는 보안의 3요소는 무엇인지 쓰시오.',
    answers: ['가용성', 'Availability', '가용성(Availability)'],
    answerLabel: '가용성 (Availability)',
    explanation:
      '가용성은 인가된 사용자가 필요할 때 언제든지 정보와 자원에 접근·사용할 수 있는 성질이다. 서비스를 중단시키는 DDoS 공격은 가용성을 침해하는 대표 사례다.',
  },
  {
    num: 12,
    question: '다음 설명에 해당하는 보안의 3요소 중 하나를 쓰시오.',
    code: `인가된 사용자만 정보를 수정(변경)할 수 있도록 하여, 정보가
위조·변조·훼손되지 않고 정확성과 완전성을 유지하도록 보호하는 성질`,
    answers: ['무결성', 'Integrity', '무결성(Integrity)'],
    answerLabel: '무결성 (Integrity)',
    explanation:
      '"수정 · 위변조 방지 · 정확성 · 완전성"이 나오면 무결성이다. 해시 함수가 데이터 무결성 검증에 사용된다는 점도 함께 기억하자.',
  },
  {
    num: 13,
    question:
      '데이터를 송·수신한 자가 송·수신 사실을 나중에 부인할 수 없도록 증거를 제공하는 보안 요소를 쓰시오. (대표 기술: 전자 서명)',
    answers: ['부인 방지', '부인방지', 'Non-repudiation', 'nonrepudiation', '부인봉쇄'],
    answerLabel: '부인 방지 (Non-repudiation)',
    explanation:
      '"사실을 부인할 수 없도록 증거 제공"이 나오면 부인 방지다. 사용자의 신원을 확인하는 것은 인증(Authentication)으로, 두 확장 보안 요소를 구분해서 암기한다.',
  },
  {
    num: 14,
    question:
      '다음은 KISA 시큐어 코딩 가이드의 보안 약점 7항목이다. 괄호 안에 들어갈 항목명을 쓰시오.',
    code: `입력 데이터 검증 및 표현 / 보안 기능 / (        ) / 에러 처리 /
코드 오류 / 캡슐화 / API 오용

- (        ): 동시 수행 환경에서 시간과 상태를 부적절하게 관리하여
  TOCTOU 경쟁 조건(Race Condition) 등이 발생하는 약점 유형`,
    answers: ['시간 및 상태', '시간및상태', '시간과 상태', 'Time and State'],
    answerLabel: '시간 및 상태',
    explanation:
      'TOCTOU 경쟁 조건, 종료되지 않는 반복문·재귀는 "시간 및 상태" 항목의 대표 취약점이다. 7항목과 각 항목의 대표 취약점을 짝지어 암기한다.',
  },
  {
    num: 15,
    question:
      '시큐어 코딩 가이드 7항목 중, 중요한 데이터·기능을 불충분하게 감싸 정보가 노출되는 약점 유형으로 "제거되지 않은 디버그 코드", "잘못된 세션에 의한 정보 노출"이 대표 취약점인 항목명을 쓰시오.',
    answers: ['캡슐화', 'Encapsulation', '캡슐화(Encapsulation)'],
    answerLabel: '캡슐화',
    explanation:
      '"디버그 코드 노출"이 나오면 캡슐화 항목이다. SQL 삽입 · XSS는 입력 데이터 검증 및 표현, 하드코딩된 비밀번호는 보안 기능 항목으로 구분한다.',
  },
  {
    num: 16,
    question:
      'SQL 삽입(Injection) 공격의 대표적인 대책으로, SQL 구문의 구조를 미리 컴파일해 두고 사용자 입력값은 매개변수(바인딩 변수)로만 전달하여 입력값이 SQL 구문으로 해석되지 않게 하는 기법의 이름을 쓰시오.',
    answers: ['Prepared Statement', '프리페어드 스테이트먼트', 'prepared statements', '프리페어드스테이트먼트'],
    answerLabel: 'Prepared Statement',
    explanation:
      'SQL 삽입 대책은 Prepared Statement(바인딩 매개변수) 사용, 입력값 필터링, DB 계정 최소 권한이다. "구조를 미리 컴파일 + 입력값 바인딩"이 판별 키워드다.',
  },
  {
    num: 17,
    question: '다음 설명에 해당하는 공격 기법의 이름을 쓰시오.',
    code: `게시판 등에 악성 스크립트를 삽입해 두고, 해당 페이지를 열람한 다른
사용자의 브라우저에서 스크립트가 실행되게 하여 쿠키·세션을 탈취하는
공격. 대책으로 입력값 필터링과 특수문자 이스케이프 처리가 있다.`,
    answers: ['XSS', '크로스 사이트 스크립팅', '크로스사이트스크립팅', 'Cross Site Scripting', '크로스 사이트 스크립트'],
    answerLabel: 'XSS (크로스 사이트 스크립팅)',
    explanation:
      '"다른 사용자의 브라우저에서 스크립트 실행"이 나오면 XSS다. 사용자의 권한으로 위조된 요청이 서버에 전송되는 CSRF(대책: CSRF 토큰 검증)와 구분한다.',
  },
  {
    num: 18,
    question:
      '버퍼(할당된 메모리)의 크기보다 큰 데이터를 입력하여 인접한 메모리를 덮어쓰고 프로그램의 실행 흐름을 탈취하는 공격의 이름을 쓰시오. (대책: 입력 길이 경계 검사, strncpy 등 안전한 함수 사용)',
    answers: ['버퍼 오버플로', '버퍼 오버플로우', '버퍼오버플로', '버퍼오버플로우', 'Buffer Overflow'],
    answerLabel: '버퍼 오버플로 (Buffer Overflow)',
    explanation:
      '"버퍼 크기보다 큰 데이터 입력 → 인접 메모리 덮어쓰기"가 키워드다. 대책으로 경계 검사(Bounds Check), 안전한 문자열 함수 사용, 스택 가드를 함께 암기한다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `비밀번호를 해시하기 전에 덧붙이는 임의의 랜덤 값. 같은 비밀번호라도
서로 다른 해시 결과가 나오게 하여, 미리 계산해 둔 해시 목록으로 원문을
역추적하는 레인보우 테이블 공격을 무력화한다.`,
    answers: ['솔트', 'Salt', '솔트(Salt)'],
    answerLabel: '솔트 (Salt)',
    explanation:
      '"해시 전에 덧붙이는 랜덤 값"과 "레인보우 테이블 방어"가 키워드다. 해시는 일방향 함수라 복호화가 불가능하다는 특징도 함께 기억해 두자.',
  },
  {
    num: 20,
    question:
      '전자 서명(Digital Signature)에 대한 다음 설명에서 괄호 안에 공통으로 들어갈 용어를 쓰시오.',
    code: `송신자는 원문의 다이제스트(해시값)를 자신의 (        )로 서명(암호화)
하여 원문과 함께 보내고, 수신자는 송신자의 공개키로 서명을 검증한다.
이를 통해 무결성 · 인증 · 부인 방지가 제공된다.`,
    answers: ['개인키', '개인 키', 'private key', '사설키', '비밀키'],
    answerLabel: '개인키 (Private Key)',
    explanation:
      '전자 서명은 개인키로 서명하고 공개키로 검증한다. 공개키 암호화(공개키로 암호화 → 개인키로 복호화)와 키 사용 방향이 반대라는 점이 핵심 출제 포인트다.',
  },
]

export default defineComponent({
  name: 'VariantSecurityDesignPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>
        <header class="hero">
          <h1>기출 변형 — 소프트웨어 개발 보안 설계</h1>
          <p>실기 기출 유형을 변형한 20문제입니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>
        {QUESTIONS.map((q) => <QuizInput {...q} key={q.num} />)}
        <footer>소프트웨어 개발 보안 설계 기출 변형문제 · 2026-09</footer>
      </div>
    )
  },
})
