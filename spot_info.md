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

Data correct as of 2025-01-06 01:41:45.401540, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1487 | 15-20%                  |                 2 |              0.07435 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | <5%                     |                 2 |              0.103   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.21   |                         |                 2 |              0.105   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | >20%                    |                 2 |              0.1086  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | 5-10%                   |                 2 |              0.11825 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2441 | 5-10%                   |                 2 |              0.12205 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | 15-20%                  |                 2 |              0.12375 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2493 |                         |                 2 |              0.12465 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | 15-20%                  |                 2 |              0.1264  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2563 | 15-20%                  |                 2 |              0.12815 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2625 | <5%                     |                 5 |              0.0525  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2759 | <5%                     |                 2 |              0.13795 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | >20%                    |                 2 |              0.14015 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2864 |                         |                 5 |              0.05728 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | <5%                     |                 2 |              0.14465 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 5-10%                   |                 2 |              0.1477  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | 5-10%                   |                 2 |              0.15215 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3139 | >20%                    |                10 |              0.03139 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3145 | 5-10%                   |                 2 |              0.15725 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3246 | >20%                    |                 5 |              0.06492 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3256 | <5%                     |                 2 |              0.1628  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3355 | <5%                     |                 5 |              0.0671  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3364 |                         |                 5 |              0.06728 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3432 | 5-10%                   |                10 |              0.03432 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3464 | <5%                     |                 2 |              0.1732  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3475 |                         |                10 |              0.03475 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | 15-20%                  |                 5 |              0.07024 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3595 | <5%                     |                 5 |              0.0719  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3637 | 10-15%                  |                 2 |              0.18185 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3705 | 10-15%                  |                 2 |              0.18525 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | >20%                    |                 2 |              0.18645 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3744 | >20%                    |                 2 |              0.1872  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3757 | >20%                    |                 2 |              0.18785 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | <5%                     |                 5 |              0.07598 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3902 | >20%                    |                 2 |              0.1951  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3936 | 10-15%                  |                 2 |              0.1968  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3988 | >20%                    |                 2 |              0.1994  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3992 | >20%                    |                 5 |              0.07984 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4029 | 5-10%                   |                 2 |              0.20145 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4031 | 10-15%                  |                 2 |              0.20155 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4052 | 5-10%                   |                 2 |              0.2026  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.428  | 10-15%                  |                 2 |              0.214   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4291 | <5%                     |                 5 |              0.08582 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4307 | <5%                     |                 2 |              0.21535 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4328 | 5-10%                   |                 2 |              0.2164  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4347 | 5-10%                   |                 5 |              0.08694 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4348 | 10-15%                  |                10 |              0.04348 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4363 | 5-10%                   |                 2 |              0.21815 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4482 |                         |                10 |              0.04482 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4663 | 10-15%                  |                 5 |              0.09326 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4691 | 5-10%                   |                 2 |              0.23455 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4696 | <5%                     |                 5 |              0.09392 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | >20%                    |                 5 |              0.0946  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | 15-20%                  |                 5 |              0.09462 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4736 | 10-15%                  |                 5 |              0.09472 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4792 | 10-15%                  |                 2 |              0.2396  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4818 | >20%                    |                 5 |              0.09636 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | <5%                     |                 5 |              0.09718 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | 5-10%                   |                 5 |              0.0982  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.498  | <5%                     |                 2 |              0.249   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.498  | 15-20%                  |                 2 |              0.249   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4988 | >20%                    |                 5 |              0.09976 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5013 | <5%                     |                 5 |              0.10026 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5017 | 10-15%                  |                 2 |              0.25085 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5127 | 15-20%                  |                 2 |              0.25635 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5159 | <5%                     |                 5 |              0.10318 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5172 | 5-10%                   |                10 |              0.05172 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5194 | >20%                    |                 5 |              0.10388 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5223 | >20%                    |                 5 |              0.10446 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5294 | 5-10%                   |                 5 |              0.10588 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5303 | <5%                     |                 5 |              0.10606 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5401 | >20%                    |                 5 |              0.10802 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | 10-15%                  |                 5 |              0.10844 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.55   | 5-10%                   |                 5 |              0.11    |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5545 | 5-10%                   |                 5 |              0.1109  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | 5-10%                   |                 5 |              0.11276 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5736 | >20%                    |                 2 |              0.2868  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5755 | 15-20%                  |                10 |              0.05755 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5798 | <5%                     |                 5 |              0.11596 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5833 | >20%                    |                 5 |              0.11666 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5898 | 15-20%                  |                 5 |              0.11796 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5927 | >20%                    |                 2 |              0.29635 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5929 | >20%                    |                 5 |              0.11858 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6335 | 5-10%                   |                10 |              0.06335 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.659  | >20%                    |                10 |              0.0659  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.668  | >20%                    |                 5 |              0.1336  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6696 | <5%                     |                 5 |              0.13392 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6742 | >20%                    |                 2 |              0.3371  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7011 | 15-20%                  |                 2 |              0.35055 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7019 | 10-15%                  |                10 |              0.07019 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7048 | 10-15%                  |                10 |              0.07048 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7108 | 15-20%                  |                 5 |              0.14216 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7181 | 15-20%                  |                 5 |              0.14362 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7275 | 5-10%                   |                 5 |              0.1455  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7325 | >20%                    |                10 |              0.07325 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7328 | >20%                    |                10 |              0.07328 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7395 | <5%                     |                 2 |              0.36975 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7417 | 5-10%                   |                10 |              0.07417 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7581 | >20%                    |                10 |              0.07581 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7681 | <5%                     |                10 |              0.07681 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7735 | >20%                    |                 5 |              0.1547  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7904 | 5-10%                   |                10 |              0.07904 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8059 | >20%                    |                 5 |              0.16118 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8083 | <5%                     |                 2 |              0.40415 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8097 | >20%                    |                 5 |              0.16194 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8138 | 5-10%                   |                10 |              0.08138 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8212 | >20%                    |                10 |              0.08212 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8252 | 15-20%                  |                10 |              0.08252 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8268 | 5-10%                   |                10 |              0.08268 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8384 | <5%                     |                10 |              0.08384 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8394 | 10-15%                  |                10 |              0.08394 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8476 | 15-20%                  |                10 |              0.08476 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8484 | <5%                     |                10 |              0.08484 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8649 | 5-10%                   |                10 |              0.08649 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8655 | 10-15%                  |                10 |              0.08655 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8703 | >20%                    |                10 |              0.08703 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8902 | 10-15%                  |                10 |              0.08902 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.891  | 5-10%                   |                10 |              0.0891  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8934 | 10-15%                  |                10 |              0.08934 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9318 | <5%                     |                10 |              0.09318 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9359 | 15-20%                  |                10 |              0.09359 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9495 | >20%                    |                10 |              0.09495 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9579 | <5%                     |                 2 |              0.47895 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9585 | 5-10%                   |                 5 |              0.1917  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9769 | <5%                     |                 5 |              0.19538 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9789 | 5-10%                   |                 5 |              0.19578 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9884 | >20%                    |                10 |              0.09884 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0096 | <5%                     |                10 |              0.10096 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0144 | 15-20%                  |                10 |              0.10144 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0266 | 10-15%                  |                 2 |              0.5133  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0287 | <5%                     |                 5 |              0.20574 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.042  | 5-10%                   |                10 |              0.1042  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0493 | <5%                     |                10 |              0.10493 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1138 | >20%                    |                10 |              0.11138 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1516 | >20%                    |                10 |              0.11516 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3609 | 5-10%                   |                10 |              0.13609 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3775 | >20%                    |                10 |              0.13775 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4663 | <5%                     |                10 |              0.14663 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.496  | 5-10%                   |                 5 |              0.2992  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4971 | 5-10%                   |                10 |              0.14971 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5904 | <5%                     |                10 |              0.15904 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1638 | 10-15%                  |                10 |              0.21638 |