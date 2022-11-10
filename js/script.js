// slider start
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});
// slider end
// scrol_my_menu_select start 
// Load Function start
$(window).on('load', function() {
  smoothScrolling($("#main_menu ul li a[href^='#']"), 50);
});
// Load Function end
// Active current Li start
function smoothScrolling($links, $topGap) {
  var links = $links;
  var topGap = $topGap;

  links.on("click", function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
              $("html, body").animate({
                  scrollTop: target.offset().top - topGap
              }, 1000, "easeInOutExpo");
              return false;
          }
      }
      return false;
  });
}
// Active current Li end

// scrol_my_menu_select end

// slick nav start
	$(function(){
		$('#menu').slicknav();
	});
  
// slick nav end

// menu hide start
$('ul#nav_menu').slicknav({
  prependTo: ".responsive-menu-wrap"
});

// menu hide end

