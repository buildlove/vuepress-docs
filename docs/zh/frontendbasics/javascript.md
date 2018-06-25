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