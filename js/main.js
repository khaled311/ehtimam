$(window).on("load", function() {
    $(".over").fadeOut(700)
})

$(function(){

    // Scrolls
    if($(window).width() >= 992){
        $(".bars").on("click", function() {
            $("html, body").animate({
                scrollTop: $(".navBar").offset().top
            }, 500)
        })
    }

    // Search
    // Open
    $(".header .search").on("click", function() {
        $(".main-search").addClass("open");
    })

    // Close
    $(".main-search, .main-search > i").on("click", function() {
        $(".main-search").removeClass("open")
    })

    $(".main-search .content").on("click", function(e) {
        e.stopPropagation();
    })
    // Search

    if($(window).width() <= 991){
        // Nav
    
        // Open
        $(".bars").on("click", function() {
            $(".navbar-side").addClass("open");
        })
    
        // Close
        $(".navbar-side, .navbar-side .fas.fa-times").on("click", function() {
            $(".navbar-side").removeClass("open");
        })
    
        $(".navbar-side ul").on("click", function(e) {
            e.stopPropagation()
        })
    
        // Nav
    }

    var menu = [];
    $(".header .swiper-slide").each(function() {
        menu.push($(this).data("name"))
    })

    ///////// **main Slider** /////////
    var mainswiper = new Swiper(".header .swiper-container", {
        spaceBetween: 10,

        loop: true,

        speed: 500,

        autoplay: {
        delay: 3000,
        },

        pagination: {
            el: ".header .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}"><p>${menu[index]}</p></span>`;
            },
        }
    });

    ///////// **about Slider** /////////
    var aboutswiper = new Swiper(".about .swiper-container", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
        delay: 3000,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 34,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 34,
            },
          }
    });

    ///////// **testim Slider** /////////
    var testimswiper = new Swiper(".testim .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
        delay: 5000,
        },
        pagination: {
            el: ".test-slider .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
            },
        }
    });

    if($(window).width() <= 767){
        $(".app .show .details").addClass("swiper-container");
        $(".app .show .details .detail").wrapAll("<div class='swiper-wrapper'></div>").addClass("swiper-slide");


        var appswiper = new Swiper(".app .swiper-container", {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            speed: 500,
            autoplay: {
            delay: 3000,
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 34,
                }
              }
        });
    }

    var appswiper = new Swiper(".app .app1", {
        spaceBetween: 10,

        loop: true,

        speed: 500,

        autoplay: {
            delay: 3000,
        }
    });

    var appswiper = new Swiper(".app .app2", {
        spaceBetween: 10,

        loop: true,

        speed: 500,

        autoplay: {
            delay: 3000,
        }
    });
});