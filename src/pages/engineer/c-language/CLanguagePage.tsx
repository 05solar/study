import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './c-language.css'

export default defineComponent({
  name: 'CLanguagePage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>C언어 총정리</h1>
          <p>정보처리기사 실기 대비 학습 문서. 실기 시험에서 가장 많이 나오는 유형이 바로
          "다음 C 프로그램의 출력 결과를 쓰시오"이다. 이 문서는 기본 구조 → 자료형 → 입출력 → 연산자 →
          조건문 → 반복문 → 배열·문자열 → 함수 → 포인터 → 구조체·공용체 → 동적 메모리 순서로,
          모든 개념을 <strong>짧은 실행 예제 + 출력 결과</strong>와 함께 정리한다.
          예제 코드를 눈으로만 읽지 말고 반드시 한 줄씩 손으로 트레이스하며 출력을 예측해 보자.</p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#basics" onClick={(e) => scrollToId(e, 'basics')}>C 프로그램 기본 구조</a></li>
            <li><a href="#types" onClick={(e) => scrollToId(e, 'types')}>자료형·식별자·변수·상수</a></li>
            <li><a href="#io" onClick={(e) => scrollToId(e, 'io')}>표준 입출력 — printf · scanf</a></li>
            <li><a href="#operators" onClick={(e) => scrollToId(e, 'operators')}>연산자</a></li>
            <li><a href="#control" onClick={(e) => scrollToId(e, 'control')}>조건문 — if · switch</a></li>
            <li><a href="#loops" onClick={(e) => scrollToId(e, 'loops')}>반복문 — for · while · do-while</a></li>
            <li><a href="#arrays" onClick={(e) => scrollToId(e, 'arrays')}>배열과 문자열</a></li>
            <li><a href="#functions" onClick={(e) => scrollToId(e, 'functions')}>함수 — 전달 방식과 재귀</a></li>
            <li><a href="#pointers" onClick={(e) => scrollToId(e, 'pointers')}>포인터</a></li>
            <li><a href="#structs" onClick={(e) => scrollToId(e, 'structs')}>구조체와 공용체</a></li>
            <li><a href="#memory" onClick={(e) => scrollToId(e, 'memory')}>동적 메모리</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 기본 구조 ===================== */}
        <section id="basics">
          <h2>1. C 프로그램 기본 구조</h2>
          <p class="sub">모든 C 프로그램은 main 함수에서 시작한다. #include, 세미콜론, 주석의 규칙과 컴파일 과정을 먼저 잡는다.</p>

          <h3>1-1. 최소 프로그램과 구성 요소</h3>
          <pre><code>{`#include <stdio.h>      /* 전처리 지시자: 표준 입출력 헤더 포함 */

int main() {            /* 프로그램의 시작점(진입점) */
    printf("Hello C");  /* 문장은 반드시 세미콜론(;)으로 끝남 */
    return 0;           /* 정상 종료를 의미하는 0 반환 */
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`Hello C`}</pre>

          <ul>
            <li><code>#include</code> — 헤더 파일을 소스에 포함시키는 <strong>전처리 지시자</strong>. 끝에 세미콜론을 붙이지 않는다.</li>
            <li><code>main()</code> — 프로그램은 항상 main 함수부터 실행된다. main은 프로그램에 <strong>하나만</strong> 존재한다.</li>
            <li>주석 — <code>{'/* ... */'}</code>(여러 줄), <code>{'//'}</code>(한 줄). 주석은 실행되지 않는다.</li>
          </ul>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            컴파일 과정 한 줄 요약: <strong>전처리(#include·#define 처리) → 컴파일(목적 코드 생성) → 링크(라이브러리 결합 → 실행 파일)</strong>.
          </div>
        </section>

        {/* ===================== 2. 자료형·변수 ===================== */}
        <section id="types">
          <h2>2. 자료형·식별자·변수·상수</h2>
          <p class="sub">자료형별 대표 크기, 식별자 규칙, 그리고 지역/전역/static 변수의 수명 차이는 실기 단골이다.</p>

          <h3>2-1. 기본 자료형과 대표 크기</h3>
          <table>
            <tr><th>자료형</th><th>대표 크기</th><th>용도</th><th>서식 문자</th></tr>
            <tr><td><code>char</code></td><td>1바이트</td><td>문자 1개 (내부적으로 정수)</td><td><code>%c</code></td></tr>
            <tr><td><code>int</code></td><td>4바이트</td><td>정수</td><td><code>%d</code></td></tr>
            <tr><td><code>long</code></td><td>4 또는 8바이트</td><td>큰 정수 (환경에 따라 다름)</td><td><code>%ld</code></td></tr>
            <tr><td><code>float</code></td><td>4바이트</td><td>실수 (단정밀도)</td><td><code>%f</code></td></tr>
            <tr><td><code>double</code></td><td>8바이트</td><td>실수 (배정밀도, 실수 기본형)</td><td><code>%lf</code></td></tr>
          </table>

          <h3>2-2. 식별자(이름) 규칙 (실기 단골)</h3>
          <ul>
            <li>영문자, 숫자, 밑줄(<code>_</code>)만 사용할 수 있다.</li>
            <li><strong>숫자로 시작할 수 없다</strong> — <code>2cnt</code>는 불가, <code>cnt2</code>는 가능.</li>
            <li><strong>예약어(키워드)는 쓸 수 없다</strong> — <code>int</code>, <code>for</code>, <code>while</code> 등.</li>
            <li>대소문자를 구별한다 — <code>Sum</code>과 <code>sum</code>은 다른 변수.</li>
            <li>공백과 특수문자({'#'}, {'-'} 등)는 쓸 수 없다.</li>
          </ul>

          <h3>2-3. 변수 선언·초기화, const와 #define</h3>
          <pre><code>{`#include <stdio.h>
#define PI 3.14          /* 매크로 상수: 전처리 단계에서 치환됨 */

int main() {
    int a = 10;          /* 선언과 동시에 초기화 */
    const int MAX = 100; /* const 상수: 이후 값 변경 불가 */
    printf("%d %d %.2f", a, MAX, PI);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`10 100 3.14`}</pre>

          <h3>2-4. 지역 · 전역 · static 변수 (실기 단골)</h3>
          <table>
            <tr><th>구분</th><th>선언 위치</th><th>수명</th><th>초기값(미초기화 시)</th></tr>
            <tr><td><strong>지역 변수</strong></td><td>함수(블록) 안</td><td>함수 실행 동안만</td><td>쓰레기 값</td></tr>
            <tr><td><strong>전역 변수</strong></td><td>함수 밖</td><td>프로그램 종료까지</td><td>0으로 자동 초기화</td></tr>
            <tr><td><strong>static 변수</strong></td><td>함수 안 + <code>static</code></td><td>프로그램 종료까지 (값 유지)</td><td>0으로 자동 초기화</td></tr>
          </table>
          <pre><code>{`#include <stdio.h>
void f() {
    int a = 1;         /* 호출될 때마다 새로 만들어짐 */
    static int s = 1;  /* 최초 1회만 초기화, 이후 값 유지 */
    printf("%d %d  ", a, s);
    a++;
    s++;
}
int main() {
    f();
    f();
    f();
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`1 1  1 2  1 3`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            지역 변수 <code>a</code>는 매번 1로 다시 태어나지만, <code>static int s</code>는
            <strong>호출이 끝나도 사라지지 않고 값을 유지</strong>한다. static이 나오면 "누적"을 의심하자.
          </div>
        </section>

        {/* ===================== 3. 표준 입출력 ===================== */}
        <section id="io">
          <h2>3. 표준 입출력 — printf · scanf</h2>
          <p class="sub">printf 서식 문자를 정확히 아는 것이 출력 문제 풀이의 기본기다. %o(8진수)와 %x(16진수)가 특히 자주 나온다.</p>

          <h3>3-1. printf 서식 문자 (실기 단골)</h3>
          <table>
            <tr><th>서식</th><th>의미</th><th>예 (값 → 출력)</th></tr>
            <tr><td><code>%d</code></td><td>10진 정수</td><td>255 → <code>255</code></td></tr>
            <tr><td><code>%c</code></td><td>문자 1개</td><td>65 → <code>A</code> (아스키 코드)</td></tr>
            <tr><td><code>%s</code></td><td>문자열</td><td>"Hi" → <code>Hi</code></td></tr>
            <tr><td><code>%f</code></td><td>실수 (기본 소수점 6자리)</td><td>3.14 → <code>3.140000</code></td></tr>
            <tr><td><code>%.2f</code></td><td>소수점 2자리 실수</td><td>3.14159 → <code>3.14</code> (반올림)</td></tr>
            <tr><td><code>%o</code></td><td><strong>8진수</strong></td><td>10 → <code>12</code></td></tr>
            <tr><td><code>%x</code></td><td><strong>16진수</strong></td><td>255 → <code>ff</code></td></tr>
          </table>
          <pre><code>{`#include <stdio.h>
int main() {
    printf("%d %c %s\\n", 65, 'A', "Hi");
    printf("%f %.2f\\n", 3.14159, 3.14159);
    printf("%o %x\\n", 10, 255);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`65 A Hi
3.141590 3.14
12 ff`}</pre>

          <h3>3-2. scanf와 getchar/putchar</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);   /* 변수 앞에 반드시 &(주소 연산자)! */
    printf("%d\\n", n * 2);

    char ch = getchar();  /* 문자 1개 입력 */
    putchar(ch);          /* 문자 1개 출력 */
    return 0;
}`}</code></pre>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <code>scanf("%d", n)</code>처럼 <strong>{'&'}를 빠뜨리면</strong> 값이 아니라 주소가 필요하므로 오류다.
            단, 배열명(문자열)은 그 자체가 주소이므로 <code>scanf("%s", str)</code>에는 {'&'}를 붙이지 않는다.
          </div>
        </section>

        {/* ===================== 4. 연산자 ===================== */}
        <section id="operators">
          <h2>4. 연산자</h2>
          <p class="sub">정수 나눗셈, 전위/후위 증감, 비트 연산은 실기 출력 문제의 3대 재료다. 하나씩 예제로 확인한다.</p>

          <h3>4-1. 산술 연산자 — /와 %는 정수끼리면 정수 (실기 단골)</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    printf("%d %d\\n", 7 / 2, 7 % 2);  /* 정수/정수 → 몫만, %는 나머지 */
    printf("%.1f\\n", 7.0 / 2);        /* 한쪽이 실수면 실수 나눗셈 */
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`3 1
3.5`}</pre>

          <h3>4-2. 증감 연산자 — 전위 vs 후위 (최단골)</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int a = 5, b = 5;
    printf("%d ", a++);  /* 후위: 먼저 사용(5), 그 후 증가 */
    printf("%d ", ++b);  /* 전위: 먼저 증가, 그 후 사용(6) */
    printf("%d %d", a, b);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`5 6 6 6`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <code>a++</code>는 <strong>쓰고 나서 +1</strong>, <code>++a</code>는 <strong>+1 하고 나서 사용</strong>.
            증가가 일어난다는 사실은 같고, "그 자리에서 어떤 값으로 쓰이는가"만 다르다.
          </div>

          <h3>4-3. 관계·논리 연산자 — 결과는 1(참) 또는 0(거짓)</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int a = 0, b = 10;
    int r = (a != 0) && (b / a > 1);  /* 앞이 거짓 → 뒤는 평가 안 함 */
    printf("%d %d %d\\n", r, !r, a > 0 || b > 0);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`0 1 1`}</pre>
          <p><strong>단락 평가(short-circuit)</strong>: <code>{'&&'}</code>는 앞이 거짓이면, <code>{'||'}</code>는 앞이 참이면
          뒤를 아예 평가하지 않는다. 위 예제에서 <code>b / a</code>(0으로 나누기)가 실행되지 않는 이유다.</p>

          <h3>4-4. 비트 연산자</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int x = 12, y = 10;              /* 1100, 1010 */
    printf("%d %d %d\\n", x & y, x | y, x ^ y);
    printf("%d %d\\n", x << 1, x >> 2);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`8 14 6
24 3`}</pre>
          <ul>
            <li><code>{'&'}</code>(AND) 1100 {'&'} 1010 = 1000(8) · <code>|</code>(OR) = 1110(14) · <code>^</code>(XOR, 다르면 1) = 0110(6) · <code>~</code>(NOT, 비트 반전)</li>
            <li><code>{'<<'} n</code> = <strong>2ⁿ 곱하기</strong>, <code>{'>>'} n</code> = <strong>2ⁿ으로 나눈 몫</strong>. 12{'<<'}1=24, 12{'>>'}2=3.</li>
          </ul>

          <h3>4-5. 삼항 · sizeof · 복합 대입</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int a = 10, b = 7;
    printf("%d\\n", a > b ? a : b);      /* 조건 ? 참일 때 : 거짓일 때 */
    printf("%d %d\\n", (int)sizeof(int), (int)sizeof(double));
    a += 5;                              /* a = a + 5 와 동일 */
    printf("%d\\n", a);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`10
4 8
15`}</pre>

          <h3>4-6. 우선순위 요약 (높음 → 낮음)</h3>
          <table>
            <tr><th>순위</th><th>연산자</th><th>비고</th></tr>
            <tr><td>1</td><td><code>()</code> <code>[]</code> <code>{'->'}</code> <code>.</code></td><td>괄호·배열·멤버 접근</td></tr>
            <tr><td>2</td><td><code>!</code> <code>~</code> <code>++</code> <code>--</code> <code>*</code>(역참조) <code>{'&'}</code>(주소) <code>sizeof</code></td><td>단항 (오른쪽 → 왼쪽 결합)</td></tr>
            <tr><td>3</td><td><code>*</code> <code>/</code> <code>%</code></td><td>곱셈류가 덧셈류보다 먼저</td></tr>
            <tr><td>4</td><td><code>+</code> <code>-</code></td><td></td></tr>
            <tr><td>5</td><td><code>{'<<'}</code> <code>{'>>'}</code></td><td>시프트</td></tr>
            <tr><td>6</td><td><code>{'<'}</code> <code>{'<='}</code> <code>{'>'}</code> <code>{'>='}</code> → <code>==</code> <code>!=</code></td><td>관계 → 등가</td></tr>
            <tr><td>7</td><td><code>{'&'}</code> → <code>^</code> → <code>|</code></td><td>비트 AND → XOR → OR</td></tr>
            <tr><td>8</td><td><code>{'&&'}</code> → <code>{'||'}</code></td><td>논리 AND가 OR보다 먼저</td></tr>
            <tr><td>9</td><td><code>?:</code> → <code>=</code> <code>+=</code> 등 → <code>,</code></td><td>삼항 → 대입 → 콤마 (가장 낮음)</td></tr>
          </table>
        </section>

        {/* ===================== 5. 조건문 ===================== */}
        <section id="control">
          <h2>5. 조건문 — if · switch</h2>
          <p class="sub">switch-case에서 break가 없으면 아래 case로 계속 흘러내리는 fallthrough가 최단골 출제 포인트다.</p>

          <h3>5-1. if / else if / else</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int score = 85;
    if (score >= 90)      printf("A");
    else if (score >= 80) printf("B");
    else                  printf("C");
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`B`}</pre>

          <h3>5-2. switch-case와 fallthrough (최단골)</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int n = 2;
    switch (n) {
        case 1: printf("A");
        case 2: printf("B");   /* 여기부터 실행 시작 */
        case 3: printf("C");   /* break가 없어 계속 실행 */
        default: printf("D");
    }
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`BCD`}</pre>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <code>break</code>가 없으면 일치한 case부터 <strong>switch 끝까지 전부 실행</strong>된다(fallthrough).
            실기에서는 일부러 break를 뺀 코드를 주고 출력을 묻는다. break 유무부터 확인하는 습관을 들이자.
          </div>
        </section>

        {/* ===================== 6. 반복문 ===================== */}
        <section id="loops">
          <h2>6. 반복문 — for · while · do-while</h2>
          <p class="sub">do-while은 조건이 거짓이어도 최소 1회는 실행된다. 중첩 루프(구구단·별 찍기)는 실기 코드의 단골 골격이다.</p>

          <h3>6-1. for / while — 1부터 10까지의 합</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int i, sum = 0;
    for (i = 1; i <= 10; i++)
        sum += i;
    printf("%d\\n", sum);

    int j = 1, s2 = 0;
    while (j <= 10) {
        s2 += j;
        j++;
    }
    printf("%d\\n", s2);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`55
55`}</pre>

          <h3>6-2. do-while — 최소 1회 실행 (실기 단골)</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int i = 10;
    do {
        printf("%d ", i);  /* 조건 검사 전에 일단 1회 실행 */
        i++;
    } while (i < 3);       /* 10 < 3 → 거짓이라 즉시 종료 */
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`10`}</pre>

          <h3>6-3. break와 continue</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int i;
    for (i = 1; i <= 5; i++) {
        if (i == 3) continue;  /* 이번 회차만 건너뛰기 */
        if (i == 5) break;     /* 반복문 전체 탈출 */
        printf("%d ", i);
    }
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`1 2 4`}</pre>

          <h3>6-4. 중첩 루프 — 구구단과 별 찍기</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int i, j;
    for (i = 2; i <= 3; i++) {          /* 구구단 2~3단 일부 */
        for (j = 1; j <= 3; j++)
            printf("%d*%d=%d ", i, j, i * j);
        printf("\\n");
    }
    for (i = 1; i <= 3; i++) {          /* 별 찍기: i행에 별 i개 */
        for (j = 1; j <= i; j++)
            printf("*");
        printf("\\n");
    }
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`2*1=2 2*2=4 2*3=6
3*1=3 3*2=6 3*3=9
*
**
***`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            중첩 루프는 <strong>바깥 1회당 안쪽이 끝까지</strong> 돈다. 별 찍기 문제는
            "안쪽 루프의 종료 조건이 바깥 변수 <code>i</code>에 걸려 있는가"를 보고 모양을 예측한다.
          </div>
        </section>

        {/* ===================== 7. 배열과 문자열 ===================== */}
        <section id="arrays">
          <h2>7. 배열과 문자열</h2>
          <p class="sub">C의 문자열은 char 배열 + 널 문자('\0')다. strcmp의 반환값(0이면 같음)은 실기 단골이다.</p>

          <h3>7-1. 1차원 배열 — 선언·초기화·합계</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int a[5] = {3, 7, 1, 9, 5};  /* 크기 5, 인덱스는 0~4 */
    int i, sum = 0;
    for (i = 0; i < 5; i++)
        sum += a[i];
    printf("%d %d\\n", a[0], sum);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`3 25`}</pre>
          <ul>
            <li>인덱스는 <strong>0부터</strong> 시작한다. 크기 5 배열의 마지막 원소는 <code>a[4]</code>.</li>
            <li><code>{'int a[] = {1, 2, 3};'}</code>처럼 초기화 개수로 크기를 생략할 수 있다.</li>
            <li>일부만 초기화하면 나머지는 0 — <code>{'int a[5] = {1};'}</code> → 1 0 0 0 0.</li>
          </ul>

          <h3>7-2. 2차원 배열 — 행과 열</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};  /* 2행 3열 */
    printf("%d %d\\n", a[0][2], a[1][0]);   /* [행][열] */
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`3 4`}</pre>

          <h3>7-3. 문자열 = char 배열 + '\0'</h3>
          <pre><code>{`#include <stdio.h>
#include <string.h>
int main() {
    char s[6] = "APPLE";  /* A P P L E \\0 → 널 문자까지 6칸 필요 */
    printf("%s %c %d\\n", s, s[1], (int)strlen(s));
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`APPLE P 5`}</pre>
          <p>문자열의 끝은 항상 <strong>널 문자 <code>'\0'</code></strong>가 표시한다. <code>strlen</code>은
          널 문자를 <strong>제외한</strong> 길이를 센다 (배열 크기 6, 길이 5).</p>

          <h3>7-4. 문자열 함수 (string.h) — 반환값이 단골</h3>
          <table>
            <tr><th>함수</th><th>기능</th><th>핵심 포인트</th></tr>
            <tr><td><code>strlen(s)</code></td><td>길이 반환</td><td>'\0' 제외한 글자 수</td></tr>
            <tr><td><code>strcpy(a, b)</code></td><td>b를 a에 복사</td><td>a의 기존 내용은 덮어씀</td></tr>
            <tr><td><code>strcat(a, b)</code></td><td>a 뒤에 b를 이어 붙임</td><td>a의 공간이 충분해야 함</td></tr>
            <tr><td><code>strcmp(a, b)</code></td><td>사전순 비교</td><td><strong>같으면 0</strong>, a가 앞서면 음수, 뒤면 양수</td></tr>
          </table>
          <pre><code>{`#include <stdio.h>
#include <string.h>
int main() {
    char a[20] = "HELLO";
    strcat(a, "C");
    printf("%s %d\\n", a, (int)strlen(a));
    printf("%d\\n", strcmp("ABC", "ABC"));  /* 같으면 0 */
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`HELLOC 6
0`}</pre>
        </section>

        {/* ===================== 8. 함수 ===================== */}
        <section id="functions">
          <h2>8. 함수 — 전달 방식과 재귀</h2>
          <p class="sub">값 전달로는 원본이 바뀌지 않는다는 swap 예제와 재귀 트레이스는 실기 최단골 유형이다.</p>

          <h3>8-1. 함수 원형(prototype) 선언</h3>
          <pre><code>{`#include <stdio.h>
int add(int x, int y);      /* 원형 선언: 정의가 뒤에 있음을 미리 알림 */

int main() {
    printf("%d\\n", add(3, 4));
    return 0;
}
int add(int x, int y) {     /* 실제 정의 */
    return x + y;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`7`}</pre>

          <h3>8-2. 값에 의한 전달 vs 주소에 의한 전달 — swap (최단골)</h3>
          <pre><code>{`#include <stdio.h>
void swap1(int x, int y) {      /* 값 전달: 복사본만 교환됨 */
    int t = x; x = y; y = t;
}
void swap2(int *x, int *y) {    /* 주소 전달: 원본이 교환됨 */
    int t = *x; *x = *y; *y = t;
}
int main() {
    int a = 3, b = 7;
    swap1(a, b);
    printf("%d %d\\n", a, b);   /* 그대로! */
    swap2(&a, &b);
    printf("%d %d\\n", a, b);   /* 교환됨 */
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`3 7
7 3`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <strong>값 전달(Call by Value)</strong>은 복사본을 넘기므로 원본 불변,
            <strong> 주소 전달(Call by Reference 방식)</strong>은 {'&'}로 주소를 넘기고 함수 안에서 <code>*</code>로
            역참조해 원본을 직접 바꾼다. "swap 후 출력"이 나오면 매개변수에 <code>*</code>가 있는지부터 보자.
          </div>

          <h3>8-3. 재귀 함수 — 팩토리얼 트레이스 (최단골)</h3>
          <pre><code>{`#include <stdio.h>
int fact(int n) {
    if (n <= 1) return 1;        /* 종료 조건(탈출 조건) 필수 */
    return n * fact(n - 1);
}
int main() {
    printf("%d\\n", fact(4));
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`24`}</pre>
          <p>트레이스: fact(4) = 4 × fact(3) = 4 × 3 × fact(2) = 4 × 3 × 2 × fact(1) = 4 × 3 × 2 × 1 = <strong>24</strong>.
          재귀는 <strong>종료 조건까지 내려갔다가 곱하며 되돌아오는</strong> 흐름으로 트레이스한다.</p>

          <h3>8-4. 피보나치 재귀</h3>
          <pre><code>{`#include <stdio.h>
int fib(int n) {
    if (n <= 1) return n;             /* fib(0)=0, fib(1)=1 */
    return fib(n - 1) + fib(n - 2);
}
int main() {
    int i;
    for (i = 0; i < 6; i++)
        printf("%d ", fib(i));
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`0 1 1 2 3 5`}</pre>
        </section>

        {/* ===================== 9. 포인터 ===================== */}
        <section id="pointers">
          <h2>9. 포인터</h2>
          <p class="sub">포인터는 "주소를 저장하는 변수"다. *(p+i)와 p[i]가 완전히 같다는 것만 확실히 잡으면 배열 출력 문제의 절반이 풀린다.</p>

          <h3>9-1. 개념 — 주소를 저장하는 변수</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int a = 10;
    int *p = &a;   /* p에는 a의 "주소"가 저장됨 */
    *p = 20;       /* 역참조: p가 가리키는 곳(=a)에 20 대입 */
    printf("%d %d\\n", a, *p);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`20 20`}</pre>
          <ul>
            <li><code>{'&'}a</code> — 변수 a의 <strong>주소</strong></li>
            <li><code>*p</code> — p가 가리키는 곳의 <strong>값</strong> (역참조)</li>
            <li>포인터 <code>+1</code>은 1바이트가 아니라 <strong>자료형 크기만큼</strong> 이동 (int*면 4바이트)</li>
          </ul>

          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 250" role="img" aria-label="변수-주소-포인터 관계 도해">
              <text x="450" y="28" text-anchor="middle" class="strong">{'int a = 10;   int *p = &a;'}</text>

              {/* 변수 a */}
              <text x="200" y="66" text-anchor="middle" class="strong">변수 a (int)</text>
              <rect x="120" y="78" width="160" height="64" class="boxdark" />
              <text x="200" y="116" text-anchor="middle" class="strong">10</text>
              <text x="200" y="166" text-anchor="middle" class="small">주소: 0x1000</text>

              {/* 포인터 p */}
              <text x="700" y="66" text-anchor="middle" class="strong">포인터 p (int *)</text>
              <rect x="620" y="78" width="160" height="64" class="boxsoft" />
              <text x="700" y="116" text-anchor="middle" class="strong">0x1000</text>
              <text x="700" y="166" text-anchor="middle" class="small">주소: 0x2000</text>

              {/* p가 a를 가리키는 화살표 */}
              <path class="arrow" d="M 620 110 L 290 110" />
              <text x="455" y="98" text-anchor="middle" class="small">p는 a의 주소를 저장 → a를 가리킴</text>

              {/* 하단 설명 */}
              <rect x="120" y="192" width="310" height="40" class="box" />
              <text x="275" y="217" text-anchor="middle" class="small">*p → 0x1000의 값을 읽음 → 10</text>
              <rect x="470" y="192" width="310" height="40" class="box" />
              <text x="625" y="217" text-anchor="middle" class="small">{'&a → 0x1000, p+1 → 0x1004 (int 크기)'}</text>
            </svg>
            <figcaption>도면 1. 변수 · 주소 · 포인터의 관계 — p는 a의 주소를 저장하고, *p는 그 주소의 값을 읽는다</figcaption>
          </figure>

          <h3>9-2. 배열과 포인터 — *(p+i) = p[i] (실기 단골)</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    int arr[3] = {1, 2, 3};
    int *p = arr;                /* 배열명 = 첫 원소의 시작 주소 */
    printf("%d %d %d\\n", *p, *(p + 1), p[2]);
    printf("%d\\n", *arr + 2);   /* *arr = 1 → 1 + 2 */
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`1 2 3
3`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            <code>arr[i]</code> = <code>*(arr + i)</code> = <code>*(p + i)</code> = <code>p[i]</code>. 전부 같은 표현이다.
            단, <code>*(p + 1)</code>과 <code>*p + 1</code>은 다르다 — 앞은 "다음 원소의 값", 뒤는 "현재 값에 1 더하기".
          </div>

          <h3>9-3. 문자열 포인터와 이중 포인터</h3>
          <pre><code>{`#include <stdio.h>
int main() {
    char *s = "KOREA";
    printf("%s %c %c\\n", s, *s, *(s + 3));

    int a = 5;
    int *p = &a;
    int **pp = &p;               /* 포인터의 주소를 저장 */
    printf("%d %d %d\\n", a, *p, **pp);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`KOREA K E
5 5 5`}</pre>
          <p><code>*(s + 3)</code>은 K(0) O(1) R(2) E(3)이므로 <code>E</code>.
          이중 포인터 <code>**pp</code>는 두 번 역참조 — pp → p → a 순서로 따라가면 결국 a의 값이다.</p>
        </section>

        {/* ===================== 10. 구조체와 공용체 ===================== */}
        <section id="structs">
          <h2>10. 구조체와 공용체</h2>
          <p class="sub">멤버 접근은 구조체 변수면 점(.), 구조체 포인터면 화살표({'->'}) 연산자를 쓴다. union은 멤버가 메모리를 공유해 크기가 "가장 큰 멤버"다.</p>

          <h3>10-1. struct 선언과 멤버 접근 (. / {'->'} — 실기 단골)</h3>
          <pre><code>{`#include <stdio.h>
struct Student {
    char name[10];
    int score;
};
int main() {
    struct Student s = {"KIM", 90};
    struct Student *p = &s;
    printf("%s %d %d\\n", s.name, s.score, p->score);
    p->score = 95;               /* (*p).score = 95 와 동일 */
    printf("%d\\n", s.score);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`KIM 90 90
95`}</pre>
          <ul>
            <li>구조체 <strong>변수</strong>는 <code>s.score</code> — 점(.) 연산자</li>
            <li>구조체 <strong>포인터</strong>는 <code>{'p->score'}</code> — 화살표 연산자 (<code>(*p).score</code>와 동일)</li>
            <li><code>typedef struct {'{...}'} Student;</code>로 별칭을 만들면 <code>struct</code> 키워드 없이 <code>Student s;</code>로 쓸 수 있다</li>
          </ul>

          <h3>10-2. 구조체 배열</h3>
          <pre><code>{`#include <stdio.h>
struct P { int x; };
int main() {
    struct P arr[3] = {{10}, {20}, {30}};
    int i, sum = 0;
    for (i = 0; i < 3; i++)
        sum += arr[i].x;
    printf("%d\\n", sum);
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`60`}</pre>

          <h3>10-3. union — 멤버가 메모리를 공유 (크기 계산 단골)</h3>
          <table>
            <tr><th>구분</th><th>struct (구조체)</th><th>union (공용체)</th></tr>
            <tr><td>메모리</td><td>멤버마다 <strong>각각</strong> 공간 할당</td><td>모든 멤버가 <strong>같은 공간을 공유</strong></td></tr>
            <tr><td>크기</td><td>멤버 크기의 합 (+ 패딩)</td><td><strong>가장 큰 멤버</strong>의 크기</td></tr>
            <tr><td>동시 사용</td><td>모든 멤버 동시 사용 가능</td><td>한 번에 한 멤버만 유효</td></tr>
          </table>
          <pre><code>{`#include <stdio.h>
union U  { char c; int i; double d; };
struct S { char c; int i; double d; };
int main() {
    printf("%d %d\\n", (int)sizeof(union U), (int)sizeof(struct S));
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과 (일반적인 64비트 환경 기준)</p>
          <pre class="c-out">{`8 16`}</pre>
          <p>union은 가장 큰 멤버인 double(8바이트) 크기, struct는 패딩을 포함해 16바이트.
          한 멤버에 값을 쓰면 <strong>다른 멤버의 값도 덮어써진다</strong>는 점이 union의 핵심이다.</p>
        </section>

        {/* ===================== 11. 동적 메모리 ===================== */}
        <section id="memory">
          <h2>11. 동적 메모리</h2>
          <p class="sub">malloc으로 실행 중에 힙 메모리를 빌리고, 다 쓰면 반드시 free로 반납한다. sizeof와 함께 쓰는 관용구를 기억하자.</p>

          <h3>11-1. 함수 4총사 (stdlib.h)</h3>
          <table>
            <tr><th>함수</th><th>기능</th><th>특징</th></tr>
            <tr><td><code>malloc(size)</code></td><td>size바이트 할당</td><td>초기화 안 함 (쓰레기 값)</td></tr>
            <tr><td><code>calloc(n, size)</code></td><td>size바이트 × n개 할당</td><td><strong>0으로 초기화</strong>해 줌</td></tr>
            <tr><td><code>realloc(p, size)</code></td><td>이미 할당한 공간의 크기 변경</td><td>기존 내용은 유지</td></tr>
            <tr><td><code>free(p)</code></td><td>할당한 공간 반납</td><td>안 하면 <strong>메모리 누수</strong></td></tr>
          </table>

          <h3>11-2. 관용구 — 자료형 크기는 sizeof로</h3>
          <pre><code>{`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(3 * sizeof(int));  /* int 3개 분량 */
    if (p == NULL) return 1;                  /* 할당 실패 검사 */
    int i;
    for (i = 0; i < 3; i++)
        p[i] = (i + 1) * 10;
    printf("%d %d %d\\n", p[0], p[1], p[2]);
    free(p);                                  /* 반드시 반납 */
    p = NULL;                                 /* 대롱 포인터 방지 습관 */
    return 0;
}`}</code></pre>
          <p class="c-out-label">출력 결과</p>
          <pre class="c-out">{`10 20 30`}</pre>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <code>free</code>를 빠뜨리면 프로그램이 끝날 때까지 그 메모리를 되돌려 받지 못하는
            <strong>메모리 누수(memory leak)</strong>가 생긴다. 이미 free한 포인터를 다시 쓰거나(use-after-free)
            두 번 free하는 것도 치명적 오류다.
          </div>
        </section>

        {/* ===================== 12. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>12. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">전부 실기 최다 빈출인 "출력 결과 쓰기" 유형이다. 정답을 보기 전에 반드시 한 줄씩 트레이스해서 답을 적어 보자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int main() {
    int a = 3, b = 3;
    int x = a++;
    int y = ++b;
    printf("%d %d %d %d", a, b, x, y);
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>4 4 3 4<br/>
                <span class="label">해설: </span>후위 <code>a++</code>는 x에 3을 먼저 대입한 뒤 a를 4로 증가.
                전위 <code>++b</code>는 b를 4로 먼저 증가시킨 뒤 y에 4를 대입. 최종 a=4, b=4, x=3, y=4.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int main() {
    int a[5] = {10, 20, 30, 40, 50};
    int *p = a;
    printf("%d ", *p);
    printf("%d ", *(p + 2));
    p++;
    printf("%d", *p + 3);
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>10 30 23<br/>
                <span class="label">해설: </span>p는 a[0]을 가리킴 → *p=10. *(p+2)=a[2]=30.
                p++로 p는 a[1]을 가리키고 *p+3은 (역참조 먼저) 20+3=23.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int f(int n) {
    if (n == 0) return 0;
    return n + f(n - 1);
}
int main() {
    printf("%d", f(4));
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>10<br/>
                <span class="label">해설: </span>재귀 트레이스: f(4)=4+f(3)=4+3+f(2)=4+3+2+f(1)=4+3+2+1+f(0)=4+3+2+1+0=10.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int main() {
    int score = 85;
    switch (score / 10) {
        case 10:
        case 9: printf("A");
        case 8: printf("B");
        case 7: printf("C"); break;
        default: printf("F");
    }
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>BC<br/>
                <span class="label">해설: </span>정수 나눗셈 85/10=8 → case 8부터 실행해 B 출력,
                break가 없어 case 7로 흘러 C 출력 후 break로 종료(fallthrough).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int main() {
    int a = 5, b = 3;
    printf("%d ", a & b);
    printf("%d ", a | b);
    printf("%d ", a ^ b);
    printf("%d", a << 2);
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>1 7 6 20<br/>
                <span class="label">해설: </span>5=101, 3=011. AND=001(1), OR=111(7), XOR=110(6).
                5{'<<'}2는 5×2²=20.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int main() {
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int i, j, sum = 0;
    for (i = 0; i < 2; i++)
        for (j = 0; j < 3; j++)
            if ((i + j) % 2 == 0)
                sum += a[i][j];
    printf("%d", sum);
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>9<br/>
                <span class="label">해설: </span>i+j가 짝수인 칸만 더한다: (0,0)=1, (0,2)=3, (1,1)=5 → 1+3+5=9.
                (0,1), (1,0), (1,2)는 i+j가 홀수라 제외.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
#include <string.h>
int main() {
    char s1[20] = "HELLO";
    char s2[] = "WORLD";
    strcat(s1, s2);
    printf("%s %d", s1, (int)strlen(s1));
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>HELLOWORLD 10<br/>
                <span class="label">해설: </span>strcat이 s1 뒤에 s2를 이어 붙여 "HELLOWORLD"가 되고,
                strlen은 '\0'을 제외한 길이 10을 반환한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
struct Point { int x, y; };
int main() {
    struct Point p = {3, 4};
    struct Point *q = &p;
    q->x = 10;
    printf("%d %d", p.x, p.x + q->y);
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>10 14<br/>
                <span class="label">해설: </span>q는 p를 가리키므로 <code>{'q->x = 10'}</code>은 p.x를 10으로 바꾼다.
                p.x=10, <code>{'q->y'}</code>=p.y=4 → 10과 10+4=14 출력.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
void count() {
    static int s = 0;
    int a = 0;
    s++;
    a++;
    printf("%d%d ", s, a);
}
int main() {
    count();
    count();
    count();
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>11 21 31<br/>
                <span class="label">해설: </span>static 변수 s는 호출 간 값이 유지되어 1→2→3으로 누적,
                지역 변수 a는 매번 0에서 시작해 항상 1. 호출마다 "s a" 붙여 출력 → 11, 21, 31.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int main() {
    int n = 12, cnt = 0, sum = 0, i;
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            cnt++;
            sum += i;
        }
    }
    printf("%d %d", cnt, sum);
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>6 28<br/>
                <span class="label">해설: </span>12의 약수는 1, 2, 3, 4, 6, 12로 6개(cnt=6),
                합은 1+2+3+4+6+12=28(sum=28).
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">enum 열거형</span>
            <span class="kw">전처리기 #ifdef</span>
            <span class="kw">함수 포인터</span>
            <span class="kw">비트 필드</span>
            <span class="kw">형 변환(캐스팅)</span>
            <span class="kw">가변 인자 함수</span>
            <span class="kw">파일 입출력 fopen/fclose</span>
            <span class="kw">연결 리스트</span>
            <span class="kw">스택 메모리 구조</span>
            <span class="kw">아스키 코드표</span>
          </p>
        </section>

        <footer>C언어 총정리 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
