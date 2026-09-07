import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // ---------- 학습 노트 ----------
    {
      path: '/',
      component: () => import('./pages/home/HomePage'),
      meta: { title: '개발 학습 노트 — 인증 보안 · 인프라 · 프레임워크 · 데이터베이스' },
    },
    {
      path: '/auth-security',
      component: () => import('./pages/auth-security/AuthSecurityPage'),
      meta: { title: '로그인/회원가입 시스템 보안 — JWT, OAuth, SSO, Keycloak' },
    },
    {
      path: '/infra',
      component: () => import('./pages/infra/InfraPage'),
      meta: { title: '인프라 구조 완전 정리 — MSA, Docker, Kubernetes, CI/CD' },
    },
    {
      path: '/frameworks',
      component: () => import('./pages/frameworks/FrameworksPage'),
      meta: { title: '프론트엔드·백엔드 프레임워크 총정리' },
    },
    {
      path: '/database',
      component: () => import('./pages/database/DatabasePage'),
      meta: { title: '데이터베이스 완전 정리 — RDB, SQL, 인덱스, 트랜잭션, NoSQL' },
    },

    // ---------- 정보처리기사 한눈에 보기 (폴더) ----------
    {
      path: '/engineer',
      component: () => import('./pages/engineer/home/EngineerHomePage'),
      meta: { title: '정보처리기사 한눈에 보기 — 실기 대비 주제별 정리' },
    },
    {
      path: '/engineer/sw-methodology',
      component: () => import('./pages/engineer/sw-methodology/SwMethodologyPage'),
      meta: { title: '소프트웨어 개발 방법론과 프로젝트 관리' },
    },
    {
      path: '/engineer/current-system',
      component: () => import('./pages/engineer/current-system/CurrentSystemPage'),
      meta: { title: '현행 시스템 분석과 요구사항 확인' },
    },
    {
      path: '/engineer/ui-requirements',
      component: () => import('./pages/engineer/ui-requirements/UiRequirementsPage'),
      meta: { title: 'UI 요구사항 확인과 UI 지침' },
    },
    {
      path: '/engineer/ui-design',
      component: () => import('./pages/engineer/ui-design/UiDesignPage'),
      meta: { title: 'UI 설계와 UML' },
    },
    {
      path: '/engineer/data-model',
      component: () => import('./pages/engineer/data-model/DataModelPage'),
      meta: { title: '데이터 저장소와 데이터 모델 — 논리·물리 데이터 모델' },
    },
    {
      path: '/engineer/data-usage',
      component: () => import('./pages/engineer/data-usage/DataUsagePage'),
      meta: { title: '데이터 기초 활용과 데이터베이스 종류' },
    },
    {
      path: '/engineer/integration-concept',
      component: () => import('./pages/engineer/integration-concept/IntegrationConceptPage'),
      meta: { title: '연계 메커니즘 구성과 개념' },
    },
    {
      path: '/engineer/integration-impl',
      component: () => import('./pages/engineer/integration-impl/IntegrationImplPage'),
      meta: { title: '내외부 연계 모듈 구현 — 환경 구성과 개발' },
    },
    {
      path: '/engineer/interface-impl',
      component: () => import('./pages/engineer/interface-impl/InterfaceImplPage'),
      meta: { title: '인터페이스 기능 구현' },
    },
    {
      path: '/engineer/number-system',
      component: () => import('./pages/engineer/number-system/NumberSystemPage'),
      meta: { title: '프로그래밍 기본 — 진수와 데이터 표현' },
    },
    {
      path: '/engineer/c-language',
      component: () => import('./pages/engineer/c-language/CLanguagePage'),
      meta: { title: 'C언어 총정리' },
    },
    {
      path: '/engineer/java-language',
      component: () => import('./pages/engineer/java-language/JavaLanguagePage'),
      meta: { title: '자바(Java) 총정리' },
    },
    {
      path: '/engineer/python-language',
      component: () => import('./pages/engineer/python-language/PythonLanguagePage'),
      meta: { title: '파이썬(Python) 총정리' },
    },
    {
      path: '/engineer/db-transaction',
      component: () => import('./pages/engineer/db-transaction/DbTransactionPage'),
      meta: { title: '데이터베이스 기본과 트랜잭션' },
    },
    {
      path: '/engineer/applied-sql',
      component: () => import('./pages/engineer/applied-sql/AppliedSqlPage'),
      meta: { title: '응용 SQL과 집계성 SQL' },
    },
    {
      path: '/engineer/sql-optimization',
      component: () => import('./pages/engineer/sql-optimization/SqlOptimizationPage'),
      meta: { title: 'SQL 활용 — 절차형 SQL과 SQL 최적화' },
    },
    {
      path: '/engineer/dev-environment',
      component: () => import('./pages/engineer/dev-environment/DevEnvironmentPage'),
      meta: { title: '개발환경 구축' },
    },
    {
      path: '/engineer/module-impl',
      component: () => import('./pages/engineer/module-impl/ModuleImplPage'),
      meta: { title: '모듈 구현과 모듈 테스트' },
    },
    {
      path: '/engineer/security-design',
      component: () => import('./pages/engineer/security-design/SecurityDesignPage'),
      meta: { title: '소프트웨어 개발 보안 설계' },
    },
    {
      path: '/engineer/security-impl',
      component: () => import('./pages/engineer/security-impl/SecurityImplPage'),
      meta: { title: '소프트웨어 개발 보안 구현과 보안 용어' },
    },
    {
      path: '/engineer/test-design',
      component: () => import('./pages/engineer/test-design/TestDesignPage'),
      meta: { title: '애플리케이션 테스트 케이스 설계' },
    },
    {
      path: '/engineer/integration-test',
      component: () => import('./pages/engineer/integration-test/IntegrationTestPage'),
      meta: { title: '애플리케이션 통합 테스트와 결함 관리' },
    },
    {
      path: '/engineer/performance-improve',
      component: () => import('./pages/engineer/performance-improve/PerformanceImprovePage'),
      meta: { title: '애플리케이션 성능 분석과 개선' },
    },
    {
      path: '/engineer/os-basics',
      component: () => import('./pages/engineer/os-basics/OsBasicsPage'),
      meta: { title: '운영체제 — 특징, 종류, 명령어, 핵심 기능' },
    },
    {
      path: '/engineer/network-basics',
      component: () => import('./pages/engineer/network-basics/NetworkBasicsPage'),
      meta: { title: '네트워크 기초 활용 — 계층 구조, 프로토콜, 전달 방식' },
    },
    {
      path: '/engineer/dev-infra',
      component: () => import('./pages/engineer/dev-infra/DevInfraPage'),
      meta: { title: '개발 인프라 구축과 신기술 용어' },
    },
    {
      path: '/engineer/sw-packaging',
      component: () => import('./pages/engineer/sw-packaging/SwPackagingPage'),
      meta: { title: '제품 소프트웨어 패키징' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (typeof to.meta.title === 'string') document.title = to.meta.title
})
