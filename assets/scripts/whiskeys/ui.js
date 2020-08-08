'use store'

const store = require('../store')
const showWhiskeyTemplate = require('../templates/whiskey-listing.handlebars')

const createWhiskeySuccess = function () {
  $('#message').text('You\'ve added a whiskey. Click "See Your Whiskey Shelf" for updates!')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
  $('#see-whiskeys').show()

  $('form').trigger('reset')
}

const createWhiskeyFailure = function () {
  $('#message').text('Failed to add whiskey to your shelf.')
}

const indexWhiskeySuccess = function (response) {
  store.whiskey = response.whiskey
  const showWhiskeyHTML = showWhiskeyTemplate({ whiskeys: response.whiskeys })
  $('#all-whiskeys').empty()
  $('#all-whiskeys').show()
  $('#all-whiskeys').append(showWhiskeyHTML)
  $('#see-whiskeys').hide()
  $('#message').text('Your shelf is looking GOOD.')
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

const updateWhiskeySuccess = function (repsonse) {
  $('#message').text('Whiskey updated. Click "See Your Whiskey Shelf" for updates!')
  $('form').trigger('reset')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
  $('#see-whiskeys').show()
}

const updateWhiskeyFailure = function () {
  $('#message').text('Could not update your whiskey')
}

const deleteWhiskeySuccess = function () {
  $('#message').text('Whiskey deleted. Click "See Your Whiskey Shelf" for updates!')
  $('#all-whiskeys').hide()
  $('#all-whiskeys').empty()
  $('#see-whiskeys').show()
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
