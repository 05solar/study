import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../shared/ArrowDefs'
import { useFlowAnimation } from '../../shared/useFlowAnimation'
import { scrollToId } from '../../shared/scroll'
import './database.css'

export default defineComponent({
  name: 'DatabasePage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/">← 목록으로</RouterLink></p>

        <header class="hero">
          <h1>데이터베이스 완전 정리</h1>
          <p>관계형 DB → SQL → 인덱스 → 트랜잭션 → 정규화 → NoSQL → 확장 전략(레플리케이션·샤딩·캐시) 순서로,<br/>
          백엔드 개발자가 알아야 할 데이터베이스 개념을 도면과 흐름 애니메이션으로 정리한 학습 문서입니다.<br/>
          <span>각 도면의 파란 점은 데이터의 이동을 나타내며, 현재 진행 중인 단계가 진하게 강조됩니다. 자동으로 반복 재생됩니다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#basics" onClick={(e) => scrollToId(e, 'basics')}>데이터베이스 기초 — DB, DBMS, SQL</a></li>
            <li><a href="#rdb" onClick={(e) => scrollToId(e, 'rdb')}>관계형 데이터베이스 — 테이블, 키, 관계</a></li>
            <li><a href="#sql" onClick={(e) => scrollToId(e, 'sql')}>SQL 핵심 — CRUD와 JOIN</a></li>
            <li><a href="#index" onClick={(e) => scrollToId(e, 'index')}>인덱스 — 조회를 빠르게</a></li>
            <li><a href="#transaction" onClick={(e) => scrollToId(e, 'transaction')}>트랜잭션과 ACID</a></li>
            <li><a href="#isolation" onClick={(e) => scrollToId(e, 'isolation')}>격리 수준과 동시성 제어</a></li>
            <li><a href="#normalization" onClick={(e) => scrollToId(e, 'normalization')}>정규화와 역정규화</a></li>
            <li><a href="#nosql" onClick={(e) => scrollToId(e, 'nosql')}>NoSQL — 종류와 CAP 이론</a></li>
            <li><a href="#choice" onClick={(e) => scrollToId(e, 'choice')}>RDB vs NoSQL 선택 가이드</a></li>
            <li><a href="#scaling" onClick={(e) => scrollToId(e, 'scaling')}>확장 전략 — 레플리케이션 · 샤딩 · 캐시</a></li>
            <li><a href="#orm" onClick={(e) => scrollToId(e, 'orm')}>ORM과 커넥션 풀</a></li>
            <li><a href="#checklist" onClick={(e) => scrollToId(e, 'checklist')}>실전 체크리스트</a></li>
          </ol>
        </nav>

        <section id="basics">
          <h2>1. 데이터베이스 기초 — DB, DBMS, SQL</h2>
          <p class="sub">"데이터를 파일에 저장하면 안 되나?"에 대한 답이 데이터베이스의 존재 이유다.</p>

          <h3>1-1. 왜 그냥 파일이 아니라 데이터베이스인가</h3>
          <p>회원 정보를 <code>users.txt</code>에 저장한다고 상상해 보자. 금방 이런 문제에 부딪힌다.</p>
          <ul>
            <li><strong>검색이 느리다:</strong> 회원 100만 명 중 한 명을 찾으려면 파일 전체를 읽어야 한다.</li>
            <li><strong>동시 접근이 깨진다:</strong> 두 요청이 같은 파일을 동시에 수정하면 데이터가 엉킨다.</li>
            <li><strong>중간에 죽으면 복구 불가:</strong> 쓰는 도중 서버가 꺼지면 파일이 반쯤 깨진 상태로 남는다.</li>
            <li><strong>무결성 보장이 없다:</strong> 나이 칸에 "abc"가 들어가도 막을 방법이 없다.</li>
          </ul>
          <p>이 문제들을 전부 대신 해결해 주는 소프트웨어가 <strong>DBMS(Database Management System)</strong>다.
          MySQL, PostgreSQL, Oracle, MongoDB, Redis 전부 DBMS이고, 그 위에 만들어진 데이터 저장소가 <strong>DB(데이터베이스)</strong>다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 230" role="img" aria-label="애플리케이션과 DBMS의 관계 도면">
              <rect class="box" x="30" y="70" width="170" height="80" />
              <text x="115" y="102" text-anchor="middle" class="strong">애플리케이션</text>
              <text x="115" y="124" text-anchor="middle" class="small">Spring / Node / Django</text>

              <rect class="boxdark" x="330" y="55" width="240" height="110" />
              <text x="450" y="85" text-anchor="middle" class="strong">DBMS</text>
              <text x="450" y="108" text-anchor="middle" class="small">SQL 해석 · 실행 계획 수립</text>
              <text x="450" y="128" text-anchor="middle" class="small">동시성 제어 · 트랜잭션</text>
              <text x="450" y="148" text-anchor="middle" class="small">인덱스 · 캐시 · 복구</text>

              <rect class="box" x="700" y="70" width="170" height="80" />
              <text x="785" y="102" text-anchor="middle" class="strong">데이터 파일</text>
              <text x="785" y="124" text-anchor="middle" class="small">디스크 (데이터 + 로그)</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="200" y1="95" x2="324" y2="95" />
                <text x="262" y="48" text-anchor="middle" class="small">1. SQL 전송</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="570" y1="95" x2="694" y2="95" />
                <text x="632" y="48" text-anchor="middle" class="small">2. 최적 경로로 읽기/쓰기</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="694" y1="130" x2="570" y2="130" />
                <text x="632" y="185" text-anchor="middle" class="small">3. 데이터 반환</text>
              </g>
              <g class="msg" data-step="4">
                <line class="arrow ret" x1="324" y1="130" x2="200" y2="130" />
                <text x="262" y="185" text-anchor="middle" class="small">4. 결과(행 목록) 응답</text>
              </g>
            </svg>
            <figcaption>도면 1. 애플리케이션은 SQL만 보내고, 저장·검색·동시성·복구의 어려운 일은 전부 DBMS가 맡는다.</figcaption>
          </figure>

          <h3>1-2. 핵심 용어 한 줄 정리</h3>
          <table>
            <tr><th>용어</th><th>의미</th></tr>
            <tr><td><strong>DB</strong></td><td>데이터를 구조화해서 모아 둔 저장소 그 자체</td></tr>
            <tr><td><strong>DBMS</strong></td><td>DB를 만들고 관리하는 소프트웨어 (MySQL, PostgreSQL, Oracle, MongoDB...)</td></tr>
            <tr><td><strong>SQL</strong></td><td>관계형 DBMS에게 일을 시키는 표준 언어 (Structured Query Language)</td></tr>
            <tr><td><strong>RDB / RDBMS</strong></td><td>데이터를 표(테이블) 형태로 관리하는 관계형 DB / 그 DBMS</td></tr>
            <tr><td><strong>NoSQL</strong></td><td>표 형태가 아닌 다른 모델(문서, 키-값 등)로 저장하는 DB의 총칭</td></tr>
            <tr><td><strong>스키마</strong></td><td>"이 테이블에는 어떤 컬럼이 어떤 타입으로 들어간다"는 구조 정의</td></tr>
            <tr><td><strong>쿼리</strong></td><td>DB에 보내는 요청 하나 (조회, 삽입, 수정, 삭제...)</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            데이터베이스 공부의 뼈대는 결국 세 가지다.
            <strong>① 어떻게 구조화해서 저장할까(모델링·정규화)</strong>,
            <strong>② 어떻게 빨리 찾을까(인덱스)</strong>,
            <strong>③ 동시에 접근해도 어떻게 안 깨질까(트랜잭션)</strong>.
            이 문서 전체가 이 세 질문에 대한 답이다.
          </div>
        </section>

        <section id="rdb">
          <h2>2. 관계형 데이터베이스 — 테이블, 키, 관계</h2>
          <p class="sub">데이터를 엑셀 표처럼 행과 열로 저장하고, 표끼리 "관계"로 연결한다. 40년 넘게 표준의 자리를 지키는 모델.</p>

          <h3>2-1. 테이블의 구조</h3>
          <ul>
            <li><strong>테이블(Table):</strong> 하나의 주제를 담는 표. <code>users</code>, <code>posts</code>, <code>orders</code>...</li>
            <li><strong>행(Row, 레코드):</strong> 데이터 한 건. 회원 한 명, 주문 한 건.</li>
            <li><strong>열(Column, 컬럼):</strong> 데이터의 속성. 이름, 이메일, 가입일. 각 컬럼은 타입이 고정된다.</li>
          </ul>

          <h3>2-2. 키(Key) — 행을 식별하고 표를 연결하는 장치</h3>
          <table>
            <tr><th>키</th><th>역할</th><th>예시</th></tr>
            <tr>
              <td><strong>기본 키 (PK, Primary Key)</strong></td>
              <td>테이블 안에서 행 하나를 유일하게 식별. 중복 불가, NULL 불가</td>
              <td><code>users.id</code></td>
            </tr>
            <tr>
              <td><strong>외래 키 (FK, Foreign Key)</strong></td>
              <td>다른 테이블의 PK를 참조해서 관계를 만든다</td>
              <td><code>posts.user_id</code> → <code>users.id</code></td>
            </tr>
            <tr>
              <td><strong>유니크 키 (Unique)</strong></td>
              <td>PK는 아니지만 중복을 금지하고 싶은 컬럼</td>
              <td><code>users.email</code></td>
            </tr>
          </table>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 300" role="img" aria-label="users와 posts 테이블의 1:N 관계 도면">
              {/* users 테이블 */}
              <rect class="boxdark" x="60" y="40" width="300" height="36" />
              <text x="210" y="65" text-anchor="middle" class="strong">users (회원)</text>
              <rect class="box" x="60" y="76" width="300" height="30" />
              <text x="80" y="97" class="small strong">id (PK)</text>
              <text x="200" y="97" class="small">name</text>
              <text x="290" y="97" class="small">email</text>
              <rect class="boxsoft" x="60" y="106" width="300" height="30" />
              <text x="80" y="127" class="small">1</text>
              <text x="200" y="127" class="small">김솔</text>
              <text x="290" y="127" class="small">sol@x.kr</text>
              <rect class="boxsoft" x="60" y="136" width="300" height="30" />
              <text x="80" y="157" class="small">2</text>
              <text x="200" y="157" class="small">이달</text>
              <text x="290" y="157" class="small">dal@x.kr</text>

              {/* posts 테이블 */}
              <rect class="boxdark" x="540" y="40" width="320" height="36" />
              <text x="700" y="65" text-anchor="middle" class="strong">posts (게시글)</text>
              <rect class="box" x="540" y="76" width="320" height="30" />
              <text x="560" y="97" class="small strong">id (PK)</text>
              <text x="650" y="97" class="small strong">user_id (FK)</text>
              <text x="790" y="97" class="small">title</text>
              <rect class="boxsoft" x="540" y="106" width="320" height="30" />
              <text x="560" y="127" class="small">10</text>
              <text x="650" y="127" class="small">1</text>
              <text x="790" y="127" class="small">첫 글</text>
              <rect class="boxsoft" x="540" y="136" width="320" height="30" />
              <text x="560" y="157" class="small">11</text>
              <text x="650" y="157" class="small">1</text>
              <text x="790" y="157" class="small">둘째 글</text>
              <rect class="boxsoft" x="540" y="166" width="320" height="30" />
              <text x="560" y="187" class="small">12</text>
              <text x="650" y="187" class="small">2</text>
              <text x="790" y="187" class="small">안녕하세요</text>

              {/* 관계선 */}
              <path class="arrow" d="M 540 121 C 460 121 440 121 360 121" />
              <path class="arrow" d="M 540 151 C 460 151 440 140 360 126" />
              <path class="arrow" d="M 540 181 C 460 181 440 165 360 151" />
              <text x="450" y="230" text-anchor="middle" class="small">posts.user_id는 users.id를 참조한다</text>
              <text x="450" y="252" text-anchor="middle" class="small strong">회원 1명 : 게시글 N개 — "1:N 관계"</text>
              <text x="450" y="276" text-anchor="middle" class="small">존재하지 않는 회원 번호로는 글을 만들 수 없다 (참조 무결성)</text>
            </svg>
            <figcaption>도면 2. FK가 두 테이블을 잇는다. "김솔(1번)의 글"은 posts에서 user_id=1인 행을 찾으면 된다.</figcaption>
          </figure>

          <h3>2-3. 관계의 세 가지 형태</h3>
          <table>
            <tr><th>관계</th><th>예시</th><th>구현 방법</th></tr>
            <tr><td><strong>1:1</strong></td><td>회원 — 회원상세정보</td><td>한쪽 테이블에 FK + Unique 제약</td></tr>
            <tr><td><strong>1:N</strong></td><td>회원 — 게시글, 카테고리 — 상품</td><td>N쪽 테이블에 FK (가장 흔한 형태)</td></tr>
            <tr><td><strong>N:M</strong></td><td>학생 — 수업, 게시글 — 태그</td><td>중간(연결) 테이블을 하나 두고 1:N 두 개로 분해</td></tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            N:M 관계는 테이블 두 개만으로는 표현할 수 없다.
            <code>student_class(student_id, class_id)</code> 같은 <strong>중간 테이블</strong>을 만들어
            1:N + N:1로 풀어내는 것이 관계형 모델링의 기본기다.
          </div>
        </section>

        <section id="sql">
          <h2>3. SQL 핵심 — CRUD와 JOIN</h2>
          <p class="sub">SQL은 "무엇을 원하는지"만 선언하는 언어다. "어떻게 찾을지"는 DBMS가 알아서 정한다.</p>

          <h3>3-1. CRUD — 데이터 조작의 네 가지</h3>
          <pre><code>{`-- C: 생성 (Create)
INSERT INTO users (name, email) VALUES ('김솔', 'sol@x.kr');

-- R: 조회 (Read)
SELECT id, name FROM users WHERE email = 'sol@x.kr';

-- U: 수정 (Update)  ※ WHERE를 빼먹으면 전체 행이 수정된다!
UPDATE users SET name = '김솔하' WHERE id = 1;

-- D: 삭제 (Delete)  ※ 역시 WHERE 필수
DELETE FROM users WHERE id = 1;`}</code></pre>

          <h3>3-2. 자주 쓰는 조회 문법</h3>
          <pre><code>{`SELECT u.name, COUNT(p.id) AS post_count   -- 필요한 컬럼만
FROM users u
JOIN posts p ON p.user_id = u.id           -- 테이블 연결
WHERE u.created_at >= '2026-01-01'         -- 조건 (행 필터)
GROUP BY u.id, u.name                      -- 그룹화 (집계 단위)
HAVING COUNT(p.id) >= 3                    -- 집계 결과 필터
ORDER BY post_count DESC                   -- 정렬
LIMIT 10;                                  -- 개수 제한 (페이징)`}</code></pre>
          <p>실행 순서는 쓰는 순서와 다르다:
          <code>FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</code>.
          WHERE에서 집계함수를 못 쓰는 이유가 이것이다(집계 전에 실행되므로).</p>

          <h3>3-3. JOIN — 나눠 둔 표를 다시 합치기</h3>
          <p>정규화(7장)로 나눠 둔 테이블을 조회할 때 합치는 도구. 방향에 따라 결과가 달라진다.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250" role="img" aria-label="INNER JOIN과 LEFT JOIN의 차이 도면">
              {/* INNER */}
              <rect class="boxdark" x="60" y="30" width="330" height="36" />
              <text x="225" y="55" text-anchor="middle" class="strong">INNER JOIN</text>
              <rect class="box" x="60" y="66" width="330" height="120" />
              <text x="225" y="95" text-anchor="middle" class="small">양쪽 모두에 존재하는 행만 반환</text>
              <text x="225" y="125" text-anchor="middle" class="small">글을 쓴 회원만 나온다</text>
              <text x="225" y="155" text-anchor="middle" class="small">김솔 ✓ · 이달 ✓ · (글 없는 박별 ✗)</text>

              {/* LEFT */}
              <rect class="boxdark" x="510" y="30" width="330" height="36" />
              <text x="675" y="55" text-anchor="middle" class="strong">LEFT JOIN</text>
              <rect class="box" x="510" y="66" width="330" height="120" />
              <text x="675" y="95" text-anchor="middle" class="small">왼쪽 테이블의 행은 전부 반환</text>
              <text x="675" y="125" text-anchor="middle" class="small">글이 없으면 오른쪽 값은 NULL</text>
              <text x="675" y="155" text-anchor="middle" class="small">김솔 ✓ · 이달 ✓ · 박별 ✓ (글=NULL)</text>

              <text x="450" y="225" text-anchor="middle" class="small">"글 안 쓴 회원도 목록에 나와야 하나?" — 이 질문의 답이 JOIN 종류를 결정한다</text>
            </svg>
            <figcaption>도면 3. INNER JOIN은 교집합, LEFT JOIN은 왼쪽 전체 기준. RIGHT JOIN은 LEFT의 좌우 반전이다.</figcaption>
          </figure>

          <pre><code>{`-- 글을 하나도 안 쓴 회원까지 포함해 회원별 글 수 구하기
SELECT u.name, COUNT(p.id) AS post_count
FROM users u
LEFT JOIN posts p ON p.user_id = u.id
GROUP BY u.id, u.name;`}</code></pre>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            사용자 입력을 문자열로 이어붙여 SQL을 만들면 <strong>SQL Injection</strong>에 뚫린다.
            <code>'; DROP TABLE users; --</code> 같은 입력이 실제 명령으로 실행될 수 있다.
            반드시 <strong>Prepared Statement</strong>(바인딩 파라미터, <code>?</code> 자리표시자)나 ORM을 사용할 것.
          </div>
        </section>

        <section id="index">
          <h2>4. 인덱스 — 조회를 빠르게</h2>
          <p class="sub">책 뒤의 "찾아보기"와 같다. 원하는 내용을 찾으려고 책 전체를 읽지 않게 해 준다.</p>

          <h3>4-1. 인덱스가 없으면 — 풀 스캔(Full Scan)</h3>
          <p><code>WHERE email = 'sol@x.kr'</code> 조건으로 조회할 때 인덱스가 없으면,
          DBMS는 <strong>테이블의 모든 행을 처음부터 끝까지 읽으며</strong> 하나하나 비교한다.
          100만 행이면 100만 번 비교다. 행이 늘수록 정비례로 느려진다 — O(N).</p>

          <h3>4-2. 인덱스가 있으면 — B-Tree 탐색</h3>
          <p>인덱스는 해당 컬럼 값을 <strong>정렬된 트리(B-Tree)</strong>로 따로 관리한다.
          정렬돼 있으므로 "절반씩 버리며" 찾을 수 있고, 100만 행도 서너 번의 이동이면 도달한다 — O(log N).</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330" role="img" aria-label="B-Tree 인덱스 탐색 과정 도면">
              {/* 루트 */}
              <rect class="boxdark" x="370" y="20" width="160" height="46" />
              <text x="450" y="42" text-anchor="middle" class="strong">루트 노드</text>
              <text x="450" y="60" text-anchor="middle" class="small">m 미만 | m 이상</text>

              {/* 중간 */}
              <rect class="box" x="130" y="120" width="180" height="46" />
              <text x="220" y="142" text-anchor="middle">중간 노드</text>
              <text x="220" y="160" text-anchor="middle" class="small">a~f | g~l</text>
              <rect class="box" x="590" y="120" width="180" height="46" />
              <text x="680" y="142" text-anchor="middle">중간 노드</text>
              <text x="680" y="160" text-anchor="middle" class="small">m~r | s~z</text>

              {/* 리프 */}
              <rect class="boxsoft" x="60" y="230" width="150" height="46" />
              <text x="135" y="252" text-anchor="middle" class="small">리프: a~f</text>
              <text x="135" y="270" text-anchor="middle" class="small">→ 행 위치</text>
              <rect class="boxsoft" x="240" y="230" width="150" height="46" />
              <text x="315" y="252" text-anchor="middle" class="small">리프: g~l</text>
              <text x="315" y="270" text-anchor="middle" class="small">→ 행 위치</text>
              <rect class="boxdark" x="510" y="230" width="150" height="46" />
              <text x="585" y="252" text-anchor="middle" class="small strong">리프: m~r</text>
              <text x="585" y="270" text-anchor="middle" class="small">sol@x.kr → 행 위치!</text>
              <rect class="boxsoft" x="690" y="230" width="150" height="46" />
              <text x="765" y="252" text-anchor="middle" class="small">리프: s~z</text>
              <text x="765" y="270" text-anchor="middle" class="small">→ 행 위치</text>

              {/* 정적 링크선 */}
              <g class="static">
                <line class="blocked" x1="410" y1="66" x2="240" y2="118" />
                <line class="blocked" x1="220" y1="166" x2="140" y2="228" />
                <line class="blocked" x1="240" y1="166" x2="310" y2="228" />
                <line class="blocked" x1="700" y1="166" x2="760" y2="228" />
              </g>

              {/* 탐색 경로 애니메이션: 'sol@x.kr' 찾기 */}
              <g class="msg" data-step="1">
                <line class="arrow" x1="490" y1="66" x2="660" y2="118" />
                <text x="640" y="86" text-anchor="middle" class="small">1. "s..." ≥ m → 오른쪽</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="660" y1="166" x2="600" y2="228" />
                <text x="560" y="200" text-anchor="middle" class="small">2. m~r 리프로</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow" x1="585" y1="276" x2="585" y2="310" />
                <text x="700" y="305" text-anchor="middle" class="small">3. 행 위치로 바로 접근</text>
              </g>
            </svg>
            <figcaption>도면 4. B-Tree 탐색: 루트에서 리프까지 서너 번만 이동하면 100만 건 중 한 건을 찾는다.</figcaption>
          </figure>

          <pre><code>{`-- 인덱스 생성
CREATE INDEX idx_users_email ON users (email);

-- 실행 계획 확인: 인덱스를 타는지 눈으로 검증하는 습관을 들이자
EXPLAIN SELECT * FROM users WHERE email = 'sol@x.kr';`}</code></pre>

          <h3>4-3. 인덱스는 공짜가 아니다</h3>
          <table>
            <tr><th>좋아지는 것</th><th>나빠지는 것</th></tr>
            <tr>
              <td>해당 컬럼 조건의 SELECT가 극적으로 빨라짐<br/>ORDER BY, JOIN 성능 향상</td>
              <td>INSERT/UPDATE/DELETE마다 트리도 갱신해야 해서 <strong>쓰기가 느려짐</strong><br/>저장 공간 추가 사용</td>
            </tr>
          </table>

          <h3>4-4. 인덱스를 타지 못하는 대표 패턴</h3>
          <ul>
            <li><code>WHERE SUBSTR(email, 1, 3) = 'sol'</code> — 컬럼을 <strong>함수로 가공</strong>하면 정렬 순서를 못 쓴다.</li>
            <li><code>LIKE '%sol'</code> — <strong>앞쪽 와일드카드</strong>는 정렬의 앞부분을 활용할 수 없다. (<code>LIKE 'sol%'</code>는 가능)</li>
            <li>복합 인덱스 <code>(a, b)</code>에서 <code>WHERE b = ?</code>만 쓰는 경우 — <strong>선두 컬럼</strong>이 조건에 있어야 한다.</li>
            <li>값의 종류가 몇 개 없는 컬럼(성별 등) — 어차피 절반을 읽어야 해서 효과가 적다.</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            "느린 쿼리 → <code>EXPLAIN</code>으로 실행 계획 확인 → 풀 스캔이면 WHERE/JOIN/ORDER BY 컬럼에 인덱스 검토"가 기본 루틴.
            단, 인덱스는 쓰기 비용을 지불하는 트레이드오프이므로 <strong>많이 조회되는 컬럼에만 선별적으로</strong> 만든다.
            PK에는 자동으로 인덱스가 생긴다.
          </div>
        </section>

        <section id="transaction">
          <h2>5. 트랜잭션과 ACID</h2>
          <p class="sub">"전부 성공하거나, 전부 없던 일이 되거나." 계좌 이체가 반만 실행되는 사고를 막는 장치.</p>

          <h3>5-1. 트랜잭션이란</h3>
          <p><strong>쪼갤 수 없는 작업 묶음</strong>이다. A가 B에게 1만 원을 보내는 이체는
          "A 잔액 -1만"과 "B 잔액 +1만"이라는 두 개의 UPDATE지만, 논리적으로는 한 덩어리여야 한다.
          첫 번째만 실행되고 서버가 죽으면 1만 원이 증발하기 때문이다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 290" role="img" aria-label="계좌 이체 트랜잭션의 흐름 도면">
              <rect class="box" x="30" y="60" width="150" height="70" />
              <text x="105" y="90" text-anchor="middle" class="strong">애플리케이션</text>
              <text x="105" y="112" text-anchor="middle" class="small">이체 요청</text>

              <rect class="boxdark" x="300" y="40" width="320" height="180" />
              <text x="460" y="68" text-anchor="middle" class="strong">트랜잭션 (하나의 묶음)</text>
              <rect class="boxsoft" x="330" y="85" width="260" height="36" />
              <text x="460" y="109" text-anchor="middle" class="small">UPDATE A 잔액 -10,000</text>
              <rect class="boxsoft" x="330" y="131" width="260" height="36" />
              <text x="460" y="155" text-anchor="middle" class="small">UPDATE B 잔액 +10,000</text>
              <text x="460" y="200" text-anchor="middle" class="small">중간 상태는 밖에서 보이지 않는다</text>

              <rect class="box" x="720" y="60" width="150" height="70" />
              <text x="795" y="90" text-anchor="middle" class="strong">디스크 확정</text>
              <text x="795" y="112" text-anchor="middle" class="small">영구 반영</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="180" y1="95" x2="294" y2="95" />
                <text x="237" y="55" text-anchor="middle" class="small">1. BEGIN</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="620" y1="95" x2="714" y2="95" />
                <text x="667" y="55" text-anchor="middle" class="small">2. COMMIT — 전부 확정</text>
              </g>

              <g class="static">
                <path class="blocked" d="M 460 220 C 460 255 300 265 190 250" marker-end="url(#ah)" />
                <line class="xmark" x1="308" y1="240" x2="330" y2="262" />
                <line class="xmark" x1="330" y1="240" x2="308" y2="262" />
                <text x="480" y="278" text-anchor="middle" class="small">중간에 실패하면? → ROLLBACK — 두 UPDATE 모두 없던 일로 되돌린다</text>
              </g>
            </svg>
            <figcaption>도면 5. BEGIN으로 묶고 COMMIT으로 확정한다. 실패 시 ROLLBACK하면 묶음 전체가 취소된다.</figcaption>
          </figure>

          <pre><code>{`BEGIN;                                              -- 트랜잭션 시작
UPDATE accounts SET balance = balance - 10000 WHERE id = 'A';
UPDATE accounts SET balance = balance + 10000 WHERE id = 'B';
COMMIT;                                             -- 둘 다 성공 → 확정
-- 중간에 오류가 나면 → ROLLBACK; (전부 취소)`}</code></pre>

          <pre><code>{`// Spring에서는 어노테이션 하나로 메서드 전체가 트랜잭션이 된다
@Transactional
public void transfer(Long from, Long to, long amount) {
    accountRepository.withdraw(from, amount);
    accountRepository.deposit(to, amount);   // 여기서 예외가 나면 withdraw도 롤백
}`}</code></pre>

          <h3>5-2. ACID — 트랜잭션이 보장하는 네 가지 성질</h3>
          <table>
            <tr><th>성질</th><th>의미</th><th>이체 예시</th></tr>
            <tr>
              <td><strong>원자성 (Atomicity)</strong></td>
              <td>전부 성공 또는 전부 취소. 부분 성공은 없다</td>
              <td>-1만만 되고 +1만이 안 되는 일은 없다</td>
            </tr>
            <tr>
              <td><strong>일관성 (Consistency)</strong></td>
              <td>트랜잭션 전후로 데이터 규칙(제약 조건)이 항상 지켜진다</td>
              <td>이체 전후 두 계좌 합계는 동일하다</td>
            </tr>
            <tr>
              <td><strong>격리성 (Isolation)</strong></td>
              <td>동시에 실행되는 트랜잭션끼리 서로의 중간 상태를 보지 못한다</td>
              <td>이체 도중의 "1만 원 증발 상태"를 다른 쿼리가 볼 수 없다</td>
            </tr>
            <tr>
              <td><strong>지속성 (Durability)</strong></td>
              <td>COMMIT된 결과는 서버가 꺼져도 남는다 (로그 선기록, WAL)</td>
              <td>커밋 직후 정전이 나도 이체 기록은 살아 있다</td>
            </tr>
          </table>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            RDB를 쓰는 가장 큰 이유가 ACID다. 돈, 재고, 예약처럼 <strong>틀리면 안 되는 데이터</strong>는
            트랜잭션이 되는 저장소에 둔다. 반대로 NoSQL 상당수는 성능·확장성을 위해 이 보장을 일부 포기한다(8장).
          </div>
        </section>

        <section id="isolation">
          <h2>6. 격리 수준과 동시성 제어</h2>
          <p class="sub">격리성을 100% 지키면 안전하지만 느리다. 그래서 "얼마나 엄격하게 격리할지"를 단계별로 고를 수 있다.</p>

          <h3>6-1. 동시성이 만드는 이상 현상</h3>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 300" role="img" aria-label="Dirty Read 발생 과정 도면">
              {/* 두 트랜잭션 세로 타임라인 */}
              <rect class="box" x="80" y="20" width="220" height="40" />
              <text x="190" y="46" text-anchor="middle" class="strong">트랜잭션 1 (이체 중)</text>
              <line class="life" x1="190" y1="60" x2="190" y2="280" />

              <rect class="box" x="600" y="20" width="220" height="40" />
              <text x="710" y="46" text-anchor="middle" class="strong">트랜잭션 2 (잔액 조회)</text>
              <line class="life" x1="710" y1="60" x2="710" y2="280" />

              <g class="msg" data-step="1">
                <line class="arrow" x1="190" y1="100" x2="440" y2="100" />
                <text x="315" y="88" text-anchor="middle" class="small">1. A 잔액을 5만→4만으로 수정 (아직 커밋 전)</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="450" y1="130" x2="704" y2="130" />
                <text x="577" y="118" text-anchor="middle" class="small">2. T2가 A 잔액 조회 → "4만"을 읽음</text>
              </g>
              <g class="msg" data-step="3">
                <line class="arrow ret" x1="440" y1="190" x2="196" y2="190" />
                <text x="315" y="178" text-anchor="middle" class="small">3. T1 오류 발생 → ROLLBACK (잔액 다시 5만)</text>
              </g>

              <g class="static">
                <text x="710" y="230" text-anchor="middle" class="small strong">T2는 존재한 적 없는 값(4만)을</text>
                <text x="710" y="252" text-anchor="middle" class="small strong">읽어버렸다 = Dirty Read</text>
              </g>
            </svg>
            <figcaption>도면 6. 커밋되지 않은 중간 값을 다른 트랜잭션이 읽는 Dirty Read. 가장 위험한 이상 현상이다.</figcaption>
          </figure>

          <table>
            <tr><th>이상 현상</th><th>내용</th></tr>
            <tr><td><strong>Dirty Read</strong></td><td>커밋 전의 값을 읽음. 롤백되면 "존재한 적 없는 값"을 읽은 셈</td></tr>
            <tr><td><strong>Non-Repeatable Read</strong></td><td>한 트랜잭션 안에서 같은 행을 두 번 읽었는데 값이 달라짐 (사이에 다른 트랜잭션이 UPDATE)</td></tr>
            <tr><td><strong>Phantom Read</strong></td><td>같은 조건으로 두 번 조회했는데 행 개수가 달라짐 (사이에 INSERT/DELETE)</td></tr>
          </table>

          <h3>6-2. 4가지 격리 수준</h3>
          <table>
            <tr><th>격리 수준</th><th>Dirty</th><th>Non-Repeatable</th><th>Phantom</th><th>비고</th></tr>
            <tr><td><strong>READ UNCOMMITTED</strong></td><td>발생</td><td>발생</td><td>발생</td><td>사실상 사용하지 않음</td></tr>
            <tr><td><strong>READ COMMITTED</strong></td><td>차단</td><td>발생</td><td>발생</td><td>PostgreSQL·Oracle 기본값</td></tr>
            <tr><td><strong>REPEATABLE READ</strong></td><td>차단</td><td>차단</td><td>발생*</td><td>MySQL(InnoDB) 기본값</td></tr>
            <tr><td><strong>SERIALIZABLE</strong></td><td>차단</td><td>차단</td><td>차단</td><td>가장 엄격, 가장 느림</td></tr>
          </table>
          <p class="sub">* InnoDB는 REPEATABLE READ에서도 갭 락 등으로 Phantom을 대부분 막는다. 아래로 갈수록 안전하지만 동시 처리량이 줄어든다.</p>

          <h3>6-3. 락(Lock) — 충돌을 막는 두 가지 태도</h3>
          <table>
            <tr><th></th><th>비관적 락 (Pessimistic)</th><th>낙관적 락 (Optimistic)</th></tr>
            <tr>
              <td><strong>태도</strong></td>
              <td>"충돌은 분명 일어난다" — 읽을 때부터 잠근다</td>
              <td>"충돌은 드물다" — 잠그지 않고, 저장 시점에 검사</td>
            </tr>
            <tr>
              <td><strong>구현</strong></td>
              <td><code>SELECT ... FOR UPDATE</code></td>
              <td>버전 컬럼 비교 (<code>WHERE version = 읽었던 값</code>), JPA <code>@Version</code></td>
            </tr>
            <tr>
              <td><strong>적합한 곳</strong></td>
              <td>재고 차감, 좌석 예약처럼 충돌이 잦고 치명적인 곳</td>
              <td>게시글 수정처럼 충돌이 드문 곳 (실패 시 재시도)</td>
            </tr>
          </table>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <strong>데드락(Deadlock):</strong> T1이 A를 잠그고 B를 기다리는데, T2는 B를 잠그고 A를 기다리면 서로 영원히 대기한다.
            DBMS가 감지해서 한쪽을 강제 롤백하지만, 애초에 <strong>여러 자원을 항상 같은 순서로 잠그는</strong> 습관으로 예방하는 것이 최선이다.
          </div>
        </section>

        <section id="normalization">
          <h2>7. 정규화와 역정규화</h2>
          <p class="sub">중복을 없애 데이터가 어긋나는 사고를 막는 것이 정규화, 성능을 위해 중복을 다시 허용하는 것이 역정규화.</p>

          <h3>7-1. 정규화 전 — 중복이 부르는 3가지 이상(Anomaly)</h3>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 320" role="img" aria-label="정규화 전후 비교 도면">
              {/* 전 */}
              <rect class="boxdark" x="40" y="20" width="380" height="36" />
              <text x="230" y="45" text-anchor="middle" class="strong">정규화 전: 주문 테이블 하나</text>
              <rect class="box" x="40" y="56" width="380" height="30" />
              <text x="60" y="77" class="small strong">주문번호 | 회원명 | 회원이메일 | 상품명</text>
              <rect class="boxsoft" x="40" y="86" width="380" height="30" />
              <text x="60" y="107" class="small">1 | 김솔 | sol@x.kr | 키보드</text>
              <rect class="boxsoft" x="40" y="116" width="380" height="30" />
              <text x="60" y="137" class="small">2 | 김솔 | sol@x.kr | 마우스</text>
              <rect class="boxsoft" x="40" y="146" width="380" height="30" />
              <text x="60" y="167" class="small">3 | 김솔 | sol@x.kr | 모니터</text>
              <text x="230" y="205" text-anchor="middle" class="small">"김솔"의 이메일이 3곳에 중복 저장됨</text>
              <text x="230" y="227" text-anchor="middle" class="small">이메일 변경 시 3곳을 다 고쳐야 하고,</text>
              <text x="230" y="249" text-anchor="middle" class="small">하나라도 놓치면 데이터가 서로 어긋난다</text>

              <line class="arrow" x1="435" y1="140" x2="495" y2="140" />
              <text x="465" y="125" text-anchor="middle" class="small">분리</text>

              {/* 후 */}
              <rect class="boxdark" x="510" y="20" width="350" height="36" />
              <text x="685" y="45" text-anchor="middle" class="strong">정규화 후: 두 테이블로 분리</text>
              <rect class="box" x="510" y="66" width="350" height="30" />
              <text x="530" y="87" class="small strong">users: id | 회원명 | 이메일</text>
              <rect class="boxsoft" x="510" y="96" width="350" height="30" />
              <text x="530" y="117" class="small">1 | 김솔 | sol@x.kr  (한 곳에만 저장)</text>
              <rect class="box" x="510" y="146" width="350" height="30" />
              <text x="530" y="167" class="small strong">orders: 주문번호 | user_id(FK) | 상품명</text>
              <rect class="boxsoft" x="510" y="176" width="350" height="30" />
              <text x="530" y="197" class="small">1 | 1 | 키보드</text>
              <rect class="boxsoft" x="510" y="206" width="350" height="30" />
              <text x="530" y="227" class="small">2 | 1 | 마우스</text>
              <rect class="boxsoft" x="510" y="236" width="350" height="30" />
              <text x="530" y="257" class="small">3 | 1 | 모니터</text>
              <text x="685" y="300" text-anchor="middle" class="small strong">이메일 수정은 users 한 곳만 고치면 끝</text>
            </svg>
            <figcaption>도면 7. 정규화의 본질: "하나의 사실은 한 곳에만 저장한다."</figcaption>
          </figure>

          <ul>
            <li><strong>갱신 이상:</strong> 이메일 하나 바꾸는데 여러 행을 고쳐야 하고, 놓치면 불일치 발생.</li>
            <li><strong>삽입 이상:</strong> 주문이 없는 신규 회원은 저장할 곳이 없다 (주문 테이블뿐이므로).</li>
            <li><strong>삭제 이상:</strong> 마지막 주문을 지우면 회원 정보까지 같이 사라진다.</li>
          </ul>

          <h3>7-2. 정규형 요약 (1NF ~ 3NF)</h3>
          <table>
            <tr><th>단계</th><th>규칙</th><th>위반 예</th></tr>
            <tr><td><strong>1NF</strong></td><td>한 칸에는 값 하나만 (원자값)</td><td>전화번호 칸에 "010-1111, 010-2222"</td></tr>
            <tr><td><strong>2NF</strong></td><td>복합 PK의 일부에만 의존하는 컬럼 분리</td><td>PK(학생, 과목)인데 "학생이름"이 학생에만 의존</td></tr>
            <tr><td><strong>3NF</strong></td><td>PK가 아닌 컬럼에 의존하는 컬럼 분리</td><td>주문 테이블의 "회원이메일"이 회원명에 의존</td></tr>
          </table>
          <p>실무에서는 대체로 <strong>3NF까지</strong> 하면 충분하다는 것이 통설이다.</p>

          <h3>7-3. 역정규화 — 일부러 중복을 만드는 경우</h3>
          <p>정규화를 하면 조회 때마다 JOIN이 필요하다. JOIN이 너무 많아 느려지면,
          <strong>읽기 성능을 위해 의도적으로 중복을 허용</strong>하기도 한다.</p>
          <ul>
            <li>게시글 테이블에 <code>comment_count</code>(댓글 수) 컬럼을 두기 — 매번 COUNT 하지 않도록.</li>
            <li>주문 테이블에 주문 시점의 <code>상품명·가격</code>을 복사해 두기 — 상품 정보가 나중에 바뀌어도 주문 내역은 그대로여야 하므로 (이 경우는 정확성 때문이기도 하다).</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            기본은 정규화. 역정규화는 <strong>측정으로 병목이 확인된 뒤에</strong> 하는 최적화다.
            중복을 만들면 "두 곳을 항상 같이 갱신할 책임"이 애플리케이션 코드로 넘어온다는 비용을 기억하자.
          </div>
        </section>

        <section id="nosql">
          <h2>8. NoSQL — 종류와 CAP 이론</h2>
          <p class="sub">"Not Only SQL." 표와 JOIN 대신 다른 모델을 택해 유연성과 수평 확장을 얻는 저장소들.</p>

          <h3>8-1. 왜 등장했나</h3>
          <p>대규모 웹 서비스에서 RDB의 두 가지 벽에 부딪혔다.
          <strong>① 스키마가 엄격</strong>해서 자주 바뀌는 데이터 구조를 담기 번거롭고,
          <strong>② 여러 서버로 수평 확장(JOIN·트랜잭션 유지)이 어렵다</strong>.
          NoSQL은 이 둘을 해결하는 대신 JOIN과 강한 일관성 일부를 포기했다.</p>

          <h3>8-2. 4가지 대표 유형</h3>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 420" role="img" aria-label="NoSQL 4가지 유형 도면">
              <rect class="boxdark" x="40" y="20" width="400" height="36" />
              <text x="240" y="45" text-anchor="middle" class="strong">Key-Value — Redis, DynamoDB</text>
              <rect class="box" x="40" y="56" width="400" height="120" />
              <text x="60" y="86" class="small">{'"user:42" → {이름, 세션, 장바구니...}'}</text>
              <text x="60" y="112" class="small">키로 넣고 키로 꺼낸다. 가장 단순, 가장 빠름</text>
              <text x="60" y="138" class="small">용도: 캐시, 세션 저장소, 실시간 랭킹</text>
              <text x="60" y="164" class="small">Redis는 메모리 기반이라 마이크로초 단위 응답</text>

              <rect class="boxdark" x="470" y="20" width="400" height="36" />
              <text x="670" y="45" text-anchor="middle" class="strong">Document — MongoDB, Firestore</text>
              <rect class="box" x="470" y="56" width="400" height="120" />
              <text x="490" y="86" class="small">JSON 문서 단위로 저장. 문서마다 구조가 달라도 됨</text>
              <text x="490" y="112" class="small">중첩 구조(배열, 객체)를 그대로 저장 — JOIN 대신 내장</text>
              <text x="490" y="138" class="small">용도: 콘텐츠 관리, 카탈로그, 빠르게 변하는 스키마</text>
              <text x="490" y="164" class="small">RDB 다음으로 범용적이라 가장 널리 쓰임</text>

              <rect class="boxdark" x="40" y="210" width="400" height="36" />
              <text x="240" y="235" text-anchor="middle" class="strong">Column-Family — Cassandra, HBase</text>
              <rect class="box" x="40" y="246" width="400" height="120" />
              <text x="60" y="276" class="small">행이 아니라 열 중심으로 저장·분산</text>
              <text x="60" y="302" class="small">쓰기 폭주에 강하고 수평 확장이 뛰어남</text>
              <text x="60" y="328" class="small">용도: 시계열, 로그, IoT처럼 쓰기가 어마어마한 곳</text>
              <text x="60" y="354" class="small">대신 유연한 즉석 쿼리는 약함</text>

              <rect class="boxdark" x="470" y="210" width="400" height="36" />
              <text x="670" y="235" text-anchor="middle" class="strong">Graph — Neo4j</text>
              <rect class="box" x="470" y="246" width="400" height="120" />
              <text x="490" y="276" class="small">노드(정점)와 엣지(관계)로 저장</text>
              <text x="490" y="302" class="small">"친구의 친구의 친구" 같은 관계 탐색이 RDB보다 압도적</text>
              <text x="490" y="328" class="small">용도: 소셜 그래프, 추천, 이상 거래 탐지</text>
              <text x="490" y="354" class="small">범용 저장소라기보다 특수 목적용</text>

              <text x="450" y="405" text-anchor="middle" class="small">이 밖에 검색 특화 Elasticsearch, 시계열 특화 InfluxDB 등도 넓게는 NoSQL로 분류된다</text>
            </svg>
            <figcaption>도면 8. NoSQL 4대 유형. 각자 잘하는 것이 뚜렷하므로 "무엇을 저장하고 어떻게 조회할지"로 고른다.</figcaption>
          </figure>

          <h3>8-3. CAP 이론 — 분산 저장소의 삼각 트레이드오프</h3>
          <p>데이터를 여러 서버에 분산하면 세 가지를 동시에 다 가질 수 없다는 정리.</p>
          <table>
            <tr><th>성질</th><th>의미</th></tr>
            <tr><td><strong>C (Consistency, 일관성)</strong></td><td>어느 서버에 물어봐도 같은 최신 값을 답한다</td></tr>
            <tr><td><strong>A (Availability, 가용성)</strong></td><td>일부 서버가 죽어도 항상 응답한다</td></tr>
            <tr><td><strong>P (Partition tolerance, 분단 내성)</strong></td><td>서버 간 네트워크가 끊겨도 시스템이 동작한다</td></tr>
          </table>
          <p>분산 시스템에서 네트워크 장애(P)는 피할 수 없는 전제이므로, 실질적인 선택은
          <strong>"분단이 일어났을 때 C와 A 중 무엇을 지킬 것인가"</strong>다.</p>
          <ul>
            <li><strong>CP 성향:</strong> 일관성이 우선 — 최신 값을 보장 못 하면 차라리 에러를 낸다. (HBase, MongoDB 기본 설정)</li>
            <li><strong>AP 성향:</strong> 가용성이 우선 — 조금 오래된 값이라도 일단 응답한다. (Cassandra, DynamoDB)</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            AP 시스템이 말하는 <strong>최종 일관성(Eventual Consistency)</strong>은
            "지금은 서버마다 값이 다를 수 있지만, 시간이 지나면 결국 같아진다"는 약속이다.
            SNS 좋아요 수에는 충분하지만, 계좌 잔액에는 부족하다 — 데이터의 성격이 저장소를 결정한다.
          </div>
        </section>

        <section id="choice">
          <h2>9. RDB vs NoSQL 선택 가이드</h2>
          <p class="sub">"뭐가 더 좋냐"가 아니라 "이 데이터에는 뭐가 맞냐"의 문제. 실무에서는 대부분 섞어 쓴다.</p>

          <table>
            <tr><th></th><th>RDB (MySQL, PostgreSQL)</th><th>NoSQL (MongoDB, Redis, Cassandra)</th></tr>
            <tr>
              <td><strong>데이터 구조</strong></td>
              <td>정해진 스키마, 표 형태</td>
              <td>유연한 스키마 (문서/키-값/열/그래프)</td>
            </tr>
            <tr>
              <td><strong>일관성</strong></td>
              <td>ACID 트랜잭션으로 강한 일관성</td>
              <td>다수가 최종 일관성 (일부는 트랜잭션 지원)</td>
            </tr>
            <tr>
              <td><strong>관계 표현</strong></td>
              <td>JOIN으로 자유롭게 조합</td>
              <td>JOIN 없음/제한적 — 내장(embed)하거나 앱에서 조합</td>
            </tr>
            <tr>
              <td><strong>확장</strong></td>
              <td>수직 확장 중심 (수평은 샤딩으로 가능하나 복잡)</td>
              <td>수평 확장이 설계에 내장됨</td>
            </tr>
            <tr>
              <td><strong>어울리는 데이터</strong></td>
              <td>돈, 주문, 재고, 회원 — 정확성이 생명인 정형 데이터</td>
              <td>캐시, 세션, 로그, 피드, 카탈로그 — 양이 많고 구조가 변하는 데이터</td>
            </tr>
          </table>

          <h3>실무의 전형적인 조합 (Polyglot Persistence)</h3>
          <ul>
            <li><strong>MySQL/PostgreSQL</strong> — 회원, 주문, 결제 등 핵심 비즈니스 데이터 (진실의 원천)</li>
            <li><strong>Redis</strong> — 세션, 캐시, 랭킹, 분산 락</li>
            <li><strong>MongoDB</strong> — 상품 카탈로그, 로그성 데이터 등 스키마가 자주 변하는 것</li>
            <li><strong>Elasticsearch</strong> — 전문(full-text) 검색</li>
          </ul>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            고민될 때의 기본값은 <strong>RDB</strong>다. 요구사항 대부분을 감당할 수 있고, 나중에 특정 부분만
            NoSQL로 분리하기는 쉽지만 그 반대는 어렵다. NoSQL은 "RDB로는 명확히 안 되는 지점"이 보일 때 도입한다.
          </div>
        </section>

        <section id="scaling">
          <h2>10. 확장 전략 — 레플리케이션 · 샤딩 · 캐시</h2>
          <p class="sub">트래픽이 늘면 DB가 가장 먼저 병목이 된다. 읽기 분산, 쓰기 분산, 그리고 아예 DB에 안 가는 방법.</p>

          <h3>10-1. 레플리케이션(Replication) — 복제본으로 읽기 분산</h3>
          <p>쓰기는 <strong>Primary(주 서버)</strong> 한 대가 받고, 그 변경 내역을 <strong>Replica(복제 서버)</strong>들에 실시간 복제한다.
          읽기 요청을 Replica로 분산하면 읽기 처리량이 서버 수만큼 늘고, Primary 장애 시 Replica를 승격해 복구할 수도 있다.</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 330" role="img" aria-label="레플리케이션 구조 도면">
              <rect class="box" x="30" y="120" width="160" height="70" />
              <text x="110" y="150" text-anchor="middle" class="strong">애플리케이션</text>
              <text x="110" y="172" text-anchor="middle" class="small">쓰기/읽기 분리</text>

              <rect class="boxdark" x="380" y="40" width="180" height="70" />
              <text x="470" y="70" text-anchor="middle" class="strong">Primary</text>
              <text x="470" y="92" text-anchor="middle" class="small">쓰기 전담 (INSERT/UPDATE)</text>

              <rect class="box" x="380" y="220" width="180" height="70" />
              <text x="470" y="250" text-anchor="middle" class="strong">Replica 1</text>
              <text x="470" y="272" text-anchor="middle" class="small">읽기 전담</text>

              <rect class="box" x="680" y="220" width="180" height="70" />
              <text x="770" y="250" text-anchor="middle" class="strong">Replica 2</text>
              <text x="770" y="272" text-anchor="middle" class="small">읽기 전담</text>

              <g class="msg" data-step="1">
                <path class="arrow" d="M 190 140 C 280 110 300 90 374 80" />
                <text x="268" y="70" text-anchor="middle" class="small">1. 쓰기는 Primary로</text>
              </g>
              <g class="msg" data-step="2">
                <line class="arrow" x1="470" y1="110" x2="470" y2="214" />
                <text x="600" y="160" text-anchor="middle" class="small">2. 변경분 복제</text>
              </g>
              <g class="msg" data-step="3">
                <path class="arrow" d="M 560 90 C 680 110 740 150 770 214" />
                <text x="740" y="120" text-anchor="middle" class="small">3. 복제</text>
              </g>
              <g class="msg" data-step="4">
                <path class="arrow ret" d="M 374 255 C 300 250 250 220 190 185" />
                <text x="255" y="265" text-anchor="middle" class="small">4. 읽기는 Replica로</text>
              </g>
            </svg>
            <figcaption>도면 9. 쓰기 1곳, 읽기 N곳. 대부분의 서비스는 읽기가 압도적으로 많아 이 구조의 효과가 크다.</figcaption>
          </figure>

          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            복제는 순간적으로 늦을 수 있다(<strong>복제 지연, Replication Lag</strong>).
            글을 쓰자마자 Replica에서 읽으면 방금 쓴 글이 안 보일 수 있다.
            "내가 방금 쓴 것은 Primary에서 읽기" 같은 처리(Read-Your-Writes)가 필요할 수 있다.
          </div>

          <h3>10-2. 샤딩(Sharding) — 데이터를 쪼개 쓰기 분산</h3>
          <p>레플리케이션은 읽기만 분산한다. 쓰기 자체가 한 대의 한계를 넘으면,
          데이터를 <strong>샤드 키 기준으로 여러 DB에 나눠 저장</strong>한다.
          예: <code>user_id % 3</code>으로 회원을 3대의 DB에 분산.</p>
          <ul>
            <li><strong>얻는 것:</strong> 쓰기·저장 용량의 수평 확장.</li>
            <li><strong>잃는 것:</strong> 샤드를 넘나드는 JOIN·트랜잭션·집계가 어려워진다. 샤드 재분배(리밸런싱)도 큰일이다.</li>
            <li>그래서 샤딩은 <strong>최후의 수단</strong>이다. 캐시 → 레플리케이션 → 파티셔닝을 다 쓴 다음에 고려한다.</li>
          </ul>

          <h3>10-3. 캐시 — 아예 DB까지 가지 않기</h3>
          <p>자주 읽히고 잘 안 바뀌는 데이터는 Redis 같은 메모리 저장소에 복사해 두고 거기서 응답한다.
          가장 흔한 패턴은 <strong>Cache-Aside</strong>:</p>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 260" role="img" aria-label="Cache-Aside 패턴 도면">
              <rect class="box" x="30" y="80" width="160" height="70" />
              <text x="110" y="110" text-anchor="middle" class="strong">애플리케이션</text>

              <rect class="boxdark" x="370" y="30" width="180" height="70" />
              <text x="460" y="60" text-anchor="middle" class="strong">Redis (캐시)</text>
              <text x="460" y="82" text-anchor="middle" class="small">메모리 — 초고속</text>

              <rect class="box" x="690" y="150" width="180" height="70" />
              <text x="780" y="180" text-anchor="middle" class="strong">DB</text>
              <text x="780" y="202" text-anchor="middle" class="small">디스크 — 원본</text>

              <g class="msg" data-step="1">
                <path class="arrow" d="M 190 100 C 260 90 300 75 364 68" />
                <text x="270" y="50" text-anchor="middle" class="small">1. 캐시 먼저 조회</text>
              </g>
              <g class="msg" data-step="2">
                <path class="arrow" d="M 550 90 C 620 105 660 130 684 150" />
                <text x="650" y="95" text-anchor="middle" class="small">2. 없으면(miss) DB 조회</text>
              </g>
              <g class="msg" data-step="3">
                <path class="arrow ret" d="M 690 190 C 560 210 480 160 500 106" />
                <text x="600" y="230" text-anchor="middle" class="small">3. 결과를 캐시에 저장 (TTL 설정)</text>
              </g>
              <g class="msg" data-step="4">
                <path class="arrow ret" d="M 364 90 C 300 100 260 105 196 110" />
                <text x="270" y="145" text-anchor="middle" class="small">4. 다음 요청부턴 캐시가 바로 응답 (hit)</text>
              </g>
            </svg>
            <figcaption>도면 10. Cache-Aside: 캐시에 있으면 바로 응답, 없으면 DB에서 읽어 캐시에 채운다.</figcaption>
          </figure>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            캐시의 영원한 숙제는 <strong>무효화(Invalidation)</strong> — 원본이 바뀌었는데 캐시가 옛날 값을 주는 문제다.
            보통 <strong>TTL(만료 시간)</strong>을 기본으로 걸고, 데이터 수정 시 해당 캐시 키를 삭제하는 방식을 병행한다.
          </div>
        </section>

        <section id="orm">
          <h2>11. ORM과 커넥션 풀</h2>
          <p class="sub">애플리케이션 코드와 DB 사이의 두 가지 필수 배관: 객체↔테이블 변환기와 연결 재사용 장치.</p>

          <h3>11-1. ORM (Object-Relational Mapping)</h3>
          <p>객체(클래스)와 테이블을 자동으로 짝지어, SQL 대신 코드로 DB를 다루게 해 주는 도구.</p>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 210" role="img" aria-label="ORM의 역할 도면">
              <rect class="box" x="40" y="40" width="230" height="110" />
              <text x="155" y="70" text-anchor="middle" class="strong">객체 (코드)</text>
              <text x="155" y="98" text-anchor="middle" class="small">{'class User {'}</text>
              <text x="155" y="118" text-anchor="middle" class="small">{'  Long id; String name; }'}</text>
              <text x="155" y="140" text-anchor="middle" class="small">userRepository.findById(1)</text>

              <rect class="boxdark" x="360" y="55" width="180" height="80" />
              <text x="450" y="90" text-anchor="middle" class="strong">ORM</text>
              <text x="450" y="112" text-anchor="middle" class="small">JPA/Hibernate · Prisma</text>

              <rect class="box" x="630" y="40" width="230" height="110" />
              <text x="745" y="70" text-anchor="middle" class="strong">테이블 (DB)</text>
              <text x="745" y="98" text-anchor="middle" class="small">users (id, name)</text>
              <text x="745" y="126" text-anchor="middle" class="small">SELECT * FROM users</text>
              <text x="745" y="146" text-anchor="middle" class="small">WHERE id = 1</text>

              <line class="arrow" x1="270" y1="80" x2="354" y2="80" />
              <line class="arrow" x1="540" y1="80" x2="624" y2="80" />
              <line class="arrow ret" x1="624" y1="115" x2="540" y2="115" />
              <line class="arrow ret" x1="354" y1="115" x2="270" y2="115" />
              <text x="450" y="30" text-anchor="middle" class="small">메서드 호출 → SQL 자동 생성</text>
              <text x="450" y="180" text-anchor="middle" class="small">조회 결과(행) → 객체로 자동 변환</text>
            </svg>
            <figcaption>도면 11. ORM은 객체 세계와 표 세계 사이의 통역사다.</figcaption>
          </figure>

          <table>
            <tr><th>진영</th><th>대표 ORM</th></tr>
            <tr><td>Java/Spring</td><td><strong>JPA (구현체 Hibernate)</strong>, Spring Data JPA</td></tr>
            <tr><td>Node.js/TypeScript</td><td><strong>Prisma</strong>, TypeORM, Sequelize</td></tr>
            <tr><td>Python</td><td>Django ORM, SQLAlchemy</td></tr>
            <tr><td>Go</td><td>GORM, sqlc(코드 생성 방식)</td></tr>
          </table>

          <div class="box deny">
            <span class="tag-line">주의 — N+1 문제</span><br/>
            회원 100명을 조회(쿼리 1번)한 뒤 각 회원의 게시글을 지연 로딩하면 회원마다 쿼리가 1번씩 더 나가
            <strong>총 101번</strong>의 쿼리가 실행된다. ORM 사용 시 가장 흔한 성능 사고.
            JPA는 <code>fetch join</code>·<code>@EntityGraph</code>, Prisma는 <code>include</code>로 한 번에 가져와 해결한다.
            <strong>ORM을 쓰더라도 실제 나가는 SQL을 로그로 확인하는 습관</strong>이 중요하다.
          </div>

          <h3>11-2. 커넥션 풀 (Connection Pool)</h3>
          <p>DB 연결(커넥션)을 만드는 것은 TCP 연결 + 인증까지 수십 ms가 드는 비싼 작업이다.
          요청마다 새로 연결하는 대신, <strong>미리 만들어 둔 연결 여러 개를 빌려 쓰고 반납</strong>한다.</p>
          <ul>
            <li>Spring Boot 기본 풀은 <strong>HikariCP</strong> (기본 10개).</li>
            <li>풀 크기는 무작정 키우면 오히려 DB에 부담 — 코어 수와 부하 기준으로 측정하며 조정한다.</li>
            <li>커넥션을 빌린 뒤 <strong>반납하지 않는 버그(누수)</strong>가 나면 풀이 말라붙어 전체 서비스가 멈춘다. 트랜잭션/자원 정리를 프레임워크에 맡기는 것이 안전한 이유.</li>
          </ul>
        </section>

        <section id="checklist">
          <h2>12. 실전 체크리스트</h2>
          <p class="sub">DB를 설계하거나 쿼리를 작성·리뷰할 때 하나씩 점검해 보자.</p>

          <h3>설계</h3>
          <ul>
            <li>모든 테이블에 PK가 있는가 (보통 자동 증가 <code>id</code> 또는 UUID)</li>
            <li>관계는 FK로 명시했는가, N:M은 중간 테이블로 풀었는가</li>
            <li>3NF 기준으로 중복이 없는가 — 역정규화는 근거(측정)와 함께</li>
            <li>컬럼 타입·NOT NULL·UNIQUE 제약을 DB 레벨에 걸었는가 (앱 검증만 믿지 않기)</li>
          </ul>

          <h3>쿼리/성능</h3>
          <ul>
            <li>WHERE·JOIN·ORDER BY에 쓰이는 컬럼에 인덱스가 있는가 — <code>EXPLAIN</code>으로 확인</li>
            <li><code>SELECT *</code> 대신 필요한 컬럼만 조회하는가</li>
            <li>UPDATE/DELETE에 WHERE가 있는가 (그리고 먼저 SELECT로 대상 확인)</li>
            <li>ORM 사용 시 N+1이 없는가 — SQL 로그를 켜고 확인</li>
            <li>대량 작업은 배치(bulk insert, LIMIT 반복 삭제)로 나눴는가</li>
          </ul>

          <h3>트랜잭션/동시성</h3>
          <ul>
            <li>돈·재고·예약 로직이 트랜잭션으로 묶여 있는가</li>
            <li>트랜잭션 범위가 너무 넓지 않은가 (외부 API 호출을 트랜잭션 안에서 하지 않기)</li>
            <li>충돌 잦은 자원엔 비관적 락, 드문 곳엔 낙관적 락(버전)을 골랐는가</li>
            <li>여러 자원을 잠글 때 순서가 일정한가 (데드락 예방)</li>
          </ul>

          <h3>운영</h3>
          <ul>
            <li>백업이 자동화되어 있고, <strong>복구 테스트</strong>까지 해 봤는가 (복구 안 되는 백업은 백업이 아니다)</li>
            <li>레플리케이션 구성 시 복제 지연을 감안했는가</li>
            <li>슬로우 쿼리 로그를 켜고 모니터링하는가</li>
            <li>DB 계정 권한을 최소화했는가 (앱 계정에 DROP 권한 금지)</li>
          </ul>

          <hr class="divider"/>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">실행 계획 (EXPLAIN)</span>
            <span class="kw">커버링 인덱스</span>
            <span class="kw">MVCC</span>
            <span class="kw">WAL (Write-Ahead Logging)</span>
            <span class="kw">파티셔닝</span>
            <span class="kw">분산 트랜잭션 / Saga 패턴</span>
            <span class="kw">CQRS</span>
            <span class="kw">데이터베이스 마이그레이션 (Flyway/Liquibase)</span>
            <span class="kw">커서 기반 페이징</span>
            <span class="kw">Redis 자료구조</span>
          </p>
          <p class="sub" style="margin-top:12px">
            추천 자료: <a href="https://dev.mysql.com/doc/">MySQL 공식 문서</a>,
            <a href="https://www.postgresql.org/docs/">PostgreSQL 공식 문서</a>,
            <a href="https://use-the-index-luke.com/">Use The Index, Luke!</a> (인덱스 심화),
            <a href="https://redis.io/docs/">Redis 공식 문서</a>
          </p>
        </section>

        <footer>
          데이터베이스 학습 문서 · 2026-09
        </footer>
      </div>
    )
  },
})
