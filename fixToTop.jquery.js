
(function($) {
	$.fn.fixAbsoluteElement = function() {
		var $window = $(window);
		return this.each(function() {
			var $this = $(this),
				initial_top = $this.position().top;
				

			$window.on('scroll',function(event) {
				var cur_top = $this.position().top,
					window_scroll_amt = $window.scrollTop();
				if(window_scroll_amt > initial_top) {
					$this.addClass('fixed');
				}else{
					$this.removeClass('fixed');
				}
			});
		});
	};
})(jQuery);
