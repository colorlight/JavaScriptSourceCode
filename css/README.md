# CSS 操作

---

### 1. classList 操作css中的class
* Dom 元素中的className属性可以指定该dom能够包含的class
* 但是className只能赋一个值，所以不是很方便
* 所以新的标准诞生了一个新的属性classList，这个属性有很多方法，可以```add``` ```remove``` ```toggle``` ```contains```
* 注意里面的几个正则表达式
* 特别是当正则表达式中间需要插入变量
* 以及如何匹配单词

### 2. cssStyleSheet 
* 有两种办法禁用stylesheet
* document.styleSheetss属性
* 通过dom方法
* 但是这两种方法返回的对象分别是dom元素和cssStylesheet对象
* 但是这两个对象中都有disabled属性

### 3. 创建一个styleSheet
* 通过创建dom的方法才可以创建styleSheet
* 然后想让他生效的话，有两种方法
* 通过dom，就是插入innerHTML为css规则的字符串
* 通过styleSheet对象， 利用insertRule插入css规则，但是这不会改变dom结构，就是style标签中仍然是空的