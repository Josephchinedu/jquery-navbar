$(document).ready(function() {
	$('.menu-icon').on('click', function() {
		$('nav ul').toggleClass('showing');
	})
})



$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if(scroll > 20){
			$('nav').css('background', '#000');
		} else{
			$('nav').css('background', 'transparent')
		}
	})
})