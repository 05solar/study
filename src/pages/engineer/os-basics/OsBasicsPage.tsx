import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './os-basics.css'

export default defineComponent({
  name: 'OsBasicsPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>운영체제 — 특징 · 종류 · 기본 명령어 · 핵심 기능</h1>
          <p>정보처리기사 실기 대비 학습 문서. 운영체제의 정의와 성능 평가 기준 → 종류별 특징 →
          프로세스 관리(PCB · 상태 전이) → 스케줄링(FCFS/SJF/HRN 계산) → 교착상태 → 기억장치 관리 →
          페이지 교체 알고리즘(FIFO/LRU 부재 계산) → 유닉스/리눅스 명령어(chmod 계산) 순서로,
          실기에서 계산 문제로 자주 나오는 부분을 단계별 표와 도면으로 정리한다.<br/>
          <span>애니메이션 도면의 파란 점은 프로세스 상태의 이동을 나타내며, 진행 중인 전이가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#overview" onClick={(e) => scrollToId(e, 'overview')}>운영체제 개요 — 목적 · 커널과 쉘</a></li>
            <li><a href="#types" onClick={(e) => scrollToId(e, 'types')}>운영체제 종류 — 윈도 · 유닉스 · 리눅스</a></li>
            <li><a href="#process" onClick={(e) => scrollToId(e, 'process')}>프로세스 관리 — PCB · 상태 전이</a></li>
            <li><a href="#scheduling" onClick={(e) => scrollToId(e, 'scheduling')}>스케줄링 — 선점/비선점 · 계산</a></li>
            <li><a href="#deadlock" onClick={(e) => scrollToId(e, 'deadlock')}>교착상태(Deadlock) — 4조건 · 해결 기법</a></li>
            <li><a href="#memory" onClick={(e) => scrollToId(e, 'memory')}>기억장치 관리 — 배치 전략 · 단편화</a></li>
            <li><a href="#page" onClick={(e) => scrollToId(e, 'page')}>페이지 교체 알고리즘 — FIFO/LRU 계산</a></li>
            <li><a href="#commands" onClick={(e) => scrollToId(e, 'commands')}>유닉스/리눅스 명령어 — chmod 계산</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 운영체제 개요 ===================== */}
        <section id="overview">
          <h2>1. 운영체제 개요 — 목적 · 커널과 쉘</h2>
          <p class="sub">운영체제의 정의, 성능 평가 기준 4가지(방향 포함), 운영 방식의 발전 순서, 그리고 커널/쉘 구분은 실기 단골 중의 단골이다.</p>

          <h3>1-1. 운영체제(OS)의 정의와 역할</h3>
          <p>운영체제(Operating System)는 <strong>사용자와 컴퓨터 하드웨어 사이의 인터페이스</strong> 역할을 하며,
          컴퓨터의 <strong>자원(CPU · 메모리 · 입출력 장치 · 파일)을 효율적으로 관리</strong>하는 시스템 소프트웨어다.
          응용 프로그램이 하드웨어를 직접 다루지 않고도 실행될 수 있게 실행 환경을 제공한다.</p>

          <h3>1-2. 운영체제의 목적 — 성능 평가 기준 4가지 (실기 단골)</h3>
          <p>네 가지 기준의 <strong>이름과 방향(높일 것인가, 줄일 것인가)</strong>을 함께 묻는다. 반환 시간만 "단축"이고 나머지는 전부 "향상"이다.</p>
          <table>
            <tr><th>기준</th><th>영문</th><th>방향</th><th>의미</th></tr>
            <tr>
              <td><strong>처리 능력</strong></td><td>Throughput</td><td><strong>향상 ↑</strong></td>
              <td>일정 시간 안에 시스템이 처리하는 <strong>일의 양</strong></td>
            </tr>
            <tr>
              <td><strong>반환 시간</strong></td><td>Turnaround Time</td><td><strong>단축 ↓</strong></td>
              <td>작업을 의뢰한 시점부터 <strong>결과를 얻을 때까지 걸린 시간</strong></td>
            </tr>
            <tr>
              <td><strong>신뢰도</strong></td><td>Reliability</td><td><strong>향상 ↑</strong></td>
              <td>주어진 문제를 <strong>정확하게 해결</strong>하는 정도</td>
            </tr>
            <tr>
              <td><strong>사용 가능도</strong></td><td>Availability</td><td><strong>향상 ↑</strong></td>
              <td>시스템을 사용해야 할 때 <strong>즉시 사용 가능한</strong> 정도</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            암기: <strong>처리 능력 ↑ · 반환 시간 ↓ · 신뢰도 ↑ · 사용 가능도 ↑</strong>.
            "반환 시간 향상"처럼 방향을 바꿔 놓은 보기가 오답으로 자주 나온다.
          </div>

          <h3>1-3. 운영 방식의 발전 순서</h3>
          <table>
            <tr><th>순서</th><th>운영 방식</th><th>특징</th></tr>
            <tr><td>①</td><td><strong>일괄 처리</strong> (Batch Processing)</td><td>유사한 작업을 <strong>모아서 한꺼번에</strong> 처리 (급여 계산, 요금 정산)</td></tr>
            <tr><td>②</td><td><strong>다중 프로그래밍</strong> (Multi-Programming)</td><td>하나의 CPU로 <strong>여러 프로그램을 동시에 적재</strong>해 CPU 유휴 시간을 줄임</td></tr>
            <tr><td>③</td><td><strong>시분할</strong> (Time Sharing, TSS)</td><td>CPU 시간을 <strong>잘게 쪼개(Time Slice)</strong> 여러 사용자에게 번갈아 할당 — 대화식 처리</td></tr>
            <tr><td>④</td><td><strong>다중 처리</strong> (Multi-Processing)</td><td><strong>CPU를 여러 개</strong> 두고 동시에 처리 — 신뢰성·성능 향상</td></tr>
            <tr><td>⑤</td><td><strong>실시간 처리</strong> (Real Time)</td><td>데이터 발생 <strong>즉시 처리</strong> (예약 시스템, 미사일 제어, 공정 제어)</td></tr>
            <tr><td>⑥</td><td><strong>분산 처리</strong> (Distributed)</td><td><strong>네트워크로 연결된 여러 컴퓨터</strong>가 작업을 나누어 처리</td></tr>
          </table>

          <h3>1-4. 커널과 쉘 (실기 최단골)</h3>
          <table>
            <tr><th>구분</th><th>커널 (Kernel)</th><th>쉘 (Shell)</th></tr>
            <tr>
              <td><strong>정의</strong></td>
              <td>운영체제의 <strong>핵심</strong>. 부팅 시 메모리에 상주</td>
              <td>사용자 명령을 해석해 커널에 전달하는 <strong>명령 해석기</strong></td>
            </tr>
            <tr>
              <td><strong>역할</strong></td>
              <td><strong>프로세스 · 기억장치 · 입출력 · 파일 관리</strong> 등 자원 관리</td>
              <td>명령어 해석 · 실행, 프로그래밍(쉘 스크립트) 기능</td>
            </tr>
            <tr>
              <td><strong>위치</strong></td>
              <td>하드웨어와 가장 가까운 안쪽</td>
              <td>사용자와 커널 사이 바깥쪽 (bash, csh, ksh 등)</td>
            </tr>
          </table>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 175">
              <rect class="box" x="40" y="55" width="140" height="56" />
              <text x="110" y="88" text-anchor="middle" class="strong">사용자</text>
              <rect class="boxsoft" x="260" y="55" width="170" height="56" />
              <text x="345" y="80" text-anchor="middle" class="strong">쉘 (Shell)</text>
              <text x="345" y="100" text-anchor="middle" class="small">명령 해석기</text>
              <rect class="boxdark" x="510" y="55" width="170" height="56" />
              <text x="595" y="80" text-anchor="middle" class="strong">커널 (Kernel)</text>
              <text x="595" y="100" text-anchor="middle" class="small">자원 관리 핵심</text>
              <rect class="box" x="750" y="55" width="130" height="56" />
              <text x="815" y="88" text-anchor="middle" class="strong">하드웨어</text>
              <line class="arrow" x1="180" y1="71" x2="258" y2="71" />
              <text x="219" y="60" text-anchor="middle" class="small">명령 입력</text>
              <line class="arrow ret" x1="258" y1="97" x2="180" y2="97" />
              <line class="arrow" x1="430" y1="71" x2="508" y2="71" />
              <text x="469" y="60" text-anchor="middle" class="small">해석 · 전달</text>
              <line class="arrow ret" x1="508" y1="97" x2="430" y2="97" />
              <line class="arrow" x1="680" y1="71" x2="748" y2="71" />
              <text x="714" y="60" text-anchor="middle" class="small">제어</text>
              <line class="arrow ret" x1="748" y1="97" x2="680" y2="97" />
              <text x="450" y="145" text-anchor="middle" class="small">실선 = 요청 방향, 점선 = 결과 반환</text>
            </svg>
            <figcaption>도면 1. 사용자 → 쉘(명령 해석) → 커널(자원 관리) → 하드웨어의 계층 구조</figcaption>
          </figure>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            "운영체제의 핵심으로 프로세스·기억장치 등 <strong>자원을 관리</strong>한다" → <strong>커널</strong>,
            "사용자의 <strong>명령을 해석</strong>하여 커널에 전달한다" → <strong>쉘</strong>. 설명을 주고 용어를 쓰게 하는 형태로 반복 출제된다.
          </div>
        </section>

        {/* ===================== 2. 운영체제 종류 ===================== */}
        <section id="types">
          <h2>2. 운영체제 종류 — 윈도 · 유닉스 · 리눅스 · 맥OS · 모바일</h2>
          <p class="sub">각 운영체제의 대표 키워드를 연결하는 문제가 나온다. 특히 유닉스의 "대화식 · 다중 사용자"는 단골이다.</p>
          <table>
            <tr><th>운영체제</th><th>대표 특징</th></tr>
            <tr>
              <td><strong>윈도 (Windows)</strong></td>
              <td><strong>GUI</strong>(그래픽 사용자 인터페이스) 제공 · <strong>선점형 멀티태스킹</strong> ·
              PnP(Plug and Play) · OLE 지원 · 기본적으로 <strong>단일 사용자</strong> 지향</td>
            </tr>
            <tr>
              <td><strong>유닉스 (UNIX)</strong></td>
              <td><strong>대화식 시분할 시스템</strong> · <strong>다중 사용자(Multi-User) · 다중 작업(Multi-Tasking)</strong> ·
              대부분 <strong>C 언어</strong>로 작성되어 <strong>이식성</strong>이 높음 · 트리 구조 파일 시스템</td>
            </tr>
            <tr>
              <td><strong>리눅스 (Linux)</strong></td>
              <td>리누스 토르발스가 공개한 <strong>오픈 소스</strong>(무료) OS · 유닉스와 호환 ·
              누구나 소스 수정·재배포 가능 · 서버 분야에서 널리 사용</td>
            </tr>
            <tr>
              <td><strong>맥OS (macOS)</strong></td>
              <td>애플이 개발한 <strong>유닉스 기반</strong> OS · 애플 하드웨어 전용 · 뛰어난 GUI</td>
            </tr>
            <tr>
              <td><strong>안드로이드 (Android)</strong></td>
              <td><strong>리눅스 커널 기반</strong>의 모바일 OS · <strong>오픈 소스</strong> · 자바/코틀린으로 앱 개발</td>
            </tr>
            <tr>
              <td><strong>iOS</strong></td>
              <td>애플의 모바일 OS · 유닉스 기반(다윈) · <strong>폐쇄적 생태계</strong>(애플 기기 전용)</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            연결 암기: 윈도 = <strong>GUI · 선점형 멀티태스킹</strong>, 유닉스 = <strong>대화식 · 다중 사용자 · C 언어 · 이식성</strong>,
            리눅스 = <strong>오픈 소스</strong>, 안드로이드 = <strong>리눅스 커널</strong>.
          </div>
        </section>

        {/* ===================== 3. 프로세스 관리 ===================== */}
        <section id="process">
          <h2>3. 프로세스 관리 — 정의 · PCB · 상태 전이</h2>
          <p class="sub">프로세스의 정의, PCB 구성 정보, 프로세스와 스레드의 구분, 그리고 상태 전이 용어 4가지(디스패치·타임아웃·블록·웨이크업)는 실기 최단골이다.</p>

          <h3>3-1. 프로세스(Process)의 정의 (실기 단골)</h3>
          <p>프로세스는 <strong>실행 중인 프로그램</strong>이다. 디스크에 저장된 프로그램(정적)이 메모리에 적재되어
          CPU를 할당받을 수 있는 상태(동적)가 된 것으로, 다음 표현도 모두 프로세스의 정의로 출제된다.</p>
          <ul>
            <li>PCB를 가진 프로그램</li>
            <li>프로시저(절차)가 활동 중인 것</li>
            <li>비동기적 행위를 일으키는 주체</li>
            <li>운영체제가 관리하는 실행 단위 / CPU 할당의 대상</li>
          </ul>

          <h3>3-2. PCB (Process Control Block, 프로세스 제어 블록)</h3>
          <p>운영체제가 프로세스를 관리하기 위해 프로세스마다 하나씩 유지하는 <strong>정보 저장 블록</strong>이다.
          "PCB에 저장되는 정보가 아닌 것" 형태로 출제되니 구성 정보를 기억하자.</p>
          <table>
            <tr><th>PCB 구성 정보</th><th>내용</th></tr>
            <tr><td><strong>프로세스 식별자 (PID)</strong></td><td>프로세스 고유 번호</td></tr>
            <tr><td><strong>프로세스 상태</strong></td><td>준비 · 실행 · 대기 등 현재 상태</td></tr>
            <tr><td><strong>프로그램 카운터 (PC)</strong></td><td>다음에 실행할 명령어의 주소</td></tr>
            <tr><td><strong>CPU 레지스터 정보</strong></td><td>문맥 교환 시 보관·복원할 레지스터 값</td></tr>
            <tr><td><strong>스케줄링 정보</strong></td><td>우선순위, 스케줄 큐 포인터</td></tr>
            <tr><td><strong>기억장치 관리 정보</strong></td><td>페이지 테이블, 세그먼트 테이블 등</td></tr>
            <tr><td><strong>입출력 상태 · 계정 정보</strong></td><td>할당된 장치·파일 목록, CPU 사용 시간 등</td></tr>
          </table>

          <h3>3-3. 프로세스 vs 스레드 (실기 단골)</h3>
          <table>
            <tr><th>구분</th><th>프로세스 (Process)</th><th>스레드 (Thread)</th></tr>
            <tr><td><strong>정의</strong></td><td>실행 중인 프로그램, <strong>자원 할당의 단위</strong></td><td>프로세스 내 <strong>실행(제어) 흐름의 단위</strong> — "경량 프로세스"</td></tr>
            <tr><td><strong>자원</strong></td><td>독립된 메모리 공간(코드·데이터·힙·스택)을 가짐</td><td>프로세스의 자원을 <strong>공유</strong>하고 스택·레지스터만 따로 가짐</td></tr>
            <tr><td><strong>통신</strong></td><td>프로세스 간 통신(IPC) 필요 — 비용 큼</td><td>같은 프로세스 안에서 공유 메모리로 통신 — 비용 작음</td></tr>
            <tr><td><strong>장점</strong></td><td>안정성(한 프로세스 오류가 다른 프로세스에 영향 적음)</td><td>문맥 교환 부담이 작아 <strong>병행성 향상</strong>, 자원 절약</td></tr>
          </table>

          <h3>3-4. 프로세스 상태 전이 5상태 (실기 최단골)</h3>
          <p>프로세스는 <strong>생성(New) → 준비(Ready) → 실행(Running) → 대기(Waiting/Block) → 종료(Exit)</strong>의
          다섯 상태를 오간다. 특히 상태 사이를 오가는 <strong>전이 용어 4가지</strong>가 매번 출제된다.</p>
          <table>
            <tr><th>전이 용어</th><th>방향</th><th>의미</th></tr>
            <tr><td><strong>디스패치 (Dispatch)</strong></td><td><strong>준비 → 실행</strong></td><td>스케줄러가 준비 상태의 프로세스에 <strong>CPU를 할당</strong></td></tr>
            <tr><td><strong>타임아웃 (Timeout)</strong></td><td><strong>실행 → 준비</strong></td><td>할당된 <strong>시간 조각(Time Slice)을 다 써서</strong> CPU를 반납</td></tr>
            <tr><td><strong>블록 (Block)</strong></td><td><strong>실행 → 대기</strong></td><td><strong>입출력 요청</strong> 등으로 CPU를 스스로 내놓고 사건을 기다림</td></tr>
            <tr><td><strong>웨이크업 (Wake-up)</strong></td><td><strong>대기 → 준비</strong></td><td>기다리던 <strong>입출력이 완료</strong>되어 다시 준비 상태로 복귀</td></tr>
          </table>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 320">
              <rect class="boxsoft" x="30" y="110" width="110" height="54" />
              <text x="85" y="133" text-anchor="middle" class="strong">생성</text>
              <text x="85" y="153" text-anchor="middle" class="small">New</text>
              <rect class="box" x="230" y="110" width="140" height="54" />
              <text x="300" y="133" text-anchor="middle" class="strong">준비</text>
              <text x="300" y="153" text-anchor="middle" class="small">Ready</text>
              <rect class="boxdark" x="520" y="110" width="140" height="54" />
              <text x="590" y="133" text-anchor="middle" class="strong">실행</text>
              <text x="590" y="153" text-anchor="middle" class="small">Running</text>
              <rect class="boxsoft" x="760" y="110" width="110" height="54" />
              <text x="815" y="133" text-anchor="middle" class="strong">종료</text>
              <text x="815" y="153" text-anchor="middle" class="small">Exit</text>
              <rect class="box" x="440" y="240" width="140" height="54" />
              <text x="510" y="263" text-anchor="middle" class="strong">대기</text>
              <text x="510" y="283" text-anchor="middle" class="small">Waiting / Block</text>
              <line class="arrow" x1="140" y1="124" x2="228" y2="124" />
              <text x="184" y="112" text-anchor="middle" class="small">승인</text>
              <line class="arrow" x1="660" y1="124" x2="758" y2="124" />
              <text x="709" y="112" text-anchor="middle" class="small">종료</text>
              <g class="msg" data-step="1">
                <line x1="370" y1="121" x2="518" y2="121" />
                <text x="445" y="106" text-anchor="middle">① 디스패치</text>
              </g>
              <g class="msg" data-step="2">
                <line x1="520" y1="152" x2="372" y2="152" />
                <text x="445" y="180" text-anchor="middle">② 타임아웃</text>
              </g>
              <g class="msg" data-step="3">
                <line x1="578" y1="164" x2="536" y2="238" />
                <text x="640" y="212" text-anchor="middle">③ 블록(입출력 요청)</text>
              </g>
              <g class="msg" data-step="4">
                <line x1="452" y1="238" x2="318" y2="166" />
                <text x="330" y="222" text-anchor="middle">④ 웨이크업</text>
              </g>
            </svg>
            <figcaption>도면 2. 프로세스 상태 전이도 — ① 디스패치(준비→실행) → ② 타임아웃(실행→준비) → ③ 블록(실행→대기) → ④ 웨이크업(대기→준비) 순환</figcaption>
          </figure>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            헷갈리면 이렇게: CPU를 <strong>받으면 디스패치</strong>, 시간 다 되어 <strong>뺏기면 타임아웃</strong>,
            입출력 하러 <strong>스스로 나가면 블록</strong>, 입출력 끝나서 <strong>돌아오면 웨이크업</strong>.
            웨이크업의 도착지는 실행이 아니라 <strong>준비</strong>라는 점이 함정 포인트다.
          </div>
        </section>

        {/* ===================== 4. 스케줄링 ===================== */}
        <section id="scheduling">
          <h2>4. 스케줄링 — 선점 vs 비선점 · 평균 시간 계산 · HRN</h2>
          <p class="sub">선점/비선점 알고리즘 분류표는 최단골, FCFS·SJF 평균 대기 시간과 HRN 우선순위는 실기 계산 문제의 대표 주제다.</p>

          <h3>4-1. 선점형 vs 비선점형 (실기 최단골)</h3>
          <table>
            <tr><th>구분</th><th>선점형 (Preemptive)</th><th>비선점형 (Non-Preemptive)</th></tr>
            <tr>
              <td><strong>개념</strong></td>
              <td>실행 중인 프로세스로부터 CPU를 <strong>빼앗을 수 있다</strong></td>
              <td>한 번 CPU를 잡으면 <strong>끝날 때까지 빼앗지 못한다</strong></td>
            </tr>
            <tr>
              <td><strong>종류</strong></td>
              <td><strong>RR</strong>(라운드 로빈 — <strong>시분할</strong>의 기본, 단골) · <strong>SRT</strong>(남은 시간 최단 우선) ·
              <strong>MLQ</strong>(다단계 큐) · <strong>MFQ</strong>(다단계 피드백 큐)</td>
              <td><strong>FCFS</strong>(먼저 온 순서) · <strong>SJF</strong>(<strong>최단 작업</strong> 우선 — 단골) ·
              <strong>HRN</strong> · <strong>우선순위</strong> · <strong>기한부</strong>(Deadline)</td>
            </tr>
            <tr>
              <td><strong>특징</strong></td>
              <td>응답 빠름, 대화식·실시간에 적합, 문맥 교환 오버헤드 있음</td>
              <td>구현 간단, 일괄 처리에 적합, 긴 작업 뒤 짧은 작업이 오래 기다림</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            선점형은 "<strong>RR · SRT · MLQ · MFQ</strong>" 네 개만 외우고 <strong>나머지는 전부 비선점형</strong>으로 판단하면 된다.
            RR = 시분할(TSS)용, SJF = 평균 대기 시간 최소가 각각의 대표 키워드다.
          </div>

          <h3>4-2. 평균 대기 시간 · 평균 반환 시간 계산 (FCFS vs SJF)</h3>
          <p>네 프로세스가 <strong>모두 0초에 도착</strong>했다고 하자. 실행(서비스) 시간은 다음과 같다.</p>
          <table>
            <tr><th>프로세스</th><td><strong>P1</strong></td><td><strong>P2</strong></td><td><strong>P3</strong></td><td><strong>P4</strong></td></tr>
            <tr><th>실행 시간</th><td>8</td><td>4</td><td>2</td><td>6</td></tr>
          </table>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 210">
              <text x="60" y="35" class="strong">FCFS — 도착 순서대로 P1 → P2 → P3 → P4</text>
              <rect class="boxsoft" x="60" y="45" width="320" height="40" />
              <text x="220" y="70" text-anchor="middle" class="strong">P1</text>
              <rect class="boxsoft" x="380" y="45" width="160" height="40" />
              <text x="460" y="70" text-anchor="middle" class="strong">P2</text>
              <rect class="boxsoft" x="540" y="45" width="80" height="40" />
              <text x="580" y="70" text-anchor="middle" class="strong">P3</text>
              <rect class="boxsoft" x="620" y="45" width="240" height="40" />
              <text x="740" y="70" text-anchor="middle" class="strong">P4</text>
              <text x="60" y="103" text-anchor="middle" class="small">0</text>
              <text x="380" y="103" text-anchor="middle" class="small">8</text>
              <text x="540" y="103" text-anchor="middle" class="small">12</text>
              <text x="620" y="103" text-anchor="middle" class="small">14</text>
              <text x="860" y="103" text-anchor="middle" class="small">20</text>
              <text x="60" y="130" class="strong">SJF — 짧은 작업부터 P3 → P2 → P4 → P1</text>
              <rect class="boxdark" x="60" y="140" width="80" height="40" />
              <text x="100" y="165" text-anchor="middle" class="strong">P3</text>
              <rect class="boxdark" x="140" y="140" width="160" height="40" />
              <text x="220" y="165" text-anchor="middle" class="strong">P2</text>
              <rect class="boxdark" x="300" y="140" width="240" height="40" />
              <text x="420" y="165" text-anchor="middle" class="strong">P4</text>
              <rect class="boxdark" x="540" y="140" width="320" height="40" />
              <text x="700" y="165" text-anchor="middle" class="strong">P1</text>
              <text x="60" y="198" text-anchor="middle" class="small">0</text>
              <text x="140" y="198" text-anchor="middle" class="small">2</text>
              <text x="300" y="198" text-anchor="middle" class="small">6</text>
              <text x="540" y="198" text-anchor="middle" class="small">12</text>
              <text x="860" y="198" text-anchor="middle" class="small">20</text>
            </svg>
            <figcaption>도면 3. 같은 데이터에 대한 FCFS와 SJF의 간트 차트 비교 (숫자는 시각)</figcaption>
          </figure>
          <table>
            <tr><th>구분</th><th>실행 순서</th><th>대기 시간</th><th>평균 대기 시간</th><th>반환 시간</th><th>평균 반환 시간</th></tr>
            <tr>
              <td><strong>FCFS</strong></td>
              <td>P1 → P2 → P3 → P4</td>
              <td>P1=0, P2=8, P3=12, P4=14</td>
              <td>(0+8+12+14) ÷ 4 = <strong>8.5</strong></td>
              <td>P1=8, P2=12, P3=14, P4=20</td>
              <td>(8+12+14+20) ÷ 4 = <strong>13.5</strong></td>
            </tr>
            <tr>
              <td><strong>SJF</strong></td>
              <td>P3 → P2 → P4 → P1</td>
              <td>P3=0, P2=2, P4=6, P1=12</td>
              <td>(0+2+6+12) ÷ 4 = <strong>5</strong></td>
              <td>P3=2, P2=6, P4=12, P1=20</td>
              <td>(2+6+12+20) ÷ 4 = <strong>10</strong></td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">검산 요령</span><br/>
            <strong>반환 시간 = 대기 시간 + 실행 시간</strong>이므로, 평균 반환 시간 = 평균 대기 시간 + 평균 실행 시간(여기서는 20÷4=5)이다.
            FCFS: 8.5+5=13.5 ✔, SJF: 5+5=10 ✔ — 두 값이 맞아떨어지면 계산이 정확한 것이다.
            SJF는 짧은 작업을 먼저 처리해 <strong>평균 대기 시간이 최소</strong>가 된다.
          </div>

          <h3>4-3. HRN 스케줄링 (실기 최단골)</h3>
          <p>HRN(Highest Response-ratio Next)은 SJF의 단점인 <strong>긴 작업의 무한 대기(기아 현상)를 보완</strong>한
          비선점형 기법이다. 우선순위를 계산해 <strong>값이 가장 큰 프로세스부터</strong> 실행한다.</p>
          <div class="box">
            <span class="tag-line">공식</span><br/>
            <strong>우선순위 = (대기 시간 + 서비스 시간) ÷ 서비스 시간</strong> — 값이 <strong>클수록 먼저</strong> 실행.
            오래 기다릴수록(분자 커짐), 서비스 시간이 짧을수록(분모 작아짐) 우선순위가 높아진다.
          </div>
          <table>
            <tr><th>프로세스</th><th>대기 시간</th><th>서비스 시간</th><th>우선순위 계산</th><th>값</th></tr>
            <tr><td>A</td><td>5</td><td>20</td><td>(5+20) ÷ 20</td><td>1.25</td></tr>
            <tr><td>B</td><td>40</td><td>20</td><td>(40+20) ÷ 20</td><td><strong>3</strong></td></tr>
            <tr><td>C</td><td>15</td><td>45</td><td>(15+45) ÷ 45</td><td>약 1.33</td></tr>
            <tr><td>D</td><td>20</td><td>2</td><td>(20+2) ÷ 2</td><td><strong>11</strong></td></tr>
          </table>
          <p>실행 순서: <strong>D(11) → B(3) → C(1.33) → A(1.25)</strong>.
          서비스 시간이 2로 매우 짧은 D가 압도적 1순위가 되는 것을 확인할 수 있다.</p>
        </section>

        {/* ===================== 5. 교착상태 ===================== */}
        <section id="deadlock">
          <h2>5. 교착상태(Deadlock) — 발생 4조건 · 해결 기법 4가지</h2>
          <p class="sub">교착상태 발생 필요조건 4가지는 실기 최최단골 — 네 가지를 모두 쓰거나 괄호를 채우는 형태로 출제된다.</p>

          <h3>5-1. 교착상태란</h3>
          <p>둘 이상의 프로세스가 서로가 점유한 자원을 <strong>무한정 기다리며 아무도 진행하지 못하는 상태</strong>다.
          네 조건이 <strong>모두 동시에</strong> 성립할 때만 발생하며, 하나라도 깨면 예방된다.</p>

          <h3>5-2. 발생 필요조건 4가지 (실기 최최단골)</h3>
          <table>
            <tr><th>조건</th><th>영문</th><th>의미</th></tr>
            <tr><td><strong>상호 배제</strong></td><td>Mutual Exclusion</td><td>한 번에 <strong>한 프로세스만</strong> 자원을 사용할 수 있다</td></tr>
            <tr><td><strong>점유와 대기</strong></td><td>Hold and Wait</td><td>자원을 <strong>가진 채로</strong> 다른 자원을 <strong>추가로 기다린다</strong></td></tr>
            <tr><td><strong>비선점</strong></td><td>Non-preemption</td><td>다른 프로세스가 점유한 자원을 <strong>강제로 빼앗을 수 없다</strong></td></tr>
            <tr><td><strong>환형 대기 (원형 대기)</strong></td><td>Circular Wait</td><td>프로세스들이 <strong>원형(고리 모양)으로</strong> 서로의 자원을 기다린다</td></tr>
          </table>

          <h3>5-3. 해결 기법 4가지</h3>
          <table>
            <tr><th>기법</th><th>영문</th><th>내용</th></tr>
            <tr>
              <td><strong>예방</strong></td><td>Prevention</td>
              <td>4가지 필요조건 중 <strong>하나 이상을 미리 부정</strong>해 교착상태 자체를 막음 (자원 낭비 큼)</td>
            </tr>
            <tr>
              <td><strong>회피</strong></td><td>Avoidance</td>
              <td>안전 상태를 유지할 수 있는 요구만 수락 — 대표 기법이 <strong>은행가 알고리즘</strong>(Banker's Algorithm, 다익스트라) (단골)</td>
            </tr>
            <tr>
              <td><strong>발견 (탐지)</strong></td><td>Detection</td>
              <td>교착상태 발생을 허용하고 <strong>자원 할당 그래프</strong> 등으로 발생 여부를 검사</td>
            </tr>
            <tr>
              <td><strong>회복</strong></td><td>Recovery</td>
              <td>교착상태의 프로세스를 <strong>종료하거나 자원을 선점(빼앗아)</strong> 해소</td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">암기</span><br/>
            발생 조건은 "<strong>상·점·비·환</strong>"(상호 배제 · 점유와 대기 · 비선점 · 환형 대기),
            해결 기법은 "<strong>예·회·발·회</strong>"(예방 · 회피 · 발견 · 회복). <strong>은행가 알고리즘 = 회피</strong>에 연결하는 문제가 자주 나온다.
          </div>
        </section>

        {/* ===================== 6. 기억장치 관리 ===================== */}
        <section id="memory">
          <h2>6. 기억장치 관리 — 반입 · 배치 · 할당 · 단편화 · 가상 메모리</h2>
          <p class="sub">배치 전략(First/Best/Worst Fit)의 선택 계산과 내부/외부 단편화 구분, 페이징 vs 세그먼테이션 구분이 단골이다.</p>

          <h3>6-1. 기억장치 관리 전략 3가지</h3>
          <table>
            <tr><th>전략</th><th>영문</th><th>내용</th></tr>
            <tr>
              <td><strong>반입 전략</strong></td><td>Fetch</td>
              <td><strong>언제</strong> 주기억장치로 적재할 것인가 — 요구 반입(Demand) / 예상 반입(Anticipatory)</td>
            </tr>
            <tr>
              <td><strong>배치 전략</strong></td><td>Placement</td>
              <td><strong>어디에</strong> 놓을 것인가 — 최초 적합 / 최적 적합 / 최악 적합</td>
            </tr>
            <tr>
              <td><strong>할당 (교체) 전략</strong></td><td>Allocation / Replacement</td>
              <td>가득 찼을 때 <strong>무엇을 내보낼 것인가</strong> — FIFO, LRU 등 (7장에서 계산)</td>
            </tr>
          </table>

          <h3>6-2. 배치 전략 계산 예시 (실기 단골)</h3>
          <p>빈 영역이 A=16K, B=14K, C=5K, D=30K일 때 <strong>10K 프로그램</strong>을 적재한다.
          (C=5K는 10K보다 작아서 어떤 전략에서도 후보가 아니다.)</p>
          <table>
            <tr><th>전략</th><th>선택 기준</th><th>선택 영역</th><th>남는 공간 (내부 단편화)</th></tr>
            <tr>
              <td><strong>최초 적합 (First Fit)</strong></td>
              <td>들어갈 수 있는 <strong>첫 번째</strong> 영역</td>
              <td>A (16K)</td><td>16K − 10K = <strong>6K</strong></td>
            </tr>
            <tr>
              <td><strong>최적 적합 (Best Fit)</strong></td>
              <td>들어갈 수 있는 영역 중 <strong>가장 작은</strong> 곳 (낭비 최소)</td>
              <td>B (14K)</td><td>14K − 10K = <strong>4K</strong></td>
            </tr>
            <tr>
              <td><strong>최악 적합 (Worst Fit)</strong></td>
              <td>들어갈 수 있는 영역 중 <strong>가장 큰</strong> 곳</td>
              <td>D (30K)</td><td>30K − 10K = <strong>20K</strong></td>
            </tr>
          </table>

          <h3>6-3. 단편화 (실기 단골)</h3>
          <table>
            <tr><th>구분</th><th>내부 단편화 (Internal)</th><th>외부 단편화 (External)</th></tr>
            <tr>
              <td><strong>정의</strong></td>
              <td>분할된 영역이 프로그램보다 <strong>커서 남는</strong> 안쪽 공간</td>
              <td>분할된 영역이 프로그램보다 <strong>작아서 사용하지 못하는</strong> 영역 전체</td>
            </tr>
            <tr>
              <td><strong>예</strong></td>
              <td>20K 분할에 16K 적재 → 안쪽에 4K 낭비</td>
              <td>10K 프로그램에 대해 5K 빈 영역 → 통째로 5K 낭비</td>
            </tr>
            <tr>
              <td><strong>해결</strong></td>
              <td>가변 분할, <strong>세그먼테이션</strong></td>
              <td>통합(Coalescing) · 압축(Compaction), <strong>페이징</strong></td>
            </tr>
          </table>

          <h3>6-4. 페이징 vs 세그먼테이션 (실기 단골)</h3>
          <table>
            <tr><th>구분</th><th>페이징 (Paging)</th><th>세그먼테이션 (Segmentation)</th></tr>
            <tr><td><strong>분할 단위</strong></td><td><strong>고정 크기</strong>(페이지)</td><td><strong>가변 크기</strong>(논리적 단위 — 함수, 모듈)</td></tr>
            <tr><td><strong>단편화</strong></td><td><strong>내부 단편화</strong> 발생 (마지막 페이지)</td><td><strong>외부 단편화</strong> 발생</td></tr>
            <tr><td><strong>매핑 표</strong></td><td>페이지 테이블(페이지 → 프레임)</td><td>세그먼트 테이블(시작 주소 + 길이)</td></tr>
            <tr><td><strong>보호·공유</strong></td><td>논리적 의미가 없어 불리</td><td>논리 단위라 <strong>보호와 공유에 유리</strong></td></tr>
          </table>

          <h3>6-5. 가상 메모리 (Virtual Memory)</h3>
          <p>보조기억장치(디스크)의 일부를 주기억장치처럼 사용해, <strong>실제 메모리보다 큰 프로그램</strong>을
          실행할 수 있게 하는 기법이다. 프로그램을 페이지(또는 세그먼트) 단위로 나누어 필요한 부분만
          메모리에 올리며, 없는 페이지를 참조하면 <strong>페이지 부재(Page Fault)</strong>가 발생해 교체가 일어난다.</p>
        </section>

        {/* ===================== 7. 페이지 교체 알고리즘 ===================== */}
        <section id="page">
          <h2>7. 페이지 교체 알고리즘 — FIFO · LRU 부재 계산</h2>
          <p class="sub">페이지 부재(Page Fault) 횟수 계산은 실기 최다 빈출 계산 문제다. 같은 참조열로 FIFO와 LRU를 단계별로 비교한다.</p>

          <h3>7-1. 알고리즘 정의</h3>
          <table>
            <tr><th>알고리즘</th><th>교체 대상</th></tr>
            <tr><td><strong>FIFO</strong> (First In First Out)</td><td>메모리에 <strong>가장 먼저 들어온</strong>(가장 오래 있었던) 페이지</td></tr>
            <tr><td><strong>LRU</strong> (Least Recently Used)</td><td><strong>가장 오랫동안 사용되지 않은</strong>(최근 사용 시점이 가장 오래된) 페이지 — 단골</td></tr>
            <tr><td><strong>LFU</strong> (Least Frequently Used)</td><td><strong>사용 횟수(빈도)가 가장 적은</strong> 페이지</td></tr>
            <tr><td><strong>NUR</strong> (Not Used Recently)</td><td>참조 비트·변형 비트로 판단해 <strong>최근에 사용되지 않은</strong> 페이지</td></tr>
            <tr><td><strong>OPT</strong> (Optimal)</td><td><strong>앞으로 가장 오랫동안 사용되지 않을</strong> 페이지 — 이론상 최적, 실현 불가</td></tr>
          </table>

          <h3>7-2. 페이지 부재 수 계산 — 참조열 1, 2, 3, 1, 2, 4, 1, 2, 5 · 프레임 3개</h3>
          <h4>FIFO — 부재 7회</h4>
          <table>
            <tr><th>참조</th><td>1</td><td>2</td><td>3</td><td>1</td><td>2</td><td>4</td><td>1</td><td>2</td><td>5</td></tr>
            <tr><th>프레임 1</th><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td><strong>4</strong></td><td>4</td><td>4</td><td><strong>5</strong></td></tr>
            <tr><th>프레임 2</th><td></td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td><strong>1</strong></td><td>1</td><td>1</td></tr>
            <tr><th>프레임 3</th><td></td><td></td><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td><td><strong>2</strong></td><td>2</td></tr>
            <tr><th>부재</th><td>●</td><td>●</td><td>●</td><td>○</td><td>○</td><td>●</td><td>●</td><td>●</td><td>●</td></tr>
          </table>
          <p>4가 올 때 가장 먼저 들어온 1을, 이어서 2 → 3 → 4 순서로 오래된 페이지를 차례로 교체한다.
          부재 ● 7개 → <strong>FIFO 페이지 부재 7회</strong> (적중 2회: 네 번째 1, 다섯 번째 2).</p>

          <h4>LRU — 부재 6회</h4>
          <table>
            <tr><th>참조</th><td>1</td><td>2</td><td>3</td><td>1</td><td>2</td><td>4</td><td>1</td><td>2</td><td>5</td></tr>
            <tr><th>프레임 1</th><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><th>프레임 2</th><td></td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
            <tr><th>프레임 3</th><td></td><td></td><td>3</td><td>3</td><td>3</td><td><strong>4</strong></td><td>4</td><td>4</td><td><strong>5</strong></td></tr>
            <tr><th>부재</th><td>●</td><td>●</td><td>●</td><td>○</td><td>○</td><td>●</td><td>○</td><td>○</td><td>●</td></tr>
          </table>
          <p>4가 올 때 1·2는 방금 다시 사용됐으므로 <strong>가장 오래 안 쓴 3</strong>을 교체하고,
          5가 올 때도 같은 이유로 4를 교체한다. 그 덕분에 1과 2가 살아남아 이후 참조가 적중된다.
          부재 ● 6개 → <strong>LRU 페이지 부재 6회</strong> (적중 4회). 같은 데이터에서 LRU가 FIFO보다 부재가 1회 적다.</p>

          <h3>7-3. 스래싱 · 워킹 셋 · 구역성 (실기 단골)</h3>
          <table>
            <tr><th>용어</th><th>의미</th></tr>
            <tr>
              <td><strong>스래싱 (Thrashing)</strong></td>
              <td>페이지 부재가 <strong>지나치게 자주</strong> 일어나, 실제 작업보다 <strong>페이지 교체에 시간을 더 쓰는</strong> 성능 저하 현상</td>
            </tr>
            <tr>
              <td><strong>워킹 셋 (Working Set)</strong></td>
              <td>프로세스가 일정 시간 동안 <strong>자주 참조하는 페이지들의 집합</strong> — 이것을 메모리에 상주시켜 스래싱을 줄인다</td>
            </tr>
            <tr>
              <td><strong>구역성 (Locality)</strong></td>
              <td><strong>시간 구역성</strong>(한 번 참조한 페이지를 곧 다시 참조 — 반복문, 스택)과
              <strong>공간 구역성</strong>(참조한 페이지 근처를 이어서 참조 — 배열 순회) — 워킹 셋의 이론적 근거</td>
            </tr>
          </table>
        </section>

        {/* ===================== 8. 유닉스/리눅스 명령어 ===================== */}
        <section id="commands">
          <h2>8. 유닉스/리눅스 명령어 — chmod 계산 · 분류</h2>
          <p class="sub">chmod 8진수 권한 계산은 실기 최최단골이다. r=4, w=2, x=1의 합으로 세 자리(소유자·그룹·기타)를 만든다.</p>

          <h3>8-1. chmod 8진수 모드 (실기 최최단골)</h3>
          <p>권한 문자열은 <strong>소유자(User) · 그룹(Group) · 기타(Other)</strong> 세 묶음이며,
          각 묶음에서 <strong>r(읽기)=4, w(쓰기)=2, x(실행)=1</strong>을 더해 숫자 하나를 만든다.</p>
          <table>
            <tr><th>권한</th><th>값</th><th>의미</th></tr>
            <tr><td><strong>r</strong> (read)</td><td><strong>4</strong></td><td>읽기</td></tr>
            <tr><td><strong>w</strong> (write)</td><td><strong>2</strong></td><td>쓰기</td></tr>
            <tr><td><strong>x</strong> (execute)</td><td><strong>1</strong></td><td>실행</td></tr>
          </table>

          <h4>계산 예시 1 — rwxr-xr-- → 754</h4>
          <pre>{`소유자  rwx  =  4 + 2 + 1  =  7
그룹    r-x  =  4 + 0 + 1  =  5
기타    r--  =  4 + 0 + 0  =  4
→ chmod 754 파일명`}</pre>

          <h4>계산 예시 2 — rw-rw-r-- → 664</h4>
          <pre>{`소유자  rw-  =  4 + 2 + 0  =  6
그룹    rw-  =  4 + 2 + 0  =  6
기타    r--  =  4 + 0 + 0  =  4
→ chmod 664 파일명`}</pre>

          <h4>계산 예시 3 — 반대 방향: chmod 755 의 의미</h4>
          <pre>{`7 = 4+2+1 = rwx (소유자: 읽기·쓰기·실행)
5 = 4+0+1 = r-x (그룹: 읽기·실행)
5 = 4+0+1 = r-x (기타: 읽기·실행)
→ rwxr-xr-x`}</pre>
          <div class="box">
            <span class="tag-line">함께 암기</span><br/>
            <strong>chown</strong> = 파일 <strong>소유자</strong> 변경, <strong>chgrp</strong> = 파일 <strong>소유 그룹</strong> 변경.
            chmod(권한)와 세트로 출제된다.
          </div>

          <h3>8-2. 명령어 분류 표</h3>
          <table>
            <tr><th>분류</th><th>명령어</th></tr>
            <tr>
              <td><strong>파일 · 디렉터리</strong></td>
              <td><code>ls</code>(목록) · <code>cp</code>(복사) · <code>mv</code>(이동/이름 변경) · <code>rm</code>(삭제) ·
              <code>cat</code>(내용 출력) · <code>find</code>(검색) · <code>chmod</code>(권한) · <code>chown</code>(소유자) · <code>chgrp</code>(그룹)</td>
            </tr>
            <tr>
              <td><strong>프로세스</strong></td>
              <td><code>ps</code>(프로세스 목록) · <code>kill</code>(종료 신호) ·
              <code>fork</code>(<strong>새 프로세스 생성</strong> — 자신을 복제, 단골) · <code>exec</code>(새 프로그램으로 대체 실행) · <code>top</code>(실시간 감시)</td>
            </tr>
            <tr>
              <td><strong>기타</strong></td>
              <td><code>grep</code>(문자열 검색) · <code>pwd</code>(현재 디렉터리 경로) · <code>who</code>(접속 사용자 확인)</td>
            </tr>
          </table>

          <h3>8-3. 윈도 명령어 (간단 비교)</h3>
          <table>
            <tr><th>윈도</th><th>기능</th><th>유닉스/리눅스 대응</th></tr>
            <tr><td><code>dir</code></td><td>파일 목록 표시</td><td><code>ls</code></td></tr>
            <tr><td><code>copy</code></td><td>파일 복사</td><td><code>cp</code></td></tr>
            <tr><td><code>tasklist</code></td><td>실행 중인 프로세스 목록</td><td><code>ps</code></td></tr>
          </table>
        </section>

        {/* ===================== 9. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>9. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">실기 기출 형식의 10문항. 계산 문제는 반드시 손으로 단계를 따라가며 풀어본 뒤 정답을 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">HRN 스케줄링에서 우선순위 공식은 (대기 시간 + 서비스 시간) ÷ 서비스 시간이다.
            다음 네 프로세스 중 가장 먼저 실행되는 프로세스와 그 우선순위 값을 쓰시오.</p>
            <pre>{`프로세스   대기 시간   서비스 시간
P1            5           5
P2           10           4
P3           15          10
P4           20           5`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>P4, 우선순위 5<br/>
                <span class="label">해설: </span>P1=(5+5)÷5=2, P2=(10+4)÷4=3.5, P3=(15+10)÷10=2.5, P4=(20+5)÷5=5.
                값이 가장 큰 P4가 먼저 실행된다 (전체 순서: P4 → P2 → P3 → P1).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">페이지 프레임이 3개인 시스템에서 아래 참조열을 FIFO 기법으로 처리할 때
            페이지 부재(Page Fault)는 몇 회 발생하는지 쓰시오. (초기 프레임은 모두 비어 있음)</p>
            <pre>{`참조열: 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>9회<br/>
                <span class="label">해설: </span>2●, 3●, 2○, 1●, 5●(2 교체), 2●(3 교체), 4●(1 교체),
                5○, 3●(5 교체), 2○, 5●(2 교체), 2●(4 교체) — 부재 ● 9회, 적중 ○ 3회.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">페이지 프레임이 3개인 시스템에서 아래 참조열을 LRU 기법으로 처리할 때
            페이지 부재는 몇 회 발생하는지 쓰시오. (초기 프레임은 모두 비어 있음)</p>
            <pre>{`참조열: 7, 0, 1, 2, 0, 3, 0, 4`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>6회<br/>
                <span class="label">해설: </span>7●, 0●, 1● (적재 3회) → 2●: 가장 오래 안 쓴 7 교체 → 0○ 적중 →
                3●: 가장 오래 안 쓴 1 교체 → 0○ 적중 → 4●: 가장 오래 안 쓴 2 교체. 부재는 총 6회.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">리눅스에서 <code>chmod 640 report.txt</code> 를 실행했을 때
            report.txt 에 설정되는 권한을 기호(rwx 표기)로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>rw-r-----<br/>
                <span class="label">해설: </span>6 = 4+2 = rw-(소유자: 읽기·쓰기), 4 = r--(그룹: 읽기), 0 = ---(기타: 권한 없음).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">어떤 파일의 권한이 <code>rwxr-x--x</code> 이다. 이 권한을 8진수 세 자리로 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>751<br/>
                <span class="label">해설: </span>소유자 rwx = 4+2+1 = 7, 그룹 r-x = 4+0+1 = 5, 기타 --x = 0+0+1 = 1 → 751.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">교착상태(Deadlock) 발생 필요조건 4가지 중 빈칸 ①, ②에 들어갈 용어를 쓰시오.</p>
            <pre>{`상호 배제  ·  ( ① )  ·  비선점  ·  ( ② )`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 점유와 대기(Hold and Wait), ② 환형 대기(원형 대기, Circular Wait)<br/>
                <span class="label">해설: </span>네 조건(상호 배제 · 점유와 대기 · 비선점 · 환형 대기)이 모두 성립해야
                교착상태가 발생하며, 하나만 부정해도 예방된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">프로세스 상태 전이에서 다음 설명에 해당하는 용어를 각각 쓰시오.<br/>
            ① 준비 상태의 프로세스가 스케줄러에 의해 CPU를 할당받아 실행 상태가 되는 것<br/>
            ② 입출력이 완료되어 대기 상태의 프로세스가 준비 상태로 바뀌는 것</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 디스패치(Dispatch), ② 웨이크업(Wake-up)<br/>
                <span class="label">해설: </span>디스패치(준비→실행) · 타임아웃(실행→준비) · 블록(실행→대기) ·
                웨이크업(대기→준비) 네 용어를 방향과 함께 암기한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">모든 프로세스가 0초에 도착했을 때, SJF(비선점) 스케줄링의 평균 대기 시간을 구하시오.</p>
            <pre>{`프로세스   실행 시간
P1            6
P2            8
P3            7
P4            3`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>7<br/>
                <span class="label">해설: </span>짧은 순서 P4(3) → P1(6) → P3(7) → P2(8)로 실행.
                대기 시간은 P4=0, P1=3, P3=3+6=9, P2=3+6+7=16 → (0+3+9+16)÷4 = 28÷4 = 7.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 설명의 ①, ②에 해당하는 운영체제 구성 요소를 쓰시오.<br/>
            ① 운영체제의 핵심으로 항상 메모리에 상주하며 프로세스·기억장치·입출력 등 자원을 관리한다.<br/>
            ② 사용자가 입력한 명령을 해석하여 ①에 전달하는 명령 해석기이다.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 커널(Kernel), ② 쉘(Shell)<br/>
                <span class="label">해설: </span>커널 = 자원 관리 핵심(안쪽), 쉘 = 명령 해석기(사용자와 커널 사이).
                bash, csh 등은 쉘의 종류다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">기억장치의 단편화에 관한 다음 물음에 답하시오.<br/>
            ① 20K 크기의 고정 분할에 16K 프로그램을 적재했을 때 남는 4K 공간을 무슨 단편화라 하는가?<br/>
            ② 대기 중인 프로그램(10K)보다 빈 분할(5K)이 작아 그 분할을 통째로 쓰지 못할 때, 이 5K를 무슨 단편화라 하는가?</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>① 내부 단편화, ② 외부 단편화<br/>
                <span class="label">해설: </span>분할 <strong>안쪽</strong>에 남으면 내부 단편화(20K−16K=4K),
                분할이 작아 <strong>바깥에서</strong> 통째로 못 쓰면 외부 단편화. 내부는 세그먼테이션(가변 분할),
                외부는 압축·통합이나 페이징으로 해결한다.
              </div>
            </details>
          </div>

          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">문맥 교환 (Context Switching)</span>
            <span class="kw">세마포어 · 뮤텍스</span>
            <span class="kw">임계 구역 (Critical Section)</span>
            <span class="kw">은행가 알고리즘 상세</span>
            <span class="kw">SRT · MFQ 동작 과정</span>
            <span class="kw">OPT · LFU 부재 계산</span>
            <span class="kw">TLB (연관 기억장치)</span>
            <span class="kw">i-node · 파일 시스템 구조</span>
            <span class="kw">쉘 스크립트 기초</span>
          </p>
        </section>

        <footer>운영체제 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
