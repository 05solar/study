import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './sw-packaging.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 디지털 저작권 관리(DRM)의 구성 요소를 쓰시오.',
    code: `전자책(E-Book) 구독 서비스에서 콘텐츠를 암호화한 키를 관리하고,
결제한 이용자에게 사용 권한(라이선스)을 발급하며,
발생한 저작권 사용료의 정산과 분배까지 담당하는 요소`,
    answers: ['클리어링 하우스', 'clearing house', '클리어링하우스', '클리어링 하우스 (Clearing House)', 'clearinghouse'],
    answerLabel: '클리어링 하우스 (Clearing House)',
    explanation: '"키 관리 · 라이선스 발급 · 저작권료 정산"이라는 키워드가 나오면 답은 클리어링 하우스다. DRM 구성 요소 중 실기 최다 빈출 용어이므로 반드시 암기하자.',
  },
  {
    num: 2,
    question: '다음 설명에 해당하는 디지털 저작권 관리(DRM)의 구성 요소를 쓰시오.',
    code: `저작권자가 제공한 원본 콘텐츠를 메타데이터와 함께
배포 가능한 단위로 묶어 암호화하는 프로그램`,
    answers: ['패키저', 'packager', '패키저 (Packager)', '팩키저'],
    answerLabel: '패키저 (Packager)',
    explanation: '"메타데이터와 함께 묶어 암호화하는 프로그램"은 패키저다. 패키저가 암호화하여 만든 결과물(전자적 포장 단위)이 보안 컨테이너라는 점도 함께 기억하자.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 디지털 저작권 관리(DRM)의 구성 요소를 쓰시오.',
    code: `소비자의 기기(단말)에 설치되어 라이선스에 명시된 이용 범위를
확인한 뒤 콘텐츠를 복호화·재생하는 등, 배포된 콘텐츠의
이용 권한을 통제하는 프로그램`,
    answers: ['DRM 컨트롤러', 'drm controller', '디지털 저작권 관리 컨트롤러', 'DRM컨트롤러', '컨트롤러'],
    answerLabel: 'DRM 컨트롤러 (DRM Controller)',
    explanation: '소비자 측에서 이용 권한을 통제하는 프로그램은 DRM 컨트롤러다. 클리어링 하우스에서 라이선스를 발급받아야 DRM 컨트롤러가 콘텐츠를 복호화하여 사용할 수 있다.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 디지털 저작권 관리(DRM)의 구성 요소를 쓰시오.',
    code: `원본 콘텐츠를 불법 유출 없이 안전하게 유통하기 위해
암호화하여 포장해 놓은 전자적 보안 장치`,
    answers: ['보안 컨테이너', 'security container', '보안컨테이너', '시큐리티 컨테이너', '보안 컨테이너 (Security Container)'],
    answerLabel: '보안 컨테이너 (Security Container)',
    explanation: '"전자적 보안 장치"라는 키워드는 보안 컨테이너다. 패키저(암호화하는 프로그램)와 보안 컨테이너(암호화된 포장 단위·결과물)를 혼동하지 않도록 주의하자.',
  },
  {
    num: 5,
    question: '다음은 DRM의 유통 흐름을 나타낸 것이다. 괄호 안에 공통으로 들어갈 구성 요소를 쓰시오.',
    code: `콘텐츠 제공자 → 패키저 → 콘텐츠 분배자 → 소비자(DRM 컨트롤러)

· 패키저는 암호화에 사용한 키와 메타데이터를 (        )에 등록한다.
· 소비자가 결제를 마치면 (        )이/가 콘텐츠 사용을 허가하는
  라이선스를 발급한다.`,
    answers: ['클리어링 하우스', 'clearing house', '클리어링하우스', '클리어링 하우스 (Clearing House)', 'clearinghouse'],
    answerLabel: '클리어링 하우스 (Clearing House)',
    explanation: '유통 흐름도에서 키 등록을 받고 라이선스를 발급하는 요소는 클리어링 하우스다. 소비자가 암호화된 콘텐츠를 받았더라도 클리어링 하우스의 라이선스가 있어야 사용할 수 있다.',
  },
  {
    num: 6,
    question: '다음은 DRM의 기술 요소에 대한 설명이다. 괄호 안에 들어갈 기술 요소를 쓰시오.',
    code: `· 암호화        : 콘텐츠와 라이선스를 암호화하고 전자 서명하는 기술
· 키 관리        : 콘텐츠를 암호화한 키를 저장·배포·관리하는 기술
· (          )  : DOI, URI 등으로 콘텐츠에 대한 식별 체계를
                  표현하는 기술
· 정책 관리      : 라이선스의 발급·사용에 대한 정책을 표현·관리하는 기술
· 크랙 방지      : 크랙(불법 복호화·변조)에 의한 콘텐츠 사용을 막는 기술`,
    answers: ['식별 기술', '식별기술', 'identification', '식별 기술 (Identification)', '식별'],
    answerLabel: '식별 기술 (Identification)',
    explanation: 'DOI · URI 키워드가 나오면 식별 기술이다. DRM 기술 요소는 암호화 · 키 관리 · 암호화 파일 생성 · 식별 기술 · 저작권 표현 · 정책 관리 · 크랙 방지 · 인증으로 정리해 두자.',
  },
  {
    num: 7,
    question: '다음 설명에 해당하는 저작권 보호 기술의 명칭을 쓰시오.',
    code: `온라인 음원 판매 사이트가 판매하는 음원 파일마다
구매자(사용자)의 정보를 삽입해 두어, 해당 파일이 불법으로
유포되었을 때 최초 유포자를 추적할 수 있게 하는 기술`,
    answers: ['핑거프린팅', 'fingerprinting', '핑거 프린팅', '핑거프린팅 (Fingerprinting)', '디지털 핑거프린팅'],
    answerLabel: '핑거프린팅 (Fingerprinting)',
    explanation: '구매자 정보를 삽입해 최초 유포자를 추적하면 핑거프린팅이다. 저작권자의 정보를 삽입해 저작권을 증명하는 워터마킹과 "누구의 정보를 넣는가"로 구분한다.',
  },
  {
    num: 8,
    question: '다음 설명에 해당하는 저작권 보호 기술의 명칭을 쓰시오.',
    code: `사진 공유 서비스가 원본 사진에 저작권자의 로고를 사람이
인지할 수 없는 형태로 삽입해 두어, 불법 복제가 발생했을 때
저작권자가 자신의 저작물임을 증명할 수 있게 하는 기술`,
    answers: ['워터마킹', 'watermarking', '워터 마킹', '디지털 워터마킹', '워터마킹 (Watermarking)', 'digital watermarking'],
    answerLabel: '워터마킹 (Watermarking)',
    explanation: '저작권자의 정보를 비가시적으로 삽입해 저작권을 증명하는 기술은 워터마킹이다. 참고로 소프트웨어가 위·변조를 감지하면 스스로 동작을 중단하게 하는 기술은 템퍼 프루핑(Tamper Proofing)이다.',
  },
  {
    num: 9,
    question: '다음 설명에 해당하는 저작권 보호 기술의 명칭을 쓰시오.',
    code: `배포된 소프트웨어가 자신의 코드가 위조·변조되었는지 스스로
검사하여, 변조가 감지되면 실행을 중단하거나 오작동하도록
만들어 해킹(변조)을 무력화하는 기술`,
    answers: ['템퍼 프루핑', 'tamper proofing', '템퍼프루핑', '탬퍼 프루핑', '탬퍼프루핑', '템퍼 프루핑 (Tamper Proofing)'],
    answerLabel: '템퍼 프루핑 (Tamper Proofing)',
    explanation: '"위·변조를 감지하면 스스로 중단·오작동"이 템퍼 프루핑의 키워드다. 워터마킹(저작권자 정보 삽입) · 핑거프린팅(구매자 정보 삽입)과 세트로 구분해 두자.',
  },
  {
    num: 10,
    question: '다음은 제품 소프트웨어 패키징의 특징에 대한 설명이다. 괄호 안에 들어갈 용어를 쓰시오.',
    code: `제품 소프트웨어 패키징은 개발자가 아니라 (        )을/를
중심으로 진행하며, (        )의 실행 환경(OS, CPU, 메모리 등)을
기준으로 모듈을 기능 단위로 묶어 배포 형태로 만든다.`,
    answers: ['사용자', 'user', '유저', '최종 사용자'],
    answerLabel: '사용자',
    explanation: '패키징은 개발자 편의가 아니라 사용자 중심으로 진행한다. "( ) 중심"의 답이 사용자라는 점은 실기 단골이다.',
  },
  {
    num: 11,
    question: '다음 제품 소프트웨어 패키징의 수행 단계를 순서대로 나열하시오. (기호로 작성)',
    code: `ㄱ. 사용자 환경 분석    ㄴ. 패키징 및 적용 시험
ㄷ. 기능 식별            ㄹ. 패키징 변경 개선
ㅁ. 빌드 진행            ㅂ. 모듈화`,
    answers: ['ㄷ-ㅂ-ㅁ-ㄱ-ㄴ-ㄹ', 'ㄷㅂㅁㄱㄴㄹ', 'ㄷ→ㅂ→ㅁ→ㄱ→ㄴ→ㄹ', 'ㄷ → ㅂ → ㅁ → ㄱ → ㄴ → ㄹ', 'ㄷ, ㅂ, ㅁ, ㄱ, ㄴ, ㄹ'],
    answerLabel: 'ㄷ → ㅂ → ㅁ → ㄱ → ㄴ → ㄹ',
    explanation: '패키징 수행 순서는 기능 식별 → 모듈화 → 빌드 진행 → 사용자 환경 분석 → 패키징 및 적용 시험 → 패키징 변경 개선의 6단계이며, 개선 후 배포한다.',
  },
  {
    num: 12,
    question: '다음 설명에 해당하는 문서의 명칭을 쓰시오.',
    code: `소프트웨어의 신규 기능, 수정된 버그 등 개선·변경된 사항을
시간 순서로 정리하여 최종 사용자(고객)와 공유하는 문서로,
개발팀(개발자)이 현재 시제로 명확·정확·완전하게 작성한다.`,
    answers: ['릴리스 노트', 'release note', '릴리즈 노트', '릴리스노트', '릴리즈노트', 'release notes', '릴리스 노트 (Release Note)'],
    answerLabel: '릴리스 노트 (Release Note)',
    explanation: '변경 사항을 시간 순으로 기록해 사용자에게 전달하는 문서는 릴리스 노트다. 영업팀·홍보팀이 아니라 개발팀이 직접 작성한다는 점이 자주 출제된다.',
  },
  {
    num: 13,
    question: '릴리스 노트의 작성 항목 중, 문서 이름 · 제품 이름 · 버전 번호 · 릴리스 날짜 · 노트 버전 등을 기록하는 항목의 이름을 쓰시오.',
    answers: ['헤더', 'header', '머리말', '헤더 (머리말)', '머릿말'],
    answerLabel: '헤더 (머리말, Header)',
    explanation: '문서명·제품명·버전·날짜가 들어가는 항목은 헤더(머리말)다. 법적 책임의 한계를 고지하는 면책 조항, 문의용 연락처 등 다른 항목명과 함께 묶어 외워 두자.',
  },
  {
    num: 14,
    question: '다음 설명에 해당하는 매뉴얼의 종류를 쓰시오.',
    code: `사용자 기준으로 작성하며, 제품 소프트웨어의 설치 시작부터
완료까지의 전 과정을 빠짐없이 순서대로 설명한다. 과정의 각
화면을 단계별로 캡처하여 싣고, 도중에 발생할 수 있는
이상(오류) 상황과 대처 방법을 함께 기록한다.`,
    answers: ['설치 매뉴얼', '설치매뉴얼', 'installation manual', '설치 메뉴얼', '설치 설명서'],
    answerLabel: '설치 매뉴얼',
    explanation: '"설치 시작부터 완료까지 · 화면 캡처"가 설치 매뉴얼의 키워드다. 소프트웨어의 사용 방법을 사용자 관점에서 기술한 문서는 사용자 매뉴얼로, 둘을 구분하자.',
  },
  {
    num: 15,
    question: '다음은 ISO/IEC 9126의 소프트웨어 품질 특성에 대한 설명이다. 괄호 안에 들어갈 특성의 이름을 쓰시오.',
    code: `· (        ) : 투입된 자원의 양에 대비하여 적절한 성능을
               제공하는 능력 (부특성: 시간 효율성, 자원 효율성)`,
    answers: ['효율성', 'efficiency', '효율성 (Efficiency)', '이피션시'],
    answerLabel: '효율성 (Efficiency)',
    explanation: '"자원 대비 성능"은 효율성이다. 6가지 품질 특성인 기능성 · 신뢰성 · 사용성 · 효율성 · 유지보수성 · 이식성의 정의를 모두 구분해 암기하자.',
  },
  {
    num: 16,
    question: '다음 설명에 해당하는 국제 표준의 명칭을 쓰시오. (표준 번호 또는 별칭)',
    code: `품질 특성 표준인 ISO/IEC 9126, 품질 평가 절차 표준인
ISO/IEC 14598, 패키지 SW 표준인 ISO/IEC 12119 등을 하나로
통합한 소프트웨어 품질 평가 통합 표준. 2500n(품질 관리),
2501n(품질 모델), 2502n(품질 측정), 2503n(품질 요구),
2504n(품질 평가)으로 구성된다.`,
    answers: ['ISO/IEC 25000', 'ISO 25000', '25000', 'SQuaRE', '스퀘어', 'ISO/IEC 25000 (SQuaRE)', 'ISOIEC 25000', 'square'],
    answerLabel: 'ISO/IEC 25000 (SQuaRE)',
    explanation: '기존 품질 표준들을 통합한 표준은 ISO/IEC 25000이며 SQuaRE(Software product Quality Requirements and Evaluation)라고도 부른다. "통합"이라는 키워드가 결정적 힌트다.',
  },
  {
    num: 17,
    question: '다음 설명에 해당하는 국제 표준의 명칭을 쓰시오. (표준 번호로 작성)',
    code: `소프트웨어 제품의 품질을 평가하는 절차(프로세스)를 정의한
표준으로, 평가 결과에 대해 반복성 · 재현성 · 공정성 · 객관성을
요구한다. 이후 ISO/IEC 25000(SQuaRE)으로 통합되었다.`,
    answers: ['ISO/IEC 14598', 'ISO 14598', '14598', 'ISOIEC 14598', 'iso iec 14598'],
    answerLabel: 'ISO/IEC 14598',
    explanation: '9126이 "품질 특성"이라면 14598은 "품질 평가 절차" 표준이다. 반복성 · 재현성 · 공정성 · 객관성이라는 4가지 요구가 14598을 알아보는 키워드다.',
  },
  {
    num: 18,
    question: '다음 설명에 해당하는 버전 관리(형상 관리) 용어를 쓰시오.',
    code: `버전 관리 저장소(Repository)에 보관된 파일(버전)을
개발자의 PC(작업 공간)로 받아 오는 것`,
    answers: ['체크아웃', 'check out', 'checkout', '체크 아웃', '체크아웃 (Check-Out)'],
    answerLabel: '체크아웃 (Check-Out)',
    explanation: '저장소에서 내 PC로 받아 오면 체크아웃, 수정한 파일을 저장소에 새 버전으로 올리면 체크인이다. 방향(받기/올리기)으로 두 용어를 구분한다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 버전 관리(형상 관리) 용어를 쓰시오.',
    code: `체크인을 시도할 때 다른 개발자의 수정 내용과 충돌(Conflict)이
발생하면 알림을 받고, diff 도구 등으로 수정한 뒤 저장소에
갱신을 완료하는 것`,
    answers: ['커밋', 'commit', '커밋 (Commit)', '콤밋'],
    answerLabel: '커밋 (Commit)',
    explanation: '"충돌을 해결한 뒤 갱신을 완료"하는 것이 커밋이다. 파일과 변경 이력이 저장되는 공간인 저장소(Repository), 처음으로 파일을 등록하는 가져오기(Import)도 함께 정리하자.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 빌드 자동화 도구의 이름을 쓰시오.',
    code: `Java 기반의 오픈 소스 CI(지속적 통합) 서버 도구로, 서블릿
컨테이너에서 실행된다. SVN · Git 등 버전 관리 도구와 연동하여
커밋을 감지하면 자동으로 빌드와 테스트를 수행하며, 웹 GUI와
풍부한 플러그인을 제공한다.`,
    answers: ['Jenkins', '젠킨스', 'jenkins', 'Jenkins (젠킨스)'],
    answerLabel: 'Jenkins (젠킨스)',
    explanation: '"CI 서버 · 서블릿 컨테이너 · 커밋 감지"는 Jenkins의 키워드다. Groovy 기반 DSL로 스크립트를 작성하는 안드로이드 공식 빌드 도구인 Gradle과 키워드로 구분한다.',
  },
]

export default defineComponent({
  name: 'VariantSwPackagingPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 제품 소프트웨어 패키징</h1>
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

        <footer>제품 소프트웨어 패키징 기출 변형 20문제 · 2026-09</footer>
      </div>
    )
  },
})
