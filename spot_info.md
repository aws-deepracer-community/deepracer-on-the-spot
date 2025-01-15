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

Data correct as of 2025-01-15 01:35:42.712818, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1937 | <5%                     |                 2 |              0.09685 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2136 | 10-15%                  |                 2 |              0.1068  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2267 | 15-20%                  |                 2 |              0.11335 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2287 | 5-10%                   |                 2 |              0.11435 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | <5%                     |                 2 |              0.1183  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | 5-10%                   |                 2 |              0.11895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | 5-10%                   |                 2 |              0.1252  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2573 | >20%                    |                 5 |              0.05146 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | 5-10%                   |                 2 |              0.13085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | <5%                     |                 2 |              0.14    |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | 10-15%                  |                 2 |              0.1426  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2974 | <5%                     |                 2 |              0.1487  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3076 | 5-10%                   |                 2 |              0.1538  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3079 | >20%                    |                 2 |              0.15395 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3114 | 10-15%                  |                 2 |              0.1557  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3127 | 5-10%                   |                 2 |              0.15635 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | >20%                    |                 2 |              0.15855 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3188 | <5%                     |                 5 |              0.06376 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3393 | 5-10%                   |                 5 |              0.06786 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.34   | <5%                     |                 2 |              0.17    |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3642 | <5%                     |                 2 |              0.1821  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3657 | >20%                    |                 2 |              0.18285 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3662 | <5%                     |                 5 |              0.07324 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3665 | <5%                     |                 2 |              0.18325 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.375  | 10-15%                  |                10 |              0.0375  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3761 | <5%                     |                 2 |              0.18805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | 5-10%                   |                 5 |              0.07598 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3843 | 10-15%                  |                 5 |              0.07686 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | >20%                    |                 2 |              0.1962  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.393  | 5-10%                   |                 2 |              0.1965  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3957 | 10-15%                  |                 2 |              0.19785 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3973 | <5%                     |                 2 |              0.19865 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4032 | <5%                     |                 5 |              0.08064 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4093 | <5%                     |                 2 |              0.20465 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4096 | 5-10%                   |                 5 |              0.08192 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4101 | >20%                    |                 2 |              0.20505 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4142 | 5-10%                   |                 2 |              0.2071  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4188 | <5%                     |                 2 |              0.2094  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4282 | >20%                    |                 2 |              0.2141  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4365 | 5-10%                   |                 2 |              0.21825 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4367 | >20%                    |                10 |              0.04367 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4384 | >20%                    |                 5 |              0.08768 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4495 | 10-15%                  |                 5 |              0.0899  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | >20%                    |                 5 |              0.0899  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4573 | <5%                     |                 5 |              0.09146 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | <5%                     |                 5 |              0.09182 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4638 | 15-20%                  |                10 |              0.04638 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | <5%                     |                 5 |              0.09296 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4695 | <5%                     |                 2 |              0.23475 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | 5-10%                   |                 5 |              0.09436 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4744 | <5%                     |                 2 |              0.2372  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4752 | 15-20%                  |                 2 |              0.2376  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4774 | 10-15%                  |                 5 |              0.09548 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 10-15%                  |                 5 |              0.09628 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.484  | 15-20%                  |                 5 |              0.0968  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | <5%                     |                 5 |              0.0982  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4963 | <5%                     |                 5 |              0.09926 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5023 | <5%                     |                 2 |              0.25115 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5045 | >20%                    |                 5 |              0.1009  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5074 | <5%                     |                 2 |              0.2537  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5076 | <5%                     |                 5 |              0.10152 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5087 | 5-10%                   |                 2 |              0.25435 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5194 | <5%                     |                 5 |              0.10388 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5302 | >20%                    |                 2 |              0.2651  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5304 | 5-10%                   |                 5 |              0.10608 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5307 | >20%                    |                 5 |              0.10614 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5367 | >20%                    |                 5 |              0.10734 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5423 | 5-10%                   |                 5 |              0.10846 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.549  | >20%                    |                 5 |              0.1098  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5588 | <5%                     |                 5 |              0.11176 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5619 | <5%                     |                 5 |              0.11238 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5639 | 5-10%                   |                 5 |              0.11278 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5685 | 5-10%                   |                 5 |              0.1137  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5721 | 15-20%                  |                 2 |              0.28605 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5819 | 15-20%                  |                 2 |              0.29095 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5892 | 5-10%                   |                 5 |              0.11784 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5917 | 10-15%                  |                10 |              0.05917 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.608  | <5%                     |                 5 |              0.1216  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6222 | 5-10%                   |                10 |              0.06222 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6235 | >20%                    |                 2 |              0.31175 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6428 | 5-10%                   |                10 |              0.06428 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6614 | 10-15%                  |                10 |              0.06614 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6632 | >20%                    |                10 |              0.06632 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.666  | >20%                    |                10 |              0.0666  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6668 | <5%                     |                 5 |              0.13336 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6694 | >20%                    |                10 |              0.06694 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.683  | >20%                    |                 5 |              0.1366  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7039 | >20%                    |                 5 |              0.14078 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7064 | <5%                     |                10 |              0.07064 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7079 | 10-15%                  |                 5 |              0.14158 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7171 | >20%                    |                10 |              0.07171 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7281 | 10-15%                  |                10 |              0.07281 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7293 | <5%                     |                10 |              0.07293 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7331 | 5-10%                   |                 2 |              0.36655 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.736  | 15-20%                  |                 2 |              0.368   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7424 | <5%                     |                 2 |              0.3712  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7431 | 5-10%                   |                 5 |              0.14862 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7531 | >20%                    |                 5 |              0.15062 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7559 | 15-20%                  |                10 |              0.07559 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7805 | >20%                    |                10 |              0.07805 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8057 | >20%                    |                 5 |              0.16114 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8068 | >20%                    |                 5 |              0.16136 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8085 | 10-15%                  |                10 |              0.08085 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8145 | 5-10%                   |                10 |              0.08145 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8152 | 5-10%                   |                10 |              0.08152 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8165 | 5-10%                   |                 5 |              0.1633  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8179 | 5-10%                   |                10 |              0.08179 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.821  | 15-20%                  |                10 |              0.0821  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8257 | 15-20%                  |                10 |              0.08257 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8478 | >20%                    |                10 |              0.08478 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8582 | <5%                     |                10 |              0.08582 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8728 | 5-10%                   |                10 |              0.08728 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | <5%                     |                10 |              0.08752 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8758 | 10-15%                  |                10 |              0.08758 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8799 | 5-10%                   |                10 |              0.08799 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8973 | <5%                     |                10 |              0.08973 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9038 | <5%                     |                10 |              0.09038 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9269 | <5%                     |                10 |              0.09269 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9624 | 5-10%                   |                 2 |              0.4812  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9656 | 10-15%                  |                10 |              0.09656 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9839 | 5-10%                   |                 5 |              0.19678 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9998 | >20%                    |                10 |              0.09998 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0149 | <5%                     |                10 |              0.10149 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0175 | <5%                     |                10 |              0.10175 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0222 | <5%                     |                10 |              0.10222 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.024  | 10-15%                  |                 5 |              0.2048  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0309 | 5-10%                   |                10 |              0.10309 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0971 | 15-20%                  |                10 |              0.10971 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1018 | 5-10%                   |                 5 |              0.22036 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1035 | 15-20%                  |                 2 |              0.55175 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1853 | 10-15%                  |                10 |              0.11853 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2596 | >20%                    |                10 |              0.12596 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3949 | 10-15%                  |                10 |              0.13949 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4474 | 10-15%                  |                10 |              0.14474 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4692 | 5-10%                   |                10 |              0.14692 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5093 | 5-10%                   |                10 |              0.15093 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5225 | 15-20%                  |                 5 |              0.3045  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0734 | 10-15%                  |                10 |              0.20734 |