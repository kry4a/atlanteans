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

  $(".plan__button").click(function(e) {
    var plan = $(this).data('plan');
    console.log(plan);
    $('.popup__bg').show();
    $('.popup--plan').show();
    
    $('input[name="plan"]').val(plan);
    return false;
  });


  $('.form__button').click(function(e){
    var target =  $(this).data('target');
    if (target) {
      var form = $('#'+target);
      var method = form.find('input[name="method"]').val();  

      form.find('input[required]').each(function(){
        var val=$(this).val();
        if (val=='') {
          $(this).addClass('error');  
        }
      });

      if (form.find('input.error').length) return false;
      
      console.log('before submit');
      e.preventDefault();
      
      console.log('validated');
      $.ajax({
        method: 'POST',
        url: '/mailer.php',
        data: $('#order').serialize(),
        dataType: 'json',
        success: function (json) {
            console.log(json);
            if (json['status']) {
                console.log('success');
               
            } else {
                console.log('error');
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