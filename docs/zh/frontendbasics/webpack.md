# webpack

## webpack.config.js

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





