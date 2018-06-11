## body-parser

使用方式

    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

> 解析ajax请求参数类型为 application/json 的参数
> 解析编码类型为 application/x-www-form-urlencoded

## node 使用 import 的方式加载文件

安装插件

    $ npm install --save-dev babel-core babel-cli 
    $ npm install --save-dev babel-plugin-transform-strict-mode babel-plugin-transform-es2015-modules-commonjs  babel-plugin-transform-es2015-spread babel-plugin-transform-es2015-destructuring babel-plugin-transform-es2015-parameters

在根目录下创建配置文件 .babelrc,

    {
        "plugins": [
            "transform-strict-mode",
            "transform-es2015-modules-commonjs",
            "transform-es2015-spread",
            "transform-es2015-destructuring",
            "transform-es2015-parameters"
        ]
    }

package.json 里面

    {
        "scripts": {
            "start": "babel-node src/index.js",
            "build": "babel src --out-dir lib"
        },
        "devDependencies": {
            "babel-cli": "~6.3.17",
            "babel-core": "~6.3.26",
            "babel-plugin-syntax-object-rest-spread": "^6.3.13",
            "babel-plugin-transform-es2015-modules-commonjs": "^6.3.16",
            "babel-plugin-transform-es2015-spread": "^6.3.14",
            "babel-plugin-transform-object-rest-spread": "^6.3.13",
            "babel-polyfill": "^6.3.14"
        }
    }