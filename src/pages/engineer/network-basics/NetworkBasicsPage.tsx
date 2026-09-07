import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './network-basics.css'

export default defineComponent({
  name: 'NetworkBasicsPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>네트워크 기초 활용 · 계층 구조와 프로토콜</h1>
          <p>정보처리기사 실기 대비 학습 문서. OSI 7계층 → TCP/IP 4계층 → 주요 프로토콜(포트·TCP/UDP·ARP) →
          IP 주소와 서브네팅 계산 → IPv6 → 라우팅(RIP·OSPF·BGP) → 데이터 전달 방식과 토폴로지 →
          네트워크 장비·용어 순서로, 실기 단골 개념을 도면·표·계산 예제·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 데이터·요청의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#osi" onClick={(e) => scrollToId(e, 'osi')}>OSI 7계층 — 기능 · PDU · 장비</a></li>
            <li><a href="#tcpip" onClick={(e) => scrollToId(e, 'tcpip')}>TCP/IP 4계층 — OSI 대응 관계</a></li>
            <li><a href="#protocol" onClick={(e) => scrollToId(e, 'protocol')}>주요 프로토콜 — 포트 · TCP/UDP · ARP</a></li>
            <li><a href="#ip" onClick={(e) => scrollToId(e, 'ip')}>IP 주소 — 클래스와 서브네팅 계산</a></li>
            <li><a href="#ipv6" onClick={(e) => scrollToId(e, 'ipv6')}>IPv6 — 주소 유형과 전환 기술</a></li>
            <li><a href="#routing" onClick={(e) => scrollToId(e, 'routing')}>라우팅 — RIP · OSPF · BGP</a></li>
            <li><a href="#transfer" onClick={(e) => scrollToId(e, 'transfer')}>데이터 전달 방식과 네트워크 구조</a></li>
            <li><a href="#device" onClick={(e) => scrollToId(e, 'device')}>네트워크 장비와 용어</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. OSI 7계층 ===================== */}
        <section id="osi">
          <h2>1. OSI 7계층 — 기능 · PDU · 장비</h2>
          <p class="sub">실기 최최단골. "다음 설명에 해당하는 계층을 쓰시오" 형태로 매회 출제될 수 있다.
          계층 이름 · 기능 · PDU · 대표 장비를 한 세트로 암기한다.</p>

          <h3>1-1. 7계층 종합 표 (통째로 암기)</h3>
          <table>
            <tr><th>계층</th><th>이름</th><th>핵심 기능</th><th>PDU</th><th>대표 장비</th><th>대표 프로토콜</th></tr>
            <tr>
              <td><strong>7</strong></td><td><strong>응용 (Application)</strong></td>
              <td>사용자에게 <strong>네트워크 서비스 제공</strong> (인터페이스)</td>
              <td>데이터</td><td>—</td><td>HTTP, FTP, SMTP, DNS, Telnet</td>
            </tr>
            <tr>
              <td><strong>6</strong></td><td><strong>표현 (Presentation)</strong></td>
              <td>데이터 <strong>형식 변환 · 암호화 · 압축</strong></td>
              <td>데이터</td><td>—</td><td>JPEG, MPEG, SSL/TLS</td>
            </tr>
            <tr>
              <td><strong>5</strong></td><td><strong>세션 (Session)</strong></td>
              <td>응용 간 <strong>대화(세션) 설정 · 유지 · 종료</strong>, 동기화(체크포인트)</td>
              <td>데이터</td><td>—</td><td>NetBIOS, RPC</td>
            </tr>
            <tr>
              <td><strong>4</strong></td><td><strong>전송 (Transport)</strong></td>
              <td><strong>종단 간(End-to-End) 신뢰성 있는 전송</strong>, 흐름 · 오류 제어, 포트 주소</td>
              <td><strong>세그먼트</strong></td><td>L4 스위치</td><td><strong>TCP, UDP</strong></td>
            </tr>
            <tr>
              <td><strong>3</strong></td><td><strong>네트워크 (Network)</strong></td>
              <td><strong>경로 설정(라우팅)</strong>, 논리 주소(IP) 지정</td>
              <td><strong>패킷</strong></td><td><strong>라우터</strong></td><td>IP, ICMP, IGMP, ARP, RARP</td>
            </tr>
            <tr>
              <td><strong>2</strong></td><td><strong>데이터링크 (Data Link)</strong></td>
              <td><strong>인접 노드 간</strong> 신뢰성 있는 전송, 물리 주소(MAC), 오류 · 흐름 제어</td>
              <td><strong>프레임</strong></td><td><strong>브리지, 스위치</strong></td><td>이더넷, HDLC, PPP</td>
            </tr>
            <tr>
              <td><strong>1</strong></td><td><strong>물리 (Physical)</strong></td>
              <td><strong>비트를 전기 신호로 변환</strong>하여 전송 (기계적 · 전기적 특성)</td>
              <td><strong>비트</strong></td><td><strong>리피터, 허브</strong></td><td>RS-232C</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기법</span><br/>
            아래(1층)부터 <strong>"물데네전세표응"</strong> — 물리 · 데이터링크 · 네트워크 · 전송 · 세션 · 표현 · 응용.
            PDU는 아래부터 <strong>비트 → 프레임 → 패킷 → 세그먼트</strong> (5~7계층은 데이터)로 짝지어 외운다.
          </div>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 480" role="img" aria-label="OSI 7계층 세로 스택">
              {/* 7계층 스택 (위 = 7층) */}
              <rect class="boxdark" x="180" y="20" width="240" height="52" />
              <text x="300" y="42" text-anchor="middle" class="strong">7. 응용 계층</text>
              <text x="300" y="62" text-anchor="middle" class="small">HTTP · FTP · SMTP · DNS</text>
              <rect class="box" x="180" y="80" width="240" height="52" />
              <text x="300" y="102" text-anchor="middle" class="strong">6. 표현 계층</text>
              <text x="300" y="122" text-anchor="middle" class="small">암호화 · 압축 · 형식 변환</text>
              <rect class="box" x="180" y="140" width="240" height="52" />
              <text x="300" y="162" text-anchor="middle" class="strong">5. 세션 계층</text>
              <text x="300" y="182" text-anchor="middle" class="small">대화 설정 · 유지 · 동기화</text>
              <rect class="boxdark" x="180" y="200" width="240" height="52" />
              <text x="300" y="222" text-anchor="middle" class="strong">4. 전송 계층</text>
              <text x="300" y="242" text-anchor="middle" class="small">TCP · UDP (종단 간 전송)</text>
              <rect class="boxdark" x="180" y="260" width="240" height="52" />
              <text x="300" y="282" text-anchor="middle" class="strong">3. 네트워크 계층</text>
              <text x="300" y="302" text-anchor="middle" class="small">IP · ICMP (경로 설정)</text>
              <rect class="box" x="180" y="320" width="240" height="52" />
              <text x="300" y="342" text-anchor="middle" class="strong">2. 데이터링크 계층</text>
              <text x="300" y="362" text-anchor="middle" class="small">이더넷 · MAC (인접 노드)</text>
              <rect class="box" x="180" y="380" width="240" height="52" />
              <text x="300" y="402" text-anchor="middle" class="strong">1. 물리 계층</text>
              <text x="300" y="422" text-anchor="middle" class="small">비트 · 전기 신호</text>

              {/* 오른쪽: PDU / 장비 주석 */}
              <rect class="boxsoft" x="480" y="20" width="150" height="172" />
              <text x="555" y="48" text-anchor="middle" class="strong">PDU</text>
              <text x="555" y="72" text-anchor="middle" class="small">5~7층: 데이터</text>
              <rect class="boxsoft" x="480" y="200" width="150" height="52" />
              <text x="555" y="231" text-anchor="middle">세그먼트</text>
              <rect class="boxsoft" x="480" y="260" width="150" height="52" />
              <text x="555" y="291" text-anchor="middle">패킷</text>
              <rect class="boxsoft" x="480" y="320" width="150" height="52" />
              <text x="555" y="351" text-anchor="middle">프레임</text>
              <rect class="boxsoft" x="480" y="380" width="150" height="52" />
              <text x="555" y="411" text-anchor="middle">비트</text>

              <rect class="boxsoft" x="670" y="200" width="180" height="52" />
              <text x="760" y="231" text-anchor="middle" class="small">L4 스위치</text>
              <rect class="boxsoft" x="670" y="260" width="180" height="52" />
              <text x="760" y="291" text-anchor="middle" class="small">라우터</text>
              <rect class="boxsoft" x="670" y="320" width="180" height="52" />
              <text x="760" y="351" text-anchor="middle" class="small">브리지 · 스위치</text>
              <rect class="boxsoft" x="670" y="380" width="180" height="52" />
              <text x="760" y="411" text-anchor="middle" class="small">리피터 · 허브</text>
              <text x="760" y="180" text-anchor="middle" class="strong">대표 장비</text>

              {/* 왼쪽: 캡슐화/역캡슐화 방향 */}
              <line class="arrow" x1="120" y1="40" x2="120" y2="420" />
              <text x="105" y="230" text-anchor="middle" class="small" transform="rotate(-90 105 230)">캡슐화 (송신: 위 → 아래)</text>
              <text x="300" y="466" text-anchor="middle" class="small">암기: 물데네전세표응 (1층부터)</text>
            </svg>
            <figcaption>도면 1. OSI 7계층 세로 스택 — 계층별 PDU와 대표 장비 대응</figcaption>
          </figure>

          <h3>1-2. 캡슐화와 역캡슐화</h3>
          <p><strong>캡슐화(Encapsulation)</strong>는 송신 측에서 데이터가 위 계층에서 아래 계층으로 내려가며
          각 계층의 <strong>헤더가 차례로 붙는</strong> 과정이고,
          <strong>역캡슐화(Decapsulation)</strong>는 수신 측에서 아래에서 위로 올라가며 <strong>헤더를 차례로 떼어 내는</strong> 과정이다.</p>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 300" role="img" aria-label="캡슐화 과정">
              <text x="120" y="45" text-anchor="end">응용 계층</text>
              <rect class="boxdark" x="480" y="24" width="240" height="34" />
              <text x="600" y="47" text-anchor="middle">데이터</text>

              <text x="120" y="105" text-anchor="end">전송 계층</text>
              <rect class="boxsoft" x="400" y="84" width="80" height="34" />
              <text x="440" y="107" text-anchor="middle" class="small">TCP 헤더</text>
              <rect class="boxdark" x="480" y="84" width="240" height="34" />
              <text x="600" y="107" text-anchor="middle">데이터</text>
              <text x="760" y="107" class="small">= 세그먼트</text>

              <text x="120" y="165" text-anchor="end">네트워크 계층</text>
              <rect class="boxsoft" x="320" y="144" width="80" height="34" />
              <text x="360" y="167" text-anchor="middle" class="small">IP 헤더</text>
              <rect class="boxsoft" x="400" y="144" width="80" height="34" />
              <text x="440" y="167" text-anchor="middle" class="small">TCP 헤더</text>
              <rect class="boxdark" x="480" y="144" width="240" height="34" />
              <text x="600" y="167" text-anchor="middle">데이터</text>
              <text x="760" y="167" class="small">= 패킷</text>

              <text x="120" y="225" text-anchor="end">데이터링크 계층</text>
              <rect class="boxsoft" x="240" y="204" width="80" height="34" />
              <text x="280" y="227" text-anchor="middle" class="small">프레임 헤더</text>
              <rect class="boxsoft" x="320" y="204" width="80" height="34" />
              <text x="360" y="227" text-anchor="middle" class="small">IP 헤더</text>
              <rect class="boxsoft" x="400" y="204" width="80" height="34" />
              <text x="440" y="227" text-anchor="middle" class="small">TCP 헤더</text>
              <rect class="boxdark" x="480" y="204" width="240" height="34" />
              <text x="600" y="227" text-anchor="middle">데이터</text>
              <rect class="boxsoft" x="720" y="204" width="70" height="34" />
              <text x="755" y="227" text-anchor="middle" class="small">트레일러</text>
              <text x="800" y="227" class="small">= 프레임</text>

              <line class="arrow" x1="170" y1="60" x2="170" y2="240" />
              <text x="155" y="150" text-anchor="middle" class="small" transform="rotate(-90 155 150)">캡슐화</text>
              <text x="450" y="280" text-anchor="middle" class="small">물리 계층에서는 프레임을 비트(전기 신호)로 변환하여 전송</text>
            </svg>
            <figcaption>도면 2. 캡슐화 — 계층을 내려갈 때마다 헤더가 붙는다 (수신 측은 역순으로 역캡슐화)</figcaption>
          </figure>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "종단 간(End-to-End) 전송"은 <strong>전송 계층</strong>, "인접(1홉) 노드 간 전송"은 <strong>데이터링크 계층</strong>이다.
            두 표현의 구분이 계층 맞히기 문제의 단골 함정.
          </div>
        </section>

        {/* ===================== 2. TCP/IP 4계층 ===================== */}
        <section id="tcpip">
          <h2>2. TCP/IP 4계층 — OSI 대응 관계</h2>
          <p class="sub">인터넷의 실제 표준 모델. OSI 7계층과의 대응 관계를 짝지어 쓰는 문제가 단골이다.</p>
          <table>
            <tr><th>TCP/IP 4계층</th><th>대응하는 OSI 계층</th><th>역할</th><th>대표 프로토콜</th></tr>
            <tr>
              <td><strong>응용 계층</strong></td><td>응용(7) + 표현(6) + 세션(5)</td>
              <td>응용 서비스 제공</td><td>HTTP, FTP, SMTP, DNS, SNMP</td>
            </tr>
            <tr>
              <td><strong>전송 계층</strong></td><td>전송(4)</td>
              <td>종단 간 통신, 신뢰성</td><td>TCP, UDP</td>
            </tr>
            <tr>
              <td><strong>인터넷 계층</strong></td><td>네트워크(3)</td>
              <td>주소 지정, 경로 설정</td><td>IP, ICMP, IGMP, ARP, RARP</td>
            </tr>
            <tr>
              <td><strong>네트워크 액세스 계층</strong></td><td>데이터링크(2) + 물리(1)</td>
              <td>실제 매체를 통한 프레임 · 비트 전송</td><td>이더넷, PPP</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            OSI의 <strong>세션 · 표현 계층은 TCP/IP에서 응용 계층에 흡수</strong>된다.
            "TCP/IP 4계층에는 세션 계층이 있다"는 보기는 오답이다.
          </div>
        </section>

        {/* ===================== 3. 주요 프로토콜 ===================== */}
        <section id="protocol">
          <h2>3. 주요 프로토콜 — 포트 · TCP/UDP · ARP</h2>
          <p class="sub">응용 계층 프로토콜은 포트 번호와 함께, 전송 계층은 TCP vs UDP 비교로, 인터넷 계층은 ARP vs RARP 구분으로 출제된다.</p>

          <h3>3-1. 응용 계층 프로토콜과 포트 번호 (단골)</h3>
          <table>
            <tr><th>프로토콜</th><th>포트</th><th>설명</th></tr>
            <tr><td><strong>HTTP</strong></td><td><strong>80</strong></td><td>웹 문서(하이퍼텍스트) 전송</td></tr>
            <tr><td><strong>HTTPS</strong></td><td><strong>443</strong></td><td>HTTP + SSL/TLS 암호화</td></tr>
            <tr><td><strong>FTP</strong></td><td><strong>20(데이터), 21(제어)</strong></td><td>파일 전송</td></tr>
            <tr><td><strong>SSH</strong></td><td><strong>22</strong></td><td>암호화된 원격 접속</td></tr>
            <tr><td><strong>Telnet</strong></td><td><strong>23</strong></td><td>원격 접속 (평문 — 보안 취약)</td></tr>
            <tr><td><strong>SMTP</strong></td><td><strong>25</strong></td><td>메일 <strong>송신</strong></td></tr>
            <tr><td><strong>DNS</strong></td><td><strong>53</strong></td><td>도메인 이름 ↔ IP 주소 변환</td></tr>
            <tr><td><strong>DHCP</strong></td><td>67, 68</td><td>호스트에 <strong>IP 주소를 자동 할당</strong> (단골)</td></tr>
            <tr><td><strong>POP3</strong></td><td><strong>110</strong></td><td>메일 <strong>수신</strong> (서버에서 내려받음)</td></tr>
            <tr><td><strong>SNMP</strong></td><td>161, 162</td><td><strong>네트워크 장비 관리 · 감시</strong> (단골)</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            용어 문제 단골 두 개 — <strong>DHCP</strong>: "IP 주소를 자동으로 할당해 주는 프로토콜",
            <strong>SNMP</strong>: "네트워크 장비를 관리 · 감시하기 위한 프로토콜". 설명을 보고 이름을 쓸 수 있어야 한다.
          </div>

          <h3>3-2. 전송 계층 — TCP vs UDP (최최단골 비교 표)</h3>
          <table>
            <tr><th>구분</th><th>TCP</th><th>UDP</th></tr>
            <tr><td>연결 방식</td><td><strong>연결형</strong> (3-way 핸드셰이크로 연결 설정)</td><td><strong>비연결형</strong> (설정 없이 바로 전송)</td></tr>
            <tr><td>신뢰성</td><td><strong>보장</strong> (순서 보장, 재전송)</td><td>보장하지 않음 (순서 · 도착 미보장)</td></tr>
            <tr><td>제어 기능</td><td><strong>흐름 제어 · 혼잡 제어 · 오류 제어</strong></td><td>없음 (헤더 단순)</td></tr>
            <tr><td>속도</td><td>상대적으로 느림</td><td><strong>빠름</strong> (오버헤드 작음)</td></tr>
            <tr><td>단위</td><td>세그먼트</td><td>데이터그램</td></tr>
            <tr><td>용도</td><td>웹(HTTP), 메일, 파일 전송</td><td><strong>실시간</strong> 스트리밍, VoIP, DNS 질의</td></tr>
          </table>

          <h3>3-3. TCP 3-way 핸드셰이크 (단골)</h3>
          <p>TCP는 데이터를 보내기 전에 <strong>SYN → SYN+ACK → ACK</strong> 세 번의 메시지 교환으로 연결을 설정한다.
          괄호 채우기(SYN, ACK)로 자주 출제된다.</p>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330" role="img" aria-label="TCP 3-way 핸드셰이크">
              <rect class="box" x="110" y="20" width="160" height="42" />
              <text x="190" y="47" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="630" y="20" width="160" height="42" />
              <text x="710" y="47" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="190" y1="62" x2="190" y2="300" />
              <line class="life" x1="710" y1="62" x2="710" y2="300" />

              <g class="msg" data-step="1">
                <line class="arrow" x1="190" y1="105" x2="710" y2="130" />
                <text x="450" y="98" text-anchor="middle">① SYN (연결 요청)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="710" y1="170" x2="190" y2="195" />
                <text x="450" y="163" text-anchor="middle">② SYN + ACK (요청 수락 + 확인 응답)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="190" y1="235" x2="710" y2="260" />
                <text x="450" y="228" text-anchor="middle">③ ACK (확인 응답)</text>
              </g>
              <text x="450" y="295" text-anchor="middle" class="small">③ 이후 연결 성립(ESTABLISHED) — 데이터 전송 시작</text>
            </svg>
            <figcaption>도면 3. TCP 3-way 핸드셰이크 — SYN → SYN+ACK → ACK 순서로 연결을 설정한다</figcaption>
          </figure>

          <h3>3-4. 인터넷 계층 프로토콜</h3>
          <table>
            <tr><th>프로토콜</th><th>역할</th></tr>
            <tr>
              <td><strong>IP</strong></td>
              <td>패킷의 주소 지정과 경로 설정. <strong>비연결형 · 비신뢰성</strong> — 전송을 보장하지 않는다 (단골)</td>
            </tr>
            <tr>
              <td><strong>ICMP</strong></td>
              <td>IP의 <strong>오류 보고 · 상태 진단</strong> 메시지 전달. <strong>ping</strong> 명령이 사용 (단골)</td>
            </tr>
            <tr>
              <td><strong>IGMP</strong></td>
              <td><strong>멀티캐스트 그룹</strong> 가입 · 탈퇴 관리</td>
            </tr>
            <tr>
              <td><strong>ARP</strong></td>
              <td><strong>IP 주소 → MAC 주소</strong> 변환 (최단골)</td>
            </tr>
            <tr>
              <td><strong>RARP</strong></td>
              <td><strong>MAC 주소 → IP 주소</strong> 변환 (ARP의 반대)</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">함정 주의</span><br/>
            ARP와 RARP의 방향을 바꿔 쓰면 오답. <strong>ARP는 "아는 것이 IP, 알고 싶은 것이 MAC"</strong>,
            RARP(Reverse ARP)는 그 반대다. 실기에서 두 프로토콜 구분이 최단골.
          </div>
        </section>

        {/* ===================== 4. IP 주소 ===================== */}
        <section id="ip">
          <h2>4. IP 주소 — 클래스와 서브네팅 계산</h2>
          <p class="sub">IPv4는 32비트 주소를 8비트씩 4개의 옥텟으로 표기한다. 클래스 범위 표와 서브네팅 계산은 실기 최다 빈출 — 반드시 손으로 계산할 수 있어야 한다.</p>

          <h3>4-1. IPv4 클래스 (범위 표 단골)</h3>
          <table>
            <tr><th>클래스</th><th>첫 옥텟 범위</th><th>기본 서브넷 마스크</th><th>용도</th></tr>
            <tr><td><strong>A</strong></td><td><strong>0 ~ 127</strong></td><td>255.0.0.0 (<strong>/8</strong>)</td><td>대규모 네트워크 (호스트 약 1,677만 개)</td></tr>
            <tr><td><strong>B</strong></td><td><strong>128 ~ 191</strong></td><td>255.255.0.0 (<strong>/16</strong>)</td><td>중규모 네트워크 (호스트 약 6만 5천 개)</td></tr>
            <tr><td><strong>C</strong></td><td><strong>192 ~ 223</strong></td><td>255.255.255.0 (<strong>/24</strong>)</td><td>소규모 네트워크 (호스트 254개)</td></tr>
            <tr><td><strong>D</strong></td><td>224 ~ 239</td><td>—</td><td><strong>멀티캐스트</strong> 전용</td></tr>
            <tr><td><strong>E</strong></td><td>240 ~ 255</td><td>—</td><td>연구 · 실험용 (예약)</td></tr>
          </table>

          <h3>4-2. 사설 IP 대역과 서브넷 마스크</h3>
          <table>
            <tr><th>클래스</th><th>사설 IP 대역</th></tr>
            <tr><td>A</td><td>10.0.0.0 ~ 10.255.255.255 (10.0.0.0/8)</td></tr>
            <tr><td>B</td><td>172.16.0.0 ~ 172.31.255.255 (172.16.0.0/12)</td></tr>
            <tr><td>C</td><td>192.168.0.0 ~ 192.168.255.255 (192.168.0.0/16)</td></tr>
          </table>
          <p><strong>서브넷 마스크</strong>는 IP 주소에서 <strong>네트워크 부분과 호스트 부분을 구분</strong>하는 32비트 값이다.
          <strong>CIDR 표기</strong>(/24 등)는 네트워크 비트(1의 개수)를 슬래시 뒤에 적는 방식이다.
          예: 255.255.255.192는 1이 26개이므로 <code>/26</code>.</p>

          <h3>4-3. 서브네팅 계산 예제 ① — 192.168.1.0/24를 4개 서브넷으로 (실기 최다 빈출)</h3>
          <p>4개 서브넷이 필요하면 서브넷 비트 2개를 빌린다 (2² = 4).
          따라서 /24 + 2 = <strong>/26</strong> (마스크 255.255.255.192), 각 서브넷의 크기는 2⁶ = 64 주소 블록이다.</p>
          <table>
            <tr><th>서브넷</th><th>네트워크 주소</th><th>호스트 범위</th><th>브로드캐스트 주소</th><th>사용 가능 호스트 수</th></tr>
            <tr><td>1</td><td>192.168.1.0/26</td><td>192.168.1.1 ~ 62</td><td>192.168.1.63</td><td>62</td></tr>
            <tr><td>2</td><td>192.168.1.64/26</td><td>192.168.1.65 ~ 126</td><td>192.168.1.127</td><td>62</td></tr>
            <tr><td>3</td><td>192.168.1.128/26</td><td>192.168.1.129 ~ 190</td><td>192.168.1.191</td><td>62</td></tr>
            <tr><td>4</td><td>192.168.1.192/26</td><td>192.168.1.193 ~ 254</td><td>192.168.1.255</td><td>62</td></tr>
          </table>
          <pre>{`검산:
· 호스트 비트 = 32 - 26 = 6비트 → 블록 크기 2^6 = 64 → 0, 64, 128, 192에서 시작 ✓
· 서브넷당 호스트 수 = 2^6 - 2 = 64 - 2 = 62개
  (- 2 는 네트워크 주소 1개 + 브로드캐스트 주소 1개 제외)
· 브로드캐스트 = 다음 네트워크 주소 - 1 (예: 64 - 1 = 63) ✓`}</pre>

          <h3>4-4. 서브네팅 계산 예제 ② — /27 네트워크의 호스트 수</h3>
          <p>/27은 네트워크 비트 27개, 호스트 비트 32 − 27 = <strong>5개</strong>다.</p>
          <pre>{`사용 가능 호스트 수 = 2^호스트비트 - 2
                    = 2^5 - 2 = 32 - 2 = 30개

검산: /27 마스크 = 255.255.255.224 (224 = 11100000₂)
      블록 크기 32 → 주소 32개 중 네트워크 1개 + 브로드캐스트 1개 제외 = 30개 ✓`}</pre>
          <div class="box">
            <span class="tag-line">공식</span><br/>
            <strong>사용 가능 호스트 수 = 2^(32−프리픽스) − 2</strong>,
            <strong>서브넷 개수 = 2^(빌린 비트 수)</strong>,
            <strong>브로드캐스트 주소 = 다음 서브넷 시작 주소 − 1</strong>. 이 세 공식만 정확하면 서브네팅 문제는 전부 풀린다.
          </div>
        </section>

        {/* ===================== 5. IPv6 ===================== */}
        <section id="ipv6">
          <h2>5. IPv6 — 주소 유형과 전환 기술</h2>
          <p class="sub">IPv4 주소 고갈을 해결하기 위한 128비트 주소 체계. 표기법 · 주소 유형 3가지 · 전환 기술 3가지가 출제 포인트.</p>

          <h3>5-1. IPv4와 IPv6 비교 (표 단골)</h3>
          <table>
            <tr><th>구분</th><th>IPv4</th><th>IPv6</th></tr>
            <tr><td>주소 길이</td><td>32비트</td><td><strong>128비트</strong></td></tr>
            <tr><td>표기법</td><td>10진수, 점(.)으로 4부분 구분</td><td><strong>16진수, 콜론(:)으로 8부분 구분</strong> (예: 2001:0DB8:0000:0000:0000:0000:0000:0001)</td></tr>
            <tr><td>주소 개수</td><td>약 43억 개 (고갈)</td><td>사실상 무한 (2¹²⁸)</td></tr>
            <tr><td>보안</td><td>IPSec 별도 설치</td><td><strong>IPSec 기본 내장</strong></td></tr>
            <tr><td>헤더</td><td>복잡 (가변)</td><td><strong>단순화 · 고정 길이</strong> (처리 효율 향상)</td></tr>
            <tr><td>주소 유형</td><td>유니캐스트 · 멀티캐스트 · <strong>브로드캐스트</strong></td><td>유니캐스트 · 멀티캐스트 · <strong>애니캐스트</strong></td></tr>
          </table>

          <h3>5-2. IPv6 주소 유형 3가지 (최단골)</h3>
          <table>
            <tr><th>유형</th><th>의미</th></tr>
            <tr><td><strong>유니캐스트</strong></td><td><strong>1 : 1</strong> 통신 — 특정 인터페이스 하나에 전달</td></tr>
            <tr><td><strong>멀티캐스트</strong></td><td><strong>1 : N(그룹)</strong> 통신 — 그룹에 속한 모든 인터페이스에 전달</td></tr>
            <tr><td><strong>애니캐스트</strong></td><td>그룹 중 <strong>가장 가까운 인터페이스 하나</strong>에만 전달 (IPv6에서 새로 도입)</td></tr>
          </table>
          <div class="box deny">
            <span class="tag-line">함정 주의</span><br/>
            IPv6에는 <strong>브로드캐스트가 없다.</strong> 브로드캐스트 대신 멀티캐스트로 대체되었고,
            새로 생긴 유형이 <strong>애니캐스트</strong>다. "IPv6의 주소 유형 3가지"의 답은
            유니캐스트 · 멀티캐스트 · 애니캐스트.
          </div>

          <h3>5-3. IPv4 → IPv6 전환 기술 3가지 (단골)</h3>
          <table>
            <tr><th>기술</th><th>방식</th></tr>
            <tr><td><strong>듀얼 스택 (Dual Stack)</strong></td><td>한 장비가 <strong>IPv4와 IPv6를 동시에</strong> 처리</td></tr>
            <tr><td><strong>터널링 (Tunneling)</strong></td><td>IPv6 패킷을 <strong>IPv4 패킷 속에 캡슐화</strong>하여 IPv4 망을 통과</td></tr>
            <tr><td><strong>주소 변환 (NAT-PT)</strong></td><td>중간 변환기가 <strong>IPv4 ↔ IPv6 주소를 상호 변환</strong></td></tr>
          </table>
        </section>

        {/* ===================== 6. 라우팅 ===================== */}
        <section id="routing">
          <h2>6. 라우팅 — RIP · OSPF · BGP</h2>
          <p class="sub">최적 경로를 결정하는 방법. "홉 수 최대 15 → RIP", "링크 상태 · 대규모 → OSPF", "AS 간 → BGP"의 짝을 정확히 외운다.</p>

          <h3>6-1. 정적 라우팅 vs 동적 라우팅</h3>
          <table>
            <tr><th>구분</th><th>정적 라우팅</th><th>동적 라우팅</th></tr>
            <tr><td>경로 설정</td><td>관리자가 <strong>수동으로 직접</strong> 등록</td><td>라우팅 프로토콜이 <strong>자동으로</strong> 계산 · 갱신</td></tr>
            <tr><td>장점</td><td>단순, 라우터 부하 없음, 보안에 유리</td><td>망 변화(장애)에 <strong>자동 대응</strong></td></tr>
            <tr><td>단점</td><td>망 변화 시 수동 수정 필요</td><td>라우터 부하 · 대역폭 소모</td></tr>
          </table>

          <h3>6-2. 라우팅 프로토콜 비교 표 (단골)</h3>
          <table>
            <tr><th>구분</th><th>프로토콜</th><th>알고리즘</th><th>특징</th></tr>
            <tr>
              <td rowspan={2}><strong>IGP</strong><br/>(AS 내부)</td>
              <td><strong>RIP</strong></td>
              <td><strong>거리 벡터</strong> (Distance Vector, 벨만-포드)</td>
              <td><strong>홉(Hop) 수를 메트릭</strong>으로 사용, <strong>최대 15홉</strong>(16 = 도달 불가), 30초마다 갱신 — 소규모 망 (최단골)</td>
            </tr>
            <tr>
              <td><strong>OSPF</strong></td>
              <td><strong>링크 상태</strong> (Link State, 다익스트라)</td>
              <td>망 전체 상태로 최단 경로 계산, 변화 발생 시에만 갱신 — <strong>대규모 망</strong>에 적합 (최단골)</td>
            </tr>
            <tr>
              <td><strong>EGP</strong><br/>(AS 외부)</td>
              <td><strong>BGP</strong></td>
              <td>경로 벡터 (Path Vector)</td>
              <td><strong>AS(자율 시스템) 간</strong> 라우팅 — 인터넷 백본에서 사용 (단골)</td>
            </tr>
          </table>

          <h3>6-3. 라우팅 알고리즘 2가지 (단골)</h3>
          <table>
            <tr><th>알고리즘</th><th>동작</th><th>사용 프로토콜</th></tr>
            <tr>
              <td><strong>거리 벡터 (Distance Vector)</strong></td>
              <td><strong>인접 라우터와</strong> 거리(홉 수) 정보를 주기적으로 교환</td>
              <td>RIP</td>
            </tr>
            <tr>
              <td><strong>링크 상태 (Link State)</strong></td>
              <td><strong>망 전체의 링크 상태</strong>를 수집하여 각자 최단 경로 트리 계산(다익스트라)</td>
              <td>OSPF</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            숫자 암기: <strong>RIP 최대 홉 수 = 15</strong> (16이면 도달 불가로 간주).
            "홉 수 제한 때문에 대규모 망에 부적합"이라는 설명이 붙으면 답은 RIP이다.
          </div>
        </section>

        {/* ===================== 7. 데이터 전달 방식과 네트워크 구조 ===================== */}
        <section id="transfer">
          <h2>7. 데이터 전달 방식과 네트워크 구조</h2>
          <p class="sub">교환 방식(회선/패킷)과 토폴로지(성형·버스형·링형·망형·트리형)는 특징을 보고 이름을 쓰는 문제로 출제된다. 망형 회선 수 공식은 계산 단골.</p>

          <h3>7-1. 회선 교환 vs 패킷 교환 (단골)</h3>
          <table>
            <tr><th>구분</th><th>회선 교환 (Circuit Switching)</th><th>패킷 교환 (Packet Switching)</th></tr>
            <tr><td>방식</td><td>통신 전에 <strong>전용 경로(회선)를 설정</strong>하고 독점 사용</td><td>데이터를 <strong>패킷 단위로 분할</strong>하여 전송</td></tr>
            <tr><td>장점</td><td>고정 대역폭, 전송 지연 일정 (음성 전화)</td><td>회선 <strong>공유로 효율적</strong>, 장애 우회 가능</td></tr>
            <tr><td>단점</td><td>회선 낭비 (미사용 시에도 점유)</td><td>지연 가변, 패킷별 오버헤드</td></tr>
          </table>

          <h3>7-2. 패킷 교환의 두 방식 — 데이터그램 vs 가상 회선 (구분 최단골)</h3>
          <table>
            <tr><th>구분</th><th>데이터그램 (Datagram)</th><th>가상 회선 (Virtual Circuit)</th></tr>
            <tr><td>경로</td><td>패킷마다 <strong>독립적인 경로</strong>로 전송</td><td>전송 전에 <strong>논리적 경로를 미리 설정</strong>한 후 같은 경로로 전송</td></tr>
            <tr><td>순서</td><td><strong>도착 순서 보장 안 됨</strong> (재조립 필요)</td><td><strong>순서 보장</strong></td></tr>
            <tr><td>연결</td><td>비연결형</td><td>연결형</td></tr>
            <tr><td>적합</td><td>짧은 데이터, 융통성 필요</td><td>긴 연속 데이터</td></tr>
          </table>

          <h3>7-3. 네트워크 토폴로지 (특징 표)</h3>
          <table>
            <tr><th>형태</th><th>구조</th><th>장점</th><th>단점</th></tr>
            <tr>
              <td><strong>성형 (Star)</strong></td><td>중앙 장치에 모든 노드 연결</td>
              <td>관리 쉬움, 한 노드 고장이 전체에 영향 없음</td><td><strong>중앙 장치 고장 시 전체 마비</strong></td>
            </tr>
            <tr>
              <td><strong>버스형 (Bus)</strong></td><td>하나의 공용 회선에 모든 노드 연결</td>
              <td>설치 비용 저렴, 확장 쉬움</td><td>공용 회선 고장 시 전체 마비, 충돌 발생</td>
            </tr>
            <tr>
              <td><strong>링형 (Ring)</strong></td><td>노드를 원형으로 연결, 한 방향 전달(토큰)</td>
              <td>충돌 없음, 균등한 기회</td><td>한 노드 고장이 <strong>전체에 파급</strong>, 노드 추가 어려움</td>
            </tr>
            <tr>
              <td><strong>망형 (Mesh)</strong></td><td><strong>모든 노드를 서로 직접 연결</strong></td>
              <td><strong>신뢰성 최고</strong> (장애 우회 경로 풍부)</td><td>회선 수가 많아 <strong>비용 최대</strong></td>
            </tr>
            <tr>
              <td><strong>트리형 (Tree)</strong></td><td>성형을 계층적으로 확장</td>
              <td>확장 · 관리 용이</td><td>상위 노드 장애가 하위 전체에 파급</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250" role="img" aria-label="네트워크 토폴로지 4종">
              {/* 성형 */}
              <circle class="boxdark" cx="115" cy="105" r="16" />
              <circle class="box" cx="115" cy="45" r="12" />
              <circle class="box" cx="55" cy="105" r="12" />
              <circle class="box" cx="175" cy="105" r="12" />
              <circle class="box" cx="115" cy="165" r="12" />
              <line class="life" x1="115" y1="89" x2="115" y2="57" />
              <line class="life" x1="99" y1="105" x2="67" y2="105" />
              <line class="life" x1="131" y1="105" x2="163" y2="105" />
              <line class="life" x1="115" y1="121" x2="115" y2="153" />
              <text x="115" y="205" text-anchor="middle">성형 (Star)</text>

              {/* 버스형 */}
              <line class="arrow" x1="270" y1="140" x2="410" y2="140" />
              <circle class="box" cx="295" cy="95" r="12" />
              <circle class="box" cx="340" cy="95" r="12" />
              <circle class="box" cx="385" cy="95" r="12" />
              <line class="life" x1="295" y1="107" x2="295" y2="140" />
              <line class="life" x1="340" y1="107" x2="340" y2="140" />
              <line class="life" x1="385" y1="107" x2="385" y2="140" />
              <text x="340" y="205" text-anchor="middle">버스형 (Bus)</text>

              {/* 링형 */}
              <circle class="box" cx="565" cy="50" r="12" />
              <circle class="box" cx="513" cy="88" r="12" />
              <circle class="box" cx="617" cy="88" r="12" />
              <circle class="box" cx="533" cy="150" r="12" />
              <circle class="box" cx="597" cy="150" r="12" />
              <line class="life" x1="555" y1="57" x2="523" y2="81" />
              <line class="life" x1="575" y1="57" x2="607" y2="81" />
              <line class="life" x1="516" y1="100" x2="530" y2="138" />
              <line class="life" x1="614" y1="100" x2="600" y2="138" />
              <line class="life" x1="545" y1="150" x2="585" y2="150" />
              <text x="565" y="205" text-anchor="middle">링형 (Ring)</text>

              {/* 망형 */}
              <circle class="box" cx="740" cy="60" r="12" />
              <circle class="box" cx="840" cy="60" r="12" />
              <circle class="box" cx="740" cy="160" r="12" />
              <circle class="box" cx="840" cy="160" r="12" />
              <line class="life" x1="752" y1="60" x2="828" y2="60" />
              <line class="life" x1="752" y1="160" x2="828" y2="160" />
              <line class="life" x1="740" y1="72" x2="740" y2="148" />
              <line class="life" x1="840" y1="72" x2="840" y2="148" />
              <line class="life" x1="750" y1="70" x2="830" y2="150" />
              <line class="life" x1="830" y1="70" x2="750" y2="150" />
              <text x="790" y="205" text-anchor="middle">망형 (Mesh)</text>
              <text x="790" y="228" text-anchor="middle" class="small">노드 4개 → 4×3/2 = 6회선</text>
            </svg>
            <figcaption>도면 4. 네트워크 토폴로지 — 성형 · 버스형 · 링형 · 망형 (트리형은 성형의 계층 확장)</figcaption>
          </figure>

          <h3>7-4. 망형 회선 수 공식 (계산 단골)</h3>
          <pre>{`망형에서 노드 n개를 모두 직접 연결할 때 필요한 회선 수 = n(n-1)/2

예) n = 10 → 10 × 9 / 2 = 90 / 2 = 45회선
검산: 노드 10개가 각각 9개와 연결(10×9=90), 회선 하나를 양쪽에서
      한 번씩 센 것이므로 2로 나눔 → 45 ✓
참고) 각 노드에 필요한 포트 수 = n - 1 (n=10이면 9개)`}</pre>

          <h3>7-5. LAN/WAN과 매체 접근 제어</h3>
          <table>
            <tr><th>구분</th><th>설명</th></tr>
            <tr><td><strong>LAN</strong></td><td>건물 · 캠퍼스 등 <strong>좁은 지역</strong> 네트워크. 이더넷이 대표</td></tr>
            <tr><td><strong>WAN</strong></td><td>도시 · 국가 등 <strong>넓은 지역</strong>을 연결하는 네트워크 (통신 사업자 회선)</td></tr>
            <tr>
              <td><strong>CSMA/CD</strong></td>
              <td><strong>유선 이더넷</strong>의 매체 접근 제어 — 회선을 감시하다가 전송하고, <strong>충돌을 감지(Detection)하면</strong> 중단 후 임의 시간 뒤 재전송 (단골)</td>
            </tr>
            <tr>
              <td><strong>CSMA/CA</strong></td>
              <td><strong>무선 LAN(Wi-Fi)</strong>의 매체 접근 제어 — 충돌 감지가 어려워 전송 전에 <strong>충돌을 회피(Avoidance)</strong>한다</td>
            </tr>
          </table>
        </section>

        {/* ===================== 8. 네트워크 장비와 용어 ===================== */}
        <section id="device">
          <h2>8. 네트워크 장비와 용어</h2>
          <p class="sub">장비는 동작 계층과 짝지어, 용어는 "설명 → 이름 쓰기" 형태로 출제된다.</p>

          <h3>8-1. 네트워크 장비 (계층별 표)</h3>
          <table>
            <tr><th>장비</th><th>동작 계층</th><th>역할</th></tr>
            <tr><td><strong>리피터</strong></td><td>물리(1)</td><td>감쇠된 <strong>신호를 증폭 · 재생</strong>하여 전송 거리 연장</td></tr>
            <tr><td><strong>허브</strong></td><td>물리(1)</td><td>여러 장치 연결, 수신 신호를 <strong>모든 포트로 전달</strong> (더미 허브)</td></tr>
            <tr><td><strong>브리지</strong></td><td>데이터링크(2)</td><td>두 LAN 세그먼트 연결, MAC 주소로 <strong>프레임 필터링</strong></td></tr>
            <tr><td><strong>스위치</strong></td><td>데이터링크(2) 기본</td><td>MAC 주소 테이블로 <strong>목적지 포트에만 프레임 전달</strong></td></tr>
            <tr><td><strong>라우터</strong></td><td>네트워크(3)</td><td>IP 주소 기반 <strong>경로 설정</strong>, 서로 다른 네트워크 연결</td></tr>
            <tr><td><strong>게이트웨이</strong></td><td>전 계층</td><td><strong>서로 다른 프로토콜의 네트워크</strong>를 변환 · 연결하는 출입구</td></tr>
          </table>

          <h3>8-2. 스위치의 계층별 구분 (단골)</h3>
          <table>
            <tr><th>구분</th><th>동작 기준</th><th>용도</th></tr>
            <tr><td><strong>L2 스위치</strong></td><td><strong>MAC 주소</strong></td><td>일반적인 스위치 (프레임 전달)</td></tr>
            <tr><td><strong>L3 스위치</strong></td><td><strong>IP 주소</strong></td><td>라우팅 기능 포함 (VLAN 간 통신)</td></tr>
            <tr><td><strong>L4 스위치</strong></td><td><strong>포트 번호</strong> (TCP/UDP)</td><td>서버 <strong>부하 분산</strong>(로드 밸런싱)</td></tr>
            <tr><td><strong>L7 스위치</strong></td><td><strong>응용 데이터 내용</strong> (URL, 쿠키 등)</td><td>콘텐츠 기반 분산 · 보안 필터링</td></tr>
          </table>

          <h3>8-3. 주요 용어 — 설명을 보고 이름 쓰기</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td><strong>사설 IP 주소를 공인 IP 주소로 변환</strong>하여 외부와 통신하게 하는 기술 (단골)</td>
              <td><strong>NAT</strong></td>
            </tr>
            <tr>
              <td>물리적 배치와 무관하게 스위치에서 <strong>논리적으로 LAN을 분할</strong>하는 기술</td>
              <td><strong>VLAN</strong></td>
            </tr>
            <tr>
              <td>공중망(인터넷)을 마치 <strong>전용선처럼 암호화 터널</strong>로 사용하는 가상 사설망</td>
              <td><strong>VPN</strong></td>
            </tr>
            <tr>
              <td>클라이언트를 대신해 서버에 접속하는 <strong>대리 서버</strong> — 캐싱 · 접근 통제</td>
              <td><strong>프록시 (Proxy)</strong></td>
            </tr>
            <tr>
              <td>대역폭 · 지연 · 손실률 등 <strong>서비스 품질을 보장</strong>하는 기술</td>
              <td><strong>QoS</strong></td>
            </tr>
            <tr>
              <td>1:1 / 특정 그룹 / 같은 네트워크의 <strong>전체 호스트</strong>에게 전송하는 방식</td>
              <td><strong>유니캐스트 / 멀티캐스트 / 브로드캐스트</strong></td>
            </tr>
            <tr>
              <td>한 번에 전송할 수 있는 <strong>최대 전송 단위</strong> (이더넷 기본 1500바이트)</td>
              <td><strong>MTU</strong></td>
            </tr>
            <tr>
              <td>내부 호스트가 <strong>외부 네트워크로 나갈 때 거치는 기본 출구</strong> 주소</td>
              <td><strong>기본 게이트웨이</strong></td>
            </tr>
          </table>
        </section>

        {/* ===================== 9. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>9. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 형식(단답 · 괄호 채우기 · 계산)으로 구성했다. 먼저 직접 풀고 "정답 보기"로 확인할 것.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">네트워크 192.168.30.0/28에서 실제로 호스트에 할당할 수 있는 IP 주소의 개수를 구하시오. (계산 과정 포함)</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>14개<br/>
                <span class="label">해설: </span>호스트 비트 = 32 − 28 = 4비트. 2⁴ − 2 = 16 − 2 = 14개.
                (네트워크 주소 192.168.30.0과 브로드캐스트 주소 192.168.30.15를 제외)
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">IP 주소 210.100.10.90/26이 속한 네트워크의 ① 네트워크 주소와 ② 브로드캐스트 주소를 각각 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 210.100.10.64 ② 210.100.10.127<br/>
                <span class="label">해설: </span>/26의 블록 크기는 2⁶ = 64이므로 서브넷은 0, 64, 128, 192에서 시작한다.
                90은 64 ~ 127 범위에 속하므로 네트워크 주소는 .64, 브로드캐스트 주소는 다음 서브넷(128) − 1 = .127이다.
                (사용 가능 호스트는 .65 ~ .126의 62개)
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 괄호에 들어갈 프로토콜 이름을 각각 쓰시오.</p>
            <pre>{`· ( ① ) : IP 주소를 이용하여 상대방의 MAC 주소를 알아내는 프로토콜
· ( ② ) : MAC 주소를 이용하여 자신의 IP 주소를 알아내는 프로토콜`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① ARP ② RARP<br/>
                <span class="label">해설: </span>ARP는 IP → MAC 변환, RARP(Reverse ARP)는 MAC → IP 변환.
                방향을 바꿔 쓰지 않도록 주의한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 전송 계층 프로토콜을 각각 쓰시오.</p>
            <pre>{`· ( ① ) : 비연결형으로 헤더가 단순하여 빠르지만 신뢰성을 보장하지
           않는다. 실시간 스트리밍, VoIP에 적합하다.
· ( ② ) : 연결형으로 3-way 핸드셰이크 후 통신하며, 흐름 제어와
           혼잡 제어로 신뢰성 있는 전송을 보장한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① UDP ② TCP<br/>
                <span class="label">해설: </span>"비연결형 · 빠름 · 실시간"이면 UDP,
                "연결형 · 신뢰성 · 흐름/혼잡 제어"면 TCP다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 OSI 7계층의 계층 이름을 쓰시오.<br/>
            "종단 간(End-to-End)에 신뢰성 있는 데이터 전송을 담당하며, 흐름 제어와 오류 제어를 수행한다.
            전송 단위는 세그먼트이고 대표 프로토콜로 TCP, UDP가 있다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>전송 계층 (Transport Layer, 4계층)<br/>
                <span class="label">해설: </span>"종단 간 + 세그먼트 + TCP/UDP" 세 키워드가 모두 전송 계층을 가리킨다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 설명에 해당하는 OSI 7계층의 계층 이름을 쓰시오.<br/>
            "인접한 노드 간의 신뢰성 있는 프레임 전송을 담당하며, 물리 주소(MAC)를 사용한다.
            대표 장비로 브리지와 스위치가 있다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>데이터링크 계층 (Data Link Layer, 2계층)<br/>
                <span class="label">해설: </span>"인접 노드 + 프레임 + MAC + 브리지/스위치"는 데이터링크 계층.
                "종단 간"이면 전송 계층이므로 구분할 것.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 괄호에 들어갈 내용을 쓰시오.</p>
            <pre>{`· RIP는 거리 벡터 알고리즘을 사용하며 최대 홉 수는 ( ① )이다.
· ( ② )는 링크 상태 알고리즘(다익스트라)을 사용하여 대규모
  네트워크에 적합한 IGP 라우팅 프로토콜이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 15 ② OSPF<br/>
                <span class="label">해설: </span>RIP는 홉 수 최대 15(16은 도달 불가)라서 소규모 망용이고,
                OSPF는 링크 상태 기반으로 대규모 망에 적합하다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">12개의 노드를 망형(Mesh)으로 모두 직접 연결하려고 할 때 필요한 회선의 수를 구하시오. (계산 과정 포함)</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>66회선<br/>
                <span class="label">해설: </span>망형 회선 수 = n(n−1)/2 = 12 × 11 / 2 = 132 / 2 = 66.
                (참고: 각 노드에 필요한 포트 수는 n−1 = 11개)
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">TCP 연결 설정 과정인 3-way 핸드셰이크의 괄호에 들어갈 메시지를 순서대로 쓰시오.</p>
            <pre>{`클라이언트 → 서버 : ( ① )        연결 요청
서버 → 클라이언트 : ( ② )        요청 수락 + 확인 응답
클라이언트 → 서버 : ( ③ )        확인 응답 → 연결 성립`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① SYN ② SYN + ACK ③ ACK<br/>
                <span class="label">해설: </span>SYN(동기화 요청) → SYN+ACK(수락과 응답을 함께) → ACK(최종 확인)의
                3단계가 끝나면 ESTABLISHED 상태가 되어 데이터 전송이 시작된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 설명에 해당하는 용어를 각각 쓰시오.</p>
            <pre>{`· ( ① ) : 네트워크에 접속한 호스트에게 IP 주소를 자동으로
           할당해 주는 프로토콜
· ( ② ) : IPv6의 주소 유형 중 그룹에 속한 인터페이스 가운데
           가장 가까운 하나에게만 전달하는 방식`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① DHCP ② 애니캐스트 (Anycast)<br/>
                <span class="label">해설: </span>DHCP는 IP 자동 할당 프로토콜(포트 67/68).
                IPv6의 주소 유형 3가지는 유니캐스트 · 멀티캐스트 · 애니캐스트이며 브로드캐스트는 없다.
                (참고: 오류 보고 · ping에 쓰이는 프로토콜은 ICMP)
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">TCP 4-way 핸드셰이크(연결 종료)</span>
            <span class="kw">슬라이딩 윈도우</span>
            <span class="kw">혼잡 제어(슬로 스타트)</span>
            <span class="kw">VLSM</span>
            <span class="kw">슈퍼네팅</span>
            <span class="kw">NAT/PAT</span>
            <span class="kw">IPv6 링크 로컬 주소</span>
            <span class="kw">EIGRP</span>
            <span class="kw">MPLS</span>
            <span class="kw">SDN</span>
          </p>
        </section>

        <footer>네트워크 기초 활용 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
