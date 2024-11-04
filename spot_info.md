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

Data correct as of 2024-11-04 01:40:11.477290, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.131  | 10-15%                  |                 2 |              0.0655  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1981 | 10-15%                  |                 2 |              0.09905 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.214  | 15-20%                  |                 5 |              0.0428  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2149 | 10-15%                  |                 2 |              0.10745 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | 15-20%                  |                 2 |              0.1108  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2238 | <5%                     |                 2 |              0.1119  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2258 | >20%                    |                 2 |              0.1129  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | 10-15%                  |                 2 |              0.11425 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2331 | >20%                    |                 5 |              0.04662 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2431 | 10-15%                  |                 2 |              0.12155 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2441 | >20%                    |                 2 |              0.12205 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | <5%                     |                 2 |              0.12355 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | 5-10%                   |                 2 |              0.1245  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2643 | 5-10%                   |                 2 |              0.13215 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2669 | >20%                    |                 2 |              0.13345 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2707 | <5%                     |                 2 |              0.13535 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2763 | <5%                     |                 2 |              0.13815 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2765 | 5-10%                   |                 5 |              0.0553  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2778 | <5%                     |                 2 |              0.1389  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | 10-15%                  |                 2 |              0.14    |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2857 | <5%                     |                 2 |              0.14285 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | 10-15%                  |                 2 |              0.1517  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.304  | <5%                     |                 5 |              0.0608  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3046 | <5%                     |                 2 |              0.1523  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3091 | >20%                    |                 5 |              0.06182 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3189 | 5-10%                   |                 5 |              0.06378 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3322 | 5-10%                   |                 2 |              0.1661  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3353 | 15-20%                  |                 2 |              0.16765 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3547 | <5%                     |                 2 |              0.17735 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3548 | <5%                     |                 5 |              0.07096 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3589 | >20%                    |                 2 |              0.17945 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3596 | >20%                    |                 5 |              0.07192 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3616 | 15-20%                  |                 5 |              0.07232 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3657 | 10-15%                  |                 5 |              0.07314 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3692 | 5-10%                   |                 5 |              0.07384 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3732 | >20%                    |                 2 |              0.1866  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3767 | 5-10%                   |                 2 |              0.18835 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3796 | 5-10%                   |                 5 |              0.07592 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3803 | >20%                    |                 2 |              0.19015 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3953 | 5-10%                   |                 5 |              0.07906 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4036 | >20%                    |                 2 |              0.2018  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | <5%                     |                 5 |              0.08248 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4142 | <5%                     |                 5 |              0.08284 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4146 | >20%                    |                 5 |              0.08292 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4155 | 5-10%                   |                 2 |              0.20775 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4155 | 10-15%                  |                 2 |              0.20775 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4175 | 15-20%                  |                 5 |              0.0835  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4239 | 15-20%                  |                 2 |              0.21195 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4382 | 15-20%                  |                 5 |              0.08764 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4385 | 10-15%                  |                 2 |              0.21925 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4403 | <5%                     |                10 |              0.04403 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4552 | 5-10%                   |                 5 |              0.09104 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.458  | <5%                     |                10 |              0.0458  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4586 | 5-10%                   |                 5 |              0.09172 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | 15-20%                  |                 2 |              0.2303  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | 15-20%                  |                 2 |              0.2364  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4732 | 10-15%                  |                10 |              0.04732 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | 10-15%                  |                 5 |              0.09574 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4797 | >20%                    |                 5 |              0.09594 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.481  | <5%                     |                 2 |              0.2405  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4816 | 10-15%                  |                 2 |              0.2408  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4856 | 5-10%                   |                 5 |              0.09712 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4875 | <5%                     |                 5 |              0.0975  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4994 | >20%                    |                 5 |              0.09988 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5154 | <5%                     |                10 |              0.05154 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5161 | 5-10%                   |                 2 |              0.25805 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5174 | 15-20%                  |                 2 |              0.2587  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5202 | 10-15%                  |                10 |              0.05202 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5303 | 5-10%                   |                 5 |              0.10606 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.533  | <5%                     |                 5 |              0.1066  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5348 | <5%                     |                 5 |              0.10696 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5392 | <5%                     |                10 |              0.05392 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5397 | 10-15%                  |                 5 |              0.10794 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5465 | 5-10%                   |                 5 |              0.1093  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5547 | 10-15%                  |                 5 |              0.11094 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5553 | >20%                    |                 5 |              0.11106 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5568 | 15-20%                  |                 2 |              0.2784  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5596 | 15-20%                  |                 2 |              0.2798  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5611 | 10-15%                  |                10 |              0.05611 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5655 | >20%                    |                 5 |              0.1131  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5737 | 5-10%                   |                 5 |              0.11474 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5791 | 10-15%                  |                 5 |              0.11582 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5807 | >20%                    |                 2 |              0.29035 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5863 | 5-10%                   |                10 |              0.05863 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5891 | 5-10%                   |                10 |              0.05891 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5899 | 10-15%                  |                 5 |              0.11798 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.618  | >20%                    |                10 |              0.0618  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6182 | >20%                    |                10 |              0.06182 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6328 | 5-10%                   |                 5 |              0.12656 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6405 | 5-10%                   |                10 |              0.06405 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6523 | >20%                    |                 5 |              0.13046 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6567 | 10-15%                  |                10 |              0.06567 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6625 | 5-10%                   |                10 |              0.06625 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6645 | <5%                     |                10 |              0.06645 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.67   | >20%                    |                 2 |              0.335   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6735 | 10-15%                  |                 5 |              0.1347  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6879 | 5-10%                   |                10 |              0.06879 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.693  | 15-20%                  |                 5 |              0.1386  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6944 | >20%                    |                10 |              0.06944 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6973 | >20%                    |                10 |              0.06973 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7036 | 10-15%                  |                10 |              0.07036 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.7147 | >20%                    |                 2 |              0.35735 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7347 | >20%                    |                 5 |              0.14694 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7569 | >20%                    |                10 |              0.07569 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7766 | 15-20%                  |                10 |              0.07766 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7832 | 5-10%                   |                 5 |              0.15664 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7887 | <5%                     |                10 |              0.07887 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | >20%                    |                10 |              0.07977 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8297 | >20%                    |                10 |              0.08297 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8347 | 5-10%                   |                10 |              0.08347 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8425 | >20%                    |                10 |              0.08425 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8485 | 10-15%                  |                 2 |              0.42425 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8501 | 5-10%                   |                10 |              0.08501 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8516 | 5-10%                   |                10 |              0.08516 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8532 | 5-10%                   |                 5 |              0.17064 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8678 | <5%                     |                 2 |              0.4339  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8709 | >20%                    |                 5 |              0.17418 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8754 | >20%                    |                10 |              0.08754 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.897  | 15-20%                  |                10 |              0.0897  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.925  | <5%                     |                10 |              0.0925  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9758 | 10-15%                  |                 5 |              0.19516 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9862 | 10-15%                  |                10 |              0.09862 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0087 | 10-15%                  |                10 |              0.10087 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0147 | <5%                     |                10 |              0.10147 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0526 | >20%                    |                10 |              0.10526 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.062  | >20%                    |                10 |              0.1062  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0762 | 5-10%                   |                10 |              0.10762 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1109 | >20%                    |                10 |              0.11109 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1736 | 15-20%                  |                10 |              0.11736 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1809 | <5%                     |                10 |              0.11809 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4491 | >20%                    |                10 |              0.14491 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4496 | 15-20%                  |                10 |              0.14496 |