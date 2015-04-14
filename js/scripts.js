$(document).ready(function() {
	fix();
});

function fix() {

	$(window).resize(function(){

		// Menu
		$(window).scroll(function() {
			if($(window).scrollTop() > $("#about").offset().top-300) {
				$("#logo").hide();				
			}
			else {
				$("#logo").show();				
			}
		});

		$("nav li a").click(function() {
			$(".navbar-toggle").trigger("click");
		});

		// Header

	    $("header .logo").css({
	        top: ($(window).height() - $("#logo").outerHeight())/2,
	        left: ($(window).width() - $("#logo").outerWidth())/2
	    });

	    // Team

	    $("#team .member .photo").height($("#team .member .photo").width());

	    // Busta

	    $("#team .busta .top").height($("#team .busta .top").width());


	});
	$(window).resize();

}

