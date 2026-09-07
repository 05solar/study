import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './security-impl.css'

export default defineComponent({
  name: 'SecurityImplPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>SW 개발 보안 구현 · 시스템 보안 · 보안 용어</h1>
          <p>정보처리기사 실기 대비 학습 문서. 인증 기법 4분류 → 접근 통제(DAC·MAC·RBAC) → 시스템 보안 구현(계정·로그·세션) →
          보안 솔루션 총정리 → 네트워크·애플리케이션 공격 용어 → 보안 테스트(SAST·DAST·퍼징) →
          비즈니스 연속성 계획(BCP·RTO·RPO·DR 센터) 순서로, "설명을 읽고 용어를 쓰는" 실기 최다 빈출 유형을 표·도면·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 패킷·요청의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#auth" onClick={(e) => scrollToId(e, 'auth')}>인증(Authentication) 기법 4분류</a></li>
            <li><a href="#access" onClick={(e) => scrollToId(e, 'access')}>접근 통제 — DAC · MAC · RBAC</a></li>
            <li><a href="#system" onClick={(e) => scrollToId(e, 'system')}>시스템 보안 구현 — 계정 · 로그 · 세션</a></li>
            <li><a href="#solutions" onClick={(e) => scrollToId(e, 'solutions')}>보안 솔루션 총정리</a></li>
            <li><a href="#netattack" onClick={(e) => scrollToId(e, 'netattack')}>네트워크 공격 용어</a></li>
            <li><a href="#appattack" onClick={(e) => scrollToId(e, 'appattack')}>애플리케이션 · 기타 공격 용어</a></li>
            <li><a href="#sectest" onClick={(e) => scrollToId(e, 'sectest')}>보안 테스트와 결함 관리</a></li>
            <li><a href="#bcp" onClick={(e) => scrollToId(e, 'bcp')}>비즈니스 연속성 계획(BCP)</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 인증 기법 ===================== */}
        <section id="auth">
          <h2>1. 인증(Authentication) 기법 4분류</h2>
          <p class="sub">인증은 시스템에 접근하려는 사용자가 "본인이 맞는지"를 검증하는 절차다. 실기에서는 "다음 설명은 어떤 인증 방식인가"를 묻는다 — 4분류의 이름과 예시를 짝지어 암기한다.</p>

          <h3>1-1. 인증 4분류 (설명 → 분류 단골)</h3>
          <table>
            <tr><th>분류</th><th>근거(영문 표현)</th><th>설명</th><th>예시</th></tr>
            <tr>
              <td><strong>지식 기반 인증</strong></td>
              <td>Something you <strong>know</strong></td>
              <td>사용자가 <strong>알고 있는 정보</strong>로 인증. 구현이 쉽지만 유출·추측에 약하다</td>
              <td>패스워드, PIN, 보안 질문(질의응답)</td>
            </tr>
            <tr>
              <td><strong>소유 기반 인증</strong></td>
              <td>Something you <strong>have</strong></td>
              <td>사용자가 <strong>가지고 있는 물건</strong>으로 인증. 분실·도난 위험이 있다</td>
              <td>보안 토큰, OTP 기기, 스마트카드, 공동인증서, 휴대폰(SMS 인증)</td>
            </tr>
            <tr>
              <td><strong>생체 기반 인증</strong></td>
              <td>Something you <strong>are</strong></td>
              <td>사용자의 <strong>고유한 신체 특징</strong>으로 인증. 위조가 어렵지만 비용이 크고 변경이 불가능하다</td>
              <td>지문, 홍채, 망막, 정맥, 얼굴</td>
            </tr>
            <tr>
              <td><strong>행위 기반 인증</strong></td>
              <td>Something you <strong>do</strong></td>
              <td>사용자의 <strong>행동 패턴</strong>으로 인증</td>
              <td>서명(필체), 걸음걸이, 키 입력(타이핑) 패턴, 음성</td>
            </tr>
          </table>

          <h3>1-2. 다중 요소 인증(MFA)과 i-PIN</h3>
          <p><strong>다중 요소 인증(MFA, Multi-Factor Authentication)</strong>은 위 4분류 중
          <strong>서로 다른 분류의 인증 수단을 2개 이상 조합</strong>하는 방식이다.
          예: 패스워드(지식) + OTP(소유). 같은 분류를 두 번 쓰는 것(패스워드 + PIN)은 다중 요소가 아니다.</p>
          <p><strong>i-PIN(아이핀)</strong>은 인터넷에서 <strong>주민등록번호를 대신</strong>해 본인 확인에 사용하는
          인터넷 개인 식별 번호다. 주민등록번호 유출 위험을 줄이기 위한 지식 기반 수단이다.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "알고 있는 것 · 가지고 있는 것 · 신체 특징 · 행동" — 설명 속 키워드만 찾으면 분류가 바로 나온다.
            OTP는 <strong>소유 기반</strong>, 지문은 <strong>생체 기반</strong>, 서명·걸음걸이는 <strong>행위 기반</strong>이다.
          </div>
        </section>

        {/* ===================== 2. 접근 통제 ===================== */}
        <section id="access">
          <h2>2. 접근 통제 — DAC · MAC · RBAC</h2>
          <p class="sub">접근 통제는 인증된 사용자에게 "무엇을 얼마나 허용할지"를 결정하는 절차다. 세 가지 접근 통제 정책의 구분은 실기 최단골 — 권한을 <strong>누가</strong> 부여하는지가 결정적 차이다.</p>

          <h3>2-1. 접근 통제 3요소</h3>
          <table>
            <tr><th>요소</th><th>영문</th><th>의미</th></tr>
            <tr><td><strong>식별</strong></td><td>Identification</td><td>자신이 누구인지 시스템에 <strong>밝히는</strong> 행위 (ID 입력)</td></tr>
            <tr><td><strong>인증</strong></td><td>Authentication</td><td>주장한 신원이 <strong>맞는지 검증</strong>하는 행위 (패스워드·OTP·생체)</td></tr>
            <tr><td><strong>인가</strong></td><td>Authorization</td><td>검증된 사용자에게 <strong>권한을 부여</strong>하는 행위 (읽기·쓰기 허용)</td></tr>
          </table>

          <h3>2-2. 접근 통제 정책 3가지 비교 (실기 최단골)</h3>
          <table>
            <tr><th>정책</th><th>이름</th><th>권한 부여 주체</th><th>특징</th></tr>
            <tr>
              <td><strong>DAC</strong></td>
              <td>임의적 접근 통제<br/>(Discretionary Access Control)</td>
              <td>데이터의 <strong>소유자</strong></td>
              <td>소유자가 자신의 판단(임의)으로 다른 사용자에게 권한을 부여·회수한다.
              신분(Identity) 기반. 예: 유닉스 파일 권한, SQL의 GRANT/REVOKE</td>
            </tr>
            <tr>
              <td><strong>MAC</strong></td>
              <td>강제적 접근 통제<br/>(Mandatory Access Control)</td>
              <td><strong>시스템(관리자가 정한 규칙)</strong></td>
              <td>주체와 객체에 부여된 <strong>보안 등급(레이블)</strong>을 비교해 시스템이 강제로 접근을 결정한다.
              군사·정부 기관처럼 기밀성이 중요한 곳에 사용</td>
            </tr>
            <tr>
              <td><strong>RBAC</strong></td>
              <td>역할 기반 접근 통제<br/>(Role Based Access Control)</td>
              <td><strong>중앙 관리자(역할에 부여)</strong></td>
              <td>사용자 개인이 아니라 <strong>역할(직무)</strong>에 권한을 부여하고, 사용자에게 역할을 할당한다.
              인사 이동이 잦은 기업 환경에 적합 (DAC와 MAC의 단점 보완)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            "소유자가 결정" → <strong>DAC</strong> · "보안 등급 레이블로 시스템이 강제" → <strong>MAC</strong> ·
            "직책·역할에 따라" → <strong>RBAC</strong>.
          </div>

          <h3>2-3. 접근 통제 보안 모델 (단골)</h3>
          <table>
            <tr><th>모델</th><th>목표</th><th>규칙</th></tr>
            <tr>
              <td><strong>벨-라파둘라 모델<br/>(Bell-LaPadula, BLP)</strong></td>
              <td><strong>기밀성</strong> (군사용, 최초의 수학적 모델)</td>
              <td><strong>No Read Up</strong>: 자기보다 높은 등급의 문서를 읽을 수 없다<br/>
              <strong>No Write Down</strong>: 자기보다 낮은 등급으로 쓸 수 없다 (기밀 유출 방지)</td>
            </tr>
            <tr>
              <td><strong>비바 모델<br/>(Biba)</strong></td>
              <td><strong>무결성</strong> (BLP를 보완)</td>
              <td><strong>No Read Down</strong>: 낮은 무결성 등급의 데이터를 읽을 수 없다<br/>
              <strong>No Write Up</strong>: 높은 무결성 등급의 데이터에 쓸 수 없다 (데이터 오염 방지)</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            벨-라파둘라는 <strong>기밀성</strong>, 비바는 <strong>무결성</strong> — 목표부터 반대이고 규칙 방향도 반대다.
            "No Read Up / No Write Down"이 나오면 벨-라파둘라를 쓴다.
          </div>
        </section>

        {/* ===================== 3. 시스템 보안 구현 ===================== */}
        <section id="system">
          <h2>3. 시스템 보안 구현 — 계정 · 로그 · 세션</h2>
          <p class="sub">운영 체제 수준의 보안 구현 항목. 특히 리눅스 로그 파일 4종(utmp·wtmp·btmp·lastlog)은 "설명 → 파일명"으로 출제된 이력이 있다.</p>

          <h3>3-1. 계정과 패스워드 정책</h3>
          <ul>
            <li>불필요한 <strong>기본 계정·게스트 계정은 삭제 또는 잠금</strong>하고, 관리자 계정 이름은 변경한다.</li>
            <li>패스워드는 <strong>최소 길이·복잡도(영문 대소문자, 숫자, 특수문자 조합)</strong>를 강제하고 <strong>주기적 변경</strong>을 요구한다.</li>
            <li>일정 횟수 이상 로그인 실패 시 <strong>계정 잠금(임계값)</strong>을 설정한다 — 무차별 대입 공격 방어.</li>
            <li>퇴사자·미사용 계정은 즉시 회수하고, 권한은 업무에 필요한 <strong>최소 권한(Least Privilege)</strong>만 부여한다.</li>
          </ul>

          <h3>3-2. 리눅스 주요 로그 파일 (출제 이력)</h3>
          <table>
            <tr><th>로그 파일</th><th>기록 내용</th><th>확인 명령</th></tr>
            <tr><td><strong>utmp</strong></td><td><strong>현재 로그인한 사용자</strong>의 상태 정보</td><td><code>w</code>, <code>who</code></td></tr>
            <tr><td><strong>wtmp</strong></td><td>사용자의 <strong>로그인 · 로그아웃 이력</strong>, 시스템 부팅 기록 (누적)</td><td><code>last</code></td></tr>
            <tr><td><strong>btmp</strong></td><td><strong>로그인 실패</strong>(bad login) 기록 — 침입 시도 분석에 사용</td><td><code>lastb</code></td></tr>
            <tr><td><strong>lastlog</strong></td><td>각 계정의 <strong>가장 최근(마지막) 로그인</strong> 시각</td><td><code>lastlog</code></td></tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            u(현재) · w(이력 누적) · b(실패, bad) · lastlog(마지막). "로그인 실패 기록"이 나오면 <strong>btmp</strong>다.
          </div>

          <h3>3-3. 윈도 이벤트 로그와 세션 관리</h3>
          <p>윈도는 <strong>이벤트 뷰어(Event Viewer)</strong>로 로그를 관리하며 크게
          <strong>응용 프로그램 로그 · 보안 로그(로그온 성공/실패, 계정 관리) · 시스템 로그</strong>로 나뉜다.
          감사 정책(Audit Policy)을 설정해야 보안 이벤트가 기록된다.</p>
          <ul>
            <li><strong>세션 타임아웃</strong>: 일정 시간 활동이 없으면 세션을 자동 종료한다.</li>
            <li><strong>세션 ID 관리</strong>: 로그인 성공 시 세션 ID를 <strong>재발급</strong>하고, 예측 불가능한 값을 사용한다 — 세션 하이재킹 방어.</li>
            <li><strong>동시 세션 제한</strong>: 동일 계정의 중복 로그인을 제한한다.</li>
          </ul>

          <h3>3-4. 취약점 점검</h3>
          <p>운영 중인 시스템은 <strong>정기적인 취약점 스캔</strong>(포트·서비스·패치 상태 점검)과
          <strong>보안 패치 적용</strong>, 불필요한 서비스·포트 차단, 설정 파일 권한 점검을 반복 수행한다.
          점검 결과는 위험도에 따라 우선순위를 정해 조치하고 이력을 관리한다.</p>
        </section>

        {/* ===================== 4. 보안 솔루션 총정리 ===================== */}
        <section id="solutions">
          <h2>4. 보안 솔루션 총정리</h2>
          <p class="sub">실기 최다 빈출 영역 — "다음 설명에 해당하는 보안 솔루션을 쓰시오" 유형이다. 각 솔루션의 한 줄 정의와 네트워크에서의 배치 위치를 함께 기억한다.</p>

          <h3>4-1. 주요 보안 솔루션 한 줄 정의 (설명 → 용어 최다 빈출)</h3>
          <table>
            <tr><th>솔루션</th><th>정의</th></tr>
            <tr><td><strong>방화벽 (Firewall)</strong></td>
              <td>내부망과 외부망 사이에서 <strong>패킷 필터링</strong> 규칙(IP·포트)에 따라 트래픽을 허용·차단하는 접근 제어 장비</td></tr>
            <tr><td><strong>IDS (침입 탐지 시스템)</strong></td>
              <td>네트워크·시스템의 트래픽을 감시해 침입을 <strong>탐지하고 경보</strong>하는 시스템 (차단은 하지 않음)</td></tr>
            <tr><td><strong>IPS (침입 방지 시스템)</strong></td>
              <td>침입을 <strong>탐지 + 실시간 차단</strong>까지 수행하는 시스템 (트래픽 경로에 인라인 배치)</td></tr>
            <tr><td><strong>DMZ</strong></td>
              <td>외부망과 내부망 <strong>사이의 완충 지대</strong>. 웹·메일 등 외부 공개 서버를 두어 내부망 직접 노출을 막는다</td></tr>
            <tr><td><strong>VPN (가상 사설망)</strong></td>
              <td>공중망(인터넷)에 <strong>암호화된 터널</strong>을 만들어 전용선처럼 안전하게 통신하는 기술 (IPSec, SSL VPN)</td></tr>
            <tr><td><strong>NAC (네트워크 접근 제어)</strong></td>
              <td>내부망에 접속하는 <strong>단말(엔드포인트)의 보안 상태를 검사</strong>해 정책 위반 단말의 접속을 통제</td></tr>
            <tr><td><strong>ESM / SIEM</strong></td>
              <td>여러 보안 장비의 <strong>로그·이벤트를 통합 수집·상관 분석</strong>하는 통합 보안 관제 시스템
              (SIEM은 빅데이터 기반 분석·장기 보관까지 확장)</td></tr>
            <tr><td><strong>DLP (정보 유출 방지)</strong></td>
              <td>내부의 중요 정보가 <strong>외부로 유출되는 것을 감시·차단</strong>하는 솔루션 (메일·USB·메신저 통제)</td></tr>
            <tr><td><strong>WAF (웹 방화벽)</strong></td>
              <td><strong>웹 애플리케이션 공격</strong>(SQL 인젝션, XSS 등)을 전문으로 탐지·차단하는 방화벽</td></tr>
            <tr><td><strong>허니팟 (Honeypot)</strong></td>
              <td>공격자를 유인하기 위해 <strong>의도적으로 취약해 보이게 만든 미끼 시스템</strong>.
              공격 기법·정보를 수집하고 시간을 지연시킨다</td></tr>
            <tr><td><strong>프록시 (Proxy)</strong></td>
              <td>클라이언트를 <strong>대신하여</strong> 외부와 통신하는 중계 서버. 내부 IP 은닉, 캐싱, 접근 통제에 활용</td></tr>
          </table>

          <h3>4-2. IDS의 두 가지 탐지 방식 (구분 단골)</h3>
          <table>
            <tr><th>방식</th><th>원리</th><th>장점</th><th>단점</th></tr>
            <tr>
              <td><strong>오용 탐지<br/>(Misuse Detection)</strong></td>
              <td>이미 알려진 공격 패턴(<strong>시그니처</strong>)과 비교해 일치하면 탐지</td>
              <td>오탐(False Positive)이 적다</td>
              <td><strong>새로운(알려지지 않은) 공격 탐지 불가</strong></td>
            </tr>
            <tr>
              <td><strong>이상 탐지<br/>(Anomaly Detection)</strong></td>
              <td>정상 <strong>행위 프로파일</strong>을 학습해 두고, 통계적으로 벗어나는 행위를 탐지</td>
              <td><strong>제로데이 등 새로운 공격 탐지 가능</strong></td>
              <td>오탐이 많다</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            "시그니처 · 알려진 공격" → <strong>오용 탐지</strong> / "정상 행위 기준 · 새로운 공격" → <strong>이상 탐지</strong>.
          </div>

          <h3>4-3. 보안 솔루션 배치 구조</h3>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 360" role="img" aria-label="보안 솔루션 배치 구조도">
              {/* 외부 */}
              <rect class="boxsoft" x="30" y="110" width="120" height="60" />
              <text x="90" y="136" text-anchor="middle" class="strong">외부</text>
              <text x="90" y="156" text-anchor="middle" class="small">(인터넷)</text>
              {/* 방화벽 */}
              <rect class="boxdark" x="190" y="110" width="100" height="60" />
              <text x="240" y="136" text-anchor="middle" class="strong">방화벽</text>
              <text x="240" y="156" text-anchor="middle" class="small">패킷 필터링</text>
              {/* DMZ */}
              <rect class="boxsoft" x="330" y="40" width="240" height="280" />
              <text x="450" y="66" text-anchor="middle" class="strong">DMZ (완충 지대)</text>
              <rect class="box" x="355" y="85" width="190" height="42" />
              <text x="450" y="112" text-anchor="middle">웹 서버 · 메일 서버</text>
              <rect class="box" x="355" y="140" width="190" height="42" />
              <text x="450" y="160" text-anchor="middle">WAF (웹 방화벽)</text>
              <text x="450" y="177" text-anchor="middle" class="small">SQL 인젝션 · XSS 차단</text>
              <rect class="box" x="355" y="195" width="190" height="42" />
              <text x="450" y="215" text-anchor="middle">허니팟</text>
              <text x="450" y="232" text-anchor="middle" class="small">공격자 유인용 미끼</text>
              <rect class="box" x="355" y="250" width="190" height="42" />
              <text x="450" y="270" text-anchor="middle">IDS</text>
              <text x="450" y="287" text-anchor="middle" class="small">복사 트래픽 탐지 · 경보</text>
              {/* IPS */}
              <rect class="boxdark" x="620" y="110" width="90" height="60" />
              <text x="665" y="136" text-anchor="middle" class="strong">IPS</text>
              <text x="665" y="156" text-anchor="middle" class="small">탐지+차단</text>
              {/* 내부망 */}
              <rect class="boxsoft" x="750" y="40" width="120" height="280" />
              <text x="810" y="66" text-anchor="middle" class="strong">내부망</text>
              <text x="810" y="110" text-anchor="middle" class="small">업무 PC · 서버</text>
              <text x="810" y="160" text-anchor="middle" class="small">NAC (단말 통제)</text>
              <text x="810" y="210" text-anchor="middle" class="small">DLP (유출 방지)</text>
              <text x="810" y="260" text-anchor="middle" class="small">ESM · SIEM (로그 통합)</text>
              {/* 흐름 화살표 */}
              <line class="arrow" x1="150" y1="140" x2="186" y2="140" />
              <line class="arrow" x1="290" y1="140" x2="326" y2="140" />
              <line class="arrow" x1="570" y1="140" x2="616" y2="140" />
              <line class="arrow" x1="710" y1="140" x2="746" y2="140" />
              {/* VPN 터널 */}
              <path class="ret" d="M 90 180 L 90 340 L 810 340 L 810 324" stroke="currentColor" stroke-width="1.7" fill="none" marker-end="url(#ah)" />
              <text x="450" y="333" text-anchor="middle" class="small">VPN — 공중망 위 암호화 터널 (원격지 ↔ 내부망)</text>
            </svg>
            <figcaption>도면 1. 보안 솔루션 배치 구조 — 외부와 내부망 사이에 방화벽·DMZ·IPS를 두고, IDS는 트래픽을 복사해 탐지만 수행한다.</figcaption>
          </figure>
        </section>

        {/* ===================== 5. 네트워크 공격 용어 ===================== */}
        <section id="netattack">
          <h2>5. 네트워크 공격 용어</h2>
          <p class="sub">실기 최다 빈출 — "다음 설명에 해당하는 공격 기법을 쓰시오" 유형. 공격의 원리 키워드(핸드셰이크 악용, 브로드캐스트, 출발지=목적지 등)를 용어와 짝지어 암기한다.</p>

          <h3>5-1. DoS와 DDoS</h3>
          <p><strong>DoS(Denial of Service, 서비스 거부)</strong> 공격은 시스템 자원을 고갈시켜
          정상 사용자가 서비스를 이용하지 못하게 만드는 공격이다.
          <strong>DDoS(Distributed DoS, 분산 서비스 거부)</strong>는 악성코드에 감염된 다수의 <strong>좀비 PC(봇넷)</strong>가
          공격자의 명령(C&amp;C 서버)에 따라 동시에 한 대상을 공격하는 형태다.</p>

          <h3>5-2. 주요 DoS 계열 공격 (설명 → 공격명)</h3>
          <table>
            <tr><th>공격명</th><th>원리</th></tr>
            <tr><td><strong>SYN 플러딩<br/>(SYN Flooding)</strong></td>
              <td>TCP <strong>3-way 핸드셰이크를 악용</strong> — 위조된 IP로 SYN만 대량 전송하고 ACK를 보내지 않아
              서버의 연결 대기 큐(백로그)를 <strong>반개방(Half-Open) 연결</strong>로 가득 채우는 공격</td></tr>
            <tr><td><strong>스머핑<br/>(Smurfing)</strong></td>
              <td>출발지 IP를 피해자로 위조한 <strong>ICMP 요청을 브로드캐스트</strong>로 뿌려,
              네트워크 전체의 응답이 피해자에게 몰리게 하는 공격</td></tr>
            <tr><td><strong>죽음의 핑<br/>(Ping of Death)</strong></td>
              <td>규정 크기보다 <strong>비정상적으로 큰 ICMP 패킷</strong>을 보내 재조립 과정에서 시스템을 마비시키는 공격</td></tr>
            <tr><td><strong>티어드롭<br/>(Teardrop)</strong></td>
              <td>IP 단편화(Fragment)의 <strong>오프셋 값을 중첩·조작</strong>해 재조립 시 오류를 일으키는 공격</td></tr>
            <tr><td><strong>랜드 어택<br/>(Land Attack)</strong></td>
              <td><strong>출발지 IP와 목적지 IP를 동일하게(피해자 주소로) 위조</strong>한 패킷을 보내
              시스템이 자기 자신에게 응답을 반복하게 만드는 공격</td></tr>
            <tr><td><strong>UDP 플러딩<br/>(UDP Flooding)</strong></td>
              <td>대량의 UDP 패킷을 임의 포트로 전송해 대역폭과 자원을 소진시키는 공격</td></tr>
            <tr><td><strong>DRDoS<br/>(분산 반사 서비스 거부)</strong></td>
              <td>출발지 IP를 피해자로 위조한 요청을 다수의 정상 서버(<strong>반사체</strong>)에 보내,
              그 <strong>응답(증폭된 트래픽)</strong>이 피해자에게 몰리게 하는 공격 — 공격 근원지 추적이 어렵다</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330" role="img" aria-label="SYN 플러딩 공격 흐름">
              <rect class="box" x="60" y="30" width="180" height="48" />
              <text x="150" y="50" text-anchor="middle" class="strong">공격자</text>
              <text x="150" y="68" text-anchor="middle" class="small">출발지 IP 위조</text>
              <rect class="box" x="660" y="30" width="180" height="48" />
              <text x="750" y="50" text-anchor="middle" class="strong">서버</text>
              <text x="750" y="68" text-anchor="middle" class="small">연결 대기 큐(백로그)</text>
              <line class="life" x1="150" y1="78" x2="150" y2="245" />
              <line class="life" x1="750" y1="78" x2="750" y2="245" />
              <g class="msg" data-step="1">
                <line class="arrow" x1="150" y1="110" x2="746" y2="110" />
                <text x="450" y="102" text-anchor="middle">1. SYN 대량 전송 (위조된 IP)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="750" y1="155" x2="154" y2="155" />
                <text x="450" y="147" text-anchor="middle">2. SYN+ACK 응답 → 위조 IP라 도달하지 못함</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="150" y1="200" x2="746" y2="200" />
                <text x="450" y="192" text-anchor="middle">3. ACK 없이 SYN만 계속 반복 전송</text>
              </g>
              <g class="msg" data-step="4">
                <line class="blocked" x1="150" y1="240" x2="746" y2="240" />
                <text x="450" y="232" text-anchor="middle">4. 반개방(Half-Open) 연결 누적</text>
              </g>
              <line class="xmark" x1="440" y1="230" x2="460" y2="250" />
              <line class="xmark" x1="460" y1="230" x2="440" y2="250" />
              <rect class="boxdark" x="620" y="265" width="260" height="44" />
              <text x="750" y="285" text-anchor="middle" class="strong">백로그 큐 가득 참</text>
              <text x="750" y="303" text-anchor="middle" class="small">정상 사용자 연결 불가 = 서비스 거부</text>
            </svg>
            <figcaption>도면 2. SYN 플러딩 공격 흐름 — 3-way 핸드셰이크를 완성하지 않는 SYN을 대량 전송해 서버의 연결 대기 큐를 고갈시킨다.</figcaption>
          </figure>

          <h3>5-3. 도청 · 위장 계열 공격 (설명 → 공격명)</h3>
          <table>
            <tr><th>공격명</th><th>원리</th></tr>
            <tr><td><strong>스니핑<br/>(Sniffing)</strong></td>
              <td>네트워크를 지나는 패킷을 몰래 <strong>엿보는(도청)</strong> <strong>수동적</strong> 공격.
              데이터를 변조하지 않고 훔쳐보기만 한다</td></tr>
            <tr><td><strong>스푸핑<br/>(Spoofing)</strong></td>
              <td>자신을 다른 대상으로 <strong>위장</strong>하는 <strong>능동적</strong> 공격.
              위조 대상에 따라 <strong>ARP 스푸핑</strong>(MAC 주소 위조), <strong>IP 스푸핑</strong>(출발지 IP 위조),
              <strong>DNS 스푸핑</strong>(DNS 응답 위조로 가짜 사이트 유도)으로 나뉜다</td></tr>
            <tr><td><strong>세션 하이재킹<br/>(Session Hijacking)</strong></td>
              <td>인증이 끝난 <strong>정상 세션(세션 ID·시퀀스 번호)을 가로채</strong> 인증 절차 없이 시스템에 접근하는 공격</td></tr>
            <tr><td><strong>중간자 공격<br/>(MITM, Man-in-the-Middle)</strong></td>
              <td>통신하는 두 당사자 <strong>사이에 몰래 끼어들어</strong> 통신 내용을 도청·변조하는 공격</td></tr>
            <tr><td><strong>포트 스캐닝<br/>(Port Scanning)</strong></td>
              <td>대상 시스템의 <strong>열린 포트와 동작 중인 서비스를 탐색</strong>하는 공격 전 사전 정찰 행위</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            <strong>스니핑 = 도청(수동)</strong>, <strong>스푸핑 = 위장(능동)</strong> — 받침 하나 차이로 답이 갈린다.
            "몰래 엿본다"면 스니핑, "속여서 위장한다"면 스푸핑이다.
          </div>
        </section>

        {/* ===================== 6. 애플리케이션·기타 공격 용어 ===================== */}
        <section id="appattack">
          <h2>6. 애플리케이션 · 기타 공격 용어</h2>
          <p class="sub">사용자를 속이는 공격(피싱 계열), 악성코드, 패스워드 공격까지 — 역시 "설명 → 용어" 유형의 단골 출제 영역이다.</p>

          <h3>6-1. 피싱 계열 (사용자 기만 공격)</h3>
          <table>
            <tr><th>용어</th><th>정의</th></tr>
            <tr><td><strong>피싱 (Phishing)</strong></td>
              <td>신뢰할 수 있는 기관을 사칭한 <strong>가짜 메일·사이트</strong>로 개인정보·금융정보를 낚는 공격</td></tr>
            <tr><td><strong>스피어 피싱<br/>(Spear Phishing)</strong></td>
              <td>불특정 다수가 아닌 <strong>특정 개인·조직을 표적</strong>으로 맞춤 정보를 이용해 정교하게 속이는 피싱</td></tr>
            <tr><td><strong>파밍 (Pharming)</strong></td>
              <td><strong>DNS를 변조(탈취)</strong>해 사용자가 정상 주소를 입력해도 <strong>가짜 사이트로 접속</strong>되게 하는 공격</td></tr>
            <tr><td><strong>스미싱 (Smishing)</strong></td>
              <td><strong>SMS(문자 메시지)</strong>의 링크로 악성 앱 설치·정보 탈취를 유도하는 공격 (SMS + 피싱)</td></tr>
            <tr><td><strong>큐싱 (Qshing)</strong></td>
              <td><strong>QR 코드</strong>를 이용해 악성 사이트 접속·악성 앱 설치를 유도하는 공격 (QR + 피싱)</td></tr>
            <tr><td><strong>이블 트윈<br/>(Evil Twin)</strong></td>
              <td>정상 무선 AP와 <strong>같은 이름(SSID)의 가짜 Wi-Fi AP</strong>를 만들어 접속을 유도한 뒤 정보를 가로채는 공격</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            "정상 주소를 입력해도 가짜 사이트" → <strong>파밍(DNS 변조)</strong> / "문자 메시지 링크" → <strong>스미싱</strong> /
            "QR 코드" → <strong>큐싱</strong> / "가짜 Wi-Fi" → <strong>이블 트윈</strong>.
          </div>

          <h3>6-2. 악성코드와 침투 공격</h3>
          <table>
            <tr><th>용어</th><th>정의</th></tr>
            <tr><td><strong>랜섬웨어<br/>(Ransomware)</strong></td>
              <td>시스템의 파일을 <strong>암호화하여 사용 불능</strong>으로 만든 뒤 복구를 대가로 <strong>금전(몸값, Ransom)을 요구</strong>하는 악성코드</td></tr>
            <tr><td><strong>APT<br/>(지능형 지속 위협)</strong></td>
              <td>특정 조직을 표적으로 <strong>장기간에 걸쳐 은밀하고 지속적으로</strong> 다양한 기법을 동원해 침투·정보를 유출하는 공격
              (Advanced Persistent Threat)</td></tr>
            <tr><td><strong>제로데이 공격<br/>(Zero-Day Attack)</strong></td>
              <td>취약점이 공개되어 <strong>보안 패치가 나오기 전</strong>에 그 취약점을 악용하는 공격</td></tr>
            <tr><td><strong>백도어 (Backdoor)</strong></td>
              <td>정상적인 인증 절차를 <strong>우회해 몰래 드나들 수 있게 만든 비밀 통로</strong></td></tr>
            <tr><td><strong>루트킷 (Rootkit)</strong></td>
              <td>공격자가 시스템에 심어 <strong>침투 흔적과 악성 프로세스를 숨기고</strong> 관리자 권한을 유지하는 도구 모음</td></tr>
            <tr><td><strong>키로거 (Keylogger)</strong></td>
              <td>사용자의 <strong>키보드 입력을 몰래 기록</strong>해 계정·비밀번호 등을 탈취하는 프로그램</td></tr>
          </table>

          <h3>6-3. 트로이 목마 · 웜 · 바이러스 구분 (단골)</h3>
          <table>
            <tr><th>구분</th><th>자기 복제</th><th>다른 파일 감염</th><th>특징</th></tr>
            <tr><td><strong>바이러스 (Virus)</strong></td><td>한다</td><td><strong>한다</strong> (숙주 필요)</td>
              <td>다른 프로그램·파일에 <strong>기생</strong>하며, 감염 파일 실행 시 전파된다</td></tr>
            <tr><td><strong>웜 (Worm)</strong></td><td><strong>스스로 한다</strong></td><td>안 한다</td>
              <td>숙주 없이 <strong>네트워크를 통해 자기 자신을 복제·확산</strong>한다</td></tr>
            <tr><td><strong>트로이 목마<br/>(Trojan Horse)</strong></td><td>안 한다</td><td>안 한다</td>
              <td><strong>정상 프로그램으로 위장</strong>해 설치를 유도한 뒤 내부에서 악성 행위를 수행한다</td></tr>
          </table>

          <h3>6-4. 패스워드 공격과 기타 용어</h3>
          <table>
            <tr><th>용어</th><th>정의</th></tr>
            <tr><td><strong>무차별 대입 공격<br/>(Brute Force)</strong></td>
              <td>가능한 <strong>모든 문자 조합을 순서대로 대입</strong>해 패스워드를 알아내는 공격</td></tr>
            <tr><td><strong>사전 공격<br/>(Dictionary Attack)</strong></td>
              <td>자주 쓰이는 단어·패스워드 목록(<strong>사전</strong>)을 대입하는 공격</td></tr>
            <tr><td><strong>레인보우 테이블<br/>(Rainbow Table)</strong></td>
              <td>패스워드 후보의 <strong>해시값을 미리 계산해 둔 표</strong>로, 탈취한 해시에서 원문을 역추적하는 기법
              (대응: 솔트(Salt) 추가)</td></tr>
            <tr><td><strong>크리덴셜 스터핑<br/>(Credential Stuffing)</strong></td>
              <td>다른 곳에서 <strong>유출된 계정 정보(ID/PW)를 여러 사이트에 대입</strong>해 로그인해 보는 공격</td></tr>
            <tr><td><strong>사회공학<br/>(Social Engineering)</strong></td>
              <td>기술이 아니라 <strong>사람의 심리(신뢰·공포·호기심)를 이용</strong>해 정보를 빼내는 공격 기법 전반</td></tr>
            <tr><td><strong>다크데이터<br/>(Dark Data)</strong></td>
              <td>수집·저장만 되고 <strong>분석·활용되지 않은 채 방치된 데이터</strong> — 관리 사각지대라 유출 위험이 크다</td></tr>
            <tr><td><strong>블루버깅<br/>(Bluebugging)</strong></td>
              <td><strong>블루투스</strong> 취약점으로 기기를 원격 조종하여 통화·메시지 등 <strong>기능을 몰래 사용</strong>하는 공격</td></tr>
            <tr><td><strong>블루스나핑<br/>(Bluesnarfing)</strong></td>
              <td><strong>블루투스</strong> 취약점으로 기기 안의 <strong>연락처·일정 등 정보를 몰래 빼내는</strong> 공격</td></tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            블루투스 공격 구분(출제 이력): <strong>블루버깅 = 기기 조종</strong>, <strong>블루스나핑 = 정보 탈취</strong>.
            벨소리·메시지를 무단으로 보내 괴롭히는 것은 블루재킹(Bluejacking)이다.
          </div>
        </section>

        {/* ===================== 7. 보안 테스트와 결함 관리 ===================== */}
        <section id="sectest">
          <h2>7. 보안 테스트와 결함 관리</h2>
          <p class="sub">개발한 소프트웨어의 보안 약점을 찾는 테스트 기법. 정적 분석(SAST)과 동적 분석(DAST)의 구분이 단골이다.</p>

          <h3>7-1. SAST vs DAST (구분 단골)</h3>
          <table>
            <tr><th>구분</th><th>SAST (정적 분석)</th><th>DAST (동적 분석)</th></tr>
            <tr><td><strong>시점</strong></td><td>프로그램을 <strong>실행하지 않고</strong> 검사</td><td>프로그램을 <strong>실행하면서</strong> 검사</td></tr>
            <tr><td><strong>대상</strong></td><td><strong>소스 코드·바이너리</strong> 자체</td><td>동작 중인 애플리케이션의 <strong>입출력·반응</strong></td></tr>
            <tr><td><strong>발견 결함</strong></td><td>코딩 표준 위반, 버퍼 오버플로 가능성 등 코드 내부 약점</td><td>인젝션, 인증 우회 등 <strong>실행 환경에서 드러나는</strong> 취약점</td></tr>
            <tr><td><strong>적용 단계</strong></td><td>개발(구현) 단계부터 조기 적용 가능</td><td>테스트·운영 단계</td></tr>
          </table>

          <h3>7-2. 모의 침투 테스트와 퍼징</h3>
          <table>
            <tr><th>기법</th><th>정의</th></tr>
            <tr><td><strong>모의 침투 테스트<br/>(Penetration Test)</strong></td>
              <td>허가를 받은 침투 전문가가 <strong>실제 공격자의 관점과 기법으로 시스템에 침투를 시도</strong>해
              방어 체계의 취약점을 검증하는 테스트</td></tr>
            <tr><td><strong>퍼징<br/>(Fuzzing)</strong></td>
              <td><strong>무작위·비정상 데이터를 대량으로 입력</strong>해 프로그램의 충돌·오류·예외 처리 결함을 찾아내는
              동적 테스트 기법 (단골)</td></tr>
            <tr><td><strong>시큐어 코딩 점검</strong></td>
              <td>입력 데이터 검증, 보안 기능(인증·암호화), 에러 처리, 세션 통제 등 <strong>시큐어 코딩 가이드 준수 여부</strong>를
              소스 코드 수준에서 점검하는 활동</td></tr>
          </table>

          <h3>7-3. 보안 결함 관리 절차</h3>
          <p>발견한 보안 결함은 일반 결함과 마찬가지로 추적 가능한 절차로 관리한다.</p>
          <ol>
            <li><strong>결함 식별·등록</strong> — 테스트·점검에서 발견한 취약점을 결함 관리 시스템에 기록한다.</li>
            <li><strong>분류·심각도 평가</strong> — 취약점 유형과 위험도(심각도·발생 가능성)를 평가해 우선순위를 정한다.</li>
            <li><strong>조치(수정)</strong> — 우선순위에 따라 코드 수정·패치·설정 변경을 수행한다.</li>
            <li><strong>재검증(재테스트)</strong> — 조치 후 동일 취약점이 재현되지 않는지 확인하고 종료 처리한다.</li>
            <li><strong>이력 관리</strong> — 결함 통계·재발 여부를 분석해 시큐어 코딩 규칙과 프로세스에 반영한다.</li>
          </ol>
        </section>

        {/* ===================== 8. BCP ===================== */}
        <section id="bcp">
          <h2>8. 비즈니스 연속성 계획(BCP)</h2>
          <p class="sub">재해·재난이 발생해도 핵심 업무를 중단 없이 계속하기 위한 계획. RTO/RPO 구분과 DR 센터 4유형은 실기 최단골이다.</p>

          <h3>8-1. BCP와 BIA</h3>
          <p><strong>BCP(Business Continuity Plan, 비즈니스 연속성 계획)</strong>는 재해·장애 상황에서도
          <strong>핵심 업무의 연속성을 유지</strong>하기 위한 총체적 계획·절차·체계다.
          그 출발점인 <strong>BIA(Business Impact Analysis, 업무 영향 분석)</strong>는 장애·재해가
          <strong>업무에 미치는 영향과 손실을 분석·평가</strong>해 복구 우선순위와 목표(RTO·RPO)를 정하는 활동이다.
          <strong>DRP(Disaster Recovery Plan, 재해 복구 계획)</strong>는 재해 발생 시 IT 시스템을
          복구하는 구체적 절차로, BCP의 핵심 구성 요소다.</p>

          <h3>8-2. 핵심 복구 지표 (구분 — 최단골)</h3>
          <table>
            <tr><th>지표</th><th>이름</th><th>의미</th></tr>
            <tr><td><strong>RTO</strong></td><td>목표 복구 <strong>시간</strong><br/>(Recovery Time Objective)</td>
              <td>재해 발생 후 <strong>업무를 다시 가동하기까지 허용되는 최대 시간</strong> ("얼마나 빨리 복구할 것인가")</td></tr>
            <tr><td><strong>RPO</strong></td><td>목표 복구 <strong>시점</strong><br/>(Recovery Point Objective)</td>
              <td>재해 발생 시 <strong>감수할 수 있는 데이터 손실의 최대 허용 시점</strong> ("어느 시점의 데이터까지 복구할 것인가")</td></tr>
            <tr><td><strong>RSO</strong></td><td>목표 복구 <strong>범위</strong><br/>(Recovery Scope Objective)</td>
              <td>재해 시 <strong>어디까지(어떤 업무·시스템을) 복구할 것인가</strong>의 목표 범위</td></tr>
            <tr><td><strong>RCO</strong></td><td>목표 <strong>네트워크</strong> 복구<br/>(Recovery Communication Objective)</td>
              <td><strong>네트워크(통신)를 어느 수준까지 복구할 것인가</strong>의 목표</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            RTO의 T는 <strong>Time(시간)</strong>, RPO의 P는 <strong>Point(시점 = 데이터 손실 허용선)</strong>.
            "백업 주기를 결정하는 지표"는 <strong>RPO</strong>다.
          </div>

          <h3>8-3. DR(재해 복구) 센터 4유형 — 복구 시간 빠른 순 (최단골)</h3>
          <table>
            <tr><th>유형</th><th>구성</th><th>복구 소요 시간</th><th>비용</th></tr>
            <tr><td><strong>미러 사이트<br/>(Mirror Site)</strong></td>
              <td>주 센터와 <strong>동일한 시스템을 원격지에 구축해 동시에 운영</strong>(Active-Active). 실시간 동기 복제</td>
              <td><strong>즉시 (이론상 0)</strong></td><td>최고</td></tr>
            <tr><td><strong>핫 사이트<br/>(Hot Site)</strong></td>
              <td>동일한 시스템을 <strong>대기 상태(Standby)로 유지</strong>하다 재해 시 전환. 데이터는 실시간~근접 동기화</td>
              <td>수 시간 이내</td><td>높음</td></tr>
            <tr><td><strong>웜 사이트<br/>(Warm Site)</strong></td>
              <td><strong>중요 장비 일부만</strong> 원격지에 보유. 재해 시 나머지를 조달하고 백업으로 복구</td>
              <td>수 일 ~ 수 주</td><td>중간</td></tr>
            <tr><td><strong>콜드 사이트<br/>(Cold Site)</strong></td>
              <td><strong>공간(전원·통신 설비)만</strong> 확보. 재해 시 장비를 새로 들여와 설치·복구</td>
              <td>수 주 ~ 수 개월</td><td>최저</td></tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            복구 속도: <strong>미러 → 핫 → 웜 → 콜드</strong> 순으로 느려지고, 비용은 반대로 낮아진다.
            "즉시·동시 운영"은 미러, "대기 상태 유지"는 핫, "공간만 확보"는 콜드다.
          </div>
        </section>

        {/* ===================== 9. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>9. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 형식으로 구성했다. 답을 먼저 쓰고 "정답 보기"로 확인하자. 특히 설명을 읽고 공격·솔루션 용어를 쓰는 유형이 핵심이다.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 공격 기법을 쓰시오.</p>
            <pre>{`TCP 3-way 핸드셰이크 과정을 악용하는 공격으로, 공격자는 출발지 IP를
위조한 SYN 패킷만 대량으로 전송하고 마지막 ACK를 보내지 않는다.
그 결과 서버의 연결 대기 큐가 반개방(Half-Open) 연결로 가득 차
정상 사용자의 연결 요청을 처리하지 못하게 된다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>SYN 플러딩(SYN Flooding)<br/>
                <span class="label">해설: </span>"3-way 핸드셰이크 악용 + ACK 미전송 + 반개방 연결 누적"이 SYN 플러딩의 결정적 키워드다. 서버의 백로그 큐를 고갈시키는 DoS 공격이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 괄호 안에 들어갈 공격 용어를 각각 쓰시오.</p>
            <pre>{`- ( ① ): DNS를 변조하여 사용자가 정상 주소를 입력해도
          가짜 사이트로 접속되게 하는 공격
- ( ② ): 문자 메시지(SMS)의 링크를 통해 악성 앱 설치나
          개인정보 탈취를 유도하는 공격`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 파밍(Pharming), ② 스미싱(Smishing)<br/>
                <span class="label">해설: </span>파밍은 "정상 주소 입력 → 가짜 사이트"(DNS 변조)가 핵심이고, 스미싱은 SMS + 피싱의 합성어다. QR 코드를 이용하면 큐싱이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">특정 조직이나 기업을 표적으로 정하고, 장기간에 걸쳐 은밀하고 지속적으로
            다양한 공격 기법(스피어 피싱, 제로데이 등)을 동원해 내부에 침투한 뒤
            정보를 유출하는 공격을 무엇이라 하는지 쓰시오. (영문 약어 가능)</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>APT(Advanced Persistent Threat, 지능형 지속 위협)<br/>
                <span class="label">해설: </span>"특정 표적 + 장기간 + 지속적·은밀"이 APT의 3대 키워드다. 불특정 다수를 노리는 일반 악성코드 유포와 구분된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">감염된 시스템의 파일을 암호화하여 사용할 수 없게 만든 뒤,
            복구(복호화)를 대가로 금전을 요구하는 악성코드를 무엇이라 하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>랜섬웨어(Ransomware)<br/>
                <span class="label">해설: </span>Ransom(몸값) + Software의 합성어. "파일 암호화 + 금전 요구"가 결정적 키워드다. 예방책은 정기 백업(오프라인 보관)과 패치다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">공격자를 유인하기 위해 의도적으로 취약한 것처럼 꾸며 놓은 미끼 시스템으로,
            침입한 공격자의 행동과 공격 기법에 대한 정보를 수집하고 공격 시간을 지연시키는
            보안 솔루션을 무엇이라 하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>허니팟(Honeypot)<br/>
                <span class="label">해설: </span>"의도적으로 취약하게 만든 미끼"가 허니팟의 핵심 키워드다. 실제 서비스와 분리해 배치하며, 공격 정보 수집과 시간 지연이 목적이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 괄호 안에 들어갈 보안 솔루션 용어를 각각 쓰시오.</p>
            <pre>{`- ( ① ): 인터넷 같은 공중망에 암호화된 터널을 만들어
          전용선처럼 안전하게 통신할 수 있게 하는 가상 사설망 기술
- ( ② ): 여러 보안 장비와 서버의 로그·이벤트를 통합 수집하고
          빅데이터 기반으로 상관 분석하여 위협을 탐지하는 시스템`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① VPN(Virtual Private Network, 가상 사설망), ② SIEM(Security Information and Event Management)<br/>
                <span class="label">해설: </span>VPN은 "공중망 + 암호화 터널 + 전용선처럼", SIEM은 "로그 통합 수집 + 상관 분석"이 키워드다. SIEM은 ESM을 빅데이터 분석으로 확장한 개념이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명에 해당하는 접근 통제 정책을 각각 영문 약어로 쓰시오.</p>
            <pre>{`① 데이터 소유자가 자신의 판단에 따라 다른 사용자에게
   접근 권한을 부여하거나 회수하는 접근 통제
② 주체와 객체에 부여된 보안 등급(레이블)을 비교하여
   시스템이 강제적으로 접근 허용 여부를 결정하는 접근 통제
③ 사용자의 직무(역할)에 권한을 부여하고, 사용자에게
   역할을 할당하여 접근을 통제하는 방식`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① DAC(임의적 접근 통제), ② MAC(강제적 접근 통제), ③ RBAC(역할 기반 접근 통제)<br/>
                <span class="label">해설: </span>권한 부여 주체로 구분한다 — 소유자가 임의로 결정하면 DAC, 보안 등급으로 시스템이 강제하면 MAC, 역할 단위로 부여하면 RBAC.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">침입 탐지 시스템(IDS)의 탐지 방식 중, 이미 알려진 공격 패턴(시그니처)과
            비교하여 침입을 탐지하는 방식을 ( ① )(이)라 하고, 정상 행위 프로파일을 기준으로
            통계적으로 벗어나는 행위를 탐지하여 알려지지 않은 새로운 공격도 찾아낼 수 있는
            방식을 ( ② )(이)라 한다. 괄호 안에 들어갈 용어를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 오용 탐지(Misuse Detection), ② 이상 탐지(Anomaly Detection)<br/>
                <span class="label">해설: </span>오용 탐지는 시그니처 기반이라 오탐이 적지만 신종 공격을 못 잡고, 이상 탐지는 행위 기반이라 신종 공격을 잡을 수 있지만 오탐이 많다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">비즈니스 연속성 계획(BCP)의 핵심 지표에 대한 다음 설명에서
            괄호 안에 들어갈 용어를 각각 영문 약어로 쓰시오.</p>
            <pre>{`- ( ① ): 재해 발생 후 업무를 다시 가동하기까지 허용되는
          목표 복구 "시간"
- ( ② ): 재해 발생 시 감수할 수 있는 데이터 손실의 최대 허용
          기준이 되는 목표 복구 "시점"`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① RTO(Recovery Time Objective), ② RPO(Recovery Point Objective)<br/>
                <span class="label">해설: </span>T는 Time(복구 시간), P는 Point(데이터 손실 허용 시점). 백업 주기를 결정하는 지표는 RPO다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">재해 복구(DR) 센터 유형에 대한 다음 설명에서 괄호 안에 들어갈 용어를 각각 쓰시오.</p>
            <pre>{`- ( ① ) 사이트: 주 센터와 동일한 시스템을 대기 상태(Standby)로
  유지하다가 재해 발생 시 전환하여 수 시간 이내에 복구하는 유형
- ( ② ) 사이트: 전원·통신 설비 등 공간만 확보해 두고 재해 발생 시
  장비를 새로 도입하여 복구하는, 비용이 가장 낮고 복구가 가장 느린 유형`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 핫(Hot) 사이트, ② 콜드(Cold) 사이트<br/>
                <span class="label">해설: </span>복구 속도 순서: 미러(동시 운영, 즉시) → 핫(대기, 수 시간) → 웜(일부 장비, 수 일~수 주) → 콜드(공간만, 수 주~수 개월).
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">OWASP Top 10</span>
            <span class="kw">시큐어 코딩 가이드</span>
            <span class="kw">CC (공통 평가 기준)</span>
            <span class="kw">ISMS-P</span>
            <span class="kw">CVE · CVSS</span>
            <span class="kw">IPSec · SSL VPN</span>
            <span class="kw">사이버 킬 체인</span>
            <span class="kw">디지털 포렌식</span>
            <span class="kw">솔트(Salt)와 키 스트레칭</span>
            <span class="kw">망 분리 · 망연계</span>
          </p>
        </section>

        <footer>소프트웨어 개발 보안 구현과 보안 용어 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
