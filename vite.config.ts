import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

// auto import (vue3)
import AutoImport from 'unplugin-auto-import/vite'

// 절대 경로 2가지 선택
// 1. node:url - fileURLToPath
// 2. path - __dirname
import { fileURLToPath, URL } from 'node:url';
// import path from "path";


// Vite를 빌드 도구로 사용하지 않는 경우 test구성 파일의 속성을 사용하여 Vitest를 구성할 수 있습니다.
// import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()

      ]
    }),
    AutoImport({
      imports: ['vue']
    }),
  ],
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        // '@': path.resolve(__dirname,'./src'),
    }
  },
  // test: {
  //   globals: true,
  //   environment: 'happy-dom'
  // }
})
