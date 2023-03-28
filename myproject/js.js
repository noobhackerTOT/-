var x;
	var r=confirm("按下按钮!");
	if (r==true){
		x="你按下了\"确定\"按钮!";
	}
	else{
		x="你按下了\"取消\"按钮!";
	}
	document.getElementById("test").innerHTML=x;