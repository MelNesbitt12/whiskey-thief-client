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
  $('#whiskey-index').on('submit', whiskeyEvents.onIndex)
  $('#update-whiskey').on('submit', whiskeyEvents.onUpdate)
  $('#create-whiskey').on('submit', whiskeyEvents.onCreate)
  // delete a whiskey from the whiskey vault
})
