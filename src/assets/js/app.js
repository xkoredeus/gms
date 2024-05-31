$(window).on('load', function () {
    $('.preloader__wrapper').fadeOut();
    $('body').removeClass('is-loading');
});

$(() => {
    const reviewsSlider = new Swiper(".js-reviews-slider", {
        speed: 1200,
        // initialSlide: 1,
        loop: true,
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
    const selectionsSlider = new Swiper(".js-selections-slider", {
        speed: 700,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".js-selections-slider-next",
            prevEl: ".js-selections-slider-prev",
        },
        spaceBetween: 8,
    });

});

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

    $('.js-toggle-header-dropdown').on('click', function () {
        $(this)
            .parents('.header-dropdown__wrapper')
            .toggleClass('active');
    });
});
// containers
$(() => {
    $(document).on('click', function (e) {
        var container = $('.header-dropdown__wrapper.active');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
        }
    });
});

//popup-login
$(() => {
    $('.popup-tabs-content__item:first-child').hide();
    $('.popup-tabs-list__item:last-child').addClass('active');
    $('.popup-tabs-list .popup-tabs-list__item').click(function popupTabListLiClick() {
        if (!($(this).hasClass('active')) && !($(this).hasClass('error'))) {
            const thisLi = $(this);
            const numLi = thisLi.index();

            thisLi.parents('.popup-tabs').find('.popup-tabs-list__item').removeClass('active');
            thisLi.addClass('active');
            thisLi.parents('.popup-tabs').find('.popup-tabs-content__item').hide()
                .eq(numLi)
                .fadeIn('slow');
        }
    });

    $('.popup-feedback__wrapper').hide();
    $('.js-toggle-login-error').on('click', function (e) {
        e.preventDefault();
        const form = $(this).parents('.popup-tabs')
        form
            .addClass('error')
            .find('.popup-tabs-list__item:first-child')
            .addClass('error');
        $('.popup-login__item').hide();
        $('.popup-feedback__wrapper').slideToggle();
    });

    $('.js-toggle-signup').on('click', function () {
        resetError();
    });
});
// using in popup login & fancy opts in afterClose;
const resetError = function() {
    $('.popup-tabs')
        .removeClass('error');
    $('.popup-tabs-list__item:first').removeClass('error').trigger('click')
    $('.popup-login__item').show()
    $('.popup-feedback__wrapper').hide();
};
// using in afterClose fancybox
const popupSetLoginStep = function () {
    const loginTab = $('.popup-tabs-list__item:last-child');
    if (!(loginTab.hasClass('active'))) {
        loginTab.trigger('click');
    }
};

// delete on prod
$('.js-toggle-form-success').on('click', function () {
    $.fancybox.close();

    setTimeout(() => {
        $.fancybox.open({
            src: '#popup-success',
            type: 'inline',
            opts: fancyOpts,
        });
    }, [300]);
});


const fancyOpts = {
    animationDuration: 600,
    animationEffect: 'slide-in-in',
    touch: false,
    scrolling: true,
}
// fancybox + login popup opts
$(() => {
    $('[data-fancybox]').fancybox({
        ...fancyOpts
    });

    $('[data-src="#popup-login"]').fancybox({
        ...fancyOpts,
        afterClose: function() {
            resetError();
            popupSetLoginStep();

        }
    });

    $('.js-close-fancybox').on('click', function () {
        $.fancybox.close();
    });
});


$(() => {
    $('.js-toggle-question').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.faq-text').slideToggle();
    });
});

$(() => {
    $('input[type=radio][name=connection-type]').on('change', function (e) {
        if (e.currentTarget.value === 'email') {
            $('.js-form-email').slideToggle().addClass('active')
        } else if ($('.js-form-email').hasClass('active')) {
             $('.js-form-email').slideToggle().val('').removeClass('active');
        }
    })
});
$(() => {
    $(".js-select").select2({
        language: 'ru',
        minimumResultsForSearch: -1,
        width: '100%'
    });
});

// filter
$(() => {
    $('.js-toggle-filter-item').on('click', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .parents('.filter-item')
            .find('.filter-item__content')
            .slideToggle();
    });
});

$(window).on('load', function () {
    var specInit = false;
    var specSwiper;
    function initSpec() {
        if ($('.spec-row__wrapper').parents('html').length > 0) {
            if (window.innerWidth <= 976) {
                if (!specInit) {
                    $('.spec-row')
                        .addClass('swiper-wrapper')
                        .removeClass('row')
                        .parents('.spec-row__wrapper')
                        .addClass('js-spec-slider')
                        .find('.spec-slide')
                        .addClass('swiper-slide')
                        .removeClass('col-lg-6');

                    specInit = true;
                    specSwiper = new Swiper(".js-spec-slider", {
                        speed: 1200,
                        navigation: {
                            nextEl: ".js-spec-slider-next",
                            prevEl: ".js-spec-slider-prev",
                        },
                        slidesPerView: 1,
                        spaceBetween: 8,
                    });
                }
            } else if (specInit) {
                specSwiper.destroy();
                specInit = false;

                $('.spec-row__wrapper')
                    .removeClass('js-spec-slider')
                    .find('.spec-row')
                    .addClass('row')
                    .find('.spec-slide')
                    .removeClass('swiper-slide-active')
                    .removeClass('swiper-slide')
                    .addClass('col-lg-6');
            }
        }
    }
    var vacInit = false;
    var vacSwiper;
    function initVac() {
        if ($('.vacancy-list__wrapper').parents('html').length > 0) {
            if (window.innerWidth <= 976) {
                if (!vacInit) {
                    $('.vacancy-list')
                        .addClass('swiper-wrapper')
                        .removeClass('row')
                        .parents('.vacancy-list__wrapper')
                        .addClass('js-vac-slider')
                        .find('.vacancy-wrapper')
                        .addClass('swiper-slide')
                        .removeClass('col-lg-4');

                    vacInit = true;
                    vacSwiper = new Swiper(".js-vac-slider", {
                        speed: 1200,
                        navigation: {
                            nextEl: ".js-vac-slider-next",
                            prevEl: ".js-vac-slider-prev",
                        },
                        slidesPerView: 1,
                        spaceBetween: 8,
                    });
                }
            } else if (vacInit) {
                vacSwiper.destroy();
                vacInit = false;

                $('.vacancy-list__wrapper')
                    .removeClass('js-vac-slider')
                    .find('.vacancy-list')
                    .addClass('row')
                    .find('.vacancy-wrapper')
                    .removeClass('swiper-slide-active')
                    .removeClass('swiper-slide')
                    .addClass('col-lg-4');
            }
        }
    }

    function initHeader() {
        if ($(window).width() < 768) {
            $('.header-nav').appendTo('.menu-content');
        } else {
            $('.header-nav').appendTo('.header-nav__wrapper');
        }
    }

    initSpec();
    initVac();
    initHeader();

    var oldWidth = $(window).width();
    $(window).bind('resize', function () {
        var nw = $(window).width();
        if (oldWidth !== nw) {
            initSpec();
            initHeader();
        }
        oldWidth = nw;
    });
})


