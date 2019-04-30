$(document).ready(function() {
	const n = '#nav'
  const n2 = '#nav2'
	$('#nav-menu-top').click(function() {
		if ($(n).hasClass('nav-open') && $(n2).hasClass('nav-open')) {
			($(n).removeClass('nav-open') && $(n2).removeClass('nav-open')) ;
		}
		else {
			($(n).addClass('nav-open') && $(n2).addClass('nav-open'));
		}
	});
});
