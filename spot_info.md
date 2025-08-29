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

Data correct as of 2025-08-29 01:46:58.113623, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0978 | 5-10%                   |                 2 |              0.0489  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1106 | >20%                    |                 2 |              0.0553  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.12   | >20%                    |                 2 |              0.06    |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1637 | >20%                    |                 2 |              0.08185 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1753 | >20%                    |                 5 |              0.03506 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1838 | >20%                    |                 5 |              0.03676 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1869 | >20%                    |                 2 |              0.09345 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1916 | 10-15%                  |                 5 |              0.03832 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2004 | 15-20%                  |                 5 |              0.04008 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.203  | >20%                    |                 2 |              0.1015  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2045 | 10-15%                  |                 2 |              0.10225 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2286 | >20%                    |                 5 |              0.04572 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2411 | >20%                    |                 2 |              0.12055 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2507 | >20%                    |                10 |              0.02507 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | >20%                    |                 2 |              0.135   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | >20%                    |                 2 |              0.1386  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | 15-20%                  |                 2 |              0.1452  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2916 | >20%                    |                 2 |              0.1458  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3202 | 5-10%                   |                 2 |              0.1601  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3205 | 10-15%                  |                 2 |              0.16025 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | >20%                    |                 2 |              0.16095 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3262 | 5-10%                   |                 2 |              0.1631  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3311 | 15-20%                  |                10 |              0.03311 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3328 | >20%                    |                 5 |              0.06656 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3385 | >20%                    |                 2 |              0.16925 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3388 | >20%                    |                 2 |              0.1694  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3439 | >20%                    |                 5 |              0.06878 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3488 | >20%                    |                 2 |              0.1744  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3499 | >20%                    |                 2 |              0.17495 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3526 | 10-15%                  |                 5 |              0.07052 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | >20%                    |                 2 |              0.1802  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3684 | >20%                    |                 5 |              0.07368 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3701 | >20%                    |                 2 |              0.18505 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3767 | 10-15%                  |                 2 |              0.18835 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | >20%                    |                 5 |              0.0757  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3785 | >20%                    |                 2 |              0.18925 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | >20%                    |                 2 |              0.19035 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | 15-20%                  |                 2 |              0.19335 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3936 | 10-15%                  |                 2 |              0.1968  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3954 | 15-20%                  |                 2 |              0.1977  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4092 | >20%                    |                 5 |              0.08184 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4093 | 15-20%                  |                 2 |              0.20465 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4232 | >20%                    |                 5 |              0.08464 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4233 | >20%                    |                 5 |              0.08466 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4261 | >20%                    |                 5 |              0.08522 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4276 | 10-15%                  |                 2 |              0.2138  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4386 | 10-15%                  |                 2 |              0.2193  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.447  | >20%                    |                10 |              0.0447  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4538 | 15-20%                  |                 2 |              0.2269  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4574 | 15-20%                  |                 5 |              0.09148 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.459  | >20%                    |                 5 |              0.0918  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4619 | 5-10%                   |                 2 |              0.23095 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.464  | >20%                    |                 5 |              0.0928  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4675 | 15-20%                  |                10 |              0.04675 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.468  | <5%                     |                 2 |              0.234   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4735 | >20%                    |                10 |              0.04735 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | >20%                    |                 2 |              0.23905 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4791 | >20%                    |                 2 |              0.23955 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4831 | >20%                    |                 2 |              0.24155 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4837 | >20%                    |                 2 |              0.24185 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4886 | >20%                    |                 2 |              0.2443  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4979 | >20%                    |                 5 |              0.09958 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5043 | >20%                    |                 5 |              0.10086 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.506  | >20%                    |                 5 |              0.1012  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.509  | >20%                    |                 2 |              0.2545  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5105 | 5-10%                   |                 5 |              0.1021  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5111 | >20%                    |                 2 |              0.25555 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5128 | >20%                    |                 5 |              0.10256 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5316 | >20%                    |                 2 |              0.2658  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5394 | >20%                    |                 5 |              0.10788 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5427 | >20%                    |                 2 |              0.27135 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.545  | 10-15%                  |                 2 |              0.2725  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5477 | >20%                    |                 2 |              0.27385 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5486 | >20%                    |                 5 |              0.10972 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5565 | >20%                    |                 2 |              0.27825 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5627 | >20%                    |                 5 |              0.11254 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5694 | >20%                    |                 5 |              0.11388 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.578  | >20%                    |                 5 |              0.1156  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5786 | >20%                    |                 5 |              0.11572 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5799 | 5-10%                   |                 2 |              0.28995 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5809 | 15-20%                  |                 5 |              0.11618 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5813 | >20%                    |                 2 |              0.29065 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5846 | >20%                    |                 5 |              0.11692 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5922 | >20%                    |                 5 |              0.11844 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6045 | >20%                    |                 2 |              0.30225 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6165 | 10-15%                  |                 5 |              0.1233  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6182 | <5%                     |                 2 |              0.3091  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6195 | 10-15%                  |                 5 |              0.1239  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6234 | >20%                    |                 5 |              0.12468 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6253 | >20%                    |                 5 |              0.12506 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6416 | 10-15%                  |                10 |              0.06416 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6418 | 15-20%                  |                 5 |              0.12836 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6443 | >20%                    |                 5 |              0.12886 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6486 | >20%                    |                 2 |              0.3243  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6637 | 15-20%                  |                 5 |              0.13274 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6649 | >20%                    |                 5 |              0.13298 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6676 | 5-10%                   |                10 |              0.06676 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6738 | >20%                    |                 5 |              0.13476 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6764 | >20%                    |                10 |              0.06764 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6926 | 15-20%                  |                 2 |              0.3463  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6941 | >20%                    |                 5 |              0.13882 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6946 | 15-20%                  |                10 |              0.06946 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6956 | >20%                    |                10 |              0.06956 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6983 | >20%                    |                 5 |              0.13966 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.712  | >20%                    |                 5 |              0.1424  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7376 | >20%                    |                10 |              0.07376 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.7382 | >20%                    |                10 |              0.07382 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7382 | >20%                    |                 5 |              0.14764 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7522 | >20%                    |                 5 |              0.15044 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7535 | >20%                    |                 5 |              0.1507  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7583 | >20%                    |                10 |              0.07583 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.759  | >20%                    |                10 |              0.0759  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7681 | >20%                    |                 5 |              0.15362 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7734 | >20%                    |                 5 |              0.15468 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7803 | >20%                    |                10 |              0.07803 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7818 | 15-20%                  |                10 |              0.07818 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.794  | 10-15%                  |                10 |              0.0794  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7947 | >20%                    |                10 |              0.07947 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8108 | >20%                    |                 5 |              0.16216 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8217 | 15-20%                  |                10 |              0.08217 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8503 | >20%                    |                 5 |              0.17006 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.855  | >20%                    |                 2 |              0.4275  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8629 | 10-15%                  |                10 |              0.08629 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8728 | 10-15%                  |                 2 |              0.4364  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8921 | >20%                    |                10 |              0.08921 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.895  | >20%                    |                 5 |              0.179   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8956 | <5%                     |                10 |              0.08956 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9043 | <5%                     |                10 |              0.09043 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9069 | 5-10%                   |                10 |              0.09069 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9074 | 5-10%                   |                10 |              0.09074 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9125 | 15-20%                  |                10 |              0.09125 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9195 | 5-10%                   |                10 |              0.09195 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9318 | 15-20%                  |                10 |              0.09318 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9364 | >20%                    |                10 |              0.09364 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9524 | <5%                     |                10 |              0.09524 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.986  | >20%                    |                 2 |              0.493   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9959 | 10-15%                  |                10 |              0.09959 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0016 | >20%                    |                 2 |              0.5008  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0021 | 15-20%                  |                10 |              0.10021 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0113 | >20%                    |                10 |              0.10113 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0184 | >20%                    |                10 |              0.10184 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0272 | >20%                    |                10 |              0.10272 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0281 | <5%                     |                10 |              0.10281 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0324 | 15-20%                  |                10 |              0.10324 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0344 | >20%                    |                10 |              0.10344 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0437 | 15-20%                  |                10 |              0.10437 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0898 | >20%                    |                10 |              0.10898 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1094 | >20%                    |                 5 |              0.22188 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1154 | >20%                    |                10 |              0.11154 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.117  | 5-10%                   |                 2 |              0.5585  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1248 | 15-20%                  |                10 |              0.11248 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1332 | >20%                    |                10 |              0.11332 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1397 | >20%                    |                 2 |              0.56985 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1413 | 10-15%                  |                 5 |              0.22826 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1415 | >20%                    |                 5 |              0.2283  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1569 | 15-20%                  |                10 |              0.11569 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1981 | >20%                    |                 5 |              0.23962 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2054 | 10-15%                  |                 5 |              0.24108 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2125 | 5-10%                   |                10 |              0.12125 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2439 | 10-15%                  |                 2 |              0.62195 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.363  | 15-20%                  |                10 |              0.1363  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3722 | 10-15%                  |                10 |              0.13722 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3963 | >20%                    |                 5 |              0.27926 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4813 | 10-15%                  |                 5 |              0.29626 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4893 | >20%                    |                10 |              0.14893 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5459 | >20%                    |                10 |              0.15459 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.552  | >20%                    |                10 |              0.1552  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5555 | >20%                    |                10 |              0.15555 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5829 | >20%                    |                10 |              0.15829 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.615  | >20%                    |                10 |              0.1615  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.3218 | 10-15%                  |                10 |              0.23218 |