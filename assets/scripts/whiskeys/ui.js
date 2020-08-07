'use store'

const store = require('../store')
const showWhiskeyTemplate = require('../templates/whiskey-listing.handlebars')

const createWhiskeySuccess = function () {
  $('#message').text('New whiskey added to your shelf! Click "See Your Shelf" for updates.')
  // $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()

  $('form').trigger('reset')
}

const createWhiskeyFailure = function () {
  $('#message').text('Failed to add whiskey to your shelf :(')
}

const indexWhiskeySuccess = function (response) {
  store.whiskey = response.whiskey
  const showWhiskeyHTML = showWhiskeyTemplate({ whiskeys: response.whiskeys })
  $('#all-whiskeys').empty()
  $('#all-whiskeys').show()
  $('#all-whiskeys').append(showWhiskeyHTML)
  $('#message').text('Viewing your shelf!')
}

const indexWhiskeyFailure = function () {
  $('#message').text('Could not get your whiskey shelf')
}

const showWhiskeySuccess = function (response) {
  store.whiskey = response.whiskey
  const showWhiskeyHTML = showWhiskeyTemplate({ whiskey: response.whiskey })
  $('#all-whiskeys').show()
  $('#all-whiskeys').append(showWhiskeyHTML)
}

const showWhiskeyFailure = function () {
  $('#message').text('Could not view whiskey')
}

const updateWhiskeySuccess = function (repsonse) {
  $('#message').text('Whiskey updated! Click "See Your Shelf" for updates.')
  $('form').trigger('reset')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
}

const updateWhiskeyFailure = function () {
  $('#message').text('Could not update your whiskey')
}

const deleteWhiskeySuccess = function () {
  $('#message').text('Whiskey deleted! Click "See Your Shelf" for updates.')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
}

const deleteWhiskeyFailure = function () {
  $('#message').text('Could not delete whiskey')
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
