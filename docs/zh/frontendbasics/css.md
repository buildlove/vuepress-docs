# css3

## 盒子模型
  content- width/height
  padding
  margin
  border
  box-shadow

### 内边距 padding

```
    padding: 1px 2px 3px 4px;
    等同于
    padding-top: 1px;
    padding-right: 2px;
    padding-bottom: 3px;
    padding-left: 4px

    padding: 1px 2px 3px;
    等同于
    padding-top: 1px;
    padding-right: 2px;
    padding-botton: 3px;
    padding-left: 2px;

    padding: 1px 2px;
    等同于
    padding-top: 1px;
    padding-right: 2px;
    padding-botton: 1px;
    padding-left: 2px; 
```


## 雪碧图

### 图片适用

1.静态图片, 不随用户信息的变化而变化
2.小图片, 图片容量比较小
3.加载量比较大

## 尺寸

> 像素值/百分比设置宽高, 最大值/最小值限制宽高

## 显示(display)

display:inline 段落元素设置为内联元素（两个div向左浮动形成一行）

display:block 此元素将显示为块级元素，此元素前后会带有换行符

display:inline-block 行内块元素(两个span分成两行)

display:none 此元素不会被显示

display:inherit 规定应该从父元素继承 display 属性的值

## 布局(position/float)
    
### 定位布局 position

position: static;   // html默认定位
//以下属性均受top/bottom/right/left影响
position: relative; // 相对定位, 相对正常位置
position: absolute; // 绝对定位, 相对于最近的已定位父元素
position: fixed;    // 相对浏览器(效果:无论是否滚动鼠标定在浏览器某处不动)
position: sticky;   //基于用户的滚动位置来定位(效果:滚动到浏览器指定位置后不动,多用于导航条)

### 浮动布局 float

> 定位布局在不同的浏览器之间可能效果不同, 所以可以使用浮动布局的尽量不要使用定位布局

在宽度足够的情况下float可以把块级元素浮动到一行

float: left;
float: right;
both: clear

### 自适应以及响应式布局

1. media query
```
<link type="text/css" rel="stylesheet" href="link.css" media="only screen and (max-width:480px)">
<style>
@media screen and (min-width: 480px){
  body{background: blue}
}
@media 媒体类型 and (媒体特性) and (媒体特性)...{
    /*css样式*/
}
</style>
```

2. bootstrap 等框架

自适应: 为了在不同分辨率下以及不同设备上让同一网页适应
响应式:

1.宽度可以自动调整。

2.尽量使用百分比少使用绝对宽度。

3.字体使用 em/rem , 或结合 scss 函数来自动转换 px为rem 。

4.使用float浮动布局。

媒体类型: screen, print...      媒体特性: max-width, max-height

list-style:none //去掉li前面的点  

table-layout:fixed //表格固定不会被里面的内容撑大

text-overflow:ellipsis //文本溢出部分显示省略号

white-space: nowrap //文本不会换行，文本会在在同一行上继续，直到遇到标签为止

### flex布局

### 瀑布流布局
动态计算 div 的 top 和 left；

### 3d 动画

```
过度属性
transform: -webkit-transtion color 3s; 过度效果
	 -webkit-transition property: color;
	 -webkit-transition-duration: 1s;
多个属性过度
-webkit-transition: <属性1><时间1>,<属性2><时间2>，...
或者 
-webkit-transition: <属性1><时间1>；
-webkit-transition: <属性1><时间1>；

过度模式
transition-timing-function 
* ease               缓慢开始，缓慢结束
* linear             匀速
* ease-in          缓慢开始
* ease-out        缓慢结束
* ease-in-out    缓慢开始，缓慢结束

设置3D场景
-webkit-perspective: 800;
-webkit-perspective-origin: 50% 50%;
-webkit-transform-style: -webkit-preserve-3d;
transform
- translate 位移
	* translateX
	* translateY
	* translateZ

- rotate 旋转
	* rotateX
	* rotateY
	* rotateZ

调整旋转中心
transform-origin

x轴
left
center
right

y轴
top
center
bottom

z轴
length

```