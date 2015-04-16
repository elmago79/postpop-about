

	$(window).resize(function(){

		// Hide Logo on scroll
		$(window).scroll(function() {
			if($(window).scrollTop() > 300) {
				$("#logo").hide();				
			}
			else {
				$("#logo").show();				
			}
		});

		// Header

	    $("#logo").css({
	        top: ($(window).height() - $("#logo").outerHeight())/2,
	        left: ($(window).width() - $("#logo").outerWidth())/2
	    });

	});
	$(window).resize();


