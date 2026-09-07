import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDefs } from '../../../shared/ArrowDefs'
import { useFlowAnimation } from '../../../shared/useFlowAnimation'
import { scrollToId } from '../../../shared/scroll'
import './number-system.css'

export default defineComponent({
  name: 'NumberSystemPage',
  setup() {
    const root = ref<HTMLElement | null>(null)
    useFlowAnimation(root)
    return () => (
      <div class="wrap" ref={root}>
        <ArrowDefs />
        <p class="backlink"><RouterLink to="/engineer">← 정보처리기사 목록으로</RouterLink></p>

        <header class="hero">
          <h1>프로그래밍 기본 — 진수와 데이터 표현</h1>
          <p>정보처리기사 실기 대비 학습 문서. 진법의 개념(2·8·10·16진수) → 진법 변환 → 보수와 음수 표현 →
          비트 연산 → 데이터 표현(고정/부동 소수점·BCD·문자 코드) → 언어별 진수 표기 순서로,
          실기에서 계산 문제로 단골 출제되는 내용을 예시 계산·표·실전 문제로 정리한다.<br/>
          <span>도면의 파란 점은 계산 단계의 진행을 나타내며, 진행 중인 단계가 진하게 강조된다.</span></p>
        </header>

        <nav class="toc">
          <h2>목차</h2>
          <ol>
            <li><a href="#base" onClick={(e) => scrollToId(e, 'base')}>진법의 개념 — 2·8·10·16진수와 자릿값</a></li>
            <li><a href="#convert" onClick={(e) => scrollToId(e, 'convert')}>진법 변환 — 나눗셈·자릿값·비트 묶음</a></li>
            <li><a href="#complement" onClick={(e) => scrollToId(e, 'complement')}>보수와 음수 표현 — 1의 보수 · 2의 보수</a></li>
            <li><a href="#bitwise" onClick={(e) => scrollToId(e, 'bitwise')}>비트 연산 — AND · OR · XOR · NOT · 시프트</a></li>
            <li><a href="#datarep" onClick={(e) => scrollToId(e, 'datarep')}>데이터 표현 — 소수점 · BCD · 문자 코드</a></li>
            <li><a href="#lang" onClick={(e) => scrollToId(e, 'lang')}>언어별 진수 표기와 출력 — C · Java · Python</a></li>
            <li><a href="#quiz" onClick={(e) => scrollToId(e, 'quiz')}>실전 문제 (정보처리기사 실기 대비)</a></li>
          </ol>
        </nav>

        {/* ===================== 1. 진법의 개념 ===================== */}
        <section id="base">
          <h2>1. 진법의 개념 — 2·8·10·16진수와 자릿값</h2>
          <p class="sub">진법(진수)은 몇 개의 숫자로 수를 표현하는가의 규칙이다. 컴퓨터는 2진수로 동작하고, 사람이 읽기 쉽게 8진수·16진수를 함께 쓴다.</p>

          <h3>1-1. 네 가지 진법 비교</h3>
          <table>
            <tr><th>진법</th><th>기수(Base)</th><th>사용하는 숫자</th><th>표기 예</th></tr>
            <tr><td><strong>2진법</strong> (Binary)</td><td>2</td><td>0, 1</td><td>1101₂</td></tr>
            <tr><td><strong>8진법</strong> (Octal)</td><td>8</td><td>0 ~ 7</td><td>326₈</td></tr>
            <tr><td><strong>10진법</strong> (Decimal)</td><td>10</td><td>0 ~ 9</td><td>214</td></tr>
            <tr><td><strong>16진법</strong> (Hexadecimal)</td><td>16</td><td>0 ~ 9, A ~ F</td><td>D6₁₆</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            어떤 진법이든 그 진법에서 쓸 수 있는 숫자는 <strong>0부터 (기수 - 1)까지</strong>다.
            즉 8진수에는 8·9가 없고, 2진수에는 2가 없다. "358₈은 올바른 8진수인가?" 같은 함정 보기에 주의.
          </div>

          <h3>1-2. 자릿값(가중치)</h3>
          <p>각 자리는 오른쪽 끝(가중치 1 = 기수⁰)부터 <strong>기수의 거듭제곱</strong>만큼의 값을 갖는다.
          예를 들어 10진수 214는 2×10² + 1×10¹ + 4×10⁰이고,
          2진수 1101₂은 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13이다.</p>
          <table>
            <tr><th>자리(오른쪽부터)</th><th>2진 가중치</th><th>8진 가중치</th><th>16진 가중치</th></tr>
            <tr><td>1번째</td><td>2⁰ = 1</td><td>8⁰ = 1</td><td>16⁰ = 1</td></tr>
            <tr><td>2번째</td><td>2¹ = 2</td><td>8¹ = 8</td><td>16¹ = 16</td></tr>
            <tr><td>3번째</td><td>2² = 4</td><td>8² = 64</td><td>16² = 256</td></tr>
            <tr><td>4번째</td><td>2³ = 8</td><td>8³ = 512</td><td>16³ = 4096</td></tr>
          </table>

          <h3>1-3. 16진수 A~F 대응표 (암기)</h3>
          <table>
            <tr><th>16진수</th><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr>
            <tr><th>10진수</th><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
            <tr><th>2진수(4비트)</th><td>1010</td><td>1011</td><td>1100</td><td>1101</td><td>1110</td><td>1111</td></tr>
          </table>
        </section>

        {/* ===================== 2. 진법 변환 ===================== */}
        <section id="convert">
          <h2>2. 진법 변환 — 나눗셈·자릿값·비트 묶음</h2>
          <p class="sub">실기 계산 문제의 출발점. 10진 → 2진은 나눗셈, 2진 → 10진은 자릿값의 합, 2진 ↔ 8·16진은 비트 묶음으로 푼다.</p>

          <h3>2-1. 10진수 → 2진수 : 나눗셈(몫·나머지) 방법</h3>
          <p>10진수를 2로 <strong>몫이 0이 될 때까지 반복해서 나누고</strong>,
          나머지를 <strong>아래에서 위로(마지막 나머지부터)</strong> 읽는다.</p>
          <pre>{`13 ÷ 2 = 6 … 나머지 1   ↑
 6 ÷ 2 = 3 … 나머지 0   │ 아래에서 위로
 3 ÷ 2 = 1 … 나머지 1   │ 읽는다
 1 ÷ 2 = 0 … 나머지 1   │
→ 13 = 1101₂`}</pre>

          <figure class="diagram">
            <svg class="d anim" viewBox="0 0 900 230">
              <rect class="boxdark" x="60" y="50" width="80" height="42" />
              <text x="100" y="77" text-anchor="middle" class="strong">13</text>
              <rect class="box" x="250" y="50" width="80" height="42" />
              <text x="290" y="77" text-anchor="middle">몫 6</text>
              <rect class="box" x="440" y="50" width="80" height="42" />
              <text x="480" y="77" text-anchor="middle">몫 3</text>
              <rect class="box" x="630" y="50" width="80" height="42" />
              <text x="670" y="77" text-anchor="middle">몫 1</text>
              <rect class="boxsoft" x="790" y="50" width="80" height="42" />
              <text x="830" y="77" text-anchor="middle">몫 0</text>

              <g class="msg" data-step="1">
                <line x1="140" y1="71" x2="245" y2="71" class="arrow" />
                <text x="192" y="42" text-anchor="middle" class="small">÷2</text>
                <text x="192" y="115" text-anchor="middle" class="small">나머지 1</text>
              </g>
              <g class="msg" data-step="2">
                <line x1="330" y1="71" x2="435" y2="71" class="arrow" />
                <text x="382" y="42" text-anchor="middle" class="small">÷2</text>
                <text x="382" y="115" text-anchor="middle" class="small">나머지 0</text>
              </g>
              <g class="msg" data-step="3">
                <line x1="520" y1="71" x2="625" y2="71" class="arrow" />
                <text x="572" y="42" text-anchor="middle" class="small">÷2</text>
                <text x="572" y="115" text-anchor="middle" class="small">나머지 1</text>
              </g>
              <g class="msg" data-step="4">
                <line x1="710" y1="71" x2="785" y2="71" class="arrow" />
                <text x="748" y="42" text-anchor="middle" class="small">÷2</text>
                <text x="748" y="115" text-anchor="middle" class="small">나머지 1</text>
              </g>

              <rect class="boxdark" x="280" y="140" width="340" height="46" />
              <text x="450" y="169" text-anchor="middle" class="strong">1101₂ = 13</text>
              <g class="msg" data-step="5">
                <path class="arrow" d="M 770 95 L 770 163 L 627 163" fill="none" />
                <text x="770" y="205" text-anchor="middle" class="small">나머지를 거꾸로(아래→위) 읽는다</text>
              </g>
            </svg>
            <figcaption>도면 1. 10진수 13 → 2진수 1101₂ 변환 — 몫이 0이 될 때까지 2로 나누고, 나머지를 거꾸로 읽는다.</figcaption>
          </figure>

          <h3>2-2. 2진수 → 10진수 : 자릿값의 합</h3>
          <p>각 비트에 자릿값(가중치)을 곱해 더한다. 1이 켜진 자리의 가중치만 더하면 된다.</p>
          <pre>{`1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰
      = 8 + 4 + 0 + 1 = 13`}</pre>

          <h3>2-3. 2진수 ↔ 8진수 · 16진수 : 비트 묶음 (최단골)</h3>
          <p>8 = 2³, 16 = 2⁴이므로 2진수를 <strong>오른쪽부터 3비트(8진) 또는 4비트(16진)씩 묶어</strong>
          각 묶음을 그대로 바꾼다. 반대 방향은 각 숫자를 3·4비트로 풀어 쓰면 된다.
          8진 ↔ 16진 변환은 <strong>일단 2진수를 거쳐서</strong> 하는 것이 가장 빠르다.</p>
          <pre>{`11010110₂ (= 214)
→ 8진 : 011 | 010 | 110  →  3 2 6   →  326₈
→ 16진: 1101 | 0110      →  D 6     →  D6₁₆`}</pre>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            묶는 방향은 항상 <strong>오른쪽(소수점 기준)부터</strong>. 왼쪽 자리가 모자라면 0을 채운다.
            소수부가 있으면 소수점의 오른쪽으로 묶는다.
          </div>

          <h3>2-4. 10진 소수부 → 2진수 : 곱셈법</h3>
          <p>소수부에 2를 곱해 <strong>정수부를 차례로 떼어 내고</strong>, 소수부가 0이 될 때까지 반복한다.
          결과는 나눗셈법과 반대로 <strong>위에서 아래로</strong> 읽는다.</p>
          <pre>{`0.625 × 2 = 1.25  → 정수부 1   ↓
0.25  × 2 = 0.5   → 정수부 0   │ 위에서 아래로
0.5   × 2 = 1.0   → 정수부 1   │ 읽는다 (소수부 0이면 종료)
→ 0.625 = 0.101₂`}</pre>
        </section>

        {/* ===================== 3. 보수와 음수 표현 ===================== */}
        <section id="complement">
          <h2>3. 보수와 음수 표현 — 1의 보수 · 2의 보수</h2>
          <p class="sub">컴퓨터는 뺄셈 회로 없이 "보수를 더하는 방식"으로 뺄셈을 처리한다. 8비트 2의 보수 계산은 실기 단골 중의 단골.</p>

          <h3>3-1. 1의 보수와 2의 보수</h3>
          <table>
            <tr><th>보수</th><th>만드는 법</th><th>예 (8비트, 13)</th></tr>
            <tr><td><strong>1의 보수</strong></td><td>모든 비트를 <strong>반전</strong>(0↔1)</td><td>00001101 → 11110010</td></tr>
            <tr><td><strong>2의 보수</strong></td><td><strong>1의 보수 + 1</strong></td><td>11110010 + 1 → 11110011</td></tr>
          </table>
          <pre>{`-13을 8비트 2의 보수로 표현하기
  +13           : 0000 1101
  1의 보수(반전) : 1111 0010
  +1            : 1111 0011   ← -13
검산: 0000 1101 + 1111 0011 = 1 0000 0000
     (9번째 자리올림은 버림 → 결과 0. 13 + (-13) = 0 확인)`}</pre>

          <h3>3-2. 부호 비트와 표현 범위</h3>
          <p>2의 보수 체계에서 <strong>최상위 비트(MSB)는 부호 비트</strong>다 — 0이면 양수, 1이면 음수.
          n비트로 표현할 수 있는 정수 범위는 <strong>-2ⁿ⁻¹ ~ 2ⁿ⁻¹-1</strong>이다
          (음수가 양수보다 하나 더 많다).</p>
          <table>
            <tr><th>비트 수</th><th>표현 범위</th></tr>
            <tr><td>4비트</td><td>-8 ~ 7</td></tr>
            <tr><td><strong>8비트</strong></td><td><strong>-128 ~ 127</strong></td></tr>
            <tr><td>16비트</td><td>-32,768 ~ 32,767</td></tr>
            <tr><td>32비트</td><td>-2,147,483,648 ~ 2,147,483,647</td></tr>
          </table>

          <h3>3-3. 왜 2의 보수를 쓰는가</h3>
          <ul>
            <li><strong>0이 하나뿐이다</strong> — 부호-절댓값·1의 보수 방식은 +0과 -0이 따로 존재하지만, 2의 보수는 0이 유일하다.</li>
            <li><strong>덧셈 회로 하나로 뺄셈까지 처리</strong> — A - B를 A + (B의 2의 보수)로 계산하고 자리올림만 버리면 된다.</li>
            <li>같은 이유로 표현 범위가 1의 보수보다 <strong>1개 더 넓다</strong> (-128 vs -127).</li>
          </ul>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            2의 보수 비트열을 10진수로 되돌릴 때: MSB가 1이면 <strong>다시 2의 보수를 취한 값에 음수 부호</strong>를 붙인다.
            예) 11110011 → 반전 00001100 + 1 = 00001101 = 13 → 답 <strong>-13</strong>.
          </div>
        </section>

        {/* ===================== 4. 비트 연산 ===================== */}
        <section id="bitwise">
          <h2>4. 비트 연산 — AND · OR · XOR · NOT · 시프트</h2>
          <p class="sub">비트 단위 연산 결과를 직접 계산하게 하는 문제가 매회 나온다. 특히 XOR과 시프트 연산은 단골.</p>

          <h3>4-1. 진리표</h3>
          <table>
            <tr><th>A</th><th>B</th><th>A & B (AND)</th><th>A | B (OR)</th><th>A ^ B (XOR)</th></tr>
            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>1</td><td>1</td><td><strong>0</strong></td></tr>
          </table>
          <ul>
            <li><strong>AND(&)</strong> — 둘 다 1일 때만 1. 특정 비트만 남기는 <strong>마스크</strong>에 사용.</li>
            <li><strong>OR(|)</strong> — 하나라도 1이면 1. 특정 비트를 <strong>켤 때</strong> 사용.</li>
            <li><strong>XOR(^)</strong> — 두 비트가 <strong>다르면 1, 같으면 0</strong>. 같은 값을 두 번 XOR하면 원래 값으로 돌아온다
              (A ^ B ^ B = A) — 값 교환(swap)·간단한 암호화에 응용되는 <strong>실기 최단골</strong>.</li>
            <li><strong>NOT(~)</strong> — 모든 비트 반전. C·Java·Python에서 <strong>~x = -x - 1</strong> (예: ~5 = -6).</li>
          </ul>

          <h3>4-2. 예시 계산 (11과 6)</h3>
          <pre>{`  1011 (11)          1011 (11)          1011 (11)
& 0110 ( 6)        | 0110 ( 6)        ^ 0110 ( 6)
------------       ------------       ------------
  0010 ( 2)          1111 (15)          1101 (13)`}</pre>

          <h3>4-3. 시프트 연산 (계산 단골)</h3>
          <p>왼쪽 시프트 {'<<'} 는 비트를 왼쪽으로 밀고 오른쪽을 0으로 채운다 — <strong>1비트마다 ×2</strong>.
          오른쪽 시프트 {'>>'} 는 비트를 오른쪽으로 민다 — <strong>1비트마다 ÷2 (몫)</strong>.</p>
          <pre>{`x << n  →  x × 2ⁿ        x >> n  →  x ÷ 2ⁿ (정수 몫)

 5 << 1 = 10      (0101 → 1010)
 5 << 3 = 40      (5 × 2³ = 5 × 8)
20 >> 2 =  5      (10100 → 00101)
13 >> 2 =  3      (13 ÷ 4의 몫)
-8 >> 1 = -4      (산술 시프트: 부호 비트 유지)`}</pre>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            음수의 오른쪽 시프트는 부호 비트를 유지하는 <strong>산술 시프트</strong>가 기본이다(C·Java의 {'>>'}).
            Java에는 0으로 채우는 논리 시프트 {'>>>'} 가 따로 있다.
          </div>
        </section>

        {/* ===================== 5. 데이터 표현 ===================== */}
        <section id="datarep">
          <h2>5. 데이터 표현 — 소수점 · BCD · 문자 코드</h2>
          <p class="sub">수치는 고정/부동 소수점, 10진 숫자는 BCD, 문자는 ASCII·유니코드로 표현한다. ASCII 값 계산은 실기 단골.</p>

          <h3>5-1. 고정 소수점과 부동 소수점</h3>
          <table>
            <tr><th>방식</th><th>구조</th><th>특징</th></tr>
            <tr>
              <td><strong>고정 소수점</strong><br/>(Fixed Point)</td>
              <td>부호 비트 + 정수부 (소수점 위치 고정)</td>
              <td>정수 표현에 사용. 연산이 빠르지만 표현 범위가 좁다</td>
            </tr>
            <tr>
              <td><strong>부동 소수점</strong><br/>(Floating Point)</td>
              <td><strong>부호 - 지수 - 가수</strong> (IEEE 754)</td>
              <td>매우 크거나 작은 실수 표현. 범위가 넓지만 오차(근사값) 발생 가능</td>
            </tr>
          </table>
          <p>IEEE 754 구조 — 단정도(float, 32비트): 부호 1 + 지수 8 + 가수 23 /
          배정도(double, 64비트): 부호 1 + 지수 11 + 가수 52.</p>

          <h3>5-2. BCD 코드 (2진화 10진 코드)</h3>
          <p>10진수의 <strong>각 자리 숫자를 4비트 2진수로 따로</strong> 표현하는 코드.
          2진수 변환과 혼동하지 말 것 — BCD는 자리별 변환이다.</p>
          <pre>{`10진수 259의 BCD 표현
  2    5    9
0010 0101 1001   → 259(BCD) = 0010 0101 1001
(참고: 259를 순수 2진수로 바꾸면 100000011₂ — 서로 다르다)`}</pre>

          <h3>5-3. 문자 표현 — ASCII (단골 값 암기)</h3>
          <table>
            <tr><th>문자</th><th>10진</th><th>16진</th><th>비고</th></tr>
            <tr><td><strong>'0'</strong></td><td><strong>48</strong></td><td>0x30</td><td>'0'~'9' = 48~57. 문자 → 숫자: c - '0'</td></tr>
            <tr><td><strong>'A'</strong></td><td><strong>65</strong></td><td>0x41</td><td>'A'~'Z' = 65~90</td></tr>
            <tr><td><strong>'a'</strong></td><td><strong>97</strong></td><td>0x61</td><td>'a'~'z' = 97~122</td></tr>
          </table>
          <div class="box">
            <span class="tag-line">핵심</span><br/>
            대문자와 소문자의 차이는 <strong>32</strong> ('a' - 'A' = 97 - 65).
            "'C' + 2의 값은?" → 67 + 2 = 69 = 'E' 처럼 <strong>문자를 정수로 계산</strong>하는 문제가 자주 나온다.
          </div>

          <h3>5-4. 유니코드와 UTF-8</h3>
          <ul>
            <li><strong>유니코드(Unicode)</strong> — 전 세계 모든 문자에 고유한 번호(코드 포인트)를 부여한 표준.</li>
            <li><strong>UTF-8</strong> — 유니코드를 <strong>1~4바이트 가변 길이</strong>로 인코딩.
              ASCII 문자는 1바이트(ASCII와 호환), <strong>한글은 3바이트</strong>로 표현된다.</li>
          </ul>
        </section>

        {/* ===================== 6. 언어별 진수 표기 ===================== */}
        <section id="lang">
          <h2>6. 언어별 진수 표기와 출력 — C · Java · Python</h2>
          <p class="sub">코드에 적힌 진수 리터럴을 10진수로 읽고, 출력 결과를 예측하는 문제가 나온다. 접두어와 출력 함수 표를 통째로 기억하자.</p>

          <h3>6-1. 진수 표기(리터럴) 비교</h3>
          <table>
            <tr><th>언어</th><th>2진수</th><th>8진수</th><th>16진수</th></tr>
            <tr><td><strong>C</strong></td><td>(C23부터 0b)</td><td><strong>0</strong> 접두 (예: 032)</td><td><strong>0x</strong> 접두 (예: 0x1A)</td></tr>
            <tr><td><strong>Java</strong></td><td><strong>0b</strong> (예: 0b1010)</td><td>0 접두</td><td><strong>0x</strong></td></tr>
            <tr><td><strong>Python</strong></td><td><strong>0b</strong></td><td><strong>0o</strong> (예: 0o17)</td><td><strong>0x</strong></td></tr>
          </table>

          <h3>6-2. C — printf 서식 문자</h3>
          <p>%d 10진, %o 8진, %x 16진(소문자), %X 16진(대문자).</p>
          <pre>{`#include <stdio.h>
int main(void) {
    int a = 0x1A;   // 16진수 → 26
    int b = 032;    // 0으로 시작 = 8진수 → 26
    printf("%d %o %x %X\\n", a, a, a, a);
    return 0;
}
// 출력: 26 32 1a 1A`}</pre>

          <h3>6-3. Java — 리터럴과 변환 메서드</h3>
          <pre>{`int a = 0b1010;   // 2진수 → 10
int b = 0x1F;     // 16진수 → 31
System.out.println(Integer.toBinaryString(10)); // 1010
System.out.println(Integer.toOctalString(26));  // 32
System.out.println(Integer.toHexString(255));   // ff`}</pre>

          <h3>6-4. Python — bin() / oct() / hex() / format</h3>
          <p>내장 함수는 접두어(0b/0o/0x)를 붙여 <strong>문자열</strong>을 돌려주고,
          format 서식(b/o/x/X)은 접두어 없이 숫자만 만든다.</p>
          <pre>{`a = 0b1010            # 10
b = 0o17              # 15
c = 0x1f              # 31
print(bin(10))        # 0b1010
print(oct(26))        # 0o32
print(hex(255))       # 0xff
print(format(255, 'X'))  # FF
print(f"{10:b}")      # 1010`}</pre>
          <div class="box">
            <span class="tag-line">주의</span><br/>
            C에서 <strong>0으로 시작하는 정수는 8진수</strong>다. int x = 010; 은 10이 아니라 <strong>8</strong> —
            출력 결과 예측 문제의 단골 함정이다.
          </div>
        </section>

        {/* ===================== 7. 실전 문제 ===================== */}
        <section id="quiz">
          <h2>7. 실전 문제 (정보처리기사 실기 대비)</h2>
          <p class="sub">모두 실기 기출 유형의 계산 문제다. 반드시 손으로 먼저 계산한 뒤 정답을 확인하자.</p>

          <div class="quiz-item">
            <span class="q-num">문제 1</span>
            <p class="q-body">2진수 10110₂을 10진수로 변환하시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>22<br/>
                <span class="label">해설: </span>자릿값의 합으로 계산한다.
                1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰ = 16 + 0 + 4 + 2 + 0 = 22.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 2</span>
            <p class="q-body">10진수 200을 16진수로 변환하시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>C8₁₆<br/>
                <span class="label">해설: </span>200 ÷ 16 = 12 … 나머지 8, 12 ÷ 16 = 0 … 나머지 12.
                나머지를 거꾸로 읽으면 12, 8 → 12는 C이므로 C8. 검산: 12×16 + 8 = 192 + 8 = 200.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 3</span>
            <p class="q-body">8진수 745₈을 16진수로 변환하시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>1E5₁₆<br/>
                <span class="label">해설: </span>2진수를 거친다. 745₈ → 111 100 101₂.
                오른쪽부터 4비트씩 다시 묶으면 0001 1110 0101 → 1, E(14), 5 → 1E5.
                검산: 745₈ = 485, 1E5₁₆ = 256 + 224 + 5 = 485.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 4</span>
            <p class="q-body">-25를 8비트 2의 보수로 표현하시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>11100111₂<br/>
                <span class="label">해설: </span>+25 = 00011001. 1의 보수(반전) = 11100110, +1 = 11100111.
                검산: 00011001 + 11100111 = 1 00000000 → 자리올림 버리면 0.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 5</span>
            <p class="q-body">2진수 1011₂과 0110₂의 XOR(^) 연산 결과를 2진수와 10진수로 각각 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>1101₂ (= 13)<br/>
                <span class="label">해설: </span>자리별로 다르면 1, 같으면 0.
                1^0=1, 0^1=1, 1^1=0, 1^0=1 → 1101. 10진 검산: 11 XOR 6 = 13.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 6</span>
            <p class="q-body">다음 두 시프트 연산의 결과를 각각 10진수로 쓰시오.</p>
            <pre>{`(1) 5 << 3
(2) 13 >> 2`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>(1) 40, (2) 3<br/>
                <span class="label">해설: </span>왼쪽 시프트는 ×2ⁿ, 오른쪽 시프트는 ÷2ⁿ의 몫.
                (1) 5 × 2³ = 5 × 8 = 40. (2) 13 ÷ 4 = 3 … 1 → 몫 3 (1101₂ → 0011₂).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 7</span>
            <p class="q-body">ASCII 코드에서 문자 'C'와 문자 '5'의 10진수 값을 각각 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>'C' = 67, '5' = 53<br/>
                <span class="label">해설: </span>'A' = 65이므로 'C' = 65 + 2 = 67.
                '0' = 48이므로 '5' = 48 + 5 = 53.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 8</span>
            <p class="q-body">다음 C 프로그램의 출력 결과를 쓰시오.</p>
            <pre>{`#include <stdio.h>
int main(void) {
    int a = 255;
    printf("%d %o %x", a, a, a);
    return 0;
}`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>255 377 ff<br/>
                <span class="label">해설: </span>%d는 10진(255), %o는 8진, %x는 16진(소문자).
                255 = 11111111₂ → 3비트 묶음 11 111 111 = 377₈, 4비트 묶음 1111 1111 = FF₁₆(소문자 ff).
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 9</span>
            <p class="q-body">다음 Python 코드의 출력 결과를 쓰시오.</p>
            <pre>{`print(bin(10), hex(255))`}</pre>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>0b1010 0xff<br/>
                <span class="label">해설: </span>bin()·hex()는 접두어가 붙은 문자열을 반환한다.
                10 = 1010₂ → '0b1010', 255 = FF₁₆ → '0xff' (소문자).
                print에 쉼표로 넘기면 공백으로 구분되어 한 줄에 출력된다.
              </div>
            </details>
          </div>

          <div class="quiz-item">
            <span class="q-num">문제 10</span>
            <p class="q-body">8비트 2의 보수 체계에서 (1) 표현할 수 있는 정수의 범위와
            (2) 비트열 11110110₂을 10진수로 해석한 값을 쓰시오.</p>
            <details>
              <summary>정답 보기</summary>
              <div class="answer">
                <span class="label">정답: </span>(1) -128 ~ 127, (2) -10<br/>
                <span class="label">해설: </span>(1) n비트 범위는 -2ⁿ⁻¹ ~ 2ⁿ⁻¹-1 → -2⁷ ~ 2⁷-1 = -128 ~ 127.
                (2) MSB가 1이므로 음수. 다시 2의 보수를 취하면 00001001 + 1 = 00001010 = 10 → -10.
                검산: 11110110₂ = 246, 246 - 256 = -10.
              </div>
            </details>
          </div>

          <hr class="divider" />
          <h3>더 공부할 키워드</h3>
          <p>
            <span class="kw">그레이 코드</span>
            <span class="kw">패리티 비트</span>
            <span class="kw">해밍 코드</span>
            <span class="kw">3초과 코드</span>
            <span class="kw">EBCDIC</span>
            <span class="kw">IEEE 754 바이어스 지수</span>
            <span class="kw">오버플로 / 언더플로</span>
            <span class="kw">엔디언(Big/Little Endian)</span>
            <span class="kw">비트 마스킹</span>
            <span class="kw">Java {'>>>'} 논리 시프트</span>
          </p>
        </section>

        <footer>프로그래밍 기본 — 진수와 데이터 표현 학습 문서 · 2026-09</footer>
      </div>
    )
  },
})
