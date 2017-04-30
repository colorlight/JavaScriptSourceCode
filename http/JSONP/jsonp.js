
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

addScriptTag('http://172.24.53.223:8080?callback=foo');


function foo(data,password) {
  console.log('my penius:' + data.mypeniusinch);
  console.log('topsecert:' + password.password);
};