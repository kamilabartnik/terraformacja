const button = document.querySelector('button');

button.addEventListener('click', _ => {
  document.getElementById('sidebar').classList.toggle('collapsed');
})

$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('nav').addClass('fixed');
          }
          else {
              $('nav').removeClass('fixed');
          }
     });
 });
