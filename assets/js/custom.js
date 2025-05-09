/**
	Template Name 	 : Samar
	Author			 : DexignZone
	Version			 : 2.0
	Author Portfolio : https://themeforest.net/user/dexignzone/portfolio
	
	Core script to handle the entire theme and core functions
**/

var Samar = function(){
	'use strict';
	
	var screenWidth = $( window ).width();
	
	var homeSearch = function() {
		/* top search in header on click function */
		var quikSearch = jQuery("#quik-search-btn");
		var quikSearchRemove = jQuery("#quik-search-remove");
		
		quikSearch.on('click',function() {	
			jQuery('.dz-quik-search').fadeIn(500);
			jQuery('.dz-quik-search').addClass('On');
		});
		quikSearchRemove.on('click',function() {
			jQuery('.dz-quik-search').fadeOut(500);
			jQuery('.dz-quik-search').removeClass('On');
		});
		/* top search in header on click function End*/
	}
	
	/* One Page Layout ============ */
	var onePageLayout = function() {
		
		if($(".scroll").length > 0 ) { 
			var headerHeight = parseInt($('.onepage').css('height'), 10);

			$(".scroll").unbind().on('click',function(event){
				event.preventDefault();
				
				if (this.hash !== "") {
					var hash = this.hash;	
					var seactionPosition = $(hash).offset().top;
					var headerHeight =   parseInt($('.onepage').css('height'), 10);
					
					$('body').scrollspy({target: ".navbar", offset: headerHeight+2}); 
					
					var scrollTopPosition = seactionPosition - (headerHeight);
					
					$('html, body').animate({
						scrollTop: scrollTopPosition
					}, 800, function(){
						
					});
				}   
			});
			$('body').scrollspy({target: ".navbar", offset: headerHeight + 2});  
		}
	}
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		var headerTop = 0;
		var headerNav = 0;
		
		setTimeout(function(){
			$('.header .sticky-header').removeClass('is-fixed');
			$('.header').removeAttr('style');
			
			if(jQuery('.header').length > 0 ){
				if(jQuery('.header .top-bar').length > 0 && screenWidth > 991){
					headerTop = $('.header .top-bar').outerHeight();
					headerNav = $('.header .main-bar').outerHeight();
				}else{
					headerNav = $('.logo-header').height();
				}
			}
			
			var headerHeight = Math.round(headerNav + headerTop);
			jQuery('.header').css('height', headerHeight);
		}, 500);
	}
	
	/* Load File ============ */
	var dzTheme = function(){
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if(jQuery(this).parent().hasClass('open')){
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
		
		jQuery('.full-sidenav .navbar-nav > li > a').next('.sub-menu').slideUp();
		jQuery('.full-sidenav .sub-menu > li > a').next('.sub-menu').slideUp();
			
		jQuery('.full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a').unbind().on('click', function(e){
			jQuery('.full-sidenav .navbar-nav > li > a').not(this).next('.sub-menu').slideUp();
			jQuery(this).next('.sub-menu').toggle(500);
		});
		jQuery('.menu-icon').on('click',function(){
			jQuery('.menu-close,.full-sidenav').addClass('active');
			onePageLayout();
		});
		jQuery('.menu-close').on('click',function(){
			jQuery('.menu-close,.full-sidenav').removeClass('active');
		});
		
		jQuery('.contact-btn').on('click',function(){
			jQuery('.contact-button, .contact-button-2').toggleClass('active');
			
		});
		jQuery('.enter-button, .enquire').on('click',function(){
			jQuery('.enter-form').addClass('active');
			
			setTimeout(function() {
				jQuery('.enter-form').removeClass('active');
			}, 500);
		});
		
		
		jQuery('.monthly').on('click',function(){
			jQuery('.toggle-tabs').removeClass('yearly');
			jQuery('.toggle-tabs').addClass('monthly');
		});
		jQuery('.yearly').on('click',function(){
			jQuery('.toggle-tabs').addClass('yearly');
			jQuery('.toggle-tabs').removeClass('monthly');
		});
	}
	
	
	/* Magnific Popup ============ */
	var MagnificPopup = function(){
		if($(".mfp-gallery").length > 0 ) {
			/* magnificPopup function */
			jQuery('.mfp-gallery').magnificPopup({
				delegate: '.mfp-link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small></small>';
					}
				}
			});
		}
		if($(".video").length > 0 ) {
		/* magnificPopup function end */
		
		/* magnificPopup for paly video function */		
		jQuery('.video').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						 '<div class="mfp-close"></div>'+
						 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						 '<div class="mfp-title">Some caption</div>'+
						 '</div>'
			},
			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});
		}
		if($(".popup-youtube, .popup-vimeo, .popup-gmaps").length > 0 ) {
			/* magnificPopup for paly video function end*/
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: true
			});
		}
	}
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		var scrollTop = jQuery("button.scroltop");
		
		/* Page Scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	/* handle Accordian ============ */
	var handleAccordian = function(){
		$('.accordion-btn').on('click',function(){
			$(this).closest('.accordion-wrapper').find('.accordion-content').slideUp('hide');
			if($(this).hasClass('active')){
				$(this).closest('.accordion-wrapper').find('.accordion-btn').removeClass('active');
				$(this).removeClass('active');
				var contentSelector = $(this).attr('data-dz-item');
				$('#'+contentSelector).slideUp('hide');
			
			}else{
				$(this).closest('.accordion-wrapper').find('.accordion-btn').removeClass('active');
				$(this).addClass('active');
				var contentSelector = $(this).attr('data-dz-item');
				$('#'+contentSelector).slideDown('hide');
			}
		});
	}
	
	/* Equal Height ============ */
	var equalHeight = function(container) {
		
		if(jQuery(container).length == 0){
			return false
		}
		
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			$el, topPosition = 0;
			
		$(container).each(function() {
			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}
	
	/* File Input ============ */
	var fileInput = function(){
		/* Input type file jQuery */	 	 
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this);
			var	numFiles = input.get(0).files ? input.get(0).files.length : 1;
			var	label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});
		
		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			input = jQuery(this).parents('.input-group').find(':text');
			var log = numFiles > 10 ? numFiles + ' files selected' : label;
		
			if (input.length) {
				input.val(log);
			} else {
				//if (log) alert(log);
			}
		});
		/* Input type file jQuery end*/
	}
	
	/* Header Fixed ============ */
	var headerFix = function(){
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
				} else {
					menu.removeClass('is-fixed');
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(){
		if(jQuery('#masonry, .masonry').length > 0)
			{
				jQuery('.filters li').removeClass('active');
				jQuery('.filters li:first').addClass('active');
				var self = jQuery("#masonry, .masonry"); 
				var filterValue = "";
		 
				if(jQuery('.card-container').length > 0)
				{
					var gutter = (self.data('gutter') === undefined)?0:self.data('gutter');
					gutter = parseInt(gutter);
	
					var columnWidthValue = (self.attr('data-column-width') === undefined)?'':self.attr('data-column-width');
					console.log(columnWidthValue);
					if(columnWidthValue != ''){columnWidthValue = parseInt(columnWidthValue);}
						filter: filterValue,
						self.masonry({
							gutter: gutter,
							columnWidth:columnWidthValue, 
							isAnimated: true,
							itemSelector: ".card-container",
							stagger: 30
						});
						
				} 
			}

			if(jQuery('#masonry5').length > 0){
				$('#masonry5').masonry({
					itemSelector: '.grid-item',
					columnWidth: '.grid-sizer',
					percentPosition: true
				})
				var self2 = jQuery("#masonry5"); 
			}

			if(jQuery('.filters').length)
			{
				jQuery(".filters li:first").addClass('active');
				
				jQuery(".filters").on("click", "li", function() {
					
					jQuery('.filters li').removeClass('active');
					jQuery(this).addClass('active');
					
					var filterValue = $(this).attr("data-filter");
					self2.isotope({ 
						filter: filterValue,
						masonry: {
							itemSelector: '.grid-item',
							columnWidth: '.grid-sizer',
							percentPosition: true
						}
					});
				});
			}
	
			$('.filters li').on('click',function(){
				$('li').removeClass('active');
				$(this).addClass('active');
			});
		
	}
	
	/* Counter Number ============ */
	var counter = function(){
		if(jQuery('.counter').length)
		{
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		}
	}
	
	/* Video Popup ============ */
	var handleVideo = function(){
		/* Video responsive function */	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
		/* Video responsive function end */
	}
	
	/* Gallery Filter ============ */
	var handleFilterMasonary = function(){
		/* gallery filter activation = jquery.mixitup.min.js */ 
		if (jQuery('#image-gallery-mix').length) {
			jQuery('.gallery-filter').find('li').each(function () {
				$(this).addClass('filter');
			});
			jQuery('#image-gallery-mix').mixItUp();
		};
		if(jQuery('.gallery-filter.masonary').length){
			jQuery('.gallery-filter.masonary').on('click','span', function(){
				var selector = $(this).parent().attr('data-filter');
				jQuery('.gallery-filter.masonary span').parent().removeClass('active');
				jQuery(this).parent().addClass('active');
				jQuery('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
		}
		/* gallery filter activation = jquery.mixitup.min.js */
	}
	
	
	/* Resizebanner ============ */
	var handleBannerResize = function(){
		$(".full-height").css("height", $(window).height());
	}
	
	/* Countdown ============ */
	var handleCountDown = function(WebsiteLaunchDate){
		/* Time Countr Down Js */
		if($(".countdown").length)
		{
			$('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}
	
	/*handlePlaceholderAnimation*/
	var handlePlaceholderAnimation = function(){
		$('input, textarea').focus(function(){
			$(this).parents('.form-group').addClass('focused');
		});
		
		$('input, textarea').blur(function(){
			var inputValue = $(this).val();
			if ( inputValue == "" ) {
				$(this).removeClass('filled');
				$(this).parents('.form-group').removeClass('focused');  
			} else {
				$(this).addClass('filled');
			}
		})
	}
	
	/* WOW ANIMATION ============ */
	var wow_animation = function(){
		if($('.wow').length > 0){
			var wow = new WOW({
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       50,          // distance to the element when triggering the animation (default is 0)
				mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();
		}	
	}
	
	/* Website Launch Date */ 
	var WebsiteLaunchDate = new Date();
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
	/* Website Launch Date END */ 
	
	/* LightGallery ============ */
	var handleLightgallery = function () {
        if (jQuery('#lightgallery').length > 0) {
            lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgThumbnail, lgZoom, lgVideo],
                selector: '.lg-item',
                thumbnail: true,
                exThumbImage: 'data-src'
            });
    }}	
	/* NiceSelect Function*/
	var handleNiceSelect = function(){
		if($('select').length > 0){
			$('select:not(.ignore)').niceSelect();
		}
	}
	var handleTab = function(){
		$('.tab-btn').on('click',function(){
			var tab_id = $(this).attr('data-tab');
			$(this).closest('.dz-tab-area').closest_descendent('.nav-tabs,.nav-pills').find('.tab-btn').removeClass('active');
			$(this).closest('.dz-tab-area').closest_descendent('.tab-content-area').children().removeClass('show');
			$(this).addClass('active');
			$(this).closest('.dz-tab-area').find("#"+tab_id).addClass('show');
		})	
	}
	
	var boxHover = function(){
		jQuery('.pricingtable-wrapper, .box-hover').on('mouseenter',function(){
			var selector = jQuery(this).parent().parent();
			selector.find('.pricingtable-wrapper, .box-hover').removeClass('active');
			jQuery(this).addClass('active');
		});
	}
	
	var customFileUpload = function(){	
		$(".custom-file-input").on("change", function() {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
	}
	
	/* Range ============ */
	var priceslider = function(){
		if($(".price-slide, .price-slide-2").length > 0 ) {
			$("#slider-range,#slider-range-2").slider({
				range: true,
				min: 300,
				max: 4000,
				values: [0, 5000],
				slide: function(event, ui) {
					var min = ui.values[0],
						max = ui.values[1];
					  $('#' + this.id).prev().val("$" + min + " - $" + max);
				}
			});
		}
	}
	
	/* Handle Pricing Tabs ============ */
	var handlePricingTabs = function(){
		jQuery('.pricingtable-price.year').css("display","none");
		jQuery('.toggle-tabs').on('click',function(){
			if(jQuery('.toggle-tabs').hasClass('monthly')){
				jQuery('.pricingtable-price.year').css("display","none");
				jQuery('.pricingtable-price.month').css("display","block");
			}
			if(jQuery('.toggle-tabs').hasClass('yearly')){
				jQuery('.pricingtable-price.year').css("display","block");
				jQuery('.pricingtable-price.month').css("display","none");
			}
		})
	}
	
	/* Handle Navbar Toggler ============ */
	var handleNavbarToggler = function(){
		jQuery('.navbar-toggler').on('click',function(){
			jQuery('body').toggleClass('screen-lock');
			$('.header-nav').toggleClass('show');
		});
	}
	
	/* Current Active Menu ============ */
	var handleCurrentActive = function() {
		for (var nk = window.location,
				o = $("ul.navbar a").filter(function(){
				return this.href == nk;
			})
			.addClass("active").parent().addClass("active");;)
		{
		if (!o.is("li")) break;
			o = o.parent().addClass("show").parent('li').addClass("active");
		}
	}
	

	
	/* Pointer Effect ============ */
	var handlePointerEffect = function(){
		
		const pointer = document.createElement("div")
		pointer.id = "pointer-dot"
		const ring = document.createElement("div")
		ring.id = "pointer-ring"
		document.body.insertBefore(pointer, document.body.children[0])
		document.body.insertBefore(ring, document.body.children[0])

		let mouseX = -100
		let mouseY = -100
		let ringX = -100
		let ringY = -100
		let isHover = false
		let mouseDown = false
		const init_pointer = (options) => {

			window.onmousemove = (mouse) => {
				mouseX = (mouse.clientX != undefined)?mouse.clientX:-100;
				mouseY = (mouse.clientY != undefined)?mouse.clientY:-100;
			}

			window.onmousedown = (mouse) => {
				mouseDown = true
			}

			window.onmouseup = (mouse) => {
				mouseDown = false
			}

			const trace = (a, b, n) => {
				return (1 - n) * a + n * b;
			}
			window["trace"] = trace

			const getOption = (option) => {
				let defaultObj = {
					pointerColor: "#750c7e",
					ringSize: 15,
					ringClickSize: (options["ringSize"] || 15) - 5,
				}
				if (options[option] == undefined) {
					return defaultObj[option]
				} else {
					return options[option]
				}
			}

			const render = () => {
				if(mouseX != undefined){
					ringX = trace(ringX, mouseX, 0.2)
					ringY = trace(ringY, mouseY, 0.2)
	
					if (document.querySelector(".p-action-click:hover")) {
						pointer.style.borderColor = getOption("pointerColor")
						isHover = true
					} else {
						pointer.style.borderColor = "white"
						isHover = false
					}
					
					ring.style.borderColor = getOption("pointerColor")
					
					if (mouseDown) {
						ring.style.padding = getOption("ringClickSize") + "px"
					} else {
						ring.style.padding = getOption("ringSize") + "px"
					}
					
					pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
					
					ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`
	
					requestAnimationFrame(render)
				}
			}
			requestAnimationFrame(render)
		}
		
		jQuery('a').on('mousemove',function(e){
			jQuery('#pointer-ring').addClass('active');
		});
		
		jQuery('a').on('mouseleave',function(e){
			jQuery('#pointer-ring').removeClass('active');
		});

		init_pointer({});
	}
	
	var setCurrentYear = function () {
		const currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		let elements = document.getElementsByClassName('current-year');

		for (const element of elements) {
			element.innerHTML = currentYear;
		}
	}
	
	/* Handle Support ============ */
	var handleSupport = function(){
		var support = '<script id="DZScript" src="https://dzassets.s3.amazonaws.com/w3-global.js"></script>';
		jQuery('body').append(support);
	}
	
	
	/* Function ============ */
	return {
		init:function(){
			handleNiceSelect();
			handleTab();
			boxHover();
			wow_animation();
			onePageLayout();
			dzTheme();
			homeSearch();
			handleResizeElement();
			handlePlaceholderAnimation();
			MagnificPopup();
			handleAccordian();
			scrollTop();
			fileInput();
			headerFix();
			handleVideo();
			handleFilterMasonary();
			handleCountDown(WebsiteLaunchDate);
			handleBannerResize();
			handleLightgallery();
			customFileUpload();
			priceslider();
			handlePricingTabs();
			handleNavbarToggler();
			handleCurrentActive();
			handlePointerEffect();
			setCurrentYear();
			handleSupport();
			setTimeout(function(){
			masonryBox();
		}, 1000);
		},
		
		load:function(){
			equalHeight('.equal-wraper .equal-col');
			counter();
			setTimeout(function(){
				masonryBox();
			}, 1000);
		},
		
		resize:function(){
			screenWidth = $(window).width();
			dzTheme();
			setTimeout(function(){
				handleResizeElement();
			}, 500);
			
		}
	}
	
}();
(function($) {
	$.fn.closest_descendent = function(filter) {
		var $found = $(),
			$currentSet = this; // Current place
		while ($currentSet.length) {
			$found = $currentSet.filter(filter);
			if ($found.length) break;  // At least one match: break loop
			// Get all children of the current set
			$currentSet = $currentSet.children();
		}
		return $found.first(); // Return first match of the collection
	}    
})(jQuery);
/* Document.ready Start */	
jQuery(document).ready(function() {
    Samar.init();
	
	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});

});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	Samar.load();
	
	setTimeout(function(){
		jQuery('#loading-area').remove();
	}, 500);
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	Samar.resize();
});
/*  Window Resize END */