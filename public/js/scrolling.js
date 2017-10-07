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

    // $(window).stellar()

    new WOW().init()

    $('#nanogallery2').nanogallery2({
      thumbnailHeight:  150,
      thumbnailWidth:   'auto',
      thumbnailAlignment: 'justified',
      thumbnailGutterWidth: 20,
      thumbnailGutterHeight: 20,
      thumbnailHoverEffect2: 'borderDarker|labelAppear75',
      thumbnailLabel: { position: 'overImageOnBottom', hideIcons: true }
      // "itemsBaseURL":     "http://nanogallery2.nanostudio.org/samples/"
    })
  })
})()
