(function () {
  'use strict';

  $(window).on('load resize', function () {
    $('.fill-screen').css('height', window.innerHeight)
  })

  // Document ready
  $(function () {

    $('body').scrollspy({
      target: '.navbar',
      offset: 160
    })

    $('nav a, .down-button a').bind('click', function (e) {
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
      }, 1000, 'easeInOutQuart')
      e.preventDefault()
    })

    $(window).stellar()
  })
})()
