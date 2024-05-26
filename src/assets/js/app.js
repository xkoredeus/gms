$(window).on('load', function () {
    $('.preloader__wrapper').fadeOut();
    $('body').removeClass('is-loading');
});

$(() => {
    const reviewsSlider = new Swiper(".js-reviews-slider", {
        speed: 1200,
        // initialSlide: 1,
        // loop: true,
        navigation: {
            nextEl: ".js-reviews-slider-next",
            prevEl: ".js-reviews-slider-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            944: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            // 1200: {
            //     slidesPerView: 3,
            //     spaceBetween: 16,
            // },
        },
    });
});

// $(() => {
//     $(".js-button-anchor").click(function(e) {
//         e.preventDefault();
//         var aid = $(this).attr("data-to");
//         $('html,body').animate({scrollTop: $(aid).offset().top},1300);
//     });
// });

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});


// header
$(() => {
    $('.js-toggle-menu').on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('is-loading');
        $('.menu').toggleClass('active');
    });
});


$(() => {
    $('.js-toggle-question').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.faq-text').slideToggle();
    });
});

// containers
// $(() => {
//     $(document).on('click', function (e) {
//         var container = $('.header');
//
//         if (!container.is(e.target) && container.has(e.target).length === 0) {
//             $('.layout').removeClass('blur');
//             $('.header-search__base').removeClass('active');
//             $('.search-dropdown').removeClass('active');
//         }
//     });
// });


$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false,
        scrolling: true,
    });

    $('.js-close-fancybox').on('click', function () {
        $.fancybox.close();
    });
});

$(window).on('load', function () {
    function initSpec() {
        var specSlider = new Swiper(".js-spec-slider", {
            speed: 1200,
            navigation: {
                nextEl: ".js-spec-slider-next",
                prevEl: ".js-spec-slider-prev",
            },
            slidesPerView: 1,
            spaceBetween: 8,

            // on: {
            //     beforeInit: function () {
            //     }
            // }
        });
        if ($(window).width() < 976) {

            $('.spec-row')
                .addClass('swiper-wrapper')
                .removeClass('row')
                .parents('.spec-row__wrapper')
                .addClass('js-spec-slider')
                .find('.spec-slide')
                .addClass('swiper-slide')
                .removeClass('col-lg-6');

            specSlider.init();
        } else {
            if (specSlider) {
                specSlider.destroy(true, true);
                setTimeout(function () {
                    $('.spec-row')
                        .removeClass('swiper-wrapper')
                        .addClass('row')
                        .parents('.spec-row__wrapper')
                        .removeClass('js-spec-slider')
                        .find('.spec-slide')
                        .removeClass('swiper-slide')
                        .addClass('col-lg-6');
                }, 100);
            }
        }
    }

    function initHeader() {
        if ($(window).width() < 768) {
            $('.header-nav').appendTo('.menu-content');
            // $('.header-socials').appendTo('.header-mobile-top__socials');
            // $('.header-nav').appendTo('.menu__in');
            // $('.header-contacts').appendTo('.menu__in');
            // $('.header-messenger__list').appendTo('.header-menu__messengers');

            // $('.profile-header__tel').appendTo('.profile-header__menu-in');
        } else {
            $('.header-nav').appendTo('.header-nav__wrapper');
            // $('.header-socials').appendTo('.header-socials__wrapper');
            // $('.header-nav').appendTo('.header-nav__container');
            // $('.header-contacts').appendTo('.header-contacts__wrapper');
            // $('.header-nav').appendTo('.header-nav__wrapper');
            // $('.header-messenger__list').appendTo('.header-messenger__wrapper');

            // $('.profile-header__tel').appendTo('.profile-header__tel-wrapper');
        }
    }

    initSpec();
    initHeader();

    var oldWidth = $(window).width();
    $(window).bind('resize', function () {


        var nw = $(window).width();

        // console.log(nw);
        if (oldWidth !== nw) {
            initSpec();
            initHeader();
        }
        oldWidth = nw;
    });
})


