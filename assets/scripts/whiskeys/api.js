'use strict'

const config = require('../config')
const store = require('../store')

const createWhiskey = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/whiskeys',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  createWhiskey
}
