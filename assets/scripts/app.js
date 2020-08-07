'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const whiskeyEvents = require('./whiskeys/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Whiskey listeners:
  $('#whiskey-index').on('submit', whiskeyEvents.onIndex)
  $('#one-whiskey').on('submit', whiskeyEvents.onShow)
  $('#update-whiskey').on('submit', whiskeyEvents.onUpdate)
  $('#create-whiskey').on('submit', whiskeyEvents.onCreate)
  // $('#delete-whiskey').on('submit', whiskeyEvents.onDelete)
  $('#all-whiskeys').on('click', '.delete-button', function (event) {
    console.log('in event handler anonymous function for delete')
    console.log('checking if delete function is defined', whiskeyEvents.onDelete)
    whiskeyEvents.onDelete(event)
  })
})
