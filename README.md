# vue-test

> A Vue.js Admin demo

### tips
> 模拟进入不同路由 显示不同权限
> 遇到的坑：
- 在进入不同的路由后，刷新回导致异步更新的路由失效：-（
> 暂时解决办法：
- 在进入路由前 存储相应的key值，根据key 在sessionStorage中缓存不同的路由 ：-）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
