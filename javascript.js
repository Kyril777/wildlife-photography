$(function() {
    // Close bootstrap's dropdown menu after clicking
    $('div.collapse ul.nav li a').each(function() {
        $(this).on("click", function () {
            var $obj = $($(this).parents('.in')[0]);
            $obj.animate({'height': '1px'}, function() {
                $obj.removeClass('in').addClass('collapse');
            });
        });
    });
});

$(document).ready(function(){
	// Smooth scrolling effect.
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		});
	});
		
	// Close bootstrap's dropdown menu after clicking
	$(function() {
		$('div.collapse ul.nav li a').each(function() {
			$(this).on("click", function () {
				var $obj = $($(this).parents('.in')[0]);
				$obj.animate({'height': '1px'}, function() {
					$obj.removeClass('in').addClass('collapse');
				});
			});
		});
	});

});