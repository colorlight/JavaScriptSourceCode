/* find depth of one dom tree*/
function findDepth(root){
	var depth = 0;
	var maxHeight = 0;
	var height = 0;
	function traverseTree(e){
		/*是否已经到达树底*/
		if(e.children.length !== 0){
			/*还未到达树底*/
			for(var i = 0, len = e.children.length; i < len; i++){
				/*利用children数组进行遍历*/
				/*开始递归*/
                /*每进入一次递归就会增加一次树高*/
				height++;
				traverseTree(e.children[i]);
			}
		}
		/*已经到达树底*/
		else{
			/*对树的最大高度进行更新*/
			maxHeight = height > maxHeight ? height:maxHeight;
		}

        /*每一次退出递归的时候，高度都会减一*/
		height--;

	}

	traverseTree(root);
	return maxHeight;
}

findDepth(document.getElementsByTagName('html')[0]);



/*find max children count of one dom tree*/
function maxChildrenCnt(e){
    var maxCnt = 0;
    function traverseTree(root){
        if(root.childElementCount !== 0){
            /*只有当root的儿子节点数不为0的时候，才有肯能更新*/
            maxCnt = root.childElementCount > maxCnt ? root.childElementCount : maxCnt;
             /*用一个现有的接口childElementCount*/
            for(var i = 0, len = root.childElementCount; i<len; i++){
                traverseTree(root.children[i]);
            }
        }       
    }

    traverseTree(e);
    return maxCnt;
}

maxChildrenCnt(document.getElementsByTagName('html')[0]);


function findAllElement(root){
    var totalNum = 0;
    
    function traverseTree(e){
        totalNum += e.childElementCount;
       	for(var i = 0, len = e.childElementCount; i < len; i++){
       	    traverseTree(e.children[i]);
       	}
    }

    traverseTree(root);
    return totalNum;
}

findAllElement(document.getElementsByTagName('html')[0]);