import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './data-usage.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '다음 설명에 해당하는 스키마의 이름을 쓰시오.\n' +
      '"개별 사용자나 응용 프로그래머의 관점에서 필요한 부분만 정의한 데이터베이스의 논리적 구조로, ' +
      '하나의 데이터베이스에 여러 개 존재할 수 있으며 서브 스키마(Sub Schema)라고도 부른다."',
    answers: ['외부 스키마', '외부스키마', 'external schema', '익스터널 스키마', '외부'],
    answerLabel: '외부 스키마(External Schema)',
    explanation:
      '"사용자·응용 프로그래머 관점 + 여러 개 존재 + 서브 스키마"가 외부 스키마의 결정적 단서다. 조직 전체의 논리 구조로 하나만 존재하면 개념 스키마, 물리적 저장 구조면 내부 스키마다.',
  },
  {
    num: 2,
    question:
      '다음 설명에 해당하는 스키마의 이름을 쓰시오.\n' +
      '"조직(기관) 전체의 관점에서 데이터베이스 전체의 논리적 구조를 정의하며, 접근 권한·보안·무결성 규칙에 대한 명세를 포함한다. ' +
      '데이터베이스당 오직 하나만 존재하며, 일반적으로 스키마라고 하면 이것을 가리킨다."',
    answers: ['개념 스키마', '개념스키마', 'conceptual schema', '컨셉추얼 스키마', '개념'],
    answerLabel: '개념 스키마(Conceptual Schema)',
    explanation:
      '"전체의 논리적 구조 · 하나만 존재"가 개념 스키마의 핵심 단서다. ANSI/SPARC 3계층에서 외부 스키마와 내부 스키마 사이에 위치한다.',
  },
  {
    num: 3,
    question:
      '다음 설명에 해당하는 스키마의 이름을 쓰시오.\n' +
      '"시스템 프로그래머나 시스템 설계자의 관점에서 데이터가 저장 장치에 실제로 저장되는 물리적 구조를 정의한다. ' +
      '레코드의 형식, 저장 순서, 인덱스의 유무 등을 나타낸다."',
    answers: ['내부 스키마', '내부스키마', 'internal schema', '인터널 스키마', '내부'],
    answerLabel: '내부 스키마(Internal Schema)',
    explanation:
      '"물리적 저장 구조 · 레코드 형식 · 인덱스"가 내부 스키마의 단서다. 내부 스키마가 변해도 개념·외부 스키마가 영향받지 않는 성질을 물리적 데이터 독립성이라 한다.',
  },
  {
    num: 4,
    question: '다음은 데이터베이스의 정의 4가지 중 일부이다. 괄호 ①에 들어갈 용어를 쓰시오.',
    code: `· ( ① ) 데이터 : 같은 데이터가 원칙적으로 중복되지 않도록 중복을
                  최소화하여 모아 둔 데이터
· 저장된 데이터  : 컴퓨터가 접근할 수 있는 저장 매체에 보관된 데이터
· 운영 데이터    : 조직의 고유 업무 수행에 반드시 필요한 데이터
· 공용 데이터    : 여러 응용 시스템이 공동으로 소유·유지·이용하는 데이터`,
    answers: ['통합된', '통합', '통합된 데이터', '통합 데이터', 'integrated', 'integrated data'],
    answerLabel: '통합된(Integrated)',
    explanation:
      '데이터베이스의 정의 4가지는 통합된(Integrated)·저장된(Stored)·운영(Operational)·공용(Shared) 데이터다. "중복 최소화"가 통합된 데이터의 핵심 연결 고리다.',
  },
  {
    num: 5,
    question:
      'DBMS의 필수 기능 3가지 중, 데이터의 무결성 유지·보안(권한 검사)·병행 제어(동시성)·장애 회복을 통해 ' +
      '데이터베이스의 내용을 항상 정확하고 안전하게 유지하는 기능의 이름을 쓰시오.',
    answers: ['제어 기능', '제어기능', '제어', 'control', '컨트롤 기능'],
    answerLabel: '제어(Control) 기능',
    explanation:
      'DBMS 필수 기능 3가지는 정의(Definition)·조작(Manipulation)·제어(Control)다. 무결성·보안·병행 제어·회복 네 키워드가 나오면 제어 기능이다.',
  },
  {
    num: 6,
    question: '다음 보기의 SQL 명령어들이 공통으로 속하는 SQL 분류의 명칭을 쓰시오.',
    code: `[보기] COMMIT, ROLLBACK, SAVEPOINT`,
    answers: ['TCL', '트랜잭션 제어어', 'transaction control language', '티씨엘'],
    answerLabel: 'TCL(Transaction Control Language, 트랜잭션 제어어)',
    explanation:
      '트랜잭션의 확정(COMMIT)·취소(ROLLBACK)·저장점(SAVEPOINT)을 다루는 명령어는 TCL이다. 권한을 다루는 GRANT·REVOKE(DCL)와 혼동하지 말 것.',
  },
  {
    num: 7,
    question:
      '테이블의 구조는 남겨 둔 채 모든 행을 한 번에 빠르게 제거하며, DELETE와 달리 원칙적으로 ROLLBACK으로 복구할 수 없는 ' +
      'TRUNCATE 명령어가 속하는 SQL 분류의 명칭을 쓰시오.',
    answers: ['DDL', '데이터 정의어', 'data definition language', '디디엘'],
    answerLabel: 'DDL(Data Definition Language, 데이터 정의어)',
    explanation:
      'TRUNCATE는 DELETE(DML)와 달리 DDL로 분류된다. DELETE는 행 단위 삭제로 롤백이 가능하지만, TRUNCATE는 전체 행을 즉시 제거하며 DROP은 테이블 구조 자체를 제거한다.',
  },
  {
    num: 8,
    question: '다음 보기의 SQL 명령어 중 DCL(데이터 제어어)에 해당하는 것을 모두 골라 쓰시오.',
    code: `[보기] ALTER, GRANT, DELETE, TRUNCATE, REVOKE, SELECT, SAVEPOINT`,
    answers: ['GRANT, REVOKE', 'REVOKE, GRANT', 'GRANT REVOKE', 'REVOKE GRANT'],
    answerLabel: 'GRANT, REVOKE',
    explanation:
      '권한 부여(GRANT)와 권한 회수(REVOKE) 두 개만 DCL이다. ALTER·TRUNCATE는 DDL, DELETE·SELECT는 DML, SAVEPOINT는 TCL이다.',
  },
  {
    num: 9,
    question:
      '다음 설명에 해당하는 절차형 SQL 개체의 이름을 쓰시오.\n' +
      '"사용자가 직접 호출하지 않으며, 테이블에 INSERT·UPDATE·DELETE 등의 이벤트가 발생하면 DBMS가 자동으로 실행한다. ' +
      '데이터 무결성 유지나 변경 이력(로그)의 자동 기록에 활용된다."',
    answers: ['트리거', 'trigger'],
    answerLabel: '트리거(Trigger)',
    explanation:
      '"이벤트 발생 시 자동 실행"이 트리거의 결정적 단서다. 트리거 안에서는 원칙적으로 COMMIT·ROLLBACK 같은 TCL을 사용할 수 없다는 점도 함께 기억하자.',
  },
  {
    num: 10,
    question:
      '다음 설명에 해당하는 절차형 SQL 개체의 이름을 쓰시오.\n' +
      '"일련의 SQL 작업을 하나로 묶어 DBMS에 저장해 두고, EXECUTE 또는 CALL 문으로 명시적으로 호출하여 실행한다. ' +
      '반환값이 없어도 되며, 필요하면 OUT 매개변수로 여러 값을 돌려줄 수 있다."',
    answers: ['프로시저', 'procedure', '저장 프로시저', '스토어드 프로시저', 'stored procedure'],
    answerLabel: '프로시저(Procedure)',
    explanation:
      '"EXECUTE/CALL로 명시적 호출 + 반환값 필수 아님"이 프로시저의 단서다. 이벤트로 자동 실행되면 트리거, RETURN으로 단일 값을 반드시 반환하면 함수다.',
  },
  {
    num: 11,
    question:
      '다음 설명에 해당하는 절차형 SQL 개체의 이름을 쓰시오.\n' +
      '"SELECT 등 SQL 문장 안에서 호출되어 계산·변환 결과를 활용하며, RETURN 문을 이용해 단일 값을 반드시 반환해야 한다."',
    answers: ['함수', '사용자 정의 함수', 'function', '사용자정의함수', 'user defined function'],
    answerLabel: '사용자 정의 함수(Function)',
    explanation:
      '"SQL 문장 안에서 호출 + RETURN으로 단일 값 반환 필수"가 함수의 단서다. 프로시저는 EXECUTE/CALL로 독립 호출되고 반환값이 없어도 된다는 점에서 구분된다.',
  },
  {
    num: 12,
    question: '다음은 데이터 웨어하우스(Data Warehouse)의 4가지 특징이다. 괄호 ①에 들어갈 특징을 쓰시오.',
    code: `· 주제 지향성 (Subject-Oriented) : 업무 기능이 아닌 주제 중심으로 데이터 구성
· 통합성     (Integrated)       : 여러 운영 시스템의 데이터를 일관된 형식으로 통합
· 시계열성   (Time-Variant)     : 일정 기간의 이력 데이터를 시간 축으로 보관
· ( ① )                        : 일단 적재된 데이터는 갱신·삭제 없이 조회 위주로 사용`,
    answers: ['비휘발성', '비휘발', 'non-volatile', 'nonvolatile', '넌볼러타일'],
    answerLabel: '비휘발성(Non-Volatile)',
    explanation:
      'DW의 4가지 특징은 주제 지향성·통합성·시계열성·비휘발성이다. "적재 후 갱신·삭제 없이 읽기 위주"라는 표현이 비휘발성의 단서다.',
  },
  {
    num: 13,
    question:
      '다음 설명에 해당하는 OLAP 연산의 이름을 쓰시오.\n' +
      '"지점별 일 매출처럼 작은 단위로 조회하던 데이터를 분기별 매출처럼 상위 레벨(큰 단위)로 요약·집계하여 조회한다."',
    answers: ['Roll-up', '롤업', 'roll up', 'rollup'],
    answerLabel: 'Roll-up(롤업)',
    explanation:
      '작은 단위에서 큰 단위로 요약 수준을 올리면 Roll-up, 반대로 상세화하면 Drill-down이다. 두 연산은 요약 수준의 상하 이동이라는 짝으로 기억하자.',
  },
  {
    num: 14,
    question:
      '다음 설명에 해당하는 OLAP 연산의 이름을 쓰시오.\n' +
      '"다차원 큐브에서 1분기·서울·가전처럼 여러 차원에 동시에 조건을 지정하여 관심 있는 부분 큐브만 잘라내어 조회한다."',
    answers: ['Dice', '다이스'],
    answerLabel: 'Dice(다이스)',
    explanation:
      '여러 차원에 조건을 걸어 부분 큐브를 잘라내면 Dice, 한 차원의 값 하나만 고정해 2차원 조각을 잘라내면 Slice다. 행과 열의 축을 회전하는 연산은 Pivot이다.',
  },
  {
    num: 15,
    question:
      '다음 설명에 해당하는 OLAP 연산의 이름을 쓰시오.\n' +
      '"지역×월로 배치된 보고서를 월×지역으로 바꾸는 것처럼, 보고서의 행과 열(축)을 회전하여 데이터를 바라보는 관점을 바꾼다."',
    answers: ['Pivot', '피벗', '피봇'],
    answerLabel: 'Pivot(피벗)',
    explanation:
      '축 회전은 Pivot이다. 요약/상세화는 Roll-up/Drill-down, 잘라내기는 Slice(한 차원 고정)/Dice(다차원 조건)로 구분하면 다섯 연산이 정리된다.',
  },
  {
    num: 16,
    question:
      '다음 설명에 해당하는 용어를 쓰시오.\n' +
      '"전사적으로 구축된 데이터 웨어하우스에서 영업팀·인사팀처럼 특정 부서나 특정 주제에 필요한 데이터만 추출하여 만든 소규모 데이터 웨어하우스이다."',
    answers: ['데이터 마트', '데이터마트', 'data mart'],
    answerLabel: '데이터 마트(Data Mart)',
    explanation:
      '"특정 부서·주제용 소규모 DW"가 데이터 마트의 정의다. 전사적·통합적이면 데이터 웨어하우스, 원본 그대로 대량 저장하면 데이터 레이크다.',
  },
  {
    num: 17,
    question:
      '다음 설명에 해당하는 용어를 쓰시오.\n' +
      '"정형·비정형을 가리지 않고 데이터를 가공하지 않은 원본(Raw) 형태 그대로 대량으로 저장해 두는 저장소로, ' +
      '데이터를 읽는 시점에 스키마를 적용(Schema-on-Read)한다."',
    answers: ['데이터 레이크', '데이터레이크', 'data lake'],
    answerLabel: '데이터 레이크(Data Lake)',
    explanation:
      '"원본 그대로 + Schema-on-Read"가 데이터 레이크의 단서다. 데이터 웨어하우스는 미리 정해진 형식으로 변환(ETL)하여 적재하는 점과 대비된다.',
  },
  {
    num: 18,
    question:
      '다음 설명에 해당하는 용어를 영문 약어로 쓰시오.\n' +
      '"일상 업무 트랜잭션 처리(OLTP)와 달리, 이용자가 대화식으로 다차원 데이터에 접근하여 요약·집계 정보를 분석함으로써 의사결정을 지원하는 온라인 분석 처리 방식이다."',
    answers: ['OLAP', '올랩', '온라인 분석 처리', 'online analytical processing'],
    answerLabel: 'OLAP(Online Analytical Processing)',
    explanation:
      '업무 처리(주문·이체 등 짧은 트랜잭션 다수)는 OLTP, 다차원 분석·의사결정 지원은 OLAP이다. OLAP은 대량 SELECT·집계 중심으로 동작한다.',
  },
  {
    num: 19,
    question:
      '빅데이터의 특성을 나타내는 3V 중, 정형·반정형·비정형 등 다양한 형태의 데이터가 존재함을 의미하는 요소를 영문 용어로 쓰시오.',
    answers: ['Variety', '다양성', '버라이어티'],
    answerLabel: 'Variety(다양성)',
    explanation:
      '3V는 Volume(규모)·Velocity(속도)·Variety(다양성)다. 데이터 형태의 다양함은 Variety이며, Veracity(정확성)·Value(가치)를 더해 5V로 확장하기도 한다.',
  },
  {
    num: 20,
    question:
      '다음 설명에 해당하는 용어를 쓰시오.\n' +
      '"하둡(Hadoop)에서 분산 저장된 대용량 데이터를 Map(분할 처리) 단계와 Reduce(집계) 단계의 두 단계로 나누어 병렬 처리하는 프로그래밍 모델이다."',
    answers: ['MapReduce', '맵리듀스', '맵 리듀스', 'map reduce'],
    answerLabel: 'MapReduce(맵리듀스)',
    explanation:
      '하둡은 "저장 = HDFS, 처리 = MapReduce"로 짝지어 기억한다. 참고로 대량 데이터에서 숨겨진 패턴·규칙을 찾아내는 기술은 데이터 마이닝(Data Mining)이다.',
  },
]

export default defineComponent({
  name: 'VariantDataUsagePage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 데이터 기초 활용과 데이터베이스 종류</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 지문·보기·조건을 바꾼 변형 문제 20문항입니다.
            정답을 입력하고 제출하면 채점되며, 맞으면 해설이, 틀리면 정답과 해설이 함께 표시됩니다.
          </p>
        </header>

        {QUESTIONS.map((q) => (
          <QuizInput
            key={q.num}
            num={q.num}
            question={q.question}
            code={q.code}
            answers={q.answers}
            answerLabel={q.answerLabel}
            explanation={q.explanation}
          />
        ))}

        <footer>기출 변형문제 — 데이터 기초 활용과 데이터베이스 종류 · 2026-09</footer>
      </div>
    )
  },
})
