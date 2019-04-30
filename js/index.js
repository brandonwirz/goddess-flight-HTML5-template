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

// to the top icon ----------------------------------------------------
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("up-icon").style.display = "block";
    } else {
        document.getElementById("up-icon").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
