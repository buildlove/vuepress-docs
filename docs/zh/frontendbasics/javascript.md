# javascript


## 数组去重

使用数组特性去重法
let data = [1,2,3,4,5,6,7,8,8,9,9]
let newData = []
data.forEach(function(num){
  if(newData.indexOf(num) === -1){
    newData.push(num)
  }
})

使用对象特性去重法
let data = [1,2,3,4,5,6,7,8,8,9,9]
let obj = {}
data.forEach(function(num){
  obj[num] = {};
})
let newData = Object.keys(obj)

## jsonp

面试的时候有人问过这一题, 当时没有答上来所以查了一下。

### jsonp优点:

完美解决在测试或者开发中获取不同域下的数据,用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback
参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。简单来说数据的格式没有发生

### jsonp缺点:

1.jsonp 只支持 get 请求而不支持 post 请求
2.在登录模块中需要用到 session 来判断当前用户的登录状态,这时候由于是跨域的原因,前后台的取到的 session 是不一样的,那么就不能用 session 来判断.
3.由于 jsonp 存在安全性问题(不知qq空间的跨域是怎么解决的,还是另有高招?)
后来考虑到上面的一系列问题,采用的是后台进行设置允许跨域请求(但还是存在缺陷的,实质上还是跨域,如上面说的session问题)
.Header set Access-Control-Allow-Origin * 
为了防止XSS攻击我们的服务器， 我们可以限制域，比如
Access-Control-Allow-Origin: http://blog.csdn.net

### 安全防范:

1.防止callback参数意外截断js代码,特殊字符单引号双引号,换行符存在风险。
2.防止callback参数恶意添加script标签,造成xss漏洞。
3.防止跨域请求滥用,阻止非法站点恶意调用。