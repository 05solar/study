import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import './engineer-home.css'

interface DocEntry {
  num: string
  path: string
  title: string
  desc: string
}

const DOCS: DocEntry[] = [
  { num: '01', path: '/engineer/sw-methodology', title: '소프트웨어 개발 방법론과 프로젝트 관리', desc: 'SDLC(폭포수/나선형) · 애자일(XP/스크럼) · 테일러링 · COCOMO/FP/LOC · CPM · CMMI/SPICE' },
  { num: '02', path: '/engineer/current-system', title: '현행 시스템 분석과 요구사항 확인', desc: '시스템 파악 3단계 · 플랫폼/OS/DBMS 분석 · 요구공학 4단계 · DFD·자료 사전 · 인스펙션' },
  { num: '03', path: '/engineer/ui-requirements', title: 'UI 요구사항 확인과 UI 지침', desc: 'UI/UX · CLI→GUI→NUI→OUI · 설계 원칙 4가지 · 웹 3요소 · ISO 9126 · 감성공학' },
  { num: '04', path: '/engineer/ui-design', title: 'UI 설계와 UML', desc: '와이어프레임/목업/스토리보드/프로토타입 · UML 사물·관계 6종·다이어그램 13종 · 시퀀스' },
  { num: '05', path: '/engineer/data-model', title: '데이터 저장소와 데이터 모델', desc: '모델 3요소 · 개념/논리/물리 설계 · ERD · 키 5종·무결성 · 정규화(도부이결다조) · 반정규화' },
  { num: '06', path: '/engineer/data-usage', title: '데이터 기초 활용과 데이터베이스 종류', desc: 'DB 정의 4가지 · DBMS 기능 3가지 · 스키마 3계층 · SQL 분류 · 절차형 SQL · DW/OLAP' },
  { num: '07', path: '/engineer/integration-concept', title: '연계 메커니즘 구성과 개념', desc: '송신/중계/수신 체계 · 직접 vs 간접 연계 · 동기/비동기 · 연계 데이터 보안' },
  { num: '08', path: '/engineer/integration-impl', title: '내외부 연계 모듈 구현', desc: 'EAI 4유형 · ESB · SOAP/WSDL/UDDI · REST · XML vs JSON · IPC · 연계 테스트' },
  { num: '09', path: '/engineer/interface-impl', title: '인터페이스 기능 구현', desc: '인터페이스 설계서 · JSON/XML/AJAX 데이터 통신 · 인터페이스 보안(IPSec/SSL) · 검증 도구(xUnit/STAF/Selenium) · APM' },
  { num: '10', path: '/engineer/number-system', title: '프로그래밍 기본 — 진수와 데이터 표현', desc: '2/8/10/16진수 변환 · 보수(1의/2의 보수) · 비트 연산 · 문자 인코딩(ASCII/유니코드)' },
  { num: '11', path: '/engineer/c-language', title: 'C언어 총정리', desc: '자료형·식별자·변수 · 연산자 우선순위 · 조건/반복문 · 배열·문자열 · 구조체/공용체 · 함수 · 포인터 · 메모리 할당' },
  { num: '12', path: '/engineer/java-language', title: '자바(Java) 총정리', desc: '기본 구조 · 자료형·배열·문자열 · for-each · 메서드 · 클래스와 상속 · 추상 클래스/인터페이스 · 제네릭 · 예외 처리' },
  { num: '13', path: '/engineer/python-language', title: '파이썬(Python) 총정리', desc: '기본 구조 · 자료형(리스트/튜플/딕셔너리/셋) · 입출력 · 연산자 · 조건/반복문 · 함수 · 클래스와 상속' },
  { num: '14', path: '/engineer/db-transaction', title: '데이터베이스 기본과 트랜잭션', desc: '관계 대수/해석 · 트랜잭션 ACID·상태 5가지 · 병행 제어(로킹) · 회복(REDO/UNDO·체크포인트)' },
  { num: '15', path: '/engineer/applied-sql', title: '응용 SQL과 집계성 SQL', desc: 'JOIN 유형 · GROUP BY/HAVING · 집계 함수 · ROLLUP/CUBE/GROUPING SETS · 윈도 함수(RANK 등) · DCL' },
  { num: '16', path: '/engineer/sql-optimization', title: 'SQL 활용 — 절차형 SQL과 최적화', desc: '프로시저/사용자 정의 함수/트리거 · 커서 · 옵티마이저(RBO/CBO) · 실행 계획 · 인덱스 튜닝 · 힌트' },
  { num: '17', path: '/engineer/dev-environment', title: '개발환경 구축', desc: '개발 도구 분류 · WEB/WAS/DB 서버 · 형상 관리(Git/SVN) · 빌드 도구(Maven/Gradle) · IDE·협업 도구' },
  { num: '18', path: '/engineer/module-impl', title: '모듈 구현과 모듈 테스트', desc: '모듈화 · 응집도 7단계·결합도 7단계 · 팬인/팬아웃 · 공통 모듈 · 단위 테스트 · 테스트 커버리지' },
  { num: '19', path: '/engineer/security-design', title: '소프트웨어 개발 보안 설계', desc: '보안 3요소(기밀성/무결성/가용성) · 시큐어 코딩 가이드 7항목 · 암호 알고리즘(대칭/비대칭/해시)' },
  { num: '20', path: '/engineer/security-impl', title: '소프트웨어 개발 보안 구현과 보안 용어', desc: '인증·접근 통제(DAC/MAC/RBAC) · 보안 솔루션(IDS/IPS/VPN 등) · 공격 기법 용어 · BCP/DRP · 결함 관리' },
  { num: '21', path: '/engineer/test-design', title: '애플리케이션 테스트 케이스 설계', desc: '테스트 원리 7가지 · 화이트박스 커버리지 · 블랙박스 기법(동등 분할/경계값 등) · V모델 · 테스트 오라클' },
  { num: '22', path: '/engineer/integration-test', title: '애플리케이션 통합 테스트와 결함 관리', desc: '하향식/상향식(스텁·드라이버) · 빅뱅 · 회귀 테스트 · 테스트 하네스 · 결함 생명주기' },
  { num: '23', path: '/engineer/performance-improve', title: '애플리케이션 성능 분석과 개선', desc: '성능 지표 4가지 · 모니터링 · 클린 코드/리팩토링 · 소스 품질 분석 도구(정적/동적) · 빅오 복잡도' },
  { num: '24', path: '/engineer/os-basics', title: '운영체제 — 특징, 종류, 명령어, 핵심 기능', desc: '프로세스 상태·스케줄링(FCFS/SJF/RR/HRN) · 페이지 교체(FIFO/LRU) · 교착상태 4조건 · chmod 등 명령어' },
  { num: '25', path: '/engineer/network-basics', title: '네트워크 기초 활용', desc: 'OSI 7계층 · TCP/IP · 프로토콜(TCP/UDP/ARP/ICMP) · IP 주소·서브네팅 · 라우팅(RIP/OSPF) · 전달 방식 · 용어' },
  { num: '26', path: '/engineer/dev-infra', title: '개발 인프라 구축과 신기술 용어', desc: '클라우드(IaaS/PaaS/SaaS) · 가상화·컨테이너 · SDN/NFV · 블록체인·디지털 트윈 등 신기술 용어 사전' },
  { num: '27', path: '/engineer/sw-packaging', title: '제품 소프트웨어 패키징', desc: '패키징 순서 · 릴리스 노트 · DRM 구성 요소 · 매뉴얼 · ISO 9126/25000 · 버전 관리(체크인/아웃) · 빌드 자동화' },
]

export default defineComponent({
  name: 'EngineerHomePage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/">← 전체 목록으로</RouterLink></p>
        <header class="hero">
          <h1>정보처리기사 한눈에 보기</h1>
          <p>
            정보처리기사 실기 대비 주제별 정리 문서 모음입니다. 각 문서 끝에는 실기 출제 형식의 실전 문제 10문항이 있습니다.
          </p>
        </header>

        {DOCS.map((doc) => (
          <RouterLink class="doc-card" to={doc.path} key={doc.path}>
            <span class="doc-num">{doc.num}</span>
            <span class="doc-title">
              <strong>{doc.title}</strong>
              <span>{doc.desc}</span>
            </span>
            <span class="chev" aria-hidden="true"></span>
          </RouterLink>
        ))}

        <footer>정보처리기사 실기 대비 학습 문서 모음 · 2026-09</footer>
      </div>
    )
  },
})
