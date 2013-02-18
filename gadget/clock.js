function Clock(timeFlag, time) {
	
	this.myTime = function(target) {
		switch(timeFlag) {				
		case true:
			clearInterval(time);
			time = setInterval(function() {getMyTime(timeFlag, target);}, 1000);
			timeFlag = false;
			break;
		
		case false:
			clearInterval(time);
			time = setInterval(function() {getMyTime(timeFlag, target);}, 1000);
			timeFlag = true;
			break;
		}
		
	funcFlag = false;
	}
}

function getMyTime(flag, target) {
	var myTime = new Date(),
		hour = plusZero(myTime.getHours()),
		minutes = plusZero(myTime.getMinutes()),
		seconds = plusZero(myTime.getSeconds());
	
	if(flag)
		target.innerHTML = hour + ":" + minutes + ":" + seconds;
	else
		target.innerHTML = hour + ":" + minutes;

}

function plusZero(method) {
	return (method < 10) ? "0" + method : method;
}
