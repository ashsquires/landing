$(document).ready(() => {


  function activatedriv() {
    boxwidth();
    setTimeout(slidein, 800);
    bgcolor();
  };



  function slidein() {
    //console.log("why long?");
    $(".dnew").fadeIn( 2000 );
  }

  function bgcolor() {
    $("#drivs").removeClass("c1").addClass("c2");
    $(".dinit").removeClass("dinit").addClass("dold");
    //console.log("bgchange");
  }

  function boxwidth() {
    console.log("box");
    $(".driver").animate({width:"80%"}, 1200);
    $(".d1").animate({width:"633px"}, 1400);
    $(".d2").animate({width:"460px"}, 1200);
    $(".d3").animate({width:"288px"}, 800);
    setTimeout( ( () => {
      $(".driver").css({"width":"80%"});
      console.log("behind enenmy");
    }),1200);
  }


  let vd1 = document.getElementById('drivs');

  function isScrolledIntoView(x) {
      var rect = x.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true:
      var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
      // Partially visible elements return true:
      //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
  }

  const graphhand = () => {
    if (isScrolledIntoView(vd1)) {
      setTimeout(activatedriv, 1000);
      console.log("scrollei");
      window.removeEventListener('scroll', graphhand);
    }
  }

  window.addEventListener('scroll', graphhand);

})
