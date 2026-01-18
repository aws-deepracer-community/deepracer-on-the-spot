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

Data correct as of 2026-01-18 02:12:09.966132, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1463 | >20%                    |                 2 |              0.07315 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1639 | >20%                    |                 2 |              0.08195 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1643 | >20%                    |                 2 |              0.08215 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1719 | >20%                    |                 2 |              0.08595 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1818 | <5%                     |                 2 |              0.0909  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1894 | >20%                    |                 2 |              0.0947  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1989 | 15-20%                  |                 5 |              0.03978 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2112 | >20%                    |                 5 |              0.04224 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.239  | >20%                    |                 2 |              0.1195  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | >20%                    |                 2 |              0.1275  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2672 | >20%                    |                 5 |              0.05344 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2699 | 5-10%                   |                10 |              0.02699 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2721 | >20%                    |                 2 |              0.13605 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 15-20%                  |                 2 |              0.1408  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | >20%                    |                 2 |              0.1433  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | >20%                    |                 2 |              0.14365 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | >20%                    |                 2 |              0.1451  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.307  | >20%                    |                 5 |              0.0614  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3082 | >20%                    |                10 |              0.03082 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3147 | >20%                    |                 5 |              0.06294 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | >20%                    |                 2 |              0.15855 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3208 | >20%                    |                 5 |              0.06416 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3229 | >20%                    |                 2 |              0.16145 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3275 | 15-20%                  |                10 |              0.03275 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3333 | >20%                    |                 2 |              0.16665 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3361 | 5-10%                   |                10 |              0.03361 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3479 | 5-10%                   |                 5 |              0.06958 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3501 | <5%                     |                 2 |              0.17505 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3551 | 5-10%                   |                 2 |              0.17755 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3579 | 10-15%                  |                 2 |              0.17895 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.358  | >20%                    |                 2 |              0.179   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3643 | >20%                    |                 5 |              0.07286 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3757 | <5%                     |                 5 |              0.07514 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3786 | >20%                    |                 2 |              0.1893  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3812 | >20%                    |                 5 |              0.07624 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3837 | >20%                    |                10 |              0.03837 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.388  | 5-10%                   |                 2 |              0.194   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3892 | >20%                    |                 5 |              0.07784 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4008 | >20%                    |                 2 |              0.2004  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4015 | >20%                    |                 2 |              0.20075 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4019 | >20%                    |                 2 |              0.20095 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4019 | 10-15%                  |                 2 |              0.20095 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4026 | >20%                    |                 2 |              0.2013  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4027 | >20%                    |                10 |              0.04027 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4032 | >20%                    |                 5 |              0.08064 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4044 | <5%                     |                 2 |              0.2022  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4057 | >20%                    |                 5 |              0.08114 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4066 | >20%                    |                10 |              0.04066 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4081 | >20%                    |                 2 |              0.20405 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4089 | >20%                    |                 5 |              0.08178 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4091 | <5%                     |                10 |              0.04091 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4092 | 15-20%                  |                 5 |              0.08184 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4098 | >20%                    |                 5 |              0.08196 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4134 | >20%                    |                 5 |              0.08268 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4215 | >20%                    |                 5 |              0.0843  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4234 | >20%                    |                 2 |              0.2117  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4255 | >20%                    |                10 |              0.04255 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4319 | 10-15%                  |                 2 |              0.21595 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4338 | >20%                    |                 2 |              0.2169  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4395 | >20%                    |                 5 |              0.0879  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4414 | 15-20%                  |                10 |              0.04414 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.443  | >20%                    |                 2 |              0.2215  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4431 | >20%                    |                 2 |              0.22155 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4434 | >20%                    |                 2 |              0.2217  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | >20%                    |                 5 |              0.08896 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4507 | >20%                    |                 2 |              0.22535 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.452  | <5%                     |                 2 |              0.226   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4557 | >20%                    |                10 |              0.04557 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4592 | >20%                    |                 2 |              0.2296  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4753 | >20%                    |                 2 |              0.23765 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4766 | 15-20%                  |                 2 |              0.2383  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4863 | >20%                    |                10 |              0.04863 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4879 | >20%                    |                 5 |              0.09758 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4916 | <5%                     |                 5 |              0.09832 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.492  | >20%                    |                 2 |              0.246   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4984 | 15-20%                  |                 2 |              0.2492  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5012 | >20%                    |                 5 |              0.10024 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5039 | >20%                    |                 5 |              0.10078 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5067 | >20%                    |                 5 |              0.10134 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5084 | <5%                     |                10 |              0.05084 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5303 | 15-20%                  |                 5 |              0.10606 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5339 | >20%                    |                 5 |              0.10678 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5354 | >20%                    |                 2 |              0.2677  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5405 | >20%                    |                 5 |              0.1081  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5407 | >20%                    |                 2 |              0.27035 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5469 | >20%                    |                 5 |              0.10938 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | 5-10%                   |                 5 |              0.11038 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5605 | 10-15%                  |                 5 |              0.1121  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5733 | 15-20%                  |                 5 |              0.11466 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.577  | >20%                    |                 5 |              0.1154  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5791 | >20%                    |                10 |              0.05791 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5793 | >20%                    |                 2 |              0.28965 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5798 | <5%                     |                 2 |              0.2899  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5802 | >20%                    |                 2 |              0.2901  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5862 | 5-10%                   |                 5 |              0.11724 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5915 | 15-20%                  |                10 |              0.05915 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5971 | >20%                    |                 5 |              0.11942 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5994 | 15-20%                  |                 5 |              0.11988 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6214 | >20%                    |                 2 |              0.3107  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6241 | 10-15%                  |                 2 |              0.31205 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6312 | 5-10%                   |                 5 |              0.12624 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6366 | >20%                    |                10 |              0.06366 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6472 | 15-20%                  |                 5 |              0.12944 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6472 | >20%                    |                 5 |              0.12944 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6544 | >20%                    |                 2 |              0.3272  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6585 | 15-20%                  |                10 |              0.06585 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6621 | 10-15%                  |                 5 |              0.13242 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.668  |                         |                 2 |              0.334   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6686 | >20%                    |                10 |              0.06686 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6769 | >20%                    |                 5 |              0.13538 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.678  | >20%                    |                 2 |              0.339   |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6802 | 10-15%                  |                 5 |              0.13604 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6939 | >20%                    |                10 |              0.06939 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7033 | >20%                    |                 2 |              0.35165 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7194 | >20%                    |                10 |              0.07194 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7201 | >20%                    |                10 |              0.07201 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7239 | <5%                     |                10 |              0.07239 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.7265 | 10-15%                  |                10 |              0.07265 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.727  | <5%                     |                 5 |              0.1454  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.732  | 15-20%                  |                10 |              0.0732  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7344 | >20%                    |                10 |              0.07344 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.747  | >20%                    |                 5 |              0.1494  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7499 | 5-10%                   |                10 |              0.07499 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7525 | >20%                    |                 2 |              0.37625 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7527 | 15-20%                  |                 2 |              0.37635 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7528 | >20%                    |                10 |              0.07528 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7538 | >20%                    |                 5 |              0.15076 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7605 | 15-20%                  |                10 |              0.07605 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7614 | >20%                    |                10 |              0.07614 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7813 | >20%                    |                 5 |              0.15626 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7858 | <5%                     |                10 |              0.07858 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7979 | >20%                    |                 2 |              0.39895 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | 15-20%                  |                10 |              0.08015 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8062 | 15-20%                  |                 5 |              0.16124 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8204 | >20%                    |                10 |              0.08204 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8206 | <5%                     |                10 |              0.08206 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8271 | >20%                    |                10 |              0.08271 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8491 | >20%                    |                10 |              0.08491 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8508 | 10-15%                  |                 5 |              0.17016 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8704 | 15-20%                  |                10 |              0.08704 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8779 | 10-15%                  |                 5 |              0.17558 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8856 | >20%                    |                10 |              0.08856 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8872 | >20%                    |                10 |              0.08872 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9129 | >20%                    |                10 |              0.09129 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9532 | >20%                    |                 5 |              0.19064 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9616 | >20%                    |                10 |              0.09616 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9625 | >20%                    |                10 |              0.09625 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9711 | >20%                    |                 2 |              0.48555 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.973  | >20%                    |                 5 |              0.1946  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9736 | >20%                    |                10 |              0.09736 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9892 | >20%                    |                 2 |              0.4946  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0207 | 15-20%                  |                10 |              0.10207 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0371 | 15-20%                  |                10 |              0.10371 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0437 | >20%                    |                 5 |              0.20874 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0639 | >20%                    |                 5 |              0.21278 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0658 | <5%                     |                10 |              0.10658 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0809 | >20%                    |                 5 |              0.21618 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0912 | >20%                    |                 2 |              0.5456  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1006 | 10-15%                  |                10 |              0.11006 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1051 | >20%                    |                10 |              0.11051 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1136 | 15-20%                  |                10 |              0.11136 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1161 | >20%                    |                 2 |              0.55805 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1172 | >20%                    |                10 |              0.11172 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1972 | >20%                    |                10 |              0.11972 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2177 | >20%                    |                 5 |              0.24354 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2306 | >20%                    |                10 |              0.12306 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2483 | 15-20%                  |                10 |              0.12483 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2553 | >20%                    |                10 |              0.12553 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2667 | >20%                    |                 5 |              0.25334 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2958 | >20%                    |                10 |              0.12958 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3802 |                         |                10 |              0.13802 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.437  | >20%                    |                 2 |              0.7185  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4625 | 10-15%                  |                10 |              0.14625 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4831 | 10-15%                  |                 5 |              0.29662 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.514  | >20%                    |                10 |              0.1514  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5405 | >20%                    |                10 |              0.15405 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.7269 |                         |                 5 |              0.34538 |