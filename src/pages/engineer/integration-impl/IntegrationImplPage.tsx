import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './integration-impl.css'

export default defineComponent({
  name: 'IntegrationImplPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>내외부 연계 모듈 구현</h1>
          <p>연계 모듈 구현 환경 구성부터 EAI 구축 유형 4가지, ESB, 웹 서비스(SOAP·WSDL·UDDI), REST, IPC,<br/>
          연계 테이블 방식과 연계 테스트까지 — 정보처리기사 실기 "통합 구현" 파트를 도면과 표로 정리한 학습 문서입니다.<br/>
          <span>애니메이션 도면의 파란 점은 데이터·메시지의 이동을 나타내며, 진행 중인 단계가 진하게 강조됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>내외부 연계 모듈 구현 개요</a></li>
            <li><a href="#eai" onClick={(e) => scrollToId(e, 'eai')}>EAI — 구축 유형 4가지</a></li>
            <li><a href="#esb" onClick={(e) => scrollToId(e, 'esb')}>ESB — 서비스 중심의 버스형 통합</a></li>
            <li><a href="#webservice" onClick={(e) => scrollToId(e, 'webservice')}>웹 서비스 — SOAP · WSDL · UDDI</a></li>
            <li><a href="#rest" onClick={(e) => scrollToId(e, 'rest')}>REST 방식 연계 — JSON vs XML</a></li>
            <li><a href="#env" onClick={(e) => scrollToId(e, 'env')}>연계 모듈 구현 환경 구성 — IPC · 연계 테이블</a></li>
            <li><a href="#test" onClick={(e) => scrollToId(e, 'test')}>연계 테스트와 검증</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ================================================================ */}
        <section id="overview">
          <h2>1. 내외부 연계 모듈 구현 개요</h2>
          <p class="sub">서로 다른 시스템(기업 내부 시스템끼리, 또는 내부 시스템과 외부 기관 시스템)이 데이터를 주고받도록 잇는 모듈을 만드는 일이 "내외부 연계 모듈 구현"이다.</p>

          <h3>1-1. 연계 모듈 구현 절차</h3>
          <ol>
            <li><strong>연계 메커니즘 정의:</strong> 무엇을(연계 데이터), 언제(주기·실시간 여부), 어떻게(직접/간접 방식) 주고받을지 확정한다.</li>
            <li><strong>연계 아키텍처(솔루션) 선정:</strong> EAI, ESB, 웹 서비스(SOAP/REST) 중 요구사항에 맞는 방식을 선택한다.</li>
            <li><strong>연계 모듈 구현 환경 구성:</strong> 연계 서버·어댑터 설치, 인터페이스 테이블/파일 정의, 통신 환경(IPC·네트워크) 준비.</li>
            <li><strong>송신·수신 모듈 구현:</strong> 송신 측은 데이터 생성·코드 매핑·변환·적재, 수신 측은 수집·파싱·검증·업무 반영을 구현한다.</li>
            <li><strong>연계 테스트와 검증:</strong> 테스트 케이스 기반으로 단위·통합 관점에서 송수신 결과를 검증한다.</li>
          </ol>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 220" role="img" aria-label="송신 시스템, 중계 시스템, 수신 시스템으로 이어지는 연계 메커니즘 도면">
              <rect class="box" x="40" y="60" width="210" height="110" />
              <text x="145" y="92" text-anchor="middle" class="strong">송신 시스템</text>
              <text x="145" y="118" text-anchor="middle" class="small">데이터 생성 · 추출</text>
              <text x="145" y="140" text-anchor="middle" class="small">코드 매핑 · 형식 변환</text>

              <rect class="boxdark" x="345" y="60" width="210" height="110" />
              <text x="450" y="92" text-anchor="middle" class="strong">중계 시스템</text>
              <text x="450" y="118" text-anchor="middle" class="small">전송 · 라우팅</text>
              <text x="450" y="140" text-anchor="middle" class="small">보안 · 모니터링</text>

              <rect class="box" x="650" y="60" width="210" height="110" />
              <text x="755" y="92" text-anchor="middle" class="strong">수신 시스템</text>
              <text x="755" y="118" text-anchor="middle" class="small">수집 · 파싱 · 검증</text>
              <text x="755" y="140" text-anchor="middle" class="small">업무 테이블 반영</text>

              <line class="arrow" x1="250" y1="115" x2="339" y2="115" />
              <text x="297" y="45" text-anchor="middle" class="small">연계 데이터 전송</text>
              <line class="arrow" x1="555" y1="115" x2="644" y2="115" />
              <text x="600" y="45" text-anchor="middle" class="small">변환 데이터 전달</text>
              <text x="450" y="200" text-anchor="middle" class="small">중계 시스템은 내부 ↔ 외부처럼 보안 구간을 넘는 간접 연계에서 주로 사용된다</text>
            </svg>
            <figcaption>도면 1. 연계 메커니즘의 기본 구성 — 송신 · 중계 · 수신 시스템의 역할 분담.</figcaption>
          </figure>

          <h3>1-2. 연계 아키텍처 선택 기준</h3>
          <table>
            <tr><th>구분</th><th>EAI</th><th>ESB</th><th>웹 서비스(SOAP/REST)</th></tr>
            <tr><td><strong>적용 범위</strong></td><td>기업 <strong>내부</strong> 애플리케이션 통합</td><td>기업 내부 + 외부 <strong>서비스</strong> 연계</td><td>인터넷 표준 기반의 내·외부 개방형 연계</td></tr>
            <tr><td><strong>결합도</strong></td><td>애플리케이션 중심, 상대적으로 강한 결합</td><td>서비스 중심, <strong>느슨한 결합</strong></td><td>표준 인터페이스 기반 느슨한 결합</td></tr>
            <tr><td><strong>핵심 기술</strong></td><td>어댑터, 브로커, 메시지 큐</td><td>버스형 미들웨어, 표준 메시징</td><td>SOAP·WSDL·UDDI / HTTP·URI·JSON</td></tr>
            <tr><td><strong>선택 기준</strong></td><td>이기종 내부 시스템의 데이터 통합·동기화</td><td>SOA 기반 서비스 재사용·오케스트레이션</td><td>불특정 외부 파트너와의 개방형 인터페이스</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            시험에서는 <strong>"어디까지 통합하는가"</strong>로 구분한다.
            기업 <strong>내부</strong> 애플리케이션 통합이면 <strong>EAI</strong>,
            서비스 중심으로 <strong>느슨하게(버스로)</strong> 묶으면 <strong>ESB</strong>,
            표준 프로토콜로 <strong>외부에 개방</strong>하면 <strong>웹 서비스</strong>다.
          </div>
        </section>

        {/* ================================================================ */}
        <section id="eai">
          <h2>2. EAI(Enterprise Application Integration) — 구축 유형 4가지</h2>
          <p class="sub">기업 내에서 운영되는 서로 다른 플랫폼·애플리케이션을 유기적으로 연계해 데이터를 통합하는 솔루션. 구축 유형 4가지는 실기 최단골이다.</p>

          <h3>2-1. EAI 개념</h3>
          <p><strong>EAI</strong>는 기업 내 상호 연관된 모든 애플리케이션(ERP, CRM, 레거시 등)을 <strong>미들웨어(어댑터·브로커)</strong>를 통해
          연동하여 데이터의 <strong>통합·동기화</strong>와 프로세스의 효율적 운영을 가능하게 하는 통합 솔루션이다.
          핵심 구성 요소는 각 애플리케이션과 연결되는 <strong>어댑터(Adapter)</strong>, 메시지를 중개하는 <strong>브로커(Broker)</strong>,
          비동기 전달을 담당하는 <strong>메시지 큐(Message Queue)</strong>다.</p>

          <h3>2-2. 구축 유형 4가지 비교도</h3>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 500" role="img" aria-label="EAI 구축 유형 4가지 비교 도면">
              {/* 사분면 구분선 */}
              <line class="life" x1="450" y1="30" x2="450" y2="470" />
              <line class="life" x1="30" y1="252" x2="870" y2="252" />

              {/* ① Point-to-Point */}
              <text x="230" y="48" text-anchor="middle" class="strong">① Point-to-Point</text>
              <rect class="box" x="90" y="80" width="80" height="34" />
              <text x="130" y="102" text-anchor="middle" class="small">앱 A</text>
              <rect class="box" x="310" y="80" width="80" height="34" />
              <text x="350" y="102" text-anchor="middle" class="small">앱 B</text>
              <rect class="box" x="90" y="180" width="80" height="34" />
              <text x="130" y="202" text-anchor="middle" class="small">앱 C</text>
              <rect class="box" x="310" y="180" width="80" height="34" />
              <text x="350" y="202" text-anchor="middle" class="small">앱 D</text>
              <line class="link" x1="170" y1="97" x2="310" y2="97" />
              <line class="link" x1="170" y1="197" x2="310" y2="197" />
              <line class="link" x1="130" y1="114" x2="130" y2="180" />
              <line class="link" x1="350" y1="114" x2="350" y2="180" />
              <line class="link" x1="165" y1="112" x2="315" y2="183" />
              <line class="link" x1="315" y1="112" x2="165" y2="183" />
              <text x="230" y="238" text-anchor="middle" class="small">미들웨어 없이 1:1 직접 연결</text>

              {/* ② Hub & Spoke */}
              <text x="670" y="48" text-anchor="middle" class="strong">② Hub {'&'} Spoke</text>
              <rect class="box" x="630" y="62" width="80" height="30" />
              <text x="670" y="82" text-anchor="middle" class="small">앱 A</text>
              <rect class="box" x="490" y="117" width="80" height="30" />
              <text x="530" y="137" text-anchor="middle" class="small">앱 B</text>
              <rect class="box" x="770" y="117" width="80" height="30" />
              <text x="810" y="137" text-anchor="middle" class="small">앱 C</text>
              <rect class="box" x="630" y="190" width="80" height="28" />
              <text x="670" y="209" text-anchor="middle" class="small">앱 D</text>
              <rect class="boxdark" x="610" y="112" width="120" height="40" />
              <text x="670" y="137" text-anchor="middle" class="strong">허브(Hub)</text>
              <line class="link" x1="670" y1="92" x2="670" y2="112" />
              <line class="link" x1="670" y1="152" x2="670" y2="190" />
              <line class="link" x1="570" y1="132" x2="610" y2="132" />
              <line class="link" x1="770" y1="132" x2="730" y2="132" />
              <text x="670" y="238" text-anchor="middle" class="small">중앙 허브에 집중 — 허브 장애 시 전체 영향</text>

              {/* ③ Message Bus */}
              <text x="230" y="288" text-anchor="middle" class="strong">③ Message Bus</text>
              <rect class="box" x="55" y="320" width="80" height="32" />
              <text x="95" y="341" text-anchor="middle" class="small">앱 A</text>
              <rect class="box" x="150" y="320" width="80" height="32" />
              <text x="190" y="341" text-anchor="middle" class="small">앱 B</text>
              <rect class="box" x="245" y="320" width="80" height="32" />
              <text x="285" y="341" text-anchor="middle" class="small">앱 C</text>
              <rect class="box" x="340" y="320" width="80" height="32" />
              <text x="380" y="341" text-anchor="middle" class="small">앱 D</text>
              <line class="link" x1="95" y1="352" x2="95" y2="392" />
              <line class="link" x1="190" y1="352" x2="190" y2="392" />
              <line class="link" x1="285" y1="352" x2="285" y2="392" />
              <line class="link" x1="380" y1="352" x2="380" y2="392" />
              <rect class="boxdark" x="40" y="392" width="395" height="30" />
              <text x="237" y="412" text-anchor="middle" class="small strong">Message Bus (미들웨어 버스)</text>
              <text x="230" y="455" text-anchor="middle" class="small">애플리케이션 사이에 버스를 두어 연계 — 뛰어난 확장성</text>

              {/* ④ Hybrid */}
              <text x="670" y="288" text-anchor="middle" class="strong">④ Hybrid</text>
              <rect class="box" x="487" y="310" width="66" height="28" />
              <text x="520" y="329" text-anchor="middle" class="small">앱</text>
              <rect class="box" x="563" y="310" width="66" height="28" />
              <text x="596" y="329" text-anchor="middle" class="small">앱</text>
              <rect class="boxdark" x="508" y="356" width="100" height="30" />
              <text x="558" y="376" text-anchor="middle" class="small strong">허브 1</text>
              <line class="link" x1="520" y1="338" x2="545" y2="356" />
              <line class="link" x1="596" y1="338" x2="571" y2="356" />
              <rect class="box" x="707" y="310" width="66" height="28" />
              <text x="740" y="329" text-anchor="middle" class="small">앱</text>
              <rect class="box" x="783" y="310" width="66" height="28" />
              <text x="816" y="329" text-anchor="middle" class="small">앱</text>
              <rect class="boxdark" x="728" y="356" width="100" height="30" />
              <text x="778" y="376" text-anchor="middle" class="small strong">허브 2</text>
              <line class="link" x1="740" y1="338" x2="765" y2="356" />
              <line class="link" x1="816" y1="338" x2="791" y2="356" />
              <rect class="boxdark" x="480" y="420" width="390" height="28" />
              <text x="675" y="439" text-anchor="middle" class="small strong">Message Bus</text>
              <line class="link" x1="558" y1="386" x2="558" y2="420" />
              <line class="link" x1="778" y1="386" x2="778" y2="420" />
              <text x="670" y="472" text-anchor="middle" class="small">그룹 내 Hub {'&'} Spoke + 그룹 간 Message Bus</text>
            </svg>
            <figcaption>도면 2. EAI 구축 유형 4가지 — Point-to-Point · Hub {'&'} Spoke · Message Bus · Hybrid.</figcaption>
          </figure>

          <h3>2-3. 유형별 정의와 장단점</h3>
          <table>
            <tr><th>유형</th><th>구조</th><th>장점</th><th>단점</th></tr>
            <tr>
              <td><strong>Point-to-Point</strong></td>
              <td>미들웨어 없이 애플리케이션끼리 <strong>1:1 직접 연결</strong></td>
              <td>구조가 단순하고 소규모에서는 저비용</td>
              <td>시스템이 늘면 연결이 N(N−1)/2개로 폭증, 변경·재사용·유지보수가 어려움</td>
            </tr>
            <tr>
              <td><strong>Hub {'&'} Spoke</strong></td>
              <td>단일 접점인 <strong>중앙 허브</strong>를 통해 모든 데이터를 중계</td>
              <td>연결 수가 줄어 관리·확장이 용이</td>
              <td>허브에 부하가 집중되고, <strong>허브 장애 시 전체 연계가 마비</strong></td>
            </tr>
            <tr>
              <td><strong>Message Bus</strong></td>
              <td>애플리케이션 사이에 <strong>미들웨어(버스)</strong>를 두고 연계</td>
              <td><strong>확장성이 뛰어나고 대용량 데이터 처리</strong>에 유리</td>
              <td>버스(미들웨어) 도입 비용, 버스 자체가 병목이 될 수 있음</td>
            </tr>
            <tr>
              <td><strong>Hybrid</strong></td>
              <td><strong>그룹 내는 Hub {'&'} Spoke</strong>, <strong>그룹 간은 Message Bus</strong>를 사용하는 혼합 방식</td>
              <td>환경에 맞게 유연한 통합, 데이터 병목 최소화</td>
              <td>구조가 복잡해 설계·관리 난이도가 높음</td>
            </tr>
          </table>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            실기에서는 <strong>설명을 주고 유형 이름을 영문으로 쓰게</strong> 하는 문제가 반복 출제된다.
            "중앙 집중형 단일 접점" → <strong>Hub {'&'} Spoke</strong>,
            "미들웨어(버스)를 두어 확장성·대용량 처리" → <strong>Message Bus</strong>,
            "그룹 내 허브, 그룹 간 버스" → <strong>Hybrid</strong> — 키워드로 즉답할 수 있어야 한다.
          </div>
        </section>

        {/* ================================================================ */}
        <section id="esb">
          <h2>3. ESB(Enterprise Service Bus) — 서비스 중심의 버스형 통합</h2>
          <p class="sub">애플리케이션이 아니라 "서비스"를 중심으로, 버스를 통해 느슨하게(Loosely Coupled) 통합하는 아키텍처.</p>

          <h3>3-1. ESB 개념</h3>
          <p><strong>ESB</strong>는 애플리케이션 사이에 <strong>버스(Bus) 형태의 미들웨어</strong>를 두고,
          기능을 표준화된 <strong>서비스</strong> 단위로 노출·중개하여 서로 <strong>느슨하게 결합(Loosely Coupled)</strong>시키는 통합 기술이다.
          메시지 변환·라우팅·프로토콜 변환을 버스가 담당하므로, 각 시스템은 상대 시스템의 내부 구현을 몰라도 표준 인터페이스로 연계할 수 있다.
          <strong>SOA(Service Oriented Architecture, 서비스 지향 아키텍처)</strong>를 실현하는 핵심 기반 인프라로 사용된다.</p>
          <ul>
            <li><strong>서비스 중심:</strong> 애플리케이션 통합(EAI)이 아닌, 재사용 가능한 서비스의 조합·중개가 목적.</li>
            <li><strong>버스 기반:</strong> 모든 서비스가 버스에만 연결되므로 추가·교체가 쉽다.</li>
            <li><strong>느슨한 결합:</strong> 표준(웹 서비스 등) 기반 인터페이스로 특정 벤더·기술에 대한 종속을 줄인다.</li>
          </ul>

          <h3>3-2. EAI vs ESB 비교</h3>
          <table>
            <tr><th>구분</th><th>EAI</th><th>ESB</th></tr>
            <tr><td><strong>통합 대상</strong></td><td>기업 <strong>내부</strong>의 이기종 애플리케이션</td><td>기업 내·외부의 <strong>서비스</strong></td></tr>
            <tr><td><strong>중심 개념</strong></td><td>애플리케이션(데이터) 중심 통합</td><td>서비스 중심 통합 (SOA 기반)</td></tr>
            <tr><td><strong>토폴로지</strong></td><td>Point-to-Point, Hub {'&'} Spoke, Message Bus, Hybrid</td><td><strong>버스(Bus)</strong> 구조</td></tr>
            <tr><td><strong>결합도</strong></td><td>상대적으로 강한 결합 (전용 어댑터)</td><td><strong>느슨한 결합</strong> (표준 인터페이스)</td></tr>
            <tr><td><strong>표준</strong></td><td>벤더 종속적 기술이 많음</td><td>웹 서비스 등 개방형 표준 지향</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            ESB를 정의하는 세 키워드는 <strong>서비스 중심 · 버스 기반 · 느슨한 결합(Loosely Coupled)</strong>이다.
            "버스를 중심으로 서비스들을 느슨하게 통합하는 기술은?"이라는 서술형 발문에 <strong>ESB</strong>라고 답할 수 있으면 된다.
          </div>
        </section>

        {/* ================================================================ */}
        <section id="webservice">
          <h2>4. 웹 서비스(Web Service) — SOAP · WSDL · UDDI</h2>
          <p class="sub">네트워크(주로 HTTP) 위에서 표준화된 방식으로 서비스를 게시·탐색·호출하는 연계 기술. 구성 3요소는 실기 단골 출제 포인트.</p>

          <h3>4-1. 개념과 구성 3요소</h3>
          <p><strong>웹 서비스</strong>는 네트워크에 분산된 정보를 <strong>서비스 형태로 개방</strong>하여,
          표준 프로토콜(HTTP)과 표준 데이터 형식(XML)으로 <strong>플랫폼·언어에 관계없이</strong> 호출할 수 있게 하는 연계 기술이다.</p>
          <table>
            <tr><th>구성 요소</th><th>풀네임</th><th>역할</th></tr>
            <tr>
              <td><strong>SOAP</strong></td>
              <td>Simple Object Access Protocol</td>
              <td><strong>통신 프로토콜.</strong> XML 기반 메시지를 HTTP(HTTPS·SMTP도 가능) 위에 실어 교환한다.</td>
            </tr>
            <tr>
              <td><strong>WSDL</strong></td>
              <td>Web Services Description Language</td>
              <td><strong>서비스 기술(記述) 언어.</strong> 웹 서비스가 제공하는 기능(메서드·파라미터·위치·프로토콜)을 XML로 기술한 명세서.</td>
            </tr>
            <tr>
              <td><strong>UDDI</strong></td>
              <td>Universal Description, Discovery and Integration</td>
              <td><strong>등록·검색 저장소(레지스트리).</strong> WSDL을 등록해 두고, 요청자가 필요한 서비스를 검색하는 전화번호부 역할.</td>
            </tr>
          </table>

          <h3>4-2. 삼각 구조 — 게시 → 탐색 → 바인딩</h3>
          <p>웹 서비스는 <strong>서비스 제공자(Provider)</strong>, <strong>서비스 요청자(Requester)</strong>,
          <strong>서비스 중개자(UDDI 레지스트리)</strong>의 삼각 구조로 동작한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 360" role="img" aria-label="웹 서비스의 게시, 탐색, 바인딩 흐름 도면">
              <rect class="boxdark" x="350" y="40" width="200" height="76" />
              <text x="450" y="70" text-anchor="middle" class="strong">서비스 중개자</text>
              <text x="450" y="96" text-anchor="middle" class="small">UDDI 레지스트리</text>

              <rect class="box" x="70" y="250" width="220" height="76" />
              <text x="180" y="280" text-anchor="middle" class="strong">서비스 제공자</text>
              <text x="180" y="306" text-anchor="middle" class="small">웹 서비스 서버 (WSDL 보유)</text>

              <rect class="box" x="610" y="250" width="220" height="76" />
              <text x="720" y="280" text-anchor="middle" class="strong">서비스 요청자</text>
              <text x="720" y="306" text-anchor="middle" class="small">클라이언트 애플리케이션</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="215" y1="245" x2="393" y2="122" />
                <text x="235" y="165" text-anchor="middle" class="small">1. 게시(Publish) — WSDL 등록</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="660" y1="245" x2="485" y2="125" />
                <text x="505" y="155" text-anchor="middle" class="small">2. 탐색(Find)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="520" y1="125" x2="695" y2="245" />
                <text x="705" y="180" text-anchor="middle" class="small">3. WSDL 반환</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="610" y1="280" x2="296" y2="280" />
                <text x="450" y="268" text-anchor="middle" class="small">4. 바인딩(Bind) — SOAP 요청</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="296" y1="306" x2="610" y2="306" />
                <text x="450" y="344" text-anchor="middle" class="small">5. SOAP 응답 (XML 메시지)</text>
              </g>
            </svg>
            <figcaption>도면 3. 웹 서비스 삼각 구조 — 제공자가 WSDL을 게시하고, 요청자가 UDDI에서 탐색한 뒤 SOAP으로 바인딩한다.</figcaption>
          </figure>

          <h3>4-3. SOAP 메시지 구조 — Envelope · Header · Body</h3>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 320" role="img" aria-label="SOAP 메시지의 Envelope, Header, Body 구조 도면">
              <rect class="box" x="260" y="30" width="380" height="260" />
              <text x="450" y="60" text-anchor="middle" class="strong">SOAP Envelope</text>
              <text x="450" y="82" text-anchor="middle" class="small">필수 — 메시지 전체를 감싸는 최상위 요소</text>
              <rect class="boxsoft" x="300" y="98" width="300" height="62" />
              <text x="450" y="122" text-anchor="middle" class="strong">SOAP Header</text>
              <text x="450" y="146" text-anchor="middle" class="small">선택 — 인증 · 트랜잭션 · 라우팅 정보</text>
              <rect class="boxdark" x="300" y="172" width="300" height="98" />
              <text x="450" y="198" text-anchor="middle" class="strong">SOAP Body</text>
              <text x="450" y="222" text-anchor="middle" class="small">필수 — 실제 호출 데이터와 응답</text>
              <text x="450" y="246" text-anchor="middle" class="small">오류 발생 시 Fault 요소 포함</text>
              <text x="130" y="150" text-anchor="middle" class="small">HTTP 등 표준 프로토콜에</text>
              <text x="130" y="172" text-anchor="middle" class="small">실려 전송되는 XML 문서</text>
              <line class="arrow" x1="200" y1="160" x2="254" y2="160" />
            </svg>
            <figcaption>도면 4. SOAP 메시지 구조 — Envelope(필수) 안에 Header(선택)와 Body(필수)가 들어간다.</figcaption>
          </figure>

          <pre><code>{`<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header>
    <auth:token>인증 토큰 등 부가 정보 (선택)</auth:token>
  </soap:Header>
  <soap:Body>
    <getScore>
      <studentId>2026001</studentId>
    </getScore>
  </soap:Body>
</soap:Envelope>`}</code></pre>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            3요소 암기법 — <strong>"쏘(SOAP)고, 쓰(WSDL)고, 유(UDDI)통한다"</strong>:
            SOAP은 <strong>말하는 규칙(프로토콜)</strong>, WSDL은 <strong>설명서(기술 언어)</strong>, UDDI는 <strong>전화번호부(등록·검색 저장소)</strong>.
            풀네임(Simple Object Access Protocol / Web Services Description Language / Universal Description, Discovery and Integration)까지 쓸 수 있어야 한다.
          </div>
        </section>

        {/* ================================================================ */}
        <section id="rest">
          <h2>5. REST 방식 연계 — 자원 · HTTP 메서드 · JSON</h2>
          <p class="sub">무거운 SOAP 대신, HTTP 프로토콜을 그대로 활용해 자원을 URI로 식별하고 메서드로 조작하는 가벼운 연계 방식.</p>

          <h3>5-1. REST(Representational State Transfer) 개념</h3>
          <p><strong>REST</strong>는 웹의 <strong>자원(Resource)을 URI로 식별</strong>하고,
          그 자원에 대한 <strong>행위를 HTTP 메서드(GET · POST · PUT · DELETE)</strong>로 표현하며,
          결과를 JSON·XML 같은 <strong>표현(Representation)</strong>으로 주고받는 아키텍처 스타일이다.
          별도 프로토콜이 아니라 HTTP를 그대로 활용하므로 구현이 단순하고 가볍다. REST 원칙을 따르는 API를 <strong>RESTful API</strong>라고 부른다.</p>
          <table>
            <tr><th>구성 요소</th><th>표현 수단</th><th>예시</th></tr>
            <tr><td><strong>자원 (Resource)</strong></td><td>URI</td><td><code>/students/2026001</code></td></tr>
            <tr><td><strong>행위 (Verb)</strong></td><td>HTTP 메서드</td><td>GET(조회) · POST(생성) · PUT(수정) · DELETE(삭제)</td></tr>
            <tr><td><strong>표현 (Representation)</strong></td><td>JSON · XML 등</td><td>응답 본문의 데이터 형식</td></tr>
          </table>
          <p>주요 특징: <strong>클라이언트-서버 분리, 무상태(Stateless), 캐시 가능, 계층화 구조, 유니폼 인터페이스</strong>.</p>

          <h3>5-2. SOAP vs REST 비교</h3>
          <table>
            <tr><th>구분</th><th>SOAP</th><th>REST</th></tr>
            <tr><td><strong>성격</strong></td><td>엄격한 규약을 가진 <strong>프로토콜</strong></td><td>HTTP를 활용하는 <strong>아키텍처 스타일</strong></td></tr>
            <tr><td><strong>메시지 형식</strong></td><td>XML 고정 (Envelope 구조)</td><td>JSON · XML 등 자유 (JSON이 주류)</td></tr>
            <tr><td><strong>전송</strong></td><td>HTTP · SMTP 등 다양</td><td>HTTP 전용 (메서드 의미를 그대로 활용)</td></tr>
            <tr><td><strong>표준 부가 기능</strong></td><td>WS-Security 등 표준이 풍부</td><td>별도 표준 없음 — HTTPS · OAuth 등을 조합</td></tr>
            <tr><td><strong>무게 / 용도</strong></td><td>상대적으로 무거움 — 금융 등 엄격한 기업 연계</td><td>가벼움 — 웹 · 모바일 오픈 API</td></tr>
          </table>

          <h3>5-3. 같은 데이터의 XML 표현 vs JSON 표현</h3>
          <p><strong>XML</strong>은 태그로 구조를 표현하는 마크업 언어(스키마·네임스페이스 등 엄격한 검증 가능),
          <strong>JSON(JavaScript Object Notation)</strong>은 <strong>"속성-값 쌍"</strong>으로 이루어진 경량 데이터 교환 형식이다.</p>
          <pre><code>{`<!-- XML 표현 -->
<student>
  <name>홍길동</name>
  <score>95</score>
  <subjects>
    <subject>데이터베이스</subject>
    <subject>네트워크</subject>
  </subjects>
</student>`}</code></pre>
          <pre><code>{`// JSON 표현 — 같은 데이터를 더 짧고 가볍게
{
  "name": "홍길동",
  "score": 95,
  "subjects": ["데이터베이스", "네트워크"]
}`}</code></pre>
          <table>
            <tr><th>구분</th><th>XML</th><th>JSON</th></tr>
            <tr><td><strong>구조 표현</strong></td><td>여닫는 태그 쌍</td><td>중괄호 객체 + 대괄호 배열</td></tr>
            <tr><td><strong>크기</strong></td><td>태그 반복으로 무거움</td><td>경량 — 전송량 적음</td></tr>
            <tr><td><strong>검증</strong></td><td>DTD · XML Schema로 엄격한 검증</td><td>JSON Schema (상대적으로 단순)</td></tr>
            <tr><td><strong>주 용도</strong></td><td>SOAP 메시지, 설정 파일, 문서 교환</td><td>REST API, AJAX 응답</td></tr>
          </table>
        </section>

        {/* ================================================================ */}
        <section id="env">
          <h2>6. 연계 모듈 구현 환경 구성 — IPC와 연계 테이블</h2>
          <p class="sub">연계 모듈이 실제로 데이터를 주고받으려면 프로세스 간 통신(IPC) 수단과, DB 기반 연계라면 인터페이스 테이블이 준비되어야 한다.</p>

          <h3>6-1. IPC(Inter-Process Communication)</h3>
          <p><strong>IPC</strong>는 실행 중인 <strong>프로세스 간에 데이터를 주고받는 통신 기법</strong>의 총칭이다.
          연계 모듈 구현 환경 구성의 기반 기술이며, 실기에서 각 기법의 <strong>용어 쓰기</strong>가 출제된 이력이 있다.</p>
          <table>
            <tr><th>기법</th><th>한 줄 정의</th></tr>
            <tr><td><strong>공유 메모리 (Shared Memory)</strong></td><td>여러 프로세스가 <strong>동일한 메모리 영역을 공유</strong>해 데이터를 주고받는 가장 빠른 방식 (동기화 문제는 별도 해결 필요).</td></tr>
            <tr><td><strong>소켓 (Socket)</strong></td><td><strong>네트워크(IP + 포트)를 통해</strong> 프로세스끼리 통신하는 종단점 — 원격지 시스템 간 연계의 기본.</td></tr>
            <tr><td><strong>세마포어 (Semaphore)</strong></td><td>공유 자원에 대한 <strong>접근을 카운터로 제어</strong>하여 프로세스 간 동기화를 맞추는 기법.</td></tr>
            <tr><td><strong>파이프 (Pipe)</strong></td><td>한 프로세스의 출력이 다른 프로세스의 입력이 되는 <strong>단방향 통신 통로</strong> (익명 파이프 / 명명된 파이프).</td></tr>
            <tr><td><strong>메시지 큐 (Message Queuing)</strong></td><td>메시지를 <strong>큐에 넣어 비동기로</strong> 주고받는 방식 — 송신자와 수신자가 동시에 살아 있지 않아도 된다.</td></tr>
          </table>

          <h3>6-2. 연계 테이블 / 파일 방식 구현 (DB 연계)</h3>
          <p>DB 기반 간접 연계에서는 업무 테이블을 직접 노출하지 않고, 송·수신 전용의 <strong>인터페이스 테이블(연계 테이블)</strong>을 사이에 둔다.</p>
          <ol>
            <li><strong>인터페이스 테이블 정의:</strong> 연계 데이터 항목 + 관리 항목(인터페이스 ID, 전송 일시, 처리 상태 코드, 오류 코드)을 컬럼으로 설계하고 송신·수신 양쪽에 동일 구조로 생성한다.</li>
            <li><strong>연계 데이터 생성:</strong> 송신 시스템이 업무 데이터를 추출해 코드 매핑·형식 변환 후 송신 인터페이스 테이블에 적재한다.</li>
            <li><strong>전송 프로그램 구현:</strong> DB Link, DB Connection(JDBC · ODBC), ETL 도구, EAI 어댑터 등으로 송신 테이블의 데이터를 읽어 수신 인터페이스 테이블로 전송한다.</li>
            <li><strong>수신 반영:</strong> 수신 시스템이 인터페이스 테이블의 데이터를 검증한 뒤 업무 테이블에 반영하고, 처리 상태 코드와 로그를 갱신한다.</li>
          </ol>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 230" role="img" aria-label="연계 테이블 방식의 데이터 흐름 도면">
              <rect class="box" x="20" y="80" width="140" height="80" />
              <text x="90" y="112" text-anchor="middle" class="strong">송신 시스템</text>
              <text x="90" y="136" text-anchor="middle" class="small">업무 테이블</text>
              <rect class="boxsoft" x="200" y="80" width="140" height="80" />
              <text x="270" y="112" text-anchor="middle" class="small strong">인터페이스 테이블</text>
              <text x="270" y="136" text-anchor="middle" class="small">(송신)</text>
              <rect class="boxdark" x="380" y="80" width="140" height="80" />
              <text x="450" y="112" text-anchor="middle" class="strong">전송 프로그램</text>
              <text x="450" y="136" text-anchor="middle" class="small">DB Link · ETL 등</text>
              <rect class="boxsoft" x="560" y="80" width="140" height="80" />
              <text x="630" y="112" text-anchor="middle" class="small strong">인터페이스 테이블</text>
              <text x="630" y="136" text-anchor="middle" class="small">(수신)</text>
              <rect class="box" x="740" y="80" width="140" height="80" />
              <text x="810" y="112" text-anchor="middle" class="strong">수신 시스템</text>
              <text x="810" y="136" text-anchor="middle" class="small">업무 테이블</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="160" y1="120" x2="194" y2="120" />
                <text x="177" y="60" text-anchor="middle" class="small">1. 생성·변환</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="340" y1="120" x2="374" y2="120" />
                <text x="357" y="60" text-anchor="middle" class="small">2. 읽기·전송</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="520" y1="120" x2="554" y2="120" />
                <text x="537" y="60" text-anchor="middle" class="small">3. 적재</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="700" y1="120" x2="734" y2="120" />
                <text x="717" y="60" text-anchor="middle" class="small">4. 업무 반영</text>
              </g>
              <text x="450" y="205" text-anchor="middle" class="small">각 단계의 처리 결과(성공/실패)는 상태 코드와 로그 테이블에 기록하여 추적한다</text>
            </svg>
            <figcaption>도면 5. 연계 테이블 방식 — 인터페이스 테이블을 사이에 두고 단계별로 데이터가 이동한다.</figcaption>
          </figure>

          <h3>6-3. AJAX 간단 정리</h3>
          <p><strong>AJAX(Asynchronous JavaScript And XML)</strong>는 브라우저에서 <strong>페이지 전체를 새로 고치지 않고</strong>
          자바스크립트로 서버와 <strong>비동기 통신</strong>하여 필요한 데이터만 주고받는 기술이다.
          이름에는 XML이 들어 있지만 현재는 주로 <strong>JSON</strong> 형식으로 데이터를 교환하며, REST API 호출의 클라이언트 측 기반 기술이다.</p>
        </section>

        {/* ================================================================ */}
        <section id="test">
          <h2>7. 연계 테스트와 검증</h2>
          <p class="sub">모듈을 만들었으면 실제로 데이터가 정확하게, 안전하게 오가는지 확인해야 구현이 끝난다.</p>

          <h3>7-1. 연계 테스트 절차 (4단계)</h3>
          <ol>
            <li><strong>연계 테스트 케이스 작성:</strong> 송·수신 구간별 정상 케이스와 오류 케이스(필수값 누락, 형식 오류, 코드 불일치 등)를 정의한다.</li>
            <li><strong>연계 테스트 환경 구축:</strong> 실제 운영과 유사한 송신·중계·수신 환경(테이블, 연계 서버, 네트워크·방화벽 정책)을 준비한다.</li>
            <li><strong>연계 테스트 수행:</strong> 케이스별로 데이터를 송신하고 흐름을 실행한다.</li>
            <li><strong>수행 결과 검증:</strong> 수신 DB 조회, 화면 확인, 파일 생성 확인, 로그 확인으로 기대 결과와 대조한다.</li>
          </ol>

          <h3>7-2. 단위 관점과 통합 관점</h3>
          <table>
            <tr><th>관점</th><th>검증 대상</th><th>예시</th></tr>
            <tr><td><strong>단위 테스트</strong></td><td>송신 모듈, 수신 모듈 각각의 개별 기능</td><td>변환 함수가 코드 매핑을 정확히 하는가, 인터페이스 테이블 적재가 되는가</td></tr>
            <tr><td><strong>통합(연계) 테스트</strong></td><td>송신 → 중계 → 수신 전 구간의 흐름</td><td>송신한 100건이 수신 업무 테이블에 100건 그대로 반영되는가</td></tr>
          </table>

          <h3>7-3. 연계 오류 처리와 모니터링</h3>
          <ul>
            <li><strong>오류 유형 분류:</strong> 송신 오류(데이터 생성·변환 실패), 연계 서버 오류(전송·형식 변환 실패), 수신 오류(검증·업무 반영 실패)로 나누어 오류 코드를 정의한다.</li>
            <li><strong>로그 확인:</strong> 인터페이스 테이블의 상태 코드·오류 코드와 연계 서버의 운영 로그를 대조해 실패 지점을 찾는다.</li>
            <li><strong>재처리 설계:</strong> 실패 건은 원인 조치 후 재전송할 수 있도록 상태 코드 기반 재처리 절차를 마련한다.</li>
            <li><strong>모니터링 도구:</strong> 연계 솔루션(EAI/ESB)의 관제 콘솔이나 APM 도구로 처리 건수·지연·실패율을 상시 감시한다.</li>
          </ul>

          <h3>7-4. 시큐어 관점의 연계 검증</h3>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            연계 구간은 데이터가 시스템 경계를 넘는 지점이므로 보안 검증이 필수다.
            <strong>① 전송 데이터 암호화</strong>(전송 구간 TLS/HTTPS + 주민번호 등 중요 항목의 개별 암호화),
            <strong>② 인증·인가</strong>(연계 계정·토큰으로 호출 주체를 확인하고 허용된 자원만 접근),
            <strong>③ 접근 제어</strong>(방화벽·IP 제한으로 연계 서버 간 통신만 허용)를 반드시 점검한다.
          </div>
        </section>

        {/* ================================================================ */}
        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 스타일의 단답형·괄호 채우기 문제 10개. 먼저 스스로 답을 쓴 뒤 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음은 EAI 구축 유형에 대한 설명이다. ①, ②, ③에 해당하는 유형을 각각 영문으로 쓰시오.</p>
            <pre>{`① 단일 접점인 중앙 허브 시스템을 통해 모든 데이터를 전송하는 중앙 집중형 방식으로,
   허브 장애 시 전체 연계에 영향을 미친다.
② 애플리케이션 사이에 미들웨어(버스)를 두어 연계하는 방식으로,
   확장성이 뛰어나고 대용량 데이터 처리에 유리하다.
③ 그룹 내에서는 Hub & Spoke 방식을, 그룹 간에는 Message Bus 방식을 사용하는 혼합형이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① Hub {'&'} Spoke ② Message Bus ③ Hybrid<br/>
                <span class="label">해설: </span>"중앙 허브 집중"은 Hub {'&'} Spoke, "미들웨어 버스 + 확장성·대용량"은 Message Bus, "그룹 내 허브 + 그룹 간 버스"는 Hybrid — 키워드로 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 그림과 같이 미들웨어 없이 애플리케이션끼리 1:1로 직접 연결하는 EAI 구축 유형을 쓰시오.</p>
            <pre>{`A ───── B
│ ╲   ╱ │
│   ╳   │
│ ╱   ╲ │
C ───── D
(모든 시스템이 서로 직접 연결된다)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Point-to-Point (포인트 투 포인트)<br/>
                <span class="label">해설: </span>가장 기본적인 1:1 직접 통합 방식. 구현은 단순하지만 시스템이 N개면 연결이 N(N−1)/2개로 늘어나 변경·유지보수가 어렵다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">웹 서비스의 구성 3요소에 대한 설명이다. ①∼③에 들어갈 용어를 영문 약어로 쓰시오.</p>
            <pre>{`( ① ) : XML 기반의 메시지를 HTTP 등의 프로토콜에 실어 교환하는 통신 프로토콜
( ② ) : 웹 서비스가 제공하는 기능·파라미터·위치 등 인터페이스를 기술하는 XML 언어
( ③ ) : 웹 서비스를 등록하고 검색할 수 있도록 하는 저장소(레지스트리)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① SOAP ② WSDL ③ UDDI<br/>
                <span class="label">해설: </span>풀네임까지 함께 암기 — SOAP(Simple Object Access Protocol), WSDL(Web Services Description Language), UDDI(Universal Description, Discovery and Integration).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">애플리케이션 사이에 버스(Bus) 형태의 미들웨어를 두고, 기능을 표준화된 서비스 단위로 중개하여 시스템들을 느슨하게 결합(Loosely Coupled)시키는 통합 기술을 영문 약어로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ESB (Enterprise Service Bus)<br/>
                <span class="label">해설: </span>"서비스 중심 · 버스 기반 · 느슨한 결합"이 ESB의 3대 키워드다. 애플리케이션(데이터) 중심 통합인 EAI와 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">웹 서비스가 제공하는 메서드, 파라미터, 서비스 위치, 사용 프로토콜 등을 XML 형식으로 기술한 "웹 서비스 명세서" 역할의 언어를 영문 약어로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>WSDL (Web Services Description Language)<br/>
                <span class="label">해설: </span>서비스 제공자가 WSDL을 작성해 UDDI에 게시(Publish)하면, 요청자가 이를 탐색(Find)한 뒤 SOAP으로 바인딩(Bind)하여 호출한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">프로세스 간 통신(IPC) 기법에 대한 설명이다. ①, ②에 해당하는 기법을 각각 쓰시오.</p>
            <pre>{`① 여러 프로세스가 동일한 메모리 영역을 함께 사용하여 데이터를 주고받는 방식으로,
   IPC 기법 중 속도가 가장 빠르다.
② 메시지를 큐(Queue)에 넣어 비동기적으로 주고받는 방식으로,
   송신 측과 수신 측이 동시에 동작하지 않아도 통신이 가능하다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 공유 메모리(Shared Memory) ② 메시지 큐(Message Queuing)<br/>
                <span class="label">해설: </span>IPC 5대 기법 — 공유 메모리 · 소켓 · 세마포어 · 파이프 · 메시지 큐. "가장 빠름"은 공유 메모리, "비동기 · 큐"는 메시지 큐가 결정 키워드다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">속성-값(Attribute-Value) 쌍으로 이루어진 경량의 데이터 교환 형식으로, 사람이 읽기 쉽고 AJAX·REST API에서 XML을 대체하여 널리 사용되는 개방형 표준 포맷을 쓰시오.</p>
            <pre>{`{ "name": "홍길동", "score": 95, "subjects": ["데이터베이스", "네트워크"] }`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>JSON (JavaScript Object Notation)<br/>
                <span class="label">해설: </span>"속성-값 쌍" + "경량 데이터 교환 형식"이 JSON의 정의 키워드. 태그 기반의 XML보다 표현이 간결해 전송량이 적다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">SOAP 메시지의 구조에 대한 설명이다. ①∼③에 들어갈 구성 요소를 쓰시오.</p>
            <pre>{`( ① ) : 메시지 전체를 감싸는 최상위 필수 요소
( ② ) : 인증, 라우팅 등 부가 정보를 담는 선택 요소
( ③ ) : 실제 호출 데이터와 응답을 담는 필수 요소 (오류 시 Fault 포함)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① Envelope(엔벨로프) ② Header(헤더) ③ Body(바디)<br/>
                <span class="label">해설: </span>SOAP 메시지는 Envelope 안에 Header(선택)와 Body(필수)가 들어가는 XML 문서다. 필수/선택 여부까지 구분해서 기억하자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">REST에 대한 설명이다. ①, ②에 들어갈 용어를 쓰시오.</p>
            <pre>{`REST는 웹의 자원을 ( ① )(으)로 고유하게 식별하고, 해당 자원에 대한 행위를
GET, POST, PUT, DELETE 같은 ( ② )(으)로 표현하는 아키텍처 스타일이다.
서버는 클라이언트의 상태를 저장하지 않는 무상태(Stateless) 특성을 가진다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① URI ② HTTP 메서드(HTTP Method)<br/>
                <span class="label">해설: </span>REST 3요소는 자원(URI) · 행위(HTTP 메서드) · 표현(JSON/XML 등 Representation)이다. 무상태·캐시 가능·유니폼 인터페이스 등 특징도 함께 정리해 두자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">웹 페이지 전체를 다시 로드하지 않고, 자바스크립트를 이용해 서버와 비동기적으로 데이터를 교환하여 화면의 일부만 갱신하는 웹 개발 기술을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>AJAX (Asynchronous JavaScript And XML)<br/>
                <span class="label">해설: </span>"비동기 + 부분 갱신"이 결정 키워드. 이름과 달리 오늘날에는 XML보다 JSON 형식으로 데이터를 주고받는 경우가 많다.
              </div>
            </details>
          </div>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">EAI</span>
            <span class="kw">Point-to-Point</span>
            <span class="kw">Hub {'&'} Spoke</span>
            <span class="kw">Message Bus</span>
            <span class="kw">Hybrid</span>
            <span class="kw">ESB</span>
            <span class="kw">SOA</span>
            <span class="kw">SOAP</span>
            <span class="kw">WSDL</span>
            <span class="kw">UDDI</span>
            <span class="kw">REST / RESTful API</span>
            <span class="kw">JSON</span>
            <span class="kw">XML</span>
            <span class="kw">AJAX</span>
            <span class="kw">IPC</span>
            <span class="kw">공유 메모리</span>
            <span class="kw">메시지 큐</span>
            <span class="kw">인터페이스 테이블</span>
            <span class="kw">연계 테스트</span>
            <span class="kw">전송 데이터 암호화</span>
          </p>
        </section>

        <footer>내외부 연계 모듈 구현 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
