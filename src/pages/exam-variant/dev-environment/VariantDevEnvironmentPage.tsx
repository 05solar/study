import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './dev-environment.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '형상 관리 절차 4단계에서 괄호에 들어갈 단계를 쓰시오.',
    code: `형상 식별 → 형상 통제 → (        ) → 형상 기록`,
    answers: ['형상 감사', '형상감사', '감사', 'Configuration Audit', '형상 감사(Configuration Audit)'],
    answerLabel: '형상 감사',
    explanation:
      '형상 관리 절차는 식별 → 통제 → 감사 → 기록 순이다. 세 번째 단계인 형상 감사는 베이스라인의 무결성을 평가하여 변경이 승인대로 이루어졌는지 검증하는 활동이다.',
  },
  {
    num: 2,
    question:
      '형상 관리 절차 4단계 중, 형상에 대한 변경 요청을 형상 통제 위원회(CCB)가 검토·승인하여 현재 베이스라인에 반영되도록 하는 단계를 쓰시오.',
    answers: ['형상 통제', '형상통제', '통제', 'Configuration Control', '형상 통제(Configuration Control)'],
    answerLabel: '형상 통제',
    explanation:
      '형상 통제는 변경 요청의 검토·승인 활동으로, 승인 주체인 형상 통제 위원회(CCB)와 함께 출제된다. 승인대로 되었는지 검증하는 형상 감사와 혼동하지 말자.',
  },
  {
    num: 3,
    question: '다음 형상 관리 활동 ㄱ~ㄹ을 절차 순서대로 기호로 나열하시오.',
    code: `ㄱ. 변경이 승인한 대로 이루어졌는지 베이스라인의 무결성을 검증한다.
ㄴ. 관리 대상(형상 항목)을 구분하고 식별자와 번호를 부여한다.
ㄷ. 식별·통제·감사 작업의 결과와 이력을 기록하고 보고한다.
ㄹ. 변경 요청을 검토·승인하여 베이스라인에 반영되도록 통제한다.`,
    answers: ['ㄴ → ㄹ → ㄱ → ㄷ', 'ㄴ→ㄹ→ㄱ→ㄷ', 'ㄴㄹㄱㄷ', 'ㄴ, ㄹ, ㄱ, ㄷ', 'ㄴ-ㄹ-ㄱ-ㄷ'],
    answerLabel: 'ㄴ → ㄹ → ㄱ → ㄷ',
    explanation:
      'ㄴ은 형상 식별, ㄹ은 형상 통제, ㄱ은 형상 감사, ㄷ은 형상 기록이다. 절차 순서(식별 → 통제 → 감사 → 기록)를 그대로 기호에 대응시키면 된다.',
  },
  {
    num: 4,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `소프트웨어 개발 전 과정에서 발생하는 산출물(요구사항 명세서, 설계서,
소스 코드, 테스트 결과서 등)의 변경 사항을 버전별로 관리하여
가시성·추적성·무결성을 확보하는 일련의 활동`,
    answers: ['형상 관리', '형상관리', 'SCM', 'Software Configuration Management', '형상 관리(SCM)', '소프트웨어 형상 관리'],
    answerLabel: '형상 관리(SCM, Software Configuration Management)',
    explanation:
      '핵심 키워드는 "산출물의 변경 사항 관리"다. 형상 관리의 목적은 변경 통제와 무결성 확보이며, 개발 비용 절감이나 일정 단축은 목적이 아니다(오답 보기 단골).',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 형상 관리 용어를 쓰시오.',
    code: `공식적으로 검토·합의된 시점의 산출물 집합으로 이후 변경 통제의
기준(기준선)이 되며, 이 시점 이후의 변경은 반드시 공식적인
형상 통제 절차(승인)를 거쳐야 한다.`,
    answers: ['베이스라인', 'Baseline', '기준선', '베이스라인(기준선)', 'base line'],
    answerLabel: '베이스라인(Baseline, 기준선)',
    explanation:
      '"변경 통제의 기준", "기준선"이라는 키워드가 보이면 베이스라인이다. 베이스라인 확정 이후의 변경은 형상 통제 위원회(CCB)의 승인을 거쳐 반영된다.',
  },
  {
    num: 6,
    question:
      '개발 도구의 분류 4가지(구현 도구, 테스트 도구, 형상 관리 도구, 빌드 도구) 중, 작성한 코드를 컴파일·패키징하고 라이브러리 의존성을 관리하여 실행 가능한 산출물을 만드는 도구 분류를 쓰시오.',
    answers: ['빌드 도구', '빌드도구', 'Build Tool', '빌드 도구(Build Tool)', '빌드'],
    answerLabel: '빌드 도구',
    explanation:
      '개발 도구는 구현 도구(코딩·디버깅), 테스트 도구(기능 검증), 형상 관리 도구(버전·변경 이력 관리), 빌드 도구(컴파일·패키징)의 4가지로 분류한다. Ant, Maven, Gradle이 빌드 도구의 예다.',
  },
  {
    num: 7,
    question: '다음 설명에 해당하는 형상 관리 도구의 방식을 쓰시오.',
    code: `중앙에 버전 관리 서버 1대를 두고 개발자들이 접속하여 작업하는 방식으로,
서버에 장애가 발생하면 전체 작업이 중단된다. 대표 도구로
SVN(Subversion), CVS가 있다.`,
    answers: ['클라이언트-서버 방식', '클라이언트 서버 방식', '클라이언트·서버 방식', '클라이언트/서버 방식', 'Client-Server 방식', '클라이언트서버방식', 'Client/Server'],
    answerLabel: '클라이언트-서버 방식',
    explanation:
      '형상 관리 도구는 공유 폴더 방식(RCS·SCCS), 클라이언트-서버 방식(SVN·CVS), 분산 저장소 방식(Git·Mercurial)의 3가지로 나뉜다. "중앙 서버 1대 + 서버 장애 시 중단"이 클라이언트-서버 방식의 키워드다.',
  },
  {
    num: 8,
    question:
      '형상 관리 도구인 RCS와 SCCS는 매일 개발 완료 파일을 약속된 위치에 복사하고 담당자가 검증하는 방식으로 동작한다. 이 두 도구가 속한 형상 관리 도구의 방식을 쓰시오.',
    answers: ['공유 폴더 방식', '공유폴더 방식', '공유폴더방식', '공유 폴더', 'Shared Folder 방식'],
    answerLabel: '공유 폴더 방식',
    explanation:
      '공유 폴더 방식은 매일 개발 완료 파일을 공유 폴더에 복사하고 담당자가 파일을 검증하는 초기 방식으로, 대표 도구는 RCS와 SCCS다.',
  },
  {
    num: 9,
    question:
      '보기의 형상 관리 도구 중, 원격 저장소와 개발자별 로컬 저장소에 버전 이력을 함께 보관하여 오프라인 작업이 가능한 분산 저장소 방식의 도구를 하나 골라 쓰시오.',
    code: `[보기]  RCS,  SVN,  CVS,  Git,  SCCS`,
    answers: ['Git', 'git', '깃'],
    answerLabel: 'Git',
    explanation:
      'Git은 분산 저장소 방식의 대표 도구다. RCS·SCCS는 공유 폴더 방식, SVN·CVS는 클라이언트-서버 방식이므로 "Git = 분산"을 확실히 구분해 두자.',
  },
  {
    num: 10,
    question: 'Git의 작업 흐름에서 괄호 ㉠~㉢에 들어갈 명령어를 순서대로 쓰시오.',
    code: `작업 디렉터리 --( ㉠ )--> 스테이징 영역 --( ㉡ )--> 로컬 저장소
로컬 저장소  --( ㉢ )--> 원격 저장소`,
    answers: [
      '㉠ add, ㉡ commit, ㉢ push',
      'add, commit, push',
      'add commit push',
      '㉠add㉡commit㉢push',
      'git add, git commit, git push',
      'add → commit → push',
    ],
    answerLabel: '㉠ add, ㉡ commit, ㉢ push',
    explanation:
      '변경 파일을 스테이징 영역에 올리는 것이 add, 스테이징된 내용을 로컬 저장소에 확정 기록하는 것이 commit, 로컬 커밋을 원격 저장소에 업로드하는 것이 push다.',
  },
  {
    num: 11,
    question: '다음 설명에 해당하는 Git 명령어를 쓰시오.',
    code: `다른 브랜치에서 작업한 변경 내용을 가져와
현재 브랜치에 합치는(병합하는) 명령어`,
    answers: ['merge', 'git merge', '머지', 'merge(병합)'],
    answerLabel: 'merge',
    explanation:
      'merge는 다른 브랜치의 변경 내용을 현재 브랜치에 병합한다. 원격의 변경을 가져와 병합까지 수행하는 pull(fetch + merge)과 구분해 두자.',
  },
  {
    num: 12,
    question:
      '협업 도구는 유형에 따라 프로젝트·이슈 관리(JIRA), 문서 공유(위키), 메신저(Slack) 등으로 나뉜다. 이 중 설계 문서·회의록 등 지식을 작성하고 공동 편집하는 문서 공유(위키) 유형의 대표 도구를 보기에서 골라 쓰시오.',
    code: `[보기]  JIRA,  Confluence,  Slack,  Zoom,  Figma`,
    answers: ['Confluence', 'confluence', '컨플루언스'],
    answerLabel: 'Confluence',
    explanation:
      '이슈 관리는 JIRA, 문서 공유(위키)는 Confluence, 메신저는 Slack, 화상 회의는 Zoom, 디자인 협업은 Figma다. 도구 이름과 유형을 짝지어 암기하자.',
  },
  {
    num: 13,
    question: '다음 설명에 해당하는 서버 용어를 영문 약어로 쓰시오.',
    code: `정적 콘텐츠만 처리하는 웹 서버와 달리, DB 연동·비즈니스 로직 수행 등
동적(Dynamic) 콘텐츠를 처리하는 미들웨어 서버.
대표 제품으로 Tomcat, JEUS, WebLogic이 있다.`,
    answers: ['WAS', 'was', '웹 애플리케이션 서버', 'Web Application Server', 'WAS(Web Application Server)', '웹 어플리케이션 서버'],
    answerLabel: 'WAS (Web Application Server)',
    explanation:
      'WAS(Web Application Server)는 동적 콘텐츠를 처리하는 미들웨어다. 정적 콘텐츠를 담당하는 웹 서버(Apache, Nginx)와의 역할 구분이 최단골이다.',
  },
  {
    num: 14,
    question: '보기의 제품 중 WAS(웹 애플리케이션 서버)에 해당하는 것을 모두 골라 쓰시오.',
    code: `[보기]  Apache HTTP Server,  Tomcat,  Nginx,  JEUS`,
    answers: ['Tomcat, JEUS', 'Tomcat JEUS', 'JEUS, Tomcat', '톰캣, 제우스', 'Tomcat과 JEUS', '제우스, 톰캣'],
    answerLabel: 'Tomcat, JEUS',
    explanation:
      'Tomcat과 JEUS는 동적 콘텐츠를 처리하는 WAS이고, Apache HTTP Server와 Nginx는 정적 콘텐츠를 처리하는 웹 서버다. Tomcat을 웹 서버로 착각하지 않도록 주의한다.',
  },
  {
    num: 15,
    question: '웹 서버와 WAS의 역할에 대한 설명에서 괄호 ①, ②에 들어갈 용어를 순서대로 쓰시오.',
    code: `웹 서버(Apache, Nginx)는 HTML·CSS·이미지 같은 ( ① ) 콘텐츠를 처리하고,
WAS(Tomcat, JEUS)는 DB 연동·비즈니스 로직 수행 등 ( ② ) 콘텐츠를 처리한다.`,
    answers: ['① 정적, ② 동적', '정적, 동적', '정적 동적', '①정적②동적', '정적동적'],
    answerLabel: '① 정적, ② 동적',
    explanation:
      '요청 처리 흐름은 클라이언트 → 웹 서버(정적) → WAS(동적) → DB 서버 순이다. 정적 요청은 웹 서버가 바로 응답하고, 동적 요청만 WAS로 위임된다.',
  },
  {
    num: 16,
    question: '다음 설명에 해당하는 빌드 도구의 이름을 쓰시오.',
    code: `XML 대신 Groovy 기반 스크립트(build.gradle)로 빌드를 기술하며,
Ant의 유연함과 Maven의 의존성 관리를 결합하였다. 증분 빌드와 캐시로
속도가 빠르고, 안드로이드(Android)의 공식 빌드 도구로 사용된다.`,
    answers: ['Gradle', 'gradle', '그래들', '그레이들', 'Gradle(그래들)'],
    answerLabel: 'Gradle',
    explanation:
      '"Groovy 기반 스크립트", "안드로이드 공식 빌드 도구"가 Gradle의 핵심 키워드다. XML(build.xml) 기반의 절차적 도구인 Ant, pom.xml 기반의 Maven과 구분한다.',
  },
  {
    num: 17,
    question: '다음 설명에 해당하는 빌드 도구의 이름을 쓰시오.',
    code: `pom.xml에 정의된 정보로 정해진 빌드 라이프사이클
(compile → test → package → install → deploy)에 따라 빌드하며,
라이브러리 의존성(Dependency)을 자동으로 관리한다.`,
    answers: ['Maven', 'maven', '메이븐', 'Maven(메이븐)'],
    answerLabel: 'Maven',
    explanation:
      '"pom.xml", "빌드 라이프사이클", "의존성 자동 관리"가 Maven의 핵심 키워드다. Groovy 스크립트를 쓰는 Gradle과 정의 문장이 서로 바뀌어 출제되니 주의한다.',
  },
  {
    num: 18,
    question: '다음 설명에 해당하는 도구의 이름을 쓰시오.',
    code: `자바 기반의 오픈 소스 CI(Continuous Integration, 지속적 통합) 도구로,
형상 관리 저장소에 커밋이 발생할 때마다 자동으로 빌드와 테스트를
수행하고 결과를 통보한다. 웹 기반으로 관리하며 플러그인으로
Git·SVN 등과 연동된다.`,
    answers: ['Jenkins', 'jenkins', '젠킨스', 'Jenkins(젠킨스)'],
    answerLabel: 'Jenkins (젠킨스)',
    explanation:
      'Jenkins는 커밋 → 빌드 → 테스트 → 배포로 이어지는 빌드 자동화(CI) 흐름의 중심 도구다. "자바 기반 오픈 소스 CI 도구"라는 정의 문장이 그대로 출제된다.',
  },
  {
    num: 19,
    question:
      '개발 언어 선정 기준 5가지(적정성, 효율성, 이식성, 친밀성, 범용성) 중 다음 설명에 해당하는 기준을 쓰시오.',
    code: `다른 개발 사례가 많고 여러 분야에서 널리 사용되고 있는 언어인지를
평가하는 기준`,
    answers: ['범용성', '범용', 'Generality', '범용성(Generality)'],
    answerLabel: '범용성',
    explanation:
      '개발 언어 선정 기준 5가지는 적정성·효율성·이식성·친밀성·범용성(적효이친범)이다. "개발 사례가 많고 널리 사용"은 범용성, "다양한 플랫폼에 적용"은 이식성, "개발자가 이미 알고 있는가"는 친밀성이다.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 개발 환경 용어를 영문 약어로 쓰시오.',
    code: `코딩(구현) · 컴파일 · 디버깅 · 배포 등 개발에 필요한 기능을
하나의 프로그램 안에서 모두 처리할 수 있게 해 주는 통합 개발 환경.
Eclipse, IntelliJ IDEA, Visual Studio Code가 대표적이다.`,
    answers: ['IDE', 'ide', '통합 개발 환경', 'Integrated Development Environment', 'IDE(통합 개발 환경)', '통합개발환경'],
    answerLabel: 'IDE (Integrated Development Environment, 통합 개발 환경)',
    explanation:
      'IDE는 코딩·컴파일·디버깅·배포를 한 프로그램에서 처리하는 구현 도구다. 개발 도구 분류 4가지 중 "구현 도구"에 속한다는 점도 함께 기억하자.',
  },
]

export default defineComponent({
  name: 'VariantDevEnvironmentPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 개발환경 구축</h1>
          <p>실기 기출 유형을 변형한 20문제입니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>

        {QUESTIONS.map((q) => (
          <QuizInput {...q} key={q.num} />
        ))}

        <footer>기출 변형문제 — 개발환경 구축 · 2026-09</footer>
      </div>
    )
  },
})
