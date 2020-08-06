#!/bin/bash

API="http://localhost:4741"
URL_PATH="/whiskeys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{}'

  echo
