# vue的基础问题

## 灵活 - 渐进式

### 声明式渲染

### 组件系统

### 客户端路由

### 大规模状态管理

### 构建工具

## 高效

### 16kb min+gzip 的运行大小

### 超快的虚拟DOM

### 最省心的优化

## vue基础指令介绍

- 指令的使用: v-model v-text v-show v-if v-bind v-for -v-on

- 过滤器: filter

- 组件: Component

## vue引用jquery模块

  > 修改webpack.base.conf.js文件

  ```
    const webpack = require('webpack')引入webpack
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
          'jquery': 'jquery'
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
      ],

      import $ from 'jquery'
  ```

## ref操作dom节点

    在html标签内使用ref="aaa"。
    在js中使用this.$refs.aaa来找到html节点并操作。
    
## 路由懒加载

  ```
    require.ensure
    const weibo = r => require.ensure([], () => r(require('@/components/weibo')), 'weibo')
    export default new Router({
        routes: [{
            path: '/weibo',
            name: 'weibo',
            component: weibo
        }]
    }
  ```  

## 引入element-ui

  安装element-ui

    npm install element-ui --save 

  在main文件中引入

    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'
    Vue.use(ElementUI)

  注意css文件路径  

## 注释掉 Eslint  

  检错功能老是检测语法错误，一个空格都不能错，错了就报红,在config/index.js

    Dev：{
      useEslint: false//这个配置改为false
    } 

    const createLintingRule = () => ({
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
      }
    })
    ...(config.dev.useEslint ? [createLintingRule()] : []),
 

## 解决跨域

### node配置路由
  
  给所有请求新增请求头

  ```
    app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,
        Authorization,\'Origin\',Accept,X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('X-Powered-By', ' 3.2.1');
        res.header('Content-Type', 'application/json;charset=utf-8');
        if (req.method === 'OPTIONS') {
            res.sendStatus(200);
        } else {
            next();
        }
    });
  ```

### vue脚手架集成配置

  ```
    proxyTable: {
      '/db': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          pathRewrite: {
          '^/db': ''
          }
      }
    }
  ```

### nginx安装配置
  
  > nginx配置


## js/css局部作用域

### css局部

  css局部引用在style标签中添加scoped。 
  
    <style lang="less" scoped>

### js局部

  vue组件内的html代码段编译之后每一个标签都有添加随机的id
  在使用jquery的时候通常会这么用

    $(".l-content-c:first-child")
      .addClass("selected no-border-left")

  当我在重复使用这个组件时，我只想给我当前使用的这个组件内l-content-c标签的第一个添加类名"selected no-border-left"
  我当时第一反应是给class添加随机数，最后发现vue会对每个引用组件的html标签都添加随机数。
  所以我使用了vue的内置函数，先给组件的最顶层div标签添加menuItemParent然后使用jquery

    $(this.$refs.menuItemParent).find(".l-content-c:first-child")
      .addClass("selected no-border-left")

### http

vue 已经集成和 http 插件

  // 查询参数是 {"id": 123} 的数据
  this.$http.get('data/some.json', {"id": 123}).then(function(res){
    // you code ...
  })      