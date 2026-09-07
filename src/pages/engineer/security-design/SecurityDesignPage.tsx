import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './security-design.css'

export default defineComponent({
  name: 'SecurityDesignPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>소프트웨어 개발 보안 설계</h1>
          <p>정보처리기사 실기 대비 학습 문서. 보안의 3요소(CIA)와 확장 요소 → SW 개발 보안 체계(Secure SDLC와
          방법론) → 시큐어 코딩 가이드 7항목 → 대표 보안 약점과 대책 → 암호 알고리즘 총정리(대칭·비대칭·해시)
          → 암호 기술 활용(솔트·전자 서명·PKI) 순서로, 실기 최다 빈출 개념을 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 데이터·처리의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>SW 개발 보안 개요 — 보안의 3요소</a></li>
            <li><a href="#framework" onClick={(e) => scrollToId(e, 'framework')}>SW 개발 보안 체계 — Secure SDLC와 방법론</a></li>
            <li><a href="#secure-coding" onClick={(e) => scrollToId(e, 'secure-coding')}>시큐어 코딩 가이드 7항목</a></li>
            <li><a href="#weakness" onClick={(e) => scrollToId(e, 'weakness')}>대표 보안 약점과 대책</a></li>
            <li><a href="#crypto" onClick={(e) => scrollToId(e, 'crypto')}>암호 알고리즘 총정리</a></li>
            <li><a href="#crypto-use" onClick={(e) => scrollToId(e, 'crypto-use')}>암호 기술 활용 — 솔트 · 전자 서명 · PKI</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. SW 개발 보안 개요 ===================== */}
        <section id="overview">
          <h2>1. SW 개발 보안 개요 — 보안의 3요소</h2>
          <p class="sub">실기 시험은 "설명을 읽고 보안 요소의 이름을 쓰는" 형태로 매년 나올 수 있는 최단골 주제다.
          기밀성·무결성·가용성의 정의 문장을 통째로 암기하자.</p>

          <h3>1-1. 보안의 3요소 (CIA Triad — 실기 최단골)</h3>
          <table>
            <tr><th>요소</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td><strong>기밀성</strong></td><td>Confidentiality</td>
              <td><strong>인가된(허가된) 사용자만</strong> 정보에 접근할 수 있도록 하여,
              인가되지 않은 사용자에게 정보가 <strong>노출·유출되지 않도록</strong> 보호하는 성질</td>
            </tr>
            <tr>
              <td><strong>무결성</strong></td><td>Integrity</td>
              <td>인가된 사용자만 정보를 <strong>수정(변경)</strong>할 수 있도록 하여,
              정보가 <strong>위조·변조·훼손되지 않고 정확성·완전성</strong>을 유지하는 성질</td>
            </tr>
            <tr>
              <td><strong>가용성</strong></td><td>Availability</td>
              <td>인가된 사용자가 <strong>필요할 때 언제든지</strong> 정보와 자원에
              <strong>접근·사용할 수 있는</strong> 성질 (서비스 중단 없이 제공)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            문장 속 키워드로 구분한다 — <strong>노출 방지 = 기밀성</strong>, <strong>변경·위변조 방지 = 무결성</strong>,
            <strong>언제든지 사용 가능 = 가용성</strong>. 예를 들어 "DDoS 공격"이 침해하는 요소는 <strong>가용성</strong>이다.
          </div>

          <h3>1-2. 확장 보안 요소 (단골)</h3>
          <table>
            <tr><th>요소</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td><strong>인증</strong></td><td>Authentication</td>
              <td>시스템에 접근하는 사용자가 <strong>본인이 맞는지 신원을 확인</strong>하는 것
              (예: 비밀번호, 생체 인식, OTP)</td>
            </tr>
            <tr>
              <td><strong>부인 방지</strong></td><td>Non-repudiation</td>
              <td>데이터를 송·수신한 자가 송·수신 <strong>사실을 나중에 부인할 수 없도록</strong>
              증거를 제공하는 것 (대표 기술: <strong>전자 서명</strong>)</td>
            </tr>
          </table>

          <h3>1-3. 관련 용어 — 자산 · 위협 · 취약점 · 위험 (단골 표)</h3>
          <table>
            <tr><th>용어</th><th>영문</th><th>의미</th><th>예시</th></tr>
            <tr>
              <td><strong>자산</strong></td><td>Asset</td>
              <td>조직이 <strong>보호해야 할 가치 있는 대상</strong></td>
              <td>서버, 데이터베이스, 소스 코드, 고객 정보</td>
            </tr>
            <tr>
              <td><strong>위협</strong></td><td>Threat</td>
              <td>자산에 <strong>손실·해를 끼칠 수 있는 원인·행위</strong></td>
              <td>해킹, 악성코드, 내부자 유출, 자연재해</td>
            </tr>
            <tr>
              <td><strong>취약점</strong></td><td>Vulnerability</td>
              <td>위협이 실제로 발생할 수 있게 하는 <strong>자산의 약점·허점</strong></td>
              <td>패치되지 않은 소프트웨어, 약한 비밀번호</td>
            </tr>
            <tr>
              <td><strong>위험</strong></td><td>Risk</td>
              <td>위협이 취약점을 이용해 자산에 <strong>손실을 일으킬 가능성</strong></td>
              <td>위험 = 자산 × 위협 × 취약점으로 평가</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            위협은 "외부의 공격 원인", 취약점은 "내부의 약점"이다. 설명을 읽고 두 용어를 구분해 쓰는 문제가 나온다.
          </div>
        </section>

        {/* ===================== 2. SW 개발 보안 체계 ===================== */}
        <section id="framework">
          <h2>2. SW 개발 보안 체계 — Secure SDLC와 방법론</h2>
          <p class="sub">보안은 개발이 끝난 뒤가 아니라 소프트웨어 개발 생명주기(SDLC) 전체, 특히
          <strong>설계 단계부터</strong> 적용해야 한다는 것이 핵심이다.</p>

          <h3>2-1. 관련 기관</h3>
          <table>
            <tr><th>기관</th><th>역할</th></tr>
            <tr>
              <td><strong>과학기술정보통신부</strong></td>
              <td>SW 개발 보안 관련 <strong>정책·제도를 총괄</strong>하고 법령·가이드의 기준을 정한다</td>
            </tr>
            <tr>
              <td><strong>한국인터넷진흥원 (KISA)</strong></td>
              <td><strong>시큐어 코딩 가이드 배포, 기술 지원, 보안 약점 진단</strong> 등 실무 지원을 담당한다.
              국산 암호 알고리즘 <strong>SEED</strong>를 개발한 기관이기도 하다</td>
            </tr>
          </table>

          <h3>2-2. Secure SDLC — 보안 적용 시점</h3>
          <p>Secure SDLC는 SDLC의 <strong>모든 단계(요구사항 분석 → 설계 → 구현 → 테스트 → 유지보수)에
          보안 활동을 포함</strong>시키는 개발 프로세스다. 보안 결함은 <strong>늦게 발견될수록 수정 비용이
          기하급수적으로 커지므로</strong>, 구현 이후가 아니라 <strong>요구사항 분석·설계 단계부터</strong> 보안을
          반영하는 것이 원칙이다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 210" role="img" aria-label="Secure SDLC 단계별 보안 활동 도면">
              <rect class="boxdark" x="30" y="20" width="840" height="42" />
              <text x="450" y="47" text-anchor="middle" class="strong">Secure SDLC — 전체 단계에 보안 활동 적용 (이를수록 수정 비용이 적다)</text>

              <rect class="box" x="30" y="110" width="140" height="46" />
              <text x="100" y="139" text-anchor="middle" class="small strong">요구사항 분석</text>
              <rect class="boxdark" x="205" y="110" width="140" height="46" />
              <text x="275" y="139" text-anchor="middle" class="small strong">설계</text>
              <rect class="box" x="380" y="110" width="140" height="46" />
              <text x="450" y="139" text-anchor="middle" class="small strong">구현 (시큐어 코딩)</text>
              <rect class="box" x="555" y="110" width="140" height="46" />
              <text x="625" y="139" text-anchor="middle" class="small strong">테스트</text>
              <rect class="box" x="730" y="110" width="140" height="46" />
              <text x="800" y="139" text-anchor="middle" class="small strong">유지보수</text>

              <line class="arrow" x1="170" y1="133" x2="201" y2="133" />
              <line class="arrow" x1="345" y1="133" x2="376" y2="133" />
              <line class="arrow" x1="520" y1="133" x2="551" y2="133" />
              <line class="arrow" x1="695" y1="133" x2="726" y2="133" />

              <line class="arrow" x1="275" y1="106" x2="275" y2="66" />
              <text x="275" y="185" text-anchor="middle" class="small">보안 요구사항·위협 모델링은 설계 단계부터 반영</text>
            </svg>
            <figcaption>도면 1. Secure SDLC — 보안 활동은 개발 완료 후가 아니라 요구사항 분석·설계 단계부터
            생명주기 전체에 걸쳐 적용한다.</figcaption>
          </figure>

          <h3>2-3. Secure SDLC 방법론 3가지 (단골)</h3>
          <table>
            <tr><th>방법론</th><th>한 줄 정리</th></tr>
            <tr>
              <td><strong>Seven Touchpoints</strong></td>
              <td>실무에서 검증된 <strong>7가지 보안 모범 사례(코드 검토, 위험 분석 등)</strong>를
              SDLC의 각 단계에 통합하는 방법론</td>
            </tr>
            <tr>
              <td><strong>MS SDL</strong></td>
              <td><strong>마이크로소프트</strong>가 자사 제품 개발에 적용하기 위해 만든
              보안 개발 생명주기(Security Development Lifecycle) 방법론</td>
            </tr>
            <tr>
              <td><strong>CLASP</strong></td>
              <td><strong>활동(Activity) 중심·역할(Role) 기반</strong>의 프로세스로,
              이미 운영 중인 시스템(기존 개발 조직)에 적용하기 좋은 방법론</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            "7가지 모범 사례 → <strong>Seven Touchpoints</strong>",
            "마이크로소프트 → <strong>MS SDL</strong>",
            "활동·역할 중심, 운영 중 시스템 → <strong>CLASP</strong>"으로 키워드 매칭만 해도 충분하다.
          </div>
        </section>

        {/* ===================== 3. 시큐어 코딩 가이드 7항목 ===================== */}
        <section id="secure-coding">
          <h2>3. 시큐어 코딩 가이드 7항목</h2>
          <p class="sub">KISA "소프트웨어 개발 보안 가이드"의 보안 약점 7개 유형. <strong>항목 이름 7개와
          각 항목의 대표 취약점</strong>을 짝지어 쓰는 문제가 실기 최단골이다.</p>

          <table>
            <tr><th>항목</th><th>의미</th><th>대표 취약점</th></tr>
            <tr>
              <td><strong>1. 입력 데이터 검증 및 표현</strong></td>
              <td>외부 입력값을 <strong>검증하지 않거나 잘못 검증</strong>할 때 생기는 약점</td>
              <td><strong>SQL 삽입(Injection), XSS</strong>, 경로 조작, 운영체제 명령어 삽입</td>
            </tr>
            <tr>
              <td><strong>2. 보안 기능</strong></td>
              <td><strong>인증·접근 제어·기밀성·암호화</strong> 등을 부적절하게 구현할 때 생기는 약점</td>
              <td>부적절한 인가, <strong>하드코딩된 비밀번호</strong>, 취약한 암호화 알고리즘 사용</td>
            </tr>
            <tr>
              <td><strong>3. 시간 및 상태</strong></td>
              <td>동시 수행 환경에서 <strong>시간과 상태를 부적절하게 관리</strong>할 때 생기는 약점</td>
              <td><strong>TOCTOU 경쟁 조건(Race Condition)</strong>, 종료되지 않는 반복문·재귀</td>
            </tr>
            <tr>
              <td><strong>4. 에러 처리</strong></td>
              <td>오류를 처리하지 않거나 <strong>오류 정보를 과도하게 노출</strong>할 때 생기는 약점</td>
              <td>오류 메시지를 통한 정보 노출, 오류 상황 대응 부재</td>
            </tr>
            <tr>
              <td><strong>5. 코드 오류</strong></td>
              <td>개발자의 <strong>코딩 실수(타입 변환, 자원 관리 오류)</strong>로 생기는 약점</td>
              <td>널 포인터(Null Pointer) 역참조, 자원 미반환(메모리 누수)</td>
            </tr>
            <tr>
              <td><strong>6. 캡슐화</strong></td>
              <td>중요한 데이터·기능을 <strong>불충분하게 캡슐화</strong>하여 정보가 노출되는 약점</td>
              <td><strong>제거되지 않은 디버그 코드</strong>, 잘못된 세션에 의한 정보 노출</td>
            </tr>
            <tr>
              <td><strong>7. API 오용</strong></td>
              <td>의도된 사용과 다르게 <strong>API를 잘못 사용</strong>할 때 생기는 약점</td>
              <td>취약한(금지된) API 사용, DNS 조회에 의존한 보안 결정</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            짝짓기 최단골 — <strong>입력 검증 → SQL 삽입·XSS</strong>,
            <strong>시간 및 상태 → TOCTOU 경쟁 조건</strong>,
            <strong>캡슐화 → 디버그 코드 노출</strong>,
            <strong>보안 기능 → 하드코딩된 비밀번호</strong>. 취약점을 보고 소속 항목을 답하게 한다.
          </div>
        </section>

        {/* ===================== 4. 대표 보안 약점과 대책 ===================== */}
        <section id="weakness">
          <h2>4. 대표 보안 약점과 대책</h2>
          <p class="sub">공격 방식 설명을 읽고 <strong>공격 이름</strong>을 쓰거나, 공격별 <strong>대책</strong>을
          쓰는 문제가 단골이다. 공격 · 방식 · 대책을 세트로 암기한다.</p>

          <table>
            <tr><th>보안 약점</th><th>공격 방식</th><th>대책</th></tr>
            <tr>
              <td><strong>SQL 삽입<br/>(SQL Injection)</strong></td>
              <td>입력창·URL에 <strong>악의적인 SQL 구문</strong>을 삽입하여
              데이터베이스를 비정상적으로 조회·조작하는 공격</td>
              <td><strong>Prepared Statement(바인딩 매개변수)</strong> 사용,
              입력값 필터링, DB 계정 최소 권한</td>
            </tr>
            <tr>
              <td><strong>XSS<br/>(크로스 사이트 스크립팅)</strong></td>
              <td>게시판 등에 <strong>악성 스크립트를 삽입</strong>해 두고, 그 페이지를 열람한
              <strong>다른 사용자의 브라우저에서 실행</strong>되게 하는 공격 (쿠키·세션 탈취)</td>
              <td>입력값 필터링, <strong>특수문자 이스케이프 처리</strong>
              (예: {'<'} → {'&'}lt;)</td>
            </tr>
            <tr>
              <td><strong>CSRF<br/>(사이트 간 요청 위조)</strong></td>
              <td>로그인된 사용자가 <strong>자신의 의도와 무관하게</strong> 공격자가 만든 요청(글 등록,
              송금 등)을 서버에 보내도록 위조하는 공격</td>
              <td><strong>CSRF 토큰</strong> 검증, 재인증 요구, Referer 검증</td>
            </tr>
            <tr>
              <td><strong>버퍼 오버플로<br/>(Buffer Overflow)</strong></td>
              <td>버퍼(할당된 메모리) <strong>크기보다 큰 데이터를 입력</strong>하여
              인접 메모리를 덮어쓰고 프로그램 흐름을 탈취하는 공격</td>
              <td>입력 길이 <strong>경계 검사(Bounds Check)</strong>,
              안전한 함수 사용(strncpy 등), 스택 가드</td>
            </tr>
            <tr>
              <td><strong>하드코딩된 비밀번호</strong></td>
              <td>소스 코드 안에 비밀번호·암호화 키를 <strong>문자열 상수로 직접 기록</strong>하여
              코드 유출 시 그대로 노출되는 약점</td>
              <td>비밀번호를 <strong>암호화하여 별도 파일·키 관리 시스템에 보관</strong>,
              코드와 분리</td>
            </tr>
            <tr>
              <td><strong>경로 조작 및 자원 삽입<br/>(Path Traversal)</strong></td>
              <td>입력값에 <strong>../ 같은 상위 경로 문자</strong>를 넣어 접근이 허용되지 않은
              파일·디렉터리에 접근하는 공격</td>
              <td>경로 문자(<code>..</code>, <code>/</code>, <code>\</code>) 필터링,
              파일명 화이트리스트 검증</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <strong>XSS와 CSRF 구분</strong> — XSS는 사용자 브라우저에서 <strong>스크립트가 실행</strong>되는 것이고,
            CSRF는 사용자의 권한으로 <strong>위조된 요청이 서버에 전송</strong>되는 것이다.
            "스크립트 실행 = XSS, 요청 위조 = CSRF"로 구분한다.
          </div>
        </section>

        {/* ===================== 5. 암호 알고리즘 총정리 ===================== */}
        <section id="crypto">
          <h2>5. 암호 알고리즘 총정리</h2>
          <p class="sub">실기 최다 빈출 섹션. 알고리즘 이름을 보고 <strong>대칭키/비대칭키/해시로 분류</strong>하는
          문제와, 설명을 읽고 <strong>알고리즘 이름</strong>을 쓰는 문제가 거의 매회 출제된다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 400" role="img" aria-label="암호 알고리즘 분류 트리 도면">
              <rect class="boxdark" x="360" y="16" width="180" height="44" />
              <text x="450" y="44" text-anchor="middle" class="strong">암호 알고리즘</text>

              <line class="arrow" x1="450" y1="60" x2="205" y2="106" />
              <line class="arrow" x1="450" y1="60" x2="510" y2="106" />
              <line class="arrow" x1="450" y1="60" x2="765" y2="106" />

              <rect class="box" x="80" y="110" width="240" height="56" />
              <text x="200" y="132" text-anchor="middle" class="strong">대칭키 (비밀키) 암호</text>
              <text x="200" y="153" text-anchor="middle" class="small">암호화 키 = 복호화 키</text>

              <rect class="box" x="400" y="110" width="220" height="56" />
              <text x="510" y="132" text-anchor="middle" class="strong">비대칭키 (공개키) 암호</text>
              <text x="510" y="153" text-anchor="middle" class="small">공개키 · 개인키 한 쌍</text>

              <rect class="box" x="680" y="110" width="180" height="56" />
              <text x="770" y="132" text-anchor="middle" class="strong">해시 (일방향)</text>
              <text x="770" y="153" text-anchor="middle" class="small">복호화 불가</text>

              <line class="arrow" x1="160" y1="166" x2="130" y2="216" />
              <line class="arrow" x1="250" y1="166" x2="300" y2="216" />
              <line class="arrow" x1="510" y1="166" x2="510" y2="216" />
              <line class="arrow" x1="770" y1="166" x2="770" y2="216" />

              <rect class="boxsoft" x="40" y="220" width="180" height="160" />
              <text x="130" y="245" text-anchor="middle" class="small strong">블록 암호</text>
              <text x="130" y="272" text-anchor="middle" class="small">DES · 3DES · AES</text>
              <text x="130" y="295" text-anchor="middle" class="small">SEED · ARIA (국산)</text>
              <text x="130" y="318" text-anchor="middle" class="small">IDEA · LEA (국산)</text>

              <rect class="boxsoft" x="245" y="220" width="140" height="160" />
              <text x="315" y="245" text-anchor="middle" class="small strong">스트림 암호</text>
              <text x="315" y="272" text-anchor="middle" class="small">RC4</text>
              <text x="315" y="295" text-anchor="middle" class="small">LFSR</text>

              <rect class="boxsoft" x="410" y="220" width="200" height="160" />
              <text x="510" y="245" text-anchor="middle" class="small strong">공개키 알고리즘</text>
              <text x="510" y="272" text-anchor="middle" class="small">RSA (소인수분해)</text>
              <text x="510" y="295" text-anchor="middle" class="small">ECC (타원곡선)</text>
              <text x="510" y="318" text-anchor="middle" class="small">ElGamal (이산대수)</text>
              <text x="510" y="341" text-anchor="middle" class="small">디피-헬만 (키 교환)</text>

              <rect class="boxsoft" x="660" y="220" width="220" height="160" />
              <text x="770" y="245" text-anchor="middle" class="small strong">해시 함수</text>
              <text x="770" y="272" text-anchor="middle" class="small">MD5</text>
              <text x="770" y="295" text-anchor="middle" class="small">SHA-1 · SHA-256</text>
              <text x="770" y="318" text-anchor="middle" class="small">HAS-160 (국산)</text>
            </svg>
            <figcaption>도면 2. 암호 알고리즘 분류 트리 — 대칭키(블록/스트림) · 비대칭키 · 해시의 3분류와
            각 분류의 대표 알고리즘. 보기에서 알고리즘을 골라 분류하는 문제가 최다 빈출이다.</figcaption>
          </figure>

          <h3>5-1. 대칭키(비밀키) 암호 알고리즘</h3>
          <p>암호화와 복호화에 <strong>같은 키</strong>를 사용한다. 속도가 빠르지만 키를 안전하게 나눠 갖는
          <strong>키 분배가 어렵다</strong>.</p>
          <table>
            <tr><th>구분</th><th>알고리즘</th><th>특징</th></tr>
            <tr>
              <td rowspan={7}><strong>블록 암호</strong><br/>(고정 크기 블록 단위 암호화)</td>
              <td><strong>DES</strong></td>
              <td>미국 표준(1975). <strong>64비트 블록, 56비트 키</strong>. 키가 짧아 현재는 안전하지 않음</td>
            </tr>
            <tr>
              <td><strong>3DES</strong></td>
              <td>DES를 <strong>3번 반복 적용</strong>하여 키 길이를 늘린 알고리즘</td>
            </tr>
            <tr>
              <td><strong>AES</strong></td>
              <td>DES를 대체한 미국 NIST 표준(2001). 128비트 블록,
              키 길이 <strong>128 · 192 · 256비트</strong> (단골)</td>
            </tr>
            <tr>
              <td><strong>SEED</strong></td>
              <td><strong>국산.</strong> 1999년 <strong>KISA(한국인터넷진흥원)</strong>가 개발.
              128비트 블록 (실기 최단골)</td>
            </tr>
            <tr>
              <td><strong>ARIA</strong></td>
              <td><strong>국산.</strong> 2004년 <strong>학계 · 연구소 · 정부(학·연·관)</strong>가 공동 개발.
              128비트 블록, 키 128 · 192 · 256비트 (실기 최단골)</td>
            </tr>
            <tr>
              <td><strong>IDEA</strong></td>
              <td>스위스에서 개발. DES를 대체하기 위해 만든 <strong>128비트 키</strong> 블록 암호</td>
            </tr>
            <tr>
              <td><strong>LEA</strong></td>
              <td><strong>국산 경량</strong> 블록 암호. IoT 등 저전력·모바일 환경용</td>
            </tr>
            <tr>
              <td rowspan={2}><strong>스트림 암호</strong><br/>(비트/바이트 단위 연속 암호화)</td>
              <td><strong>RC4</strong></td>
              <td>대표적인 스트림 암호. SSL, WEP 등에 사용되었음</td>
            </tr>
            <tr>
              <td><strong>LFSR</strong></td>
              <td>선형 피드백 시프트 레지스터 — 스트림 암호의 키 스트림 생성기</td>
            </tr>
          </table>

          <h3>5-2. 비대칭키(공개키) 암호 알고리즘</h3>
          <p>암호화 키(<strong>공개키</strong>)와 복호화 키(<strong>개인키</strong>)가 서로 다르다.
          키 분배 문제를 해결했지만 대칭키보다 <strong>속도가 느리다</strong>.</p>
          <table>
            <tr><th>알고리즘</th><th>수학적 기반</th><th>특징</th></tr>
            <tr>
              <td><strong>RSA</strong></td>
              <td><strong>큰 수의 소인수분해</strong>가 어렵다는 점</td>
              <td>1977년 MIT의 Rivest·Shamir·Adleman이 개발. 가장 널리 쓰이는 공개키 알고리즘 (실기 최단골)</td>
            </tr>
            <tr>
              <td><strong>ECC</strong></td>
              <td><strong>타원 곡선</strong> 위의 이산대수 문제</td>
              <td>RSA보다 <strong>짧은 키로 같은 보안 강도</strong> — 모바일·IoT에 적합</td>
            </tr>
            <tr>
              <td><strong>ElGamal</strong></td>
              <td><strong>이산대수</strong> 문제</td>
              <td>디피-헬만을 기반으로 한 공개키 암호·전자 서명 알고리즘</td>
            </tr>
            <tr>
              <td><strong>디피-헬만<br/>(Diffie-Hellman)</strong></td>
              <td>이산대수 문제</td>
              <td>1976년 발표된 <strong>최초의 (공개키 방식) 키 교환 알고리즘</strong>.
              공개 채널에서 안전하게 대칭키를 나눠 가진다 (단골)</td>
            </tr>
          </table>

          <h3>5-3. 해시(일방향) 함수</h3>
          <p>임의 길이의 입력을 <strong>고정 길이의 해시값</strong>으로 변환한다.
          <strong>일방향(복호화 불가)</strong>이며, 데이터 <strong>무결성 검증</strong>과 비밀번호 저장에 쓰인다. (단골)</p>
          <table>
            <tr><th>알고리즘</th><th>해시 길이</th><th>특징</th></tr>
            <tr><td><strong>MD5</strong></td><td>128비트</td><td>충돌이 발견되어 현재는 보안 용도로 부적합</td></tr>
            <tr><td><strong>SHA-1</strong></td><td>160비트</td><td>미국 NSA 설계. 역시 충돌 발견으로 퇴출 추세</td></tr>
            <tr><td><strong>SHA-256</strong></td><td>256비트</td><td>SHA-2 계열. 현재 널리 권장되는 표준 해시</td></tr>
            <tr><td><strong>HAS-160</strong></td><td>160비트</td><td><strong>국산</strong> 해시 함수. 국내 전자 서명 표준(KCDSA)에 사용</td></tr>
          </table>

          <h3>5-4. 대칭키 vs 비대칭키 비교 (단골 표)</h3>
          <table>
            <tr><th>비교 항목</th><th>대칭키 (비밀키)</th><th>비대칭키 (공개키)</th></tr>
            <tr>
              <td><strong>키 관계</strong></td>
              <td>암호화 키 = 복호화 키</td>
              <td>암호화 키(공개키) ≠ 복호화 키(개인키)</td>
            </tr>
            <tr>
              <td><strong>필요한 키 개수 (사용자 N명)</strong></td>
              <td><strong>N(N-1)/2</strong>개</td>
              <td><strong>2N</strong>개 (한 사람당 공개키 + 개인키)</td>
            </tr>
            <tr>
              <td><strong>속도</strong></td>
              <td><strong>빠르다</strong> (대용량 데이터 암호화에 사용)</td>
              <td><strong>느리다</strong> (키 교환·전자 서명에 사용)</td>
            </tr>
            <tr>
              <td><strong>키 분배</strong></td>
              <td><strong>어렵다</strong> (키를 몰래 전달해야 함)</td>
              <td><strong>쉽다</strong> (공개키는 공개해도 됨)</td>
            </tr>
            <tr>
              <td><strong>대표 알고리즘</strong></td>
              <td>DES, AES, SEED, ARIA, LEA</td>
              <td>RSA, ECC, ElGamal, 디피-헬만</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">국산 알고리즘 (실기 최단골)</span><br/>
            <strong>SEED</strong>(대칭키 · KISA 개발) ·
            <strong>ARIA</strong>(대칭키 · 학계-연구소-정부 공동 개발) ·
            <strong>LEA</strong>(대칭키 · 경량, IoT용) ·
            <strong>HAS-160</strong>(해시 함수).<br/>
            "국산 암호 알고리즘을 모두 고르시오" 또는 "KISA가 개발한 128비트 블록 암호는?" 형태로 출제된다.
          </div>
        </section>

        {/* ===================== 6. 암호 기술 활용 ===================== */}
        <section id="crypto-use">
          <h2>6. 암호 기술 활용 — 솔트 · 전자 서명 · PKI</h2>
          <p class="sub">알고리즘을 실제로 어떻게 쓰는지 — 비밀번호 저장(솔트), 부인 방지(전자 서명),
          공개키 신뢰(PKI) — 를 정리한다.</p>

          <h3>6-1. 솔트 (Salt)</h3>
          <p>비밀번호를 해시하기 전에 덧붙이는 <strong>임의의 랜덤 값</strong>이다.
          같은 비밀번호라도 솔트가 다르면 <strong>해시 결과가 달라지므로</strong>,
          미리 계산해 둔 해시 목록으로 원문을 역추적하는 <strong>레인보우 테이블 공격</strong>을 막을 수 있다. (단골 용어)</p>

          <h3>6-2. 전자 서명 (Digital Signature)</h3>
          <p>송신자가 자신의 <strong>개인키로 서명(암호화)</strong>하고, 수신자가 송신자의
          <strong>공개키로 검증(복호화)</strong>하는 기술이다. 공개키 암호화(공개키로 암호화 → 개인키로 복호화)와
          <strong>키 사용 방향이 반대</strong>라는 점이 핵심이며, <strong>무결성 · 인증 · 부인 방지</strong>를 제공한다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 320" role="img" aria-label="전자 서명 생성과 검증 흐름 도면">
              <text x="180" y="40" text-anchor="middle" class="strong">송신자 (개인키 보유)</text>
              <text x="710" y="40" text-anchor="middle" class="strong">수신자 (송신자의 공개키 사용)</text>
              <line class="life" x1="450" y1="55" x2="450" y2="290" />

              <rect class="box" x="40" y="110" width="100" height="46" />
              <text x="90" y="139" text-anchor="middle" class="small strong">원문 M</text>

              <rect class="boxsoft" x="200" y="110" width="130" height="46" />
              <text x="265" y="139" text-anchor="middle" class="small strong">다이제스트 H</text>

              <rect class="boxdark" x="200" y="230" width="130" height="46" />
              <text x="265" y="259" text-anchor="middle" class="small strong">전자 서명 S</text>

              <rect class="boxdark" x="565" y="230" width="130" height="46" />
              <text x="630" y="259" text-anchor="middle" class="small strong">수신한 서명 S</text>

              <rect class="boxsoft" x="565" y="110" width="130" height="46" />
              <text x="630" y="139" text-anchor="middle" class="small strong">다이제스트 H</text>

              <rect class="box" x="750" y="230" width="120" height="46" />
              <text x="810" y="259" text-anchor="middle" class="small strong">수신한 원문 M</text>

              <rect class="boxsoft" x="750" y="110" width="120" height="46" />
              <text x="810" y="139" text-anchor="middle" class="small strong">다이제스트 H'</text>

              <line class="blocked" x1="699" y1="133" x2="746" y2="133" />
              <text x="722" y="120" text-anchor="middle" class="small">H = H' ?</text>
              <text x="710" y="305" text-anchor="middle" class="small">일치하면 무결성 · 인증 · 부인 방지 확인</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="140" y1="133" x2="196" y2="133" />
                <text x="168" y="100" text-anchor="middle" class="small">1. 해시</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="265" y1="156" x2="265" y2="226" />
                <text x="150" y="196" text-anchor="middle" class="small">2. 개인키로 서명</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="330" y1="253" x2="561" y2="253" />
                <text x="445" y="240" text-anchor="middle" class="small">3. 원문 M + 서명 S 전송</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="630" y1="230" x2="630" y2="160" />
                <text x="530" y="196" text-anchor="middle" class="small">4. 공개키로 검증</text>
              </g>
              <g class="msg" data-step="5">
                <line class="arrow" x1="810" y1="230" x2="810" y2="160" />
                <text x="855" y="196" text-anchor="middle" class="small">5. 해시</text>
              </g>
            </svg>
            <figcaption>도면 3. 전자 서명 흐름 — 송신자가 원문의 다이제스트를 개인키로 서명하여 원문과 함께 보내면,
            수신자는 공개키로 서명을 검증해 얻은 다이제스트(H)와 원문을 직접 해시한 값(H')을 비교한다.</figcaption>
          </figure>

          <h3>6-3. PKI와 인증서</h3>
          <p><strong>PKI(공개키 기반 구조)</strong>는 "이 공개키가 정말 그 사람의 것인가"를 보증하기 위한 체계다.
          신뢰할 수 있는 <strong>인증 기관(CA, Certificate Authority)</strong>이 사용자의 공개키에 서명하여
          <strong>공인 인증서</strong>를 발급하고, 상대방은 CA의 서명을 확인하여 공개키의 소유자를 신뢰한다.</p>

          <h3>6-4. 키 길이 권장 (간단 정리)</h3>
          <table>
            <tr><th>구분</th><th>권장</th></tr>
            <tr><td>대칭키 (AES 등)</td><td><strong>128비트 이상</strong></td></tr>
            <tr><td>비대칭키 (RSA)</td><td><strong>2048비트 이상</strong></td></tr>
            <tr><td>해시 (SHA)</td><td><strong>SHA-256 이상</strong> 사용 (MD5 · SHA-1 사용 금지)</td></tr>
          </table>
        </section>

        {/* ===================== 7. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 형식(용어 쓰기 · 괄호 채우기 · 분류하기)으로 구성한 10문항.
          먼저 스스로 답을 쓴 뒤 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 보안 요소를 쓰시오.</p>
            <pre>{`인가된 사용자만 데이터를 수정할 수 있도록 하여, 정보가 위조·변조되지
않고 정확성과 완전성을 유지하도록 보호하는 성질`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>무결성 (Integrity)<br/>
                <span class="label">해설: </span>"수정 · 위변조 방지"가 나오면 무결성이다.
                노출 방지는 기밀성, 언제든 사용 가능은 가용성.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음은 시큐어 코딩 가이드의 보안 약점 7항목이다. 괄호 안에 들어갈 항목명을 쓰시오.</p>
            <pre>{`입력 데이터 검증 및 표현 / 보안 기능 / ( ① ) / 에러 처리 /
코드 오류 / ( ② ) / API 오용

- ( ① ): 동시 수행 환경에서 TOCTOU 경쟁 조건 등이 발생하는 약점 유형
- ( ② ): 제거되지 않은 디버그 코드 등으로 정보가 노출되는 약점 유형`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 시간 및 상태, ② 캡슐화<br/>
                <span class="label">해설: </span>TOCTOU 경쟁 조건은 "시간 및 상태",
                디버그 코드 노출·잘못된 세션 정보 노출은 "캡슐화" 항목의 대표 취약점이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">SQL 삽입(Injection), XSS(크로스 사이트 스크립팅), 경로 조작 취약점이 속하는
            시큐어 코딩 가이드 7항목 중 하나의 항목명을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>입력 데이터 검증 및 표현<br/>
                <span class="label">해설: </span>외부 입력값을 검증하지 않아 생기는 약점은 모두
                "입력 데이터 검증 및 표현" 항목이다. 7항목 중 대표 취약점이 가장 많이 출제되는 항목.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 보기의 암호 알고리즘을 대칭키 암호, 비대칭키 암호, 해시 함수로 분류하시오.</p>
            <pre>{`AES, RSA, SHA-256, SEED, ECC, MD5, ARIA, 디피-헬만(Diffie-Hellman)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>대칭키 — AES, SEED, ARIA /
                비대칭키 — RSA, ECC, 디피-헬만 / 해시 — SHA-256, MD5<br/>
                <span class="label">해설: </span>실기 최다 빈출 유형. 국산(SEED · ARIA · LEA)은 대칭키,
                수학 문제 기반(RSA · ECC · ElGamal · 디피-헬만)은 비대칭키,
                MD·SHA·HAS 계열은 해시로 분류한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 암호 알고리즘의 이름을 쓰시오.</p>
            <pre>{`1977년 MIT의 3인(Rivest, Shamir, Adleman)이 개발한 공개키 암호
알고리즘으로, 큰 수의 소인수분해가 어렵다는 점을 안전성의 근거로 한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>RSA<br/>
                <span class="label">해설: </span>"소인수분해"가 결정적 키워드.
                타원곡선이면 ECC, 이산대수면 ElGamal(또는 디피-헬만)이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">1976년에 발표된 최초의 공개키 방식 키 교환 알고리즘으로, 공개된 통신 채널에서도
            두 사용자가 안전하게 공통의 비밀키(대칭키)를 나눠 가질 수 있게 하는 알고리즘은 무엇인가?</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>디피-헬만 (Diffie-Hellman)<br/>
                <span class="label">해설: </span>"최초", "키 교환"이 키워드.
                이산대수 문제에 기반하며, 암호화 자체가 아니라 키 교환이 목적이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명의 ①, ②에 해당하는 국산 암호 알고리즘의 이름을 각각 쓰시오.</p>
            <pre>{`- ( ① ): 1999년 한국인터넷진흥원(KISA)이 개발한 128비트 블록 대칭키 암호
- ( ② ): 2004년 학계·연구소·정부(학·연·관)가 공동 개발한 128비트 블록
          대칭키 암호로, 키 길이 128/192/256비트를 지원한다`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① SEED, ② ARIA<br/>
                <span class="label">해설: </span>"KISA → SEED", "학·연·관 → ARIA"로 개발 주체를 짝지어 암기한다.
                경량(IoT용) 국산 블록 암호는 LEA, 국산 해시는 HAS-160.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">미국 NIST가 DES를 대체하기 위해 2001년 표준으로 채택한 블록 암호 AES가
            지원하는 세 가지 키 길이를 모두 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>128비트, 192비트, 256비트<br/>
                <span class="label">해설: </span>AES의 블록 크기는 128비트로 고정이고,
                키 길이만 128/192/256비트 세 가지다. DES는 64비트 블록에 56비트 키라는 것과 비교해 두자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.</p>
            <pre>{`비밀번호를 해시하기 전에 덧붙이는 임의의 랜덤 값. 같은 비밀번호라도
서로 다른 해시 결과가 나오게 하여 레인보우 테이블 공격을 무력화한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>솔트 (Salt)<br/>
                <span class="label">해설: </span>"해시 전에 덧붙이는 랜덤 값", "레인보우 테이블 방어"가 키워드.
                해시는 일방향이므로 복호화가 불가능하다는 점도 함께 기억.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 ①, ②에 해당하는 공격 기법의 이름을 각각 쓰시오.</p>
            <pre>{`- ( ① ): 게시판 등에 악성 스크립트를 삽입해 두고, 페이지를 열람한 다른
          사용자의 브라우저에서 스크립트가 실행되게 하는 공격
- ( ② ): 로그인된 사용자가 자신의 의도와 무관하게 공격자가 위조한 요청을
          서버로 전송하도록 만드는 공격`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① XSS (크로스 사이트 스크립팅), ② CSRF (사이트 간 요청 위조)<br/>
                <span class="label">해설: </span>"브라우저에서 스크립트 실행 = XSS",
                "사용자 권한으로 위조 요청 전송 = CSRF". 대책은 XSS가 입력값 필터링·이스케이프,
                CSRF가 토큰 검증이다.
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">OWASP Top 10</span>
            <span class="kw">CWE / CVE</span>
            <span class="kw">위험 분석 (DREAD · STRIDE)</span>
            <span class="kw">블록 암호 운용 모드 (ECB · CBC · CTR)</span>
            <span class="kw">HMAC</span>
            <span class="kw">KCDSA</span>
            <span class="kw">TLS / HTTPS</span>
            <span class="kw">키 스트레칭 (bcrypt · PBKDF2)</span>
            <span class="kw">접근 통제 모델 (DAC · MAC · RBAC)</span>
          </p>
        </section>

        <footer>소프트웨어 개발 보안 설계 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
