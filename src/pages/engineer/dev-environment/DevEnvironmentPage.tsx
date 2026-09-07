import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './dev-environment.css'

export default defineComponent({
  name: 'DevEnvironmentPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>개발환경 구축</h1>
          <p>정보처리기사 실기 대비 학습 문서. 개발 도구 분류와 개발 언어 선정 기준 → 하드웨어 개발 환경(웹 서버·WAS·DB 서버) →
          소프트웨어 개발 환경(운영체제·JVM·IDE·협업 도구) → 형상 관리 개념과 절차 → 형상 관리 도구(Git·SVN) →
          빌드 도구(Ant·Maven·Gradle)와 CI(Jenkins) 순서로, 실기 단골 개념을 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 요청·데이터의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>개발환경 구축 개요 — 도구 분류와 언어 선정 기준</a></li>
            <li><a href="#hardware" onClick={(e) => scrollToId(e, 'hardware')}>하드웨어 개발 환경 — 웹 서버 · WAS · DB 서버</a></li>
            <li><a href="#software" onClick={(e) => scrollToId(e, 'software')}>소프트웨어 개발 환경 — OS · JVM · IDE · 협업 도구</a></li>
            <li><a href="#scm" onClick={(e) => scrollToId(e, 'scm')}>형상 관리 — 개념과 절차 4단계</a></li>
            <li><a href="#scmtool" onClick={(e) => scrollToId(e, 'scmtool')}>형상 관리 도구 — 방식 3가지 · Git · SVN</a></li>
            <li><a href="#build" onClick={(e) => scrollToId(e, 'build')}>빌드 도구 — Ant · Maven · Gradle · Jenkins</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 개발환경 구축 개요 ===================== */}
        <section id="overview">
          <h2>1. 개발환경 구축 개요</h2>
          <p class="sub">개발환경 구축이란 응용 소프트웨어 개발을 위해 개발 프로젝트의 목적과 특성에 맞는 하드웨어·소프트웨어 도구를 선정하고 설치하는 활동이다. 도구 분류 4가지와 개발 언어 선정 기준 5가지가 실기 단골이다.</p>

          <h3>1-1. 개발 도구의 분류 4가지 (실기 단골)</h3>
          <p>개발에 사용되는 소프트웨어 도구는 목적에 따라 네 가지로 분류한다.
          "설명 → 도구 분류 이름 쓰기" 또는 "도구 예 → 분류 연결" 형태로 출제된다.</p>
          <table>
            <tr><th>분류</th><th>정의</th><th>예</th></tr>
            <tr>
              <td><strong>구현 도구</strong></td>
              <td>프로그램을 직접 <strong>작성(코딩)·디버깅</strong>하는 데 사용하는 도구</td>
              <td>Eclipse, IntelliJ IDEA, Visual Studio Code</td>
            </tr>
            <tr>
              <td><strong>테스트 도구</strong></td>
              <td>코드의 <strong>기능 검증과 품질 향상</strong>을 위해 테스트를 계획·수행·분석하는 도구</td>
              <td>JUnit, xUnit, Selenium, SpotBugs</td>
            </tr>
            <tr>
              <td><strong>형상 관리 도구</strong></td>
              <td>산출물(코드·문서)의 <strong>버전과 변경 이력을 관리</strong>하는 도구</td>
              <td>Git, SVN, CVS</td>
            </tr>
            <tr>
              <td><strong>빌드 도구</strong></td>
              <td>작성한 코드를 <strong>컴파일·패키징</strong>하고 라이브러리 의존성을 관리하여 실행 가능한 산출물을 만드는 도구</td>
              <td>Ant, Maven, Gradle, Jenkins(CI)</td>
            </tr>
          </table>

          <h3>1-2. 개발 언어 선정 기준 5가지 (실기 단골)</h3>
          <p>개발 언어를 고를 때는 아래 다섯 가지 기준을 고려한다. 첫 글자를 따서
          <strong> 적 · 효 · 이 · 친 · 범</strong>으로 암기하면 좋다.</p>
          <table>
            <tr><th>기준</th><th>의미</th></tr>
            <tr><td><strong>적정성</strong></td><td>개발하려는 시스템의 <strong>목적·특성에 적합</strong>한 언어인가</td></tr>
            <tr><td><strong>효율성</strong></td><td>프로그래밍의 <strong>생산성(효율성)</strong>이 좋은 언어인가</td></tr>
            <tr><td><strong>이식성</strong></td><td>다양한 시스템·플랫폼(하드웨어·OS)에 <strong>옮겨서 적용</strong>할 수 있는가</td></tr>
            <tr><td><strong>친밀성</strong></td><td>개발자들이 그 언어를 <strong>이미 알고 있거나 쉽게 익힐 수 있는가</strong></td></tr>
            <tr><td><strong>범용성</strong></td><td>다른 개발 사례가 많고 <strong>여러 분야에서 널리 사용</strong>되는가</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            괄호 채우기로 자주 나오는 것은 <strong>이식성</strong>("다양한 플랫폼에서 운용 가능")과
            <strong>친밀성</strong>("개발자가 이해하고 사용할 수 있는 언어")이다. 정의 문장을 정확히 구분해 두자.
          </div>
        </section>

        {/* ===================== 2. 하드웨어 개발 환경 ===================== */}
        <section id="hardware">
          <h2>2. 하드웨어 개발 환경</h2>
          <p class="sub">하드웨어 환경은 사용자와의 인터페이스인 클라이언트, 그리고 서비스를 제공하는 서버로 나뉜다. 서버 중에서도 웹 서버와 WAS의 역할 구분이 실기 최단골이다.</p>

          <h3>2-1. 클라이언트와 서버</h3>
          <table>
            <tr><th>구분</th><th>설명</th><th>예</th></tr>
            <tr>
              <td><strong>클라이언트</strong></td>
              <td>서버에 서비스를 <strong>요청</strong>하고 결과를 화면에 보여 주는 사용자 측 장비·프로그램</td>
              <td>PC(웹 브라우저), 스마트폰 앱</td>
            </tr>
            <tr>
              <td><strong>서버</strong></td>
              <td>클라이언트의 요청을 받아 <strong>처리 결과(서비스)를 제공</strong>하는 장비. 역할에 따라 웹 서버 · WAS · DB 서버 · 파일 서버로 나뉜다</td>
              <td>웹 서버, WAS, DB 서버, 파일 서버</td>
            </tr>
          </table>

          <h3>2-2. 서버의 종류와 역할 (WAS 구분 — 최단골)</h3>
          <table>
            <tr><th>서버</th><th>역할</th><th>대표 제품</th></tr>
            <tr>
              <td><strong>웹 서버 (Web Server)</strong></td>
              <td>HTTP 요청을 받아 HTML, CSS, 이미지 같은 <strong>정적(Static) 콘텐츠</strong>를 제공. 동적 요청은 WAS에 넘긴다</td>
              <td><strong>Apache HTTP Server, Nginx</strong>, IIS</td>
            </tr>
            <tr>
              <td><strong>웹 애플리케이션 서버 (WAS)</strong></td>
              <td>DB 연동, 비즈니스 로직 수행 등 <strong>동적(Dynamic) 콘텐츠</strong>를 처리하는 미들웨어. Web Application Server</td>
              <td><strong>Tomcat, JEUS, WebLogic</strong>, WebSphere, JBoss</td>
            </tr>
            <tr>
              <td><strong>DB 서버</strong></td>
              <td>데이터의 <strong>저장·조회·관리</strong>를 담당하는 DBMS 운영 서버</td>
              <td>Oracle, MySQL, MS-SQL</td>
            </tr>
            <tr>
              <td><strong>파일 서버</strong></td>
              <td>서비스에 필요한 <strong>파일(이미지·문서 등)을 저장·제공</strong>하는 서버</td>
              <td>NAS, AWS S3</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            "정적 = 웹 서버(Apache · Nginx)", "동적 = WAS(Tomcat · JEUS · WebLogic)" 구분은 실기에서
            제품 이름을 고르게 하는 형태로 반복 출제된다. <strong>Tomcat은 웹 서버가 아니라 WAS</strong>라는 점에 주의.
          </div>

          <h3>2-3. 3계층 요청 처리 흐름</h3>
          <p>사용자의 요청은 웹 서버 → WAS → DB 서버로 전달되고, 처리 결과가 역순으로 돌아온다.
          정적 콘텐츠는 웹 서버가 바로 응답하고, 동적 요청만 WAS로 위임된다.</p>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 210">
              <rect class="box" x="20" y="90" width="140" height="64" />
              <text x="90" y="117" text-anchor="middle" class="strong">클라이언트</text>
              <text x="90" y="140" text-anchor="middle" class="small">웹 브라우저</text>

              <rect class="boxsoft" x="260" y="90" width="140" height="64" />
              <text x="330" y="117" text-anchor="middle" class="strong">웹 서버</text>
              <text x="330" y="140" text-anchor="middle" class="small">Apache · Nginx</text>

              <rect class="boxdark" x="500" y="90" width="140" height="64" />
              <text x="570" y="117" text-anchor="middle" class="strong">WAS</text>
              <text x="570" y="140" text-anchor="middle" class="small">Tomcat · JEUS</text>

              <rect class="boxsoft" x="740" y="90" width="140" height="64" />
              <text x="810" y="117" text-anchor="middle" class="strong">DB 서버</text>
              <text x="810" y="140" text-anchor="middle" class="small">Oracle · MySQL</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="160" y1="112" x2="252" y2="112" />
                <text x="210" y="78" text-anchor="middle" class="small">① HTTP 요청</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="400" y1="112" x2="492" y2="112" />
                <text x="450" y="78" text-anchor="middle" class="small">② 동적 요청 위임</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="640" y1="112" x2="732" y2="112" />
                <text x="690" y="78" text-anchor="middle" class="small">③ SQL 질의</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="740" y1="140" x2="648" y2="140" />
                <text x="690" y="180" text-anchor="middle" class="small">④ 결과 집합</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="500" y1="140" x2="408" y2="140" />
                <text x="450" y="180" text-anchor="middle" class="small">⑤ 동적 페이지</text>
              </g>
              <g class="msg" data-step="6">
                <line class="arrow ret" x1="260" y1="140" x2="168" y2="140" />
                <text x="210" y="180" text-anchor="middle" class="small">⑥ HTTP 응답</text>
              </g>
            </svg>
            <figcaption>도면 1. 웹 서버 → WAS → DB 서버 3계층 요청 처리 흐름 (실선 = 요청, 점선 = 응답)</figcaption>
          </figure>
        </section>

        {/* ===================== 3. 소프트웨어 개발 환경 ===================== */}
        <section id="software">
          <h2>3. 소프트웨어 개발 환경</h2>
          <p class="sub">하드웨어 위에 올라가는 소프트웨어 환경 — 운영체제, JVM, IDE, 요구사항 관리 도구, 협업 도구를 정리한다. 협업 도구의 유형별 구분(JIRA · Confluence · Slack)이 자주 나온다.</p>

          <h3>3-1. 시스템 소프트웨어</h3>
          <table>
            <tr><th>구분</th><th>설명</th><th>예</th></tr>
            <tr>
              <td><strong>운영체제 (OS)</strong></td>
              <td>서버·클라이언트 하드웨어를 운영하는 기반 소프트웨어. 신뢰도, 성능, 기술 지원, 주변 기기 호환성, 구축 비용을 고려해 선정한다</td>
              <td>Windows, Linux, UNIX, macOS</td>
            </tr>
            <tr>
              <td><strong>JVM (Java Virtual Machine)</strong></td>
              <td>자바 바이트코드를 실행하는 <strong>자바 가상 머신</strong>. 덕분에 자바 프로그램은 OS에 관계없이 동작한다(이식성). 팀 내에서는 <strong>JVM 버전을 통일</strong>해야 한다</td>
              <td>Oracle JDK, OpenJDK</td>
            </tr>
          </table>

          <h3>3-2. 개발 도구 — IDE</h3>
          <p>IDE(Integrated Development Environment, 통합 개발 환경)는 코딩 · 컴파일 · 디버깅 · 배포를
          한 프로그램 안에서 처리할 수 있게 해 주는 구현 도구다.</p>
          <table>
            <tr><th>IDE</th><th>특징</th></tr>
            <tr><td><strong>Eclipse(이클립스)</strong></td><td>자바 중심의 오픈 소스 IDE. 플러그인으로 다양한 언어 확장 가능</td></tr>
            <tr><td><strong>IntelliJ IDEA</strong></td><td>JetBrains의 자바/코틀린 IDE. 강력한 코드 분석·리팩터링 기능</td></tr>
            <tr><td><strong>Visual Studio Code</strong></td><td>Microsoft의 경량 코드 편집기. 확장(Extension) 생태계가 풍부</td></tr>
          </table>

          <h3>3-3. 요구사항 관리 도구와 협업 도구 (유형별 표)</h3>
          <p>요구사항 관리 도구는 요구사항의 수집·분석·추적을 지원하는 도구(JIRA, Redmine, Trello 등)로,
          아래 협업 도구의 "프로젝트 관리" 유형과 겹친다.</p>
          <table>
            <tr><th>유형</th><th>용도</th><th>대표 도구</th></tr>
            <tr><td><strong>프로젝트 · 이슈 관리</strong></td><td>작업(이슈) 등록, 진행 상태 추적, 요구사항 관리</td><td><strong>JIRA</strong>, Redmine, Trello</td></tr>
            <tr><td><strong>문서 공유 (위키)</strong></td><td>설계 문서·회의록 등 지식을 작성하고 공동 편집</td><td><strong>Confluence</strong>, Notion</td></tr>
            <tr><td><strong>메신저 (커뮤니케이션)</strong></td><td>팀원 간 실시간 대화, 채널 기반 소통, 알림 연동</td><td><strong>Slack</strong>, Microsoft Teams</td></tr>
            <tr><td><strong>화상 회의</strong></td><td>원격 회의, 화면 공유</td><td>Zoom, Google Meet</td></tr>
            <tr><td><strong>디자인 협업</strong></td><td>UI 디자인 공동 작업, 프로토타입 공유</td><td>Figma, Zeplin</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "이슈 관리는 <strong>JIRA</strong>, 문서 위키는 <strong>Confluence</strong>, 메신저는 <strong>Slack</strong>"처럼
            도구 이름과 유형을 짝지어 두면 보기 고르기 문제에 바로 대응할 수 있다.
          </div>
        </section>

        {/* ===================== 4. 형상 관리 ===================== */}
        <section id="scm">
          <h2>4. 형상 관리 (SCM)</h2>
          <p class="sub">형상 관리(Software Configuration Management)는 개발 과정에서 발생하는 산출물의 변경 사항을 관리하는 활동이다. 절차 4단계의 순서와 각 정의는 실기 최단골 — 괄호 채우기로 반복 출제된다.</p>

          <h3>4-1. 형상 관리의 개념 (단골)</h3>
          <p>형상 관리는 소프트웨어 개발 전체 과정에서 발생하는 <strong>산출물(형상)의 변경 사항을 버전별로 관리</strong>하여
          소프트웨어의 가시성·추적성·품질을 확보하는 활동이다. 핵심 키워드는 <strong>"변경 관리"</strong> —
          "소프트웨어의 변경 사항을 관리하기 위한 일련의 활동"이라는 정의 문장이 그대로 출제된다.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            형상 관리는 <strong>비용 절감이나 일정 관리가 목적이 아니다</strong>. 오답 보기로
            "개발 비용을 관리한다", "개발 일정을 단축한다"가 자주 등장한다. 목적은 <strong>변경 통제와 무결성 확보</strong>다.
          </div>

          <h3>4-2. 형상 관리 절차 4단계 (실기 최단골)</h3>
          <p>순서까지 정확히 암기해야 한다. <strong>식별 → 통제 → 감사 → 기록</strong>.</p>
          <table>
            <tr><th>순서</th><th>단계</th><th>정의</th></tr>
            <tr>
              <td>①</td><td><strong>형상 식별</strong></td>
              <td>관리 대상(형상 항목)을 <strong>구분하고 식별자·번호를 부여</strong>하여 관리 목록을 정하는 활동</td>
            </tr>
            <tr>
              <td>②</td><td><strong>형상 통제</strong></td>
              <td>형상에 대한 <strong>변경 요청을 검토·승인</strong>하여 현재 베이스라인에 반영될 수 있도록 통제하는 활동
              (형상 통제 위원회 CCB의 승인)</td>
            </tr>
            <tr>
              <td>③</td><td><strong>형상 감사</strong></td>
              <td>베이스라인의 무결성을 평가 — 변경이 <strong>승인대로 이루어졌는지 검증·확인</strong>하는 활동</td>
            </tr>
            <tr>
              <td>④</td><td><strong>형상 기록 (상태 보고)</strong></td>
              <td>형상 식별·통제·감사 작업의 결과와 이력을 <strong>기록하고 보고</strong>하는 활동</td>
            </tr>
          </table>

          <h3>4-3. 형상 관리 항목과 베이스라인</h3>
          <p><strong>형상 관리 항목</strong>은 소스 코드만이 아니라 개발 전 과정의 산출물이다.</p>
          <ul>
            <li>프로젝트 요구 분석서, 요구사항 명세서</li>
            <li>설계서 · 소스 코드 · 실행 파일(오브젝트)</li>
            <li>테스트 계획서 · 테스트 결과서, 사용자 지침서(매뉴얼)</li>
          </ul>
          <div class="box">
            <span class="tag-line">용어</span><br/>
            <strong>베이스라인(Baseline, 기준선)</strong>: 공식적으로 검토·합의된 시점의 산출물 집합으로,
            이후의 개발을 위한 <strong>변경 통제의 기준</strong>이 된다. 베이스라인 이후의 변경은 반드시
            형상 통제 절차(승인)를 거쳐야 한다.
          </div>
        </section>

        {/* ===================== 5. 형상 관리 도구 ===================== */}
        <section id="scmtool">
          <h2>5. 형상 관리 도구</h2>
          <p class="sub">형상 관리 도구는 저장소를 두는 방식에 따라 공유 폴더 · 클라이언트-서버 · 분산 저장소의 3가지로 나뉜다. "Git = 분산 저장소" 구분과 Git 명령어 표가 실기 최단골이다.</p>

          <h3>5-1. 형상 관리 도구의 방식 3가지 (최단골 표)</h3>
          <table>
            <tr><th>방식</th><th>설명</th><th>대표 도구</th></tr>
            <tr>
              <td><strong>공유 폴더 방식</strong></td>
              <td>매일 개발 완료 파일을 약속된 <strong>공유 폴더에 복사</strong>하는 방식. 담당자가 파일을 검증한다</td>
              <td><strong>RCS, SCCS</strong></td>
            </tr>
            <tr>
              <td><strong>클라이언트 · 서버 방식</strong></td>
              <td><strong>중앙에 버전 관리 서버 1대</strong>를 두고 개발자들이 접속해 작업하는 방식. 서버 장애 시 전체 작업이 중단된다</td>
              <td><strong>SVN(Subversion), CVS</strong></td>
            </tr>
            <tr>
              <td><strong>분산 저장소 방식</strong></td>
              <td><strong>원격 저장소와 개발자별 로컬 저장소</strong>에 이력을 함께 보관하는 방식. 오프라인 작업이 가능하고 원격 저장소 장애에도 로컬로 복구할 수 있다</td>
              <td><strong>Git</strong>, Mercurial</td>
            </tr>
          </table>

          <h3>5-2. Git 기본 개념</h3>
          <p>Git은 분산 저장소 방식의 형상 관리 도구다. 개발자 PC의 <strong>로컬 저장소</strong>와
          서버(GitHub, GitLab 등)의 <strong>원격 저장소</strong>가 각각 전체 이력을 보관하며,
          작업 디렉터리의 변경 내용은 <strong>스테이징 영역(Staging Area)</strong>에 올린(add) 뒤
          로컬 저장소에 확정(commit)하고, 원격 저장소로 밀어 올린다(push).</p>
          <pre>{`작업 디렉터리 --(git add)--> 스테이징 영역 --(git commit)--> 로컬 저장소
로컬 저장소  --(git push)--> 원격 저장소
원격 저장소  --(git pull)--> 로컬 저장소 (가져오기 + 병합)`}</pre>

          <h3>5-3. Git 주요 명령어 (단골)</h3>
          <table>
            <tr><th>명령어</th><th>설명</th></tr>
            <tr><td><code>git add</code></td><td>변경된 파일을 <strong>스테이징 영역에 추가</strong>한다</td></tr>
            <tr><td><code>git commit</code></td><td>스테이징된 변경 내용을 <strong>로컬 저장소에 확정 기록</strong>한다</td></tr>
            <tr><td><code>git push</code></td><td>로컬 저장소의 커밋을 <strong>원격 저장소에 업로드</strong>한다</td></tr>
            <tr><td><code>git pull</code></td><td>원격 저장소의 변경 내용을 <strong>가져와(fetch) 로컬에 병합(merge)</strong>한다</td></tr>
            <tr><td><code>git clone</code></td><td>원격 저장소 전체를 <strong>로컬로 복제</strong>한다</td></tr>
            <tr><td><code>git branch</code></td><td>독립된 작업 흐름인 <strong>브랜치를 생성·조회·삭제</strong>한다</td></tr>
            <tr><td><code>git merge</code></td><td>다른 브랜치의 변경 내용을 <strong>현재 브랜치에 병합</strong>한다</td></tr>
            <tr><td><code>git checkout</code></td><td>다른 브랜치로 <strong>전환</strong>하거나 특정 시점의 파일을 꺼낸다</td></tr>
          </table>

          <h3>5-4. SVN 주요 명령어 (간단)</h3>
          <table>
            <tr><th>명령어 · 용어</th><th>설명</th></tr>
            <tr><td><code>checkout</code></td><td>중앙 저장소에서 작업 복사본을 <strong>처음 내려받는다</strong></td></tr>
            <tr><td><code>commit</code></td><td>수정한 내용을 <strong>중앙 저장소에 반영</strong>한다</td></tr>
            <tr><td><code>update</code></td><td>중앙 저장소의 최신 변경 내용을 <strong>작업 복사본에 반영</strong>한다</td></tr>
            <tr><td><code>trunk</code></td><td>개발의 중심이 되는 <strong>주 개발 라인</strong></td></tr>
            <tr><td><code>branch</code></td><td>trunk에서 갈라져 나온 <strong>독립 개발 라인</strong></td></tr>
            <tr><td><code>tag</code></td><td>특정 시점(릴리스 등)에 붙이는 <strong>이름표(스냅숏)</strong></td></tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            같은 <code>commit</code>이라도 <strong>SVN은 중앙 서버에 바로 반영</strong>되고,
            <strong>Git은 로컬 저장소에만 기록</strong>된 뒤 <code>push</code>로 원격에 올라간다. 방식 차이를 묻는 포인트다.
          </div>
        </section>

        {/* ===================== 6. 빌드 도구 ===================== */}
        <section id="build">
          <h2>6. 빌드 도구</h2>
          <p class="sub">빌드는 소스 코드를 컴파일·패키징하여 실행 가능한 파일로 만드는 과정이다. Ant · Maven · Gradle의 특징 비교(특히 Gradle = Groovy)와 CI 도구 Jenkins가 실기 단골이다.</p>

          <h3>6-1. 빌드의 개념</h3>
          <p><strong>빌드(Build)</strong>란 소스 코드 파일을 <strong>컴파일</strong>하고 필요한 라이브러리와 함께
          <strong>패키징</strong>하여 <strong>실행 가능한 소프트웨어 산출물(실행 파일, JAR/WAR 등)</strong>로 만드는 과정이다.
          빌드 도구는 이 과정(컴파일 → 테스트 → 패키징 → 배포 준비)을 자동화한다.</p>

          <h3>6-2. Ant · Maven · Gradle 비교 (단골 표)</h3>
          <table>
            <tr><th>도구</th><th>스크립트</th><th>특징</th></tr>
            <tr>
              <td><strong>Ant</strong></td>
              <td>XML (build.xml)</td>
              <td>가장 오래된 자바 빌드 도구. 빌드 순서를 개발자가 직접 기술하는 <strong>절차적</strong> 방식.
              정해진 라이프사이클과 의존성 관리 기능이 없다</td>
            </tr>
            <tr>
              <td><strong>Maven</strong></td>
              <td>XML (<strong>pom.xml</strong>)</td>
              <td>정해진 <strong>빌드 라이프사이클</strong>(compile → test → package → install → deploy)과 규약 기반 구조 제공.
              <strong>의존성(Dependency) 자동 관리</strong>가 큰 특징</td>
            </tr>
            <tr>
              <td><strong>Gradle</strong></td>
              <td><strong>Groovy</strong> 기반 스크립트 (build.gradle)</td>
              <td>Ant의 유연함 + Maven의 의존성 관리를 결합. XML 대신 <strong>Groovy 스크립트</strong>로 빌드를 기술하며,
              증분 빌드·캐시로 속도가 빠르다. <strong>안드로이드(Android) 공식 빌드 도구</strong></td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "Groovy 기반 스크립트를 사용하는 빌드 도구" → <strong>Gradle</strong>,
            "pom.xml로 의존성을 관리하는 빌드 도구" → <strong>Maven</strong>. 두 정의 문장의 구분이 그대로 출제된다.
          </div>

          <h3>6-3. CI 도구 — Jenkins (단골)</h3>
          <p><strong>Jenkins(젠킨스)</strong>는 자바 기반의 오픈 소스 <strong>CI(Continuous Integration, 지속적 통합) 도구</strong>다.
          개발자가 형상 관리 저장소에 커밋할 때마다 <strong>자동으로 빌드와 테스트를 수행</strong>하고 결과를 알려 주어,
          통합 과정에서 생기는 오류를 조기에 발견하게 한다. 웹 기반으로 관리하며 플러그인으로 SVN·Git 등과 연동된다.</p>

          <h3>6-4. 빌드 자동화 흐름</h3>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 235">
              <rect class="box" x="20" y="100" width="140" height="64" />
              <text x="90" y="127" text-anchor="middle" class="strong">개발자 PC</text>
              <text x="90" y="150" text-anchor="middle" class="small">코드 작성</text>

              <rect class="boxsoft" x="260" y="100" width="140" height="64" />
              <text x="330" y="127" text-anchor="middle" class="strong">원격 저장소</text>
              <text x="330" y="150" text-anchor="middle" class="small">Git · SVN</text>

              <rect class="boxdark" x="500" y="100" width="140" height="64" />
              <text x="570" y="127" text-anchor="middle" class="strong">CI 서버</text>
              <text x="570" y="150" text-anchor="middle" class="small">Jenkins</text>

              <rect class="boxsoft" x="740" y="100" width="140" height="64" />
              <text x="810" y="127" text-anchor="middle" class="strong">운영 서버</text>
              <text x="810" y="150" text-anchor="middle" class="small">서비스 반영</text>

              <line class="life" x1="560" y1="164" x2="560" y2="196" />
              <line class="life" x1="100" y1="196" x2="100" y2="164" />

              <g class="msg" data-step="1">
                <line class="arrow" x1="160" y1="132" x2="252" y2="132" />
                <text x="210" y="90" text-anchor="middle" class="small">① 커밋 · 푸시</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="400" y1="132" x2="492" y2="132" />
                <text x="450" y="90" text-anchor="middle" class="small">② 변경 감지</text>
              </g>
              <g class="msg" data-step="3">
                <path class="arrow" d="M 515 100 C 530 42, 610 42, 625 100" />
                <text x="570" y="48" text-anchor="middle" class="small">③ 빌드 · 테스트</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="640" y1="132" x2="732" y2="132" />
                <text x="690" y="90" text-anchor="middle" class="small">④ 배포</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="540" y1="196" x2="115" y2="196" />
                <text x="330" y="220" text-anchor="middle" class="small">⑤ 결과 통보 (성공 · 실패)</text>
              </g>
            </svg>
            <figcaption>도면 2. 빌드 자동화 흐름 — 커밋 → 빌드 → 테스트 → 배포 (CI)</figcaption>
          </figure>
        </section>

        {/* ===================== 7. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 형식(용어 쓰기 · 괄호 채우기 · 보기 고르기)으로 구성한 10문항. 먼저 풀어 본 뒤 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">형상 관리 절차 4단계의 빈칸 ㉠, ㉡에 들어갈 용어를 순서대로 쓰시오.</p>
            <pre>{`형상 식별 → ( ㉠ ) → ( ㉡ ) → 형상 기록`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ 형상 통제, ㉡ 형상 감사<br/>
                <span class="label">해설: </span>형상 관리 절차는 식별(대상 선정·식별자 부여) → 통제(변경 요청 검토·승인) →
                감사(승인대로 변경되었는지 검증) → 기록(결과 기록·보고) 순이다. 순서 자체가 최단골 출제 포인트.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">형상 관리 도구의 방식 중, 원격 저장소와 개발자별 로컬 저장소에 버전 이력을 함께 보관하여
            오프라인 작업이 가능하고 원격 저장소 장애 시에도 로컬 저장소로 복구할 수 있는 방식을 쓰고,
            이 방식의 대표 도구를 보기에서 고르시오.</p>
            <pre>{`[보기]  RCS,  SVN,  CVS,  Git,  SCCS`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>분산 저장소 방식, 대표 도구: Git<br/>
                <span class="label">해설: </span>공유 폴더 방식(RCS·SCCS), 클라이언트-서버 방식(SVN·CVS),
                분산 저장소 방식(Git·Mercurial)의 3분류에서 "Git = 분산"이 가장 자주 출제된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 서버 용어를 영문 약어로 쓰고, 이에 해당하는 제품을 보기에서 모두 고르시오.</p>
            <pre>{`"정적 콘텐츠만 처리하는 웹 서버와 달리, DB 연동·비즈니스 로직 수행 등
 동적(Dynamic) 콘텐츠를 처리하는 미들웨어 서버"

[보기]  Apache HTTP Server,  Tomcat,  Nginx,  JEUS,  WebLogic`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>WAS (Web Application Server) / 제품: Tomcat, JEUS, WebLogic<br/>
                <span class="label">해설: </span>Apache와 Nginx는 정적 콘텐츠를 담당하는 웹 서버다.
                Tomcat을 웹 서버로 착각하지 않도록 주의 — WAS 제품 고르기가 최단골이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 Git 명령어를 ㉠~㉢ 순서대로 쓰시오.</p>
            <pre>{`㉠ 변경된 파일을 스테이징 영역에 추가한다.
㉡ 원격 저장소의 변경 내용을 가져와 로컬 저장소에 병합한다.
㉢ 원격 저장소 전체를 로컬로 복제한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ add, ㉡ pull, ㉢ clone<br/>
                <span class="label">해설: </span>add(스테이징) → commit(로컬 확정) → push(원격 업로드) 흐름과 함께,
                pull은 "가져오기(fetch) + 병합(merge)", clone은 "저장소 전체 복제"로 구분해 암기한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 두 설명 ㉠, ㉡에 해당하는 빌드 도구의 이름을 각각 쓰시오.</p>
            <pre>{`㉠ XML 대신 Groovy 기반 스크립트(build.gradle)로 빌드를 기술하며,
   안드로이드의 공식 빌드 도구로 사용된다.
㉡ pom.xml에 정의된 정보로 정해진 라이프사이클에 따라 빌드하며,
   라이브러리 의존성(Dependency)을 자동으로 관리한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ Gradle, ㉡ Maven<br/>
                <span class="label">해설: </span>"Groovy = Gradle", "pom.xml · 라이프사이클 · 의존성 관리 = Maven"으로 구분한다.
                Ant는 XML(build.xml) 기반의 절차적 방식이며 의존성 관리 기능이 없다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 설명에 해당하는 도구의 이름을 쓰시오.</p>
            <pre>{`"자바 기반의 오픈 소스 CI(지속적 통합) 도구로, 형상 관리 저장소에
 커밋이 발생할 때마다 자동으로 빌드와 테스트를 수행하고 결과를 통보한다."`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Jenkins (젠킨스)<br/>
                <span class="label">해설: </span>Jenkins는 대표적인 CI 도구로, 커밋 → 빌드 → 테스트 → 배포의
                빌드 자동화 흐름의 중심에 있다. "CI 도구"라는 분류명도 함께 기억하자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">개발 언어 선정 기준에 대한 다음 설명의 빈칸 ㉠, ㉡에 들어갈 용어를 쓰시오.</p>
            <pre>{`( ㉠ ) : 다양한 시스템·플랫폼(하드웨어, 운영체제)에 옮겨 적용할 수 있는 정도
( ㉡ ) : 개발자가 그 언어를 이미 알고 있거나 쉽게 이해하고 사용할 수 있는 정도`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ 이식성, ㉡ 친밀성<br/>
                <span class="label">해설: </span>개발 언어 선정 기준 5가지는 적정성 · 효율성 · 이식성 · 친밀성 · 범용성(적효이친범)이다.
                정의 문장과 기준 이름을 짝지어 두자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">웹 서버와 WAS의 역할에 대한 다음 설명의 빈칸 ㉠, ㉡에 '정적' 또는 '동적'을 알맞게 쓰시오.</p>
            <pre>{`웹 서버(Apache, Nginx)는 HTML·CSS·이미지 같은 ( ㉠ ) 콘텐츠를 처리하고,
WAS(Tomcat, JEUS)는 DB 연동 등 ( ㉡ ) 콘텐츠를 처리한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ 정적, ㉡ 동적<br/>
                <span class="label">해설: </span>요청 처리 흐름은 클라이언트 → 웹 서버(정적) → WAS(동적, 비즈니스 로직) → DB 서버 순이다.
                역할 구분이 서술형·괄호형으로 모두 출제된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 형상 관리 용어를 쓰시오.</p>
            <pre>{`"공식적으로 검토·합의된 시점의 산출물 집합으로, 이후 변경 통제의
 기준이 되는 선(기준선). 이 시점 이후의 변경은 반드시 공식적인
 형상 통제 절차를 거쳐야 한다."`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>베이스라인 (Baseline, 기준선)<br/>
                <span class="label">해설: </span>베이스라인은 형상 통제의 기준점이다. "변경 통제의 기준", "기준선"이라는
                키워드가 보이면 베이스라인을 답으로 쓴다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.</p>
            <pre>{`"소프트웨어 개발 전체 과정에서 발생하는 산출물(요구사항 명세서, 설계서,
 소스 코드, 테스트 결과서 등)의 변경 사항을 버전별로 관리하여
 소프트웨어의 가시성과 추적성, 무결성을 확보하는 일련의 활동"`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>형상 관리 (SCM, Software Configuration Management)<br/>
                <span class="label">해설: </span>핵심 키워드는 "산출물의 변경 사항 관리"다. 비용·일정 관리는 형상 관리의
                목적이 아니라는 점(오답 보기 단골)도 함께 기억하자.
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">CCB (형상 통제 위원회)</span>
            <span class="kw">CI / CD</span>
            <span class="kw">Docker · 컨테이너</span>
            <span class="kw">GitHub · GitLab</span>
            <span class="kw">git fetch vs pull</span>
            <span class="kw">브랜치 전략 (Git Flow)</span>
            <span class="kw">Mercurial</span>
            <span class="kw">Nginx 리버스 프록시</span>
            <span class="kw">JDK · JRE · JVM 구분</span>
            <span class="kw">Maven 라이프사이클</span>
          </p>
        </section>

        <footer>개발환경 구축 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
