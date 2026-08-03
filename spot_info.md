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

Data correct as of 2026-08-03 03:23:08.621929, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1491 | >20%                    |                 2 |              0.07455 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1991 | >20%                    |                 2 |              0.09955 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | >20%                    |                 2 |              0.1125  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | 15-20%                  |                 2 |              0.1164  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | >20%                    |                 2 |              0.1221  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.25   | 15-20%                  |                 5 |              0.05    |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2589 | >20%                    |                 2 |              0.12945 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2635 | 5-10%                   |                10 |              0.02635 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2649 | >20%                    |                 2 |              0.13245 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | 15-20%                  |                 2 |              0.1398  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2809 | >20%                    |                 2 |              0.14045 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | >20%                    |                 2 |              0.14115 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | >20%                    |                 2 |              0.1422  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3007 | >20%                    |                 5 |              0.06014 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | >20%                    |                 2 |              0.157   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3274 | 15-20%                  |                 2 |              0.1637  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3479 | 10-15%                  |                 2 |              0.17395 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3574 | >20%                    |                 2 |              0.1787  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3582 | >20%                    |                 5 |              0.07164 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3611 | >20%                    |                10 |              0.03611 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3651 | 15-20%                  |                 5 |              0.07302 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3724 | 5-10%                   |                10 |              0.03724 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3724 | >20%                    |                 2 |              0.1862  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3724 | >20%                    |                 5 |              0.07448 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3736 | <5%                     |                 2 |              0.1868  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3821 | 5-10%                   |                10 |              0.03821 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3823 | >20%                    |                 5 |              0.07646 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3837 | >20%                    |                 2 |              0.19185 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3875 | 15-20%                  |                 2 |              0.19375 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3896 | 10-15%                  |                 2 |              0.1948  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.39   | >20%                    |                10 |              0.039   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3993 | >20%                    |                10 |              0.03993 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4042 | >20%                    |                 5 |              0.08084 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | 10-15%                  |                 2 |              0.20705 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4253 | >20%                    |                 5 |              0.08506 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4275 | >20%                    |                 2 |              0.21375 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4316 | >20%                    |                 5 |              0.08632 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.436  | >20%                    |                 2 |              0.218   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4365 | >20%                    |                10 |              0.04365 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4376 | >20%                    |                 2 |              0.2188  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4386 | <5%                     |                 2 |              0.2193  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4401 | >20%                    |                 5 |              0.08802 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4643 | 10-15%                  |                10 |              0.04643 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4711 | 10-15%                  |                 2 |              0.23555 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4748 | 15-20%                  |                 2 |              0.2374  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4781 | >20%                    |                 2 |              0.23905 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4875 | >20%                    |                 5 |              0.0975  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4977 | 15-20%                  |                 5 |              0.09954 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5045 | >20%                    |                 2 |              0.25225 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5053 | >20%                    |                 2 |              0.25265 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5086 | >20%                    |                 5 |              0.10172 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5327 | >20%                    |                 5 |              0.10654 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5449 | >20%                    |                10 |              0.05449 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5527 | >20%                    |                 5 |              0.11054 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5535 | >20%                    |                 2 |              0.27675 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5545 | >20%                    |                 5 |              0.1109  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5553 | >20%                    |                 2 |              0.27765 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.559  | 5-10%                   |                 2 |              0.2795  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5606 | >20%                    |                 5 |              0.11212 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5648 | <5%                     |                 2 |              0.2824  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5685 | >20%                    |                 5 |              0.1137  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5717 | >20%                    |                 5 |              0.11434 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.575  | 10-15%                  |                 5 |              0.115   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | >20%                    |                 5 |              0.11738 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5984 | >20%                    |                 5 |              0.11968 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5988 | >20%                    |                 5 |              0.11976 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6038 | >20%                    |                 2 |              0.3019  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6091 | >20%                    |                 5 |              0.12182 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6237 | >20%                    |                 2 |              0.31185 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6437 | <5%                     |                 5 |              0.12874 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6559 | >20%                    |                 5 |              0.13118 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6634 | >20%                    |                 5 |              0.13268 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6757 | >20%                    |                 5 |              0.13514 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6757 | >20%                    |                10 |              0.06757 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6841 | >20%                    |                 5 |              0.13682 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6859 | <5%                     |                10 |              0.06859 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6884 | 15-20%                  |                 5 |              0.13768 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.692  | >20%                    |                10 |              0.0692  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6929 | 15-20%                  |                10 |              0.06929 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6943 | 5-10%                   |                 5 |              0.13886 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7018 | >20%                    |                 5 |              0.14036 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7035 | >20%                    |                 5 |              0.1407  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7148 | >20%                    |                 2 |              0.3574  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7179 | >20%                    |                10 |              0.07179 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7317 | >20%                    |                10 |              0.07317 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7386 |                         |                 2 |              0.3693  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7398 | >20%                    |                10 |              0.07398 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7462 | >20%                    |                10 |              0.07462 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7681 | >20%                    |                10 |              0.07681 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7714 | >20%                    |                 5 |              0.15428 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7842 | >20%                    |                 5 |              0.15684 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.799  | >20%                    |                 2 |              0.3995  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8003 | >20%                    |                 5 |              0.16006 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8029 |                         |                 2 |              0.40145 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8059 | >20%                    |                10 |              0.08059 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8127 | 10-15%                  |                 2 |              0.40635 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8237 | >20%                    |                 2 |              0.41185 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8353 | >20%                    |                10 |              0.08353 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8501 |                         |                 5 |              0.17002 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8545 | 15-20%                  |                10 |              0.08545 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.858  | >20%                    |                 5 |              0.1716  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8632 | 5-10%                   |                10 |              0.08632 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8708 | >20%                    |                10 |              0.08708 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8783 | >20%                    |                 2 |              0.43915 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8855 | >20%                    |                 5 |              0.1771  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8904 | 10-15%                  |                 2 |              0.4452  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8911 | 15-20%                  |                10 |              0.08911 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8932 | >20%                    |                10 |              0.08932 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9002 | >20%                    |                 5 |              0.18004 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.915  | >20%                    |                10 |              0.0915  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9163 | >20%                    |                 2 |              0.45815 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9163 | >20%                    |                10 |              0.09163 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9716 | >20%                    |                10 |              0.09716 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9886 | >20%                    |                 5 |              0.19772 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9896 | 5-10%                   |                10 |              0.09896 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9972 | 15-20%                  |                10 |              0.09972 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0069 | >20%                    |                10 |              0.10069 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0189 | >20%                    |                 5 |              0.20378 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0245 | 15-20%                  |                10 |              0.10245 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0309 | >20%                    |                 5 |              0.20618 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.042  | 15-20%                  |                 2 |              0.521   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0444 | >20%                    |                10 |              0.10444 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0451 | >20%                    |                10 |              0.10451 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0553 | >20%                    |                10 |              0.10553 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0654 | >20%                    |                10 |              0.10654 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0997 | >20%                    |                 5 |              0.21994 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1285 | >20%                    |                 2 |              0.56425 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.15   | >20%                    |                10 |              0.115   |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1592 | 15-20%                  |                10 |              0.11592 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1692 | >20%                    |                10 |              0.11692 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2272 | 5-10%                   |                 2 |              0.6136  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2357 |                         |                10 |              0.12357 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2433 | >20%                    |                10 |              0.12433 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2565 | 10-15%                  |                 2 |              0.62825 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.267  | 5-10%                   |                 2 |              0.6335  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2769 | 15-20%                  |                10 |              0.12769 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2819 | >20%                    |                 5 |              0.25638 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3093 |                         |                 5 |              0.26186 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3172 | 5-10%                   |                 5 |              0.26344 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3516 | >20%                    |                 5 |              0.27032 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4008 | >20%                    |                10 |              0.14008 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5595 | 15-20%                  |                 5 |              0.3119  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5975 | 10-15%                  |                10 |              0.15975 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.649  | >20%                    |                10 |              0.1649  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7578 | 5-10%                   |                10 |              0.17578 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8448 |                         |                10 |              0.18448 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8865 | 15-20%                  |                10 |              0.18865 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9288 | >20%                    |                10 |              0.19288 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9339 | >20%                    |                10 |              0.19339 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0453 | 5-10%                   |                 2 |              1.02265 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2379 | >20%                    |                 5 |              0.44758 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.5095 | >20%                    |                 5 |              0.5019  |