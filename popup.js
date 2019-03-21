$(document).ready(()=> {



  const popshow = (event) => {
    $('.popup').hide();
    var target = $(event.target);

    if (target.is("div")) {
      target = target.children();
    }


    var popup = target.find('.popup');
    popup.show();
    var popper = new Popper(target,popup,{
      placement: 'bottom',
      modifiers: {
        flip: {
                behavior: ['left', 'right', 'top','bottom']
        },
        offset: {
                enabled: true,
                offset: '0,10'
        }
}
    });
    };

  $('.option').click(popshow);










})
