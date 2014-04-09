$("#contact").hover(function() {
	$(".contact-hover").addClass("contact-view");
	$(".contact-norm").removeClass("contact-view");
}, function() {
	$(".contact-norm").addClass("contact-view");
	$(".contact-hover").removeClass("contact-view");
});

$(".green").hover(function() {
	$(".green-border").addClass("grey-border");	
}, function() {
	$(".green-border").removeClass("grey-border");
});

$(".orange").hover(function() {
	$(".orange-border").addClass("grey-border");
}, function() {
	$(".orange-border").removeClass("grey-border");
});

$(".pink").hover(function() {
	$(".pink-border").addClass("grey-border");
}, function() {
	$(".pink-border").removeClass("grey-border");
});

$(".blue").hover(function() {
	$(".blue-border").addClass("grey-border");
}, function() {
	$(".blue-border").removeClass("grey-border");
});

$(".yellow").hover(function() {
	$(".yellow-border").addClass("grey-border");
}, function() {
	$(".yellow-border").removeClass("grey-border");
});
