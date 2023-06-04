# sentry-vue-bundlers

quick app to test debug ids with sentry Javascript bundler plugins.  App outputs and uploads sourcemaps on build command.  Running the app has a throw error button to verify within Sentry.

Set up - 

1. npm install

2. add dsn to main.js

3. create .env file based on example

4. Each bundler has its own build and start command -

```
npm run buildVite
npm run startVite
```
```
npm run buildEsbuild
npm run startEsbuild
```
```
npm run buildWebpack
npm run startWebpack
```
