# JavaScript Source Code

一些从JavaScript高级程序设计和JavaScript权威指南上搜集的源代码。
*评分纯属自己喜好，星越高代表越有价值的代码，比较喜欢的才会打星。*

---

### 1. bind()方法要点 （评分： 2颗星）
* 为了在嵌套函数中使用当前函数的this，和arguments，先将他们存储起来。
* 两个参数来源的拼接。传入bind的第一个参数是被绑定的对象，不用加入拼接。 利用Arry方法push。
* apply传入拼接好的参数数组。
 

### 2. array_like类数组的实现
* 注意使用方括号的时候必须要用字符串定义属性名，但是数字除外。

### 3. portable document traversal
* 主要从中学习到跨浏览器的处理
* 有两种api处理关系节点，第一种包含了text节点，第二种不包含text节点，第二种比较新，为了防止不存在，要写两种情况下的处理。

### 4. innerText （评分：3颗星）
* 传入参数是一个节点， 将其内部的 text node 和 Elment node内部的text node 转化成纯文本连接起来并输出。 类似innerText属性。
* 遍历节点的方法可以学习一下。 采用循环和递归的方法遍历所有的节点。
* for循环架构声明一个child节点，初始值为参数节点的第一个子节点， 跳出条件是child！== null， 状态更新为 child指向下一个sibling node。
* 递归的跳出条件为nodeType，如果nodeType判断为是一个Element，则进入递归。
