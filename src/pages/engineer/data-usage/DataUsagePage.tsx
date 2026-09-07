import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './data-usage.css'

export default defineComponent({
  name: 'DataUsagePage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>데이터 기초 활용 · 데이터베이스 종류</h1>
          <p>정보처리기사 실기 대비 학습 문서. 데이터베이스의 정의와 특징 → DBMS 필수 기능 → 스키마 3계층 →
          데이터베이스 모델(계층형·네트워크형·관계형·NoSQL) → SQL 분류(DDL/DML/DCL/TCL) → 절차형 SQL →
          데이터 웨어하우스와 OLAP → 빅데이터 순서로, 실기 단골 개념을 도면·표·실전 문제로 정리한다.<br/>
          <span>각 도면의 파란 점은 데이터·요청의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#basics" onClick={(e) => scrollToId(e, 'basics')}>데이터베이스 기초 — 정의 4가지와 특징</a></li>
            <li><a href="#dbms" onClick={(e) => scrollToId(e, 'dbms')}>DBMS 필수 기능 3가지</a></li>
            <li><a href="#schema" onClick={(e) => scrollToId(e, 'schema')}>스키마(Schema) 3계층</a></li>
            <li><a href="#models" onClick={(e) => scrollToId(e, 'models')}>데이터베이스 종류 — 모델별 분류</a></li>
            <li><a href="#sql" onClick={(e) => scrollToId(e, 'sql')}>SQL 분류 — DDL · DML · DCL · TCL</a></li>
            <li><a href="#procedural" onClick={(e) => scrollToId(e, 'procedural')}>절차형 SQL — 프로시저 · 함수 · 트리거</a></li>
            <li><a href="#warehouse" onClick={(e) => scrollToId(e, 'warehouse')}>데이터 분석 저장소 — DW · 마트 · OLAP</a></li>
            <li><a href="#bigdata" onClick={(e) => scrollToId(e, 'bigdata')}>빅데이터와 최신 흐름</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 데이터베이스 기초 ===================== */}
        <section id="basics">
          <h2>1. 데이터베이스 기초 — 정의 4가지와 특징</h2>
          <p class="sub">실기 시험은 "데이터베이스란 무엇인가"를 네 단어로 정확히 쓰게 한다. 정의 4가지와 특징 4가지는 통째로 암기 대상이다.</p>

          <h3>1-1. 데이터베이스의 정의 4가지 (실기 단골)</h3>
          <p>데이터베이스는 특정 조직의 여러 응용 시스템이 <strong>공유</strong>하기 위해 <strong>통합·저장</strong>한 <strong>운영</strong> 데이터의 집합이다.
          아래 네 가지 관점의 정의를 각각 영문 명칭과 함께 기억하자.</p>
          <table>
            <tr><th>정의</th><th>영문</th><th>의미</th></tr>
            <tr>
              <td><strong>통합된 데이터</strong></td><td>Integrated Data</td>
              <td>같은 데이터가 원칙적으로 중복되지 않도록 <strong>중복을 최소화</strong>하여 모아 둔 데이터</td>
            </tr>
            <tr>
              <td><strong>저장된 데이터</strong></td><td>Stored Data</td>
              <td>컴퓨터가 접근할 수 있는 <strong>저장 매체(디스크 등)에 저장</strong>된 데이터</td>
            </tr>
            <tr>
              <td><strong>운영 데이터</strong></td><td>Operational Data</td>
              <td>조직의 고유한 업무를 수행하기 위해 <strong>반드시 필요한</strong> 데이터</td>
            </tr>
            <tr>
              <td><strong>공용 데이터</strong></td><td>Shared Data</td>
              <td>한 사람·한 프로그램의 전유물이 아니라 여러 응용 시스템이 <strong>공동으로 소유·유지·이용</strong>하는 데이터</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            암기 키워드: <strong>통합 · 저장 · 운영 · 공용</strong>.
            "일시적 데이터", "개인 소유 데이터"처럼 반대 표현이 보기로 나오면 오답이다.
          </div>

          <h3>1-2. 데이터베이스의 특징 4가지</h3>
          <table>
            <tr><th>특징</th><th>영문</th><th>의미</th></tr>
            <tr>
              <td><strong>실시간 접근성</strong></td><td>Real-Time Accessibility</td>
              <td>사용자의 질의(Query)에 대해 <strong>즉시 처리·응답</strong>한다</td>
            </tr>
            <tr>
              <td><strong>계속적 변화</strong></td><td>Continuous Evolution</td>
              <td>삽입·삭제·갱신으로 <strong>항상 최신 데이터를 유지</strong>하며 동적으로 변한다</td>
            </tr>
            <tr>
              <td><strong>동시 공유</strong></td><td>Concurrent Sharing</td>
              <td>여러 사용자가 <strong>동시에 같은 데이터를 이용</strong>할 수 있다</td>
            </tr>
            <tr>
              <td><strong>내용에 의한 참조</strong></td><td>Content Reference</td>
              <td>주소나 위치가 아니라 <strong>데이터의 값(내용)으로 검색</strong>한다</td>
            </tr>
          </table>

          <h3>1-3. 데이터 언어와 데이터베이스 사용자</h3>
          <p>데이터베이스를 다루는 언어는 뒤의 5장에서 자세히 보겠지만, 크게 정의어(DDL)·조작어(DML)·제어어(DCL)로 나뉜다.
          이 언어를 누가 어떤 목적으로 쓰는지가 사용자 분류다.</p>
          <table>
            <tr><th>사용자</th><th>역할</th><th>주로 쓰는 언어</th></tr>
            <tr>
              <td><strong>DBA (데이터베이스 관리자)</strong></td>
              <td>스키마 정의, 보안·권한 관리, 백업·회복, 성능 감시 등 <strong>데이터베이스 시스템 전체를 관리</strong></td>
              <td>DDL, DCL</td>
            </tr>
            <tr>
              <td><strong>응용 프로그래머</strong></td>
              <td>호스트 언어(Java, C 등)에 DML을 삽입하여 <strong>응용 프로그램을 개발</strong></td>
              <td>DML (호스트 언어에 내장)</td>
            </tr>
            <tr>
              <td><strong>일반 사용자 (End User)</strong></td>
              <td>질의어(SQL)나 응용 프로그램 화면을 통해 데이터를 <strong>조회·삽입·삭제·갱신</strong></td>
              <td>DML (대화식 질의)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            "데이터베이스의 <strong>전체적인 관리·운영에 책임</strong>을 지는 사람"을 묻는 문제의 답은 <strong>DBA</strong>다.
            응용 프로그래머와 혼동하지 말 것.
          </div>
        </section>

        {/* ===================== 2. DBMS 필수 기능 ===================== */}
        <section id="dbms">
          <h2>2. DBMS 필수 기능 3가지</h2>
          <p class="sub">DBMS(Database Management System)는 응용 프로그램과 데이터베이스 사이에서 데이터를 관리해 주는 소프트웨어다. 필수 기능 3가지의 "정의 문장"이 그대로 출제된다.</p>

          <h3>2-1. 필수 기능 3가지 (실기 단골)</h3>
          <table>
            <tr><th>기능</th><th>영문</th><th>정의</th></tr>
            <tr>
              <td><strong>정의 기능</strong></td><td>Definition</td>
              <td>데이터의 <strong>형(Type)과 구조</strong>, 이용 방식, 제약 조건 등을 명시하는 기능.
              응용 프로그램과 데이터베이스 사이의 <strong>인터페이스 수단을 정의</strong>한다 (스키마 정의)</td>
            </tr>
            <tr>
              <td><strong>조작 기능</strong></td><td>Manipulation</td>
              <td>데이터의 <strong>검색·삽입·삭제·갱신</strong> 등 사용자와 데이터베이스 사이의
              인터페이스 수단을 제공하는 기능</td>
            </tr>
            <tr>
              <td><strong>제어 기능</strong></td><td>Control</td>
              <td>데이터의 <strong>무결성 유지, 보안(권한 검사), 병행 제어(동시성), 회복</strong>을 통해
              데이터베이스의 내용을 항상 정확하고 안전하게 유지하는 기능</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            제어 기능의 세부 키워드 네 가지 — <strong>무결성, 보안, 병행 제어, 회복</strong> — 은
            "다음 중 제어 기능에 해당하는 것"을 고르는 형태로도 출제된다.
          </div>

          <h3>2-2. DBMS의 장단점</h3>
          <table>
            <tr><th>장점</th><th>단점</th></tr>
            <tr>
              <td>
                · 데이터 <strong>중복 최소화</strong> · <strong>공유</strong> 가능<br/>
                · 데이터의 <strong>일관성 · 무결성</strong> 유지<br/>
                · <strong>보안</strong> 보장(권한 관리)<br/>
                · 데이터의 <strong>논리적 · 물리적 독립성</strong><br/>
                · 표준화 용이, 항상 최신 데이터 유지
              </td>
              <td>
                · 도입 <strong>비용이 크다</strong>(장비 + 라이선스 + 전문 인력)<br/>
                · 시스템이 <strong>복잡</strong>하고 백업·회복 절차가 어렵다<br/>
                · 중앙 집중 관리로 <strong>취약점(장애 파급)</strong>이 존재<br/>
                · 대용량 처리 시 <strong>오버헤드</strong> 발생 가능
              </td>
            </tr>
          </table>
        </section>

        {/* ===================== 3. 스키마 3계층 ===================== */}
        <section id="schema">
          <h2>3. 스키마(Schema) 3계층</h2>
          <p class="sub">스키마는 데이터베이스의 구조와 제약 조건에 관한 전반적인 명세(메타데이터)다. ANSI/SPARC 3계층 구조는 실기에서 "설명 → 스키마 이름 쓰기"로 매년 나올 수 있는 최중요 주제.</p>

          <h3>3-1. 3계층 정의</h3>
          <table>
            <tr><th>스키마</th><th>관점</th><th>정의</th></tr>
            <tr>
              <td><strong>외부 스키마<br/>(External Schema)</strong></td>
              <td>사용자 · 응용 프로그래머 관점</td>
              <td>각 개인(사용자 그룹)이 보는 <strong>논리적 구조</strong>.
              사용자마다 다를 수 있어 여러 개 존재하며, <strong>서브 스키마</strong>라고도 한다</td>
            </tr>
            <tr>
              <td><strong>개념 스키마<br/>(Conceptual Schema)</strong></td>
              <td>조직 전체 · 기관 관점</td>
              <td>데이터베이스 전체의 <strong>논리적 구조</strong>. 접근 권한·보안·무결성 규칙 명세를 포함하고
              조직 전체에 <strong>하나만 존재</strong>한다. 흔히 "스키마"라고 하면 이것</td>
            </tr>
            <tr>
              <td><strong>내부 스키마<br/>(Internal Schema)</strong></td>
              <td>시스템 프로그래머 · 저장 장치 관점</td>
              <td>데이터가 실제 저장 장치에 저장되는 <strong>물리적 구조</strong>.
              레코드 형식, 저장 순서, 인덱스 유무 등을 정의한다</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 620" role="img" aria-label="스키마 3계층 구조와 매핑 흐름 도면">
              {/* 사용자 계층 */}
              <rect class="box" x="120" y="20" width="160" height="46" />
              <text x="200" y="49" text-anchor="middle" class="small strong">일반 사용자 A</text>
              <rect class="box" x="370" y="20" width="160" height="46" />
              <text x="450" y="49" text-anchor="middle" class="small strong">일반 사용자 B</text>
              <rect class="box" x="620" y="20" width="160" height="46" />
              <text x="700" y="49" text-anchor="middle" class="small strong">응용 프로그램</text>

              {/* 외부 스키마 계층 */}
              <rect class="boxsoft" x="170" y="130" width="250" height="56" />
              <text x="295" y="153" text-anchor="middle" class="strong">외부 스키마 1</text>
              <text x="295" y="174" text-anchor="middle" class="small">사용자 관점 · 서브 스키마</text>
              <rect class="boxsoft" x="480" y="130" width="250" height="56" />
              <text x="605" y="153" text-anchor="middle" class="strong">외부 스키마 2</text>
              <text x="605" y="174" text-anchor="middle" class="small">사용자마다 여러 개 가능</text>

              {/* 사용자 → 외부 정적 연결 */}
              <line class="blocked" x1="200" y1="66" x2="260" y2="126" />
              <line class="blocked" x1="700" y1="66" x2="650" y2="126" />

              {/* 개념 스키마 */}
              <rect class="boxdark" x="280" y="260" width="340" height="60" />
              <text x="450" y="285" text-anchor="middle" class="strong">개념 스키마</text>
              <text x="450" y="306" text-anchor="middle" class="small">조직 전체의 논리 구조 · 오직 하나만 존재</text>

              {/* 내부 스키마 */}
              <rect class="box" x="280" y="390" width="340" height="60" />
              <text x="450" y="415" text-anchor="middle" class="strong">내부 스키마</text>
              <text x="450" y="436" text-anchor="middle" class="small">물리적 저장 구조 · 레코드 형식 · 인덱스</text>

              {/* 디스크 */}
              <rect class="boxsoft" x="330" y="520" width="240" height="50" />
              <text x="450" y="551" text-anchor="middle" class="small strong">저장 데이터베이스 (디스크)</text>

              {/* 애니메이션 단계 */}
              <g class="msg" data-step="1">
                <line class="arrow" x1="450" y1="66" x2="320" y2="126" />
                <text x="330" y="100" text-anchor="middle" class="small">1. 질의 (사용자 관점)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="320" y1="186" x2="420" y2="256" />
                <text x="255" y="230" text-anchor="middle" class="small">2. 외부/개념 매핑 — 논리적 독립성</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="450" y1="320" x2="450" y2="386" />
                <text x="655" y="358" text-anchor="middle" class="small">3. 개념/내부 매핑 — 물리적 독립성</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="450" y1="450" x2="450" y2="516" />
                <text x="625" y="488" text-anchor="middle" class="small">4. 물리적 저장 장치 접근</text>
              </g>
            </svg>
            <figcaption>도면 1. 스키마 3계층 구조 — 사용자의 질의가 외부 → 개념 → 내부 스키마의 매핑을 거쳐 디스크에 닿는다.
            계층 사이의 매핑 덕분에 아래 계층이 바뀌어도 위 계층은 영향을 받지 않는다(데이터 독립성).</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <strong>논리적 독립성</strong>: 개념 스키마가 변해도 외부 스키마(응용 프로그램)는 영향 없음.<br/>
            <strong>물리적 독립성</strong>: 내부 스키마(저장 구조)가 변해도 개념·외부 스키마는 영향 없음.<br/>
            "여러 개 존재 가능한 스키마 = 외부", "하나만 존재 = 개념", "물리적 = 내부"로 구분하면 빠르다.
          </div>

          <h3>3-2. 데이터 사전과 데이터 디렉터리</h3>
          <table>
            <tr><th>용어</th><th>설명</th></tr>
            <tr>
              <td><strong>데이터 사전<br/>(Data Dictionary)</strong></td>
              <td>데이터베이스에 저장된 모든 개체(테이블, 인덱스, 사용자, 권한 등)의 정보,
              즉 <strong>메타데이터(데이터에 대한 데이터)</strong>를 저장하는 곳.
              <strong>시스템 카탈로그(System Catalog)</strong>라고도 하며, 사용자는 <strong>조회(SELECT)만 가능</strong>하고
              갱신은 DBMS가 자동으로 수행한다</td>
            </tr>
            <tr>
              <td><strong>데이터 디렉터리<br/>(Data Directory)</strong></td>
              <td>데이터 사전에 있는 데이터에 <strong>실제로 접근하는 데 필요한 위치 정보</strong>를 관리하는 곳.
              시스템만 접근 가능하고 <strong>사용자는 접근할 수 없다</strong></td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            데이터 사전은 사용자가 "볼 수는 있지만 고칠 수는 없다".
            데이터 디렉터리는 "볼 수도 없다". 접근 가능 여부를 뒤집은 보기가 자주 나온다.
          </div>
        </section>

        {/* ===================== 4. 데이터베이스 종류 ===================== */}
        <section id="models">
          <h2>4. 데이터베이스 종류 — 모델별 분류</h2>
          <p class="sub">데이터를 어떤 구조로 표현하느냐에 따라 계층형 → 네트워크형 → 관계형 → 객체지향형 → NoSQL 순으로 발전해 왔다.</p>

          <h3>4-1. 데이터 모델별 데이터베이스</h3>
          <table>
            <tr><th>종류</th><th>구조</th><th>관계 표현</th><th>특징</th></tr>
            <tr>
              <td><strong>계층형<br/>(Hierarchical)</strong></td>
              <td>트리(Tree)</td>
              <td>부모-자식 <strong>1:N</strong></td>
              <td>구조가 단순하고 빠르지만 구조 변경이 어렵다. N:M 표현 불가. 예: IMS</td>
            </tr>
            <tr>
              <td><strong>네트워크형<br/>(Network)</strong></td>
              <td>그래프(Graph)</td>
              <td>오너-멤버 <strong>N:M</strong></td>
              <td><strong>CODASYL</strong>이 제안(CODASYL DBTG 모델). 계층형보다 유연하나 구조가 복잡</td>
            </tr>
            <tr>
              <td><strong>관계형<br/>(Relational)</strong></td>
              <td>표(Table)</td>
              <td>키(PK-FK)로 연결</td>
              <td>수학적 릴레이션 이론 기반. SQL 표준. 현재 가장 널리 사용. 예: Oracle, MySQL</td>
            </tr>
            <tr>
              <td><strong>객체지향형<br/>(Object-Oriented)</strong></td>
              <td>객체(Object)</td>
              <td>상속 · 참조</td>
              <td>멀티미디어 등 복잡한 데이터를 객체·클래스·상속 개념으로 표현</td>
            </tr>
            <tr>
              <td><strong>NoSQL<br/>(Not Only SQL)</strong></td>
              <td>모델 다양</td>
              <td>모델별 상이</td>
              <td>고정 스키마 없이 대량·비정형 데이터를 수평 확장으로 처리</td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 320" role="img" aria-label="계층형·네트워크형·관계형 데이터 모델 구조 비교 도면">
              {/* 패널 제목 */}
              <text x="165" y="34" text-anchor="middle" class="strong">계층형 — 트리 (1:N)</text>
              <text x="455" y="34" text-anchor="middle" class="strong">네트워크형 — 그래프 (N:M)</text>
              <text x="745" y="34" text-anchor="middle" class="strong">관계형 — 표 (Table)</text>

              {/* 계층형: 트리 */}
              <rect class="boxdark" x="115" y="60" width="100" height="40" />
              <text x="165" y="86" text-anchor="middle" class="small">부모</text>
              <rect class="boxsoft" x="45" y="160" width="100" height="40" />
              <text x="95" y="186" text-anchor="middle" class="small">자식 1</text>
              <rect class="boxsoft" x="185" y="160" width="100" height="40" />
              <text x="235" y="186" text-anchor="middle" class="small">자식 2</text>
              <rect class="boxsoft" x="45" y="250" width="100" height="40" />
              <text x="95" y="276" text-anchor="middle" class="small">손자</text>
              <line class="arrow" x1="145" y1="100" x2="100" y2="156" />
              <line class="arrow" x1="185" y1="100" x2="230" y2="156" />
              <line class="arrow" x1="95" y1="200" x2="95" y2="246" />
              <text x="165" y="300" text-anchor="middle" class="small">부모 1 : 자식 N, 경로가 하나</text>

              {/* 네트워크형: 그래프 */}
              <rect class="boxdark" x="345" y="60" width="100" height="40" />
              <text x="395" y="86" text-anchor="middle" class="small">오너 A</text>
              <rect class="boxdark" x="475" y="60" width="100" height="40" />
              <text x="525" y="86" text-anchor="middle" class="small">오너 B</text>
              <rect class="boxsoft" x="345" y="200" width="100" height="40" />
              <text x="395" y="226" text-anchor="middle" class="small">멤버 1</text>
              <rect class="boxsoft" x="475" y="200" width="100" height="40" />
              <text x="525" y="226" text-anchor="middle" class="small">멤버 2</text>
              <line class="arrow" x1="395" y1="100" x2="395" y2="196" />
              <line class="arrow" x1="410" y1="100" x2="510" y2="196" />
              <line class="arrow" x1="510" y1="100" x2="410" y2="196" />
              <line class="arrow" x1="525" y1="100" x2="525" y2="196" />
              <text x="460" y="300" text-anchor="middle" class="small">서로 얽힌 N:M — CODASYL 제안</text>

              {/* 관계형: 표 */}
              <rect class="boxdark" x="640" y="60" width="210" height="34" />
              <text x="690" y="83" text-anchor="middle" class="small strong">학번</text>
              <text x="790" y="83" text-anchor="middle" class="small strong">이름</text>
              <rect class="box" x="640" y="94" width="210" height="30" />
              <text x="690" y="115" text-anchor="middle" class="small">100</text>
              <text x="790" y="115" text-anchor="middle" class="small">김솔</text>
              <rect class="box" x="640" y="124" width="210" height="30" />
              <text x="690" y="145" text-anchor="middle" class="small">200</text>
              <text x="790" y="145" text-anchor="middle" class="small">이달</text>
              <line class="blocked" x1="745" y1="60" x2="745" y2="154" />
              <text x="745" y="190" text-anchor="middle" class="small">행(튜플) × 열(속성)</text>
              <text x="745" y="216" text-anchor="middle" class="small">표끼리는 PK-FK로 연결</text>
              <text x="745" y="300" text-anchor="middle" class="small">현재의 표준 — SQL 사용</text>
            </svg>
            <figcaption>도면 2. 데이터 모델 구조 비교 — 계층형은 트리, 네트워크형은 그래프, 관계형은 표로 데이터를 표현한다.</figcaption>
          </figure>

          <h3>4-2. NoSQL 4가지 유형</h3>
          <table>
            <tr><th>유형</th><th>저장 방식</th><th>대표 제품</th><th>적합한 곳</th></tr>
            <tr><td><strong>Key-Value</strong></td><td>키 하나에 값 하나</td><td>Redis, DynamoDB</td><td>캐시, 세션, 단순 조회</td></tr>
            <tr><td><strong>Document</strong></td><td>JSON 유사 문서</td><td>MongoDB, CouchDB</td><td>스키마가 유동적인 콘텐츠</td></tr>
            <tr><td><strong>Column-Family</strong></td><td>컬럼 단위 대량 저장</td><td>Cassandra, HBase</td><td>시계열, 로그, 대량 쓰기</td></tr>
            <tr><td><strong>Graph</strong></td><td>노드와 간선(관계)</td><td>Neo4j</td><td>SNS 친구 관계, 추천</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            실기에서는 "트리 구조 = 계층형", "그래프 · CODASYL = 네트워크형", "표 = 관계형"의
            <strong>구조-모델 짝짓기</strong>가 핵심 출제 포인트다.
          </div>
        </section>

        {/* ===================== 5. SQL 분류 ===================== */}
        <section id="sql">
          <h2>5. SQL 분류 — DDL · DML · DCL · TCL</h2>
          <p class="sub">"다음 명령어는 어느 분류인가"는 실기 최다 빈출 유형. 분류별 명령어 목록을 표로 통암기한다.</p>

          <h3>5-1. 분류별 명령어 (실기 단골)</h3>
          <table>
            <tr><th>분류</th><th>이름</th><th>명령어</th><th>역할</th></tr>
            <tr>
              <td><strong>DDL</strong></td>
              <td>데이터 정의어<br/>(Data Definition Language)</td>
              <td><code>CREATE</code> <code>ALTER</code> <code>DROP</code> <code>TRUNCATE</code></td>
              <td>테이블 등 개체의 <strong>구조를 정의·변경·삭제</strong></td>
            </tr>
            <tr>
              <td><strong>DML</strong></td>
              <td>데이터 조작어<br/>(Data Manipulation Language)</td>
              <td><code>SELECT</code> <code>INSERT</code> <code>UPDATE</code> <code>DELETE</code></td>
              <td>행(데이터)의 <strong>검색·삽입·수정·삭제</strong></td>
            </tr>
            <tr>
              <td><strong>DCL</strong></td>
              <td>데이터 제어어<br/>(Data Control Language)</td>
              <td><code>GRANT</code> <code>REVOKE</code></td>
              <td><strong>권한 부여·회수</strong> 등 보안 제어</td>
            </tr>
            <tr>
              <td><strong>TCL</strong></td>
              <td>트랜잭션 제어어<br/>(Transaction Control Language)</td>
              <td><code>COMMIT</code> <code>ROLLBACK</code> <code>SAVEPOINT</code></td>
              <td>트랜잭션의 <strong>확정·취소·저장점</strong> 제어</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <strong>DELETE는 DML, DROP·TRUNCATE는 DDL</strong>이다.
            DELETE는 행만 지우고 ROLLBACK 가능, TRUNCATE는 전체 행을 빠르게 지우며 원칙적으로 되돌릴 수 없고,
            DROP은 테이블 구조 자체를 제거한다. 셋의 분류 구분이 단골 함정.
          </div>

          <h3>5-2. 간단 예제</h3>
          <pre><code>{`-- DDL: 구조 정의
CREATE TABLE 학생 (
  학번   INT PRIMARY KEY,
  이름   VARCHAR(20) NOT NULL,
  학과   VARCHAR(30)
);
ALTER TABLE 학생 ADD 이메일 VARCHAR(50);   -- 열 추가
DROP TABLE 학생 CASCADE;                    -- 참조 개체까지 함께 제거

-- DML: 데이터 조작
INSERT INTO 학생 (학번, 이름, 학과) VALUES (100, '김솔', '전산');
UPDATE 학생 SET 학과 = '소프트웨어' WHERE 학번 = 100;
DELETE FROM 학생 WHERE 학번 = 100;
SELECT 이름, 학과 FROM 학생 WHERE 학과 = '소프트웨어';

-- DCL: 권한 제어
GRANT SELECT, INSERT ON 학생 TO kim WITH GRANT OPTION;
REVOKE SELECT ON 학생 FROM kim CASCADE;

-- TCL: 트랜잭션 제어
SAVEPOINT sp1;
ROLLBACK TO sp1;   -- 저장점까지 되돌리기
COMMIT;            -- 변경 확정`}</code></pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <code>WITH GRANT OPTION</code>은 "받은 권한을 남에게 다시 부여할 수 있는 권한",
            <code>REVOKE ... CASCADE</code>는 "그 사용자가 다른 이에게 부여한 권한까지 연쇄 회수"다.
            둘 다 실기 기술 문제로 출제된 적 있는 표현이다.
          </div>
        </section>

        {/* ===================== 6. 절차형 SQL ===================== */}
        <section id="procedural">
          <h2>6. 절차형 SQL — 프로시저 · 함수 · 트리거</h2>
          <p class="sub">절차형 SQL은 SQL에 변수·조건·반복 같은 절차적 로직을 더해 DBMS 안에 저장해 두고 실행하는 코드다. 세 가지의 "호출 방식과 반환 여부" 차이가 출제 포인트.</p>

          <h3>6-1. 세 가지 비교 (실기 단골)</h3>
          <table>
            <tr><th>구분</th><th>프로시저 (Procedure)</th><th>사용자 정의 함수 (Function)</th><th>트리거 (Trigger)</th></tr>
            <tr>
              <td><strong>실행 방법</strong></td>
              <td><code>CALL / EXECUTE</code>로 <strong>명시적 호출</strong></td>
              <td>SQL 문장(SELECT 등) <strong>안에서 호출</strong></td>
              <td>INSERT/UPDATE/DELETE 등 <strong>이벤트 발생 시 자동 실행</strong></td>
            </tr>
            <tr>
              <td><strong>반환값</strong></td>
              <td>없어도 됨 (OUT 매개변수로 여러 값 가능)</td>
              <td><strong>RETURN으로 단일 값 반환 필수</strong></td>
              <td>반환값 없음</td>
            </tr>
            <tr>
              <td><strong>용도</strong></td>
              <td>일련의 작업(배치, 복잡한 갱신) 묶음 처리</td>
              <td>계산·변환 결과를 질의에서 활용</td>
              <td>데이터 무결성 유지, 변경 이력(로그) 자동 기록</td>
            </tr>
          </table>

          <h3>6-2. PL/SQL 블록 구조</h3>
          <p>오라클 계열 절차형 SQL(PL/SQL)의 블록은 네 부분으로 구성된다.
          <strong>DECLARE(선언부, 선택) → BEGIN(실행부, 필수) → EXCEPTION(예외 처리부, 선택) → END(필수)</strong>.</p>
          <pre><code>{`DECLARE            -- 선언부(선택): 변수·상수·커서 선언
  v_count NUMBER := 0;
BEGIN              -- 실행부(필수): 처리 로직
  SELECT COUNT(*) INTO v_count FROM 학생;
  DBMS_OUTPUT.PUT_LINE('학생 수: ' || v_count);
EXCEPTION          -- 예외 처리부(선택)
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('오류 발생');
END;               -- 종료(필수)
/`}</code></pre>

          <h3>6-3. 프로시저 예제</h3>
          <pre><code>{`CREATE OR REPLACE PROCEDURE 학과변경(p_학번 IN INT, p_학과 IN VARCHAR2)
IS
BEGIN
  UPDATE 학생 SET 학과 = p_학과 WHERE 학번 = p_학번;
  COMMIT;
END;
/
-- 호출: 명시적으로 실행한다
EXECUTE 학과변경(100, '인공지능');`}</code></pre>

          <h3>6-4. 사용자 정의 함수 예제</h3>
          <pre><code>{`CREATE OR REPLACE FUNCTION 학점등급(p_점수 IN NUMBER)
RETURN VARCHAR2       -- 반환 타입 명시 필수
IS
BEGIN
  IF p_점수 >= 90 THEN RETURN 'A';
  ELSIF p_점수 >= 80 THEN RETURN 'B';
  ELSE RETURN 'C';
  END IF;
END;
/
-- 호출: SQL 문장 안에서 사용한다
SELECT 이름, 학점등급(점수) FROM 성적;`}</code></pre>

          <h3>6-5. 트리거 예제</h3>
          <pre><code>{`CREATE OR REPLACE TRIGGER 성적로그
AFTER UPDATE ON 성적           -- 성적 테이블 UPDATE "이벤트" 후
FOR EACH ROW                   -- 행 단위로
BEGIN
  INSERT INTO 성적이력(학번, 이전점수, 새점수, 변경일)
  VALUES (:OLD.학번, :OLD.점수, :NEW.점수, SYSDATE);
END;
/  -- 사용자가 호출하지 않는다. UPDATE가 일어나면 자동 실행된다.`}</code></pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            구분 공식 — <strong>"자동 실행"이면 트리거, "RETURN 필수"면 함수, "EXECUTE/CALL로 호출"이면 프로시저</strong>.
            트리거 안에서는 원칙적으로 COMMIT/ROLLBACK(TCL)을 쓸 수 없다는 점도 함께 기억.
          </div>
        </section>

        {/* ===================== 7. 데이터 분석 저장소 ===================== */}
        <section id="warehouse">
          <h2>7. 데이터 분석 저장소 — DW · 마트 · OLAP</h2>
          <p class="sub">업무 처리용(OLTP) 데이터베이스와 분석용(OLAP) 저장소는 목적이 다르다. DW의 4가지 특징과 OLAP 연산 용어가 실기 단골.</p>

          <h3>7-1. OLTP vs OLAP</h3>
          <table>
            <tr><th>구분</th><th>OLTP (Online Transaction Processing)</th><th>OLAP (Online Analytical Processing)</th></tr>
            <tr><td><strong>목적</strong></td><td>일상 업무 처리(주문, 이체, 예약)</td><td>의사결정을 위한 다차원 분석</td></tr>
            <tr><td><strong>연산</strong></td><td>짧은 INSERT/UPDATE/DELETE 다수</td><td>대량 SELECT·집계 중심</td></tr>
            <tr><td><strong>데이터</strong></td><td>현재의 운영 데이터, 정규화</td><td>과거 이력 포함 대량 데이터, 요약·비정규화</td></tr>
            <tr><td><strong>단위</strong></td><td>트랜잭션(건 단위)</td><td>질의(주제 단위)</td></tr>
          </table>

          <h3>7-2. 데이터 웨어하우스(DW)의 4가지 특징 (실기 단골)</h3>
          <table>
            <tr><th>특징</th><th>영문</th><th>의미</th></tr>
            <tr>
              <td><strong>주제 지향성</strong></td><td>Subject-Oriented</td>
              <td>업무 기능이 아니라 <strong>주제(고객, 상품, 매출)</strong> 중심으로 데이터를 구성</td>
            </tr>
            <tr>
              <td><strong>통합성</strong></td><td>Integrated</td>
              <td>여러 운영 시스템의 데이터를 <strong>일관된 형식으로 통합</strong>(코드·단위 표준화)</td>
            </tr>
            <tr>
              <td><strong>시계열성</strong></td><td>Time-Variant</td>
              <td>일정 기간의 <strong>이력(스냅숏) 데이터를 시간 축으로 보관</strong>해 추세 분석 가능</td>
            </tr>
            <tr>
              <td><strong>비휘발성</strong></td><td>Non-Volatile</td>
              <td>일단 적재된 데이터는 <strong>갱신·삭제 없이 읽기(조회) 위주</strong>로 사용</td>
            </tr>
          </table>

          <h3>7-3. DW 주변 용어</h3>
          <table>
            <tr><th>용어</th><th>설명</th></tr>
            <tr><td><strong>데이터 마트<br/>(Data Mart)</strong></td>
              <td>전사적 DW에서 <strong>특정 부서·주제만 뽑아 만든 소규모 DW</strong> (예: 영업팀 마트)</td></tr>
            <tr><td><strong>데이터 레이크<br/>(Data Lake)</strong></td>
              <td>정형·비정형을 가리지 않고 <strong>원본(Raw) 형태 그대로</strong> 대량 저장하는 저장소.
              스키마를 읽을 때 적용(Schema-on-Read)</td></tr>
            <tr><td><strong>ETL</strong></td>
              <td><strong>추출(Extract) → 변환(Transform) → 적재(Load)</strong>.
              운영 시스템의 데이터를 DW 형식으로 옮기는 과정·도구</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 250" role="img" aria-label="데이터 웨어하우스 아키텍처 흐름 도면">
              <rect class="box" x="20" y="80" width="140" height="70" />
              <text x="90" y="108" text-anchor="middle" class="strong">운영 DB</text>
              <text x="90" y="130" text-anchor="middle" class="small">OLTP · 업무 처리</text>

              <rect class="boxsoft" x="220" y="80" width="120" height="70" />
              <text x="280" y="108" text-anchor="middle" class="strong">ETL</text>
              <text x="280" y="130" text-anchor="middle" class="small">추출·변환·적재</text>

              <rect class="boxdark" x="400" y="80" width="150" height="70" />
              <text x="475" y="108" text-anchor="middle" class="strong">DW</text>
              <text x="475" y="130" text-anchor="middle" class="small">주제·통합·시계열·비휘발</text>

              <rect class="box" x="610" y="80" width="120" height="70" />
              <text x="670" y="108" text-anchor="middle" class="strong">데이터 마트</text>
              <text x="670" y="130" text-anchor="middle" class="small">부서·주제별</text>

              <rect class="box" x="780" y="80" width="110" height="70" />
              <text x="835" y="108" text-anchor="middle" class="strong">OLAP / BI</text>
              <text x="835" y="130" text-anchor="middle" class="small">분석·시각화</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="160" y1="115" x2="214" y2="115" />
                <text x="188" y="60" text-anchor="middle" class="small">1. 추출</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="340" y1="115" x2="394" y2="115" />
                <text x="368" y="60" text-anchor="middle" class="small">2. 변환·적재</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="550" y1="115" x2="604" y2="115" />
                <text x="578" y="60" text-anchor="middle" class="small">3. 부분 추출</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="730" y1="115" x2="774" y2="115" />
                <text x="753" y="60" text-anchor="middle" class="small">4. 분석</text>
              </g>
              <text x="450" y="210" text-anchor="middle" class="small">운영 데이터가 ETL을 거쳐 DW에 쌓이고, 부서별 마트를 통해 OLAP/BI 도구로 분석된다</text>
            </svg>
            <figcaption>도면 3. 데이터 웨어하우스 아키텍처 — 운영 DB → ETL → DW → 데이터 마트 → OLAP/BI 흐름.</figcaption>
          </figure>

          <h3>7-4. OLAP 연산 5가지 (실기 단골)</h3>
          <table>
            <tr><th>연산</th><th>설명</th><th>예</th></tr>
            <tr><td><strong>Roll-up</strong></td><td>작은 단위 → <strong>큰 단위로 요약</strong> (상위 레벨로 집계)</td><td>일별 매출 → 월별 매출</td></tr>
            <tr><td><strong>Drill-down</strong></td><td>큰 단위 → <strong>작은 단위로 상세화</strong> (Roll-up의 반대)</td><td>월별 매출 → 일별 매출</td></tr>
            <tr><td><strong>Slice</strong></td><td>큐브에서 <strong>한 차원의 값 하나를 고정</strong>해 2차원 조각을 잘라냄</td><td>"2026년 1월"만 보기</td></tr>
            <tr><td><strong>Dice</strong></td><td><strong>여러 차원에 조건</strong>을 걸어 부분 큐브를 잘라냄</td><td>"1분기 · 서울 · 가전"만 보기</td></tr>
            <tr><td><strong>Pivot</strong></td><td>보고서의 <strong>행과 열(축)을 회전</strong>해 관점을 바꿈</td><td>지역×월 → 월×지역</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            Roll-up과 Drill-down은 <strong>요약 수준의 상하 이동</strong>,
            Slice와 Dice는 <strong>잘라내기(고정 1차원 vs 다차원 조건)</strong>,
            Pivot은 <strong>축 회전</strong>. 설명을 주고 연산 이름을 쓰게 하는 유형으로 출제된다.
          </div>
        </section>

        {/* ===================== 8. 빅데이터 ===================== */}
        <section id="bigdata">
          <h2>8. 빅데이터와 최신 흐름</h2>
          <p class="sub">기존 DBMS로 처리하기 어려운 대량·고속·다양한 데이터를 다루는 기술. 3V 정의와 하둡 구성 요소를 기억하자.</p>

          <h3>8-1. 빅데이터의 3V (+2V)</h3>
          <table>
            <tr><th>V</th><th>의미</th></tr>
            <tr><td><strong>Volume (규모)</strong></td><td>테라바이트 이상 <strong>대용량</strong> 데이터</td></tr>
            <tr><td><strong>Velocity (속도)</strong></td><td>실시간으로 <strong>빠르게 생성·처리</strong>되는 데이터</td></tr>
            <tr><td><strong>Variety (다양성)</strong></td><td>정형·반정형·비정형 등 <strong>다양한 형태</strong>의 데이터</td></tr>
            <tr><td>+ Veracity (정확성)</td><td>데이터의 신뢰성·품질 (5V로 확장 시)</td></tr>
            <tr><td>+ Value (가치)</td><td>분석을 통해 얻는 비즈니스 가치 (5V로 확장 시)</td></tr>
          </table>

          <h3>8-2. 하둡(Hadoop)</h3>
          <ul>
            <li><strong>HDFS (Hadoop Distributed File System):</strong> 대용량 파일을 블록으로 쪼개
            여러 서버에 <strong>분산 저장</strong>하는 파일 시스템. 복제본을 두어 장애에 대비한다.</li>
            <li><strong>MapReduce:</strong> 분산 저장된 데이터를 <strong>Map(분할 처리) → Reduce(집계)</strong>
            두 단계로 나눠 병렬 처리하는 프로그래밍 모델.</li>
          </ul>
          <p><strong>데이터 마이닝(Data Mining)</strong>은 대량의 데이터 속에서 통계·기계학습 기법으로
          숨겨진 패턴·규칙·상관관계를 찾아내는 기술이다.</p>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            3V는 <strong>Volume(규모) · Velocity(속도) · Variety(다양성)</strong>.
            하둡은 "저장 = HDFS, 처리 = MapReduce"로 짝지어 기억한다.
          </div>
        </section>

        {/* ===================== 9. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>9. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">설명을 읽고 답을 먼저 종이에 쓴 뒤 "정답 보기"로 확인하자. 답은 실기처럼 정확한 용어로 쓰는 연습이 중요하다.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음은 데이터베이스의 정의 4가지에 대한 설명이다. 괄호 ①~④에 들어갈 용어를 쓰시오.</p>
            <pre>{`· ( ① ) 데이터 : 중복을 최소화하여 모아 둔 데이터
· ( ② ) 데이터 : 컴퓨터가 접근 가능한 매체에 보관된 데이터
· ( ③ ) 데이터 : 조직의 고유 업무 수행에 반드시 필요한 데이터
· ( ④ ) 데이터 : 여러 응용 시스템이 공동으로 소유하고 이용하는 데이터`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 통합된, ② 저장된, ③ 운영, ④ 공용<br/>
                <span class="label">해설: </span>데이터베이스의 정의 4가지는 통합(Integrated)·저장(Stored)·운영(Operational)·공용(Shared) 데이터다. 중복 최소화 = 통합, 매체 보관 = 저장이 핵심 연결 고리다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">DBMS의 필수 기능 3가지를 모두 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>정의(Definition) 기능, 조작(Manipulation) 기능, 제어(Control) 기능<br/>
                <span class="label">해설: </span>정의는 데이터의 형과 구조 명시, 조작은 검색·삽입·삭제·갱신 인터페이스 제공, 제어는 무결성·보안·병행 제어·회복을 담당한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 설명에 해당하는 스키마를 쓰시오.<br/>
            "데이터베이스 전체의 논리적 구조를 정의하며, 조직(기관) 전체의 관점에서 접근 권한·보안·무결성 규칙에 대한 명세를 포함한다. 데이터베이스당 하나만 존재한다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>개념 스키마(Conceptual Schema)<br/>
                <span class="label">해설: </span>"전체 논리 구조 · 하나만 존재"가 개념 스키마의 결정적 단서다. 사용자 관점에서 여러 개 존재하면 외부 스키마, 물리적 저장 구조면 내부 스키마다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 보기의 SQL 명령어를 DDL, DML, DCL로 구분하여 쓰시오.</p>
            <pre>{`[보기] CREATE, SELECT, GRANT, ALTER, UPDATE, REVOKE, DROP, INSERT`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>DDL: CREATE, ALTER, DROP / DML: SELECT, UPDATE, INSERT / DCL: GRANT, REVOKE<br/>
                <span class="label">해설: </span>구조를 다루면 DDL, 행 데이터를 다루면 DML, 권한을 다루면 DCL이다. GRANT·REVOKE 두 개만 DCL이라는 점을 기억하면 나머지 분류가 쉬워진다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">테이블의 구조는 남겨 둔 채 모든 행을 빠르게 삭제하며, 원칙적으로 ROLLBACK으로 되돌릴 수 없는 SQL 명령어를 쓰고, 이 명령어가 속한 SQL 분류를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>TRUNCATE, 분류: DDL(데이터 정의어)<br/>
                <span class="label">해설: </span>DELETE(DML)는 행 단위로 지우고 롤백이 가능하지만, TRUNCATE는 DDL이라 전체 행을 즉시 제거하고 원칙적으로 복구할 수 없다. DROP은 구조 자체를 제거한다는 점에서 다르다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 설명에 해당하는 절차형 SQL 개체의 이름을 쓰시오.<br/>
            "사용자가 직접 호출하지 않고, 테이블에 INSERT · UPDATE · DELETE 등의 이벤트가 발생하면 DBMS가 자동으로 실행한다. 데이터 무결성 유지나 변경 이력 기록에 활용된다."</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>트리거(Trigger)<br/>
                <span class="label">해설: </span>"이벤트 발생 시 자동 실행"이 트리거의 결정적 단서다. EXECUTE/CALL로 명시적으로 호출하면 프로시저, RETURN으로 단일 값을 반환하면 함수다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">절차형 SQL에서 프로시저(Procedure)와 사용자 정의 함수(Function)를 구분하는 가장 큰 차이를 "반환값" 관점에서 한 문장으로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>함수는 RETURN을 이용해 단일 값을 반드시 반환하지만, 프로시저는 반환값이 없어도 된다(필요 시 OUT 매개변수 사용).<br/>
                <span class="label">해설: </span>호출 방식도 다르다. 함수는 SELECT 등 SQL 문장 안에서 호출되고, 프로시저는 EXECUTE/CALL로 독립적으로 호출된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">데이터 웨어하우스(Data Warehouse)의 4가지 특징을 모두 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>주제 지향성(Subject-Oriented), 통합성(Integrated), 시계열성(Time-Variant), 비휘발성(Non-Volatile)<br/>
                <span class="label">해설: </span>주제 중심 구성, 여러 소스의 일관된 통합, 시간 축의 이력 보관, 적재 후 갱신 없이 조회 위주 사용 — 네 특징을 영문과 함께 기억해 두자.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명 ①, ②에 해당하는 OLAP 연산을 각각 쓰시오.</p>
            <pre>{`① 월별로 요약된 매출 데이터를 일별 데이터로 세분화하여 조회한다.
② 다차원 큐브에서 "연도 = 2026" 처럼 한 차원의 값 하나를 고정하여
   2차원 조각을 잘라낸다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① Drill-down(드릴 다운), ② Slice(슬라이스)<br/>
                <span class="label">해설: </span>상세화(하위 레벨로 이동)는 Drill-down이고 그 반대(요약)는 Roll-up이다. 한 차원 고정은 Slice, 여러 차원 조건은 Dice, 축 회전은 Pivot이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">빅데이터의 특성을 나타내는 3V가 의미하는 세 가지 요소를 영문 용어로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>Volume(규모), Velocity(속도), Variety(다양성)<br/>
                <span class="label">해설: </span>대용량, 빠른 생성·처리 속도, 정형·비정형을 아우르는 다양성이 3V다. Veracity(정확성)와 Value(가치)를 더해 5V로 확장하기도 한다.
              </div>
            </details>
          </div>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">시스템 카탈로그</span>
            <span class="kw">메타데이터</span>
            <span class="kw">데이터 독립성</span>
            <span class="kw">CODASYL DBTG</span>
            <span class="kw">이상(Anomaly)</span>
            <span class="kw">정규화 · 반정규화</span>
            <span class="kw">트랜잭션 ACID</span>
            <span class="kw">스타 스키마</span>
            <span class="kw">스노플레이크 스키마</span>
            <span class="kw">CAP 이론</span>
            <span class="kw">BASE</span>
            <span class="kw">데이터 마이닝</span>
            <span class="kw">MapReduce</span>
            <span class="kw">Schema-on-Read</span>
          </p>
        </section>

        <footer>데이터 기초 활용과 데이터베이스 종류 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
