$(function() {

  var $navi = $('.navigation');
  var $ham = $('.hamburger');

  $ham.on('click', function () {
    $ham.toggleClass('show');
  });

  $ham.click(function(){
    if($navi.hasClass('open')) {
      $navi.removeClass('open');
      $navi.slideUp();
      $('.dark').hide();
    }
    else {
      $navi.addClass('open');
      $navi.slideDown();
      $('.dark').show();
    }
  });

  var swiper = new Swiper('.swiper-container', {
    loop:true,
    speed:1200,
    touchRatio:2,
    longSwipesRatio:0.3,
    disableOnInteraction:false,
    pagination: {
		  el: '.swiper-pagination',
		  type: 'bullets',
		  clickable: true
	  },
    autoplay:{
      delay:3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

});
