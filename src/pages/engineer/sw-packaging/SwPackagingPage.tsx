import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './sw-packaging.css'

export default defineComponent({
  name: 'SwPackagingPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>제품 소프트웨어 패키징 · 패키징 도구</h1>
          <p>정보처리기사 실기 대비 학습 문서. 패키징 개요(수행 순서 6단계) → 릴리스 노트 → 패키징 도구와
          DRM(구성 요소 · 기술 요소 · 유통 흐름) → 설치·사용자 매뉴얼 → 국제 표준 제품 품질(ISO/IEC 9126 · 25000) →
          버전 관리(형상 관리 용어 · 도구 방식 · 빌드 자동화) 순서로, 실기 단골 개념을 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 콘텐츠·요청의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>패키징 개요 — 개념 · 수행 순서 6단계</a></li>
            <li><a href="#release" onClick={(e) => scrollToId(e, 'release')}>릴리스 노트 — 작성 항목 · 작성 순서</a></li>
            <li><a href="#drm" onClick={(e) => scrollToId(e, 'drm')}>패키징 도구와 DRM — 구성 · 기술 요소</a></li>
            <li><a href="#manual" onClick={(e) => scrollToId(e, 'manual')}>매뉴얼 작성 — 설치 · 사용자 매뉴얼</a></li>
            <li><a href="#quality" onClick={(e) => scrollToId(e, 'quality')}>국제 표준 제품 품질 — ISO/IEC 9126 · 25000</a></li>
            <li><a href="#version" onClick={(e) => scrollToId(e, 'version')}>버전 관리 — 용어 · 도구 방식 · 빌드 자동화</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 패키징 개요 ===================== */}
        <section id="overview">
          <h2>1. 패키징 개요 — 개념 · 수행 순서 6단계</h2>
          <p class="sub">패키징의 정의 한 문장, "사용자 중심" 특징, 그리고 수행 순서 6단계 나열이 실기 단골이다.</p>

          <h3>1-1. 패키징의 개념과 특징</h3>
          <p><strong>제품 소프트웨어 패키징</strong>이란 개발이 완료된 소프트웨어의 <strong>모듈(컴포넌트)을
          배포 가능한 형태로 묶고</strong>, 설치와 실행에 필요한 파일·매뉴얼을 함께 만들어
          사용자에게 전달할 수 있게 하는 활동이다.</p>
          <ul>
            <li><strong>사용자 중심</strong>으로 진행한다 — 개발자가 아니라 <strong>사용자의 실행 환경</strong>을 기준으로 패키징한다. (실기 단골)</li>
            <li>모듈화하여 <strong>기능 단위로 패키징</strong>하고, 신규·변경 이력을 확인한다.</li>
            <li>버전 관리·릴리스 노트를 통해 <strong>지속적으로 관리</strong>한다.</li>
            <li>범용 환경에서 사용할 수 있도록 <strong>일반적인 배포 형태</strong>로 만든다.</li>
          </ul>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "패키징은 (  ) 중심으로 진행한다"의 답은 <strong>사용자</strong>다.
            개발자 편의가 아니라 사용자의 편의성·안정성이 기준이다.
          </div>

          <h3>1-2. 패키징 수행 순서 6단계 (실기 단골)</h3>
          <p><strong>기능 식별 → 모듈화 → 빌드 진행 → 사용자 환경 분석 → 패키징 및 적용 시험 → 패키징 변경 개선</strong>
          순서로 진행한 뒤 배포한다. 순서를 뒤섞어 놓고 나열시키는 문제가 자주 나온다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 180" role="img" aria-label="패키징 수행 순서 6단계">
              <rect class="box" x="8" y="45" width="126" height="56" />
              <text x="71" y="78" text-anchor="middle" class="strong">기능 식별</text>
              <rect class="box" x="160" y="45" width="126" height="56" />
              <text x="223" y="78" text-anchor="middle" class="strong">모듈화</text>
              <rect class="box" x="312" y="45" width="126" height="56" />
              <text x="375" y="78" text-anchor="middle" class="strong">빌드 진행</text>
              <rect class="box" x="464" y="45" width="126" height="56" />
              <text x="527" y="68" text-anchor="middle" class="strong">사용자 환경</text>
              <text x="527" y="90" text-anchor="middle" class="strong">분석</text>
              <rect class="box" x="616" y="45" width="126" height="56" />
              <text x="679" y="68" text-anchor="middle" class="strong">패키징 및</text>
              <text x="679" y="90" text-anchor="middle" class="strong">적용 시험</text>
              <rect class="box" x="768" y="45" width="126" height="56" />
              <text x="831" y="68" text-anchor="middle" class="strong">패키징 변경</text>
              <text x="831" y="90" text-anchor="middle" class="strong">개선</text>

              <g class="msg" data-step="1">
                <line x1="136" y1="73" x2="156" y2="73" class="arrow" />
                <text x="147" y="38" text-anchor="middle" class="small">①</text>
              </g>
              <g class="msg" data-step="2">
                <line x1="288" y1="73" x2="308" y2="73" class="arrow" />
                <text x="299" y="38" text-anchor="middle" class="small">②</text>
              </g>
              <g class="msg" data-step="3">
                <line x1="440" y1="73" x2="460" y2="73" class="arrow" />
                <text x="451" y="38" text-anchor="middle" class="small">③</text>
              </g>
              <g class="msg" data-step="4">
                <line x1="592" y1="73" x2="612" y2="73" class="arrow" />
                <text x="603" y="38" text-anchor="middle" class="small">④</text>
              </g>
              <g class="msg" data-step="5">
                <line x1="744" y1="73" x2="764" y2="73" class="arrow" />
                <text x="755" y="38" text-anchor="middle" class="small">⑤</text>
              </g>

              <rect class="boxsoft" x="768" y="132" width="126" height="34" />
              <text x="831" y="154" text-anchor="middle">배포</text>
              <g class="msg" data-step="6">
                <line x1="831" y1="103" x2="831" y2="129" class="arrow ret" />
                <text x="808" y="122" text-anchor="end" class="small">⑥ 배포</text>
              </g>
            </svg>
            <figcaption>도면 1. 패키징 수행 순서 6단계 — 기능 식별부터 패키징 변경 개선까지, 개선 후 배포한다</figcaption>
          </figure>

          <table>
            <tr><th>단계</th><th>내용</th></tr>
            <tr><td><strong>① 기능 식별</strong></td><td>완성된 소스 코드의 입출력 데이터, 기능 단위와 제공 기능을 식별한다</td></tr>
            <tr><td><strong>② 모듈화</strong></td><td>식별된 기능을 배포 단위인 <strong>모듈(컴포넌트) 단위로 분류</strong>한다</td></tr>
            <tr><td><strong>③ 빌드 진행</strong></td><td>모듈·소스 코드를 컴파일하여 <strong>실행 가능한 파일을 생성</strong>한다 (빌드 도구 활용)</td></tr>
            <tr><td><strong>④ 사용자 환경 분석</strong></td><td>최소 운영 환경(OS, CPU, 메모리 등) 등 <strong>사용자의 실행 환경</strong>을 정의·분석한다</td></tr>
            <tr><td><strong>⑤ 패키징 및 적용 시험</strong></td><td>배포 형태로 패키징하고 <strong>사용자 환경과 동일한 환경에서 설치·동작을 시험</strong>한다</td></tr>
            <tr><td><strong>⑥ 패키징 변경 개선</strong></td><td>시험 결과를 반영하여 패키징을 <strong>변경·개선</strong>한 뒤 배포한다</td></tr>
          </table>

          <h3>1-3. 패키징 시 고려사항</h3>
          <ul>
            <li>사용자의 <strong>시스템 환경(OS, CPU, 메모리 등 최소 환경)</strong>을 정의한다.</li>
            <li>직관적인 UI(사용자 인터페이스)를 제공하고, 매뉴얼과 일치시킨다.</li>
            <li>소프트웨어를 <strong>관리 서비스 형태</strong>로 제공하는 것이 좋다.</li>
            <li>안전한 배포·유통을 위해 <strong>암호화/보안 기술</strong>을 고려한다. (→ DRM)</li>
            <li>다양한 <strong>이기종 시스템·콘텐츠 간 연동</strong>을 고려한다.</li>
            <li>보안 적용에 따른 <strong>복잡성·비효율성 문제를 최소화</strong>한다.</li>
          </ul>
        </section>

        {/* ===================== 2. 릴리스 노트 ===================== */}
        <section id="release">
          <h2>2. 릴리스 노트 — 작성 항목 · 작성 순서</h2>
          <p class="sub">"누가 작성하는가(개발팀)"와 작성 항목의 이름(헤더 · 면책 조항 · 연락처 등)이 실기 단골이다.</p>

          <h3>2-1. 릴리스 노트의 개념</h3>
          <p><strong>릴리스 노트(Release Note)</strong>는 소프트웨어의 최종 사용자(고객)에게
          <strong>개선·변경된 사항(신규 기능, 버그 수정 등)을 시간 순서로 기록해 전달</strong>하는 문서다.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            릴리스 노트는 현재 시제로 명확·정확·완전하게 작성하며,
            <strong>개발팀(개발자)이 직접 작성</strong>한다. 영업팀·홍보팀이 아니다. (실기 단골)
          </div>

          <h3>2-2. 릴리스 노트 작성 항목 (항목명 단골)</h3>
          <table>
            <tr><th>작성 항목</th><th>내용</th></tr>
            <tr><td><strong>헤더 (머리말, Header)</strong></td><td>문서 이름, 제품 이름, 버전 번호, 릴리스 날짜, 노트 날짜, 노트 버전 등</td></tr>
            <tr><td><strong>개요</strong></td><td>소프트웨어와 변경 사항 전체에 대한 간략한 요약</td></tr>
            <tr><td><strong>목적</strong></td><td>이번 릴리스에 포함된 신규 기능 목록과 릴리스 노트의 목적</td></tr>
            <tr><td><strong>문제 요약</strong></td><td>수정된 버그(문제)에 대한 간단한 설명 또는 릴리스 추가 항목 요약</td></tr>
            <tr><td><strong>재현 항목</strong></td><td>버그가 발견된 <strong>재현 단계(어떤 상황에서 발생했는지)</strong> 기술</td></tr>
            <tr><td><strong>수정·개선 내용</strong></td><td>버그를 수정·개선한 내용을 간단히 기술</td></tr>
            <tr><td><strong>사용자 영향도</strong></td><td>버전 변경이 <strong>최종 사용자에게 미치는 영향</strong>(기능·응용 프로그램 상의 영향)</td></tr>
            <tr><td><strong>SW 지원 영향도</strong></td><td>버전 변경이 <strong>소프트웨어 지원 프로세스·조직에 미치는 영향</strong></td></tr>
            <tr><td><strong>노트</strong></td><td>소프트웨어·하드웨어의 설치 항목, 제품·문서를 포함한 참고 사항(업그레이드 관련)</td></tr>
            <tr><td><strong>면책 조항</strong></td><td>회사와 표준 제품 관련 <strong>법적 책임의 한계</strong> 고지 (예: 프리웨어, 불법 복제 금지)</td></tr>
            <tr><td><strong>연락처</strong></td><td>사용자 지원 및 문의를 위한 연락처 정보</td></tr>
          </table>

          <h3>2-3. 릴리스 노트 작성 순서</h3>
          <p><strong>모듈 식별 → 릴리스 정보 확인 → 릴리스 노트 개요 작성 → 영향도 체크 →
          정식 릴리스 노트 작성 → 추가 개선 항목 식별</strong> 순서로 작성한다.</p>

          <h3>2-4. 추가 버전의 릴리스 노트</h3>
          <ul>
            <li><strong>테스트 버전 · 베타 버전</strong> 배포 시에도 릴리스 노트를 작성한다.</li>
            <li>출시 후 <strong>중대한 결함이 발견되어 긴급 수정(핫픽스, Hotfix)</strong>하는 경우,
            버그 번호를 포함한 추가 릴리스 노트를 작성한다.</li>
            <li>자체 기능 향상(업그레이드)으로 <strong>새로운 버전을 출시</strong>하는 경우에도 새로 작성한다.</li>
          </ul>
        </section>

        {/* ===================== 3. 패키징 도구와 DRM ===================== */}
        <section id="drm">
          <h2>3. 패키징 도구와 DRM — 구성 요소 · 기술 요소</h2>
          <p class="sub">실기 최다 빈출 섹션. 특히 <strong>클리어링 하우스</strong>는 "설명 → 용어 쓰기"로 반복 출제되는 최중요 용어다.</p>

          <h3>3-1. 저작권 보호와 패키징 도구</h3>
          <p><strong>저작권</strong>은 창작물을 만든 사람이 자신의 창작물에 대해 가지는 <strong>배타적 독점 권리</strong>로,
          타인의 침해를 받지 않을 고유 권한이다. <strong>패키징 도구</strong>는 배포용 설치 파일을 만들 때
          <strong>암호화·보안 기능을 함께 넣어 저작권을 보호</strong>하는 도구이며, 그 핵심 기술이
          <strong>DRM(Digital Rights Management, 디지털 저작권 관리)</strong>이다.</p>

          <h3>3-2. DRM 구성 요소 (실기 최다 빈출)</h3>
          <table>
            <tr><th>구성 요소</th><th>정의</th></tr>
            <tr>
              <td><strong>콘텐츠 제공자<br/>(Contents Provider)</strong></td>
              <td>콘텐츠(저작물)를 <strong>제공하는 저작권자</strong></td>
            </tr>
            <tr>
              <td><strong>패키저<br/>(Packager)</strong></td>
              <td>콘텐츠를 <strong>메타데이터와 함께 배포 가능한 형태(보안 컨테이너)로 묶어 암호화</strong>하는 프로그램</td>
            </tr>
            <tr>
              <td><strong>콘텐츠 분배자<br/>(Contents Distributor)</strong></td>
              <td>암호화된 콘텐츠를 <strong>유통(판매·배포)</strong>하는 곳 (예: 온라인 쇼핑몰, 앱 마켓)</td>
            </tr>
            <tr>
              <td><strong>클리어링 하우스<br/>(Clearing House)</strong></td>
              <td><strong>키 관리 및 라이선스 발급을 관리</strong>하는 곳. 저작권료 정산·분배도 수행한다 — <strong>최다 빈출 용어</strong></td>
            </tr>
            <tr>
              <td><strong>DRM 컨트롤러<br/>(DRM Controller)</strong></td>
              <td>소비자 측에서 <strong>배포된 콘텐츠의 이용 권한을 통제</strong>하는 프로그램 (라이선스 확인 후 복호화·재생)</td>
            </tr>
            <tr>
              <td><strong>보안 컨테이너<br/>(Security Container)</strong></td>
              <td>콘텐츠 원본을 안전하게 유통하기 위한 <strong>전자적 보안 장치(암호화된 포장 단위)</strong></td>
            </tr>
          </table>

          <h3>3-3. DRM 유통 흐름 (도면 필수 암기)</h3>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="DRM 유통 흐름도">
              <rect class="box" x="20" y="50" width="140" height="60" />
              <text x="90" y="75" text-anchor="middle" class="strong">콘텐츠 제공자</text>
              <text x="90" y="95" text-anchor="middle" class="small">(Contents Provider)</text>

              <rect class="box" x="260" y="50" width="140" height="60" />
              <text x="330" y="75" text-anchor="middle" class="strong">패키저</text>
              <text x="330" y="95" text-anchor="middle" class="small">(Packager)</text>

              <rect class="box" x="500" y="50" width="140" height="60" />
              <text x="570" y="75" text-anchor="middle" class="strong">콘텐츠 분배자</text>
              <text x="570" y="95" text-anchor="middle" class="small">(Distributor)</text>

              <rect class="box" x="740" y="50" width="140" height="60" />
              <text x="810" y="75" text-anchor="middle" class="strong">소비자</text>
              <text x="810" y="95" text-anchor="middle" class="small">(DRM 컨트롤러)</text>

              <rect class="boxdark" x="330" y="225" width="240" height="60" />
              <text x="450" y="250" text-anchor="middle" class="strong">클리어링 하우스</text>
              <text x="450" y="272" text-anchor="middle" class="small">(Clearing House) 키 관리 · 라이선스 발급</text>

              <g class="msg" data-step="1">
                <line x1="162" y1="80" x2="256" y2="80" class="arrow" />
                <text x="210" y="66" text-anchor="middle" class="small">① 콘텐츠 제공</text>
              </g>
              <g class="msg" data-step="2">
                <path d="M 340 112 L 405 221" class="arrow" fill="none" />
                <text x="360" y="175" text-anchor="end" class="small">② 키 · 메타데이터 등록</text>
              </g>
              <g class="msg" data-step="3">
                <line x1="402" y1="80" x2="496" y2="80" class="arrow" />
                <text x="450" y="66" text-anchor="middle" class="small">③ 암호화 콘텐츠</text>
              </g>
              <g class="msg" data-step="4">
                <line x1="642" y1="80" x2="736" y2="80" class="arrow" />
                <text x="690" y="66" text-anchor="middle" class="small">④ 콘텐츠 유통</text>
              </g>
              <g class="msg" data-step="5">
                <path d="M 790 112 L 555 222" class="arrow" fill="none" />
                <text x="720" y="150" text-anchor="start" class="small">⑤ 라이선스 요청 · 결제</text>
              </g>
              <g class="msg" data-step="6">
                <path d="M 590 226 L 820 116" class="arrow ret" fill="none" />
                <text x="712" y="205" text-anchor="start" class="small">⑥ 라이선스 발급</text>
              </g>
            </svg>
            <figcaption>도면 2. DRM 유통 흐름 — 제공자 → 패키저 → 분배자 → 소비자. 클리어링 하우스가 키를 관리하고 라이선스를 발급한다</figcaption>
          </figure>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            소비자가 콘텐츠를 받았어도 <strong>클리어링 하우스에서 라이선스를 발급받아야</strong>
            DRM 컨트롤러가 복호화하여 사용할 수 있다. "키 관리와 라이선스 발급을 담당하는 요소는?" → <strong>클리어링 하우스</strong>.
          </div>

          <h3>3-4. DRM 기술 요소 (실기 단골)</h3>
          <table>
            <tr><th>기술 요소</th><th>내용</th></tr>
            <tr><td><strong>암호화 (Encryption)</strong></td><td>콘텐츠와 라이선스를 암호화하고 전자 서명을 하는 기술 (PKI, 대칭·비대칭 암호화)</td></tr>
            <tr><td><strong>키 관리 (Key Management)</strong></td><td>콘텐츠를 암호화한 <strong>키를 저장·배포·관리</strong>하는 기술</td></tr>
            <tr><td><strong>암호화 파일 생성 (Packager)</strong></td><td>콘텐츠를 암호화된 콘텐츠(보안 컨테이너)로 생성하는 기술</td></tr>
            <tr><td><strong>식별 기술 (Identification)</strong></td><td>콘텐츠에 대한 식별 체계 표현 기술 (DOI, URI)</td></tr>
            <tr><td><strong>저작권 표현 (Right Expression)</strong></td><td>라이선스의 내용(이용 권한·조건)을 표현하는 기술 (XrML, ODRL)</td></tr>
            <tr><td><strong>정책 관리 (Policy Management)</strong></td><td>라이선스 발급·사용에 대한 정책 표현·관리 기술</td></tr>
            <tr><td><strong>크랙 방지 (Tamper Resistance)</strong></td><td>크랙(불법 복호화·변조)에 의한 콘텐츠 사용 방지 기술 (난독화, 코드 오브퓨스케이션)</td></tr>
            <tr><td><strong>인증 (Authentication)</strong></td><td>라이선스 발급·사용의 기준이 되는 <strong>사용자 인증</strong> 기술</td></tr>
          </table>

          <h3>3-5. 워터마킹 · 핑거프린팅 · 템퍼 프루핑</h3>
          <table>
            <tr><th>용어</th><th>정의</th></tr>
            <tr>
              <td><strong>워터마킹<br/>(Watermarking)</strong></td>
              <td>디지털 콘텐츠에 <strong>저작권자의 정보(로고 등)를 사람이 인지하지 못하게 삽입</strong>하여
              불법 복제 시 <strong>저작권자를 증명</strong>하는 기술 — 단골</td>
            </tr>
            <tr>
              <td><strong>핑거프린팅<br/>(Fingerprinting)</strong></td>
              <td>콘텐츠에 <strong>구매자(사용자)의 정보를 삽입</strong>하여 불법 유포 시
              <strong>최초 유포자를 추적</strong>할 수 있게 하는 기술 (워터마킹과 삽입 대상이 다름)</td>
            </tr>
            <tr>
              <td><strong>템퍼 프루핑<br/>(Tamper Proofing)</strong></td>
              <td>소프트웨어의 <strong>위·변조를 감지하면 스스로 동작을 중단·오작동</strong>하게 만들어 변조를 막는 기술</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            워터마킹은 <strong>저작권자 정보</strong>, 핑거프린팅은 <strong>구매자 정보</strong>를 삽입한다.
            "누구의 정보를 넣는가"로 두 용어를 구분하는 문제가 나온다.
          </div>
        </section>

        {/* ===================== 4. 매뉴얼 작성 ===================== */}
        <section id="manual">
          <h2>4. 매뉴얼 작성 — 설치 매뉴얼 · 사용자 매뉴얼</h2>
          <p class="sub">설치 매뉴얼과 사용자 매뉴얼의 구성 항목, 작성 순서, "사용자 기준 작성" 원칙을 정리한다.</p>

          <h3>4-1. 설치 매뉴얼</h3>
          <p>설치 매뉴얼은 <strong>사용자 기준</strong>으로 작성하며, <strong>설치 시작부터 완료까지의 전 과정을
          빠짐없이 순서대로</strong> 설명한다. 설치 과정의 <strong>각 화면을 단계별로 캡처</strong>하여 상세히 설명하고,
          설치 중 발생할 수 있는 <strong>이상(오류) 상황과 주의사항</strong>을 함께 기록한다.</p>
          <table>
            <tr><th>구성 항목</th><th>내용</th></tr>
            <tr><td><strong>개요</strong></td><td>설치 매뉴얼의 전체 내용과 설치 방법·과정 요약</td></tr>
            <tr><td><strong>서문</strong></td><td>문서 이력, 설치 매뉴얼의 주석(주의·참고 사항), 설치 도구의 구성, 설치 환경 체크 항목</td></tr>
            <tr><td><strong>기본 사항</strong></td><td>제품 소프트웨어 개요, 설치 관련 파일, 설치 아이콘, 프로그램 삭제 방법, 관련 추가 정보</td></tr>
            <tr><td><strong>설치 화면 및 절차</strong></td><td>설치 단계별 화면 캡처와 이상(오류) 발생 시 대처 방법</td></tr>
          </table>
          <p><strong>작성 순서</strong>: 기능 식별 → UI 분류 → 설치 파일 · 백업 파일 확인 →
          Uninstall(삭제) 절차 확인 → 이상 유형(Case) 확인 → 최종 매뉴얼 적용.</p>

          <h3>4-2. 사용자 매뉴얼</h3>
          <p>사용자 매뉴얼은 <strong>제품 소프트웨어를 사용하는 방법</strong>을 사용자 관점에서 기술한 문서로,
          <strong>사용에 필요한 모든 절차·환경·능력·주의사항</strong>을 포함한다.
          컴포넌트 명세서·구현 설계서를 토대로 <strong>패키징 이후</strong> 작성한다.</p>
          <table>
            <tr><th>구성 항목</th><th>내용</th></tr>
            <tr><td><strong>개요</strong></td><td>매뉴얼 전체 내용과 주요 기능 요약</td></tr>
            <tr><td><strong>서문</strong></td><td>문서 이력, 사용자 매뉴얼의 주석, 기록 보관 안내</td></tr>
            <tr><td><strong>기본 사항</strong></td><td>SW 개요, 사용 환경(설치·실행 환경), 관리 방법, 모델·버전별 특이사항</td></tr>
            <tr><td><strong>사용자 화면과 UI</strong></td><td>주요 화면 구성과 조작 방법, 기능별 화면 설명</td></tr>
            <tr><td><strong>주요 기능 분류</strong></td><td>기능별 사용 방법 상세 설명</td></tr>
            <tr><td><strong>응용 프로그램 · 설정</strong></td><td>연동 응용 프로그램, 환경 설정(Setting) 방법</td></tr>
            <tr><td><strong>장치 연동 · 네트워크 환경</strong></td><td>하드웨어 장치 연동, 네트워크 관련 설정과 주의사항</td></tr>
            <tr><td><strong>고객 지원 · FAQ</strong></td><td>문의 방법, 자주 묻는 질문</td></tr>
          </table>
          <p><strong>작성 순서</strong>: 기능 식별 → 사용자 화면 분류 → 사용자 환경 파일 확인 →
          초기화 절차 확인 → 이상 유형 확인 → 최종 매뉴얼 적용.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            두 매뉴얼 모두 작성 순서가 <strong>"기능 식별"로 시작해 "최종 매뉴얼 적용"으로 끝난다</strong>.
            설치 매뉴얼은 중간에 <strong>설치·백업 파일 확인과 Uninstall 절차 확인</strong>이 들어간다는 점이 차이다.
          </div>
        </section>

        {/* ===================== 5. 국제 표준 제품 품질 ===================== */}
        <section id="quality">
          <h2>5. 국제 표준 제품 품질 — ISO/IEC 9126 · 25000</h2>
          <p class="sub">ISO/IEC 9126의 6가지 품질 특성(부특성 포함)과 이를 통합한 ISO/IEC 25000(SQuaRE)이 실기 단골이다.</p>

          <h3>5-1. ISO/IEC 9126 — 소프트웨어 품질 특성 6가지 (실기 단골)</h3>
          <table>
            <tr><th>품질 특성</th><th>의미</th><th>부특성</th></tr>
            <tr>
              <td><strong>기능성<br/>(Functionality)</strong></td>
              <td>요구된 기능을 <strong>정확하게 제공</strong>하는 능력</td>
              <td>적합성 · 정확성 · 상호운용성 · 보안성 · 준수성</td>
            </tr>
            <tr>
              <td><strong>신뢰성<br/>(Reliability)</strong></td>
              <td>규정된 조건에서 <strong>일정 수준의 성능을 유지</strong>하는 능력 (오류 없이 수행)</td>
              <td>성숙성 · 고장 허용성 · 회복성</td>
            </tr>
            <tr>
              <td><strong>사용성<br/>(Usability)</strong></td>
              <td>사용자가 <strong>쉽게 이해하고 배우고 사용</strong>할 수 있는 능력</td>
              <td>이해성 · 학습성 · 운용성 · 친밀성</td>
            </tr>
            <tr>
              <td><strong>효율성<br/>(Efficiency)</strong></td>
              <td>투입된 <strong>자원 대비 적절한 성능</strong>을 제공하는 능력</td>
              <td>시간 효율성 · 자원 효율성</td>
            </tr>
            <tr>
              <td><strong>유지보수성<br/>(Maintainability)</strong></td>
              <td>요구 변경·환경 변화에 따라 <strong>쉽게 수정·개선</strong>될 수 있는 능력</td>
              <td>분석성 · 변경성 · 안정성 · 시험성</td>
            </tr>
            <tr>
              <td><strong>이식성<br/>(Portability)</strong></td>
              <td><strong>다른 환경(플랫폼)으로 쉽게 옮겨</strong> 적용될 수 있는 능력</td>
              <td>적용성 · 설치성 · 대체성 · 공존성</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            여섯 특성 앞 글자 — <strong>기 · 신 · 사 · 효 · 유 · 이</strong>.
            "설명 → 특성 이름 쓰기" 형태로 출제되므로 각 특성의 정의 문장을 정확히 기억하자.
          </div>

          <h3>5-2. 관련 국제 표준</h3>
          <table>
            <tr><th>표준</th><th>내용</th></tr>
            <tr>
              <td><strong>ISO/IEC 14598</strong></td>
              <td>소프트웨어 <strong>품질 평가 절차</strong>(프로세스) 표준.
              평가의 <strong>반복성 · 재현성 · 공정성 · 객관성</strong>을 요구한다</td>
            </tr>
            <tr>
              <td><strong>ISO/IEC 12119</strong></td>
              <td><strong>패키지 소프트웨어</strong>의 품질 요구사항과 테스트에 관한 표준 (제품 설명서 · 사용자 문서 · 프로그램 및 데이터 평가)</td>
            </tr>
            <tr>
              <td><strong>ISO/IEC 25000<br/>(SQuaRE)</strong></td>
              <td>기존 <strong>9126(품질 특성) + 14598(평가 절차) + 12119(패키지 SW)</strong> 등을
              <strong>통합</strong>한 소프트웨어 품질 평가 통합 표준 — 단골.
              구성: <strong>2500n</strong> 품질 관리, <strong>2501n</strong> 품질 모델,
              <strong>2502n</strong> 품질 측정, <strong>2503n</strong> 품질 요구, <strong>2504n</strong> 품질 평가</td>
            </tr>
          </table>
          <p>참고로 <strong>McCall 모델</strong>은 품질을 사용 · 수정 · 전이 3가지 관점(11개 품질 요인)으로,
          <strong>Boehm 모델</strong>은 사용 용이성 등 상위 특성 계층으로 정의한 고전적 품질 모델이다.</p>
        </section>

        {/* ===================== 6. 버전 관리 ===================== */}
        <section id="version">
          <h2>6. 버전 관리 — 용어 · 도구 방식 · 빌드 자동화</h2>
          <p class="sub">형상 관리 용어(체크인 · 체크아웃 · 커밋 등)의 "설명 → 용어" 문제와 버전 관리 도구 방식 3가지 구분, Jenkins · Gradle이 단골이다.</p>

          <h3>6-1. 버전 표기 — 유의적 버전 (Semantic Versioning)</h3>
          <p>버전은 보통 <strong>Major.Minor.Patch</strong> 형태로 표기한다 (예: <code>2.4.1</code>).</p>
          <ul>
            <li><strong>Major</strong> — 기존과 <strong>호환되지 않는 대규모 변경</strong> 시 증가</li>
            <li><strong>Minor</strong> — 호환을 유지하면서 <strong>기능이 추가</strong>될 때 증가</li>
            <li><strong>Patch</strong> — 호환을 유지하는 <strong>버그 수정</strong> 시 증가</li>
          </ul>

          <h3>6-2. 형상 관리와 버전 관리</h3>
          <p><strong>형상 관리(SCM)</strong>는 소프트웨어 개발 전 과정에서 산출물의 <strong>변경 사항을 관리</strong>하는
          활동(형상 식별 → 버전 관리 → 형상 통제 → 형상 감사 → 형상 기록)이며,
          <strong>버전 관리는 형상 관리의 일부</strong>로 산출물의 버전(변경 이력)을 관리하는 활동이다.</p>

          <h3>6-3. 버전 관리 주요 용어 (설명 → 용어 단골)</h3>
          <table>
            <tr><th>용어</th><th>설명</th></tr>
            <tr><td><strong>저장소 (Repository)</strong></td><td>최신 버전의 파일들과 변경 이력이 <strong>저장되는 공간</strong></td></tr>
            <tr><td><strong>체크아웃 (Check-Out)</strong></td><td>저장소에서 파일을 <strong>받아 오는(내려받는)</strong> 것</td></tr>
            <tr><td><strong>체크인 (Check-In)</strong></td><td>수정한 파일을 <strong>저장소에 새 버전으로 갱신</strong>하는 것</td></tr>
            <tr><td><strong>커밋 (Commit)</strong></td><td>체크인 시 <strong>충돌(Conflict)이 있으면 알림을 받고 수정(diff 도구 등)한 뒤 갱신을 완료</strong>하는 것</td></tr>
            <tr><td><strong>가져오기 (Import)</strong></td><td>비어 있는 저장소에 <strong>처음으로 파일을 복사(등록)</strong>하는 것</td></tr>
            <tr><td><strong>롤백 (Rollback)</strong></td><td>오류 등이 발생했을 때 <strong>이전 버전(리비전)으로 되돌리는</strong> 것</td></tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            방향으로 구분하자 — <strong>체크아웃은 저장소 → 내 PC(받기)</strong>,
            <strong>체크인은 내 PC → 저장소(올리기)</strong>. 반대로 쓰면 오답이다.
          </div>

          <h3>6-4. 버전 관리 도구 방식 3가지 (구분 단골)</h3>
          <table>
            <tr><th>방식</th><th>특징</th><th>대표 도구</th></tr>
            <tr>
              <td><strong>공유 폴더 방식</strong></td>
              <td>매일 개발 완료 파일을 약속된 <strong>공유 폴더에 복사</strong>하고 담당자가 검증하는 방식</td>
              <td>RCS, SCCS</td>
            </tr>
            <tr>
              <td><strong>클라이언트 · 서버 방식</strong></td>
              <td><strong>중앙 서버 하나</strong>에 저장소를 두고 개발자들이 접속해 작업.
              서버 장애 시 협업이 중단된다</td>
              <td>SVN(Subversion), CVS</td>
            </tr>
            <tr>
              <td><strong>분산 저장소 방식</strong></td>
              <td>원격 저장소와 별개로 <strong>개발자마다 로컬 저장소(복제본)</strong>를 가져,
              오프라인 커밋이 가능하고 원격 장애에도 안전하다</td>
              <td>Git, Bitkeeper</td>
            </tr>
          </table>

          <h3>6-5. 빌드 자동화 도구 (실기 단골)</h3>
          <table>
            <tr><th>도구</th><th>특징</th></tr>
            <tr>
              <td><strong>Jenkins</strong></td>
              <td>Java 기반 오픈 소스 <strong>CI(지속적 통합) 서버</strong> 도구.
              서블릿 컨테이너에서 실행되며, SVN · Git 등 형상 관리 도구와 연동해
              <strong>커밋을 감지하여 자동으로 빌드·테스트</strong>를 수행한다. 웹 GUI 제공, 풍부한 플러그인</td>
            </tr>
            <tr>
              <td><strong>Gradle</strong></td>
              <td><strong>Groovy 기반 DSL(도메인 특화 언어)</strong>로 빌드 스크립트를 작성하는 빌드 자동화 도구.
              <strong>안드로이드 공식 빌드 도구</strong>이며, 작업을 <strong>태스크(Task) 단위</strong>로 실행하고
              변경된 부분만 빌드하는 점진적(Incremental) 빌드를 지원한다</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "CI 서버" 하면 <strong>Jenkins</strong>, "Groovy 기반 · 안드로이드" 하면 <strong>Gradle</strong>.
            두 키워드 매칭이 실기 단답형으로 나온다.
          </div>
        </section>

        {/* ===================== 7. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 유형(단답형 · 괄호 채우기 · 순서 나열)으로 구성했다. 먼저 풀어 보고 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 DRM 구성 요소를 쓰시오.</p>
            <pre>{`디지털 저작권 관리(DRM)에서 키 관리 및 라이선스 발급을
담당하며, 저작권료의 정산·분배를 수행하는 요소`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>클리어링 하우스 (Clearing House)<br/>
                <span class="label">해설: </span>"키 관리 · 라이선스 발급"이라는 키워드가 나오면 답은 클리어링 하우스다. 실기 최다 빈출 용어.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음은 DRM 구성 요소에 대한 설명이다. 괄호 ①, ②에 들어갈 용어를 쓰시오.</p>
            <pre>{`· ( ① ) : 콘텐츠를 메타데이터와 함께 배포 가능한 형태로 묶어
           암호화하는 프로그램
· ( ② ) : 콘텐츠 원본을 안전하게 유통하기 위한 전자적 보안 장치`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 패키저(Packager), ② 보안 컨테이너(Security Container)<br/>
                <span class="label">해설: </span>패키저는 "묶어 암호화하는 프로그램", 보안 컨테이너는 그 결과물인 "전자적 보안 장치(포장)"다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">디지털 콘텐츠에 저작권자의 정보를 삽입하는 기술과, 구매자의 정보를 삽입하여
            불법 유포자를 추적하는 기술을 각각 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>저작권자 정보 삽입 — 워터마킹(Watermarking), 구매자 정보 삽입 — 핑거프린팅(Fingerprinting)<br/>
                <span class="label">해설: </span>삽입 대상이 저작권자 정보면 워터마킹(저작권 증명), 구매자 정보면 핑거프린팅(유포자 추적)이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 제품 소프트웨어 패키징 수행 단계를 순서대로 나열하시오. (기호로 작성)</p>
            <pre>{`ㄱ. 빌드 진행          ㄴ. 기능 식별
ㄷ. 패키징 변경 개선    ㄹ. 모듈화
ㅁ. 사용자 환경 분석    ㅂ. 패키징 및 적용 시험`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ㄴ → ㄹ → ㄱ → ㅁ → ㅂ → ㄷ<br/>
                <span class="label">해설: </span>기능 식별 → 모듈화 → 빌드 진행 → 사용자 환경 분석 → 패키징 및 적용 시험 → 패키징 변경 개선.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">릴리스 노트 작성 항목 중, 회사와 표준 제품에 관한 법적 책임의 한계를 고지하는 항목의 이름을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>면책 조항<br/>
                <span class="label">해설: </span>"법적 책임의 한계 고지" 키워드는 면책 조항이다. 헤더(머리말) — 문서명·제품명·버전·날짜 — 와 함께 항목명이 자주 출제된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음은 ISO/IEC 9126의 품질 특성에 대한 설명이다. 괄호 ①, ②에 들어갈 특성 이름을 쓰시오.</p>
            <pre>{`· ( ① ) : 소프트웨어가 다른 환경(플랫폼)으로 쉽게 옮겨져
           적용될 수 있는 능력
· ( ② ) : 규정된 조건에서 오류 없이 일정 수준의 성능을
           유지하는 능력`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 이식성(Portability), ② 신뢰성(Reliability)<br/>
                <span class="label">해설: </span>"다른 환경으로 이동"은 이식성, "오류 없이 성능 유지"는 신뢰성. 6가지 특성(기능성·신뢰성·사용성·효율성·유지보수성·이식성)의 정의를 모두 외워 두자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">기존 소프트웨어 품질 관련 국제 표준인 ISO/IEC 9126, 14598, 12119 등을 통합한
            소프트웨어 품질 평가 통합 표준의 명칭을 쓰시오. (표준 번호 또는 별칭)</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ISO/IEC 25000 (SQuaRE)<br/>
                <span class="label">해설: </span>SQuaRE(Software product Quality Requirements and Evaluation)는 2500n 품질 관리, 2501n 품질 모델, 2502n 품질 측정, 2503n 품질 요구, 2504n 품질 평가로 구성된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">버전 관리에서, 수정한 파일을 저장소에 새 버전으로 갱신하는 것과
            저장소에서 파일을 받아 오는 것을 각각 무엇이라 하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>저장소에 갱신 — 체크인(Check-In), 저장소에서 받아 오기 — 체크아웃(Check-Out)<br/>
                <span class="label">해설: </span>방향으로 구분한다. 내 PC → 저장소(올리기)는 체크인, 저장소 → 내 PC(받기)는 체크아웃이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 버전 관리 도구를 방식에 따라 분류하시오. (공유 폴더 방식 / 클라이언트 · 서버 방식 / 분산 저장소 방식)</p>
            <pre>{`RCS,  SVN,  Git`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>RCS — 공유 폴더 방식, SVN — 클라이언트 · 서버 방식, Git — 분산 저장소 방식<br/>
                <span class="label">해설: </span>공유 폴더(RCS, SCCS), 중앙 서버 하나(SVN, CVS), 개발자마다 로컬 저장소 복제(Git, Bitkeeper)로 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 설명에 해당하는 빌드 자동화 도구의 이름을 각각 쓰시오.</p>
            <pre>{`· ( ① ) : Java 기반 오픈 소스 CI(지속적 통합) 서버 도구로,
           형상 관리 도구와 연동해 커밋을 감지하면 자동으로
           빌드·테스트를 수행한다.
· ( ② ) : Groovy 기반 DSL로 빌드 스크립트를 작성하며,
           안드로이드의 공식 빌드 도구로 태스크 단위로 실행된다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① Jenkins(젠킨스), ② Gradle(그레이들)<br/>
                <span class="label">해설: </span>"CI 서버"는 Jenkins, "Groovy 기반 · 안드로이드 공식"은 Gradle. 두 도구의 키워드 매칭이 단골이다.
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">DRM</span>
            <span class="kw">클리어링 하우스</span>
            <span class="kw">보안 컨테이너</span>
            <span class="kw">워터마킹</span>
            <span class="kw">핑거프린팅</span>
            <span class="kw">템퍼 프루핑</span>
            <span class="kw">릴리스 노트</span>
            <span class="kw">ISO/IEC 9126</span>
            <span class="kw">ISO/IEC 25000 (SQuaRE)</span>
            <span class="kw">유의적 버전</span>
            <span class="kw">체크인 · 체크아웃</span>
            <span class="kw">SVN · Git</span>
            <span class="kw">Jenkins</span>
            <span class="kw">Gradle</span>
          </p>
        </section>

        <footer>제품 소프트웨어 패키징 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
