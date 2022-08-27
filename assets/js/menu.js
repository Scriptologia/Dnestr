$(document).ready(function() {
    //меню бургер
    $('.menu-burger').click(function() {
        $('.menu-burger').toggleClass('open-menu');
        $('.menu-mobile > .menu-items').toggleClass('show');
        $('main').toggleClass('main-fixed');
    });

    //модальное окно
    var modalAll = $('[data-modal]');
    $('[data-modal-button]').click(function () {
        let modal = $(this).data('modalButton');
        $('[data-modal='+modal+']').toggleClass('active');
        $('body').addClass('fixed');
    });
    $('[data-close]').click( function () {
        let thisModal = $(this).parents('[data-modal]');
       if (thisModal.hasClass('active')) {thisModal.removeClass('active');}
        if($('.active[data-modal]').lenght == 0) $('body').removeClass('fixed');
    });
    modalAll.on('click', function () {
        let thisActive = $(this);
        let thisChild = event.target;
          if (thisActive.hasClass('active') && thisChild === this)  thisActive.removeClass('active');
          if($('.active[data-modal]').length == 0) $('body').removeClass('fixed');
    });

    $('.lang').click(function () {
        $(this).find('.lang-list').toggleClass('open');
    })
});


