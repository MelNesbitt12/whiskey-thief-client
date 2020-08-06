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

const onUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.updateWhiskey(formData)
    .then(ui.updateWhiskeySuccess)
    .catch(ui.updateWhiskeyFailure)
}

module.exports = {
  onCreate,
  onIndex,
  onUpdate
}
