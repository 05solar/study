import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './java-language.css'

const QUESTIONS: QuizData[] = [
  // ===== 상속 + 오버라이딩 + 다형성 (1~4) =====
  {
    num: 1,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Vehicle {
    void run() { System.out.print("차량 "); }
}
class Bus extends Vehicle {
    @Override
    void run() { System.out.print("버스 "); }
    void charge() { System.out.print("요금"); }
}
public class Main {
    public static void main(String[] args) {
        Vehicle v = new Bus();
        v.run();
        Bus b = (Bus) v;
        b.charge();
    }
}`,
    answers: ['버스 요금', '버스요금'],
    answerLabel: '버스 요금',
    explanation:
      'v의 참조 타입은 Vehicle이지만 실제 객체는 Bus이므로 v.run()은 오버라이딩된 Bus의 run()이 호출되어 "버스 "가 출력된다(동적 바인딩). 이어서 Bus 타입으로 강제 형변환한 뒤 charge()를 호출해 "요금"이 출력된다.',
  },
  {
    num: 2,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Shape {
    int area() { return 0; }
    void print() { System.out.println("넓이 : " + area()); }
}
class Rect extends Shape {
    int w = 3, h = 4;
    @Override
    int area() { return w * h; }
}
public class Main {
    public static void main(String[] args) {
        Shape s = new Rect();
        s.print();
    }
}`,
    answers: ['넓이 : 12', '넓이: 12', '넓이 12'],
    answerLabel: '넓이 : 12',
    explanation:
      'print()는 부모 Shape에서 상속받아 실행되지만, 그 안에서 호출하는 area()는 실제 객체(Rect)의 오버라이딩 버전으로 디스패치된다. 따라서 3 × 4 = 12가 계산되어 "넓이 : 12"가 출력된다.',
  },
  {
    num: 3,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Parent {
    int x = 10;
    int getX() { return x; }
}
class Child extends Parent {
    int x = 20;
    @Override
    int getX() { return x; }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.println(p.x);
        System.out.println(p.getX());
    }
}`,
    answers: ['10 20'],
    answerLabel: '10 20 (각각 한 줄씩 출력)',
    explanation:
      '필드는 오버라이딩되지 않고 참조 변수의 타입 기준(정적 바인딩)으로 접근하므로 p.x는 Parent의 10이다. 반면 메서드는 실제 객체 기준(동적 바인딩)이므로 p.getX()는 Child의 getX()가 실행되어 Child의 x인 20을 반환한다.',
  },
  {
    num: 4,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class A {
    void hello() { System.out.print("A"); }
}
class B extends A {
    @Override
    void hello() {
        super.hello();
        System.out.print("B");
    }
}
class C extends B {
    @Override
    void hello() {
        super.hello();
        System.out.print("C");
    }
}
public class Main {
    public static void main(String[] args) {
        A obj = new C();
        obj.hello();
    }
}`,
    answers: ['ABC', 'A B C'],
    answerLabel: 'ABC',
    explanation:
      'obj의 실제 객체는 C이므로 C의 hello()가 먼저 호출된다. C의 hello()는 첫 줄에서 super.hello()로 B의 hello()를 부르고, B는 다시 super.hello()로 A의 hello()를 부른다. 가장 위 A부터 "A" → "B" → "C" 순서로 출력된다.',
  },

  // ===== 생성자 호출 순서 (5~6) =====
  {
    num: 5,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Machine {
    Machine() { System.out.print("기계-"); }
    Machine(String name) { System.out.print(name + "-"); }
}
class Robot extends Machine {
    Robot() {
        this("로봇");
        System.out.print("완성");
    }
    Robot(String name) {
        super(name);
        System.out.print("조립-");
    }
}
public class Main {
    public static void main(String[] args) {
        new Robot();
    }
}`,
    answers: ['로봇-조립-완성', '로봇 조립 완성'],
    answerLabel: '로봇-조립-완성',
    explanation:
      'Robot()의 첫 줄 this("로봇")이 같은 클래스의 Robot(String)을 호출하므로 기본 생성자 Machine()은 실행되지 않는다. Robot(String)은 super(name)으로 Machine(String)을 먼저 실행해 "로봇-"을 출력하고 "조립-"을 출력한 뒤, Robot()으로 돌아와 "완성"을 출력한다.',
  },
  {
    num: 6,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Base {
    Base() { System.out.print("B0 "); }
    Base(int x) { System.out.print("B" + x + " "); }
}
class Derived extends Base {
    Derived() { System.out.print("D0 "); }
    Derived(int x) {
        super(x);
        System.out.print("D" + x + " ");
    }
}
public class Main {
    public static void main(String[] args) {
        new Derived();
        new Derived(5);
    }
}`,
    answers: ['B0 D0 B5 D5'],
    answerLabel: 'B0 D0 B5 D5',
    explanation:
      'new Derived()는 첫 줄에 super()가 자동 삽입되어 부모의 기본 생성자 Base()가 먼저 실행된다("B0 " → "D0 "). new Derived(5)는 명시적 super(5)로 Base(int)가 먼저 실행되어 "B5 " 출력 후 "D5 "가 출력된다. 항상 부모 생성자가 먼저다.',
  },

  // ===== static 변수/메서드 (7~8) =====
  {
    num: 7,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Account {
    static int total = 0;
    int money;
    Account(int m) {
        money = m;
        total += m;
    }
}
public class Main {
    public static void main(String[] args) {
        Account a = new Account(100);
        Account b = new Account(200);
        Account c = new Account(300);
        System.out.println(a.money + " " + Account.total);
    }
}`,
    answers: ['100 600'],
    answerLabel: '100 600',
    explanation:
      '인스턴스 필드 money는 객체마다 따로 존재하므로 a.money는 생성 시 대입된 100 그대로다. static 필드 total은 클래스에 하나뿐이라 세 객체가 공유하며 100 + 200 + 300 = 600이 누적된다.',
  },
  {
    num: 8,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    static int count = 0;
    static int next() {
        count += 2;
        return count;
    }
    public static void main(String[] args) {
        System.out.print(next() + " ");
        System.out.print(next() + " ");
        System.out.print(count);
    }
}`,
    answers: ['2 4 4'],
    answerLabel: '2 4 4',
    explanation:
      'static 변수 count는 호출 사이에 값이 유지된다. 첫 번째 next()에서 0 → 2가 되어 2를 반환하고, 두 번째 next()에서 2 → 4가 되어 4를 반환한다. 마지막 count는 그대로 4다.',
  },

  // ===== == / equals · String 불변 (9~10) =====
  {
    num: 9,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        String a = "spring";
        String b = "spring";
        String c = new String("spring");
        String d = c;
        System.out.println(a == b);
        System.out.println(b == c);
        System.out.println(c == d);
        System.out.println(a.equals(c));
    }
}`,
    answers: ['true false true true'],
    answerLabel: 'true false true true (각각 한 줄씩 출력)',
    explanation:
      '리터럴 "spring"은 문자열 풀에서 공유되어 a와 b는 같은 객체(true)다. c는 new로 힙에 새로 만든 객체라 b == c는 false, d는 c의 참조를 그대로 복사했으므로 c == d는 true다. equals()는 내용 비교이므로 true다.',
  },
  {
    num: 10,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        String s = "hello";
        s.toUpperCase();
        s.concat(" java");
        System.out.println(s);
        String t = s.concat("!");
        System.out.println(t);
    }
}`,
    answers: ['hello hello!', 'hello hello'],
    answerLabel: 'hello / hello! (각각 한 줄씩 출력)',
    explanation:
      'String은 불변 객체라 toUpperCase()와 concat()은 원본을 바꾸지 않고 새 문자열을 반환하는데, 반환값을 받지 않았으므로 s는 여전히 "hello"다. t는 concat("!")의 반환값을 받았으므로 "hello!"가 된다.',
  },

  // ===== 배열 (11~12) =====
  {
    num: 11,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        int[] a = new int[5];
        for (int i = 0; i < a.length; i++) {
            a[i] = i * 2;
        }
        System.out.println(a[2] + a[4] + " " + a.length);
    }
}`,
    answers: ['12 5'],
    answerLabel: '12 5',
    explanation:
      '배열에는 0, 2, 4, 6, 8이 채워진다. 출력식은 왼쪽부터 계산되므로 a[2] + a[4]는 문자열을 만나기 전 정수 덧셈으로 4 + 8 = 12가 되고, 그 뒤에 " "와 length(5)가 문자열로 이어 붙는다.',
  },
  {
    num: 12,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5}, {6}};
        int sum = 0;
        for (int i = 0; i < m.length; i++) {
            sum += m[i][0];
        }
        System.out.println(m.length + " " + m[1].length + " " + sum);
    }
}`,
    answers: ['3 2 11'],
    answerLabel: '3 2 11',
    explanation:
      '가변(비정방) 2차원 배열에서 m.length는 행의 개수 3, m[1].length는 1행 {4, 5}의 열 개수 2다. 반복문은 각 행의 첫 요소만 더하므로 sum = 1 + 4 + 6 = 11이다.',
  },

  // ===== 예외 처리 (13~14) =====
  {
    num: 13,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        try {
            System.out.print("시작 ");
            int r = 7 / 0;
            System.out.print("계산 ");
        } catch (ArithmeticException e) {
            System.out.print("예외 ");
        } finally {
            System.out.print("정리 ");
        }
        System.out.print("끝");
    }
}`,
    answers: ['시작 예외 정리 끝'],
    answerLabel: '시작 예외 정리 끝',
    explanation:
      '"시작 " 출력 후 7 / 0에서 ArithmeticException이 발생해 "계산 "은 건너뛰고 catch의 "예외 "가 출력된다. finally는 예외 여부와 관계없이 항상 실행되어 "정리 ", 예외가 처리되었으므로 다음 문장의 "끝"까지 출력된다.',
  },
  {
    num: 14,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    static int test(int n) {
        try {
            int[] a = new int[3];
            a[n] = 10;
            return 1;
        } catch (ArrayIndexOutOfBoundsException e) {
            return 2;
        } finally {
            System.out.print("F");
        }
    }
    public static void main(String[] args) {
        System.out.print(test(1));
        System.out.print(test(5));
    }
}`,
    answers: ['F1F2', 'F 1 F 2'],
    answerLabel: 'F1F2',
    explanation:
      'finally는 return으로 메서드를 빠져나가기 직전에도 반드시 실행된다. test(1)은 예외 없이 return 1 직전에 "F"를 출력하고 1이 출력된다. test(5)는 배열 범위 초과로 catch의 return 2가 선택되고, 역시 반환 직전 "F"가 먼저 출력된 뒤 2가 출력된다.',
  },

  // ===== 오버로딩 (15) =====
  {
    num: 15,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    static void show(int a) { System.out.print("정수 "); }
    static void show(double a) { System.out.print("실수 "); }
    static void show(String a) { System.out.print("문자열 "); }
    public static void main(String[] args) {
        show(10);
        show(10.0);
        show('A');
        show("10");
    }
}`,
    answers: ['정수 실수 정수 문자열'],
    answerLabel: '정수 실수 정수 문자열',
    explanation:
      '오버로딩은 컴파일 시점에 인수 타입으로 메서드가 선택된다. show(10)은 int 버전, show(10.0)은 double 버전, show("10")은 String 버전이다. char에 정확히 맞는 버전이 없는 show(\'A\')는 char가 int로 자동 형변환되어 int 버전이 선택된다.',
  },

  // ===== 반복/조건 로직 (16~17) =====
  {
    num: 16,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) continue;
            if (i > 7) break;
            sum += i;
        }
        System.out.println(sum);
    }
}`,
    answers: ['16'],
    answerLabel: '16',
    explanation:
      '짝수는 continue로 건너뛰고 홀수만 진행한다. i = 1, 3, 5, 7이 더해져 sum = 16이 되고, i = 8은 짝수라 break 검사 전에 continue되며, i = 9에서 9 > 7이 참이 되어 break로 종료된다.',
  },
  {
    num: 17,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        int i = 1, cnt = 0;
        while (i < 30) {
            i *= 2;
            cnt++;
        }
        System.out.println(i + " " + cnt);
    }
}`,
    answers: ['32 5'],
    answerLabel: '32 5',
    explanation:
      'i는 1 → 2 → 4 → 8 → 16 → 32로 다섯 번 두 배가 된다. i = 16일 때도 16 < 30이 참이라 한 번 더 실행되어 32가 되고, 32 < 30이 거짓이 되어 종료된다. 반복 횟수 cnt는 5다.',
  },

  // ===== 재귀 (18) =====
  {
    num: 18,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    static int f(int n) {
        if (n <= 1) return n;
        return f(n - 1) + f(n - 2);
    }
    public static void main(String[] args) {
        System.out.println(f(6));
    }
}`,
    answers: ['8'],
    answerLabel: '8',
    explanation:
      '피보나치 수열 재귀다. f(0) = 0, f(1) = 1을 종료 조건으로 f(2) = 1, f(3) = 2, f(4) = 3, f(5) = 5, f(6) = f(5) + f(4) = 5 + 3 = 8이 된다.',
  },

  // ===== StringBuilder / 문자열 메서드 (19) =====
  {
    num: 19,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("KOREA");
        sb.append("2026");
        sb.insert(5, "-");
        sb.deleteCharAt(0);
        System.out.println(sb);
        System.out.println(sb.length());
    }
}`,
    answers: ['OREA-2026 9', 'OREA2026 9'],
    answerLabel: 'OREA-2026 / 9 (각각 한 줄씩 출력)',
    explanation:
      'StringBuilder는 String과 달리 원본이 직접 바뀐다. "KOREA"에 append로 "KOREA2026", 인덱스 5에 "-"를 insert해 "KOREA-2026", 맨 앞 문자를 삭제해 "OREA-2026"이 된다. 길이는 9다.',
  },

  // ===== 인터페이스 / 추상 클래스 (20) =====
  {
    num: 20,
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `abstract class Coffee {
    abstract void brew();
    void serve() {
        brew();
        System.out.println("제공");
    }
}
interface Ice {
    default void addIce() { System.out.println("얼음 추가"); }
}
class IceAmericano extends Coffee implements Ice {
    void brew() { System.out.println("에스프레소 추출"); }
}
public class Main {
    public static void main(String[] args) {
        IceAmericano c = new IceAmericano();
        c.serve();
        c.addIce();
    }
}`,
    answers: ['에스프레소 추출 제공 얼음 추가'],
    answerLabel: '에스프레소 추출 / 제공 / 얼음 추가 (각각 한 줄씩 출력)',
    explanation:
      'serve()는 추상 클래스 Coffee의 일반 메서드지만, 그 안의 brew() 호출은 실제 객체인 IceAmericano의 구현으로 디스패치되어 "에스프레소 추출"이 먼저 출력되고 이어서 "제공"이 출력된다. addIce()는 인터페이스의 default 메서드를 그대로 사용해 "얼음 추가"가 출력된다.',
  },
]

export default defineComponent({
  name: 'VariantJavaLanguagePage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 자바(Java)</h1>
          <p>실기 최다 빈출 유형인 "코드 출력 결과 쓰기" 문제 20개를 변형해 담았습니다.
          출력 결과를 입력하세요. 여러 줄 출력은 공백으로 이어 입력해도 정답 처리됩니다.</p>
        </header>

        {QUESTIONS.map((q) => (
          <QuizInput
            key={q.num}
            num={q.num}
            question={q.question}
            code={q.code}
            answers={q.answers}
            answerLabel={q.answerLabel}
            explanation={q.explanation}
          />
        ))}

        <footer>기출 변형문제 — 자바(Java) · 2026-09</footer>
      </div>
    )
  },
})
