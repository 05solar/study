import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './dev-infra.css'

export default defineComponent({
  name: 'DevInfraPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>개발 인프라 구축 · 신기술 용어</h1>
          <p>정보처리기사 실기 대비 학습 문서. IT 인프라 개요 → 클라우드 컴퓨팅(IaaS·PaaS·SaaS) →
          가상화(하이퍼바이저·VM vs 컨테이너) → 스토리지(DAS·NAS·SAN, RAID) → 네트워크 신기술(SDN 등) →
          SW·컴퓨팅 신기술 → 하드웨어 신기술 순서로 정리한다.
          이 파트는 <strong>"다음 설명에 해당하는 용어를 쓰시오"</strong> 형태의 용어 문제가 핵심이므로,
          설명을 먼저 읽고 용어를 떠올리는 방식(설명→용어 표)으로 학습한다.<br/>
          <span>각 도면의 파란 점은 데이터·요청의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>IT 인프라 개요 — 온프레미스 vs 클라우드</a></li>
            <li><a href="#cloud" onClick={(e) => scrollToId(e, 'cloud')}>클라우드 컴퓨팅 — IaaS · PaaS · SaaS</a></li>
            <li><a href="#virtualization" onClick={(e) => scrollToId(e, 'virtualization')}>가상화 — 하이퍼바이저 · VM vs 컨테이너</a></li>
            <li><a href="#storage" onClick={(e) => scrollToId(e, 'storage')}>스토리지 — DAS · NAS · SAN · RAID</a></li>
            <li><a href="#network" onClick={(e) => scrollToId(e, 'network')}>네트워크 신기술 — SDN · NFV · IoT 무선</a></li>
            <li><a href="#software" onClick={(e) => scrollToId(e, 'software')}>SW · 컴퓨팅 신기술 용어 (최다 빈출)</a></li>
            <li><a href="#hardware" onClick={(e) => scrollToId(e, 'hardware')}>하드웨어 · 기타 신기술</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. IT 인프라 개요 ===================== */}
        <section id="overview">
          <h2>1. IT 인프라 개요 — 온프레미스 vs 클라우드</h2>
          <p class="sub">IT 인프라는 정보 시스템을 운영하기 위한 하드웨어·소프트웨어·네트워크의 기반 환경이다. 어디에 구축하느냐에 따라 온프레미스와 클라우드로 나뉜다.</p>

          <h3>1-1. 인프라 구성 요소</h3>
          <table>
            <tr><th>구성 요소</th><th>설명</th><th>예</th></tr>
            <tr>
              <td><strong>서버(컴퓨팅)</strong></td>
              <td>응용 프로그램을 실행하고 연산을 처리하는 물리·가상 컴퓨터 자원</td>
              <td>웹 서버, WAS, DB 서버</td>
            </tr>
            <tr>
              <td><strong>스토리지</strong></td>
              <td>데이터를 저장·보관하는 장치와 그 연결 구조</td>
              <td>DAS, NAS, SAN</td>
            </tr>
            <tr>
              <td><strong>네트워크</strong></td>
              <td>서버·스토리지·사용자를 연결하는 통신 기반</td>
              <td>라우터, 스위치, 방화벽, 회선</td>
            </tr>
            <tr>
              <td><strong>소프트웨어</strong></td>
              <td>인프라를 운영·관리하는 기반 소프트웨어</td>
              <td>운영체제(OS), 미들웨어, DBMS, 가상화·관리 도구</td>
            </tr>
          </table>

          <h3>1-2. 온프레미스 vs 클라우드 (비교 단골)</h3>
          <table>
            <tr><th>구분</th><th>온프레미스(On-Premise)</th><th>클라우드(Cloud)</th></tr>
            <tr>
              <td><strong>구축 위치</strong></td>
              <td>자사 전산실·데이터센터에 <strong>직접 구축</strong></td>
              <td>외부 사업자의 데이터센터 자원을 <strong>네트워크로 빌려 사용</strong></td>
            </tr>
            <tr>
              <td><strong>초기 비용</strong></td>
              <td>서버·라이선스 구매로 초기 투자 비용이 크다</td>
              <td>초기 투자 없이 <strong>사용한 만큼 과금</strong>(종량제)</td>
            </tr>
            <tr>
              <td><strong>확장성</strong></td>
              <td>장비 증설에 시간·비용이 든다(확장 느림)</td>
              <td>필요할 때 즉시 자원 확장·축소 가능(<strong>탄력성</strong>)</td>
            </tr>
            <tr>
              <td><strong>유지보수</strong></td>
              <td>자체 인력이 직접 관리(통제권 높음)</td>
              <td>사업자가 하드웨어를 관리(운영 부담 낮음)</td>
            </tr>
            <tr>
              <td><strong>보안·통제</strong></td>
              <td>데이터를 내부에 두어 통제·규제 대응에 유리</td>
              <td>사업자 의존, 데이터 위치·규제 검토 필요</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            온프레미스는 <strong>직접 소유·직접 관리</strong>, 클라우드는 <strong>빌려 쓰고 쓴 만큼 지불</strong>.
            두 방식을 함께 쓰는 것이 뒤에 나오는 <strong>하이브리드 클라우드</strong>다.
          </div>
        </section>

        {/* ===================== 2. 클라우드 컴퓨팅 ===================== */}
        <section id="cloud">
          <h2>2. 클라우드 컴퓨팅 — IaaS · PaaS · SaaS</h2>
          <p class="sub">클라우드 컴퓨팅은 인터넷을 통해 컴퓨팅 자원(서버·스토리지·SW)을 필요한 만큼 빌려 쓰는 방식이다. 서비스 유형 3가지 구분은 실기 최최단골이다.</p>

          <h3>2-1. 서비스 유형 3가지 (최최단골)</h3>
          <table>
            <tr><th>유형</th><th>정의</th><th>제공 범위</th><th>대표 예시</th></tr>
            <tr>
              <td><strong>IaaS<br/>(Infrastructure as a Service)</strong></td>
              <td>서버·스토리지·네트워크 등 <strong>인프라(가상 하드웨어)</strong>를 서비스로 제공</td>
              <td>가상 서버, 가상 스토리지, 네트워크</td>
              <td>AWS EC2, 가상 서버 호스팅</td>
            </tr>
            <tr>
              <td><strong>PaaS<br/>(Platform as a Service)</strong></td>
              <td>애플리케이션 <strong>개발·실행 플랫폼</strong>(OS·런타임·미들웨어 포함)을 서비스로 제공</td>
              <td>인프라 + OS + 런타임·개발 환경</td>
              <td>Google App Engine, Heroku</td>
            </tr>
            <tr>
              <td><strong>SaaS<br/>(Software as a Service)</strong></td>
              <td>완성된 <strong>응용 소프트웨어</strong>를 인터넷으로 바로 사용하도록 제공</td>
              <td>인프라 + 플랫폼 + 애플리케이션 전부</td>
              <td>Gmail, Office 365, 웹 그룹웨어</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 360" role="img" aria-label="IaaS PaaS SaaS 관리 책임 범위">
              <text class="strong" x="125" y="38" text-anchor="middle">온프레미스</text>
              <text class="strong" x="345" y="38" text-anchor="middle">IaaS</text>
              <text class="strong" x="565" y="38" text-anchor="middle">PaaS</text>
              <text class="strong" x="785" y="38" text-anchor="middle">SaaS</text>

              {/* 온프레미스: 전부 사용자 관리 */}
              <rect class="boxsoft" x="30" y="52" width="190" height="36" /><text x="125" y="76" text-anchor="middle">애플리케이션</text>
              <rect class="boxsoft" x="30" y="94" width="190" height="36" /><text x="125" y="118" text-anchor="middle">데이터</text>
              <rect class="boxsoft" x="30" y="136" width="190" height="36" /><text x="125" y="160" text-anchor="middle">런타임·미들웨어</text>
              <rect class="boxsoft" x="30" y="178" width="190" height="36" /><text x="125" y="202" text-anchor="middle">운영체제(OS)</text>
              <rect class="boxsoft" x="30" y="220" width="190" height="36" /><text x="125" y="244" text-anchor="middle">가상화</text>
              <rect class="boxsoft" x="30" y="262" width="190" height="36" /><text x="125" y="286" text-anchor="middle">서버·스토리지·네트워크</text>

              {/* IaaS: 가상화 + 하드웨어만 제공자 관리 */}
              <rect class="boxsoft" x="250" y="52" width="190" height="36" /><text x="345" y="76" text-anchor="middle">애플리케이션</text>
              <rect class="boxsoft" x="250" y="94" width="190" height="36" /><text x="345" y="118" text-anchor="middle">데이터</text>
              <rect class="boxsoft" x="250" y="136" width="190" height="36" /><text x="345" y="160" text-anchor="middle">런타임·미들웨어</text>
              <rect class="boxsoft" x="250" y="178" width="190" height="36" /><text x="345" y="202" text-anchor="middle">운영체제(OS)</text>
              <rect class="boxdark" x="250" y="220" width="190" height="36" /><text x="345" y="244" text-anchor="middle">가상화</text>
              <rect class="boxdark" x="250" y="262" width="190" height="36" /><text x="345" y="286" text-anchor="middle">서버·스토리지·네트워크</text>

              {/* PaaS: OS·런타임까지 제공자 관리 */}
              <rect class="boxsoft" x="470" y="52" width="190" height="36" /><text x="565" y="76" text-anchor="middle">애플리케이션</text>
              <rect class="boxsoft" x="470" y="94" width="190" height="36" /><text x="565" y="118" text-anchor="middle">데이터</text>
              <rect class="boxdark" x="470" y="136" width="190" height="36" /><text x="565" y="160" text-anchor="middle">런타임·미들웨어</text>
              <rect class="boxdark" x="470" y="178" width="190" height="36" /><text x="565" y="202" text-anchor="middle">운영체제(OS)</text>
              <rect class="boxdark" x="470" y="220" width="190" height="36" /><text x="565" y="244" text-anchor="middle">가상화</text>
              <rect class="boxdark" x="470" y="262" width="190" height="36" /><text x="565" y="286" text-anchor="middle">서버·스토리지·네트워크</text>

              {/* SaaS: 전부 제공자 관리 */}
              <rect class="boxdark" x="690" y="52" width="190" height="36" /><text x="785" y="76" text-anchor="middle">애플리케이션</text>
              <rect class="boxdark" x="690" y="94" width="190" height="36" /><text x="785" y="118" text-anchor="middle">데이터</text>
              <rect class="boxdark" x="690" y="136" width="190" height="36" /><text x="785" y="160" text-anchor="middle">런타임·미들웨어</text>
              <rect class="boxdark" x="690" y="178" width="190" height="36" /><text x="785" y="202" text-anchor="middle">운영체제(OS)</text>
              <rect class="boxdark" x="690" y="220" width="190" height="36" /><text x="785" y="244" text-anchor="middle">가상화</text>
              <rect class="boxdark" x="690" y="262" width="190" height="36" /><text x="785" y="286" text-anchor="middle">서버·스토리지·네트워크</text>

              {/* 범례 */}
              <rect class="boxsoft" x="240" y="320" width="26" height="18" /><text x="276" y="335">사용자 관리</text>
              <rect class="boxdark" x="480" y="320" width="26" height="18" /><text x="516" y="335">클라우드 제공자 관리</text>
            </svg>
            <figcaption>도면 1. IaaS · PaaS · SaaS 서비스 유형별 관리 책임 범위 — 오른쪽(SaaS)으로 갈수록 클라우드 제공자가 관리하는 범위(파란 영역)가 넓어진다.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">암기</span><br/>
            <strong>IaaS = 인프라만</strong>(하드웨어까지) · <strong>PaaS = 개발 플랫폼까지</strong>(OS·런타임 포함) ·
            <strong>SaaS = 완성된 소프트웨어까지 전부</strong>.
            "OS 위에 원하는 SW를 직접 설치해 쓴다" → IaaS, "코드만 올리면 실행된다" → PaaS, "설치 없이 웹으로 바로 쓴다" → SaaS.
          </div>

          <h3>2-2. 배포 모델 (단골)</h3>
          <table>
            <tr><th>설명</th><th>배포 모델</th></tr>
            <tr>
              <td>클라우드 사업자가 <strong>불특정 다수</strong>에게 인터넷으로 자원을 제공하는 공개형 모델</td>
              <td><strong>퍼블릭 클라우드</strong> (Public Cloud)</td>
            </tr>
            <tr>
              <td><strong>특정 조직 전용</strong>으로 구축·운영하여 보안·통제에 유리한 폐쇄형 모델</td>
              <td><strong>프라이빗 클라우드</strong> (Private Cloud)</td>
            </tr>
            <tr>
              <td>퍼블릭과 프라이빗을 <strong>결합</strong>하여 중요 데이터는 내부에, 나머지는 외부에 두는 모델</td>
              <td><strong>하이브리드 클라우드</strong> (Hybrid Cloud)</td>
            </tr>
          </table>

          <h3>2-3. 클라우드 관련 용어 (설명→용어)</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td><strong>여러 클라우드 사업자</strong>(AWS + Azure 등)의 서비스를 함께 사용하여 종속(락인)을 피하는 전략</td>
              <td><strong>멀티 클라우드</strong> (Multi Cloud)</td>
            </tr>
            <tr>
              <td>처음부터 클라우드 환경에 최적화되도록 설계·개발하는 방식. 마이크로서비스, 컨테이너, DevOps, CI/CD가 핵심 요소</td>
              <td><strong>클라우드 네이티브</strong> (Cloud Native)</td>
            </tr>
            <tr>
              <td>개발자가 <strong>서버를 직접 관리하지 않고</strong> 함수 단위 코드만 배포하면, 이벤트 발생 시 실행되고 실행된 만큼만 과금되는 방식 (예: AWS Lambda, FaaS)</td>
              <td><strong>서버리스</strong> (Serverless) — 단골</td>
            </tr>
            <tr>
              <td>인증·데이터베이스·푸시 알림 등 모바일 앱의 <strong>백엔드 기능</strong>을 API 형태 서비스로 제공</td>
              <td><strong>BaaS</strong> (Backend as a Service)</td>
            </tr>
          </table>
        </section>

        {/* ===================== 3. 가상화 ===================== */}
        <section id="virtualization">
          <h2>3. 가상화 — 하이퍼바이저 · VM vs 컨테이너</h2>
          <p class="sub">가상화(Virtualization)는 물리 자원(서버·스토리지·네트워크)을 논리적으로 나누거나 합쳐 여러 개의 가상 자원처럼 쓰는 기술이다. 클라우드의 기반 기술이다.</p>

          <h3>3-1. 하이퍼바이저 Type 1 vs Type 2 (구분 단골)</h3>
          <p>하이퍼바이저(Hypervisor)는 하나의 물리 서버 위에서 <strong>여러 가상 머신(VM)을 생성·실행·관리</strong>하는
          소프트웨어다. 호스트 OS 유무에 따라 두 유형으로 나뉜다.</p>
          <table>
            <tr><th>구분</th><th>Type 1 (베어메탈형)</th><th>Type 2 (호스트형)</th></tr>
            <tr>
              <td><strong>실행 위치</strong></td>
              <td>호스트 OS 없이 <strong>하드웨어 위에서 직접 실행</strong></td>
              <td><strong>호스트 OS 위에</strong> 응용 프로그램처럼 설치되어 실행</td>
            </tr>
            <tr>
              <td><strong>성능</strong></td>
              <td>오버헤드가 적어 성능이 좋다 → 서버·데이터센터용</td>
              <td>호스트 OS를 거치므로 오버헤드가 크다 → 개인·테스트용</td>
            </tr>
            <tr>
              <td><strong>대표 제품</strong></td>
              <td><strong>Xen, KVM, Hyper-V</strong>, VMware ESXi</td>
              <td><strong>VirtualBox, VMware Workstation</strong></td>
            </tr>
          </table>

          <h3>3-2. 전가상화 vs 반가상화 (단골)</h3>
          <table>
            <tr><th>구분</th><th>전가상화 (Full Virtualization)</th><th>반가상화 (Para Virtualization)</th></tr>
            <tr>
              <td><strong>방식</strong></td>
              <td>하드웨어를 <strong>완전히 가상화</strong>하여 게스트 OS를 <strong>수정 없이</strong> 그대로 실행</td>
              <td>게스트 OS를 <strong>일부 수정</strong>하여 하이퍼바이저에 직접 요청(하이퍼콜)하도록 실행</td>
            </tr>
            <tr>
              <td><strong>특징</strong></td>
              <td>호환성이 좋지만 모든 명령을 하이퍼바이저가 중재하여 상대적으로 느리다</td>
              <td>성능이 좋지만 OS 커널 수정이 필요해 지원 OS가 제한된다</td>
            </tr>
          </table>

          <h3>3-3. VM vs 컨테이너 (비교 단골)</h3>
          <table>
            <tr><th>구분</th><th>가상 머신(VM)</th><th>컨테이너(Container)</th></tr>
            <tr>
              <td><strong>가상화 단위</strong></td>
              <td>하드웨어 수준 — VM마다 <strong>게스트 OS 전체</strong>를 포함</td>
              <td>OS 수준 — <strong>호스트 OS 커널을 공유</strong>하고 앱과 라이브러리만 격리</td>
            </tr>
            <tr>
              <td><strong>크기·기동</strong></td>
              <td>수 GB, 부팅에 수 분 — 무겁다</td>
              <td>수십 MB, 수 초 내 기동 — 가볍고 빠르다</td>
            </tr>
            <tr>
              <td><strong>격리 수준</strong></td>
              <td>OS 단위 완전 격리로 보안성 높음</td>
              <td>커널 공유로 격리 수준은 VM보다 낮음</td>
            </tr>
            <tr>
              <td><strong>관리 기술</strong></td>
              <td>하이퍼바이저</td>
              <td>컨테이너 엔진(Docker), 오케스트레이션(Kubernetes)</td>
            </tr>
          </table>

          <h3>3-4. 관련 용어 (설명→용어)</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td>컨테이너 기반 가상화의 대표 <strong>컨테이너 엔진(플랫폼)</strong>. 애플리케이션을 이미지로 만들어 어디서나 동일하게 실행</td>
              <td><strong>도커</strong> (Docker)</td>
            </tr>
            <tr>
              <td>다수의 컨테이너를 <strong>배포·확장·관리(오케스트레이션)</strong>하는 오픈소스 플랫폼</td>
              <td><strong>쿠버네티스</strong> (Kubernetes)</td>
            </tr>
            <tr>
              <td>사용자의 데스크톱 환경을 서버에서 가상 머신으로 운영하고, 단말에서는 <strong>화면만 전송받아</strong> 사용하는 데스크톱 가상화 인프라</td>
              <td><strong>VDI</strong> (Virtual Desktop Infrastructure)</td>
            </tr>
          </table>
        </section>

        {/* ===================== 4. 스토리지 ===================== */}
        <section id="storage">
          <h2>4. 스토리지 — DAS · NAS · SAN · RAID</h2>
          <p class="sub">스토리지 연결 방식 3가지(DAS·NAS·SAN)의 구분은 실기 최단골이다. "연결 방식"과 "접근 단위(파일/블록)"를 짝지어 기억한다.</p>

          <h3>4-1. DAS vs NAS vs SAN (구분 최단골)</h3>
          <table>
            <tr><th>구분</th><th>DAS<br/>(Direct Attached Storage)</th><th>NAS<br/>(Network Attached Storage)</th><th>SAN<br/>(Storage Area Network)</th></tr>
            <tr>
              <td><strong>연결 방식</strong></td>
              <td>서버에 <strong>전용 케이블로 직접 연결</strong></td>
              <td><strong>LAN(이더넷) 네트워크</strong>를 통해 연결</td>
              <td><strong>전용 네트워크</strong>(파이버 채널, FC)로 연결</td>
            </tr>
            <tr>
              <td><strong>접근 단위</strong></td>
              <td>블록 단위</td>
              <td><strong>파일 단위</strong></td>
              <td><strong>블록 단위</strong></td>
            </tr>
            <tr>
              <td><strong>특징</strong></td>
              <td>구성 간단, 속도 빠름. 연결된 서버만 사용 가능 — <strong>공유 불가</strong></td>
              <td>여러 사용자·서버가 <strong>파일 공유</strong> 용이. LAN 부하 영향</td>
              <td>대규모·고성능. DAS의 속도 + NAS의 공유 장점 결합, 구축 비용 높음</td>
            </tr>
            <tr>
              <td><strong>확장성</strong></td>
              <td>낮음</td>
              <td>중간</td>
              <td>높음</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 270" role="img" aria-label="DAS NAS SAN 연결 구조">
              <text class="strong" x="160" y="28" text-anchor="middle">DAS — 직접 연결</text>
              <text class="strong" x="450" y="28" text-anchor="middle">NAS — 파일 단위 공유</text>
              <text class="strong" x="730" y="28" text-anchor="middle">SAN — 블록 단위 전용망</text>

              {/* DAS */}
              <rect class="box" x="100" y="44" width="120" height="40" /><text x="160" y="69" text-anchor="middle">서버</text>
              <rect class="boxsoft" x="100" y="206" width="120" height="40" /><text x="160" y="231" text-anchor="middle">스토리지</text>
              <g class="msg" data-step="1">
                <line class="arrow" x1="160" y1="84" x2="160" y2="200" />
                <text class="small" x="172" y="145">전용 케이블</text>
              </g>

              {/* NAS */}
              <rect class="box" x="390" y="44" width="120" height="40" /><text x="450" y="69" text-anchor="middle">서버</text>
              <rect class="boxsoft" x="390" y="130" width="120" height="36" /><text x="450" y="154" text-anchor="middle">LAN(이더넷)</text>
              <rect class="boxsoft" x="390" y="206" width="120" height="40" />
              <text x="450" y="222" text-anchor="middle">NAS 장비</text>
              <text class="small" x="450" y="240" text-anchor="middle">파일 단위 접근</text>
              <g class="msg" data-step="2">
                <line class="arrow" x1="450" y1="84" x2="450" y2="126" />
                <text class="small" x="462" y="110">이더넷 접속</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="450" y1="166" x2="450" y2="200" />
                <text class="small" x="462" y="188">파일 요청</text>
              </g>

              {/* SAN */}
              <rect class="box" x="680" y="44" width="120" height="40" /><text x="740" y="69" text-anchor="middle">서버</text>
              <rect class="boxdark" x="680" y="130" width="120" height="36" /><text x="740" y="154" text-anchor="middle">SAN 스위치(FC)</text>
              <rect class="boxsoft" x="680" y="206" width="120" height="40" />
              <text x="740" y="222" text-anchor="middle">스토리지</text>
              <text class="small" x="740" y="240" text-anchor="middle">블록 단위 접근</text>
              <g class="msg" data-step="4">
                <line class="arrow" x1="740" y1="84" x2="740" y2="126" />
                <text class="small" x="752" y="110">FC 전용망</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1="740" y1="166" x2="740" y2="200" />
                <text class="small" x="752" y="188">블록 요청</text>
              </g>
            </svg>
            <figcaption>도면 2. DAS · NAS · SAN 연결 구조 — DAS는 서버에 직접, NAS는 LAN을 통해 파일 단위로, SAN은 전용 네트워크(FC)를 통해 블록 단위로 스토리지에 접근한다.</figcaption>
          </figure>

          <h3>4-2. RAID 레벨 (RAID 5 단골)</h3>
          <p>RAID(Redundant Array of Independent Disks)는 여러 디스크를 묶어 <strong>성능 향상</strong>이나
          <strong>데이터 안정성(중복 저장)</strong>을 얻는 기술이다.</p>
          <table>
            <tr><th>레벨</th><th>방식</th><th>최소 디스크</th><th>특징</th></tr>
            <tr>
              <td><strong>RAID 0</strong></td>
              <td><strong>스트라이핑</strong>(Striping) — 데이터를 여러 디스크에 분산 저장</td>
              <td>2</td>
              <td>읽기·쓰기 <strong>성능 최고</strong>. 중복이 없어 디스크 1개만 고장 나도 전체 데이터 손실</td>
            </tr>
            <tr>
              <td><strong>RAID 1</strong></td>
              <td><strong>미러링</strong>(Mirroring) — 동일 데이터를 두 디스크에 중복 저장</td>
              <td>2</td>
              <td><strong>안정성 최고</strong>. 용량 효율은 절반(50%)</td>
            </tr>
            <tr>
              <td><strong>RAID 5</strong></td>
              <td>스트라이핑 + <strong>패리티를 여러 디스크에 분산</strong> 저장</td>
              <td>3</td>
              <td>디스크 <strong>1개 고장까지 복구</strong> 가능. 성능·용량·안정성의 균형 — 단골</td>
            </tr>
            <tr>
              <td><strong>RAID 6</strong></td>
              <td>패리티를 <strong>2중으로 분산</strong> 저장</td>
              <td>4</td>
              <td>디스크 <strong>2개 동시 고장까지 복구</strong> 가능. 쓰기 성능은 RAID 5보다 낮음</td>
            </tr>
            <tr>
              <td><strong>RAID 10 (1+0)</strong></td>
              <td>미러링(1) 후 스트라이핑(0) 결합</td>
              <td>4</td>
              <td>성능과 안정성을 모두 확보. 비용(디스크 수) 부담 큼</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            <strong>0 = 스트라이핑(성능) · 1 = 미러링(안정) · 5 = 패리티 분산(1개 고장 복구) · 6 = 2중 패리티(2개 고장 복구) · 10 = 1과 0의 결합</strong>.
            "패리티 정보를 모든 디스크에 분산 저장" 설명이 나오면 답은 RAID 5.
          </div>
        </section>

        {/* ===================== 5. 네트워크 신기술 ===================== */}
        <section id="network">
          <h2>5. 네트워크 신기술 — SDN · NFV · IoT 무선</h2>
          <p class="sub">네트워크 파트는 설명을 읽고 약어를 정확히 쓰는 문제가 많다. SDN은 "제어부·데이터부 분리"라는 정의 문구가 그대로 출제되는 최단골이다.</p>

          <h3>5-1. 네트워크 아키텍처 신기술 (설명→용어)</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td>네트워크 장비의 <strong>제어부(Control Plane)와 데이터 전송부(Data Plane)를 분리</strong>하고,
              소프트웨어(컨트롤러)로 네트워크 전체를 <strong>중앙 집중 제어·관리</strong>하는 기술</td>
              <td><strong>SDN</strong> (Software Defined Network) — 최단골</td>
            </tr>
            <tr>
              <td>라우터·방화벽·로드밸런서 등 <strong>네트워크 장비의 기능을 가상화</strong>하여 범용 서버의
              소프트웨어로 구현하는 기술</td>
              <td><strong>NFV</strong> (Network Functions Virtualization)</td>
            </tr>
            <tr>
              <td>SDN 개념을 <strong>WAN(광역망)에 적용</strong>하여 여러 거점의 회선을 소프트웨어로 통합 관리하는 기술</td>
              <td><strong>SD-WAN</strong> (Software Defined WAN)</td>
            </tr>
            <tr>
              <td>콘텐츠(이미지·동영상 등)를 <strong>사용자와 가까운 캐시 서버에 분산 배치</strong>하여 빠르고 안정적으로 전송하는 네트워크</td>
              <td><strong>CDN</strong> (Content Delivery Network)</td>
            </tr>
            <tr>
              <td>이동통신 <strong>기지국 등 네트워크 가장자리(엣지)에 컴퓨팅 자원</strong>을 배치하여 초저지연 서비스를 제공하는 5G 핵심 기술</td>
              <td><strong>MEC</strong> (Mobile Edge Computing, 모바일 엣지 컴퓨팅)</td>
            </tr>
            <tr>
              <td>모든 노드가 <strong>그물망처럼 서로 연결</strong>되어 일부 노드가 고장 나도 우회 경로로 통신을 지속하는
              네트워크 구조. 대규모 센서망·재난망에 활용</td>
              <td><strong>메시 네트워크</strong> (Mesh Network) — 단골</td>
            </tr>
          </table>

          <h3>5-2. 근거리 무선 · IoT 통신 기술 (설명→용어)</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td><strong>블루투스 등 무선 기술로 여러 독립 기기를 즉석에서</strong> 연결하는 소규모(수 미터)
              애드혹 네트워크. 마스터 1대에 슬레이브 최대 7대</td>
              <td><strong>피코넷</strong> (Piconet)</td>
            </tr>
            <tr>
              <td>약 <strong>10cm 이내 초근거리</strong>에서 태그 접촉으로 데이터를 주고받는 13.56MHz 비접촉 통신 (교통카드, 모바일 결제)</td>
              <td><strong>NFC</strong> (Near Field Communication)</td>
            </tr>
            <tr>
              <td>2.4GHz 대역의 근거리(약 10m) 무선 통신 표준(IEEE 802.15.1). 이어폰·키보드 등 기기 간 연결</td>
              <td><strong>블루투스</strong> (Bluetooth)</td>
            </tr>
            <tr>
              <td><strong>저속·저전력·저비용</strong>의 근거리 무선 통신 표준(IEEE 802.15.4). 홈 네트워크·센서망에 사용</td>
              <td><strong>지그비</strong> (ZigBee) — 단골</td>
            </tr>
            <tr>
              <td><strong>저전력으로 넓은 지역(수 km)</strong>을 커버하는 IoT 전용 광역 통신. 대표 기술로
              LoRa, NB-IoT가 있다</td>
              <td><strong>LPWA</strong> (Low Power Wide Area)</td>
            </tr>
            <tr>
              <td><strong>초고속·초저지연·초연결</strong>을 특징으로 하는 5세대 이동통신. MEC·네트워크 슬라이싱과 결합</td>
              <td><strong>5G</strong> (IMT-2020)</td>
            </tr>
          </table>
        </section>

        {/* ===================== 6. SW·컴퓨팅 신기술 ===================== */}
        <section id="software">
          <h2>6. SW · 컴퓨팅 신기술 용어 (최다 빈출)</h2>
          <p class="sub">실기 용어 문제가 가장 많이 나오는 파트. 설명의 핵심 키워드(굵은 글씨)를 보고 용어를 즉시 떠올릴 수 있어야 한다.</p>

          <h3>6-1. 인공지능 · 데이터 계열 (설명→용어)</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td>인간의 학습·추론·지각 능력을 컴퓨터로 구현하는 기술 전반 (가장 넓은 개념)</td>
              <td><strong>인공지능</strong> (AI)</td>
            </tr>
            <tr>
              <td>명시적 프로그래밍 없이 컴퓨터가 <strong>데이터로부터 스스로 학습</strong>하여 성능을 개선하는 AI의 한 분야</td>
              <td><strong>머신러닝</strong> (Machine Learning)</td>
            </tr>
            <tr>
              <td><strong>인공 신경망을 깊게 쌓아</strong> 학습하는 머신러닝의 한 분야 (AI ⊃ 머신러닝 ⊃ 딥러닝)</td>
              <td><strong>딥러닝</strong> (Deep Learning)</td>
            </tr>
            <tr>
              <td>대량의 데이터에서 <strong>숨겨진 패턴·규칙·상관관계</strong>를 통계적으로 찾아내는 기법</td>
              <td><strong>데이터 마이닝</strong> (Data Mining)</td>
            </tr>
            <tr>
              <td>비정형 <strong>텍스트 데이터</strong>에서 자연어 처리로 의미 있는 정보를 추출하는 기법</td>
              <td><strong>텍스트 마이닝</strong> (Text Mining)</td>
            </tr>
            <tr>
              <td>대용량 데이터를 여러 서버에 <strong>분산 저장(HDFS)·분산 처리</strong>하는 오픈소스 빅데이터 프레임워크</td>
              <td><strong>하둡</strong> (Hadoop) — 단골</td>
            </tr>
            <tr>
              <td>대용량 데이터를 <strong>Map(분할 처리) → Reduce(결과 취합)</strong> 두 단계로 나누어 병렬 처리하는 하둡의 분산 처리 모델</td>
              <td><strong>맵리듀스</strong> (MapReduce)</td>
            </tr>
            <tr>
              <td>정형·비정형을 가리지 않고 <strong>원시(raw) 데이터를 원래 형식 그대로</strong> 한곳에 모아 두는 대규모 저장소</td>
              <td><strong>데이터 레이크</strong> (Data Lake) — 단골</td>
            </tr>
            <tr>
              <td>기업 내부 데이터에 SNS·위치 정보 등 <strong>외부 데이터를 결합</strong>하여 마케팅 등에 활용하는 이종 결합 데이터</td>
              <td><strong>브로드 데이터</strong> (Broad Data)</td>
            </tr>
            <tr>
              <td>수집·저장만 되고 <strong>분석·활용되지 않는 채 방치</strong>된 데이터</td>
              <td><strong>다크 데이터</strong> (Dark Data)</td>
            </tr>
            <tr>
              <td>사용자가 인터넷을 이용하며 남기는 검색·구매·SNS 활동 등의 <strong>온라인 활동 흔적</strong></td>
              <td><strong>디지털 발자국</strong> (Digital Footprint)</td>
            </tr>
          </table>

          <h3>6-2. 컴퓨팅 패러다임 (설명→용어)</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td>데이터를 클라우드까지 보내지 않고 <strong>데이터가 발생하는 기기 근처(네트워크 가장자리)에서 즉시 처리</strong>하여
              지연 시간과 대역폭을 줄이는 컴퓨팅</td>
              <td><strong>엣지 컴퓨팅</strong> (Edge Computing) — 단골</td>
            </tr>
            <tr>
              <td>클라우드와 엣지(단말) <strong>사이의 중간 계층</strong>(게이트웨이·라우터 등)에서 데이터를 분산 처리하는 컴퓨팅</td>
              <td><strong>포그 컴퓨팅</strong> (Fog Computing)</td>
            </tr>
            <tr>
              <td>지리적으로 분산된 <strong>여러 컴퓨터의 유휴 자원을 네트워크로 묶어</strong> 하나의 고성능 시스템처럼 사용하는 컴퓨팅</td>
              <td><strong>그리드 컴퓨팅</strong> (Grid Computing) — 단골</td>
            </tr>
            <tr>
              <td>큐비트(Qubit)의 <strong>중첩·얽힘</strong>을 이용해 특정 문제를 기존 컴퓨터보다 훨씬 빠르게 푸는 컴퓨팅</td>
              <td><strong>양자 컴퓨팅</strong> (Quantum Computing)</td>
            </tr>
            <tr>
              <td>양자역학 원리(복제 불가능성)를 이용해 <strong>도청이 원천적으로 불가능한 키를 분배</strong>하는 암호 기술</td>
              <td><strong>양자 암호</strong> · <strong>QKD</strong> (Quantum Key Distribution)</td>
            </tr>
            <tr>
              <td>사람이 하던 <strong>반복적·규칙적인 사무 업무를 소프트웨어 로봇이 자동으로 대신</strong> 처리하는 기술</td>
              <td><strong>RPA</strong> (Robotic Process Automation) — 단골</td>
            </tr>
          </table>

          <h3>6-3. 서비스 · 플랫폼 신기술 (설명→용어)</h3>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td>거래 내역을 블록으로 묶어 체인처럼 연결하고, P2P 네트워크의 모든 참여자가
              <strong>분산 원장(Distributed Ledger)</strong>으로 공동 저장·검증하여 위·변조를 방지하는 기술</td>
              <td><strong>블록체인</strong> (Blockchain) — 최단골</td>
            </tr>
            <tr>
              <td>블록체인 위에서 <strong>계약 조건이 충족되면 자동으로 실행</strong>되는 프로그램화된 계약</td>
              <td><strong>스마트 계약</strong> (Smart Contract)</td>
            </tr>
            <tr>
              <td>블록체인 기반으로 디지털 자산에 <strong>고유하고 대체 불가능한 소유권</strong>을 부여하는 토큰</td>
              <td><strong>NFT</strong> (Non-Fungible Token)</td>
            </tr>
            <tr>
              <td>물리적 사물·공정을 <strong>가상 공간에 동일하게 구현</strong>하고 실시간 데이터로 동기화하여
              <strong>시뮬레이션·예측·최적화</strong>에 활용하는 기술</td>
              <td><strong>디지털 트윈</strong> (Digital Twin) — 최단골</td>
            </tr>
            <tr>
              <td>현실과 가상이 결합된 <strong>3차원 가상 세계</strong>에서 아바타로 사회·경제·문화 활동을 하는 플랫폼</td>
              <td><strong>메타버스</strong> (Metaverse)</td>
            </tr>
            <tr>
              <td>웹에서 제공되는 <strong>여러 서비스·정보(오픈 API)를 조합</strong>하여 새로운 서비스를 만드는 기술 (예: 지도 API + 부동산 정보)</td>
              <td><strong>매시업</strong> (Mashup) — 최단골</td>
            </tr>
            <tr>
              <td>현실 세계 위에 가상의 정보를 겹쳐 보여주는 기술(AR) / 완전한 가상 세계에 몰입하는 기술(VR) /
              현실과 가상 객체가 실시간 상호작용하는 혼합 기술(MR)</td>
              <td><strong>증강현실 AR</strong> · <strong>가상현실 VR</strong> · <strong>혼합현실 MR</strong></td>
            </tr>
            <tr>
              <td>실세계의 개념(사물)과 <strong>개념 간 관계를 컴퓨터가 처리할 수 있는 형식 언어로 정의</strong>한 지식 표현 명세</td>
              <td><strong>온톨로지</strong> (Ontology) — 단골</td>
            </tr>
            <tr>
              <td>웹 자원에 <strong>의미(시맨틱)를 부여</strong>하여 컴퓨터가 스스로 이해·추론·처리할 수 있게 하는 지능형 웹. 온톨로지가 기반 기술</td>
              <td><strong>시맨틱 웹</strong> (Semantic Web) — 단골</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            혼동 주의 짝: <strong>디지털 트윈</strong>(현실을 가상에 복제·시뮬레이션) vs <strong>메타버스</strong>(가상 세계에서의 활동),
            <strong>엣지</strong>(단말 근처) vs <strong>포그</strong>(중간 계층) vs <strong>그리드</strong>(유휴 자원 결합),
            <strong>온톨로지</strong>(지식 표현 명세) vs <strong>시맨틱 웹</strong>(그것을 활용한 지능형 웹).
          </div>
        </section>

        {/* ===================== 7. 하드웨어·기타 신기술 ===================== */}
        <section id="hardware">
          <h2>7. 하드웨어 · 기타 신기술</h2>
          <p class="sub">하드웨어 계열은 출제 빈도는 낮지만 한 번 나오면 그대로 점수가 갈리는 용어들이다. 설명→용어로 정리한다.</p>
          <table>
            <tr><th>설명</th><th>용어</th></tr>
            <tr>
              <td>시스템을 이중화·클러스터링하여 장애가 발생해도 <strong>중단 없이 서비스를 지속</strong>하도록
              가동률(예: 99.999%)을 극대화하는 기술·특성</td>
              <td><strong>고가용성 HA</strong> (High Availability)</td>
            </tr>
            <tr>
              <td>사용자가 의식하지 않아도 <strong>주변 환경에 스며든 컴퓨팅 기기들이 알아서</strong> 상황을 인지하고 서비스를 제공하는 환경</td>
              <td><strong>앰비언트 컴퓨팅</strong> (Ambient Computing)</td>
            </tr>
            <tr>
              <td>인공 신경망 연산(행렬 연산)에 특화되어 <strong>AI 추론·학습을 저전력·고속으로 처리</strong>하는 전용 프로세서</td>
              <td><strong>NPU</strong> (Neural Processing Unit, 신경망 처리 장치)</td>
            </tr>
            <tr>
              <td>메모리(Memory)와 저항(Resistor)의 합성어. <strong>전원이 꺼져도 직전에 흐른 전류의 상태(저항값)를 기억</strong>하는
              비휘발성 수동 소자</td>
              <td><strong>멤리스터</strong> (Memristor) — 출제 이력</td>
            </tr>
            <tr>
              <td>프로세서 안에 <strong>일반 구역과 보안 구역을 하드웨어로 분리</strong>하여 결제·인증 등 민감한 처리를
              격리 실행하는 ARM 기반 보안 기술</td>
              <td><strong>트러스트존</strong> (TrustZone) — 단골</td>
            </tr>
            <tr>
              <td>한 번 기록하면 수정이 불가능하고 온도·습도에 강해 <strong>데이터를 1,000년 이상 장기 보존</strong>할 수 있는 광 저장 매체</td>
              <td><strong>M-DISC</strong> (Millennial Disc)</td>
            </tr>
            <tr>
              <td>디지털 설계도를 바탕으로 재료를 층층이 쌓아 <strong>입체물을 제작</strong>하는 기술(3D) /
              여기에 <strong>시간·환경에 따라 스스로 형태가 변하는 소재</strong>를 결합한 기술(4D)</td>
              <td><strong>3D 프린팅</strong> · <strong>4D 프린팅</strong></td>
            </tr>
          </table>
        </section>

        {/* ===================== 8. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">전부 실기 형식의 "설명 → 용어/구분 쓰기" 문제다. 답을 직접 종이에 쓴 뒤 정답을 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 보기 ㉠~㉢에 해당하는 클라우드 서비스 유형을 각각 쓰시오.</p>
            <pre>{`㉠ 서버·스토리지·네트워크 등 가상화된 인프라 자원을 제공하며, 사용자가 OS부터 직접 설치·관리한다.
㉡ 완성된 응용 소프트웨어를 설치 없이 인터넷으로 바로 사용하도록 제공한다.
㉢ OS·런타임을 포함한 개발·실행 플랫폼을 제공하여 사용자는 애플리케이션과 데이터만 관리한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ IaaS, ㉡ SaaS, ㉢ PaaS<br/>
                <span class="label">해설: </span>제공 범위가 인프라까지면 IaaS, 플랫폼(OS·런타임)까지면 PaaS, 소프트웨어 전부면 SaaS다. 사용자 관리 범위가 넓은 순서는 IaaS → PaaS → SaaS.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 네트워크 기술 용어를 쓰시오.<br/>
            "네트워크 장비의 제어부(Control Plane)와 데이터 전송부(Data Plane)를 분리하고, 소프트웨어 컨트롤러로
            네트워크 전체를 중앙에서 프로그래밍하듯 제어·관리하는 기술이다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>SDN (Software Defined Network, 소프트웨어 정의 네트워크)<br/>
                <span class="label">해설: </span>"제어부와 데이터부의 분리 + 소프트웨어 중앙 제어"가 SDN의 정의 키워드다. 네트워크 기능(장비)을 가상화하는 NFV와 구분할 것.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.<br/>
            "거래 정보를 블록으로 묶어 체인 형태로 연결하고, P2P 네트워크의 모든 참여 노드가 분산 원장으로
            공동 기록·검증함으로써 임의의 위·변조를 방지하는 기술이다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>블록체인 (Blockchain)<br/>
                <span class="label">해설: </span>"분산 원장 + 위·변조 방지"가 핵심 키워드. 블록체인 위에서 조건 충족 시 자동 실행되는 계약은 스마트 계약이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.<br/>
            "물리적인 사물·공정·시스템을 가상 공간에 동일하게 구현하고, 실시간 데이터로 동기화하여
            시뮬레이션과 예측·최적화에 활용하는 기술이다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>디지털 트윈 (Digital Twin)<br/>
                <span class="label">해설: </span>"현실을 가상에 쌍둥이처럼 복제 + 시뮬레이션"이 키워드. 가상 세계에서 아바타로 활동하는 메타버스와 혼동하지 말 것.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.<br/>
            "웹에서 제공되는 여러 서비스와 정보(오픈 API)를 조합하여 새로운 소프트웨어나 서비스를
            만들어 내는 기술이다. 예를 들어 지도 서비스에 부동산 정보를 결합한 서비스가 있다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>매시업 (Mashup)<br/>
                <span class="label">해설: </span>"여러 웹 서비스(API)의 조합 → 새로운 서비스"가 매시업의 정의다. 실기에서 반복 출제된 최단골 용어.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 보기 ㉠~㉢에 해당하는 스토리지 연결 방식을 각각 쓰시오.</p>
            <pre>{`㉠ 스토리지를 서버에 전용 케이블로 직접 연결한다. 속도는 빠르지만 다른 서버와 공유할 수 없다.
㉡ LAN(이더넷)을 통해 연결되어 여러 사용자가 파일 단위로 데이터를 공유한다.
㉢ 파이버 채널(FC) 기반의 전용 네트워크로 연결되어 블록 단위로 접근하며, 대규모·고성능 환경에 적합하다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ DAS, ㉡ NAS, ㉢ SAN<br/>
                <span class="label">해설: </span>직접 연결 = DAS, 네트워크 + 파일 단위 = NAS, 전용 네트워크 + 블록 단위 = SAN. "접근 단위"와 "연결 방식"을 짝지어 암기한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명에 해당하는 RAID 레벨을 쓰시오.<br/>
            "동일한 데이터를 두 개의 디스크에 중복 저장(미러링)하여, 한 디스크가 고장 나도
            데이터를 잃지 않는다. 안정성은 높지만 저장 용량 효율은 절반이 된다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>RAID 1<br/>
                <span class="label">해설: </span>미러링 = RAID 1. 스트라이핑(성능)은 RAID 0, 패리티 분산(1개 고장 복구)은 RAID 5, 2중 패리티는 RAID 6이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.<br/>
            "데이터를 중앙의 클라우드 서버까지 보내지 않고, 데이터가 발생하는 단말 근처
            (네트워크 가장자리)에서 즉시 분석·처리하여 지연 시간을 줄이는 컴퓨팅 방식이다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>엣지 컴퓨팅 (Edge Computing)<br/>
                <span class="label">해설: </span>"네트워크 가장자리에서 처리 + 저지연"이 키워드. 클라우드와 단말 사이 중간 계층에서 처리하면 포그 컴퓨팅이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">하이퍼바이저에 대한 다음 설명에서 괄호에 들어갈 유형을 쓰시오.<br/>
            "( ㉠ ) 하이퍼바이저는 호스트 OS 없이 하드웨어 위에서 직접 실행되며 Xen, KVM, Hyper-V가 대표적이다.
            ( ㉡ ) 하이퍼바이저는 호스트 OS 위에 응용 프로그램처럼 설치되어 실행되며 VirtualBox, VMware Workstation이 대표적이다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ Type 1 (베어메탈형), ㉡ Type 2 (호스트형)<br/>
                <span class="label">해설: </span>하드웨어 위 직접 실행 = Type 1(성능 우수, 서버용), 호스트 OS 위 실행 = Type 2(개인·테스트용). 대표 제품과 짝지어 암기한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 ㉠, ㉡ 설명에 해당하는 용어를 각각 쓰시오.</p>
            <pre>{`㉠ 지리적으로 분산된 여러 컴퓨터의 유휴 자원을 네트워크로 묶어 하나의 고성능 컴퓨터처럼 활용하는 컴퓨팅 방식
㉡ 실세계의 개념과 개념 간의 관계를 컴퓨터가 처리할 수 있는 형식 언어로 정의한 명세로, 시맨틱 웹의 기반이 되는 기술`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ 그리드 컴퓨팅 (Grid Computing), ㉡ 온톨로지 (Ontology)<br/>
                <span class="label">해설: </span>"유휴 자원을 묶어 하나처럼" = 그리드 컴퓨팅, "개념·관계의 형식적 명세" = 온톨로지. 온톨로지를 활용해 컴퓨터가 웹의 의미를 이해하게 한 것이 시맨틱 웹이다.
              </div>
            </details>
          </div>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">클라우드 네이티브</span>
            <span class="kw">서버리스(FaaS)</span>
            <span class="kw">BaaS</span>
            <span class="kw">멀티 클라우드</span>
            <span class="kw">도커</span>
            <span class="kw">쿠버네티스</span>
            <span class="kw">VDI</span>
            <span class="kw">전가상화 · 반가상화</span>
            <span class="kw">NFV</span>
            <span class="kw">SD-WAN</span>
            <span class="kw">CDN</span>
            <span class="kw">MEC</span>
            <span class="kw">메시 네트워크</span>
            <span class="kw">지그비</span>
            <span class="kw">LPWA(LoRa · NB-IoT)</span>
            <span class="kw">포그 컴퓨팅</span>
            <span class="kw">양자 암호(QKD)</span>
            <span class="kw">RPA</span>
            <span class="kw">하둡 · 맵리듀스</span>
            <span class="kw">데이터 레이크</span>
            <span class="kw">시맨틱 웹</span>
            <span class="kw">트러스트존</span>
            <span class="kw">멤리스터</span>
            <span class="kw">고가용성 HA</span>
          </p>
        </section>

        <footer>개발 인프라 구축과 신기술 용어 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
