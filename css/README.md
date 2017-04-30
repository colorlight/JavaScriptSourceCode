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