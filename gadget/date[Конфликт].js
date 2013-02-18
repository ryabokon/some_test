function Calendar() {
	
	this.myDate = function(target) {
		dateToTime(target);
	}
	
}

function dateToTime(target) {

	oncontextmenu = function (){return false;}
	
	switch (dateFlag) {
		case true:
			if (time) {
				clearInterval(time);
				getMyDate(target);
			}else
				getMyDate(target);
				
			dateFlag = false;
			break;
		case false:
			time = setInterval(function (){getMyTime(timeFlag, target);}, 1000);
			dateFlag = true ;
			break;
			
	}
}

function getMyDate(target) {
	var myDate = new Date();
		date = plusZero(myDate.getDate()),
		month = plusZero(myDate.getMonth() + 1),
		year = myDate.getFullYear();
	
	target.innerHTML = date + "." + month + "." + year;
}

