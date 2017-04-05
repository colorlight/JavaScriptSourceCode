# JavaScript Source Code

从各处搜来的源代码
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

### 5. sorting the rows of a table
* 传入的参数是一个table对象，取其中的tbody的方法，table.tBodies[0], 这样可以直接取出一个tbody对象。
* 对tbody中的rows，根据第n个col的值排序，传入一个comparator的比较函数。
* 为了利用sort函数，将类数组转化为数组
* sort中传入的函数做一番包装。使其具有一定的健壮性。
* 排序好的对象利用appendChild插入。

### 6. embolden 给某个元素加黑
* 传入的参数是那个要加黑的元素，或者是字符串
* replaceChild函数必须是父节点调用的，所以先得到其父节点
* 创建b元素
* b元素替换n节点, ```n.parentNode.replaceChild(b,n);```
* 利用b.appendChild(n)将n节点加入到b中去，完成加黑。

### 7. parseHttp  解析http响应内容
*  利用xhr实现ajax的流程
*  http总是成对并且是先有请求的，响应的设计是作为事件对待的。
*  对响应的处理是在事件处理函数中处理的
*  响应contentType的3种类型，xml json 和纯文本。 
*  获取纯文本request.reponseText

### 8. sort_order 降序与升序
* 两种数值升序降序的简便写法
* 注释是升序的一种模板写法

### 9. str_reverse 字符串的倒序
* 2种方法都是依靠数组作为媒介
* 第一种实现了数组的倒序
* 第二种直接利用数组的方法reverse