'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const whiskeyEvents = require('./whiskeys/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Authentication listeners:
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Whiskey listeners:
  // Show all whiskeys
  // Get one whiskey
  // Create a new whiskey
  // delete a whiskey from the whiskey vault
})
