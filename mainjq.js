$(document).ready(() => {

  $('#topim').animate({
    'marginTop' : '-=40px',
    'opacity' : '1'
  }, 1200);;
  console.log('ready');

  const $inputtext = $(".inputfield");
  const $submitbutton = $(".submitem");
  let submittedalready = false;



  $inputtext.focus( (event) => {
    $('.inputfield').addClass('input-active');
    console.log("click in field");
  })

  $inputtext.blur( () => {
    $('.inputfield').removeClass('input-active');
    console.log("click in field")
  })

  $inputtext.keydown( (event) => {
    $('.inputfield').addClass('input-active-text');
  })

  $inputtext.keyup( (event) => {
    if ($(event.currentTarget).val() === '') {
      $('.submitem').removeClass('sub-active');
      console.log("is empty")
    }
    let str = $(event.currentTarget).val()
    if (str.indexOf("@") >= 0) {
      $('.submitem').addClass('sub-active');
    } else {
      $('.submitem').removeClass('sub-active');
    }
  });

  /*$submitbutton.on('click', (event) => {
    let act = $(event.currentTarget).attr("class");
    if (act.indexOf("sub-active") >= 0) {
      $('.success-wrap').fadeIn(400);
      submittedalready = true;
    };
  });*/

  $submitbutton.on('click', (event) => {
    let act = $(event.currentTarget).attr("class");
    let id = $(event.currentTarget).attr("id");
    if (act.indexOf("sub-active") >= 0) {
      if (id === "top") {
        $('.top').fadeIn(400);
        submittedalready = true;
      } else {
        $('.bot').fadeIn(400);
        submittedalready = true;
      }
    };
  });

  let $p1pic = $('#product-image');
  let $p2pic = $('#product-image2');
  let $p3pic = $('#product-image3');

  $('.products').on('click', (event) => {
    $('.products').removeClass('p-active');
    $('.products').removeClass('p-active-ani');
    $(event.currentTarget).addClass('p-active-ani');
    if (($(event.currentTarget).attr('id')) === "product1") {
      $p1pic.show()
      $p2pic.hide()
      $p3pic.hide()
    } else if (($(event.currentTarget).attr('id')) === "product2") {
      $p1pic.hide()
      $p2pic.show()
      $p3pic.hide()
    } else if (($(event.currentTarget).attr('id')) === "product3") {
      $p1pic.hide()
      $p2pic.hide()
      $p3pic.show()
    }

  });


  /*const scrollToFunc = (where) => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(where).offset().top
    }, 1000);
    console.log('already scrolled');
  };

  $("#accesslink").on('click', scrollToFunc("#request"));

  $("#mobileaccess").on('click', scrollToFunc("#request"));*/




  $("#accesslink").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#request").offset().top
    }, 1000);
  });

  $("#mobileaccess").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#request").offset().top
    }, 1000);
  });














});
