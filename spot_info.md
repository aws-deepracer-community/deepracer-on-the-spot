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

Data correct as of 2026-08-06 02:52:24.348932, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1746 | >20%                    |                 2 |              0.0873  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1926 | >20%                    |                 2 |              0.0963  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2069 | >20%                    |                 2 |              0.10345 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2271 | 15-20%                  |                 5 |              0.04542 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.237  | 15-20%                  |                 2 |              0.1185  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2464 | >20%                    |                 2 |              0.1232  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2782 | >20%                    |                 2 |              0.1391  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2795 | 15-20%                  |                 2 |              0.13975 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | >20%                    |                 2 |              0.141   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | >20%                    |                 2 |              0.141   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2905 | >20%                    |                 5 |              0.0581  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | >20%                    |                 2 |              0.1467  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | >20%                    |                 2 |              0.15425 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3276 | 15-20%                  |                 2 |              0.1638  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3371 | >20%                    |                 5 |              0.06742 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3407 | >20%                    |                 2 |              0.17035 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3479 | 15-20%                  |                 5 |              0.06958 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3547 | >20%                    |                10 |              0.03547 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3548 | 10-15%                  |                 2 |              0.1774  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3549 | >20%                    |                 5 |              0.07098 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3635 | >20%                    |                 2 |              0.18175 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3693 | >20%                    |                10 |              0.03693 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3698 | 15-20%                  |                 2 |              0.1849  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3753 | <5%                     |                 2 |              0.18765 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3817 | 5-10%                   |                10 |              0.03817 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3843 | >20%                    |                 5 |              0.07686 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3871 | >20%                    |                 5 |              0.07742 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3939 | 10-15%                  |                 2 |              0.19695 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3952 | >20%                    |                10 |              0.03952 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3968 | 5-10%                   |                10 |              0.03968 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4012 | >20%                    |                 2 |              0.2006  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4035 | >20%                    |                10 |              0.04035 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4195 | 10-15%                  |                10 |              0.04195 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4232 | >20%                    |                 2 |              0.2116  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4234 | >20%                    |                 2 |              0.2117  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4261 | 10-15%                  |                 2 |              0.21305 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4341 | 15-20%                  |                 2 |              0.21705 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4355 | <5%                     |                 2 |              0.21775 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4377 | >20%                    |                 5 |              0.08754 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4453 | >20%                    |                 5 |              0.08906 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4571 | >20%                    |                10 |              0.04571 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4577 | 10-15%                  |                 2 |              0.22885 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4589 | >20%                    |                10 |              0.04589 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4653 | >20%                    |                 2 |              0.23265 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4676 | >20%                    |                 5 |              0.09352 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4723 | >20%                    |                 2 |              0.23615 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4732 | >20%                    |                 2 |              0.2366  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4751 | >20%                    |                 2 |              0.23755 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4876 | >20%                    |                 5 |              0.09752 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4966 | >20%                    |                 5 |              0.09932 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4975 | >20%                    |                 5 |              0.0995  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5146 | 15-20%                  |                 5 |              0.10292 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5173 | >20%                    |                 2 |              0.25865 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5281 | >20%                    |                 2 |              0.26405 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5382 | >20%                    |                10 |              0.05382 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5436 | >20%                    |                 5 |              0.10872 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5448 | 5-10%                   |                 2 |              0.2724  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5546 | >20%                    |                 5 |              0.11092 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5627 | <5%                     |                 2 |              0.28135 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.564  | >20%                    |                 5 |              0.1128  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.57   | >20%                    |                 5 |              0.114   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5796 | 10-15%                  |                 5 |              0.11592 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5946 | >20%                    |                 5 |              0.11892 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6038 | >20%                    |                 5 |              0.12076 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6227 | >20%                    |                 5 |              0.12454 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6285 | >20%                    |                 5 |              0.1257  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6289 | >20%                    |                 2 |              0.31445 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6315 | >20%                    |                 2 |              0.31575 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6488 | >20%                    |                 5 |              0.12976 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6492 | >20%                    |                 5 |              0.12984 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6498 | <5%                     |                 5 |              0.12996 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6538 | >20%                    |                 5 |              0.13076 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.66   | >20%                    |                10 |              0.066   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6606 | 15-20%                  |                10 |              0.06606 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6615 | >20%                    |                 5 |              0.1323  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6673 | >20%                    |                 5 |              0.13346 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6699 | >20%                    |                10 |              0.06699 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6709 | 15-20%                  |                 5 |              0.13418 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6783 | 5-10%                   |                 5 |              0.13566 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6798 | >20%                    |                 5 |              0.13596 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6841 | >20%                    |                 5 |              0.13682 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6978 | >20%                    |                 2 |              0.3489  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.712  | >20%                    |                10 |              0.0712  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7202 | >20%                    |                 2 |              0.3601  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7335 | >20%                    |                10 |              0.07335 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7388 |                         |                 2 |              0.3694  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7438 | >20%                    |                 5 |              0.14876 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7853 | >20%                    |                10 |              0.07853 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7928 | <5%                     |                10 |              0.07928 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8038 | >20%                    |                10 |              0.08038 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8039 | >20%                    |                10 |              0.08039 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8082 | 10-15%                  |                 2 |              0.4041  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8106 | >20%                    |                 5 |              0.16212 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8298 | >20%                    |                 2 |              0.4149  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8393 |                         |                 5 |              0.16786 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8469 | >20%                    |                10 |              0.08469 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8509 | >20%                    |                10 |              0.08509 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8597 | >20%                    |                10 |              0.08597 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8618 | >20%                    |                 2 |              0.4309  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8708 |                         |                 2 |              0.4354  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8792 | 15-20%                  |                10 |              0.08792 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8856 | >20%                    |                 5 |              0.17712 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8913 | 15-20%                  |                10 |              0.08913 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9003 | 15-20%                  |                10 |              0.09003 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9018 | 10-15%                  |                 2 |              0.4509  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9028 | 5-10%                   |                10 |              0.09028 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9039 | >20%                    |                 5 |              0.18078 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9102 | >20%                    |                10 |              0.09102 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9175 | >20%                    |                 5 |              0.1835  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9205 | >20%                    |                10 |              0.09205 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9276 | >20%                    |                 5 |              0.18552 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9463 | >20%                    |                 2 |              0.47315 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9466 | >20%                    |                 5 |              0.18932 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9698 | 5-10%                   |                10 |              0.09698 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9837 | >20%                    |                 5 |              0.19674 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.99   | >20%                    |                10 |              0.099   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9901 | >20%                    |                10 |              0.09901 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0078 | >20%                    |                10 |              0.10078 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0329 | 15-20%                  |                10 |              0.10329 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0334 | >20%                    |                 5 |              0.20668 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0363 | 15-20%                  |                 2 |              0.51815 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.043  | >20%                    |                10 |              0.1043  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0505 | >20%                    |                10 |              0.10505 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0654 | 15-20%                  |                10 |              0.10654 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0816 | >20%                    |                10 |              0.10816 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0888 |                         |                10 |              0.10888 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1007 | >20%                    |                 2 |              0.55035 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1473 | 5-10%                   |                 2 |              0.57365 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.194  | 15-20%                  |                10 |              0.1194  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2386 | >20%                    |                 5 |              0.24772 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2657 | >20%                    |                10 |              0.12657 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2684 | >20%                    |                10 |              0.12684 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.283  | >20%                    |                10 |              0.1283  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2878 | >20%                    |                 5 |              0.25756 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2948 |                         |                 5 |              0.25896 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2957 | >20%                    |                 5 |              0.25914 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3728 | 10-15%                  |                 2 |              0.6864  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3936 | >20%                    |                10 |              0.13936 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4401 | 5-10%                   |                 5 |              0.28802 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4527 | >20%                    |                10 |              0.14527 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4787 | 5-10%                   |                 2 |              0.73935 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5467 | 15-20%                  |                 5 |              0.30934 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6079 | 10-15%                  |                10 |              0.16079 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6593 | >20%                    |                10 |              0.16593 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6995 | 5-10%                   |                10 |              0.16995 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7113 | >20%                    |                10 |              0.17113 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7738 | >20%                    |                10 |              0.17738 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8449 |                         |                10 |              0.18449 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9477 | 15-20%                  |                10 |              0.19477 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.9707 | >20%                    |                 5 |              0.39414 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1476 | 5-10%                   |                 2 |              1.0738  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7803 | >20%                    |                 5 |              0.55606 |