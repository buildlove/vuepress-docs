# css3

## 盒子模型
   
   ### width和height

   ### padding

   ### border

   ### margin 

## display

display:inline 段落元素设置为内联元素（两个div向左浮动形成一行）

display:block 此元素将显示为块级元素，此元素前后会带有换行符

display:inline-block 行内块元素(两个span分成两行)

display:none 此元素不会被显示

display:inherit 规定应该从父元素继承 display 属性的值

## 记不住的样式

list-style:none //去掉li前面的点  

table-layout:fixed //表格固定不会被里面的内容撑大

text-overflow:ellipsis //文本溢出部分显示省略号

white-space: nowrap //文本不会换行，文本会在在同一行上继续，直到遇到标签为止

## 自适应以及响应式布局

自适应: 为了在不同分辨率下以及不同设备上让同一网页适应
响应式:

1.宽度可以自动调整。

2.尽量使用百分比少使用绝对宽度。

3.字体使用em/rem。

4.使用float浮动布局。

5.使用以下代码来加载不同分辨率下的css代码。

    @media screen and (max-width:320px){
        css代码  
    }
    或
    <link media="screen and (max-width: 600px)" href="iPhone6.css" />
