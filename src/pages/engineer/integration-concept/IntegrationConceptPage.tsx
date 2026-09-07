import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './integration-concept.css'

export default defineComponent({
  name: 'IntegrationConceptPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>연계 메커니즘 구성 · 연계 개념</h1>
          <p>정보처리기사 실기 "통합 구현" 파트 대비 학습 문서.<br/>
          시스템 연계의 개념 → 요구사항 분석 → 데이터 식별·표준화 → 연계 메커니즘(송신·중계·수신 체계) →
          연계 방식(직접/간접) → 처리 유형(동기/비동기) → 연계 데이터 보안 순서로 정리합니다.<br/>
          <span>도면의 파란 점은 연계 데이터의 이동을 나타내며, 진행 중인 단계가 진하게 강조됩니다. 자동으로 반복 재생됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>시스템 연계(통합 구현) 개념</a></li>
            <li><a href="#requirement" onClick={(e) => scrollToId(e, 'requirement')}>연계 요구사항 분석</a></li>
            <li><a href="#dataid" onClick={(e) => scrollToId(e, 'dataid')}>연계 데이터 식별과 표준화</a></li>
            <li><a href="#mechanism" onClick={(e) => scrollToId(e, 'mechanism')}>연계 메커니즘 구성</a></li>
            <li><a href="#method" onClick={(e) => scrollToId(e, 'method')}>연계 방식 — 직접 연계 vs 간접 연계</a></li>
            <li><a href="#timing" onClick={(e) => scrollToId(e, 'timing')}>연계 처리 유형 — 동기 · 비동기 · 배치</a></li>
            <li><a href="#security" onClick={(e) => scrollToId(e, 'security')}>연계 데이터 보안</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        <section id="overview">
          <h2>1. 시스템 연계(통합 구현) 개념</h2>
          <p class="sub">서로 다른 시스템이 데이터를 주고받도록 연결하는 것이 "연계"이고, 이를 구현하는 활동 전체가 "통합 구현"이다.</p>

          <h3>1-1. 연계가 필요한 이유</h3>
          <p>하나의 기업·기관 안에서도 인사, 회계, 영업, 생산 시스템이 따로 만들어져 운영된다.
          업무는 시스템 경계를 넘나들며 흐르기 때문에, 시스템끼리 데이터를 주고받는 <strong>연계(Interface)</strong>가 반드시 필요하다.</p>
          <ul>
            <li><strong>내부 시스템 간 연계:</strong> 같은 조직 안의 서로 다른 시스템 연결.
              예) 인사 시스템의 사원 정보를 급여 시스템으로 전달, 주문 시스템의 판매 실적을 회계 시스템으로 전달.</li>
            <li><strong>대외 기관 연계:</strong> 조직 외부의 기관·기업 시스템과 연결.
              예) 은행 — 금융결제원, 쇼핑몰 — PG(결제대행)사, 기업 — 국세청·행정기관 시스템.
              외부 구간을 지나므로 <strong>보안 요구 수준이 훨씬 높다.</strong></li>
          </ul>
          <p><strong>통합 구현</strong>이란 이런 요구사항에 맞춰 송·수신 시스템과 모듈, 중계 시스템, 연계 데이터,
          네트워크를 정의하고 구현하는 것을 말한다. 요구사항·환경·목표에 따라 구현 범위와 방법은 다양하다.</p>

          <h3>1-2. 통합 구현의 5대 구성 요소</h3>
          <table>
            <tr><th>구성 요소</th><th>설명</th></tr>
            <tr><td><strong>송신 시스템</strong></td><td>연계할 데이터를 생성·추출하고, 코드 매핑·변환을 거쳐 인터페이스 테이블/파일로 만들어 <strong>전송하는</strong> 시스템 (송신 모듈 + 모니터링 기능 포함)</td></tr>
            <tr><td><strong>수신 시스템</strong></td><td>전송받은 연계 데이터를 자신의 형식·코드에 맞게 <strong>변환하여 운영 DB에 반영하는</strong> 시스템 (수신 모듈 + 모니터링 기능 포함)</td></tr>
            <tr><td><strong>중계 시스템</strong></td><td>송신과 수신 사이에서 데이터를 <strong>중계·전달</strong>하는 시스템. 내부와 외부 구간을 분리해 보안을 강화하며, 주로 대외 기관 연계 등 안전한 연계가 필요할 때 둔다</td></tr>
            <tr><td><strong>연계 데이터</strong></td><td>송·수신 시스템 간에 실제로 교환되는 데이터. 속성·길이·타입이 정의되며, 형식은 DB 테이블/파일(태그 기반, 고정·가변 길이 등)로 구분</td></tr>
            <tr><td><strong>네트워크</strong></td><td>송신 → 수신, 송신 → 중계 → 수신을 연결하는 통신망. 유선·무선, 전용선·공중망(인터넷) 등</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250" role="img" aria-label="통합 구현 5대 구성 요소 도면">
              <rect class="box" x="40" y="80" width="180" height="86" />
              <text x="130" y="112" text-anchor="middle" class="strong">송신 시스템</text>
              <text x="130" y="136" text-anchor="middle" class="small">데이터 생성·추출</text>
              <text x="130" y="154" text-anchor="middle" class="small">변환 후 전송</text>

              <rect class="boxdark" x="360" y="80" width="180" height="86" />
              <text x="450" y="112" text-anchor="middle" class="strong">중계 시스템</text>
              <text x="450" y="136" text-anchor="middle" class="small">내·외부 구간 분리</text>
              <text x="450" y="154" text-anchor="middle" class="small">보안 강화 · 전달</text>

              <rect class="box" x="680" y="80" width="180" height="86" />
              <text x="770" y="112" text-anchor="middle" class="strong">수신 시스템</text>
              <text x="770" y="136" text-anchor="middle" class="small">데이터 변환</text>
              <text x="770" y="154" text-anchor="middle" class="small">운영 DB 반영</text>

              <line class="arrow" x1="220" y1="123" x2="354" y2="123" />
              <text x="287" y="60" text-anchor="middle" class="small">연계 데이터</text>
              <line class="arrow" x1="540" y1="123" x2="674" y2="123" />
              <text x="607" y="60" text-anchor="middle" class="small">연계 데이터</text>

              <text x="450" y="210" text-anchor="middle" class="small">화살표 구간 전체 = 네트워크(통신망) — 5대 구성 요소: 송신 · 수신 · 중계 · 연계 데이터 · 네트워크</text>
            </svg>
            <figcaption>도면 1. 통합 구현의 5대 구성 요소. 중계 시스템은 필수는 아니지만 대외 연계 등 보안이 중요할 때 둔다.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            실기에서 "송신 시스템 / 수신 시스템 / 중계 시스템"은 <strong>설명을 주고 용어를 쓰게 하는 단골 문제</strong>다.
            특히 중계 시스템의 키워드 두 가지 — <strong>① 내부·외부 구간 분리 ② 보안 강화(안전한 대외 연계)</strong> — 를 반드시 기억하자.
          </div>
        </section>

        <section id="requirement">
          <h2>2. 연계 요구사항 분석</h2>
          <p class="sub">무엇을, 왜, 어떤 주기로 주고받아야 하는지를 먼저 밝혀야 연계를 설계할 수 있다.</p>

          <h3>2-1. 분석 절차</h3>
          <ol>
            <li><strong>시스템 현황 확인:</strong> 송·수신 시스템의 구성(하드웨어, OS, DBMS, 미들웨어), 네트워크 현황을 파악한다.</li>
            <li><strong>정의서·명세서 확인:</strong> 각 시스템의 테이블 정의서, 코드 정의서, 응용 프로그램 구성도 등 기존 문서를 확인해 데이터의 구조와 의미를 파악한다.</li>
            <li><strong>요구사항 분석:</strong> 개발자·사용자를 대상으로 인터뷰·설문 등을 수행하여 연계가 필요한 데이터, 사유, 주기, 형식을 도출하고 분류·정리한다.</li>
          </ol>

          <h3>2-2. 요구사항 분석 기법</h3>
          <table>
            <tr><th>기법</th><th>설명</th></tr>
            <tr><td><strong>인터뷰</strong></td><td>사용자·담당자와의 면담을 통해 연계 요구사항을 직접 도출. 심층적인 정보 수집에 유리</td></tr>
            <tr><td><strong>설문지(설문 조사)</strong></td><td>다수의 이해관계자에게 질문지를 배포해 요구를 수집. 넓은 범위의 의견을 짧은 시간에 수집</td></tr>
            <tr><td><strong>체크리스트</strong></td><td>미리 준비한 점검 항목 목록으로 시스템 운영 환경·연계 조건을 빠짐없이 확인</td></tr>
            <tr><td><strong>델파이 기법</strong></td><td>전문가 집단에게 <strong>익명 설문을 반복</strong>하여 의견을 수렴·합의하는 기법</td></tr>
          </table>
          <p>이 외에도 브레인스토밍, 기존 문서(현황 자료·정의서) 분석 등이 함께 활용된다.</p>

          <h3>2-3. 산출물 — 연계 요구사항 정의서</h3>
          <p>분석 결과는 <strong>연계 요구사항 정의서</strong>로 문서화한다. 대표 항목은 다음과 같다.</p>
          <ul>
            <li>요구사항 ID · 요구사항 명 · 유형(기능/성능/보안 등)</li>
            <li>요구사항 설명(연계할 데이터, 연계 사유)</li>
            <li>연계 주기(실시간/배치 등) · 요청 부서/담당자 · 중요도(우선순위)</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            절차 암기: <strong>시스템 현황 확인 → 정의서·명세서 확인 → 요구사항 분석(도출·정리) → 연계 요구사항 정의서 작성</strong>.
            "델파이 = 전문가 + 반복 설문 + 익명"도 시험에 자주 나오는 조합이다.
          </div>
        </section>

        <section id="dataid">
          <h2>3. 연계 데이터 식별과 표준화</h2>
          <p class="sub">송신 측과 수신 측은 데이터 구조도, 코드 체계도 다르다. 주고받을 데이터를 정하고 "공통의 약속"으로 표준화해야 한다.</p>

          <h3>3-1. 연계 데이터 식별·표준화 절차</h3>
          <ol>
            <li><strong>연계 범위 및 항목 정의:</strong> 연계할 데이터의 범위(테이블·컬럼)와 항목별 데이터 타입, 길이, 필수 여부를 정의한다. 송·수신 시스템 간 항목 이름·타입·길이가 다르면 협의하여 조정한다.</li>
            <li><strong>코드 매핑 및 데이터 변환 정의:</strong> 양쪽의 코드 체계가 다른 항목에 대해 매핑 규칙과 변환 규칙(단위 환산, 형식 변경 등)을 정의한다.</li>
            <li><strong>연계(인터페이스) 정의서 작성:</strong> 식별·표준화 결과를 인터페이스별로 문서화한다.</li>
          </ol>

          <h3>3-2. 연계 데이터 형식</h3>
          <table>
            <tr><th>형식</th><th>설명</th><th>특징</th></tr>
            <tr><td><strong>고정 길이 형식</strong></td><td>항목마다 정해진 길이(바이트)를 갖는 형식. 예) 이름 20byte + 부서코드 4byte</td><td>파싱이 단순, 공간 낭비 가능. 전문(전자금융 등)에서 사용</td></tr>
            <tr><td><strong>가변 길이 형식</strong></td><td>구분자(콤마 등)로 항목을 나누는 형식. 예) CSV</td><td>공간 효율적, 구분자 처리 필요</td></tr>
            <tr><td><strong>XML</strong></td><td>태그 기반 마크업 언어. 사용자가 태그를 정의할 수 있으며 구조적 표현·검증(스키마)이 강함</td><td>표현력·검증 우수, 상대적으로 크기가 큼</td></tr>
            <tr><td><strong>JSON</strong></td><td>속성-값(키-값) 쌍으로 이루어진 경량 데이터 교환 형식</td><td>가볍고 파싱이 쉬움. Open API·웹에서 널리 사용</td></tr>
          </table>

          <h3>3-3. 코드 매핑 — 송신 코드 → 표준 코드 → 수신 코드</h3>
          <p>송신 시스템의 부서 코드가 <code>D001</code>, 수신 시스템은 같은 부서를 <code>HR</code>로 관리한다면 그대로 보낼 수 없다.
          이때 <strong>표준 코드</strong>를 중간에 두고 두 번 변환하는 것이 코드 매핑이다.</p>
          <table>
            <tr><th>송신 시스템 코드</th><th>표준 코드 (변환 기준)</th><th>수신 시스템 코드</th></tr>
            <tr><td><code>D001</code> (인사팀)</td><td><code>STD-10</code></td><td><code>HR</code></td></tr>
            <tr><td><code>D002</code> (재무팀)</td><td><code>STD-20</code></td><td><code>FIN</code></td></tr>
          </table>
          <p>송신 측에서 <strong>송신 코드 → 표준 코드</strong>로 변환해 보내고, 수신 측에서 <strong>표준 코드 → 수신 코드</strong>로
          변환해 반영한다. 표준 코드를 두면 연계 상대가 늘어나도 각 시스템은 표준과의 매핑만 관리하면 된다.</p>

          <h3>3-4. 연계(인터페이스) 정의서 항목</h3>
          <p>연계 데이터 식별·표준화의 최종 산출물로, 인터페이스 하나마다 아래 내용을 정의한다.</p>
          <ul>
            <li><strong>인터페이스 ID · 인터페이스 명</strong> (규칙에 따른 식별자)</li>
            <li>송신 시스템 · 수신 시스템 (및 담당 부서)</li>
            <li>연계 데이터 항목(이름, 타입, 길이, 필수 여부) 및 데이터 형식</li>
            <li>연계 방식(직접/간접, 사용 기술) · 연계 주기(실시간/배치) · 처리 유형(동기/비동기)</li>
            <li>코드 매핑·변환 규칙, 오류 처리 방안</li>
          </ul>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "인터페이스 정의서(연계 정의서)"와 "연계 요구사항 정의서"를 혼동하지 말 것.
            <strong>요구사항 정의서</strong>는 분석 단계의 산출물(무엇이 필요한가),
            <strong>인터페이스 정의서</strong>는 데이터 식별·표준화 단계의 산출물(구체적으로 어떤 데이터를 어떤 형식·방식으로 주고받는가)이다.
          </div>
        </section>

        <section id="mechanism">
          <h2>4. 연계 메커니즘 구성</h2>
          <p class="sub">연계 메커니즘은 데이터를 만들어 보내는 "송신 체계"와 받아서 반영하는 "수신 체계"로 구성된다.</p>

          <h3>4-1. 송신 체계와 수신 체계</h3>
          <table>
            <tr><th>체계</th><th>역할</th><th>세부 단계</th></tr>
            <tr>
              <td><strong>송신 체계</strong></td>
              <td>운영 DB에서 연계 데이터를 만들어 전송</td>
              <td>① 연계 데이터 생성·추출 → ② 코드 매핑·데이터 변환 → ③ 인터페이스 테이블/파일 생성 → ④ 로그 기록 → ⑤ 전송</td>
            </tr>
            <tr>
              <td><strong>수신 체계</strong></td>
              <td>전송받은 데이터를 자기 시스템에 반영</td>
              <td>① 연계 데이터 수신(인터페이스 테이블/파일) → ② 로그 기록 → ③ 코드·형식 변환 → ④ 운영 DB 반영</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 430" role="img" aria-label="연계 메커니즘 전체 흐름 애니메이션 도면">
              <rect class="box" x="70" y="30" width="160" height="50" />
              <text x="150" y="61" text-anchor="middle" class="strong">송신 시스템</text>
              <rect class="boxdark" x="370" y="30" width="160" height="50" />
              <text x="450" y="61" text-anchor="middle" class="strong">중계 시스템</text>
              <rect class="box" x="670" y="30" width="160" height="50" />
              <text x="750" y="61" text-anchor="middle" class="strong">수신 시스템</text>

              <line class="life" x1="150" y1="80" x2="150" y2="395" />
              <line class="life" x1="450" y1="80" x2="450" y2="395" />
              <line class="life" x1="750" y1="80" x2="750" y2="395" />

              <g class="msg" data-step="1">
                <line class="arrow" x1="150" y1="95" x2="150" y2="138" />
                <text x="165" y="120" class="small">1. 운영 DB에서 연계 데이터 생성·추출</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="150" y1="150" x2="150" y2="193" />
                <text x="165" y="175" class="small">2. 코드 매핑·변환 → 인터페이스 테이블/파일 생성</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="150" y1="225" x2="444" y2="225" />
                <text x="297" y="215" text-anchor="middle" class="small">3. 로그 기록 후 전송</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="456" y1="258" x2="744" y2="258" />
                <text x="600" y="248" text-anchor="middle" class="small">4. 중계 시스템이 검증·중계 후 재전송</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1="750" y1="275" x2="750" y2="318" />
                <text x="735" y="300" text-anchor="end" class="small">5. 수신 및 로그 기록 (인터페이스 테이블/파일)</text>
              </g>
              <g class="msg" data-step="6">
                <line class="arrow" x1="750" y1="330" x2="750" y2="373" />
                <text x="735" y="355" text-anchor="end" class="small">6. 코드·형식 변환 후 운영 DB 반영</text>
              </g>

              <text x="450" y="415" text-anchor="middle" class="small">송·수신 양쪽 모두 각 단계의 성공/실패를 로그로 남긴다 (장애 추적·모니터링의 근거)</text>
            </svg>
            <figcaption>도면 2. 연계 메커니즘 전체 흐름 — 송신 체계(생성·추출 → 변환 → IF 테이블 생성 → 로그 → 전송)와 수신 체계(수신 → 로그 → 변환 → 반영).</figcaption>
          </figure>

          <h3>4-2. 중계 시스템의 역할</h3>
          <ul>
            <li><strong>내·외부 구간 분리:</strong> 내부 네트워크와 외부(인터넷·대외 기관) 네트워크 사이에 중계 시스템을 두어, 외부에서 내부 운영 시스템에 직접 접근하지 못하게 한다.</li>
            <li><strong>보안 강화:</strong> 전송 데이터의 검증, 암복호화, 접근 통제를 중계 구간에서 수행한다.</li>
            <li><strong>연계 관리 일원화:</strong> 여러 기관과의 연계를 중계 시스템 한 곳에서 관리·모니터링할 수 있다.</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            송신 절차 순서 나열 문제가 자주 나온다.
            <strong>생성·추출 → 코드 매핑·변환 → 인터페이스 테이블/파일 생성 → 로그 기록 → 전송</strong> 순서를 통째로 암기하자.
            수신 측은 <strong>수신 → 로그 → 변환 → 반영</strong>이다.
          </div>
        </section>

        <section id="method">
          <h2>5. 연계 방식 — 직접 연계 vs 간접 연계</h2>
          <p class="sub">중간 매개체 없이 바로 붙느냐(직접), 연계 솔루션·미들웨어를 거치느냐(간접)의 구분. 실기 단골 비교 주제.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 330" role="img" aria-label="직접 연계와 간접 연계 비교 도면">
              <text x="450" y="40" text-anchor="middle" class="strong">직접 연계 — 중간 매개체 없이 1:1 연결</text>
              <rect class="box" x="60" y="60" width="160" height="60" />
              <text x="140" y="97" text-anchor="middle" class="strong">송신 시스템</text>
              <rect class="box" x="680" y="60" width="160" height="60" />
              <text x="760" y="97" text-anchor="middle" class="strong">수신 시스템</text>
              <line class="arrow" x1="220" y1="90" x2="674" y2="90" />
              <text x="450" y="80" text-anchor="middle" class="small">DB Link · DB Connection · API · JDBC · 소켓 등</text>

              <text x="450" y="185" text-anchor="middle" class="strong">간접 연계 — 연계 솔루션(미들웨어)을 경유</text>
              <rect class="box" x="60" y="205" width="160" height="60" />
              <text x="140" y="242" text-anchor="middle" class="strong">송신 시스템</text>
              <rect class="boxdark" x="370" y="205" width="160" height="60" />
              <text x="450" y="232" text-anchor="middle" class="strong">EAI / ESB</text>
              <text x="450" y="252" text-anchor="middle" class="small">변환·중계·모니터링</text>
              <rect class="box" x="680" y="205" width="160" height="60" />
              <text x="760" y="242" text-anchor="middle" class="strong">수신 시스템</text>
              <line class="arrow" x1="220" y1="235" x2="364" y2="235" />
              <line class="arrow" x1="530" y1="235" x2="674" y2="235" />
              <text x="450" y="305" text-anchor="middle" class="small">서로 다른 프로토콜·형식도 솔루션이 변환해 주므로 이기종 환경에 유리하다</text>
            </svg>
            <figcaption>도면 3. 직접 연계는 빠르지만 결합도가 높고, 간접 연계는 유연하지만 구조가 복잡해진다.</figcaption>
          </figure>

          <h3>5-1. 직접 연계 vs 간접 연계 장단점 비교</h3>
          <table>
            <tr><th></th><th>직접 연계</th><th>간접 연계</th></tr>
            <tr>
              <td><strong>장점</strong></td>
              <td>구현이 단순하고 개발 비용·기간이 적음.<br/>중간 매개체가 없어 처리 속도가 빠름</td>
              <td>서로 다른 네트워크·프로토콜 등 <strong>이기종 환경 간 연계 가능</strong>.<br/>인터페이스 변경 시 유연하게 대처 가능.<br/>보안·로직 반영(모니터링·통제) 용이</td>
            </tr>
            <tr>
              <td><strong>단점</strong></td>
              <td>시스템 간 <strong>결합도가 높아</strong> 한쪽 변경 시 양쪽 모두 수정 필요.<br/>암복호화 등 보안·업무 로직 적용이 어려움.<br/>이기종 환경 간 연계가 어려움(전문 솔루션 필요)</td>
              <td>연계 아키텍처·매커니즘이 복잡해짐.<br/>중간 매개체(솔루션)로 인해 성능 저하 가능.<br/>개발·테스트 기간이 김</td>
            </tr>
            <tr>
              <td><strong>대표 기술</strong></td>
              <td>DB Link, DB Connection(DBCP), API/Open API, JDBC, 화면 링크(Hyper Link), 소켓(Socket)</td>
              <td>연계 솔루션(EAI), ESB, 웹 서비스(Web Service), 소켓(Socket)</td>
            </tr>
          </table>

          <h3>5-2. 연계 기술 한 줄 정의</h3>
          <table>
            <tr><th>기술</th><th>구분</th><th>한 줄 정의</th></tr>
            <tr><td><strong>DB Link</strong></td><td>직접</td><td>수신 시스템의 DB에서 송신 시스템의 DB로 연결하는 <strong>DB에서 제공하는 링크 객체</strong>를 만들어 원격 DB 객체에 직접 접근</td></tr>
            <tr><td><strong>DB Connection</strong></td><td>직접</td><td>수신 시스템의 WAS에서 송신 시스템 DB로 연결하는 <strong>커넥션 풀(DBCP)</strong>을 생성하고 이를 이용해 연계</td></tr>
            <tr><td><strong>API / Open API</strong></td><td>직접</td><td>송신 시스템의 DB 데이터를 제공하는 <strong>응용 프로그램 인터페이스(함수·URL)</strong>를 만들어 호출 방식으로 연계</td></tr>
            <tr><td><strong>JDBC</strong></td><td>직접</td><td>수신 시스템의 프로그램에서 <strong>JDBC 드라이버</strong>로 송신 시스템 DB에 직접 연결해 데이터 조회</td></tr>
            <tr><td><strong>화면 링크 (Hyper Link)</strong></td><td>직접</td><td>웹 화면에서 <strong>하이퍼링크</strong>로 상대 시스템의 화면을 직접 연결</td></tr>
            <tr><td><strong>소켓 (Socket)</strong></td><td>직접/간접</td><td>서버가 <strong>포트를 열고 대기</strong>, 클라이언트 요청 시 연결을 맺어 데이터를 송수신하는 네트워크 기술</td></tr>
            <tr><td><strong>EAI</strong></td><td>간접</td><td>기업 내 서로 다른 애플리케이션을 <strong>중앙에서 통합·중계·변환</strong>해 주는 연계 솔루션 (Enterprise Application Integration)</td></tr>
            <tr><td><strong>ESB</strong></td><td>간접</td><td>애플리케이션 간 연계를 <strong>표준 기반의 버스(Bus) 형태 미들웨어</strong>로 제공. 서비스 중심, <strong>느슨한 결합(Loosely Coupled)</strong> 지향 (Enterprise Service Bus)</td></tr>
            <tr><td><strong>웹 서비스 (Web Service)</strong></td><td>간접</td><td>WSDL로 서비스를 기술하고 <strong>SOAP 프로토콜</strong>로, 또는 REST 방식으로 네트워크를 통해 서비스 제공 (WSDL · UDDI · SOAP)</td></tr>
          </table>

          <h3>5-3. 참고 — EAI 구축 유형</h3>
          <table>
            <tr><th>유형</th><th>설명</th></tr>
            <tr><td><strong>Point-to-Point</strong></td><td>중간 매개 없이 애플리케이션을 <strong>1:1로 직접 연결</strong>. 단순·저렴하나 연결이 늘수록 관리가 어려움</td></tr>
            <tr><td><strong>Hub & Spoke</strong></td><td><strong>중앙 허브</strong>를 두고 모든 연계가 허브를 경유하는 중앙 집중형. 확장·유지보수 용이, 허브 장애 시 전체 영향</td></tr>
            <tr><td><strong>Message Bus</strong></td><td>애플리케이션 사이에 <strong>미들웨어(버스)</strong>를 두고 연계하는 방식. 뛰어난 확장성·대용량 처리</td></tr>
            <tr><td><strong>Hybrid</strong></td><td>그룹 내부는 Hub & Spoke, 그룹 간에는 Message Bus를 쓰는 혼합형</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            비교 표 문제 대비 요약 — 직접 연계: <strong>단순·빠름 / 결합도 높음·변경에 취약</strong>,
            간접 연계: <strong>이기종 연계 가능·유연함 / 복잡·성능 저하 가능</strong>.
            기술 분류 문제에서는 <strong>EAI · ESB · 웹 서비스 = 간접</strong>, 나머지(DB Link, DBCP, API, JDBC, 하이퍼링크)는 직접으로 분류한다.
          </div>
        </section>

        <section id="timing">
          <h2>6. 연계 처리 유형 — 동기 · 비동기 · 배치</h2>
          <p class="sub">"응답을 기다리느냐"와 "언제 처리하느냐"는 다른 축이다. 동기/비동기 × 실시간/배치로 나눠 생각한다.</p>

          <h3>6-1. 동기(Sync) vs 비동기(Async)</h3>
          <table>
            <tr><th></th><th>동기 (Synchronous)</th><th>비동기 (Asynchronous)</th></tr>
            <tr><td><strong>동작</strong></td><td>요청을 보낸 뒤 <strong>응답이 올 때까지 대기</strong>(블로킹)한 후 다음 작업 진행</td><td>요청만 보내 두고 <strong>대기 없이 다음 작업 진행</strong>. 응답은 나중에 콜백·조회로 처리</td></tr>
            <tr><td><strong>구조</strong></td><td>요청 → (대기) → 응답의 <strong>요청·응답이 한 쌍</strong>으로 묶임</td><td>요청과 응답이 분리됨. 중간에 큐(Queue) 등을 두는 경우가 많음</td></tr>
            <tr><td><strong>적합한 경우</strong></td><td>결과를 즉시 알아야 하는 업무 — 계좌 이체, 결제 승인, 로그인 인증</td><td>즉시 결과가 필요 없는 업무 — 알림 발송, 통계 집계, 대량 데이터 전달</td></tr>
            <tr><td><strong>유의점</strong></td><td>상대 시스템이 느리면 <strong>내 시스템도 함께 지연</strong>(장애 전파)</td><td>처리 완료 여부 확인·재처리 등 <strong>후속 관리 로직</strong>이 필요</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 320" role="img" aria-label="동기와 비동기 처리 비교 도면">
              <text x="240" y="30" text-anchor="middle" class="strong">동기 (Sync)</text>
              <rect class="box" x="60" y="45" width="120" height="42" />
              <text x="120" y="72" text-anchor="middle" class="small strong">송신</text>
              <rect class="box" x="300" y="45" width="120" height="42" />
              <text x="360" y="72" text-anchor="middle" class="small strong">수신</text>
              <line class="life" x1="120" y1="87" x2="120" y2="280" />
              <line class="life" x1="360" y1="87" x2="360" y2="280" />
              <line class="arrow" x1="120" y1="115" x2="354" y2="115" />
              <text x="237" y="105" text-anchor="middle" class="small">요청</text>
              <text x="132" y="165" class="small">응답까지 대기(블로킹)</text>
              <line class="arrow ret" x1="360" y1="210" x2="126" y2="210" />
              <text x="237" y="200" text-anchor="middle" class="small">응답</text>
              <text x="132" y="255" class="small">응답 확인 후 다음 작업</text>

              <text x="690" y="30" text-anchor="middle" class="strong">비동기 (Async)</text>
              <rect class="box" x="520" y="45" width="120" height="42" />
              <text x="580" y="72" text-anchor="middle" class="small strong">송신</text>
              <rect class="box" x="760" y="45" width="120" height="42" />
              <text x="820" y="72" text-anchor="middle" class="small strong">수신</text>
              <line class="life" x1="580" y1="87" x2="580" y2="280" />
              <line class="life" x1="820" y1="87" x2="820" y2="280" />
              <line class="arrow" x1="580" y1="115" x2="814" y2="115" />
              <text x="697" y="105" text-anchor="middle" class="small">요청 (큐 적재)</text>
              <text x="592" y="165" class="small">대기 없이 다음 작업 진행</text>
              <line class="arrow ret" x1="820" y1="230" x2="586" y2="230" />
              <text x="697" y="220" text-anchor="middle" class="small">나중에 응답 · 콜백 통지</text>

              <text x="450" y="305" text-anchor="middle" class="small">동기: 요청·응답이 한 쌍 / 비동기: 요청과 응답이 분리되어 각자 진행</text>
            </svg>
            <figcaption>도면 4. 동기는 응답을 기다렸다 진행하고, 비동기는 요청 후 자기 일을 계속한다.</figcaption>
          </figure>

          <h3>6-2. 실시간 · 근실시간 · 배치</h3>
          <table>
            <tr><th>유형</th><th>설명</th><th>예시</th></tr>
            <tr><td><strong>실시간 (Real-time)</strong></td><td>데이터 발생 즉시 연계·처리. 사용자가 지연을 느끼지 않아야 함</td><td>결제 승인, 좌석 예약, 조회 서비스</td></tr>
            <tr><td><strong>근실시간 (Near Real-time)</strong></td><td>수 초 ~ 수 분의 짧은 주기로 모아서 연계. 실시간에 가깝지만 약간의 지연 허용</td><td>주문 현황 집계, 로그 수집·전달</td></tr>
            <tr><td><strong>배치 (Batch)</strong></td><td>일정 주기(일·주 단위 등)로 <strong>대량의 데이터를 모아 일괄 처리</strong>. 주로 야간 등 부하가 적은 시간대에 수행</td><td>일 마감 정산, 대외 기관 일일 보고, 백업</td></tr>
          </table>

          <h3>6-3. 처리 유형 선택 기준</h3>
          <ul>
            <li><strong>업무 특성:</strong> 결과를 즉시 반영해야 하는가? → 실시간·동기. 모아서 처리해도 되는가? → 배치·비동기.</li>
            <li><strong>데이터 발생 빈도·양:</strong> 대량 데이터의 주기적 이관은 배치가 효율적이다.</li>
            <li><strong>시스템 부하:</strong> 상대 시스템·네트워크에 줄 부하를 고려해 주기와 방식을 정한다.</li>
            <li><strong>장애 영향도:</strong> 동기 연계는 상대 장애가 곧 내 장애가 되므로, 필수적이지 않으면 비동기로 격리한다.</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            시험 포인트 — <strong>동기 = 응답까지 대기 후 진행</strong>, <strong>비동기 = 요청 후 대기 없이 다음 작업</strong>,
            <strong>배치 = 대량 데이터를 일정 주기로 일괄 처리</strong>. 세 정의를 그대로 쓸 수 있게 문장으로 외워 두자.
          </div>
        </section>

        <section id="security">
          <h2>7. 연계 데이터 보안</h2>
          <p class="sub">연계 데이터는 시스템 밖으로 나가는 데이터다. 전송 구간과 데이터 자체를 모두 보호해야 한다.</p>

          <h3>7-1. 전송 구간 보안</h3>
          <ul>
            <li><strong>전용선:</strong> 두 기관 사이를 물리적으로 독립된 회선으로 연결. 보안성이 높으나 비용이 큼.</li>
            <li><strong>VPN (Virtual Private Network):</strong> 공중망(인터넷)을 암호화 터널로 감싸 <strong>전용선처럼 사용하는 가상 사설망</strong>. 비용 대비 효율적.</li>
            <li><strong>암호화 프로토콜:</strong> 전송 계층·응용 계층에서 데이터를 암호화하는 프로토콜 적용 — TLS/SSL(HTTPS), SFTP, IPSec 등.</li>
            <li>전송 구간 암호화를 위해 VPN 장비·암호화 모듈 설치 등 인프라 지원이 필요하다.</li>
          </ul>

          <h3>7-2. 데이터 보안 (암복호화)</h3>
          <ul>
            <li>송신 시스템에서 연계 데이터를 <strong>암호화하여 전송</strong>하고, 수신 시스템에서 <strong>복호화 후 반영</strong>한다.</li>
            <li><strong>대칭키 암호화:</strong> 암호화와 복호화에 <strong>같은 키</strong> 사용. 빠르지만 키 전달(공유)이 문제. 예) AES, SEED, ARIA.</li>
            <li><strong>비대칭키(공개키) 암호화:</strong> 공개키로 암호화, <strong>개인키로 복호화</strong>. 키 분배가 안전하나 느림. 예) RSA, ECC.</li>
            <li>실무에서는 데이터는 대칭키로, 대칭키 자체는 비대칭키로 암호화해 전달하는 혼합 방식을 많이 쓴다.</li>
            <li><strong>암호화 대상:</strong> 개인정보(주민등록번호, 여권번호, 운전면허번호, 외국인등록번호, 계좌번호, 카드번호, 비밀번호, 바이오정보 등)와 법·정책상 중요 데이터는 반드시 암호화한다.</li>
          </ul>

          <h3>7-3. 연계 로그와 장애 처리 절차</h3>
          <p>송·수신 시스템은 각 단계(추출, 변환, 전송, 수신, 반영)의 정상/오류 내역을 <strong>연계 로그</strong>로 기록한다.
          로그는 장애 원인 분석과 재처리의 근거가 된다. 장애·오류 발생 시 처리 절차는 다음과 같다.</p>
          <ol>
            <li><strong>오류 식별:</strong> 모니터링 화면·알림, 로그를 통해 오류 발생을 인지하고 오류 코드를 확인한다.</li>
            <li><strong>로그 확인:</strong> 오류가 발생한 구간(송신/중계/수신)과 단계의 로그를 조회해 상세 내역을 확인한다.</li>
            <li><strong>원인 분석:</strong> 오류 코드·로그를 근거로 원인(데이터 오류, 네트워크 장애, 프로그램 결함 등)을 분석하고 해결 방안을 정한다.</li>
            <li><strong>수정 및 재작업:</strong> 원인을 조치한 후 실패한 연계 데이터를 <strong>재전송·재반영(재작업)</strong>하고 정상 처리를 확인한다.</li>
          </ol>

          <h3>7-4. 모니터링</h3>
          <ul>
            <li>연계 건수, 성공/실패 건수, 처리 시간을 상시 모니터링하고 임계치 초과 시 담당자에게 알린다.</li>
            <li>주기적으로 로그를 점검해 누락·중복 전송 여부를 확인하고, 오류 유형별 통계로 재발을 방지한다.</li>
          </ul>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            로그 기록은 송신 체계와 수신 체계 <strong>양쪽 모두</strong>에서 수행하는 필수 단계다.
            "전송만 잘 되면 된다"가 아니라, <strong>어느 단계에서 실패했는지 추적 가능해야</strong> 재작업이 가능하다.
            절차 문제에서 로그 기록 단계를 빠뜨리지 않도록 주의하자.
          </div>
        </section>

        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">설명을 읽고 용어를 쓰거나, 보기에서 고르거나, 순서를 나열하는 실기 출제 유형으로 구성했다. 답을 먼저 쓴 뒤 펼쳐서 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 통합 구현 구성 요소를 쓰시오.</p>
            <pre>{`송신 시스템과 수신 시스템 사이에서 연계 데이터를 전달하는 시스템으로,
내부 구간과 외부 구간을 분리하여 보안을 강화하며,
주로 대외 기관과의 안전한 연계가 필요한 경우에 설치한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>중계 시스템<br/>
                <span class="label">해설: </span>중계 시스템의 핵심 키워드는 "내·외부 구간 분리"와 "보안 강화"다. 송신·수신 시스템과 함께 통합 구현의 구성 요소에 해당한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 보기 중 <strong>간접 연계</strong> 방식에 해당하는 기술을 모두 골라 쓰시오.</p>
            <pre>{`ㄱ. DB Link    ㄴ. EAI    ㄷ. Open API    ㄹ. ESB
ㅁ. JDBC       ㅂ. 웹 서비스(Web Service)    ㅅ. 화면 링크(Hyper Link)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ㄴ(EAI), ㄹ(ESB), ㅂ(웹 서비스)<br/>
                <span class="label">해설: </span>간접 연계는 연계 솔루션·미들웨어를 경유하는 방식으로 EAI, ESB, 웹 서비스가 대표적이다. DB Link, Open API, JDBC, 화면 링크는 직접 연계 기술이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 직접 연계 기술을 쓰시오.</p>
            <pre>{`수신 시스템의 데이터베이스에서 송신 시스템의 데이터베이스로 연결되는
링크 객체를 생성한 뒤, 이를 통해 원격 DB의 테이블 등 객체에
직접 접근하여 데이터를 연계하는, DBMS가 제공하는 기능이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>DB 링크 (DB Link)<br/>
                <span class="label">해설: </span>"DB에서 제공하는 링크 객체 생성"이 핵심 단서다. WAS에서 커넥션 풀을 만들어 연계하면 DB Connection(DBCP), 드라이버로 직접 접속하면 JDBC로 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음은 연계 처리 유형에 대한 설명이다. 괄호 ①, ②에 들어갈 용어를 쓰시오.</p>
            <pre>{`( ① ) 방식은 요청을 보낸 후 응답이 돌아올 때까지 대기하였다가
       응답을 확인한 뒤 다음 작업을 진행한다.
( ② ) 방식은 요청을 보낸 후 응답을 기다리지 않고 다음 작업을
       진행하며, 응답은 이후에 콜백 등으로 별도 처리한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 동기(Synchronous, Sync) ② 비동기(Asynchronous, Async)<br/>
                <span class="label">해설: </span>"응답까지 대기 = 동기", "대기 없이 다음 작업 = 비동기"가 구분 기준이다. 동기는 결제·인증처럼 결과를 즉시 알아야 하는 업무에 쓰인다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">연계 메커니즘에서 <strong>송신 체계</strong>의 처리 절차를 순서대로 기호로 나열하시오.</p>
            <pre>{`ㄱ. 전송
ㄴ. 연계 데이터 생성 및 추출
ㄷ. 코드 매핑 및 데이터 변환
ㄹ. 인터페이스 테이블/파일 생성
ㅁ. 로그 기록`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ㄴ → ㄷ → ㄹ → ㅁ → ㄱ<br/>
                <span class="label">해설: </span>송신 체계는 생성·추출 → 코드 매핑·변환 → 인터페이스 테이블/파일 생성 → 로그 기록 → 전송 순으로 진행된다. 수신 체계는 수신 → 로그 → 변환 → 반영 순이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 설명에 해당하는 EAI 구축 유형을 쓰시오.</p>
            <pre>{`단일 접점인 중앙 허브 시스템을 두고 모든 애플리케이션 연계가
허브를 경유하도록 하는 중앙 집중형 방식이다. 확장과 유지보수가
용이하지만, 허브에 장애가 발생하면 전체 연계에 영향을 미친다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Hub & Spoke (허브 앤 스포크)<br/>
                <span class="label">해설: </span>"중앙 허브", "허브 장애 시 전체 영향"이 단서다. 1:1 직접 연결은 Point-to-Point, 미들웨어 버스를 두면 Message Bus, 혼합형은 Hybrid다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명에 해당하는 연계 데이터 형식(표현 방식)을 쓰시오.</p>
            <pre>{`속성-값(키-값) 쌍으로 데이터를 표현하는 개방형 표준의
경량(Lightweight) 데이터 교환 형식으로, 사람이 읽기 쉽고
파싱이 간단하여 Open API 등 비동기 데이터 교환에 널리 사용된다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>JSON (JavaScript Object Notation)<br/>
                <span class="label">해설: </span>"속성-값 쌍 + 경량 데이터 교환 형식"이면 JSON이다. 사용자 정의 태그로 구조를 표현하는 마크업 언어라면 XML로 답한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 설명에 해당하는 전송 구간 보안 기술을 쓰시오.</p>
            <pre>{`인터넷과 같은 공중망을 마치 전용선으로 연결한 것처럼
사용할 수 있게 하는 가상의 사설 통신망으로, 터널링과
암호화를 통해 연계 데이터의 전송 구간을 보호한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>VPN (Virtual Private Network, 가상 사설망)<br/>
                <span class="label">해설: </span>"공중망을 전용선처럼", "가상 사설망"이 핵심 단서다. 물리적으로 독립된 회선을 쓰는 전용선보다 비용 효율이 높다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 연계 요구사항 분석 기법을 쓰시오.</p>
            <pre>{`전문가 집단을 대상으로 익명의 설문을 여러 차례 반복하여
의견을 수렴하고, 이를 종합·환류하면서 합의된 결론을
도출하는 요구사항 분석 기법이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>델파이 기법 (Delphi)<br/>
                <span class="label">해설: </span>"전문가 + 익명 + 반복 설문 + 의견 수렴"의 조합이면 델파이 기법이다. 소수 담당자와 면담하면 인터뷰, 점검 항목 목록으로 확인하면 체크리스트다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 설명에 해당하는 간접 연계 기술을 쓰시오.</p>
            <pre>{`애플리케이션 간의 연계와 데이터 변환, 웹 서비스 지원 등을
표준 기반의 버스(Bus) 형태 미들웨어로 제공하는 기술로,
서비스 중심의 통합을 지향하며 애플리케이션 간의
느슨한 결합(Loosely Coupled)을 특징으로 한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ESB (Enterprise Service Bus)<br/>
                <span class="label">해설: </span>"버스 형태 미들웨어 + 느슨한 결합 + 서비스 중심"이면 ESB다. 기업 내 애플리케이션의 중앙 집중식 통합·중계에 초점을 두면 EAI로 답한다.
              </div>
            </details>
          </div>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">EAI 구축 유형 4가지</span>
            <span class="kw">SOAP · WSDL · UDDI</span>
            <span class="kw">REST API</span>
            <span class="kw">인터페이스 명세서</span>
            <span class="kw">IPC (프로세스 간 통신)</span>
            <span class="kw">AJAX</span>
            <span class="kw">미들웨어 (MOM · TP 모니터)</span>
            <span class="kw">인터페이스 구현 검증 도구 (xUnit · STAF · watir)</span>
            <span class="kw">IPSec · SSL/TLS · S-HTTP</span>
            <span class="kw">시큐어 코딩</span>
          </p>
        </section>

        <footer>연계 메커니즘 구성과 개념 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
