var reverse = function( str ){
   var stack = [];//生成一个栈
   for(var len = str.length,i=len;i>0;i-- ){
    stack.push(str[i]);
}
return join('');
};


//另一个方法
var reverse = function( str ){
return str.split('').reverse().join('');
};