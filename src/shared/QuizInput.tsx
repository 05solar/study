import { defineComponent, ref, type PropType } from 'vue'

/** 채점형 퀴즈 문항 데이터 */
export interface QuizData {
  num: number | string
  question: string
  /** 보기/코드 블록 (선택) — 템플릿 리터럴 문자열 */
  code?: string
  /** 정답으로 인정할 표기들 (한글/영문/띄어쓰기 변형 포함, 첫 항목이 대표 표기) */
  answers: string[]
  /** 결과 창에 보여줄 정답 표기 (생략 시 answers[0]) */
  answerLabel?: string
  explanation: string
}

/** 대소문자·공백·문장부호 차이를 무시하고 비교하기 위한 정규화 */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/["'`’‘“”.,·、()（）\[\]{}\-_/\\|:;!?]/g, '')
}

/** 정답 입력형 퀴즈 문항.
 *  제출하면 채점되어 정답이면 해설, 오답이면 정답과 해설이 함께 표시된다. */
export const QuizInput = defineComponent({
  name: 'QuizInput',
  props: {
    num: { type: [Number, String], required: true },
    question: { type: String, required: true },
    code: { type: String, default: '' },
    answers: { type: Array as PropType<string[]>, required: true },
    answerLabel: { type: String, default: '' },
    explanation: { type: String, required: true },
  },
  setup(props) {
    const input = ref('')
    const state = ref<'idle' | 'correct' | 'wrong'>('idle')

    const check = () => {
      if (!input.value.trim() || state.value !== 'idle') return
      const user = normalize(input.value)
      const ok = props.answers.some((a) => normalize(a) === user)
      state.value = ok ? 'correct' : 'wrong'
    }
    const retry = () => {
      state.value = 'idle'
      input.value = ''
    }

    return () => (
      <div class="quiz-item">
        <span class="q-num">문제 {props.num}</span>
        <p class="q-body">{props.question}</p>
        {props.code ? <pre>{props.code}</pre> : null}

        <div class="q-answer-row">
          <input
            class="q-input"
            type="text"
            placeholder="정답을 입력하세요"
            value={input.value}
            disabled={state.value !== 'idle'}
            onInput={(e: Event) => (input.value = (e.target as HTMLInputElement).value)}
            onKeydown={(e: KeyboardEvent) => {
              if (e.key === 'Enter') check()
            }}
          />
          {state.value === 'idle' ? (
            <button class="q-btn" type="button" onClick={check}>제출</button>
          ) : (
            <button class="q-btn ghost" type="button" onClick={retry}>다시 풀기</button>
          )}
        </div>

        {state.value === 'correct' ? (
          <div class="q-result ok">
            <p class="q-verdict">✓ 정답입니다!</p>
            <p><span class="label">정답: </span>{props.answerLabel || props.answers[0]}</p>
            <p><span class="label">해설: </span>{props.explanation}</p>
          </div>
        ) : null}
        {state.value === 'wrong' ? (
          <div class="q-result no">
            <p class="q-verdict">✗ 오답입니다. 입력: {input.value}</p>
            <p><span class="label">정답: </span>{props.answerLabel || props.answers[0]}</p>
            <p><span class="label">해설: </span>{props.explanation}</p>
          </div>
        ) : null}
      </div>
    )
  },
})
