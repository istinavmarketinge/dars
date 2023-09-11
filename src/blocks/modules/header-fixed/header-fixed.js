
$(function() {
 let header = $('.header-fixed');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 100) {
    header.addClass('display-block');
   } else {
    header.removeClass('display-block');
   }
 });
});