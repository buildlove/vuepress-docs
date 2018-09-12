# webpack

## webpack.config.js

## 文件处理

### vue
```
{
    test: /\.vue$/,
    loader: 'vue-loader'
}
```
vue-loader 处理后缀为 vue 的文件

### css
```
  {
      test: /\.css$/,
      use: [
          'style-loader',
          'css-loader'
      ]
  }
```
style-loader 处理 style 标签内的 css
css-loader 处理后缀为 css 的文件

### 图片
{
    test: /\.(gif|jpg|jpeg|png|svg)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 1024,
            name: '[name]-aaa.[ext]'
        }
    }]
}
url-loader 处理图片 url

### cross-env
npm i cross-env --save
linux上命令行设置环境变量 NODE_ENV=production
window上命令行设置环境变量 set NODE_ENV=production
部署的时候更改以上很麻烦 所以使用 cross-env 解决这个问题
package.json
"build": "cross-env NODE_ENV=production webpack --config webpack.config.js"
"dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"

### webpack.dev.server
npm i webpack.dev.server --save (这行命令一定要敲)

配置开发环境
if(isDev){
    config.devTool = ''
    config.devSever = {
        port: 8000,      // 启动开发环境监听端口
        host: '0.0.0.0', // 可使用 127.0.0 来访问也可以用别的电脑/手机连接访问
        overlay: {       // 访问的时候可以看见调试错误
            errors: true
        },
        open: true,      // 在启动 webpack.dev.server 的时候打开浏览器
        hot: true        // 热更新
    }
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin() //减少不需要信息展示的问题
    )
}

### 入口 html 与 html-webpack-plugin
npm i html-webpack-plugin
配置完开发环境没有html入口是跑不起来的
plugins: [
    // webpack 在打包过程中以及在页面上去判断环境和在js里引用等
    new webpack.DefinePlugin({
        'proccess.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin()
],

### 根目录下创建 .babelrc 和 postcss.config.js 文件
npm i postcss-loader autoprefixer babel-loader babel-core
npm i babel-preset-env babel-plugin-transform-vue-jsx
npm i babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx

### vue-router 页面路由
npm i vue-router

### 别名
resolve: {
  extensions: ['.js', '.vue', '.json'], // 当引入文件的时候不用添加后缀
  alias: {                              // 引入文件的时候可以用 @ 代表根目录下的 src
    '@': path.join(__dirname, 'src'),
  }
},


### entry 和 output

入口，当entry对象里有多个键值对时，有多个入口

  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js' // 分别打包为 bundle1.js 和 bundle2.js
  }

### module

- rules(数组) 按规则打包数据

  module: { // 打包 jsx react文件
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // 排除模块
        use: {
          loader: 'babel-loader', // 编码转换
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/, // 打包 css 文件以及打包相关插件
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg)$/, // 打包图片
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }


## 配置less

安装插件

    npm install less less-loader style-loader --save

在webpack.conf.js或者webpack.base.conf.js里面添加

    {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
    }


less中引用全局less文件

    <style lang="less">
        @import "../../../assets/css/index.less";
    </style>

## webpack 打包 ejs 多页面应用

​ejs-loader 的 github 主页上说它时依赖 underscore 的

思路是把 ejs 拼接成字符串

首先干掉 ejs 内的 include 标签  "<% include ../public/public.ejs %>".replace(/\<\% include .* \%\>/, "")

然后自己来拼接html字符串

let head = fs.readFileSync(path.resolve("./head.ejs"), 'utf-8')
let topNav = fs.readFileSync(path.resolve("./body.ejs"), 'utf-8')
let sideMenu = fs.readFileSync(path.resolve("./body.ejs"), 'utf-8')
let content = fs.readFileSync(path.resolve("./body.ejs"), 'utf-8')
let footer = fs.readFileSync(path.resolve("./body.ejs"), 'utf-8')

获取所有 ejs 文件内的字符串

let Obj = {
  head:head,
  topNav:topNav ,
  sideMenu :sideMenu ,
  content :content ,
  footer:footer,
}

拼凑成字符串

let html=`
  <%= header %>
  <div id="wrapper">
    <%= topNav %>
    <%= sideMenu %>
    <%= content %>
  </div>
  <%= footer %>
`

得到完整的html字符串
let template = _.template(html, obj)





