import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import './home.css'

interface DocEntry {
  num: string
  path: string
  title: string
  desc: string
}

const NOTES: DocEntry[] = [
  {
    num: '01',
    path: '/auth-security',
    title: '로그인/회원가입 시스템 보안 완전 정리',
    desc: '비밀번호 해시 · 세션 vs 토큰 · JWT · OAuth 2.0 / OIDC · SSO · Keycloak · MSA 인증 구조',
  },
  {
    num: '02',
    path: '/infra',
    title: '인프라 구조 완전 정리',
    desc: '모놀리식 · 스케일링 · MSA · Docker · Kubernetes(K8s/K3s/K9s) · 배포 전략 · CI/CD와 GitOps',
  },
  {
    num: '03',
    path: '/frameworks',
    title: '프론트엔드·백엔드 프레임워크 총정리',
    desc: 'React / Vue / Angular / Svelte · Spring / Node / Django / FastAPI / Go · 사용 순위 차트 · 상황별 선택 가이드',
  },
  {
    num: '04',
    path: '/database',
    title: '데이터베이스 완전 정리',
    desc: 'RDB · SQL · 인덱스 · 트랜잭션과 ACID · 격리 수준 · 정규화 · NoSQL과 CAP · 레플리케이션/샤딩/캐시 · ORM',
  },
]

export default defineComponent({
  name: 'HomePage',
  setup() {
    return () => (
      <div class="wrap">
        <header class="hero">
          <h1>개발 학습 노트</h1>
          <p>
            도면과 흐름 애니메이션으로 정리한 학습 문서 모음입니다. 제목을 클릭하면 해당 문서 페이지로 이동합니다.
          </p>
        </header>

        <div class="group-title">학습 노트</div>
        {NOTES.map((doc) => (
          <RouterLink class="doc-card" to={doc.path} key={doc.path}>
            <span class="doc-num">{doc.num}</span>
            <span class="doc-title">
              <strong>{doc.title}</strong>
              <span>{doc.desc}</span>
            </span>
            <span class="chev" aria-hidden="true"></span>
          </RouterLink>
        ))}

        <div class="group-title">폴더</div>
        <RouterLink class="doc-card folder" to="/engineer">
          <span class="doc-num">폴더</span>
          <span class="doc-title">
            <strong>정보처리기사 한눈에 보기</strong>
            <span>실기 대비 27개 주제 정리 — 방법론 · UI/UML · 데이터 모델 · 연계 · 프로그래밍(C/Java/Python) · SQL · 보안 · 테스트 · OS · 네트워크 · 패키징 · 주제별 실전 문제 10문항</span>
          </span>
          <span class="chev" aria-hidden="true"></span>
        </RouterLink>

        <footer>
          05solar · <a href="https://github.com/05solar/study" rel="noopener">github.com/05solar/study</a>
        </footer>
      </div>
    )
  },
})
