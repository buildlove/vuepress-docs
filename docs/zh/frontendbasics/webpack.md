# webpack

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
