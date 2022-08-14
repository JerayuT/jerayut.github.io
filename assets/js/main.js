/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Cursor blinking
	var cursor = true;
	var speed = 300;

	setInterval(() => {
    	if(cursor) {
    document.getElementById('cursor1').style.opacity = 0;
	document.getElementById('cursor2').style.opacity = 0;
	document.getElementById('cursor3').style.opacity = 0;
    	cursor = false;
    	}else {
    document.getElementById('cursor1').style.opacity = 1;
	document.getElementById('cursor2').style.opacity = 1;
	document.getElementById('cursor3').style.opacity = 1;
    	cursor = true;
   		}
	}, speed);	

})(jQuery);