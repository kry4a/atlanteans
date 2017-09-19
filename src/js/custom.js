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
});