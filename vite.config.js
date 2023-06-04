import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sentryVitePlugin } from '@sentry/vite-plugin'
// https://vitejs.dev/config/


export default ({}) => {
  process.env = {...process.env, ...loadEnv( process.cwd(), "")};

  return defineConfig({
  
  build: {
    sourcemap: true,
    outDir: 'distVite',
  },
  plugins: [vue(),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG,
      project: process.env.VITE_SENTRY_PROJECT,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
      release: {name: "vite1"},
      sourcemaps: {assets: "distVite/**"}
      
    })
  
  ],
})
}
