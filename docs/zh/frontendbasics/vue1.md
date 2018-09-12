# Vue 基础

## Vue 挂载点和实例

* 引入 vue 的 cdn 
* 实例化 Vue 
* 挂载 Dom 到挂载点上  

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script src="https://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script>
    </head>
    <body>
        <div id="app"></div>
        <script>
            new Vue ({
                el: '#app',
                template: "<div>{{msg}}</div>",
                data: {
                    msg: "hello world"
                },

            })
        </script>
    </body>
</html>
```

## 插值表达式

1. "<div>{{msg}}</div>" 直接在 {{}} 中插入值是最常见的写法。

2. "<h1 v-text="msg"></h1>" v-text 会对 msg 进行解析。

3. "<h1 v-html="<div>number<div>"></h1>" v-html 会对字符串进行 html 转译然后解析。

## 常用 vue 属性 

### 点击事件 :click

    <div v-on:click="handleClick">{{}}</div>
    v-on:click 简写为 :click


    
    <div @click="handleClick">{{content}}</div>
    v-on === @
    v-bind === :