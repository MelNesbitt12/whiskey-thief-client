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

module.exports = {
  onCreate
}
