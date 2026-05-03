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

Data correct as of 2026-05-03 03:40:25.920338, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | >20%                    |                 2 |              0.07305 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1495 | 15-20%                  |                 2 |              0.07475 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1655 | >20%                    |                 2 |              0.08275 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | >20%                    |                 2 |              0.1167  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | >20%                    |                 2 |              0.11735 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.236  | 15-20%                  |                 5 |              0.0472  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2463 | 15-20%                  |                 2 |              0.12315 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2817 | >20%                    |                 2 |              0.14085 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2872 | 15-20%                  |                 5 |              0.05744 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2877 | 15-20%                  |                 5 |              0.05754 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | >20%                    |                 2 |              0.1464  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2946 | >20%                    |                 5 |              0.05892 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2949 | >20%                    |                 2 |              0.14745 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | 15-20%                  |                 2 |              0.1481  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2967 | 10-15%                  |                 2 |              0.14835 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3028 | >20%                    |                 2 |              0.1514  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3147 | >20%                    |                 5 |              0.06294 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3184 | >20%                    |                 5 |              0.06368 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3195 | 10-15%                  |                 2 |              0.15975 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.327  | 10-15%                  |                 2 |              0.1635  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.328  | >20%                    |                 5 |              0.0656  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | <5%                     |                 2 |              0.17015 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3464 | 10-15%                  |                 2 |              0.1732  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3479 | >20%                    |                 5 |              0.06958 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3489 | >20%                    |                10 |              0.03489 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3531 | 5-10%                   |                10 |              0.03531 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | >20%                    |                 2 |              0.1804  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3678 | >20%                    |                 5 |              0.07356 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3678 | >20%                    |                 5 |              0.07356 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3718 | >20%                    |                 2 |              0.1859  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3748 | >20%                    |                 2 |              0.1874  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3764 | >20%                    |                 5 |              0.07528 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3784 | >20%                    |                 2 |              0.1892  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3817 | >20%                    |                 5 |              0.07634 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3827 | 5-10%                   |                10 |              0.03827 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3913 | >20%                    |                 2 |              0.19565 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3974 | >20%                    |                 5 |              0.07948 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4014 | >20%                    |                 5 |              0.08028 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4037 | >20%                    |                 5 |              0.08074 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | >20%                    |                 2 |              0.20755 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4172 | >20%                    |                10 |              0.04172 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.426  | >20%                    |                 5 |              0.0852  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4268 | >20%                    |                 5 |              0.08536 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4303 | >20%                    |                 5 |              0.08606 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4326 | <5%                     |                 2 |              0.2163  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4359 | >20%                    |                 2 |              0.21795 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4365 | 5-10%                   |                 2 |              0.21825 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4465 | >20%                    |                 5 |              0.0893  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4577 | >20%                    |                 2 |              0.22885 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4597 | <5%                     |                 2 |              0.22985 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4616 | >20%                    |                 2 |              0.2308  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4621 | >20%                    |                 5 |              0.09242 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4643 | 15-20%                  |                 2 |              0.23215 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4657 | >20%                    |                10 |              0.04657 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4667 | >20%                    |                10 |              0.04667 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | 15-20%                  |                 2 |              0.23665 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4793 | <5%                     |                 5 |              0.09586 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4795 | >20%                    |                 5 |              0.0959  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4808 | >20%                    |                 5 |              0.09616 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4824 | 10-15%                  |                 2 |              0.2412  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4901 | >20%                    |                 5 |              0.09802 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4943 | >20%                    |                 5 |              0.09886 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5181 | >20%                    |                 2 |              0.25905 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5227 | >20%                    |                 2 |              0.26135 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5238 | 15-20%                  |                 5 |              0.10476 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5291 | 5-10%                   |                 5 |              0.10582 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5291 | >20%                    |                10 |              0.05291 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5501 | 10-15%                  |                 5 |              0.11002 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5645 | 5-10%                   |                 5 |              0.1129  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5715 | >20%                    |                 5 |              0.1143  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5781 | >20%                    |                 2 |              0.28905 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.584  | >20%                    |                 2 |              0.292   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5942 | 15-20%                  |                 2 |              0.2971  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6166 | >20%                    |                 2 |              0.3083  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6192 | >20%                    |                 2 |              0.3096  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6303 | 5-10%                   |                 2 |              0.31515 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6348 | >20%                    |                10 |              0.06348 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6459 | >20%                    |                10 |              0.06459 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6528 | 5-10%                   |                10 |              0.06528 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6543 | >20%                    |                10 |              0.06543 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6641 | >20%                    |                10 |              0.06641 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6675 | >20%                    |                10 |              0.06675 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6687 | >20%                    |                 2 |              0.33435 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6695 | >20%                    |                 5 |              0.1339  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6727 | >20%                    |                10 |              0.06727 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6756 | >20%                    |                 5 |              0.13512 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6759 | 10-15%                  |                 2 |              0.33795 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6899 | >20%                    |                 5 |              0.13798 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6918 | >20%                    |                 5 |              0.13836 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6991 | >20%                    |                10 |              0.06991 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7013 | >20%                    |                 5 |              0.14026 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7025 | >20%                    |                 2 |              0.35125 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7045 | >20%                    |                 5 |              0.1409  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7065 | 15-20%                  |                10 |              0.07065 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7165 | >20%                    |                 2 |              0.35825 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7179 | >20%                    |                 5 |              0.14358 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7251 | >20%                    |                 5 |              0.14502 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7353 | 15-20%                  |                10 |              0.07353 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7425 | >20%                    |                 5 |              0.1485  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7514 | 15-20%                  |                10 |              0.07514 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7543 | >20%                    |                10 |              0.07543 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7603 | >20%                    |                 5 |              0.15206 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7638 | >20%                    |                10 |              0.07638 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7676 | 5-10%                   |                10 |              0.07676 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8101 | >20%                    |                10 |              0.08101 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8268 | >20%                    |                 5 |              0.16536 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.828  | >20%                    |                 5 |              0.1656  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8298 | >20%                    |                10 |              0.08298 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8523 | 5-10%                   |                10 |              0.08523 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8698 | >20%                    |                 5 |              0.17396 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8857 | >20%                    |                10 |              0.08857 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8871 | >20%                    |                 5 |              0.17742 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8915 |                         |                 2 |              0.44575 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8926 | >20%                    |                10 |              0.08926 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9041 | >20%                    |                10 |              0.09041 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9171 | >20%                    |                 5 |              0.18342 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9224 | 10-15%                  |                10 |              0.09224 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9251 | >20%                    |                10 |              0.09251 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9288 | >20%                    |                 2 |              0.4644  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9416 | >20%                    |                10 |              0.09416 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9441 | 15-20%                  |                10 |              0.09441 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9611 | 15-20%                  |                10 |              0.09611 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9787 | >20%                    |                10 |              0.09787 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0002 | >20%                    |                10 |              0.10002 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0311 | 15-20%                  |                10 |              0.10311 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0657 | >20%                    |                10 |              0.10657 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0791 |                         |                 2 |              0.53955 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1484 | >20%                    |                10 |              0.11484 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1487 | >20%                    |                10 |              0.11487 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1788 | >20%                    |                 2 |              0.5894  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1859 | 10-15%                  |                10 |              0.11859 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2299 | >20%                    |                10 |              0.12299 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2473 |                         |                 5 |              0.24946 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2543 | 5-10%                   |                 2 |              0.62715 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2716 | 5-10%                   |                 2 |              0.6358  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3002 | >20%                    |                 5 |              0.26004 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3086 | >20%                    |                 5 |              0.26172 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3311 | >20%                    |                10 |              0.13311 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3626 | >20%                    |                 5 |              0.27252 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3801 |                         |                 5 |              0.27602 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4305 | 15-20%                  |                10 |              0.14305 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4416 | >20%                    |                 5 |              0.28832 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4534 | 15-20%                  |                 5 |              0.29068 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5092 | >20%                    |                10 |              0.15092 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5156 | 15-20%                  |                10 |              0.15156 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5261 | 10-15%                  |                 2 |              0.76305 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5726 | >20%                    |                10 |              0.15726 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.5977 | >20%                    |                10 |              0.15977 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6928 |                         |                10 |              0.16928 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.0882 |                         |                10 |              0.20882 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1725 | >20%                    |                10 |              0.21725 |