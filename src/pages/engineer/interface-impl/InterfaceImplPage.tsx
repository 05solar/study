import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './interface-impl.css'

export default defineComponent({
  name: 'InterfaceImplPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>인터페이스 기능 구현</h1>
          <p>정보처리기사 실기 대비 학습 문서. 인터페이스 정의서·명세서 확인 → 데이터 통신 기술(JSON · XML · AJAX · REST) →
          구현 방식(데이터 통신 / 인터페이스 엔터티) → 인터페이스 보안(IPSec · SSL/TLS · S-HTTP) →
          구현 검증 도구(xUnit · STAF · FitNesse · Selenium 등) → 오류 처리 순서로,
          실기 단골 용어를 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 데이터·요청의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>인터페이스 구현 개요 — 정의서·명세서, 구현 정의 절차</a></li>
            <li><a href="#comm" onClick={(e) => scrollToId(e, 'comm')}>데이터 통신 기술 — JSON · XML · AJAX · REST</a></li>
            <li><a href="#impl" onClick={(e) => scrollToId(e, 'impl')}>인터페이스 구현 예 — 데이터 통신 · 인터페이스 엔터티</a></li>
            <li><a href="#security" onClick={(e) => scrollToId(e, 'security')}>인터페이스 보안 — 취약점과 구간별 보안 기능</a></li>
            <li><a href="#verify" onClick={(e) => scrollToId(e, 'verify')}>인터페이스 구현 검증 도구 · 감시 도구(APM)</a></li>
            <li><a href="#error" onClick={(e) => scrollToId(e, 'error')}>인터페이스 오류 처리</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 인터페이스 구현 개요 ===================== */}
        <section id="overview">
          <h2>1. 인터페이스 구현 개요 — 정의서·명세서, 구현 정의 절차</h2>
          <p class="sub">인터페이스는 서로 다른 두 시스템을 이어 주는 접점이다. 구현 전에 "무엇을, 어떤 형식으로, 얼마나 자주" 주고받을지를 문서로 확인하는 것이 출발점이다.</p>

          <h3>1-1. 인터페이스란</h3>
          <p><strong>인터페이스(Interface)</strong>는 서로 다른 두 시스템·장치·소프트웨어를 서로 이어 주는
          <strong>접속 경계면</strong>이자, 그 경계에서 데이터를 주고받기 위한 <strong>규격·규약</strong>이다.
          모듈 간 인터페이스가 잘못 구현되면 데이터 누락·변조·오류 전파가 발생하므로,
          설계 산출물(정의서·명세서)을 근거로 일관되게 구현하고 검증해야 한다.</p>

          <h3>1-2. 인터페이스 정의서와 명세서 확인</h3>
          <table>
            <tr><th>문서</th><th>내용</th></tr>
            <tr>
              <td><strong>인터페이스 정의서</strong></td>
              <td>인터페이스 <strong>목록과 개요</strong>를 정리한 문서. 인터페이스 ID, 인터페이스명,
              송신·수신 시스템 정보, 연계 방식, <strong>최대 처리 횟수</strong>, 전송 데이터의 <strong>크기·주기</strong> 등을 기술한다</td>
            </tr>
            <tr>
              <td><strong>인터페이스 명세서</strong></td>
              <td>정의서의 각 인터페이스를 <strong>기능 단위로 상세화</strong>한 문서. 인터페이스 ID, 오퍼레이션명,
              <strong>사전 조건·사후 조건</strong>, 전달 <strong>파라미터</strong>, <strong>반환값</strong>, 호출 방법 등을 기술한다</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            정의서는 <strong>목록·개요</strong>, 명세서는 <strong>기능별 상세(사전·사후 조건, 파라미터, 반환값)</strong>.
            "각 기능의 세부 항목까지 기술한 문서"를 묻는 문제의 답은 <strong>인터페이스 명세서</strong>다.
          </div>

          <h3>1-3. 인터페이스 기능 구현 정의 절차</h3>
          <table>
            <tr><th>순서</th><th>절차</th><th>설명</th></tr>
            <tr>
              <td>①</td><td><strong>컴포넌트 명세서 확인</strong></td>
              <td>컴포넌트의 내부 클래스·인터페이스 클래스를 확인하여 어떤 기능이 제공되는지 파악한다</td>
            </tr>
            <tr>
              <td>②</td><td><strong>인터페이스 명세서 확인</strong></td>
              <td>인터페이스별 데이터 형식·전송 조건·사전/사후 조건을 확인한다</td>
            </tr>
            <tr>
              <td>③</td><td><strong>일관된 인터페이스 기능 구현 정의</strong></td>
              <td>확인한 정보를 바탕으로 인터페이스 기능 구현을 <strong>일관성 있게</strong> 정의한다</td>
            </tr>
            <tr>
              <td>④</td><td><strong>정의된 기능 구현 정형화</strong></td>
              <td>정의한 내용을 시스템에서 사용할 수 있도록 <strong>표준화·정형화</strong>한다 (JSON·XML 등 표준 형식 결정)</td>
            </tr>
          </table>
        </section>

        {/* ===================== 2. 데이터 통신 기술 ===================== */}
        <section id="comm">
          <h2>2. 데이터 통신 기술 — JSON · XML · AJAX · REST</h2>
          <p class="sub">인터페이스 구현의 재료가 되는 데이터 형식과 통신 기술. "설명을 보고 용어를 쓰는" 형태로 실기에 매우 자주 출제된다.</p>

          <h3>2-1. JSON (JavaScript Object Notation) — 실기 단골</h3>
          <p><strong>JSON</strong>은 <strong>속성-값 쌍(Attribute-Value Pair)</strong>으로 이루어진 데이터 오브젝트를
          전달하기 위해 사용하는 <strong>개방형 표준 포맷</strong>이다. 언어 독립적이며 사람이 읽기 쉽고,
          AJAX에서 <strong>XML을 대체</strong>하는 주요 데이터 형식으로 널리 쓰인다.</p>
          <table>
            <tr><th>표기</th><th>형식</th><th>예</th></tr>
            <tr><td><strong>객체</strong></td><td>중괄호 {'{ }'} 안에 <code>"키": 값</code> 쌍을 쉼표로 나열</td><td><code>{`{"name": "홍길동"}`}</code></td></tr>
            <tr><td><strong>배열</strong></td><td>대괄호 [ ] 안에 값을 쉼표로 나열</td><td><code>{`["java", "python"]`}</code></td></tr>
            <tr><td><strong>값의 종류</strong></td><td>숫자, 문자열, 불리언(true/false), 객체, 배열, null</td><td><code>{`{"age": 20, "vip": true}`}</code></td></tr>
          </table>

          <h3>2-2. XML (eXtensible Markup Language)</h3>
          <p><strong>XML</strong>은 HTML의 단점을 보완하고 웹에서 구조화된 문서를 표현·전송하도록 설계된
          <strong>다목적 마크업 언어</strong>다. 사용자가 <strong>태그를 직접 정의</strong>할 수 있으며,
          트리 구조로 데이터의 계층을 표현한다. 태그의 대소문자를 구분하고, 모든 태그는 반드시 닫아야 한다.</p>

          <h3>2-3. JSON vs XML 예제</h3>
          <div class="code-compare">
            <div>
              <p class="code-title">JSON 표기</p>
              <pre>{`{
  "student": {
    "name": "홍길동",
    "age": 20,
    "subjects": ["DB", "네트워크"]
  }
}`}</pre>
            </div>
            <div>
              <p class="code-title">XML 표기</p>
              <pre>{`<student>
  <name>홍길동</name>
  <age>20</age>
  <subjects>
    <subject>DB</subject>
    <subject>네트워크</subject>
  </subjects>
</student>`}</pre>
            </div>
          </div>
          <div class="box">
            <span class="tag-line">비교</span><br/>
            같은 데이터라도 JSON이 XML보다 <strong>표기가 간결</strong>하고 파싱이 가볍다.
            XML은 태그 기반이라 <strong>문서 구조 표현·스키마 검증</strong>에 강하다.
          </div>

          <h3>2-4. AJAX (Asynchronous JavaScript And XML) — 실기 단골</h3>
          <p><strong>AJAX</strong>는 자바스크립트를 사용하여 클라이언트와 서버 간에 <strong>비동기 통신</strong>으로
          XML(또는 JSON) 데이터를 주고받는 기술이다. 페이지 전체를 새로 고치지 않고
          <strong>필요한 일부 데이터만</strong> 서버에서 받아 화면을 갱신할 수 있으며,
          내부적으로 <code>XMLHttpRequest</code> 객체를 이용한다.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            문제 지문에 "<strong>비동기 통신</strong>", "<strong>전체 페이지를 새로 고치지 않고 일부만 갱신</strong>"이 보이면 답은 <strong>AJAX</strong>다.
          </div>

          <h3>2-5. REST (Representational State Transfer)</h3>
          <p><strong>REST</strong>는 웹의 모든 자원에 고유한 <strong>URI</strong>를 부여하고,
          HTTP 메서드로 자원에 대한 CRUD 연산을 수행하는 <strong>아키텍처 스타일</strong>이다.
          REST 원칙을 따르는 시스템을 RESTful하다고 한다.</p>
          <table>
            <tr><th>HTTP 메서드</th><th>연산</th><th>의미</th></tr>
            <tr><td><strong>GET</strong></td><td>Read (조회)</td><td>자원을 조회한다</td></tr>
            <tr><td><strong>POST</strong></td><td>Create (생성)</td><td>새 자원을 생성한다</td></tr>
            <tr><td><strong>PUT</strong></td><td>Update (수정)</td><td>자원을 수정(갱신)한다</td></tr>
            <tr><td><strong>DELETE</strong></td><td>Delete (삭제)</td><td>자원을 삭제한다</td></tr>
          </table>
        </section>

        {/* ===================== 3. 인터페이스 구현 예 ===================== */}
        <section id="impl">
          <h2>3. 인터페이스 구현 예 — 데이터 통신 · 인터페이스 엔터티</h2>
          <p class="sub">인터페이스 구현의 대표 방식은 두 가지다. ① JSON·XML 형식으로 직접 송수신하는 데이터 통신 방식, ② 인터페이스 전용 테이블을 사이에 두는 인터페이스 엔터티 방식.</p>

          <h3>3-1. 데이터 통신을 통한 인터페이스 구현</h3>
          <p>애플리케이션 영역에서 <strong>인터페이스 객체를 JSON·XML 형식으로 생성(직렬화)</strong>하여
          HTTP·AJAX 등으로 전송하고, 수신 측이 이를 <strong>파싱(역직렬화) → 검증 → 반영</strong>하는 방식이다.</p>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 250" role="img" aria-label="JSON 송수신 흐름도">
              {/* 상단: 송신 → JSON 문서 → 수신 */}
              <rect class="box" x="40" y="36" width="190" height="56"/>
              <text x="135" y="58" text-anchor="middle" class="strong">송신 시스템</text>
              <text x="135" y="78" text-anchor="middle" class="small">(전송 데이터 준비)</text>

              <rect class="boxsoft" x="350" y="36" width="200" height="56"/>
              <text x="450" y="58" text-anchor="middle" class="strong">JSON 문서</text>
              <text x="450" y="78" text-anchor="middle" class="small">(직렬화 결과)</text>

              <rect class="boxdark" x="670" y="36" width="190" height="56"/>
              <text x="765" y="58" text-anchor="middle" class="strong">수신 시스템</text>
              <text x="765" y="78" text-anchor="middle" class="small">(인터페이스 수신부)</text>

              {/* 하단: 파서 → 검증 → 반영 */}
              <rect class="box" x="670" y="164" width="190" height="56"/>
              <text x="765" y="186" text-anchor="middle" class="strong">파서(Parser)</text>
              <text x="765" y="206" text-anchor="middle" class="small">(JSON → 객체 변환)</text>

              <rect class="box" x="350" y="164" width="200" height="56"/>
              <text x="450" y="186" text-anchor="middle" class="strong">데이터 검증</text>
              <text x="450" y="206" text-anchor="middle" class="small">(형식·무결성 확인)</text>

              <rect class="boxdark" x="40" y="164" width="190" height="56"/>
              <text x="135" y="186" text-anchor="middle" class="strong">반영</text>
              <text x="135" y="206" text-anchor="middle" class="small">(DB 저장·처리)</text>

              {/* 애니메이션 단계 */}
              <g class="msg" data-step="1">
                <line x1="230" y1="64" x2="344" y2="64" class="arrow" marker-end="url(#ah)"/>
                <text x="287" y="24" text-anchor="middle" class="small">① JSON 생성</text>
              </g>
              <g class="msg" data-step="2">
                <line x1="550" y1="64" x2="664" y2="64" class="arrow" marker-end="url(#ah)"/>
                <text x="607" y="24" text-anchor="middle" class="small">② 전송 (HTTP·AJAX)</text>
              </g>
              <g class="msg" data-step="3">
                <line x1="765" y1="92" x2="765" y2="158" class="arrow" marker-end="url(#ah)"/>
                <text x="778" y="132" text-anchor="start" class="small">③ 파싱</text>
              </g>
              <g class="msg" data-step="4">
                <line x1="670" y1="192" x2="556" y2="192" class="arrow" marker-end="url(#ah)"/>
                <text x="613" y="242" text-anchor="middle" class="small">④ 검증</text>
              </g>
              <g class="msg" data-step="5">
                <line x1="350" y1="192" x2="236" y2="192" class="arrow" marker-end="url(#ah)"/>
                <text x="293" y="242" text-anchor="middle" class="small">⑤ 반영</text>
              </g>
            </svg>
            <figcaption>도면 1. 데이터 통신 방식 — 송신 측 JSON 생성(직렬화) → 전송 → 수신 측 파싱 → 검증 → 반영</figcaption>
          </figure>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            수신 측은 받은 데이터를 곧바로 반영하지 않고 반드시 <strong>파싱 후 검증(형식·범위·무결성)</strong>을 거친다.
            검증 실패 시에는 6장의 오류 처리 절차(로그 기록·오류 테이블 저장)로 넘어간다.
          </div>

          <h3>3-2. 인터페이스 엔터티(테이블)를 통한 인터페이스 구현</h3>
          <p>송신·수신 시스템 사이에 <strong>인터페이스 전용 엔터티(인터페이스 테이블)</strong>를 두고 데이터를 주고받는 방식이다.
          송신 시스템이 인터페이스 테이블에 데이터를 쓰면, <strong>프로시저·트리거·배치 작업</strong> 등이
          수신 측 인터페이스 테이블로 전달하고, 수신 시스템이 이를 읽어 반영한다.
          송신·수신 테이블의 구조는 <strong>동일하게 맞추는 것이 좋다</strong>.</p>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 140" role="img" aria-label="인터페이스 엔터티 방식 구성도">
              <text x="217" y="44" text-anchor="middle" class="small">① 기록 (INSERT)</text>
              <text x="457" y="44" text-anchor="middle" class="small">② 프로시저·트리거·배치 전달</text>
              <text x="697" y="44" text-anchor="middle" class="small">③ 조회·반영</text>

              <rect class="box" x="30" y="60" width="160" height="56"/>
              <text x="110" y="94" text-anchor="middle" class="strong">송신 시스템</text>

              <rect class="boxsoft" x="250" y="60" width="180" height="56"/>
              <text x="340" y="84" text-anchor="middle">인터페이스 테이블</text>
              <text x="340" y="104" text-anchor="middle" class="small">(송신 측)</text>

              <rect class="boxsoft" x="490" y="60" width="180" height="56"/>
              <text x="580" y="84" text-anchor="middle">인터페이스 테이블</text>
              <text x="580" y="104" text-anchor="middle" class="small">(수신 측)</text>

              <rect class="boxdark" x="730" y="60" width="150" height="56"/>
              <text x="805" y="94" text-anchor="middle" class="strong">수신 시스템</text>

              <line x1="190" y1="88" x2="244" y2="88" class="arrow" marker-end="url(#ah)"/>
              <line x1="430" y1="88" x2="484" y2="88" class="arrow" marker-end="url(#ah)"/>
              <line x1="670" y1="88" x2="724" y2="88" class="arrow" marker-end="url(#ah)"/>
            </svg>
            <figcaption>도면 2. 인터페이스 엔터티(테이블) 방식 — 전용 테이블을 사이에 둔 간접 연계</figcaption>
          </figure>
        </section>

        {/* ===================== 4. 인터페이스 보안 ===================== */}
        <section id="security">
          <h2>4. 인터페이스 보안 — 취약점과 구간별 보안 기능</h2>
          <p class="sub">인터페이스는 시스템 경계를 지나는 만큼 공격에 노출되기 쉽다. 취약점 분석 후 네트워크·애플리케이션·데이터베이스 구간별로 보안 기능을 적용한다.</p>

          <h3>4-1. 인터페이스 보안 취약점</h3>
          <table>
            <tr><th>취약점</th><th>설명</th></tr>
            <tr>
              <td><strong>스니핑 (Sniffing)</strong></td>
              <td>네트워크를 지나는 데이터를 <strong>몰래 도청(엿보기)</strong>하여 인터페이스 정보를 탈취하는 공격.
              수동적(Passive) 공격에 해당한다</td>
            </tr>
            <tr>
              <td><strong>데이터 변조·위조</strong></td>
              <td>전송 중인 인터페이스 데이터를 가로채 <strong>내용을 바꾸거나 가짜 데이터를 삽입</strong>하는 공격.
              무결성을 훼손한다</td>
            </tr>
          </table>

          <h3>4-2. 보안 기능 적용 구간</h3>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 210" role="img" aria-label="인터페이스 보안 기능 적용 구간">
              <rect class="box" x="40" y="30" width="200" height="56"/>
              <text x="140" y="52" text-anchor="middle" class="strong">송신 시스템</text>
              <text x="140" y="72" text-anchor="middle" class="small">(애플리케이션)</text>

              <rect class="boxsoft" x="350" y="30" width="200" height="56"/>
              <text x="450" y="52" text-anchor="middle" class="strong">네트워크</text>
              <text x="450" y="72" text-anchor="middle" class="small">(전송 구간)</text>

              <rect class="box" x="660" y="30" width="200" height="56"/>
              <text x="760" y="52" text-anchor="middle" class="strong">수신 시스템</text>
              <text x="760" y="72" text-anchor="middle" class="small">(데이터베이스)</text>

              <line x1="240" y1="58" x2="344" y2="58" class="arrow" marker-end="url(#ah)"/>
              <line x1="550" y1="58" x2="654" y2="58" class="arrow" marker-end="url(#ah)"/>

              <line x1="140" y1="86" x2="140" y2="126" class="life"/>
              <line x1="450" y1="86" x2="450" y2="126" class="life"/>
              <line x1="760" y1="86" x2="760" y2="126" class="life"/>

              <rect class="boxsoft" x="40" y="126" width="200" height="64"/>
              <text x="140" y="150" text-anchor="middle" class="strong">애플리케이션 구간</text>
              <text x="140" y="172" text-anchor="middle" class="small">시큐어 코딩 · 입력값 검증</text>

              <rect class="boxdark" x="350" y="126" width="200" height="64"/>
              <text x="450" y="150" text-anchor="middle" class="strong">네트워크 구간</text>
              <text x="450" y="172" text-anchor="middle" class="small">IPSec · SSL/TLS · S-HTTP</text>

              <rect class="boxsoft" x="660" y="126" width="200" height="64"/>
              <text x="760" y="150" text-anchor="middle" class="strong">데이터베이스 구간</text>
              <text x="760" y="172" text-anchor="middle" class="small">암호화 · 접근 제어</text>
            </svg>
            <figcaption>도면 3. 인터페이스 보안 기능 적용 구간 — 애플리케이션 · 네트워크 · 데이터베이스</figcaption>
          </figure>

          <h3>4-3. 네트워크 구간 보안 — IPSec · SSL/TLS · S-HTTP (실기 단골)</h3>
          <table>
            <tr><th>기술</th><th>정의</th></tr>
            <tr>
              <td><strong>IPSec<br/>(IP Security)</strong></td>
              <td><strong>네트워크 계층(IP 계층, 3계층)</strong>에서 IP 패킷 단위로 인증·암호화를 수행하는 보안 프로토콜.
              무결성·인증을 보장하는 <strong>AH(인증 헤더)</strong>와 기밀성까지 보장하는 <strong>ESP(암호화)</strong>를 사용하며,
              전송 모드와 터널 모드를 지원한다</td>
            </tr>
            <tr>
              <td><strong>SSL/TLS</strong></td>
              <td><strong>전송 계층과 응용 계층 사이</strong>에서 클라이언트와 서버 간 <strong>인증서 기반 인증과 암호화</strong>를 수행하는
              보안 프로토콜. HTTPS가 바로 HTTP에 SSL/TLS를 적용한 것이다</td>
            </tr>
            <tr>
              <td><strong>S-HTTP<br/>(Secure HTTP)</strong></td>
              <td>클라이언트와 서버 간에 주고받는 <strong>HTTP 메시지(전송되는 웹 문서) 단위로 암호화</strong>하는 보안 프로토콜.
              연결 전체를 암호화하는 SSL/TLS와 달리 <strong>메시지 단위</strong>라는 점이 구분 포인트다</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            계층으로 구분하자 — <strong>IPSec은 IP(3계층)</strong>, <strong>SSL/TLS는 전송~응용 계층 사이</strong>,
            <strong>S-HTTP는 HTTP 메시지 단위</strong>. "IP 패킷 단위"가 지문에 있으면 IPSec이다.
          </div>

          <h3>4-4. 데이터베이스 구간 보안과 시큐어 코딩</h3>
          <ul>
            <li><strong>데이터베이스 암호화</strong>: 중요 컬럼(주민번호·카드번호 등)을 <strong>AES, SEED, ARIA</strong> 같은
            암호화 알고리즘으로 암호화하여 저장한다. 암호화 방식에는 API 방식, Plug-in 방식, TDE 방식 등이 있다.</li>
            <li><strong>접근 제어</strong>: DB 계정·권한을 최소화하고, 인터페이스 전용 계정에는 필요한 테이블 권한만 부여한다.</li>
            <li><strong>시큐어 코딩</strong>: 입력 데이터 검증(SQL 삽입·XSS 방지), 예외 처리, 민감 정보 하드코딩 금지 등
            <strong>보안 약점을 예방하는 코딩 규칙</strong>을 인터페이스 구현 코드에도 적용한다.</li>
          </ul>
        </section>

        {/* ===================== 5. 검증 도구 ===================== */}
        <section id="verify">
          <h2>5. 인터페이스 구현 검증 도구 · 감시 도구(APM)</h2>
          <p class="sub">실기 최단골 주제. 각 도구의 한 줄 설명을 보고 도구명을 쓸 수 있어야 한다. 특히 xUnit · STAF · FitNesse · Selenium은 반복 출제된다.</p>

          <h3>5-1. 인터페이스 구현 검증 도구 (실기 최단골)</h3>
          <table>
            <tr><th>도구</th><th>한 줄 정의</th></tr>
            <tr>
              <td><strong>xUnit</strong></td>
              <td>Java(JUnit), C++(CppUnit), .NET(NUnit) 등 <strong>다양한 언어를 지원하는 단위 테스트 프레임워크</strong></td>
            </tr>
            <tr>
              <td><strong>STAF</strong></td>
              <td>서비스 호출·컴포넌트 재사용 등 다양한 환경을 지원하는 테스트 프레임워크.
              각 시스템에 <strong>데몬(Daemon)</strong>을 사용하여 <strong>분산 환경</strong>의 테스트를 지원한다</td>
            </tr>
            <tr>
              <td><strong>FitNesse</strong></td>
              <td><strong>웹 기반</strong> 테스트 케이스 설계·실행·결과 확인 등을 지원하는 테스트 프레임워크</td>
            </tr>
            <tr>
              <td><strong>NTAF</strong></td>
              <td>NHN의 테스트 자동화 프레임워크. <strong>STAF와 FitNesse를 통합</strong>한 형태다</td>
            </tr>
            <tr>
              <td><strong>Selenium</strong></td>
              <td><strong>다양한 브라우저와 개발 언어를 지원</strong>하는 웹 애플리케이션 테스트 프레임워크</td>
            </tr>
            <tr>
              <td><strong>watir</strong></td>
              <td><strong>Ruby(루비) 기반</strong> 웹 애플리케이션 테스트 프레임워크</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">구분 포인트</span><br/>
            지문 키워드로 도구를 찾자 — <strong>단위 테스트 → xUnit</strong> / <strong>데몬·분산 환경 → STAF</strong> /
            <strong>웹 기반 테스트 케이스 → FitNesse</strong> / <strong>STAF + FitNesse 통합 → NTAF</strong> /
            <strong>다양한 브라우저 → Selenium</strong> / <strong>Ruby 기반 → watir</strong>.
          </div>

          <h3>5-2. 인터페이스 감시 도구 — APM</h3>
          <p><strong>APM(Application Performance Management/Monitoring)</strong>은 인터페이스가 정상적으로 동작하는지
          <strong>애플리케이션의 성능과 동작 상태를 감시(모니터링)</strong>하는 도구다.
          인터페이스 동작 여부, 트랜잭션 응답 시간, 에러 발생 여부를 실시간으로 확인할 수 있다.</p>
          <table>
            <tr><th>도구</th><th>설명</th></tr>
            <tr><td><strong>스카우터 (Scouter)</strong></td><td>국내에서 많이 쓰이는 <strong>오픈 소스</strong> APM 도구</td></tr>
            <tr><td><strong>제니퍼 (Jennifer)</strong></td><td>애플리케이션 개발부터 운영까지 성능을 모니터링하는 <strong>상용</strong> APM 도구</td></tr>
          </table>
        </section>

        {/* ===================== 6. 오류 처리 ===================== */}
        <section id="error">
          <h2>6. 인터페이스 오류 처리</h2>
          <p class="sub">인터페이스 오류는 반드시 발생한다는 전제로, 오류를 어디에 남기고 누구에게 어떻게 알릴지를 미리 설계해 둔다.</p>

          <h3>6-1. 오류 발생 시 처리·보고 방안</h3>
          <table>
            <tr><th>방법</th><th>설명</th><th>특징</th></tr>
            <tr>
              <td><strong>사용자 화면에 표시</strong></td>
              <td>인터페이스 오류 발생 시 사용자 화면에 오류 메시지(알림 창 등)를 출력한다</td>
              <td>사용자가 <strong>즉시 인지</strong>할 수 있다. 가장 직관적이고 일반적인 방법</td>
            </tr>
            <tr>
              <td><strong>시스템 로그(Log) 기록</strong></td>
              <td>오류 발생 시각·오류 내용·발생 위치 등을 시스템 로그 파일에 기록한다</td>
              <td>관리자가 <strong>상세 원인을 분석</strong>할 수 있다. 즉시성은 낮다</td>
            </tr>
            <tr>
              <td><strong>인터페이스 오류 테이블 기록</strong></td>
              <td>오류 내역을 전용 오류 테이블(엔터티)에 저장하여 관리한다</td>
              <td>오류 내역의 <strong>조회·통계·후속 처리(재전송)</strong>가 쉽다</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            사용자 화면 표시는 <strong>즉시 확인</strong>용, 시스템 로그와 오류 테이블은 관리자·운영자의
            <strong>주기적 모니터링과 원인 분석</strong>용이라는 성격 차이를 기억하자.
          </div>

          <h3>6-2. 오류 확인 절차</h3>
          <table>
            <tr><th>순서</th><th>절차</th><th>설명</th></tr>
            <tr><td>①</td><td><strong>오류 발생 인지</strong></td><td>사용자 화면·감시 도구(APM)·보고를 통해 오류 발생을 인지한다</td></tr>
            <tr><td>②</td><td><strong>오류 내역 확인</strong></td><td>시스템 로그와 인터페이스 오류 테이블에서 오류 코드·시각·데이터를 확인한다</td></tr>
            <tr><td>③</td><td><strong>원인 분석</strong></td><td>오류 유형(데이터 형식 오류, 통신 장애, 시스템 오류 등)을 분류하고 원인을 분석한다</td></tr>
            <tr><td>④</td><td><strong>수정·재처리</strong></td><td>원인을 제거한 뒤 실패한 인터페이스 데이터를 재전송·재처리한다</td></tr>
            <tr><td>⑤</td><td><strong>결과 보고</strong></td><td>처리 결과를 이해관계자에게 보고하고 재발 방지 대책을 기록한다</td></tr>
          </table>
        </section>

        {/* ===================== 7. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">설명을 보고 용어를 쓰거나 괄호를 채우는 실기 기출 형식의 자작 문제 10문항. 답을 직접 손으로 써 본 뒤 정답을 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.</p>
            <pre>{`Java(JUnit), C++(CppUnit), .NET(NUnit) 등 다양한 언어를 지원하는
단위 테스트 프레임워크이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>xUnit<br/>
                <span class="label">해설: </span>"다양한 언어 + 단위(Unit) 테스트"가 핵심 키워드다. 언어별 구현체 이름(JUnit·CppUnit·NUnit)의 공통 형태가 xUnit이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.</p>
            <pre>{`서비스 호출, 컴포넌트 재사용 등 다양한 환경을 지원하는 테스트
프레임워크로, 각 시스템에 데몬(Daemon)을 사용하여 분산 환경에서의
테스트를 지원한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>STAF<br/>
                <span class="label">해설: </span>"데몬"과 "분산 환경"이 STAF를 가리키는 결정적 키워드다. 웹 기반 테스트 케이스가 나오면 FitNesse와 혼동하지 말 것.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 인터페이스 구현 검증 도구를 쓰시오.</p>
            <pre>{`다양한 브라우저와 다양한 개발 언어를 지원하는
웹 애플리케이션 테스트 프레임워크이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Selenium (셀레늄)<br/>
                <span class="label">해설: </span>"다양한 브라우저 지원"이 Selenium의 키워드다. 같은 웹 테스트라도 "Ruby 기반"이면 watir, "웹 기반 테스트 케이스 설계·실행"이면 FitNesse다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 기술을 쓰시오.</p>
            <pre>{`자바스크립트를 사용하여 클라이언트와 서버 간에 비동기 통신으로
XML 데이터를 주고받는 기술로, 전체 페이지를 새로 고치지 않고
필요한 일부 데이터만 갱신할 수 있다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>AJAX (Asynchronous JavaScript And XML)<br/>
                <span class="label">해설: </span>"비동기 통신 + 일부만 갱신"이 AJAX의 시그니처 표현이다. 내부적으로 XMLHttpRequest 객체를 사용한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 데이터 포맷을 쓰시오.</p>
            <pre>{`속성-값 쌍(Attribute-Value Pair)으로 이루어진 데이터 오브젝트를
전달하기 위해 사용하는 개방형 표준 포맷으로,
AJAX에서 XML을 대체하는 주요 데이터 형식으로 사용된다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>JSON (JavaScript Object Notation)<br/>
                <span class="label">해설: </span>"속성-값 쌍"과 "개방형 표준 포맷"이 JSON의 정의 문장 그대로다. 실기에서 여러 차례 출제된 단골 지문이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">네트워크를 지나는 인터페이스 데이터를 몰래 도청(엿보기)하여 정보를 탈취하는
            수동적(Passive) 공격 기법을 무엇이라 하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>스니핑 (Sniffing)<br/>
                <span class="label">해설: </span>"몰래 도청·엿보기"가 스니핑이다. 자신을 다른 대상으로 속이는 능동적 공격인 스푸핑(Spoofing)과 구분하자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명에 해당하는 네트워크 보안 프로토콜을 쓰시오.</p>
            <pre>{`네트워크 계층(IP 계층)에서 IP 패킷 단위로 인증·암호화를 수행하는
보안 프로토콜로, 인증 헤더(AH)와 암호화(ESP)를 이용하며
전송 모드와 터널 모드를 지원한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>IPSec (IP Security)<br/>
                <span class="label">해설: </span>"IP 계층(3계층) + 패킷 단위 + AH/ESP"가 IPSec의 결정적 키워드다. 전송 계층 기반의 SSL/TLS와 계층으로 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 괄호 안에 들어갈 보안 프로토콜을 각각 쓰시오.</p>
            <pre>{`· ( ① ) : 전송 계층과 응용 계층 사이에서 클라이언트와 서버 간
           인증서 기반 인증과 암호화를 수행한다. HTTPS에 사용된다.
· ( ② ) : 클라이언트와 서버 간에 주고받는 HTTP 메시지(웹 문서)
           단위로 암호화한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① SSL/TLS, ② S-HTTP<br/>
                <span class="label">해설: </span>SSL/TLS는 연결(세션) 전체를, S-HTTP는 HTTP 메시지 단위를 암호화한다는 점이 두 프로토콜의 구분 기준이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">인터페이스가 정상적으로 동작하는지 애플리케이션의 성능과 동작 상태를
            실시간으로 감시(모니터링)하는 도구를 무엇이라 하는지 쓰시오.
            (대표 제품: 스카우터, 제니퍼)</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>APM (Application Performance Management/Monitoring, 애플리케이션 성능 관리 도구)<br/>
                <span class="label">해설: </span>검증 도구(xUnit 등)는 구현이 맞는지 테스트하는 도구, 감시 도구(APM)는 운영 중 동작 상태를 지켜보는 도구다. 스카우터는 오픈 소스, 제니퍼는 상용 제품이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">인터페이스 오류 발생 시 처리·보고 방안에 대한 다음 설명에서 괄호 안에 들어갈 말을 각각 쓰시오.</p>
            <pre>{`· 사용자 화면 표시 : 오류를 사용자가 즉시 인지할 수 있는 가장 직관적인 방법
· ( ① ) 기록      : 오류 시각·내용·위치를 파일로 남겨 관리자가 상세 원인을 분석
· 인터페이스 ( ② ) 기록 : 오류 내역을 전용 테이블에 저장하여
                          조회·통계·재전송 등 후속 처리에 활용`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 시스템 로그(Log), ② 오류 테이블<br/>
                <span class="label">해설: </span>오류 처리·보고 3대 방안은 사용자 화면, 시스템 로그, 인터페이스 오류 테이블이다. 화면은 즉시성, 로그·테이블은 분석·후속 처리가 장점이다.
              </div>
            </details>
          </div>

          <hr class="divider"/>
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">EAI / ESB</span>
            <span class="kw">SOAP · WSDL</span>
            <span class="kw">FitNesse</span>
            <span class="kw">NTAF</span>
            <span class="kw">watir</span>
            <span class="kw">스푸핑(Spoofing)</span>
            <span class="kw">AES · SEED · ARIA</span>
            <span class="kw">TDE 방식 DB 암호화</span>
            <span class="kw">시큐어 코딩 가이드</span>
            <span class="kw">데이터 무결성 검사 도구</span>
          </p>
        </section>

        <footer>인터페이스 기능 구현 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
