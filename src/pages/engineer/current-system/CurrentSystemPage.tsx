import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './current-system.css'

export default defineComponent({
  name: 'CurrentSystemPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>현행 시스템 분석과 요구사항 확인</h1>
          <p>현행 시스템 파악 → 플랫폼·OS·네트워크·DBMS 분석 → 요구공학(도출·분석·명세·확인) 순서로,<br/>
          정보처리기사 실기 1과목(요구사항 확인)의 핵심 개념을 표·도면·실전 문제로 정리한 학습 문서입니다.<br/>
          <span>각 도면의 파란 점은 절차의 진행을 나타내며, 현재 진행 중인 단계가 진하게 강조됩니다. 자동으로 반복 재생됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#grasp" onClick={(e) => scrollToId(e, 'grasp')}>현행 시스템 파악 — 목적과 3단계 절차</a></li>
            <li><a href="#platform" onClick={(e) => scrollToId(e, 'platform')}>플랫폼 분석 — 개념·유형·성능 특성</a></li>
            <li><a href="#osnetdbms" onClick={(e) => scrollToId(e, 'osnetdbms')}>운영체제 · 네트워크 · DBMS 분석</a></li>
            <li><a href="#re" onClick={(e) => scrollToId(e, 're')}>요구공학 개요 — 요구사항 개발 4단계</a></li>
            <li><a href="#reqtype" onClick={(e) => scrollToId(e, 'reqtype')}>요구사항 유형 — 기능 vs 비기능</a></li>
            <li><a href="#elicit" onClick={(e) => scrollToId(e, 'elicit')}>요구사항 도출·분석 기법 — DFD · 자료 사전</a></li>
            <li><a href="#spec" onClick={(e) => scrollToId(e, 'spec')}>요구사항 명세와 확인 — SRS · 검토 · CASE</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ================================================== 1. 현행 시스템 파악 */}
        <section id="grasp">
          <h2>1. 현행 시스템 파악 — 목적과 3단계 절차</h2>
          <p class="sub">새 시스템을 만들기 전, "지금 무엇이 어떻게 돌아가고 있는가"부터 아는 것이 개발 범위와 방향을 정하는 출발점이다.</p>

          <h3>1-1. 현행 시스템 파악의 목적</h3>
          <p><strong>현행 시스템 파악</strong>이란 개발하고자 하는 응용 소프트웨어에 대한 이해를 높이기 위해,
          현재 운영 중인 시스템이 <strong>어떤 하위 시스템으로 구성</strong>되어 있고, <strong>어떤 기능을 제공</strong>하며,
          <strong>다른 시스템과 어떤 정보를 주고받는지</strong>, 그리고 <strong>어떤 기술 요소(소프트웨어·하드웨어·네트워크)를 사용하는지</strong>
          파악하는 활동이다.</p>
          <ul>
            <li>개발할 시스템의 <strong>개발 범위</strong>를 명확히 설정한다.</li>
            <li>신규 시스템으로의 <strong>이행(마이그레이션) 방향성</strong>을 수립한다.</li>
            <li>현행 시스템의 제약과 문제점을 미리 확인해 요구사항 분석의 기초 자료로 삼는다.</li>
          </ul>

          <h3>1-2. 파악 절차 3단계</h3>
          <table>
            <tr><th>단계</th><th>파악 대상</th><th>내용</th></tr>
            <tr>
              <td><strong>1단계</strong></td>
              <td>구성 / 기능 / 인터페이스 파악</td>
              <td>기간 업무·지원 업무로 구분한 시스템 구성 현황, 각 시스템이 제공하는 주요 기능,
              시스템 간 주고받는 데이터의 종류·형식(XML, JSON 등)·통신 규약·연계 유형을 파악</td>
            </tr>
            <tr>
              <td><strong>2단계</strong></td>
              <td>아키텍처 및 소프트웨어 구성 파악</td>
              <td>최상위 수준에서 기간 업무를 처리하는 기술 요소의 계층 구조(아키텍처 구성도)와,
              업무 처리에 사용되는 소프트웨어의 제품명·용도·라이선스 적용 방식·라이선스 수를 파악</td>
            </tr>
            <tr>
              <td><strong>3단계</strong></td>
              <td>하드웨어 및 네트워크 구성 파악</td>
              <td>서버의 주요 사양(CPU 처리 속도, 메모리, 디스크)과 수량, 이중화 적용 여부,
              네트워크 장비의 위치·연결 방식을 표현한 네트워크 구성도를 파악</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 250" role="img" aria-label="현행 시스템 파악 절차 3단계 도면">
              <rect class="boxdark" x="30" y="60" width="230" height="120" />
              <text x="145" y="92" text-anchor="middle" class="strong">1단계</text>
              <text x="145" y="118" text-anchor="middle" class="small">시스템 구성 파악</text>
              <text x="145" y="138" text-anchor="middle" class="small">기능 파악</text>
              <text x="145" y="158" text-anchor="middle" class="small">인터페이스 파악</text>

              <rect class="box" x="335" y="60" width="230" height="120" />
              <text x="450" y="92" text-anchor="middle" class="strong">2단계</text>
              <text x="450" y="118" text-anchor="middle" class="small">아키텍처 구성 파악</text>
              <text x="450" y="138" text-anchor="middle" class="small">소프트웨어 구성 파악</text>

              <rect class="box" x="640" y="60" width="230" height="120" />
              <text x="755" y="92" text-anchor="middle" class="strong">3단계</text>
              <text x="755" y="118" text-anchor="middle" class="small">하드웨어 구성 파악</text>
              <text x="755" y="138" text-anchor="middle" class="small">네트워크 구성 파악</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="262" y1="120" x2="329" y2="120" />
                <text x="297" y="45" text-anchor="middle" class="small">업무 → 기술</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="567" y1="120" x2="634" y2="120" />
                <text x="601" y="45" text-anchor="middle" class="small">소프트웨어 → 물리 환경</text>
              </g>
              <text x="450" y="222" text-anchor="middle" class="small">업무(무엇을 하는가) → 소프트웨어(무엇으로 하는가) → 물리 환경(어디에서 도는가) 순으로 내려간다</text>
            </svg>
            <figcaption>도면 1. 현행 시스템 파악 절차 — 구성·기능·인터페이스(1단계)에서 시작해 아키텍처·소프트웨어(2단계), 하드웨어·네트워크(3단계) 순으로 파악한다.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            3단계 순서 암기: <strong>① 구성·기능·인터페이스 → ② 아키텍처·소프트웨어 → ③ 하드웨어·네트워크</strong>.
            "업무에서 출발해 점점 물리적인 계층으로 내려간다"고 기억하면 순서가 헷갈리지 않는다.
          </div>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            인터페이스 파악은 1단계다. "시스템끼리 연결이니까 네트워크(3단계) 아닌가?"라고 착각하기 쉽지만,
            인터페이스 현황에서 보는 것은 <strong>주고받는 데이터의 종류·형식·통신 규약</strong>이라는 업무 관점이지 장비 관점이 아니다.
          </div>
        </section>

        {/* ================================================== 2. 플랫폼 분석 */}
        <section id="platform">
          <h2>2. 플랫폼 분석 — 개념·유형·성능 특성</h2>
          <p class="sub">애플리케이션이 올라가서 돌아가는 "기반"이 플랫폼이다. 현행 플랫폼의 성능을 알아야 신규 시스템의 목표치를 정할 수 있다.</p>

          <h3>2-1. 플랫폼의 개념과 기능</h3>
          <p><strong>플랫폼(Platform)</strong>은 애플리케이션을 구동시키는 데 필요한 소프트웨어·하드웨어 환경,
          즉 응용 소프트웨어가 실행되는 <strong>기반(토대)</strong>을 말한다. 다양한 애플리케이션이 공통으로 활용할 수 있어야 하며,
          동일 플랫폼 내에서는 상호 호환이 가능해야 한다.</p>
          <ul>
            <li><strong>비용 감소:</strong> 공통 기반을 재사용하므로 소프트웨어 개발·운영 비용이 줄어든다.</li>
            <li><strong>생산성 향상:</strong> 개발자는 업무 로직에만 집중할 수 있다.</li>
            <li><strong>네트워크 효과:</strong> 참여자(사용자·개발자)가 늘수록 플랫폼의 가치가 커진다.</li>
          </ul>

          <h3>2-2. 플랫폼의 유형</h3>
          <table>
            <tr><th>유형</th><th>설명</th><th>예시</th></tr>
            <tr><td><strong>싱글 사이드 플랫폼</strong></td><td>한 종류의 그룹(사용자)만을 대상으로 서비스를 제공</td><td>모바일 앱, 데스크톱 프로그램</td></tr>
            <tr><td><strong>투 사이드(양면) 플랫폼</strong></td><td>서로 다른 두 그룹을 연결해 거래·상호작용을 중개</td><td>오픈 마켓(판매자-구매자), 앱 스토어</td></tr>
            <tr><td><strong>멀티 사이드 플랫폼</strong></td><td>셋 이상의 그룹을 연결해 다면적 가치를 창출</td><td>배달 플랫폼(가게-소비자-라이더)</td></tr>
          </table>

          <h3>2-3. 플랫폼 성능 특성 분석 항목</h3>
          <p>현행 플랫폼의 성능을 정량적으로 측정하는 대표 항목 4가지는 시험 단골 출제 포인트다.</p>
          <table>
            <tr><th>항목</th><th>의미</th></tr>
            <tr><td><strong>가용성 (Availability)</strong></td><td>서비스가 정상적으로 사용 가능한 시간의 비율. 예: 연간 가동률 99.9%</td></tr>
            <tr><td><strong>응답 시간 (Response Time)</strong></td><td>요청을 보낸 시점부터 응답(결과)이 도착할 때까지 걸린 시간</td></tr>
            <tr><td><strong>정확성 (Accuracy)</strong></td><td>처리 결과가 기대한 값과 얼마나 일치하는가(올바른 결과의 비율)</td></tr>
            <tr><td><strong>사용률 (Utilization)</strong></td><td>작업 처리 동안 CPU·메모리·네트워크 등 자원을 얼마나 사용하는가</td></tr>
          </table>

          <h3>2-4. 플랫폼 성능 특성 분석 기법</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr><td><strong>사용자 인터뷰</strong></td><td>실제 사용자를 만나 현행 플랫폼의 속도·불편 사항 등 체감 성능을 조사</td></tr>
            <tr><td><strong>성능 테스트</strong></td><td>측정 도구를 이용해 응답 시간·처리량 등 성능 지표를 실제로 측정</td></tr>
            <tr><td><strong>산출물(문서) 점검</strong></td><td>기존 성능 테스트 결과 보고서, 운영 통계 등 유지되는 문서를 확인·분석</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            성능 특성 분석 항목 4가지 = <strong>가용성 · 응답 시간 · 정확성 · 사용률</strong> ("가·응·정·사"로 암기).
            분석 기법 3가지 = <strong>사용자 인터뷰 · 성능 테스트 · 문서(산출물) 점검</strong>.
          </div>
        </section>

        {/* ================================================== 3. OS/네트워크/DBMS 분석 */}
        <section id="osnetdbms">
          <h2>3. 운영체제 · 네트워크 · DBMS 분석</h2>
          <p class="sub">현행 시스템의 기술 스택을 요소별로 뜯어본다. 각 요소마다 "무엇을 고려해서 평가하는가"가 출제 포인트다.</p>

          <h3>3-1. 운영체제(OS) 분석 시 고려사항</h3>
          <p>운영체제는 하드웨어를 관리하고 응용 프로그램에 실행 환경을 제공하는 시스템 소프트웨어다.
          현행/신규 운영체제를 분석·선정할 때는 <strong>품질 측면</strong>과 <strong>지원 측면</strong>으로 나누어 고려한다.</p>
          <table>
            <tr><th>측면</th><th>고려사항</th><th>내용</th></tr>
            <tr><td rowspan="2"><strong>품질 측면</strong></td><td><strong>신뢰도</strong></td><td>장기간 운영 시 장애 발생 가능성, 버그로 인한 다운·재기동 빈도</td></tr>
            <tr><td><strong>성능</strong></td><td>대규모 동시 처리, 대용량 파일 처리, 지원 가능한 메모리 크기</td></tr>
            <tr><td rowspan="3"><strong>지원 측면</strong></td><td><strong>기술 지원</strong></td><td>제작사의 지속적 지원, 사용자 커뮤니티 활성화, 오픈 소스 여부</td></tr>
            <tr><td><strong>주변 기기</strong></td><td>설치 가능한 하드웨어와 지원되는 드라이버의 범위</td></tr>
            <tr><td><strong>구축 비용</strong></td><td>라이선스 정책과 비용, 유지관리 비용, 총 소유 비용(TCO)</td></tr>
          </table>

          <h3>3-2. 네트워크 분석</h3>
          <p>현행 네트워크는 <strong>네트워크 구성도</strong>로 파악한다. 구성도에는 각 장비(라우터, 스위치, 방화벽, 서버)의
          위치와 연결 방식, 백본망·대역폭 등이 표현되며, 이를 통해 서버 위치와 네트워크 연결의 물리적 구조를 이해하고
          장애 발생 시 <strong>추적·대응의 근거 자료</strong>로 활용한다.</p>
          <p>네트워크 계층 구조를 논할 때의 표준 참조 모델이 <strong>OSI 7계층</strong>
          (물리 → 데이터링크 → 네트워크 → 전송 → 세션 → 표현 → 응용)이다. 현행 시스템 분석 단계에서는
          각 장비가 어느 계층에서 동작하는지(예: 스위치 = 2계층, 라우터 = 3계층) 정도를 함께 파악해 두면 좋다.</p>

          <h3>3-3. DBMS 분석 시 고려사항</h3>
          <table>
            <tr><th>고려사항</th><th>내용</th></tr>
            <tr><td><strong>가용성</strong></td><td>장기 운영 시 장애 가능성, 패치·백업·복구의 편의성, 이중화(고가용성) 지원</td></tr>
            <tr><td><strong>성능</strong></td><td>대규모 데이터 처리 성능, 튜닝 옵션, 비용 기반 최적화(옵티마이저) 지원</td></tr>
            <tr><td><strong>기술 지원</strong></td><td>제작사의 지속적인 기술 지원, 커뮤니티·레퍼런스의 풍부함, 오픈 소스 여부</td></tr>
            <tr><td><strong>상호 호환성</strong></td><td>설치 가능한 운영체제의 종류, JDBC·ODBC 등 표준 인터페이스 지원</td></tr>
            <tr><td><strong>구축 비용</strong></td><td>라이선스 정책·비용, 유지관리 비용, 총 소유 비용(TCO)</td></tr>
          </table>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            OS 고려사항과 DBMS 고려사항은 겹치는 항목(성능, 기술 지원, 구축 비용)이 많아 헷갈린다.
            <strong>"상호 호환성"과 "가용성"은 DBMS 쪽</strong>, <strong>"신뢰도"와 "주변 기기"는 OS 쪽</strong> 키워드라는 차이를 기억하자.
          </div>

          <h3>3-4. 비즈니스 융합 분석</h3>
          <p><strong>비즈니스 융합</strong>이란 ICT(정보통신기술)를 기존 산업·업무에 결합해
          새로운 제품·서비스·시장 가치를 창출하는 것을 말한다(예: 금융 + IT = 핀테크).
          현행 시스템 분석 시에는 기업의 비즈니스 모델 관점에서 <strong>제품·서비스·프로세스 중 어디에 융합이 일어나는지</strong>를 살펴,
          신규 시스템이 만들어 낼 부가가치를 함께 검토한다.</p>
        </section>

        {/* ================================================== 4. 요구공학 개요 */}
        <section id="re">
          <h2>4. 요구공학(Requirements Engineering) 개요</h2>
          <p class="sub">요구사항을 "잘 뽑고, 잘 정리하고, 잘 적고, 잘 검증하는" 체계적 활동 전체가 요구공학이다.</p>

          <h3>4-1. 요구공학이란</h3>
          <p><strong>요구공학</strong>은 사용자의 요구를 추출·분석하여 명세서로 작성하고 그것이 올바른지 검증하는,
          요구사항에 대한 <strong>체계적 접근 방법</strong>이다. 목적은 다음과 같다.</p>
          <ul>
            <li>이해관계자(고객, 사용자, 개발자) 사이의 <strong>의사소통을 원활</strong>하게 한다.</li>
            <li>요구사항의 <strong>누락·오해·중복을 방지</strong>하여 개발 비용과 재작업을 줄인다.</li>
            <li>요구사항 <strong>변경의 추적·통제</strong>를 가능하게 한다.</li>
          </ul>

          <h3>4-2. 요구사항 개발 프로세스 4단계 (CMM 기준)</h3>
          <table>
            <tr><th>단계</th><th>영문</th><th>내용</th></tr>
            <tr><td><strong>① 도출</strong></td><td>Elicitation</td><td>이해관계자로부터 요구사항이 어디에 있고 어떻게 수집할지 파악. 인터뷰·워크숍·브레인스토밍 등 활용</td></tr>
            <tr><td><strong>② 분석</strong></td><td>Analysis</td><td>도출된 요구사항의 충돌·중복·누락을 찾아내고 타당성을 조사하며, 상충 요구는 협상으로 조정</td></tr>
            <tr><td><strong>③ 명세</strong></td><td>Specification</td><td>분석 결과를 체계적으로 문서화. 대표 산출물이 소프트웨어 요구사항 명세서(SRS)</td></tr>
            <tr><td><strong>④ 확인</strong></td><td>Validation</td><td>명세서가 이해관계자의 실제 요구를 정확·완전하게 반영했는지 검토·검증</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="요구사항 개발 4단계와 요구사항 관리 도면">
              <rect class="boxdark" x="40" y="60" width="170" height="80" />
              <text x="125" y="94" text-anchor="middle" class="strong">도출</text>
              <text x="125" y="118" text-anchor="middle" class="small">Elicitation</text>

              <rect class="box" x="260" y="60" width="170" height="80" />
              <text x="345" y="94" text-anchor="middle" class="strong">분석</text>
              <text x="345" y="118" text-anchor="middle" class="small">Analysis</text>

              <rect class="box" x="480" y="60" width="170" height="80" />
              <text x="565" y="94" text-anchor="middle" class="strong">명세</text>
              <text x="565" y="118" text-anchor="middle" class="small">Specification</text>

              <rect class="box" x="700" y="60" width="170" height="80" />
              <text x="785" y="94" text-anchor="middle" class="strong">확인</text>
              <text x="785" y="118" text-anchor="middle" class="small">Validation</text>

              <rect class="boxsoft" x="40" y="210" width="830" height="60" />
              <text x="455" y="238" text-anchor="middle" class="strong">요구사항 관리 (Requirements Management)</text>
              <text x="455" y="260" text-anchor="middle" class="small">협상 · 베이스라인 설정 · 변경 관리 · 확인 및 검증 — 개발 전 과정에 걸쳐 지속</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="212" y1="100" x2="254" y2="100" />
                <text x="233" y="45" text-anchor="middle" class="small">수집</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="432" y1="100" x2="474" y2="100" />
                <text x="453" y="45" text-anchor="middle" class="small">정제</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="652" y1="100" x2="694" y2="100" />
                <text x="673" y="45" text-anchor="middle" class="small">문서화</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="785" y1="142" x2="785" y2="204" />
                <text x="770" y="180" text-anchor="end" class="small">베이스라인 확정 후 관리</text>
              </g>
            </svg>
            <figcaption>도면 2. 요구사항 개발 4단계(도출 → 분석 → 명세 → 확인)와, 전 과정을 떠받치는 요구사항 관리 활동.</figcaption>
          </figure>

          <h3>4-3. 요구사항 관리</h3>
          <p>요구사항 개발이 끝났다고 요구공학이 끝나는 것이 아니다. <strong>요구사항 관리</strong>는
          확정된 요구사항의 <strong>협상 → 베이스라인 설정 → 변경 관리 → 확인 및 검증</strong>을 프로젝트 전 기간 동안 수행하는 활동으로,
          요구사항이 바뀔 때마다 그 영향과 이력을 추적할 수 있게 한다.</p>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            4단계 순서 <strong>"도·분·명·확"</strong>은 실기 단골 문제.
            영문 표기 <strong>Elicitation → Analysis → Specification → Validation</strong>까지 함께 외워 두자.
          </div>
        </section>

        {/* ================================================== 5. 요구사항 유형 */}
        <section id="reqtype">
          <h2>5. 요구사항 유형 — 기능 vs 비기능</h2>
          <p class="sub">"무엇을 해야 하는가"는 기능 요구사항, "얼마나 잘·어떤 제약 아래 해야 하는가"는 비기능 요구사항이다.</p>

          <table>
            <tr><th></th><th>기능 요구사항 (Functional)</th><th>비기능 요구사항 (Non-functional)</th></tr>
            <tr>
              <td><strong>정의</strong></td>
              <td>시스템이 제공해야 하는 <strong>기능·서비스·동작</strong>에 대한 요구.
              입력에 대해 어떤 출력·처리를 해야 하는지 기술</td>
              <td>기능 외적인 <strong>품질·제약·환경</strong>에 대한 요구.
              시스템 전체에 걸쳐 적용되는 특성을 기술</td>
            </tr>
            <tr>
              <td><strong>대표 항목</strong></td>
              <td>입력/출력, 데이터 저장·처리, 업무 규칙, 예외 처리</td>
              <td>성능, 보안, 품질(신뢰성·사용성·유지보수성·이식성), 제약사항(법·표준·개발 환경)</td>
            </tr>
            <tr>
              <td><strong>예시</strong></td>
              <td>"회원은 아이디와 비밀번호로 로그인할 수 있어야 한다"<br/>
              "관리자는 월별 매출 통계를 엑셀로 내려받을 수 있어야 한다"</td>
              <td>"로그인 응답 시간은 2초 이내여야 한다"<br/>
              "비밀번호는 암호화하여 저장해야 한다"<br/>
              "시스템 가동률은 99.9% 이상이어야 한다"</td>
            </tr>
            <tr>
              <td><strong>검증 방법</strong></td>
              <td>기능 테스트(요구한 동작이 되는가)</td>
              <td>성능·보안 테스트 등 정량 지표 측정(요구 수준을 만족하는가)</td>
            </tr>
          </table>

          <p>관점에 따라 <strong>사용자 요구사항</strong>(사용자 입장에서 자연어 위주로 서술)과
          <strong>시스템 요구사항</strong>(개발자 입장에서 상세·기술적으로 서술)으로 나누기도 한다.</p>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "응답 시간 2초 이내", "동시 접속 1만 명 지원" 같은 문장은 숫자가 있어서 기능처럼 보이지만
            <strong>성능에 대한 요구이므로 비기능 요구사항</strong>이다. 문장이 "무슨 기능"이 아니라
            "얼마나 잘"을 말하고 있으면 비기능이다.
          </div>
        </section>

        {/* ================================================== 6. 도출·분석 기법 */}
        <section id="elicit">
          <h2>6. 요구사항 도출·분석 기법 — DFD · 자료 사전</h2>
          <p class="sub">요구를 "끌어내는 기법"과, 끌어낸 요구를 "그림·표로 정리하는 분석 도구"를 구분해서 알아 두자.</p>

          <h3>6-1. 요구사항 도출 기법</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr><td><strong>인터뷰</strong></td><td>이해관계자를 직접 만나 대화로 요구를 수집. 1회 1시간 내외, 사전 준비가 중요</td></tr>
            <tr><td><strong>브레인스토밍</strong></td><td>여러 명이 자유롭게 아이디어를 쏟아내는 회의 기법. 비판 금지, 질보다 양 우선</td></tr>
            <tr><td><strong>델파이 기법</strong></td><td>전문가들에게 익명 설문을 반복하여 의견을 수렴·정제해 가는 기법</td></tr>
            <tr><td><strong>롤플레잉</strong></td><td>참여자가 실제 사용자 역할을 연기하며 상황 속 요구를 발견</td></tr>
            <tr><td><strong>워크숍</strong></td><td>이해관계자가 한자리에 모여 단기간 집중 토의로 요구를 도출·합의</td></tr>
            <tr><td><strong>설문 조사</strong></td><td>다수의 사용자에게 질문지를 배포해 통계적으로 요구를 수집</td></tr>
            <tr><td><strong>유스케이스</strong></td><td>사용자(액터)와 시스템의 상호작용을 시나리오 형태로 표현해 기능 요구를 도출</td></tr>
            <tr><td><strong>프로토타이핑</strong></td><td>시제품(견본)을 빠르게 만들어 보여 주고 피드백으로 요구를 구체화</td></tr>
          </table>

          <h3>6-2. 자료 흐름도 (DFD, Data Flow Diagram)</h3>
          <p>구조적 분석의 대표 도구. 데이터가 시스템 안에서 <strong>어디서 발생해 어떻게 흘러가고 어디에 저장되는지</strong>를
          그림으로 표현한다. 자료 흐름 그래프, 버블 차트라고도 하며, 다음 <strong>4가지 구성 요소</strong>로 이루어진다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 240" role="img" aria-label="자료 흐름도 DFD 구성 4요소 기호 도면">
              {/* 프로세스: 원 */}
              <circle class="box" cx="120" cy="85" r="46" />
              <text x="120" y="91" text-anchor="middle" class="small">주문 처리</text>
              <text x="120" y="170" text-anchor="middle" class="strong">프로세스</text>
              <text x="120" y="192" text-anchor="middle" class="small">Process · 원(○)</text>
              <text x="120" y="212" text-anchor="middle" class="small">자료를 변환하는 처리 과정</text>

              <line x1="230" y1="30" x2="230" y2="220" class="life" />

              {/* 자료 흐름: 화살표 */}
              <line class="arrow" x1="270" y1="85" x2="420" y2="85" />
              <text x="345" y="70" text-anchor="middle" class="small">주문 정보</text>
              <text x="345" y="170" text-anchor="middle" class="strong">자료 흐름</text>
              <text x="345" y="192" text-anchor="middle" class="small">Data Flow · 화살표(→)</text>
              <text x="345" y="212" text-anchor="middle" class="small">자료의 이동 경로와 방향</text>

              <line x1="460" y1="30" x2="460" y2="220" class="life" />

              {/* 자료 저장소: 평행선 */}
              <line x1="510" y1="62" x2="660" y2="62" stroke="currentColor" stroke-width="1.6" />
              <line x1="510" y1="108" x2="660" y2="108" stroke="currentColor" stroke-width="1.6" />
              <text x="585" y="91" text-anchor="middle" class="small">주문 파일</text>
              <text x="585" y="170" text-anchor="middle" class="strong">자료 저장소</text>
              <text x="585" y="192" text-anchor="middle" class="small">Data Store · 평행선(=)</text>
              <text x="585" y="212" text-anchor="middle" class="small">자료가 머무는 파일·DB</text>

              <line x1="700" y1="30" x2="700" y2="220" class="life" />

              {/* 단말: 사각형 */}
              <rect class="box" x="740" y="55" width="130" height="60" />
              <text x="805" y="91" text-anchor="middle" class="small">고객</text>
              <text x="805" y="170" text-anchor="middle" class="strong">단말</text>
              <text x="805" y="192" text-anchor="middle" class="small">Terminator · 사각형(□)</text>
              <text x="805" y="212" text-anchor="middle" class="small">자료의 출발지·도착지</text>
            </svg>
            <figcaption>도면 3. DFD 구성 4요소 — 프로세스(원), 자료 흐름(화살표), 자료 저장소(평행선), 단말(사각형).</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            DFD 4요소와 기호는 짝지어 통째로 암기:
            <strong>프로세스 = 원, 자료 흐름 = 화살표, 자료 저장소 = 평행선, 단말 = 사각형</strong>.
            "무엇이 몇 개인가(4요소)"와 "각 요소의 기호"가 모두 단답형으로 출제된다.
          </div>

          <h3>6-3. 자료 사전 (DD, Data Dictionary)</h3>
          <p>DFD에 등장하는 자료의 <strong>의미와 구성을 기호로 정의</strong>한 사전. "데이터의 데이터"라는 뜻에서
          메타 데이터라고도 한다.</p>
          <table>
            <tr><th>기호</th><th>의미</th><th>읽는 법</th></tr>
            <tr><td><code>=</code></td><td>자료의 <strong>정의</strong></td><td>~로 구성되어 있다 (is composed of)</td></tr>
            <tr><td><code>+</code></td><td>자료의 <strong>연결</strong></td><td>그리고 (and)</td></tr>
            <tr><td><code>( )</code></td><td>자료의 <strong>생략</strong></td><td>생략 가능한 자료 (optional)</td></tr>
            <tr><td><code>[ | ]</code></td><td>자료의 <strong>선택</strong></td><td>여러 항목 중 하나 선택 (or)</td></tr>
            <tr><td><code>{'{ }'}</code></td><td>자료의 <strong>반복</strong></td><td>자료가 반복됨 (iteration)</td></tr>
            <tr><td><code>* *</code></td><td>자료의 <strong>설명</strong></td><td>주석 (comment)</td></tr>
          </table>
          <p>예: <code>{'주문서 = 주문번호 + 고객명 + (연락처) + {주문항목} + [카드 | 현금]'}</code>
          — 주문서는 주문번호와 고객명으로 구성되고, 연락처는 생략 가능, 주문항목은 반복되며, 결제는 카드 또는 현금 중 하나.</p>

          <h3>6-4. E-R 다이어그램 (개체-관계 모델)</h3>
          <p>데이터 관점의 분석 도구. 현실 세계를 <strong>개체(Entity)</strong>, <strong>속성(Attribute)</strong>,
          <strong>관계(Relationship)</strong>로 표현한다. 기호는 개체 = <strong>사각형</strong>,
          관계 = <strong>마름모</strong>, 속성 = <strong>타원</strong>, 이들을 잇는 <strong>선(링크)</strong>이다.
          자세한 내용은 데이터베이스 문서에서 다룬다.</p>
        </section>

        {/* ================================================== 7. 명세와 확인 */}
        <section id="spec">
          <h2>7. 요구사항 명세와 확인 — SRS · 검토 · CASE</h2>
          <p class="sub">정리한 요구를 문서로 적는 것이 명세, 그 문서가 진짜 요구와 일치하는지 검사하는 것이 확인이다.</p>

          <h3>7-1. 요구사항 명세 기법 — 정형 vs 비정형</h3>
          <table>
            <tr><th></th><th>정형 명세 기법</th><th>비정형 명세 기법</th></tr>
            <tr>
              <td><strong>표현 방식</strong></td>
              <td><strong>수학적 원리·표기법</strong> 기반으로 요구사항을 서술</td>
              <td><strong>자연어(일반 문장)</strong>와 다이어그램 중심으로 서술</td>
            </tr>
            <tr>
              <td><strong>대표 기법/언어</strong></td>
              <td>VDM, Z 스키마, Petri-net, CSP</td>
              <td>FSM(유한 상태 기계), E-R 모델링, 유스케이스, 의사 결정표</td>
            </tr>
            <tr>
              <td><strong>장점</strong></td>
              <td>표현이 <strong>정확·명확</strong>하여 모호성이 없고, 완전성·일관성 검증에 유리</td>
              <td>누구나 <strong>이해하기 쉽고</strong> 작성이 간편, 의사소통에 유리</td>
            </tr>
            <tr>
              <td><strong>단점</strong></td>
              <td>수학 표기법을 모르는 이해관계자는 이해하기 어려움</td>
              <td>자연어의 <strong>모호성</strong> 때문에 해석이 갈릴 수 있음</td>
            </tr>
          </table>
          <p>명세의 대표 산출물이 <strong>소프트웨어 요구사항 명세서(SRS, Software Requirement Specification)</strong>다.
          SRS는 완전성·일관성·검증 가능성·추적 가능성 등을 갖추어야 하며, 이후 설계·테스트의 기준 문서가 된다.</p>

          <h3>7-2. 요구사항 확인(Validation) 기법</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr><td><strong>요구사항 검토 (Review)</strong></td><td>여러 검토자가 명세서를 수작업으로 읽으며 오류를 찾는 가장 일반적인 방법 (아래 3가지로 구분)</td></tr>
            <tr><td><strong>프로토타이핑</strong></td><td>견본품을 만들어 사용자에게 보여 주고 요구를 제대로 반영했는지 확인·평가</td></tr>
            <tr><td><strong>모델 검증</strong></td><td>분석 단계에서 작성한 모델(다이어그램 등)이 정적 분석 등으로 올바른지 검증</td></tr>
            <tr><td><strong>인수 테스트</strong></td><td>사용자 입장에서 요구사항대로 완성되었는지 최종 확인 (알파·베타 테스트 등)</td></tr>
          </table>

          <h4>요구사항 검토(리뷰)의 세 가지 형태</h4>
          <table>
            <tr><th>형태</th><th>진행 방식</th><th>격식 수준</th></tr>
            <tr><td><strong>동료 검토 (Peer Review)</strong></td><td>작성자가 명세서 내용을 직접 설명하고 동료 2~3명이 들으면서 결함을 발견</td><td>비격식</td></tr>
            <tr><td><strong>워크스루 (Walk Through)</strong></td><td>검토 자료를 회의 전에 미리 배포해 사전 검토한 뒤, 짧은 회의로 결함을 발견</td><td>중간(비형식적 회의)</td></tr>
            <tr><td><strong>인스펙션 (Inspection)</strong></td><td>작성자가 아닌 <strong>훈련된 전문가(중재자·검토팀)</strong>가 정해진 절차·체크리스트에 따라 공식적으로 결함을 발견</td><td>가장 격식 높음</td></tr>
          </table>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            워크스루와 인스펙션 구분 문제 단골 포인트:
            <strong>"미리 배포하여 사전 검토" = 워크스루</strong>,
            <strong>"작성자 이외의 전문가 집단이 공식 절차로 검토" = 인스펙션</strong>.
          </div>

          <h3>7-3. 베이스라인과 형상 관리</h3>
          <p>확인을 통과한 요구사항 명세서는 <strong>베이스라인(Baseline, 기준선)</strong>으로 확정한다.
          베이스라인은 "이 시점 이후의 변경은 공식 절차를 거쳐야 한다"는 기준점으로,
          이후의 변경 요청은 <strong>형상 관리(Configuration Management)</strong>의 변경 통제 절차
          (변경 요청 → 영향 분석 → 승인 → 반영 → 기록)를 따라야 한다. 요구사항 명세서도 소스 코드와 마찬가지로 형상 항목이다.</p>

          <h3>7-4. CASE 도구</h3>
          <p><strong>CASE(Computer Aided Software Engineering)</strong>는 소프트웨어 개발 과정을
          컴퓨터로 자동화·지원하는 도구다. 요구사항을 자동으로 분석하고 명세서를 기술하도록 도우며,
          표준 준수와 문서 일관성을 높인다.</p>
          <table>
            <tr><th>구분</th><th>지원 단계</th><th>기능 예</th></tr>
            <tr><td><strong>상위(Upper) CASE</strong></td><td>계획 · 요구 분석 · 기본 설계 등 개발 앞부분</td><td>모델(다이어그램) 작성 지원, 명세서 일관성 검사</td></tr>
            <tr><td><strong>하위(Lower) CASE</strong></td><td>상세 설계 · 구현 · 테스트 등 개발 뒷부분</td><td>코드 자동 생성, 테스트 지원, 문서 자동화</td></tr>
            <tr><td><strong>통합(Integrated) CASE</strong></td><td>개발 전(全) 단계</td><td>상위 + 하위 기능을 하나로 통합 지원</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            확인 단계의 흐름을 한 문장으로: <strong>검토(동료 검토 → 워크스루 → 인스펙션 순으로 격식이 높아짐)와
            프로토타이핑·모델 검증·인수 테스트로 명세서를 검증하고, 통과한 명세서를 베이스라인으로 확정해
            형상 관리 아래에 둔다.</strong>
          </div>
        </section>

        {/* ================================================== 8. 실전 문제 */}
        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">전부 단답형·괄호 채우기 스타일이다. 답을 가리고 직접 써 본 뒤 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">요구사항 개발 프로세스(CMM 기준)의 4단계에서 괄호 ①, ②에 들어갈 단계를 순서대로 쓰시오.</p>
            <pre>{`도출(Elicitation) → ( ① ) → 명세(Specification) → ( ② )`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 분석(Analysis), ② 확인(Validation)<br/>
                <span class="label">해설: </span>요구사항 개발은 도출 → 분석 → 명세 → 확인 순서로 진행된다. 분석에서 충돌·중복을 정리하고, 확인에서 명세서가 실제 요구를 반영했는지 검증한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">자료 흐름도(DFD)를 구성하는 4가지 요소를 모두 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>프로세스(Process), 자료 흐름(Data Flow), 자료 저장소(Data Store), 단말(Terminator)<br/>
                <span class="label">해설: </span>기호까지 함께 외우자 — 프로세스는 원, 자료 흐름은 화살표, 자료 저장소는 평행선, 단말은 사각형으로 표기한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">자료 사전(Data Dictionary)에서 기호 <code>{'{ }'}</code>와 <code>( )</code>가 의미하는 것을 각각 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>{'{ }'}</code> = 자료의 반복, <code>( )</code> = 자료의 생략(생략 가능)<br/>
                <span class="label">해설: </span>자료 사전 기호는 = 정의, + 연결, ( ) 생략, [ | ] 선택, {'{ }'} 반복, * * 설명(주석)이다. 여섯 개 전부 출제 범위다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 요구사항 검토 기법을 쓰시오.</p>
            <pre>{`명세서 작성자가 아닌 훈련된 전문가(검토팀)가 중재자의 주관 아래
정해진 절차와 체크리스트에 따라 산출물을 공식적으로 검토하여
결함을 발견하는, 가장 격식 있는 검토 방법이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>인스펙션(Inspection)<br/>
                <span class="label">해설: </span>"작성자 이외의 전문가 + 공식 절차"가 인스펙션의 핵심 키워드다. 자료를 사전 배포해 짧은 회의로 검토하면 워크스루, 동료 앞에서 작성자가 직접 설명하면 동료 검토다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">요구사항 명세 기법 중 Z 스키마, VDM, Petri-net 등 수학적 원리와 표기법을 이용해 요구사항을 정확하고 모호하지 않게 기술하는 기법을 무엇이라 하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>정형 명세 기법<br/>
                <span class="label">해설: </span>정형 명세는 수학 기반이라 명확하지만 이해가 어렵고, 비정형 명세는 자연어·다이어그램 기반이라 이해하기 쉽지만 모호성이 생길 수 있다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">플랫폼 성능 특성 분석 항목에 대한 다음 설명에서 괄호 ①, ②에 들어갈 용어를 쓰시오.</p>
            <pre>{`· ( ① )  : 서비스가 정상적으로 사용 가능한 시간의 비율
· 응답 시간 : 요청 후 응답이 도착할 때까지 걸린 시간
· 정확성   : 처리 결과가 기대한 값과 일치하는 정도
· ( ② )  : 작업 처리 동안 CPU·메모리 등 자원을 사용하는 정도`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 가용성(Availability), ② 사용률(Utilization)<br/>
                <span class="label">해설: </span>플랫폼 성능 특성 분석 항목 4가지는 가용성, 응답 시간, 정확성, 사용률이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 요구사항 중 비기능 요구사항에 해당하는 것을 모두 골라 기호로 쓰시오.</p>
            <pre>{`㉠ 회원은 아이디와 비밀번호로 로그인할 수 있어야 한다.
㉡ 검색 결과는 3초 이내에 화면에 표시되어야 한다.
㉢ 관리자는 회원 목록을 엑셀 파일로 내려받을 수 있어야 한다.
㉣ 개인정보는 암호화하여 저장해야 한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉡, ㉣<br/>
                <span class="label">해설: </span>㉡은 성능(응답 시간), ㉣은 보안에 대한 요구이므로 비기능 요구사항이다. ㉠·㉢은 시스템이 제공해야 할 기능 자체를 말하므로 기능 요구사항이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 설명에 해당하는 요구사항 도출 기법을 쓰시오.</p>
            <pre>{`전문가들에게 익명으로 설문을 보내 의견을 수집하고, 그 결과를
요약해 다시 배포하여 재응답을 받는 과정을 반복함으로써
전문가 집단의 의견을 수렴·정제해 가는 기법이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>델파이 기법(Delphi Method)<br/>
                <span class="label">해설: </span>"전문가 + 익명 + 반복 설문"이 델파이의 핵심 키워드다. 여러 명이 모여 자유롭게 아이디어를 내는 브레인스토밍과 구분하자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">검증을 통과해 공식적으로 확정된 요구사항 명세서처럼, "이 시점 이후의 변경은 공식적인 변경 통제 절차를 거쳐야 한다"는 기준점 역할을 하는 형상 관리 용어를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>베이스라인(Baseline, 기준선)<br/>
                <span class="label">해설: </span>베이스라인 확정 이후의 요구사항 변경은 형상 관리의 변경 통제 절차(변경 요청 → 영향 분석 → 승인 → 반영 → 기록)를 따라야 한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">CASE 도구 중 소프트웨어 생명 주기의 앞부분, 즉 계획 수립·요구 분석·기본 설계 단계를 지원하는 도구를 무엇이라 하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>상위 CASE (Upper CASE)<br/>
                <span class="label">해설: </span>상위 CASE는 개발 앞 단계(계획·분석·기본 설계), 하위 CASE는 뒷 단계(상세 설계·구현·테스트)를 지원하며, 둘을 합친 것이 통합 CASE다.
              </div>
            </details>
          </div>

          <hr class="divider"/>
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">SWEBOK 요구공학</span>
            <span class="kw">고객·시스템 요구사항</span>
            <span class="kw">요구사항 추적표(RTM)</span>
            <span class="kw">유스케이스 다이어그램</span>
            <span class="kw">애자일의 사용자 스토리</span>
            <span class="kw">Z / VDM 정형 명세</span>
            <span class="kw">HIPO</span>
            <span class="kw">구조적 분석(SADT)</span>
            <span class="kw">비용 편익 분석</span>
            <span class="kw">형상 관리 절차</span>
          </p>
        </section>

        <footer>현행 시스템 분석과 요구사항 확인 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
