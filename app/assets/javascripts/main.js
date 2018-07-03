(function ($) {
    "use strict";

$(document).ready(function(){
	
/*---------------------
 1. slicknav
--------------------- */	
	$('#mobile-menu').slicknav({	
	allowParentLinks: true
	});	

/*---------------------
 1. features-curosel
--------------------- */    
	$(".features-curosel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 4,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [979,3],	
	itemsMobile : [767,1],	
	});	
	
/*---------------------
 1. sale-curosel
--------------------- */    
	$(".sale-curosel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 1,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsMobile : [767,1],	
	});	
	
/*---------------------
 1. category-curosel
--------------------- */    
	$(".category-curosel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 2,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,2],
	itemsDesktopSmall : [979,2],
	itemsMobile : [767,1]
	});
	
/*---------------------
 1. category-curosel-home-3
--------------------- */    
	$(".category-curosel-home-3").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 3,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,2],
	itemsMobile : [767,1]
	});	
	
/*---------------------
 1. testimonial-curosel
--------------------- */    
	$(".single-testimonial").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 1,
	pagination:true,
	navigation:false,
	transitionStyle : "backSlide",
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsMobile : [767,1]
	});	
	
/*---------------------
 1. recent-post-curosel
--------------------- */    
	$(".recent-post-curosel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 3,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
	itemsMobile : [767,1]
	});		
/*---------------------
 1. recent-post-curosel-home-3
--------------------- */    
	$(".recent-post-curosel-home-3").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 2,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,2],
	itemsDesktopSmall : [979,2],
	itemsMobile : [767,1]	
	});		
/*---------------------
 1. brand-curosel
--------------------- */    
	$(".brand-curosel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 4,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [979,4],
	itemsMobile : [767,2]
	});	
	
/*---------------------
 1. brand-curosel-home-2
--------------------- */    
	$(".brand-curosel-home-2").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 2,
	pagination:true,
	navigation:false,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,2],
	itemsDesktopSmall : [979,2]	
	});

/*---------------------
 1. features-curosel-home-4
--------------------- */    
	$(".features-curosel-home-4").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 3,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,2],
	itemsMobile : [767,1]
	});	
	
/*---------------------
 1. category-curosel-home-4
--------------------- */    
	$(".category-curosel-home-4").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 3,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,2],
	itemsMobile : [767,1]
	});	
/*---------------------
 1. category-curosel-home-5
--------------------- */    
	$(".category-curosel-home-5").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 4,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [979,3],
	itemsMobile : [767,1]
	});
	
/*---------------------
 1. sale-product-curosel-home-4
--------------------- */    
	$(".sale-product-curosel-home-4").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 3,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,2],
	itemsMobile : [767,1]
	});	
	
/*---------------------
 1. recent-post-curosel-home-4
--------------------- */    
	$(".recent-post-curosel-home-4").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 1,
	pagination:true,
	navigation:false,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsMobile : [767,1]
	});	
	
/*---------------------
 1. recent-post-curosel-home-4
--------------------- */    
	$(".logo-right-curosel-home-4").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 1,
	pagination:true,
	navigation:false,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsMobile : [767,1]
	});	
	
/*---------------------
 1. right-testimonial-curosel
--------------------- */    
	$(".right-testimonial-curosel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 1,
	pagination:true,
	navigation:false,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsMobile : [767,1]
	});	

/*---------------------
 1. recent-post-curosel-home-6
--------------------- */    
	$(".recent-post-curosel-home-6").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 2,
	pagination:false,
	navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,2],
	itemsDesktopSmall : [979,2],
	itemsMobile : [767,1]
	});
	
/*---------------------
 1. blog-curosel
--------------------- */    
	$(".blog-curosel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 1,
	pagination:false,
	navigation:true,
	slideSpeed : 2000,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],		  
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsMobile : [767,1]
	});		
	
/*---------------------
    countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});	

  // price slider=========
 $(function() {
  $( "#slider-range" ).slider({
   range: true,
   min: 0,
   max: 600,
   values: [ 75, 500 ],
   slide: function( event, ui ) {
    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
   }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
 });

/* --------------------------------------------------------
   contact-accordion
* -------------------------------------------------------*/ 
	$(".coupon-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});
/* --------------------------------------------------------
   payment-accordion
* -------------------------------------------------------*/ 
	$(".payment-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});

/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });
	 
/*---------------------
  scrollUp
--------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 200,
        animation: 'fade'
    });		 
	 
 
	
}); 

})(jQuery);	