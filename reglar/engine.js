'use strict'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
	var s="";
  	s = input.replace(/{(%.+?%)}/g, '&#123;$1 &#125');
  	console.log(s);
});

function nunjucks_escape(str){
	var s = str.replace(/{(%.+?%)}/g, '&#123;$1 &#125;');
	var s = str.replace(/{{(.+?)}}/g, '&#123;&#123;$1 &#125;&#125;');
	return s
}


function replacestr(inputStr, tobeRep, rep){
	console.log('toberep' + tobeRep);
	var reg = new RegExp('(' + tobeRep + ')','g');
	console.log(reg);
	var tag = rep.tag;
	var className = rep.className;
	var prefix = `<${tag} class=\" ${className}\">`;
	var suffix = `</${tag}>`;
	console.log('prefix:' + prefix);
	console.log('prefix:' + suffix);
	var s = inputStr.replace(reg, prefix + '$1' + suffix );

	return s;
}