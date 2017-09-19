$(function(){
  $('.faq__item').click(function(e){
    $(this).toggleClass('faq__item--opened');
  });


  $('.reviews').unslider({
    nav:false
  });

  $('#callback_btn').click(function(e){
    $('.popup__bg').show();
    $('.popup').show();
    return false;
  });

  $('.popup__close').click(function(e){
    $('.popup__bg').hide();
    $('.popup').hide();
    return false;
  });
  
  $(".menu__link").click(function(e) {
    var target = $(this).data('target');
    $('html, body').animate({
        scrollTop: $('#'+target).offset().top - 50
    }, 750);
    
    return false;
  });
  
  $(".menu__toggler").click(function(e) {
    $('.menu').toggleClass('active');
  });

});