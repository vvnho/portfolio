$(window).load(function() {
	$('#slider, #slider2, #slider3, #slider4').nivoSlider({
		effect: 'fade'
	});
	
	var h = window.innerHeight;
	h -= 200;
	$(".nivoSlider").height(h);
	$(".nivoSlider").width(h);

	$(window).resize(function() {
		var h = window.innerHeight;
		h -= 200;
		$(".nivoSlider").height(h);
		$(".nivoSlider").width(h);
	});

});