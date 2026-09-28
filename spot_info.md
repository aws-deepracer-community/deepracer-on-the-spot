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

Data correct as of 2026-09-28 04:35:28.812615, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0827 | >20%                    |                 2 |              0.04135 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1321 | 15-20%                  |                 2 |              0.06605 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1438 | >20%                    |                 2 |              0.0719  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1516 | >20%                    |                 5 |              0.03032 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1701 | 15-20%                  |                 5 |              0.03402 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2206 | 15-20%                  |                 5 |              0.04412 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | >20%                    |                 2 |              0.1125  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | >20%                    |                 2 |              0.11855 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2486 | >20%                    |                 2 |              0.1243  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | >20%                    |                 2 |              0.1391  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2793 | >20%                    |                 2 |              0.13965 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | >20%                    |                 2 |              0.1423  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | 15-20%                  |                 2 |              0.1522  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3048 | >20%                    |                 2 |              0.1524  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.328  |                         |                 5 |              0.0656  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3285 | >20%                    |                 2 |              0.16425 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3347 | >20%                    |                 2 |              0.16735 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3453 | >20%                    |                 5 |              0.06906 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.355  | 10-15%                  |                 2 |              0.1775  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3617 | >20%                    |                 5 |              0.07234 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3689 | >20%                    |                10 |              0.03689 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3724 | 15-20%                  |                 2 |              0.1862  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3763 | <5%                     |                10 |              0.03763 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3844 | >20%                    |                 5 |              0.07688 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3847 | >20%                    |                 5 |              0.07694 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3864 | 10-15%                  |                 2 |              0.1932  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3941 | >20%                    |                 2 |              0.19705 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3943 | <5%                     |                 2 |              0.19715 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.396  | >20%                    |                 2 |              0.198   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4029 | 5-10%                   |                10 |              0.04029 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4032 | >20%                    |                 2 |              0.2016  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4089 | >20%                    |                 5 |              0.08178 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4096 | >20%                    |                 5 |              0.08192 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4217 | >20%                    |                 5 |              0.08434 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4365 | >20%                    |                 2 |              0.21825 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | >20%                    |                 5 |              0.0892  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4536 | 15-20%                  |                 2 |              0.2268  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4542 | >20%                    |                 2 |              0.2271  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.474  | >20%                    |                 2 |              0.237   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4772 | 10-15%                  |                 2 |              0.2386  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | >20%                    |                 5 |              0.09698 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4872 | >20%                    |                 5 |              0.09744 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4901 | >20%                    |                 2 |              0.24505 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.496  | >20%                    |                 5 |              0.0992  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5011 | >20%                    |                 2 |              0.25055 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5045 | >20%                    |                 2 |              0.25225 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5066 |                         |                 2 |              0.2533  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5103 | <5%                     |                 2 |              0.25515 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5281 | >20%                    |                 5 |              0.10562 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5386 | 15-20%                  |                 2 |              0.2693  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5414 | >20%                    |                 5 |              0.10828 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.548  | >20%                    |                 5 |              0.1096  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5523 | >20%                    |                 2 |              0.27615 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5682 | >20%                    |                10 |              0.05682 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5718 | 5-10%                   |                10 |              0.05718 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5732 | >20%                    |                 5 |              0.11464 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5845 | >20%                    |                 2 |              0.29225 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5993 | >20%                    |                10 |              0.05993 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6012 | >20%                    |                 5 |              0.12024 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6017 | 10-15%                  |                 5 |              0.12034 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6127 | >20%                    |                 5 |              0.12254 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6171 | >20%                    |                 2 |              0.30855 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6195 | >20%                    |                 5 |              0.1239  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6345 | 10-15%                  |                 2 |              0.31725 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6412 | >20%                    |                10 |              0.06412 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6611 | >20%                    |                 5 |              0.13222 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6611 | >20%                    |                 5 |              0.13222 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6632 | >20%                    |                 5 |              0.13264 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6815 | 5-10%                   |                 5 |              0.1363  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6824 | >20%                    |                 2 |              0.3412  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6888 | <5%                     |                 2 |              0.3444  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6944 | 5-10%                   |                 2 |              0.3472  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6952 | 15-20%                  |                 2 |              0.3476  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7084 | >20%                    |                 5 |              0.14168 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7152 | 15-20%                  |                10 |              0.07152 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7158 | >20%                    |                 5 |              0.14316 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7343 | >20%                    |                10 |              0.07343 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7353 | >20%                    |                 5 |              0.14706 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7354 | 15-20%                  |                 5 |              0.14708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7449 | >20%                    |                 5 |              0.14898 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7471 | >20%                    |                 5 |              0.14942 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7489 | >20%                    |                 5 |              0.14978 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7584 | >20%                    |                10 |              0.07584 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7653 | >20%                    |                10 |              0.07653 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7719 | >20%                    |                 2 |              0.38595 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7733 | >20%                    |                 2 |              0.38665 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.7894 |                         |                10 |              0.07894 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7992 | 15-20%                  |                10 |              0.07992 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8114 | 10-15%                  |                 2 |              0.4057  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.822  | 15-20%                  |                10 |              0.0822  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8306 | >20%                    |                10 |              0.08306 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8393 | 5-10%                   |                10 |              0.08393 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8395 | >20%                    |                 5 |              0.1679  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8519 | 10-15%                  |                10 |              0.08519 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8522 | >20%                    |                10 |              0.08522 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8524 | >20%                    |                10 |              0.08524 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8547 | >20%                    |                 2 |              0.42735 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8563 | >20%                    |                10 |              0.08563 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8628 | 15-20%                  |                 5 |              0.17256 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8643 | >20%                    |                10 |              0.08643 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9046 | >20%                    |                 5 |              0.18092 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9059 | <5%                     |                 5 |              0.18118 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9157 | >20%                    |                 5 |              0.18314 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9234 | >20%                    |                 5 |              0.18468 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.924  | >20%                    |                10 |              0.0924  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9407 | >20%                    |                 5 |              0.18814 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9448 | >20%                    |                10 |              0.09448 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.959  | >20%                    |                10 |              0.0959  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9884 | >20%                    |                 2 |              0.4942  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9929 | >20%                    |                10 |              0.09929 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9963 | 15-20%                  |                10 |              0.09963 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0013 | 15-20%                  |                10 |              0.10013 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0197 | >20%                    |                10 |              0.10197 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | >20%                    |                10 |              0.10256 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0298 | 15-20%                  |                10 |              0.10298 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0315 | 10-15%                  |                 2 |              0.51575 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.054  | >20%                    |                10 |              0.1054  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0552 | >20%                    |                 5 |              0.21104 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0719 | >20%                    |                10 |              0.10719 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0724 | >20%                    |                10 |              0.10724 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0779 | >20%                    |                 5 |              0.21558 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1162 | 5-10%                   |                10 |              0.11162 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1548 | 5-10%                   |                 2 |              0.5774  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1639 |                         |                 2 |              0.58195 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1794 | >20%                    |                10 |              0.11794 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1808 |                         |                 2 |              0.5904  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2061 | >20%                    |                10 |              0.12061 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2072 | >20%                    |                10 |              0.12072 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2822 | 5-10%                   |                 2 |              0.6411  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3016 | 10-15%                  |                10 |              0.13016 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3345 | 10-15%                  |                 2 |              0.66725 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3388 | >20%                    |                10 |              0.13388 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3514 | >20%                    |                 2 |              0.6757  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3718 | 15-20%                  |                10 |              0.13718 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3876 |                         |                 5 |              0.27752 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3989 | >20%                    |                10 |              0.13989 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.4612 |                         |                 5 |              0.29224 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5317 | >20%                    |                 2 |              0.76585 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.557  | 5-10%                   |                 5 |              0.3114  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5575 |                         |                10 |              0.15575 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5733 | >20%                    |                 5 |              0.31466 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6234 | >20%                    |                10 |              0.16234 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7228 | 15-20%                  |                10 |              0.17228 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7567 | >20%                    |                 5 |              0.35134 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8416 | >20%                    |                10 |              0.18416 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9043 |                         |                10 |              0.19043 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0956 | 15-20%                  |                 5 |              0.41912 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2002 | >20%                    |                 5 |              0.44004 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2094 | 5-10%                   |                 2 |              1.1047  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2363 | 5-10%                   |                10 |              0.22363 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.5172 | >20%                    |                10 |              0.25172 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6213 | >20%                    |                10 |              0.26213 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1271 | >20%                    |                10 |              0.31271 |