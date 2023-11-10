var swiperNodes = "";
  var pagination = '<div class=swiper-pagination></div>';
  var next_prev_buttons = '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>'; 
  var scrollbar = '<div class="swiper-scrollbar"></div>';
  var swiperNodes = swiperNodes.concat(pagination, next_prev_buttons);
  /* loop throw all swipers on the page */
  $('.swiper').each(function( index ) {
    $( this ).append(swiperNodes);
  });

  const swiper = new Swiper('.swiper-values', {
    //effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    createElements: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-previous',
    },
    autoplay: false,
    spaceBetween: 24,
    breakpoints: {
      0: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1.5,
      },
      767: { /* when window >= 767px - webflow tablet */
        slidesPerView: 2,
      },
      1280: { /* when window >= 988px - webflow desktop */
        slidesPerView: 3,
      },
    },
  });