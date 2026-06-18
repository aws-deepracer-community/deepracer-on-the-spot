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

Data correct as of 2026-06-18 04:23:18.056008, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1742 | >20%                    |                 2 |              0.0871  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.176  | >20%                    |                 2 |              0.088   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1884 | 15-20%                  |                 2 |              0.0942  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.198  | >20%                    |                 2 |              0.099   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2069 | 15-20%                  |                 5 |              0.04138 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | >20%                    |                 2 |              0.11675 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2375 | >20%                    |                 2 |              0.11875 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | >20%                    |                 2 |              0.1209  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.256  | 15-20%                  |                 2 |              0.128   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2597 | >20%                    |                 2 |              0.12985 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2652 | >20%                    |                 2 |              0.1326  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2689 | 10-15%                  |                 2 |              0.13445 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2868 | 10-15%                  |                 2 |              0.1434  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | 15-20%                  |                 2 |              0.14355 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | >20%                    |                 5 |              0.05764 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2932 | 15-20%                  |                 5 |              0.05864 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2962 | >20%                    |                 5 |              0.05924 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2971 | >20%                    |                 2 |              0.14855 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3004 | 15-20%                  |                 5 |              0.06008 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3407 | 5-10%                   |                10 |              0.03407 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3474 | <5%                     |                 2 |              0.1737  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3489 | >20%                    |                10 |              0.03489 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.349  | >20%                    |                 2 |              0.1745  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3589 | 5-10%                   |                10 |              0.03589 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.36   | >20%                    |                 2 |              0.18    |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3606 | >20%                    |                 5 |              0.07212 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3641 | 10-15%                  |                 2 |              0.18205 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3777 | 5-10%                   |                10 |              0.03777 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | >20%                    |                 2 |              0.1898  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3803 | >20%                    |                10 |              0.03803 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | >20%                    |                 5 |              0.07642 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3865 | >20%                    |                 2 |              0.19325 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3934 | >20%                    |                 5 |              0.07868 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3967 | >20%                    |                10 |              0.03967 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3989 | >20%                    |                 2 |              0.19945 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4031 | >20%                    |                 5 |              0.08062 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4079 | >20%                    |                 5 |              0.08158 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4155 | >20%                    |                 5 |              0.0831  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4179 | >20%                    |                 5 |              0.08358 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4226 | >20%                    |                 5 |              0.08452 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4238 | >20%                    |                 2 |              0.2119  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4244 | >20%                    |                10 |              0.04244 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4244 | >20%                    |                10 |              0.04244 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4303 | <5%                     |                 2 |              0.21515 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.432  | >20%                    |                 5 |              0.0864  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4331 | >20%                    |                 5 |              0.08662 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4436 | <5%                     |                 2 |              0.2218  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4482 | >20%                    |                 2 |              0.2241  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4585 | 15-20%                  |                 5 |              0.0917  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4598 | 10-15%                  |                 2 |              0.2299  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4675 | 15-20%                  |                 2 |              0.23375 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4809 | >20%                    |                 5 |              0.09618 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.485  | >20%                    |                 5 |              0.097   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4852 | >20%                    |                 2 |              0.2426  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4877 | 15-20%                  |                 2 |              0.24385 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5175 | 5-10%                   |                 2 |              0.25875 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5222 | 5-10%                   |                 5 |              0.10444 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5268 | 5-10%                   |                 2 |              0.2634  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5276 | >20%                    |                 5 |              0.10552 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5335 | >20%                    |                 2 |              0.26675 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5431 | 15-20%                  |                 2 |              0.27155 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5449 | >20%                    |                 5 |              0.10898 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5468 | >20%                    |                 2 |              0.2734  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5583 | >20%                    |                 5 |              0.11166 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5583 | <5%                     |                 5 |              0.11166 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5599 | >20%                    |                 5 |              0.11198 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5603 | 10-15%                  |                10 |              0.05603 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.562  | >20%                    |                 5 |              0.1124  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5643 | >20%                    |                 2 |              0.28215 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5648 | >20%                    |                10 |              0.05648 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5659 | 10-15%                  |                 5 |              0.11318 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5666 | >20%                    |                 2 |              0.2833  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5712 | 10-15%                  |                 2 |              0.2856  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5792 |                         |                 2 |              0.2896  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5798 | >20%                    |                 5 |              0.11596 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5827 | >20%                    |                 5 |              0.11654 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5876 | >20%                    |                 2 |              0.2938  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5925 | >20%                    |                 2 |              0.29625 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5972 | >20%                    |                10 |              0.05972 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6065 | >20%                    |                10 |              0.06065 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6104 | <5%                     |                10 |              0.06104 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6179 | >20%                    |                 5 |              0.12358 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6243 | >20%                    |                 5 |              0.12486 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6399 | >20%                    |                10 |              0.06399 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.65   | 5-10%                   |                10 |              0.065   |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6575 |                         |                 5 |              0.1315  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6748 | >20%                    |                10 |              0.06748 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6781 | 15-20%                  |                10 |              0.06781 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6917 | >20%                    |                 5 |              0.13834 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6989 | >20%                    |                 5 |              0.13978 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7086 | >20%                    |                 2 |              0.3543  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7095 | >20%                    |                 5 |              0.1419  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7098 | 15-20%                  |                10 |              0.07098 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7232 | >20%                    |                 5 |              0.14464 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7244 | 5-10%                   |                10 |              0.07244 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7298 | >20%                    |                 5 |              0.14596 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7303 | >20%                    |                 2 |              0.36515 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.734  | >20%                    |                10 |              0.0734  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7343 | 5-10%                   |                 5 |              0.14686 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7375 | >20%                    |                 2 |              0.36875 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7465 | >20%                    |                10 |              0.07465 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7626 | >20%                    |                 5 |              0.15252 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7795 | >20%                    |                10 |              0.07795 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7824 | >20%                    |                10 |              0.07824 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8069 | >20%                    |                 5 |              0.16138 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8421 | 15-20%                  |                10 |              0.08421 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8423 | 15-20%                  |                10 |              0.08423 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8556 | >20%                    |                 5 |              0.17112 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8586 | >20%                    |                 5 |              0.17172 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8591 |                         |                 2 |              0.42955 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8593 | >20%                    |                10 |              0.08593 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8595 | >20%                    |                10 |              0.08595 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8759 | 15-20%                  |                10 |              0.08759 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8897 | >20%                    |                 5 |              0.17794 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8968 | >20%                    |                10 |              0.08968 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9055 |                         |                10 |              0.09055 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9176 | >20%                    |                10 |              0.09176 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9188 | >20%                    |                10 |              0.09188 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9372 | 5-10%                   |                 2 |              0.4686  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9392 | >20%                    |                 5 |              0.18784 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9411 | >20%                    |                10 |              0.09411 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9643 | >20%                    |                 5 |              0.19286 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9662 | >20%                    |                10 |              0.09662 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9699 | >20%                    |                10 |              0.09699 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9967 | >20%                    |                 5 |              0.19934 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.002  | >20%                    |                 2 |              0.501   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0127 | 10-15%                  |                 2 |              0.50635 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0164 | >20%                    |                10 |              0.10164 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0335 | >20%                    |                10 |              0.10335 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0431 |                         |                 5 |              0.20862 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0531 | 5-10%                   |                10 |              0.10531 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0636 | >20%                    |                10 |              0.10636 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0855 | >20%                    |                 5 |              0.2171  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0988 | 15-20%                  |                10 |              0.10988 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.1382 | 10-15%                  |                 2 |              0.5691  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1638 | >20%                    |                10 |              0.11638 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2003 | >20%                    |                10 |              0.12003 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2196 | >20%                    |                10 |              0.12196 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3535 | >20%                    |                10 |              0.13535 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.383  | 15-20%                  |                 5 |              0.2766  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3997 | 5-10%                   |                 2 |              0.69985 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4204 | >20%                    |                 5 |              0.28408 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4339 | 10-15%                  |                10 |              0.14339 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5004 | 15-20%                  |                10 |              0.15004 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5457 | >20%                    |                10 |              0.15457 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5505 | >20%                    |                 5 |              0.3101  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6783 | 15-20%                  |                10 |              0.16783 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7076 | >20%                    |                10 |              0.17076 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7476 |                         |                10 |              0.17476 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4109 | >20%                    |                10 |              0.24109 |