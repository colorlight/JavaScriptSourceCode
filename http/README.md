# JavaScript Source Code

从各处搜来的源代码
*评分纯属自己喜好，星越高代表越有价值的代码，比较喜欢的才会打星。*

---

### 1. parseHttp  解析http响应内容
*  利用xhr实现ajax的流程
*  http总是成对并且是先有请求的，响应的设计是作为事件对待的。
*  对响应的处理是在事件处理函数中处理的
*  响应contentType的3种类型，xml json 和纯文本。 
*  获取纯文本request.reponseText

### 2. ajax 各种ajax请求
	熟悉流程   
* 1. 创建一个xhr的对象```创建xhr```  
* 2. 指定```url``` 和 ```method```
* 3. 设置头部的 ```setRequestHeader()```
* 4. 设置回调函数 回调函数中注意对```readySate```的判断，读取response头部```getResponseHeader('属性名');``` 以纯文本的形式读取主体```responseText```  以dom的形式读取主体 ```responseXML```
* 5. send(给request绑定主体)

### 3. form_encoded 
 * 当你要进行一个get请求的时候，而且你还要附加参数，你需要用到这个
 * 他可以对你的参数部分进行表单格式编码
 * 你需要将这个编码结果和url拼接形成最终的url
 