/*先新建一个xhr对象*/
var xhr = new XMLHttpRequest();

/*指定url和方法*/

xhr.open('GET', 'https://yesno.wtf/api');

/*为响应事件绑定回调函数*/
/*readyState是一个表示http response返回状态的XMLHttpRequest对象的属性*/
// 他的不同值代表着不同的状态
// 例如0 代表还没有调用open
// 1代表调用了open
// 2代表了返回了header
// 3代表了body返回
// 4代表respone返回完毕

//readystatechange 事件，就是当readyState状态改变的时候
// 会触发这个事件
//onreadystatechange 是事件处理程序 event handler或者是
// listener
// xhr.onreadystatechange = function(){
// 	// readyState为4保证response已经完成
// 	// request.status === 200 保证http请求成功
// 	if(xhr.readyState === 4 && xhr.status === 200){
// 		/*获取response头部信息的方法*/
// 		var type = xhr.getResponseHeader('Content-Type');
//         console.log(type);
// 	}
// }

xhr.addEventListener('readystatechange', function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.getResponseHeader('Content-Type'));
    }
}, false/*在冒泡阶段触发，一般都是在冒泡阶段*/);


// 这个时候可以进行发送请求了
xhr.send(null);