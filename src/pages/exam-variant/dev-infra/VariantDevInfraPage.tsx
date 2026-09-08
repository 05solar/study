import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './dev-infra.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '한 스타트업이 클라우드 사업자로부터 가상 서버·가상 스토리지·네트워크 자원을 빌린 뒤, 그 위에 운영체제(OS)와 미들웨어를 직접 설치·관리하며 서비스를 운영하고 있다. 이 회사가 이용 중인 클라우드 서비스 유형을 쓰시오.',
    answers: ['IaaS', 'Infrastructure as a Service', '서비스형 인프라', '인프라형 서비스', '아이아스'],
    answerLabel: 'IaaS (Infrastructure as a Service)',
    explanation:
      '가상화된 인프라(서버·스토리지·네트워크)까지만 제공받고 OS부터는 사용자가 직접 관리하면 IaaS다. "OS를 직접 설치·관리한다"는 문구가 판별 키워드다.',
  },
  {
    num: 2,
    question:
      '어느 개발팀은 서버·OS·런타임을 전혀 관리하지 않고, 작성한 애플리케이션 코드만 업로드하면 자동으로 빌드·배포·실행되는 개발·실행 플랫폼을 이용한다. 데이터와 애플리케이션만 팀이 관리한다. 이 팀이 이용 중인 클라우드 서비스 유형을 쓰시오.',
    answers: ['PaaS', 'Platform as a Service', '서비스형 플랫폼', '플랫폼형 서비스', '파스'],
    answerLabel: 'PaaS (Platform as a Service)',
    explanation:
      'OS·런타임·미들웨어를 포함한 개발·실행 플랫폼까지 제공자가 관리하고, 사용자는 애플리케이션과 데이터만 관리하면 PaaS다. "코드만 올리면 실행된다" → PaaS, "설치 없이 웹으로 바로 쓴다" → SaaS로 구분한다.',
  },
  {
    num: 3,
    question:
      '어느 기업이 고객 개인정보 데이터베이스는 자사 전용으로 구축한 폐쇄형 클라우드에 두고, 트래픽 변동이 큰 웹 서비스는 외부 사업자의 공개형 클라우드에 두어 두 환경을 결합해 운영하고 있다. 이러한 클라우드 배포 모델을 쓰시오.',
    answers: ['하이브리드 클라우드', 'Hybrid Cloud', '하이브리드', '하이브리드 클라우드 모델'],
    answerLabel: '하이브리드 클라우드 (Hybrid Cloud)',
    explanation:
      '프라이빗(전용·폐쇄형)과 퍼블릭(공개형) 클라우드를 결합하여 중요 데이터는 내부에, 나머지는 외부에 두는 모델이 하이브리드 클라우드다. 불특정 다수 대상은 퍼블릭, 특정 조직 전용은 프라이빗이다.',
  },
  {
    num: 4,
    question:
      '하이퍼바이저 중 호스트 OS 없이 하드웨어 위에서 직접 실행되어 오버헤드가 적고, Xen·KVM·Hyper-V가 대표 제품인 유형을 쓰시오.',
    answers: ['Type 1', '타입 1', 'Type 1 하이퍼바이저', '베어메탈형', '베어메탈', 'bare metal', '네이티브형', 'Type 1 베어메탈형'],
    answerLabel: 'Type 1 (베어메탈형)',
    explanation:
      '하드웨어 위에서 직접 실행되면 Type 1(베어메탈형)으로 성능이 좋아 서버·데이터센터에 쓰인다. 호스트 OS 위에 응용 프로그램처럼 설치되는 VirtualBox·VMware Workstation은 Type 2(호스트형)다.',
  },
  {
    num: 5,
    question:
      '다음 설명에 해당하는 가상화 기술을 쓰시오.',
    code: `· 가상 머신(VM)과 달리 게스트 OS를 포함하지 않고,
  호스트 OS의 커널을 공유하면서 애플리케이션과
  라이브러리만 격리하여 실행한다.
· 크기가 수십 MB 수준으로 가볍고 수 초 내에 기동된다.`,
    answers: ['컨테이너', 'Container', '컨테이너 가상화', '컨테이너 기술'],
    answerLabel: '컨테이너 (Container)',
    explanation:
      '호스트 OS 커널 공유 + 앱·라이브러리만 격리 + 가볍고 빠른 기동이 컨테이너의 키워드다. 대표 컨테이너 엔진이 도커(Docker), 다수 컨테이너의 오케스트레이션 플랫폼이 쿠버네티스다.',
  },
  {
    num: 6,
    question:
      '다음 설명에 해당하는 스토리지 연결 방식을 쓰시오.',
    code: `· LAN(이더넷) 네트워크를 통해 스토리지를 연결한다.
· 파일 단위로 접근하며, 여러 사용자·서버가
  데이터를 공유하기 쉽다.
· 네트워크(LAN) 부하의 영향을 받는다.`,
    answers: ['NAS', 'Network Attached Storage', '네트워크 결합 스토리지', '나스', '네트워크 부착 스토리지'],
    answerLabel: 'NAS (Network Attached Storage)',
    explanation:
      '"LAN을 통한 연결 + 파일 단위 접근 + 공유 용이"가 NAS의 키워드다. 서버에 전용 케이블로 직접 연결하면 DAS, 파이버 채널 전용 네트워크로 블록 단위 접근하면 SAN이다.',
  },
  {
    num: 7,
    question:
      '서버와 스토리지를 파이버 채널(FC) 기반의 전용 네트워크로 연결하여 블록 단위로 접근하는 방식으로, DAS의 빠른 속도와 NAS의 공유 장점을 결합해 대규모·고성능 환경에 적합한 스토리지 구성 방식을 쓰시오.',
    answers: ['SAN', 'Storage Area Network', '스토리지 전용 네트워크', '스토리지 영역 네트워크', '스토리지 에어리어 네트워크', '산'],
    answerLabel: 'SAN (Storage Area Network)',
    explanation:
      '"전용 네트워크(FC) + 블록 단위 접근"이 SAN의 정의 키워드다. 확장성이 높지만 구축 비용이 크다. NAS는 LAN + 파일 단위라는 점과 대비해 암기한다.',
  },
  {
    num: 8,
    question:
      '데이터를 여러 디스크에 분산 저장(스트라이핑)하여 읽기·쓰기 성능은 가장 좋지만, 중복 저장이 전혀 없어 디스크 1개만 고장 나도 전체 데이터를 잃게 되는 RAID 레벨을 쓰시오.',
    answers: ['RAID 0', 'RAID0', '레이드 0', '레이드0', '0'],
    answerLabel: 'RAID 0',
    explanation:
      '스트라이핑만 사용하는 것이 RAID 0이다. 성능은 최고지만 안정성(중복)이 전혀 없다. 미러링은 RAID 1, 패리티 분산은 RAID 5로 구분한다.',
  },
  {
    num: 9,
    question:
      '데이터를 스트라이핑하면서 패리티 정보를 특정 디스크가 아닌 여러 디스크에 분산 저장하여, 디스크 1개가 고장 나도 복구할 수 있다. 최소 3개의 디스크가 필요하며 성능·용량·안정성의 균형이 좋은 이 RAID 레벨을 쓰시오.',
    answers: ['RAID 5', 'RAID5', '레이드 5', '레이드5', '5'],
    answerLabel: 'RAID 5',
    explanation:
      '"패리티를 여러 디스크에 분산 저장 + 1개 고장 복구 + 최소 3개"가 RAID 5의 키워드다. 패리티를 2중으로 분산해 2개 동시 고장까지 복구하면 RAID 6이다.',
  },
  {
    num: 10,
    question:
      '네트워크 장비의 제어부(Control Plane)와 데이터 전송부(Data Plane)를 분리하고, 소프트웨어 컨트롤러로 네트워크 전체를 중앙에서 프로그래밍하듯 제어·관리하는 네트워크 기술을 쓰시오.',
    answers: ['SDN', '소프트웨어 정의 네트워크', 'Software Defined Networking', 'software defined network', '소프트웨어 정의 네트워킹', '에스디엔'],
    answerLabel: 'SDN (Software Defined Network, 소프트웨어 정의 네트워크)',
    explanation:
      '"제어부와 데이터부의 분리 + 소프트웨어 중앙 집중 제어"가 SDN의 정의 문구 그대로다. 실기 최단골 용어이며, 장비의 기능 자체를 가상화하는 NFV와 혼동하지 말 것.',
  },
  {
    num: 11,
    question:
      '라우터·방화벽·로드밸런서 등 전용 네트워크 장비가 수행하던 기능을 가상화하여 범용 서버 위의 소프트웨어로 구현하는 기술을 쓰시오.',
    answers: ['NFV', 'Network Functions Virtualization', '네트워크 기능 가상화', 'Network Function Virtualization', '엔에프브이'],
    answerLabel: 'NFV (Network Functions Virtualization, 네트워크 기능 가상화)',
    explanation:
      '"네트워크 장비의 기능을 범용 서버의 소프트웨어로 가상화"가 NFV의 키워드다. SDN이 제어의 분리·중앙화라면 NFV는 기능(장비)의 가상화라는 점에서 구분된다.',
  },
  {
    num: 12,
    question:
      '이동통신 기지국 등 네트워크의 가장자리에 컴퓨팅 자원(서버)을 배치하여, 데이터를 중앙까지 보내지 않고 가까운 곳에서 처리함으로써 초저지연 서비스를 가능하게 하는 5G 핵심 기술을 쓰시오.',
    answers: ['MEC', 'Mobile Edge Computing', '모바일 엣지 컴퓨팅', '모바일 에지 컴퓨팅', 'Multi-access Edge Computing', '멀티 액세스 엣지 컴퓨팅', '멀티액세스 에지 컴퓨팅'],
    answerLabel: 'MEC (Mobile Edge Computing, 모바일 엣지 컴퓨팅)',
    explanation:
      '"기지국 등 네트워크 가장자리에 컴퓨팅 자원 배치 + 5G 초저지연"이 MEC의 키워드다. 단말 근처에서 데이터를 처리하는 일반 개념은 엣지 컴퓨팅, 그것을 이동통신망에 적용한 것이 MEC다.',
  },
  {
    num: 13,
    question:
      '블록체인 위에서 동작하는 프로그램화된 계약으로, 미리 정의된 계약 조건이 충족되면 제3자의 개입 없이 자동으로 계약 내용이 실행되는 기술을 쓰시오.',
    answers: ['스마트 계약', '스마트 컨트랙트', 'Smart Contract', '스마트계약', '스마트 콘트랙트'],
    answerLabel: '스마트 계약 (Smart Contract)',
    explanation:
      '"블록체인 기반 + 조건 충족 시 자동 실행되는 계약"이 스마트 계약의 정의다. 분산 원장으로 위·변조를 방지하는 기반 기술 자체는 블록체인이라는 점과 구분한다.',
  },
  {
    num: 14,
    question:
      '항공기 엔진이나 공장 설비 같은 물리적 사물을 가상 공간에 동일하게 구현하고, 센서로 수집한 실시간 데이터로 동기화하여 시뮬레이션·고장 예측·최적화에 활용하는 기술을 쓰시오.',
    answers: ['디지털 트윈', 'Digital Twin', '디지털트윈'],
    answerLabel: '디지털 트윈 (Digital Twin)',
    explanation:
      '"현실의 사물을 가상에 쌍둥이처럼 복제 + 실시간 동기화 + 시뮬레이션"이 디지털 트윈의 키워드다. 가상 세계에서 아바타로 활동하는 플랫폼인 메타버스와 혼동하지 말 것.',
  },
  {
    num: 15,
    question:
      '웹에서 공개된 여러 서비스와 정보(오픈 API)를 조합하여 새로운 서비스를 만들어 내는 기술을 쓰시오. 예를 들어 지도 API에 맛집 정보를 결합하여 만든 맛집 지도 서비스가 이에 해당한다.',
    answers: ['매시업', 'Mashup', 'Mash-up', '매쉬업', '메시업', '매시 업'],
    answerLabel: '매시업 (Mashup)',
    explanation:
      '"여러 웹 서비스(오픈 API)의 조합 → 새로운 서비스"가 매시업의 정의다. 실기에서 반복 출제된 최단골 용어다.',
  },
  {
    num: 16,
    question:
      '지리적으로 분산되어 있는 여러 컴퓨터의 유휴 자원을 네트워크로 연결·결합하여, 하나의 고성능 컴퓨터처럼 활용하는 컴퓨팅 방식을 쓰시오.',
    answers: ['그리드 컴퓨팅', 'Grid Computing', '그리드', '그리드컴퓨팅'],
    answerLabel: '그리드 컴퓨팅 (Grid Computing)',
    explanation:
      '"분산된 컴퓨터들의 유휴 자원을 묶어 하나처럼 사용"이 그리드 컴퓨팅의 키워드다. 사업자의 자원을 빌려 쓰는 클라우드 컴퓨팅, 단말 근처에서 처리하는 엣지 컴퓨팅과 구분한다.',
  },
  {
    num: 17,
    question:
      '개발자가 서버를 직접 구축·관리하지 않고 함수 단위의 코드만 배포하면, 이벤트가 발생할 때 클라우드가 코드를 실행하고 실행된 만큼만 과금하는 클라우드 컴퓨팅 방식을 쓰시오. AWS Lambda가 대표적이다.',
    answers: ['서버리스', 'Serverless', '서버리스 컴퓨팅', 'Serverless Computing', 'FaaS', '서버리스 아키텍처'],
    answerLabel: '서버리스 (Serverless) 컴퓨팅',
    explanation:
      '"서버 관리 없이 함수 단위 코드 배포 + 이벤트 발생 시 실행 + 실행량 과금"이 서버리스(FaaS)의 키워드다. 서버가 없는 것이 아니라 개발자가 서버를 관리하지 않는다는 의미다.',
  },
  {
    num: 18,
    question:
      '사람이 수작업으로 하던 데이터 입력·전표 처리 같은 반복적이고 규칙적인 사무 업무를, 소프트웨어 로봇이 사람 대신 자동으로 처리하도록 하는 기술을 쓰시오.',
    answers: ['RPA', 'Robotic Process Automation', '로보틱 프로세스 자동화', '로봇 프로세스 자동화', '로봇 업무 자동화', '알피에이'],
    answerLabel: 'RPA (Robotic Process Automation, 로봇 프로세스 자동화)',
    explanation:
      '"반복적·규칙적 사무 업무를 소프트웨어 로봇이 자동 처리"가 RPA의 정의다. 물리적인 로봇이 아니라 소프트웨어 로봇이라는 점이 특징이다.',
  },
  {
    num: 19,
    question:
      '실세계에 존재하는 개념(사물)과 개념 간의 관계를 컴퓨터가 처리할 수 있는 형식 언어로 정의한 지식 표현 명세로, 컴퓨터가 웹 자원의 의미를 이해·추론하게 하는 시맨틱 웹의 기반이 되는 기술을 쓰시오.',
    answers: ['온톨로지', 'Ontology', '온톨러지'],
    answerLabel: '온톨로지 (Ontology)',
    explanation:
      '"개념과 개념 간 관계의 형식적 명세"가 온톨로지의 정의다. 온톨로지를 기반으로 컴퓨터가 웹의 의미를 스스로 이해·추론하는 지능형 웹이 시맨틱 웹이다.',
  },
  {
    num: 20,
    question:
      '양자역학의 복제 불가능성 원리를 이용하여 제3자가 도청을 시도하면 그 사실이 즉시 드러나므로, 도청이 원천적으로 불가능한 암호 키를 송·수신자 간에 분배하는 기술을 쓰시오.',
    answers: ['양자 암호', 'QKD', 'Quantum Key Distribution', '양자 키 분배', '양자암호', '양자 암호 키 분배', '양자키분배'],
    answerLabel: '양자 암호 · QKD (Quantum Key Distribution, 양자 키 분배)',
    explanation:
      '"양자역학 원리(복제 불가능성) + 도청 불가능한 키 분배"가 양자 암호(QKD)의 키워드다. 큐비트의 중첩·얽힘으로 계산 자체를 수행하는 양자 컴퓨팅과 구분한다.',
  },
]

export default defineComponent({
  name: 'VariantDevInfraPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>
        <header class="hero">
          <h1>기출 변형 — 개발 인프라 구축과 신기술 용어</h1>
          <p>실기 기출 유형을 변형한 20문제입니다. 정답을 입력하고 제출하면 채점되며, 오답이면 정답과 해설이 함께 표시됩니다.</p>
        </header>
        {QUESTIONS.map((q) => <QuizInput {...q} key={q.num} />)}
        <footer>개발 인프라 구축과 신기술 용어 기출 변형문제 · 2026-09</footer>
      </div>
    )
  },
})
