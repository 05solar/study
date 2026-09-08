import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './python-language.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `s = "PROGRAMMING"
print(s[2:8:2])`,
    answers: ['ORM', 'O R M'],
    answerLabel: 'ORM',
    explanation:
      '인덱스를 붙이면 P(0) R(1) O(2) G(3) R(4) A(5) M(6) M(7)이다. s[2:8:2]는 인덱스 2부터 8 미만까지 2칸씩 → 인덱스 2, 4, 6 → O, R, M이 이어져 ORM이 출력된다.',
  },
  {
    num: 2,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a = [5, 10, 15, 20, 25, 30]
print(a[-4:-1])`,
    answers: ['[15, 20, 25]', '15 20 25'],
    answerLabel: '[15, 20, 25]',
    explanation:
      '음수 인덱스는 뒤에서부터 센다. -4는 인덱스 2(15), -1은 인덱스 5(30)인데 end는 미포함이므로 인덱스 2~4의 15, 20, 25만 잘려 [15, 20, 25]가 된다.',
  },
  {
    num: 3,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `s = "SECURITY"
print(s[::-1][2:5])`,
    answers: ['IRU', 'I R U'],
    answerLabel: 'IRU',
    explanation:
      's[::-1]은 전체 역순이므로 SECURITY → YTIRUCES가 된다. 여기서 [2:5]는 인덱스 2, 3, 4(5 미포함) → I, R, U가 이어져 IRU가 출력된다.',
  },
  {
    num: 4,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a = [1, 2, 3, 4, 5, 6, 7, 8]
print(a[6:1:-2])`,
    answers: ['[7, 5, 3]', '7 5 3'],
    answerLabel: '[7, 5, 3]',
    explanation:
      'step이 -2이므로 인덱스 6에서 출발해 2칸씩 거꾸로 이동한다. 인덱스 6(7) → 4(5) → 2(3)까지 진행하고, 다음 인덱스 0은 end인 1을 넘어서므로 멈춘다 → [7, 5, 3].',
  },
  {
    num: 5,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a = [4, 2, 7]
a.append(5)
a.pop(1)
a.sort()
print(a)`,
    answers: ['[4, 5, 7]', '4 5 7'],
    answerLabel: '[4, 5, 7]',
    explanation:
      'append(5)로 [4, 2, 7, 5], pop(1)은 인덱스 1의 값 2를 꺼내 [4, 7, 5]가 된다. sort()가 원본을 오름차순 정렬하여 [4, 5, 7]이 출력된다.',
  },
  {
    num: 6,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a = [1, 2]
b = [3, 4]
a.extend(b)
a.append(b.pop())
print(a)`,
    answers: ['[1, 2, 3, 4, 4]', '1 2 3 4 4'],
    answerLabel: '[1, 2, 3, 4, 4]',
    explanation:
      'extend(b)는 b의 요소를 이어 붙여 a = [1, 2, 3, 4]가 된다. b.pop()은 b의 마지막 요소 4를 꺼내 반환하고, 그 4를 append하므로 a = [1, 2, 3, 4, 4]가 출력된다.',
  },
  {
    num: 7,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `d = {'x': 3, 'y': 5, 'z': 7}
print(d.get('y') + d.get('w', 10))`,
    answers: ['15'],
    answerLabel: '15',
    explanation:
      "d.get('y')는 키 y의 값 5를 반환한다. d.get('w', 10)은 키 w가 없으므로 오류 대신 기본값 10을 반환한다. 따라서 5 + 10 = 15가 출력된다.",
  },
  {
    num: 8,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `d = {'kim': 80, 'lee': 95, 'park': 60}
t = 0
for k in d:
    t += d[k] if d[k] >= 70 else 0
print(t)`,
    answers: ['175'],
    answerLabel: '175',
    explanation:
      '딕셔너리를 for로 순회하면 key가 나온다. 값이 70 이상인 것은 kim의 80과 lee의 95이고 park의 60은 0으로 처리되어, 80 + 95 = 175가 출력된다.',
  },
  {
    num: 9,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a = {1, 2, 3, 4}
b = {3, 4, 5}
print(len(a | b), len(a & b), len(a - b))`,
    answers: ['5 2 2', '5, 2, 2'],
    answerLabel: '5 2 2',
    explanation:
      '합집합 a | b = {1, 2, 3, 4, 5}로 5개, 교집합 a & b = {3, 4}로 2개, 차집합 a - b = {1, 2}로 2개다. print가 공백으로 구분해 5 2 2가 출력된다.',
  },
  {
    num: 10,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `s = "banana"
s = s.replace('a', 'o')
print(s.upper(), s.find('o'))`,
    answers: ['BONONO 1', 'BONONO1'],
    answerLabel: 'BONONO 1',
    explanation:
      "replace('a', 'o')는 모든 a를 o로 바꿔 s = \"bonono\"가 된다. upper()는 대문자 BONONO를 반환하고(원본 유지), find('o')는 bonono에서 o가 처음 나오는 인덱스 1을 반환한다.",
  },
  {
    num: 11,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `s = "red:green:blue"
p = s.split(':')
print('-'.join(p[::-1]))`,
    answers: ['blue-green-red', 'blue green red'],
    answerLabel: 'blue-green-red',
    explanation:
      "split(':')는 콜론 기준으로 잘라 ['red', 'green', 'blue'] 리스트를 만든다. p[::-1]로 역순 ['blue', 'green', 'red']가 되고, '-'.join()이 사이에 -를 끼워 blue-green-red를 만든다.",
  },
  {
    num: 12,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `t = 0
for i in range(2, 20, 3):
    t += i
print(t)`,
    answers: ['57'],
    answerLabel: '57',
    explanation:
      'range(2, 20, 3)은 2부터 20 미만까지 3씩 증가하므로 i = 2, 5, 8, 11, 14, 17이다. 합계는 2+5+8+11+14+17 = 57이다.',
  },
  {
    num: 13,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `t = 0
for i, v in enumerate([10, 20, 30, 40]):
    if i % 2 == 0:
        t += v
print(t)`,
    answers: ['40'],
    answerLabel: '40',
    explanation:
      'enumerate는 (인덱스, 값) 쌍을 준다. 인덱스가 짝수인 것은 i=0(값 10)과 i=2(값 30)이므로 10 + 30 = 40이 출력된다. 인덱스는 0부터 시작한다는 점이 핵심이다.',
  },
  {
    num: 14,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `class Shape:
    def __init__(self, n):
        self.n = n
    def area(self):
        return self.n * 2

class Square(Shape):
    def area(self):
        return self.n * self.n

s = Square(4)
print(s.area() + Shape(3).area())`,
    answers: ['22'],
    answerLabel: '22',
    explanation:
      'Square는 __init__이 없어 부모의 생성자로 n=4가 저장되고, area()는 오버라이딩된 자식 메서드가 호출되어 4×4 = 16이다. Shape(3).area()는 부모 메서드로 3×2 = 6. 16 + 6 = 22.',
  },
  {
    num: 15,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `class P:
    def __init__(self):
        self.v = 10
    def calc(self):
        return self.v + 1

class C(P):
    def __init__(self):
        super().__init__()
        self.v = self.v + 5
    def calc(self):
        return super().calc() * 2

c = C()
print(c.calc())`,
    answers: ['32'],
    answerLabel: '32',
    explanation:
      'C() 생성 시 super().__init__()이 v=10을 만들고 이어서 v = 10 + 5 = 15가 된다. c.calc()는 자식 메서드가 호출되어 super().calc() = 15 + 1 = 16을 구한 뒤 2를 곱해 32가 출력된다.',
  },
  {
    num: 16,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `print([i * 3 for i in range(6) if i % 2 == 0])`,
    answers: ['[0, 6, 12]', '0 6 12'],
    answerLabel: '[0, 6, 12]',
    explanation:
      'range(6) = 0~5 중 짝수 조건(i % 2 == 0)을 통과하는 것은 0, 2, 4다. 각각 3을 곱하면 0, 6, 12이므로 [0, 6, 12]가 출력된다. 0도 짝수라는 점에 주의한다.',
  },
  {
    num: 17,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a = [1, 2, 3, 4, 5, 6]
print([x for x in a if x % 3 != 0])`,
    answers: ['[1, 2, 4, 5]', '1 2 4 5'],
    answerLabel: '[1, 2, 4, 5]',
    explanation:
      '조건이 "3의 배수가 아닌 것"이므로 3과 6이 걸러진다. 남는 요소는 1, 2, 4, 5이고 변환식이 x 그대로이므로 [1, 2, 4, 5]가 출력된다.',
  },
  {
    num: 18,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `print(17 // 5 + 17 % 5 * 2 ** 2)`,
    answers: ['11'],
    answerLabel: '11',
    explanation:
      '우선순위는 ** → * → // % → + 순이다. 2 ** 2 = 4, 17 % 5 = 2이므로 2 × 4 = 8. 17 // 5 = 3(몫)이므로 3 + 8 = 11이 출력된다.',
  },
  {
    num: 19,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a, b, c = 3, 7, 11
a, b = b, a
c, a = a, c
print(a, b, c)`,
    answers: ['11 3 7', '11, 3, 7'],
    answerLabel: '11 3 7',
    explanation:
      '다중 할당은 오른쪽을 먼저 전부 평가한 뒤 대입한다. a, b = b, a로 a=7, b=3이 된다. c, a = a, c는 오른쪽 (7, 11)을 먼저 만들고 c=7, a=11로 대입하여 11 3 7이 출력된다.',
  },
  {
    num: 20,
    question: '다음 Python 프로그램의 출력 결과를 쓰시오.',
    code: `a = [1, 2, 3, 4, 5]
b = list(map(lambda x: x * 2, a))
print(list(filter(lambda x: x > 4, b)))`,
    answers: ['[6, 8, 10]', '6 8 10'],
    answerLabel: '[6, 8, 10]',
    explanation:
      'map이 각 요소에 2를 곱해 b = [2, 4, 6, 8, 10]을 만든다. filter는 x > 4 조건이 참인 요소만 남기는데 4는 4보다 크지 않으므로 제외되어 [6, 8, 10]이 출력된다.',
  },
]

export default defineComponent({
  name: 'VariantPythonLanguagePage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 파이썬(Python)</h1>
          <p>실기 최다 빈출인 "출력 결과 쓰기" 유형을 변형한 20문제입니다.
          코드를 직접 트레이스한 뒤 출력 결과를 입력하세요. 대괄호·따옴표 등 부호는 채점 시 무시됩니다.</p>
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

        <footer>기출 변형문제 — 파이썬(Python) · 2026-09</footer>
      </div>
    )
  },
})
