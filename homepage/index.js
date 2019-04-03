$(document).ready(function(){
  const home = $('.home')
  const about = $('.about')
  const courses = $('.course')
  const price = $('.price')
  const videos = $('.videos')
  const pages = $('.pages')
  const pagesBurger = $('.pagesBurger')
  const contact = $('.contact')


  home.click(function () {
    home.addClass('active')
    about.removeClass('active')
    courses.removeClass('active')
    price.removeClass('active')
    videos.removeClass('active')
    pages.removeClass('active')
    pagesBurger.removeClass('active')
    contact.removeClass('active')
  })

  about.click(function () {
    home.removeClass('active')
    about.addClass('active')
    courses.removeClass('active')
    price.removeClass('active')
    videos.removeClass('active')
    pages.removeClass('active')
    pagesBurger.removeClass('active')
    contact.removeClass('active')
  })

  courses.click(function () {
    home.removeClass('active')
    about.removeClass('active')
    courses.addClass('active')
    price.removeClass('active')
    videos.removeClass('active')
    pagesBurger.removeClass('active')
    pages.removeClass('active')
    contact.removeClass('active')
  })

  price.click(function () {
    home.removeClass('active')
    about.removeClass('active')
    courses.removeClass('active')
    price.addClass('active')
    videos.removeClass('active')
    pages.removeClass('active')
    pagesBurger.removeClass('active')
    contact.removeClass('active')
  })

  videos.click(function () {
    home.removeClass('active')
    about.removeClass('active')
    courses.removeClass('active')
    price.removeClass('active')
    videos.addClass('active')
    pages.removeClass('active')
    pagesBurger.removeClass('active')
    contact.removeClass('active')
  })

  pages.click(function () {
    home.removeClass('active')
    about.removeClass('active')
    courses.removeClass('active')
    price.removeClass('active')
    videos.removeClass('active')
    pages.addClass('active')
    contact.removeClass('active')
    $('.dropdown').css('display', 'flex')
  })

  pagesBurger.click(function () {
    home.removeClass('active')
    about.removeClass('active')
    courses.removeClass('active')
    price.removeClass('active')
    videos.removeClass('active')
    pagesBurger.addClass('active')
    contact.removeClass('active')
    $('.dropdown2').css('display', 'flex')
  })

  contact.click(function () {
    home.removeClass('active')
    about.removeClass('active')
    courses.removeClass('active')
    price.removeClass('active')
    videos.removeClass('active')
    pages.removeClass('active')
    pagesBurger.removeClass('active')
    contact.addClass('active')
  })

  $('.dropdown').mouseleave(function () {
    $(this).css('display', 'none')
  })

  $('.dropdown2').mouseleave(function () {
    $(this).css('display', 'none')
  })

  $('.burger-button').click(function () {
    $('.ul-burger').toggleClass('show-menu')
  })

  // LANDING DINAMICA
  let ban = 2
  const landing = $('#landing')
  const control1 = $('.control1')
  const control2 = $('.control2')
  const control3 = $('.control3')
  setInterval(function(){
    //console.log(ban)
    switch (ban) {
      case 1:
      landing.css('background-image', 'url(./landing1.jpg)')
      control3.css('background-color', '#b7b7b7')
      control1.css('background-color', '#2e2c2c')
      break;
      case 2:
      landing.css('background-image', 'url(./landing2.jpg)')
      control1.css('background-color', '#b7b7b7')
      control2.css('background-color', '#2e2c2c')
      break;
      case 3:
      landing.css('background-image', 'url(./landing3.jpg)')
      control2.css('background-color', '#b7b7b7')
      control3.css('background-color', '#2e2c2c')
      break;
    }
    ban++
    if (ban === 4) ban = 1

  }, 2000)
  // manejo evento click en cada control
  control1.click(function () {
    ban = 1
    landing.css('background-image', 'url(./landing1.jpg)')
    control3.css('background-color', '#b7b7b7')
    control2.css('background-color', '#b7b7b7')
    control1.css('background-color', '#2e2c2c')
  })
  control2.click(function () {
    ban = 2
    landing.css('background-image', 'url(./landing2.jpg)')
    control1.css('background-color', '#b7b7b7')
    control3.css('background-color', '#b7b7b7')
    control2.css('background-color', '#2e2c2c')
  })
  control3.click(function () {
    ban = 3
    landing.css('background-image', 'url(./landing3.jpg)')
    control1.css('background-color', '#b7b7b7')
    control2.css('background-color', '#b7b7b7')
    control3.css('background-color', '#2e2c2c')
  })
})
