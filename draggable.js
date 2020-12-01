$('document').ready(function(){
	drag($("#eyes"));
	drag($("#nose"));
	drag($("#tBody"));
	drag($("#fur"));
	drag($("#ears"));
	
});

selectedElement = null;

function dragMouseDown(e) {
	e = e || window.event;
	e.preventDefault();

	initialX = e.clientX;
	initialY = e.clientY;
	$(document).mouseup(function(){removeHandlers()});
	$(document).mousemove(function(){mymousemove()});
}

function mymousemove(e) {
	e = e || window.event;
	e.preventDefault();
	
	deltaX = initialX - e.clientX;
	deltaY = initialY - e.clientY;
	
	initialX = e.clientX;
	initialY = e.clientY;	

	$(selectedElement).css("top",(selectedElement.offset().top - deltaY) + "px");
	$(selectedElement).css("left" ,(selectedElement.offset().left - deltaX) + "px");

}

function removeHandlers() {
	$(document).unbind("mouseup");
	$(document).unbind("mousemove");	
}

function drag(element) {
        var deltaX = 0, deltaY = 0, intitalX = 0, intitalY = 0;
        $(element).mousedown(function()
        {
                selectedElement = $(element);
                dragMouseDown()
        } );
}

