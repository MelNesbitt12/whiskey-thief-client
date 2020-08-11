'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

// upon click, a new whiskey is created
const onCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createWhiskey(formData)
    .then(ui.createWhiskeySuccess)
    .then($('#see-whiskeys').click())
    .catch(ui.createWhiskeyFailure)
}

// upon click, all whiskeys are requested from the API
const onIndex = function (event) {
  event.preventDefault()

  const usersWhiskey = store.user.token

  api.indexWhiskey(usersWhiskey)
    .then(ui.indexWhiskeySuccess)
    .catch(ui.indexWhiskeyFailure)
}

// upon click, information about a particular whiskey is updated based on form input
const onUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const whiskeyId = formData.whiskey.id

  api.updateWhiskey(formData)
    .then(() => onIndex(event))
    .then(ui.updateWhiskeySuccess)
    .catch(ui.updateWhiskeyFailure)
}

// upon click, a whiskey is deleted from the database
const onDelete = function (event) {
  event.preventDefault()
  const whiskeyId = $(event.target).closest('section').data('id')

  api.deleteWhiskey(whiskeyId)
    .then(() => onIndex(event))
    .then(ui.deleteWhiskeySuccess)
    .catch(ui.deleteWhiskeyFailure)
}

module.exports = {
  onCreate,
  onIndex,
  onUpdate,
  onDelete
}
