import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './data-model.css'

export default defineComponent({
  name: 'DataModelPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>데이터 저장소와 데이터 모델</h1>
          <p>데이터 저장소 → 데이터 모델 구성 요소 → 개념적(ERD) → 논리적(관계형 모델·키·정규화) → 물리적(테이블·인덱스·파티셔닝) 순서로,<br/>
          정보처리기사 실기에 출제되는 데이터 모델링 이론을 도면과 실전 문제로 정리한 학습 문서입니다.<br/>
          <span>각 도면의 파란 점은 진행 순서를 나타내며, 현재 진행 중인 단계가 진하게 강조됩니다. 자동으로 반복 재생됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#concept" onClick={(e) => scrollToId(e, 'concept')}>데이터 저장소와 데이터 모델 개념</a></li>
            <li><a href="#erd" onClick={(e) => scrollToId(e, 'erd')}>개념적 데이터 모델과 ERD</a></li>
            <li><a href="#logical" onClick={(e) => scrollToId(e, 'logical')}>논리 데이터 모델 — 관계형 모델 용어</a></li>
            <li><a href="#keys" onClick={(e) => scrollToId(e, 'keys')}>키(Key)와 무결성</a></li>
            <li><a href="#normalization" onClick={(e) => scrollToId(e, 'normalization')}>정규화(Normalization)</a></li>
            <li><a href="#denormal" onClick={(e) => scrollToId(e, 'denormal')}>반정규화(De-normalization)</a></li>
            <li><a href="#physical" onClick={(e) => scrollToId(e, 'physical')}>물리 데이터 모델</a></li>
            <li><a href="#quality" onClick={(e) => scrollToId(e, 'quality')}>데이터 모델 품질 검증</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ================= 1. 개념 ================= */}
        <section id="concept">
          <h2>1. 데이터 저장소와 데이터 모델 개념</h2>
          <p class="sub">요구사항 속 데이터를 어떻게 컴퓨터가 저장할 구조로 바꾸는가 — 그 변환의 설계도가 데이터 모델이다.</p>

          <h3>1-1. 데이터 저장소(Data Storage)</h3>
          <p><strong>데이터 저장소</strong>는 소프트웨어에 필요한 데이터를 요구사항 분석 결과에 따라
          논리적·물리적 구조로 조직화해 저장하는 공간이다. 구축 관점에 따라 둘로 나뉜다.</p>
          <table>
            <tr><th>구분</th><th>설명</th></tr>
            <tr><td><strong>논리 데이터 저장소</strong></td><td>데이터와 데이터 간 관계를 <strong>논리적 구조(데이터 모델)</strong>로 모델링하여 구성한 저장소. 특정 하드웨어와 무관하다.</td></tr>
            <tr><td><strong>물리 데이터 저장소</strong></td><td>논리 데이터 저장소를 <strong>실제 저장 장치(하드웨어)의 특성</strong>을 반영해 구현한 저장소. 인덱스·파티션·디스크 구성이 여기서 결정된다.</td></tr>
          </table>

          <h3>1-2. 데이터 모델(Data Model)이란</h3>
          <p><strong>데이터 모델</strong>은 현실 세계의 정보를 컴퓨터 세계의 데이터베이스로 옮기기 위해
          <strong>추상화·단순화·명확화</strong>하여 표현한 개념적 도구다.
          현실을 그대로 다 담을 수 없으므로, 업무에 필요한 데이터만 골라 구조화한 "설계도"라고 생각하면 된다.</p>

          <h3>1-3. 데이터 모델의 구성 요소 3가지 (실기 단골)</h3>
          <table>
            <tr><th>구성 요소</th><th>설명</th></tr>
            <tr><td><strong>구조 (Structure)</strong></td><td>데이터베이스에 표현될 대상(개체)들과 그들 간의 <strong>관계</strong>. 데이터의 <strong>정적 성질</strong>을 나타낸다.</td></tr>
            <tr><td><strong>연산 (Operation)</strong></td><td>저장된 실제 데이터를 <strong>처리(조회·삽입·삭제·수정)하는 작업 명세</strong>. 데이터의 <strong>동적 성질</strong>을 나타낸다.</td></tr>
            <tr><td><strong>제약 조건 (Constraint)</strong></td><td>실제 데이터가 저장되기 전에 지켜야 할 <strong>논리적 제약</strong>. 데이터의 무결성 유지 조건.</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            데이터 모델 구성 요소는 <strong>구조 · 연산 · 제약 조건</strong> — "<strong>구·연·제</strong>"로 암기한다.
            "정적 성질 = 구조, 동적 성질 = 연산"의 대응까지 함께 묻는 문제가 자주 나온다.
          </div>

          <h3>1-4. 데이터 모델링 절차 3단계</h3>
          <table>
            <tr><th>단계</th><th>하는 일</th><th>주요 산출물</th><th>DBMS 의존성</th></tr>
            <tr><td><strong>① 개념적 설계</strong></td><td>현실 업무를 추상화. 개체·속성·관계를 도출</td><td><strong>ERD(개체-관계 다이어그램)</strong></td><td>독립적 (DBMS와 무관)</td></tr>
            <tr><td><strong>② 논리적 설계</strong></td><td>개념 모델을 특정 데이터 모델(관계형 등)로 변환, <strong>정규화</strong> 수행</td><td>릴레이션 스키마</td><td>데이터 모델(관계형 등)에 종속</td></tr>
            <tr><td><strong>③ 물리적 설계</strong></td><td>저장 장치·성능을 고려해 실제 저장 구조 설계</td><td>테이블 정의서 · 인덱스 · 파티션</td><td>특정 DBMS·하드웨어에 종속</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 250" role="img" aria-label="데이터 모델링 3단계 흐름 도면">
              <rect class="boxsoft" x="20" y="80" width="140" height="90" />
              <text x="90" y="115" text-anchor="middle" class="strong">요구사항</text>
              <text x="90" y="140" text-anchor="middle" class="small">업무 분석 결과</text>

              <rect class="boxdark" x="250" y="80" width="170" height="90" />
              <text x="335" y="110" text-anchor="middle" class="strong">개념적 설계</text>
              <text x="335" y="133" text-anchor="middle" class="small">산출물: ERD</text>
              <text x="335" y="153" text-anchor="middle" class="small">개체·속성·관계</text>

              <rect class="boxdark" x="490" y="80" width="170" height="90" />
              <text x="575" y="110" text-anchor="middle" class="strong">논리적 설계</text>
              <text x="575" y="133" text-anchor="middle" class="small">산출물: 릴레이션 스키마</text>
              <text x="575" y="153" text-anchor="middle" class="small">정규화 수행</text>

              <rect class="boxdark" x="730" y="80" width="150" height="90" />
              <text x="805" y="110" text-anchor="middle" class="strong">물리적 설계</text>
              <text x="805" y="133" text-anchor="middle" class="small">산출물: 테이블</text>
              <text x="805" y="153" text-anchor="middle" class="small">인덱스·파티션</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="160" y1="125" x2="244" y2="125" />
                <text x="202" y="55" text-anchor="middle" class="small">1. 추상화</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="420" y1="125" x2="484" y2="125" />
                <text x="452" y="55" text-anchor="middle" class="small">2. 모델 변환</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="660" y1="125" x2="724" y2="125" />
                <text x="692" y="55" text-anchor="middle" class="small">3. 구현 설계</text>
              </g>

              <text x="450" y="215" text-anchor="middle" class="small">DBMS 독립적 → 데이터 모델 종속 → DBMS·하드웨어 종속 순으로 구체화된다</text>
            </svg>
            <figcaption>도면 1. 데이터 모델링 3단계 — 개념(ERD) → 논리(릴레이션 스키마·정규화) → 물리(테이블·인덱스).</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "정규화는 어느 단계에서 수행하는가?" → <strong>논리적 설계</strong> 단계.
            "ERD는 어느 단계의 산출물인가?" → <strong>개념적 설계</strong> 단계. 단계와 산출물을 섞어 내는 문제에 대비하자.
          </div>
        </section>

        {/* ================= 2. ERD ================= */}
        <section id="erd">
          <h2>2. 개념적 데이터 모델과 ERD</h2>
          <p class="sub">개념적 설계의 결과물인 ERD(Entity-Relationship Diagram)는 개체·속성·관계 세 가지 재료로 업무를 그린다.</p>

          <h3>2-1. ERD의 3요소</h3>
          <table>
            <tr><th>요소</th><th>정의</th><th>예시</th></tr>
            <tr><td><strong>개체 (Entity)</strong></td><td>업무에서 관리해야 할 <strong>사람·사물·개념</strong> 등 독립적으로 존재하는 대상</td><td>학생, 과목, 주문</td></tr>
            <tr><td><strong>속성 (Attribute)</strong></td><td>개체가 갖는 <strong>고유한 성질·특성</strong>. 더 이상 분리되지 않는 정보의 최소 단위</td><td>학번, 이름, 학년</td></tr>
            <tr><td><strong>관계 (Relationship)</strong></td><td>개체와 개체 사이의 <strong>의미 있는 연관성</strong></td><td>학생이 과목을 "수강한다"</td></tr>
          </table>

          <h3>2-2. 속성의 유형 3가지</h3>
          <table>
            <tr><th>유형</th><th>설명</th><th>예시</th></tr>
            <tr><td><strong>기본 속성</strong></td><td>업무 분석을 통해 현실 업무에서 <strong>그대로 추출</strong>한 본래의 속성</td><td>이름, 생년월일, 주소</td></tr>
            <tr><td><strong>설계 속성</strong></td><td>업무에는 없지만 <strong>설계 과정에서 규칙화를 위해 새로 만든</strong> 속성(주로 코드)</td><td>상품 코드, 지점 코드</td></tr>
            <tr><td><strong>파생 속성</strong></td><td><strong>다른 속성의 값으로부터 계산·유추</strong>되어 만들어진 속성</td><td>합계 금액, 평균 점수, 나이</td></tr>
          </table>

          <h3>2-3. 관계의 형태 — 1:1, 1:N, N:M</h3>
          <table>
            <tr><th>형태</th><th>의미</th><th>예시</th></tr>
            <tr><td><strong>1:1 (일대일)</strong></td><td>양쪽 개체가 서로 하나씩만 대응</td><td>사원 — 사원증</td></tr>
            <tr><td><strong>1:N (일대다)</strong></td><td>한쪽 개체 하나가 상대 개체 여러 개와 대응</td><td>학과 — 학생</td></tr>
            <tr><td><strong>N:M (다대다)</strong></td><td>양쪽 모두 여러 개와 대응. 논리 설계에서 <strong>연결(교차) 개체</strong>로 분해된다</td><td>학생 — 과목(수강)</td></tr>
          </table>

          <h3>2-4. 피터 첸(Peter Chen) 표기법</h3>
          <table>
            <tr><th>기호</th><th>의미</th></tr>
            <tr><td><strong>사각형</strong></td><td>개체(Entity)</td></tr>
            <tr><td><strong>타원</strong></td><td>속성(Attribute) — 기본키 속성은 <strong>밑줄</strong>로 표시</td></tr>
            <tr><td><strong>마름모</strong></td><td>관계(Relationship)</td></tr>
            <tr><td><strong>선(실선)</strong></td><td>개체–속성, 개체–관계의 연결</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 360" role="img" aria-label="피터 첸 표기법 ERD 예시 도면">
              {/* 속성 타원 - 학생 */}
              <ellipse class="boxsoft" cx="120" cy="60" rx="60" ry="28" />
              <text x="120" y="66" text-anchor="middle" class="small strong">학번</text>
              <line class="life" x1="98" y1="72" x2="142" y2="72" style="stroke-dasharray:none" />
              <ellipse class="boxsoft" cx="265" cy="60" rx="60" ry="28" />
              <text x="265" y="66" text-anchor="middle" class="small">이름</text>

              {/* 속성 타원 - 과목 */}
              <ellipse class="boxsoft" cx="635" cy="60" rx="60" ry="28" />
              <text x="635" y="66" text-anchor="middle" class="small strong">과목코드</text>
              <line class="life" x1="605" y1="72" x2="665" y2="72" style="stroke-dasharray:none" />
              <ellipse class="boxsoft" cx="780" cy="60" rx="60" ry="28" />
              <text x="780" y="66" text-anchor="middle" class="small">과목명</text>

              {/* 개체 사각형 */}
              <rect class="box" x="120" y="160" width="140" height="60" />
              <text x="190" y="197" text-anchor="middle" class="strong">학생</text>
              <rect class="box" x="640" y="160" width="140" height="60" />
              <text x="710" y="197" text-anchor="middle" class="strong">과목</text>

              {/* 관계 마름모 */}
              <polygon class="boxdark" points="450,135 545,190 450,245 355,190" />
              <text x="450" y="197" text-anchor="middle" class="strong">수강</text>

              {/* 연결선: 속성-개체 */}
              <line class="arrow" x1="135" y1="88" x2="175" y2="156" style="marker-end:none" />
              <line class="arrow" x1="250" y1="88" x2="210" y2="156" style="marker-end:none" />
              <line class="arrow" x1="650" y1="88" x2="690" y2="156" style="marker-end:none" />
              <line class="arrow" x1="765" y1="88" x2="725" y2="156" style="marker-end:none" />

              {/* 연결선: 개체-관계 */}
              <line class="arrow" x1="260" y1="190" x2="355" y2="190" style="marker-end:none" />
              <line class="arrow" x1="545" y1="190" x2="640" y2="190" style="marker-end:none" />
              <text x="300" y="180" text-anchor="middle" class="small strong">N</text>
              <text x="600" y="180" text-anchor="middle" class="small strong">M</text>

              {/* 관계 속성 */}
              <ellipse class="boxsoft" cx="450" cy="305" rx="60" ry="28" />
              <text x="450" y="311" text-anchor="middle" class="small">성적</text>
              <line class="arrow" x1="450" y1="245" x2="450" y2="277" style="marker-end:none" />

              {/* 범례 */}
              <text x="120" y="330" class="small">사각형 = 개체</text>
              <text x="270" y="330" class="small">타원 = 속성 (밑줄 = 기본키)</text>
              <text x="560" y="330" class="small">마름모 = 관계</text>
              <text x="720" y="330" class="small">N : M = 다대다</text>
            </svg>
            <figcaption>도면 2. 피터 첸 표기법 — 학생(N)과 과목(M)이 "수강" 관계로 연결되고, 성적은 관계 자체의 속성이다.</figcaption>
          </figure>

          <p>실무에서는 개체를 표(테이블 모양)로 그리고 관계선 끝에 까마귀 발 모양으로 다수(N)를 표현하는
          <strong>까마귀발(Crow's Foot) 표기법</strong>도 널리 쓰인다. 시험에서는 "기호 → 의미"를 묻는 피터 첸 표기법이 출제 빈도가 높다.</p>
        </section>

        {/* ================= 3. 논리 데이터 모델 ================= */}
        <section id="logical">
          <h2>3. 논리 데이터 모델 — 관계형 모델 용어</h2>
          <p class="sub">개념 모델(ERD)을 관계형 모델로 옮기면 모든 것이 "릴레이션(표)"이 된다. 용어의 정확한 정의가 곧 점수다.</p>

          <h3>3-1. 관계형 모델 핵심 용어</h3>
          <table>
            <tr><th>용어</th><th>정의</th></tr>
            <tr><td><strong>릴레이션 (Relation)</strong></td><td>행과 열로 구성된 표. 테이블에 대응</td></tr>
            <tr><td><strong>튜플 (Tuple)</strong></td><td>릴레이션의 <strong>행(가로줄)</strong> 하나. 데이터 한 건</td></tr>
            <tr><td><strong>속성 (Attribute)</strong></td><td>릴레이션의 <strong>열(세로줄)</strong> 하나. 데이터의 항목</td></tr>
            <tr><td><strong>차수 (Degree)</strong></td><td>릴레이션이 가진 <strong>속성(열)의 개수</strong></td></tr>
            <tr><td><strong>카디널리티 (Cardinality)</strong></td><td>릴레이션이 가진 <strong>튜플(행)의 개수</strong></td></tr>
            <tr><td><strong>도메인 (Domain)</strong></td><td>하나의 속성이 가질 수 있는 <strong>원자값들의 집합</strong> (예: 학년 속성의 도메인 = 1~4)</td></tr>
            <tr><td><strong>릴레이션 스키마</strong></td><td>릴레이션의 <strong>구조 정의</strong>(이름 + 속성 목록). 정적·잘 변하지 않음</td></tr>
            <tr><td><strong>릴레이션 인스턴스</strong></td><td>어느 시점에 릴레이션에 실제로 들어 있는 <strong>튜플들의 집합</strong>. 동적·수시로 변함</td></tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 320" role="img" aria-label="릴레이션 구조와 차수, 카디널리티 도면">
              {/* 스키마(헤더) */}
              <rect class="boxdark" x="230" y="60" width="440" height="36" />
              <text x="285" y="85" text-anchor="middle" class="small strong">학번</text>
              <text x="395" y="85" text-anchor="middle" class="small strong">이름</text>
              <text x="505" y="85" text-anchor="middle" class="small strong">학년</text>
              <text x="615" y="85" text-anchor="middle" class="small strong">전공</text>
              {/* 튜플 3개 */}
              <rect class="box" x="230" y="96" width="440" height="32" />
              <text x="285" y="118" text-anchor="middle" class="small">1001</text>
              <text x="395" y="118" text-anchor="middle" class="small">김하나</text>
              <text x="505" y="118" text-anchor="middle" class="small">2</text>
              <text x="615" y="118" text-anchor="middle" class="small">컴퓨터공학</text>
              <rect class="box" x="230" y="128" width="440" height="32" />
              <text x="285" y="150" text-anchor="middle" class="small">1002</text>
              <text x="395" y="150" text-anchor="middle" class="small">이두리</text>
              <text x="505" y="150" text-anchor="middle" class="small">3</text>
              <text x="615" y="150" text-anchor="middle" class="small">전자공학</text>
              <rect class="box" x="230" y="160" width="440" height="32" />
              <text x="285" y="182" text-anchor="middle" class="small">1003</text>
              <text x="395" y="182" text-anchor="middle" class="small">박세리</text>
              <text x="505" y="182" text-anchor="middle" class="small">1</text>
              <text x="615" y="182" text-anchor="middle" class="small">경영학</text>

              {/* 주석 */}
              <text x="450" y="40" text-anchor="middle" class="small strong">릴레이션 스키마: 학생(학번, 이름, 학년, 전공)</text>
              <line class="arrow ret" x1="150" y1="144" x2="224" y2="144" />
              <text x="105" y="140" text-anchor="middle" class="small">튜플</text>
              <text x="105" y="158" text-anchor="middle" class="small">(행 1건)</text>
              <line class="arrow ret" x1="760" y1="80" x2="676" y2="80" />
              <text x="810" y="85" text-anchor="middle" class="small">속성(열)</text>

              <rect class="boxsoft" x="120" y="230" width="310" height="60" />
              <text x="275" y="255" text-anchor="middle" class="small strong">차수(Degree) = 4</text>
              <text x="275" y="277" text-anchor="middle" class="small">속성이 학번·이름·학년·전공 4개</text>
              <rect class="boxsoft" x="470" y="230" width="310" height="60" />
              <text x="625" y="255" text-anchor="middle" class="small strong">카디널리티(Cardinality) = 3</text>
              <text x="625" y="277" text-anchor="middle" class="small">튜플이 3건 저장되어 있음</text>
            </svg>
            <figcaption>도면 3. 릴레이션 "학생" — 열의 개수가 차수(4), 행의 개수가 카디널리티(3)다.</figcaption>
          </figure>

          <h3>3-2. 파일 시스템 vs 관계형 DB 용어 대응</h3>
          <table>
            <tr><th>파일 시스템</th><th>관계형 데이터 모델</th><th>SQL(물리)</th></tr>
            <tr><td>파일 (File)</td><td>릴레이션 (Relation)</td><td>테이블 (Table)</td></tr>
            <tr><td>레코드 (Record)</td><td>튜플 (Tuple)</td><td>행 (Row)</td></tr>
            <tr><td>필드 (Field)</td><td>속성 (Attribute)</td><td>컬럼 (Column)</td></tr>
          </table>

          <h3>3-3. 릴레이션의 특징</h3>
          <ul>
            <li>한 릴레이션에 <strong>동일한 튜플은 존재할 수 없다</strong> (튜플의 유일성).</li>
            <li><strong>튜플 사이의 순서</strong>는 의미가 없다.</li>
            <li><strong>속성 사이의 순서</strong>도 의미가 없다.</li>
            <li>모든 속성 값은 더 이상 쪼갤 수 없는 <strong>원자값(Atomic Value)</strong>이어야 한다.</li>
          </ul>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "속성의 수 = <strong>차수(Degree)</strong>, 튜플의 수 = <strong>카디널리티(Cardinality)</strong>."
            둘을 서로 바꿔 낸 보기가 자주 등장하므로 예시 릴레이션을 주고 숫자를 계산하는 연습을 해 두자.
          </div>
        </section>

        {/* ================= 4. 키와 무결성 ================= */}
        <section id="keys">
          <h2>4. 키(Key)와 무결성</h2>
          <p class="sub">튜플을 유일하게 식별하는 장치가 키, 데이터가 항상 올바른 상태를 유지하도록 강제하는 규칙이 무결성이다.</p>

          <h3>4-1. 키의 종류 5가지 (실기 단골)</h3>
          <table>
            <tr><th>키</th><th>정의</th><th>유일성</th><th>최소성</th></tr>
            <tr><td><strong>슈퍼키 (Super Key)</strong></td><td>튜플을 유일하게 식별할 수 있는 속성(들)의 집합. 불필요한 속성이 섞여 있어도 된다</td><td>○</td><td>×</td></tr>
            <tr><td><strong>후보키 (Candidate Key)</strong></td><td>튜플을 유일하게 식별하면서 <strong>꼭 필요한 속성만으로</strong> 구성된 키. 기본키가 될 자격이 있는 키들</td><td>○</td><td>○</td></tr>
            <tr><td><strong>기본키 (Primary Key)</strong></td><td>후보키 중에서 대표로 <strong>선정된</strong> 키. NULL 값과 중복 값을 가질 수 없다</td><td>○</td><td>○</td></tr>
            <tr><td><strong>대체키 (Alternate Key)</strong></td><td>후보키 중 기본키로 선정되고 <strong>남은</strong> 키 (보조키)</td><td>○</td><td>○</td></tr>
            <tr><td><strong>외래키 (Foreign Key)</strong></td><td><strong>다른 릴레이션의 기본키를 참조</strong>하는 속성. 릴레이션 간 관계를 표현한다</td><td>—</td><td>—</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <strong>유일성만 만족 → 슈퍼키</strong>, <strong>유일성 + 최소성 → 후보키</strong>.
            예: 학생(학번, 주민번호, 이름)에서 (학번, 이름)은 슈퍼키이지만 이름이 없어도 식별되므로 후보키는 아니다.
            후보키는 학번, 주민번호 두 개이고, 학번을 기본키로 뽑으면 주민번호는 대체키가 된다.
          </div>

          <h3>4-2. 무결성(Integrity) 제약 조건</h3>
          <table>
            <tr><th>종류</th><th>내용</th></tr>
            <tr><td><strong>개체 무결성</strong></td><td>기본키를 구성하는 속성은 <strong>NULL 값이나 중복 값을 가질 수 없다</strong></td></tr>
            <tr><td><strong>참조 무결성</strong></td><td>외래키 값은 <strong>참조하는 릴레이션의 기본키 값이거나 NULL</strong>이어야 한다 (존재하지 않는 값 참조 불가)</td></tr>
            <tr><td><strong>도메인 무결성</strong></td><td>속성 값은 그 속성에 <strong>정의된 도메인(타입·범위)에 속한 값</strong>이어야 한다</td></tr>
            <tr><td><strong>사용자 정의 무결성</strong></td><td>업무 규칙에 따라 사용자가 직접 정의한 제약 (예: 급여는 0 이상)</td></tr>
            <tr><td><strong>키 무결성</strong></td><td>하나의 릴레이션에는 최소 한 개 이상의 키가 존재해야 한다</td></tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "기본키는 NULL 불가" → <strong>개체</strong> 무결성, "외래키는 참조 대상의 기본키 값 또는 NULL" → <strong>참조</strong> 무결성.
            설명을 주고 무결성 이름을 쓰게 하는 문제가 반복 출제된다. NULL 이야기가 <strong>기본키</strong>면 개체, <strong>외래키</strong>면 참조!
          </div>
        </section>

        {/* ================= 5. 정규화 ================= */}
        <section id="normalization">
          <h2>5. 정규화(Normalization)</h2>
          <p class="sub">중복 때문에 생기는 이상(Anomaly)을 없애기 위해, 함수적 종속을 기준으로 릴레이션을 단계적으로 분해하는 과정.</p>

          <h3>5-1. 이상(Anomaly) 3가지</h3>
          <table>
            <tr><th>이상</th><th>내용</th></tr>
            <tr><td><strong>삽입 이상</strong></td><td>원하지 않는 불필요한 데이터까지 함께 넣어야만 삽입이 가능한 현상 (예: 수강 과목이 없으면 학생 등록 불가)</td></tr>
            <tr><td><strong>삭제 이상</strong></td><td>튜플 하나를 지우면 <strong>유지해야 할 다른 정보까지 함께 사라지는</strong> 현상 (연쇄 삭제)</td></tr>
            <tr><td><strong>갱신 이상</strong></td><td>중복 저장된 값 중 일부만 수정되어 <strong>데이터가 서로 불일치</strong>하게 되는 현상</td></tr>
          </table>

          <h3>5-2. 함수적 종속(Functional Dependency)</h3>
          <p>속성 X의 값이 정해지면 속성 Y의 값이 유일하게 정해질 때 "Y는 X에 함수적으로 종속된다"라 하고
          <strong>X → Y</strong>로 쓴다. X를 <strong>결정자</strong>, Y를 <strong>종속자</strong>라 한다.</p>
          <table>
            <tr><th>종류</th><th>의미</th><th>예 (기본키: 학번+과목코드)</th></tr>
            <tr><td><strong>완전 함수 종속</strong></td><td>기본키 <strong>전체</strong>에 종속 (일부만으로는 결정 불가)</td><td>(학번, 과목코드) → 성적</td></tr>
            <tr><td><strong>부분 함수 종속</strong></td><td>복합 기본키의 <strong>일부</strong>에만 종속</td><td>학번 → 학생이름</td></tr>
            <tr><td><strong>이행 함수 종속</strong></td><td>X → Y이고 Y → Z일 때 <strong>X → Z</strong>가 성립</td><td>학번 → 학과, 학과 → 학과전화번호</td></tr>
          </table>

          <h3>5-3. 정규형 단계 (도부이결다조)</h3>
          <table>
            <tr><th>정규형</th><th>조건 (직전 단계에서 제거하는 것)</th><th>암기</th></tr>
            <tr><td><strong>1NF (제1정규형)</strong></td><td>모든 속성이 <strong>원자값(도메인이 원자값)</strong>만 갖는다 — 반복 그룹 제거</td><td><strong>도</strong>메인이 원자값</td></tr>
            <tr><td><strong>2NF (제2정규형)</strong></td><td><strong>부분 함수 종속 제거</strong> (모든 속성이 기본키에 완전 함수 종속)</td><td><strong>부</strong>분 함수 종속 제거</td></tr>
            <tr><td><strong>3NF (제3정규형)</strong></td><td><strong>이행 함수 종속 제거</strong></td><td><strong>이</strong>행 함수 종속 제거</td></tr>
            <tr><td><strong>BCNF</strong></td><td>모든 <strong>결정자가 후보키</strong>가 되도록, 후보키가 아닌 결정자의 함수 종속 제거</td><td><strong>결</strong>정자이면서 후보키가 아닌 것 제거</td></tr>
            <tr><td><strong>4NF (제4정규형)</strong></td><td><strong>다치 종속(Multi-valued Dependency)</strong> 제거</td><td><strong>다</strong>치 종속 제거</td></tr>
            <tr><td><strong>5NF (제5정규형)</strong></td><td>후보키를 통하지 않는 <strong>조인 종속(Join Dependency)</strong> 제거</td><td><strong>조</strong>인 종속 제거</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            정규형 순서는 "<strong>도·부·이·결·다·조</strong>" — 원자값(1NF) → 부분(2NF) → 이행(3NF) → 결정자(BCNF) → 다치(4NF) → 조인(5NF).
            시험은 주로 1NF~BCNF 구간에서 "이 상황은 몇 정규형 위반/몇 정규형으로 만드는 작업인가"를 묻는다.
          </div>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 260" role="img" aria-label="정규화 단계 진행 도면">
              <rect class="boxsoft" x="15" y="100" width="130" height="60" />
              <text x="80" y="126" text-anchor="middle" class="small strong">비정규</text>
              <text x="80" y="147" text-anchor="middle" class="small">릴레이션</text>

              <rect class="box" x="200" y="100" width="130" height="60" />
              <text x="265" y="126" text-anchor="middle" class="small strong">1NF</text>
              <text x="265" y="147" text-anchor="middle" class="small">원자값</text>

              <rect class="box" x="385" y="100" width="130" height="60" />
              <text x="450" y="126" text-anchor="middle" class="small strong">2NF</text>
              <text x="450" y="147" text-anchor="middle" class="small">완전 함수 종속</text>

              <rect class="box" x="570" y="100" width="130" height="60" />
              <text x="635" y="126" text-anchor="middle" class="small strong">3NF</text>
              <text x="635" y="147" text-anchor="middle" class="small">이행 종속 없음</text>

              <rect class="boxdark" x="755" y="100" width="130" height="60" />
              <text x="820" y="126" text-anchor="middle" class="small strong">BCNF</text>
              <text x="820" y="147" text-anchor="middle" class="small">결정자 = 후보키</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="145" y1="130" x2="194" y2="130" />
                <text x="170" y="60" text-anchor="middle" class="small">① 원자값화</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="330" y1="130" x2="379" y2="130" />
                <text x="355" y="215" text-anchor="middle" class="small">② 부분 함수 종속 제거</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="515" y1="130" x2="564" y2="130" />
                <text x="540" y="60" text-anchor="middle" class="small">③ 이행 함수 종속 제거</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="700" y1="130" x2="749" y2="130" />
                <text x="725" y="215" text-anchor="middle" class="small">④ 후보키 아닌 결정자 제거</text>
              </g>
            </svg>
            <figcaption>도면 4. 정규화 진행 — 각 단계에서 제거하는 종속의 종류가 곧 시험 포인트다.</figcaption>
          </figure>
        </section>

        {/* ================= 6. 반정규화 ================= */}
        <section id="denormal">
          <h2>6. 반정규화(De-normalization)</h2>
          <p class="sub">정규화가 무결성을 위한 분해라면, 반정규화는 성능·개발 편의를 위한 의도적인 중복이다.</p>

          <h3>6-1. 개념</h3>
          <p><strong>반정규화(역정규화)</strong>는 시스템의 <strong>성능 향상, 개발·운영의 단순화</strong>를 위해
          정규화된 데이터 모델을 <strong>의도적으로 통합·중복·분리</strong>하는 과정이다.
          조회(JOIN)가 지나치게 많아 응답이 느릴 때, 대량 범위 처리가 빈번할 때 검토한다.</p>

          <h3>6-2. 반정규화 기법</h3>
          <table>
            <tr><th>대상</th><th>기법</th><th>설명</th></tr>
            <tr><td rowspan="3"><strong>테이블</strong></td><td>테이블 통합</td><td>항상 함께 조회되는 1:1, 1:N 테이블을 하나로 합침</td></tr>
            <tr><td>테이블 분할</td><td><strong>수평 분할</strong>(행 기준, 예: 연도별) / <strong>수직 분할</strong>(컬럼 기준, 자주 쓰는 컬럼과 아닌 컬럼 분리)</td></tr>
            <tr><td>중복 테이블 추가</td><td>집계 테이블, 진행 테이블, 특정 부분만 포함하는 테이블을 별도로 추가</td></tr>
            <tr><td rowspan="2"><strong>컬럼</strong></td><td>중복 컬럼 추가</td><td>조인을 줄이기 위해 다른 테이블의 컬럼을 복사해 둠</td></tr>
            <tr><td>파생 컬럼 추가</td><td>계산 결과(합계·건수 등)를 미리 저장 (예: 주문 테이블의 총액 컬럼)</td></tr>
          </table>

          <h3>6-3. 장단점</h3>
          <table>
            <tr><th>장점</th><th>단점</th></tr>
            <tr>
              <td>조회 성능 향상 (JOIN 감소), 쿼리 단순화, 개발 생산성 향상</td>
              <td>데이터 <strong>중복으로 무결성(일관성) 훼손 위험</strong>, 저장 공간 증가, 갱신 비용 증가</td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            반정규화는 "정규화를 안 하는 것"이 아니라 <strong>정규화를 마친 모델에 대해 성능을 이유로 되돌리는 의사결정</strong>이다.
            중복이 생기는 만큼 갱신 시 동기화 방안(트리거·배치 등)을 함께 설계해야 한다.
          </div>
        </section>

        {/* ================= 7. 물리 데이터 모델 ================= */}
        <section id="physical">
          <h2>7. 물리 데이터 모델</h2>
          <p class="sub">논리 모델을 실제 DBMS 위에 구현하기 위한 설계 — 테이블·인덱스·뷰·클러스터·파티션·디스크가 여기서 결정된다.</p>

          <h3>7-1. 논리 → 물리 변환 순서</h3>
          <table>
            <tr><th>순서</th><th>논리 모델</th><th></th><th>물리 모델</th></tr>
            <tr><td>①</td><td>개체 (Entity)</td><td>→</td><td>테이블 (Table)</td></tr>
            <tr><td>②</td><td>속성 (Attribute)</td><td>→</td><td>컬럼 (Column)</td></tr>
            <tr><td>③</td><td>UID (고유 식별자)</td><td>→</td><td>기본키 (Primary Key)</td></tr>
            <tr><td>④</td><td>관계 (Relationship)</td><td>→</td><td>외래키 (Foreign Key)</td></tr>
            <tr><td>⑤</td><td>—</td><td>→</td><td>컬럼 데이터 타입·제약조건 정의, 성능 반영(인덱스·반정규화)</td></tr>
          </table>

          <h3>7-2. 물리 설계 고려사항</h3>
          <ul>
            <li><strong>응답 시간(Response Time):</strong> 트랜잭션 요청부터 응답까지의 시간 최소화</li>
            <li><strong>저장 공간 효율화:</strong> 저장 데이터의 양과 공간 활용 최적화</li>
            <li><strong>트랜잭션 처리량(Throughput):</strong> 단위 시간당 처리 가능한 트랜잭션 수 최대화</li>
          </ul>

          <h3>7-3. 인덱스 설계 — 대상 컬럼 선정 기준</h3>
          <ul>
            <li>WHERE 절·JOIN 조건에 <strong>자주 사용되는</strong> 컬럼</li>
            <li><strong>분포도(선택도)가 좋은</strong>(중복이 적은) 컬럼 — 분포도 10~15% 이내가 유리</li>
            <li>ORDER BY·GROUP BY에 자주 쓰이는 컬럼</li>
            <li>반대로 <strong>갱신이 매우 잦은 컬럼</strong>, 데이터가 적은 테이블은 인덱스 효과가 작거나 역효과</li>
          </ul>

          <h3>7-4. 뷰(View) · 클러스터(Cluster)</h3>
          <table>
            <tr><th>객체</th><th>특징</th></tr>
            <tr><td><strong>뷰 (View)</strong></td><td>하나 이상의 테이블에서 유도된 <strong>가상 테이블</strong>. 물리적으로 저장되지 않고, <strong>논리적 독립성</strong>과 <strong>보안(필요한 데이터만 노출)</strong>을 제공.
            인덱스를 가질 수 없고, 정의 변경이 불가하여 삭제(DROP) 후 재생성해야 한다</td></tr>
            <tr><td><strong>클러스터 (Cluster)</strong></td><td>자주 함께 조회되는 데이터를 <strong>디스크의 같은 블록에 물리적으로 모아 저장</strong>하는 기법.
            범위 조회 성능은 좋아지지만 <strong>삽입·수정 성능은 저하</strong>된다. 분포도가 넓은(중복 많은) 컬럼에 유리</td></tr>
          </table>

          <h3>7-5. 파티셔닝(Partitioning) 4종류</h3>
          <table>
            <tr><th>종류</th><th>분할 기준</th><th>예시</th></tr>
            <tr><td><strong>범위 분할 (Range)</strong></td><td>지정한 <strong>값의 범위</strong></td><td>주문일자 2025년 / 2026년으로 분할</td></tr>
            <tr><td><strong>해시 분할 (Hash)</strong></td><td><strong>해시 함수</strong> 결과값 — 데이터를 <strong>고르게 분산</strong></td><td>회원ID 해시값으로 4개 파티션에 분산</td></tr>
            <tr><td><strong>리스트 분할 (List)</strong></td><td>미리 정한 <strong>값의 목록</strong></td><td>지역 컬럼이 서울/부산/대구인 행끼리 분할</td></tr>
            <tr><td><strong>조합 분할 (Composite)</strong></td><td>범위·리스트 분할 후 <strong>내부를 다시 해시 등으로 분할</strong></td><td>연도별 범위 분할 + 내부 해시 분할</td></tr>
          </table>

          <h3>7-6. 디스크 구성 설계</h3>
          <p>테이블 용량(초기 데이터 + 증가량)을 산정해 테이블스페이스와 파일 배치를 설계하고,
          입출력이 몰리는 오브젝트(로그, 인덱스, 대용량 테이블)는 <strong>디스크를 분리</strong>해 경합을 줄인다.
          가용성·성능이 중요하면 RAID 구성을 함께 고려한다.</p>
        </section>

        {/* ================= 8. 품질 검증 ================= */}
        <section id="quality">
          <h2>8. 데이터 모델 품질 검증</h2>
          <p class="sub">완성된 모델이 표준을 따르고 업무를 빠짐없이 담았는지 — 표준화 사전과 품질 기준, CRUD 매트릭스로 검증한다.</p>

          <h3>8-1. 데이터 표준화 — 3가지 표준 사전</h3>
          <table>
            <tr><th>사전</th><th>내용</th></tr>
            <tr><td><strong>표준 단어 사전</strong></td><td>업무에서 쓰는 단어의 표준 표기·영문 약어 정의 (예: 고객 = CUST)</td></tr>
            <tr><td><strong>표준 도메인 사전</strong></td><td>컬럼이 가질 수 있는 데이터 타입·길이·형식의 표준 (예: 날짜 = CHAR(8), YYYYMMDD)</td></tr>
            <tr><td><strong>표준 용어 사전</strong></td><td>표준 단어를 조합해 만든 업무 용어(컬럼·테이블명)의 표준 (예: 고객전화번호)</td></tr>
          </table>

          <h3>8-2. 데이터 모델 품질 기준</h3>
          <table>
            <tr><th>기준</th><th>의미</th></tr>
            <tr><td><strong>정확성</strong></td><td>표기법에 맞게 정확히 표현되고 업무 규칙과 일치</td></tr>
            <tr><td><strong>완전성</strong></td><td>업무에 필요한 모든 데이터가 누락 없이 정의됨</td></tr>
            <tr><td><strong>준거성</strong></td><td>데이터 표준·표준화 규칙, 법적 요건을 준수</td></tr>
            <tr><td><strong>최신성</strong></td><td>현행 시스템·최근 업무 변화를 반영</td></tr>
            <tr><td><strong>일관성</strong></td><td>같은 데이터는 모델 전체에서 동일한 이름·정의로 사용</td></tr>
            <tr><td><strong>활용성</strong></td><td>업무 변화에 유연하게 대응할 수 있고 실제 사용에 적합</td></tr>
          </table>

          <h3>8-3. CRUD 매트릭스</h3>
          <p>프로세스(행)와 개체/테이블(열)의 교차 칸에 <strong>C(생성)·R(조회)·U(수정)·D(삭제)</strong>를 표시해,
          모든 개체가 실제 업무 프로세스에서 빠짐없이 사용되는지 검증하는 표다.
          어떤 열에도 C가 없으면 "생성되지 않는 데이터", 어떤 행이 비어 있으면 "데이터 없이 도는 프로세스"로 모델 누락을 의심한다.</p>
          <table>
            <tr><th>프로세스 \ 개체</th><th>회원</th><th>주문</th><th>상품</th></tr>
            <tr><td>회원 가입</td><td>C</td><td></td><td></td></tr>
            <tr><td>주문 등록</td><td>R</td><td>C</td><td>R, U(재고)</td></tr>
            <tr><td>주문 취소</td><td>R</td><td>U, D</td><td>U(재고)</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            CRUD 매트릭스는 <strong>모델 검증</strong>뿐 아니라 인터페이스 설계·테스트 범위 산정에도 쓰인다.
            "프로세스와 데이터의 상관 분석표"라는 표현이 나오면 CRUD 매트릭스를 떠올리자.
          </div>
        </section>

        {/* ================= 9. 실전 문제 ================= */}
        <section id="quiz">
          <h2>9. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">설명을 읽고 용어를 쓰거나, 주어진 상황을 판단하는 실기 스타일 10문항. 먼저 풀고 정답을 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">데이터 모델의 구성 요소 3가지 중, 데이터의 정적 성질로서 개체와 개체 간의 관계를 표현하는 요소와
            데이터의 동적 성질로서 데이터를 처리하는 작업을 표현하는 요소를 순서대로 쓰시오. (영문 용어도 함께 쓰시오)</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>구조(Structure), 연산(Operation)<br/>
                <span class="label">해설: </span>데이터 모델 구성 요소는 구조(정적)·연산(동적)·제약 조건(Constraint) 3가지다. 나머지 하나인 제약 조건은 데이터가 지켜야 할 논리적 제약을 뜻한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 키(Key)의 명칭을 각각 쓰시오.</p>
            <pre>{`㉠ 튜플을 유일하게 식별할 수 있으나 최소성은 만족하지 못하는 속성들의 집합
㉡ 유일성과 최소성을 모두 만족하여 기본키가 될 자격이 있는 키
㉢ 후보키 중 기본키로 선정되지 못하고 남은 키`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ 슈퍼키(Super Key) ㉡ 후보키(Candidate Key) ㉢ 대체키(Alternate Key)<br/>
                <span class="label">해설: </span>슈퍼키는 유일성만, 후보키는 유일성+최소성을 만족한다. 후보키 중 대표로 뽑힌 것이 기본키, 남은 것이 대체키다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">"외래키의 값은 참조하는 릴레이션의 기본키 값이거나 NULL이어야 한다"는 제약 조건이 의미하는
            무결성의 종류를 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>참조 무결성(Referential Integrity)<br/>
                <span class="label">해설: </span>외래키에 관한 제약은 참조 무결성이다. 기본키가 NULL·중복을 가질 수 없다는 제약은 개체 무결성이므로 혼동하지 않도록 주의한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">복합 기본키 (학번, 과목코드)를 갖는 수강 릴레이션에서 속성 "학생이름"이 학번만으로 결정되는
            부분 함수 종속이 존재한다. 이 부분 함수 종속을 제거하여 만들어지는 정규형은 무엇인지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>제2정규형(2NF)<br/>
                <span class="label">해설: </span>2NF는 부분 함수 종속을 제거하여 모든 속성이 기본키에 완전 함수 종속되도록 만든 정규형이다. (1NF: 원자값, 3NF: 이행 종속 제거)
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">정규화가 되지 않은 릴레이션에서 어떤 학생의 수강 튜플을 삭제했더니 그 학생이 소속된 동아리 정보까지
            함께 사라졌다. 이처럼 튜플 삭제 시 유지해야 할 정보까지 연쇄적으로 손실되는 현상을 무엇이라 하는지 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>삭제 이상(Deletion Anomaly)<br/>
                <span class="label">해설: </span>이상(Anomaly)에는 삽입·삭제·갱신 이상 3가지가 있으며, 삭제 시 의도하지 않은 정보 손실이 발생하는 것이 삭제 이상이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 릴레이션의 차수(Degree)와 카디널리티(Cardinality)를 각각 구하시오.</p>
            <pre>{`사원 릴레이션
+--------+--------+--------+------+----------+
| 사원번호 | 이름   | 부서   | 직급  | 입사년도  |
+--------+--------+--------+------+----------+
| E01    | 김하나  | 개발   | 대리  | 2021     |
| E02    | 이두리  | 기획   | 과장  | 2018     |
| E03    | 박세리  | 개발   | 사원  | 2024     |
| E04    | 최네오  | 영업   | 대리  | 2020     |
+--------+--------+--------+------+----------+`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>차수 = 5, 카디널리티 = 4<br/>
                <span class="label">해설: </span>차수는 속성(열)의 수로 사원번호·이름·부서·직급·입사년도 5개, 카디널리티는 튜플(행)의 수로 4건이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">어떤 릴레이션이 제3정규형(3NF)을 만족하지만, 후보키가 아닌 속성이 결정자가 되는 함수 종속이
            남아 있다. 이 종속을 제거하여 모든 결정자가 후보키가 되도록 만든 정규형의 명칭을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>BCNF(보이스-코드 정규형, Boyce-Codd Normal Form)<br/>
                <span class="label">해설: </span>BCNF는 "모든 결정자가 후보키"인 정규형으로, 3NF보다 강화된 조건이다. 도부이결다조에서 "결"에 해당한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">반정규화 기법 중, 주문 상세 금액을 매번 합산하지 않도록 주문 테이블에
            "총주문금액"처럼 계산 결과를 미리 저장해 두는 컬럼을 추가하는 기법의 명칭을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>파생 컬럼 추가<br/>
                <span class="label">해설: </span>다른 속성 값으로부터 계산되어 나오는 컬럼을 미리 저장하는 반정규화 기법이다. 다른 테이블의 컬럼을 그대로 복사해 두는 것은 중복 컬럼 추가로 구분한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 파티셔닝(Partitioning) 기법을 각각 쓰시오.</p>
            <pre>{`㉠ 주문일자를 기준으로 2025년 데이터와 2026년 데이터를 서로 다른 파티션에 저장
㉡ 파티션 키에 해시 함수를 적용하여 데이터를 여러 파티션에 고르게 분산 저장
㉢ 지역 컬럼 값이 '서울', '부산', '대구'인 행을 각각 지정된 파티션에 저장`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ 범위 분할(Range Partitioning) ㉡ 해시 분할(Hash Partitioning) ㉢ 리스트 분할(List Partitioning)<br/>
                <span class="label">해설: </span>값의 범위면 Range, 해시 함수로 균등 분산이면 Hash, 미리 정한 값 목록이면 List다. 이들을 조합하면 조합 분할(Composite)이 된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">데이터 모델링 절차 3단계 중, ERD를 산출물로 하며 특정 DBMS에 독립적으로
            개체·속성·관계를 추상화하는 단계와, 정규화를 수행하며 릴레이션 스키마를 산출하는 단계를 순서대로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>개념적 설계(개념적 데이터 모델링), 논리적 설계(논리적 데이터 모델링)<br/>
                <span class="label">해설: </span>개념적 설계(ERD, DBMS 독립) → 논리적 설계(릴레이션 스키마, 정규화) → 물리적 설계(테이블·인덱스, DBMS 종속) 순서다.
              </div>
            </details>
          </div>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">E-R 모델</span>
            <span class="kw">까마귀발 표기법</span>
            <span class="kw">식별/비식별 관계</span>
            <span class="kw">함수적 종속 다이어그램</span>
            <span class="kw">다치 종속(MVD)</span>
            <span class="kw">조인 종속</span>
            <span class="kw">이상(Anomaly)</span>
            <span class="kw">인덱스 튜닝</span>
            <span class="kw">클러스터링 팩터</span>
            <span class="kw">테이블스페이스</span>
            <span class="kw">데이터 사전(표준 단어·도메인·용어)</span>
            <span class="kw">CRUD 매트릭스</span>
          </p>
        </section>

        <footer>데이터 저장소와 데이터 모델 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
