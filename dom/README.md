# JavaScript Source Code

从各处搜来的源代码
*评分纯属自己喜好，星越高代表越有价值的代码，比较喜欢的才会打星。*

---



### 1. portable document traversal
* 主要从中学习到跨浏览器的处理
* 有两种api处理关系节点，第一种包含了text节点，第二种不包含text节点，第二种比较新，为了防止不存在，要写两种情况下的处理。

### 2. innerText （评分：3颗星）
* 传入参数是一个节点， 将其内部的 text node 和 Elment node内部的text node 转化成纯文本连接起来并输出。 类似innerText属性。
* 遍历节点的方法可以学习一下。 采用循环和递归的方法遍历所有的节点。
* for循环架构声明一个child节点，初始值为参数节点的第一个子节点， 跳出条件是child！== null， 状态更新为 child指向下一个sibling node。
* 递归的跳出条件为nodeType，如果nodeType判断为是一个Element，则进入递归。

### 3. sorting the rows of a table
* 传入的参数是一个table对象，取其中的tbody的方法，table.tBodies[0], 这样可以直接取出一个tbody对象。
* 对tbody中的rows，根据第n个col的值排序，传入一个comparator的比较函数。
* 为了利用sort函数，将类数组转化为数组
* sort中传入的函数做一番包装。使其具有一定的健壮性。
* 排序好的对象利用appendChild插入。

### 4. embolden 给某个元素加黑
* 传入的参数是那个要加黑的元素，或者是字符串
* replaceChild函数必须是父节点调用的，所以先得到其父节点
* 创建b元素
* b元素替换n节点, ```n.parentNode.replaceChild(b,n);```
* 利用b.appendChild(n)将n节点加入到b中去，完成加黑。

### 5. count_depth 这个是阿里笔试题
* 如何遍历所有的节点，利用children属性，和childElementCount来遍历所有儿子
* 而innerText程序遍历节点的方法是通过child.nextSibling 和 child !== null;
* 用递归遍历儿子的儿子
* 考察了3个值，所有节点数目， 最深值，以及最多儿子值，注意在求这三个值的时候，有一个规则就是要判断清楚 这三个值在什么时候更新，就把代码写在哪个位置


### 6. tableDom 完全用js生成的大规模表格
* createElement的使用
* appendChild的使用
* createTextNode的使用
* 元素内部嵌套元素的方法

