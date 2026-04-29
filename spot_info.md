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

Data correct as of 2026-04-29 03:35:37.110344, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1634 | 15-20%                  |                 2 |              0.0817  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1691 | >20%                    |                 2 |              0.08455 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1815 | >20%                    |                 2 |              0.09075 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.234  | 15-20%                  |                 5 |              0.0468  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2383 | 5-10%                   |                10 |              0.02383 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2409 | >20%                    |                 2 |              0.12045 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2575 | >20%                    |                 2 |              0.12875 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2579 | 15-20%                  |                 2 |              0.12895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | >20%                    |                 2 |              0.14075 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2843 | 15-20%                  |                 5 |              0.05686 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2861 | >20%                    |                 5 |              0.05722 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2865 | 10-15%                  |                 2 |              0.14325 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | >20%                    |                 2 |              0.1477  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2956 | 15-20%                  |                 5 |              0.05912 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | 15-20%                  |                 2 |              0.1499  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3114 | >20%                    |                 2 |              0.1557  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3146 | 10-15%                  |                 2 |              0.1573  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3206 | >20%                    |                 2 |              0.1603  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3248 | >20%                    |                10 |              0.03248 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3258 | 10-15%                  |                 2 |              0.1629  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3297 | >20%                    |                 5 |              0.06594 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3357 | <5%                     |                 2 |              0.16785 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.341  | >20%                    |                 5 |              0.0682  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3471 | >20%                    |                 5 |              0.06942 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | >20%                    |                 2 |              0.17925 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3599 | >20%                    |                 2 |              0.17995 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3645 | >20%                    |                 5 |              0.0729  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3649 | >20%                    |                 5 |              0.07298 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3789 | >20%                    |                 2 |              0.18945 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3883 | 5-10%                   |                10 |              0.03883 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3925 | >20%                    |                 5 |              0.0785  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3928 | >20%                    |                 5 |              0.07856 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3946 | >20%                    |                10 |              0.03946 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3961 | 10-15%                  |                 2 |              0.19805 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3968 | >20%                    |                 5 |              0.07936 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3993 | 5-10%                   |                10 |              0.03993 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4008 | >20%                    |                 2 |              0.2004  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.403  | >20%                    |                 5 |              0.0806  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4098 | <5%                     |                 2 |              0.2049  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4147 | >20%                    |                 5 |              0.08294 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4156 | >20%                    |                 2 |              0.2078  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4261 | >20%                    |                 5 |              0.08522 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4273 | >20%                    |                 5 |              0.08546 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4311 | >20%                    |                 5 |              0.08622 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4345 | >20%                    |                 2 |              0.21725 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4379 | >20%                    |                 2 |              0.21895 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4419 | >20%                    |                10 |              0.04419 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4439 | <5%                     |                 2 |              0.22195 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4469 | 5-10%                   |                 2 |              0.22345 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | >20%                    |                 5 |              0.09124 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | >20%                    |                 5 |              0.09154 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4596 | 15-20%                  |                 2 |              0.2298  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4614 | >20%                    |                 5 |              0.09228 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4666 | >20%                    |                 2 |              0.2333  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.469  | >20%                    |                 2 |              0.2345  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4778 | 10-15%                  |                 2 |              0.2389  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | >20%                    |                 5 |              0.09628 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4884 | 15-20%                  |                 2 |              0.2442  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4907 | >20%                    |                 2 |              0.24535 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4957 | >20%                    |                10 |              0.04957 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5186 | <5%                     |                 5 |              0.10372 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5238 | 15-20%                  |                 5 |              0.10476 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5251 | >20%                    |                 2 |              0.26255 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | 5-10%                   |                 5 |              0.10634 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5387 | 5-10%                   |                 5 |              0.10774 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5525 | >20%                    |                 2 |              0.27625 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5544 | 10-15%                  |                 5 |              0.11088 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5606 | >20%                    |                 2 |              0.2803  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5981 | >20%                    |                 2 |              0.29905 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5985 | >20%                    |                10 |              0.05985 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5989 | >20%                    |                 5 |              0.11978 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6022 | 15-20%                  |                 2 |              0.3011  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6206 | >20%                    |                 5 |              0.12412 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6213 | >20%                    |                10 |              0.06213 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6251 | 5-10%                   |                 2 |              0.31255 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6311 | >20%                    |                 2 |              0.31555 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6383 | >20%                    |                10 |              0.06383 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6438 | >20%                    |                 5 |              0.12876 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.644  | >20%                    |                10 |              0.0644  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6521 | >20%                    |                 2 |              0.32605 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6624 | 5-10%                   |                10 |              0.06624 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6648 | 10-15%                  |                 2 |              0.3324  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6712 | >20%                    |                 5 |              0.13424 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6736 | >20%                    |                 5 |              0.13472 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6893 | >20%                    |                10 |              0.06893 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7025 | >20%                    |                10 |              0.07025 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7046 | >20%                    |                10 |              0.07046 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7051 | >20%                    |                 2 |              0.35255 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7069 | >20%                    |                10 |              0.07069 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7147 | >20%                    |                10 |              0.07147 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.717  | >20%                    |                 5 |              0.1434  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.718  | >20%                    |                 5 |              0.1436  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7283 | >20%                    |                 2 |              0.36415 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7312 | >20%                    |                10 |              0.07312 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7316 | >20%                    |                 5 |              0.14632 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7399 | 15-20%                  |                10 |              0.07399 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7433 | >20%                    |                 5 |              0.14866 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7472 | >20%                    |                 5 |              0.14944 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7473 | >20%                    |                 5 |              0.14946 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7547 | 15-20%                  |                10 |              0.07547 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7755 | >20%                    |                 5 |              0.1551  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7846 | 15-20%                  |                10 |              0.07846 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7874 | >20%                    |                 5 |              0.15748 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7881 | 5-10%                   |                10 |              0.07881 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7912 | >20%                    |                 2 |              0.3956  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8141 | >20%                    |                10 |              0.08141 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8203 | >20%                    |                10 |              0.08203 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.847  | >20%                    |                10 |              0.0847  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8811 | 10-15%                  |                10 |              0.08811 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8999 | >20%                    |                10 |              0.08999 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9014 | >20%                    |                10 |              0.09014 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9016 | >20%                    |                 5 |              0.18032 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9082 | >20%                    |                10 |              0.09082 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9091 |                         |                 2 |              0.45455 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9268 | >20%                    |                 5 |              0.18536 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9274 | >20%                    |                10 |              0.09274 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9394 | >20%                    |                 5 |              0.18788 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9459 | >20%                    |                10 |              0.09459 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9525 | 5-10%                   |                10 |              0.09525 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9546 | 15-20%                  |                10 |              0.09546 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9874 | 15-20%                  |                10 |              0.09874 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9938 | >20%                    |                10 |              0.09938 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0429 | 15-20%                  |                10 |              0.10429 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0762 | >20%                    |                10 |              0.10762 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0866 | >20%                    |                 5 |              0.21732 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1118 | 10-15%                  |                10 |              0.11118 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1261 | >20%                    |                10 |              0.11261 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1667 | >20%                    |                 2 |              0.58335 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1742 |                         |                 5 |              0.23484 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1833 | >20%                    |                10 |              0.11833 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2102 |                         |                 2 |              0.6051  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.242  | >20%                    |                10 |              0.1242  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2555 | >20%                    |                 5 |              0.2511  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2618 | 10-15%                  |                 2 |              0.6309  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.287  | 5-10%                   |                 2 |              0.6435  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2895 | >20%                    |                10 |              0.12895 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3281 | 5-10%                   |                 2 |              0.66405 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3405 | >20%                    |                10 |              0.13405 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3596 | 15-20%                  |                10 |              0.13596 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4985 | 15-20%                  |                10 |              0.14985 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5015 | >20%                    |                 5 |              0.3003  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5117 | 15-20%                  |                 5 |              0.30234 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5181 | >20%                    |                10 |              0.15181 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5192 | >20%                    |                 5 |              0.30384 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.5383 | >20%                    |                10 |              0.15383 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.6285 |                         |                 5 |              0.3257  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6774 |                         |                10 |              0.16774 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.4106 |                         |                10 |              0.24106 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4436 | >20%                    |                10 |              0.24436 |