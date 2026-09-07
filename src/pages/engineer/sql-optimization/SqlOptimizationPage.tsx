import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './sql-optimization.css'

export default defineComponent({
  name: 'SqlOptimizationPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>SQL 활용 및 최적화 — 절차형 SQL · SQL 최적화</h1>
          <p>정보처리기사 실기 대비 학습 문서. SQL에 절차적 기능을 더한 절차형 SQL(프로시저·사용자 정의 함수·트리거)과
          커서, 그리고 옵티마이저·실행 계획·SQL 튜닝까지 실기 단골 개념을 구문·예제 코드·표·실전 문제로 정리한다.<br/>
          <span>도면의 파란 점은 처리 흐름의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>절차형 SQL 개요 — 종류 3가지와 블록 구조</a></li>
            <li><a href="#procedure" onClick={(e) => scrollToId(e, 'procedure')}>프로시저(Procedure)</a></li>
            <li><a href="#function" onClick={(e) => scrollToId(e, 'function')}>사용자 정의 함수(User-Defined Function)</a></li>
            <li><a href="#trigger" onClick={(e) => scrollToId(e, 'trigger')}>트리거(Trigger)</a></li>
            <li><a href="#cursor" onClick={(e) => scrollToId(e, 'cursor')}>커서(Cursor)</a></li>
            <li><a href="#optimizer" onClick={(e) => scrollToId(e, 'optimizer')}>옵티마이저와 실행 계획</a></li>
            <li><a href="#tuning" onClick={(e) => scrollToId(e, 'tuning')}>SQL 튜닝</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 절차형 SQL 개요 ===================== */}
        <section id="overview">
          <h2>1. 절차형 SQL 개요 — 종류 3가지와 블록 구조</h2>
          <p class="sub">SQL은 원래 비절차적 언어지만, 절차형 SQL은 여기에 변수·조건문·반복문 같은 절차적 기능을 추가한 것이다. 종류 3가지의 구분과 PL/SQL 블록 구조는 괄호 채우기 최단골.</p>

          <h3>1-1. 절차형 SQL이란</h3>
          <p><strong>절차형 SQL</strong>은 일반적인 개발 언어처럼 SQL에도 <strong>절차 지향적인 기능(변수 선언, IF 분기, LOOP 반복)</strong>을
          추가한 것이다. 단일 SQL 문으로 처리하기 어려운 연속적인 작업을 하나의 단위로 묶어 DBMS 내부에 저장해 두고 실행한다.
          Oracle의 <strong>PL/SQL</strong>, SQL Server의 <strong>T-SQL</strong>이 대표적이다.</p>

          <h3>1-2. 절차형 SQL의 종류 3가지 (최단골 — 구분 표)</h3>
          <table>
            <tr><th>구분</th><th>프로시저 (Procedure)</th><th>사용자 정의 함수 (Function)</th><th>트리거 (Trigger)</th></tr>
            <tr>
              <td><strong>반환값</strong></td>
              <td>없어도 됨 (OUT 파라미터로 여러 값 전달 가능)</td>
              <td><strong>RETURN으로 단일 값 반드시 반환</strong></td>
              <td>없음</td>
            </tr>
            <tr>
              <td><strong>호출 방식</strong></td>
              <td><code>EXECUTE</code> / <code>CALL</code> 로 명시적 호출</td>
              <td><code>SELECT</code> 등 SQL 문 안에서 호출</td>
              <td>호출 불가 — <strong>이벤트(INSERT/UPDATE/DELETE) 발생 시 자동 실행</strong></td>
            </tr>
            <tr>
              <td><strong>용도</strong></td>
              <td>일련의 작업(업무 로직)을 묶어 처리</td>
              <td>계산 결과를 값으로 돌려받아 활용</td>
              <td>데이터 변경에 대한 자동 후속 처리(로그, 무결성 유지)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            세 가지를 가르는 기준은 <strong>반환값 유무(RETURN)</strong>와 <strong>호출 방식(명시적 호출 vs 자동 실행)</strong>이다.
            "RETURN으로 값을 반환한다" → 함수, "이벤트 발생 시 자동 실행된다" → 트리거.
          </div>

          <h3>1-3. PL/SQL 블록 구조 (괄호 채우기 단골)</h3>
          <p>PL/SQL 프로그램의 기본 단위는 블록(Block)이며, 네 부분으로 구성된다.</p>
          <table>
            <tr><th>구성부</th><th>필수 여부</th><th>내용</th></tr>
            <tr><td><strong>DECLARE</strong> (선언부)</td><td>선택</td><td>변수·상수·커서 등을 선언</td></tr>
            <tr><td><strong>BEGIN</strong> (실행부 시작)</td><td>필수</td><td>실제 처리할 SQL 문과 제어문 작성</td></tr>
            <tr><td><strong>EXCEPTION</strong> (예외 처리부)</td><td>선택</td><td>실행 중 발생한 예외(오류)에 대한 처리</td></tr>
            <tr><td><strong>END</strong> (종료)</td><td>필수</td><td>블록의 끝</td></tr>
          </table>
          <pre><code>{`DECLARE
    -- 선언부: 변수, 상수, 커서 선언 (선택)
BEGIN
    -- 실행부: SQL 문 + 제어문 (필수)
EXCEPTION
    -- 예외 처리부: 오류 발생 시 처리 (선택)
END;`}</code></pre>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            순서는 <strong>DECLARE → BEGIN → EXCEPTION → END</strong>. 괄호 채우기로 EXCEPTION 자리를 비워 두는 문제가 자주 나온다.
            BEGIN과 END는 필수, DECLARE와 EXCEPTION은 선택이라는 점도 함께 기억하자.
          </div>
        </section>

        {/* ===================== 2. 프로시저 ===================== */}
        <section id="procedure">
          <h2>2. 프로시저(Procedure)</h2>
          <p class="sub">일련의 쿼리를 하나의 함수처럼 묶어 DBMS에 저장해 두고, 호출할 때마다 실행하는 절차형 SQL. 파라미터 모드(IN/OUT/INOUT)가 실기 단골이다.</p>

          <h3>2-1. 생성 구문과 파라미터 모드 (단골)</h3>
          <pre><code>{`CREATE OR REPLACE PROCEDURE 프로시저명(
    파라미터명 [IN | OUT | INOUT] 데이터타입
)
IS (또는 AS)
    -- 변수 선언
BEGIN
    -- 처리할 SQL 문
EXCEPTION
    -- 예외 처리 (선택)
END;`}</code></pre>
          <table>
            <tr><th>모드</th><th>방향</th><th>의미</th></tr>
            <tr><td><strong>IN</strong></td><td>호출자 → 프로시저</td><td>값을 전달받는 입력 파라미터 (기본값)</td></tr>
            <tr><td><strong>OUT</strong></td><td>프로시저 → 호출자</td><td>처리 결과를 돌려주는 출력 파라미터</td></tr>
            <tr><td><strong>INOUT</strong></td><td>양방향</td><td>값을 받아서 처리한 뒤 다시 돌려주는 파라미터</td></tr>
          </table>

          <h3>2-2. 제어문 — IF와 LOOP</h3>
          <pre><code>{`-- 조건문
IF 조건 THEN 처리;
ELSIF 조건 THEN 처리;
ELSE 처리;
END IF;

-- 반복문
LOOP
    처리;
    EXIT WHEN 종료조건;
END LOOP;`}</code></pre>

          <h3>2-3. 예제 — 급여 인상 프로시저와 호출</h3>
          <pre><code>{`CREATE OR REPLACE PROCEDURE raise_salary(
    p_empno IN NUMBER,      -- 사원 번호 (입력)
    p_rate  IN NUMBER       -- 인상률 % (입력)
)
IS
BEGIN
    UPDATE emp
       SET sal = sal * (1 + p_rate / 100)
     WHERE empno = p_empno;
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
END;

-- 호출: 사원 100번의 급여를 10% 인상
EXECUTE raise_salary(100, 10);
-- 표준 SQL 방식 호출
CALL raise_salary(100, 10);`}</code></pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            프로시저 호출 키워드는 <strong>EXECUTE(EXEC)</strong> 또는 <strong>CALL</strong>.
            선언부 앞의 <strong>IS(AS)</strong> 키워드, 파라미터 모드 <strong>IN/OUT/INOUT</strong>을 빈칸으로 묻는다.
          </div>
        </section>

        {/* ===================== 3. 사용자 정의 함수 ===================== */}
        <section id="function">
          <h2>3. 사용자 정의 함수(User-Defined Function)</h2>
          <p class="sub">프로시저와 비슷하게 SQL을 묶어 두지만, 실행 결과를 RETURN으로 단일 값 반환하는 것이 결정적 차이 — 프로시저와의 구분이 최단골이다.</p>

          <h3>3-1. 프로시저와의 차이 (최단골)</h3>
          <ul>
            <li>종료 시 <strong>RETURN을 통해 단일 값을 반드시 반환</strong>한다 (프로시저는 반환값이 없어도 됨).</li>
            <li><strong>SELECT, WHERE 등 SQL 문 내부에서 호출</strong>해 값처럼 사용한다 (프로시저는 EXECUTE/CALL로 단독 호출).</li>
            <li>주로 <strong>계산·변환 결과를 돌려받는 용도</strong>로 쓰며, 원칙적으로 내부에서 데이터 변경(DML)을 수행하지 않는다.</li>
          </ul>

          <h3>3-2. 생성 구문</h3>
          <pre><code>{`CREATE OR REPLACE FUNCTION 함수명(
    파라미터명 IN 데이터타입
)
RETURN 반환타입       -- 함수만의 필수 요소!
IS
    -- 변수 선언
BEGIN
    -- 처리
    RETURN 반환값;    -- 반드시 값을 반환
END;`}</code></pre>

          <h3>3-3. 예제 — 점수를 등급으로 변환하는 함수</h3>
          <pre><code>{`CREATE OR REPLACE FUNCTION get_grade(p_score IN NUMBER)
RETURN VARCHAR2
IS
    v_grade VARCHAR2(2);
BEGIN
    IF p_score >= 90 THEN
        v_grade := 'A';
    ELSIF p_score >= 80 THEN
        v_grade := 'B';
    ELSE
        v_grade := 'C';
    END IF;
    RETURN v_grade;
END;

-- SELECT 문 안에서 값처럼 호출
SELECT name, get_grade(score) AS grade
  FROM student;`}</code></pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "프로시저와 달리 ( )을 통해 값을 반환하며 SQL 문 내에서 호출한다" — 정답은 <strong>RETURN</strong>.
            함수 머리부의 <strong>RETURN 반환타입</strong> 선언과 본문의 <strong>RETURN 값</strong> 문장 둘 다 필수다.
          </div>
        </section>

        {/* ===================== 4. 트리거 ===================== */}
        <section id="trigger">
          <h2>4. 트리거(Trigger)</h2>
          <p class="sub">테이블에 INSERT/UPDATE/DELETE 이벤트가 발생하면 DBMS가 자동으로 실행하는 절차형 SQL. :NEW와 :OLD의 의미 구분이 단골이다.</p>

          <h3>4-1. 개념과 구문 요소</h3>
          <p>트리거는 사용자가 직접 호출할 수 없고, 지정한 테이블에 <strong>이벤트(INSERT · UPDATE · DELETE)</strong>가 발생할 때
          <strong>자동으로 실행</strong>된다. 데이터 무결성 유지, 변경 이력(로그) 자동 기록 등에 사용한다.</p>
          <table>
            <tr><th>구문 요소</th><th>의미</th></tr>
            <tr><td><strong>BEFORE / AFTER</strong></td><td>이벤트 실행 <strong>전</strong>에 동작할지 / <strong>후</strong>에 동작할지 지정</td></tr>
            <tr><td><strong>FOR EACH ROW</strong></td><td>영향받는 <strong>행(Row)마다</strong> 트리거 실행 (없으면 문장당 1회 실행)</td></tr>
            <tr><td><strong>:NEW</strong></td><td>변경 <strong>후</strong>의 새 값 (INSERT·UPDATE 시 사용)</td></tr>
            <tr><td><strong>:OLD</strong></td><td>변경 <strong>전</strong>의 기존 값 (UPDATE·DELETE 시 사용)</td></tr>
          </table>

          <h3>4-2. 예제 — 급여 변경 로그 자동 기록 트리거</h3>
          <pre><code>{`CREATE OR REPLACE TRIGGER trg_sal_log
AFTER UPDATE ON emp        -- emp 테이블 UPDATE 후에
FOR EACH ROW               -- 영향받는 각 행마다 실행
BEGIN
    INSERT INTO sal_log(empno, old_sal, new_sal, log_date)
    VALUES (:OLD.empno, :OLD.sal, :NEW.sal, SYSDATE);
END;`}</code></pre>
          <p>급여가 수정될 때마다 사용자가 아무것도 호출하지 않아도, 수정 전 급여(<code>:OLD.sal</code>)와
          수정 후 급여(<code>:NEW.sal</code>)가 로그 테이블에 자동으로 쌓인다.</p>

          <h3>4-3. 트리거 남용 주의</h3>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            트리거가 다른 테이블을 변경하고 그 변경이 또 다른 트리거를 깨우는 <strong>연쇄(Cascade) 실행</strong>이 일어나면
            성능 저하와 예측 불가능한 동작이 생길 수 있다. 또한 자동으로 숨어서 실행되므로 <strong>디버깅이 어렵고</strong>,
            트리거 내부 오류가 원본 DML 문 전체를 실패시킬 수 있다. 꼭 필요한 경우에만 최소한으로 사용한다.
          </div>
        </section>

        {/* ===================== 5. 커서 ===================== */}
        <section id="cursor">
          <h2>5. 커서(Cursor)</h2>
          <p class="sub">쿼리 결과 집합을 한 행씩 가리키며 처리하는 포인터. 묵시적/명시적 구분과 명시적 커서 처리 4단계 순서가 단골이다.</p>

          <h3>5-1. 묵시적 커서 vs 명시적 커서 (단골)</h3>
          <table>
            <tr><th>구분</th><th>묵시적 커서 (Implicit)</th><th>명시적 커서 (Explicit)</th></tr>
            <tr><td><strong>선언</strong></td><td>DBMS가 <strong>자동으로</strong> 생성·관리</td><td>개발자가 DECLARE 절에 <strong>직접 선언</strong></td></tr>
            <tr><td><strong>대상</strong></td><td>단일 행 SELECT, INSERT/UPDATE/DELETE</td><td>여러 행을 반환하는 SELECT</td></tr>
            <tr><td><strong>제어</strong></td><td>OPEN/FETCH/CLOSE 불필요</td><td>OPEN → FETCH → CLOSE를 직접 수행</td></tr>
          </table>

          <h3>5-2. 명시적 커서 처리 4단계 (순서 단골)</h3>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 150">
              <rect class="boxdark" x="30" y="40" width="170" height="50" />
              <text x="115" y="62" text-anchor="middle" class="strong">1. 선언</text>
              <text x="115" y="80" text-anchor="middle" class="small">CURSOR ... IS</text>
              <rect class="box" x="250" y="40" width="170" height="50" />
              <text x="335" y="62" text-anchor="middle" class="strong">2. OPEN</text>
              <text x="335" y="80" text-anchor="middle" class="small">커서 열기(질의 실행)</text>
              <rect class="box" x="470" y="40" width="170" height="50" />
              <text x="555" y="62" text-anchor="middle" class="strong">3. FETCH</text>
              <text x="555" y="80" text-anchor="middle" class="small">한 행씩 변수로 읽기</text>
              <rect class="box" x="690" y="40" width="170" height="50" />
              <text x="775" y="62" text-anchor="middle" class="strong">4. CLOSE</text>
              <text x="775" y="80" text-anchor="middle" class="small">커서 닫기(자원 해제)</text>
              <g class="msg" data-step="1">
                <line class="arrow" x1="200" y1="65" x2="244" y2="65" />
                <text x="222" y="115" text-anchor="middle" class="small">열고</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="420" y1="65" x2="464" y2="65" />
                <text x="442" y="115" text-anchor="middle" class="small">읽고(반복)</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="640" y1="65" x2="684" y2="65" />
                <text x="662" y="115" text-anchor="middle" class="small">닫는다</text>
              </g>
            </svg>
            <figcaption>도면 1. 명시적 커서 처리 4단계 — 선언 → OPEN → FETCH → CLOSE</figcaption>
          </figure>

          <h3>5-3. 커서 속성</h3>
          <table>
            <tr><th>속성</th><th>의미</th></tr>
            <tr><td><code>%FOUND</code></td><td>직전 FETCH가 행을 <strong>가져왔으면</strong> TRUE</td></tr>
            <tr><td><code>%NOTFOUND</code></td><td>직전 FETCH가 행을 <strong>가져오지 못했으면</strong> TRUE — 반복 종료 조건에 사용</td></tr>
            <tr><td><code>%ROWCOUNT</code></td><td>지금까지 FETCH한 <strong>행의 개수</strong></td></tr>
          </table>

          <h3>5-4. 예제 — 명시적 커서로 사원 목록 출력</h3>
          <pre><code>{`DECLARE
    CURSOR c_emp IS                     -- 1) 선언
        SELECT empno, ename FROM emp;
    v_empno emp.empno%TYPE;
    v_ename emp.ename%TYPE;
BEGIN
    OPEN c_emp;                         -- 2) 열기
    LOOP
        FETCH c_emp INTO v_empno, v_ename;   -- 3) 한 행씩 읽기
        EXIT WHEN c_emp%NOTFOUND;            -- 더 읽을 행이 없으면 종료
        DBMS_OUTPUT.PUT_LINE(v_empno || ' ' || v_ename);
    END LOOP;
    CLOSE c_emp;                        -- 4) 닫기
END;`}</code></pre>
        </section>

        {/* ===================== 6. 옵티마이저와 실행 계획 ===================== */}
        <section id="optimizer">
          <h2>6. 옵티마이저와 실행 계획</h2>
          <p class="sub">옵티마이저는 SQL을 가장 효율적으로 처리할 경로(실행 계획)를 결정하는 DBMS의 핵심 엔진. RBO와 CBO의 구분이 최단골이다.</p>

          <h3>6-1. 옵티마이저의 역할</h3>
          <p><strong>옵티마이저(Optimizer)</strong>는 사용자가 작성한 SQL을 처리할 수 있는 여러 실행 경로 중에서
          <strong>가장 효율적인 실행 계획(Execution Plan)을 수립</strong>하는 DBMS 내부 모듈이다.
          같은 결과를 내는 SQL이라도 어떤 경로(인덱스 사용 여부, 조인 순서·방식)를 택하느냐에 따라 성능이 크게 달라진다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 200">
              <rect class="box" x="30" y="30" width="150" height="50" />
              <text x="105" y="52" text-anchor="middle" class="strong">SQL 문</text>
              <text x="105" y="70" text-anchor="middle" class="small">사용자 질의</text>
              <rect class="boxdark" x="270" y="30" width="180" height="50" />
              <text x="360" y="52" text-anchor="middle" class="strong">옵티마이저</text>
              <text x="360" y="70" text-anchor="middle" class="small">RBO / CBO</text>
              <rect class="box" x="540" y="30" width="150" height="50" />
              <text x="615" y="52" text-anchor="middle" class="strong">실행 계획</text>
              <text x="615" y="70" text-anchor="middle" class="small">최적 경로 선택</text>
              <rect class="box" x="770" y="30" width="100" height="50" />
              <text x="820" y="62" text-anchor="middle" class="strong">실행</text>
              <rect class="boxsoft" x="270" y="140" width="180" height="40" />
              <text x="360" y="165" text-anchor="middle">통계 정보</text>
              <g class="msg" data-step="1">
                <line class="arrow" x1="180" y1="55" x2="264" y2="55" />
                <text x="222" y="45" text-anchor="middle" class="small">구문 분석</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow ret" x1="360" y1="140" x2="360" y2="86" />
                <text x="435" y="120" text-anchor="middle" class="small">CBO가 비용 계산에 참조</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="450" y1="55" x2="534" y2="55" />
                <text x="492" y="45" text-anchor="middle" class="small">계획 수립</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow" x1="690" y1="55" x2="764" y2="55" />
                <text x="727" y="45" text-anchor="middle" class="small">수행</text>
              </g>
            </svg>
            <figcaption>도면 2. SQL 처리 흐름 — 옵티마이저가 통계 정보를 참조해 실행 계획을 수립한다</figcaption>
          </figure>

          <h3>6-2. RBO vs CBO (구분 최단골)</h3>
          <table>
            <tr><th>구분</th><th>RBO (Rule-Based Optimizer, 규칙 기반)</th><th>CBO (Cost-Based Optimizer, 비용 기반)</th></tr>
            <tr>
              <td><strong>판단 기준</strong></td>
              <td>미리 정해진 <strong>우선순위 규칙</strong> (예: 인덱스가 있으면 무조건 인덱스 사용)</td>
              <td>통계 정보로 계산한 <strong>비용(Cost)이 가장 낮은 경로</strong></td>
            </tr>
            <tr>
              <td><strong>근거 자료</strong></td>
              <td>규칙 순위표</td>
              <td><strong>통계 정보</strong> (행 수, 분포, 인덱스 상태 등)</td>
            </tr>
            <tr>
              <td><strong>특징</strong></td>
              <td>단순·예측 가능하지만 데이터 실태를 반영하지 못함</td>
              <td>데이터 실태를 반영해 대체로 더 효율적 — <strong>현대 DBMS의 기본</strong>. 통계가 오래되면 판단이 틀어짐</td>
            </tr>
          </table>

          <h3>6-3. 실행 계획 확인과 통계 정보</h3>
          <pre><code>{`-- 실행 계획 생성 (Oracle)
EXPLAIN PLAN FOR
SELECT * FROM emp WHERE empno = 100;

-- 생성된 계획 조회
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);

-- 통계 정보 수집 (CBO의 판단 근거)
ANALYZE TABLE emp COMPUTE STATISTICS;`}</code></pre>
          <p><strong>EXPLAIN PLAN</strong>은 SQL을 실제로 실행하지 않고 옵티마이저가 수립한 실행 계획
          (테이블 접근 방식, 인덱스 사용 여부, 조인 순서)을 보여 준다. CBO가 올바른 판단을 하려면
          <strong>통계 정보를 최신으로 유지</strong>하는 것이 중요하다.</p>

          <h3>6-4. 힌트(Hint)</h3>
          <p><strong>힌트</strong>는 옵티마이저의 판단이 최적이 아닐 때, 개발자가 주석 형태
          (<code>{'/*+ 힌트 */'}</code>)로 <strong>실행 계획을 직접 유도</strong>하는 지시어다.</p>
          <table>
            <tr><th>대표 힌트</th><th>의미</th></tr>
            <tr><td><code>{'/*+ INDEX(테이블 인덱스명) */'}</code></td><td>지정한 인덱스를 사용하도록 유도</td></tr>
            <tr><td><code>{'/*+ FULL(테이블) */'}</code></td><td>인덱스를 쓰지 않고 전체 테이블 스캔(Full Scan) 유도</td></tr>
            <tr><td><code>{'/*+ ORDERED */'}</code></td><td>FROM 절에 적힌 순서대로 조인하도록 유도</td></tr>
            <tr><td><code>{'/*+ USE_NL(테이블) */'}</code></td><td>중첩 루프(Nested Loop) 조인 방식 유도</td></tr>
          </table>
        </section>

        {/* ===================== 7. SQL 튜닝 ===================== */}
        <section id="tuning">
          <h2>7. SQL 튜닝</h2>
          <p class="sub">느린 SQL을 찾아 실행 계획을 분석하고 개선하는 활동. 인덱스를 타지 못하게 만드는 SQL 패턴 표가 실기 단골이다.</p>

          <h3>7-1. 튜닝 절차</h3>
          <ol>
            <li><strong>문제 SQL 식별</strong> — 느린 질의, 자주 실행되는 질의를 모니터링으로 찾는다.</li>
            <li><strong>실행 계획 분석</strong> — EXPLAIN PLAN으로 전체 스캔, 비효율 조인, 정렬 여부를 확인한다.</li>
            <li><strong>개선</strong> — SQL 재작성, 인덱스 생성·조정, 힌트 적용 후 성능을 재측정한다.</li>
          </ol>

          <h3>7-2. 인덱스를 타지 못하는 SQL 패턴 (단골 표)</h3>
          <table>
            <tr><th>패턴</th><th>나쁜 예</th><th>개선</th></tr>
            <tr>
              <td><strong>인덱스 컬럼 가공</strong> (함수·연산 적용)</td>
              <td><code>WHERE SUBSTR(name, 1, 1) = 'K'</code><br/><code>WHERE sal * 12 = 36000000</code></td>
              <td>컬럼을 그대로 두고 조건 쪽을 변형: <code>WHERE sal = 36000000 / 12</code></td>
            </tr>
            <tr>
              <td><strong>앞쪽 % (LIKE 선행 와일드카드)</strong></td>
              <td><code>WHERE name LIKE '%김'</code></td>
              <td>후행 와일드카드로: <code>WHERE name LIKE '김%'</code></td>
            </tr>
            <tr>
              <td><strong>부정형 조건</strong></td>
              <td><code>WHERE dept != '10'</code>, <code>NOT IN</code></td>
              <td>가능하면 긍정 조건(IN, =, BETWEEN)으로 바꾼다</td>
            </tr>
            <tr>
              <td><strong>묵시적 형변환</strong></td>
              <td>문자 컬럼에 <code>WHERE empno = 100</code> (숫자 비교)</td>
              <td>타입을 맞춰 비교: <code>WHERE empno = '100'</code></td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            공통 원리는 하나 — <strong>인덱스가 걸린 컬럼을 변형하거나, 인덱스 정렬 순서를 활용할 수 없게 만들면</strong>
            옵티마이저가 인덱스를 포기하고 전체 스캔을 택한다.
          </div>

          <h3>7-3. SQL 개선 기법</h3>
          <ul>
            <li><strong>서브쿼리 → 조인 전환</strong> — 반복 실행되는 서브쿼리를 조인으로 바꿔 접근 횟수를 줄인다.</li>
            <li><strong>EXISTS 활용</strong> — 존재 여부만 확인할 때는 IN 대신 EXISTS를 써서 조건 충족 시 즉시 탐색을 멈추게 한다.</li>
            <li><strong>불필요한 정렬 제거</strong> — 의미 없는 ORDER BY, DISTINCT, UNION(중복 제거 정렬)을 제거하고 필요 시 UNION ALL을 쓴다.</li>
            <li><strong>SELECT * 지양</strong> — 필요한 컬럼만 조회해 I/O와 네트워크 전송량을 줄인다.</li>
          </ul>

          <h3>7-4. 인덱스 종류 (표)</h3>
          <table>
            <tr><th>종류</th><th>특징</th></tr>
            <tr>
              <td><strong>B-트리 인덱스</strong></td>
              <td>가장 일반적인 균형 트리 구조. 범위 검색·등가 검색에 두루 강하다 (DBMS 기본 인덱스)</td>
            </tr>
            <tr>
              <td><strong>비트맵 인덱스</strong></td>
              <td>값별 비트맵으로 저장. <strong>카디널리티가 낮은(중복이 많은) 컬럼</strong>(성별, 등급 등)에 유리 — 단골.
              갱신이 잦으면 부적합(잠금 부담)</td>
            </tr>
            <tr>
              <td><strong>함수 기반 인덱스</strong></td>
              <td><code>UPPER(name)</code>처럼 <strong>함수·수식을 적용한 결과</strong>에 만드는 인덱스.
              컬럼 가공 조건에서도 인덱스를 탈 수 있게 한다</td>
            </tr>
            <tr>
              <td><strong>클러스터드 인덱스</strong></td>
              <td>인덱스 순서와 <strong>실제 데이터 저장 순서가 일치</strong>. 테이블당 1개만 가능, 범위 검색에 매우 빠름</td>
            </tr>
          </table>

          <h3>7-5. 파티션 프루닝(Partition Pruning)</h3>
          <p>큰 테이블을 파티션으로 나눠 두면, 옵티마이저가 조건절을 보고 <strong>관련 없는 파티션을 검색 대상에서 제외</strong>한다.
          예를 들어 월별 파티션 테이블에서 3월 조건으로 조회하면 3월 파티션만 읽으므로 스캔 범위가 크게 줄어든다.</p>
        </section>

        {/* ===================== 8. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>8. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">절차형 SQL과 SQL 최적화의 실기 단골 유형 10문항. 먼저 답을 적어 본 뒤 "정답 보기"를 눌러 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">절차형 SQL 중 사용자 정의 함수가 프로시저와 구분되는 가장 큰 특징을,
            반드시 사용해야 하는 키워드를 포함하여 한 문장으로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>RETURN을 통해 단일 값을 반드시 반환한다 (프로시저는 반환값이 없어도 됨).<br/>
                <span class="label">해설: </span>함수는 머리부에 RETURN 반환타입을 선언하고 본문에서 RETURN으로 값을 돌려주며,
                SELECT 등 SQL 문 안에서 값처럼 호출된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 설명에 해당하는 절차형 SQL의 명칭을 쓰시오.</p>
            <pre>{`특정 테이블에 INSERT, UPDATE, DELETE 등의 이벤트가 발생할 때
사용자의 호출 없이 DBMS가 자동으로 실행하는 절차형 SQL로,
데이터 변경 이력 기록이나 무결성 유지에 사용된다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>트리거(Trigger)<br/>
                <span class="label">해설: </span>"이벤트 발생 시 자동 실행", "호출 불가"가 트리거를 가리키는 결정적 키워드다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">트리거에서 사용하는 다음 설명의 ①, ②에 들어갈 키워드를 쓰시오.</p>
            <pre>{`UPDATE 트리거에서 변경 전의 기존 값은 ( ① ), 변경 후의 새 값은 ( ② )로 참조한다.
예) INSERT INTO sal_log VALUES (( ① ).sal, ( ② ).sal);`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① :OLD ② :NEW<br/>
                <span class="label">해설: </span>:OLD는 변경 전 값(UPDATE·DELETE에서 사용), :NEW는 변경 후 값(INSERT·UPDATE에서 사용)이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">명시적 커서를 처리하는 4단계를 순서대로 나열하시오.</p>
            <pre>{`보기: CLOSE, FETCH, 선언(DECLARE), OPEN`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>선언(DECLARE) → OPEN → FETCH → CLOSE<br/>
                <span class="label">해설: </span>커서를 선언하고, 열어서 질의를 실행하고, 한 행씩 읽고(FETCH), 다 읽으면 닫아 자원을 해제한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">PL/SQL 블록 구조의 ①, ②에 들어갈 키워드를 쓰시오.</p>
            <pre>{`( ① )
    -- 변수, 상수, 커서 선언 (선택)
BEGIN
    -- 실행할 SQL 문 (필수)
( ② )
    -- 실행 중 발생한 오류 처리 (선택)
END;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① DECLARE ② EXCEPTION<br/>
                <span class="label">해설: </span>블록 구조는 DECLARE(선언부) → BEGIN(실행부) → EXCEPTION(예외 처리부) → END 순서.
                BEGIN·END는 필수, DECLARE·EXCEPTION은 선택이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 ㉠, ㉡ 설명에 해당하는 옵티마이저 유형을 각각 영문 약어로 쓰시오.</p>
            <pre>{`㉠ 테이블 행 수, 데이터 분포 등의 통계 정보를 바탕으로 비용이 가장 낮은
   실행 경로를 선택한다. 현대 DBMS의 기본 방식이다.
㉡ 미리 정해진 우선순위 규칙에 따라 실행 경로를 선택한다.
   인덱스가 존재하면 데이터 실태와 무관하게 인덱스를 우선 사용한다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉠ CBO(Cost-Based Optimizer) ㉡ RBO(Rule-Based Optimizer)<br/>
                <span class="label">해설: </span>"통계 정보·비용"이 보이면 CBO, "정해진 규칙·우선순위"가 보이면 RBO다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 설명에 해당하는 인덱스의 종류를 쓰시오.</p>
            <pre>{`성별, 등급처럼 값의 종류가 적어 카디널리티가 낮은(중복이 많은) 컬럼에
적합한 인덱스로, 각 값마다 비트맵을 만들어 저장한다.
갱신이 잦은 환경에는 부적합하다.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>비트맵 인덱스(Bitmap Index)<br/>
                <span class="label">해설: </span>"카디널리티가 낮은 컬럼 + 비트맵"이 결정적 키워드. 반대로 중복이 적은
                컬럼의 범용 인덱스는 B-트리 인덱스다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 WHERE 절 중 name 컬럼의 인덱스를 정상적으로 사용할 수 있는 것을 하나 고르시오.
            (name은 문자 타입이고 단일 컬럼 인덱스가 존재한다)</p>
            <pre>{`㉠ WHERE SUBSTR(name, 1, 1) = 'K'
㉡ WHERE name LIKE '%김'
㉢ WHERE name LIKE '김%'
㉣ WHERE name != '김철수'`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>㉢<br/>
                <span class="label">해설: </span>㉠은 인덱스 컬럼 가공(함수 적용), ㉡은 선행 와일드카드, ㉣은 부정형 조건이라
                인덱스를 타지 못한다. 후행 와일드카드(㉢)는 인덱스 범위 검색이 가능하다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명에 해당하는 용어를 쓰시오.</p>
            <pre>{`옵티마이저가 수립한 실행 계획이 최적이 아니라고 판단될 때,
개발자가 SQL 문에 주석 형태( /*+ ... */ )로 기술하여
인덱스 사용, 조인 순서 등 실행 계획을 직접 유도하는 지시어.`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>힌트(Hint)<br/>
                <span class="label">해설: </span>대표적으로 INDEX(인덱스 사용 유도), FULL(전체 스캔 유도), ORDERED(조인 순서 고정) 힌트가 있다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음은 사원의 급여를 10% 인상하는 절차형 SQL과 그 호출문이다. ①~③에 들어갈 키워드를 쓰시오.</p>
            <pre>{`CREATE OR REPLACE ( ① ) up_salary(
    p_empno ( ② ) NUMBER      -- 값을 전달받는 입력 파라미터
)
IS
BEGIN
    UPDATE emp SET sal = sal * 1.1 WHERE empno = p_empno;
    COMMIT;
END;

-- 호출
( ③ ) up_salary(100);`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① PROCEDURE ② IN ③ EXECUTE (또는 CALL, EXEC)<br/>
                <span class="label">해설: </span>반환값 없이 작업을 묶어 실행하므로 프로시저이고, 입력 파라미터 모드는 IN,
                프로시저의 명시적 호출 키워드는 EXECUTE(EXEC) 또는 CALL이다.
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">PL/SQL</span>
            <span class="kw">T-SQL</span>
            <span class="kw">저장 프로시저</span>
            <span class="kw">INOUT 파라미터</span>
            <span class="kw">INSTEAD OF 트리거</span>
            <span class="kw">커서 FOR 루프</span>
            <span class="kw">%TYPE / %ROWTYPE</span>
            <span class="kw">통계 정보(ANALYZE)</span>
            <span class="kw">조인 방식(NL/해시/소트 머지)</span>
            <span class="kw">인덱스 스캔 방식</span>
            <span class="kw">파티셔닝(범위/해시/리스트)</span>
            <span class="kw">바인드 변수</span>
          </p>
        </section>

        <footer>SQL 활용 — 절차형 SQL과 SQL 최적화 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
