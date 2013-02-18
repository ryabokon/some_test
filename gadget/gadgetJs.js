//Vriables

//For time/date (tOd)
var timeFlag = true;
var dateFlag = true;
var time;

//For DragAndDrop (dAd)
var clickX = 0;            
var clickY = 0;
var dAdX = 0;           
var dAdpY = 0;
var dragElement;     

window.onload = function (){	
	checkBtn();
	dragAndDrop();
}

//Function

//For time/date (tOd)

//Check mouse button
function checkBtn(){
	var tOd = document.getElementById("tOd");
	
	tOd.addEventListener("click", switchModeTime);
	tOd.addEventListener("contextmenu",dateToTime);	
	
}

//Switch mode time
function switchModeTime(){
	switch (timeFlag){				
		case true:
			clearInterval(time);
			time = setInterval(function (){getMyTime(timeFlag);},1000);
			timeFlag = false;
			break;
		
		case false:
			clearInterval(time);
			time = setInterval(function (){getMyTime(timeFlag);},1000);
			timeFlag = true;
			break;
	}
	funcFlag = false;
}

//Start date
function dateToTime(){
	var tOd = document.getElementById("tOd");
	
	oncontextmenu = function (){return false;}
	
	switch (dateFlag){
		case true:
			if(time){
				clearInterval(time);
				getMyDate();
			}
			else
				getMyDate();
			dateFlag = false;
			break;
		case false:
			time = setInterval(function (){getMyTime(timeFlag);},1000);
			dateFlag = true ;
			break;
			
	}
}

//Get time
function getMyTime(flag){
	var tOd = document.getElementById("tOd");
	var myDate = new Date();
	var hour = plusZero(myDate.getHours());
	var minutes = plusZero(myDate.getMinutes());
	var seconds = plusZero(myDate.getSeconds());
	
	if(flag)
		tOd.innerHTML = hour + ":" + minutes + ":" + seconds;
		else
			tOd.innerHTML = hour + ":" + minutes;
}

//Get date
function getMyDate(){
	var tOd = document.getElementById("tOd");
	var myDate = new Date();
	var date = plusZero(myDate.getDate());
	var month = plusZero(myDate.getMonth() + 1);
	var year = myDate.getFullYear();
	
	tOd.innerHTML = date + "." + month + "." + year;
}

//Plus zero to "getMethod" if value < 10 ;
function plusZero(method){
	return ( method < 10 ) ? "0" + method : method;
}

//For DragAndDrop (dAd)

//Drag and drop
function dragAndDrop(){
	var dAd = document.getElementById("dAd");

	dAd.onmousedown = function (e){myMouseDown(e);}
	document.onmousemove = function (e){myMouseMove(e);}
	document.onmouseup = function (e){myMouseUp(e);}
}

//Event for "onmousedown"
function myMouseDown(e){
	var dAd = document.getElementById("dAd");
	var click = e.button;
	if (click == 0){
		clickX = e.clientX;
        clickY = e.clientY;
		
		dAdX = corectNumb(dAd.style.left);
        dAdY = corectNumb(dAd.style.top);
		
		dragElement = dAd;
		return false;
	}
}

//Event for "onmousemove"
function myMouseMove(e){
	//var dragElement = document.getElementById("dAd");
	dragElement.style.left = (dAdX + e.clientX - clickX) + 'px';
    dragElement.style.top = (dAdY + e.clientY - clickY) + 'px';
}

//Event for "onmouseup"
function myMouseUp(e){
	if (dragElement){
        dragElement = null;
    }
	funcFlag = true;
}

//Get corect value for dragAndDrop
function corectNumb(value){
    var n = parseInt(value);
    return (n == null || isNaN(n) ) ? 0 : n;
}

























