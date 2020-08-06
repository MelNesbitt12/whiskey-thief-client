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

const indexWhiskey = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/whiskeys',
    method: 'GET',
    data: {
      user: store.user.id
    }
  })
}

const updateWhiskey = function (formData) {
  let newWhiskeyId = formData.whiskey.id
  console.log('updateWhiskey working')
  console.log('This is me finding the ID', newWhiskeyId)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/whiskeys/' + newWhiskeyId,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  createWhiskey,
  indexWhiskey,
  updateWhiskey
}
