
# vue对比其他框架

> [参考资料](https://cn.vuejs.org/v2/guide/comparison.html#React)

## React和Vue的相似之处
- 使用Virtual DOM
- 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。
- 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。

## React和Vue的不同之处
- 在 React 中，一切都是 JavaScript，所有的组件的渲染功能都依靠 JSX, Vue支持 JSX , 但是默认推荐基于 HTML 的模板
- React 中是通过 CSS-in-JS 的方案实现的, Vue 设置样式的默认方法是单文件组件里类似 style 的标签。
- Vue 的路由库和状态管理库都是由官方维护支持且与核心库同步更新的, React 则是选择把这些问题交给社区维护
- Vue 提供了 Vue-cli 脚手架，能让你非常容易地构建项目，包含了 Webpack，Browserify，甚至 no build system。React 在这方面也提供了 create-react-app
但是现在还存在一些局限性：
  
	1.它不允许在项目生成时进行任何配置，而 Vue 支持 Yeoman-like 定制。
  
	2.它只提供一个构建单页面应用的单一模板，而 Vue 提供了各种用途的模板。
  
	3.它不能用用户自建的模板构建项目，而自建模板对企业环境下预先建立协议是特别有用的。
  
- React 学习需要知道 JSX 和 ES2015。
  Vue不需学 JSX，ES2015 以及构建系统。

## Angular与vue的不同之处

- 在 API 与设计两方面上 Vue.js 都比 AngularJS 简单得多
- AngularJS 使用双向绑定，Vue 在不同组件间强制使用单向数据流。
- 在 Vue 中指令和组件分得更清晰。指令只封装 DOM 操作，而组件代表一个自给自足的独立单元——有自己的视图和数据逻辑。
  在 AngularJS 中，每件事都由指令来做，而组件只是一种特殊的指令。
- AngularJS 使用脏检查循环机制。
  Vue 使用基于依赖追踪的观察系统并且异步队列更新。

## Angular2与Vue的不同之处

- Angular 事实上必须用 TypeScript 来开发，因为它的文档和学习资源几乎全部是面向 TS 的。
  Vue 和 TS 的整合可能不如 Angular 那么深入
- 一个包含了 Vuex + Vue Router 的 Vue 项目 (gzip 之后 30kB) 
  相比使用了这些优化的 angular-cli 生成的默认项目尺寸 (~130kB) 还是要小得多。
- Vue 相比于 Angular 更加灵活，Vue 官方提供了构建工具来协助你构建项目，但它并不限制你去如何组织你的应用代码。
- Angular 的 API 面积比起 Vue 要大得多
