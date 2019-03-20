//manipulação Front-end neste ficheiro - em JavaScript ofc

//Logo giratorio
$(window).scroll(function() {
    var angle = ($(window).scrollTop()/10) * Math.PI;
    $('#logo').css({ transform: 'rotate(' + angle + 'deg)' });
});

//Smooth scroll
$(document).ready(function () {
	$('#Us').on('click', function (e) {
		// e.preventDefault();

		var target = this.hash,
			$target = $(target);

	   $('html, body').stop().animate({
		'scrollTop': $target.offset().top-150
	}, 500, 'swing', function () {
	});

		console.log(window.location);

		return false;
	});

	$('#Mission').on('click', function (e) {
		// e.preventDefault();

		var target = this.hash,
			$target = $(target);

	   $('html, body').stop().animate({
		'scrollTop': $target.offset().top-150
	}, 500, 'swing', function () {
	});

		console.log(window.location);

		return false;
	});

	$('#Method').on('click', function (e) {
		// e.preventDefault();

		var target = this.hash,
			$target = $(target);

	   $('html, body').stop().animate({
		'scrollTop': $target.offset().top-150
	}, 500, 'swing', function () {
	});

		console.log(window.location);

		return false;
	});

    $('#Objs').on('click', function (e) {
		// e.preventDefault();

		var target = this.hash,
			$target = $(target);

	   $('html, body').stop().animate({
		'scrollTop': $target.offset().top-150
	}, 500, 'swing', function () {
	});

		console.log(window.location);

		return false;
	});

    $('#logo').on('click', function (e) {
		// e.preventDefault();

		var target = this.hash,
			$target = $(target);

	   $('html, body').stop().animate({
		'scrollTop': $target.offset().top-150
	}, 500, 'swing', function () {
	});

		console.log(window.location);

		return false;
	});
});
