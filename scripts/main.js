const button = document.querySelector('button');

// button.addEventListener('click', _ => {
//   document.getElementById('sidebar').classList.toggle('collapsed');
// })

// $(document).ready(function(){
//     $(window).bind('scroll', function() {
//     var navHeight = $( window ).height() - 70;
//           if ($(window).scrollTop() > navHeight) {
//               $('nav').addClass('fixed');
//           }
//           else {
//               $('nav').removeClass('fixed');
//           }
//      });
//  });



window.onscroll = function() {myFunction()};
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var fixed = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= fixed ) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}