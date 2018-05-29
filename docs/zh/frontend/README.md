
# 前端基础

## 前端模块化标准

熟悉模块加载标准之后

1. 浏览器 html 文本插入非常多 script 标签时，异步加载这些标签，使页面响应速度变快。

2. 管理代码拆分，前端模块化/工程化，便于代码的编写和维护。

3. 更快的看懂一个新的项目。

目前最流行的三种模块加载标准是 Commonjs / AMD / CMD

### CommonJs

commonjs 简单运用步骤

1.一个文件一个模块, 文件内定义一个函数a
  
2.把对象 { a : a } 赋值给 module.exports 暴露出去。
  
3.使用 let moduleA = require("libs/a") 来接收这个模块
  
4.moduleA.a() 来执行这个函数

5.commonjs 标准在浏览器端用不了
  
> node 使用 commonjs 加载机制

### AMD

浏览器是同步加载 js 的, 当大量的 script标签同步引入的时候会阻塞页面渲染

AMD 加载 js 的好处

  1. 异步加载 script 标签, 减少页面失去响应的时间。
  
  2. 实时添加时间戳, 防止开发过程中 js 加载后被缓存(无论怎么改代码都报错,需要强制清空浏览器缓存)。
 
  3. 前端模块化, 便于编写和维护。 
  
> 实现前端 AMD 方式加载 js 的前端插件是 require.js

以下是 require.js 的配置 / 自定义模块 / 以及使用的简单例子。

  html中引用require.js以及配置

    <script type="text/javascript" src="javascripts/require.js"></script>
    <script>
      require.config({
        // 给每一个加载的js链接之后添加时间戳,防止插件被缓存。
       urlArgs: "v=" + (new Date()).getTime()
       waitSeconds: 0,
        paths: {
            'jquery': 'javascripts/jquery.min',
           'angular': 'javascripts/angular.min',
            'myjs': 'javascripts/myjs'
       },
        shim: {
            'jquery':{
                exports: ['jquery']
            },
            'angular':{
               deps : ["jquery"]//依赖jquery
           },
           'myjs':{
               deps : ["jquery", "angular"]//依赖jquery和angular
           }
       }
      })
    <script>



  自定义模块myjs

    define("initMapControll",[
      "jquery",
      "angular"
    ],  function($,angular){
      function run{
       return "AMD"
     }
      module.export = {
       run: run
     }
    })

  自定义模块的使用

    require( ["myjs"], function(myjs) {myjs.run()})

### CMD

> 实现前端 CMD 方式加载 js 的前端插件是 sea.js, 是中国人写的。

1. 和 require.js 写法上差不多。

2. sea.js 加载方式也是异步加载(加载时会去把模块变为字符串去找一遍依赖, 找到后先加载)。

3. 使用 factory 的方式定义模块, 可以在每一个页面配置一个 config.js 文件, sea.js 会自动合并配置文件。

4. [参考资料](http://tinyambition.com/HelloSea.js/index.html)看到一个有意思的黑科技, 把 node 模块转化为 CMD 或者 AMD 的加载方式让浏览器加载。

```
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('backbone', ['jquery', 'underscore'], function (jQuery, _) {
      return factory(jQuery, _);
    });
  } else if (typeof exports === 'object') {
  // Node.js
    module.exports = factory(require('jquery'), require('underscore'));
  } else {
    // Browser globals
    root.Backbone = factory(root.jQuery, root._);
  }
}(this, function (jQuery, _) {
  var Backbone = {};
  // Backbone code that depends on jQuery and _
  return Backbone;

}));
```




