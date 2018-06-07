# 移动 web 开发于适配

## 综述

- 泡在手机端web页面(H5页面)
- 跨平台
- 基于 webview
- 告别 IE 拥抱 webkit
- 更高的适配和性能要求 

## 移动web开发适配-2常见适配方法

PC

- 960px / 1000px 居中
- 盒子模型, 定高, 定宽
- Display:inline-block

移动web

- 定高, 宽度百分比
- flex
- Media Query(媒体查询)

## 移动 web 开发与适配

Media Query(媒体查询):

```
    @media 媒体类型 and (媒体特性) and (媒体特性)...{
        /*css样式*/
    }
```
媒体类型: screen, print...      媒体特性: max-width, max-height

## 移动 web 开发与适配-3-MediaQuery-2(代码)

# rem 原理与简介

## rem原理与简介-1概述

字体单位
- 值根据 html根元素大小而定, 同样可以作为宽度, 高度等单位。
适配原理
- 将 px 替换成 rem, 动态修改 html 的 font-size 适配
兼容性
- Ios 6以上 和 android 2.1以上, 基本覆盖所有流行的手机系统

## rem原理与简介-2代码讲解

- 1rem 等于浏览器默认大小 1rem = 16px , 2rem = 32px

```
    <meta name="viewport" content="width=device-width,initial-scale=0.5,user-scalable=no">
```

## rem原理与简介-3动态修改font-size

// 获取视窗宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取视窗高度
let htmlDom = document.getElementsByTagName('html')[0];

htmlDom.style.fontSize = htmlWidth / 10 + 'px'

window.addEventListener('resize', (e)=>{
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + 'px'
})

# 采用 rem 适配页面实战

## rem 基准值的计算

## rem 数值计算与构建

## rem 与 scss 集合使用

```
    npm install node-scss -g 安装依赖模块
    node-scss a.scss b.css   编译a.scss到b.css文件中

    .hello {
        width: px2rem(100px);
        height: px2rem(100px);
        &.b {
            width: px2rem(50px);
            height: px2rem(50px);
        }
    }

    @function px2rem($px){
        $rem : 37.5px;
        @return ($px / $rem) + rem;
    }
```

## rem 适配实战


# 总结

- 移动 web 常见适配方案
- 全面掌握 rem 适配方法
- 通过构建, 工程化, scss 完成一个复杂页面的 rem 适配