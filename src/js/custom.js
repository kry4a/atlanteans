$(function(){

  $('.form__field').change(function(){
    $(this).removeClass('error');
  });
  $('.faq__item').click(function(e){
    $(this).toggleClass('faq__item--opened');
  });


  $('.reviews').unslider({
    nav:false
  });

  $('#callback_btn').click(function(e){
    $('.popup__bg').show();
    $('.popup--callback').show();
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

  $('.plan__button').click(function(e){
    $('.payment__methods').remove();
    console.log('plan__button clicked');
    var plan = $(this).data('plan');
    var price = $(this).data('price');

    var payment_form = $('#payment-form');
    payment_form.find('input[name="formcomment"]').val('Тариф: '+plan);
    payment_form.find('input[name="short-dest"]').val('Тариф: '+plan);
    payment_form.find('input[name="sum"]').val(price);
    
    
    var methods = '<ul class="payment__methods"><li class="payment__title">Оплатить с помощью</li>'+
      '<li><a href="#" data-payment-type="AC" class="payment__method">Visa,MasterCard</a></li>'+
      '<li><a href="#" data-payment-type="PC" class="payment__method">Яндекс.Деньги</a></li>'+
      '<li><a href="#" data-payment-type="MC" class="payment__method">Сотовый телефон</a></li>'+
    '</ul>';

    $(this).after(methods);
    
    return false;
  });

  $('.plan').on('click', '.payment__method', function() {
    var type = $(this).data('payment-type');
    var payment_form = $('#payment-form');
    payment_form.find('input[name="paymentType"]').val(type);
    payment_form.submit();
    return false;
  });
  
   $(document).on("click", function(e) {
    if ($(e.target).is(".payment__methods") === false) {
      $(".payment__methods").remove();
    }
  });

  $('.form__button').click(function(e){
    var target =  $(this).data('target');
    if (target) {
      var form = $('#'+target);
      var method = form.find('input[name="method"]').val();  

      form.find('input.required').each(function(){
        var val=$(this).val();
        if (val=='') {
          $(this).addClass('error');  
        }
      });
      if (form.find('input.error').length) return false;
      e.preventDefault();
      
      $.ajax({
        method: 'POST',
        url: '/mailer.php',
        data: form.serialize(),
        dataType: 'json',
        success: function (json) {
            console.log(json);
            if (json['status']) {
              form.find('input.required').each(function(){
                $(this).val('');
              });
              form.append('<p class="popup__title">Спасибо за обращение!</p>');
              
              $('.popup__title').fadeOut(1500, function(){ $(this).remove();});
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      });
      
    }

    return false;
  }); 

});