import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import './engineer-home.css'

interface TopicEntry {
  num: string
  slug: string
  title: string
}

const TOPICS: TopicEntry[] = [
  { num: '01', slug: 'sw-methodology', title: '소프트웨어 개발 방법론과 프로젝트 관리' },
  { num: '02', slug: 'current-system', title: '현행 시스템 분석과 요구사항 확인' },
  { num: '03', slug: 'ui-requirements', title: 'UI 요구사항 확인과 UI 지침' },
  { num: '04', slug: 'ui-design', title: 'UI 설계와 UML' },
  { num: '05', slug: 'data-model', title: '데이터 저장소와 데이터 모델' },
  { num: '06', slug: 'data-usage', title: '데이터 기초 활용과 데이터베이스 종류' },
  { num: '07', slug: 'integration-concept', title: '연계 메커니즘 구성과 개념' },
  { num: '08', slug: 'integration-impl', title: '내외부 연계 모듈 구현' },
  { num: '09', slug: 'interface-impl', title: '인터페이스 기능 구현' },
  { num: '10', slug: 'number-system', title: '프로그래밍 기본 — 진수와 데이터 표현' },
  { num: '11', slug: 'c-language', title: 'C언어 총정리' },
  { num: '12', slug: 'java-language', title: '자바(Java) 총정리' },
  { num: '13', slug: 'python-language', title: '파이썬(Python) 총정리' },
  { num: '14', slug: 'db-transaction', title: '데이터베이스 기본과 트랜잭션' },
  { num: '15', slug: 'applied-sql', title: '응용 SQL과 집계성 SQL' },
  { num: '16', slug: 'sql-optimization', title: 'SQL 활용 — 절차형 SQL과 SQL 최적화' },
  { num: '17', slug: 'dev-environment', title: '개발환경 구축' },
  { num: '18', slug: 'module-impl', title: '모듈 구현과 모듈 테스트' },
  { num: '19', slug: 'security-design', title: '소프트웨어 개발 보안 설계' },
  { num: '20', slug: 'security-impl', title: '소프트웨어 개발 보안 구현과 보안 용어' },
  { num: '21', slug: 'test-design', title: '애플리케이션 테스트 케이스 설계' },
  { num: '22', slug: 'integration-test', title: '애플리케이션 통합 테스트와 결함 관리' },
  { num: '23', slug: 'performance-improve', title: '애플리케이션 성능 분석과 개선' },
  { num: '24', slug: 'os-basics', title: '운영체제 — 특징, 종류, 명령어, 핵심 기능' },
  { num: '25', slug: 'network-basics', title: '네트워크 기초 활용' },
  { num: '26', slug: 'dev-infra', title: '개발 인프라 구축과 신기술 용어' },
  { num: '27', slug: 'sw-packaging', title: '제품 소프트웨어 패키징' },
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
            실기 대비 주제별 정리와 기출 변형문제 모음입니다.
            <strong> [정리]</strong>를 누르면 개념 정리 문서로, <strong>[문제]</strong>를 누르면 해당 주제의 변형문제 20문항으로 이동합니다.
          </p>
        </header>

        <div class="topic-list">
          {TOPICS.map((t) => (
            <div class="topic-row" key={t.slug}>
              <span class="row-num">{t.num}</span>
              <RouterLink class="row-title" to={`/engineer/${t.slug}`}>{t.title}</RouterLink>
              <RouterLink class="row-btn summary" to={`/engineer/${t.slug}`}>정리</RouterLink>
              <RouterLink class="row-btn quiz" to={`/variant/${t.slug}`}>문제</RouterLink>
            </div>
          ))}
        </div>

        <footer>정보처리기사 실기 대비 학습 문서 모음 · 2026-09</footer>
      </div>
    )
  },
})
