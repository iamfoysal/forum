
var navlinks= document.getElementById("navlinks"); 
function showMenu(){
      navlinks.style.right="0"
}
function hideMenu(){
     navlinks.style.right="-370px"
}       


//Get the button
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
