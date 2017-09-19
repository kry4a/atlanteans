$(function(){
  $('.faq__item').click(function(e){
    $(this).toggleClass('faq__item--opened');
  });


  $('.reviews').unslider();
});