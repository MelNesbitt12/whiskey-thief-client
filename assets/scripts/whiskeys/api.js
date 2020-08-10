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
  const newWhiskeyId = formData.whiskey.id
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

const showWhiskey = function (formData) {
  const currentWhiskeyId = formData
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/whiskeys/' + currentWhiskeyId,
    method: 'GET',
    data: formData
  })
}

const deleteWhiskey = function (whiskeyId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/whiskeys/' + whiskeyId,
    method: 'DELETE',
    user: store.user
  })
}

module.exports = {
  createWhiskey,
  indexWhiskey,
  showWhiskey,
  updateWhiskey,
  deleteWhiskey
}
