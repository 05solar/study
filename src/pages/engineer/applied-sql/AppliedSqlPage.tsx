import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './applied-sql.css'

export default defineComponent({
  name: 'AppliedSqlPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>응용 SQL · 집계성 SQL</h1>
          <p>정보처리기사 실기 대비 학습 문서. DML 복습과 JOIN → 서브쿼리 → 집합 연산자 →
          집계 함수와 GROUP BY → 그룹 함수(ROLLUP·CUBE·GROUPING SETS) → 윈도 함수 →
          DCL과 권한 → 뷰·인덱스 순서로, "SQL을 실행하면 결과가 몇 행·무슨 값인가"를 묻는
          실기 단골 유형을 <strong>예제 SQL + 결과 표</strong> 짝으로 정리한다.
          문서 전체에서 아래의 공통 예시 테이블 <strong>EMP · DEPT</strong>를 재사용한다.</p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#dml-join" onClick={(e) => scrollToId(e, 'dml-join')}>DML 복습과 JOIN</a></li>
            <li><a href="#subquery" onClick={(e) => scrollToId(e, 'subquery')}>서브쿼리 — IN · ANY · ALL · EXISTS</a></li>
            <li><a href="#setop" onClick={(e) => scrollToId(e, 'setop')}>집합 연산자 — UNION · INTERSECT · MINUS</a></li>
            <li><a href="#aggregate" onClick={(e) => scrollToId(e, 'aggregate')}>집계 함수와 GROUP BY · HAVING</a></li>
            <li><a href="#groupfn" onClick={(e) => scrollToId(e, 'groupfn')}>그룹 함수 — ROLLUP · CUBE · GROUPING SETS</a></li>
            <li><a href="#window" onClick={(e) => scrollToId(e, 'window')}>윈도 함수 — RANK · DENSE_RANK · ROW_NUMBER</a></li>
            <li><a href="#dcl" onClick={(e) => scrollToId(e, 'dcl')}>DCL과 권한 — GRANT · REVOKE · 롤</a></li>
            <li><a href="#view-index" onClick={(e) => scrollToId(e, 'view-index')}>뷰와 인덱스 조작</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. DML 복습과 JOIN ===================== */}
        <section id="dml-join">
          <h2>1. DML 복습과 JOIN</h2>
          <p class="sub">실기에서 SQL 문제는 "이 문장을 실행하면 몇 행이, 어떤 값으로 나오는가"를 묻는다.
          먼저 문서 전체에서 쓸 공통 예시 테이블을 정하고, DML 4형식과 JOIN 유형별 결과 차이를 본다.</p>

          <h3>1-1. 공통 예시 테이블 (문서 전체에서 재사용)</h3>
          <div class="duo">
            <div>
              <p class="tbl-cap">사원 테이블 EMP (6행)</p>
              <table>
                <tr><th>이름</th><th>부서</th><th>직급</th><th>급여</th></tr>
                <tr><td>김철수</td><td>영업</td><td>사원</td><td>300</td></tr>
                <tr><td>이영희</td><td>영업</td><td>대리</td><td>350</td></tr>
                <tr><td>박민수</td><td>개발</td><td>대리</td><td>400</td></tr>
                <tr><td>최지우</td><td>개발</td><td>과장</td><td>400</td></tr>
                <tr><td>정다은</td><td>개발</td><td>사원</td><td>250</td></tr>
                <tr><td>한상혁</td><td>인사</td><td>사원</td><td>NULL</td></tr>
              </table>
            </div>
            <div>
              <p class="tbl-cap">부서 테이블 DEPT (3행)</p>
              <table>
                <tr><th>부서</th><th>지역</th></tr>
                <tr><td>영업</td><td>서울</td></tr>
                <tr><td>개발</td><td>부산</td></tr>
                <tr><td>총무</td><td>서울</td></tr>
              </table>
            </div>
          </div>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            일부러 넣어 둔 함정 두 가지 — <strong>한상혁의 급여는 NULL</strong>(COUNT·AVG 문제의 단골),
            EMP의 <strong>인사</strong> 부서는 DEPT에 없고 DEPT의 <strong>총무</strong> 부서에는 사원이 없다(OUTER JOIN 문제의 단골).
          </div>

          <h3>1-2. DML 4형식 복습</h3>
          <table>
            <tr><th>문장</th><th>구문</th><th>비고</th></tr>
            <tr>
              <td><strong>INSERT</strong></td>
              <td><code>INSERT INTO EMP(이름, 부서, 직급, 급여) VALUES ('오하늘', '영업', '사원', 280);</code></td>
              <td>컬럼 목록을 생략하면 전체 컬럼 순서대로 값을 나열해야 한다</td>
            </tr>
            <tr>
              <td><strong>UPDATE</strong></td>
              <td><code>UPDATE EMP SET 급여 = 급여 + 50 WHERE 부서 = '영업';</code></td>
              <td>WHERE를 빼면 <strong>모든 행</strong>이 갱신된다</td>
            </tr>
            <tr>
              <td><strong>DELETE</strong></td>
              <td><code>DELETE FROM EMP WHERE 이름 = '한상혁';</code></td>
              <td>WHERE를 빼면 모든 행 삭제(테이블 구조는 유지 — DROP과 구분)</td>
            </tr>
            <tr>
              <td><strong>INSERT INTO SELECT</strong></td>
              <td><code>INSERT INTO EMP_BAK SELECT * FROM EMP WHERE 부서 = '개발';</code></td>
              <td>조회 결과를 다른 테이블에 한꺼번에 삽입(복사) — 실기 단골</td>
            </tr>
          </table>

          <h3>1-3. JOIN 유형별 구문과 결과 차이 (단골)</h3>
          <pre><code>{`SELECT E.이름, E.부서, D.지역
FROM EMP E INNER JOIN DEPT D ON E.부서 = D.부서;   -- 아래 표의 "INNER"
-- INNER 자리를 LEFT OUTER / RIGHT OUTER / FULL OUTER / CROSS 로 바꿔 가며 비교`}</code></pre>
          <table>
            <tr><th>유형</th><th>의미</th><th>EMP(6행) ⋈ DEPT(3행) 결과</th></tr>
            <tr>
              <td><strong>INNER JOIN</strong></td>
              <td>양쪽 모두에 조인 조건이 <strong>일치하는 행만</strong></td>
              <td><strong>5행</strong> — 영업 2 + 개발 3 (인사·총무 탈락)</td>
            </tr>
            <tr>
              <td><strong>LEFT OUTER JOIN</strong></td>
              <td>왼쪽(EMP)은 전부 + 오른쪽은 일치할 때만, 없으면 NULL</td>
              <td><strong>6행</strong> — 한상혁의 지역이 <strong>NULL</strong>로 남는다</td>
            </tr>
            <tr>
              <td><strong>RIGHT OUTER JOIN</strong></td>
              <td>오른쪽(DEPT)은 전부 + 왼쪽은 일치할 때만</td>
              <td><strong>6행</strong> — 총무 행이 사원 컬럼 NULL로 추가</td>
            </tr>
            <tr>
              <td><strong>FULL OUTER JOIN</strong></td>
              <td>양쪽 모두 전부(짝 없는 행은 반대편이 NULL)</td>
              <td><strong>7행</strong> — 5(일치) + 인사 1 + 총무 1</td>
            </tr>
            <tr>
              <td><strong>CROSS JOIN</strong></td>
              <td>조건 없이 모든 조합(카티션 곱)</td>
              <td><strong>18행</strong> — 6 × 3</td>
            </tr>
            <tr>
              <td><strong>SELF JOIN</strong></td>
              <td>같은 테이블을 별칭 두 개로 자기 자신과 조인</td>
              <td><code>FROM EMP A JOIN EMP B ON A.부서 = B.부서</code> — 같은 부서 사원 쌍</td>
            </tr>
          </table>
          <p class="tbl-cap">LEFT OUTER JOIN 결과 (6행)</p>
          <table>
            <tr><th>이름</th><th>부서</th><th>지역</th></tr>
            <tr><td>김철수</td><td>영업</td><td>서울</td></tr>
            <tr><td>이영희</td><td>영업</td><td>서울</td></tr>
            <tr><td>박민수</td><td>개발</td><td>부산</td></tr>
            <tr><td>최지우</td><td>개발</td><td>부산</td></tr>
            <tr><td>정다은</td><td>개발</td><td>부산</td></tr>
            <tr><td>한상혁</td><td>인사</td><td><strong>NULL</strong></td></tr>
          </table>

          <h3>1-4. 등가/비등가 조인, ON vs USING</h3>
          <ul>
            <li><strong>등가 조인(Equi Join)</strong>: 조인 조건이 <code>=</code> — 위의 예 전부. Oracle 구식 표기는 <code>WHERE E.부서 = D.부서</code>.</li>
            <li><strong>비등가 조인(Non-Equi Join)</strong>: <code>=</code>가 아닌 조건.
              예: <code>{`ON E.급여 BETWEEN G.하한 AND G.상한`}</code> (급여 등급표와 조인).</li>
            <li><strong>ON vs USING</strong>: <code>ON E.부서 = D.부서</code>는 컬럼명이 달라도 되고,
              <code>USING (부서)</code>는 <strong>양쪽 컬럼명이 같을 때만</strong> 쓰며 별칭 없이 컬럼명 하나만 적는다.
              <code>NATURAL JOIN</code>은 이름이 같은 모든 컬럼으로 자동 등가 조인.</li>
          </ul>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            OUTER JOIN의 행 수를 물으면 <strong>기준(전부 나오는) 쪽이 어느 테이블인지</strong>부터 확인.
            LEFT는 왼쪽 표가 전부, RIGHT는 오른쪽 표가 전부 나온다.
          </div>
        </section>

        {/* ===================== 2. 서브쿼리 ===================== */}
        <section id="subquery">
          <h2>2. 서브쿼리 — IN · ANY · ALL · EXISTS</h2>
          <p class="sub">서브쿼리는 SQL 안에 들어간 또 하나의 SELECT. 반환 행 수(단일 행/다중 행)에 따라 쓸 수 있는
          연산자가 다르고, 각 연산자의 의미를 그대로 쓰게 하는 문제가 단골이다.</p>

          <h3>2-1. 단일 행 서브쿼리</h3>
          <p>서브쿼리가 <strong>1행</strong>만 반환할 때 — 비교 연산자(=, {'>'}, {'<'}, {'>'}=, {'<'}=, {'<>'})를 그대로 쓴다.</p>
          <pre><code>{`SELECT 이름, 급여
FROM   EMP
WHERE  급여 > (SELECT AVG(급여) FROM EMP);   -- 평균 340 (NULL 제외, 4장 참고)`}</code></pre>
          <p class="tbl-cap">결과 (3행) — 평균 340보다 큰 사원</p>
          <table>
            <tr><th>이름</th><th>급여</th></tr>
            <tr><td>이영희</td><td>350</td></tr>
            <tr><td>박민수</td><td>400</td></tr>
            <tr><td>최지우</td><td>400</td></tr>
          </table>

          <h3>2-2. 다중 행 연산자 IN · ANY · ALL · EXISTS (단골)</h3>
          <table>
            <tr><th>연산자</th><th>의미</th><th>예 — 서브쿼리가 (300, 350)일 때</th></tr>
            <tr>
              <td><strong>IN</strong></td>
              <td>목록 중 <strong>하나라도 같으면</strong> 참 (= OR 연결)</td>
              <td><code>급여 IN (300, 350)</code> → 300, 350인 행</td>
            </tr>
            <tr>
              <td><strong>{'>'} ANY</strong></td>
              <td>목록 중 <strong>하나보다만 크면</strong> 참 → 사실상 <strong>최솟값보다 크면</strong></td>
              <td><code>{`급여 > ANY (300, 350)`}</code> → 급여 {'>'} 300</td>
            </tr>
            <tr>
              <td><strong>{'>'} ALL</strong></td>
              <td>목록 <strong>전부보다 커야</strong> 참 → <strong>최댓값보다 크면</strong></td>
              <td><code>{`급여 > ALL (300, 350)`}</code> → 급여 {'>'} 350</td>
            </tr>
            <tr>
              <td><strong>EXISTS</strong></td>
              <td>서브쿼리 결과가 <strong>1행이라도 존재하면</strong> 참 (값 비교가 아니라 존재 여부)</td>
              <td>상관 서브쿼리와 함께 자주 사용</td>
            </tr>
          </table>
          <pre><code>{`-- 영업부 급여 목록은 (300, 350)
SELECT 이름 FROM EMP
WHERE  급여 > ANY (SELECT 급여 FROM EMP WHERE 부서 = '영업');
--> 300 초과: 이영희, 박민수, 최지우 (3행)

SELECT 이름 FROM EMP
WHERE  급여 > ALL (SELECT 급여 FROM EMP WHERE 부서 = '영업');
--> 350 초과: 박민수, 최지우 (2행)

-- EXISTS: 사원이 한 명이라도 있는 부서 (상관 서브쿼리)
SELECT D.부서 FROM DEPT D
WHERE  EXISTS (SELECT 1 FROM EMP E WHERE E.부서 = D.부서);
--> 영업, 개발 (2행 — 총무는 사원이 없어 탈락)`}</code></pre>

          <h3>2-3. 스칼라 서브쿼리와 인라인 뷰</h3>
          <table>
            <tr><th>위치</th><th>이름</th><th>예</th></tr>
            <tr>
              <td>SELECT 절</td>
              <td><strong>스칼라 서브쿼리</strong> — 값 <strong>하나(1행 1열)</strong>를 컬럼처럼 반환</td>
              <td><code>SELECT 이름, (SELECT 지역 FROM DEPT D WHERE D.부서 = E.부서) FROM EMP E</code></td>
            </tr>
            <tr>
              <td>FROM 절</td>
              <td><strong>인라인 뷰(Inline View)</strong> — 조회 결과를 임시 테이블처럼 사용</td>
              <td><code>{`SELECT * FROM (SELECT 이름, 급여 FROM EMP WHERE 급여 >= 300) T`}</code></td>
            </tr>
            <tr>
              <td>WHERE·HAVING 절</td>
              <td>중첩 서브쿼리(일반적인 서브쿼리)</td>
              <td>2-1, 2-2의 예</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "서브쿼리 결과가 <strong>존재하는지만</strong> 확인하는 연산자" → <strong>EXISTS</strong>,
            "FROM 절에 오는 서브쿼리" → <strong>인라인 뷰</strong>. 용어 쓰기로 자주 출제된다.
          </div>
        </section>

        {/* ===================== 3. 집합 연산자 ===================== */}
        <section id="setop">
          <h2>3. 집합 연산자 — UNION · INTERSECT · MINUS</h2>
          <p class="sub">두 SELECT 결과를 세로로 합치거나 비교한다. 컬럼 수와 데이터 타입이 서로 같아야 하며,
          "UNION과 UNION ALL의 결과 행 수 차이"가 최단골이다.</p>

          <h3>3-1. 예시 — 영업팀 명단과 프로젝트 참여자</h3>
          <div class="duo">
            <div>
              <p class="tbl-cap">A. 영업팀 (3행)</p>
              <table>
                <tr><th>이름</th></tr>
                <tr><td>김철수</td></tr>
                <tr><td>이영희</td></tr>
                <tr><td>박민수</td></tr>
              </table>
            </div>
            <div>
              <p class="tbl-cap">B. 프로젝트 참여자 (2행)</p>
              <table>
                <tr><th>이름</th></tr>
                <tr><td>박민수</td></tr>
                <tr><td>최지우</td></tr>
              </table>
            </div>
          </div>
          <pre><code>{`SELECT 이름 FROM A
UNION            -- 이 자리를 UNION ALL / INTERSECT / MINUS 로 바꿔 가며 비교
SELECT 이름 FROM B;`}</code></pre>

          <h3>3-2. 연산자별 결과 행 수 비교 (최단골)</h3>
          <table>
            <tr><th>연산자</th><th>의미</th><th>결과</th><th>행 수</th></tr>
            <tr>
              <td><strong>UNION</strong></td>
              <td>합집합 — <strong>중복 제거</strong> (내부적으로 정렬 발생)</td>
              <td>김철수, 이영희, 박민수, 최지우</td>
              <td><strong>4행</strong></td>
            </tr>
            <tr>
              <td><strong>UNION ALL</strong></td>
              <td>합집합 — <strong>중복 포함</strong>, 그대로 이어 붙임 (더 빠름)</td>
              <td>김철수, 이영희, 박민수, 박민수, 최지우</td>
              <td><strong>5행</strong></td>
            </tr>
            <tr>
              <td><strong>INTERSECT</strong></td>
              <td>교집합 — 양쪽에 <strong>모두 있는</strong> 행</td>
              <td>박민수</td>
              <td><strong>1행</strong></td>
            </tr>
            <tr>
              <td><strong>MINUS</strong> (표준: EXCEPT)</td>
              <td>차집합 — A에는 있고 B에는 <strong>없는</strong> 행</td>
              <td>김철수, 이영희</td>
              <td><strong>2행</strong></td>
            </tr>
          </table>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            UNION은 중복 1건(박민수)을 지워 <strong>4행</strong>, UNION ALL은 그대로 <strong>5행</strong>.
            행 수 계산 문제에서 겹치는 행이 몇 건인지 먼저 세는 습관을 들이자.
            MINUS는 <strong>A MINUS B와 B MINUS A의 결과가 다르다</strong>(B MINUS A는 최지우 1행).
          </div>
        </section>

        {/* ===================== 4. 집계 함수와 GROUP BY ===================== */}
        <section id="aggregate">
          <h2>4. 집계 함수와 GROUP BY · HAVING</h2>
          <p class="sub">집계 함수는 여러 행을 하나의 값으로 요약한다. COUNT(*)와 COUNT(컬럼)의 차이,
          WHERE와 HAVING의 차이가 실기 최단골이다.</p>

          <h3>4-1. COUNT(*) vs COUNT(컬럼) — NULL 처리 (최단골)</h3>
          <pre><code>{`SELECT COUNT(*), COUNT(급여), COUNT(DISTINCT 부서), SUM(급여), AVG(급여), MAX(급여), MIN(급여)
FROM   EMP;   -- 한상혁의 급여는 NULL`}</code></pre>
          <p class="tbl-cap">결과 (1행)</p>
          <table>
            <tr><th>COUNT(*)</th><th>COUNT(급여)</th><th>COUNT(DISTINCT 부서)</th><th>SUM(급여)</th><th>AVG(급여)</th><th>MAX(급여)</th><th>MIN(급여)</th></tr>
            <tr><td><strong>6</strong></td><td><strong>5</strong></td><td>3</td><td>1700</td><td><strong>340</strong></td><td>400</td><td>250</td></tr>
          </table>
          <ul>
            <li><strong>COUNT(*)</strong>: NULL 포함 <strong>모든 행</strong>의 개수 → 6.</li>
            <li><strong>COUNT(급여)</strong>: 급여가 <strong>NULL이 아닌 행만</strong> → 5. (모든 집계 함수는 NULL을 제외하고 계산)</li>
            <li><strong>AVG(급여)</strong> = SUM ÷ COUNT(급여) = 1700 ÷ 5 = <strong>340</strong>. 1700 ÷ 6 ≈ 283이 아니다!</li>
          </ul>

          <h3>4-2. GROUP BY — 부서별 집계</h3>
          <pre><code>{`SELECT 부서, COUNT(*) AS 인원, SUM(급여) AS 합계, AVG(급여) AS 평균
FROM   EMP
GROUP BY 부서;`}</code></pre>
          <p class="tbl-cap">결과 (3행)</p>
          <table>
            <tr><th>부서</th><th>인원</th><th>합계</th><th>평균</th></tr>
            <tr><td>영업</td><td>2</td><td>650</td><td>325</td></tr>
            <tr><td>개발</td><td>3</td><td>1050</td><td>350</td></tr>
            <tr><td>인사</td><td>1</td><td><strong>NULL</strong></td><td><strong>NULL</strong></td></tr>
          </table>
          <p>인사 부서는 급여가 전부 NULL이라 SUM·AVG도 NULL이다. 단, COUNT(*)는 행이 있으므로 1.</p>

          <h3>4-3. HAVING — 그룹에 대한 조건 (WHERE와 차이 단골)</h3>
          <pre><code>{`SELECT 부서, SUM(급여) AS 합계
FROM   EMP
WHERE  직급 <> '과장'          -- 1) 행 단위 필터 (그룹핑 전) : 최지우 제외
GROUP BY 부서
HAVING SUM(급여) >= 600;      -- 2) 그룹 단위 필터 (그룹핑 후)`}</code></pre>
          <p class="tbl-cap">결과 (2행) — 최지우(400) 제외 후 부서 합계가 600 이상인 그룹</p>
          <table>
            <tr><th>부서</th><th>합계</th></tr>
            <tr><td>영업</td><td>650</td></tr>
            <tr><td>개발</td><td>650</td></tr>
          </table>
          <table>
            <tr><th></th><th>WHERE</th><th>HAVING</th></tr>
            <tr><td>적용 대상</td><td><strong>개별 행</strong> (그룹핑 전)</td><td><strong>그룹</strong> (그룹핑 후)</td></tr>
            <tr><td>집계 함수 사용</td><td>불가</td><td><strong>가능</strong> (SUM, COUNT 등)</td></tr>
            <tr><td>실행 순서</td><td>FROM → <strong>WHERE</strong> → GROUP BY</td><td>GROUP BY → <strong>HAVING</strong> → SELECT → ORDER BY</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "그룹에 대한 조건을 지정하는 절" → <strong>HAVING</strong>.
            <code>{`WHERE SUM(급여) >= 600`}</code>처럼 WHERE에 집계 함수를 쓰면 오류라는 점도 같이 기억.
          </div>
        </section>

        {/* ===================== 5. 그룹 함수 ===================== */}
        <section id="groupfn">
          <h2>5. 그룹 함수 — ROLLUP · CUBE · GROUPING SETS</h2>
          <p class="sub">GROUP BY의 확장으로 소계·총계 행을 자동으로 추가한다.
          같은 데이터에서 각 함수가 만드는 <strong>결과 행 수 차이</strong>가 최단골.</p>

          <h3>5-1. 세 함수의 의미</h3>
          <table>
            <tr><th>함수</th><th>만드는 그룹</th><th>GROUP BY (A, B) 기준</th></tr>
            <tr>
              <td><strong>ROLLUP(A, B)</strong></td>
              <td><strong>계층별</strong> 소계 + 총계 — 나열 순서대로 오른쪽부터 접는다</td>
              <td>(A, B) + (A) 소계 + ( ) 총계</td>
            </tr>
            <tr>
              <td><strong>CUBE(A, B)</strong></td>
              <td>가능한 <strong>모든 조합</strong>의 소계 + 총계</td>
              <td>(A, B) + (A) + <strong>(B)</strong> + ( ) 총계</td>
            </tr>
            <tr>
              <td><strong>GROUPING SETS((A), (B))</strong></td>
              <td><strong>지정한 조합만</strong> — 소계·총계 자동 추가 없음</td>
              <td>(A)와 (B) 각각의 집계만</td>
            </tr>
          </table>

          <h3>5-2. ROLLUP 실행 결과 (EMP, 부서·직급 기준)</h3>
          <pre><code>{`SELECT 부서, 직급, SUM(급여) AS 합계
FROM   EMP
GROUP BY ROLLUP(부서, 직급);`}</code></pre>
          <p class="tbl-cap">결과 (10행) — (부서, 직급) 6행 + 부서 소계 3행 + 총계 1행</p>
          <table>
            <tr><th>부서</th><th>직급</th><th>합계</th><th>행의 의미</th></tr>
            <tr><td>영업</td><td>사원</td><td>300</td><td rowspan="6">(부서, 직급) 상세 — 6행</td></tr>
            <tr><td>영업</td><td>대리</td><td>350</td></tr>
            <tr><td>개발</td><td>대리</td><td>400</td></tr>
            <tr><td>개발</td><td>과장</td><td>400</td></tr>
            <tr><td>개발</td><td>사원</td><td>250</td></tr>
            <tr><td>인사</td><td>사원</td><td>NULL</td></tr>
            <tr><td>영업</td><td><strong>NULL</strong></td><td>650</td><td rowspan="3">부서별 소계 — 3행</td></tr>
            <tr><td>개발</td><td><strong>NULL</strong></td><td>1050</td></tr>
            <tr><td>인사</td><td><strong>NULL</strong></td><td>NULL</td></tr>
            <tr><td><strong>NULL</strong></td><td><strong>NULL</strong></td><td>1700</td><td>총계 — 1행</td></tr>
          </table>

          <h3>5-3. ROLLUP vs CUBE 결과 행 수 비교 (최단골)</h3>
          <p>같은 데이터(부서 3종, 직급 3종, 상세 조합 6가지)로 비교하면 다음과 같다.</p>
          <table>
            <tr><th>함수</th><th>포함되는 그룹</th><th>행 수 계산</th><th>결과 행 수</th></tr>
            <tr>
              <td><strong>GROUP BY 부서, 직급</strong></td>
              <td>(부서, 직급)만</td>
              <td>상세 6</td>
              <td><strong>6행</strong></td>
            </tr>
            <tr>
              <td><strong>ROLLUP(부서, 직급)</strong></td>
              <td>상세 + 부서 소계 + 총계</td>
              <td>6 + 3 + 1</td>
              <td><strong>10행</strong></td>
            </tr>
            <tr>
              <td><strong>CUBE(부서, 직급)</strong></td>
              <td>상세 + 부서 소계 + <strong>직급 소계</strong> + 총계</td>
              <td>6 + 3 + <strong>3</strong> + 1</td>
              <td><strong>13행</strong></td>
            </tr>
            <tr>
              <td><strong>GROUPING SETS(부서, 직급)</strong></td>
              <td>부서 집계 + 직급 집계 (총계 없음)</td>
              <td>3 + 3</td>
              <td><strong>6행</strong></td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            CUBE가 ROLLUP보다 많은 이유는 <strong>직급별 소계 (사원 550, 대리 750, 과장 400)</strong> 3행이 추가되기 때문.
            소계·총계 행의 그룹핑 컬럼 값은 <strong>NULL</strong>로 표시된다.
          </div>
        </section>

        {/* ===================== 6. 윈도 함수 ===================== */}
        <section id="window">
          <h2>6. 윈도 함수 — RANK · DENSE_RANK · ROW_NUMBER</h2>
          <p class="sub">행을 그룹으로 합치지 않고, 행마다 순위·집계 값을 붙여 주는 함수.
          <code>함수() OVER (PARTITION BY ... ORDER BY ...)</code> 구문과 세 순위 함수의 차이가 최단골.</p>

          <h3>6-1. 세 순위 함수 비교 표 (최단골 — 같은 데이터, 같은 정렬)</h3>
          <pre><code>{`SELECT 이름, 급여,
       RANK()       OVER (ORDER BY 급여 DESC) AS RK,
       DENSE_RANK() OVER (ORDER BY 급여 DESC) AS DR,
       ROW_NUMBER() OVER (ORDER BY 급여 DESC) AS RN
FROM   EMP
WHERE  급여 IS NOT NULL;   -- 5행 대상`}</code></pre>
          <p class="tbl-cap">결과 (5행) — 400점 동순위 2명에 주목</p>
          <table>
            <tr><th>이름</th><th>급여</th><th>RANK</th><th>DENSE_RANK</th><th>ROW_NUMBER</th></tr>
            <tr><td>박민수</td><td>400</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>최지우</td><td>400</td><td>1</td><td>1</td><td>2</td></tr>
            <tr><td>이영희</td><td>350</td><td><strong>3</strong></td><td><strong>2</strong></td><td>3</td></tr>
            <tr><td>김철수</td><td>300</td><td>4</td><td>3</td><td>4</td></tr>
            <tr><td>정다은</td><td>250</td><td>5</td><td>4</td><td>5</td></tr>
          </table>
          <table>
            <tr><th>함수</th><th>동순위 처리</th><th>다음 순위</th><th>위 결과</th></tr>
            <tr>
              <td><strong>RANK</strong></td>
              <td>같은 값이면 같은 순위</td>
              <td>인원수만큼 <strong>건너뜀</strong></td>
              <td>1, 1, <strong>3</strong>, 4, 5</td>
            </tr>
            <tr>
              <td><strong>DENSE_RANK</strong></td>
              <td>같은 값이면 같은 순위</td>
              <td><strong>건너뛰지 않음</strong> (연속)</td>
              <td>1, 1, <strong>2</strong>, 3, 4</td>
            </tr>
            <tr>
              <td><strong>ROW_NUMBER</strong></td>
              <td>동순위 없이 <strong>고유 번호</strong></td>
              <td>항상 1씩 증가 (동점끼리의 순서는 보장 안 됨)</td>
              <td>1, 2, 3, 4, 5</td>
            </tr>
          </table>

          <h3>6-2. PARTITION BY — 그룹 안에서 다시 시작</h3>
          <pre><code>{`SELECT 이름, 부서, 급여,
       RANK() OVER (PARTITION BY 부서 ORDER BY 급여 DESC) AS 부서내순위
FROM   EMP
WHERE  급여 IS NOT NULL;`}</code></pre>
          <p class="tbl-cap">결과 (5행) — 부서가 바뀌면 순위가 1부터 다시 시작</p>
          <table>
            <tr><th>이름</th><th>부서</th><th>급여</th><th>부서내순위</th></tr>
            <tr><td>박민수</td><td>개발</td><td>400</td><td>1</td></tr>
            <tr><td>최지우</td><td>개발</td><td>400</td><td>1</td></tr>
            <tr><td>정다은</td><td>개발</td><td>250</td><td>3</td></tr>
            <tr><td>이영희</td><td>영업</td><td>350</td><td>1</td></tr>
            <tr><td>김철수</td><td>영업</td><td>300</td><td>2</td></tr>
          </table>

          <h3>6-3. 집계 윈도 함수 — SUM() OVER</h3>
          <pre><code>{`SELECT 이름, 부서, 급여,
       SUM(급여) OVER (PARTITION BY 부서) AS 부서합계   -- 그룹으로 합치지 않고 행마다 표시
FROM   EMP
WHERE  급여 IS NOT NULL;`}</code></pre>
          <p>GROUP BY와 달리 <strong>행 수가 줄지 않고</strong>, 각 행 옆에 부서 합계(개발 1050, 영업 650)가 그대로 붙는다.
          이 밖에 AVG·COUNT·MAX·MIN도 OVER와 함께 쓸 수 있다.</p>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            "1, 1 다음이 3" → <strong>RANK</strong>, "1, 1 다음이 2" → <strong>DENSE_RANK</strong>,
            "동점이어도 1, 2, 3, ..." → <strong>ROW_NUMBER</strong>. 결과 숫자만 보고 함수를 역으로 고르는 문제가 많다.
          </div>
        </section>

        {/* ===================== 7. DCL과 권한 ===================== */}
        <section id="dcl">
          <h2>7. DCL과 권한 — GRANT · REVOKE · 롤</h2>
          <p class="sub">DCL(Data Control Language)은 권한 부여·회수를 담당한다.
          GRANT/REVOKE 구문의 빈칸 채우기가 단골 — 키워드 위치를 통째로 암기하자.</p>

          <h3>7-1. GRANT — 권한 부여 (괄호 채우기 단골)</h3>
          <pre><code>{`GRANT SELECT, UPDATE ON EMP TO KIM;               -- KIM에게 EMP 조회·갱신 권한
GRANT SELECT ON EMP TO KIM WITH GRANT OPTION;      -- KIM이 남에게 다시 부여할 수 있게
GRANT ALL PRIVILEGES ON EMP TO PUBLIC;             -- 모든 사용자에게 모든 객체 권한`}</code></pre>
          <table>
            <tr><th>요소</th><th>키워드</th><th>의미</th></tr>
            <tr><td>권한 종류</td><td>SELECT / INSERT / UPDATE / DELETE / ALL</td><td>객체에 대한 조작 권한</td></tr>
            <tr><td>대상 객체</td><td><strong>ON</strong> 테이블명</td><td>권한을 줄 객체</td></tr>
            <tr><td>받는 사람</td><td><strong>TO</strong> 사용자명</td><td>PUBLIC이면 전체 사용자</td></tr>
            <tr><td>재부여 허용</td><td><strong>WITH GRANT OPTION</strong></td><td>받은 권한을 <strong>제3자에게 다시 부여</strong>할 수 있음</td></tr>
          </table>

          <h3>7-2. REVOKE — 권한 회수 (단골)</h3>
          <pre><code>{`REVOKE UPDATE ON EMP FROM KIM;                     -- KIM의 갱신 권한 회수
REVOKE GRANT OPTION FOR SELECT ON EMP FROM KIM;    -- 재부여 권한만 회수
REVOKE SELECT ON EMP FROM KIM CASCADE;             -- KIM이 남에게 준 권한까지 연쇄 회수`}</code></pre>
          <ul>
            <li>GRANT는 <strong>TO</strong>, REVOKE는 <strong>FROM</strong> — 방향 전치사가 다르다.</li>
            <li><strong>GRANT OPTION FOR</strong>: 권한 자체는 두고 <strong>재부여 능력만</strong> 회수.</li>
            <li><strong>CASCADE</strong>: 그 사용자가 WITH GRANT OPTION으로 <strong>다른 사람에게 준 권한까지 연쇄적으로</strong> 회수.</li>
          </ul>

          <h3>7-3. 롤(Role)</h3>
          <p><strong>롤</strong>은 여러 권한을 묶어 놓은 <strong>권한의 꾸러미</strong>다. 사용자마다 권한을 일일이 주는 대신
          롤에 권한을 넣고 롤을 사용자에게 부여한다.</p>
          <pre><code>{`CREATE ROLE 조회롤;
GRANT SELECT ON EMP TO 조회롤;
GRANT 조회롤 TO KIM;    -- KIM은 조회롤이 가진 권한을 한꺼번에 획득`}</code></pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            빈칸 채우기 대비 어순: <strong>GRANT 권한 ON 객체 TO 사용자 [WITH GRANT OPTION]</strong> /
            <strong>REVOKE 권한 ON 객체 FROM 사용자 [CASCADE]</strong>.
          </div>
        </section>

        {/* ===================== 8. 뷰와 인덱스 조작 ===================== */}
        <section id="view-index">
          <h2>8. 뷰와 인덱스 조작</h2>
          <p class="sub">뷰는 SELECT 결과에 이름을 붙인 가상 테이블, 인덱스는 검색 속도를 높이는 자료 구조.
          생성·삭제 구문과 옵션 키워드를 쓰게 한다.</p>

          <h3>8-1. CREATE VIEW / DROP VIEW</h3>
          <pre><code>{`CREATE VIEW 개발부사원 AS
  SELECT 이름, 급여
  FROM   EMP
  WHERE  부서 = '개발'
WITH CHECK OPTION;      -- 조건(부서='개발')을 위반하는 삽입·갱신을 막는다

DROP VIEW 개발부사원 [CASCADE | RESTRICT];`}</code></pre>
          <ul>
            <li>뷰는 <strong>데이터를 저장하지 않는 가상 테이블</strong> — 조회할 때마다 원본 테이블에서 실행된다.</li>
            <li><strong>WITH CHECK OPTION</strong>: 뷰의 WHERE 조건을 <strong>벗어나는 삽입·갱신을 거부</strong>. (예: 위 뷰로 부서를 '영업'으로 바꾸는 UPDATE는 실패)</li>
            <li>뷰 정의는 <strong>ALTER로 수정할 수 없다</strong> — DROP 후 재생성하거나 <code>CREATE OR REPLACE VIEW</code>를 쓴다.</li>
            <li>DROP의 <strong>CASCADE</strong>는 이 뷰를 참조하는 다른 객체까지 함께 삭제, <strong>RESTRICT</strong>는 참조 객체가 있으면 삭제를 취소.</li>
          </ul>

          <h3>8-2. CREATE INDEX / DROP INDEX</h3>
          <pre><code>{`CREATE INDEX idx_emp_dept ON EMP(부서);              -- 일반(중복 허용) 인덱스
CREATE UNIQUE INDEX idx_emp_name ON EMP(이름);        -- 중복 값을 허용하지 않는 인덱스
CREATE INDEX idx_emp_ds ON EMP(부서, 급여 DESC);      -- 복합 인덱스 + 정렬 방향

DROP INDEX idx_emp_dept;`}</code></pre>
          <table>
            <tr><th>키워드</th><th>의미</th></tr>
            <tr><td><strong>UNIQUE</strong></td><td>인덱스 컬럼에 중복 값 저장 불가 (기본키에는 자동으로 유니크 인덱스 생성)</td></tr>
            <tr><td>복합 인덱스</td><td>여러 컬럼을 묶어 하나의 인덱스로 — 나열 순서가 검색 효율에 영향</td></tr>
            <tr><td>장단점</td><td>검색은 빨라지지만 INSERT·UPDATE·DELETE 때 <strong>인덱스 갱신 비용</strong>이 늘고 저장 공간을 차지</td></tr>
          </table>
        </section>

        {/* ===================== 9. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>9. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">모든 문제는 1장의 공통 예시 테이블 EMP·DEPT를 기준으로 한다. 답을 쓴 뒤 "정답 보기"로 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 SQL의 실행 결과로 출력되는 두 값을 순서대로 쓰시오.</p>
            <pre>{`EMP: 급여 = 300, 350, 400, 400, 250, NULL (6행)

SELECT COUNT(*), COUNT(급여) FROM EMP;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>6, 5<br/>
                <span class="label">해설: </span>COUNT(*)는 NULL 포함 모든 행(6). COUNT(급여)는 급여가 NULL인
                한상혁의 행을 제외하고 센다(5). 집계 함수는 NULL을 제외한다는 것이 핵심.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 SQL의 실행 결과 값을 쓰시오.</p>
            <pre>{`EMP: 급여 = 300, 350, 400, 400, 250, NULL (6행)

SELECT AVG(급여) FROM EMP;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>340<br/>
                <span class="label">해설: </span>AVG도 NULL을 제외한다. (300+350+400+400+250) ÷ 5 = 1700 ÷ 5 = 340.
                6으로 나눈 283.33...은 오답.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 SQL의 실행 결과(부서와 값, 행 수)를 쓰시오.</p>
            <pre>{`EMP
이름   부서  급여
김철수 영업  300
이영희 영업  350
박민수 개발  400
최지우 개발  400
정다은 개발  250
한상혁 인사  NULL

SELECT 부서, SUM(급여)
FROM   EMP
GROUP BY 부서
HAVING SUM(급여) >= 1000;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>개발, 1050 — 1행<br/>
                <span class="label">해설: </span>부서별 SUM은 영업 650, 개발 1050, 인사 NULL.
                HAVING SUM(급여) ≥ 1000을 만족하는 그룹은 개발뿐이다. NULL은 비교 결과가 참이 아니므로 인사도 탈락.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 SQL을 실행했을 때 이영희 행에 출력되는 RK와 DR 값을 각각 쓰시오.</p>
            <pre>{`대상(급여 NULL 제외 5행): 400(박민수), 400(최지우), 350(이영희), 300(김철수), 250(정다은)

SELECT 이름,
       RANK()       OVER (ORDER BY 급여 DESC) AS RK,
       DENSE_RANK() OVER (ORDER BY 급여 DESC) AS DR
FROM   EMP
WHERE  급여 IS NOT NULL;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>RK = 3, DR = 2<br/>
                <span class="label">해설: </span>400이 공동 1위(2명). RANK는 인원수만큼 건너뛰어 다음이 3,
                DENSE_RANK는 건너뛰지 않아 다음이 2. 전체 결과는 RANK 1,1,3,4,5 / DENSE_RANK 1,1,2,3,4.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">두 테이블에 대해 아래 두 SQL이 반환하는 행 수를 각각 쓰시오.</p>
            <pre>{`A: 김철수, 이영희, 박민수 (3행)      B: 박민수, 최지우 (2행)

(1) SELECT 이름 FROM A UNION     SELECT 이름 FROM B;
(2) SELECT 이름 FROM A UNION ALL SELECT 이름 FROM B;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>(1) 4행, (2) 5행<br/>
                <span class="label">해설: </span>UNION은 중복(박민수 1건)을 제거해 3+2−1 = 4행,
                UNION ALL은 중복을 포함해 그대로 3+2 = 5행. 참고로 INTERSECT는 1행, A MINUS B는 2행.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 SQL의 결과 행 수를 쓰시오. (EMP의 (부서, 직급) 조합은 6가지, 부서는 3종)</p>
            <pre>{`EMP의 (부서, 직급): (영업,사원) (영업,대리) (개발,대리) (개발,과장) (개발,사원) (인사,사원)

SELECT 부서, 직급, SUM(급여)
FROM   EMP
GROUP BY ROLLUP(부서, 직급);`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>10행<br/>
                <span class="label">해설: </span>ROLLUP(부서, 직급) = (부서,직급) 상세 6행 + 부서별 소계 3행 + 총계 1행 = 10행.
                같은 조건의 CUBE라면 직급별 소계 3행(사원·대리·과장)이 더해져 13행이 된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 SQL의 결과 행 수와, 한상혁 행의 지역 컬럼에 출력되는 값을 쓰시오.</p>
            <pre>{`EMP 부서: 영업 2명, 개발 3명, 인사 1명(한상혁)
DEPT 부서: 영업(서울), 개발(부산), 총무(서울)   -- '인사'는 DEPT에 없음

SELECT E.이름, D.지역
FROM   EMP E LEFT OUTER JOIN DEPT D ON E.부서 = D.부서;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>6행, NULL<br/>
                <span class="label">해설: </span>LEFT JOIN은 왼쪽 테이블 EMP의 6행이 모두 나온다.
                한상혁의 부서 '인사'는 DEPT에 없으므로 지역은 NULL. (총무는 EMP 쪽에 없어 결과에 나오지 않는다 —
                총무까지 나오려면 RIGHT 또는 FULL OUTER JOIN이어야 한다.)
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 SQL의 실행 결과(이름, 행 수)를 쓰시오.</p>
            <pre>{`EMP 부서: 김철수·이영희(영업), 박민수·최지우·정다은(개발), 한상혁(인사)
DEPT: 영업(서울), 개발(부산), 총무(서울)

SELECT 이름
FROM   EMP
WHERE  부서 IN (SELECT 부서 FROM DEPT WHERE 지역 = '서울');`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>김철수, 이영희 — 2행<br/>
                <span class="label">해설: </span>서브쿼리 결과는 지역이 서울인 부서 = (영업, 총무).
                EMP에서 부서가 영업 또는 총무인 사원은 영업의 김철수·이영희뿐이다(총무 소속 사원은 없다).
                IN은 목록 중 하나라도 일치하면 참, EXISTS는 값 비교 없이 행의 존재 여부만 검사한다는 차이도 기억.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">KIM에게 EMP 테이블의 조회 권한을 주되, KIM이 그 권한을 다른 사용자에게
            다시 부여할 수 있도록 하는 SQL이다. 괄호 ①~③에 알맞은 키워드를 쓰시오.</p>
            <pre>{`GRANT SELECT ( ① ) EMP ( ② ) KIM ( ③ ) GRANT OPTION;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① ON ② TO ③ WITH<br/>
                <span class="label">해설: </span>어순은 GRANT 권한 ON 객체 TO 사용자 WITH GRANT OPTION.
                회수는 REVOKE 권한 ON 객체 FROM 사용자이며, 연쇄 회수는 끝에 CASCADE를 붙인다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">부서별로 급여 순위를 매기되, 동점자는 같은 순위로 하고 다음 순위를
            건너뛰지 않는(1, 1, 2, ...) SQL이다. 괄호 ①, ②에 알맞은 키워드를 쓰시오.</p>
            <pre>{`SELECT 이름, 부서, 급여,
       ( ① )() OVER (( ② ) BY 부서 ORDER BY 급여 DESC) AS 순위
FROM   EMP;`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① DENSE_RANK ② PARTITION<br/>
                <span class="label">해설: </span>"건너뛰지 않는" 순위 함수는 DENSE_RANK(건너뛰면 RANK,
                동점 없이 고유 번호면 ROW_NUMBER). 그룹(부서)마다 순위를 새로 시작하게 하는 절은 PARTITION BY다.
              </div>
            </details>
          </div>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">NATURAL JOIN</span>
            <span class="kw">NOT IN과 NULL 함정</span>
            <span class="kw">GROUPING 함수</span>
            <span class="kw">NTILE</span>
            <span class="kw">LAG / LEAD</span>
            <span class="kw">FIRST_VALUE</span>
            <span class="kw">윈도 프레임 (ROWS / RANGE)</span>
            <span class="kw">계층형 질의 (CONNECT BY)</span>
            <span class="kw">머티리얼라이즈드 뷰</span>
            <span class="kw">옵티마이저와 실행 계획</span>
          </p>
        </section>

        <footer>응용 SQL과 집계성 SQL 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
