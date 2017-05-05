function tableDOM(){
	var i, table, thead, tbody, tfoot,
		tr, th, a, ul, li;

	//创建tbody，将生成的东西加进去
	tbody = document.createElement('tbody');
	

	for( i = 1; i <= 1000; i++){
		//首先先生成一个要循环的基本单元tr
		// td所有的单元都要添加到他的下面
		// 所以要生成他
		tr = document.createElement('tr');
		//id
		td = document.createElement('td');
		td.appendChild(document.createTextNode('' + i));
		// 将第一个td添加到tr下面
		tr.appendChild(td);

		// yes?
		td = document.createElement('td');
		td.appendChild(document.createTextNode('And the ' + 
			'answer is...' + (i % 2 ? 'yes' : 'no')));
		tr.appendChild(td);

		//name
		td = document.createElement('td');
		td.appendChild(document.createTextNode('my name is #' + i));
		tr.appendChild(td);

		//url
		td = document.createElement('td');
		a = document.createElement('a');
		a.setAttribute('href','example.org/' + i + '.html')
		a.appendChild(document.createTextNode( 'http://example.org/' 
			+ i + '.html'));
		td.appendChild(a);
		tr.appendChild(td);

		//action
		td = document.createElement('td');
		ul = document.createElement('ul');
		li = document.createElement('li');
		a = document.createElement('a');
		a.setAttribute('href', '#edit');
		a.appendChild(document.createTextNode('edit'));
		li.appendChild(a);
		ul.appendChild(li);
		li = document.createElement('li');
		a = document.createElement('a');
		a.setAttribute('href', '#delete');
		a.appendChild(document.createTextNode('delete'));
		li.appendChild(a);
		ul.appendChild(li);
		td.appendChild(ul);
		tr.appendChild(td);

		// 最后将tr添加到tbody上，完成一个循环单元
		tbody.appendChild(tr);
	}	

	//生成 thead， tfoot
	thead = document.createElement('thead');
	tr = document.createElement('tr');
	
	td = document.createElement('td');
	td.appendChild(document.createTextNode('id'));
	tr.appendChild(td);

	td = document.createElement('td');
	td.appendChild(document.createTextNode('yes?'));
	tr.appendChild(td);

	td = document.createElement('td');
	td.appendChild(document.createTextNode('name'));
	tr.appendChild(td);

	td = document.createElement('td');
	td.appendChild(document.createTextNode('url'));
	tr.appendChild(td);

	td = document.createElement('td');
	td.appendChild(document.createTextNode('action'));
	tr.appendChild(td);

	thead.appendChild(tr);

	//生成tfoot
	tfoot = document.createElement('tfoot');
	tr = document.createElement('tr');
	td = document.createElement('td');
	td.appendChild(document.createTextNode('nothing'));
	tr.appendChild(td);
	tfoot.appendChild(tr);

	//生成table
	table = document.createElement('table');
	table.appendChild(thead);
	table.appendChild(tbody);
	table.appendChild(tfoot);
	table.setAttribute('border','1px');
	table.setAttribute('width', '100%');

	//最终渲染到body里面
	document.body.appendChild(table);
}

