	
var x = 1;
	
	
function Click(){
	if(x==1){
		document.getElementById('menu').style.display="block";
		x = 0;
	}else if(x==0){
		document.getElementById('menu').style.display="none";
		x = 1;
	}
	
}
	
/*	

function Click(){
	if(document.getElementById('menu').style.display=="block"){
		document.getElementById('menu').style.display = "none";
	}else if(document.getElementById('menu').style.display=="none"){
		document.getElementById('menu').style.display = "block";
	}
}

 */ 