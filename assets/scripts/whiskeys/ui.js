'use store'
const store = require('../store')
const showWhiskeyTemplate = require('../templates/whiskey-listing2.handlebars')

// if createWhiskey ajax request is successful, load success message, empty #all-whiskeys div to ensure that index is reset
const createWhiskeySuccess = () => {
  $('#myModalThree').modal('show')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
  // $('.update-wrapper').hide()
  $('form').trigger('reset')
}

// if createWhiskey ajax request fails, load failure message
const createWhiskeyFailure = () => {
  $('#message').text('Failed to add whiskey to your shelf.')
  $('#myModalThree').modal('hide')
}

// if indexWhiskey ajax request is sucessful, store all whiskeys and use handlebars template to display each whiskey as separate object on the page
const indexWhiskeySuccess = (response) => {
  store.whiskey = response.whiskey
  const showWhiskeyHTML = showWhiskeyTemplate({ whiskeys: response.whiskeys })
  if (response.whiskeys.length === 0) {
    $('#message').text('Your shelf is bone dry - better add something to it!')
    $('#all-whiskeys').hide()
  } else {
    $('#message').text('Your shelf is looking GOOD.')
    $('#all-whiskeys').empty()
    $('#all-whiskeys').show()
    $('#all-whiskeys').append(showWhiskeyHTML)
    // $('.update-wrapper').show()
  }
  $('#see-whiskeys').hide()
}

// if indexWhiskey ajax request fails, load failure message
const indexWhiskeyFailure = () => {
  $('#message').text('Could not get your whiskey shelf')
}

// if updateWhiskey ajax request is successful, reset #all-whiskeys div so that upon clicking #see-whiskeys button, updated index is displayed
const updateWhiskeySuccess = (whiskeyId) => {
  $('#update-button').modal('hide')
  // $('.update-wrapper').hide()
  $('#myModalSeven').modal('show')
  $(`#myModalFour-${whiskeyId}`).modal('hide')
  $('.modal-backdrop').removeClass('show')
  return new Promise(resolve => setTimeout(() => {
    $('.modal-backdrop').remove()
    resolve()
  }, 0))
}
$('form').trigger('reset')
$('#all-whiskeys').empty()
$('#see-whiskeys').show()

// if updateWhiskey ajax request fails, show failure message
const updateWhiskeyFailure = (whiskeyId) => {
  $('#message').text('Could not update your whiskey')
  $(`#myModalFour-${whiskeyId}`).modal('hide')
}

// if deleteWhiskey ajax request is successful, reset #all-whiskeys div so that upon clicking #see-whiskeys button, updated index is displayed
const deleteWhiskeySuccess = () => {
  $('#myModalFive').modal('show')
  $('#all-whiskeys').hide()
  $('#see-whiskeys').show()
  // $('.update-wrapper').hide()
}

// if deleteWhiskey ajax request fails, show failure message
const deleteWhiskeyFailure = () => {
  $('#message').text('Could not delete whiskey')
  $('#myModalFive').modal('hide')
}

module.exports = {
  createWhiskeySuccess,
  createWhiskeyFailure,
  indexWhiskeySuccess,
  indexWhiskeyFailure,
  updateWhiskeySuccess,
  updateWhiskeyFailure,
  deleteWhiskeySuccess,
  deleteWhiskeyFailure
}
