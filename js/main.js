;(function($){

	$(function(){
		var slider = $('.ba-slider');

		slider.slick({
			dots: true,
			vertical: true,
			verticalSwiping: true,
			infinite: false
		});

		slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var currentSlideEl = $(slick.$slides[currentSlide]),
				nextSlideEl = $(slick.$slides[nextSlide]),

				currentClass = currentSlideEl.data('watch'),
				nextClass = nextSlideEl.data('watch');

				$('body').removeClass(currentClass).addClass(nextClass);

		});

	});

})(jQuery);
