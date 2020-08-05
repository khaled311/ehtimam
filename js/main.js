$(function(){

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

    var menu = [];

    $(".header .swiper-slide").each(function() {
        menu.push($(this).data("name"))
    })
    console.log(menu);
    ///////// **main Slider** /////////
    var mainswiper = new Swiper(".header .swiper-container", {
        spaceBetween: 10,

        loop: true,

        speed: 500,

        autoplay: {
        delay: 5000,
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
        delay: 5000,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
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
});