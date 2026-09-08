import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import './variant-home.css'

interface DocEntry {
  num: string
  slug: string
  title: string
  desc: string
}

const TOPICS: DocEntry[] = [
  { num: '01', slug: 'sw-methodology', title: '소프트웨어 개발 방법론과 프로젝트 관리', desc: '나선형·애자일·COCOMO·CPM·CMMI 변형 20문제' },
  { num: '02', slug: 'current-system', title: '현행 시스템 분석과 요구사항 확인', desc: '요구공학·DFD·자료 사전·인스펙션 변형 20문제' },
  { num: '03', slug: 'ui-requirements', title: 'UI 요구사항 확인과 UI 지침', desc: 'UI 설계 원칙·NUI/OUI·웹 3요소·ISO 9126 변형 20문제' },
  { num: '04', slug: 'ui-design', title: 'UI 설계와 UML', desc: 'UML 관계·다이어그램·목업/프로토타입 변형 20문제' },
  { num: '05', slug: 'data-model', title: '데이터 저장소와 데이터 모델', desc: '키·무결성·정규화·반정규화·ERD 변형 20문제' },
  { num: '06', slug: 'data-usage', title: '데이터 기초 활용과 데이터베이스 종류', desc: '스키마 3계층·SQL 분류·DW/OLAP 변형 20문제' },
  { num: '07', slug: 'integration-concept', title: '연계 메커니즘 구성과 개념', desc: '직접/간접 연계·송수신 체계·동기/비동기 변형 20문제' },
  { num: '08', slug: 'integration-impl', title: '내외부 연계 모듈 구현', desc: 'EAI 유형·SOAP/WSDL/UDDI·REST 변형 20문제' },
  { num: '09', slug: 'interface-impl', title: '인터페이스 기능 구현', desc: '검증 도구·AJAX/JSON·IPSec/SSL 변형 20문제' },
  { num: '10', slug: 'number-system', title: '진수와 데이터 표현', desc: '진법 변환·보수·비트 연산 계산 변형 20문제' },
  { num: '11', slug: 'c-language', title: 'C언어', desc: '출력 결과 예측 — 포인터·배열·재귀·구조체 변형 20문제' },
  { num: '12', slug: 'java-language', title: '자바(Java)', desc: '출력 결과 예측 — 상속·다형성·static·예외 변형 20문제' },
  { num: '13', slug: 'python-language', title: '파이썬(Python)', desc: '출력 결과 예측 — 슬라이싱·컬렉션·클래스 변형 20문제' },
  { num: '14', slug: 'db-transaction', title: '데이터베이스 기본과 트랜잭션', desc: '관계 대수·ACID·병행 제어·회복 변형 20문제' },
  { num: '15', slug: 'applied-sql', title: '응용 SQL과 집계성 SQL', desc: 'SQL 결과 예측 — 집계·JOIN·윈도 함수 변형 20문제' },
  { num: '16', slug: 'sql-optimization', title: '절차형 SQL과 SQL 최적화', desc: '프로시저·트리거·커서·옵티마이저 변형 20문제' },
  { num: '17', slug: 'dev-environment', title: '개발환경 구축', desc: '형상 관리·Git·WAS·빌드 도구 변형 20문제' },
  { num: '18', slug: 'module-impl', title: '모듈 구현과 모듈 테스트', desc: '응집도/결합도·팬인/팬아웃·커버리지 변형 20문제' },
  { num: '19', slug: 'security-design', title: '소프트웨어 개발 보안 설계', desc: '보안 3요소·시큐어 코딩·암호 알고리즘 변형 20문제' },
  { num: '20', slug: 'security-impl', title: '소프트웨어 개발 보안 구현과 보안 용어', desc: '공격 기법·접근 통제·보안 솔루션 변형 20문제' },
  { num: '21', slug: 'test-design', title: '애플리케이션 테스트 케이스 설계', desc: '블랙박스 기법·커버리지·오라클 변형 20문제' },
  { num: '22', slug: 'integration-test', title: '애플리케이션 통합 테스트와 결함 관리', desc: '스텁/드라이버·회귀·결함 생명주기 변형 20문제' },
  { num: '23', slug: 'performance-improve', title: '애플리케이션 성능 분석과 개선', desc: '성능 지표·클린 코드·복잡도 변형 20문제' },
  { num: '24', slug: 'os-basics', title: '운영체제', desc: 'HRN·페이지 교체·chmod 계산 변형 20문제' },
  { num: '25', slug: 'network-basics', title: '네트워크 기초 활용', desc: '서브네팅·프로토콜·OSI 계층 변형 20문제' },
  { num: '26', slug: 'dev-infra', title: '개발 인프라 구축과 신기술 용어', desc: '클라우드·스토리지·신기술 용어 변형 20문제' },
  { num: '27', slug: 'sw-packaging', title: '제품 소프트웨어 패키징', desc: 'DRM·릴리스 노트·ISO 25000 변형 20문제' },
]

export default defineComponent({
  name: 'VariantHomePage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/">← 전체 목록으로</RouterLink></p>
        <header class="hero">
          <h1>기출 변형문제 — 주제별 20문제</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 숫자·코드·보기를 바꾼 변형 문제입니다.
            정답을 입력하고 제출하면 채점되며, 맞으면 해설이, 틀리면 정답과 해설이 함께 표시됩니다.
          </p>
        </header>

        {TOPICS.map((t) => (
          <RouterLink class="doc-card" to={`/variant/${t.slug}`} key={t.slug}>
            <span class="doc-num">{t.num}</span>
            <span class="doc-title">
              <strong>{t.title}</strong>
              <span>{t.desc}</span>
            </span>
            <span class="chev" aria-hidden="true"></span>
          </RouterLink>
        ))}

        <footer>정보처리기사 실기 기출 변형문제 모음 · 2026-09</footer>
      </div>
    )
  },
})
