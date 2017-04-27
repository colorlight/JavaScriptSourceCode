/*以某个字符串开头问号收尾*/
// match
var a = "begin with begin?"
if(a.match(/^begin.*\?/))
	console.log('begin with \'begin\' and end with a question mark');

//test
var a = "begin with begin?"
if(/^begin.*\?/.test(a))
	console.log('begin with \'begin\' and end with a ?');