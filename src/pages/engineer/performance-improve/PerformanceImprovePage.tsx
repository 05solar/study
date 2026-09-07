import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './performance-improve.css'

export default defineComponent({
  name: 'PerformanceImprovePage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>애플리케이션 성능 분석 · 성능 개선</h1>
          <p>정보처리기사 실기 대비 학습 문서. 성능 측정 지표 4가지 → 성능 저하 원인 → 성능 분석 도구 →
          클린 코드와 배드 코드 → 리팩토링 → 소스 코드 품질 분석 도구(정적·동적) → 알고리즘 복잡도 →
          성능 개선 기법 순서로, 실기 단골 용어와 정의를 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 요청·데이터의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#metrics" onClick={(e) => scrollToId(e, 'metrics')}>애플리케이션 성능 측정 지표 4가지</a></li>
            <li><a href="#causes" onClick={(e) => scrollToId(e, 'causes')}>성능 저하 원인</a></li>
            <li><a href="#tools" onClick={(e) => scrollToId(e, 'tools')}>성능 분석 도구 — 테스트 · 모니터링</a></li>
            <li><a href="#cleancode" onClick={(e) => scrollToId(e, 'cleancode')}>클린 코드와 배드 코드</a></li>
            <li><a href="#refactoring" onClick={(e) => scrollToId(e, 'refactoring')}>리팩토링(Refactoring)</a></li>
            <li><a href="#quality" onClick={(e) => scrollToId(e, 'quality')}>소스 코드 품질 분석 도구 — 정적 vs 동적</a></li>
            <li><a href="#complexity" onClick={(e) => scrollToId(e, 'complexity')}>알고리즘 복잡도 — 빅오 표기</a></li>
            <li><a href="#improve" onClick={(e) => scrollToId(e, 'improve')}>성능 개선 기법 정리</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 성능 측정 지표 ===================== */}
        <section id="metrics">
          <h2>1. 애플리케이션 성능 측정 지표 4가지</h2>
          <p class="sub">실기 최단골 주제. "설명을 읽고 지표 이름 쓰기"로 출제되므로 네 지표의 정의 문장을 정확히 구분해 암기한다.</p>

          <table>
            <tr><th>지표</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td><strong>처리량</strong></td><td>Throughput</td>
              <td>애플리케이션이 <strong>주어진(단위) 시간 내에 처리할 수 있는 트랜잭션(일)의 수</strong>.
              예: 초당 처리 건수(TPS)</td>
            </tr>
            <tr>
              <td><strong>응답 시간</strong></td><td>Response Time</td>
              <td>사용자가 요청(입력)을 전달한 시점부터 애플리케이션이 <strong>응답(출력)을 시작할 때까지</strong> 걸린 시간.
              예: 버튼 클릭 후 첫 화면이 뜨기 시작할 때까지의 시간</td>
            </tr>
            <tr>
              <td><strong>경과 시간<br/>(반환 시간)</strong></td><td>Turnaround Time</td>
              <td>사용자가 요청(작업 의뢰)을 전달한 시점부터 <strong>처리가 모두 완료되어 결과의 출력이 끝날 때까지</strong> 걸린 시간</td>
            </tr>
            <tr>
              <td><strong>자원 사용률</strong></td><td>Resource Usage</td>
              <td>트랜잭션을 처리하는 동안의 <strong>CPU 사용량, 메모리 사용량, 네트워크 사용량</strong> 등 시스템 자원의 사용 정도</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            응답 시간과 반환 시간의 차이가 함정이다. <strong>응답 시간 = 응답이 "시작"될 때까지</strong>,
            <strong> 반환(경과) 시간 = 결과 출력이 "완료"될 때까지</strong>. 따라서 반환 시간이 응답 시간보다 항상 길거나 같다.
          </div>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330" role="img" aria-label="응답 시간과 반환 시간의 구분 도면">
              {/* 참여자 */}
              <rect class="box" x="90" y="20" width="150" height="46" />
              <text x="165" y="49" text-anchor="middle" class="strong">사용자</text>
              <rect class="boxdark" x="620" y="20" width="170" height="46" />
              <text x="705" y="49" text-anchor="middle" class="strong">애플리케이션</text>

              {/* 생명선 */}
              <line class="life" x1="165" y1="66" x2="165" y2="290" />
              <line class="life" x1="705" y1="66" x2="705" y2="290" />

              {/* 단계 */}
              <g class="msg" data-step="1">
                <line class="arrow" x1="165" y1="110" x2="699" y2="110" />
                <text x="432" y="100" text-anchor="middle" class="small">① 요청 제출 (측정 시작점)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="705" y1="180" x2="171" y2="180" />
                <text x="432" y="170" text-anchor="middle" class="small">② 첫 응답 출력 시작 → 여기까지가 응답 시간</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="705" y1="255" x2="171" y2="255" />
                <text x="432" y="245" text-anchor="middle" class="small">③ 처리 완료·출력 종료 → 여기까지가 반환(경과) 시간</text>
              </g>

              {/* 구간 표시 (정적) */}
              <line class="blocked" x1="810" y1="110" x2="810" y2="180" />
              <text x="820" y="150" class="small">응답 시간</text>
              <line class="blocked" x1="60" y1="110" x2="60" y2="255" />
              <text x="20" y="185" class="small">반환</text>
              <text x="20" y="203" class="small">시간</text>

              <text x="450" y="315" text-anchor="middle" class="small">처리량 = 단위 시간당 처리한 트랜잭션 수 · 자원 사용률 = 처리 중의 CPU·메모리·네트워크 사용량</text>
            </svg>
            <figcaption>도면 1. 요청 → 처리 타임라인 — 응답 시간(첫 응답까지)과 반환 시간(완료까지)의 구분.</figcaption>
          </figure>
        </section>

        {/* ===================== 2. 성능 저하 원인 ===================== */}
        <section id="causes">
          <h2>2. 성능 저하 원인</h2>
          <p class="sub">성능 저하의 원인은 크게 DB 관련 / 내부 로직 / 외부 호출 / 환경 설정 네 갈래로 분류한다. DB 관련 원인이 실기 단골이다.</p>

          <h3>2-1. 데이터베이스 관련 원인 (단골)</h3>
          <table>
            <tr><th>원인</th><th>설명</th></tr>
            <tr>
              <td><strong>데이터베이스 락(Lock) 경합</strong></td>
              <td>대량의 데이터 조회·갱신이 동시에 발생하면 락을 얻으려는 트랜잭션이 <strong>대기 상태</strong>가 되고,
              오래 지속되면 타임아웃·교착상태(Deadlock)로 이어진다</td>
            </tr>
            <tr>
              <td><strong>불필요한 데이터베이스 페치(Fetch)</strong></td>
              <td>실제 필요한 것보다 <strong>많은 데이터를 요청</strong>하거나, 결과를 찾은 뒤에도 불필요한 커서 이동을 반복하여
              대기 시간이 늘어난다</td>
            </tr>
            <tr>
              <td><strong>인덱스 부재 · 부적절한 인덱스</strong></td>
              <td>인덱스가 없거나 분포도를 고려하지 않은 인덱스를 쓰면 <strong>풀 스캔(Full Scan)</strong>이 발생해 조회 속도가 저하된다</td>
            </tr>
            <tr>
              <td><strong>커넥션 누수(Connection Leak)</strong></td>
              <td>DB 연결을 사용한 뒤 <strong>반환(close)하지 않아</strong> 커넥션 풀이 고갈되고, 이후 요청이 연결을 얻지 못해 대기·실패한다</td>
            </tr>
          </table>

          <h3>2-2. 그 밖의 원인</h3>
          <table>
            <tr><th>분류</th><th>대표 원인</th></tr>
            <tr>
              <td><strong>내부 로직</strong></td>
              <td>불필요한 반복(루프) 수행, 극단적으로 많은 파일·대량 데이터를 한 번에 처리, 잘못된 자료구조 선택</td>
            </tr>
            <tr>
              <td><strong>외부 호출</strong></td>
              <td><strong>트랜잭션 내부에서 원격(외부 시스템) 호출</strong>을 수행하여 응답을 기다리는 동안 락과 자원을 점유</td>
            </tr>
            <tr>
              <td><strong>환경 설정</strong></td>
              <td>스레드 풀(Thread Pool)·힙 메모리(Heap) 크기를 너무 작게 설정하면 대기·메모리 부족(OOM)이 발생</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "트랜잭션이 <strong>정상적으로 처리되지 않고 커넥션이 반환되지 않는</strong> 현상"을 묻는 문제의 답은
            <strong> 커넥션 누수</strong>다. 락 경합(대기)과 구분해서 기억하자.
          </div>
        </section>

        {/* ===================== 3. 성능 분석 도구 ===================== */}
        <section id="tools">
          <h2>3. 성능 분석 도구 — 테스트 · 모니터링</h2>
          <p class="sub">성능을 "만들어 재는" 성능·부하·스트레스 테스트 도구와, 운영 중 상태를 "지켜보는" 모니터링(APM) 도구로 나뉜다.</p>

          <h3>3-1. 성능 · 부하 · 스트레스 테스트 도구</h3>
          <table>
            <tr><th>도구</th><th>설명</th><th>지원 환경</th></tr>
            <tr>
              <td><strong>JMeter</strong></td>
              <td>HTTP·FTP 등 다양한 프로토콜을 지원하는 <strong>부하 테스트</strong> 도구 (Apache 오픈소스)</td>
              <td>크로스 플랫폼</td>
            </tr>
            <tr>
              <td><strong>LoadUI</strong></td>
              <td>HTTP·JDBC 등 주로 <strong>웹 서비스를 대상</strong>으로 하는 서버 모니터링·부하 테스트 도구. UI를 통한 시각적 조작이 특징</td>
              <td>크로스 플랫폼</td>
            </tr>
            <tr>
              <td><strong>OpenSTA</strong></td>
              <td>HTTP·HTTPS 프로토콜에 대한 <strong>부하 테스트와 생산품 모니터링</strong> 도구</td>
              <td>Windows</td>
            </tr>
          </table>

          <h3>3-2. 모니터링(APM) 도구 (단골)</h3>
          <p><strong>APM(Application Performance Management/Monitoring)</strong>은 운영 중인 애플리케이션의
          성능·가용성을 <strong>실시간으로 모니터링·관리</strong>하여 장애를 사전에 예방하고 원인을 분석하게 해 주는 도구다.</p>
          <table>
            <tr><th>도구</th><th>설명</th></tr>
            <tr><td><strong>스카우터(Scouter)</strong></td><td>애플리케이션·OS 자원 정보까지 모니터링하는 국산 <strong>오픈소스</strong> APM</td></tr>
            <tr><td><strong>제니퍼(Jennifer)</strong></td><td>애플리케이션의 개발부터 테스트·오픈·운영·안정화까지 <strong>전 생애주기 단계의 성능을 모니터링</strong>하는 상용 APM</td></tr>
            <tr><td><strong>뉴렐릭(New Relic)</strong></td><td>클라우드 기반(SaaS)으로 웹·모바일 애플리케이션 성능을 모니터링하는 상용 APM</td></tr>
          </table>

          <h3>3-3. 시스템 자원 확인 명령어</h3>
          <table>
            <tr><th>명령어</th><th>설명</th></tr>
            <tr><td><code>top</code></td><td>프로세스별 CPU·메모리 사용 현황을 실시간으로 표시 (Unix/Linux)</td></tr>
            <tr><td><code>vmstat</code></td><td>가상 메모리·프로세스·CPU 활동 등 시스템 자원 통계를 표시</td></tr>
          </table>
        </section>

        {/* ===================== 4. 클린 코드 / 배드 코드 ===================== */}
        <section id="cleancode">
          <h2>4. 클린 코드와 배드 코드</h2>
          <p class="sub">클린 코드는 누구나 쉽게 이해하고 수정·추가할 수 있는 단순·명료한 코드, 배드 코드는 그 반대다. 작성 원칙 5가지와 배드 코드 유형의 "설명 → 용어" 매칭이 단골이다.</p>

          <h3>4-1. 클린 코드 작성 원칙 5가지 (단골)</h3>
          <table>
            <tr><th>원칙</th><th>정의</th></tr>
            <tr>
              <td><strong>가독성</strong></td>
              <td>누구든지 코드를 <strong>쉽게 읽을 수 있도록</strong> 작성한다. 이해하기 쉬운 용어 사용, 들여쓰기 등을 활용</td>
            </tr>
            <tr>
              <td><strong>단순성</strong></td>
              <td>코드를 <strong>간단하게</strong> 작성한다. 한 번에 한 가지 기능만 처리하고, 클래스·메서드·함수를 최소 단위로 분리</td>
            </tr>
            <tr>
              <td><strong>의존성 배제</strong></td>
              <td>코드가 <strong>다른 모듈에 미치는 영향을 최소화</strong>한다. 코드 변경 시 다른 부분에 영향이 없도록 작성</td>
            </tr>
            <tr>
              <td><strong>중복성 최소화</strong></td>
              <td><strong>중복된 코드를 삭제</strong>하고, 공통된 코드를 별도 모듈(함수)로 분리하여 재사용한다</td>
            </tr>
            <tr>
              <td><strong>추상화</strong></td>
              <td>상위 클래스(모듈)에서는 <strong>큰 개념(전반적인 특성)만 정의</strong>하고, 상세 내용은 하위 클래스(모듈)에서 구현한다</td>
            </tr>
          </table>

          <h3>4-2. 배드 코드(Bad Code) 유형</h3>
          <table>
            <tr><th>유형</th><th>설명</th></tr>
            <tr>
              <td><strong>스파게티 코드</strong></td>
              <td>소스 코드의 로직이 서로 복잡하게 얽히고설켜, 실행 흐름을 따라가기 어려운 <strong>비구조적인 코드</strong> (단골)</td>
            </tr>
            <tr>
              <td><strong>외계인 코드<br/>(Alien Code)</strong></td>
              <td>아주 오래되었거나 참고 <strong>문서·개발자가 없어</strong> 유지보수 작업이 매우 어려운 코드 (단골)</td>
            </tr>
            <tr>
              <td><strong>알 수 없는 변수명</strong></td>
              <td>의미를 알 수 없는 이름(a, tmp1 등)을 사용해 변수·메서드의 용도를 파악할 수 없게 만든 코드</td>
            </tr>
            <tr>
              <td><strong>중복 코드</strong></td>
              <td>동일한 처리 로직이 여러 곳에 복사되어 있어, 수정 시 모든 위치를 함께 고쳐야 하는 코드</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "로직이 복잡하게 얽힌 코드" → <strong>스파게티 코드</strong>,
            "문서가 없는 오래된 코드" → <strong>외계인 코드</strong>. 두 용어는 설명을 주고 이름을 쓰게 하는 유형으로 반복 출제된다.
          </div>
        </section>

        {/* ===================== 5. 리팩토링 ===================== */}
        <section id="refactoring">
          <h2>5. 리팩토링(Refactoring)</h2>
          <p class="sub">리팩토링의 정의에서 "기능(결과)의 변경 없이"라는 조건이 핵심 채점 포인트다.</p>

          <h3>5-1. 개념과 목적 (단골)</h3>
          <p><strong>리팩토링</strong>은 소프트웨어의 <strong>외부 동작(기능)은 변경하지 않으면서</strong>,
          내부 구조를 개선하여 <strong>이해하기 쉽고 수정하기 쉽게</strong> 만드는 작업이다.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            목적: <strong>유지보수성 향상, 가독성 향상, 생산성 향상, 품질 향상</strong>.
            "성능을 높이는 작업"이 아니라 <strong>구조 개선</strong> 작업이라는 점, 그리고
            <strong> 결과(기능)가 바뀌면 리팩토링이 아니다</strong>라는 점을 기억하자.
          </div>

          <h3>5-2. 대표 기법</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr><td><strong>메서드 추출 (Extract Method)</strong></td><td>길거나 중복되는 코드 조각을 <strong>별도의 메서드로 분리</strong>하고 의도가 드러나는 이름을 붙인다</td></tr>
            <tr><td><strong>변수명(메서드명) 변경 (Rename)</strong></td><td>의미가 불분명한 이름을 <strong>용도를 알 수 있는 이름으로 바꾼다</strong></td></tr>
            <tr><td><strong>조건문 단순화</strong></td><td>복잡한 조건식을 메서드로 추출하거나 중첩 조건을 보호절(Guard Clause)로 바꿔 <strong>읽기 쉽게 만든다</strong></td></tr>
            <tr><td><strong>클래스 분리 (Extract Class)</strong></td><td>한 클래스가 너무 많은 책임을 가질 때 <strong>관련 필드·메서드를 새 클래스로 옮긴다</strong></td></tr>
          </table>

          <h3>5-3. 코드 스멜(Code Smell)</h3>
          <p><strong>코드 스멜</strong>은 당장 버그는 아니지만 <strong>더 깊은 문제가 숨어 있을 가능성을 암시하는 코드의 징후</strong>
          (중복 코드, 긴 메서드, 거대한 클래스, 긴 매개변수 목록 등)를 말한다. 코드 스멜이 발견되면 리팩토링의 대상이 된다.</p>
        </section>

        {/* ===================== 6. 소스 코드 품질 분석 도구 ===================== */}
        <section id="quality">
          <h2>6. 소스 코드 품질 분석 도구 — 정적 vs 동적</h2>
          <p class="sub">실기 출제 이력이 있는 주제. 도구 이름을 보고 정적 분석인지 동적 분석인지 구분할 수 있어야 한다.</p>

          <h3>6-1. 정적 분석 vs 동적 분석</h3>
          <table>
            <tr><th>구분</th><th>정적 분석 도구</th><th>동적 분석 도구</th></tr>
            <tr>
              <td><strong>방식</strong></td>
              <td>프로그램을 <strong>실행하지 않고</strong> 소스 코드 자체를 분석하여 코딩 표준 위반·결함·복잡도를 찾는다</td>
              <td>프로그램을 <strong>실행하면서(런타임)</strong> 메모리 누수·스레드 결함 등을 찾는다</td>
            </tr>
            <tr>
              <td><strong>도구</strong></td>
              <td>
                <strong>pmd</strong> (Java 등 결함 유발 코드 검사)<br/>
                <strong>cppcheck</strong> (C/C++ 메모리 누수·오버플로 검사)<br/>
                <strong>SonarQube</strong> (통합 품질 관리 플랫폼)<br/>
                <strong>checkstyle</strong> (Java 코딩 표준 준수 검사)<br/>
                <strong>ccm</strong> (다양한 언어의 복잡도 분석)<br/>
                <strong>cobertura</strong> (Java 테스트 커버리지 측정)
              </td>
              <td>
                <strong>Avalanche</strong> (Valgrind 기반 결함·취약점 분석)<br/>
                <strong>Valgrind</strong> (메모리 누수·스레드 결함 분석 — 출제 이력)
              </td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            암기 요령: 동적 분석 도구는 <strong>Avalanche와 Valgrind 둘뿐</strong>이라고 기억하면,
            나머지(pmd·cppcheck·SonarQube·checkstyle·ccm·cobertura)는 전부 정적 분석 도구다.
          </div>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 300" role="img" aria-label="정적 분석과 동적 분석의 구분 도면">
              <rect class="box" x="30" y="115" width="180" height="70" />
              <text x="120" y="143" text-anchor="middle" class="strong">소스 코드</text>
              <text x="120" y="165" text-anchor="middle" class="small">분석 대상 프로그램</text>

              {/* 정적 분석 갈래 */}
              <line class="arrow" x1="210" y1="130" x2="354" y2="75" />
              <text x="280" y="80" text-anchor="middle" class="small">실행하지 않고 검사</text>
              <rect class="boxdark" x="360" y="30" width="510" height="90" />
              <text x="615" y="58" text-anchor="middle" class="strong">정적 분석 (Static Analysis)</text>
              <text x="615" y="80" text-anchor="middle" class="small">코딩 표준 위반 · 결함 패턴 · 복잡도 · 커버리지 측정 준비</text>
              <text x="615" y="102" text-anchor="middle" class="small">pmd · cppcheck · SonarQube · checkstyle · ccm · cobertura</text>

              {/* 동적 분석 갈래 */}
              <line class="arrow" x1="210" y1="170" x2="354" y2="225" />
              <text x="280" y="225" text-anchor="middle" class="small">실행하면서 검사</text>
              <rect class="boxsoft" x="360" y="180" width="510" height="90" />
              <text x="615" y="208" text-anchor="middle" class="strong">동적 분석 (Dynamic Analysis)</text>
              <text x="615" y="230" text-anchor="middle" class="small">런타임 메모리 누수 · 스레드 결함 발견</text>
              <text x="615" y="252" text-anchor="middle" class="small">Avalanche · Valgrind</text>
            </svg>
            <figcaption>도면 2. 소스 코드 품질 분석 도구의 구분 — 실행 여부가 정적/동적을 가른다.</figcaption>
          </figure>
        </section>

        {/* ===================== 7. 알고리즘 복잡도 ===================== */}
        <section id="complexity">
          <h2>7. 알고리즘 복잡도 — 빅오 표기</h2>
          <p class="sub">시간 복잡도의 크기 순서와 대표 정렬·탐색 알고리즘의 복잡도는 실기에서 그대로 답을 쓰게 하는 단골이다.</p>

          <h3>7-1. 시간 복잡도 빅오(Big-O) 표기 순서 (단골)</h3>
          <table>
            <tr><th>표기</th><th>명칭</th><th>예</th></tr>
            <tr><td><strong>O(1)</strong></td><td>상수 시간</td><td>배열 인덱스 접근, 해시 조회</td></tr>
            <tr><td><strong>O(log n)</strong></td><td>로그 시간</td><td>이진 탐색</td></tr>
            <tr><td><strong>O(n)</strong></td><td>선형 시간</td><td>순차 탐색, 리스트 순회</td></tr>
            <tr><td><strong>O(n log n)</strong></td><td>선형 로그 시간</td><td>퀵(평균)·힙·합병 정렬</td></tr>
            <tr><td><strong>O(n²)</strong></td><td>제곱 시간</td><td>버블·선택·삽입 정렬, 이중 루프</td></tr>
            <tr><td><strong>O(2ⁿ)</strong></td><td>지수 시간</td><td>부분집합 열거, 단순 재귀 피보나치</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 170" role="img" aria-label="시간 복잡도 크기 순서 도면">
              <text x="30" y="40" class="small strong">빠름 (효율적)</text>
              <text x="870" y="40" text-anchor="end" class="small strong">느림 (비효율적)</text>

              <rect class="boxdark" x="20" y="60" width="115" height="50" />
              <text x="77" y="90" text-anchor="middle" class="strong">O(1)</text>
              <line class="arrow" x1="135" y1="85" x2="164" y2="85" />

              <rect class="boxsoft" x="170" y="60" width="115" height="50" />
              <text x="227" y="90" text-anchor="middle" class="strong">O(log n)</text>
              <line class="arrow" x1="285" y1="85" x2="314" y2="85" />

              <rect class="boxsoft" x="320" y="60" width="115" height="50" />
              <text x="377" y="90" text-anchor="middle" class="strong">O(n)</text>
              <line class="arrow" x1="435" y1="85" x2="464" y2="85" />

              <rect class="boxsoft" x="470" y="60" width="115" height="50" />
              <text x="527" y="90" text-anchor="middle" class="strong">O(n log n)</text>
              <line class="arrow" x1="585" y1="85" x2="614" y2="85" />

              <rect class="boxsoft" x="620" y="60" width="115" height="50" />
              <text x="677" y="90" text-anchor="middle" class="strong">O(n²)</text>
              <line class="arrow" x1="735" y1="85" x2="764" y2="85" />

              <rect class="box" x="770" y="60" width="115" height="50" />
              <text x="827" y="90" text-anchor="middle" class="strong">O(2ⁿ)</text>

              <text x="450" y="145" text-anchor="middle" class="small">n이 커질수록 오른쪽으로 갈수록 수행 시간이 급격히 증가한다</text>
            </svg>
            <figcaption>도면 3. 시간 복잡도 크기 순서 — O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(2ⁿ).</figcaption>
          </figure>

          <h3>7-2. 대표 정렬 알고리즘 복잡도 (실기 단골)</h3>
          <table>
            <tr><th>정렬</th><th>평균</th><th>최악</th><th>비고</th></tr>
            <tr><td><strong>버블 정렬</strong></td><td>O(n²)</td><td>O(n²)</td><td>인접한 두 값을 비교·교환</td></tr>
            <tr><td><strong>선택 정렬</strong></td><td>O(n²)</td><td>O(n²)</td><td>최솟값을 골라 앞으로 이동</td></tr>
            <tr><td><strong>삽입 정렬</strong></td><td>O(n²)</td><td>O(n²)</td><td>정렬된 부분에 끼워 넣기. 이미 정렬된 경우 최선 O(n)</td></tr>
            <tr><td><strong>퀵 정렬</strong></td><td><strong>O(n log n)</strong></td><td><strong>O(n²)</strong></td><td>피벗 기준 분할 정복. 평균과 최악이 다른 점이 단골</td></tr>
            <tr><td><strong>힙 정렬</strong></td><td>O(n log n)</td><td>O(n log n)</td><td>완전 이진 트리(힙) 이용</td></tr>
            <tr><td><strong>합병(병합) 정렬</strong></td><td>O(n log n)</td><td>O(n log n)</td><td>분할 정복 + 병합. 항상 O(n log n)</td></tr>
          </table>

          <h3>7-3. 탐색 알고리즘 복잡도 (단골)</h3>
          <table>
            <tr><th>탐색</th><th>복잡도</th><th>조건</th></tr>
            <tr><td><strong>순차 탐색 (Linear Search)</strong></td><td>O(n)</td><td>정렬 여부와 무관, 처음부터 차례로 비교</td></tr>
            <tr><td><strong>이진 탐색 (Binary Search)</strong></td><td><strong>O(log n)</strong></td><td><strong>정렬된 데이터</strong>에서만 사용 가능, 중앙값과 비교하며 절반씩 제외</td></tr>
          </table>
        </section>

        {/* ===================== 8. 성능 개선 기법 ===================== */}
        <section id="improve">
          <h2>8. 성능 개선 기법 정리</h2>
          <p class="sub">소스 레벨, SQL/인덱스, 메모리, 캐싱의 네 방향에서 개선 포인트를 요약한다. 가비지 컬렉션 개념이 단골이다.</p>

          <h3>8-1. 소스 코드 레벨 최적화</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr>
              <td><strong>루프 최적화</strong></td>
              <td>루프 안의 <strong>불변 연산을 루프 밖으로</strong> 이동, 불필요한 중첩 루프 제거, 조기 종료(break) 활용</td>
            </tr>
            <tr>
              <td><strong>StringBuilder 사용</strong></td>
              <td>Java에서 String은 불변(immutable)이라 <code>+</code> 연결마다 새 객체가 생성된다.
              반복 문자열 연결은 <strong>StringBuilder(StringBuffer)</strong>로 대체한다</td>
            </tr>
            <tr>
              <td><strong>적절한 자료구조 선택</strong></td>
              <td>탐색이 잦으면 해시 기반(HashMap), 순서가 중요하면 리스트 등 <strong>연산 특성에 맞는 구조</strong>를 쓴다</td>
            </tr>
          </table>

          <h3>8-2. SQL · 인덱스 튜닝 요약</h3>
          <ul>
            <li>조회 조건(WHERE)·조인 컬럼에 <strong>인덱스</strong>를 생성하되, 분포도가 좋은(중복이 적은) 컬럼을 선택한다.</li>
            <li><strong>필요한 컬럼만 SELECT</strong>하고, 불필요한 페치·과도한 조인을 줄인다.</li>
            <li>인덱스 컬럼에 함수·연산을 적용하면 인덱스를 타지 못하므로 조건식을 <strong>컬럼 원형 그대로</strong> 작성한다.</li>
            <li>인덱스는 조회를 빠르게 하지만 <strong>삽입·수정·삭제 시 유지 비용</strong>이 들므로 남발하지 않는다.</li>
          </ul>

          <h3>8-3. 메모리 관리 — 가비지 컬렉션 (단골)</h3>
          <p><strong>가비지 컬렉션(Garbage Collection, GC)</strong>은 프로그램이 동적으로 할당한 메모리 중
          <strong>더 이상 사용(참조)하지 않는 영역을 시스템이 자동으로 탐지하여 해제·회수</strong>하는 메모리 관리 기법이다.
          Java·C# 등에서 개발자가 직접 메모리를 해제하지 않아도 되게 해 주지만,
          GC가 동작하는 동안 애플리케이션이 잠시 멈추는 부담(Stop-the-World)이 생길 수 있어
          <strong>불필요한 객체 생성을 줄이는 것</strong>이 성능 개선의 기본이 된다.</p>

          <h3>8-4. 캐싱(Caching)</h3>
          <p>자주 조회되지만 잘 바뀌지 않는 데이터를 <strong>빠른 저장소(메모리 등)에 복사해 두고 재사용</strong>하여
          DB·원격 호출 횟수를 줄이는 기법이다. 캐시 적중(Hit) 비율을 높이는 것이 핵심이며,
          원본 변경 시 캐시를 갱신·무효화하는 <strong>일관성 관리</strong>가 함께 필요하다.</p>
        </section>

        {/* ===================== 9. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>9. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 형식(단답·괄호 채우기·설명→용어)으로 구성한 10문항. 먼저 스스로 답을 쓴 뒤 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">애플리케이션의 성능을 측정하는 지표 4가지 중 빈칸 ①~④에 들어갈 용어를 쓰시오.</p>
            <pre>{`· ( ① ) : 주어진 시간 내에 처리할 수 있는 트랜잭션의 수
· ( ② ) : 요청을 전달한 시점부터 응답이 시작될 때까지 걸린 시간
· ( ③ ) : 요청을 전달한 시점부터 결과의 출력이 완료될 때까지 걸린 시간
· ( ④ ) : 처리하는 동안의 CPU·메모리·네트워크 사용량`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 처리량(Throughput), ② 응답 시간(Response Time), ③ 경과 시간(반환 시간, Turnaround Time), ④ 자원 사용률(Resource Usage)<br/>
                <span class="label">해설: </span>성능 지표 4가지는 실기 최단골이다. "응답이 시작될 때까지"는 응답 시간, "출력이 완료될 때까지"는 반환(경과) 시간으로 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 애플리케이션 성능 측정 지표를 쓰시오.</p>
            <pre>{`사용자가 애플리케이션에 요청(작업)을 의뢰한 시점부터
처리가 모두 완료되어 결과의 출력이 끝날 때까지 걸린 시간`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>경과 시간(반환 시간, Turnaround Time)<br/>
                <span class="label">해설: </span>"완료될 때까지"가 핵심이다. 응답 시간(Response Time)은 응답이 "시작"될 때까지의 시간이므로 함정 보기에 주의한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명 ①, ②에 해당하는 배드 코드 유형의 용어를 각각 쓰시오.</p>
            <pre>{`① 소스 코드의 로직이 서로 복잡하게 얽히고설켜 있어
   실행 흐름을 파악하기 어려운 비구조적인 코드
② 아주 오래되었거나 참고 문서 또는 개발자가 없어
   유지보수 작업이 매우 어려운 코드`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 스파게티 코드(Spaghetti Code), ② 외계인 코드(Alien Code)<br/>
                <span class="label">해설: </span>"얽힌 로직" → 스파게티 코드, "문서·개발자가 없는 오래된 코드" → 외계인 코드. 두 용어 모두 실기 출제 이력이 있는 단골이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">클린 코드 작성 원칙 5가지 중, 다음 설명에 해당하는 원칙을 쓰시오.</p>
            <pre>{`코드가 다른 모듈에 미치는 영향을 최소화하여,
코드를 변경하더라도 다른 부분에 영향이 없도록 작성한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>의존성 배제(의존성 최소화)<br/>
                <span class="label">해설: </span>클린 코드 5원칙 — 가독성, 단순성, 의존성 배제, 중복성 최소화, 추상화. "다른 모듈에 영향"이라는 키워드가 나오면 의존성 배제다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명의 빈칸에 공통으로 들어갈 용어를 쓰시오.</p>
            <pre>{`( )은/는 소프트웨어의 외부 동작(기능·결과)은 변경하지 않으면서
내부 구조를 개선하여 이해하기 쉽고 수정하기 쉬운 코드로 만드는 작업이다.
( )의 목적은 유지보수성·가독성·생산성·품질 향상이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>리팩토링(Refactoring)<br/>
                <span class="label">해설: </span>"기능 변경 없이 구조 개선"이 리팩토링 정의의 핵심 문구다. 기능이 바뀌거나 성능 최적화 자체가 목적이면 리팩토링이 아니다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 보기의 소스 코드 품질 분석 도구를 정적 분석 도구와 동적 분석 도구로 구분하여 기호로 쓰시오.</p>
            <pre>{`[보기]
㉠ pmd   ㉡ Valgrind   ㉢ SonarQube   ㉣ checkstyle
㉤ Avalanche   ㉥ cppcheck   ㉦ cobertura`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>정적 분석 도구: ㉠ pmd, ㉢ SonarQube, ㉣ checkstyle, ㉥ cppcheck, ㉦ cobertura / 동적 분석 도구: ㉡ Valgrind, ㉤ Avalanche<br/>
                <span class="label">해설: </span>동적 분석 도구는 프로그램을 실행하면서 분석하는 Avalanche와 Valgrind 둘뿐이라고 기억하면 나머지는 전부 정적 분석 도구다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">퀵 정렬(Quick Sort)의 평균 시간 복잡도와 최악 시간 복잡도를 빅오 표기법으로 각각 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>평균: O(n log n), 최악: O(n²)<br/>
                <span class="label">해설: </span>피벗이 매번 최솟값·최댓값으로 치우치면(이미 정렬된 데이터 등) 분할이 한쪽으로 쏠려 최악 O(n²)이 된다. 합병·힙 정렬은 최악에도 O(n log n)인 점과 대비된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">정렬된 데이터에서 중앙값과 비교하며 탐색 범위를 절반씩 줄여 나가는 탐색 알고리즘의 이름과 그 시간 복잡도를 빅오 표기법으로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>이진 탐색(Binary Search), O(log n)<br/>
                <span class="label">해설: </span>이진 탐색은 반드시 정렬된 데이터에서만 사용할 수 있다. 정렬 여부와 무관하게 차례로 비교하는 순차 탐색은 O(n)이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 메모리 관리 기법을 쓰시오.</p>
            <pre>{`프로그램이 동적으로 할당한 메모리 중 더 이상 사용하지 않는
(참조되지 않는) 영역을 시스템이 자동으로 탐지하여 해제·회수하는 기법으로,
Java 등의 언어에서 개발자가 직접 메모리를 해제하지 않아도 되게 해 준다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>가비지 컬렉션(Garbage Collection, GC)<br/>
                <span class="label">해설: </span>"사용하지 않는 메모리의 자동 해제·회수"가 정의의 핵심이다. GC 동작 중 일시 정지(Stop-the-World) 부담이 있으므로 불필요한 객체 생성을 줄이는 것이 성능 개선 포인트다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 설명에 해당하는 용어를 영문 약어로 쓰시오.</p>
            <pre>{`운영 중인 애플리케이션의 성능과 가용성을 실시간으로 모니터링·관리하여
장애를 사전에 예방하고 원인을 분석할 수 있게 해 주는 도구(체계)로,
스카우터(Scouter), 제니퍼(Jennifer), 뉴렐릭(New Relic) 등이 대표적이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>APM(Application Performance Management/Monitoring)<br/>
                <span class="label">해설: </span>애플리케이션 성능 모니터링·관리 도구를 통칭하는 용어다. 오픈소스 스카우터, 상용 제니퍼·뉴렐릭을 예시로 함께 기억해 두자.
              </div>
            </details>
          </div>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">TPS</span>
            <span class="kw">병목 현상(Bottleneck)</span>
            <span class="kw">교착상태(Deadlock)</span>
            <span class="kw">커넥션 풀</span>
            <span class="kw">옵티마이저 · 실행 계획</span>
            <span class="kw">코드 스멜</span>
            <span class="kw">기술 부채</span>
            <span class="kw">테스트 커버리지</span>
            <span class="kw">순환 복잡도(McCabe)</span>
            <span class="kw">공간 복잡도</span>
            <span class="kw">Stop-the-World</span>
            <span class="kw">메모이제이션</span>
            <span class="kw">CDN</span>
            <span class="kw">로드 밸런싱</span>
          </p>
        </section>

        <footer>애플리케이션 성능 분석과 개선 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
