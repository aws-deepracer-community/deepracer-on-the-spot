#!/bin/bash
python -m py_compile custom-files/reward_function.py
if [ $? -eq 1 ]; then echo "error in reward_function.py" && exit 1; fi
jq -e < custom-files/model_metadata.json
if [ $? -eq 4 ]; then echo "error in model_metadata.json" && exit 1; fi
jq -e < custom-files/hyperparameters.json
if [ $? -eq 4 ]; then echo "error in hyperparameters.hson" && exit 1; fi

#track exists
source custom-files/run.env
tracks=$(curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/aws-deepracer-community/deepracer-race-data/contents/raw_data/tracks/npy | jq '.[] | .name' )
if ! [[ ${tracks[*]} =~ "$DR_WORLD_NAME" ]]; then
  echo "DR_WORLD_NAME=$DR_WORLD_NAME TRACK IN run.env DOES NOT EXIST. VALID TRACKS ARE $tracks" 
  exit 1 
fi

#race type exists
allowedracetypes='"TIME_TRIAL" "OBJECT_AVOIDANCE" "HEAD_TO_BOT"'
if ! [[ ${allowedracetypes[*]} =~ "$DR_RACE_TYPE" ]]; then
  echo "DR_RACE_TYPE=$DR_RACE_TYPE in run.env DOES MATCH THE ALLOWED RACE TYPES $allowedracetypes"
  exit 1
fi

#color exists
colors='"Black" "Grey" "Blue" "Red" "Orange" "White" "Purple"'
if ! [[ ${colors[*]} =~ "$DR_CAR_COLOR" ]]; then
  echo "DR_CAR_COLOR=$DR_CAR_COLOR in run.env DOES MATCH THE ALLOWED COLOR TYPES $colors"
  exit 1
fi

#check if model already exists
if [[ $(aws s3 ls s3://${BUCKET}/${DR_LOCAL_S3_MODEL_PREFIX} | head) ]]; then
  echo "model ${DR_LOCAL_S3_MODEL_PREFIX} alread exists in ${BUCKET}. Change the model name DR_LOCAL_S3_MODEL_PREFIX in run.env"
  exit 1 
fi
#check if pretrained model exists in bucket
if [ $DR_LOCAL_S3_PRETRAINED == True ]  && ! [[ $(aws s3 ls s3://${BUCKET}/${DR_LOCAL_S3_PRETRAINED_PREFIX} | head) ]]; then
  echo "pretrained model DR_LOCAL_S3_PRETRAINED_PREFIX=${DR_LOCAL_S3_PRETRAINED_PREFIX} doesn't exist in ${BUCKET}."
  exit 1
fi
