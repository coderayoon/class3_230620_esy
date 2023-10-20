$(function() {
	
	$(".seat-count button").click(function() {
		
		let numElem = $(this).closest(".count").find(".now");
		let prevNum = parseInt(numElem.text());
		let nowNum;
		
		if($(this).hasClass("up")) {
			nowNum = prevNum + 1;
		} else if($(this).hasClass("down")) {
			nowNum = prevNum - 1;
			if(nowNum < 0) return;	
		}
		
		
	
	});
	
	
});