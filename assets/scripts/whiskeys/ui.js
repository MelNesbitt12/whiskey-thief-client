'use store'

const store = require('../store')

const createWhiskeySuccess = function () {
  $('#message').text('New whiskey added to your shelf!')

  $('form').trigger('reset')
}

const createWhiskeyFailure = function () {
  $('#message').text('Failed to add whiskey to your shelf :(')
}

module.exports = {
  createWhiskeySuccess,
  createWhiskeyFailure
}
