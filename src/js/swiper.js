const swiper = new Swiper('.reviews__slider', {
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        sensitivity: 1
    },

    slidesPerView: 3,
    speed: 400,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    //loop: true,
    //freeMode: true,
    //autoplay: {
        //delay: 1000,
        //stopOnLastSlide: true
    //},
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
        shadow: false,
        //shadowOffset: 10,
        //shadowScale: 0.1
    },

  });