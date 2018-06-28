

生成页面模型和控制器文件
thinkjs model testName
thinkjs controll testName

生成视图文件
cd view/
touch testName_index.html

logic
当在 Action 里处理用户的请求时，获取用户提交过来的数据对其校验，
统在调用控制器里的 Action 之前会自动调用 Logic 里的 Action。

controller
    用于处理主要的接口逻辑
    __before 内如果返回false则禁止调用该接口(处理用户权限相关)
    调用父级__before可以通过super.__before
    indexAction
    return this.display() 返回html进行页面渲染
    return this.json() 返回json格式数据
    return this.end() 返回字符串
    __after 如果indexAction返回false，这个函数不执行
    ctx 对象
    得到请求相关数据
    const req = this.ctx.req;
    const res = this.ctx.res;
    const method = this.method;
    const isDelete = this.isMethod('DELETE'); // 是否是 DELETE 请求
    const userAgent = (this.userAgent || '').toLowerCase();
    //是ajax 且请求类型是 POST
    let isAjax = this.isAjax('post');
    判断是否是get/post请求 this.isGet or this.isPost