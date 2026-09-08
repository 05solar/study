import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { QuizInput, type QuizData } from '../../../shared/QuizInput'
import './c-language.css'

const QUESTIONS: QuizData[] = [
  {
    num: 1,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a[5] = {2, 4, 6, 8, 10};
    int *p = a + 1;
    printf("%d ", *p);
    printf("%d ", *(p + 2));
    printf("%d", *p + *(a + 4));
    return 0;
}`,
    answers: ['4 8 14'],
    answerLabel: '4 8 14',
    explanation:
      'p는 a+1이므로 a[1]을 가리켜 *p=4. *(p+2)는 a[3]=8. *p + *(a+4)는 4+10=14. 포인터에 더하는 정수는 원소 단위로 이동한다.',
  },
  {
    num: 2,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a[4] = {5, 10, 15, 20};
    int *p = a;
    printf("%d ", *p++);
    printf("%d ", *p);
    printf("%d ", ++*p);
    printf("%d", *(p + 1));
    return 0;
}`,
    answers: ['5 10 11 15'],
    answerLabel: '5 10 11 15',
    explanation:
      '*p++는 a[0]=5를 먼저 출력한 뒤 p가 a[1]로 이동. 이어서 *p=10. ++*p는 a[1]의 값을 11로 증가시켜 11 출력. *(p+1)은 a[2]=15.',
  },
  {
    num: 3,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a[5] = {1, 3, 5, 7, 9};
    int *p = a + 4;
    int sum = 0, i;
    for (i = 0; i < 3; i++) {
        sum += *p;
        p--;
    }
    printf("%d %d", sum, *p);
    return 0;
}`,
    answers: ['21 3'],
    answerLabel: '21 3',
    explanation:
      'p는 a[4]=9부터 시작해 뒤로 이동하며 9, 7, 5를 더해 sum=21. 세 번 감소한 뒤 p는 a[1]을 가리키므로 *p=3.',
  },
  {
    num: 4,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 2);
}
int main() {
    printf("%d", f(7));
    return 0;
}`,
    answers: ['105'],
    answerLabel: '105',
    explanation:
      '2씩 줄어드는 팩토리얼 변형이다. f(7)=7×f(5)=7×5×f(3)=7×5×3×f(1)=7×5×3×1=105. 홀수만 곱해진다.',
  },
  {
    num: 5,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int f(int n) {
    if (n <= 2) return 1;
    return f(n - 1) + f(n - 2);
}
int main() {
    printf("%d %d", f(5), f(6));
    return 0;
}`,
    answers: ['5 8'],
    answerLabel: '5 8',
    explanation:
      '피보나치 변형: f(1)=f(2)=1, f(3)=2, f(4)=3, f(5)=5, f(6)=8. 종료 조건이 n<=2이므로 1, 1부터 시작해 앞 두 항을 더해 나간다.',
  },
  {
    num: 6,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a = 7, b = 7;
    int x = a-- + 2;
    int y = --b + 2;
    printf("%d %d %d %d", a, b, x, y);
    return 0;
}`,
    answers: ['6 6 9 8'],
    answerLabel: '6 6 9 8',
    explanation:
      '후위 a--는 7을 먼저 사용해 x=7+2=9, 그 후 a=6. 전위 --b는 b를 6으로 먼저 감소시켜 y=6+2=8. 최종 a=6, b=6.',
  },
  {
    num: 7,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int n = 4;
    int r = 0;
    r += n++;
    r += ++n;
    printf("%d %d", n, r);
    return 0;
}`,
    answers: ['6 10'],
    answerLabel: '6 10',
    explanation:
      'r += n++에서 후위이므로 r에 4가 더해진 뒤 n=5. r += ++n에서 전위이므로 n이 먼저 6이 되고 r=4+6=10.',
  },
  {
    num: 8,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int i, j, cnt = 0;
    for (i = 2; i <= 20; i++) {
        int ok = 1;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                ok = 0;
                break;
            }
        }
        if (ok) cnt++;
    }
    printf("%d", cnt);
    return 0;
}`,
    answers: ['8'],
    answerLabel: '8',
    explanation:
      '2 이상 자기 자신 미만의 수로 나누어떨어지면 소수가 아니다. 20 이하의 소수는 2, 3, 5, 7, 11, 13, 17, 19로 모두 8개.',
  },
  {
    num: 9,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a = 48, b = 36, t;
    while (b != 0) {
        t = a % b;
        a = b;
        b = t;
    }
    printf("%d", a);
    return 0;
}`,
    answers: ['12'],
    answerLabel: '12',
    explanation:
      '유클리드 호제법으로 최대공약수를 구한다. 48%36=12 → (a,b)=(36,12), 36%12=0 → (a,b)=(12,0)에서 종료. 48과 36의 최대공약수 12 출력.',
  },
  {
    num: 10,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int i, cnt = 0, sum = 0;
    for (i = 1; i <= 30; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            cnt++;
            sum += i;
        }
    }
    printf("%d %d", cnt, sum);
    return 0;
}`,
    answers: ['2 45'],
    answerLabel: '2 45',
    explanation:
      '3과 5의 공배수는 15의 배수이므로 30 이하에서는 15와 30 두 개(cnt=2)이고 합은 15+30=45.',
  },
  {
    num: 11,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int i, sum = 0;
    for (i = 0; i < 3; i++)
        sum += a[i][i] + a[i][2 - i];
    printf("%d", sum);
    return 0;
}`,
    answers: ['30'],
    answerLabel: '30',
    explanation:
      '주대각선 a[i][i]와 부대각선 a[i][2-i]를 더한다. i=0: 1+3=4, i=1: 5+5=10(가운데 5가 두 번), i=2: 9+7=16 → 4+10+16=30.',
  },
  {
    num: 12,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a[2][4];
    int i, j, k = 1;
    for (i = 0; i < 2; i++)
        for (j = 0; j < 4; j++)
            a[i][j] = k++;
    printf("%d %d %d", a[0][3], a[1][0], a[1][2]);
    return 0;
}`,
    answers: ['4 5 7'],
    answerLabel: '4 5 7',
    explanation:
      '행 우선으로 1~8이 채워져 a[0]={1,2,3,4}, a[1]={5,6,7,8}. 따라서 a[0][3]=4, a[1][0]=5, a[1][2]=7.',
  },
  {
    num: 13,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    char s[] = "PROGRAM";
    char *p = s;
    printf("%c%c%c", *p, *(p + 3), s[5]);
    return 0;
}`,
    answers: ['PGA'],
    answerLabel: 'PGA',
    explanation:
      '인덱스는 0부터: P(0) R(1) O(2) G(3) R(4) A(5) M(6). *p는 P, *(p+3)은 G, s[5]는 A이므로 붙여서 PGA.',
  },
  {
    num: 14,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char a[20] = "SOFT";
    char b[] = "WARE";
    strcat(a, b);
    printf("%s %d ", a, (int)strlen(a));
    printf("%d", strcmp("apple", "apple") == 0 ? 1 : 0);
    return 0;
}`,
    answers: ['SOFTWARE 8 1'],
    answerLabel: 'SOFTWARE 8 1',
    explanation:
      'strcat이 a 뒤에 b를 이어 붙여 "SOFTWARE"가 되고 strlen은 널 문자를 제외한 8을 반환. strcmp는 두 문자열이 같으면 0이므로 비교식이 참이 되어 1 출력.',
  },
  {
    num: 15,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
struct Box {
    int w, h;
};
int main() {
    struct Box b = {4, 5};
    struct Box *p = &b;
    p->w = p->w + 2;
    printf("%d %d %d", b.w, p->h, p->w * p->h);
    return 0;
}`,
    answers: ['6 5 30'],
    answerLabel: '6 5 30',
    explanation:
      'p는 b를 가리키므로 화살표 연산자로 멤버에 접근하면 원본 b가 바뀐다. w는 4+2=6이 되고 h는 그대로 5, 넓이는 6×5=30.',
  },
  {
    num: 16,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
struct Item {
    char name[10];
    int price;
};
int main() {
    struct Item list[3] = {{"PEN", 500}, {"CUP", 1200}, {"BAG", 9000}};
    int i, max = 0;
    for (i = 0; i < 3; i++)
        if (list[i].price > list[max].price)
            max = i;
    printf("%s %d", list[max].name, list[max].price);
    return 0;
}`,
    answers: ['BAG 9000'],
    answerLabel: 'BAG 9000',
    explanation:
      '구조체 배열을 돌며 가격이 가장 큰 원소의 인덱스를 max에 저장한다. 500 → 1200 → 9000 순으로 갱신되어 max=2, list[2]는 BAG 9000.',
  },
  {
    num: 17,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int x = 9, y = 6;
    printf("%d %d ", x & y, x | y);
    printf("%d %d", x ^ y, y << 2);
    return 0;
}`,
    answers: ['0 15 15 24'],
    answerLabel: '0 15 15 24',
    explanation:
      '9=1001, 6=0110. AND은 겹치는 비트가 없어 0, OR은 1111=15, XOR도 서로 다른 비트뿐이라 1111=15. 6<<2는 6×4=24.',
  },
  {
    num: 18,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int acc(int n) {
    static int total = 0;
    total += n;
    return total;
}
int main() {
    printf("%d ", acc(3));
    printf("%d ", acc(5));
    printf("%d", acc(2));
    return 0;
}`,
    answers: ['3 8 10'],
    answerLabel: '3 8 10',
    explanation:
      'static 변수 total은 최초 1회만 0으로 초기화되고 호출이 끝나도 값이 유지된다. 3 → 3+5=8 → 8+2=10으로 누적되어 3 8 10.',
  },
  {
    num: 19,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int n = 3, s = 0;
    switch (n) {
        case 1: s += 1;
        case 2: s += 10;
        case 3: s += 100;
        case 4: s += 1000; break;
        case 5: s += 10000;
    }
    printf("%d", s);
    return 0;
}`,
    answers: ['1100'],
    answerLabel: '1100',
    explanation:
      'n=3이므로 case 3부터 실행되어 s=100. break가 없어 case 4로 흘러내려(fallthrough) s=100+1000=1100이 된 뒤 break로 switch를 빠져나온다.',
  },
  {
    num: 20,
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int n = 25, sum = 0;
    do {
        sum += n % 10;
        n /= 10;
    } while (n > 0);
    printf("%d", sum);
    return 0;
}`,
    answers: ['7'],
    answerLabel: '7',
    explanation:
      'do-while은 조건 검사 전에 먼저 1회 실행된다. 1회차: sum=5, n=2. 2회차: sum=5+2=7, n=0이 되어 조건이 거짓 → 종료. 각 자리 숫자의 합 7 출력.',
  },
]

export default defineComponent({
  name: 'VariantCLanguagePage',
  setup() {
    return () => (
      <div class="wrap">
        <p class="backlink"><RouterLink to="/variant">← 변형문제 목록으로</RouterLink></p>

        <header class="hero">
          <h1>기출 변형 — C언어</h1>
          <p>
            정보처리기사 실기 최다 빈출 유형인 "다음 C 프로그램의 출력 결과를 쓰시오"를 변형한 20문제입니다.
            포인터·배열, 재귀, 증감 연산자, 반복 로직, 2차원 배열, 문자열, 구조체, 비트 연산, static,
            switch, do-while을 고루 다룹니다. 눈으로 풀지 말고 반드시 한 줄씩 트레이스한 뒤
            출력 결과를 입력하세요. 여러 줄 출력은 공백으로 이어 입력해도 정답 처리됩니다.
          </p>
        </header>

        {QUESTIONS.map((q) => (
          <QuizInput
            key={String(q.num)}
            num={q.num}
            question={q.question}
            code={q.code}
            answers={q.answers}
            answerLabel={q.answerLabel}
            explanation={q.explanation}
          />
        ))}

        <footer>C언어 기출 변형문제 · 2026-09</footer>
      </div>
    )
  },
})
