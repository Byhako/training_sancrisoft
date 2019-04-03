$(document).ready(function(){
  // MENU NAVBAR
  $('.collection').hover(function () {
    $('.menu-collection').css('display', 'block')
    $('.iconCollection').css('color', 'black')
  })

  $('.color').hover(function () {
    $('.menu-color').css('display', 'block')
    $('.iconColor').css('color', 'black')
  })

  $('.width').hover(function () {
    $('.menu-width').css('display', 'block')
    $('.iconWidth').css('color', 'black')
  })

  $('.fabric').hover(function () {
    $('.menu-fabric').css('display', 'block')
    $('.iconFabric').css('color', 'black')
  })

  $('.patterns').hover(function () {
    $('.menu-patterns').css('display', 'block')
    $('.iconPatterns').css('color', 'black')
  })

  $('.collection').mouseleave(function () {
    $('.menu-collection').css('display', 'none')
    $('.iconCollection').css('color', '#e0e0e0')
  })

  $('.color').mouseleave(function () {
    $('.menu-color').css('display', 'none')
    $('.iconColor').css('color', '#e0e0e0')
  })

  $('.width').mouseleave(function () {
    $('.menu-width').css('display', 'none')
    $('.iconWidth').css('color', '#e0e0e0')
  })

  $('.fabric').mouseleave(function () {
    $('.menu-fabric').css('display', 'none')
    $('.iconFabric').css('color', '#e0e0e0')
  })

  $('.patterns').mouseleave(function () {
    $('.menu-patterns').css('display', 'none')
    $('.iconPatterns').css('color', '#e0e0e0')
  })

  // HERO
  $('.li-black').hover(function () {
    $('.li-black a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-black img').css('transform', 'scaleY(0.85)')
    $('.li-black img').css('top', '-10px')
  })

  $('.li-blue').hover(function () {
    $('.li-blue a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-blue img').css('transform', 'scaleY(0.85)')
    $('.li-blue img').css('top', '-10px')
  })

  $('.li-collegiate').hover(function () {
    $('.li-collegiate a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-collegiate img').css('transform', 'scaleY(0.85)')
    $('.li-collegiate img').css('top', '-10px')
  })

  $('.li-cotton').hover(function () {
    $('.li-cotton a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-cotton img').css('transform', 'scaleY(0.85)')
    $('.li-cotton img').css('top', '-10px')
  })

  $('.li-favorites').hover(function () {
    $('.li-favorites a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-favorites img').css('transform', 'scaleY(0.85)')
    $('.li-favorites img').css('top', '-10px')
  })

  $('.li-graphic').hover(function () {
    $('.li-graphic a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-graphic img').css('transform', 'scaleY(0.85)')
    $('.li-graphic img').css('top', '-10px')
  })

  $('.li-plaid').hover(function () {
    $('.li-plaid a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-plaid img').css('transform', 'scaleY(0.85)')
    $('.li-plaid img').css('top', '-10px')
  })

  $('.li-silk').hover(function () {
    $('.li-silk a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-silk img').css('transform', 'scaleY(0.85)')
    $('.li-silk img').css('top', '-10px')
  })

  $('.li-striped').hover(function () {
    $('.li-striped a').css('color', 'rgb(4.6%, 35.6%, 62.4%)')
    $('.li-striped img').css('transform', 'scaleY(0.85)')
    $('.li-striped img').css('top', '-10px')
  })

  $('.li-black').mouseleave(function () {
    $('.li-black a').css('color', 'black')
    $('.li-black img').css('transform', 'scaleY(1)')
    $('.li-black img').css('top', '0px')
  })

  $('.li-blue').mouseleave(function () {
    $('.li-blue a').css('color', 'black')
    $('.li-blue img').css('transform', 'scaleY(1)')
    $('.li-blue img').css('top', '0px')
  })

  $('.li-collegiate').mouseleave(function () {
    $('.li-collegiate a').css('color', 'black')
    $('.li-collegiate img').css('transform', 'scaleY(1)')
    $('.li-collegiate img').css('top', '0px')
  })

  $('.li-cotton').mouseleave(function () {
    $('.li-cotton a').css('color', 'black')
    $('.li-cotton img').css('transform', 'scaleY(1)')
    $('.li-cotton img').css('top', '0px')
  })

  $('.li-favorites').mouseleave(function () {
    $('.li-favorites a').css('color', 'black')
    $('.li-favorites img').css('transform', 'scaleY(1)')
    $('.li-favorites img').css('top', '0px')
  })

  $('.li-graphic').mouseleave(function () {
    $('.li-graphic a').css('color', 'black')
    $('.li-graphic img').css('transform', 'scaleY(1)')
    $('.li-graphic img').css('top', '0px')
  })

  $('.li-plaid').mouseleave(function () {
    $('.li-plaid a').css('color', 'black')
    $('.li-plaid img').css('transform', 'scaleY(1)')
    $('.li-plaid img').css('top', '0px')
  })

  $('.li-silk').mouseleave(function () {
    $('.li-silk a').css('color', 'black')
    $('.li-silk img').css('transform', 'scaleY(1)')
    $('.li-silk img').css('top', '0px')
  })

  $('.li-striped').mouseleave(function () {
    $('.li-striped a').css('color', 'black')
    $('.li-striped img').css('transform', 'scaleY(1)')
    $('.li-striped img').css('top', '0px')
  })

  // click sobre iconos en header short
  const cartShort = $('.cart-short')
  const userShort = $('.user-short')
  const searchShort = $('.search-short')

  $('.shop-icon').click(function () {
    cartShort.toggleClass('show')
    userShort.removeClass('show')
    searchShort.removeClass('show')
  })

  $('.person-icon').click(function () {
    cartShort.removeClass('show')
    userShort.toggleClass('show')
    searchShort.removeClass('show')
  })

  $('.search-icon').click(function () {
    cartShort.removeClass('show')
    userShort.removeClass('show')
    searchShort.toggleClass('show')
  })

  //Click para deslizar a los lados las corbatas
  const aLeft = $('.arrow-left')
  const aRight = $('.arrow-right')
  const container = $('.hero-side')
  let left = 0
  let widthTies = 945

  aRight.css('background-color', '#efd1d1' )

  aLeft.click(function () {
    const limit = $(window).width() - widthTies
    if (left > limit) {
      left = left - 50
      sLeft = String(left) + 'px'
      container.css('left', sLeft)
      aRight.css('background-color', 'lightgray')
      aLeft.css('background-color', '#33A1FF')
      setTimeout(function () {
        aLeft.css('background-color', 'lightgray')
      }, 150)
    } else {
      aLeft.css('background-color', '#efd1d1' )
    }
  })

  aRight.click(function () {
    if (left < 0) {
      left = left + 50
      sLeft = String(left) + 'px'
      container.css('left', sLeft)
      aLeft.css('background-color', 'lightgray')
      aRight.css('background-color', '#33A1FF')
      setTimeout(function () {
        aRight.css('background-color', 'lightgray')
      }, 150)
    } else {
      aRight.css('background-color', '#efd1d1' )
    }
  })

  $(window).resize(function () {
    if ($(window).width() > 599) {
      cartShort.removeClass('show')
      userShort.removeClass('show')
      searchShort.removeClass('show')
    }

    if ($(window).width() > 899) {
      $('.hero-side').css('left', 'auto')
    } else {
      $('.hero-side').css('left', '0px')
    }


  })
})
