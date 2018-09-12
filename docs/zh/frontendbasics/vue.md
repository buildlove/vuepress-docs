## vue的基础问题

## 挂载点模板和实例

```
    <div id="root"></div>

    <script>
        new Vue({
            el: "#root",
            template: "<div>{{msg}}</div>",
            data: {
                msg: "hello world",
                content: ""
            },
            methods: {
                handleClick: function(){
                    this.content = "word"
                }
            }
        })
    </script>
```

## 插值表达式

    <h1>{{number}}</h1>
    <h1 v-text="number"></h1>
    <h1 v-html="number"></h1> v-html 会转译html
    <div v-on:click="handleClick">{{content}}</div>
    <div @click="handleClick">{{content}}</div>
    v-on === @
    v-bind === :

## 属性绑定和双向绑定

```
    <div :title="title">hello world</div> v-bind或者: 属性绑定
    <input type="text" v-model="content"> v-model: 双向绑定 
    <div>{{content}}</div>
    <script>
        new Vue({
            el: "#root",
            data: {
                title: "this is hello world",
                content: "this is content"
            }
        })
    </script>
```

## 计算属性和监听器

    <div id="root">
        姓:<input v-model="firstName">
        名:<input v-model="lastName">
        /*fullName计算一次之后会缓存起来, 如果firstName和lastName的值不变fullName不会重新计算。*/
        <div>{{fullName}}</div>
        /*watch监听fullName的改变并计数*/
        <div>{{count}}</div>
    </div>

    <script>
        new Vue({
            el: "#root",
            data: {
                firstName: '',
                lastName: '',
                count: 0
            },
            computed: {
                fullName: function(){
                    return this.firstName + " " + this.lastName
                }
            },
            watch: {
                fullName: function(){
                    this.count ++
                }
            }
        })
    </script>

## v-if, v-show, v-for 指令

    使用 v-if 时销毁节点和创建节点
    使用 v-show 只是在节点上添加 display:none/display:block 属性
    vue 2.x 版本之后 :key只支持 number 和 string类型之类的 primitive 类型
    <div id="root">
        <div v-if="show">hello world</div>
        <button @click="handleClick">toggle</button>
        <ul>
            <li v-for="(item, index) of list" :key="item">{{index}}</li>
        </ul>
    </div>

    <script>
        new Vue({
            el: "#root",
            data: {
                show: true,
                list: [1,2,3]
            },
            methods:{
                handleClick: function(){
                    this.show = !this.show
                }
            }
        })
    </script>

    ## todolist

    // 数据双向绑定给inputValue, 点击提交按钮时push到list数组里
    <div id="root">
        <div>
            <input type="text" v-model="inputValue">
            <button @click="handleSubmit">提交</button>
        </div>
        <ul>
            <li v-for="(item, index) of list" :key="item">{{item}}</li>
        </ul>
    </div>

    <script>
        new Vue({
            el: "#root",
            data: {
                inputValue: '',
                list: []
            },
            methods: {
                handleSubmit: function(){
                    this.list.push(this.inputValue)
                    this.inputValue = ''
                }
            }
        })
    </script>

## todolist 组件拆分

### 了解全局组件和局部组件

    // 全局组件
    // Vue.component('todo-item', {
    //     template: '<li>item</li>'
    // })

    // 局部组件    
    var TodoItem = {
        template: '<li>item</li>'
    }
    new Vue({
        el: "#root",
        data: {
            inputValue: '',
            list: []
        },
        components: {//全局组件不用定义components
            'todo-item': TodoItem
        },
        methods: {
            handleSubmit: function(){
                this.list.push(this.inputValue)
                this.inputValue = ''
            }
        }
    })

### 往组件内传值

    // 全局组件使用 props 属性接收 content 传值, content 在标签内绑定 v-for 遍历的值 item。

    <div id="root">
        <div>
            <input type="text" v-model="inputValue">
            <button @click="handleSubmit">提交</button>
        </div>
        <ul>
            <todo-item 
                v-for="(item, index) of list" 
                :key="index" 
                :content="item">
            </todo-item>
        </ul>
    </div>

    <script>
        // 全局组件
        Vue.component('todo-item', {
            props: ['content'],
            template: '<li>{{content}}</li>'
        })

        new Vue({
            el: "#root",
            data: {
                inputValue: '',
                list: []
            },
            methods: {
                handleSubmit: function(){
                    this.list.push(this.inputValue)
                    this.inputValue = ''
                }
            }
        })
    </script>

## 组件与实例之间的关系

* 每一个组件都是一个vue实例
* 如果没有template模板,程序会去找该实例的挂载点

    Vue.component('todo-item', {
        props: ['content'],
        template: '<li @click="handleClick">{{content}}</li>',
        methods: {
            handleClick: function(){
                alert('clicked')
            }
        }
    })

## todolist 删除功能

* 点击 li,通过 this.emit 从子组件传递下标值
* 在节点通过属性值 @delete="handDelete" 指定接收下标的函数为 handDelete
* 在父组件 methods 中定义 handDelete 接收下标作为参数, 删除 list 中的值

    <div id="root">
        <div>
            <input type="text" v-model="inputValue">
            <button @click="handleSubmit">提交</button>
        </div>
        <ul>
            <todo-item 
                v-for="(item, index) of list" 
                :key="index" 
                :content="item"
                :index="index"
                @delete="handleDelete"
                >
            </todo-item>
        </ul>
    </div>

    <script>

        // 全局组件
        Vue.component('todo-item', {
            props: ['content', 'index'],
            template: '<li @click="handleClick">{{content}}</li>',
            methods: {
                handleClick: function(){
                    this.$emit('delete', this.index)
                }
            }
        })

        new Vue({
            el: "#root",
            data: {
                inputValue: '',
                list: []
            },
            methods: {
                handleSubmit: function(){
                    this.list.push(this.inputValue)
                    this.inputValue = ''
                },
                handleDelete: function (index) {
                    this.list.splice(index, 1)
                }
            }
        })
    </script>

## Vue-cli 的简介与使用


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


 