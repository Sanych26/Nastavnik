$(function(){
//telegram btn
            var btn = $('.telegram');
            var offset = $('.vitaliy2').offset();
            $(window).scroll(function() {
              if ($(window).scrollTop() > offset.top) {
                btn.addClass('show');
              } else {
                btn.removeClass('show');
              }
            });
  });
