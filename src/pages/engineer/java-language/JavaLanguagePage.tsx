import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './java-language.css'

export default defineComponent({
  name: 'JavaLanguagePage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>자바(Java) 총정리</h1>
          <p>정보처리기사 실기 대비 학습 문서. 자바 기본 구조와 JVM → 자료형 → 배열 → 문자열 →
          입출력 → 연산자·제어문 → 메서드 → 클래스와 객체 → 상속과 다형성 → 추상 클래스·인터페이스 →
          제네릭·예외 처리 순서로, 실기에서 가장 많이 나오는 <strong>코드 출력 결과 예측 유형</strong>을
          모든 개념마다 짧은 예제 + 출력 결과로 정리한다.<br/>
          <span>도면의 파란 점은 컴파일·실행 흐름의 이동을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#basic" onClick={(e) => scrollToId(e, 'basic')}>자바 기본 구조와 JVM</a></li>
            <li><a href="#types" onClick={(e) => scrollToId(e, 'types')}>자료형과 변수</a></li>
            <li><a href="#array" onClick={(e) => scrollToId(e, 'array')}>배열</a></li>
            <li><a href="#string" onClick={(e) => scrollToId(e, 'string')}>문자열 — String과 StringBuilder</a></li>
            <li><a href="#io" onClick={(e) => scrollToId(e, 'io')}>표준 입출력</a></li>
            <li><a href="#control" onClick={(e) => scrollToId(e, 'control')}>연산자와 제어문</a></li>
            <li><a href="#method" onClick={(e) => scrollToId(e, 'method')}>메서드와 오버로딩</a></li>
            <li><a href="#class" onClick={(e) => scrollToId(e, 'class')}>클래스와 객체</a></li>
            <li><a href="#inherit" onClick={(e) => scrollToId(e, 'inherit')}>상속과 다형성</a></li>
            <li><a href="#abstract" onClick={(e) => scrollToId(e, 'abstract')}>추상 클래스와 인터페이스</a></li>
            <li><a href="#generic" onClick={(e) => scrollToId(e, 'generic')}>제네릭과 예외 처리</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 자바 기본 구조 ===================== */}
        <section id="basic">
          <h2>1. 자바 기본 구조와 JVM</h2>
          <p class="sub">자바 프로그램은 반드시 클래스 안에 작성하고, 실행은 main 메서드에서 시작한다. "바이트코드 + JVM = 플랫폼 독립"은 실기 단골 서술이다.</p>

          <h3>1-1. 가장 작은 자바 프로그램</h3>
          <pre><code>{`public class Hello {
    public static void main(String[] args) {   // 프로그램의 시작점(진입점)
        System.out.println("Hello, Java!");
    }
}`}</code></pre>
          <pre class="output">{`Hello, Java!`}</pre>
          <ul>
            <li><code>public class Hello</code> — 모든 코드는 클래스 안에 작성. public 클래스 이름 = 파일 이름(<code>Hello.java</code>).</li>
            <li><code>public static void main(String[] args)</code> — JVM이 가장 먼저 호출하는 메서드. 이 시그니처를 그대로 외운다.</li>
            <li>문장 끝에는 세미콜론(<code>;</code>), 블록은 중괄호(<code>{'{ }'}</code>)로 묶는다.</li>
          </ul>

          <h3>1-2. 컴파일·실행 흐름과 플랫폼 독립 (단골)</h3>
          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 210">
              <rect class="box" x="30" y="85" width="170" height="60"/>
              <text x="115" y="110" text-anchor="middle" class="strong">Hello.java</text>
              <text x="115" y="132" text-anchor="middle" class="small">소스 코드</text>

              <g class="msg" data-step="1">
                <line class="arrow" x1="200" y1="115" x2="258" y2="115"/>
                <text x="229" y="70" text-anchor="middle" class="small">① javac 컴파일</text>
              </g>

              <rect class="boxsoft" x="260" y="85" width="190" height="60"/>
              <text x="355" y="110" text-anchor="middle" class="strong">Hello.class</text>
              <text x="355" y="132" text-anchor="middle" class="small">바이트코드</text>

              <g class="msg" data-step="2">
                <line class="arrow" x1="450" y1="115" x2="508" y2="115"/>
                <text x="479" y="70" text-anchor="middle" class="small">② java 실행</text>
              </g>

              <rect class="boxdark" x="510" y="85" width="140" height="60"/>
              <text x="580" y="110" text-anchor="middle" class="strong">JVM</text>
              <text x="580" y="132" text-anchor="middle" class="small">해석·실행</text>

              <g class="msg" data-step="3">
                <line class="arrow" x1="650" y1="115" x2="708" y2="115"/>
                <text x="679" y="70" text-anchor="middle" class="small">③ 동일 실행</text>
              </g>

              <rect class="box" x="710" y="85" width="160" height="60"/>
              <text x="790" y="110" text-anchor="middle" class="strong">운영체제</text>
              <text x="790" y="132" text-anchor="middle" class="small">Windows·Linux·macOS</text>

              <text x="450" y="185" text-anchor="middle" class="small">바이트코드는 특정 OS에 종속되지 않는다 — JVM만 설치되어 있으면 어떤 플랫폼에서도 같은 결과로 실행(플랫폼 독립)</text>
            </svg>
            <figcaption>도면 1. 자바 컴파일·실행 흐름 — 소스 → 바이트코드 → JVM → 어느 OS에서나 실행</figcaption>
          </figure>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            자바가 <strong>플랫폼(운영체제)에 독립적인 이유</strong>: 컴파일러(javac)가 소스를 특정 OS용 기계어가 아닌
            <strong> 바이트코드(.class)</strong>로 번역하고, 각 OS에 맞는 <strong>JVM(Java Virtual Machine)</strong>이
            이 바이트코드를 해석·실행하기 때문이다. "한 번 작성하면 어디서나 실행(Write Once, Run Anywhere)".
          </div>
        </section>

        {/* ===================== 2. 자료형과 변수 ===================== */}
        <section id="types">
          <h2>2. 자료형과 변수</h2>
          <p class="sub">기본형 8가지의 크기와 기본값, 자동/강제 형변환의 방향은 출력 예측 문제의 기초 재료다.</p>

          <h3>2-1. 기본형(Primitive Type) 8가지 (단골)</h3>
          <table>
            <tr><th>분류</th><th>자료형</th><th>크기</th><th>값의 예 / 범위</th></tr>
            <tr><td rowspan="4">정수형</td><td><code>byte</code></td><td>1바이트</td><td>-128 ~ 127</td></tr>
            <tr><td><code>short</code></td><td>2바이트</td><td>-32,768 ~ 32,767</td></tr>
            <tr><td><code>int</code></td><td>4바이트</td><td>약 -21억 ~ 21억 (정수 기본형)</td></tr>
            <tr><td><code>long</code></td><td>8바이트</td><td>매우 큰 정수, 리터럴 뒤에 <code>L</code></td></tr>
            <tr><td rowspan="2">실수형</td><td><code>float</code></td><td>4바이트</td><td>리터럴 뒤에 <code>f</code> 필수</td></tr>
            <tr><td><code>double</code></td><td>8바이트</td><td>실수 기본형</td></tr>
            <tr><td>문자형</td><td><code>char</code></td><td>2바이트</td><td>유니코드 문자 1개, 작은따옴표 <code>'A'</code></td></tr>
            <tr><td>논리형</td><td><code>boolean</code></td><td>1바이트</td><td><code>true</code> / <code>false</code></td></tr>
          </table>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            C 언어와 달리 자바의 <code>char</code>는 <strong>2바이트</strong>(유니코드)이고,
            <code>boolean</code>에는 0/1이 아닌 <strong>true/false만</strong> 넣을 수 있다.
            정수 연산의 기본형은 <code>int</code>, 실수 연산의 기본형은 <code>double</code>이다.
          </div>

          <h3>2-2. 참조형(Reference Type)</h3>
          <p>기본형 8가지를 제외한 모든 타입 — <code>String</code>, 배열, 클래스, 인터페이스 — 은 참조형이다.
          변수에 값 자체가 아니라 <strong>객체의 주소(참조)</strong>가 저장된다. 초기화하지 않은 참조형 필드의 기본값은 <code>null</code>이다.</p>

          <h3>2-3. 형변환 — 자동(묵시적) vs 강제(명시적)</h3>
          <pre><code>{`public class Cast {
    public static void main(String[] args) {
        int i = 10;
        double d = i;        // 자동 형변환: 작은 타입 → 큰 타입 (int → double)
        double pi = 3.99;
        int n = (int) pi;    // 강제 형변환: 큰 타입 → 작은 타입, 소수부는 버림(반올림 아님)
        System.out.println(d);
        System.out.println(n);
    }
}`}</code></pre>
          <pre class="output">{`10.0
3`}</pre>

          <h3>2-4. 상수 final</h3>
          <pre><code>{`final int MAX = 100;   // final 변수 = 상수, 한 번 대입하면 변경 불가
// MAX = 200;          // 컴파일 오류! cannot assign a value to final variable`}</code></pre>
          <p>관례상 상수 이름은 <code>MAX_VALUE</code>처럼 대문자와 밑줄로 쓴다.</p>
        </section>

        {/* ===================== 3. 배열 ===================== */}
        <section id="array">
          <h2>3. 배열</h2>
          <p class="sub">배열의 length, 인덱스 0부터 시작, 가변(비정방) 2차원 배열은 출력 예측 문제에 반복 출제된다.</p>

          <h3>3-1. 선언 3형태와 length (단골)</h3>
          <pre><code>{`public class Arr {
    public static void main(String[] args) {
        int[] a = new int[3];          // ① 크기만 지정 → {0, 0, 0}으로 자동 초기화
        int[] b = {10, 20, 30};        // ② 선언과 동시에 초기화
        int c[] = new int[]{1, 2};     // ③ 대괄호를 변수 뒤에 써도 됨

        System.out.println(a[0]);      // 정수 배열 기본값 0
        System.out.println(b.length);  // length는 괄호 없는 "필드" (문자열은 length() 메서드)
        System.out.println(b[2]);      // 인덱스는 0부터 → 마지막 인덱스는 length-1
    }
}`}</code></pre>
          <pre class="output">{`0
3
30`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            배열은 <code>arr.length</code>(필드), 문자열은 <code>str.length()</code>(메서드) — 괄호 유무를 구분해 쓰는 문제가 나온다.
            범위를 벗어난 인덱스에 접근하면 <code>ArrayIndexOutOfBoundsException</code>이 발생한다.
          </div>

          <h3>3-2. 2차원 배열과 가변 배열</h3>
          <pre><code>{`public class Arr2 {
    public static void main(String[] args) {
        int[][] m = new int[2][3];          // 2행 3열, 전부 0
        int[][] v = {{1, 2}, {3, 4, 5}};    // 가변(비정방) 배열: 행마다 길이가 다름

        System.out.println(v.length);       // 행의 개수
        System.out.println(v[1].length);    // 1행의 열 개수

        for (int i = 0; i < v.length; i++) {          // 바깥 for = 행
            for (int j = 0; j < v[i].length; j++) {   // 안쪽 for = 그 행의 열
                System.out.print(v[i][j] + " ");
            }
        }
    }
}`}</code></pre>
          <pre class="output">{`2
3
1 2 3 4 5 `}</pre>
        </section>

        {/* ===================== 4. 문자열 ===================== */}
        <section id="string">
          <h2>4. 문자열 — String과 StringBuilder</h2>
          <p class="sub">String은 불변 객체다. == 와 equals의 차이는 실기 최다 빈출 주제이므로 예제를 통째로 외운다.</p>

          <h3>4-1. String은 불변(immutable)</h3>
          <p><code>String</code> 객체는 한 번 만들어지면 내용이 바뀌지 않는다. <code>concat</code>, <code>toUpperCase</code> 같은
          메서드는 원본을 고치는 것이 아니라 <strong>새 문자열 객체를 만들어 반환</strong>한다.</p>

          <h3>4-2. == vs equals (최단골)</h3>
          <pre><code>{`public class Str {
    public static void main(String[] args) {
        String s1 = "hello";                // 리터럴 → 문자열 풀에 저장
        String s2 = "hello";                // 같은 리터럴 → 같은 객체를 공유
        String s3 = new String("hello");    // new → 힙에 새 객체 생성

        System.out.println(s1 == s2);       // 주소 비교: 같은 풀 객체 → true
        System.out.println(s1 == s3);       // 주소 비교: 서로 다른 객체 → false
        System.out.println(s1.equals(s3));  // 내용 비교 → true
    }
}`}</code></pre>
          <pre class="output">{`true
false
true`}</pre>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            <code>==</code>는 <strong>참조(주소)</strong>를 비교하고, <code>equals()</code>는 <strong>문자열 내용</strong>을 비교한다.
            "new로 만든 문자열을 == 로 비교"하는 코드가 나오면 결과는 거의 항상 <code>false</code>다.
          </div>

          <h3>4-3. 주요 메서드 표 (str = "HelloJava" 기준)</h3>
          <table>
            <tr><th>메서드</th><th>의미</th><th>예</th><th>결과</th></tr>
            <tr><td><code>length()</code></td><td>문자 개수</td><td><code>str.length()</code></td><td><code>9</code></td></tr>
            <tr><td><code>charAt(i)</code></td><td>i번째 문자(0부터)</td><td><code>str.charAt(1)</code></td><td><code>'e'</code></td></tr>
            <tr><td><code>substring(a, b)</code></td><td>a 이상 b <strong>미만</strong> 잘라내기</td><td><code>str.substring(0, 5)</code></td><td><code>"Hello"</code></td></tr>
            <tr><td><code>indexOf(s)</code></td><td>처음 나오는 위치(없으면 -1)</td><td><code>str.indexOf("Java")</code></td><td><code>5</code></td></tr>
            <tr><td><code>split(구분자)</code></td><td>구분자로 잘라 배열 반환</td><td><code>"a,b,c".split(",")</code></td><td><code>{'{"a","b","c"}'}</code></td></tr>
            <tr><td><code>toUpperCase()</code></td><td>모두 대문자로(새 객체)</td><td><code>str.toUpperCase()</code></td><td><code>"HELLOJAVA"</code></td></tr>
          </table>

          <h3>4-4. StringBuilder — 변경 가능한 문자열</h3>
          <pre><code>{`public class Sb {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hi");
        sb.append(" Java");             // 뒤에 붙이기 → "Hi Java"
        sb.insert(0, "*");              // 0번 위치에 삽입 → "*Hi Java"
        System.out.println(sb);
        System.out.println(sb.reverse());   // 뒤집기 (원본 자체가 바뀜)
    }
}`}</code></pre>
          <pre class="output">{`*Hi Java
avaJ iH*`}</pre>
          <p>문자열을 반복문 안에서 계속 이어 붙일 때는 불변인 <code>String</code> 대신 <code>StringBuilder</code>를 쓰는 것이 효율적이다.</p>
        </section>

        {/* ===================== 5. 표준 입출력 ===================== */}
        <section id="io">
          <h2>5. 표준 입출력</h2>
          <p class="sub">print/println/printf의 차이, printf 서식 문자, Scanner의 메서드별 읽기 단위를 구분한다.</p>

          <h3>5-1. System.out — print / println / printf</h3>
          <pre><code>{`public class Out {
    public static void main(String[] args) {
        System.out.print("줄바꿈 없음 ");            // 출력 후 줄을 바꾸지 않음
        System.out.println("줄바꿈 있음");           // 출력 후 줄바꿈
        System.out.printf("%d번 평균 %.2f점%n", 3, 88.456);  // 서식 지정 출력
    }
}`}</code></pre>
          <pre class="output">{`줄바꿈 없음 줄바꿈 있음
3번 평균 88.46점`}</pre>
          <table>
            <tr><th>서식</th><th>의미</th><th>서식</th><th>의미</th></tr>
            <tr><td><code>%d</code></td><td>10진 정수</td><td><code>%f</code></td><td>실수 (<code>%.2f</code> = 소수 둘째 자리 반올림)</td></tr>
            <tr><td><code>%s</code></td><td>문자열</td><td><code>%c</code></td><td>문자 1개</td></tr>
            <tr><td><code>%o</code> / <code>%x</code></td><td>8진수 / 16진수</td><td><code>%n</code> 또는 <code>\n</code></td><td>줄바꿈</td></tr>
          </table>

          <h3>5-2. Scanner 입력</h3>
          <pre><code>{`import java.util.Scanner;

public class In {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();        // 정수 하나 (공백·줄바꿈 전까지)
        String w = sc.next();        // 공백 전까지의 "한 단어"
        sc.nextLine();               // 버퍼에 남은 줄바꿈 제거용
        String line = sc.nextLine(); // 공백 포함 "한 줄 전체"
        System.out.println(n + " / " + w + " / " + line);
    }
}`}</code></pre>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            <code>nextInt()</code>·<code>next()</code>는 입력 버퍼에 <strong>줄바꿈 문자를 남긴다</strong>.
            바로 뒤에 <code>nextLine()</code>을 쓰면 빈 문자열을 읽게 되므로, 사이에 <code>nextLine()</code> 한 번을 더 넣어 버퍼를 비운다.
          </div>
        </section>

        {/* ===================== 6. 연산자와 제어문 ===================== */}
        <section id="control">
          <h2>6. 연산자와 제어문</h2>
          <p class="sub">전위/후위 증감, 삼항 연산자, break 없는 switch, for-each는 출력 예측 문제의 4대 재료다.</p>

          <h3>6-1. 증감 연산자(전위/후위)와 삼항 연산자</h3>
          <pre><code>{`public class Op {
    public static void main(String[] args) {
        int a = 5;
        System.out.println(a++);   // 후위: 먼저 사용(5 출력) 후 증가 → a는 6
        System.out.println(++a);   // 전위: 먼저 증가(7) 후 사용 → 7 출력

        int b = (a > 6) ? 100 : 200;   // 조건 ? 참일 때 값 : 거짓일 때 값
        System.out.println(b);
    }
}`}</code></pre>
          <pre class="output">{`5
7
100`}</pre>

          <h3>6-2. if와 switch — break 없는 switch 주의</h3>
          <pre><code>{`public class Sw {
    public static void main(String[] args) {
        int n = 2;
        switch (n) {
            case 1: System.out.print("A");
            case 2: System.out.print("B");   // 일치! 여기서 시작
            case 3: System.out.print("C"); break;   // break를 만나야 탈출
            default: System.out.print("D");
        }
    }
}`}</code></pre>
          <pre class="output">{`BC`}</pre>
          <div class="box deny">
            <span class="tag-line">주의</span><br/>
            switch는 일치하는 case부터 <strong>break를 만날 때까지 아래 case를 전부 실행</strong>한다(fall-through).
            break가 빠진 switch 출력 문제는 실기 단골이다.
          </div>

          <h3>6-3. 반복문 — for / while / do-while, break / continue</h3>
          <pre><code>{`public class Loop {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) continue;   // 이번 회차만 건너뛰고 다음 반복으로
            if (i == 5) break;      // 반복문 자체를 종료
            System.out.print(i + " ");
        }

        int j = 10;
        do {
            System.out.print(j);    // do-while: 조건이 거짓이어도 최소 1번 실행
        } while (j < 5);
    }
}`}</code></pre>
          <pre class="output">{`1 2 4 10`}</pre>

          <h3>6-4. 향상된 for문(for-each) (단골)</h3>
          <pre><code>{`public class Each {
    public static void main(String[] args) {
        int[] score = {90, 80, 70};
        int sum = 0;
        for (int s : score) {   // 배열의 요소를 처음부터 끝까지 하나씩 s에 대입
            sum += s;
        }
        System.out.println(sum / score.length);
    }
}`}</code></pre>
          <pre class="output">{`80`}</pre>
          <p>for-each는 인덱스 없이 <strong>요소를 순서대로 읽기만</strong> 할 때 쓴다. 요소 값을 바꾸거나 인덱스가 필요하면 일반 for문을 쓴다.</p>
        </section>

        {/* ===================== 7. 메서드 ===================== */}
        <section id="method">
          <h2>7. 메서드와 오버로딩</h2>
          <p class="sub">"같은 이름, 다른 매개변수"인 오버로딩에서 어떤 메서드가 선택되는지 묻는 문제가 자주 나온다.</p>

          <h3>7-1. 메서드 정의와 호출</h3>
          <pre><code>{`public class Calc {
    static int add(int a, int b) {   // 반환형 int, 매개변수 2개
        return a + b;                // return으로 값을 돌려주고 종료
    }
    static void hello() {            // 반환형 void = 돌려주는 값 없음
        System.out.println("hello");
    }
    public static void main(String[] args) {
        int r = add(3, 4);           // 호출: 인수 3, 4 전달
        System.out.println(r);
        hello();
    }
}`}</code></pre>
          <pre class="output">{`7
hello`}</pre>

          <h3>7-2. 오버로딩(Overloading) — 같은 이름, 다른 매개변수 (단골)</h3>
          <pre><code>{`public class Over {
    static int add(int a, int b) { return a + b; }
    static double add(double a, double b) { return a + b; }
    static int add(int a, int b, int c) { return a + b + c; }

    public static void main(String[] args) {
        System.out.println(add(1, 2));       // int 두 개 → 첫 번째 버전
        System.out.println(add(1.5, 2.5));   // double 두 개 → 두 번째 버전
        System.out.println(add(1, 2, 3));    // 세 개 → 세 번째 버전
    }
}`}</code></pre>
          <pre class="output">{`3
4.0
6`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            오버로딩 성립 조건은 <strong>매개변수의 개수 또는 타입이 다를 것</strong>.
            <strong>반환형만 다른 것은 오버로딩이 아니며</strong> 컴파일 오류다.
          </div>

          <h3>7-3. static 메서드 vs 인스턴스 메서드</h3>
          <table>
            <tr><th>구분</th><th>static 메서드</th><th>인스턴스 메서드</th></tr>
            <tr><td>호출 방법</td><td>객체 없이 <code>클래스명.메서드()</code></td><td>객체 생성 후 <code>객체.메서드()</code></td></tr>
            <tr><td>소속</td><td>클래스(메모리에 하나)</td><td>각 객체</td></tr>
            <tr><td>접근 가능 대상</td><td>static 멤버만 직접 접근 가능</td><td>인스턴스 멤버 + static 멤버 모두</td></tr>
          </table>
          <p><code>main</code>이 static인 이유: JVM이 <strong>객체를 만들지 않고도</strong> 바로 호출할 수 있어야 하기 때문이다.</p>
        </section>

        {/* ===================== 8. 클래스와 객체 ===================== */}
        <section id="class">
          <h2>8. 클래스와 객체</h2>
          <p class="sub">클래스는 설계도, 객체는 설계도로 만든 실체. 생성자 오버로딩·this·접근 제어자·static 공유가 시험 포인트다.</p>

          <h3>8-1. 필드·생성자·메서드, this</h3>
          <pre><code>{`class Student {
    String name;                     // 필드(속성)
    int score;

    Student() {                      // 기본 생성자
        this("이름없음", 0);          // this(...) = 같은 클래스의 다른 생성자 호출
    }
    Student(String name, int score) {   // 생성자 오버로딩
        this.name = name;            // this.name = 필드, name = 매개변수
        this.score = score;
    }
    void print() { System.out.println(name + " " + score); }   // 메서드(동작)
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();              // 기본 생성자 호출
        Student s2 = new Student("홍길동", 95);   // 오버로딩 생성자 호출
        s1.print();
        s2.print();
    }
}`}</code></pre>
          <pre class="output">{`이름없음 0
홍길동 95`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            생성자는 <strong>클래스 이름과 같고 반환형이 없다</strong>. 생성자를 하나도 안 쓰면 컴파일러가 기본 생성자를 자동으로 만들어 주지만,
            <strong>매개변수 있는 생성자를 하나라도 만들면 기본 생성자는 자동 생성되지 않는다</strong>.
          </div>

          <h3>8-2. 클래스 구조 한눈에 보기</h3>
          <figure class="diagram">
            <svg class="d" viewBox="0 0 900 330">
              <text x="200" y="30" text-anchor="middle" class="strong">클래스 (설계도)</text>
              <rect class="boxdark" x="60" y="45" width="280" height="200"/>
              <text x="200" y="72" text-anchor="middle" class="strong">class Student</text>
              <rect class="box" x="80" y="90" width="240" height="40"/>
              <text x="200" y="115" text-anchor="middle" class="small">필드: name, score</text>
              <rect class="box" x="80" y="140" width="240" height="40"/>
              <text x="200" y="165" text-anchor="middle" class="small">생성자: Student(), Student(name, score)</text>
              <rect class="box" x="80" y="190" width="240" height="40"/>
              <text x="200" y="215" text-anchor="middle" class="small">메서드: print()</text>

              <line class="arrow static" x1="340" y1="115" x2="470" y2="90"/>
              <text x="405" y="80" text-anchor="middle" class="small">new</text>
              <line class="arrow static" x1="340" y1="185" x2="470" y2="210"/>
              <text x="405" y="225" text-anchor="middle" class="small">new</text>

              <text x="590" y="30" text-anchor="middle" class="strong">객체 (실체, 힙 메모리)</text>
              <rect class="box" x="480" y="55" width="220" height="70"/>
              <text x="590" y="82" text-anchor="middle" class="strong">s1</text>
              <text x="590" y="107" text-anchor="middle" class="small">name="이름없음", score=0</text>
              <rect class="box" x="480" y="175" width="220" height="70"/>
              <text x="590" y="202" text-anchor="middle" class="strong">s2</text>
              <text x="590" y="227" text-anchor="middle" class="small">name="홍길동", score=95</text>

              <rect class="boxsoft" x="740" y="90" width="130" height="120"/>
              <text x="805" y="120" text-anchor="middle" class="small">static 영역</text>
              <text x="805" y="145" text-anchor="middle" class="strong">count = 2</text>
              <text x="805" y="170" text-anchor="middle" class="small">모든 객체가</text>
              <text x="805" y="190" text-anchor="middle" class="small">하나를 공유</text>
              <line class="arrow static ret" x1="700" y1="90" x2="740" y2="120"/>
              <line class="arrow static ret" x1="700" y1="210" x2="740" y2="180"/>

              <text x="450" y="300" text-anchor="middle" class="small">클래스 하나로 객체를 여러 개 생성 — 인스턴스 필드는 객체마다 따로, static 필드는 클래스에 하나뿐(공유)</text>
            </svg>
            <figcaption>도면 2. 클래스와 객체의 관계 — 인스턴스 필드는 각자, static 필드는 공유</figcaption>
          </figure>

          <h3>8-3. 접근 제어자 범위 표 (단골)</h3>
          <table>
            <tr><th>제어자</th><th>같은 클래스</th><th>같은 패키지</th><th>자식 클래스(다른 패키지)</th><th>전체</th></tr>
            <tr><td><code>public</code></td><td>O</td><td>O</td><td>O</td><td>O</td></tr>
            <tr><td><code>protected</code></td><td>O</td><td>O</td><td>O</td><td>X</td></tr>
            <tr><td><code>default</code> (생략)</td><td>O</td><td>O</td><td>X</td><td>X</td></tr>
            <tr><td><code>private</code></td><td>O</td><td>X</td><td>X</td><td>X</td></tr>
          </table>
          <p>공개 범위 순서: <strong>public {'>'} protected {'>'} default {'>'} private</strong>.
          필드는 <code>private</code>으로 숨기고 getter/setter로 접근하는 것이 <strong>캡슐화(정보 은닉)</strong>다.</p>

          <h3>8-4. static 필드 — 모든 객체가 공유 (단골)</h3>
          <pre><code>{`class Ticket {
    static int count = 0;   // 클래스에 하나뿐 → 모든 객체가 공유
    int no;                 // 인스턴스 필드 → 객체마다 따로
    Ticket() {
        count++;
        no = count;
    }
}

public class Main {
    public static void main(String[] args) {
        Ticket t1 = new Ticket();   // count=1
        Ticket t2 = new Ticket();   // count=2
        Ticket t3 = new Ticket();   // count=3
        System.out.println(t1.no + " " + t3.no + " " + Ticket.count);
    }
}`}</code></pre>
          <pre class="output">{`1 3 3`}</pre>
        </section>

        {/* ===================== 9. 상속 ===================== */}
        <section id="inherit">
          <h2>9. 상속과 다형성</h2>
          <p class="sub">실기 자바 문제의 절반이 여기서 나온다. "부모 타입 참조 = 자식 객체" 트레이스와 생성자 호출 순서를 손으로 따라가며 외운다.</p>

          <h3>9-1. extends와 super</h3>
          <ul>
            <li><code>class Child extends Parent</code> — 자바는 <strong>단일 상속</strong>만 허용(부모 클래스는 하나).</li>
            <li><code>super()</code> — 부모의 <strong>생성자</strong> 호출. 생략하면 컴파일러가 자식 생성자 첫 줄에 자동 삽입.</li>
            <li><code>super.메서드()</code> — 오버라이딩으로 가려진 <strong>부모의 메서드/필드</strong>에 접근.</li>
          </ul>

          <h3>9-2. 오버라이딩과 다형성 트레이스 ① — 생성자 호출 순서 (최단골)</h3>
          <pre><code>{`class A {
    A() { System.out.print("[A생성]"); }
    void run() { System.out.print("A-run"); }
}
class B extends A {
    B() { System.out.print("[B생성]"); }   // 첫 줄에 super()가 자동 삽입됨
    @Override
    void run() { System.out.print("B-run"); }
}

public class Main {
    public static void main(String[] args) {
        A p = new B();   // ① 부모 생성자 → ② 자식 생성자 순서로 실행
        p.run();         // ③ 참조는 A 타입이지만 실제 객체는 B → B의 run() 실행
    }
}`}</code></pre>
          <pre class="output">{`[A생성][B생성]B-run`}</pre>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            트레이스 규칙 두 가지만 기억하면 된다.
            ① 객체 생성 시 <strong>부모 생성자가 항상 먼저</strong> 실행된다.
            ② 오버라이딩된 메서드는 참조 변수의 타입이 아니라 <strong>실제 생성된 객체(자식)의 메서드</strong>가 호출된다 — 이것이 다형성이다.
          </div>

          <h3>9-3. 다형성 트레이스 ② — super 호출 포함 (최단골)</h3>
          <pre><code>{`class Shape {
    Shape() { System.out.println("Shape 생성"); }
    void draw() { System.out.println("도형을 그린다"); }
}
class Circle extends Shape {
    Circle() {
        super();                        // 부모 생성자 명시 호출(생략 가능)
        System.out.println("Circle 생성");
    }
    @Override
    void draw() {
        super.draw();                   // 부모의 draw() 먼저 실행
        System.out.println("원을 그린다");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.draw();
    }
}`}</code></pre>
          <pre class="output">{`Shape 생성
Circle 생성
도형을 그린다
원을 그린다`}</pre>

          <h3>9-4. 오버로딩 vs 오버라이딩 비교 표 (최단골)</h3>
          <table>
            <tr><th>구분</th><th>오버로딩(Overloading)</th><th>오버라이딩(Overriding)</th></tr>
            <tr><td>정의</td><td><strong>같은 클래스</strong>에서 같은 이름의 메서드를 여러 개 정의</td><td><strong>상속 관계</strong>에서 부모 메서드를 자식이 재정의</td></tr>
            <tr><td>메서드 이름</td><td>같다</td><td>같다</td></tr>
            <tr><td>매개변수</td><td><strong>개수 또는 타입이 반드시 달라야</strong> 함</td><td><strong>완전히 같아야</strong> 함</td></tr>
            <tr><td>반환형</td><td>달라도 됨(반환형만 다른 건 불가)</td><td>같아야 함</td></tr>
            <tr><td>결정 시점</td><td>컴파일 시(정적 바인딩)</td><td>실행 시(동적 바인딩)</td></tr>
          </table>

          <h3>9-5. instanceof와 final</h3>
          <pre><code>{`Shape s = new Circle();
System.out.println(s instanceof Circle);   // true  (실제 객체가 Circle)
System.out.println(s instanceof Shape);    // true  (Circle은 Shape의 자식)`}</code></pre>
          <pre class="output">{`true
true`}</pre>
          <ul>
            <li><code>instanceof</code> — 객체가 해당 클래스(또는 부모·인터페이스) 타입인지 검사. 강제 형변환 전 안전 확인용.</li>
            <li><code>final class</code> — <strong>상속 금지</strong> (예: <code>String</code>). <code>final 메서드</code> — <strong>오버라이딩 금지</strong>.</li>
          </ul>
        </section>

        {/* ===================== 10. 추상 클래스와 인터페이스 ===================== */}
        <section id="abstract">
          <h2>10. 추상 클래스와 인터페이스</h2>
          <p class="sub">"직접 생성할 수 없다"는 공통점, "다중 구현 가능 여부"라는 차이점이 비교 표로 출제된다.</p>

          <h3>10-1. 추상 클래스 abstract</h3>
          <pre><code>{`abstract class Payment {                 // 추상 클래스: new로 직접 생성 불가
    abstract void pay(int won);           // 추상 메서드: 몸체 없음 → 자식이 반드시 구현
    void receipt() { System.out.println("영수증 발행"); }   // 일반 메서드도 가질 수 있음
}
class Card extends Payment {
    void pay(int won) { System.out.println("카드 결제 " + won + "원"); }
}

public class Main {
    public static void main(String[] args) {
        // Payment p = new Payment();     // 컴파일 오류! 추상 클래스는 인스턴스화 불가
        Payment p = new Card();           // 부모 타입 참조로 자식 객체는 가능
        p.pay(5000);
        p.receipt();
    }
}`}</code></pre>
          <pre class="output">{`카드 결제 5000원
영수증 발행`}</pre>

          <h3>10-2. 인터페이스 interface — implements, 다중 구현</h3>
          <pre><code>{`interface Flyable {
    int MAX_HEIGHT = 100;      // 자동으로 public static final (상수)
    void fly();                // 자동으로 public abstract (추상 메서드)
    default void land() {      // default 메서드: 몸체를 가질 수 있음 (Java 8+)
        System.out.println("착륙");
    }
}
interface Swimmable {
    void swim();
}
class Duck implements Flyable, Swimmable {   // 인터페이스는 다중 구현 가능!
    public void fly()  { System.out.println("난다"); }
    public void swim() { System.out.println("헤엄친다"); }
}

public class Main {
    public static void main(String[] args) {
        Duck d = new Duck();
        d.fly();
        d.swim();
        d.land();                            // default 메서드는 그대로 사용 가능
        System.out.println(Flyable.MAX_HEIGHT);
    }
}`}</code></pre>
          <pre class="output">{`난다
헤엄친다
착륙
100`}</pre>

          <h3>10-3. 추상 클래스 vs 인터페이스 비교 표 (단골)</h3>
          <table>
            <tr><th>구분</th><th>추상 클래스</th><th>인터페이스</th></tr>
            <tr><td>키워드</td><td><code>abstract class</code> / 자식은 <code>extends</code></td><td><code>interface</code> / 구현 클래스는 <code>implements</code></td></tr>
            <tr><td>다중 상속/구현</td><td>단일 상속만</td><td><strong>다중 구현 가능</strong></td></tr>
            <tr><td>구성 요소</td><td>일반 필드·일반 메서드·추상 메서드 모두 가능</td><td>상수 + 추상 메서드 (+ default·static 메서드)</td></tr>
            <tr><td>생성자</td><td>있음(자식 생성 시 실행)</td><td>없음</td></tr>
            <tr><td>목적</td><td>공통 코드를 물려주며 일부만 강제 구현</td><td>구현 규격(약속)만 정의</td></tr>
            <tr><td>공통점</td><td colspan="2"><strong>둘 다 new로 직접 인스턴스 생성 불가</strong>, 추상 메서드는 자식/구현체가 반드시 구현</td></tr>
          </table>
        </section>

        {/* ===================== 11. 제네릭과 예외 처리 ===================== */}
        <section id="generic">
          <h2>11. 제네릭과 예외 처리</h2>
          <p class="sub">제네릭 <code>{'<T>'}</code>는 타입을 나중에 정하는 틀, 예외 처리는 finally 실행 순서와 예외 클래스 이름 쓰기가 포인트다.</p>

          <h3>11-1. 제네릭 <code>{'<T>'}</code></h3>
          <p>제네릭은 클래스나 메서드에서 다룰 <strong>자료형을 만들 때가 아니라 사용할 때 지정</strong>하는 문법이다.
          타입 검사를 컴파일 시점에 하므로 잘못된 타입이 들어가는 것을 미리 막아 준다.</p>
          <pre><code>{`class Box<T> {                      // T = 나중에 정해질 타입 매개변수
    private T item;
    void set(T item) { this.item = item; }
    T get() { return item; }
}

public class Main {
    public static void main(String[] args) {
        Box<String> b1 = new Box<>();   // T를 String으로 지정
        b1.set("자바");
        System.out.println(b1.get());

        Box<Integer> b2 = new Box<>();  // T를 Integer로 지정 (기본형은 래퍼 클래스 사용)
        b2.set(100);
        System.out.println(b2.get() + 1);
    }
}`}</code></pre>
          <pre class="output">{`자바
101`}</pre>

          <h3>11-2. try-catch-finally — finally는 항상 실행 (단골)</h3>
          <pre><code>{`public class Ex {
    public static void main(String[] args) {
        try {
            System.out.println("A");
            int r = 10 / 0;              // ArithmeticException 발생 → 즉시 catch로 이동
            System.out.println("B");     // 실행되지 않음
        } catch (ArithmeticException e) {
            System.out.println("C");
        } finally {
            System.out.println("D");     // 예외 발생 여부와 관계없이 항상 실행
        }
        System.out.println("E");         // 예외를 처리했으므로 정상 진행
    }
}`}</code></pre>
          <pre class="output">{`A
C
D
E`}</pre>

          <h3>11-3. 다중 catch — 자식(구체적) 예외를 먼저</h3>
          <pre><code>{`try {
    int[] a = new int[2];
    a[5] = 1;                                    // 배열 범위 초과
} catch (ArrayIndexOutOfBoundsException e) {     // ① 자식(구체적) 예외 먼저
    System.out.println("인덱스 범위 초과");
} catch (Exception e) {                          // ② 부모(포괄) 예외는 마지막에
    System.out.println("기타 예외");
}`}</code></pre>
          <pre class="output">{`인덱스 범위 초과`}</pre>
          <p>부모 예외(<code>Exception</code>)를 먼저 쓰면 자식 catch에 도달할 수 없어 <strong>컴파일 오류</strong>가 난다.</p>

          <h3>11-4. throw와 throws</h3>
          <pre><code>{`static void check(int age) throws Exception {        // throws: 예외를 호출한 쪽으로 넘긴다고 "선언"
    if (age < 0) {
        throw new Exception("나이는 음수가 될 수 없음");   // throw: 예외를 직접 "발생"
    }
}`}</code></pre>
          <ul>
            <li><code>throw</code> — 예외 객체를 <strong>직접 발생</strong>시키는 명령문.</li>
            <li><code>throws</code> — 메서드 선언부에 붙여, 처리하지 않은 예외를 <strong>호출한 쪽으로 전달</strong>함을 표시.</li>
          </ul>

          <h3>11-5. 자주 나오는 예외 클래스 표 (단골)</h3>
          <table>
            <tr><th>예외 클래스</th><th>발생 상황</th><th>예</th></tr>
            <tr><td><code>ArithmeticException</code></td><td>정수를 0으로 나눔</td><td><code>10 / 0</code></td></tr>
            <tr><td><code>ArrayIndexOutOfBoundsException</code></td><td>배열 인덱스가 범위를 벗어남</td><td><code>new int[3]</code>에서 <code>a[3]</code> 접근</td></tr>
            <tr><td><code>NullPointerException</code></td><td>null 참조로 필드·메서드 사용</td><td><code>String s = null; s.length();</code></td></tr>
            <tr><td><code>NumberFormatException</code></td><td>숫자 형태가 아닌 문자열 변환</td><td><code>Integer.parseInt("abc")</code></td></tr>
            <tr><td><code>ClassCastException</code></td><td>불가능한 강제 형변환</td><td>관계없는 타입으로 캐스팅</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            예외 계층: <code>Exception</code>의 자식 중 <code>RuntimeException</code> 계열(위 표의 예외들)은
            <strong>실행 시점에 발생</strong>하며 try-catch를 강제하지 않는다(Unchecked). 그 외 <code>IOException</code> 같은
            Checked 예외는 <strong>try-catch 또는 throws가 필수</strong>다.
          </div>
        </section>

        {/* ===================== 12. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>12. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">전부 실기 최다 빈출 유형인 "출력 결과 쓰기" 문제다. 정답을 보기 전에 반드시 손으로 한 줄씩 트레이스해 볼 것.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`class A {
    A() { System.out.print("A"); }
    void show() { System.out.print("a"); }
}
class B extends A {
    B() { System.out.print("B"); }
    void show() { System.out.print("b"); }
}
public class Main {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ABb<br/>
                <span class="label">해설: </span>new B() 실행 시 부모 생성자 A()가 먼저 실행되어 "A", 이어서 B()의 "B"가 출력된다.
                obj.show()는 참조 타입(A)이 아니라 실제 객체(B)의 오버라이딩 메서드가 호출되어 "b"가 출력된다(다형성).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`class Parent {
    Parent() { System.out.println("부모 생성"); }
    void print() { System.out.println("Parent"); }
}
class Child extends Parent {
    Child() { System.out.println("자식 생성"); }
    void print() {
        super.print();
        System.out.println("Child");
    }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.print();
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>부모 생성 → 자식 생성 → Parent → Child (각각 한 줄씩, 총 4줄)<br/>
                <span class="label">해설: </span>생성 시 부모 생성자가 먼저 실행된다("부모 생성", "자식 생성").
                p.print()는 실제 객체인 Child의 print()가 실행되는데, 첫 줄의 super.print()가 부모의 "Parent"를 먼저 출력한 뒤 "Child"를 출력한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`class Counter {
    static int cnt = 0;
    int num = 0;
    Counter() {
        cnt++;
        num++;
    }
}
public class Main {
    public static void main(String[] args) {
        Counter a = new Counter();
        Counter b = new Counter();
        Counter c = new Counter();
        System.out.println(Counter.cnt + " " + c.num);
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>3 1<br/>
                <span class="label">해설: </span>static 필드 cnt는 클래스에 하나뿐이라 객체 3개가 공유하며 생성 때마다 1씩 증가해 3이 된다.
                인스턴스 필드 num은 객체마다 따로 만들어지므로 c.num은 c의 생성자에서 한 번만 증가한 1이다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`public class Main {
    public static void main(String[] args) {
        String s1 = "java";
        String s2 = "java";
        String s3 = new String("java");
        System.out.println(s1 == s2);
        System.out.println(s1 == s3);
        System.out.println(s1.equals(s3));
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>true / false / true (각각 한 줄씩)<br/>
                <span class="label">해설: </span>리터럴 "java"는 문자열 풀에서 공유되어 s1과 s2는 같은 객체(true).
                s3는 new로 힙에 새로 만든 별개 객체이므로 == 주소 비교는 false, equals() 내용 비교는 true다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 5, 7, 9, 11};
        int sum = 0;
        for (int x : arr) {
            if (x % 3 == 0) continue;
            sum += x;
        }
        System.out.println(sum + " " + arr.length);
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>23 5<br/>
                <span class="label">해설: </span>for-each가 요소를 차례로 순회하며 3의 배수(3, 9)는 continue로 건너뛴다.
                sum = 5 + 7 + 11 = 23. arr.length는 요소 개수인 5다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`public class Main {
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        try {
            System.out.print("A");
            System.out.print(a[3]);
            System.out.print("B");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.print("C");
        } finally {
            System.out.print("D");
        }
        System.out.print("E");
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>ACDE<br/>
                <span class="label">해설: </span>"A" 출력 후 a[3]에서 배열 범위 초과 예외가 발생해 "B"는 건너뛰고 catch의 "C"가 출력된다.
                finally는 항상 실행되어 "D", 예외가 처리되었으므로 프로그램이 계속되어 "E"까지 출력된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`public class Main {
    static void func(int a) { System.out.println("int:" + a); }
    static void func(double a) { System.out.println("double:" + a); }
    static void func(int a, int b) { System.out.println("sum:" + (a + b)); }
    public static void main(String[] args) {
        func(5);
        func(3.2);
        func(2, 4);
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>int:5 / double:3.2 / sum:6 (각각 한 줄씩)<br/>
                <span class="label">해설: </span>오버로딩은 인수의 개수와 타입에 따라 호출할 메서드가 결정된다.
                func(5)는 int 버전, func(3.2)는 double 버전, func(2, 4)는 매개변수 2개 버전이 선택되어 2+4=6이 출력된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`public class Main {
    public static void main(String[] args) {
        String str = "Information";
        System.out.println(str.length());
        System.out.println(str.charAt(3));
        System.out.println(str.substring(2, 5));
        System.out.println(str.indexOf('f'));
        System.out.println(str.toUpperCase());
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>11 / o / for / 2 / INFORMATION (각각 한 줄씩)<br/>
                <span class="label">해설: </span>"Information"은 11글자. 인덱스는 0부터이므로 charAt(3)은 'o'(I-n-f-o).
                substring(2, 5)는 인덱스 2 이상 5 미만인 "for", indexOf('f')는 'f'의 위치 2,
                toUpperCase()는 전체를 대문자로 바꾼 새 문자열을 반환한다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`public class Main {
    public static void main(String[] args) {
        int x = 5, y = 10;
        int a = x++ + ++y;
        int b = (a > 15) ? x-- : --y;
        System.out.println(a + " " + b + " " + x + " " + y);
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>16 6 5 11<br/>
                <span class="label">해설: </span>a = 5(후위: 사용 후 x=6) + 11(전위: y를 11로 만든 후 사용) = 16.
                삼항 연산자에서 16 {'>'} 15가 참이므로 b = x-- 로 6이 대입되고 x는 5가 된다.
                거짓 쪽(--y)은 실행되지 않아 y는 11 그대로다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">다음 Java 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`public class Main {
    static int f(int n) {
        if (n <= 1) return 1;
        return n * f(n - 1);
    }
    public static void main(String[] args) {
        System.out.println(f(5));
    }
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>120<br/>
                <span class="label">해설: </span>재귀로 팩토리얼을 계산한다. f(5) = 5 × f(4) = 5 × 4 × f(3) = ... = 5 × 4 × 3 × 2 × 1 = 120.
                종료 조건(n {'<='} 1일 때 1 반환)에 도달한 뒤 곱해 올라온다.
              </div>
            </details>
          </div>

          <hr class="divider"/>
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">JVM · JRE · JDK</span>
            <span class="kw">가비지 컬렉션(GC)</span>
            <span class="kw">래퍼 클래스와 오토박싱</span>
            <span class="kw">Object 클래스</span>
            <span class="kw">컬렉션 프레임워크(List·Set·Map)</span>
            <span class="kw">ArrayList · HashMap</span>
            <span class="kw">람다식과 함수형 인터페이스</span>
            <span class="kw">스레드(Thread · Runnable)</span>
            <span class="kw">try-with-resources</span>
            <span class="kw">String.format</span>
          </p>
        </section>

        <footer>자바(Java) 총정리 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
