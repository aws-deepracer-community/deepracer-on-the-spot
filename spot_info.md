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

Data correct as of 2026-04-17 02:57:19.725721, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1856 | >20%                    |                 2 |              0.0928  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1918 | >20%                    |                 2 |              0.0959  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1926 | 15-20%                  |                 2 |              0.0963  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2266 | 15-20%                  |                 5 |              0.04532 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | >20%                    |                 2 |              0.116   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | >20%                    |                 2 |              0.11635 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2505 | >20%                    |                 2 |              0.12525 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | >20%                    |                 2 |              0.1301  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2721 | 10-15%                  |                 2 |              0.13605 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2818 | 15-20%                  |                 2 |              0.1409  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2867 | 15-20%                  |                 5 |              0.05734 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.314  | 15-20%                  |                 5 |              0.0628  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3153 | 15-20%                  |                 2 |              0.15765 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3211 | >20%                    |                 5 |              0.06422 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3255 | 10-15%                  |                 2 |              0.16275 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3297 | >20%                    |                10 |              0.03297 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3309 | >20%                    |                 5 |              0.06618 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3325 | >20%                    |                 5 |              0.0665  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3338 | <5%                     |                 2 |              0.1669  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3351 | 10-15%                  |                 2 |              0.16755 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3398 | 5-10%                   |                10 |              0.03398 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3493 | >20%                    |                10 |              0.03493 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3533 | 5-10%                   |                10 |              0.03533 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3568 | >20%                    |                 5 |              0.07136 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3594 | 5-10%                   |                10 |              0.03594 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3648 | >20%                    |                 2 |              0.1824  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3704 | >20%                    |                 5 |              0.07408 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | >20%                    |                 2 |              0.18685 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3778 | 10-15%                  |                 2 |              0.1889  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.383  | >20%                    |                 2 |              0.1915  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3861 | >20%                    |                 5 |              0.07722 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3898 | >20%                    |                 2 |              0.1949  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3908 | >20%                    |                 2 |              0.1954  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.394  | <5%                     |                10 |              0.0394  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4013 | >20%                    |                 5 |              0.08026 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4079 | <5%                     |                 2 |              0.20395 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4103 | >20%                    |                 5 |              0.08206 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4125 | >20%                    |                 2 |              0.20625 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4147 | >20%                    |                 2 |              0.20735 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4153 | >20%                    |                 5 |              0.08306 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4168 | >20%                    |                 2 |              0.2084  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4201 | <5%                     |                 2 |              0.21005 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4232 | >20%                    |                 2 |              0.2116  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | >20%                    |                 5 |              0.08558 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4349 | >20%                    |                 5 |              0.08698 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4469 | 15-20%                  |                 2 |              0.22345 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | >20%                    |                 5 |              0.0901  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | >20%                    |                 5 |              0.09046 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4535 | 10-15%                  |                 2 |              0.22675 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4547 | >20%                    |                 5 |              0.09094 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4553 | 15-20%                  |                 2 |              0.22765 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.456  | >20%                    |                 5 |              0.0912  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4568 | 15-20%                  |                 2 |              0.2284  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4586 | >20%                    |                10 |              0.04586 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4623 | >20%                    |                 2 |              0.23115 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4669 | >20%                    |                 2 |              0.23345 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4839 | >20%                    |                 5 |              0.09678 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4853 | >20%                    |                 5 |              0.09706 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4866 | >20%                    |                 5 |              0.09732 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4888 | >20%                    |                 2 |              0.2444  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5098 | >20%                    |                 2 |              0.2549  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5118 | >20%                    |                 5 |              0.10236 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5131 | >20%                    |                 5 |              0.10262 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5199 | >20%                    |                 5 |              0.10398 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5289 | 5-10%                   |                 5 |              0.10578 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5315 | >20%                    |                 2 |              0.26575 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.532  | >20%                    |                 5 |              0.1064  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5324 | 5-10%                   |                 2 |              0.2662  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5355 | >20%                    |                10 |              0.05355 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5364 | 15-20%                  |                 5 |              0.10728 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5457 | >20%                    |                10 |              0.05457 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5504 | >20%                    |                10 |              0.05504 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5605 | 5-10%                   |                 2 |              0.28025 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5638 | <5%                     |                 5 |              0.11276 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5678 | 5-10%                   |                 5 |              0.11356 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5683 | >20%                    |                 2 |              0.28415 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5785 | 10-15%                  |                 5 |              0.1157  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5802 | >20%                    |                10 |              0.05802 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5884 | >20%                    |                 5 |              0.11768 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5928 | >20%                    |                10 |              0.05928 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5945 | >20%                    |                 2 |              0.29725 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6091 | >20%                    |                 5 |              0.12182 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6261 | 10-15%                  |                 2 |              0.31305 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6336 | >20%                    |                 5 |              0.12672 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6397 | >20%                    |                 5 |              0.12794 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6439 | >20%                    |                10 |              0.06439 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6709 | >20%                    |                 5 |              0.13418 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6716 | >20%                    |                 2 |              0.3358  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6737 | >20%                    |                10 |              0.06737 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.682  | >20%                    |                 2 |              0.341   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6826 | >20%                    |                10 |              0.06826 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6946 | 5-10%                   |                10 |              0.06946 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7163 | >20%                    |                 5 |              0.14326 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7183 | >20%                    |                 5 |              0.14366 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7185 | >20%                    |                10 |              0.07185 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7369 | >20%                    |                10 |              0.07369 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7473 | >20%                    |                 2 |              0.37365 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7522 | >20%                    |                 5 |              0.15044 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7545 | >20%                    |                10 |              0.07545 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7581 | >20%                    |                10 |              0.07581 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7665 | >20%                    |                10 |              0.07665 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7871 | 15-20%                  |                10 |              0.07871 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7884 | >20%                    |                 5 |              0.15768 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.79   | 5-10%                   |                10 |              0.079   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7906 | >20%                    |                 5 |              0.15812 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7997 | >20%                    |                 2 |              0.39985 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8054 | >20%                    |                10 |              0.08054 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8059 | >20%                    |                 5 |              0.16118 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8132 | >20%                    |                10 |              0.08132 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8334 | >20%                    |                10 |              0.08334 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8382 | >20%                    |                 5 |              0.16764 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.84   | 15-20%                  |                10 |              0.084   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.851  | 5-10%                   |                 2 |              0.4255  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8515 | >20%                    |                 5 |              0.1703  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8644 | 15-20%                  |                10 |              0.08644 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8976 | >20%                    |                10 |              0.08976 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9009 | 15-20%                  |                10 |              0.09009 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9043 | >20%                    |                 5 |              0.18086 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9248 | >20%                    |                10 |              0.09248 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9452 | 15-20%                  |                10 |              0.09452 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9458 | >20%                    |                10 |              0.09458 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9483 | >20%                    |                10 |              0.09483 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9567 | >20%                    |                10 |              0.09567 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9655 | >20%                    |                10 |              0.09655 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9702 | 10-15%                  |                10 |              0.09702 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9724 | >20%                    |                10 |              0.09724 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0042 | 5-10%                   |                10 |              0.10042 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0321 | 10-15%                  |                 2 |              0.51605 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0356 | >20%                    |                 5 |              0.20712 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0373 | >20%                    |                 5 |              0.20746 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0385 | 15-20%                  |                10 |              0.10385 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1026 | 10-15%                  |                10 |              0.11026 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1072 | >20%                    |                10 |              0.11072 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1383 | >20%                    |                10 |              0.11383 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1693 | >20%                    |                10 |              0.11693 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.176  | >20%                    |                 5 |              0.2352  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2362 |                         |                 5 |              0.24724 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2779 | >20%                    |                 2 |              0.63895 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2989 | >20%                    |                 5 |              0.25978 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3342 | >20%                    |                 5 |              0.26684 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3534 | 15-20%                  |                10 |              0.13534 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4036 | 15-20%                  |                10 |              0.14036 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.4633 |                         |                 2 |              0.73165 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.4744 | >20%                    |                10 |              0.14744 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5646 | >20%                    |                10 |              0.15646 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6099 | >20%                    |                10 |              0.16099 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6195 | 15-20%                  |                 5 |              0.3239  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6563 |                         |                10 |              0.16563 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6948 | 5-10%                   |                 2 |              0.8474  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.2911 | >20%                    |                10 |              0.32911 |