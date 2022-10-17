/*	
	- Google Map
	
	* Document Scroll		
		
	* Document Ready
		- Scrolling Navigation
		- Find all anchors
		- Add Easing Effect
		- Responsive Caret
		- Client Carousel
		- Blog Carousel
		- Process Carousel
		- Lightbox for Highlights Video
		- Light Slider
		- Contact Map
		- Quick Contact Form

	* Window Load
		- Site Loader
*/

(function ($) {

	"use strict"

	/* - Google Map */
	function initialize(obj) {
		var lat = $("#" + obj).attr("data-lat");
		var lng = $("#" + obj).attr("data-lng");
		var contentString = $("#" + obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat, lng);
		var map, marker, infowindow;
		var image = "images/marker.png";
		var zoomLevel = parseInt($("#" + obj).attr("data-zoom"), 10);
		var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": " " }, { "lightness": " " }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": " " }, { "lightness": " " }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": " " }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": " " }, { "lightness": " " }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": " " }, { "lightness": " " }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": " " }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": " " }, { "saturation": " " }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": " " }, { "saturation": " " }] }]
		var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
			scrollwheel: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}

		map = new google.maps.Map(document.getElementById(obj), mapOptions);

		map.mapTypes.set("map_style", styledMap);
		map.setMapTypeId("map_style");

		infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, "click", function () {
			infowindow.open(map, marker);
		});
	}


	/* * Document Scroll - Window Scroll */
	$(document).scroll(function () {
		var scroll = $(window).scrollTop();
		var height = $(window).height();

		/*** set sticky menu ***/
		if (scroll >= height) {
			$(".header-main").addClass("navbar-fixed-top animated fadeInDown").delay(2000).fadeIn();
		}
		else if (scroll <= height) {
			$(".header-main").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else {
			$(".header-main").removeClass("navbar-fixed-top animated fadeInDown");
		} // set sticky menu - end	
	});

	/* * Document Ready - Handler for .ready() called */
	$(document).ready(function ($) {

		/* - Scrolling Navigation */
		var scroll = $(window).scrollTop();
		var width = $(window).width();
		var height = $(window).height();

		/*** set sticky menu ***/
		if (scroll >= height - 500) {
			$(".header-main").addClass("navbar-fixed-top").delay(2000).fadeIn();
		}
		else if (scroll <= height) {
			$(".header-main").removeClass("navbar-fixed-top");
		}
		else {
			$(".header-main").removeClass("navbar-fixed-top");
		} /* set sticky menu - end */

		/* - Responsive Caret */
		$(".ddl-switch").on("click", function () {

			var li = $(this).parent();
			if (li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible")) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});

		/* - Client Carousel */

		if ($(".clients-carousel").length) {
			$(".clients-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: false,
				autoplay: false,
				responsive: {
					0: {
						items: 1
					},
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					1000: {
						items: 5
					}
				}
			});
		}

		/* - Blog Carousel */
		if ($(".blog-carousel").length) {
			$(".blog-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: true,
				autoplay: false,
				responsive: {
					0: {
						items: 1
					},
					500: {
						items: 1
					},
					991: {
						items: 1
					},
					1000: {
						items: 2
					}
				}
			});
		}

		/* - Process Carousel */
		if ($(".process-carousel").length) {
			$(".process-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: false,
				autoplay: false,
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 2
					},
					767: {
						items: 3
					},
					800: {
						items: 2
					},
					991: {
						items: 2
					},
					1000: {
						items: 3
					}
				}
			});
			/* - Custom Navigation Events */
			$(".next").on("click", function () {
				$(".process-carousel").owlCarousel().trigger("next.owl.carousel");
			});
			$(".prev").on("click", function () {
				$(".process-carousel").owlCarousel().trigger("prev.owl.carousel");
			});
		}

		/* - Lightbox for Highlights Video */
		$(".video-section a").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

		/* - Light Slider */
		$("#testiGallery").lightSlider({
			gallery: true,
			responsive: [],
			item: 1,
			loop: true,
			controls: true,
			thumbItem: 6,
			thumbMargin: 8,
			slideMargin: 0,
			enableDrag: false,
			currentPagerPosition: "middle",
			onSliderLoad: function (el) {
			}
		});

		/* - Contact Map */
		if ($("#map-canvas-contact").length == 1) {
			initialize("map-canvas-contact");
		}

		/* - Quick Contact Form */
		$("#btn_submit").on("click", function (event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function (data) {
					if (data["type"] == "error") {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input_name").val("");
						$("#input_phone").val("");
						$("#input_email").val("");
						$("#input_subject").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function (xhr, textStatus, errorThrown) {
					alert(textStatus);
				}
			});
		});

		/* - Expanding Search */
		new UISearch(document.getElementById("sb-search"));

	});	/* - Document Ready /- */

	/* * Window Load - Handler for .load() called */
	$(window).load(function () {
		/* - Site Loader */
		if (!$("html").is(".ie6, .ie7, .ie8")) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display", "none");
		}
	});

})(jQuery);