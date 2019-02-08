let q2 = document.getElementById('quadtwo');
let q3 = document.getElementById('quadthree');

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
  if (isScrolledIntoView(q2)) {
    $("#q2text").slideDown( "slow" );
    console.log("q2 in viewport");
  } else if (isScrolledIntoView(q3)) {
    $("#q3text").slideDown( "slow" );
    console.log("q3 in viewport");
  }
}

window.addEventListener('scroll', graphhand);
