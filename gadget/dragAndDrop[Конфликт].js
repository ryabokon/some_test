function DragAndDrop() {
	
	this.myMouseDown = function(e, target) {
		msDown(e, target);
	}
	this.myMouseMove = function(e) {
		msMove(e);
	}
	this.myMouseUp = msUp;
	
}

function msDown(e, target) {
	var click = e.button;
	
	if (click == 0) {
		clickX = e.clientX;
        clickY = e.clientY;
		
		dAdX = corectNumb(target.style.left);
        dAdY = corectNumb(target.style.top);
		
		dragElement = target;
		
		return false;
	}
}

function msMove(e, target) {
	  if (e == null) 
        var e = window.event; 

	dragElement.style.left = (dAdX + e.clientX - clickX) + 'px';
    dragElement.style.top = (dAdY + e.clientY - clickY) + 'px';
}

function msUp() {
	if (dragElement)
        dragElement = null;

	funcFlag = true;
}

function corectNumb(value) {
    var n = parseInt(value);
	
    return (n == null || isNaN(n)) ? 0 : n;
}