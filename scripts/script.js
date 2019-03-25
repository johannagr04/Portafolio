function openNavbar () {
    document.querySelector("#navbar").style.width="100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
}
function closeNavbar () {
    document.querySelector("#navbar").style.width="0";
    document.querySelectorAll(".open")[0].style.opacity = 2;
}
function myFunction(x) {
    //mayor 700px
    if (x.matches) { // If media query matches
      $( "#navbar" ).removeClass( "overlay" ).addClass( "menu" );
      $( "#navbar-content" ).removeClass( "overlay-content" ).addClass( "menu-content" );
    } else {
      $( "#navbar" ).removeClass( "menu" ).addClass( "overlay" );
      $( "#navbar-content" ).removeClass( "menu-content" ).addClass( "overlay-content" );
      console.log( "pink");
    }
  }
  
  var x = window.matchMedia("(min-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)