# 前端基础

## 前端模块化标准

目前最流行的三种模块加载标准是 Commonjs / AMD / CMD

### CommonJs

commonjs 简单运用步骤

1.一个文件一个模块, 文件内定义一个函数a
  
2.把对象 { a : a } 赋值给 module.exports 暴露出去。
  
3.使用 let moduleA = require("libs/a") 来接收这个模块
  
4.moduleA.a() 来执行这个函数

5.commonjs 标准在浏览器端用不了
  
> 如果以上你觉得很熟悉的话, 证明你使用过 node , node 使用 commonjs 加载机制

### AMD

因为浏览器是同步加载 js 的, 当你有大量的插件需要引入的时候会阻塞页面渲染导致页面造成不必要的响应时间

AMD 加载 js 的好处

  1. 异步加载 js , 减少页面失去响应的时间。
  
  2. 可以对链接实时添加时间戳, 防止开发过程中 js 加载后被缓存(无论怎么改代码都报错,需要强制清空浏览器缓存)  
  
> 实现前端 AMD 方式加载 js 的前端插件是 require.js

以下是 require.js 的配置/自定义模块/以及使用的简单例子(以下例子纯属手打, 如果有错误, 无视就好)

[demo](https://github.com/buildlove/SkillTree/blob/master/require-demo.js)

### CMD

> 实现前端 CMD 方式加载 js 的前端插件是 sea.js

1. 目测和 require.js 写法上差不太多, 偷个懒不写例子了

2. cmd 前端插件是中国人写的, 叫 sea.js

3. sea.js 加载方式也是异步加载(加载时会去把模块变为字符串去找一遍依赖, 找到后先加载)

4. 使用 factory 的方式定义模块, 可以在每一个页面配置一个 config.js 文件, sea.js 会自动合并配置文件

5. [参考资料](http://tinyambition.com/HelloSea.js/index.html)看到一个有意思的黑科技, 把 node 模块转化为 CMD 或者 AMD 的加载方式让浏览器加载

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
