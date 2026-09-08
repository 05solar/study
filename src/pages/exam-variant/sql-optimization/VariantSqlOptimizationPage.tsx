import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './sql-optimization.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 설명에 해당하는 절차형 SQL의 종류를 쓰시오.',
    code: `· 일련의 SQL 작업을 하나의 단위로 묶어 DBMS에 저장해 두고,
  EXECUTE 또는 CALL로 명시적으로 호출하여 실행한다.
· 반환값이 없어도 되며, OUT 파라미터를 통해
  여러 개의 처리 결과를 호출자에게 전달할 수 있다.`,
    answers: ['프로시저', 'procedure', '저장 프로시저', 'stored procedure', '프로시져'],
    answerLabel: '프로시저 (Procedure)',
    explanation:
      '명시적 호출(EXECUTE/CALL)과 반환값이 없어도 된다는 점이 프로시저의 결정적 키워드다. RETURN으로 단일 값을 반드시 반환하면 함수, 이벤트 발생 시 자동 실행되면 트리거다.',
  },
  {
    num: 2,
    question: '다음 설명에 해당하는 절차형 SQL의 종류를 쓰시오.',
    code: `· SELECT 문 등 SQL 문 내부에서 값처럼 호출하여 사용한다.
· 프로시저와 달리 종료 시 RETURN을 통해
  단일 값을 반드시 반환한다.
· 주로 계산·변환 결과를 돌려받는 용도로 사용한다.`,
    answers: ['사용자 정의 함수', '사용자정의함수', '함수', 'function', 'user-defined function', 'udf'],
    answerLabel: '사용자 정의 함수 (User-Defined Function)',
    explanation:
      'RETURN으로 단일 값을 반드시 반환하고 SQL 문 안에서 호출된다는 점이 함수의 결정적 키워드다. 프로시저는 반환값이 없어도 되고 EXECUTE/CALL로 단독 호출한다.',
  },
  {
    num: 3,
    question: '다음 설명에 해당하는 절차형 SQL의 종류를 쓰시오.',
    code: `· 사용자가 직접 호출할 수 없다.
· 특정 테이블에 INSERT, UPDATE, DELETE 이벤트가 발생하면
  DBMS가 자동으로 실행한다.
· 데이터 변경 이력의 자동 기록, 무결성 유지 등에 사용한다.`,
    answers: ['트리거', 'trigger', '트리거(trigger)'],
    answerLabel: '트리거 (Trigger)',
    explanation:
      '"호출 불가"와 "이벤트 발생 시 자동 실행"이 트리거를 가리키는 결정적 키워드다. 절차형 SQL 3종 중 유일하게 명시적으로 호출할 수 없다.',
  },
  {
    num: 4,
    question:
      '사용자 정의 함수가 프로시저와 구분되는 결정적 요소로, 함수 머리부에 반환 타입과 함께 선언하고 본문에서 단일 값을 호출자에게 돌려줄 때 사용하는 키워드를 쓰시오.',
    answers: ['RETURN', 'return', '리턴', 'returns'],
    answerLabel: 'RETURN',
    explanation:
      '함수는 머리부에 RETURN 반환타입을 선언하고 본문에서 RETURN 값; 으로 반드시 단일 값을 반환한다. 프로시저에는 이런 반환 의무가 없다는 것이 두 절차형 SQL을 가르는 기준이다.',
  },
  {
    num: 5,
    question:
      '다음은 PL/SQL 블록의 기본 구조이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `DECLARE
    -- 변수·상수·커서 선언 (선택)
BEGIN
    -- 실행할 SQL 문과 제어문 (필수)
(        )
    -- 실행 중 발생한 오류에 대한 처리 (선택)
END;`,
    answers: ['EXCEPTION', 'exception', '익셉션', '예외 처리부', '예외처리부'],
    answerLabel: 'EXCEPTION',
    explanation:
      'PL/SQL 블록은 DECLARE(선언부) → BEGIN(실행부) → EXCEPTION(예외 처리부) → END 순서로 구성된다. BEGIN과 END는 필수, DECLARE와 EXCEPTION은 선택이다.',
  },
  {
    num: 6,
    question:
      '다음은 학생의 등급을 갱신하는 절차형 SQL이다. 반환값 없이 일련의 작업을 묶어 수행하는 이 절차형 SQL을 생성하기 위해 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `CREATE OR REPLACE (        ) up_grade(
    p_stdno IN NUMBER
)
IS
BEGIN
    UPDATE student SET grade = 'A' WHERE stdno = p_stdno;
    COMMIT;
END;`,
    answers: ['PROCEDURE', 'procedure', '프로시저', '프로시져'],
    answerLabel: 'PROCEDURE',
    explanation:
      '반환값 없이 UPDATE 작업을 묶어 수행하므로 프로시저이며, 생성 키워드는 CREATE OR REPLACE PROCEDURE다. 함수라면 RETURN 반환타입 선언이 있어야 한다.',
  },
  {
    num: 7,
    question:
      '다음 프로시저에서 부서별 급여 합계를 호출자에게 돌려주기 위해 괄호 안에 들어갈 파라미터 모드를 쓰시오.',
    code: `CREATE OR REPLACE PROCEDURE get_total(
    p_dept  IN NUMBER,        -- 부서 번호 (입력)
    p_total (      ) NUMBER   -- 집계 결과를 호출자에게 돌려주는 파라미터
)
IS
BEGIN
    SELECT SUM(sal) INTO p_total
      FROM emp
     WHERE deptno = p_dept;
END;`,
    answers: ['OUT', 'out', '아웃'],
    answerLabel: 'OUT',
    explanation:
      '파라미터 모드는 IN(입력), OUT(출력), INOUT(양방향)이다. 처리 결과를 호출자에게 돌려주는 출력 파라미터이므로 OUT을 지정한다.',
  },
  {
    num: 8,
    question:
      '다음은 사원 200번의 급여를 5% 인상하는 프로시저의 호출문이다. 저장된 프로시저를 명시적으로 호출할 때 사용하는 키워드를 괄호 안에 쓰시오.',
    code: `-- raise_salary 프로시저를 호출하여 사원 200번의 급여를 5% 인상
(        ) raise_salary(200, 5);`,
    answers: ['EXECUTE', 'execute', 'EXEC', 'exec', 'CALL', 'call', '이그제큐트'],
    answerLabel: 'EXECUTE (또는 EXEC, CALL)',
    explanation:
      '프로시저는 EXECUTE(축약형 EXEC) 또는 표준 SQL의 CALL로 명시적으로 호출한다. SQL 문 안에서 값처럼 호출되는 함수와 구분되는 지점이다.',
  },
  {
    num: 9,
    question:
      '다음은 상품 재고가 변경될 때마다 로그를 자동 기록하는 트리거이다. UPDATE 이벤트가 완료된 뒤에 트리거가 동작하도록 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `CREATE OR REPLACE TRIGGER trg_stock_log
(        ) UPDATE ON product   -- product 테이블의 UPDATE가 완료된 뒤 실행
FOR EACH ROW
BEGIN
    INSERT INTO stock_log(pno, old_qty, new_qty)
    VALUES (:OLD.pno, :OLD.qty, :NEW.qty);
END;`,
    answers: ['AFTER', 'after', '애프터'],
    answerLabel: 'AFTER',
    explanation:
      'BEFORE는 이벤트 실행 전, AFTER는 이벤트 실행 후에 트리거를 동작시킨다. "완료된 뒤 실행"이므로 AFTER를 지정한다.',
  },
  {
    num: 10,
    question:
      '다음은 회원 가입 시 가입 로그를 자동 기록하는 트리거이다. 방금 삽입된 새 행의 값을 참조하기 위해 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `CREATE OR REPLACE TRIGGER trg_join_log
AFTER INSERT ON member
FOR EACH ROW
BEGIN
    INSERT INTO join_log(mid, join_date)
    VALUES ((      ).mid, SYSDATE);   -- 방금 삽입된 새 행의 값 참조
END;`,
    answers: [':NEW', 'NEW', 'new', '뉴'],
    answerLabel: ':NEW',
    explanation:
      ':NEW는 변경 후의 새 값으로 INSERT·UPDATE 트리거에서 사용하고, :OLD는 변경 전의 기존 값으로 UPDATE·DELETE 트리거에서 사용한다. INSERT된 새 행이므로 :NEW로 참조한다.',
  },
  {
    num: 11,
    question:
      '다음은 사원 삭제 시 삭제 전 데이터를 백업 테이블에 자동 보관하는 트리거이다. 두 괄호에 공통으로 들어갈 키워드를 쓰시오.',
    code: `CREATE OR REPLACE TRIGGER trg_del_backup
BEFORE DELETE ON emp
FOR EACH ROW
BEGIN
    INSERT INTO emp_backup(empno, ename)
    VALUES ((      ).empno, (      ).ename);   -- 삭제되기 전의 기존 값 참조
END;`,
    answers: [':OLD', 'OLD', 'old', '올드'],
    answerLabel: ':OLD',
    explanation:
      'DELETE 트리거에서 삭제되기 전의 기존 값은 :OLD로 참조한다. DELETE에는 새 값이 없으므로 :NEW는 사용할 수 없다는 점도 함께 기억하자.',
  },
  {
    num: 12,
    question:
      '명시적 커서는 선언 → OPEN → ( ) → CLOSE의 4단계로 처리된다. 다음 코드의 괄호에 공통으로 들어갈, 결과 집합에서 한 행씩 읽어 변수에 저장하는 단계의 키워드를 쓰시오.',
    code: `DECLARE
    CURSOR c_emp IS SELECT ename FROM emp;   -- 1) 선언
    v_name emp.ename%TYPE;
BEGIN
    OPEN c_emp;                              -- 2) 열기
    LOOP
        (      ) c_emp INTO v_name;          -- 3) 한 행씩 읽기
        EXIT WHEN c_emp%NOTFOUND;
    END LOOP;
    CLOSE c_emp;                             -- 4) 닫기
END;`,
    answers: ['FETCH', 'fetch', '페치', '패치'],
    answerLabel: 'FETCH',
    explanation:
      '명시적 커서 처리 4단계는 선언(DECLARE) → OPEN → FETCH → CLOSE 순서다. FETCH는 커서가 가리키는 결과 집합에서 한 행씩 읽어 변수에 담는 단계다.',
  },
  {
    num: 13,
    question:
      '다음 커서 처리 코드에서 더 이상 읽을 행이 없을 때 반복을 종료하기 위해 괄호 안에 들어갈 커서 속성을 쓰시오.',
    code: `OPEN c_std;
LOOP
    FETCH c_std INTO v_name;
    EXIT WHEN c_std(        );   -- 직전 FETCH가 행을 가져오지 못하면 TRUE
END LOOP;
CLOSE c_std;`,
    answers: ['%NOTFOUND', 'NOTFOUND', 'notfound', '%notfound', '낫파운드'],
    answerLabel: '%NOTFOUND',
    explanation:
      '%NOTFOUND는 직전 FETCH가 행을 가져오지 못했을 때 TRUE가 되어 반복 종료 조건으로 쓰인다. 반대 속성인 %FOUND, 읽은 행 수를 세는 %ROWCOUNT와 구분해 두자.',
  },
  {
    num: 14,
    question: '다음 설명에 해당하는 옵티마이저의 유형을 영문 약어로 쓰시오.',
    code: `· 미리 정해진 우선순위 규칙에 따라 실행 경로를 선택한다.
· 인덱스가 존재하면 데이터의 실제 분포와 무관하게
  인덱스를 우선 사용한다.
· 단순하고 예측 가능하지만 데이터 실태를 반영하지 못한다.`,
    answers: ['RBO', 'rbo', '규칙 기반 옵티마이저', '규칙기반 옵티마이저', 'rule-based optimizer', 'rule based optimizer'],
    answerLabel: 'RBO (Rule-Based Optimizer)',
    explanation:
      '"정해진 규칙·우선순위"가 보이면 RBO(규칙 기반), "통계 정보·비용"이 보이면 CBO(비용 기반)다. 현대 DBMS의 기본은 CBO다.',
  },
  {
    num: 15,
    question:
      'CBO(비용 기반 옵티마이저)가 실행 계획의 비용(Cost)을 계산할 때 근거로 삼는, 테이블의 행 수·데이터 분포·인덱스 상태 등의 정보를 무엇이라 하는지 쓰시오.',
    answers: ['통계 정보', '통계정보', 'statistics', '통계', '통계자료'],
    answerLabel: '통계 정보 (Statistics)',
    explanation:
      'CBO는 ANALYZE 등으로 수집한 통계 정보를 바탕으로 비용이 가장 낮은 실행 경로를 선택한다. 통계 정보가 오래되면 옵티마이저의 판단이 틀어지므로 최신으로 유지해야 한다.',
  },
  {
    num: 16,
    question:
      'SQL을 실제로 실행하지 않고 옵티마이저가 수립한 실행 계획(테이블 접근 방식, 인덱스 사용 여부, 조인 순서)을 미리 확인하는 Oracle 명령어를 쓰시오.',
    code: `(              ) FOR
SELECT * FROM emp WHERE deptno = 10;

SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);`,
    answers: ['EXPLAIN PLAN', 'explain plan', 'EXPLAINPLAN', '익스플레인 플랜', 'EXPLAIN'],
    answerLabel: 'EXPLAIN PLAN',
    explanation:
      'EXPLAIN PLAN은 SQL을 실행하지 않은 채 옵티마이저의 실행 계획을 계획 테이블에 기록하며, DBMS_XPLAN.DISPLAY로 조회한다. SQL 튜닝의 분석 단계에서 사용한다.',
  },
  {
    num: 17,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `옵티마이저가 수립한 실행 계획이 최적이 아니라고 판단될 때,
개발자가 SQL 문에 주석 형태로 기술하여 인덱스 사용, 조인 순서,
조인 방식 등 실행 계획을 직접 유도하는 지시어.
예) SELECT /*+ INDEX(emp idx_emp_no) */ ...`,
    answers: ['힌트', 'hint', '옵티마이저 힌트', 'optimizer hint'],
    answerLabel: '힌트 (Hint)',
    explanation:
      '힌트는 주석 형태로 옵티마이저의 판단을 유도하는 지시어다. 대표적으로 INDEX(인덱스 사용), FULL(전체 스캔), ORDERED(조인 순서 고정), USE_NL(중첩 루프 조인) 등이 있다.',
  },
  {
    num: 18,
    question:
      '다음 WHERE 절 중 ename 컬럼에 걸린 인덱스를 사용할 수 없는 것을 하나 골라 번호를 쓰시오. (ename, empno, sal 컬럼에는 각각 단일 컬럼 인덱스가 존재한다)',
    code: `① WHERE empno = 7788
② WHERE ename LIKE '이%'
③ WHERE SUBSTR(ename, 1, 1) = '이'
④ WHERE sal BETWEEN 1000 AND 2000`,
    answers: ['③', '3', '㉢', '3번'],
    answerLabel: '③',
    explanation:
      '③은 인덱스 컬럼에 함수를 적용해 가공했으므로 인덱스를 타지 못하고 전체 스캔이 발생한다. 등가 비교(①), 후행 와일드카드(②), 범위 검색(④)은 모두 인덱스를 사용할 수 있다.',
  },
  {
    num: 19,
    question: '다음 설명에 해당하는 인덱스의 종류를 쓰시오.',
    code: `· 성별, 등급처럼 값의 종류가 적어 카디널리티가 낮은
  (중복이 많은) 컬럼에 적합하다.
· 각 값마다 비트열을 만들어 저장하며,
  갱신이 잦은 환경에는 잠금 부담 때문에 부적합하다.`,
    answers: ['비트맵 인덱스', '비트맵인덱스', 'bitmap index', '비트맵', 'bitmap', '비트맵 색인'],
    answerLabel: '비트맵 인덱스 (Bitmap Index)',
    explanation:
      '"카디널리티가 낮은 컬럼 + 비트열(비트맵)"이 결정적 키워드다. 반대로 범위·등가 검색에 두루 강한 DBMS의 기본 인덱스는 B-트리 인덱스다.',
  },
  {
    num: 20,
    question: '다음 설명에 해당하는 용어를 쓰시오.',
    code: `월별로 파티션을 나눈 판매 테이블에서 3월 조건으로 조회하면,
옵티마이저가 조건절을 분석하여 관련 없는 파티션을
검색 대상에서 제외하고 3월 파티션만 읽는다.
이렇게 스캔 범위를 줄이는 최적화 기법이다.`,
    answers: ['파티션 프루닝', '파티션프루닝', 'partition pruning', '프루닝', 'pruning', '파티션 가지치기'],
    answerLabel: '파티션 프루닝 (Partition Pruning)',
    explanation:
      '파티션 프루닝은 옵티마이저가 조건절을 보고 불필요한 파티션을 검색 대상에서 잘라내(pruning) 스캔 범위를 줄이는 기법이다. 파티션 키가 조건절에 포함되어야 동작한다.',
  },
]

export default defineComponent({
  name: 'VariantSqlOptimizationPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>
        <header class="hero">
          <h1>기출 변형 — 절차형 SQL과 SQL 최적화</h1>
          <p>실기 기출 유형을 변형한 20문제입니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>
        {QUESTIONS.map((q) => <QuizInput {...q} key={q.num} />)}
        <footer>절차형 SQL과 SQL 최적화 기출 변형문제 · 2026-09</footer>
      </div>
    )
  },
})
