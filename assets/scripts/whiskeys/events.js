'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createWhiskey(formData)
    .then(ui.createWhiskeySuccess)
    .catch(ui.createWhiskeyFailure)
}

const onIndex = function (event) {
  event.preventDefault()

  const usersWhiskey = store.user.token

  api.indexWhiskey(usersWhiskey)
    .then(ui.indexWhiskeySuccess)
    .catch(ui.indexWhiskeyFailure)
}

const onShow = function (event) {
  event.preventDefault()
  console.log()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.showWhiskey(formData)
    .then(ui.showWhiskeySuccess)
    .catch(ui.showWhiskeyFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  // const whiskeyId = $(event.target).closest('section').data('id')
  const form = event.target
  const formData = getFormFields(form)

  api.updateWhiskey(formData)
    .then(ui.updateWhiskeySuccess)
    .catch(ui.updateWhiskeyFailure)
}

const onDelete = function (event) {
  event.preventDefault()
  console.log('this is the event', event)
  // const deletedWhiskey = store.user.token
  const whiskeyId = $(event.target).closest('section').data('id')
  console.log('the whiskey id is', whiskeyId)

  api.deleteWhiskey(whiskeyId)
    .then(ui.deleteWhiskeySuccess)
    .catch(ui.deleteWhiskeyFailure)
}

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onUpdate,
  onDelete
}
