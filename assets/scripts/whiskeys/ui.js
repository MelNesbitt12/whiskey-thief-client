'use store'

const store = require('../store')
// const showWhiskeyTemplate = require('../templates/whiskey-listing.handlebars')

const createWhiskeySuccess = function () {
  $('#message').text('New whiskey added to your shelf!')

  $('form').trigger('reset')
}

const createWhiskeyFailure = function () {
  $('#message').text('Failed to add whiskey to your shelf :(')
}

const indexWhiskeySuccess = function (response) {
  store.whiskey = response.whiskey
  $('#all-whiskeys').show()
  $('#all-whiskeys').text(JSON.stringify(response))
}

const indexWhiskeyFailure = function () {
  $('#message').text('Could not get your whiskey shelf')
}

const updateWhiskeySuccess = function (repsonse) {
  $('#message').text('Whiskey updated!')
  $('form').trigger('reset')
  $('#all-whiskeys').hide()
}

const updateWhiskeyFailure = function () {
  $('#message').text('Could not update your whiskey')
}

module.exports = {
  createWhiskeySuccess,
  createWhiskeyFailure,
  indexWhiskeySuccess,
  indexWhiskeyFailure,
  updateWhiskeySuccess,
  updateWhiskeyFailure
}
