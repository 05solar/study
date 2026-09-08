import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './applied-sql.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '다음 학생 테이블에 대해 SQL을 실행했을 때 출력되는 두 값을 쉼표로 구분하여 순서대로 쓰시오.',
    code: `학생
이름   점수
민준   80
서연   90
도윤   NULL
하은   70
지호   NULL

SELECT COUNT(*), COUNT(점수) FROM 학생;`,
    answers: ['5, 3', '5와 3', '5 3'],
    answerLabel: 'COUNT(*) = 5, COUNT(점수) = 3',
    explanation:
      'COUNT(*)는 NULL 여부와 관계없이 모든 행을 세어 5가 된다. COUNT(점수)는 점수가 NULL인 도윤·지호 2행을 제외하고 세므로 3이다. 집계 함수는 NULL을 제외한다는 것이 핵심이다.',
  },
  {
    num: 2,
    question:
      '다음 상품 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오. (숫자만 입력)',
    code: `상품
상품명  가격
연필    100
공책    300
지우개  NULL
가방    500

SELECT AVG(가격) FROM 상품;`,
    answers: ['300'],
    answerLabel: '300',
    explanation:
      'AVG는 NULL을 제외하고 계산한다. (100 + 300 + 500) ÷ 3 = 900 ÷ 3 = 300. NULL 행까지 포함해 4로 나눈 225는 오답이다.',
  },
  {
    num: 3,
    question: '다음 주문 테이블에 대해 SQL을 실행했을 때 결과의 행 수를 쓰시오.',
    code: `주문
고객  상품  수량
A     P1    10
A     P2    20
B     P1    5
B     P3    15
C     P2    30

SELECT 고객, SUM(수량)
FROM   주문
GROUP BY 고객
HAVING SUM(수량) >= 25;`,
    answers: ['2', '2행', '2개'],
    answerLabel: '2행',
    explanation:
      '고객별 수량 합계는 A = 30, B = 20, C = 30이다. HAVING SUM(수량) >= 25 조건으로 B(20)가 걸러지고 A와 C만 남아 결과는 2행이다.',
  },
  {
    num: 4,
    question:
      '다음 성적 테이블에 대해 SQL을 실행했을 때, 점수가 85인 하은 행에 출력되는 RK와 DR 값을 쉼표로 구분하여 순서대로 쓰시오.',
    code: `성적
이름   점수
민준   95
서연   90
도윤   90
하은   85
지호   80

SELECT 이름,
       RANK()       OVER (ORDER BY 점수 DESC) AS RK,
       DENSE_RANK() OVER (ORDER BY 점수 DESC) AS DR
FROM   성적;`,
    answers: ['4, 3', '4와 3', '4 3'],
    answerLabel: 'RK = 4, DR = 3',
    explanation:
      '점수 내림차순으로 95(1위), 90 공동 2위 2명 다음에 하은이 온다. RANK는 동순위 인원수만큼 건너뛰어 1, 2, 2 다음이 4이고, DENSE_RANK는 건너뛰지 않아 1, 2, 2 다음이 3이다.',
  },
  {
    num: 5,
    question:
      '두 테이블에 대해 아래 (1)과 (2)의 결과 행 수를 쉼표로 구분하여 순서대로 쓰시오.',
    code: `동아리A: 민수, 지훈, 서연 (3행)      동아리B: 지훈, 서연, 하은 (3행)

(1) SELECT 이름 FROM 동아리A UNION     SELECT 이름 FROM 동아리B;
(2) SELECT 이름 FROM 동아리A UNION ALL SELECT 이름 FROM 동아리B;`,
    answers: ['4, 6', '4와 6', '4행, 6행', '4행 6행'],
    answerLabel: '(1) 4행, (2) 6행',
    explanation:
      'UNION은 중복(지훈, 서연 각 1건)을 제거해 민수·지훈·서연·하은의 4행, UNION ALL은 중복을 그대로 두어 3 + 3 = 6행이다. 겹치는 행 수를 먼저 세는 것이 요령이다.',
  },
  {
    num: 6,
    question: '다음 두 테이블에 대해 SQL을 실행했을 때 결과의 행 수를 쓰시오.',
    code: `T1: 10, 20, 30, 40, 50 (5행)      T2: 40, 50, 60 (3행)

SELECT 값 FROM T1
MINUS
SELECT 값 FROM T2;`,
    answers: ['3', '3행', '3개'],
    answerLabel: '3행',
    explanation:
      'MINUS(표준 EXCEPT)는 T1에는 있고 T2에는 없는 행만 남긴다. 공통인 40, 50이 빠지고 10, 20, 30의 3행이 결과다. 참고로 INTERSECT라면 40, 50의 2행이 된다.',
  },
  {
    num: 7,
    question: '다음 두 테이블에 대해 SQL을 실행했을 때 결과의 행 수를 쓰시오.',
    code: `회원                         주문
아이디                       주문번호  아이디
M1                           101       M1
M2                           102       M1
M3                           103       M3
M4
M5

SELECT M.아이디, O.주문번호
FROM   회원 M LEFT OUTER JOIN 주문 O ON M.아이디 = O.아이디;`,
    answers: ['6', '6행', '6개'],
    answerLabel: '6행',
    explanation:
      'LEFT JOIN은 왼쪽 테이블 회원의 행이 기준이다. M1은 주문이 2건이라 2행으로 늘어나고, M2·M4·M5는 짝이 없어도 주문번호 NULL로 1행씩 남는다. 2 + 1 + 1 + 1 + 1 = 6행이며, INNER JOIN이라면 짝이 있는 3행만 나온다.',
  },
  {
    num: 8,
    question:
      '다음 판매 테이블에 대해 SQL을 실행했을 때 결과의 행 수를 쓰시오.',
    code: `판매
지점  분기    금액
서울  1분기   100
서울  2분기   200
부산  1분기   150
부산  2분기   250
대전  1분기   300

SELECT 지점, 분기, SUM(금액)
FROM   판매
GROUP BY ROLLUP(지점, 분기);`,
    answers: ['9', '9행', '9개'],
    answerLabel: '9행',
    explanation:
      'ROLLUP(지점, 분기)는 (지점, 분기) 상세 그룹 5행 + 지점별 소계 3행(서울·부산·대전) + 총계 1행을 만든다. 5 + 3 + 1 = 9행이다. 소계·총계 행의 그룹핑 컬럼은 NULL로 표시된다.',
  },
  {
    num: 9,
    question: '다음 두 테이블에 대해 SQL을 실행했을 때 결과의 행 수를 쓰시오.',
    code: `직원                        부서
이름    부서코드            부서코드  지역
홍길동  D1                  D1        서울
김영희  D2                  D2        부산
이철수  D3                  D3        서울
박민준  D2
최수진  D1

SELECT 이름
FROM   직원
WHERE  부서코드 IN (SELECT 부서코드 FROM 부서 WHERE 지역 = '서울');`,
    answers: ['3', '3행', '3개'],
    answerLabel: '3행',
    explanation:
      '서브쿼리는 지역이 서울인 부서코드 (D1, D3)를 반환한다. 직원 중 부서코드가 D1 또는 D3인 사람은 홍길동, 이철수, 최수진의 3명이고 D2 소속인 김영희·박민준은 걸러진다.',
  },
  {
    num: 10,
    question:
      '다음 수강 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오. (숫자만 입력)',
    code: `수강
학번   과목
1001   자료구조
1002   데이터베이스
1003   자료구조
1004   운영체제
1005   데이터베이스
1006   자료구조

SELECT COUNT(DISTINCT 과목) FROM 수강;`,
    answers: ['3', '3개', '3행'],
    answerLabel: '3',
    explanation:
      'DISTINCT는 중복을 제거한다. 과목은 자료구조·데이터베이스·운영체제의 3종류이므로 결과 값은 3이다. DISTINCT가 없는 COUNT(과목)이라면 6이 된다.',
  },
  {
    num: 11,
    question: '다음 고객 테이블에 대해 SQL을 실행했을 때 결과의 행 수를 쓰시오.',
    code: `고객
이름
김지수
김민재
박지훈
이지은
김하늘

SELECT 이름 FROM 고객 WHERE 이름 LIKE '_지%';`,
    answers: ['3', '3행', '3개'],
    answerLabel: '3행',
    explanation:
      "'_'는 임의의 한 글자, '%'는 0글자 이상을 뜻하므로 '_지%'는 두 번째 글자가 '지'인 이름을 찾는다. 김지수·박지훈·이지은이 해당되어 3행이고, 김민재·김하늘은 걸러진다. '김%'였다면 김씨 3명이 나온다.",
  },
  {
    num: 12,
    question: '다음 도서 테이블에 대해 SQL을 실행했을 때 결과의 행 수를 쓰시오.',
    code: `도서
제목  가격
A     8000
B     12000
C     15000
D     20000
E     25000
F     30000

SELECT 제목 FROM 도서 WHERE 가격 BETWEEN 12000 AND 25000;`,
    answers: ['4', '4행', '4개'],
    answerLabel: '4행',
    explanation:
      'BETWEEN a AND b는 양쪽 경계값을 포함(a 이상 b 이하)한다. 12000, 15000, 20000, 25000의 4행이 해당하며 8000과 30000이 걸러진다. 경계 포함 여부가 단골 함정이다.',
  },
  {
    num: 13,
    question:
      'LEE에게 성적 테이블의 조회 권한을 부여하되, LEE가 그 권한을 다른 사용자에게 다시 부여할 수 있도록 하는 SQL이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `GRANT SELECT ON 성적 TO LEE (        ) GRANT OPTION;`,
    answers: ['WITH', '위드'],
    answerLabel: 'WITH',
    explanation:
      '재부여를 허용하는 옵션은 WITH GRANT OPTION이다. 어순은 GRANT 권한 ON 객체 TO 사용자 WITH GRANT OPTION으로 통째로 암기한다.',
  },
  {
    num: 14,
    question:
      'LEE의 성적 테이블 조회 권한을 회수하면서, LEE가 다른 사용자에게 부여한 권한까지 연쇄적으로 회수하는 SQL이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `REVOKE SELECT ON 성적 FROM LEE (        );`,
    answers: ['CASCADE', '캐스케이드', 'cascade'],
    answerLabel: 'CASCADE',
    explanation:
      'CASCADE는 권한을 받은 사용자가 WITH GRANT OPTION으로 제3자에게 다시 부여한 권한까지 연쇄 회수한다. GRANT는 TO, REVOKE는 FROM을 쓴다는 점도 같이 기억하자.',
  },
  {
    num: 15,
    question:
      '성적 테이블에서 점수가 90 이상인 학생만 조회하는 가상 테이블을 만드는 SQL이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `CREATE (        ) 고득점자 AS
  SELECT 이름, 점수
  FROM   성적
  WHERE  점수 >= 90;`,
    answers: ['VIEW', '뷰', 'view'],
    answerLabel: 'VIEW',
    explanation:
      '데이터를 저장하지 않고 SELECT 결과에 이름을 붙인 가상 테이블은 뷰(VIEW)이며, CREATE VIEW 이름 AS SELECT ... 형식으로 만든다. 조건 위반 갱신을 막으려면 끝에 WITH CHECK OPTION을 붙인다.',
  },
  {
    num: 16,
    question:
      '부서별로 그룹을 나누어 그 안에서 급여 내림차순으로 고유 번호를 매기는 SQL이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `SELECT 이름, 부서, 급여,
       ROW_NUMBER() OVER ((        ) BY 부서 ORDER BY 급여 DESC) AS 순번
FROM   직원;`,
    answers: ['PARTITION', '파티션', 'partition'],
    answerLabel: 'PARTITION',
    explanation:
      '윈도 함수에서 그룹을 나누어 그룹마다 순위·번호를 새로 시작하게 하는 절은 PARTITION BY다. GROUP BY와 달리 행 수가 줄지 않고 행마다 값이 붙는다.',
  },
  {
    num: 17,
    question:
      '부서별 평균 급여를 구한 뒤, 평균이 300 이상인 그룹만 남기는 SQL이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `SELECT 부서, AVG(급여)
FROM   직원
GROUP BY 부서
(        ) AVG(급여) >= 300;`,
    answers: ['HAVING', '해빙', 'having'],
    answerLabel: 'HAVING',
    explanation:
      '그룹핑 후 그룹 단위 조건을 지정하는 절은 HAVING이다. WHERE는 그룹핑 전에 개별 행을 거르는 절이라 집계 함수를 쓸 수 없다는 차이가 단골 출제 포인트다.',
  },
  {
    num: 18,
    question:
      '직원 테이블에서 부서가 개발인 행을 조회하여 직원백업 테이블에 한꺼번에 복사(삽입)하는 SQL이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `INSERT (        ) 직원백업
SELECT * FROM 직원 WHERE 부서 = '개발';`,
    answers: ['INTO', '인투', 'into'],
    answerLabel: 'INTO',
    explanation:
      '조회 결과를 다른 테이블에 삽입하는 구문은 INSERT INTO 대상테이블 SELECT ... 형식이다. VALUES 대신 SELECT가 오면 여러 행을 한 번에 복사할 수 있다.',
  },
  {
    num: 19,
    question:
      '직원 테이블을 급여가 높은 순서(내림차순)로 정렬하여 조회하는 SQL이다. 괄호 안에 들어갈 키워드를 쓰시오.',
    code: `SELECT 이름, 급여
FROM   직원
ORDER BY 급여 (        );`,
    answers: ['DESC', 'DESCENDING', '내림차순'],
    answerLabel: 'DESC',
    explanation:
      '내림차순 정렬 키워드는 DESC(DESCENDING)다. 오름차순은 ASC이며 생략 시 기본값이 ASC라는 점도 함께 기억한다.',
  },
  {
    num: 20,
    question:
      '두 SELECT 결과를 중복 제거 없이 그대로 이어 붙여 합치는 SQL이다. 괄호 안에 들어갈 집합 연산자를 쓰시오.',
    code: `SELECT 이름 FROM 동아리A
(        )
SELECT 이름 FROM 동아리B;`,
    answers: ['UNION ALL', 'UNIONALL', '유니온 올', '유니온올'],
    answerLabel: 'UNION ALL',
    explanation:
      '중복을 포함해 그대로 이어 붙이는 연산자는 UNION ALL이다. UNION은 중복을 제거하며 내부 정렬이 발생해 상대적으로 느리다. 교집합은 INTERSECT, 차집합은 MINUS(EXCEPT)다.',
  },
]

export default defineComponent({
  name: 'VariantAppliedSqlPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>
        <header class="hero">
          <h1>기출 변형 — 응용 SQL과 집계성 SQL</h1>
          <p>실기 최다 빈출인 SQL 결과값·구문 채우기 유형을 변형한 20문제입니다. 결과값 문제는
          숫자만 입력하면 됩니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>
        {QUESTIONS.map((q) => <QuizInput {...q} key={q.num} />)}
        <footer>응용 SQL과 집계성 SQL 기출 변형문제 · 2026-09</footer>
      </div>
    )
  },
})
