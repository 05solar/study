import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './python-language.css'

export default defineComponent({
  name: 'PythonLanguagePage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>파이썬(Python) 총정리</h1>
          <p>정보처리기사 실기 대비 학습 문서. 실기 프로그래밍 문제의 대부분은
          <strong> "다음 코드의 출력 결과를 쓰시오"</strong> 유형이다. 기본 구조 → 자료형 →
          인덱싱·슬라이싱 → 입출력 → 연산자·조건문 → 반복문 → 함수 → 문자열·리스트 메서드 →
          클래스·상속 → 리스트 컴프리헨션 순서로, 모든 개념을 짧은 코드와 출력 결과로 확인하며 정리한다.</p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#basics" onClick={(e) => scrollToId(e, 'basics')}>파이썬 기본 구조 — 들여쓰기가 블록</a></li>
            <li><a href="#types" onClick={(e) => scrollToId(e, 'types')}>자료형 — 숫자·문자열·컬렉션 4형제</a></li>
            <li><a href="#slicing" onClick={(e) => scrollToId(e, 'slicing')}>시퀀스 인덱싱과 슬라이싱</a></li>
            <li><a href="#io" onClick={(e) => scrollToId(e, 'io')}>입출력 — input · print · 포매팅</a></li>
            <li><a href="#operators" onClick={(e) => scrollToId(e, 'operators')}>연산자와 조건문</a></li>
            <li><a href="#loops" onClick={(e) => scrollToId(e, 'loops')}>반복문 — for · range · while</a></li>
            <li><a href="#functions" onClick={(e) => scrollToId(e, 'functions')}>함수 — def · lambda · 내장 함수</a></li>
            <li><a href="#methods" onClick={(e) => scrollToId(e, 'methods')}>문자열·리스트 메서드</a></li>
            <li><a href="#classes" onClick={(e) => scrollToId(e, 'classes')}>클래스와 상속</a></li>
            <li><a href="#comprehension" onClick={(e) => scrollToId(e, 'comprehension')}>리스트 컴프리헨션</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 파이썬 기본 구조 ===================== */}
        <section id="basics">
          <h2>1. 파이썬 기본 구조 — 들여쓰기가 블록</h2>
          <p class="sub">파이썬은 중괄호 대신 <strong>콜론(:)과 들여쓰기</strong>로 블록을 표현한다. 실기 지문의 들여쓰기를 잘못 읽으면 출력 결과 전체가 틀어지므로 가장 먼저 눈에 익혀야 한다.</p>

          <ul>
            <li><strong>인터프리터 언어</strong> — 컴파일 없이 위에서 아래로 한 줄씩 해석·실행한다.</li>
            <li><strong>콜론 + 들여쓰기가 블록</strong> (실기 단골) — <code>if</code>, <code>for</code>, <code>def</code>, <code>class</code> 뒤에는
            반드시 콜론이 오고, 같은 깊이로 들여쓴 줄들이 하나의 블록이다.</li>
            <li><strong>동적 타이핑</strong> — 변수 선언 시 자료형을 쓰지 않으며, 대입되는 값에 따라 타입이 정해진다.</li>
            <li><strong>세미콜론 불필요</strong> — 문장 끝에 <code>;</code>를 쓰지 않는다(줄바꿈이 문장의 끝).</li>
            <li><strong>주석은 #</strong> — <code>#</code> 뒤부터 줄 끝까지 주석이다.</li>
          </ul>

          <pre><code>{`x = 10          # 자료형 선언 없이 대입 (동적 타이핑)
if x > 5:       # 콜론(:) 필수
    print("크다")   # 들여쓴 줄 = if 블록
    x = x - 1
print(x)        # 들여쓰기가 없으므로 if 블록 밖`}</code></pre>
          <pre class="py-out">{`크다
9`}</pre>

          <div class="box">
            <span class="tag-line">핵심</span><br/>
            같은 블록은 <strong>같은 깊이의 들여쓰기</strong>여야 한다. 실기 코드를 읽을 때는
            "이 줄이 어느 블록 소속인지"를 들여쓰기 깊이로 먼저 표시하고 트레이스를 시작하자.
          </div>
        </section>

        {/* ===================== 2. 자료형 ===================== */}
        <section id="types">
          <h2>2. 자료형 — 숫자·문자열·컬렉션 4형제</h2>
          <p class="sub">숫자 연산자 <code>//</code>, <code>%</code>, <code>**</code>와 리스트·튜플·딕셔너리·셋의 성질 차이(가변성·순서·중복)는 실기 최다 빈출 암기 대상이다.</p>

          <h3>2-1. 숫자형 — int · float와 산술 연산자 (실기 단골)</h3>
          <p>파이썬의 <code>int</code>는 <strong>크기 제한이 없고</strong>, <code>float</code>는 실수를 표현한다.
          나눗셈 <code>/</code>는 결과가 항상 <code>float</code>라는 점에 주의한다.</p>
          <table>
            <tr><th>연산자</th><th>의미</th><th>예</th><th>결과</th></tr>
            <tr><td><code>/</code></td><td>나눗셈 (항상 실수)</td><td><code>7 / 2</code></td><td><code>3.5</code></td></tr>
            <tr><td><code>//</code></td><td><strong>몫</strong> (내림 나눗셈)</td><td><code>7 // 2</code></td><td><code>3</code></td></tr>
            <tr><td><code>%</code></td><td><strong>나머지</strong></td><td><code>7 % 2</code></td><td><code>1</code></td></tr>
            <tr><td><code>**</code></td><td><strong>거듭제곱</strong></td><td><code>2 ** 4</code></td><td><code>16</code></td></tr>
          </table>
          <pre><code>{`print(7 / 2, 7 // 2, 7 % 2, 2 ** 4)
print(-7 // 2)    # 몫은 내림(floor) — 음수 주의`}</code></pre>
          <pre class="py-out">{`3.5 3 1 16
-4`}</pre>

          <h3>2-2. 문자열</h3>
          <p>작은따옴표 <code>'...'</code>와 큰따옴표 <code>"..."</code> 모두 문자열이며 차이가 없다.
          <code>+</code>는 연결, <code>*</code>는 반복이다.</p>
          <pre><code>{`s = 'Py' + "thon"
print(s, len(s))
print("ab" * 3)`}</code></pre>
          <pre class="py-out">{`Python 6
ababab`}</pre>

          <h3>2-3. 컬렉션 4형제 — 리스트 · 튜플 · 딕셔너리 · 셋</h3>
          <pre><code>{`a = [1, 2, 3]            # 리스트: 가변(요소 수정 가능)
t = (1, 2, 3)            # 튜플: 불변(요소 수정 불가)
d = {'a': 1, 'b': 2}     # 딕셔너리: key:value 쌍
s = {3, 1, 2, 3, 2}      # 셋: 중복 자동 제거, 순서 없음

a[0] = 99                # 리스트는 수정 OK
print(a)
print(d['b'])            # key로 접근
print(s)                 # 중복 3, 2가 하나씩만 남는다
t[0] = 99                # 튜플 수정 시도 → 오류!`}</code></pre>
          <pre class="py-out">{`[99, 2, 3]
2
{1, 2, 3}
TypeError: 'tuple' object does not support item assignment`}</pre>

          <h3>2-4. 컬렉션 비교 표 (실기 최단골)</h3>
          <table>
            <tr><th>자료형</th><th>표기</th><th>가변성</th><th>순서</th><th>중복 허용</th></tr>
            <tr>
              <td><strong>리스트(list)</strong></td><td><code>[1, 2, 3]</code></td>
              <td><strong>가변</strong> (수정 가능)</td><td>있음 (인덱스)</td><td>허용</td>
            </tr>
            <tr>
              <td><strong>튜플(tuple)</strong></td><td><code>(1, 2, 3)</code></td>
              <td><strong>불변</strong> (수정 불가 — 단골)</td><td>있음 (인덱스)</td><td>허용</td>
            </tr>
            <tr>
              <td><strong>딕셔너리(dict)</strong></td><td><code>{'{key: value}'}</code></td>
              <td>가변</td><td>key로 접근 (인덱스 없음)</td><td>key 중복 불가 (value는 허용)</td>
            </tr>
            <tr>
              <td><strong>셋(set)</strong></td><td><code>{'{1, 2, 3}'}</code></td>
              <td>가변</td><td><strong>없음</strong> (인덱싱 불가)</td><td><strong>불가 — 중복 자동 제거 (단골)</strong></td>
            </tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            "수정할 수 없는 시퀀스 자료형" = <strong>튜플</strong>,
            "중복을 허용하지 않고 순서가 없는 자료형" = <strong>셋</strong>.
            이 두 문장은 그대로 단답형으로 출제된다.
          </div>
        </section>

        {/* ===================== 3. 인덱싱과 슬라이싱 ===================== */}
        <section id="slicing">
          <h2>3. 시퀀스 인덱싱과 슬라이싱</h2>
          <p class="sub">실기 최다 빈출. <code>a[start:end:step]</code>에서 <strong>end 인덱스는 포함되지 않는다</strong>는 것 하나만 정확히 알아도 절반은 맞춘다. 문자열과 리스트에 똑같이 적용된다.</p>

          <h3>3-1. 양수/음수 인덱스</h3>
          <pre><code>{`a = [10, 20, 30, 40, 50]
#     0   1   2   3   4     ← 양수 인덱스
#    -5  -4  -3  -2  -1     ← 음수 인덱스
print(a[0], a[3], a[-1], a[-4])`}</code></pre>
          <pre class="py-out">{`10 40 50 20`}</pre>

          <h3>3-2. 슬라이싱 a[start:end:step] — end 미포함 (실기 최중요)</h3>
          <ul>
            <li><code>start</code> 생략 = 처음부터, <code>end</code> 생략 = 끝까지, <code>step</code> 생략 = 1칸씩.</li>
            <li><strong><code>end</code> 인덱스의 요소는 결과에 포함되지 않는다.</strong></li>
            <li><code>step</code>이 음수면 역방향 — <code>[::-1]</code>은 전체 역순(단골).</li>
          </ul>
          <table>
            <tr><th>식</th><th>결과</th><th>설명</th></tr>
            <tr><td><code>a[1:4]</code></td><td><code>[20, 30, 40]</code></td><td>인덱스 1~3 (4 미포함)</td></tr>
            <tr><td><code>a[:3]</code></td><td><code>[10, 20, 30]</code></td><td>처음부터 인덱스 2까지</td></tr>
            <tr><td><code>a[2:]</code></td><td><code>[30, 40, 50]</code></td><td>인덱스 2부터 끝까지</td></tr>
            <tr><td><code>a[-3:]</code></td><td><code>[30, 40, 50]</code></td><td>뒤에서 3개</td></tr>
            <tr><td><code>a[1:-1]</code></td><td><code>[20, 30, 40]</code></td><td>양끝 하나씩 제외</td></tr>
            <tr><td><code>a[::2]</code></td><td><code>[10, 30, 50]</code></td><td>2칸씩 건너뛰기</td></tr>
            <tr><td><code>a[::-1]</code></td><td><code>[50, 40, 30, 20, 10]</code></td><td><strong>전체 역순 (단골)</strong></td></tr>
            <tr><td><code>a[3:0:-1]</code></td><td><code>[40, 30, 20]</code></td><td>인덱스 3→1 역방향 (0 미포함)</td></tr>
            <tr><td><code>s[1:4]</code></td><td><code>'YTH'</code></td><td>문자열도 동일 (<code>s = "PYTHON"</code>)</td></tr>
            <tr><td><code>s[::-1]</code></td><td><code>'NOHTYP'</code></td><td>문자열 역순</td></tr>
          </table>
          <pre><code>{`a = [10, 20, 30, 40, 50]
s = "PYTHON"
print(a[1:4])
print(a[::2])
print(a[::-1])
print(s[2:5], s[::-1])`}</code></pre>
          <pre class="py-out">{`[20, 30, 40]
[10, 30, 50]
[50, 40, 30, 20, 10]
THO NOHTYP`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            슬라이싱 트레이스 순서: ① 인덱스 번호를 요소 위에 적는다 →
            ② <code>start</code>부터 <code>step</code>씩 이동 → ③ <strong><code>end</code>에 도달하면 멈추고 포함하지 않는다.</strong>
          </div>
        </section>

        {/* ===================== 4. 입출력 ===================== */}
        <section id="io">
          <h2>4. 입출력 — input · print · 포매팅</h2>
          <p class="sub"><code>input()</code>의 반환값은 항상 문자열이라는 점, <code>print()</code>의 <code>sep</code>·<code>end</code> 옵션이 출력 모양을 바꾼다는 점이 단골이다.</p>

          <h3>4-1. input()은 문자열 (실기 단골)</h3>
          <pre><code>{`a = input()          # "3" 입력해도 문자열 '3'
b = input()          # "5" 입력
print(a + b)         # 문자열 연결!
print(int(a) + int(b))   # 숫자 계산은 int() 변환 필수`}</code></pre>
          <pre class="py-out">{`35
8`}</pre>

          <h3>4-2. print(sep=, end=) (실기 단골)</h3>
          <ul>
            <li><code>sep</code>: 인자 사이 구분자 (기본값 공백 <code>' '</code>)</li>
            <li><code>end</code>: 출력 끝에 붙는 문자 (기본값 줄바꿈 <code>'\n'</code>)</li>
          </ul>
          <pre><code>{`print(2026, 9, 7, sep='-')
print("A", end='')
print("B", end='*')
print("C")`}</code></pre>
          <pre class="py-out">{`2026-9-7
AB*C`}</pre>

          <h3>4-3. 문자열 포매팅 3가지</h3>
          <pre><code>{`name = "김파이"
score = 95
print(f"{name}의 점수는 {score}점")        # f-string
print("{}의 점수는 {}점".format(name, score))  # format()
print("%s의 점수는 %d점" % (name, score))      # % 포맷`}</code></pre>
          <pre class="py-out">{`김파이의 점수는 95점
김파이의 점수는 95점
김파이의 점수는 95점`}</pre>
        </section>

        {/* ===================== 5. 연산자와 조건문 ===================== */}
        <section id="operators">
          <h2>5. 연산자와 조건문</h2>
          <p class="sub">파이썬만의 문법인 비교 연쇄 <code>{'a < b < c'}</code>, 멤버십 연산자 <code>in</code>/<code>not in</code>, 그리고 <code>if-elif-else</code>의 흐름을 정리한다.</p>

          <h3>5-1. 비교 연쇄와 논리 연산자</h3>
          <p>파이썬은 <code>{'3 < x < 7'}</code>처럼 비교를 연달아 쓸 수 있다(수학 표기와 동일).
          논리 연산자는 기호가 아니라 <strong>영단어 <code>and</code> / <code>or</code> / <code>not</code></strong>이다.</p>
          <pre><code>{`x = 5
print(3 < x < 7)          # (3 < x) and (x < 7)
print(x > 3 and x % 2 == 0)
print(not x == 5)`}</code></pre>
          <pre class="py-out">{`True
False
False`}</pre>

          <h3>5-2. in / not in (실기 단골)</h3>
          <pre><code>{`print(3 in [1, 2, 3])
print('py' in 'python')
print('k' not in {'a': 1, 'k': 2})   # 딕셔너리는 key를 검사`}</code></pre>
          <pre class="py-out">{`True
True
False`}</pre>

          <h3>5-3. if - elif - else와 조건부 표현식</h3>
          <pre><code>{`score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:      # 위 조건이 거짓일 때만 검사
    grade = 'B'
else:
    grade = 'C'
print(grade)

result = "합격" if score >= 60 else "불합격"   # 조건부 표현식
print(result)`}</code></pre>
          <pre class="py-out">{`B
합격`}</pre>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            <code>elif</code>는 <strong>위의 조건이 거짓일 때만</strong> 검사한다.
            <code>score = 95</code>라면 <code>{'score >= 80'}</code>도 참이지만 이미 A에서 끝났으므로 B가 되지 않는다.
          </div>
        </section>

        {/* ===================== 6. 반복문 ===================== */}
        <section id="loops">
          <h2>6. 반복문 — for · range · while</h2>
          <p class="sub"><code>range(start, stop, step)</code>의 <strong>stop 미포함</strong> 규칙은 슬라이싱과 똑같다. 반복 변수의 최종 누적값을 묻는 문제가 매회 나온다.</p>

          <h3>6-1. for + range (stop 미포함 — 실기 단골)</h3>
          <pre><code>{`print(list(range(5)))        # 0부터 5 미만
print(list(range(1, 10, 2))) # 1부터 10 미만, 2씩
total = 0
for i in range(1, 6):        # i = 1, 2, 3, 4, 5
    total += i
print(total)`}</code></pre>
          <pre class="py-out">{`[0, 1, 2, 3, 4]
[1, 3, 5, 7, 9]
15`}</pre>

          <h3>6-2. enumerate — 인덱스와 값을 동시에</h3>
          <pre><code>{`for i, name in enumerate(['가', '나', '다'], 1):  # 1부터 번호
    print(i, name)`}</code></pre>
          <pre class="py-out">{`1 가
2 나
3 다`}</pre>

          <h3>6-3. while / break / continue / else절</h3>
          <pre><code>{`n = 0
while True:
    n += 1
    if n % 2 == 0:
        continue     # 짝수면 아래를 건너뛰고 다음 반복
    if n > 5:
        break        # 반복 즉시 종료
    print(n, end=' ')`}</code></pre>
          <pre class="py-out">{`1 3 5 `}</pre>
          <p>반복문의 <code>else</code>절은 <strong><code>break</code> 없이 반복이 끝까지 돌면</strong> 실행되는 파이썬 고유 문법이다
          (중간에 <code>break</code>로 빠져나오면 실행되지 않는다).</p>

          <h3>6-4. 중첩 반복</h3>
          <pre><code>{`for i in range(2, 4):        # 바깥: 2, 3
    for j in range(1, 3):    # 안쪽: 1, 2
        print(i, '*', j, '=', i * j)`}</code></pre>
          <pre class="py-out">{`2 * 1 = 2
2 * 2 = 4
3 * 1 = 3
3 * 2 = 6`}</pre>
        </section>

        {/* ===================== 7. 함수 ===================== */}
        <section id="functions">
          <h2>7. 함수 — def · lambda · 내장 함수</h2>
          <p class="sub">여러 값을 <code>return</code>하면 튜플이 된다는 점, 한 줄 익명 함수 <code>lambda</code>, 그리고 <code>len</code>·<code>sorted</code>·<code>map</code> 같은 내장 함수가 단골이다.</p>

          <h3>7-1. def와 다중 반환(= 튜플)</h3>
          <pre><code>{`def div(a, b):
    return a // b, a % b     # 두 값 반환 = 튜플 (몫, 나머지)

q, r = div(17, 5)            # 튜플 언패킹
print(q, r)
print(div(17, 5))`}</code></pre>
          <pre class="py-out">{`3 2
(3, 2)`}</pre>

          <h3>7-2. 기본값 인자와 가변 인자</h3>
          <pre><code>{`def greet(name, msg="안녕"):   # msg를 생략하면 기본값 사용
    print(msg, name)

greet("철수")
greet("영희", "반가워")

def add_all(*args):            # 인자들을 튜플로 묶어 받음
    return sum(args)
print(add_all(1, 2, 3, 4))

def info(**kwargs):            # 키워드 인자들을 딕셔너리로 받음
    print(kwargs['name'], kwargs['age'])
info(name="김코딩", age=20)`}</code></pre>
          <pre class="py-out">{`안녕 철수
반가워 영희
10
김코딩 20`}</pre>

          <h3>7-3. lambda — 한 줄 익명 함수 (실기 단골)</h3>
          <pre><code>{`f = lambda x, y: x * y
print(f(3, 4))
data = [(1, 'b'), (3, 'a'), (2, 'c')]
print(sorted(data, key=lambda t: t[1]))   # 두 번째 값 기준 정렬`}</code></pre>
          <pre class="py-out">{`12
[(3, 'a'), (1, 'b'), (2, 'c')]`}</pre>

          <h3>7-4. 주요 내장 함수 표 (실기 단골)</h3>
          <table>
            <tr><th>함수</th><th>기능</th><th>예</th><th>결과</th></tr>
            <tr><td><code>len(x)</code></td><td>길이(요소 개수)</td><td><code>len("abc")</code></td><td><code>3</code></td></tr>
            <tr><td><code>sum(x)</code></td><td>합계</td><td><code>sum([1, 2, 3])</code></td><td><code>6</code></td></tr>
            <tr><td><code>max(x)</code> / <code>min(x)</code></td><td>최댓값 / 최솟값</td><td><code>max([3, 1, 5])</code></td><td><code>5</code></td></tr>
            <tr><td><code>sorted(x)</code></td><td><strong>새 정렬 리스트 반환</strong> (원본 유지)</td><td><code>sorted([3, 1, 2])</code></td><td><code>[1, 2, 3]</code></td></tr>
            <tr><td><code>map(f, x)</code></td><td>각 요소에 함수 적용</td><td><code>list(map(int, ['1', '2']))</code></td><td><code>[1, 2]</code></td></tr>
            <tr><td><code>filter(f, x)</code></td><td>조건이 참인 요소만</td><td><code>{"list(filter(lambda n: n > 2, [1, 2, 3, 4]))"}</code></td><td><code>[3, 4]</code></td></tr>
          </table>
        </section>

        {/* ===================== 8. 문자열·리스트 메서드 ===================== */}
        <section id="methods">
          <h2>8. 문자열·리스트 메서드</h2>
          <p class="sub">메서드 연쇄 호출 트레이스가 자주 나온다. 특히 <code>sort()</code>(원본 변경, 반환 None)와 <code>sorted()</code>(새 리스트 반환)의 차이는 최다 빈출 함정.</p>

          <h3>8-1. 문자열 메서드 표 (실기 단골)</h3>
          <p>문자열은 불변이므로 메서드는 원본을 바꾸지 않고 <strong>새 문자열을 반환</strong>한다.</p>
          <table>
            <tr><th>메서드</th><th>기능</th><th>예</th><th>결과</th></tr>
            <tr><td><code>upper()</code> / <code>lower()</code></td><td>대문자 / 소문자로</td><td><code>"Hi".upper()</code></td><td><code>'HI'</code></td></tr>
            <tr><td><code>split(구분자)</code></td><td>구분자로 잘라 <strong>리스트</strong> 반환</td><td><code>"a,b,c".split(',')</code></td><td><code>['a', 'b', 'c']</code></td></tr>
            <tr><td><code>'구분자'.join(리스트)</code></td><td>리스트를 하나의 문자열로 연결</td><td><code>'-'.join(['a', 'b'])</code></td><td><code>'a-b'</code></td></tr>
            <tr><td><code>replace(a, b)</code></td><td>a를 b로 모두 치환</td><td><code>"banana".replace('a', 'o')</code></td><td><code>'bonono'</code></td></tr>
            <tr><td><code>strip()</code></td><td>양끝 공백 제거</td><td><code>"  hi  ".strip()</code></td><td><code>'hi'</code></td></tr>
            <tr><td><code>find(x)</code></td><td>첫 위치 인덱스 (없으면 -1)</td><td><code>"banana".find('n')</code></td><td><code>2</code></td></tr>
            <tr><td><code>count(x)</code></td><td>등장 횟수</td><td><code>"banana".count('a')</code></td><td><code>3</code></td></tr>
          </table>

          <h3>8-2. 리스트 메서드 표 (실기 단골)</h3>
          <table>
            <tr><th>메서드</th><th>기능</th><th>예 (<code>a = [3, 1, 2]</code> 기준)</th><th>실행 후 a</th></tr>
            <tr><td><code>append(x)</code></td><td>맨 뒤에 추가</td><td><code>a.append(9)</code></td><td><code>[3, 1, 2, 9]</code></td></tr>
            <tr><td><code>insert(i, x)</code></td><td>인덱스 i 위치에 삽입</td><td><code>a.insert(1, 9)</code></td><td><code>[3, 9, 1, 2]</code></td></tr>
            <tr><td><code>remove(x)</code></td><td><strong>값</strong> x를 찾아 첫 번째 것 삭제</td><td><code>a.remove(1)</code></td><td><code>[3, 2]</code></td></tr>
            <tr><td><code>pop()</code> / <code>pop(i)</code></td><td>마지막(또는 i번째) 요소를 <strong>꺼내서 반환</strong></td><td><code>a.pop()</code> → <code>2</code></td><td><code>[3, 1]</code></td></tr>
            <tr><td><code>sort()</code></td><td><strong>원본을</strong> 오름차순 정렬 (반환 None)</td><td><code>a.sort()</code></td><td><code>[1, 2, 3]</code></td></tr>
            <tr><td><code>reverse()</code></td><td>원본을 뒤집기 (정렬 아님)</td><td><code>a.reverse()</code></td><td><code>[2, 1, 3]</code></td></tr>
            <tr><td><code>index(x)</code></td><td>값 x의 첫 인덱스 반환</td><td><code>a.index(2)</code> → <code>2</code></td><td>변화 없음</td></tr>
            <tr><td><code>extend(리스트)</code></td><td>다른 리스트의 요소들을 이어 붙임</td><td><code>a.extend([7, 8])</code></td><td><code>[3, 1, 2, 7, 8]</code></td></tr>
          </table>

          <h3>8-3. sort() vs sorted() (실기 최다 빈출 함정)</h3>
          <pre><code>{`a = [3, 1, 2]
print(a.sort())              # sort()의 반환값은 None!
print(a)                     # 원본은 정렬되어 있음
b = sorted([3, 1, 2], reverse=True)   # 새 리스트 반환
print(b)`}</code></pre>
          <pre class="py-out">{`None
[1, 2, 3]
[3, 2, 1]`}</pre>
          <div class="box deny">
            <span class="tag-line">함정</span><br/>
            <code>print(a.sort())</code>의 답은 <strong>None</strong>이다.
            <code>sort()</code>·<code>append()</code>·<code>reverse()</code> 같은 리스트 메서드는
            원본을 바꾸고 <strong>None을 반환</strong>한다. 정렬된 결과를 출력하려면 <code>sorted(a)</code>를 써야 한다.
          </div>
        </section>

        {/* ===================== 9. 클래스와 상속 ===================== */}
        <section id="classes">
          <h2>9. 클래스와 상속</h2>
          <p class="sub">생성자 <code>__init__</code>의 첫 인자 <code>self</code>, 부모 생성자를 부르는 <code>super().__init__()</code>, 메서드 오버라이딩 트레이스가 실기 단골이다.</p>

          <h3>9-1. class와 __init__(self) (실기 단골)</h3>
          <ul>
            <li><code>__init__</code>: 객체 생성 시 자동 호출되는 <strong>생성자</strong>.</li>
            <li><code>self</code>: 모든 메서드의 첫 매개변수로, <strong>객체 자기 자신</strong>을 가리킨다 (호출 시에는 넘기지 않음).</li>
            <li><strong>인스턴스 변수</strong>(<code>self.name</code>)는 객체마다 따로, <strong>클래스 변수</strong>는 모든 객체가 공유.</li>
          </ul>
          <pre><code>{`class Student:
    school = "한국고"              # 클래스 변수 (공유)
    def __init__(self, name, score):
        self.name = name           # 인스턴스 변수 (객체마다)
        self.score = score
    def show(self):                # 메서드 (첫 인자 self)
        print(self.name, self.score)

s1 = Student("김철수", 90)         # __init__ 자동 호출
s1.show()
print(Student.school, s1.school)`}</code></pre>
          <pre class="py-out">{`김철수 90
한국고 한국고`}</pre>

          <h3>9-2. 상속과 super().__init__ · 오버라이딩 (실기 단골)</h3>
          <pre><code>{`class Animal:                      # 부모 클래스
    def __init__(self, name):
        self.name = name
    def cry(self):
        print(self.name, ": ...")

class Dog(Animal):                 # class 자식(부모): 로 상속
    def __init__(self, name, age):
        super().__init__(name)     # 부모 생성자 호출 (단골)
        self.age = age
    def cry(self):                 # 오버라이딩 (부모 메서드 재정의)
        print(self.name, ": 멍멍")

d = Dog("바둑이", 3)
d.cry()                            # 자식의 cry()가 우선
print(d.name, d.age)               # name은 부모가 만들어 준 속성`}</code></pre>
          <pre class="py-out">{`바둑이 : 멍멍
바둑이 3`}</pre>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250" role="img" aria-label="클래스 상속 구조 도면">
              <rect class="boxdark" x="350" y="18" width="200" height="72" />
              <text class="strong" x="450" y="45" text-anchor="middle">Animal (부모)</text>
              <text class="small" x="450" y="68" text-anchor="middle">__init__(self, name)</text>
              <text class="small" x="450" y="84" text-anchor="middle">cry()</text>
              <line class="arrow" x1="215" y1="160" x2="395" y2="98" />
              <line class="arrow" x1="685" y1="160" x2="505" y2="98" />
              <text class="small" x="450" y="132" text-anchor="middle">상속 — class Dog(Animal): / super().__init__(name)</text>
              <rect class="box" x="110" y="162" width="210" height="70" />
              <text class="strong" x="215" y="188" text-anchor="middle">Dog (자식)</text>
              <text class="small" x="215" y="212" text-anchor="middle">cry() 오버라이딩 → "멍멍"</text>
              <rect class="box" x="580" y="162" width="210" height="70" />
              <text class="strong" x="685" y="188" text-anchor="middle">Cat (자식)</text>
              <text class="small" x="685" y="212" text-anchor="middle">cry() 오버라이딩 → "야옹"</text>
            </svg>
            <figcaption>도면 1. 클래스 상속 구조 — 자식은 부모의 속성·메서드를 물려받고, 같은 이름의 메서드를 재정의(오버라이딩)하면 자식 것이 우선 호출된다</figcaption>
          </figure>
        </section>

        {/* ===================== 10. 리스트 컴프리헨션 ===================== */}
        <section id="comprehension">
          <h2>10. 리스트 컴프리헨션</h2>
          <p class="sub"><code>[식 for 변수 in 반복대상 if 조건]</code> 한 줄로 리스트를 만드는 문법. 최근 실기에서 출력 예측 형태로 자주 등장한다(단골).</p>

          <p>읽는 순서는 <strong>for(반복) → if(거르기) → 맨 앞의 식(변환)</strong>이다.</p>
          <pre><code>{`print([x * 2 for x in range(5)])          # 각 요소 변환
print([x for x in range(10) if x % 3 == 0])   # 조건으로 거르기
print([x * x for x in range(6) if x % 2 == 0])  # 변환 + 조건
print([c.upper() for c in "abc"])          # 문자열에도 적용
print([i * j for i in range(2, 4) for j in range(1, 3)])  # 이중 for`}</code></pre>
          <pre class="py-out">{`[0, 2, 4, 6, 8]
[0, 3, 6, 9]
[0, 4, 16]
['A', 'B', 'C']
[2, 4, 3, 6]`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <code>{'[x * x for x in range(6) if x % 2 == 0]'}</code> 트레이스:
            x = 0~5 중 짝수 0, 2, 4만 통과 → 각각 제곱 → <code>[0, 4, 16]</code>.
            같은 문법을 <code>{'{ }'}</code>로 감싸면 셋/딕셔너리 컴프리헨션이 된다.
          </div>
        </section>

        {/* ===================== 11. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>11. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">전부 실기 최다 빈출인 "출력 결과 쓰기" 유형이다. 답을 보기 전에 반드시 손으로 트레이스하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`a = [10, 20, 30, 40, 50, 60, 70]
print(a[1:6:2])
print(a[::3])`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>[20, 40, 60]</code> 그리고 <code>[10, 40, 70]</code> (두 줄)<br/>
                <span class="label">해설: </span><code>a[1:6:2]</code>는 인덱스 1, 3, 5 (6 미포함) → 20, 40, 60.
                <code>a[::3]</code>은 처음부터 끝까지 3칸씩 → 인덱스 0, 3, 6 → 10, 40, 70.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`s = "HelloWorld"
print(s[-5:])
print(s[2:-2])
print(s[::-1])`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>World</code> / <code>lloWor</code> / <code>dlroWolleH</code> (세 줄)<br/>
                <span class="label">해설: </span><code>s[-5:]</code>는 뒤에서 5글자 "World".
                <code>s[2:-2]</code>는 인덱스 2부터 -2(인덱스 8) <strong>미포함</strong>까지 → 인덱스 2~7 "lloWor".
                <code>s[::-1]</code>은 전체 역순.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`a = [3, 1, 4, 1, 5]
a.append(9)
a.remove(1)
a.sort()
print(a)
print(a.pop())`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>[1, 3, 4, 5, 9]</code> 그리고 <code>9</code> (두 줄)<br/>
                <span class="label">해설: </span>append(9) → [3, 1, 4, 1, 5, 9], remove(1)은 <strong>첫 번째 1만</strong> 삭제 → [3, 4, 1, 5, 9],
                sort() → [1, 3, 4, 5, 9]. pop()은 마지막 요소 9를 꺼내 반환하므로 9가 출력된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`d = {'a': 1, 'b': 2, 'c': 3}
s = 0
for k in d:
    s += d[k]
print(s)
for k, v in d.items():
    print(k, v, sep='=', end=' ')`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>첫 줄 <code>6</code>, 둘째 줄 <code>a=1 b=2 c=3 </code><br/>
                <span class="label">해설: </span>딕셔너리를 for로 돌면 <strong>key</strong>가 나온다 → 1+2+3 = 6.
                items()는 (key, value) 쌍을 주고, sep='='로 key=value, end=' '로 줄바꿈 대신 공백이 붙어 한 줄에 이어진다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`total = 0
for i in range(1, 10, 2):
    total += i
print(total)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>25</code><br/>
                <span class="label">해설: </span>range(1, 10, 2)는 1부터 <strong>10 미만</strong>까지 2씩 → 1, 3, 5, 7, 9.
                합계 1+3+5+7+9 = 25.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`s = "apple,banana,cherry"
parts = s.split(',')
print(parts[1])
print('-'.join(parts))`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>banana</code> 그리고 <code>apple-banana-cherry</code> (두 줄)<br/>
                <span class="label">해설: </span>split(',')는 ['apple', 'banana', 'cherry'] 리스트를 만들고 인덱스 1은 banana.
                '-'.join()은 리스트 요소 사이에 -를 끼워 하나의 문자열로 연결한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`class A:
    def __init__(self):
        self.msg = "A"
    def hello(self):
        return "hello " + self.msg

class B(A):
    def __init__(self):
        super().__init__()
        self.msg = self.msg + "B"
    def hello(self):
        return super().hello() + "!"

b = B()
print(b.hello())`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>hello AB!</code><br/>
                <span class="label">해설: </span>B() 생성 시 super().__init__()이 msg = "A"를 만들고,
                이어서 msg = "A" + "B" = "AB". b.hello()는 자식의 hello()가 호출되어
                부모의 hello() 결과 "hello AB"에 "!"를 붙인다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`result = [i * i for i in range(6) if i % 2 == 1]
print(result)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>[1, 9, 25]</code><br/>
                <span class="label">해설: </span>range(6) = 0~5 중 홀수(i % 2 == 1)는 1, 3, 5.
                각각 제곱하면 1, 9, 25.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`print(7 // 2, 7 % 2, 2 ** 3)
print(-7 // 2)
print(2 ** 10 % 7)`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>3 1 8</code> / <code>-4</code> / <code>2</code> (세 줄)<br/>
                <span class="label">해설: </span>7//2 = 3(몫), 7%2 = 1(나머지), 2**3 = 8(거듭제곱).
                -7//2는 <strong>내림(floor)</strong>이라 -3.5를 내려 -4.
                **가 %보다 우선순위가 높아 2**10 % 7 = 1024 % 7 = 2 (1024 = 7×146 + 2).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 Python 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`for i in range(3):
    print(i, end='')
print()
print(1, 2, 3, sep='')
print('a', 'b', sep='-', end='!')`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span><code>012</code> / <code>123</code> / <code>a-b!</code> (세 줄)<br/>
                <span class="label">해설: </span>end=''로 0, 1, 2가 줄바꿈 없이 붙어 012, 빈 print()가 줄을 바꾼다.
                sep=''는 인자 사이 구분자를 없애 123. 마지막 줄은 sep='-'로 a-b, end='!'로 끝에 !가 붙는다.
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">딕셔너리 메서드 (keys · values · get)</span>
            <span class="kw">셋 연산 (합집합 | · 교집합 {'&'} · 차집합 -)</span>
            <span class="kw">문자열 슬라이싱 심화</span>
            <span class="kw">zip()</span>
            <span class="kw">예외 처리 try-except</span>
            <span class="kw">모듈 import</span>
            <span class="kw">재귀 함수</span>
            <span class="kw">얕은 복사 vs 깊은 복사</span>
          </p>
        </section>

        <footer>파이썬(Python) 총정리 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
