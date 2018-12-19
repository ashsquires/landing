let graph = document.getElementById('graph1');
let g1 = document.getElementById('g1');
let g2 = document.getElementById('g2');
let g3 = document.getElementById('g3');

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

const graphhand = () => {
  if (isScrolledIntoView(g2)) {
    graph.src = "Images/graph2.svg";
  } else if (isScrolledIntoView(g3)) {
    graph.src = "Images/graph3.svg";
  } else if (isScrolledIntoView(g1)) {
    graph.src = "Images/graph1.svg";
  }
}

window.addEventListener('scroll', graphhand);
