$(document).ready(() => {
	let counter = 1;
	const imageWidth = $('.slide img').width();

	$('#prevBtn').click(() => {
		if (counter <= 0) return;
		$('.slide').css('transition', 'transform 0.4s ease-in-out');
		$('.slide').css('transform', `translateX(${-imageWidth * counter}px)`);
		counter--;
	});

	$('#nextBtn').click(() => {
		if (counter >= $('.slide img').length - 1) return;
		$('.slide').css('transition', 'transform 0.4s ease-in-out');
		$('.slide').css('transform', `translateX(${-imageWidth * counter}px)`);
		counter++;
	});

	$('.slide').on('transitionend', () => {
		if ($('.slide img')[counter].id == 'lastImage') {
			$('.slide').css('transition', 'none');
			counter = $('.slide img').length - 2;
			$('.slide').css('transform', `translateX(${-imageWidth * counter}px)`);
		}
		else if ($('.slide img')[counter].id == 'firstImage') {
			$('.slide').css('transition', 'none');
			counter = $('.slide img').length - counter;
			$('.slide').css('transform', `translateX(${-imageWidth * counter}px)`);
		}
	});
});