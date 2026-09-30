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

Data correct as of 2026-09-30 04:50:16.546346, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0914 | >20%                    |                 2 |              0.0457  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1436 | 15-20%                  |                 2 |              0.0718  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1525 | >20%                    |                 2 |              0.07625 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1691 | >20%                    |                 5 |              0.03382 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1874 | 15-20%                  |                 5 |              0.03748 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2116 | >20%                    |                 2 |              0.1058  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2271 | >20%                    |                 5 |              0.04542 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2275 | 15-20%                  |                 5 |              0.0455  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | >20%                    |                 2 |              0.11845 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2558 | >20%                    |                 2 |              0.1279  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | >20%                    |                 2 |              0.14085 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | >20%                    |                 2 |              0.14625 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | 15-20%                  |                 2 |              0.14955 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | >20%                    |                 2 |              0.15425 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3106 | >20%                    |                 2 |              0.1553  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3263 | >20%                    |                 2 |              0.16315 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3299 | >20%                    |                 5 |              0.06598 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3546 | <5%                     |                10 |              0.03546 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3571 | >20%                    |                10 |              0.03571 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3626 | >20%                    |                 5 |              0.07252 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3671 | >20%                    |                 2 |              0.18355 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.368  | 10-15%                  |                 2 |              0.184   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3739 | 15-20%                  |                 2 |              0.18695 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3776 | >20%                    |                 5 |              0.07552 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3835 | >20%                    |                 2 |              0.19175 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3842 | >20%                    |                 5 |              0.07684 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3889 | >20%                    |                 2 |              0.19445 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3932 | >20%                    |                 2 |              0.1966  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3933 | <5%                     |                 2 |              0.19665 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | 5-10%                   |                10 |              0.03955 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4015 | 10-15%                  |                 2 |              0.20075 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4037 | >20%                    |                10 |              0.04037 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | >20%                    |                 5 |              0.08214 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4259 | >20%                    |                 5 |              0.08518 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4298 | >20%                    |                 5 |              0.08596 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4384 | >20%                    |                 2 |              0.2192  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4401 | 15-20%                  |                 2 |              0.22005 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4582 | >20%                    |                 2 |              0.2291  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4691 | >20%                    |                 5 |              0.09382 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4772 | >20%                    |                 2 |              0.2386  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4783 | 10-15%                  |                 2 |              0.23915 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4793 |                         |                 2 |              0.23965 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4806 | >20%                    |                 5 |              0.09612 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4857 | >20%                    |                 5 |              0.09714 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4924 |                         |                 5 |              0.09848 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4977 | >20%                    |                 5 |              0.09954 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5004 | >20%                    |                 2 |              0.2502  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5038 | >20%                    |                 5 |              0.10076 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5046 | >20%                    |                 2 |              0.2523  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5078 | >20%                    |                 5 |              0.10156 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5089 | >20%                    |                 2 |              0.25445 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5145 | <5%                     |                 2 |              0.25725 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.54   | 15-20%                  |                 2 |              0.27    |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5523 | >20%                    |                 2 |              0.27615 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5677 | >20%                    |                 5 |              0.11354 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5723 | >20%                    |                 2 |              0.28615 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | >20%                    |                 5 |              0.1145  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5795 | >20%                    |                 5 |              0.1159  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5917 | >20%                    |                10 |              0.05917 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5969 | 5-10%                   |                10 |              0.05969 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5995 | 10-15%                  |                 5 |              0.1199  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6081 | >20%                    |                10 |              0.06081 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6113 | >20%                    |                 5 |              0.12226 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6134 | 10-15%                  |                 2 |              0.3067  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.615  | >20%                    |                 2 |              0.3075  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6217 | >20%                    |                 5 |              0.12434 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6478 | >20%                    |                10 |              0.06478 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6575 | >20%                    |                 5 |              0.1315  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6602 | >20%                    |                 5 |              0.13204 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6781 | 5-10%                   |                 5 |              0.13562 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6858 | <5%                     |                 2 |              0.3429  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6866 | >20%                    |                 2 |              0.3433  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6895 | 5-10%                   |                 2 |              0.34475 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6953 | >20%                    |                 5 |              0.13906 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7019 | >20%                    |                10 |              0.07019 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7037 | >20%                    |                 5 |              0.14074 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | 15-20%                  |                10 |              0.07182 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7208 | >20%                    |                 2 |              0.3604  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7245 | >20%                    |                 5 |              0.1449  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7347 | 15-20%                  |                 5 |              0.14694 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7378 | 15-20%                  |                 2 |              0.3689  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.7456 |                         |                10 |              0.07456 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7479 | >20%                    |                 5 |              0.14958 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7486 | >20%                    |                 5 |              0.14972 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7526 | >20%                    |                 5 |              0.15052 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.754  | >20%                    |                10 |              0.0754  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7705 | 15-20%                  |                10 |              0.07705 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7766 | >20%                    |                10 |              0.07766 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7784 | >20%                    |                 5 |              0.15568 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8099 | 15-20%                  |                10 |              0.08099 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8169 | >20%                    |                10 |              0.08169 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8255 | >20%                    |                 2 |              0.41275 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8314 | >20%                    |                10 |              0.08314 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.839  | >20%                    |                 5 |              0.1678  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8395 | 5-10%                   |                10 |              0.08395 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8507 | >20%                    |                 2 |              0.42535 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8577 | >20%                    |                10 |              0.08577 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8604 | 10-15%                  |                 2 |              0.4302  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8607 | 15-20%                  |                 5 |              0.17214 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8692 | 10-15%                  |                10 |              0.08692 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8812 | >20%                    |                 5 |              0.17624 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8862 | >20%                    |                 5 |              0.17724 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8904 | >20%                    |                10 |              0.08904 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8907 | >20%                    |                10 |              0.08907 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.898  | >20%                    |                10 |              0.0898  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9065 | <5%                     |                 5 |              0.1813  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9141 | >20%                    |                 5 |              0.18282 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9457 | >20%                    |                 5 |              0.18914 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9553 | >20%                    |                10 |              0.09553 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.96   | >20%                    |                10 |              0.096   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9831 | >20%                    |                10 |              0.09831 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9955 | 15-20%                  |                10 |              0.09955 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0018 | 15-20%                  |                10 |              0.10018 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.019  | 15-20%                  |                10 |              0.1019  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0224 | 10-15%                  |                 2 |              0.5112  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0273 | >20%                    |                 2 |              0.51365 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0319 | >20%                    |                10 |              0.10319 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.034  | >20%                    |                10 |              0.1034  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0468 | >20%                    |                10 |              0.10468 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0582 | >20%                    |                 5 |              0.21164 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0599 | >20%                    |                10 |              0.10599 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0722 | >20%                    |                10 |              0.10722 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0794 | >20%                    |                 5 |              0.21588 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0863 | >20%                    |                10 |              0.10863 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1174 | 5-10%                   |                10 |              0.11174 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1549 | 5-10%                   |                 2 |              0.57745 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1863 |                         |                 2 |              0.59315 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2059 | >20%                    |                10 |              0.12059 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2115 | >20%                    |                10 |              0.12115 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3008 | 5-10%                   |                 2 |              0.6504  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.3062 |                         |                 2 |              0.6531  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3407 | >20%                    |                 2 |              0.67035 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3408 | >20%                    |                10 |              0.13408 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3703 | 10-15%                  |                10 |              0.13703 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3723 | 15-20%                  |                10 |              0.13723 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3908 | 10-15%                  |                 2 |              0.6954  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3943 | >20%                    |                10 |              0.13943 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.4637 |                         |                 5 |              0.29274 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5336 | >20%                    |                 2 |              0.7668  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.535  | 5-10%                   |                 5 |              0.307   |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5575 |                         |                10 |              0.15575 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5803 | >20%                    |                 5 |              0.31606 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.6029 |                         |                 5 |              0.32058 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6234 | >20%                    |                10 |              0.16234 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6742 | 15-20%                  |                10 |              0.16742 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7367 | >20%                    |                 5 |              0.34734 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9148 | >20%                    |                10 |              0.19148 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9489 |                         |                10 |              0.19489 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0909 | 15-20%                  |                 5 |              0.41818 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1843 | >20%                    |                10 |              0.21843 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2106 | 5-10%                   |                 2 |              1.1053  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2445 | 5-10%                   |                10 |              0.22445 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2694 | >20%                    |                 5 |              0.45388 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5908 | >20%                    |                10 |              0.25908 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1312 | >20%                    |                10 |              0.31312 |