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

Data correct as of 2025-04-05 01:43:37.985393, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.119  | 15-20%                  |                 2 |              0.0595  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1325 | 10-15%                  |                 2 |              0.06625 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2008 | <5%                     |                 2 |              0.1004  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2153 | 15-20%                  |                 2 |              0.10765 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | >20%                    |                 2 |              0.1132  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | 15-20%                  |                 2 |              0.11755 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | >20%                    |                 2 |              0.1216  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | >20%                    |                 2 |              0.1226  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2558 | 15-20%                  |                 2 |              0.1279  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | 10-15%                  |                 2 |              0.13015 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2631 | >20%                    |                 2 |              0.13155 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2689 | 10-15%                  |                10 |              0.02689 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2765 | 15-20%                  |                 5 |              0.0553  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2765 | <5%                     |                 2 |              0.13825 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2775 | 5-10%                   |                 2 |              0.13875 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | <5%                     |                 2 |              0.14115 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | 5-10%                   |                 2 |              0.1415  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | 15-20%                  |                 2 |              0.1467  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2974 | <5%                     |                 2 |              0.1487  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.301  | 10-15%                  |                 2 |              0.1505  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3081 | >20%                    |                 2 |              0.15405 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3106 | 10-15%                  |                 5 |              0.06212 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3161 | 10-15%                  |                 2 |              0.15805 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3286 | 15-20%                  |                10 |              0.03286 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3404 | >20%                    |                 2 |              0.1702  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3446 | 10-15%                  |                 5 |              0.06892 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.347  | 10-15%                  |                 5 |              0.0694  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3547 | >20%                    |                 2 |              0.17735 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3615 | >20%                    |                 2 |              0.18075 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3653 | >20%                    |                 5 |              0.07306 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | 5-10%                   |                 5 |              0.07314 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3689 | <5%                     |                 2 |              0.18445 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3701 | >20%                    |                10 |              0.03701 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3742 | >20%                    |                 2 |              0.1871  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | >20%                    |                 2 |              0.1898  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3829 | <5%                     |                 2 |              0.19145 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3872 | >20%                    |                10 |              0.03872 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3942 | >20%                    |                 2 |              0.1971  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3968 | >20%                    |                 2 |              0.1984  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3978 | >20%                    |                 5 |              0.07956 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4    | 10-15%                  |                 2 |              0.2     |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4086 | 15-20%                  |                 2 |              0.2043  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4101 | 10-15%                  |                10 |              0.04101 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4105 | >20%                    |                 2 |              0.20525 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4111 | >20%                    |                 5 |              0.08222 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4141 | 15-20%                  |                 2 |              0.20705 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4181 | <5%                     |                 2 |              0.20905 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4206 | >20%                    |                 5 |              0.08412 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4306 | >20%                    |                 2 |              0.2153  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4316 | >20%                    |                10 |              0.04316 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4343 | >20%                    |                 2 |              0.21715 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4362 | 10-15%                  |                 5 |              0.08724 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.437  | >20%                    |                 2 |              0.2185  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.437  | 5-10%                   |                 5 |              0.0874  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4383 | 10-15%                  |                 5 |              0.08766 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.448  | >20%                    |                 5 |              0.0896  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4482 | <5%                     |                 2 |              0.2241  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4587 | >20%                    |                 2 |              0.22935 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4664 | >20%                    |                10 |              0.04664 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4668 | <5%                     |                 5 |              0.09336 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.471  | >20%                    |                 5 |              0.0942  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4722 | 10-15%                  |                 2 |              0.2361  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | >20%                    |                 5 |              0.09448 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4727 | 5-10%                   |                 5 |              0.09454 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4798 | >20%                    |                 5 |              0.09596 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | <5%                     |                 2 |              0.24025 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.484  | 5-10%                   |                 5 |              0.0968  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4847 | 5-10%                   |                 2 |              0.24235 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4893 | >20%                    |                 5 |              0.09786 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4895 | >20%                    |                 5 |              0.0979  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4917 | >20%                    |                 5 |              0.09834 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4955 | >20%                    |                 5 |              0.0991  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4968 | >20%                    |                 2 |              0.2484  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5062 | >20%                    |                 2 |              0.2531  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5064 | >20%                    |                 5 |              0.10128 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5086 | <5%                     |                10 |              0.05086 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5088 | 5-10%                   |                10 |              0.05088 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5164 | >20%                    |                 5 |              0.10328 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5202 | 15-20%                  |                 5 |              0.10404 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5207 | 5-10%                   |                 2 |              0.26035 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.531  | 15-20%                  |                 2 |              0.2655  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.532  | <5%                     |                 5 |              0.1064  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5343 | >20%                    |                 5 |              0.10686 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5467 | 10-15%                  |                 5 |              0.10934 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5475 | 5-10%                   |                 5 |              0.1095  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5487 | 15-20%                  |                 2 |              0.27435 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5514 | >20%                    |                 2 |              0.2757  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5658 | >20%                    |                 5 |              0.11316 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5669 | >20%                    |                 2 |              0.28345 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5719 | 15-20%                  |                 5 |              0.11438 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | 5-10%                   |                 5 |              0.11458 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5808 | >20%                    |                 2 |              0.2904  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5846 | >20%                    |                 2 |              0.2923  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5903 | <5%                     |                 5 |              0.11806 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5918 | 5-10%                   |                 5 |              0.11836 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5955 | <5%                     |                10 |              0.05955 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5966 | >20%                    |                 5 |              0.11932 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6035 | >20%                    |                 5 |              0.1207  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.604  | <5%                     |                 5 |              0.1208  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6063 | >20%                    |                 2 |              0.30315 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.608  | <5%                     |                10 |              0.0608  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6103 | 15-20%                  |                 5 |              0.12206 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6136 | >20%                    |                10 |              0.06136 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6193 | >20%                    |                 5 |              0.12386 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6345 | 10-15%                  |                10 |              0.06345 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6381 | 10-15%                  |                 5 |              0.12762 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6453 | 10-15%                  |                 5 |              0.12906 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6512 | >20%                    |                10 |              0.06512 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6566 | >20%                    |                10 |              0.06566 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6595 | 10-15%                  |                 5 |              0.1319  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6605 | <5%                     |                 5 |              0.1321  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6618 | >20%                    |                10 |              0.06618 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6708 | >20%                    |                 5 |              0.13416 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6711 | 10-15%                  |                 2 |              0.33555 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6753 | 10-15%                  |                10 |              0.06753 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6818 | >20%                    |                10 |              0.06818 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6941 | >20%                    |                 5 |              0.13882 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7052 | >20%                    |                 5 |              0.14104 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7297 | >20%                    |                 2 |              0.36485 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7364 | >20%                    |                10 |              0.07364 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7393 | <5%                     |                10 |              0.07393 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7419 | >20%                    |                10 |              0.07419 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7473 | <5%                     |                 2 |              0.37365 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7502 | >20%                    |                 2 |              0.3751  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7653 | >20%                    |                 5 |              0.15306 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.766  | >20%                    |                10 |              0.0766  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7667 | 15-20%                  |                 5 |              0.15334 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7746 | 15-20%                  |                 5 |              0.15492 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7778 | >20%                    |                 2 |              0.3889  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7835 | <5%                     |                 5 |              0.1567  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7849 | 5-10%                   |                10 |              0.07849 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7852 | <5%                     |                10 |              0.07852 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7985 | 10-15%                  |                10 |              0.07985 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.799  | <5%                     |                10 |              0.0799  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8071 | 10-15%                  |                10 |              0.08071 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8144 | 15-20%                  |                10 |              0.08144 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8176 | <5%                     |                10 |              0.08176 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8335 | <5%                     |                10 |              0.08335 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8337 | 5-10%                   |                10 |              0.08337 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8402 | >20%                    |                10 |              0.08402 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8466 | 15-20%                  |                10 |              0.08466 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8494 | >20%                    |                10 |              0.08494 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8575 | <5%                     |                10 |              0.08575 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8583 | 10-15%                  |                10 |              0.08583 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8678 | >20%                    |                10 |              0.08678 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.868  | 15-20%                  |                 5 |              0.1736  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8707 | >20%                    |                10 |              0.08707 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8891 | <5%                     |                10 |              0.08891 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9126 | >20%                    |                 2 |              0.4563  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9537 | >20%                    |                 5 |              0.19074 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9565 | >20%                    |                 5 |              0.1913  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9721 | 5-10%                   |                10 |              0.09721 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9777 | 15-20%                  |                10 |              0.09777 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9873 | 10-15%                  |                10 |              0.09873 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1      | 10-15%                  |                 2 |              0.5     |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0077 | >20%                    |                10 |              0.10077 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0693 | >20%                    |                10 |              0.10693 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0922 | <5%                     |                10 |              0.10922 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1521 | 15-20%                  |                10 |              0.11521 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1699 | 15-20%                  |                10 |              0.11699 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1745 | <5%                     |                10 |              0.11745 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1767 | >20%                    |                10 |              0.11767 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2121 | >20%                    |                 5 |              0.24242 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2213 | <5%                     |                 5 |              0.24426 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2974 | >20%                    |                 2 |              0.6487  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3191 | 15-20%                  |                10 |              0.13191 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3572 | >20%                    |                10 |              0.13572 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3914 | >20%                    |                 5 |              0.27828 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4637 | 5-10%                   |                 2 |              0.73185 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5888 | >20%                    |                10 |              0.15888 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6361 | >20%                    |                10 |              0.16361 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6463 | 15-20%                  |                10 |              0.16463 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8759 | <5%                     |                10 |              0.18759 |