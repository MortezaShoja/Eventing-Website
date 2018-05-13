/* Custom Scripts */
$(document).ready(function () {
		
		
	// Start One Page Scrolling
	$('.top-menu').singlePageNav({
		offset: 61,
		filter: ':not(.external)',
	});

    $('.navbar .nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });

	// Start Parallax script
	$('#headerArea').parallax("50%", 0.2);
	$('#workArea').parallax("50%", 0.1);
	$('#infoArea').parallax("50%", 0.1);

	// Start main image 
	var viewHeight = $(window).height();
	$("#headerArea").css({
		'height': viewHeight
	});
	$(window).on('resize', function () {
		var viewHeight = $(window).height();
		$("#headerArea").css({
			'height': viewHeight
		});
	});

	// Start Header Animation
	var height = $(window).height();
	$(window).scroll(function () {
		if ($(document).scrollTop() > height- 60) {
			$('.top-menu').addClass('tiny');
		} else {
			$('.top-menu').removeClass('tiny');
		}
	});

	// Start Main Content Slider
	$('#main-slider').flexslider({
		animation: "fade",
  	slideshowSpeed: 3000,
    pauseOnHover: false, 
		useCSS: false,
		controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
		touch: true
	});
	
	// Start Feedback Slider
	$('#feedback-slider').flexslider({
		animation: "slide",
		animationLoop: false,
		useCSS: false,
		touch: true,
		prevText: "<span class='glyphicon glyphicon-circle-arrow-left'></span>",
		nextText: "<span class='glyphicon glyphicon-circle-arrow-right'></span>",
		itemWidth: 240,
		itemMargin: 20,
		minItems: 1,
		maxItems: 3,
		move: 1,
	});
	
	// Start Google Map
	$('#map_canvas').gmap({
		'center': new google.maps.LatLng(41.1329, -73.94434), // Change this to your desired latitude and longitude
		'zoom': 17,
		'mapTypeControl': false,
		'navigationControl': false,
		'streetViewControl': false,
		'styles': [{
			stylers: [{
				gamma: 0.60
			}, {
				hue: "#D73F2F"
			}, {
				invert_lightness: false
			}, {
				lightness: 2
			}, {
				saturation: -20
			}, {
				visibility: "on"
			}]
		}]
	});
	var image = {
		url: 'images/marker.png', // Define the map marker file here
		// This marker is 51 pixels wide by 63 pixels tall.
		size: new google.maps.Size(64, 64),
		// The origin for this image is 0,0.
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at 26,63.
		anchor: new google.maps.Point(26, 63)
	};
	$('#map_canvas').gmap().bind('init', function () {
		$('#map_canvas').gmap('addMarker', {
			'id': 'marker-1',
			'position': '41.1329,-73.94434',
			'bounds': false,
			'icon': image
		}).click(function () {
			$('#map_canvas').gmap('openInfoWindow', {
				'content': '<p><strong>DreamTemplate</strong><br>616 Corporate Way,Suite. 2-3194<br>Valley Cottage, NY 10989<br>United States</p>'
			}, this);
		});
	}); 


	// prettyPhoto script start here
    $('a[data-gal]').each(function() {
        $(this).attr('rel', $(this).data('gal'));
    });     
    $("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	
});	