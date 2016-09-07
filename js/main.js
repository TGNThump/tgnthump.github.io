
$(".container a").hover(function(){
	$("body").css("background-color", $(this).css("background-color"));
},
function(){
	$("body").css("background-color", "#171714");
});