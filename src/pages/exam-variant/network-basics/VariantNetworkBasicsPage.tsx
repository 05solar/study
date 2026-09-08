import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './network-basics.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question:
      '네트워크 172.16.2.0/23에서 실제로 호스트에 할당할 수 있는 IP 주소의 개수를 구하시오.',
    answers: ['510', '510개', '510대'],
    answerLabel: '510개',
    explanation:
      '호스트 비트 = 32 − 23 = 9비트이므로 전체 주소는 2⁹ = 512개다. 네트워크 주소(172.16.2.0)와 브로드캐스트 주소(172.16.3.255)를 제외하면 512 − 2 = 510개. 검산: /23은 셋째 옥텟 블록 크기 2 → 172.16.2.0 ~ 172.16.3.255의 512개 주소 범위가 맞다.',
  },
  {
    num: 2,
    question: 'IP 주소 192.168.5.77/27이 속한 서브넷의 네트워크 주소를 쓰시오.',
    answers: ['192.168.5.64', '192.168.5.64/27'],
    answerLabel: '192.168.5.64',
    explanation:
      '/27의 호스트 비트는 5개이므로 블록 크기는 2⁵ = 32 → 서브넷은 0, 32, 64, 96, …에서 시작한다. 77은 64 ~ 95 범위에 속하므로 네트워크 주소는 192.168.5.64. 검산: 77 = 01001101₂, 마스크 224(11100000₂)와 AND 하면 01000000₂ = 64.',
  },
  {
    num: 3,
    question: 'IP 주소 210.110.20.130/25가 속한 서브넷의 브로드캐스트 주소를 쓰시오.',
    answers: ['210.110.20.255', '210.110.20.255/25'],
    answerLabel: '210.110.20.255',
    explanation:
      '/25는 마지막 옥텟을 두 블록(0 ~ 127, 128 ~ 255)으로 나눈다. 130은 128 ~ 255 범위이므로 네트워크 주소는 210.110.20.128, 브로드캐스트 주소는 그 블록의 마지막인 210.110.20.255다. 검산: 다음 서브넷 시작(256) − 1 = 255.',
  },
  {
    num: 4,
    question:
      '8개의 노드를 망형(Mesh) 토폴로지로 모두 직접 연결하려고 할 때 필요한 회선의 수를 구하시오.',
    answers: ['28', '28회선', '28개', '28개 회선'],
    answerLabel: '28회선',
    explanation:
      '망형 회선 수 = n(n−1)/2 = 8 × 7 / 2 = 56 / 2 = 28. 검산: 노드 8개가 각각 7개와 연결(8×7=56)되는데 회선 하나를 양쪽에서 한 번씩 센 것이므로 2로 나눈다. (참고: 각 노드에 필요한 포트 수는 n−1 = 7개)',
  },
  {
    num: 5,
    question: '다음 설명에 해당하는 OSI 7계층의 계층 이름을 쓰시오.',
    code: `· 패킷의 경로 설정(라우팅)과 논리 주소(IP) 지정을 담당한다.
· 전송 단위(PDU)는 패킷이고 대표 장비는 라우터다.
· 대표 프로토콜로 IP, ICMP가 있다.`,
    answers: ['네트워크 계층', '네트워크계층', 'network layer', '3계층', '제3계층'],
    answerLabel: '네트워크 계층 (Network Layer, 3계층)',
    explanation:
      '"경로 설정 + 패킷 + 라우터 + IP"의 키워드 조합은 모두 네트워크 계층(3계층)을 가리킨다. 종단 간 전송(세그먼트, TCP/UDP)이면 전송 계층이므로 구분할 것.',
  },
  {
    num: 6,
    question: '다음 설명에 해당하는 OSI 7계층의 계층 이름을 쓰시오.',
    code: `· 데이터의 형식 변환, 암호화, 압축을 담당한다.
· JPEG, MPEG 등이 이 계층에서 처리된다.`,
    answers: ['표현 계층', '표현계층', 'presentation layer', '6계층', '제6계층'],
    answerLabel: '표현 계층 (Presentation Layer, 6계층)',
    explanation:
      '"형식 변환 · 암호화 · 압축"은 표현 계층(6계층)의 3대 기능이다. 세션의 설정 · 유지 · 종료를 다루는 세션 계층(5계층)과 혼동하지 않도록 주의한다.',
  },
  {
    num: 7,
    question:
      '다음 설명에 해당하는 OSI 7계층의 계층 이름을 쓰시오.\n"응용 프로세스 간의 대화(연결)를 설정 · 유지 · 종료하고, 동기화를 위한 체크포인트를 제공한다."',
    answers: ['세션 계층', '세션계층', 'session layer', '5계층', '제5계층'],
    answerLabel: '세션 계층 (Session Layer, 5계층)',
    explanation:
      '"대화 설정 · 유지 · 종료 + 동기화(체크포인트)"는 세션 계층(5계층)의 정의다. TCP/IP 4계층 모델에서는 표현 계층과 함께 응용 계층에 흡수된다.',
  },
  {
    num: 8,
    question:
      '다음 설명에 해당하는 프로토콜의 이름을 쓰시오.\n"IP의 동작을 돕기 위해 오류 보고와 상태 진단 메시지를 전달하는 인터넷 계층 프로토콜로, ping 명령이 이 프로토콜을 사용한다."',
    answers: ['ICMP', 'icmp', 'Internet Control Message Protocol'],
    answerLabel: 'ICMP',
    explanation:
      'ICMP(Internet Control Message Protocol)는 IP의 오류 보고 · 상태 진단용 메시지를 전달한다. ping, traceroute가 대표적인 활용 예다.',
  },
  {
    num: 9,
    question:
      '다음 설명에 해당하는 프로토콜의 이름을 쓰시오.\n"라우터, 스위치 등 네트워크 장비를 원격에서 관리 · 감시하기 위한 응용 계층 프로토콜로, 포트 161과 162를 사용한다."',
    answers: ['SNMP', 'snmp', 'Simple Network Management Protocol'],
    answerLabel: 'SNMP',
    explanation:
      'SNMP(Simple Network Management Protocol)는 네트워크 장비의 관리 · 감시용 프로토콜이다. "장비 관리 · 감시"라는 키워드가 나오면 답은 SNMP.',
  },
  {
    num: 10,
    question:
      '다음 설명에 해당하는 프로토콜의 이름을 쓰시오.\n"물리 주소(MAC 주소)를 이용하여 자신의 논리 주소(IP 주소)를 알아내는 프로토콜이다."',
    answers: ['RARP', 'rarp', 'Reverse ARP'],
    answerLabel: 'RARP',
    explanation:
      'MAC → IP 방향의 변환은 RARP(Reverse ARP)다. 반대로 IP 주소로 상대의 MAC 주소를 알아내는 것은 ARP이며, 두 프로토콜의 방향을 바꿔 쓰면 오답이다.',
  },
  {
    num: 11,
    question:
      '다음 설명에 해당하는 프로토콜의 이름을 쓰시오.\n"네트워크에 접속한 호스트에게 IP 주소, 서브넷 마스크, 게이트웨이 등의 설정 정보를 자동으로 할당해 주는 프로토콜로, 포트 67과 68을 사용한다."',
    answers: ['DHCP', 'dhcp', 'Dynamic Host Configuration Protocol'],
    answerLabel: 'DHCP',
    explanation:
      'DHCP(Dynamic Host Configuration Protocol)는 IP 주소를 자동으로 할당하는 프로토콜이다. "IP 자동 할당"이라는 키워드가 나오면 답은 DHCP.',
  },
  {
    num: 12,
    question:
      '다음 설명에 해당하는 전송 계층 프로토콜을 쓰시오.\n"비연결형 프로토콜로 헤더가 단순하여 전송 속도가 빠르지만, 순서와 도착을 보장하지 않는다. 전송 단위는 데이터그램이며 실시간 스트리밍과 VoIP에 적합하다."',
    answers: ['UDP', 'udp', 'User Datagram Protocol'],
    answerLabel: 'UDP',
    explanation:
      '"비연결형 · 빠름 · 신뢰성 미보장 · 데이터그램 · 실시간"의 키워드는 모두 UDP를 가리킨다. 연결형이고 신뢰성을 보장하면 TCP다.',
  },
  {
    num: 13,
    question:
      '다음 설명에 해당하는 전송 계층 프로토콜을 쓰시오.\n"연결형 프로토콜로 흐름 제어 · 혼잡 제어 · 오류 제어를 수행하여 신뢰성 있는 전송과 순서를 보장한다. 전송 단위는 세그먼트다."',
    answers: ['TCP', 'tcp', 'Transmission Control Protocol'],
    answerLabel: 'TCP',
    explanation:
      '"연결형 · 흐름/혼잡/오류 제어 · 순서 보장 · 세그먼트"는 TCP의 특징이다. TCP는 데이터 전송 전에 3-way 핸드셰이크로 연결을 설정한다.',
  },
  {
    num: 14,
    question:
      'TCP 연결 설정 과정인 3-way 핸드셰이크에서 괄호 ㉠에 들어갈 메시지를 쓰시오.',
    code: `클라이언트 → 서버 : SYN          연결 요청
서버 → 클라이언트 : (  ㉠  )     요청 수락 + 확인 응답
클라이언트 → 서버 : ACK          확인 응답 → 연결 성립`,
    answers: ['SYN+ACK', 'SYN + ACK', 'SYN ACK', 'SYNACK', 'SYN, ACK'],
    answerLabel: 'SYN + ACK',
    explanation:
      '3-way 핸드셰이크는 SYN → SYN+ACK → ACK 순서다. 서버는 두 번째 단계에서 연결 수락(SYN)과 확인 응답(ACK)을 하나의 메시지로 함께 보낸다.',
  },
  {
    num: 15,
    question:
      '거리 벡터 알고리즘을 사용하는 라우팅 프로토콜 RIP에서 도달 가능한 최대 홉(Hop) 수를 쓰시오. (이 값을 초과하면 도달 불가로 간주한다)',
    answers: ['15', '15홉', '15개', '최대 15홉'],
    answerLabel: '15',
    explanation:
      'RIP의 최대 홉 수는 15이며, 16이 되면 도달 불가로 간주한다. 이 홉 수 제한 때문에 RIP는 소규모 네트워크에 적합하다.',
  },
  {
    num: 16,
    question:
      '다음 설명에 해당하는 라우팅 프로토콜의 이름을 쓰시오.\n"링크 상태(Link State) 알고리즘(다익스트라)으로 망 전체의 상태를 수집하여 최단 경로를 계산하고, 변화가 발생했을 때만 갱신하여 대규모 네트워크에 적합한 IGP 라우팅 프로토콜이다."',
    answers: ['OSPF', 'ospf', 'Open Shortest Path First'],
    answerLabel: 'OSPF',
    explanation:
      '"링크 상태 · 다익스트라 · 대규모 · IGP"의 조합은 OSPF다. 거리 벡터 · 최대 15홉이면 RIP, AS(자율 시스템) 간 라우팅이면 BGP다.',
  },
  {
    num: 17,
    question:
      '패킷 교환의 두 방식 중, 전송 전에 논리적인 경로를 미리 설정한 뒤 모든 패킷을 같은 경로로 전달하여 도착 순서가 보장되는 연결형 방식의 이름을 쓰시오.',
    answers: ['가상 회선', '가상회선', 'virtual circuit', '가상 회선 방식', 'VC'],
    answerLabel: '가상 회선 (Virtual Circuit)',
    explanation:
      '"경로 미리 설정 · 같은 경로 · 순서 보장 · 연결형"은 가상 회선 방식이다. 반대로 패킷마다 독립적인 경로로 전송되어 순서가 보장되지 않는 비연결형 방식은 데이터그램 방식이다.',
  },
  {
    num: 18,
    question:
      'IPv6의 주소 유형 중, 그룹에 속한 인터페이스 가운데 가장 가까운 하나에게만 전달하는 방식의 이름을 쓰시오.',
    answers: ['애니캐스트', 'anycast', '애니 캐스트', 'Anycast'],
    answerLabel: '애니캐스트 (Anycast)',
    explanation:
      'IPv6의 주소 유형 3가지는 유니캐스트(1:1) · 멀티캐스트(1:그룹) · 애니캐스트(그룹 중 가장 가까운 하나)다. IPv6에는 브로드캐스트가 없고 애니캐스트가 새로 도입되었다.',
  },
  {
    num: 19,
    question:
      '다음 설명에 해당하는 용어를 쓰시오.\n"내부 네트워크의 사설 IP 주소를 공인 IP 주소로 변환하여 외부 인터넷과 통신할 수 있게 하는 기술로, 공인 IP 부족 문제를 완화하고 내부 주소를 감추는 효과가 있다."',
    answers: ['NAT', 'nat', '네트워크 주소 변환', 'Network Address Translation'],
    answerLabel: 'NAT',
    explanation:
      'NAT(Network Address Translation)는 사설 IP ↔ 공인 IP를 변환하는 기술이다. "사설 IP를 공인 IP로 변환"이라는 키워드가 나오면 답은 NAT.',
  },
  {
    num: 20,
    question:
      '암호화된 원격 접속을 제공하는 프로토콜 SSH가 사용하는 잘 알려진(well-known) 포트 번호를 쓰시오.',
    answers: ['22', '22번', '22번 포트'],
    answerLabel: '22',
    explanation:
      'SSH의 잘 알려진 포트는 22번이다. 함께 자주 출제되는 포트로 Telnet 23, SMTP 25, DNS 53, HTTP 80, HTTPS 443이 있다.',
  },
]

export default defineComponent({
  name: 'VariantNetworkBasicsPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 네트워크 기초 활용</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 숫자·코드·보기를 바꾼 변형 문제입니다.
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

        <footer>기출 변형 — 네트워크 기초 활용 · 20문항 · 2026-09</footer>
      </div>
    )
  },
})
