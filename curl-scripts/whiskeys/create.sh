#!/bin/bash

API="http://localhost:4741"
URL_PATH="/whiskeys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "whiskey": {
      "name": "'"${NAME}"'",
      "type": "'"${TYPE}"'",
      "country": "'"${COUNTRY}"'",
      "price": "'"${PRICE}"'",
      "comments": "'"${COMMENTS}"'"
    }
  }'

echo
