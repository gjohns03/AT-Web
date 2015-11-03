jQuery(document).ready(function($) {
	$(window).resize(function(){
	if ($(window).width() <= 750){
		// do something here
    $('.content-foot').appendTo('.region-sidebar-second');
	}
	else {
		$('.content-foot').appendTo('#block-system-main');
	}
});
});
