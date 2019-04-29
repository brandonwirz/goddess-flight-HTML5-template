$(document).ready(function() {
	var n = '#nav'
  var n2 = '#nav2'
	$('#nav-menu').click(function() {
		if ($(n).hasClass('nav-open') && $(n2).hasClass('nav-open')) {
			($(n).removeClass('nav-open') && $(n2).removeClass('nav-open')) ;
		}
		else {
			($(n).addClass('nav-open') && $(n2).addClass('nav-open'));
		}
	});
});
