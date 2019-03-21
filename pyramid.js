$(document).ready(() => {

  var controller = new ScrollMagic.Controller();

  //Pin the intro


  var para2 = new ScrollMagic.Scene({
    triggerElement: '#py2',
    triggerHook: 0.8
  })
  .setClassToggle('.notneeded', 'deact')
  .addTo(controller);

  var para3 = new ScrollMagic.Scene({
    triggerElement: '#py3',
    triggerHook: 0.7
  })
  .setClassToggle('.first', 'bigfini')
  .addTo(controller);

  var para3gr = new ScrollMagic.Scene({
    triggerElement: '#py3',
    triggerHook: 0.7
  })
  .setClassToggle('.gr', 'bigfini2')
  .addTo(controller);

  var newScene = new ScrollMagic.Scene({
    triggerElement: '#py3p',
    triggerHook: 0.30
  })
  .setClassToggle('.biggrey', 'newcolor')
  .addTo(controller);

  var newScene2 = new ScrollMagic.Scene({
    triggerElement: '#py3p',
    triggerHook: 0.3
  })
  .setClassToggle('.topb', 'fadecolor')
  .addTo(controller);

  var graphscene = new ScrollMagic.Scene({
    triggerElement: '#dim',
    triggerHook: 0.4
  })
  .setClassToggle('.action', 'moveIn')
  .reverse(false)
  .addTo(controller);

  var graphscene2 = new ScrollMagic.Scene({
    triggerElement: '#dim',
    triggerHook: 0.4
  })
  .on('start', function () {
      console.log("passed trigger");
      setTimeout(downShow, 2000);
  })
  .addTo(controller);


  let gg = document.getElementById('cap1');

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

  const downShow = () => {
    $(".t2").addClass("downshow");
  }


  $('#graphpicgreen').click(() => {
    console.log('green one clicked');
    $('#graphpichidden').hide("slide", { direction: "right" }, 1500);
  })


  const ggslide = () => {
    if (isScrolledIntoView(gg)) {
      $('#graphpichidden').hide("slide", { direction: "right" }, 1500);
    }
  }

  $("#trigger").click(() => {
    console.log("doing something");
    dosomething();
  });

  const dosomething = () => {
    $('.action').toggleClass('moveIn');
  }


  window.addEventListener('scroll', ggslide);

});
