import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './os-basics.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '유닉스 시스템에서 어떤 파일의 권한이 rw-r-x--x 로 표시되어 있다. 이 권한을 8진수 세 자리로 쓰시오.',
    answers: ['651', '0651', 'chmod 651'],
    explanation:
      '소유자 rw- = 4+2+0 = 6, 그룹 r-x = 4+0+1 = 5, 기타 --x = 0+0+1 = 1 → 651. r=4, w=2, x=1을 세 묶음(소유자·그룹·기타)별로 더한다.',
  },
  {
    num: 2,
    question:
      '리눅스에서 chmod 742 data.txt 를 실행했을 때 data.txt 에 설정되는 권한을 기호(rwx 표기, 9자리)로 쓰시오.',
    answers: ['rwxr---w-', 'rwx r-- -w-'],
    answerLabel: 'rwxr---w-',
    explanation:
      '7 = 4+2+1 = rwx(소유자: 읽기·쓰기·실행), 4 = 4+0+0 = r--(그룹: 읽기), 2 = 0+2+0 = -w-(기타: 쓰기) → rwxr---w-.',
  },
  {
    num: 3,
    question:
      '어떤 파일에 대해 소유자에게는 읽기·쓰기·실행, 그룹에게는 읽기·쓰기, 기타 사용자에게는 읽기 권한만 부여하려고 한다. chmod 명령에 사용할 8진수 세 자리를 쓰시오.',
    answers: ['764', '0764', 'chmod 764'],
    explanation:
      '소유자 rwx = 4+2+1 = 7, 그룹 rw- = 4+2+0 = 6, 기타 r-- = 4+0+0 = 4 → 764.',
  },
  {
    num: 4,
    question:
      'HRN 스케줄링에서 우선순위는 (대기 시간 + 서비스 시간) ÷ 서비스 시간으로 계산하며, 값이 큰 프로세스부터 실행한다. 다음 네 프로세스 중 가장 먼저 실행되는 프로세스를 쓰시오.',
    code: `프로세스   대기 시간   서비스 시간
P1            5          10
P2           18           6
P3           30           5
P4            8           4`,
    answers: ['P3'],
    explanation:
      'P1=(5+10)÷10=1.5, P2=(18+6)÷6=4, P3=(30+5)÷5=7, P4=(8+4)÷4=3. 우선순위 값이 가장 큰 P3(7)이 가장 먼저 실행된다. 전체 순서는 P3 → P2 → P4 → P1.',
  },
  {
    num: 5,
    question:
      '페이지 프레임이 3개인 시스템에서 아래 참조열을 FIFO 기법으로 처리할 때 페이지 부재(Page Fault)는 몇 회 발생하는지 쓰시오. (초기 프레임은 모두 비어 있음)',
    code: `참조열: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5`,
    answers: ['9', '9회', '9번'],
    answerLabel: '9회',
    explanation:
      '1●, 2●, 3●(적재) → 4●(1 교체) → 1●(2 교체) → 2●(3 교체) → 5●(4 교체) → 1○ 적중 → 2○ 적중 → 3●(1 교체) → 4●(2 교체) → 5○ 적중. 부재 ● 9회, 적중 ○ 3회.',
  },
  {
    num: 6,
    question:
      '페이지 프레임이 3개인 시스템에서 아래 참조열을 LRU 기법으로 처리할 때 페이지 부재는 몇 회 발생하는지 쓰시오. (초기 프레임은 모두 비어 있음)',
    code: `참조열: 2, 3, 4, 2, 1, 3, 5, 3`,
    answers: ['6', '6회', '6번'],
    answerLabel: '6회',
    explanation:
      '2●, 3●, 4●(적재) → 2○ 적중 → 1●: 가장 오래 안 쓴 3 교체 → 3●: 가장 오래 안 쓴 4 교체 → 5●: 가장 오래 안 쓴 2 교체 → 3○ 적중. 부재는 총 6회(적중 2회).',
  },
  {
    num: 7,
    question:
      '모든 프로세스가 0초에 도착했을 때, SJF(비선점) 스케줄링의 평균 대기 시간을 구하시오.',
    code: `프로세스   실행 시간
P1            8
P2           10
P3            4
P4            6`,
    answers: ['8', '8초'],
    answerLabel: '8',
    explanation:
      '짧은 순서 P3(4) → P4(6) → P1(8) → P2(10)로 실행. 대기 시간은 P3=0, P4=4, P1=4+6=10, P2=4+6+8=18 → (0+4+10+18)÷4 = 32÷4 = 8. 검산: 평균 반환 시간 15 = 평균 대기 8 + 평균 실행 7.',
  },
  {
    num: 8,
    question:
      '모든 프로세스가 0초에 도착했고 P1 → P2 → P3 → P4 순서로 도착했다. FCFS 스케줄링의 평균 반환 시간(Turnaround Time)을 구하시오.',
    code: `프로세스   실행 시간
P1            5
P2            2
P3            9
P4            4`,
    answers: ['12', '12초'],
    answerLabel: '12',
    explanation:
      '도착 순서대로 실행하면 완료 시각은 P1=5, P2=5+2=7, P3=7+9=16, P4=16+4=20. 도착이 모두 0초이므로 반환 시간 = 완료 시각 → (5+7+16+20)÷4 = 48÷4 = 12.',
  },
  {
    num: 9,
    question:
      '주기억장치의 빈 영역이 순서대로 다음과 같을 때, 9K 크기의 프로그램을 최적 적합(Best Fit) 전략으로 배치하면 어느 영역이 선택되는지 쓰시오.',
    code: `M1 = 15K,  M2 = 10K,  M3 = 8K,  M4 = 30K`,
    answers: ['M2', 'M2(10K)', 'M2 영역'],
    answerLabel: 'M2',
    explanation:
      '9K가 들어갈 수 있는 후보는 M1(15K)·M2(10K)·M4(30K)이고 M3(8K)은 제외. 최적 적합은 그중 가장 작은 M2(10K)를 선택한다(내부 단편화 10−9=1K). 참고로 최초 적합이면 M1, 최악 적합이면 M4가 선택된다.',
  },
  {
    num: 10,
    question:
      '고정 분할 기억장치에서 각 분할에 다음과 같이 프로그램을 적재했다. 발생하는 내부 단편화의 총합은 몇 K인지 쓰시오.',
    code: `분할 크기   적재 프로그램
  10K           8K
  20K          14K
  30K          25K`,
    answers: ['13K', '13', '13KB'],
    answerLabel: '13K',
    explanation:
      '내부 단편화 = 분할 크기 − 프로그램 크기. 10−8=2K, 20−14=6K, 30−25=5K → 총합 2+6+5 = 13K.',
  },
  {
    num: 11,
    question:
      '교착상태(Deadlock) 발생 필요조건 중, 다음 설명에 해당하는 조건을 쓰시오.',
    code: `한 번에 한 프로세스만 자원을 사용할 수 있어,
다른 프로세스가 그 자원을 사용하려면 해제될 때까지 기다려야 한다.`,
    answers: ['상호 배제', '상호배제', 'Mutual Exclusion', '뮤추얼 익스클루전'],
    answerLabel: '상호 배제(Mutual Exclusion)',
    explanation:
      '교착상태 발생 4조건은 상호 배제 · 점유와 대기 · 비선점 · 환형 대기이며, 자원을 한 프로세스만 독점 사용하는 조건이 상호 배제다. 네 조건이 모두 성립해야 교착상태가 발생한다.',
  },
  {
    num: 12,
    question:
      '교착상태 발생 필요조건 4가지 중 빈칸 ( )에 들어갈 조건을 쓰시오.',
    code: `상호 배제  ·  점유와 대기  ·  비선점  ·  (        )
※ 프로세스들이 고리 모양으로 서로가 점유한 자원을 기다리는 조건`,
    answers: ['환형 대기', '환형대기', '원형 대기', '원형대기', 'Circular Wait'],
    answerLabel: '환형 대기(원형 대기, Circular Wait)',
    explanation:
      '프로세스들이 원형(고리 모양)으로 서로의 자원을 기다리는 조건은 환형 대기(Circular Wait)다. 네 조건 중 하나만 부정해도 교착상태는 예방된다.',
  },
  {
    num: 13,
    question:
      '프로세스 상태 전이에서, 실행 상태의 프로세스가 할당된 시간 조각(Time Slice)을 모두 사용하여 CPU를 반납하고 준비 상태로 전환되는 것을 무엇이라 하는지 쓰시오.',
    answers: ['타임아웃', 'Timeout', 'Time out', '타임 아웃', '시간 종료'],
    answerLabel: '타임아웃(Timeout)',
    explanation:
      '실행 → 준비 전이가 타임아웃이다. 함께 암기: 디스패치(준비→실행, CPU 할당), 블록(실행→대기, 입출력 요청), 웨이크업(대기→준비, 입출력 완료).',
  },
  {
    num: 14,
    question:
      '운영체제 구성 요소 중, 사용자가 입력한 명령을 해석하여 커널에 전달하는 명령 해석기를 무엇이라 하는지 쓰시오. (bash, csh 등이 이에 해당한다)',
    answers: ['쉘', '셸', 'Shell'],
    answerLabel: '쉘(Shell)',
    explanation:
      '쉘은 사용자와 커널 사이에서 명령을 해석·실행하는 명령 해석기다. 반대로 운영체제의 핵심으로 메모리에 상주하며 프로세스·기억장치·입출력 등 자원을 관리하는 것은 커널(Kernel)이다.',
  },
  {
    num: 15,
    question:
      '다음 스케줄링 알고리즘 중 선점형(Preemptive)에 해당하는 것을 모두 골라 기호로 쓰시오.',
    code: `ㄱ. SJF     ㄴ. RR(라운드 로빈)     ㄷ. HRN
ㄹ. SRT     ㅁ. FCFS`,
    answers: ['ㄴ, ㄹ', 'ㄴㄹ', 'ㄹ, ㄴ', 'RR, SRT', 'SRT, RR'],
    answerLabel: 'ㄴ, ㄹ',
    explanation:
      '선점형은 RR · SRT · MLQ · MFQ이고 나머지(FCFS · SJF · HRN · 우선순위 · 기한부)는 모두 비선점형이다. 보기에서는 ㄴ(RR)과 ㄹ(SRT)만 선점형이다.',
  },
  {
    num: 16,
    question:
      '가상기억장치 구현 기법 중, 프로그램을 함수·모듈 같은 가변 크기의 논리적 단위로 나누어 주기억장치에 적재하는 기법을 무엇이라 하는지 쓰시오.',
    answers: ['세그먼테이션', '세그멘테이션', 'Segmentation'],
    answerLabel: '세그먼테이션(Segmentation)',
    explanation:
      '가변 크기의 논리적 단위로 나누면 세그먼테이션(외부 단편화 발생, 보호·공유에 유리), 고정 크기로 나누면 페이징(내부 단편화 발생)이다.',
  },
  {
    num: 17,
    question:
      '가상기억장치 시스템에서 페이지 부재(Page Fault)가 지나치게 자주 발생하여, 프로세스가 실제 작업보다 페이지 교체에 더 많은 시간을 소비하는 성능 저하 현상을 무엇이라 하는지 쓰시오.',
    answers: ['스래싱', '쓰래싱', '쓰레싱', '스레싱', 'Thrashing'],
    answerLabel: '스래싱(Thrashing)',
    explanation:
      '스래싱은 페이지 교체가 과도해져 CPU 이용률이 급락하는 현상이다. 자주 참조하는 페이지 집합(워킹 셋)을 메모리에 상주시키면 완화되며, 그 이론적 근거가 구역성(Locality)이다.',
  },
  {
    num: 18,
    question:
      '유닉스에서 실행 중인 프로세스가 자기 자신을 복제하여 새로운 프로세스를 생성하는 시스템 호출(명령)을 쓰시오.',
    answers: ['fork', 'fork()', '포크'],
    answerLabel: 'fork',
    explanation:
      'fork는 호출한 프로세스를 복제해 자식 프로세스를 만든다. 함께 암기: exec는 현재 프로세스를 새 프로그램으로 대체 실행, ps는 프로세스 상태 확인, kill은 프로세스에 종료 신호 전송.',
  },
  {
    num: 19,
    question:
      '유닉스/리눅스 명령어 중, 파일 안에서 특정 문자열(패턴)을 검색하여 해당 행을 출력하는 명령어를 쓰시오.',
    answers: ['grep', '그렙', '그랩'],
    answerLabel: 'grep',
    explanation:
      '문자열(패턴) 검색은 grep이다. 혼동 주의: find는 파일 자체를 검색, cat은 파일 내용 출력, ps는 프로세스 목록, chmod는 권한 변경, pwd는 현재 디렉터리 경로 출력.',
  },
  {
    num: 20,
    question:
      '주기억장치의 빈 분할이 대기 중인 프로그램보다 작아서 그 분할 전체를 사용할 수 없을 때 낭비되는 공간을 무슨 단편화라 하는지 쓰시오.',
    answers: ['외부 단편화', '외부단편화', 'External Fragmentation', '외부'],
    answerLabel: '외부 단편화(External Fragmentation)',
    explanation:
      '분할이 프로그램보다 작아 통째로 못 쓰면 외부 단편화, 분할이 프로그램보다 커서 안쪽에 남으면 내부 단편화다. 외부 단편화는 통합·압축이나 페이징으로, 내부 단편화는 가변 분할·세그먼테이션으로 해결한다.',
  },
]

export default defineComponent({
  name: 'VariantOsBasicsPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 운영체제</h1>
          <p>
            정보처리기사 실기 기출 유형(2020~2025)을 바탕으로 숫자·참조열·보기를 바꾼 변형 문제입니다.
            chmod 권한, 스케줄링(HRN·SJF·FCFS), 페이지 부재(FIFO·LRU), 기억장치 배치 계산 10문항과
            핵심 용어 10문항으로 구성했습니다. 정답을 입력하고 제출하면 채점되며,
            맞으면 해설이, 틀리면 정답과 해설이 함께 표시됩니다. 계산 문제는 숫자만 입력하면 됩니다.
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

        <footer>기출 변형 — 운영체제 · 20문항 · 2026-09</footer>
      </div>
    )
  },
})
