var myContr = new Controller();
	
/* var timeFlag = true,
	dateFlag = true,
	time = 0;
  */
	
window.onload = myContr.init;

function Controller() {
	this.init = function() {
		var timeFlag = true,
			dateFlag = true,
			time = 0;
			
		var myClock = new Clock(timeFlag, time),
			myCalendar = new Calendar(timeFlag, dateFlag, time),
			myDragAndDrop = new DragAndDrop();
		
		tOd.onclick = function() {
			myClock.myTime(tOd);
		}
		tOd.oncontextmenu = function() {
			myCalendar.myDate(tOd);
		}
	
		dAd.onmousedown = function(e) {
		
			myDragAndDrop.myMouseDown(e, dAd);
		}
		document.onmousemove = function(e) {
			myDragAndDrop.myMouseMove(e);
		}
		document.onmouseup = myDragAndDrop.myMouseUp;	
	}
}
