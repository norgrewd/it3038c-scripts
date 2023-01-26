#!/bin/bash
DATA=$(curl https://api.covidtracking.com/v1/us/current.json)
POSITIVE=$(echo $DATA | jq '.[0].positive')
TODAY=$(date)
DEATH=$(echo $DATA | jq '.[0].death')
HOSPITAL=$(echo $DATA | jq '.[0].hospitalized')
NEGATIVE=$(echo $DATA | jq '.[0].negative')

echo "On $TODAY, there were $POSITIVE positive covid cases, $NEGATIVE negative tests, $DEATH deaths, and $HOSPITAL hospitalized"
