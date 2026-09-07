import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './ui-requirements.css'

export default defineComponent({
  name: 'UiRequirementsPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>UI 요구사항 확인 · UI 지침</h1>
          <p>UI/UX 개념 → UI 유형(CLI·GUI·NUI·OUI) → 설계 원칙 4가지 → 요구사항 확인 절차 → 표준·지침 문서 → 웹의 3요소 → 품질 요구사항 순서로,<br/>
          정보처리기사 실기에 나오는 UI 요구사항 확인 파트를 정리한 학습 문서입니다.<br/>
          <span>각 도면의 파란 점은 흐름의 진행을 나타내며, 현재 진행 중인 단계가 진하게 강조됩니다. 자동으로 반복 재생됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#concept" onClick={(e) => scrollToId(e, 'concept')}>UI(User Interface) 개념 — UI와 UX</a></li>
            <li><a href="#types" onClick={(e) => scrollToId(e, 'types')}>UI 유형 — CLI · GUI · NUI · OUI</a></li>
            <li><a href="#principles" onClick={(e) => scrollToId(e, 'principles')}>UI 설계 원칙 4가지와 설계 지침</a></li>
            <li><a href="#requirements" onClick={(e) => scrollToId(e, 'requirements')}>UI 요구사항 확인</a></li>
            <li><a href="#standards" onClick={(e) => scrollToId(e, 'standards')}>UI 표준과 지침 문서</a></li>
            <li><a href="#web3" onClick={(e) => scrollToId(e, 'web3')}>웹의 3요소와 접근성</a></li>
            <li><a href="#quality" onClick={(e) => scrollToId(e, 'quality')}>품질 요구사항 — ISO/IEC 9126</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        <section id="concept">
          <h2>1. UI(User Interface) 개념 — UI와 UX</h2>
          <p class="sub">UI는 사용자와 시스템이 만나는 "접점", UX는 그 접점을 통해 사용자가 느끼는 "총체적 경험"이다.</p>

          <h3>1-1. UI란 무엇인가</h3>
          <p><strong>UI(User Interface, 사용자 인터페이스)</strong>는 사용자와 시스템(컴퓨터·프로그램) 사이에서
          의사소통이 일어나도록 만들어진 <strong>물리적·가상적 매개체(접점)</strong>다.
          화면의 버튼과 메뉴, 키보드와 마우스, 음성 명령까지 사용자가 시스템을 조작하고
          시스템이 결과를 보여 주는 모든 접촉면이 UI에 해당한다.</p>
          <p>초기의 UI는 사람이 기계에 맞춰 배우는 단순한 조작 장치였지만, 지금은
          <strong>기계가 사람에게 맞추는 방향</strong>으로 발전하여 사용자의 편의성과 만족도를 좌우하는
          핵심 설계 대상이 되었다.</p>

          <h3>1-2. UI와 UX의 구분 (실기 단골)</h3>
          <table>
            <tr><th>구분</th><th>UI (User Interface)</th><th>UX (User Experience)</th></tr>
            <tr>
              <td><strong>정의</strong></td>
              <td>사용자와 시스템 간의 <strong>접점(매개체)</strong></td>
              <td>제품·서비스를 이용하며 사용자가 느끼는 <strong>총체적 경험</strong></td>
            </tr>
            <tr>
              <td><strong>대상</strong></td>
              <td>화면 구성, 버튼, 메뉴, 입력 장치 등 눈에 보이는 요소</td>
              <td>만족감, 편리함, 감정, 가치 등 눈에 보이지 않는 경험 전체</td>
            </tr>
            <tr>
              <td><strong>성격</strong></td>
              <td>객관적 · 기능적 (설계와 구현의 대상)</td>
              <td>주관적 · 총체적 (측정과 개선의 대상)</td>
            </tr>
            <tr>
              <td><strong>관계</strong></td>
              <td colspan="2">UI는 UX를 구성하는 일부다. 좋은 UI는 좋은 UX의 필요조건이지만 충분조건은 아니다.</td>
            </tr>
          </table>

          <h3>1-3. UI의 분야</h3>
          <ul>
            <li><strong>정보 제공과 전달을 위한 물리적 제어 분야:</strong> 사용자에게 필요한 정보를 정확히 제공하고 입력을 받아들이는 조작 장치·화면 설계.</li>
            <li><strong>콘텐츠의 상세 표현과 전체 구성에 관한 분야:</strong> 정보의 배치·표현 방식, 시각 디자인, 전체 화면 구조 설계.</li>
            <li><strong>모든 사용자가 편리하고 간편하게 사용하도록 하는 기능적 분야:</strong> 사용자를 배려하여 누구나 쉽게 쓸 수 있게 만드는 기능·접근성 설계.</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            실기에서는 "사용자와 시스템 간의 상호작용이 일어나는 <strong>접점</strong>"이면 UI,
            "제품을 사용하며 느끼는 <strong>총체적 경험</strong>"이면 UX라고 답한다.
            두 용어의 정의 문장을 구분해서 외워 두자.
          </div>
        </section>

        <section id="types">
          <h2>2. UI 유형 — CLI · GUI · NUI · OUI</h2>
          <p class="sub">명령어 → 그래픽 → 자연스러운 신체 → 사물 자체. UI는 사용자에게 점점 더 자연스러운 방향으로 발전해 왔다.</p>

          <h3>2-1. 네 가지 UI 유형 비교 (약어와 풀네임까지 정확히)</h3>
          <table>
            <tr><th>유형</th><th>풀네임</th><th>상호작용 방식</th><th>예시</th></tr>
            <tr>
              <td><strong>CLI</strong></td>
              <td>Command Line Interface</td>
              <td>키보드로 <strong>명령어(텍스트)</strong>를 직접 입력</td>
              <td>도스(DOS), 유닉스 셸, 터미널</td>
            </tr>
            <tr>
              <td><strong>GUI</strong></td>
              <td>Graphical User Interface</td>
              <td><strong>그래픽 요소(아이콘·메뉴·창)</strong>를 마우스 등으로 조작</td>
              <td>Windows, macOS 데스크톱</td>
            </tr>
            <tr>
              <td><strong>NUI</strong></td>
              <td>Natural User Interface</td>
              <td><strong>터치 · 음성 · 제스처</strong> 등 인간의 자연스러운 신체 움직임으로 조작</td>
              <td>스마트폰 터치, AI 스피커 음성 명령, 동작 인식</td>
            </tr>
            <tr>
              <td><strong>OUI</strong></td>
              <td>Organic User Interface</td>
              <td>현실의 <strong>모든 사물이 입출력장치</strong>가 되어 사용자와 상호작용</td>
              <td>사물 인터넷(IoT) 기기, 플렉서블 디스플레이</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 250" role="img" aria-label="UI 유형의 발전 흐름 도면: CLI에서 GUI, NUI, OUI로 발전">
              <rect class="box" x="40" y="80" width="160" height="95" />
              <text x="120" y="110" text-anchor="middle" class="strong">CLI</text>
              <text x="120" y="133" text-anchor="middle" class="small">명령어 텍스트 입력</text>
              <text x="120" y="153" text-anchor="middle" class="small">터미널 · 셸</text>

              <rect class="box" x="260" y="80" width="160" height="95" />
              <text x="340" y="110" text-anchor="middle" class="strong">GUI</text>
              <text x="340" y="133" text-anchor="middle" class="small">그래픽 · 마우스 조작</text>
              <text x="340" y="153" text-anchor="middle" class="small">Windows · macOS</text>

              <rect class="box" x="480" y="80" width="160" height="95" />
              <text x="560" y="110" text-anchor="middle" class="strong">NUI</text>
              <text x="560" y="133" text-anchor="middle" class="small">터치 · 음성 · 제스처</text>
              <text x="560" y="153" text-anchor="middle" class="small">스마트폰 · AI 스피커</text>

              <rect class="boxdark" x="700" y="80" width="160" height="95" />
              <text x="780" y="110" text-anchor="middle" class="strong">OUI</text>
              <text x="780" y="133" text-anchor="middle" class="small">사물 자체가 인터페이스</text>
              <text x="780" y="153" text-anchor="middle" class="small">IoT · 플렉서블</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="204" y1="127" x2="254" y2="127" />
                <text x="229" y="60" text-anchor="middle" class="small">1. 그래픽 도입</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="424" y1="127" x2="474" y2="127" />
                <text x="449" y="60" text-anchor="middle" class="small">2. 신체 · 감각 활용</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="644" y1="127" x2="694" y2="127" />
                <text x="669" y="60" text-anchor="middle" class="small">3. 사물로 확장</text>
              </g>

              <text x="450" y="220" text-anchor="middle" class="small">사용자가 배우는 인터페이스 → 사용자에게 자연스러운 인터페이스로 발전</text>
            </svg>
            <figcaption>도면 1. UI 유형의 발전 흐름 — CLI → GUI → NUI → OUI. 뒤로 갈수록 별도의 학습 없이 자연스럽게 쓸 수 있다.</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            NUI의 N은 Natural, OUI의 O는 <strong>Organic</strong>이다.
            실기에서 약어만 쓰라고 할 수도, 풀네임을 쓰라고 할 수도 있으므로
            <strong>약어 + 영문 풀네임 + 한 줄 정의</strong>를 세트로 외워야 한다.
          </div>
        </section>

        <section id="principles">
          <h2>3. UI 설계 원칙 4가지와 설계 지침</h2>
          <p class="sub">직관성 · 유효성 · 학습성 · 유연성. 실기에서 "설명 주고 원칙 쓰기"로 가장 자주 나오는 부분이다.</p>

          <h3>3-1. UI 설계 원칙 4가지 (정의를 문장째 암기)</h3>
          <table>
            <tr><th>원칙</th><th>정의</th><th>암기 포인트</th></tr>
            <tr>
              <td><strong>직관성</strong></td>
              <td><strong>누구나 쉽게 이해하고 사용</strong>할 수 있어야 한다</td>
              <td>보자마자 안다 — "이해 · 사용"</td>
            </tr>
            <tr>
              <td><strong>유효성</strong></td>
              <td>사용자의 <strong>목적을 정확하고 완벽하게 달성</strong>하여야 한다</td>
              <td>목적 달성 — "정확 · 완벽"</td>
            </tr>
            <tr>
              <td><strong>학습성</strong></td>
              <td>누구나 <strong>쉽게 배우고 익힐 수</strong> 있어야 한다</td>
              <td>배우기 쉽다 — "배우고 익힘"</td>
            </tr>
            <tr>
              <td><strong>유연성</strong></td>
              <td>사용자의 <strong>요구사항을 최대한 수용</strong>하고 <strong>오류를 최소화</strong>하여야 한다</td>
              <td>수용 + 오류 최소화 — 두 가지가 한 세트</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            네 원칙의 앞 글자를 따서 <strong>"직·유·학·유"</strong>로 외우되,
            채점은 정의 문장으로 구분되므로 키워드를 정확히 연결해야 한다.
            "이해·사용 = 직관성", "목적 달성 = 유효성", "배우고 익힘 = 학습성",
            "요구 수용·오류 최소화 = 유연성".
            특히 <strong>학습성과 직관성</strong>(둘 다 "쉽게"가 들어감),
            <strong>유효성과 유연성</strong>(둘 다 "유"로 시작)을 헷갈리지 않도록 주의.
          </div>

          <h3>3-2. UI 설계 지침</h3>
          <p>설계 원칙이 큰 방향이라면, 설계 지침은 화면을 그릴 때 지켜야 할 구체적인 항목들이다.</p>
          <table>
            <tr><th>지침</th><th>내용</th></tr>
            <tr><td><strong>사용자 중심</strong></td><td>사용자가 이해하기 쉽고 편하게 사용할 수 있는 환경을 제공하며, 실사용에 대한 이해가 바탕이 되어야 한다</td></tr>
            <tr><td><strong>일관성</strong></td><td>버튼·메뉴 등의 조작 방법을 통일하여 사용자가 쉽게 기억하고 습득하게 한다</td></tr>
            <tr><td><strong>단순성</strong></td><td>조작 방법은 가장 간단하게, 인지적 부담을 최소화한다</td></tr>
            <tr><td><strong>결과 예측 가능</strong></td><td>기능(버튼)만 보고도 실행 결과를 예측할 수 있어야 한다</td></tr>
            <tr><td><strong>가시성</strong></td><td>주요 기능을 메인 화면에 노출하여 쉽게 찾고 조작할 수 있게 한다</td></tr>
            <tr><td><strong>표준화</strong></td><td>기능 구조와 디자인을 표준화하여 한번 익힌 뒤에는 쉽게 사용할 수 있게 한다</td></tr>
            <tr><td><strong>접근성</strong></td><td>연령 · 성별 · 장애 여부 등과 관계없이 다양한 계층의 사용자가 사용할 수 있어야 한다</td></tr>
            <tr><td><strong>명확성</strong></td><td>사용자가 개념적으로 쉽게 인지할 수 있도록 뜻이 분명해야 한다</td></tr>
            <tr><td><strong>오류 발생 해결</strong></td><td>오류가 발생하면 사용자가 상황을 정확히 인지하고 해결할 수 있도록 안내한다</td></tr>
          </table>
        </section>

        <section id="requirements">
          <h2>4. UI 요구사항 확인</h2>
          <p class="sub">누가, 무엇을 위해, 어떤 화면을 필요로 하는가 — 설계에 들어가기 전에 요구사항을 확인하고 합의하는 단계다.</p>

          <h3>4-1. 요구사항의 구분</h3>
          <table>
            <tr><th>구분</th><th>내용</th><th>예시</th></tr>
            <tr>
              <td><strong>기능적 요구사항</strong></td>
              <td>시스템이 <strong>무엇을 해야 하는가</strong> — 입력·출력, 데이터 처리, 제공해야 할 기능</td>
              <td>"검색어를 입력하면 결과 목록을 보여 준다"</td>
            </tr>
            <tr>
              <td><strong>비기능적 요구사항</strong></td>
              <td>기능 외에 시스템이 <strong>갖추어야 할 품질·제약</strong> — 성능, 보안, 사용성, 신뢰성 등</td>
              <td>"검색 결과는 1초 안에 표시된다"</td>
            </tr>
          </table>
          <p>UI 요구사항은 사용자 관점에서 수집되므로 화면·조작에 관한 <strong>기능적 요구</strong>와
          반응 속도·가독성·접근성 같은 <strong>비기능적(품질) 요구</strong>가 함께 도출된다.</p>

          <h3>4-2. UI 요구사항 확인 절차</h3>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 240" role="img" aria-label="UI 요구사항 확인 절차 도면: 목표 정의, 활동 사항 정의, 인터페이스 요구사항 정의">
              <rect class="box" x="40" y="80" width="230" height="100" />
              <text x="155" y="112" text-anchor="middle" class="strong">① 목표 정의</text>
              <text x="155" y="136" text-anchor="middle" class="small">사용자 인터뷰 · 조사</text>
              <text x="155" y="156" text-anchor="middle" class="small">비즈니스 목표 확정</text>

              <rect class="box" x="335" y="80" width="230" height="100" />
              <text x="450" y="112" text-anchor="middle" class="strong">② 활동 사항 정의</text>
              <text x="450" y="136" text-anchor="middle" class="small">조사 결과 바탕 활동 계획</text>
              <text x="450" y="156" text-anchor="middle" class="small">수행 활동 · 일정 정의</text>

              <rect class="boxdark" x="630" y="80" width="230" height="100" />
              <text x="745" y="112" text-anchor="middle" class="strong">③ 인터페이스 요구사항 정의</text>
              <text x="745" y="136" text-anchor="middle" class="small">요구사항 도출 · 분류</text>
              <text x="745" y="156" text-anchor="middle" class="small">핵심 요구사항 정리</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="274" y1="130" x2="329" y2="130" />
                <text x="302" y="60" text-anchor="middle" class="small">1. 목표 합의</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="569" y1="130" x2="624" y2="130" />
                <text x="597" y="60" text-anchor="middle" class="small">2. 요구사항 도출</text>
              </g>

              <text x="450" y="215" text-anchor="middle" class="small">사용자 조사에서 출발해 인터페이스 요구사항 목록으로 수렴한다</text>
            </svg>
            <figcaption>도면 2. UI 요구사항 확인 절차 — 목표 정의 → 활동 사항 정의 → 인터페이스 요구사항 정의.</figcaption>
          </figure>
          <ol>
            <li><strong>목표 정의:</strong> 사용자 인터뷰·조사를 통해 사업적 요구사항과 목표를 명확히 하고 이해관계자와 합의한다.</li>
            <li><strong>활동 사항 정의:</strong> 조사 결과와 사업 전략을 바탕으로 프로젝트에서 수행해야 할 활동과 일정을 정의한다.</li>
            <li><strong>인터페이스 요구사항 정의:</strong> 사용자 요구를 도출·분류하여 새 시스템에서 제공해야 할 UI 요구사항을 정리한다.</li>
          </ol>

          <h3>4-3. 요구사항 작성 시 고려사항</h3>
          <ul>
            <li>요구사항은 <strong>완전하고(누락 없음), 명확하며(해석이 하나), 검증 가능</strong>하게 작성한다.</li>
            <li>실사용자의 관점에서 작성하고, 이해관계자 전원이 <strong>검토·합의</strong>할 수 있는 형태여야 한다.</li>
            <li>UI 요구사항에는 데이터 요구(사용자가 다루는 정보), 기능 요구(사용자가 수행하는 작업),
            제품·서비스 품질 요구, 제약사항 등이 포함된다.</li>
          </ul>

          <h3>4-4. 페르소나와 유저 시나리오</h3>
          <table>
            <tr><th>도구</th><th>정의</th></tr>
            <tr>
              <td><strong>페르소나 (Persona)</strong></td>
              <td>잠재적 사용자들의 목적과 관찰된 행동 패턴을 바탕으로 만든 <strong>가상의 대표 사용자 모델</strong>.
              이름·나이·직업·목표 등을 구체적으로 부여해 "이 사람이라면 어떻게 쓸까"를 기준으로 설계한다.</td>
            </tr>
            <tr>
              <td><strong>유저 시나리오 (User Scenario)</strong></td>
              <td>페르소나가 시스템을 이용해 <strong>목표를 달성해 가는 과정을 이야기 형식</strong>으로 기술한 것.
              화면 흐름과 필요한 기능을 자연스럽게 도출하는 근거가 된다.</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "가상의 사용자"라는 표현이 나오면 <strong>페르소나</strong>,
            그 사용자가 목표를 이루는 <strong>과정의 이야기</strong>가 나오면 유저 시나리오다.
            요구사항 확인 절차 3단계(목표 정의 → 활동 사항 정의 → 인터페이스 요구사항 정의)의 순서도 함께 기억하자.
          </div>
        </section>

        <section id="standards">
          <h2>5. UI 표준과 지침 문서</h2>
          <p class="sub">여러 사람이 함께 만들어도 하나의 제품처럼 보이게 하는 문서 체계 — 표준, 지침, 스타일 가이드, 패턴 라이브러리.</p>

          <h3>5-1. UI 표준 vs UI 지침 (구분 문제 단골)</h3>
          <table>
            <tr><th>구분</th><th>UI 표준</th><th>UI 지침</th></tr>
            <tr>
              <td><strong>정의</strong></td>
              <td>시스템 <strong>전체의 모든 UI에 공통으로 적용</strong>되는 규칙</td>
              <td>UI <strong>설계·개발 과정에서 지켜야 할 세부 사항</strong>을 규정</td>
            </tr>
            <tr>
              <td><strong>범위</strong></td>
              <td>전역(화면 구성, 이동 방식 등 큰 틀)</td>
              <td>개별 요구사항·구현 수준(세부 규칙)</td>
            </tr>
            <tr>
              <td><strong>예시</strong></td>
              <td>"모든 화면의 상단에 내비게이션 바를 둔다"</td>
              <td>"삭제 버튼은 확인 대화상자를 거친 뒤 실행한다"</td>
            </tr>
          </table>

          <h3>5-2. 스타일 가이드 · 패턴 라이브러리 · 디자인 시스템</h3>
          <table>
            <tr><th>문서/체계</th><th>내용</th></tr>
            <tr>
              <td><strong>스타일 가이드</strong></td>
              <td>레이아웃, 색상, 폰트(서체), 아이콘 등 <strong>시각 요소의 사용 규칙</strong>을 정리한 문서.
              UI 표준을 시각 디자인 차원에서 구체화한다.</td>
            </tr>
            <tr>
              <td><strong>패턴 라이브러리</strong></td>
              <td>버튼, 입력 폼, 탭 등 반복 사용되는 <strong>UI 구성 요소(패턴)를 모아 둔 모음</strong>.
              같은 문제를 매번 새로 설계하지 않게 해 준다.</td>
            </tr>
            <tr>
              <td><strong>디자인 시스템</strong></td>
              <td>디자인 원칙 + 스타일 가이드 + 패턴 라이브러리 + 코드 컴포넌트를 아우르는 <strong>통합 체계</strong>.
              디자인과 개발이 같은 기준을 공유하게 한다.</td>
            </tr>
          </table>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "전체 시스템에 공통 적용되는 규칙 = <strong>표준</strong>",
            "개발 과정에서 준수해야 할 세부 사항 = <strong>지침</strong>".
            두 단어를 바꿔 쓰면 오답 처리되므로 "표준은 크고 공통, 지침은 세부"로 구분해 외운다.
          </div>
        </section>

        <section id="web3">
          <h2>6. 웹의 3요소와 접근성</h2>
          <p class="sub">모두가, 어떤 브라우저에서도, 같은 웹을 쓸 수 있어야 한다 — 웹 표준 · 웹 접근성 · 웹 호환성.</p>

          <h3>6-1. 웹의 3요소</h3>
          <table>
            <tr><th>요소</th><th>정의</th><th>관련 기구/지침</th></tr>
            <tr>
              <td><strong>웹 표준</strong></td>
              <td>웹에서 사용되는 기술의 <strong>표준화 규격(HTML, CSS 등)</strong>을 준수하여 어떤 환경에서도 동일한 결과가 나오도록 하는 것</td>
              <td><strong>W3C</strong>(World Wide Web Consortium) 권고안</td>
            </tr>
            <tr>
              <td><strong>웹 접근성</strong></td>
              <td><strong>장애인 · 고령자</strong> 등 신체적 조건이나 환경에 관계없이 누구나 웹 콘텐츠를 동등하게 이용할 수 있도록 보장하는 것</td>
              <td><strong>WCAG</strong>(Web Content Accessibility Guidelines), 국내는 <strong>KWCAG</strong>(한국형 웹 콘텐츠 접근성 지침)</td>
            </tr>
            <tr>
              <td><strong>웹 호환성</strong></td>
              <td>운영체제나 브라우저의 <strong>종류·버전에 관계없이</strong> 웹 페이지가 동등하게 보이고 동작하는 것(<strong>크로스 브라우징</strong>)</td>
              <td>브라우저별 렌더링 검증, 표준 준수를 통한 확보</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 260" role="img" aria-label="웹의 3요소가 좋은 웹을 떠받치는 구조 도면">
              <rect class="boxdark" x="330" y="30" width="240" height="60" />
              <text x="450" y="56" text-anchor="middle" class="strong">모두가 이용 가능한 웹</text>
              <text x="450" y="78" text-anchor="middle" class="small">동일한 정보 · 동등한 이용</text>

              <rect class="boxsoft" x="60" y="160" width="220" height="75" />
              <text x="170" y="190" text-anchor="middle" class="strong">웹 표준</text>
              <text x="170" y="214" text-anchor="middle" class="small">W3C 권고안 준수</text>

              <rect class="boxsoft" x="340" y="160" width="220" height="75" />
              <text x="450" y="190" text-anchor="middle" class="strong">웹 접근성</text>
              <text x="450" y="214" text-anchor="middle" class="small">장애인 · 고령자 배려 (WCAG)</text>

              <rect class="boxsoft" x="620" y="160" width="220" height="75" />
              <text x="730" y="190" text-anchor="middle" class="strong">웹 호환성</text>
              <text x="730" y="214" text-anchor="middle" class="small">크로스 브라우징</text>

              <line class="arrow" x1="180" y1="160" x2="382" y2="96" />
              <line class="arrow" x1="450" y1="160" x2="450" y2="96" />
              <line class="arrow" x1="720" y1="160" x2="518" y2="96" />
            </svg>
            <figcaption>도면 3. 웹의 3요소 — 표준 · 접근성 · 호환성이 갖춰져야 "모두가 이용 가능한 웹"이 된다.</figcaption>
          </figure>

          <h3>6-2. 웹 접근성 보충</h3>
          <ul>
            <li>WCAG의 4대 원칙: <strong>인식의 용이성, 운용의 용이성, 이해의 용이성, 견고성</strong>.</li>
            <li><strong>KWCAG(한국형 웹 콘텐츠 접근성 지침)</strong>은 WCAG를 국내 실정에 맞게 정리한 국가 표준으로,
            대체 텍스트 제공, 키보드만으로 조작 가능, 명도 대비 확보 등의 검사 항목을 둔다.</li>
            <li>웹 호환성은 특정 브라우저 전용 기술에 의존하지 않고 <strong>웹 표준을 지키는 것</strong>에서 출발한다 —
            3요소는 서로 맞물려 있다.</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            웹의 3요소는 <strong>웹 표준 · 웹 접근성 · 웹 호환성</strong>.
            "W3C가 나오면 표준, 장애인·고령자가 나오면 접근성, 브라우저 종류가 나오면 호환성"으로 구분한다.
          </div>
        </section>

        <section id="quality">
          <h2>7. 품질 요구사항 — ISO/IEC 9126</h2>
          <p class="sub">"좋은 소프트웨어"를 여섯 개의 잣대로 측정한다. UI 비기능 요구사항의 근거가 되는 국제 표준.</p>

          <h3>7-1. ISO/IEC 9126 품질 특성 6가지 (부특성까지)</h3>
          <table>
            <tr><th>품질 특성</th><th>의미</th><th>부특성</th></tr>
            <tr>
              <td><strong>기능성</strong><br/>(Functionality)</td>
              <td>요구된 기능을 제공하는가</td>
              <td>적합성, 정확성, 상호운용성, 보안성, 준수성</td>
            </tr>
            <tr>
              <td><strong>신뢰성</strong><br/>(Reliability)</td>
              <td>일정 시간 동안 의도한 기능을 오류 없이 수행하는가</td>
              <td>성숙성, 결함 허용성, 회복성</td>
            </tr>
            <tr>
              <td><strong>사용성</strong><br/>(Usability)</td>
              <td>사용자가 쉽게 이해하고 배우고 사용할 수 있는가</td>
              <td>이해성, 학습성, 운용성, 친밀성</td>
            </tr>
            <tr>
              <td><strong>효율성</strong><br/>(Efficiency)</td>
              <td>자원을 적게 쓰면서 요구 성능을 내는가</td>
              <td>시간 효율성, 자원 효율성</td>
            </tr>
            <tr>
              <td><strong>유지보수성</strong><br/>(Maintainability)</td>
              <td>수정·개선이 얼마나 쉬운가</td>
              <td>분석성, 변경성, 안정성, 시험성</td>
            </tr>
            <tr>
              <td><strong>이식성</strong><br/>(Portability)</td>
              <td>다른 환경으로 옮겨도 잘 동작하는가</td>
              <td>적응성, 설치성, 대체성, 공존성</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            6가지는 <strong>"기·신·사·효·유·이"</strong>(기능성 · 신뢰성 · 사용성 · 효율성 · 유지보수성 · 이식성)로 외운다.
            빈칸 채우기로 자주 나오며, 특히 <strong>사용성</strong>(쉽게 이해·학습·사용)과
            <strong>이식성</strong>(다른 환경으로 이동)이 단골 빈칸이다.
          </div>

          <h3>7-2. ISO/IEC 25010으로의 발전</h3>
          <p>ISO/IEC 9126은 이후 <strong>ISO/IEC 25010</strong>(SQuaRE 시리즈)으로 개정되었다.
          기존 6가지 특성에 <strong>보안성(Security)</strong>과 <strong>호환성(Compatibility)</strong>이
          독립 특성으로 승격되어 <strong>8가지 품질 특성</strong>(기능 적합성, 성능 효율성, 호환성, 사용성,
          신뢰성, 보안성, 유지보수성, 이식성)으로 확장되었다.
          "9126의 후속 표준 이름"을 묻는 문제에 대비해 번호를 기억해 두자.</p>

          <h3>7-3. 감성공학</h3>
          <ul>
            <li><strong>감성공학:</strong> 인간의 <strong>감성을 정성적·정량적으로 측정하고 과학적으로 분석</strong>하여
            제품·환경 설계에 반영하는 기술. "편리한가"를 넘어 "기분 좋게 쓰이는가"를 다룬다.</li>
            <li>UI 관점에서는 <strong>HCI(Human Computer Interaction)</strong> 설계에 인간의 감성적 특성을 반영하여
            사용자의 만족감과 쾌적함을 높이는 것을 목표로 한다.</li>
            <li>인간의 감성(요구) → 측정·분석 → 설계 요소로 번역 → 제품에 반영의 순환으로 진행되며,
            비기능(품질) 요구사항 중 사용성·만족도와 직접 연결된다.</li>
          </ul>
        </section>

        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">설명을 읽고 용어를 정확히 쓰는 연습. 정답을 먼저 쓴 뒤 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 설명에 해당하는 UI 설계 원칙을 쓰시오.</p>
            <pre>{`누구나 쉽게 이해하고 사용할 수 있어야 한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>직관성<br/>
                <span class="label">해설: </span>"쉽게 이해하고 사용"이 직관성의 정의 키워드다. UI 설계 원칙 4가지는 직관성 · 유효성 · 학습성 · 유연성이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 UI 설계 원칙을 쓰시오.</p>
            <pre>{`정확하고 완벽하게 사용자의 목적을 달성할 수 있어야 한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>유효성<br/>
                <span class="label">해설: </span>"목적 달성"이 나오면 유효성이다. 요구사항 수용·오류 최소화가 나오는 유연성과 혼동하지 않도록 주의한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 괄호 안에 들어갈 UI 설계 원칙을 쓰시오.</p>
            <pre>{`( )은 사용자의 요구사항을 최대한 수용하고 오류를 최소화하여야
한다는 UI 설계 원칙이다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>유연성<br/>
                <span class="label">해설: </span>"요구사항 최대 수용 + 오류 최소화" 두 키워드가 한 세트로 나오면 유연성이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 설명에 해당하는 사용자 인터페이스 유형을 영문 약어로 쓰시오.</p>
            <pre>{`키보드나 마우스 같은 별도의 입력 장치 없이 터치, 음성, 제스처 등
인간의 자연스러운 신체 움직임과 감각으로 시스템을 조작하는 인터페이스`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>NUI (Natural User Interface)<br/>
                <span class="label">해설: </span>터치·음성·제스처 등 "자연스러운" 상호작용이 핵심 키워드다. 스마트폰 터치 조작, AI 스피커 음성 명령이 대표 예다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 설명에 해당하는 사용자 인터페이스 유형을 영문 약어로 쓰시오.</p>
            <pre>{`현실 세계의 모든 사물이 입력과 출력의 수단이 되어 사용자와
자연스럽게 상호작용하는 인터페이스로, 사물 인터넷(IoT) 기기 등이 해당한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>OUI (Organic User Interface)<br/>
                <span class="label">해설: </span>"사물 자체가 인터페이스"라는 표현이 나오면 OUI다. O는 Organic(유기적)의 약자임을 함께 기억한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음은 웹의 3요소에 대한 설명이다. ①~③에 해당하는 용어를 각각 쓰시오.</p>
            <pre>{`① W3C의 표준화 규격(HTML, CSS 등)을 준수하여 어떤 환경에서도
   동일한 결과가 나오도록 하는 것
② 장애인, 고령자 등 신체적 조건에 관계없이 누구나 웹 콘텐츠를
   동등하게 이용할 수 있도록 보장하는 것
③ 운영체제나 브라우저의 종류에 관계없이 웹 페이지가 동등하게
   보이고 동작하도록 하는 것`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 웹 표준 ② 웹 접근성 ③ 웹 호환성<br/>
                <span class="label">해설: </span>W3C가 나오면 표준, 장애인·고령자가 나오면 접근성, 브라우저·크로스 브라우징이 나오면 호환성이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음은 ISO/IEC 9126의 소프트웨어 품질 특성 6가지이다. 괄호 안에 들어갈 특성을 각각 쓰시오.</p>
            <pre>{`기능성, 신뢰성, ( ① ), 효율성, 유지보수성, ( ② )

① : 사용자가 소프트웨어를 쉽게 이해하고 배우고 사용할 수 있는 정도
② : 소프트웨어를 다른 환경으로 옮겨도 잘 동작하는 정도`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 사용성 ② 이식성<br/>
                <span class="label">해설: </span>6가지 특성은 "기·신·사·효·유·이"로 암기한다. "이해·학습·사용"은 사용성, "다른 환경 이동"은 이식성의 정의다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 ①, ②에 해당하는 용어를 각각 쓰시오.</p>
            <pre>{`① : 시스템 전체의 모든 UI에 공통으로 적용되는 화면 구성, 화면 이동
     등에 관한 규칙
② : UI 설계와 개발 과정에서 지켜야 할 세부 사항을 규정한 것`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① UI 표준 ② UI 지침<br/>
                <span class="label">해설: </span>"전체 시스템 공통 규칙 = 표준", "개발 과정의 세부 사항 = 지침"으로 구분한다. 두 용어를 바꿔 쓰지 않도록 주의.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.</p>
            <pre>{`잠재적 사용자들의 다양한 목적과 관찰된 행동 패턴을 바탕으로 만든
가상의 대표 사용자 모델로, 이름·나이·직업·목표 등을 구체적으로 부여하여
UI 설계의 기준으로 삼는다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>페르소나(Persona)<br/>
                <span class="label">해설: </span>"가상의 대표 사용자"가 핵심 키워드다. 페르소나가 목표를 달성해 가는 과정을 이야기로 쓴 것은 유저 시나리오다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.</p>
            <pre>{`인간의 감성을 정성적·정량적으로 측정하고 과학적으로 분석하여
그 결과를 제품이나 환경 설계에 반영하는 기술`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>감성공학<br/>
                <span class="label">해설: </span>"감성의 측정·분석 → 설계 반영"이 정의의 뼈대다. HCI 설계에 인간의 감성적 특성을 반영하여 만족감을 높이는 것이 목적이다.
              </div>
            </details>
          </div>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">UX (User Experience)</span>
            <span class="kw">와이어프레임</span>
            <span class="kw">스토리보드</span>
            <span class="kw">목업(Mockup)</span>
            <span class="kw">프로토타입</span>
            <span class="kw">UI 시나리오 문서</span>
            <span class="kw">사용성 테스트</span>
            <span class="kw">휴리스틱 평가</span>
            <span class="kw">ISO/IEC 25010</span>
            <span class="kw">WAI-ARIA</span>
            <span class="kw">KWCAG</span>
            <span class="kw">HCI</span>
          </p>
        </section>

        <footer>UI 요구사항 확인과 UI 지침 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
