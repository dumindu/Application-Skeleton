$(function() {
	$(".nano").nanoScroller();
	//$('.thumbs a').touchTouch();
	window.prettyPrint && prettyPrint();
});
function to_top() {
	$(".nano").nanoScroller({scroll:'top'});
}