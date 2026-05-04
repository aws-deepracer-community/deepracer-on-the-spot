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

Data correct as of 2026-05-04 03:38:49.701971, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1426 | >20%                    |                 2 |              0.0713  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1458 | 15-20%                  |                 2 |              0.0729  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1655 | >20%                    |                 2 |              0.08275 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | >20%                    |                 2 |              0.11675 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | >20%                    |                 2 |              0.11735 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.238  | 15-20%                  |                 5 |              0.0476  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2454 | 15-20%                  |                 2 |              0.1227  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2599 | >20%                    |                 2 |              0.12995 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2669 | >20%                    |                 2 |              0.13345 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2733 | 15-20%                  |                 5 |              0.05466 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | >20%                    |                 2 |              0.1437  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2904 | >20%                    |                 5 |              0.05808 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | >20%                    |                 2 |              0.14585 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2944 | 10-15%                  |                 2 |              0.1472  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2946 | 15-20%                  |                 5 |              0.05892 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2961 | 15-20%                  |                 2 |              0.14805 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3042 | >20%                    |                 2 |              0.1521  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3136 | >20%                    |                 5 |              0.06272 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3187 | >20%                    |                 5 |              0.06374 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3215 | 10-15%                  |                 2 |              0.16075 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3283 | 10-15%                  |                 2 |              0.16415 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3332 | >20%                    |                 5 |              0.06664 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3376 | 10-15%                  |                 2 |              0.1688  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3399 | >20%                    |                 5 |              0.06798 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3408 | <5%                     |                 2 |              0.1704  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3471 | 5-10%                   |                10 |              0.03471 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3494 | >20%                    |                10 |              0.03494 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3531 | >20%                    |                 2 |              0.17655 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | >20%                    |                 2 |              0.17895 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3724 | >20%                    |                 2 |              0.1862  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3739 | >20%                    |                 5 |              0.07478 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3762 | 5-10%                   |                10 |              0.03762 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | >20%                    |                 5 |              0.07588 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3857 | >20%                    |                 2 |              0.19285 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3927 | >20%                    |                 2 |              0.19635 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3992 | >20%                    |                 5 |              0.07984 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4016 | >20%                    |                 5 |              0.08032 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4033 | >20%                    |                 5 |              0.08066 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | >20%                    |                 2 |              0.20435 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4196 | >20%                    |                 5 |              0.08392 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4268 | >20%                    |                 5 |              0.08536 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4297 | >20%                    |                 5 |              0.08594 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4324 | <5%                     |                 2 |              0.2162  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.433  | 5-10%                   |                 2 |              0.2165  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4377 | >20%                    |                 2 |              0.21885 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4408 | >20%                    |                10 |              0.04408 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4441 | >20%                    |                 5 |              0.08882 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4499 | >20%                    |                10 |              0.04499 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4567 | 15-20%                  |                 2 |              0.22835 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4577 | >20%                    |                 2 |              0.22885 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4588 | <5%                     |                 5 |              0.09176 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4603 | >20%                    |                10 |              0.04603 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4617 | <5%                     |                 2 |              0.23085 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4621 | >20%                    |                 5 |              0.09242 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4643 | 15-20%                  |                 2 |              0.23215 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4671 | >20%                    |                 2 |              0.23355 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4776 | 10-15%                  |                 2 |              0.2388  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.478  | >20%                    |                 5 |              0.0956  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | >20%                    |                 5 |              0.09722 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4887 | >20%                    |                 5 |              0.09774 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | >20%                    |                 5 |              0.098   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4986 | >20%                    |                10 |              0.04986 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5139 | >20%                    |                 2 |              0.25695 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5152 | >20%                    |                 2 |              0.2576  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5185 | 15-20%                  |                 5 |              0.1037  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5279 | 5-10%                   |                 5 |              0.10558 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5492 | 10-15%                  |                 5 |              0.10984 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5658 | 5-10%                   |                 5 |              0.11316 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5715 | >20%                    |                 5 |              0.1143  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.578  | >20%                    |                 2 |              0.289   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5808 | 15-20%                  |                 2 |              0.2904  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5907 | >20%                    |                 2 |              0.29535 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6038 | >20%                    |                10 |              0.06038 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6093 | >20%                    |                 2 |              0.30465 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6196 | >20%                    |                 2 |              0.3098  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6262 | 5-10%                   |                 2 |              0.3131  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6422 | >20%                    |                10 |              0.06422 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6498 | 5-10%                   |                10 |              0.06498 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6574 | >20%                    |                 5 |              0.13148 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6681 | >20%                    |                10 |              0.06681 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6691 | >20%                    |                10 |              0.06691 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6698 | 15-20%                  |                10 |              0.06698 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6718 | >20%                    |                10 |              0.06718 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6747 | >20%                    |                 5 |              0.13494 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6768 | >20%                    |                 2 |              0.3384  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6776 | >20%                    |                 5 |              0.13552 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6793 | 10-15%                  |                 2 |              0.33965 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6878 | >20%                    |                 2 |              0.3439  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6889 | >20%                    |                 5 |              0.13778 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.689  | >20%                    |                10 |              0.0689  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6954 | >20%                    |                 5 |              0.13908 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7045 | >20%                    |                10 |              0.07045 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.716  | >20%                    |                 2 |              0.358   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7179 | >20%                    |                 5 |              0.14358 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7225 | >20%                    |                 5 |              0.1445  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7245 | >20%                    |                 5 |              0.1449  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7326 | 15-20%                  |                10 |              0.07326 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.738  | >20%                    |                 5 |              0.1476  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7514 | 15-20%                  |                10 |              0.07514 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7541 | 5-10%                   |                10 |              0.07541 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7565 | >20%                    |                 5 |              0.1513  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7576 | >20%                    |                10 |              0.07576 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7817 | >20%                    |                10 |              0.07817 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8135 | >20%                    |                10 |              0.08135 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8332 | 5-10%                   |                10 |              0.08332 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8386 | >20%                    |                 5 |              0.16772 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8393 | >20%                    |                10 |              0.08393 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8452 | >20%                    |                 5 |              0.16904 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8615 | >20%                    |                 5 |              0.1723  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8784 | >20%                    |                10 |              0.08784 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8846 | >20%                    |                 2 |              0.4423  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8878 | >20%                    |                10 |              0.08878 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8915 |                         |                 2 |              0.44575 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.923  | >20%                    |                10 |              0.0923  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9237 | >20%                    |                 5 |              0.18474 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9268 | >20%                    |                10 |              0.09268 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9319 | 10-15%                  |                10 |              0.09319 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9383 | 15-20%                  |                10 |              0.09383 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9387 | >20%                    |                10 |              0.09387 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9463 | >20%                    |                10 |              0.09463 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9474 | 15-20%                  |                10 |              0.09474 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9512 | >20%                    |                 5 |              0.19024 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9549 | >20%                    |                10 |              0.09549 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0298 |                         |                 2 |              0.5149  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0472 | 15-20%                  |                10 |              0.10472 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0612 | >20%                    |                10 |              0.10612 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1271 | >20%                    |                10 |              0.11271 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1288 | >20%                    |                10 |              0.11288 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1478 | >20%                    |                 2 |              0.5739  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1709 | 10-15%                  |                10 |              0.11709 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1831 | >20%                    |                10 |              0.11831 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2392 | 5-10%                   |                 2 |              0.6196  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2511 | 5-10%                   |                 2 |              0.62555 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2535 | >20%                    |                 5 |              0.2507  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2662 |                         |                 5 |              0.25324 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2936 | >20%                    |                 5 |              0.25872 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3347 | >20%                    |                 5 |              0.26694 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.34   | >20%                    |                10 |              0.134   |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3565 |                         |                 5 |              0.2713  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3848 | >20%                    |                 5 |              0.27696 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4426 | 15-20%                  |                 5 |              0.28852 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5051 | 15-20%                  |                10 |              0.15051 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5161 | 15-20%                  |                10 |              0.15161 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5281 | >20%                    |                10 |              0.15281 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5486 | >20%                    |                10 |              0.15486 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.5977 | >20%                    |                10 |              0.15977 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6138 | 10-15%                  |                 2 |              0.8069  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6928 |                         |                10 |              0.16928 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.0405 |                         |                10 |              0.20405 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1501 | >20%                    |                10 |              0.21501 |