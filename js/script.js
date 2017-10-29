// jQuery fun times! 
$("document").ready(function() {
	$("#textbox").on("mousemove", onMouseOver);
	$("#textbox").on("click", onMouseClick);
	$("#textbox").on("mouseleave", onMouseLeave);	
	var newP = $("<p>"); // creates new variable with html tag
	newP.append("<em>Hello, world!</em"); // new content goes into html tag
});

function onMouseOver(evt) {
	$("#textbox").text("I just got here.");
}

function onMouseClick(evt) {
	$("#textbox").text("You clicked me.");
}

function onMouseLeave(evt) {
	$("#textbox").text("I'm leaving now.");
}

//ANIMATION
$("document").ready(function () {
	$("#start").click(function() {
		$("#animayshun").animate({width: 500}, 400) //last number is time in miliseconds
		.animate({height: 500}, 500)
		.animate({left: 500}, 700)
		.animate({top: "+=100"}, "slow") //"slow" = about 600 miliseconds
	});
// reset animation to starting point:
	$("#reset").click(function() {
		$("#animayshun").css("top", "0");
		$("#animayshun").css("left", "0");
		$("#animayshun").css("width", "300");
		$("#animayshun").css("height", "300");
	});
});


