$(function(){

	$('#js-tell-me').click(function(e){
		e.preventDefault();

		var contactsOffset = $('#js-contacts').offset().top;

		$('html, body').animate({
			scrollTop: contactsOffset
		}, 1000);
	});

	$('#js-nav ul li a').click(function(e){
		e.preventDefault();

		var currentAttr = $(this).attr('href'),
				currentBlock = $(currentAttr).offset().top;

			$('html, body').animate({
				scrollTop: currentBlock
			}, 1000);
	});

})