# 组件

## 父向子传值

  父组件在data中定义变量
    
    data(){
        return {
            list: list
        }
    }

  在html中

    <child :list="list"></child>


  在子组件中使用props获取,获取之后list就变为这个组件this下的list

    export default {
        name: 'child',
        props: ["list"],
        data(){
            return {
                listChild: this.list
            }
        }
    }


## 子向父传值

  子组件在methods中定义一个方法EmitValue发送一个名字叫listName的list数据

    methods: {
        EmitValue(){
            this.$emit('listName',this.list);
        }
    }

  父组件使用change接收数据listName

    <child @listName="change"></child>

  在父组件methods定义方法接收数据

    methods: {
        change(listName){
            console.log(listName)
        }
    }

## 动态监控赋值

  一般情况下上面的都能解决问题,但是有时候我们需要从一个组件传值到父组件  
  父组件统一处理数据后再返回给另一个子组件,这个时候使用上面的方式并不会直接更新数据  
  所以使用watch函数监听list数据变化,当变化时给listChild赋值

    import _ from 'lodash'

    export default {
        name: 'child',
        props: ["list"],
        watch:{
            list: function(newVal,oldVal){
                this.listChild=_.cloneDeep(newVal)                
            }
        },
        data(){
            return {
                listChild: this.list
            }
        }
    }

## 动态修改子组件数据

  在父组件template中给引用子组件的标签定义一个名称

    <child ref="myChild"></child>

  在父组件中定义fun函数来调用子组件的方法,把list作为参数传入子组件

    data(){
        return {
            list: list
        }
    },
    methods: {
        fun(list){
            this.$refs.myChild.getlist(this.list)
        }
    }

  子组件定义方法

    methods: {
        getlist(list){
            this.childlist = list
        }
    }