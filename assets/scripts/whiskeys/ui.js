'use store'

const store = require('../store')
const showWhiskeyTemplate = require('../templates/whiskey-listing.handlebars')

// if createWhiskey ajax request is successful, load success message, empty #all-whiskeys div to ensure that index is reset
const createWhiskeySuccess = function () {
  $('#myModalThree').modal('show')
  $('#message').text('Check out your shelf!')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
  $('#see-whiskeys').show()
  $('.update-wrapper').hide()

  $('form').trigger('reset')
}

const createWhiskeyFailure = function () {
  $('#message').text('Failed to add whiskey to your shelf.')
  $('#myModalThree').modal('hide')
}

// if indexWhiskey ajax request is sucessful, store all whiskeys and use handlebars template to display each whiskey as separate object on the page
const indexWhiskeySuccess = function (response) {
  store.whiskey = response.whiskey
  const showWhiskeyHTML = showWhiskeyTemplate({ whiskeys: response.whiskeys })
  if (response.whiskeys.length === 0) {
    $('#message').text('Your shelf is bone dry - better add something to it!')
  } else {
    $('#message').text('Your shelf is looking GOOD.')
  }
  $('#all-whiskeys').empty()
  $('#all-whiskeys').show()
  $('#all-whiskeys').append(showWhiskeyHTML)
  $('#see-whiskeys').hide()
  $('.update-wrapper').show()
}

const indexWhiskeyFailure = function () {
  $('#message').text('Could not get your whiskey shelf')
}

const showWhiskeySuccess = function (response) {
  store.whiskey = response.whiskey
  const showWhiskeyHTML = showWhiskeyTemplate({ whiskey: response.whiskey })
  $('#all-whiskeys').show()
  $('#all-whiskeys').append(showWhiskeyHTML)
  $('#one-whiskey').show()
  $('#update-whiskey').show()
}

const showWhiskeyFailure = function () {
  $('#message').text('Could not view whiskey')
}

// if updateWhiskey ajax request is successful, reset #all-whiskeys div so that upon clicking #see-whiskeys button, updated index is displayed
const updateWhiskeySuccess = function (response) {
  $('#update-button').modal('hide')
  $('.update-wrapper').hide()
  $('#message').text('Whiskey updated - check out your shelf!')
  $('#myModalFour').modal('hide')
  $('form').trigger('reset')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
  $('#see-whiskeys').show()
}

const updateWhiskeyFailure = function () {
  $('#message').text('Could not update your whiskey')
  $('#myModalFour').modal('hide')
}

// if deleteWhiskey ajax request is successful, reset #all-whiskeys div so that upon clicking #see-whiskeys button, updated index is displayed
const deleteWhiskeySuccess = function () {
  $('#myModalFive').modal('show')
  $('#message').text('Check out your shelf!')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
  $('#see-whiskeys').show()
  $('.update-wrapper').hide()
}

const deleteWhiskeyFailure = function () {
  $('#message').text('Could not delete whiskey')
  $('#myModalFive').modal('hide')
}

module.exports = {
  createWhiskeySuccess,
  createWhiskeyFailure,
  indexWhiskeySuccess,
  indexWhiskeyFailure,
  showWhiskeySuccess,
  showWhiskeyFailure,
  updateWhiskeySuccess,
  updateWhiskeyFailure,
  deleteWhiskeySuccess,
  deleteWhiskeyFailure
}
