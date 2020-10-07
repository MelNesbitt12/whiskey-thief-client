'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

// upon click, a new whiskey is created
const onCreate = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createWhiskey(formData)
    .then(() => onIndex(event))
    .then(ui.createWhiskeySuccess)
    .catch(ui.createWhiskeyFailure)
}

// upon click, all whiskeys are requested from the API
const onIndex = (event) => {
  event.preventDefault()

  const usersWhiskey = store.user.token

  api.indexWhiskey(usersWhiskey)
    .then(ui.indexWhiskeySuccess)
    .catch(ui.indexWhiskeyFailure)
}

// upon click, information about a particular whiskey is updated based on form input
const onUpdate = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // const whiskeyId = formData.whiskey.id
  const whiskeyId = $(event.target).closest('section').data('id')

  api.updateWhiskey(formData, whiskeyId)
    .then(() => onIndex(event))
    .then(ui.updateWhiskeySuccess)
    .catch(ui.updateWhiskeyFailure)
}

// upon click, a whiskey is deleted from the database
const onDelete = (event) => {
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
