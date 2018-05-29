# ECMAScript 6


## webstorm ECMAScript 6 语法检查

打开 webstorm 进行设置 ( File >> setting >> Languages & Frameworks >> JavaScript >> ECMAScript 6 )。

- 当你设置好 es6 规范之后, 使用webstorm编程, 右边的语法检错几乎没有红色和黄色的报错的时候, 恭喜你, 你已经养成了使用 es6 标准编程的习惯。

- jquery和其他的一些插件也有自己的 Typescript 验证模块, 如果不引入这些插件的验证模块可能会报白色错误(配置在第 12 个报错)。

- 本文所有的报错均为黄色或者白色报错，可能几乎不会影响程序的运行。

### 1. 使用 var 作为声明变量的方法报错

  > 注意: 改的时候注意 var 的变量提升。

  es6 里面声明变量都改成 let 和 const, 如果使用 var 作为声明方法, webstorm 会报错。 [ let 和 var 的区别]( http://es6.ruanyifeng.com/#docs/let )。

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

> 一般最后一个 return 下面会有很大一条白线

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

### 7. 对对象进行 for in 遍历时直接使用迭代值会报错

  - for in 的方法描述是"遍历能够枚举继承的属性名"

  - 当遍历对象时必须确认是否对象内继承了该属性

  所以在遍历时需要加上

  ```
  for（var i in a）{
     if( !a.hasOwnProperty(i) ) continue;//跳过继承的属性
     //循环体
  }
  ```

### 8.冗余代码报错

```
  function test () {
      let result = {}; // 这里的变量result会有一行白线, 告诉你这个变量没必要定义。
      return result
  }
  改为
    function test () {
      return {}
  }
```

### 9.备注(参数缺少)报错

> 使用备注的时候, 参数一定要写全

```
  /**
 * 下载文件
 * @param path 路径
 * @param type 文件类型
 */
function downloadFile( path, type, id ) { // 参数id下面有白色的线, 提示没有备注
 // your code .......
}
```

### 10. 没有用到的变量报错
> 定义了一个变量, 之后都没有引用会报黄色错误

### 11. 监听事件报错
> 这里并不是强制性会报错，只是引用jquery插件后

```
$('.btn').click(function(){})
改为
$('.btn').on('click',function(){})
```

### 12.html引入路径报错
> 当引入一段相对路径的文件, 代码块下方会有一条白色横线。

如果你的public文件夹是项目的静态文件根目录，右键public >> Mark Directory as >> Resource Root

### 13. unresolved function or method $() 白色错误

> 鼠标放在右边错误上显示以上错误或者类似的错误都是没有引入库的原因

解决方法:

- 根据以下操作路径 File >> setting >> Languages & Frameworks >> JavaScript >> Libraries 找到面板上面的download按钮

- ctrl+F 然后输入 jquery 或者其他的什么库，然后点击库下载 ts 验证模块链接。

- 此设置可能会出现 jquery 或其他插件的语法规范。