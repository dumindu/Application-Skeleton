$(function() {
	$(".nano").nanoScroller();
	//$('.thumbs a').touchTouch();
	window.prettyPrint && prettyPrint();
	$("#main_focus").focus();

});
function to_top() {
	$(".nano").nanoScroller({scroll:'top'});
}