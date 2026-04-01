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

Data correct as of 2026-04-01 03:16:52.142002, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2071 | 15-20%                  |                 2 |              0.10355 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2101 | >20%                    |                 2 |              0.10505 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2202 | >20%                    |                 2 |              0.1101  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2238 | >20%                    |                 2 |              0.1119  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | >20%                    |                 2 |              0.12355 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2539 | >20%                    |                 2 |              0.12695 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2548 | 10-15%                  |                 2 |              0.1274  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2631 | 15-20%                  |                 5 |              0.05262 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2641 | >20%                    |                 2 |              0.13205 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | 15-20%                  |                 2 |              0.1373  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2787 | 15-20%                  |                 5 |              0.05574 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.28   | 5-10%                   |                10 |              0.028   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3026 | 5-10%                   |                10 |              0.03026 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3065 | <5%                     |                 2 |              0.15325 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3179 | >20%                    |                 5 |              0.06358 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3182 | >20%                    |                10 |              0.03182 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3202 | 10-15%                  |                 2 |              0.1601  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3242 | 10-15%                  |                 2 |              0.1621  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3253 | >20%                    |                 5 |              0.06506 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3257 | >20%                    |                10 |              0.03257 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3272 | >20%                    |                 2 |              0.1636  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.332  | 15-20%                  |                 5 |              0.0664  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3325 | >20%                    |                 5 |              0.0665  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3384 | >20%                    |                 2 |              0.1692  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | >20%                    |                 5 |              0.06858 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3449 | <5%                     |                 2 |              0.17245 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3665 | 15-20%                  |                 2 |              0.18325 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3738 | >20%                    |                 2 |              0.1869  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3785 | 5-10%                   |                10 |              0.03785 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3826 | <5%                     |                 5 |              0.07652 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3828 | >20%                    |                 5 |              0.07656 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3861 | >20%                    |                 5 |              0.07722 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | >20%                    |                 5 |              0.07746 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3904 | >20%                    |                 5 |              0.07808 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3907 | >20%                    |                 2 |              0.19535 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4043 | 10-15%                  |                 2 |              0.20215 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | <5%                     |                 2 |              0.20635 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4147 | >20%                    |                10 |              0.04147 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4218 | >20%                    |                 2 |              0.2109  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4221 | 15-20%                  |                 2 |              0.21105 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4224 | 10-15%                  |                 2 |              0.2112  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.424  | >20%                    |                 2 |              0.212   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | >20%                    |                 2 |              0.2126  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | >20%                    |                 5 |              0.08746 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4464 | >20%                    |                 5 |              0.08928 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4507 | >20%                    |                 5 |              0.09014 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4515 | >20%                    |                 2 |              0.22575 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4569 | >20%                    |                 2 |              0.22845 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4607 | >20%                    |                 5 |              0.09214 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4634 | >20%                    |                 5 |              0.09268 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4641 | >20%                    |                 2 |              0.23205 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4679 | >20%                    |                 2 |              0.23395 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | >20%                    |                 5 |              0.09486 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4745 | 15-20%                  |                10 |              0.04745 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | >20%                    |                 5 |              0.09518 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4793 | >20%                    |                 5 |              0.09586 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4809 | 15-20%                  |                 2 |              0.24045 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4869 | >20%                    |                 5 |              0.09738 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4922 | >20%                    |                 2 |              0.2461  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5057 | >20%                    |                 5 |              0.10114 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5117 | >20%                    |                 2 |              0.25585 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5134 | 15-20%                  |                 2 |              0.2567  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5159 | >20%                    |                 5 |              0.10318 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5172 | >20%                    |                 5 |              0.10344 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5205 | >20%                    |                 2 |              0.26025 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5273 | 15-20%                  |                 5 |              0.10546 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5279 | 5-10%                   |                 2 |              0.26395 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | 5-10%                   |                 5 |              0.10804 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5464 | >20%                    |                 5 |              0.10928 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5558 | >20%                    |                 5 |              0.11116 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5567 | 15-20%                  |                10 |              0.05567 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5584 | >20%                    |                 5 |              0.11168 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5697 | >20%                    |                 2 |              0.28485 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5794 | >20%                    |                10 |              0.05794 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5795 | 10-15%                  |                 5 |              0.1159  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5908 | >20%                    |                10 |              0.05908 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5913 | <5%                     |                10 |              0.05913 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5928 | 15-20%                  |                10 |              0.05928 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6063 | >20%                    |                10 |              0.06063 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6196 | >20%                    |                10 |              0.06196 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6232 | >20%                    |                 5 |              0.12464 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6287 | 5-10%                   |                10 |              0.06287 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6324 | >20%                    |                 5 |              0.12648 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6341 | 10-15%                  |                 2 |              0.31705 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6357 | 5-10%                   |                 5 |              0.12714 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.636  | >20%                    |                10 |              0.0636  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6362 | >20%                    |                10 |              0.06362 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6533 | >20%                    |                10 |              0.06533 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6588 | >20%                    |                 5 |              0.13176 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6731 | >20%                    |                 2 |              0.33655 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6794 | >20%                    |                 5 |              0.13588 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.68   | >20%                    |                10 |              0.068   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6842 | >20%                    |                 2 |              0.3421  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6906 | >20%                    |                 5 |              0.13812 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7046 | >20%                    |                 5 |              0.14092 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7202 | >20%                    |                10 |              0.07202 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7276 | 5-10%                   |                 2 |              0.3638  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7314 | >20%                    |                10 |              0.07314 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7347 | >20%                    |                 5 |              0.14694 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7502 | >20%                    |                10 |              0.07502 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7582 | >20%                    |                 5 |              0.15164 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7688 | >20%                    |                 2 |              0.3844  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7713 | >20%                    |                 5 |              0.15426 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7795 | >20%                    |                10 |              0.07795 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7835 | >20%                    |                 5 |              0.1567  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | >20%                    |                10 |              0.08015 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8103 | >20%                    |                10 |              0.08103 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8104 | >20%                    |                10 |              0.08104 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8143 | >20%                    |                 5 |              0.16286 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.824  | >20%                    |                 5 |              0.1648  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8286 | >20%                    |                10 |              0.08286 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8369 | >20%                    |                10 |              0.08369 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8377 | >20%                    |                 2 |              0.41885 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8402 | 5-10%                   |                 2 |              0.4201  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8409 | >20%                    |                10 |              0.08409 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8556 | >20%                    |                 5 |              0.17112 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8715 | 5-10%                   |                10 |              0.08715 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8775 | >20%                    |                10 |              0.08775 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8807 | >20%                    |                 2 |              0.44035 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8865 | >20%                    |                10 |              0.08865 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8871 | 15-20%                  |                10 |              0.08871 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9173 | >20%                    |                10 |              0.09173 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9174 | >20%                    |                 2 |              0.4587  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9209 | >20%                    |                10 |              0.09209 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9301 | >20%                    |                10 |              0.09301 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9541 | >20%                    |                 5 |              0.19082 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9613 | 10-15%                  |                 2 |              0.48065 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9682 | 15-20%                  |                10 |              0.09682 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9739 | >20%                    |                10 |              0.09739 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9777 | 10-15%                  |                10 |              0.09777 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0116 | >20%                    |                 5 |              0.20232 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0426 | >20%                    |                10 |              0.10426 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.052  | 15-20%                  |                10 |              0.1052  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.053  | 5-10%                   |                10 |              0.1053  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0714 | >20%                    |                10 |              0.10714 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1037 | >20%                    |                 5 |              0.22074 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1071 | >20%                    |                10 |              0.11071 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1361 | 10-15%                  |                10 |              0.11361 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.158  | >20%                    |                 5 |              0.2316  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2758 | 15-20%                  |                10 |              0.12758 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3292 | 15-20%                  |                10 |              0.13292 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3778 | 5-10%                   |                 2 |              0.6889  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3932 | >20%                    |                 2 |              0.6966  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4117 | >20%                    |                10 |              0.14117 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4404 | 15-20%                  |                 5 |              0.28808 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4595 | >20%                    |                 5 |              0.2919  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.5188 |                         |                 2 |              0.7594  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      2.0351 |                         |                 5 |              0.40702 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0362 | >20%                    |                10 |              0.20362 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.6745 | >20%                    |                10 |              0.26745 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.9849 |                         |                10 |              0.29849 |