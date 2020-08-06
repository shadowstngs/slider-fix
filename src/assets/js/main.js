jQuery(document).ready(function ($) {

	"use strict";


	$(".loader").delay(1000).fadeOut("slow");
	$("#overlayer").delay(1000).fadeOut("slow");

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};

	var windowScrolled = function () {


		$(window).scroll(function () {

			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.js-site-navbar');

			if (st > 100) {
				navbar.addClass('scrolled');
			} else {
				navbar.removeClass('scrolled');
			}

		})

	}
	windowScrolled();

	var counter = function () {

		$('.section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber({
						number: num,
						numberStep: comma_separator_number_step
					}, 7000);
				});

			}

		}, {
			offset: '95%'
		});

	}
	counter();

	// scroll to top

	$(window).scroll(function () {
		var hT = $('footer').offset().top,
			hH = $('footer').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
		if (wS > 300) {
			$('.scrolltotop').fadeIn().css("display", "flex");
		} else {
			$('.scrolltotop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrolltotop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// slick


	var bodyRtl = false;

	var rtl = bodyRtl ? true : false;

	// 4 item slider
	$('.slider-4').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		rtl: rtl,
		autoplay: true,
		nextArrow: '<div class="slick-nav slick-arrow-right"><i class="fas fa-angle-right    "></i></div>',
		prevArrow: '<div class="slick-nav slick-arrow-left"><i class="fas fa-angle-left    "></i></div>',
		dotsClass: 'slider-paging-number',
		customPaging: function (slider, i) {
			return '<div class="slick-dots"></div>';
		},
		slidesToShow: 4,
		slidesToScroll: 1,
		centerPadding: '60px',
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					//     slidesToScroll: 3,
					//     infinite: true,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					//     slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}

		]
	});
	// 5 item slider
	$('.slider-5').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		rtl: rtl,
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerPadding: '60px',
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					//     slidesToScroll: 3,
					//     infinite: true,
					//     dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					//     slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,

				}
			}

		]
	});



	// 2 item slider
	$('.slider-2').slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		autoplay: true,
		rtl: rtl,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerPadding: '60px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					//     slidesToScroll: 3,
					//     infinite: true,
					//     dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					//     slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,

				}
			}

		]
	});





});