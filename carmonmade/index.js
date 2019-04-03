$(document).ready(function(){
  $('#button').click(function () {
    const title = $('#title').val()
    const address = $('#address').val()
    const name = $('#name').val()
    const email = $('#email').val()
    const password = $('#password').val()
    const checkboxAccept = $('#checkbox-accept').is(':checked')

    if (!title) {
      $('#title').addClass('is-required')
      $('.icon-title').addClass('is-required')
      $('.title-required').css('display', 'flex')
    }
    if (!address) {
      $('#address').addClass('is-required')
      $('.icon-address').addClass('is-required')
      $('.address-required').css('display', 'flex')
    }

    if (!checkboxAccept) {
      $('.accept-terms').addClass('no-checked')
      $('mark').css('color', 'rgb(79.6%, 6.2%, 46.1%)')
      $('.icon-check').addClass('is-required')
      $('.check-required').css('display', 'flex')

    } 
    if (!!title && !!address && checkboxAccept) {
      console.log(title, address, name, email, password)
    }
  })

  // Show or hidden password
  $('#checkbox').click(function () {
    if ( $(this).is(':checked') ) {
      $('#password').attr('type', 'text')
    } else {
      $('#password').attr('type', 'password')
    }
  })

  // hidden error if is checked
  $('#checkbox-accept').click(function () {
    if ( $(this).is(':checked') ) {
      $('.accept-terms').removeClass('no-checked')
      $('mark').css('color', 'rgb(51.1%, 86.9%, 94.8%)')
      $('.icon-check').removeClass('is-required')
      $('.check-required').css('display', 'none')
    }
  })

  $('#title').change(function () {
    if ($('#title').val() !== '') {
      $('#title').removeClass('is-required')
      $('.icon-title').removeClass('is-required')
      $('.title-required').css('display', 'none')
    }
  })

  $('#address').change(function () {
    if ($('#address').val() !== '') {
      $('#address').removeClass('is-required')
      $('.icon-address').removeClass('is-required')
      $('.address-required').css('display', 'none')
    }
  })

  $('#label-accept').click(function () {
    const checkBox = $('#checkbox-accept')
    checkBox.attr("checked", !checkBox.attr("checked"))
  })

  $('#show-password').click(function () {
    const checkBox = $('#checkbox')
    checkBox.attr("checked", !checkBox.attr("checked"))
  })

})
