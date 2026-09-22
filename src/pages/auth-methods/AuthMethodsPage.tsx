import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../shared/ArrowDefs'
import { useFlowAnimation } from '../../shared/useFlowAnimation'
import { scrollToId } from '../../shared/scroll'
import './auth-methods.css'

export default defineComponent({
  name: 'AuthMethodsPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>인증(Authentication) 방법 총정리</h1>
          <p>인증은 <strong>“이 사용자가 누구인지”</strong>를 확인하는 과정입니다. 지식·소유·생체·행동 4대 요소부터
          비밀번호·세션·토큰·JWT·OTP·패스키·OAuth·SSO·mTLS·IoT까지, 실무에서 쓰이는 인증 방식 전부를<br/>
          도면과 흐름 애니메이션으로 하나씩 정리하고, 마지막에 전체를 한 화면에서 비교합니다.<br/>
          <span>각 도면의 파란 점은 데이터의 이동을 나타내며, 진행 중인 단계가 진하게 강조됩니다. 자동으로 반복 재생됩니다.</span></p>
        </header>

        <div class="box">
          <span class="tag-line">먼저 짚고 갈 것</span><br/>
          <strong>인증(Authentication)</strong>은 “이 사용자가 본인이 맞는가?”를 확인하는 일이고,
          <strong>인가(Authorization)</strong>는 “이 사용자가 관리자 페이지에 접근할 권한이 있는가?”를 따지는 일입니다.
          <code>JWT</code>·<code>OAuth</code>·<code>세션</code>·<code>쿠키</code>는 자주 혼동되지만 같은 종류의 기술이 아닙니다 —
          이 문서 마지막의 <a href="#compare" onClick={(e) => scrollToId(e, 'compare')}>종합 비교</a>에서 정리합니다.
        </div>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#concept" onClick={(e) => scrollToId(e, 'concept')}>인증 vs 인가 · 4대 인증 요소</a></li>
            <li><a href="#knowledge" onClick={(e) => scrollToId(e, 'knowledge')}>지식 기반 — 비밀번호 저장</a></li>
            <li><a href="#possession" onClick={(e) => scrollToId(e, 'possession')}>소유 기반 인증</a></li>
            <li><a href="#biometric" onClick={(e) => scrollToId(e, 'biometric')}>생체 기반 인증</a></li>
            <li><a href="#behavior" onClick={(e) => scrollToId(e, 'behavior')}>행동 기반 인증</a></li>
            <li><a href="#idpw" onClick={(e) => scrollToId(e, 'idpw')}>아이디·비밀번호 인증</a></li>
            <li><a href="#session" onClick={(e) => scrollToId(e, 'session')}>세션 기반 인증</a></li>
            <li><a href="#token" onClick={(e) => scrollToId(e, 'token')}>토큰 기반 인증</a></li>
            <li><a href="#jwt" onClick={(e) => scrollToId(e, 'jwt')}>JWT</a></li>
            <li><a href="#otp" onClick={(e) => scrollToId(e, 'otp')}>OTP (SMS·이메일·TOTP·HOTP)</a></li>
            <li><a href="#magiclink" onClick={(e) => scrollToId(e, 'magiclink')}>매직 링크</a></li>
            <li><a href="#passkey" onClick={(e) => scrollToId(e, 'passkey')}>패스키 · WebAuthn</a></li>
            <li><a href="#mfa" onClick={(e) => scrollToId(e, 'mfa')}>다중요소 인증(MFA)</a></li>
            <li><a href="#social" onClick={(e) => scrollToId(e, 'social')}>소셜 로그인</a></li>
            <li><a href="#oauth" onClick={(e) => scrollToId(e, 'oauth')}>OAuth 2.0</a></li>
            <li><a href="#oidc" onClick={(e) => scrollToId(e, 'oidc')}>OpenID Connect</a></li>
            <li><a href="#saml" onClick={(e) => scrollToId(e, 'saml')}>SAML</a></li>
            <li><a href="#sso" onClick={(e) => scrollToId(e, 'sso')}>SSO</a></li>
            <li><a href="#ldap" onClick={(e) => scrollToId(e, 'ldap')}>LDAP</a></li>
            <li><a href="#kerberos" onClick={(e) => scrollToId(e, 'kerberos')}>Kerberos</a></li>
            <li><a href="#cert" onClick={(e) => scrollToId(e, 'cert')}>인증서 기반 인증</a></li>
            <li><a href="#mtls" onClick={(e) => scrollToId(e, 'mtls')}>mTLS</a></li>
            <li><a href="#apikey" onClick={(e) => scrollToId(e, 'apikey')}>API Key</a></li>
            <li><a href="#hmac" onClick={(e) => scrollToId(e, 'hmac')}>HMAC 서명 인증</a></li>
            <li><a href="#ssh" onClick={(e) => scrollToId(e, 'ssh')}>SSH 키 인증</a></li>
            <li><a href="#device" onClick={(e) => scrollToId(e, 'device')}>모바일 앱 · 기기 인증</a></li>
            <li><a href="#push" onClick={(e) => scrollToId(e, 'push')}>푸시 인증</a></li>
            <li><a href="#qr" onClick={(e) => scrollToId(e, 'qr')}>QR 코드 인증</a></li>
            <li><a href="#adaptive" onClick={(e) => scrollToId(e, 'adaptive')}>위험 기반·적응형 인증</a></li>
            <li><a href="#continuous" onClick={(e) => scrollToId(e, 'continuous')}>연속 인증(Step-up)</a></li>
            <li><a href="#guest" onClick={(e) => scrollToId(e, 'guest')}>익명·게스트 인증</a></li>
            <li><a href="#httpbasic" onClick={(e) => scrollToId(e, 'httpbasic')}>HTTP Basic · Digest</a></li>
            <li><a href="#windows" onClick={(e) => scrollToId(e, 'windows')}>Windows 통합 인증</a></li>
            <li><a href="#iot" onClick={(e) => scrollToId(e, 'iot')}>IoT 인증</a></li>
            <li><a href="#compare" onClick={(e) => scrollToId(e, 'compare')}>종합 비교</a></li>
            <li><a href="#checklist" onClick={(e) => scrollToId(e, 'checklist')}>최소 보안 체크리스트</a></li>
          </ol>
        </nav>

        {/* ============================================================ 1 */}
        <section id="concept">
          <h2>1. 인증 vs 인가와 4대 인증 요소</h2>
          <p class="sub">인증은 “너 누구야?”, 인가는 “너 이거 해도 돼?”. 그리고 인증의 근거는 크게 네 가지 요소로 나뉜다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 200" role="img" aria-label="인증과 인가의 2단계 관문 도면">
              <rect class="box" x="30" y="60" width="140" height="60"/>
              <text x="100" y="86" text-anchor="middle" class="strong">사용자</text>
              <text x="100" y="106" text-anchor="middle" class="small">요청을 보냄</text>

              <rect class="box" x="255" y="60" width="180" height="60"/>
              <text x="345" y="86" text-anchor="middle" class="strong">인증 관문</text>
              <text x="345" y="106" text-anchor="middle" class="small">"너 누구야?" (401)</text>

              <rect class="box" x="520" y="60" width="180" height="60"/>
              <text x="610" y="86" text-anchor="middle" class="strong">인가 관문</text>
              <text x="610" y="106" text-anchor="middle" class="small">"권한 있어?" (403)</text>

              <rect class="box" x="770" y="60" width="110" height="60"/>
              <text x="825" y="86" text-anchor="middle" class="strong">자원</text>
              <text x="825" y="106" text-anchor="middle" class="small">API / 페이지</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="170" y1="90" x2="249" y2="90"/>
                <text x="210" y="50" text-anchor="middle" class="small">1. 로그인</text>
                <text x="210" y="150" text-anchor="middle" class="small">누구인지 증명</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="435" y1="90" x2="514" y2="90"/>
                <text x="477" y="50" text-anchor="middle" class="small">2. 신원 확인 통과</text>
                <text x="477" y="150" text-anchor="middle" class="small">"회원 42번이군"</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="700" y1="90" x2="764" y2="90"/>
                <text x="733" y="50" text-anchor="middle" class="small">3. 권한 확인 통과</text>
                <text x="733" y="150" text-anchor="middle" class="small">"ADMIN 맞음"</text>
              </g>
            </svg>
            <figcaption>도면 1. 요청은 인증 관문(누구인가)과 인가 관문(권한이 있는가)을 차례로 통과해야 자원에 도달한다.</figcaption>
          </figure>

          <h3>1-1. 인증의 4대 요소</h3>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 210" role="img" aria-label="인증 4대 요소 도면">
              <rect class="box" x="20" y="40" width="200" height="130"/>
              <text x="120" y="70" text-anchor="middle" class="strong">지식 기반</text>
              <text x="120" y="94" text-anchor="middle" class="small">알고 있는 것</text>
              <text x="120" y="120" text-anchor="middle" class="small">비밀번호 · PIN</text>
              <text x="120" y="140" text-anchor="middle" class="small">보안 질문 · 패턴</text>

              <rect class="box" x="240" y="40" width="200" height="130"/>
              <text x="340" y="70" text-anchor="middle" class="strong">소유 기반</text>
              <text x="340" y="94" text-anchor="middle" class="small">가지고 있는 것</text>
              <text x="340" y="120" text-anchor="middle" class="small">스마트폰 · OTP기기</text>
              <text x="340" y="140" text-anchor="middle" class="small">보안키 · 인증앱</text>

              <rect class="box" x="460" y="40" width="200" height="130"/>
              <text x="560" y="70" text-anchor="middle" class="strong">생체 기반</text>
              <text x="560" y="94" text-anchor="middle" class="small">신체 특징</text>
              <text x="560" y="120" text-anchor="middle" class="small">지문 · 얼굴 · 홍채</text>
              <text x="560" y="140" text-anchor="middle" class="small">음성 · 정맥</text>

              <rect class="box" x="680" y="40" width="200" height="130"/>
              <text x="780" y="70" text-anchor="middle" class="strong">행동 기반</text>
              <text x="780" y="94" text-anchor="middle" class="small">행동 패턴</text>
              <text x="780" y="120" text-anchor="middle" class="small">타이핑 · 위치</text>
              <text x="780" y="140" text-anchor="middle" class="small">접속 시간 · 습관</text>
            </svg>
            <figcaption>도면 2. 인증 요소 4분류. 서로 다른 요소를 2개 이상 조합하면 다중요소 인증(MFA)이 된다.</figcaption>
          </figure>
          <p>서로 다른 <strong>종류</strong>의 요소를 2개 이상 결합하면 강해진다(13장 MFA). 같은 종류끼리(비밀번호+보안질문=둘 다 지식)는 진정한 MFA가 아니다.</p>
        </section>

        {/* ============================================================ 2 */}
        <section id="knowledge">
          <h2>2. 지식 기반 인증 — 비밀번호는 그대로 저장하지 않는다</h2>
          <p class="sub">가장 익숙하지만 탈취·재사용·피싱·무차별 대입에 취약하다. 핵심은 “털려도 안전하게” 저장하는 것.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 230" role="img" aria-label="비밀번호 단방향 해시 도면">
              <rect class="box" x="30" y="60" width="210" height="80"/>
              <text x="135" y="90" text-anchor="middle" class="strong">비밀번호 + Salt</text>
              <text x="135" y="112" text-anchor="middle" class="small">"pw123" + "x9f2…"</text>
              <text x="135" y="128" text-anchor="middle" class="small">(사용자마다 다른 랜덤값)</text>

              <rect class="box" x="350" y="60" width="180" height="80"/>
              <text x="440" y="92" text-anchor="middle" class="strong">Argon2id / bcrypt</text>
              <text x="440" y="115" text-anchor="middle" class="small">일부러 느린 해시 함수</text>

              <rect class="box" x="650" y="60" width="220" height="80"/>
              <text x="760" y="92" text-anchor="middle" class="strong">DB에 저장</text>
              <text x="760" y="115" text-anchor="middle" class="small">$argon2id$…해시값만</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="240" y1="100" x2="344" y2="100"/>
                <text x="292" y="50" text-anchor="middle" class="small">1. 입력</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="530" y1="100" x2="644" y2="100"/>
                <text x="587" y="50" text-anchor="middle" class="small">2. 해시 계산 (순방향: 쉬움)</text>
              </g>
              <g class="static">
                <path class="blocked" d="M 700 165 C 550 210 350 210 200 165" marker-end="url(#ah)"/>
                <line class="xmark" x1="438" y1="180" x2="462" y2="204"/>
                <line class="xmark" x1="462" y1="180" x2="438" y2="204"/>
                <text x="450" y="226" text-anchor="middle" class="small">역방향 계산 불가 — 해시값에서 비밀번호를 되돌릴 수 없다 (단방향)</text>
              </g>
            </svg>
            <figcaption>도면 3. 로그인 검증은 “입력값을 같은 방식으로 해시해서 저장값과 비교”하는 것이지, 해시를 푸는 것이 아니다.</figcaption>
          </figure>

          <ul>
            <li><strong>Salt(솔트):</strong> 사용자마다 다른 랜덤값을 붙여 해시. 같은 비밀번호라도 저장값이 달라져 레인보우 테이블을 무력화한다.</li>
            <li><strong>느린 해시:</strong> 무차별 대입을 늦춘다. 권장 우선순위 <strong>Argon2id → bcrypt → scrypt → PBKDF2</strong>.</li>
          </ul>
          <div class="box deny">
            <span class="tag-line">금지</span><br/>
            평문 저장, <code>MD5</code>·<code>SHA-1</code>·단순 <code>SHA-256</code>을 비밀번호 저장에 사용, 솔트 없이 해싱,
            비밀번호를 이메일로 발송(재설정은 만료되는 일회용 링크로), 로그에 비밀번호 출력.
          </div>
        </section>

        {/* ============================================================ 3 */}
        <section id="possession">
          <h2>3. 소유 기반 인증 — 가지고 있는 것으로 증명</h2>
          <p class="sub">스마트폰·OTP 생성기·보안카드·하드웨어 보안키·이메일 계정 등 “내가 소유한 것”을 근거로 삼는다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 210" role="img" aria-label="소유 기반 인증 도면">
              <rect class="box" x="40" y="70" width="200" height="80"/>
              <text x="140" y="100" text-anchor="middle" class="strong">서버</text>
              <text x="140" y="122" text-anchor="middle" class="small">로그인 시도 감지</text>

              <rect class="box" x="360" y="70" width="200" height="80"/>
              <text x="460" y="100" text-anchor="middle" class="strong">소유 기기</text>
              <text x="460" y="122" text-anchor="middle" class="small">스마트폰 · 보안키</text>

              <rect class="box" x="680" y="70" width="190" height="80"/>
              <text x="775" y="100" text-anchor="middle" class="strong">사용자</text>
              <text x="775" y="122" text-anchor="middle" class="small">기기를 보유</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="240" y1="110" x2="354" y2="110"/>
                <text x="297" y="55" text-anchor="middle" class="small">1. 소유 증명 요구</text>
                <text x="297" y="185" text-anchor="middle" class="small">(코드/서명 요청)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="560" y1="110" x2="674" y2="110"/>
                <text x="617" y="55" text-anchor="middle" class="small">2. 기기가 응답</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="674" y1="135" x2="246" y2="135"/>
                <text x="450" y="200" text-anchor="middle" class="small">3. 응답값을 서버가 확인 → “기기를 실제로 가지고 있다”</text>
              </g>
            </svg>
            <figcaption>도면 4. 소유 기반 인증 — 서버가 특정 기기만 만들 수 있는 값(OTP·서명)을 요구하고, 그 응답으로 소유를 증명한다.</figcaption>
          </figure>
          <p>비밀번호보다 안전하지만 <strong>기기 분실·이메일 계정 탈취</strong>에 대비한 복구 절차가 필요하다. 구체적 구현은 10장(OTP)·12장(패스키)·27장(푸시)에서 다룬다.</p>
        </section>

        {/* ============================================================ 4 */}
        <section id="biometric">
          <h2>4. 생체 기반 인증 — 지문·얼굴은 서버로 보내지 않는다</h2>
          <p class="sub">지문·얼굴·홍채·음성·정맥. 실제 웹서비스는 생체정보를 서버가 직접 받지 않고, 기기 안에서만 사용한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="생체 인증 로컬 검증 도면">
              <rect class="box" x="55" y="14" width="200" height="36"/>
              <text x="155" y="38" text-anchor="middle" class="strong">사용자 신체</text>
              <rect class="box" x="360" y="14" width="200" height="36"/>
              <text x="460" y="38" text-anchor="middle" class="strong">기기(스마트폰/PC)</text>
              <rect class="box" x="665" y="14" width="200" height="36"/>
              <text x="765" y="38" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="155" y1="50" x2="155" y2="285"/>
              <line class="life" x1="460" y1="50" x2="460" y2="285"/>
              <line class="life" x1="765" y1="50" x2="765" y2="285"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="155" y1="95" x2="454" y2="95"/>
                <text x="300" y="86" text-anchor="middle" class="small">1. 지문/얼굴 인식 (기기 안에서만)</text>
              </g>
              <g class="msg" data-step="2">
                <path class="arrow" d="M 460 125 C 560 125 560 170 466 170"/>
                <text x="575" y="150" text-anchor="start" class="small">2. 본인 확인되면 저장된 개인키 사용 허용</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="460" y1="210" x2="759" y2="210"/>
                <text x="610" y="201" text-anchor="middle" class="small">3. 개인키로 서명한 값 전송 (생체정보 아님)</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="765" y1="255" x2="466" y2="255"/>
                <text x="615" y="246" text-anchor="middle" class="small">4. 공개키로 서명 검증 → 로그인</text>
              </g>
            </svg>
            <figcaption>도면 5. Face ID·지문 자체는 서버로 가지 않는다. 생체인증은 “기기 안 개인키 사용을 허가”하는 스위치일 뿐이고, 서버는 서명만 검증한다(패스키와 동일 원리).</figcaption>
          </figure>
          <p>따라서 서버 DB가 유출돼도 생체정보나 개인키는 노출되지 않는다. 이 구조가 12장 <strong>패스키·WebAuthn</strong>의 핵심이다.</p>
        </section>

        {/* ============================================================ 5 */}
        <section id="behavior">
          <h2>5. 행동 기반 인증 — 평소와 다른가?</h2>
          <p class="sub">키보드 입력 속도·마우스 움직임·접속 위치/시간·기기 특성·거래 패턴을 학습해 본인 여부를 추정한다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250" role="img" aria-label="행동 기반 인증 신호 도면">
              <rect class="boxsoft" x="30" y="30" width="200" height="40"/>
              <text x="130" y="55" text-anchor="middle" class="small">타이핑 리듬</text>
              <rect class="boxsoft" x="30" y="80" width="200" height="40"/>
              <text x="130" y="105" text-anchor="middle" class="small">마우스 움직임</text>
              <rect class="boxsoft" x="30" y="130" width="200" height="40"/>
              <text x="130" y="155" text-anchor="middle" class="small">접속 위치 / 시간</text>
              <rect class="boxsoft" x="30" y="180" width="200" height="40"/>
              <text x="130" y="205" text-anchor="middle" class="small">기기 특성 / 거래 패턴</text>

              <rect class="boxdark" x="360" y="90" width="200" height="70"/>
              <text x="460" y="120" text-anchor="middle" class="strong ondark">위험도 계산</text>
              <text x="460" y="142" text-anchor="middle" class="small">평소 프로필과 비교</text>

              <rect class="box" x="690" y="55" width="190" height="55"/>
              <text x="785" y="80" text-anchor="middle" class="small">정상 → 그대로 통과</text>
              <text x="785" y="100" text-anchor="middle" class="small"></text>
              <rect class="box" x="690" y="140" width="190" height="55"/>
              <text x="785" y="165" text-anchor="middle" class="small">이상 → 추가 인증</text>
              <text x="785" y="185" text-anchor="middle" class="small">요구 / 차단</text>

              <line class="arrow" x1="230" y1="50" x2="356" y2="110"/>
              <line class="arrow" x1="230" y1="100" x2="356" y2="120"/>
              <line class="arrow" x1="230" y1="150" x2="356" y2="130"/>
              <line class="arrow" x1="230" y1="200" x2="356" y2="140"/>
              <line class="arrow" x1="560" y1="115" x2="686" y2="85"/>
              <line class="arrow" x1="560" y1="135" x2="686" y2="165"/>
            </svg>
            <figcaption>도면 6. 행동 신호를 모아 위험도를 계산한다. 보통 단독 인증이 아니라 <strong>이상 접속 탐지·추가 인증 트리거</strong>로 쓰인다(29장 적응형 인증과 연결).</figcaption>
          </figure>
        </section>

        {/* ============================================================ 6 */}
        <section id="idpw">
          <h2>6. 아이디·비밀번호 인증</h2>
          <p class="sub">가장 일반적인 방식. 조회 → 해시 비교 → 세션/토큰 발급의 순서로 동작한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="아이디 비밀번호 로그인 흐름 도면">
              <rect class="box" x="95" y="14" width="170" height="36"/>
              <text x="180" y="38" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="380" y="14" width="170" height="36"/>
              <text x="465" y="38" text-anchor="middle" class="strong">서버</text>
              <rect class="box" x="665" y="14" width="180" height="36"/>
              <text x="755" y="38" text-anchor="middle" class="strong">DB (해시 저장)</text>
              <line class="life" x1="180" y1="50" x2="180" y2="285"/>
              <line class="life" x1="465" y1="50" x2="465" y2="285"/>
              <line class="life" x1="755" y1="50" x2="755" y2="285"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="180" y1="95" x2="459" y2="95"/>
                <text x="320" y="86" text-anchor="middle" class="small">1. ID / PW 입력 (HTTPS)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="465" y1="140" x2="749" y2="140"/>
                <text x="610" y="131" text-anchor="middle" class="small">2. 사용자 조회</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="755" y1="185" x2="471" y2="185"/>
                <text x="610" y="176" text-anchor="middle" class="small">3. 저장된 해시 반환</text>
              </g>
              <g class="msg" data-step="4">
                <path class="arrow" d="M 465 215 C 555 215 555 250 471 250"/>
                <text x="575" y="238" text-anchor="start" class="small">4. 입력값 해시 후 비교</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="465" y1="278" x2="186" y2="278"/>
                <text x="320" y="269" text-anchor="middle" class="small">5. 성공 → 세션/토큰 발급</text>
              </g>
            </svg>
            <figcaption>도면 7. 로그인 흐름. 실패 메시지는 “아이디 또는 비밀번호가 올바르지 않습니다”로 통일해 가입 여부가 드러나지 않게 한다.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">필수 보안</span><br/>
            HTTPS · 비밀번호 해싱 · 로그인 횟수/IP 속도 제한 · 동일 오류 메시지 · 로그인 기록 · 유출 비밀번호 차단 ·
            재설정 토큰 만료 · 관리자 계정 MFA.
          </div>
        </section>

        {/* ============================================================ 7 */}
        <section id="session">
          <h2>7. 세션 기반 인증 — 서버가 상태를 기억한다</h2>
          <p class="sub">로그인 성공 후 서버가 인증 상태를 저장하고, 브라우저는 의미 없는 Session ID만 쿠키로 갖는다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 420" role="img" aria-label="세션 방식 순서 도면">
              <rect class="box" x="115" y="14" width="170" height="36"/>
              <text x="200" y="38" text-anchor="middle" class="strong">브라우저</text>
              <rect class="box" x="395" y="14" width="170" height="36"/>
              <text x="480" y="38" text-anchor="middle" class="strong">서버</text>
              <rect class="box" x="645" y="14" width="190" height="36"/>
              <text x="740" y="38" text-anchor="middle" class="strong">세션 저장소 (Redis)</text>
              <line class="life" x1="200" y1="50" x2="200" y2="405"/>
              <line class="life" x1="480" y1="50" x2="480" y2="405"/>
              <line class="life" x1="740" y1="50" x2="740" y2="405"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="200" y1="95" x2="474" y2="95"/>
                <text x="340" y="86" text-anchor="middle">1. ID / PW 로그인</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="480" y1="140" x2="734" y2="140"/>
                <text x="610" y="131" text-anchor="middle">{'2. 세션 저장 { sid: abc, user: 42 }'}</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="480" y1="185" x2="206" y2="185"/>
                <text x="340" y="176" text-anchor="middle">3. Set-Cookie: SESSION=abc</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="200" y1="230" x2="474" y2="230"/>
                <text x="340" y="221" text-anchor="middle">4. 요청 (쿠키 자동 첨부)</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1="480" y1="275" x2="734" y2="275"/>
                <text x="610" y="266" text-anchor="middle">5. sid=abc 조회</text>
              </g>
              <g class="msg" data-step="6">
                <line class="arrow ret" x1="740" y1="320" x2="486" y2="320"/>
                <text x="610" y="311" text-anchor="middle">6. "user 42입니다"</text>
              </g>
              <g class="msg" data-step="7">
                <line class="arrow ret" x1="480" y1="365" x2="206" y2="365"/>
                <text x="340" y="356" text-anchor="middle">7. 응답</text>
              </g>
            </svg>
            <figcaption>도면 8. 세션 방식 — 상태는 서버 저장소가, 브라우저는 랜덤 ID만 갖는다. 실선: 요청, 점선: 응답.</figcaption>
          </figure>

          <pre><code>{`Set-Cookie: SESSION=abc123; HttpOnly; Secure; SameSite=Lax`}</code></pre>
          <ul>
            <li>장점: 서버가 세션을 지우면 <strong>즉시 로그아웃/강제 만료</strong>. 통제력이 강하고 브라우저 중심 서비스에 적합하다.</li>
            <li>단점: 서버(또는 Redis)에 상태를 저장해야 하고, 서버가 여러 대면 세션 공유가 필요. 모바일·외부 API에는 다소 불편.</li>
          </ul>
          <p>권장 구성: <code>React → HttpOnly 쿠키 → Spring Boot → Redis Session</code>.</p>
        </section>

        {/* ============================================================ 8 */}
        <section id="token">
          <h2>8. 토큰 기반 인증 — 클라이언트가 증명서를 들고 다닌다</h2>
          <p class="sub">서버가 인증 결과를 토큰으로 발급하고, 클라이언트가 요청마다 <code>Authorization: Bearer …</code>로 전달한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 350" role="img" aria-label="토큰 방식 순서 도면">
              <rect class="box" x="165" y="14" width="170" height="36"/>
              <text x="250" y="38" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="565" y="14" width="170" height="36"/>
              <text x="650" y="38" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="250" y1="50" x2="250" y2="335"/>
              <line class="life" x1="650" y1="50" x2="650" y2="335"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="250" y1="95" x2="644" y2="95"/>
                <text x="450" y="86" text-anchor="middle">1. ID / PW 로그인</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="650" y1="140" x2="256" y2="140"/>
                <text x="450" y="131" text-anchor="middle">2. Access + Refresh 토큰 발급</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="250" y1="185" x2="644" y2="185"/>
                <text x="450" y="176" text-anchor="middle">3. 요청 + Authorization: Bearer</text>
              </g>
              <g class="msg" data-step="4">
                <path class="arrow" d="M 650 220 C 740 220 740 262 656 262"/>
                <text x="748" y="238" text-anchor="start" class="small">4. 토큰 검증</text>
                <text x="748" y="256" text-anchor="start" class="small">(만료 시 Refresh로 재발급)</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="650" y1="305" x2="256" y2="305"/>
                <text x="450" y="296" text-anchor="middle">5. 응답</text>
              </g>
            </svg>
            <figcaption>도면 9. 토큰 방식 — <strong>Access Token</strong>(짧게, 매 요청)과 <strong>Refresh Token</strong>(길게, 재발급 전용)으로 역할을 나눈다.</figcaption>
          </figure>

          <table>
            <tr><th></th><th>Access Token</th><th>Refresh Token</th></tr>
            <tr><td>용도</td><td>API 접근에 매번 첨부</td><td>Access 재발급 전용 (일반 API엔 안 씀)</td></tr>
            <tr><td>수명</td><td><strong>짧게</strong> (5~15분)</td><td><strong>길게</strong> (수일~수주)</td></tr>
            <tr><td>서버 저장</td><td>저장 안 함(stateless)</td><td>DB/Redis에 저장 — 폐기·추적 가능</td></tr>
          </table>
          <p>권장 흐름은 <strong>Refresh Token Rotation</strong>: 재발급 때마다 기존 Refresh를 폐기하고 새것으로 교체, 폐기된 것이 다시 쓰이면 탈취 신호로 보고 전부 무효화한다.</p>
          <ul>
            <li>장점: 모바일·API·다중 서버 구조에 편리, 서버 확장이 쉽다.</li>
            <li>단점: 탈취된 토큰은 만료 전까지 악용 가능, 강제 폐기가 복잡. 잘못 구현하면 세션보다 위험할 수 있다.</li>
          </ul>
        </section>

        {/* ============================================================ 9 */}
        <section id="jwt">
          <h2>9. JWT (JSON Web Token) — 토큰의 “형식”</h2>
          <p class="sub">JWT는 인증 방식 자체가 아니라 토큰을 표현하는 형식이다. 점(.)으로 구분된 세 부분으로 이루어진다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 300" role="img" aria-label="JWT 3단 구조 도면">
              <text x="450" y="30" text-anchor="middle" class="small">eyJhbGci… . eyJzdWIi… . SflKxwRJ…</text>
              <line class="arrow" x1="230" y1="42" x2="165" y2="78"/>
              <line class="arrow" x1="450" y1="42" x2="450" y2="78"/>
              <line class="arrow" x1="670" y1="42" x2="735" y2="78"/>

              <rect class="box" x="40" y="85" width="250" height="165"/>
              <rect class="boxdark" x="40" y="85" width="250" height="38"/>
              <text x="165" y="110" text-anchor="middle" class="ondark strong">1. Header</text>
              <text x="165" y="150" text-anchor="middle" class="small">"alg": "HS256"</text>
              <text x="165" y="172" text-anchor="middle" class="small">"typ": "JWT"</text>
              <text x="165" y="215" text-anchor="middle" class="small">서명 알고리즘 정보</text>

              <rect class="box" x="325" y="85" width="250" height="165"/>
              <rect class="boxdark" x="325" y="85" width="250" height="38"/>
              <text x="450" y="110" text-anchor="middle" class="ondark strong">2. Payload</text>
              <text x="450" y="150" text-anchor="middle" class="small">"sub":"123" · "role":"USER"</text>
              <text x="450" y="172" text-anchor="middle" class="small">"iat" · "exp"(만료)</text>
              <text x="450" y="215" text-anchor="middle" class="small">Base64URL — 누구나 해독</text>

              <rect class="box" x="610" y="85" width="250" height="165"/>
              <rect class="boxdark" x="610" y="85" width="250" height="38"/>
              <text x="735" y="110" text-anchor="middle" class="ondark strong">3. Signature</text>
              <text x="735" y="150" text-anchor="middle" class="small">HMAC/RSA(</text>
              <text x="735" y="172" text-anchor="middle" class="small">base64(1)+"."+base64(2), 키)</text>
              <text x="735" y="215" text-anchor="middle" class="small">키 없이는 못 만듦(위조 방지)</text>
            </svg>
            <figcaption>도면 10. 앞 두 부분은 단순 인코딩이라 누구나 읽을 수 있다. JWT가 보장하는 것은 기밀성이 아니라 <strong>무결성(위조 불가)</strong>이다.</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            Payload는 암호문이 아니다. 비밀번호·주민등록번호·민감 개인정보·API 비밀키를 넣지 말 것.
            서명 알고리즘은 서버에서 고정(<code>alg:none</code> 방어), <code>iss·aud·exp·nbf</code>를 반드시 검증한다.
          </div>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="JWT 위조 거부 도면">
              <rect class="box" x="165" y="14" width="170" height="36"/>
              <text x="250" y="38" text-anchor="middle" class="strong">공격자</text>
              <rect class="box" x="565" y="14" width="200" height="36"/>
              <text x="665" y="38" text-anchor="middle" class="strong">서버 (비밀 키 보유)</text>
              <line class="life" x1="250" y1="50" x2="250" y2="285"/>
              <line class="life" x1="665" y1="50" x2="665" y2="285"/>

              <g class="msg" data-step="1">
                <path class="arrow" d="M 250 85 C 160 85 160 127 244 127"/>
                <text x="330" y="100" text-anchor="start" class="small">1. role을 USER→ADMIN 변조</text>
                <text x="330" y="118" text-anchor="start" class="small">(서명은 그대로)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="250" y1="170" x2="659" y2="170"/>
                <text x="455" y="161" text-anchor="middle">2. 변조된 토큰 전송</text>
              </g>
              <g class="msg" data-step="3">
                <path class="arrow" d="M 665 200 C 755 200 755 242 671 242"/>
                <text x="655" y="220" text-anchor="end" class="small">3. 다시 서명 → 불일치!</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="665" y1="278" x2="256" y2="278"/>
                <text x="455" y="269" text-anchor="middle">4. 401 거부 — 위조 판정</text>
              </g>
            </svg>
            <figcaption>도면 11. 내용을 바꾸면 서명이 어긋난다. 공격자는 비밀 키가 없어 올바른 서명을 새로 만들 수 없다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 10 */}
        <section id="otp">
          <h2>10. OTP — 한 번만 쓰는 인증번호</h2>
          <p class="sub">SMS·이메일·TOTP·HOTP. 강도는 대체로 SMS &lt; 이메일 &lt; TOTP 순이다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 320" role="img" aria-label="TOTP 인증 흐름 도면">
              <rect class="box" x="95" y="14" width="180" height="36"/>
              <text x="185" y="38" text-anchor="middle" class="strong">인증 앱</text>
              <rect class="box" x="620" y="14" width="180" height="36"/>
              <text x="710" y="38" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="185" y1="50" x2="185" y2="305"/>
              <line class="life" x1="710" y1="50" x2="710" y2="305"/>

              <g class="msg" data-step="1">
                <line class="arrow ret" x1="710" y1="90" x2="191" y2="90"/>
                <text x="450" y="81" text-anchor="middle" class="small">1. 최초 등록 시 Secret 공유 (QR)</text>
              </g>
              <g class="msg" data-step="2">
                <path class="arrow" d="M 185 120 C 90 120 90 162 179 162"/>
                <text x="70" y="145" text-anchor="end" class="small">2. 현재 시각 +</text>
                <text x="70" y="163" text-anchor="end" class="small">Secret → 6자리</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="185" y1="205" x2="704" y2="205"/>
                <text x="450" y="196" text-anchor="middle" class="small">3. 사용자가 6자리 코드 입력·전송</text>
              </g>
              <g class="msg" data-step="4">
                <path class="arrow" d="M 710 235 C 805 235 805 277 716 277"/>
                <text x="820" y="260" text-anchor="end" class="small">4. 같은 방식으로 계산해 대조</text>
              </g>
            </svg>
            <figcaption>도면 12. TOTP — 서버와 앱이 Secret을 공유하고, 현재 시각 기반으로 각자 코드를 만들어 대조한다(보통 30초마다 갱신).</figcaption>
          </figure>

          <table>
            <tr><th>종류</th><th>방식</th><th>장점 / 단점</th></tr>
            <tr><td>SMS OTP</td><td>문자로 번호 전송</td><td>익숙함 / SIM 스와핑·가로채기·비용. 중요 서비스 단독 MFA로는 부족</td></tr>
            <tr><td>이메일 OTP</td><td>메일로 번호 전송</td><td>구현 쉬움 / 이메일 계정 탈취 시 함께 뚫림</td></tr>
            <tr><td>TOTP</td><td>시간 기반 (Google/MS Authenticator)</td><td>인터넷/문자 불필요·SMS보다 안전 / 피싱 입력·기기 분실 대비 복구코드 필요</td></tr>
            <tr><td>HOTP</td><td>사용 횟수(카운터) 기반</td><td>현재는 TOTP가 더 흔함</td></tr>
          </table>
        </section>

        {/* ============================================================ 11 */}
        <section id="magiclink">
          <h2>11. 매직 링크 — 이메일로 보내는 일회용 로그인 링크</h2>
          <p class="sub">비밀번호 없이 이메일로 온 링크를 클릭하면 로그인된다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 320" role="img" aria-label="매직 링크 흐름 도면">
              <rect class="box" x="60" y="14" width="150" height="36"/>
              <text x="135" y="38" text-anchor="middle" class="strong">사용자</text>
              <rect class="box" x="330" y="14" width="150" height="36"/>
              <text x="405" y="38" text-anchor="middle" class="strong">서버</text>
              <rect class="box" x="620" y="14" width="180" height="36"/>
              <text x="710" y="38" text-anchor="middle" class="strong">이메일 사서함</text>
              <line class="life" x1="135" y1="50" x2="135" y2="305"/>
              <line class="life" x1="405" y1="50" x2="405" y2="305"/>
              <line class="life" x1="710" y1="50" x2="710" y2="305"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="135" y1="90" x2="399" y2="90"/>
                <text x="267" y="81" text-anchor="middle" class="small">1. 이메일 입력</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="405" y1="135" x2="614" y2="135"/>
                <text x="510" y="126" text-anchor="middle" class="small">2. 일회용 토큰 링크 발송 (해시만 DB 저장)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="710" y1="180" x2="141" y2="180"/>
                <text x="420" y="171" text-anchor="middle" class="small">3. 사용자가 메일에서 링크 클릭</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="135" y1="225" x2="399" y2="225"/>
                <text x="267" y="216" text-anchor="middle" class="small">4. 토큰 검증 요청</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="405" y1="270" x2="141" y2="270"/>
                <text x="267" y="261" text-anchor="middle" class="small">5. 검증·즉시 폐기 → 로그인</text>
              </g>
            </svg>
            <figcaption>도면 13. 토큰은 <strong>일회용·짧은 만료·DB엔 해시만·사용 후 즉시 폐기·HTTPS 전용</strong>이어야 한다.</figcaption>
          </figure>
          <p>장점: 비밀번호 불필요, 가입·로그인이 간단. 단점: 이메일 보안 의존, 메일 지연, 다른 기기에서 열릴 때 UX 문제.</p>
        </section>

        {/* ============================================================ 12 */}
        <section id="passkey">
          <h2>12. 패스키 · WebAuthn — 비밀번호 없는 공개키 인증</h2>
          <p class="sub">현재 가장 강력한 일반 사용자 인증 중 하나. 서버엔 공개키만 저장되고 개인키는 기기를 떠나지 않는다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330" role="img" aria-label="패스키 등록과 로그인 도면">
              <rect class="box" x="95" y="14" width="200" height="36"/>
              <text x="195" y="38" text-anchor="middle" class="strong">기기(인증기)</text>
              <rect class="box" x="605" y="14" width="200" height="36"/>
              <text x="705" y="38" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="195" y1="50" x2="195" y2="315"/>
              <line class="life" x1="705" y1="50" x2="705" y2="315"/>

              <g class="msg" data-step="1">
                <path class="arrow" d="M 195 85 C 100 85 100 127 189 127"/>
                <text x="80" y="110" text-anchor="end" class="small">1. 등록 시 개인키·</text>
                <text x="80" y="128" text-anchor="end" class="small">공개키 쌍 생성</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="195" y1="165" x2="699" y2="165"/>
                <text x="450" y="156" text-anchor="middle" class="small">2. 공개키만 서버에 저장</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="705" y1="210" x2="201" y2="210"/>
                <text x="450" y="201" text-anchor="middle" class="small">3. 로그인 시 서버가 Challenge 전송</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="195" y1="255" x2="699" y2="255"/>
                <text x="450" y="246" text-anchor="middle" class="small">4. 생체로 개인키 잠금 해제 → 서명 전송</text>
              </g>
              <g class="msg" data-step="5">
                <path class="arrow" d="M 705 285 C 800 285 800 315 711 312"/>
                <text x="818" y="305" text-anchor="end" class="small">5. 공개키로 서명 검증</text>
              </g>
            </svg>
            <figcaption>도면 14. 지문/얼굴은 개인키 사용을 허용하는 스위치일 뿐. 서버 DB가 유출돼도 개인키·생체정보는 노출되지 않고 피싱에 강하다.</figcaption>
          </figure>
          <p>신규 서비스 권장 구성: <strong>기본 로그인=패스키 / 대체=이메일 매직 링크 / 복구=검증된 이메일 + 복구 절차</strong>. 단점은 아직 사용자 친숙도가 낮고 기기·브라우저별 검증과 계정 복구 정책이 필요하다는 점.</p>
        </section>

        {/* ============================================================ 13 */}
        <section id="mfa">
          <h2>13. 다중요소 인증(MFA)</h2>
          <p class="sub">서로 다른 <strong>종류</strong>의 요소를 2개 이상 결합한다. (비밀번호+보안질문은 둘 다 지식이라 진정한 MFA가 아니다.)</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 220" role="img" aria-label="MFA 요소 결합 도면">
              <rect class="box" x="40" y="80" width="180" height="60"/>
              <text x="130" y="106" text-anchor="middle" class="strong">지식: 비밀번호</text>
              <text x="130" y="126" text-anchor="middle" class="small">아는 것</text>

              <rect class="box" x="310" y="80" width="180" height="60"/>
              <text x="400" y="106" text-anchor="middle" class="strong">소유: TOTP/보안키</text>
              <text x="400" y="126" text-anchor="middle" class="small">가진 것</text>

              <rect class="boxdark" x="640" y="70" width="220" height="80"/>
              <text x="750" y="102" text-anchor="middle" class="strong ondark">두 관문 모두 통과</text>
              <text x="750" y="124" text-anchor="middle" class="small">→ 로그인 허용</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="220" y1="110" x2="304" y2="110"/>
                <text x="262" y="60" text-anchor="middle" class="small">1. 1차 통과</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="490" y1="110" x2="634" y2="110"/>
                <text x="562" y="60" text-anchor="middle" class="small">2. 2차 통과</text>
              </g>
            </svg>
            <figcaption>도면 15. 서로 다른 요소를 순서대로 통과해야 로그인된다. 하나가 뚫려도 다른 하나가 남는다.</figcaption>
          </figure>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 120" role="img" aria-label="MFA 수단 보안 강도 도면">
              <line class="arrow" x1="40" y1="70" x2="860" y2="70"/>
              <text x="40" y="55" text-anchor="middle" class="small">약함</text>
              <text x="860" y="55" text-anchor="middle" class="small">강함</text>
              <text x="120" y="95" text-anchor="middle" class="small">SMS</text>
              <text x="290" y="95" text-anchor="middle" class="small">이메일 OTP</text>
              <text x="450" y="95" text-anchor="middle" class="small">TOTP</text>
              <text x="620" y="95" text-anchor="middle" class="small">푸시 인증</text>
              <text x="800" y="95" text-anchor="middle" class="small">패스키·보안키</text>
            </svg>
            <figcaption>도면 16. 대략적인 보안 강도. 단, 푸시 인증은 무심코 승인하는 <strong>MFA Fatigue</strong> 공격에 주의(번호 일치 방식 권장).</figcaption>
          </figure>
        </section>

        {/* ============================================================ 14 */}
        <section id="social">
          <h2>14. 소셜 로그인 — Google·Apple·Kakao·Naver 계정으로</h2>
          <p class="sub">대개 OAuth 2.0 / OpenID Connect를 사용한다. 회원가입 전환율이 높고 비밀번호를 직접 보관하지 않아도 된다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 360" role="img" aria-label="소셜 로그인 흐름 도면">
              <rect class="box" x="40" y="14" width="150" height="36"/>
              <text x="115" y="38" text-anchor="middle" class="strong">사용자</text>
              <rect class="box" x="300" y="14" width="160" height="36"/>
              <text x="380" y="38" text-anchor="middle" class="strong">내 백엔드</text>
              <rect class="box" x="640" y="14" width="200" height="36"/>
              <text x="740" y="38" text-anchor="middle" class="strong">공급자(Google)</text>
              <line class="life" x1="115" y1="50" x2="115" y2="345"/>
              <line class="life" x1="380" y1="50" x2="380" y2="345"/>
              <line class="life" x1="740" y1="50" x2="740" y2="345"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="115" y1="90" x2="734" y2="90"/>
                <text x="430" y="81" text-anchor="middle" class="small">1. "Google 로그인" → 공급자 인증 화면</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="740" y1="135" x2="121" y2="135"/>
                <text x="430" y="126" text-anchor="middle" class="small">2. 로그인·동의 후 Authorization Code 발급</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="115" y1="180" x2="374" y2="180"/>
                <text x="245" y="171" text-anchor="middle" class="small">3. code 전달</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="380" y1="225" x2="734" y2="225"/>
                <text x="560" y="216" text-anchor="middle" class="small">4. code 교환 (백채널)</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="740" y1="270" x2="386" y2="270"/>
                <text x="560" y="261" text-anchor="middle" class="small">5. ID Token 발급</text>
              </g>
              <g class="msg" data-step="6">
                <line class="arrow ret" x1="380" y1="315" x2="121" y2="315"/>
                <text x="245" y="306" text-anchor="middle" class="small">6. ID Token 검증→회원 연결→세션 발급</text>
              </g>
            </svg>
            <figcaption>도면 17. 권장은 Authorization Code Flow, 공개 클라이언트(SPA/모바일)는 PKCE 적용. 이메일만으로 자동 병합하면 계정 탈취 위험이 있다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 15 */}
        <section id="oauth">
          <h2>15. OAuth 2.0 — 권한 “위임” 프로토콜</h2>
          <p class="sub">OAuth는 원칙적으로 인증이 아니라 <strong>권한 위임</strong>이다. “비밀번호 대신, 범위·기한이 제한된 출입증을 발급”한다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 150" role="img" aria-label="OAuth 4대 역할 도면">
              <rect class="box" x="20" y="45" width="200" height="60"/>
              <text x="120" y="72" text-anchor="middle" class="strong">Resource Owner</text>
              <text x="120" y="92" text-anchor="middle" class="small">사용자(자원 주인)</text>
              <rect class="box" x="240" y="45" width="200" height="60"/>
              <text x="340" y="72" text-anchor="middle" class="strong">Client</text>
              <text x="340" y="92" text-anchor="middle" class="small">접근을 요청하는 앱</text>
              <rect class="box" x="460" y="45" width="200" height="60"/>
              <text x="560" y="72" text-anchor="middle" class="strong">Authorization Server</text>
              <text x="560" y="92" text-anchor="middle" class="small">권한·토큰 발급</text>
              <rect class="box" x="680" y="45" width="200" height="60"/>
              <text x="780" y="72" text-anchor="middle" class="strong">Resource Server</text>
              <text x="780" y="92" text-anchor="middle" class="small">보호된 API</text>
            </svg>
            <figcaption>도면 18. OAuth의 4대 역할.</figcaption>
          </figure>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 420" role="img" aria-label="Authorization Code + PKCE 흐름 도면">
              <rect class="box" x="30" y="14" width="150" height="36"/>
              <text x="105" y="38" text-anchor="middle" class="strong">브라우저</text>
              <rect class="box" x="255" y="14" width="150" height="36"/>
              <text x="330" y="38" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="500" y="14" width="160" height="36"/>
              <text x="580" y="38" text-anchor="middle" class="strong">인증 서버</text>
              <rect class="box" x="730" y="14" width="150" height="36"/>
              <text x="805" y="38" text-anchor="middle" class="strong">자원 서버</text>
              <line class="life" x1="105" y1="50" x2="105" y2="405"/>
              <line class="life" x1="330" y1="50" x2="330" y2="405"/>
              <line class="life" x1="580" y1="50" x2="580" y2="405"/>
              <line class="life" x1="805" y1="50" x2="805" y2="405"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="105" y1="90" x2="324" y2="90"/>
                <text x="215" y="81" text-anchor="middle" class="small">1. 로그인 클릭</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="330" y1="132" x2="111" y2="132"/>
                <text x="215" y="123" text-anchor="middle" class="small">2. 인증 서버로 리다이렉트(+PKCE)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="105" y1="174" x2="574" y2="174"/>
                <text x="340" y="165" text-anchor="middle" class="small">3. 로그인·동의 (비밀번호는 여기에만)</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="580" y1="216" x2="111" y2="216"/>
                <text x="340" y="207" text-anchor="middle" class="small">4. 일회용 code와 함께 리다이렉트</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1="105" y1="258" x2="324" y2="258"/>
                <text x="215" y="249" text-anchor="middle" class="small">5. code 전달</text>
              </g>
              <g class="msg" data-step="6">
                <line class="arrow" x1="330" y1="300" x2="574" y2="300"/>
                <text x="452" y="291" text-anchor="middle" class="small">6. code+verifier 교환 (백채널)</text>
              </g>
              <g class="msg" data-step="7">
                <line class="arrow ret" x1="580" y1="342" x2="336" y2="342"/>
                <text x="452" y="333" text-anchor="middle" class="small">7. Access Token 발급</text>
              </g>
              <g class="msg" data-step="8">
                <line class="arrow" x1="330" y1="384" x2="799" y2="384"/>
                <text x="560" y="375" text-anchor="middle" class="small">8. Bearer 토큰으로 API 호출</text>
              </g>
            </svg>
            <figcaption>도면 19. Authorization Code + PKCE. 브라우저 구간엔 노출돼도 되는 일회용 code만, 진짜 토큰은 서버 간 백채널로만 흐른다.</figcaption>
          </figure>

          <table>
            <tr><th>Grant 방식</th><th>용도</th></tr>
            <tr><td>Authorization Code + PKCE</td><td>웹·SPA·모바일 사용자 로그인 — <strong>현재 표준</strong></td></tr>
            <tr><td>Client Credentials</td><td>사용자 없는 서버↔서버 통신</td></tr>
            <tr><td>Device Authorization</td><td>TV·콘솔·CLI·IoT 등 입력이 불편한 기기</td></tr>
            <tr><td>Refresh Token</td><td>Access Token 재발급</td></tr>
          </table>
          <div class="box deny">
            <span class="tag-line">피할 것</span><br/>
            Implicit Flow, Resource Owner Password Credentials Grant, URL에 Access Token 전달.
          </div>
        </section>

        {/* ============================================================ 16 */}
        <section id="oidc">
          <h2>16. OpenID Connect(OIDC) — OAuth 위에 얹은 인증</h2>
          <p class="sub">OAuth가 “이 앱이 어떤 API에 접근 가능한가”라면, OIDC는 “현재 로그인한 사용자가 누구인가”를 표준으로 알려준다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 260" role="img" aria-label="OIDC 두 토큰 도면">
              <rect class="box" x="40" y="80" width="220" height="90"/>
              <text x="150" y="115" text-anchor="middle" class="strong">인증 서버 (OIDC)</text>
              <text x="150" y="140" text-anchor="middle" class="small">Keycloak · 구글 등</text>

              <rect class="box" x="560" y="30" width="300" height="80"/>
              <text x="710" y="60" text-anchor="middle" class="strong">클라이언트 앱이 읽음</text>
              <text x="710" y="85" text-anchor="middle" class="small">ID Token — "누구인지" (인증)</text>

              <rect class="box" x="560" y="150" width="300" height="80"/>
              <text x="710" y="180" text-anchor="middle" class="strong">API 서버가 검증</text>
              <text x="710" y="205" text-anchor="middle" class="small">Access Token — "무엇을 할 수 있나" (인가)</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="260" y1="105" x2="554" y2="72"/>
                <text x="400" y="55" text-anchor="middle">1. ID Token (JWT)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="260" y1="145" x2="554" y2="185"/>
                <text x="400" y="215" text-anchor="middle">2. Access Token</text>
              </g>
            </svg>
            <figcaption>도면 20. OIDC 로그인 시 ID Token(인증)과 Access Token(인가)이 함께 발급된다. 소셜 로그인·기업 SSO에 널리 쓰인다.</figcaption>
          </figure>
          <pre><code>{`{
  "iss": "https://accounts.example.com",
  "sub": "user-123",
  "aud": "my-client",
  "exp": 1780000000
}`}</code></pre>
          <p>OIDC 서버는 <code>/.well-known/openid-configuration</code>에서 엔드포인트 정보를 자동 제공한다(Discovery).</p>
        </section>

        {/* ============================================================ 17 */}
        <section id="saml">
          <h2>17. SAML — 기업·학교 SSO의 XML 표준</h2>
          <p class="sub">오래된 기업 시스템과 호환성이 높다. 모바일·API에는 OIDC가 더 편리하지만, 레거시 엔터프라이즈에선 여전히 많이 쓰인다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="SAML 흐름 도면">
              <rect class="box" x="60" y="14" width="150" height="36"/>
              <text x="135" y="38" text-anchor="middle" class="strong">사용자</text>
              <rect class="box" x="330" y="14" width="180" height="36"/>
              <text x="420" y="38" text-anchor="middle" class="strong">서비스 제공자(SP)</text>
              <rect class="box" x="640" y="14" width="200" height="36"/>
              <text x="740" y="38" text-anchor="middle" class="strong">인증 제공자(IdP)</text>
              <line class="life" x1="135" y1="50" x2="135" y2="285"/>
              <line class="life" x1="420" y1="50" x2="420" y2="285"/>
              <line class="life" x1="740" y1="50" x2="740" y2="285"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="135" y1="90" x2="414" y2="90"/>
                <text x="275" y="81" text-anchor="middle" class="small">1. 서비스 접속</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="420" y1="135" x2="141" y2="135"/>
                <text x="290" y="126" text-anchor="middle" class="small">2. IdP로 리다이렉트 (SAML Request)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="135" y1="180" x2="734" y2="180"/>
                <text x="430" y="171" text-anchor="middle" class="small">3. IdP에서 로그인</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="740" y1="225" x2="141" y2="225"/>
                <text x="430" y="216" text-anchor="middle" class="small">4. 서명된 SAML Assertion(XML) 발급</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1="135" y1="270" x2="414" y2="270"/>
                <text x="275" y="261" text-anchor="middle" class="small">5. Assertion 제출 → 로그인 완료</text>
              </g>
            </svg>
            <figcaption>도면 21. SAML SSO. 신규 시스템은 OIDC를 우선 검토하고, 기존 기업 환경이 요구할 때 SAML을 쓴다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 18 */}
        <section id="sso">
          <h2>18. SSO — 한 번 로그인으로 여러 서비스</h2>
          <p class="sub">인증을 각 서비스에서 떼어내 중앙 IdP에 모으는 구조. 핵심은 “IdP 도메인의 세션 쿠키”.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 560" role="img" aria-label="SSO 동작 순서 도면">
              <rect class="box" x="30" y="14" width="150" height="36"/>
              <text x="105" y="38" text-anchor="middle" class="strong">브라우저</text>
              <rect class="box" x="260" y="14" width="150" height="36"/>
              <text x="335" y="38" text-anchor="middle" class="strong">서비스 A</text>
              <rect class="box" x="490" y="14" width="150" height="36"/>
              <text x="565" y="38" text-anchor="middle" class="strong">서비스 B</text>
              <rect class="box" x="710" y="14" width="170" height="36"/>
              <text x="795" y="38" text-anchor="middle" class="strong">IdP (Keycloak)</text>
              <line class="life" x1="105" y1="50" x2="105" y2="545"/>
              <line class="life" x1="335" y1="50" x2="335" y2="545"/>
              <line class="life" x1="565" y1="50" x2="565" y2="545"/>
              <line class="life" x1="795" y1="50" x2="795" y2="545"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="105" y1="88" x2="329" y2="88"/>
                <text x="215" y="79" text-anchor="middle" class="small">1. 서비스 A 접속</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="335" y1="126" x2="111" y2="126"/>
                <text x="220" y="117" text-anchor="middle" class="small">2. 미로그인 — IdP로 리다이렉트</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="105" y1="164" x2="789" y2="164"/>
                <text x="440" y="155" text-anchor="middle" class="small">3. IdP에서 로그인 (ID/PW + MFA)</text>
              </g>
              <g class="msg" data-step="4">
                <path class="arrow" d="M 795 194 C 875 194 875 230 801 230"/>
                <text x="785" y="212" text-anchor="end" class="small strong">4. IdP에 세션 쿠키 생성 — SSO의 심장</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="795" y1="268" x2="111" y2="268"/>
                <text x="440" y="259" text-anchor="middle" class="small">5. 토큰과 함께 A로 리다이렉트 → A 로그인 완료</text>
              </g>
              <g class="msg" data-step="6">
                <line class="arrow" x1="105" y1="320" x2="559" y2="320"/>
                <text x="330" y="311" text-anchor="middle" class="small">6. 이번엔 서비스 B 접속</text>
              </g>
              <g class="msg" data-step="7">
                <line class="arrow ret" x1="565" y1="358" x2="111" y2="358"/>
                <text x="330" y="349" text-anchor="middle" class="small">7. 미로그인 — IdP로 리다이렉트</text>
              </g>
              <g class="msg" data-step="8">
                <line class="arrow" x1="105" y1="396" x2="789" y2="396"/>
                <text x="440" y="387" text-anchor="middle" class="small">8. IdP 접근 — 세션 쿠키 자동 첨부</text>
              </g>
              <g class="msg" data-step="9">
                <path class="arrow" d="M 795 426 C 875 426 875 462 801 462"/>
                <text x="785" y="444" text-anchor="end" class="small strong">9. 세션 확인 — 로그인 화면 생략!</text>
              </g>
              <g class="msg" data-step="10">
                <line class="arrow ret" x1="795" y1="500" x2="111" y2="500"/>
                <text x="440" y="491" text-anchor="middle" class="small">10. 즉시 토큰 발급 — B 자동 로그인</text>
              </g>
            </svg>
            <figcaption>도면 22. 서비스마다 인증 흐름은 매번 돌지만, IdP 세션 쿠키 덕분에 두 번째부터 로그인 화면(3번)이 생략된다.</figcaption>
          </figure>
          <p>장점: 사용자 편의, 계정·권한 중앙 관리, 퇴사·졸업 시 일괄 차단. 단점: IdP가 <strong>단일 장애점(SPOF)</strong> — IdP엔 반드시 MFA를 걸고 이중화한다. 로그아웃 전파(SLO)는 별도 처리가 필요하다.</p>
        </section>

        {/* ============================================================ 19 */}
        <section id="ldap">
          <h2>19. LDAP — 조직의 디렉터리 조회·인증</h2>
          <p class="sub">LDAP은 엄밀히는 인증 프로토콜이라기보다 사용자·부서·그룹을 중앙 관리하는 디렉터리 조회 프로토콜이다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 250" role="img" aria-label="LDAP Bind 인증 도면">
              <rect class="box" x="60" y="14" width="150" height="36"/>
              <text x="135" y="38" text-anchor="middle" class="strong">사용자</text>
              <rect class="box" x="330" y="14" width="160" height="36"/>
              <text x="410" y="38" text-anchor="middle" class="strong">애플리케이션</text>
              <rect class="box" x="640" y="14" width="220" height="36"/>
              <text x="750" y="38" text-anchor="middle" class="strong">디렉터리 서버 (AD/LDAP)</text>
              <line class="life" x1="135" y1="50" x2="135" y2="235"/>
              <line class="life" x1="410" y1="50" x2="410" y2="235"/>
              <line class="life" x1="750" y1="50" x2="750" y2="235"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="135" y1="90" x2="404" y2="90"/>
                <text x="270" y="81" text-anchor="middle" class="small">1. ID / PW 입력</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="410" y1="135" x2="744" y2="135"/>
                <text x="577" y="126" text-anchor="middle" class="small">2. LDAP Bind 요청 (TLS)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="750" y1="180" x2="416" y2="180"/>
                <text x="577" y="171" text-anchor="middle" class="small">3. 계정 확인 결과</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="410" y1="220" x2="141" y2="220"/>
                <text x="270" y="211" text-anchor="middle" class="small">4. 로그인 허용</text>
              </g>
            </svg>
            <figcaption>도면 23. Active Directory와 함께 기업 내부 인증에 많이 쓰인다. 외부 인터넷에 직접 노출하지 말고 TLS·접근 제한을 둔다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 20 */}
        <section id="kerberos">
          <h2>20. Kerberos — 티켓 기반 네트워크 인증</h2>
          <p class="sub">비밀번호를 서비스마다 보내지 않고, 한 번 받은 티켓으로 여러 내부 서비스에 접근한다. Windows AD 환경에서 흔하다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 320" role="img" aria-label="Kerberos 티켓 흐름 도면">
              <rect class="box" x="60" y="14" width="150" height="36"/>
              <text x="135" y="38" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="360" y="14" width="180" height="36"/>
              <text x="450" y="38" text-anchor="middle" class="strong">KDC (인증 서버)</text>
              <rect class="box" x="680" y="14" width="180" height="36"/>
              <text x="770" y="38" text-anchor="middle" class="strong">내부 서비스</text>
              <line class="life" x1="135" y1="50" x2="135" y2="305"/>
              <line class="life" x1="450" y1="50" x2="450" y2="305"/>
              <line class="life" x1="770" y1="50" x2="770" y2="305"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="135" y1="90" x2="444" y2="90"/>
                <text x="290" y="81" text-anchor="middle" class="small">1. 로그인 → 인증 요청</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="450" y1="135" x2="141" y2="135"/>
                <text x="295" y="126" text-anchor="middle" class="small">2. TGT(티켓 발급용 티켓) 수령</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="135" y1="180" x2="444" y2="180"/>
                <text x="290" y="171" text-anchor="middle" class="small">3. TGT로 서비스 티켓 요청</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="450" y1="225" x2="141" y2="225"/>
                <text x="290" y="216" text-anchor="middle" class="small">4. 서비스 티켓 발급</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1="135" y1="270" x2="764" y2="270"/>
                <text x="450" y="261" text-anchor="middle" class="small">5. 서비스 티켓 제시 → 접근 허용</text>
              </g>
            </svg>
            <figcaption>도면 24. 사내 SSO에 적합. 서버·클라이언트 <strong>시간 동기화</strong>가 중요하고, 외부 웹보다 내부 조직망에 어울린다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 21 */}
        <section id="cert">
          <h2>21. 인증서 기반 인증 — 개인키와 인증서로 신원 증명</h2>
          <p class="sub">공동인증서·스마트카드·PKI·전자서명. 서버가 임의값을 주면 클라이언트가 개인키로 서명하고, 서버는 인증서의 공개키로 검증한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 260" role="img" aria-label="인증서 기반 서명 검증 도면">
              <rect class="box" x="95" y="14" width="200" height="36"/>
              <text x="195" y="38" text-anchor="middle" class="strong">클라이언트(개인키)</text>
              <rect class="box" x="605" y="14" width="220" height="36"/>
              <text x="715" y="38" text-anchor="middle" class="strong">서버(인증서 공개키)</text>
              <line class="life" x1="195" y1="50" x2="195" y2="245"/>
              <line class="life" x1="715" y1="50" x2="715" y2="245"/>

              <g class="msg" data-step="1">
                <line class="arrow ret" x1="715" y1="95" x2="201" y2="95"/>
                <text x="455" y="86" text-anchor="middle" class="small">1. 서버가 임의값(Challenge) 전달</text>
              </g>
              <g class="msg" data-step="2">
                <path class="arrow" d="M 195 125 C 100 125 100 167 189 167"/>
                <text x="80" y="150" text-anchor="end" class="small">2. 개인키로 서명</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="195" y1="205" x2="709" y2="205"/>
                <text x="455" y="196" text-anchor="middle" class="small">3. 서명값 + 인증서 전송 → 공개키로 검증</text>
              </g>
            </svg>
            <figcaption>도면 25. 높은 보안성·전자서명이 가능하나 발급·갱신·폐기 관리가 복잡하다. 기업·금융·공공에 적합.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 22 */}
        <section id="mtls">
          <h2>22. mTLS — 양쪽이 서로 인증서를 제시</h2>
          <p class="sub">일반 HTTPS는 서버만 인증서를 내지만, mTLS는 클라이언트도 인증서를 제시해 서로 검증한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 230" role="img" aria-label="mTLS 상호 인증 도면">
              <rect class="box" x="95" y="14" width="200" height="36"/>
              <text x="195" y="38" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="605" y="14" width="200" height="36"/>
              <text x="705" y="38" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="195" y1="50" x2="195" y2="215"/>
              <line class="life" x1="705" y1="50" x2="705" y2="215"/>

              <g class="msg" data-step="1">
                <line class="arrow ret" x1="705" y1="90" x2="201" y2="90"/>
                <text x="450" y="81" text-anchor="middle" class="small">1. 서버 인증서 제시</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="195" y1="135" x2="699" y2="135"/>
                <text x="450" y="126" text-anchor="middle" class="small">2. 클라이언트 인증서 제시</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="195" y1="185" x2="699" y2="185"/>
                <text x="450" y="176" text-anchor="middle" class="small">3. 서로 검증 완료 → 암호화 통신</text>
              </g>
            </svg>
            <figcaption>도면 26. 마이크로서비스 간 통신·금융 API·IoT·서비스 메시에 적합. 일반 사용자 웹 로그인보다 시스템 간 인증에 쓰인다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 23 */}
        <section id="apikey">
          <h2>23. API Key — 애플리케이션·프로젝트 식별</h2>
          <p class="sub">발급받은 키를 요청 헤더에 담는다. 강력한 “사용자 인증”이라기보다 앱/프로젝트 식별 수단에 가깝다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 210" role="img" aria-label="API Key 인증 도면">
              <rect class="box" x="95" y="14" width="200" height="36"/>
              <text x="195" y="38" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="605" y="14" width="220" height="36"/>
              <text x="715" y="38" text-anchor="middle" class="strong">API 서버</text>
              <line class="life" x1="195" y1="50" x2="195" y2="195"/>
              <line class="life" x1="715" y1="50" x2="715" y2="195"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="195" y1="95" x2="709" y2="95"/>
                <text x="455" y="86" text-anchor="middle" class="small">1. 요청 + X-API-Key: api_key_value</text>
              </g>
              <g class="msg" data-step="2">
                <path class="arrow" d="M 715 125 C 810 125 810 160 721 160"/>
                <text x="825" y="145" text-anchor="end" class="small">2. 키 조회(해시 저장) · 권한/사용량 확인</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="715" y1="190" x2="201" y2="190"/>
                <text x="455" y="181" text-anchor="middle" class="small">3. 허용 → 응답</text>
              </g>
            </svg>
            <figcaption>도면 27. 브라우저 JS에 비밀 키를 넣거나 GitHub에 커밋 금지. 키별 권한·사용량 제한, 만료·교체, DB엔 해시 저장.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 24 */}
        <section id="hmac">
          <h2>24. HMAC 서명 인증 — 요청 자체를 서명</h2>
          <p class="sub">요청 내용을 Secret Key로 서명해 변조되지 않았음을 증명한다. Webhook·서버 간 API에 적합.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 240" role="img" aria-label="HMAC 서명 검증 도면">
              <rect class="box" x="95" y="14" width="220" height="36"/>
              <text x="205" y="38" text-anchor="middle" class="strong">클라이언트(Secret)</text>
              <rect class="box" x="605" y="14" width="220" height="36"/>
              <text x="715" y="38" text-anchor="middle" class="strong">서버(같은 Secret)</text>
              <line class="life" x1="205" y1="50" x2="205" y2="225"/>
              <line class="life" x1="715" y1="50" x2="715" y2="225"/>

              <g class="msg" data-step="1">
                <path class="arrow" d="M 205 85 C 110 85 110 127 199 127"/>
                <text x="90" y="103" text-anchor="end" class="small">1. Method+경로+Timestamp</text>
                <text x="90" y="121" text-anchor="end" class="small">+BodyHash → HMAC 서명</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="205" y1="165" x2="709" y2="165"/>
                <text x="455" y="156" text-anchor="middle" class="small">2. 요청 + X-Signature + X-Timestamp</text>
              </g>
              <g class="msg" data-step="3">
                <path class="arrow" d="M 715 195 C 810 195 810 225 721 222"/>
                <text x="825" y="213" text-anchor="end" class="small">3. 같은 Secret으로 재계산해 대조 (+재전송 방지)</text>
              </g>
            </svg>
            <figcaption>도면 28. Timestamp·nonce로 재전송 공격을 막는다. 양쪽이 같은 Secret을 보관하며, 유출 시 키 교체가 필요하다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 25 */}
        <section id="ssh">
          <h2>25. SSH 키 인증 — 서버 접속용 공개키 인증</h2>
          <p class="sub">로컬에 개인키, 서버에 공개키를 등록한다. 접속 시 개인키를 서버로 보내지 않고 서명으로 보유를 증명한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 230" role="img" aria-label="SSH 키 인증 도면">
              <rect class="box" x="95" y="14" width="220" height="36"/>
              <text x="205" y="38" text-anchor="middle" class="strong">로컬(개인키)</text>
              <rect class="box" x="605" y="14" width="220" height="36"/>
              <text x="715" y="38" text-anchor="middle" class="strong">서버(공개키 등록)</text>
              <line class="life" x1="205" y1="50" x2="205" y2="215"/>
              <line class="life" x1="715" y1="50" x2="715" y2="215"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="205" y1="90" x2="709" y2="90"/>
                <text x="455" y="81" text-anchor="middle" class="small">1. 접속 요청</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="715" y1="135" x2="211" y2="135"/>
                <text x="455" y="126" text-anchor="middle" class="small">2. 임의값(Challenge) 전송</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="205" y1="180" x2="709" y2="180"/>
                <text x="455" y="171" text-anchor="middle" class="small">3. 개인키로 서명 → 공개키로 검증 → 접속</text>
              </g>
            </svg>
            <figcaption>도면 29. 권장: Ed25519 사용, 개인키에 암호 설정, 루트 직접 로그인·비밀번호 로그인 비활성화, 개인키 공유 금지.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 26 */}
        <section id="device">
          <h2>26. 모바일 앱 · 기기 인증</h2>
          <p class="sub">모바일 앱은 토큰을 보안 저장소에 두고, 기기 자체를 계정과 연결하기도 한다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 220" role="img" aria-label="모바일 앱 토큰 저장 도면">
              <rect class="box" x="40" y="40" width="240" height="140"/>
              <text x="160" y="70" text-anchor="middle" class="strong">모바일 앱</text>
              <rect class="boxdark" x="60" y="90" width="200" height="70"/>
              <text x="160" y="118" text-anchor="middle" class="small">보안 저장소</text>
              <text x="160" y="140" text-anchor="middle" class="small">Keychain / Keystore</text>

              <rect class="box" x="360" y="65" width="200" height="90"/>
              <text x="460" y="100" text-anchor="middle" class="small">Authorization Code</text>
              <text x="460" y="122" text-anchor="middle" class="small">+ PKCE 로그인</text>

              <rect class="box" x="650" y="65" width="220" height="90"/>
              <text x="760" y="95" text-anchor="middle" class="small">짧은 Access Token</text>
              <text x="760" y="117" text-anchor="middle" class="small">Refresh는 보안 저장소</text>
              <text x="760" y="139" text-anchor="middle" class="small">앱 잠금은 생체로 해제</text>

              <line class="arrow" x1="280" y1="110" x2="356" y2="110"/>
              <line class="arrow" x1="560" y1="110" x2="646" y2="110"/>
            </svg>
            <figcaption>도면 30. 일반 SharedPreferences·평문 파일에 토큰 저장 금지. 기기 인증은 <strong>공개키 기반 등록</strong>이 안전하며, MAC/IMEI만으로 인증하면 안 된다(복제·변경 가능).</figcaption>
          </figure>
        </section>

        {/* ============================================================ 27 */}
        <section id="push">
          <h2>27. 푸시 인증 — 등록된 폰으로 승인</h2>
          <p class="sub">PC 로그인 시 스마트폰에 알림을 보내 승인을 받는다. 단순 승인 버튼만 두면 MFA Fatigue 공격에 취약하다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="푸시 인증 흐름 도면">
              <rect class="box" x="60" y="14" width="150" height="36"/>
              <text x="135" y="38" text-anchor="middle" class="strong">PC</text>
              <rect class="box" x="330" y="14" width="150" height="36"/>
              <text x="405" y="38" text-anchor="middle" class="strong">서버</text>
              <rect class="box" x="640" y="14" width="180" height="36"/>
              <text x="730" y="38" text-anchor="middle" class="strong">스마트폰</text>
              <line class="life" x1="135" y1="50" x2="135" y2="285"/>
              <line class="life" x1="405" y1="50" x2="405" y2="285"/>
              <line class="life" x1="730" y1="50" x2="730" y2="285"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="135" y1="90" x2="399" y2="90"/>
                <text x="267" y="81" text-anchor="middle" class="small">1. 로그인 요청</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="405" y1="135" x2="634" y2="135"/>
                <text x="520" y="126" text-anchor="middle" class="small">2. 승인 요청 푸시 (번호·위치·기기 표시)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="730" y1="180" x2="411" y2="180"/>
                <text x="560" y="171" text-anchor="middle" class="small">3. 화면의 동일 숫자 선택 → 승인</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="405" y1="225" x2="141" y2="225"/>
                <text x="267" y="216" text-anchor="middle" class="small">4. 로그인 허용</text>
              </g>
            </svg>
            <figcaption>도면 31. 개선책: 화면과 같은 숫자 선택, 로그인 위치·요청 기기 표시, 비정상 신고, 승인 요청 횟수 제한.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 28 */}
        <section id="qr">
          <h2>28. QR 코드 인증 — PC의 QR을 폰으로 스캔</h2>
          <p class="sub">PC 화면의 일회용 QR을 로그인된 모바일 앱으로 스캔·승인해 PC 세션을 로그인시킨다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="QR 코드 인증 흐름 도면">
              <rect class="box" x="60" y="14" width="150" height="36"/>
              <text x="135" y="38" text-anchor="middle" class="strong">PC</text>
              <rect class="box" x="330" y="14" width="150" height="36"/>
              <text x="405" y="38" text-anchor="middle" class="strong">서버</text>
              <rect class="box" x="620" y="14" width="200" height="36"/>
              <text x="720" y="38" text-anchor="middle" class="strong">로그인된 앱</text>
              <line class="life" x1="135" y1="50" x2="135" y2="285"/>
              <line class="life" x1="405" y1="50" x2="405" y2="285"/>
              <line class="life" x1="720" y1="50" x2="720" y2="285"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="135" y1="90" x2="399" y2="90"/>
                <text x="267" y="81" text-anchor="middle" class="small">1. 일회용 세션 생성 요청</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="405" y1="135" x2="141" y2="135"/>
                <text x="267" y="126" text-anchor="middle" class="small">2. QR 코드 표시 (짧은 만료)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="714" y1="180" x2="141" y2="180"/>
                <text x="430" y="171" text-anchor="middle" class="small">3. 앱이 QR 스캔 (대상 기기 확인)</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="720" y1="225" x2="411" y2="225"/>
                <text x="565" y="216" text-anchor="middle" class="small">4. 앱에서 승인</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow ret" x1="405" y1="270" x2="141" y2="270"/>
                <text x="267" y="261" text-anchor="middle" class="small">5. PC 세션 로그인 완료</text>
              </g>
            </svg>
            <figcaption>도면 32. QR 값은 일회용·짧은 만료. 스캔만으로 즉시 승인하지 말고 승인 화면에 대상 기기를 표시, 세션 고정 공격을 방지한다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 29 */}
        <section id="adaptive">
          <h2>29. 위험 기반 · 적응형 인증</h2>
          <p class="sub">접속 위험도를 계산해 인증 강도를 바꾼다. 편의성과 보안을 함께 확보한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 260" role="img" aria-label="적응형 인증 결정 도면">
              <rect class="box" x="30" y="90" width="200" height="80"/>
              <text x="130" y="120" text-anchor="middle" class="strong">로그인 시도</text>
              <text x="130" y="142" text-anchor="middle" class="small">기기·위치·시간·실패횟수</text>

              <rect class="boxdark" x="350" y="90" width="200" height="80"/>
              <text x="450" y="120" text-anchor="middle" class="strong ondark">위험도 계산</text>
              <text x="450" y="142" text-anchor="middle" class="small">새 국가? Tor/VPN? 고액?</text>

              <rect class="box" x="680" y="30" width="200" height="70"/>
              <text x="780" y="60" text-anchor="middle" class="small">낮음 → 비밀번호만</text>
              <text x="780" y="82" text-anchor="middle" class="small"></text>
              <rect class="box" x="680" y="160" width="200" height="70"/>
              <text x="780" y="190" text-anchor="middle" class="small">높음 → 비밀번호</text>
              <text x="780" y="212" text-anchor="middle" class="small">+ 패스키/추가 인증</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="230" y1="130" x2="344" y2="130"/>
                <text x="287" y="80" text-anchor="middle" class="small">1. 신호 수집</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="550" y1="115" x2="676" y2="70"/>
                <text x="620" y="105" text-anchor="middle" class="small">2a. 저위험</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="550" y1="145" x2="676" y2="190"/>
                <text x="620" y="180" text-anchor="middle" class="small">2b. 고위험</text>
              </g>
            </svg>
            <figcaption>도면 33. 평소 기기+정상 위치면 비밀번호만, 새 국가+관리자 접근이면 추가 인증을 요구한다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 30 */}
        <section id="continuous">
          <h2>30. 연속 인증 (Step-up Authentication)</h2>
          <p class="sub">로그인 시점뿐 아니라 이용 중에도 사용자를 확인하고, 중요 기능에서 인증 강도를 높인다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 240" role="img" aria-label="Step-up 인증 도면">
              <rect class="box" x="40" y="90" width="180" height="60"/>
              <text x="130" y="116" text-anchor="middle" class="small">일반 페이지 조회</text>
              <text x="130" y="136" text-anchor="middle" class="small">기존 세션 허용</text>

              <rect class="box" x="300" y="90" width="180" height="60"/>
              <text x="390" y="116" text-anchor="middle" class="small">비밀번호 변경</text>
              <text x="390" y="136" text-anchor="middle" class="small">최근 인증 확인</text>

              <rect class="box" x="560" y="90" width="180" height="60"/>
              <text x="650" y="116" text-anchor="middle" class="small">계좌·결제 변경</text>
              <text x="650" y="136" text-anchor="middle" class="small">MFA 재인증</text>

              <rect class="boxdark" x="770" y="90" width="110" height="60"/>
              <text x="825" y="116" text-anchor="middle" class="small ondark">관리자 설정</text>
              <text x="825" y="136" text-anchor="middle" class="small">패스키 재인증</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="220" y1="120" x2="294" y2="120"/>
                <text x="257" y="75" text-anchor="middle" class="small">민감도 ↑</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="480" y1="120" x2="554" y2="120"/>
                <text x="517" y="75" text-anchor="middle" class="small">민감도 ↑</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="740" y1="120" x2="764" y2="120"/>
                <text x="752" y="75" text-anchor="middle" class="small">민감도 ↑</text>
              </g>
            </svg>
            <figcaption>도면 34. 작업의 민감도가 올라갈수록 요구하는 인증 강도가 단계적으로 높아진다(Step-up).</figcaption>
          </figure>
        </section>

        {/* ============================================================ 31 */}
        <section id="guest">
          <h2>31. 익명 · 게스트 인증</h2>
          <p class="sub">계정을 만들지 않고 임시 ID를 발급한다. 장바구니·게임 게스트·체험·임시 저장에 쓰인다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 260" role="img" aria-label="게스트 인증 도면">
              <rect class="box" x="95" y="14" width="180" height="36"/>
              <text x="185" y="38" text-anchor="middle" class="strong">앱</text>
              <rect class="box" x="605" y="14" width="220" height="36"/>
              <text x="715" y="38" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="185" y1="50" x2="185" y2="245"/>
              <line class="life" x1="715" y1="50" x2="715" y2="245"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="185" y1="95" x2="709" y2="95"/>
                <text x="450" y="86" text-anchor="middle" class="small">1. 앱 실행 → 임시 ID 요청</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="715" y1="140" x2="191" y2="140"/>
                <text x="450" y="131" text-anchor="middle" class="small">2. 게스트 토큰 발급 · 게스트 데이터 저장</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="185" y1="200" x2="709" y2="200"/>
                <text x="450" y="191" text-anchor="middle" class="small">3. 이후 정식 계정과 연결(전환)</text>
              </g>
            </svg>
            <figcaption>도면 35. 게스트 토큰을 잃으면 데이터 복구가 어려우므로 <strong>정식 계정 전환 기능</strong>이 필요하다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 32 */}
        <section id="httpbasic">
          <h2>32. HTTP Basic · Digest 인증</h2>
          <p class="sub">요청마다 자격증명을 보내는 오래된 방식. 일반 사용자 서비스 로그인엔 권장하지 않는다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 210" role="img" aria-label="HTTP Basic 인증 도면">
              <rect class="box" x="95" y="14" width="200" height="36"/>
              <text x="195" y="38" text-anchor="middle" class="strong">클라이언트</text>
              <rect class="box" x="605" y="14" width="200" height="36"/>
              <text x="705" y="38" text-anchor="middle" class="strong">서버</text>
              <line class="life" x1="195" y1="50" x2="195" y2="195"/>
              <line class="life" x1="705" y1="50" x2="705" y2="195"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="195" y1="95" x2="699" y2="95"/>
                <text x="450" y="86" text-anchor="middle" class="small">1. Authorization: Basic base64(id:pw)</text>
              </g>
              <g class="msg" data-step="2">
                <path class="arrow" d="M 705 125 C 800 125 800 160 711 160"/>
                <text x="820" y="145" text-anchor="end" class="small">2. 디코딩·검증 (Base64는 암호화 아님)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="705" y1="190" x2="201" y2="190"/>
                <text x="450" y="181" text-anchor="middle" class="small">3. 응답</text>
              </g>
            </svg>
            <figcaption>도면 36. Base64는 암호화가 아니므로 HTTPS가 없으면 자격증명이 그대로 노출된다. Digest는 해시를 보내 일부 개선했지만 호환성이 낮다 — 현재는 세션/OIDC를 쓴다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 33 */}
        <section id="windows">
          <h2>33. Windows 통합 인증</h2>
          <p class="sub">사내 Windows 환경에서 로그인된 PC 계정으로 별도 ID/PW 입력 없이 사내 서비스에 접근한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 250" role="img" aria-label="Windows 통합 인증 도면">
              <rect class="box" x="60" y="14" width="160" height="36"/>
              <text x="140" y="38" text-anchor="middle" class="strong">로그인된 PC</text>
              <rect class="box" x="340" y="14" width="180" height="36"/>
              <text x="430" y="38" text-anchor="middle" class="strong">사내 서비스</text>
              <rect class="box" x="640" y="14" width="200" height="36"/>
              <text x="740" y="38" text-anchor="middle" class="strong">Active Directory</text>
              <line class="life" x1="140" y1="50" x2="140" y2="235"/>
              <line class="life" x1="430" y1="50" x2="430" y2="235"/>
              <line class="life" x1="740" y1="50" x2="740" y2="235"/>

              <g class="msg" data-step="1">
                <line class="arrow" x1="140" y1="90" x2="424" y2="90"/>
                <text x="282" y="81" text-anchor="middle" class="small">1. 서비스 접속 (자격증명 미입력)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="430" y1="135" x2="734" y2="135"/>
                <text x="582" y="126" text-anchor="middle" class="small">2. Kerberos 티켓/NTLM 검증</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="740" y1="180" x2="436" y2="180"/>
                <text x="582" y="171" text-anchor="middle" class="small">3. 신원 확인</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="430" y1="220" x2="146" y2="220"/>
                <text x="282" y="211" text-anchor="middle" class="small">4. 자동 로그인</text>
              </g>
            </svg>
            <figcaption>도면 37. 기술은 Kerberos·NTLM·AD. NTLM은 오래된 방식이므로 가능하면 <strong>Kerberos를 우선</strong> 사용한다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 34 */}
        <section id="iot">
          <h2>34. IoT 인증 — 사람이 아니라 기기를 인증</h2>
          <p class="sub">기기별 인증서·mTLS·사전 공유 키·보안 칩 개인키를 사용한다. 모든 기기에 같은 키를 내장하면 안 된다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250" role="img" aria-label="IoT 기기 인증 도면">
              <rect class="box" x="40" y="40" width="180" height="55"/>
              <text x="130" y="65" text-anchor="middle" class="small">기기 1 (개인키 A)</text>
              <text x="130" y="84" text-anchor="middle" class="small">보안 칩에 저장</text>
              <rect class="box" x="40" y="105" width="180" height="55"/>
              <text x="130" y="130" text-anchor="middle" class="small">기기 2 (개인키 B)</text>
              <text x="130" y="149" text-anchor="middle" class="small">서로 다른 키</text>
              <rect class="box" x="40" y="170" width="180" height="55"/>
              <text x="130" y="195" text-anchor="middle" class="small">기기 3 (개인키 C)</text>
              <text x="130" y="214" text-anchor="middle" class="small"></text>

              <rect class="boxdark" x="640" y="105" width="220" height="60"/>
              <text x="750" y="132" text-anchor="middle" class="strong ondark">서버</text>
              <text x="750" y="153" text-anchor="middle" class="small">mTLS · 인증서 폐기/교체</text>

              <line class="arrow" x1="220" y1="67" x2="636" y2="125"/>
              <line class="arrow" x1="220" y1="132" x2="636" y2="135"/>
              <line class="arrow" x1="220" y1="197" x2="636" y2="145"/>
              <text x="430" y="95" text-anchor="middle" class="small">기기마다 다른 키로 mTLS 연결</text>
            </svg>
            <figcaption>도면 38. 기기마다 다른 개인키를 보안 칩에 두고 mTLS로 연결하며, 인증서 폐기·교체를 지원한다. 공용 API Key 내장은 하나만 추출돼도 전체가 위험해진다.</figcaption>
          </figure>
        </section>

        {/* ============================================================ 35 */}
        <section id="compare">
          <h2>35. 종합 비교</h2>
          <p class="sub">지금까지의 인증 방식을 개념·보안 강도·프로젝트별로 한자리에서 비교한다.</p>

          <h3>35-1. 자주 혼동하는 개념</h3>
          <table>
            <tr><th>용어</th><th>정확한 역할</th></tr>
            <tr><td>세션</td><td>서버가 인증 상태를 저장하는 방식</td></tr>
            <tr><td>쿠키</td><td>브라우저가 데이터를 보관·전송하는 수단</td></tr>
            <tr><td>토큰</td><td>인증·권한 정보를 표현하거나 참조하는 값</td></tr>
            <tr><td>JWT</td><td>토큰을 표현하는 형식</td></tr>
            <tr><td>OAuth 2.0</td><td>권한 위임 프로토콜</td></tr>
            <tr><td>OIDC</td><td>OAuth 기반 사용자 인증 프로토콜</td></tr>
            <tr><td>SAML</td><td>기업 SSO에 쓰는 인증 연동 표준</td></tr>
            <tr><td>MFA</td><td>서로 다른 인증 요소를 조합하는 방식</td></tr>
            <tr><td>RBAC</td><td>역할 기준으로 권한을 부여하는 인가 방식</td></tr>
            <tr><td>Passkey</td><td>공개키 기반 비밀번호 없는 인증</td></tr>
          </table>

          <h3>35-2. 보안 강도 비교 (사용자 인증 수단)</h3>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 320" role="img" aria-label="인증 수단 보안 강도 막대 도면">
              {/* 세로축(강도) · 가로 기준선 */}
              <line class="arrow" x1="55" y1="260" x2="55" y2="30"/>
              <text x="55" y="22" text-anchor="middle" class="small">강도</text>
              <line class="axis" x1="55" y1="260" x2="870" y2="260" stroke="currentColor" stroke-width="1.7"/>

              {/* 막대 5개 — 왼쪽(약함) → 오른쪽(강함) */}
              <rect class="bar" x="95" y="205" width="110" height="55"/>
              <text x="150" y="195" text-anchor="middle" class="small">탈취·재사용에 취약</text>
              <text x="150" y="282" text-anchor="middle" class="small strong">비밀번호</text>

              <rect class="bar" x="255" y="165" width="110" height="95"/>
              <text x="310" y="155" text-anchor="middle" class="small">SIM 스와핑·가로채기</text>
              <text x="310" y="282" text-anchor="middle" class="small strong">SMS OTP</text>

              <rect class="bar" x="415" y="125" width="110" height="135"/>
              <text x="470" y="115" text-anchor="middle" class="small">앱 기반 · SMS보다 안전</text>
              <text x="470" y="282" text-anchor="middle" class="small strong">TOTP</text>

              <rect class="bar" x="575" y="85" width="110" height="175"/>
              <text x="630" y="75" text-anchor="middle" class="small">피싱 저항(번호 일치)</text>
              <text x="630" y="282" text-anchor="middle" class="small strong">푸시 인증</text>

              <rect class="bar top" x="735" y="50" width="110" height="210"/>
              <text x="790" y="40" text-anchor="middle" class="small">피싱 불가 · 최신 권장</text>
              <text x="790" y="282" text-anchor="middle" class="small strong">패스키·보안키</text>

              <text x="150" y="302" text-anchor="middle" class="small">← 약함</text>
              <text x="790" y="302" text-anchor="middle" class="small">강함 →</text>
            </svg>
            <figcaption>도면 39. 막대가 높을수록 보안 강도가 세다. 오른쪽으로 갈수록 피싱·탈취에 강하며, 패스키·보안키가 가장 강력하다.</figcaption>
          </figure>

          <h3>35-3. 인증 방식 한눈에 비교</h3>
          <p class="sub">각 방식의 실제 구조를 컴퓨터·서버·스마트폰 도면으로 그리고, 파란 점이 데이터 흐름을 따라 움직인다.</p>
          <div class="compare-grid">
            {/* 세션 — 브라우저 → 서버 → 세션 DB */}
            <div class="cmp-card">
              <svg class="d mini anim" viewBox="0 0 300 178" role="img" aria-label="세션 방식 도면">
                {/* 모니터(브라우저) */}
                <rect class="ic" x="6" y="46" width="60" height="40" rx="4"/>
                <rect class="screen" x="11" y="51" width="50" height="26" rx="2"/>
                <rect class="ic" x="32" y="86" width="8" height="8"/>
                <rect class="ic" x="21" y="94" width="30" height="5" rx="2.5"/>
                <text x="36" y="120" text-anchor="middle" class="lbl">브라우저</text>
                {/* 서버 */}
                <rect class="ic" x="120" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="125" y1="64" x2="161" y2="64"/>
                <circle class="led" cx="131" cy="47" r="3"/>
                <rect class="vent" x="139" y="43" width="19" height="3" rx="1.5"/>
                <rect class="vent" x="139" y="49" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="131" cy="77" r="3"/>
                <rect class="vent" x="139" y="73" width="19" height="3" rx="1.5"/>
                <rect class="vent" x="139" y="79" width="19" height="3" rx="1.5"/>
                <text x="143" y="120" text-anchor="middle" class="lbl">서버</text>
                {/* 세션 DB(원통) */}
                <path class="ic" d="M234 49 v30 a23 7 0 0 0 46 0 v-30"/>
                <ellipse class="ic" cx="257" cy="49" rx="23" ry="7"/>
                <path class="sep" d="M234 61 a23 7 0 0 0 46 0"/>
                <text x="257" y="120" text-anchor="middle" class="lbl">세션 DB</text>
                {/* 흐름 */}
                <g class="msg" data-step="1">
                  <line class="flow" x1="68" y1="60" x2="118" y2="60"/>
                  <text x="93" y="34" text-anchor="middle" class="lbl-s">① 요청 + sid</text>
                </g>
                <g class="msg" data-step="2">
                  <line class="flow" x1="168" y1="60" x2="232" y2="60"/>
                  <text x="200" y="34" text-anchor="middle" class="lbl-s">② 세션 조회</text>
                </g>
              </svg>
              <p class="cmp-name">세션</p>
              <p class="cmp-note">서버가 상태 저장 · 즉시 무효화 쉬움 · 브라우저 중심 웹</p>
            </div>

            {/* 토큰 / JWT — 서버가 토큰 발급, 클라이언트가 Bearer로 재요청 */}
            <div class="cmp-card">
              <svg class="d mini anim" viewBox="0 0 300 178" role="img" aria-label="토큰/JWT 방식 도면">
                {/* JWT 배지 */}
                <rect class="badge" x="44" y="22" width="40" height="16" rx="8"/>
                <text x="64" y="34" text-anchor="middle" class="badge-t">JWT</text>
                {/* 모니터(클라이언트) */}
                <rect class="ic" x="34" y="46" width="60" height="40" rx="4"/>
                <rect class="screen" x="39" y="51" width="50" height="26" rx="2"/>
                <rect class="ic" x="60" y="86" width="8" height="8"/>
                <rect class="ic" x="49" y="94" width="30" height="5" rx="2.5"/>
                <text x="64" y="120" text-anchor="middle" class="lbl">클라이언트</text>
                {/* 서버 */}
                <rect class="ic" x="206" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="211" y1="64" x2="247" y2="64"/>
                <circle class="led" cx="217" cy="47" r="3"/>
                <rect class="vent" x="225" y="43" width="19" height="3" rx="1.5"/>
                <rect class="vent" x="225" y="49" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="217" cy="77" r="3"/>
                <rect class="vent" x="225" y="73" width="19" height="3" rx="1.5"/>
                <rect class="vent" x="225" y="79" width="19" height="3" rx="1.5"/>
                <text x="229" y="120" text-anchor="middle" class="lbl">서버 · 무상태</text>
                {/* 흐름 */}
                <g class="msg" data-step="1">
                  <line class="flow ret" x1="204" y1="58" x2="96" y2="58"/>
                  <text x="150" y="34" text-anchor="middle" class="lbl-s">① 토큰 발급</text>
                </g>
                <g class="msg" data-step="2">
                  <line class="flow" x1="96" y1="92" x2="204" y2="92"/>
                  <text x="150" y="112" text-anchor="middle" class="lbl-s">② Bearer 요청</text>
                </g>
              </svg>
              <p class="cmp-name">토큰 / JWT</p>
              <p class="cmp-note">클라이언트가 토큰 보관 · 확장 쉬움 · 모바일·API·MSA</p>
            </div>

            {/* OAuth / OIDC — 사용자 → 내 앱 → 공급자 */}
            <div class="cmp-card">
              <svg class="d mini anim" viewBox="0 0 300 178" role="img" aria-label="OAuth/OIDC 방식 도면">
                {/* 모니터(사용자) */}
                <rect class="ic" x="6" y="46" width="60" height="40" rx="4"/>
                <rect class="screen" x="11" y="51" width="50" height="26" rx="2"/>
                <rect class="ic" x="32" y="86" width="8" height="8"/>
                <rect class="ic" x="21" y="94" width="30" height="5" rx="2.5"/>
                <text x="36" y="122" text-anchor="middle" class="lbl">사용자</text>
                {/* 서버(내 앱) */}
                <rect class="ic" x="120" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="125" y1="64" x2="161" y2="64"/>
                <circle class="led" cx="131" cy="47" r="3"/>
                <rect class="vent" x="139" y="43" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="131" cy="77" r="3"/>
                <rect class="vent" x="139" y="73" width="19" height="3" rx="1.5"/>
                <text x="143" y="122" text-anchor="middle" class="lbl">내 앱</text>
                {/* 서버(공급자) + G 배지 */}
                <rect class="ic" x="234" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="239" y1="64" x2="275" y2="64"/>
                <circle class="badge" cx="257" cy="50" r="10"/>
                <text x="257" y="54" text-anchor="middle" class="badge-t">G</text>
                <rect class="vent" x="245" y="73" width="24" height="3" rx="1.5"/>
                <rect class="vent" x="245" y="79" width="24" height="3" rx="1.5"/>
                <text x="257" y="122" text-anchor="middle" class="lbl">공급자</text>
                {/* 흐름 */}
                <g class="msg" data-step="1">
                  <line class="flow" x1="68" y1="56" x2="118" y2="56"/>
                  <text x="93" y="34" text-anchor="middle" class="lbl-s">① 로그인</text>
                </g>
                <g class="msg" data-step="2">
                  <line class="flow" x1="168" y1="56" x2="232" y2="56"/>
                  <text x="200" y="34" text-anchor="middle" class="lbl-s">② 인가 코드</text>
                </g>
                <g class="msg" data-step="3">
                  <line class="flow ret" x1="232" y1="94" x2="170" y2="94"/>
                  <text x="201" y="110" text-anchor="middle" class="lbl-s">③ 토큰</text>
                </g>
              </svg>
              <p class="cmp-name">OAuth / OIDC</p>
              <p class="cmp-note">권한 위임(OAuth)+인증(OIDC) · 소셜 로그인·SSO</p>
            </div>

            {/* SAML — 브라우저 → SP → IdP → (XML 단언) */}
            <div class="cmp-card">
              <svg class="d mini anim" viewBox="0 0 300 178" role="img" aria-label="SAML 방식 도면">
                {/* 모니터(브라우저) */}
                <rect class="ic" x="6" y="46" width="60" height="40" rx="4"/>
                <rect class="screen" x="11" y="51" width="50" height="26" rx="2"/>
                <rect class="ic" x="32" y="86" width="8" height="8"/>
                <rect class="ic" x="21" y="94" width="30" height="5" rx="2.5"/>
                <text x="36" y="122" text-anchor="middle" class="lbl">브라우저</text>
                {/* 서버(SP) */}
                <rect class="ic" x="120" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="125" y1="64" x2="161" y2="64"/>
                <circle class="led" cx="131" cy="47" r="3"/>
                <rect class="vent" x="139" y="43" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="131" cy="77" r="3"/>
                <rect class="vent" x="139" y="73" width="19" height="3" rx="1.5"/>
                <text x="143" y="122" text-anchor="middle" class="lbl">SP</text>
                {/* 서버(IdP) */}
                <rect class="ic" x="234" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="239" y1="64" x2="275" y2="64"/>
                <circle class="led" cx="245" cy="47" r="3"/>
                <rect class="vent" x="253" y="43" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="245" cy="77" r="3"/>
                <rect class="vent" x="253" y="73" width="19" height="3" rx="1.5"/>
                <text x="257" y="122" text-anchor="middle" class="lbl">IdP</text>
                {/* 흐름 */}
                <g class="msg" data-step="1">
                  <line class="flow" x1="68" y1="56" x2="118" y2="56"/>
                  <text x="93" y="34" text-anchor="middle" class="lbl-s">① 접근</text>
                </g>
                <g class="msg" data-step="2">
                  <line class="flow" x1="168" y1="56" x2="232" y2="56"/>
                  <text x="200" y="34" text-anchor="middle" class="lbl-s">② 인증 요청</text>
                </g>
                <g class="msg" data-step="3">
                  <line class="flow ret" x1="232" y1="98" x2="70" y2="98"/>
                  <text x="150" y="114" text-anchor="middle" class="lbl-s">③ XML 단언(Assertion)</text>
                </g>
              </svg>
              <p class="cmp-name">SAML</p>
              <p class="cmp-note">IdP가 XML 단언 발급 · 레거시 호환 · 기업·학교 SSO</p>
            </div>

            {/* 패스키 — 서버 Challenge → 기기가 개인키로 서명 */}
            <div class="cmp-card">
              <svg class="d mini anim" viewBox="0 0 300 178" role="img" aria-label="패스키 방식 도면">
                {/* 스마트폰(기기) */}
                <rect class="ic" x="64" y="34" width="34" height="60" rx="7"/>
                <rect class="screen" x="68" y="41" width="26" height="40" rx="2"/>
                <circle cx="81" cy="87" r="2.5" fill="var(--muted)"/>
                <text x="81" y="120" text-anchor="middle" class="lbl">기기·개인키</text>
                {/* 서버 */}
                <rect class="ic" x="200" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="205" y1="64" x2="241" y2="64"/>
                <circle class="led" cx="211" cy="47" r="3"/>
                <rect class="vent" x="219" y="43" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="211" cy="77" r="3"/>
                <rect class="vent" x="219" y="73" width="19" height="3" rx="1.5"/>
                <text x="223" y="120" text-anchor="middle" class="lbl">서버·공개키</text>
                {/* 흐름 */}
                <g class="msg" data-step="1">
                  <line class="flow ret" x1="198" y1="58" x2="100" y2="58"/>
                  <text x="149" y="34" text-anchor="middle" class="lbl-s">① Challenge</text>
                </g>
                <g class="msg" data-step="2">
                  <line class="flow" x1="100" y1="92" x2="198" y2="92"/>
                  <text x="149" y="112" text-anchor="middle" class="lbl-s">② 개인키 서명</text>
                </g>
              </svg>
              <p class="cmp-name">패스키</p>
              <p class="cmp-note">기기 개인키·서버 공개키 · 피싱에 강함 · 비밀번호 없는 로그인</p>
            </div>

            {/* mTLS — 서버 ↔ 서버 상호 인증서 검증 */}
            <div class="cmp-card">
              <svg class="d mini anim" viewBox="0 0 300 178" role="img" aria-label="mTLS 방식 도면">
                {/* 서버(클라이언트) + 자물쇠 */}
                <rect class="ic" x="34" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="39" y1="58" x2="75" y2="58"/>
                <circle class="led" cx="45" cy="45" r="3"/>
                <rect class="vent" x="53" y="42" width="19" height="3" rx="1.5"/>
                <rect class="badge" x="50" y="68" width="14" height="10" rx="2"/>
                <path class="lockarc" d="M53 68 v-2 a4 4 0 0 1 8 0 v2"/>
                <text x="57" y="120" text-anchor="middle" class="lbl">클라이언트</text>
                {/* 서버 + 자물쇠 */}
                <rect class="ic" x="200" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="205" y1="58" x2="241" y2="58"/>
                <circle class="led" cx="211" cy="45" r="3"/>
                <rect class="vent" x="219" y="42" width="19" height="3" rx="1.5"/>
                <rect class="badge" x="216" y="68" width="14" height="10" rx="2"/>
                <path class="lockarc" d="M219 68 v-2 a4 4 0 0 1 8 0 v2"/>
                <text x="223" y="120" text-anchor="middle" class="lbl">서버</text>
                {/* 흐름 */}
                <g class="msg" data-step="1">
                  <line class="flow" x1="82" y1="56" x2="200" y2="56"/>
                  <text x="141" y="34" text-anchor="middle" class="lbl-s">① 인증서 제시</text>
                </g>
                <g class="msg" data-step="2">
                  <line class="flow ret" x1="200" y1="92" x2="82" y2="92"/>
                  <text x="141" y="112" text-anchor="middle" class="lbl-s">② 상호 검증</text>
                </g>
              </svg>
              <p class="cmp-name">mTLS</p>
              <p class="cmp-note">양쪽 모두 인증서 · 상호 인증 · 서비스 간·IoT</p>
            </div>

            {/* API Key / HMAC — 호출 앱 → 서버 API */}
            <div class="cmp-card">
              <svg class="d mini anim" viewBox="0 0 300 178" role="img" aria-label="API Key / HMAC 방식 도면">
                {/* 서버(호출 앱) */}
                <rect class="ic" x="34" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="39" y1="64" x2="75" y2="64"/>
                <circle class="led" cx="45" cy="47" r="3"/>
                <rect class="vent" x="53" y="43" width="19" height="3" rx="1.5"/>
                <rect class="vent" x="53" y="49" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="45" cy="77" r="3"/>
                <rect class="vent" x="53" y="73" width="19" height="3" rx="1.5"/>
                <text x="57" y="120" text-anchor="middle" class="lbl">호출 앱</text>
                {/* 서버 API */}
                <rect class="ic" x="200" y="34" width="46" height="60" rx="6"/>
                <line class="sep" x1="205" y1="64" x2="241" y2="64"/>
                <circle class="led" cx="211" cy="47" r="3"/>
                <rect class="vent" x="219" y="43" width="19" height="3" rx="1.5"/>
                <rect class="vent" x="219" y="49" width="19" height="3" rx="1.5"/>
                <circle class="led" cx="211" cy="77" r="3"/>
                <rect class="vent" x="219" y="73" width="19" height="3" rx="1.5"/>
                <text x="223" y="120" text-anchor="middle" class="lbl">서버 API</text>
                {/* 흐름 */}
                <g class="msg" data-step="1">
                  <line class="flow" x1="82" y1="56" x2="200" y2="56"/>
                  <text x="141" y="34" text-anchor="middle" class="lbl-s">① API Key + 서명</text>
                </g>
                <g class="msg" data-step="2">
                  <line class="flow ret" x1="200" y1="92" x2="82" y2="92"/>
                  <text x="141" y="112" text-anchor="middle" class="lbl-s">② 검증 → 200 OK</text>
                </g>
              </svg>
              <p class="cmp-name">API Key / HMAC</p>
              <p class="cmp-note">요청에 키·서명 첨부 · 앱 식별 · 서버 간·Webhook</p>
            </div>
          </div>

          <h3>35-4. 프로젝트별 추천</h3>
          <table>
            <tr><th>프로젝트</th><th>추천 인증 구성</th></tr>
            <tr><td>일반 React + Spring 웹</td><td>서버 세션 + HttpOnly 쿠키</td></tr>
            <tr><td>React SPA + Spring API</td><td>짧은 Access + Refresh Rotation 또는 BFF 세션</td></tr>
            <tr><td>모바일 앱</td><td>Authorization Code + PKCE + 보안 저장소</td></tr>
            <tr><td>소셜 로그인</td><td>OAuth 2.0 + OpenID Connect</td></tr>
            <tr><td>학교·기업 SSO</td><td>OIDC, 필요 시 SAML</td></tr>
            <tr><td>관리자 시스템</td><td>세션/OIDC + 패스키 또는 TOTP</td></tr>
            <tr><td>마이크로서비스</td><td>mTLS + 단기 서비스 토큰</td></tr>
            <tr><td>외부 공개 API</td><td>OAuth Client Credentials 또는 API Key</td></tr>
            <tr><td>Webhook</td><td>HMAC 요청 서명</td></tr>
            <tr><td>IoT 센서</td><td>기기별 인증서 + mTLS</td></tr>
            <tr><td>SSH 서버</td><td>Ed25519 공개키 인증</td></tr>
            <tr><td>비밀번호 없는 서비스</td><td>Passkey + 복구용 이메일 인증</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            단순한 브라우저 중심 서비스라면 JWT가 무조건 더 좋은 것은 아니다.
            <strong>세션 방식이 구현·통제 면에서 더 단순한 경우가 많다.</strong> 요구사항(클라이언트 종류·확장성·SSO 여부)으로 고른다.
          </div>
        </section>

        {/* ============================================================ 36 */}
        <section id="checklist">
          <h2>36. 최소 보안 체크리스트</h2>
          <p class="sub">인증 기능을 구현하거나 리뷰할 때 하나씩 점검한다.</p>
          <ul>
            <li>HTTPS 강제</li>
            <li>비밀번호 Argon2id 또는 bcrypt 해싱</li>
            <li>로그인 요청 속도 제한 · 계정 잠금 악용(DoS) 고려</li>
            <li>관리자 MFA 적용</li>
            <li>HttpOnly · Secure · SameSite 쿠키</li>
            <li>세션 ID 로그인 후 재발급</li>
            <li>CSRF 및 XSS 방어</li>
            <li>Access Token 짧게 · Refresh Token Rotation</li>
            <li>비밀번호 재설정 토큰 일회용 처리</li>
            <li>로그인·로그아웃·실패 기록 저장</li>
            <li>중요 정보 변경 시 재인증 · 모든 기기 로그아웃 기능</li>
            <li>계정 복구 절차를 본 인증보다 약하게 만들지 않기</li>
            <li>비밀키·API Key를 소스 코드에 넣지 않기</li>
            <li>OAuth 로그인에 <code>state</code> · <code>nonce</code> · PKCE 적용</li>
            <li>사용자 존재 여부가 드러나지 않는 오류 메시지</li>
          </ul>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">Argon2id</span>
            <span class="kw">WebAuthn / Passkey</span>
            <span class="kw">PKCE</span>
            <span class="kw">JWKS</span>
            <span class="kw">Refresh Token Rotation</span>
            <span class="kw">SAML 2.0</span>
            <span class="kw">TOTP (RFC 6238)</span>
            <span class="kw">mTLS</span>
            <span class="kw">FIDO2</span>
            <span class="kw">Zero Trust</span>
            <span class="kw">OWASP ASVS</span>
          </p>
          <p class="sub" style="margin-top:12px">
            관련 문서: <RouterLink to="/auth-security">로그인/회원가입 시스템 보안 완전 정리</RouterLink> — JWT·OAuth·SSO·Keycloak 구현을 더 깊게 다룹니다.
          </p>
        </section>

        <footer>
          인증(Authentication) 방법 총정리 학습 문서 · 2026-09
        </footer>

      </div>
    )
  },
})
