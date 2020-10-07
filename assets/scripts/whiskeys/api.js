'use strict'

const config = require('../config')
const store = require('../store')

const createWhiskey = (formData) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/whiskeys',
    method: 'POST',
    data: formData
  })
}

const indexWhiskey = () => {
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

const updateWhiskey = (formData, whiskeyId) => {
  // const newWhiskeyId = formData.whiskey.id
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/whiskeys/' + whiskeyId,
    method: 'PATCH',
    data: formData
  })
}

const deleteWhiskey = (whiskeyId) => {
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
  updateWhiskey,
  deleteWhiskey
}
