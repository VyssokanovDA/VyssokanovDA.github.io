var sedan = document.getElementById('sedan');
var getCar = document.getElementById('getCar');
var position = 0;
var id;

getCar.onmouseover = function(){
	//console.log('over');
	if (id) clearInterval(id);
	id = setInterval(toDriveRight, 2);
}

getCar.onmouseout = function(){
	//console.log('onmouseout');
	clearInterval(id);
	id = setInterval(toDriveLeft, 2);

}
function toDriveRight(){
	if(position == 500){
		clearInterval(id);
	}else{
		sedan.classList.remove('mirror');
		position ++;
		sedan.style.left = position + 'px';
	}
}
function toDriveLeft(){
	if (position == 0) {
		clearInterval(id)
		sedan.classList.remove('mirror');
	}else{
		sedan.classList.add('mirror');
		position --;
		sedan.style.left = position + 'px';
	}
}
