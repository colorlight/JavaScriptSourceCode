/*判断一个字符串中是否存在一个 某个字符串的方法*/ 
/*1 match*/ 
var a = "text if it exist haha"
if(a.match(/haha/))
	console.log('there is haha here!');

/*2 test*/
var a = "text if it exist haha"
if(/haha/.test(a))
	console.log('there is haha here!');

/*3 indexOf*/
var a = "text if it exist haha"
if(a.indexOf('haha'))
	console.log('there is haha here!');




