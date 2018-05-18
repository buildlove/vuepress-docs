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

## ECMAScript 6 规范的养成

webstorm 设置 (File >> setting >> Languages & Frameworks >> JavaScript >> ECMAScript 6)。

> **当你设置好es6规范之后, 使用webstorm编程, 右边的语法检错几乎没有红色和黄色的报错的时候, 恭喜你, 你已经养成了使用 es6 标准编程的习惯。**

### 1. 使用 var 作为声明变量的方法报错

  > 注意: 改的时候注意 var 的变量提升。

  es6 里面声明变量都改成 let 和 const, 如果使用 var 作为声明方法, webstorm会报错。 [let和var的区别](http://es6.ruanyifeng.com/#docs/let)。

### 2. 每行代码结束的时候不添加分号报错

  > 注意: 并不是每行代码都加分号, 函数结尾的 '}' 添加分号也会报黄色错误。

### 3. jquery选择器选择两次的情况下报错

  > 注意: 以下的 $ 每出现一次代表一次 DOM 操作, DOM 频繁操作会影响浏览器性能。

```

  $(".select").addClass("active");
  $(".select").removeClass("active");

修改为

  let select = $(".select"); //这里只选择了一次。
  select.addClass("active");
  select.removeClass("active");

```

### 4. 使用"=="的报错

  - "==" 叫相等运算符,  "===" 叫严格等于运算符。
  - 相等运算符会导致一些变量在值相等而类型不等的情况下出现问题。(具体情况自行百度, 我只能帮你到这里了)。

  需要把两个等号"=="的全部换成三个等号"==="。

### 5. 三元运算符报错

  > 这里可能只是因为es6不许你这么用。

```

  let isover = query.rowCount === -1 ? false : true; // 这种写法会有很大一条横线在整个语句下

  改为

  let isover;
  query.rowCount === -1 ? isover = false : isover = true;
	
```
  

### 6. 一个表达式里面有多个 return 报错

> 最后一个 return 下面会有很大一条白线

```

  function myfun () {
    let myNum = 1;
    if( myNum ){
    	return 2;
    }
    return 1;
  }

  改为

  function myfun () {
    let myNum = 1; 
    let result;	
    if ( myNum ){
    	result = myNum; 
    } else {
    	result = 3;
    }
    return result;
  }		

```  	

### 后面还有一些, 遇到再说吧