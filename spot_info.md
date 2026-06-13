# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

vCPU - number of vCPUs

RAM (GB) - amount of memory 

GPU RAM (GB) - amount of GPU memory

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support.  **Important Note** - to get the maximum number of workers specified you need to use OpenGL settings (these are the defaults in system.env now) and you must disable the cameras enabled in run.env to save on CPU cycles

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2026-06-13 04:12:02.314477, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1281 | >20%                    |                 2 |              0.06405 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1601 | >20%                    |                 2 |              0.08005 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1763 | 15-20%                  |                 2 |              0.08815 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1906 | >20%                    |                 2 |              0.0953  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.228  | >20%                    |                 2 |              0.114   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2346 | >20%                    |                 5 |              0.04692 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2346 | 15-20%                  |                 2 |              0.1173  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2357 | >20%                    |                 2 |              0.11785 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | >20%                    |                 2 |              0.1181  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2395 | >20%                    |                 2 |              0.11975 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2446 | >20%                    |                 5 |              0.04892 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2498 | 10-15%                  |                 2 |              0.1249  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2511 | >20%                    |                 2 |              0.12555 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2688 | >20%                    |                 2 |              0.1344  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2699 | 5-10%                   |                10 |              0.02699 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2857 | 10-15%                  |                 2 |              0.14285 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2858 | 15-20%                  |                 2 |              0.1429  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2992 | 15-20%                  |                 5 |              0.05984 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | >20%                    |                 2 |              0.15035 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3153 | >20%                    |                 5 |              0.06306 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3176 | >20%                    |                10 |              0.03176 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3219 | 5-10%                   |                10 |              0.03219 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3314 | 10-15%                  |                 2 |              0.1657  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3318 | >20%                    |                 5 |              0.06636 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | <5%                     |                 2 |              0.16655 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3345 | >20%                    |                10 |              0.03345 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3392 | >20%                    |                 2 |              0.1696  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3431 | >20%                    |                 2 |              0.17155 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3463 | >20%                    |                 5 |              0.06926 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3553 | >20%                    |                 5 |              0.07106 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3606 | 15-20%                  |                 5 |              0.07212 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3645 | >20%                    |                 2 |              0.18225 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.372  | >20%                    |                 5 |              0.0744  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3744 | 5-10%                   |                10 |              0.03744 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3759 | >20%                    |                 5 |              0.07518 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3766 | >20%                    |                 2 |              0.1883  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3815 | >20%                    |                10 |              0.03815 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3822 | >20%                    |                 5 |              0.07644 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3834 | >20%                    |                 5 |              0.07668 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3926 | >20%                    |                 2 |              0.1963  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.399  | >20%                    |                 5 |              0.0798  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4135 | >20%                    |                 2 |              0.20675 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.415  | >20%                    |                 2 |              0.2075  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4255 | <5%                     |                 2 |              0.21275 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4275 | >20%                    |                10 |              0.04275 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | >20%                    |                 5 |              0.08598 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4321 | 15-20%                  |                 2 |              0.21605 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4432 | >20%                    |                 5 |              0.08864 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4467 | >20%                    |                 5 |              0.08934 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.448  | >20%                    |                10 |              0.0448  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4491 |                         |                 2 |              0.22455 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4574 | 10-15%                  |                 2 |              0.2287  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4588 | >20%                    |                 2 |              0.2294  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4613 | <5%                     |                 2 |              0.23065 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4666 | <5%                     |                10 |              0.04666 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.472  | 5-10%                   |                 2 |              0.236   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4835 | 15-20%                  |                 5 |              0.0967  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4905 | >20%                    |                 5 |              0.0981  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4996 | 5-10%                   |                 2 |              0.2498  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | >20%                    |                 5 |              0.10064 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5062 | >20%                    |                 2 |              0.2531  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5085 | 15-20%                  |                 2 |              0.25425 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.51   | 15-20%                  |                 2 |              0.255   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.517  | 10-15%                  |                 2 |              0.2585  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5196 | 5-10%                   |                 5 |              0.10392 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5232 | >20%                    |                10 |              0.05232 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5251 | >20%                    |                 5 |              0.10502 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5256 | >20%                    |                10 |              0.05256 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5258 | >20%                    |                 2 |              0.2629  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5398 | <5%                     |                 5 |              0.10796 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5457 | 10-15%                  |                 5 |              0.10914 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5483 | >20%                    |                 5 |              0.10966 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5494 | >20%                    |                 2 |              0.2747  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5612 | >20%                    |                 2 |              0.2806  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5775 | >20%                    |                 5 |              0.1155  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5799 | >20%                    |                 5 |              0.11598 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5827 | >20%                    |                 2 |              0.29135 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5894 | >20%                    |                 5 |              0.11788 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.591  | >20%                    |                 5 |              0.1182  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6116 | >20%                    |                 5 |              0.12232 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6117 | 10-15%                  |                10 |              0.06117 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6141 |                         |                 5 |              0.12282 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.642  | 15-20%                  |                10 |              0.0642  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.644  | >20%                    |                 5 |              0.1288  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6578 | >20%                    |                10 |              0.06578 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6614 | >20%                    |                10 |              0.06614 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6673 | 5-10%                   |                10 |              0.06673 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6768 | >20%                    |                 5 |              0.13536 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.689  | >20%                    |                 2 |              0.3445  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6898 | >20%                    |                 5 |              0.13796 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6904 | 15-20%                  |                10 |              0.06904 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7093 | >20%                    |                 2 |              0.35465 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7145 | 5-10%                   |                10 |              0.07145 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7146 | >20%                    |                10 |              0.07146 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7195 | >20%                    |                 2 |              0.35975 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7212 | >20%                    |                 5 |              0.14424 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7289 | >20%                    |                 5 |              0.14578 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7302 | >20%                    |                 5 |              0.14604 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.737  | >20%                    |                 5 |              0.1474  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.743  | >20%                    |                10 |              0.0743  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7481 | >20%                    |                 5 |              0.14962 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7594 | >20%                    |                10 |              0.07594 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.761  | >20%                    |                 2 |              0.3805  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7671 | >20%                    |                10 |              0.07671 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.778  | >20%                    |                 5 |              0.1556  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7882 | >20%                    |                10 |              0.07882 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7963 | >20%                    |                10 |              0.07963 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8054 | 5-10%                   |                 5 |              0.16108 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8201 | 15-20%                  |                10 |              0.08201 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8206 | >20%                    |                10 |              0.08206 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8235 | >20%                    |                10 |              0.08235 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8257 | 15-20%                  |                10 |              0.08257 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8312 | >20%                    |                10 |              0.08312 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8325 |                         |                 2 |              0.41625 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8387 | >20%                    |                 5 |              0.16774 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8398 |                         |                10 |              0.08398 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8407 | >20%                    |                10 |              0.08407 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8457 | 15-20%                  |                10 |              0.08457 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | >20%                    |                 5 |              0.1692  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8943 | >20%                    |                10 |              0.08943 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9079 | 5-10%                   |                 2 |              0.45395 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9327 | >20%                    |                10 |              0.09327 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9388 | >20%                    |                 5 |              0.18776 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.943  | >20%                    |                10 |              0.0943  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9622 | >20%                    |                10 |              0.09622 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9732 | >20%                    |                 5 |              0.19464 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.985  | 10-15%                  |                 2 |              0.4925  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9924 | >20%                    |                10 |              0.09924 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.003  | >20%                    |                 2 |              0.5015  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.007  | >20%                    |                 5 |              0.2014  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0435 | 10-15%                  |                 2 |              0.52175 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0501 | >20%                    |                 5 |              0.21002 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.051  | >20%                    |                10 |              0.1051  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0534 |                         |                 5 |              0.21068 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.109  | 15-20%                  |                10 |              0.1109  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.126  | 5-10%                   |                10 |              0.1126  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1471 | >20%                    |                10 |              0.11471 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1641 | >20%                    |                10 |              0.11641 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1951 | >20%                    |                10 |              0.11951 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2301 | 5-10%                   |                 2 |              0.61505 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3305 | >20%                    |                10 |              0.13305 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3556 | 15-20%                  |                 5 |              0.27112 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3568 | >20%                    |                10 |              0.13568 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3737 | 15-20%                  |                10 |              0.13737 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3962 | >20%                    |                10 |              0.13962 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4072 | 10-15%                  |                10 |              0.14072 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4889 | >20%                    |                 5 |              0.29778 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4919 | 15-20%                  |                10 |              0.14919 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.572  | >20%                    |                 5 |              0.3144  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.812  |                         |                10 |              0.1812  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1948 | >20%                    |                10 |              0.21948 |