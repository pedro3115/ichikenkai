$(function() {

  var $navi = $('#navigation');

  $('#menu-icon').click(function(){
    if($navi.hasClass('open')) {
      $navi.removeClass('open');
      $navi.slideUp();
    }
    else {
      $navi.addClass('open');
      $navi.slideDown();
    }
  });

  $('#main').click(function(){
    if($navi.hasClass('open')) {
      $navi.removeClass('open');
      $navi.slideUp();
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
