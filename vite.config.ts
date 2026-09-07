import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// GitHub Pages(하위 경로 배포)에서도 동작하도록 상대 경로 사용
export default defineConfig({
  base: './',
  plugins: [vueJsx()],
})
