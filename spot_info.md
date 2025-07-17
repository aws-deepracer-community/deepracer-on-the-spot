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

Data correct as of 2025-07-17 02:03:49.395130, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.124  | >20%                    |                 2 |              0.062   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1446 | 5-10%                   |                 2 |              0.0723  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1754 | 5-10%                   |                 2 |              0.0877  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1787 | 5-10%                   |                 5 |              0.03574 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1818 | >20%                    |                 2 |              0.0909  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1921 | >20%                    |                 5 |              0.03842 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1992 | 15-20%                  |                 5 |              0.03984 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2121 | >20%                    |                 5 |              0.04242 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2247 | >20%                    |                 2 |              0.11235 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | >20%                    |                 2 |              0.1129  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.233  | <5%                     |                 5 |              0.0466  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2354 | >20%                    |                10 |              0.02354 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2381 | 5-10%                   |                 2 |              0.11905 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2398 | 15-20%                  |                 2 |              0.1199  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2412 | 15-20%                  |                 2 |              0.1206  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2477 | >20%                    |                 2 |              0.12385 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | >20%                    |                 2 |              0.12495 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | >20%                    |                 2 |              0.12835 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2632 | 15-20%                  |                10 |              0.02632 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2907 | >20%                    |                 2 |              0.14535 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2939 | <5%                     |                10 |              0.02939 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | <5%                     |                 2 |              0.1486  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3046 | >20%                    |                 5 |              0.06092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3074 | >20%                    |                 2 |              0.1537  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | 5-10%                   |                 2 |              0.15575 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3118 | 15-20%                  |                 2 |              0.1559  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3153 | 15-20%                  |                10 |              0.03153 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | 5-10%                   |                 2 |              0.1584  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3197 | >20%                    |                 2 |              0.15985 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3223 | 15-20%                  |                 2 |              0.16115 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3276 | >20%                    |                 2 |              0.1638  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3298 | <5%                     |                 2 |              0.1649  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3433 | <5%                     |                 5 |              0.06866 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3498 | >20%                    |                 2 |              0.1749  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3571 | 15-20%                  |                 2 |              0.17855 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3587 | 15-20%                  |                 5 |              0.07174 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3598 | >20%                    |                 2 |              0.1799  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3702 | >20%                    |                 5 |              0.07404 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3846 | >20%                    |                 5 |              0.07692 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | <5%                     |                 2 |              0.19445 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3927 | >20%                    |                 2 |              0.19635 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3927 | >20%                    |                 2 |              0.19635 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3928 | >20%                    |                 2 |              0.1964  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3947 | >20%                    |                 5 |              0.07894 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4018 | >20%                    |                 5 |              0.08036 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.404  | >20%                    |                 2 |              0.202   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4306 | 15-20%                  |                 5 |              0.08612 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4367 | 5-10%                   |                 2 |              0.21835 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4375 | 10-15%                  |                 2 |              0.21875 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4386 | <5%                     |                 2 |              0.2193  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | >20%                    |                 5 |              0.08924 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4494 | >20%                    |                 5 |              0.08988 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | 5-10%                   |                 2 |              0.2276  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | >20%                    |                 5 |              0.09184 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4616 | 10-15%                  |                 2 |              0.2308  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4722 | >20%                    |                10 |              0.04722 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4743 | >20%                    |                 2 |              0.23715 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4776 | >20%                    |                 2 |              0.2388  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4797 | >20%                    |                 2 |              0.23985 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4841 | >20%                    |                 2 |              0.24205 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4898 | >20%                    |                 5 |              0.09796 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4922 | >20%                    |                 5 |              0.09844 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4951 | 15-20%                  |                 2 |              0.24755 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | >20%                    |                 5 |              0.09938 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4986 | >20%                    |                 2 |              0.2493  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | 10-15%                  |                 5 |              0.10006 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.505  | 5-10%                   |                 5 |              0.101   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5055 | >20%                    |                10 |              0.05055 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5101 | 10-15%                  |                 5 |              0.10202 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5121 | 10-15%                  |                 5 |              0.10242 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5133 | >20%                    |                 5 |              0.10266 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5241 | 5-10%                   |                 2 |              0.26205 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5256 | >20%                    |                 5 |              0.10512 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5301 | >20%                    |                 2 |              0.26505 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5379 | >20%                    |                 2 |              0.26895 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5417 | >20%                    |                 2 |              0.27085 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.543  | >20%                    |                 5 |              0.1086  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5522 | >20%                    |                 2 |              0.2761  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5538 | 5-10%                   |                 5 |              0.11076 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5646 | >20%                    |                 5 |              0.11292 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5681 | >20%                    |                 5 |              0.11362 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5684 | >20%                    |                10 |              0.05684 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.572  | 15-20%                  |                10 |              0.0572  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5825 | <5%                     |                10 |              0.05825 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5872 | >20%                    |                 2 |              0.2936  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5898 | >20%                    |                10 |              0.05898 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5955 | <5%                     |                 5 |              0.1191  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5971 | 10-15%                  |                 5 |              0.11942 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5984 | >20%                    |                 5 |              0.11968 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5993 | >20%                    |                10 |              0.05993 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5996 | >20%                    |                10 |              0.05996 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6007 | 5-10%                   |                 5 |              0.12014 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6025 | 15-20%                  |                10 |              0.06025 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.609  | >20%                    |                10 |              0.0609  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6195 | >20%                    |                 5 |              0.1239  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6277 | >20%                    |                 2 |              0.31385 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6302 | <5%                     |                 2 |              0.3151  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.635  | >20%                    |                 5 |              0.127   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6368 | >20%                    |                 5 |              0.12736 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6506 | >20%                    |                 5 |              0.13012 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6618 | 10-15%                  |                 2 |              0.3309  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6623 | 15-20%                  |                 2 |              0.33115 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6826 | >20%                    |                 5 |              0.13652 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6831 | >20%                    |                 5 |              0.13662 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6862 | >20%                    |                 5 |              0.13724 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6946 | 15-20%                  |                 5 |              0.13892 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6998 | >20%                    |                 5 |              0.13996 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7069 | >20%                    |                 5 |              0.14138 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7136 | <5%                     |                10 |              0.07136 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7139 | >20%                    |                10 |              0.07139 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7244 | <5%                     |                 5 |              0.14488 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7283 | 15-20%                  |                10 |              0.07283 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7293 | 15-20%                  |                 2 |              0.36465 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7362 | 15-20%                  |                 5 |              0.14724 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7714 | <5%                     |                10 |              0.07714 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.774  | 15-20%                  |                10 |              0.0774  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7856 | >20%                    |                 5 |              0.15712 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7954 | >20%                    |                10 |              0.07954 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8023 | 15-20%                  |                10 |              0.08023 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8035 | 5-10%                   |                 5 |              0.1607  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8037 | <5%                     |                10 |              0.08037 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8201 | >20%                    |                 5 |              0.16402 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8218 | 5-10%                   |                10 |              0.08218 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8263 | >20%                    |                10 |              0.08263 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | 5-10%                   |                10 |              0.08277 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8292 | 5-10%                   |                10 |              0.08292 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8346 | 15-20%                  |                10 |              0.08346 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8502 | 15-20%                  |                10 |              0.08502 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8585 | <5%                     |                 5 |              0.1717  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8611 | >20%                    |                 5 |              0.17222 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8734 | 5-10%                   |                 5 |              0.17468 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8803 | <5%                     |                10 |              0.08803 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8836 | >20%                    |                10 |              0.08836 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8887 | 5-10%                   |                10 |              0.08887 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8979 | 5-10%                   |                10 |              0.08979 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9063 | 15-20%                  |                10 |              0.09063 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9263 | 15-20%                  |                10 |              0.09263 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9413 | >20%                    |                10 |              0.09413 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9486 | >20%                    |                10 |              0.09486 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9602 | 15-20%                  |                10 |              0.09602 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9609 | 5-10%                   |                10 |              0.09609 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.967  | 5-10%                   |                10 |              0.0967  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0174 | >20%                    |                10 |              0.10174 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0215 | >20%                    |                 2 |              0.51075 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.024  | <5%                     |                10 |              0.1024  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.03   | >20%                    |                 2 |              0.515   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0389 | >20%                    |                10 |              0.10389 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0472 | >20%                    |                10 |              0.10472 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0505 | 15-20%                  |                10 |              0.10505 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0519 | <5%                     |                10 |              0.10519 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0567 | >20%                    |                 5 |              0.21134 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0669 | >20%                    |                 5 |              0.21338 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0851 | >20%                    |                10 |              0.10851 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0904 | 5-10%                   |                10 |              0.10904 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1276 | <5%                     |                 2 |              0.5638  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.145  | >20%                    |                10 |              0.1145  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1527 | >20%                    |                10 |              0.11527 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2498 | 15-20%                  |                 5 |              0.24996 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2559 | >20%                    |                10 |              0.12559 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2619 | >20%                    |                 5 |              0.25238 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2687 | >20%                    |                 5 |              0.25374 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2876 | >20%                    |                10 |              0.12876 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3081 | >20%                    |                10 |              0.13081 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3226 | >20%                    |                 2 |              0.6613  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3624 | >20%                    |                 2 |              0.6812  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3732 | >20%                    |                 5 |              0.27464 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4062 | 5-10%                   |                10 |              0.14062 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4461 | <5%                     |                10 |              0.14461 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5138 | <5%                     |                 5 |              0.30276 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5619 | 10-15%                  |                10 |              0.15619 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.7542 | 5-10%                   |                 2 |              0.8771  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8048 | >20%                    |                10 |              0.18048 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.829  | <5%                     |                10 |              0.1829  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9737 | 5-10%                   |                10 |              0.19737 |