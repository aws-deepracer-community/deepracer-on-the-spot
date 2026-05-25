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

Data correct as of 2026-05-25 04:13:50.296025, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1433 | >20%                    |                 2 |              0.07165 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.144  | 15-20%                  |                 2 |              0.072   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1679 | >20%                    |                 2 |              0.08395 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1719 | >20%                    |                 2 |              0.08595 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2016 | 15-20%                  |                 5 |              0.04032 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2126 | 15-20%                  |                 2 |              0.1063  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.215  | 15-20%                  |                 5 |              0.043   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2247 | >20%                    |                 2 |              0.11235 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2437 | >20%                    |                 2 |              0.12185 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | >20%                    |                 2 |              0.1253  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2748 | >20%                    |                 5 |              0.05496 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2772 | 5-10%                   |                10 |              0.02772 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2795 | >20%                    |                 2 |              0.13975 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | >20%                    |                 2 |              0.1433  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.288  | >20%                    |                 5 |              0.0576  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2901 | 15-20%                  |                 5 |              0.05802 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | >20%                    |                 2 |              0.14645 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2929 | 10-15%                  |                 2 |              0.14645 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2977 | >20%                    |                 5 |              0.05954 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3018 | 5-10%                   |                10 |              0.03018 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | >20%                    |                 2 |              0.1517  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3044 | >20%                    |                 5 |              0.06088 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 15-20%                  |                 2 |              0.15515 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3182 | >20%                    |                 5 |              0.06364 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3196 | >20%                    |                 2 |              0.1598  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3245 | >20%                    |                10 |              0.03245 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3253 | >20%                    |                 5 |              0.06506 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3336 | <5%                     |                 2 |              0.1668  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3336 | >20%                    |                 5 |              0.06672 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3349 | 10-15%                  |                 2 |              0.16745 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3368 | 10-15%                  |                 2 |              0.1684  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3676 | >20%                    |                 5 |              0.07352 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3742 | >20%                    |                 2 |              0.1871  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3774 | >20%                    |                 5 |              0.07548 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3804 | 10-15%                  |                 2 |              0.1902  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3822 | >20%                    |                 5 |              0.07644 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3876 | >20%                    |                10 |              0.03876 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3894 | >20%                    |                 5 |              0.07788 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.406  | >20%                    |                10 |              0.0406  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4092 | >20%                    |                 5 |              0.08184 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4127 | <5%                     |                 2 |              0.20635 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.415  | >20%                    |                 2 |              0.2075  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4183 | >20%                    |                 5 |              0.08366 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4196 | >20%                    |                 5 |              0.08392 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4241 | 5-10%                   |                 2 |              0.21205 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4261 | >20%                    |                10 |              0.04261 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4322 | >20%                    |                 2 |              0.2161  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4375 | >20%                    |                 5 |              0.0875  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4376 | >20%                    |                 2 |              0.2188  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4488 | >20%                    |                 2 |              0.2244  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4543 | <5%                     |                 5 |              0.09086 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4575 | >20%                    |                 5 |              0.0915  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.46   | >20%                    |                 2 |              0.23    |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4623 | <5%                     |                 2 |              0.23115 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4798 | >20%                    |                 5 |              0.09596 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4798 | 15-20%                  |                 2 |              0.2399  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4853 | >20%                    |                 2 |              0.24265 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4868 | >20%                    |                 5 |              0.09736 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4878 | 15-20%                  |                 2 |              0.2439  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5005 | >20%                    |                 5 |              0.1001  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5033 | 5-10%                   |                 5 |              0.10066 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5236 | 10-15%                  |                 2 |              0.2618  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.528  | 15-20%                  |                 2 |              0.264   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5408 | >20%                    |                10 |              0.05408 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5473 | >20%                    |                 5 |              0.10946 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5495 | 5-10%                   |                10 |              0.05495 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5513 | 10-15%                  |                 5 |              0.11026 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5552 | 15-20%                  |                 5 |              0.11104 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5577 | >20%                    |                 2 |              0.27885 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5606 | >20%                    |                 2 |              0.2803  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.563  | >20%                    |                 5 |              0.1126  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5649 | >20%                    |                 5 |              0.11298 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5701 | >20%                    |                10 |              0.05701 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5732 | >20%                    |                 2 |              0.2866  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5739 | >20%                    |                 5 |              0.11478 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5881 | >20%                    |                 5 |              0.11762 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5979 | >20%                    |                10 |              0.05979 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5979 |                         |                 2 |              0.29895 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.605  | >20%                    |                 2 |              0.3025  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.624  | >20%                    |                10 |              0.0624  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6431 | >20%                    |                 2 |              0.32155 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6548 | >20%                    |                 2 |              0.3274  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6638 | 5-10%                   |                10 |              0.06638 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6662 | 15-20%                  |                10 |              0.06662 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | >20%                    |                 5 |              0.13346 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6791 | 15-20%                  |                10 |              0.06791 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6894 | >20%                    |                10 |              0.06894 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6985 | >20%                    |                 5 |              0.1397  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7028 | >20%                    |                 5 |              0.14056 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7145 | >20%                    |                10 |              0.07145 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7177 | 5-10%                   |                 2 |              0.35885 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7237 | >20%                    |                 5 |              0.14474 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7305 | >20%                    |                 2 |              0.36525 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7332 | >20%                    |                 5 |              0.14664 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.737  | >20%                    |                10 |              0.0737  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7378 | >20%                    |                 2 |              0.3689  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7417 |                         |                 5 |              0.14834 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.745  | >20%                    |                10 |              0.0745  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7602 | >20%                    |                 5 |              0.15204 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7648 | >20%                    |                 5 |              0.15296 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7683 | 10-15%                  |                 2 |              0.38415 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7931 | 15-20%                  |                10 |              0.07931 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7937 | >20%                    |                 5 |              0.15874 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.794  | >20%                    |                10 |              0.0794  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8064 | >20%                    |                 5 |              0.16128 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8238 | >20%                    |                10 |              0.08238 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8318 | >20%                    |                10 |              0.08318 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8509 | 10-15%                  |                10 |              0.08509 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8575 | >20%                    |                 5 |              0.1715  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8609 |                         |                 2 |              0.43045 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8681 | >20%                    |                10 |              0.08681 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.887  | 15-20%                  |                10 |              0.0887  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8873 | 15-20%                  |                10 |              0.08873 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9105 | >20%                    |                10 |              0.09105 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9172 | >20%                    |                10 |              0.09172 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.9282 |                         |                 5 |              0.18564 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9353 | >20%                    |                10 |              0.09353 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9362 | >20%                    |                 5 |              0.18724 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9443 | >20%                    |                10 |              0.09443 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9723 | >20%                    |                10 |              0.09723 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9743 | >20%                    |                 5 |              0.19486 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9747 | >20%                    |                 5 |              0.19494 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9869 | >20%                    |                 2 |              0.49345 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9977 | >20%                    |                 5 |              0.19954 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9994 | >20%                    |                10 |              0.09994 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0128 | >20%                    |                10 |              0.10128 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0176 | >20%                    |                10 |              0.10176 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.0188 |                         |                10 |              0.10188 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0418 | 5-10%                   |                 5 |              0.20836 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0497 |                         |                10 |              0.10497 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0497 | >20%                    |                10 |              0.10497 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0545 | >20%                    |                10 |              0.10545 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0586 | >20%                    |                10 |              0.10586 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.066  | >20%                    |                10 |              0.1066  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0977 | >20%                    |                10 |              0.10977 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1188 | 5-10%                   |                 2 |              0.5594  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1241 | 5-10%                   |                 2 |              0.56205 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1961 | 15-20%                  |                10 |              0.11961 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2113 | 5-10%                   |                10 |              0.12113 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2738 | 10-15%                  |                10 |              0.12738 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2848 | 15-20%                  |                 5 |              0.25696 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3158 | >20%                    |                 5 |              0.26316 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3235 | 15-20%                  |                10 |              0.13235 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3553 | >20%                    |                10 |              0.13553 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4073 | >20%                    |                10 |              0.14073 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.43   | >20%                    |                 5 |              0.286   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5323 | 10-15%                  |                 2 |              0.76615 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7013 | 15-20%                  |                10 |              0.17013 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.994  | >20%                    |                10 |              0.1994  |