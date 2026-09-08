import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './security-impl.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오.',
    code: `공격자는 출발지 IP 주소를 피해자의 주소로 위조한 ICMP Echo Request를
네트워크의 브로드캐스트 주소로 전송한다. 이를 수신한 네트워크 내의
모든 호스트가 일제히 응답(Echo Reply)을 보내면서, 증폭된 트래픽이
피해자 시스템 한 곳으로 집중되어 서비스가 마비된다.`,
    answers: ['스머핑', 'Smurfing', '스머프', 'Smurf', '스머프 공격', 'Smurf Attack', '스머핑 공격'],
    answerLabel: '스머핑(Smurfing)',
    explanation:
      '"ICMP + 브로드캐스트 + 출발지 IP를 피해자로 위조"가 스머핑의 3대 키워드다. 네트워크 전체의 응답이 피해자에게 몰리는 증폭형 DoS 공격이다.',
  },
  {
    num: 2,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오.',
    code: `패킷의 출발지 IP 주소와 목적지 IP 주소를 모두 피해자의 주소로
동일하게 위조하여 전송하는 공격이다. 패킷을 받은 시스템은
자기 자신에게 응답을 보내는 동작을 반복하다가 자원이 고갈된다.`,
    answers: ['랜드 어택', 'Land Attack', '랜드', 'Land', '랜드어택 공격', 'Land 공격'],
    answerLabel: '랜드 어택(Land Attack)',
    explanation:
      '"출발지 IP = 목적지 IP"가 나오면 답은 랜드 어택이다. 시스템이 자기 자신과 통신을 반복하게 만들어 자원을 소진시킨다.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오.',
    code: `IP 패킷을 여러 조각(Fragment)으로 나누어 보낼 때 사용되는
오프셋(Offset) 값을 서로 중첩되거나 어긋나게 조작하여 전송함으로써,
수신 측이 패킷을 재조립하는 과정에서 오류를 일으켜
시스템을 마비시키는 공격이다.`,
    answers: ['티어드롭', 'Teardrop', '티어드랍', 'Teardrop Attack', '티어드롭 공격'],
    answerLabel: '티어드롭(Teardrop)',
    explanation:
      '"단편화 오프셋 값 조작 + 재조립 오류"가 티어드롭의 결정적 키워드다. 규정보다 큰 ICMP 패킷을 보내는 죽음의 핑과 구분해야 한다.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오. (영문 약어 가능)',
    code: `공격자가 출발지 IP를 피해자의 주소로 위조한 요청을
다수의 정상 운영 중인 서버(반사체)에 전송하면,
그 서버들의 응답이 증폭되어 피해자에게 집중되는 서비스 거부 공격이다.
공격자가 직접 패킷을 보내지 않으므로 근원지 추적이 어렵다.`,
    answers: [
      'DRDoS',
      '분산 반사 서비스 거부',
      '분산 반사 서비스 거부 공격',
      'Distributed Reflection DoS',
      'Distributed Reflection Denial of Service',
      '디알도스',
    ],
    answerLabel: 'DRDoS(분산 반사 서비스 거부 공격)',
    explanation:
      '"반사체(정상 서버)를 경유 + 응답 증폭 + 추적 곤란"이 DRDoS의 키워드다. 좀비 PC가 직접 공격하는 DDoS와 달리 정상 서버의 응답을 이용한다.',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오.',
    code: `이미 인증을 마치고 서버와 통신 중인 사용자의 정상 세션 정보
(세션 ID, TCP 시퀀스 번호 등)를 공격자가 가로채어,
별도의 인증 절차를 거치지 않고 해당 사용자로 위장해
시스템에 접근하는 공격이다.`,
    answers: ['세션 하이재킹', 'Session Hijacking', '세션 가로채기', '세션 하이재킹 공격', 'TCP 세션 하이재킹'],
    answerLabel: '세션 하이재킹(Session Hijacking)',
    explanation:
      '"인증이 끝난 정상 세션을 가로채 인증 없이 접근"이 세션 하이재킹의 정의다. 대응책으로 세션 ID 재발급과 예측 불가능한 세션 ID 사용이 있다.',
  },
  {
    num: 6,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오.',
    code: `네트워크를 지나다니는 패킷을 몰래 엿보며 계정 정보나
데이터를 훔쳐보는 수동적(Passive) 공격이다.
데이터를 위조하거나 변조하지 않고 도청만 한다는 점에서
자신을 다른 대상으로 위장하는 능동적 공격과 구분된다.`,
    answers: ['스니핑', 'Sniffing', '스니핑 공격'],
    answerLabel: '스니핑(Sniffing)',
    explanation:
      '"몰래 엿보는 수동적 공격 = 도청"은 스니핑이다. 받침 하나 차이인 스푸핑은 자신을 위장하는 능동적 공격이므로 혼동하지 말 것.',
  },
  {
    num: 7,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오.',
    code: `공격자가 DNS 정보를 변조(탈취)해 두어, 사용자가 브라우저에
은행 등 정상 사이트의 주소를 정확하게 입력해도
공격자가 만든 가짜 사이트로 접속되도록 하여
금융 정보와 개인정보를 탈취하는 공격이다.`,
    answers: ['파밍', 'Pharming', '파밍 공격'],
    answerLabel: '파밍(Pharming)',
    explanation:
      '"정상 주소를 입력해도 가짜 사이트 접속 = DNS 변조"가 파밍의 결정적 키워드다. 가짜 메일·문자로 유도하는 피싱·스미싱과 구분된다.',
  },
  {
    num: 8,
    question: '다음 설명에 해당하는 공격 기법을 쓰시오.',
    code: `소프트웨어의 보안 취약점이 발견된 후 이를 막을 수 있는
보안 패치가 배포되기 전의 시점을 노려, 해당 취약점을
악용하는 공격이다. 방어 수단이 아직 없으므로
시그니처 기반 탐지로는 막기 어렵다.`,
    answers: ['제로데이', '제로데이 공격', 'Zero-Day', 'Zero Day Attack', 'Zero-Day Attack', '제로 데이'],
    answerLabel: '제로데이 공격(Zero-Day Attack)',
    explanation:
      '"패치가 나오기 전의 취약점 악용"이 제로데이 공격의 정의다. 대응할 시간이 0일이라는 의미에서 붙은 이름이다.',
  },
  {
    num: 9,
    question: '다음 설명에 해당하는 패스워드 공격 기법을 쓰시오.',
    code: `패스워드가 될 수 있는 후보 문자열들의 해시값을 미리 대량으로
계산하여 표 형태로 만들어 둔 뒤, 탈취한 패스워드 해시값과
대조하여 원래의 패스워드를 역으로 알아내는 기법이다.
해시 계산 시 임의의 값(Salt)을 추가하면 무력화할 수 있다.`,
    answers: ['레인보우 테이블', 'Rainbow Table', '레인보우 테이블 공격', 'Rainbow Table Attack', '무지개 테이블'],
    answerLabel: '레인보우 테이블(Rainbow Table)',
    explanation:
      '"해시값을 미리 계산해 둔 표"가 레인보우 테이블의 핵심이다. 모든 조합을 순서대로 대입하는 무차별 대입 공격과 구분되며, 대응책은 솔트(Salt) 추가다.',
  },
  {
    num: 10,
    question: '다음 설명에 해당하는 보안 솔루션을 쓰시오. (영문 약어 가능)',
    code: `내부 네트워크에 접속하려는 노트북·PC 등 단말(엔드포인트)에 대해
백신 설치 여부, 보안 패치 적용 여부 등 보안 정책 준수 상태를 검사하여,
정책을 위반한 단말의 네트워크 접속을 차단하거나 통제하는 솔루션이다.`,
    answers: ['NAC', '네트워크 접근 제어', '네트워크 접근 통제', 'Network Access Control'],
    answerLabel: 'NAC(Network Access Control, 네트워크 접근 제어)',
    explanation:
      '"내부망 접속 단말의 보안 상태 검사 + 접속 통제"가 NAC의 정의다. 정보 유출을 감시하는 DLP, 로그를 통합 분석하는 SIEM과 구분한다.',
  },
  {
    num: 11,
    question: '다음 설명에 해당하는 보안 솔루션을 쓰시오. (영문 약어 가능)',
    code: `기업 내부의 중요 정보·기밀 데이터가 이메일, USB 저장 장치,
메신저 등 다양한 경로를 통해 외부로 유출되는 것을
감시하고 차단하는 정보 유출 방지 솔루션이다.`,
    answers: ['DLP', '데이터 유출 방지', '정보 유출 방지', 'Data Loss Prevention', 'Data Leakage Prevention'],
    answerLabel: 'DLP(Data Loss Prevention, 정보 유출 방지)',
    explanation:
      '"내부 정보의 외부 유출 감시·차단(메일·USB·메신저 통제)"이 DLP의 키워드다. 외부에서 들어오는 침입을 막는 방화벽·IPS와 방향이 반대다.',
  },
  {
    num: 12,
    question: '다음 설명에 해당하는 네트워크 영역을 쓰시오. (영문 약어 가능)',
    code: `외부 네트워크와 내부 네트워크 사이에 설치하는 완충 지대로,
웹 서버·메일 서버처럼 외부에 공개해야 하는 서버들을 이곳에 배치하여
외부 공격이 내부 네트워크까지 직접 도달하지 못하도록 한다.`,
    answers: ['DMZ', '비무장 지대', 'Demilitarized Zone', '디엠지'],
    answerLabel: 'DMZ(Demilitarized Zone, 비무장 지대)',
    explanation:
      '"외부망과 내부망 사이의 완충 지대 + 공개 서버 배치"가 DMZ의 정의다. 외부 공개 서비스가 뚫려도 내부망이 직접 노출되지 않는다.',
  },
  {
    num: 13,
    question:
      '침입 탐지 시스템(IDS)의 탐지 방식 중, 정상적인 행위 프로파일을 미리 학습해 두고 통계적으로 이를 벗어나는 행위를 침입으로 판단하는 방식을 쓰시오. 이 방식은 오탐(False Positive)이 많은 대신 알려지지 않은 새로운 공격도 탐지할 수 있다.',
    answers: ['이상 탐지', 'Anomaly Detection', '이상 탐지 기법', '비정상 행위 탐지', '이상 행위 탐지'],
    answerLabel: '이상 탐지(Anomaly Detection)',
    explanation:
      '"정상 행위 기준 + 새로운 공격 탐지 가능 + 오탐 많음"은 이상 탐지다. 알려진 공격의 시그니처와 비교하는 방식은 오용 탐지(Misuse Detection)다.',
  },
  {
    num: 14,
    question: '다음 설명에 해당하는 접근 통제 정책을 영문 약어로 쓰시오.',
    code: `주체(사용자)와 객체(자원)에 각각 부여된 보안 등급(레이블)을
시스템이 비교하여 접근 허용 여부를 강제적으로 결정하는 접근 통제 정책이다.
데이터 소유자라 하더라도 임의로 권한을 부여할 수 없으며,
군사·정부 기관처럼 기밀성이 중요한 환경에서 사용된다.`,
    answers: ['MAC', '강제적 접근 통제', '강제적 접근 제어', 'Mandatory Access Control'],
    answerLabel: 'MAC(Mandatory Access Control, 강제적 접근 통제)',
    explanation:
      '"보안 등급(레이블) 비교 + 시스템이 강제로 결정"이 MAC의 키워드다. 소유자가 임의로 결정하면 DAC, 역할(직무)에 권한을 부여하면 RBAC다.',
  },
  {
    num: 15,
    question: '다음 설명에 해당하는 접근 통제 보안 모델을 쓰시오.',
    code: `군사용 기밀성 보장을 목표로 만들어진 최초의 수학적 접근 통제 모델로,
자신보다 높은 등급의 문서를 읽을 수 없고(No Read Up),
자신보다 낮은 등급으로 쓸 수 없다(No Write Down)는 규칙으로
기밀 정보의 유출을 방지한다.`,
    answers: [
      '벨-라파둘라',
      '벨-라파둘라 모델',
      'Bell-LaPadula',
      'Bell-LaPadula Model',
      'BLP',
      '벨라파듈라 모델',
    ],
    answerLabel: '벨-라파둘라 모델(Bell-LaPadula Model, BLP)',
    explanation:
      '"기밀성 + No Read Up / No Write Down"이 나오면 벨-라파둘라 모델이다. 무결성을 목표로 규칙 방향이 반대인 비바(Biba) 모델과 구분해야 한다.',
  },
  {
    num: 16,
    question:
      '인증(Authentication) 기법의 4분류 중, OTP 기기·스마트카드·공동인증서처럼 사용자가 가지고 있는 물건(Something you have)을 근거로 본인 여부를 확인하는 인증 방식을 쓰시오.',
    answers: ['소유 기반 인증', '소유 기반', 'Something you have', '소유물 기반 인증', '소지 기반 인증'],
    answerLabel: '소유 기반 인증(Something you have)',
    explanation:
      '"가지고 있는 것"은 소유 기반 인증이다. 패스워드·PIN은 지식 기반, 지문·홍채는 생체 기반, 서명·걸음걸이는 행위 기반으로 분류한다.',
  },
  {
    num: 17,
    question: '다음 괄호 안에 공통으로 들어갈 비즈니스 연속성 계획(BCP) 지표를 영문 약어로 쓰시오.',
    code: `( )은/는 재해 발생 시 감수할 수 있는 데이터 손실의
최대 허용 시점을 의미하는 목표 복구 "시점" 지표이다.
예를 들어 ( )이/가 4시간이라면 최대 4시간 분량의 데이터 손실을
허용한다는 뜻이므로, 백업 주기를 결정하는 기준이 된다.`,
    answers: ['RPO', 'Recovery Point Objective', '목표 복구 시점', '복구 시점 목표'],
    answerLabel: 'RPO(Recovery Point Objective, 목표 복구 시점)',
    explanation:
      'P는 Point(시점) — 데이터 손실 허용선이며 백업 주기를 결정한다. 업무 재가동까지 허용되는 최대 "시간"을 뜻하는 RTO와 구분해야 한다.',
  },
  {
    num: 18,
    question: '다음 설명에 해당하는 재해 복구(DR) 센터 유형을 쓰시오.',
    code: `주 전산 센터와 동일한 수준의 시스템을 원격지에 구축하고
실시간 동기 복제를 통해 두 센터를 동시에 운영(Active-Active)하는 유형이다.
재해가 발생해도 이론상 복구 소요 시간이 0에 가깝지만,
네 가지 유형 중 구축·운영 비용이 가장 높다.`,
    answers: ['미러 사이트', 'Mirror Site', '미러', 'Mirror', '미러사이트'],
    answerLabel: '미러 사이트(Mirror Site)',
    explanation:
      '"동시 운영(Active-Active) + 즉시 복구 + 최고 비용"은 미러 사이트다. 대기 상태로 유지하면 핫, 일부 장비만 두면 웜, 공간만 확보하면 콜드 사이트다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 애플리케이션 보안 테스트 기법을 영문 약어로 쓰시오.',
    code: `프로그램을 실행하지 않은 상태에서 소스 코드나 바이너리 자체를
분석하여 코딩 표준 위반, 버퍼 오버플로 가능성 등의 보안 약점을
찾아내는 정적 분석 기법으로, 개발(구현) 단계부터 조기에 적용할 수 있다.`,
    answers: [
      'SAST',
      '정적 분석',
      '정적 애플리케이션 보안 테스트',
      'Static Application Security Testing',
      '정적 분석 도구',
      '정적 테스트',
    ],
    answerLabel: 'SAST(Static Application Security Testing, 정적 분석)',
    explanation:
      '"실행하지 않고 소스 코드를 검사"하면 SAST(정적 분석)다. 실행 중인 애플리케이션의 입출력·반응을 검사하는 동적 분석은 DAST다.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 보안 테스트 기법을 쓰시오.',
    code: `프로그램에 무작위의 비정상적인 데이터를 대량으로 입력하여
충돌(Crash)이나 오류, 예외 처리의 결함 등 보안 취약점을
찾아내는 동적 테스트 기법이다.`,
    answers: ['퍼징', 'Fuzzing', '퍼즈 테스팅', 'Fuzz Testing', '퍼징 테스트'],
    answerLabel: '퍼징(Fuzzing)',
    explanation:
      '"무작위·비정상 데이터 대량 입력 + 충돌·오류 발견"이 퍼징의 정의다. 프로그램을 실행하며 검사하므로 동적 분석(DAST) 계열에 속한다.',
  },
]

export default defineComponent({
  name: 'VariantSecurityImplPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 소프트웨어 개발 보안 구현과 보안 용어</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 지문과 보기를 바꾼 변형 문제 20문항입니다.
            네트워크·애플리케이션 공격 용어(스머핑·랜드 어택·티어드롭·DRDoS·세션 하이재킹 등),
            보안 솔루션(NAC·DLP·DMZ·IDS 탐지 방식), 접근 통제(MAC·벨-라파둘라),
            인증 4분류, RTO/RPO, DR 센터 유형, SAST·퍼징을 다룹니다.
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

        <footer>기출 변형문제 — 소프트웨어 개발 보안 구현과 보안 용어 · 2026-09</footer>
      </div>
    )
  },
})
