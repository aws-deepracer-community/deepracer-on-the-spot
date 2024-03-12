
                #!/bin/bash

                /home/ubuntu/bin/start_analysis.sh
                USAGE_OUTPUT=output.txt
                cd ~/deepracer-for-cloud
                while [ true ]
                do
                  # This loop collects training data available and publishes it on the nginx docker. accessible through Public_IP:8100/menu.html

                  # Update variable references before every iteration in case of any change on the config files, this is similar to dr-reload
                  source ~/deepracer-for-cloud/bin/activate.sh > /dev/null 2>&1
                  echo "-----------------------------------" > $USAGE_OUTPUT

                  # Get model name being trained
                  cat ~/deepracer-for-cloud/run.env | egrep "^DR_LOCAL_S3_MODEL_PREFIX" >> $USAGE_OUTPUT

                  # get timestamp to know if the data published is current
                  date --utc +%F_%T_UTC >> $USAGE_OUTPUT

                  # known training issues # 1 - GPU ran out of memory
                  outofmemoryerrors=$(docker logs $(dr-find-sagemaker) 2>&1 | grep "ran out of memory"|wc -l)
                  if [[ $outofmemoryerrors -ge 1 ]];then
                    echo "  ########### ERROR ------> GPU RAN OUT OF MEMORY !!!!!!  ###########" >> $USAGE_OUTPUT
                  fi

                  # get Checkpoint status (best checkpoint, last checkpoint, current checkpoint)
                  docker logs $(dr-find-sagemaker) 2>&1 | grep "Best checkpoint" | tail -n 1 >> $USAGE_OUTPUT
                  docker logs $(dr-find-sagemaker) 2>&1 | grep Checkpoint | tail -n 1  >> $USAGE_OUTPUT

                  echo "=====Robomaker (main Worker)=====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-robomaker) 2>&1 | egrep '^(SIM_TRACE_LOG.*(omplete|off_)|^reward_output)' | tail -n 10 | grep "omplete\|off_\|reward_output\|checkpoint"  >> $USAGE_OUTPUT

                  echo "=====Sagemaker policy training=====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-sagemaker) 2>&1 | egrep '^Policy training' | tail -n 1 >> $USAGE_OUTPUT

                  echo "=====GPU performance=====" >> $USAGE_OUTPUT
                  nvidia-smi > nvidia-smi.txt 2>&1
                  grep Default nvidia-smi.txt >> $USAGE_OUTPUT  2>&1

                  echo "=====Docker containers status=====" >> $USAGE_OUTPUT
                  docker ps -a > dockerstatus.txt  2>&1
                  cat dockerstatus.txt >> $USAGE_OUTPUT  2>&1

                  # known training issues # 2 - At least one required DOCKER CONTAINER EXITED
                  dockererrors=$(grep "exited" dockerstatus.txt | egrep 'deepracer-(sagemaker|rlcoach|robomaker)' | wc -l)
                  if [[ $dockererrors -ge 1 ]];then
                    echo "  ########### ERROR ------> At least one required DOCKER CONTAINER EXITED !!!!!!  ###########" >> $USAGE_OUTPUT
                  fi

                  echo "=====CPU average load (1min / 5min / 15min avg)=====" >> $USAGE_OUTPUT
                  cat /proc/loadavg >> $USAGE_OUTPUT 2>&1

                  echo "=====Memory usage=====" >> $USAGE_OUTPUT
                  cat /proc/meminfo | egrep '(^MemTotal|^MemFree|^SwapTotal|^SwapFree)' >> $USAGE_OUTPUT 2>&1


                  echo "=====Robomaker Testing result logs (all Workers)=====" >> $USAGE_OUTPUT
                  for name in `docker ps --format "{{.Names}}" | grep obomaker`
                  do
                    docker logs ${name} 2>&1 | egrep '^Testing>' | tail -n 10  >> $USAGE_OUTPUT
                    docker logs ${name} >& ${name}.log
                  done

                  mv deepracer-0_robomaker.1.*.log robomaker1.log

                  echo  "=====Sagemaker training logs=====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-sagemaker) 2>&1 | egrep '^Training>' | tail -n 10 >> $USAGE_OUTPUT

                  echo "=====Robomaker Top 10 completed laps (all Workers)=====" >> $USAGE_OUTPUT
                  if [ -f $USAGE_OUTPUT.tmp ] ;then
                    rm "$USAGE_OUTPUT.tmp" > /dev/null 2>&1
                  fi
                  for name in `docker ps --format "{{.Names}}"`
                  do
                    docker logs ${name} 2>&1 | egrep '^SIM_TRACE_LOG.*(omplete)' | sort --field-separator=',' --key=2 | head -n 10000 >> $USAGE_OUTPUT.tmp
                  done
                  echo "Number of completed laps: $(cat $USAGE_OUTPUT.tmp | wc -l)" >> $USAGE_OUTPUT 2>&1
                  cat $USAGE_OUTPUT.tmp | sort --field-separator=',' --key=2 | head -n 1000 > completedlaps.txt 2>&1
                  head completedlaps.txt -n 10 >> $USAGE_OUTPUT 2>&1

                  echo "=====Robomaker (main Worker) - OutputLog: =====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-robomaker) 2>&1 | egrep '^OutputLog' | tail -n 1000 > OutputLog.txt
                  tail OutputLog.txt -n 10 >> $USAGE_OUTPUT
                  rm $USAGE_OUTPUT.tmp  > /dev/null 2>&1
                  echo "###################" >> $USAGE_OUTPUT

                  # Collecting remaining common output files, metrics and uploading them to website
                  docker logs $(dr-find-sagemaker) 2>&1 | tail -n 1000 > sagemaker.txt
                  docker logs $(dr-find-robomaker) 2>&1 | tail -n 1000 > robomaker.txt
                  aws s3 cp s3://$DR_LOCAL_S3_BUCKET/$DR_LOCAL_S3_MODEL_PREFIX/metrics/TrainingMetrics.json . > /dev/null 2>&1
                  aws s3 cp s3://$DR_LOCAL_S3_BUCKET/$DR_LOCAL_S3_MODEL_PREFIX/model/deepracer_checkpoints.json . > /dev/null 2>&1
                  for ID  in `docker ps --filter name=viewer --format "{{.ID}}"`
                  do
                    docker cp $USAGE_OUTPUT $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp nvidia-smi.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp dockerstatus.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp completedlaps.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp OutputLog.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp sagemaker.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp robomaker.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp robomaker1.log $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp TrainingMetrics.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp deepracer_checkpoints.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/run.env $ID:/usr/share/nginx/html/run.env.txt > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/system.env $ID:/usr/share/nginx/html/system.env.txt > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/custom_files/hyperparameters.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/custom_files/model_metadata.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/custom_files/reward_function.py $ID:/usr/share/nginx/html/reward_function.py.txt > /dev/null 2>&1
                    docker cp /home/ubuntu/bin/menu.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    #Update training analysis
                    ANALYSIS_ID=$(docker ps --filter name=deepracer-analysis --format "{{.ID}}")
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute import_from_s3.ipynb
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Training_progress.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Training_progress.html .
                    docker cp Training_progress.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Heatmap.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Heatmap.html .
                    docker cp Heatmap.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Quintiles.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Quintiles.html .
                    docker cp Quintiles.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Data_tables.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Data_tables.html .
                    docker cp Data_tables.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Path_for_complete_laps.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Path_for_complete_laps.html .
                    docker cp Path_for_complete_laps.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Training_and_Evaluation_Overview.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Training_and_Evaluation_Overview.html .
                    docker cp Training_and_Evaluation_Overview.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                  done

                  # if the EC2 has started the termination process we do not want to upload $USAGE_OUTPUT to S3
                  if [[ ! -f /home/ubuntu/bin/termination.started ]];then
                    cp $USAGE_OUTPUT /tmp/logs/ > /dev/null 2>&1
                  fi
                  sleep 300
                done