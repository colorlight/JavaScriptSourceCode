# JavaScript Source Code

一些从JavaScript高级程序设计和JavaScript权威指南上搜集的源代码。

---

### 1. bind()方法要点
* 为了在嵌套函数中使用当前函数的this，和arguments，先将他们存储起来。
* 两个参数来源的拼接。传入bind的第一个参数是被绑定的对象，不用加入拼接。 利用Arry方法push。
* apply传入拼接好的参数数组。
 

### 2. array_like类数组的实现
* 注意使用方括号的时候必须要用字符串定义属性名，但是数字除外。

### 3. portable document traversal
* 主要从中学习到跨浏览器的处理
* 有两种api处理关系节点，第一种包含了text节点，第二种不包含text节点，第二种比较新，为了防止不存在，要写两种情况下的处理。
