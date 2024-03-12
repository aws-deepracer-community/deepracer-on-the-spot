                #!/bin/bash

                cd ~/deepracer-for-cloud
                source bin/activate.sh

                docker run -d -p 8888:8888 --name deepracer-analysis awsdeepracercommunity/deepracer-analysis:cpu

                while [ "$TOKEN" == "" ]
                do
                  TOKEN=$(docker logs deepracer-analysis 2>&1 | grep -o -E "token=[0-9a-f]+" | head -n 1)
                done

                PUBLIC_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)

                JUPYTER_URL=http://$PUBLIC_IP:8888/?$TOKEN

                sudo sed -i "s|update_to_jupyter_url|${JUPYTER_URL}|" /home/ubuntu/bin/menu.html

                S3_PREFIX_FOR_ANALYSIS=$(cat run.env | grep DR_LOCAL_S3_MODEL_PREFIX= | awk -F'=' '{print $2}')
                DEEPRACER_TRACK=$(cat run.env | grep DR_WORLD_NAME= | awk -F'=' '{print $2}')
                DEEPRACER_WORKERS=$(cat system.env | grep DR_WORKERS= | awk -F'=' '{print $2}')
                sed -i "s|DR_LOCAL_S3_MODEL_PREFIX|${S3_PREFIX_FOR_ANALYSIS}|" import_from_s3.py
                sed -i "s|DEEPRACER_S3_URI|${DEEPRACER_S3_URI}|" import_from_s3.py
                sed -i "s|DEEPRACER_TRACK|${DEEPRACER_TRACK}|" import_from_s3.py
                sed -i "s|DR_LOCAL_S3_MODEL_PREFIX|${S3_PREFIX_FOR_ANALYSIS}|" Training_and_Evaluation_Overview.py
                sed -i "s|DEEPRACER_S3_URI|${DEEPRACER_S3_URI}|" Training_and_Evaluation_Overview.py
                sed -i "s|DEEPRACER_WORKERS|${DEEPRACER_WORKERS}|" Training_and_Evaluation_Overview.py

                ANALYSIS_ID=$(docker ps --filter name=deepracer-analysis --format "{{.ID}}")
                docker cp import_from_s3.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook import_from_s3.py
                docker cp Training_progress.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Training_progress.py
                docker cp Quintiles.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Quintiles.py
                docker cp Heatmap.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Heatmap.py
                docker cp Data_tables.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Data_tables.py
                docker cp Path_for_complete_laps.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Path_for_complete_laps.py
                docker cp Training_and_Evaluation_Overview.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Training_and_Evaluation_Overview.py