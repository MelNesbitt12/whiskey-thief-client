'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const whiskeyEvents = require('./whiskeys/events.js')

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
  $('#all-whiskeys').on('click', '.delete-button', whiskeyEvents.onDelete)
})
