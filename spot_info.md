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

Data correct as of 2025-11-23 02:06:16.724409, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1191 | >20%                    |                 2 |              0.05955 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1515 | >20%                    |                 2 |              0.07575 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1781 | 15-20%                  |                 2 |              0.08905 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1806 | <5%                     |                 2 |              0.0903  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1935 | 15-20%                  |                 2 |              0.09675 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1999 | <5%                     |                 2 |              0.09995 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2048 | 10-15%                  |                 2 |              0.1024  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | >20%                    |                 2 |              0.11125 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2302 | >20%                    |                 2 |              0.1151  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2331 | 5-10%                   |                 5 |              0.04662 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | >20%                    |                 2 |              0.1178  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | >20%                    |                 2 |              0.12115 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.254  | 10-15%                  |                 5 |              0.0508  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2671 | >20%                    |                 5 |              0.05342 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | >20%                    |                 2 |              0.13365 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | <5%                     |                 2 |              0.1339  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2719 | >20%                    |                 2 |              0.13595 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2802 | >20%                    |                 5 |              0.05604 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2866 | 10-15%                  |                 2 |              0.1433  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2874 | >20%                    |                 5 |              0.05748 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | >20%                    |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | 5-10%                   |                 2 |              0.14535 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2999 | >20%                    |                10 |              0.02999 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3079 | <5%                     |                 2 |              0.15395 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3101 | <5%                     |                 5 |              0.06202 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3193 | <5%                     |                10 |              0.03193 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3195 | >20%                    |                 5 |              0.0639  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3404 | 10-15%                  |                10 |              0.03404 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3411 | >20%                    |                 5 |              0.06822 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3452 | 5-10%                   |                 2 |              0.1726  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.348  | >20%                    |                 2 |              0.174   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3491 | >20%                    |                10 |              0.03491 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3537 | 10-15%                  |                 2 |              0.17685 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.358  | 10-15%                  |                 2 |              0.179   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3605 | >20%                    |                 2 |              0.18025 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3611 | >20%                    |                 2 |              0.18055 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3624 | >20%                    |                 2 |              0.1812  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3626 | 10-15%                  |                10 |              0.03626 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3644 | 5-10%                   |                10 |              0.03644 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3655 | >20%                    |                10 |              0.03655 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3666 | >20%                    |                 5 |              0.07332 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | <5%                     |                 2 |              0.18415 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | 15-20%                  |                 2 |              0.18595 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | 15-20%                  |                 5 |              0.07456 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.375  | >20%                    |                 2 |              0.1875  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3841 | >20%                    |                 2 |              0.19205 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3857 | 15-20%                  |                 2 |              0.19285 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3948 | 10-15%                  |                10 |              0.03948 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.396  | >20%                    |                 2 |              0.198   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3986 | 10-15%                  |                 5 |              0.07972 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3989 | >20%                    |                 2 |              0.19945 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4031 | >20%                    |                 5 |              0.08062 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4065 | >20%                    |                 2 |              0.20325 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4068 | >20%                    |                 5 |              0.08136 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4088 | 15-20%                  |                 2 |              0.2044  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4122 | >20%                    |                 5 |              0.08244 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4144 | 15-20%                  |                 5 |              0.08288 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4284 | 5-10%                   |                 2 |              0.2142  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4296 | >20%                    |                 5 |              0.08592 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4306 | >20%                    |                 2 |              0.2153  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4348 | 15-20%                  |                 5 |              0.08696 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.436  | >20%                    |                 2 |              0.218   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4367 | >20%                    |                 2 |              0.21835 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4437 | 15-20%                  |                 5 |              0.08874 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | >20%                    |                 2 |              0.2221  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4502 | 10-15%                  |                 5 |              0.09004 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.459  | >20%                    |                 5 |              0.0918  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4603 | <5%                     |                 2 |              0.23015 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4655 | 15-20%                  |                 5 |              0.0931  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4672 | >20%                    |                 2 |              0.2336  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | >20%                    |                 2 |              0.2381  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4787 | 10-15%                  |                 2 |              0.23935 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4818 | >20%                    |                 2 |              0.2409  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4833 | >20%                    |                 5 |              0.09666 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4872 | 15-20%                  |                10 |              0.04872 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4892 | 10-15%                  |                 2 |              0.2446  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4905 | >20%                    |                10 |              0.04905 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4915 | >20%                    |                 5 |              0.0983  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4923 | >20%                    |                10 |              0.04923 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4984 | >20%                    |                 5 |              0.09968 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5045 | >20%                    |                 5 |              0.1009  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5047 | >20%                    |                 5 |              0.10094 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5082 | 10-15%                  |                 5 |              0.10164 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5091 | >20%                    |                 5 |              0.10182 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5101 | 10-15%                  |                 5 |              0.10202 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5104 | 10-15%                  |                 2 |              0.2552  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5132 | >20%                    |                 5 |              0.10264 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5209 | >20%                    |                 2 |              0.26045 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5364 | >20%                    |                10 |              0.05364 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5534 | 15-20%                  |                 5 |              0.11068 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.558  | >20%                    |                 5 |              0.1116  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.561  | >20%                    |                 5 |              0.1122  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5684 | 15-20%                  |                 5 |              0.11368 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5781 | 15-20%                  |                 5 |              0.11562 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.583  | 5-10%                   |                10 |              0.0583  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5836 | >20%                    |                 2 |              0.2918  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5846 | >20%                    |                 5 |              0.11692 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5863 | 10-15%                  |                 5 |              0.11726 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5881 | 10-15%                  |                 5 |              0.11762 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5975 | >20%                    |                 5 |              0.1195  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6034 | 5-10%                   |                 5 |              0.12068 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.605  | >20%                    |                 2 |              0.3025  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.608  | >20%                    |                 5 |              0.1216  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6081 | >20%                    |                 2 |              0.30405 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.609  | >20%                    |                 2 |              0.3045  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6106 | 10-15%                  |                 5 |              0.12212 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6259 | >20%                    |                 5 |              0.12518 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6286 | >20%                    |                 2 |              0.3143  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6317 | 15-20%                  |                 5 |              0.12634 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6318 | 15-20%                  |                10 |              0.06318 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6327 | 10-15%                  |                 5 |              0.12654 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6353 | >20%                    |                 5 |              0.12706 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6387 | <5%                     |                10 |              0.06387 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6405 | <5%                     |                10 |              0.06405 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6457 | >20%                    |                 5 |              0.12914 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6526 | >20%                    |                 2 |              0.3263  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6702 | 15-20%                  |                10 |              0.06702 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6749 | 5-10%                   |                 2 |              0.33745 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6804 | 10-15%                  |                 2 |              0.3402  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6807 | >20%                    |                10 |              0.06807 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6835 | 5-10%                   |                10 |              0.06835 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | >20%                    |                10 |              0.06987 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.705  | >20%                    |                10 |              0.0705  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7138 | >20%                    |                10 |              0.07138 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7307 | 10-15%                  |                10 |              0.07307 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7435 | >20%                    |                 5 |              0.1487  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7504 | >20%                    |                10 |              0.07504 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7588 | 5-10%                   |                10 |              0.07588 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7665 | >20%                    |                10 |              0.07665 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7681 | 15-20%                  |                10 |              0.07681 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7693 | >20%                    |                 5 |              0.15386 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7716 | <5%                     |                10 |              0.07716 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7749 | >20%                    |                10 |              0.07749 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.775  | >20%                    |                10 |              0.0775  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7862 | >20%                    |                 5 |              0.15724 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7863 | >20%                    |                10 |              0.07863 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7905 | 10-15%                  |                10 |              0.07905 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7943 | >20%                    |                10 |              0.07943 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8014 | >20%                    |                10 |              0.08014 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8129 | >20%                    |                 5 |              0.16258 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8312 | >20%                    |                10 |              0.08312 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8342 | >20%                    |                 2 |              0.4171  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8373 | >20%                    |                10 |              0.08373 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8442 | 15-20%                  |                 5 |              0.16884 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8573 | >20%                    |                10 |              0.08573 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8835 | 15-20%                  |                10 |              0.08835 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8835 | >20%                    |                10 |              0.08835 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8859 | >20%                    |                 5 |              0.17718 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8871 | >20%                    |                 5 |              0.17742 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8928 | 10-15%                  |                10 |              0.08928 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.893  | 10-15%                  |                10 |              0.0893  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9436 | >20%                    |                 2 |              0.4718  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9524 | >20%                    |                10 |              0.09524 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9532 | 15-20%                  |                10 |              0.09532 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9612 | >20%                    |                 2 |              0.4806  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9667 | >20%                    |                10 |              0.09667 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9698 | >20%                    |                10 |              0.09698 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9899 | <5%                     |                10 |              0.09899 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9924 | 10-15%                  |                10 |              0.09924 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0195 | <5%                     |                 5 |              0.2039  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0274 | >20%                    |                 5 |              0.20548 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0307 | >20%                    |                10 |              0.10307 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0332 | <5%                     |                 5 |              0.20664 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0357 | >20%                    |                10 |              0.10357 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1055 | >20%                    |                10 |              0.11055 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1101 | >20%                    |                 5 |              0.22202 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1651 | 15-20%                  |                10 |              0.11651 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1742 | >20%                    |                10 |              0.11742 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2033 | <5%                     |                 2 |              0.60165 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2722 | >20%                    |                 2 |              0.6361  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.273  | >20%                    |                10 |              0.1273  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.293  | 15-20%                  |                10 |              0.1293  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3233 | >20%                    |                 5 |              0.26466 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3619 | 10-15%                  |                10 |              0.13619 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3843 | >20%                    |                10 |              0.13843 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4054 | 5-10%                   |                 5 |              0.28108 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4215 | >20%                    |                 2 |              0.71075 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5626 | >20%                    |                10 |              0.15626 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0115 | 15-20%                  |                10 |              0.20115 |