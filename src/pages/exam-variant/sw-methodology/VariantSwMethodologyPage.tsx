import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './sw-methodology.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '보엠(Boehm)이 제안한 나선형 모델은 4단계를 나선처럼 반복하며 진행된다. 다음 괄호 안에 들어갈 단계의 이름을 쓰시오.',
    code: `계획 및 정의 → 위험 분석 → (        ) → 고객 평가`,
    answers: ['공학적 개발', '공학적개발', '개발 및 검증', '공학적 개발 단계'],
    answerLabel: '공학적 개발',
    explanation:
      '나선형 모델의 4단계는 계획 및 정의 → 위험 분석 → 공학적 개발 → 고객 평가 순서다. 위험 분석 다음에는 실제 개발과 검증을 수행하는 공학적 개발 단계가 온다.',
  },
  {
    num: 2,
    question:
      '나선형 모델이 폭포수 모델·프로토타입 모델과 구별되는 가장 큰 특징으로, 프로젝트의 위험 요소를 식별하고 대안을 평가하는 단계(활동)의 이름을 쓰시오.',
    answers: ['위험 분석', '위험분석', 'risk analysis', '리스크 분석'],
    answerLabel: '위험 분석 (Risk Analysis)',
    explanation:
      '나선형 모델은 폭포수와 프로토타입의 장점에 위험 분석을 추가한 모델이다. 문제에 "위험 분석"이라는 키워드가 보이면 무조건 나선형 모델을 떠올리면 된다.',
  },
  {
    num: 3,
    question:
      '다음 설명에 해당하는 소프트웨어 생명주기(SDLC) 모델의 이름을 쓰시오.',
    code: `· 가장 오래된 고전적 모델로, 각 단계를 확실히 마무리한 뒤
  다음 단계로 넘어가는 선형 순차적 모델이다.
· 단계별 산출물(문서화)이 체계적이어서 관리가 쉽다.
· 개발 도중 요구사항 변경을 반영하기 어렵고,
  결과물을 마지막에야 확인할 수 있어 오류 발견이 늦다.`,
    answers: ['폭포수', '폭포수 모델', 'waterfall', 'waterfall model', '워터폴', '워터폴 모델'],
    answerLabel: '폭포수 모델 (Waterfall Model)',
    explanation:
      '선형 순차적 진행과 체계적 문서화, 변경 반영 곤란이 폭포수 모델의 핵심 키워드다. "시제품·피드백"이 나오면 프로토타입, "위험 분석"이 나오면 나선형과 구분한다.',
  },
  {
    num: 4,
    question:
      '본격적인 개발에 앞서 시제품을 빠르게 만들어 사용자에게 보여 주고 피드백을 받음으로써, 요구사항을 미리 확인·보완할 수 있게 하는 SDLC 모델의 이름을 쓰시오.',
    answers: ['프로토타입', '프로토타입 모델', 'prototype', 'prototype model', '원형 모델', '원형'],
    answerLabel: '프로토타입 모델 (Prototype Model)',
    explanation:
      '프로토타입(원형) 모델은 시제품으로 요구사항 도출이 쉬워 폭포수 모델의 단점을 보완한다. 시제품을 최종 제품으로 오해할 수 있다는 단점도 함께 기억해 두자.',
  },
  {
    num: 5,
    question:
      '애자일 선언문(2001)의 4가지 가치에 대한 다음 문장에서 괄호 안에 들어갈 내용을 쓰시오.',
    code: `공정과 도구보다 개인과 상호작용을,
포괄적인 문서보다 (            )를,
계약 협상보다 고객과의 협력을,
계획을 따르기보다 변화에 대응하기를 더 가치 있게 여긴다.`,
    answers: ['동작하는 소프트웨어', '작동하는 소프트웨어', 'working software', '동작하는 sw'],
    answerLabel: '동작하는 소프트웨어',
    explanation:
      '애자일 선언문의 4가지 가치는 개인과 상호작용, 동작하는 소프트웨어, 고객과의 협력, 변화에 대응이다. 왼쪽 항목도 가치가 있지만 오른쪽에 더 높은 가치를 둔다는 표현까지 기억하자.',
  },
  {
    num: 6,
    question:
      'XP(eXtreme Programming)의 5가지 가치 중 다음 보기에 제시되지 않은 나머지 1가지를 쓰시오.',
    code: `용기(Courage), 의사소통(Communication), 피드백(Feedback), 존중(Respect)`,
    answers: ['단순성', 'simplicity', '단순함', '심플리시티'],
    answerLabel: '단순성 (Simplicity)',
    explanation:
      'XP의 5가지 가치는 용기, 단순성, 의사소통, 피드백, 존중이다. 12가지 실천 사항(짝 프로그래밍, TDD, 리팩토링 등)과 혼동하지 않도록 구분해서 암기한다.',
  },
  {
    num: 7,
    question:
      '스크럼(Scrum)에서 스프린트의 남은 작업량을 세로축, 시간의 경과를 가로축으로 하여 우하향 그래프로 표현함으로써 진척 상황과 완료 예상 시점을 시각적으로 보여 주는 차트의 이름을 쓰시오.',
    answers: ['번다운 차트', '번다운차트', 'burn-down chart', 'burndown chart', '번 다운 차트'],
    answerLabel: '번다운 차트 (Burn-down Chart)',
    explanation:
      '번다운 차트는 남은 백로그(작업량)가 시간이 지날수록 줄어드는 모습을 그려 이상적인 진행선과 실제 진행을 비교한다. "우하향 그래프"가 판별 키워드다.',
  },
  {
    num: 8,
    question:
      '스크럼(Scrum)에서 실제 개발 작업이 이루어지는 2~4주 정도의 짧은 반복 개발 주기를 무엇이라 하는지 쓰시오.',
    answers: ['스프린트', 'sprint'],
    answerLabel: '스프린트 (Sprint)',
    explanation:
      '스프린트는 스크럼의 고정된 반복 주기로, 스프린트 백로그의 항목을 개발해 동작하는 증분을 만든다. 매일 15분간 진행하는 회의는 일일 스크럼(Daily Scrum)으로 구분한다.',
  },
  {
    num: 9,
    question:
      '스크럼의 3가지 역할 중 요구사항의 우선순위를 정하고 제품 백로그를 관리하며, 백로그에 대한 최종 책임을 지는 역할의 이름을 쓰시오.',
    answers: ['제품 책임자', '제품책임자', 'product owner', 'po', '프로덕트 오너'],
    answerLabel: '제품 책임자 (Product Owner, PO)',
    explanation:
      '제품 백로그의 우선순위와 최종 책임은 제품 책임자(PO)의 몫이다. 스크럼 마스터는 장애물을 제거하는 조력자일 뿐 백로그를 관리하거나 팀을 통제하지 않는다는 점에서 구분된다.',
  },
  {
    num: 10,
    question:
      '프로젝트의 규모, 보유 기술, 법적 제약사항 등 상황과 특성에 맞도록 이미 정의된 소프트웨어 개발 방법론의 절차·사용 기법·산출물 등을 수정·보완하여 적용하는 활동을 무엇이라 하는지 쓰시오.',
    answers: ['테일러링', 'tailoring', '방법론 테일러링'],
    answerLabel: '테일러링 (Tailoring)',
    explanation:
      '테일러링은 기성복을 수선하듯 표준 방법론을 프로젝트에 맞게 커스터마이징하는 활동이다. "정의된 방법론을 수정·보완하여 적용"이라는 표현이 판별 키워드다.',
  },
  {
    num: 11,
    question:
      '방법론 테일러링의 고려 기준 중 "법적 제약사항"과 "표준 품질 기준"은 내부적 기준과 외부적 기준 가운데 어느 쪽에 해당하는지 쓰시오.',
    answers: ['외부적 기준', '외부적기준', '외부 기준', '외부적', '외부'],
    answerLabel: '외부적 기준',
    explanation:
      '외부적 기준은 법적 제약사항과 표준 품질 기준 딱 2가지뿐이다. 목표 환경, 요구사항, 프로젝트 규모, 보유 기술은 모두 내부적 기준이라는 점을 세트로 기억하자.',
  },
  {
    num: 12,
    question:
      'LOC 기법으로 어떤 소프트웨어의 원시 코드 라인 수를 측정하였다. 다음 측정 결과를 이용하여 예측치(라인 수)를 구하시오.',
    code: `낙관치 :  5,000 라인
기대치 :  8,000 라인
비관치 : 14,000 라인

예측치 = (낙관치 + 4 × 기대치 + 비관치) / 6`,
    answers: ['8500', '8,500', '8500라인', '8500 라인', '8500 loc'],
    answerLabel: '8,500라인',
    explanation:
      '예측치 = (5,000 + 4×8,000 + 14,000) / 6 = (5,000 + 32,000 + 14,000) / 6 = 51,000 / 6 = 8,500라인. 기대치에만 가중치 4를 곱한 뒤 6으로 나눈다는 공식을 정확히 기억하자.',
  },
  {
    num: 13,
    question:
      'LOC 기법으로 산정한 예측치가 36,000라인인 프로젝트가 있다. 개발자 1인당 월평균 300라인을 생산할 수 있고 6명을 투입한다고 할 때, 개발 기간은 몇 개월인지 구하시오.',
    answers: ['20개월', '20', '20 개월'],
    answerLabel: '20개월',
    explanation:
      'Man-Month = 36,000 / 300 = 120인월이고, 개발 기간 = Man-Month / 투입 인원 = 120 / 6 = 20개월이다. 노력(인월)을 먼저 구한 뒤 인원으로 나누는 2단계 계산임에 주의한다.',
  },
  {
    num: 14,
    question:
      'COCOMO 모델의 3가지 프로젝트 유형 중, 트랜잭션 처리 시스템·컴파일러·DBMS 등 30만 라인 이하의 중간 규모 소프트웨어에 해당하는 유형을 쓰시오.',
    answers: ['반분리형', 'semi-detached', 'semidetached', 'semi-detached mode', '반분리형 모드', '세미디태치드'],
    answerLabel: '반분리형 (Semi-detached Mode)',
    explanation:
      'COCOMO는 규모에 따라 조직형 Organic(5만 라인 이하), 반분리형 Semi-detached(30만 라인 이하), 내장형 Embedded(30만 라인 초과)로 나뉜다. 트랜잭션 처리·컴파일러·DBMS는 반분리형의 대표 예시다.',
  },
  {
    num: 15,
    question:
      '코드 라인 수 대신 외부 입력·외부 출력·외부 질의·내부 논리 파일·외부 인터페이스 파일 등 기능의 수와 복잡도에 가중치를 곱해 합산함으로써 소프트웨어 규모를 산정하는 비용 산정 모델을 쓰시오.',
    answers: ['기능 점수', '기능점수', 'fp', 'function point', '펑션 포인트', 'fp 모델', '기능 점수 모델'],
    answerLabel: '기능 점수 (FP, Function Point)',
    explanation:
      'FP(기능 점수) 모델은 요구사항만으로 조기 산정이 가능하며 자동화 도구로 ESTIMACS가 있다. LOC 기반의 COCOMO, Rayleigh-Norden 곡선 기반의 Putnam과 구분하자.',
  },
  {
    num: 16,
    question:
      '다음 작업 목록으로 CPM 네트워크를 구성했을 때, 프로젝트의 최단 완성 기간은 며칠인지 구하시오.',
    code: `작업  소요 기간  선행 작업
 A       4일      없음
 B       5일      없음
 C       3일      A
 D       6일      B
 E       2일      C, D
 F       3일      E`,
    answers: ['16일', '16', '16 일'],
    answerLabel: '16일',
    explanation:
      '경로 A→C→E→F = 4+3+2+3 = 12일, 경로 B→D→E→F = 5+6+2+3 = 16일이므로 임계 경로는 B→D→E→F다. 최단 완성 기간은 가장 긴 경로(임계 경로)의 길이인 16일이다.',
  },
  {
    num: 17,
    question:
      '여러 전문가가 익명으로 산정에 참여하고, 조정자가 산정 결과를 취합·회람하는 과정을 반복하여 합의된 산정치에 도달하는 하향식 비용 산정 기법을 쓰시오.',
    answers: ['델파이', 'delphi', '델파이 기법', 'delphi technique'],
    answerLabel: '델파이 기법 (Delphi)',
    explanation:
      '델파이 기법은 전문가 판단의 주관성을 익명 합의 절차로 보완한 하향식 산정 기법이다. "익명"과 "조정자"가 판별 키워드다.',
  },
  {
    num: 18,
    question:
      '프로젝트 범위 관리에서 전체 작업을 관리 가능한 최소 단위(워크 패키지)까지 계층적으로 세분화하여 일정·비용 산정의 기준으로 삼는 구조도인 WBS의 영문 풀네임(Full Name)을 쓰시오.',
    answers: ['work breakdown structure', '작업 분해 구조', '작업분해구조'],
    answerLabel: 'Work Breakdown Structure (작업 분해 구조)',
    explanation:
      'WBS는 Work Breakdown Structure(작업 분해 구조)의 약어로, 범위 관리의 핵심 산출물이자 일정 관리(PERT/CPM)의 입력이 된다.',
  },
  {
    num: 19,
    question:
      'CMMI의 프로세스 성숙도 5단계 중 프로세스를 정량적(통계적) 기법으로 측정하고 통제하는 4단계의 이름을 쓰시오.',
    answers: ['정량적 관리', '정량적관리', 'quantitatively managed', '정량적 관리 단계'],
    answerLabel: '정량적 관리 (Quantitatively Managed)',
    explanation:
      'CMMI 5단계는 초기 → 관리 → 정의 → 정량적 관리 → 최적화 순서이며, 4단계 정량적 관리는 통계적 측정·통제가 이루어지는 수준이다. 2단계 관리(Managed)와 이름이 비슷하므로 "정량적"을 빠뜨리지 않도록 주의한다.',
  },
  {
    num: 20,
    question:
      'SPICE(ISO/IEC 15504)의 프로세스 수행 능력 6단계 중, 프로세스가 구현되지 않거나 프로세스의 목적을 달성하지 못하는 수준 0의 이름을 쓰시오.',
    answers: ['불완전', 'incomplete', '불완전 단계', '불완전 수준'],
    answerLabel: '불완전 (Incomplete)',
    explanation:
      'SPICE는 0~5의 6단계(불완전 → 수행 → 관리 → 확립 → 예측 → 최적화)로 평가한다. CMMI(1~5의 5단계)에는 없는 수준 0(불완전)이 존재한다는 점이 SPICE의 대표적인 구분 포인트다.',
  },
]

export default defineComponent({
  name: 'VariantSwMethodologyPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>
        <header class="hero">
          <h1>기출 변형 — 소프트웨어 개발 방법론과 프로젝트 관리</h1>
          <p>실기 기출 유형을 변형한 20문제입니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>
        {QUESTIONS.map((q) => <QuizInput {...q} key={q.num} />)}
        <footer>소프트웨어 개발 방법론과 프로젝트 관리 기출 변형문제 · 2026-09</footer>
      </div>
    )
  },
})
