import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './number-system.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '2진수 110101₂을 10진수로 변환하시오.',
    answers: ['53'],
    explanation:
      '자릿값의 합으로 계산한다. 1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰ = 32 + 16 + 0 + 4 + 0 + 1 = 53.',
  },
  {
    num: 2,
    question: '10진수 45를 2진수로 변환하시오.',
    answers: ['101101', '101101(2)', '0b101101'],
    answerLabel: '101101₂',
    explanation:
      '45÷2=22…1, 22÷2=11…0, 11÷2=5…1, 5÷2=2…1, 2÷2=1…0, 1÷2=0…1. 나머지를 아래에서 위로 읽으면 101101. 검산: 32+8+4+1 = 45.',
  },
  {
    num: 3,
    question: '10진수 173을 16진수로 변환하시오.',
    answers: ['AD', '0xAD', 'AD(16)'],
    answerLabel: 'AD₁₆',
    explanation:
      '173 ÷ 16 = 10 … 나머지 13. 몫 10은 A, 나머지 13은 D이므로 AD. 검산: 10×16 + 13 = 160 + 13 = 173.',
  },
  {
    num: 4,
    question: '8진수 654₈을 16진수로 변환하시오. (2진수를 거쳐서 변환할 것)',
    answers: ['1AC', '0x1AC', '1AC(16)'],
    answerLabel: '1AC₁₆',
    explanation:
      '654₈ → 각 숫자를 3비트로: 110 101 100 → 110101100₂. 오른쪽부터 4비트씩 다시 묶으면 0001 1010 1100 → 1, A(10), C(12) → 1AC. 검산: 654₈ = 6×64+5×8+4 = 428, 1AC₁₆ = 256+160+12 = 428.',
  },
  {
    num: 5,
    question: '2진수 10111011₂을 8진수로 변환하시오.',
    answers: ['273', '273(8)', '0o273'],
    answerLabel: '273₈',
    explanation:
      '오른쪽부터 3비트씩 묶는다. 10 111 011 → 010 | 111 | 011 → 2, 7, 3 → 273₈. 검산: 10111011₂ = 187, 273₈ = 2×64+7×8+3 = 128+56+3 = 187.',
  },
  {
    num: 6,
    question: '10진 소수 0.8125를 2진수로 변환하시오.',
    answers: ['0.1101', '0.1101(2)', '.1101', '0b0.1101'],
    answerLabel: '0.1101₂',
    explanation:
      '소수부에 2를 곱해 정수부를 위에서 아래로 읽는다. 0.8125×2=1.625→1, 0.625×2=1.25→1, 0.25×2=0.5→0, 0.5×2=1.0→1(종료) → 0.1101₂. 검산: 0.5+0.25+0.0625 = 0.8125.',
  },
  {
    num: 7,
    question: '-42를 8비트 2의 보수로 표현하시오.',
    answers: ['11010110', '11010110(2)', '0b11010110'],
    answerLabel: '11010110₂',
    explanation:
      '+42 = 00101010(32+8+2). 1의 보수(전체 반전) = 11010101, 여기에 +1 = 11010110. 검산: 11010110₂ = 214 = 256 - 42.',
  },
  {
    num: 8,
    question: '8비트 2의 보수 체계에서 비트열 11101100₂을 10진수로 해석한 값을 쓰시오.',
    answers: ['-20'],
    explanation:
      'MSB가 1이므로 음수. 다시 2의 보수를 취하면 반전 00010011 + 1 = 00010100 = 20 → 답은 -20. 검산: 11101100₂ = 236, 236 - 256 = -20.',
  },
  {
    num: 9,
    question: '8비트 2진수 01011010의 1의 보수를 쓰시오.',
    answers: ['10100101', '10100101(2)'],
    answerLabel: '10100101₂',
    explanation:
      '1의 보수는 모든 비트를 반전(0↔1)한 것이다. 01011010 → 10100101. 검산: 두 수를 더하면 11111111(모든 자리 1)이 된다.',
  },
  {
    num: 10,
    question: '10진수 25와 19의 XOR(^) 연산 결과를 10진수로 쓰시오.',
    code: `25 ^ 19`,
    answers: ['10'],
    explanation:
      '25 = 11001₂, 19 = 10011₂. 자리별로 다르면 1: 11001 ^ 10011 = 01010₂ = 10. (1^1=0, 1^0=1, 0^0=0, 0^1=1, 1^1=0)',
  },
  {
    num: 11,
    question: '다음 두 비트 연산의 결과를 각각 10진수로 순서대로 쓰시오.',
    code: `(1) 12 & 10
(2) 12 | 10`,
    answers: ['8, 14', '8과 14'],
    answerLabel: '(1) 8, (2) 14',
    explanation:
      '12 = 1100₂, 10 = 1010₂. AND는 둘 다 1일 때만 1: 1100 & 1010 = 1000₂ = 8. OR는 하나라도 1이면 1: 1100 | 1010 = 1110₂ = 14.',
  },
  {
    num: 12,
    question: '다음 왼쪽 시프트 연산의 결과를 10진수로 쓰시오.',
    code: `7 << 2`,
    answers: ['28'],
    explanation:
      '왼쪽 시프트 1비트마다 ×2이므로 7 × 2² = 7 × 4 = 28. 비트로 확인: 0111 → 011100 = 16+8+4 = 28.',
  },
  {
    num: 13,
    question: '다음 오른쪽 시프트 연산의 결과를 10진수로 쓰시오.',
    code: `45 >> 3`,
    answers: ['5'],
    explanation:
      '오른쪽 시프트 n비트는 2ⁿ으로 나눈 몫이다. 45 ÷ 8 = 5 … 5 → 몫 5. 비트로 확인: 101101₂ → 3비트 밀면 101₂ = 5.',
  },
  {
    num: 14,
    question: "ASCII 코드에서 'A'가 65일 때, 문자 'W'의 10진수 값을 쓰시오.",
    answers: ['87'],
    explanation:
      "W는 알파벳 23번째 문자이므로 'A'에서 22만큼 떨어져 있다. 65 + 22 = 87.",
  },
  {
    num: 15,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main(void) {
    char c = 'a';
    printf("%d", c + 2);
    return 0;
}`,
    answers: ['99'],
    explanation:
      "'a'의 ASCII 값은 97. 문자는 정수로 계산되므로 97 + 2 = 99가 %d(10진 정수)로 출력된다.",
  },
  {
    num: 16,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main(void) {
    int a = 60;
    printf("%o %x", a, a);
    return 0;
}`,
    answers: ['74 3c'],
    answerLabel: '74 3c',
    explanation:
      '60 = 111100₂. %o(8진): 3비트 묶음 111 100 → 74₈ (검산 7×8+4=60). %x(16진 소문자): 4비트 묶음 0011 1100 → 3C → 소문자 3c. 따라서 "74 3c".',
  },
  {
    num: 17,
    question: '다음 Python 코드의 출력 결과를 쓰시오.',
    code: `print(bin(13), hex(200))`,
    answers: ['0b1101 0xc8'],
    answerLabel: '0b1101 0xc8',
    explanation:
      'bin()·hex()는 접두어가 붙은 문자열을 반환한다. 13 = 1101₂ → "0b1101", 200 = C8₁₆(12×16+8=200) → 소문자 "0xc8". print에 쉼표로 넘기면 공백으로 구분되어 출력된다.',
  },
  {
    num: 18,
    question: '6비트 2의 보수 체계로 표현할 수 있는 정수의 범위를 쓰시오.',
    answers: ['-32 ~ 31', '-32에서 31', '-32부터 31까지', '-32 이상 31 이하'],
    answerLabel: '-32 ~ 31',
    explanation:
      'n비트 2의 보수 범위는 -2ⁿ⁻¹ ~ 2ⁿ⁻¹-1. n=6이면 -2⁵ ~ 2⁵-1 = -32 ~ 31 (음수가 하나 더 많다).',
  },
  {
    num: 19,
    question: '짝수 패리티(even parity) 방식에서 7비트 데이터 1011010에 붙일 패리티 비트의 값을 쓰시오.',
    answers: ['0'],
    explanation:
      '짝수 패리티는 패리티 비트를 포함한 전체 1의 개수를 짝수로 만든다. 1011010의 1의 개수는 4개(이미 짝수)이므로 패리티 비트는 0.',
  },
  {
    num: 20,
    question: '16진수 1F4₁₆을 10진수로 변환하시오.',
    answers: ['500'],
    explanation:
      '자릿값의 합으로 계산한다. 1×16² + F(15)×16¹ + 4×16⁰ = 256 + 240 + 4 = 500.',
  },
]

export default defineComponent({
  name: 'VariantNumberSystemPage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — 진수와 데이터 표현</h1>
          <p>
            정보처리기사 실기 기출 유형을 바탕으로 숫자·코드·보기를 바꾼 변형 문제입니다.
            정답을 입력하고 제출하면 채점되며, 맞으면 해설이, 틀리면 정답과 해설이 함께 표시됩니다.
          </p>
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

        <footer>기출 변형 — 진수와 데이터 표현 · 20문항 · 2026-09</footer>
      </div>
    )
  },
})
