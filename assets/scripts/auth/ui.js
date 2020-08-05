'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Congrats - you\'re signed up!')

  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed.')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome - your whiskey shelf is waiting!')
  store.user = response.user

  $('form').trigger('reset')
}

const signInFailure = function () {
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
