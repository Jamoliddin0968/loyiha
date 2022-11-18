var swiper = new Swiper(".mySwiper1", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  mousewheel: true,
  keyboard: false,
});

// kunlik aksilar sahifasidagi slider

var swipers = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
});

var soni = 8;

$(window).ready(function () {
  son($(this).width());
});
$(window).resize(function () {
  son($(this).width());
});

function son(width) {
  if (width > 991) {
    soni = 8;
    slide(soni);
  } else if (width <= 991 && width > 768) {
    soni = 6;
    slide(soni);
  } else if (width <= 768 && width > 500) {
    soni = 4;
    slide(soni);
  } else if (width <= 500) {
    soni = 3;
    slide(soni);
  }
}

function slide(soni) {
  var swiperjs = new Swiper(".mySwiperSlide", {
    slidesPerView: soni,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
slide(soni);
