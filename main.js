$(document).ready(function() {
  $('.shoppingcardc').hide();
  $('.parapluiec').hide();
  $('.shoppingcard').show();
  $('.parapluie').show();

  $('#yellow').css({
    'opacity': '1',
  });


// YELLOW > CORAL
 $('#coral').click(function(){
    $('.shoppingcardc').show();

    $('.parapluiec').show();

    $('body').css({
      'color': '#F2423D',
    });

    $('#texttop').slideUp(500);
    $('#texttopC').slideDown(500);
    $('#texttopC').delay(500).show();
    $('#texttopB').slideUp(500)


    $('.line').css({
      'borderBottom': '2px solid #F2423D',
    });
    $('.button').css({
      'border': '2px solid #F2423D',
    });
    $('#coral').css({
      'opacity': '1',
    });
    $('#yellow').css({
      'opacity': '0.5',
    });
    $('#blue').css({
      'opacity': '0.5',
    });
    $('.bigrond').css({
      'backgroundColor': '#F1C40F',
    });

    $('.parapluie').fadeTo(1000,0.00, function() {
    $('.parapluie').attr('src', 'assets/umbcoral.png');
    });
    $('.shoppingcard').fadeTo(1000,0.00, function() {
    $('.shoppingcard').attr('src', 'assets/shoppingcardc.png');
    });

 });

 // CORAL > BLEU
  $('#blue').click(function(){
     $('.shoppingcardb').show();
     $('.parapluieb').show();
     $('body').css({
       'color': '#5D70FF',
     });
     $('#texttopC').slideUp(500)
     $('#texttop').slideUp(500)
     $('#texttopB').slideDown(500)
     $('#texttopB').delay(500).show()

     $('.line').css({
       'borderBottom': '2px solid #5D70FF',
     });
     $('.button').css({
       'border': '2px solid #5D70FF',
     });
     $('#blue').css({
       'opacity': '1',
     });
     $('#yellow').css({
       'opacity': '0.5',
     });
     $('#coral').css({
       'opacity': '0.5',
     });
     $('.bigrond').css({
       'backgroundColor': '#F2423D',
     });
     $('.parapluiec').fadeTo(1000,0.00, function() {
     $('.parapluiec').attr('src', 'assets/umbrellapurple.png');
     });
     $('.parapluie').fadeTo(1000,0.00, function() {
     $('.parapluie').attr('src', 'assets/umbrellapurple.png');
     });
     $('.shoppingcardc').fadeTo(1000,0.00, function() {
     $('.shoppingcardc').attr('src', 'assets/shoppingcardb.png');
     });
     $('.shoppingcard').fadeTo(1000,0.00, function() {
     $('.shoppingcard').attr('src', 'assets/shoppingcardb.png');
     });
  });
  // > YELLOW
   $('#yellow').click(function(){
      $('.shoppingcard').show();

      $('.parapluie').show();

      $('body').css({
        'color': '#F1C40F',
      });

      $('#texttopC').slideUp(500);
      $('#texttopB').slideUp(500)
      $('#texttop').slideDown(500);
      $('#texttop').delay(500).show();

      $('.line').css({
        'borderBottom': '2px solid  #F1C40F',
      });
      $('.button').css({
        'border': '2px solid  #F1C40F',
      });
      $('#yellow').css({
        'opacity': '1',
      });
      $('#blue').css({
        'opacity': '0.5',
      });
      $('#coral').css({
        'opacity': '0.5',
      });

      $('.parapluiec').fadeTo(500,0);
      $('.parapluieb').fadeTo(500,0);
      $('.parapluie2').fadeTo(500,1, function() {
      $('.parapluie').attr('src', 'assets/umbrellayellow.png');
      });
      $('.shoppincardc').fadeTo(500,0);
      $('.shoppingcardb').fadeTo(500,0);
      $('.shoppingcard2').fadeTo(500,1, function() {
      $('.shoppingcard').attr('src', 'assets/shoppingcard.png');
      });

   });


});
