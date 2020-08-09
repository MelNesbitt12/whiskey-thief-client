'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#myModalTwo').modal('show')
  $('#message').empty()
  $('.unauthenticated').hide()
  $('.sign-in-field').show()
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#myModalTwo').modal('hide')
  $('#message').css('margin-top', '50px')
  $('#message').text('Sign up failed.')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#myModal').modal('show')
  $('.authenticated').show()
  $('#all-whiskeys').hide()
  $('#one-whiskey').hide()
  $('#see-whiskeys').show()
  $('.authenticated').css('margin-top', '40px')
  $('#change-password').css('margin-top', '50px')
  $('#message').text('Welcome to your whiskey shelf!')
  $('#message').css('margin-top', '50px')
  $('#message').css('text-align', 'center')
  $('.unauthenticated').hide()
  $('.sign-in-field').hide()
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#myModal').modal('hide')
  $('#message').css('margin-top', '50px')
  $('#message').text('Sign in failed - try again!')
}

const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('You\'ve changed your password!')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Change password failed')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out - Happy Drinking!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('#all-whiskeys').hide()
  $('form').trigger('reset')

  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Sign out failed.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
