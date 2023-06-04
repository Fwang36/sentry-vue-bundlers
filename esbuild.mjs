import * as esbuild from 'esbuild'
import vuePlugin from 'esbuild-plugin-vue3'
import { sentryEsbuildPlugin } from '@sentry/esbuild-plugin'
import 'dotenv/config'

await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle:true,
  format:'esm',
  minify: true,
  sourcemap: true,
  outdir: "distEsbuild",
  define: {
    "import.meta.env.VITE_SENTRY_DSN": JSON.stringify(process.env.VITE_SENTRY_DSN)
  },
  plugins: [vuePlugin({
    generateHTML: {
        sourceFile: "index.html",
        pathPrefix: "",

    }  
  }),
  sentryEsbuildPlugin({
    org: process.env.VITE_SENTRY_ORG,
    project: process.env.VITE_SENTRY_PROJECT,
    authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    release: {name: "esbuild1"},
    sourcemaps: {assets: "distEsbuild/**"}
    
  }),
]
})