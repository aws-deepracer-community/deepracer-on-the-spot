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

Data correct as of 2026-04-19 03:23:14.227688, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1848 | >20%                    |                 2 |              0.0924  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1886 | 15-20%                  |                 2 |              0.0943  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1901 | >20%                    |                 2 |              0.09505 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2298 | >20%                    |                 2 |              0.1149  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2316 | >20%                    |                 2 |              0.1158  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2465 | 15-20%                  |                 5 |              0.0493  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | >20%                    |                 2 |              0.12835 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2616 | 10-15%                  |                 2 |              0.1308  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2636 | >20%                    |                 2 |              0.1318  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2708 | 15-20%                  |                 5 |              0.05416 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | 15-20%                  |                 2 |              0.1413  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3046 | 15-20%                  |                 2 |              0.1523  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | >20%                    |                 2 |              0.1549  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | >20%                    |                 2 |              0.15575 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3139 | 15-20%                  |                 5 |              0.06278 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3194 | >20%                    |                10 |              0.03194 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3215 | 5-10%                   |                10 |              0.03215 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3242 | >20%                    |                 5 |              0.06484 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3265 | 10-15%                  |                 2 |              0.16325 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3289 | >20%                    |                 5 |              0.06578 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3332 | <5%                     |                 2 |              0.1666  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3337 | 10-15%                  |                 2 |              0.16685 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3477 | 5-10%                   |                10 |              0.03477 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3477 | >20%                    |                10 |              0.03477 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.352  | >20%                    |                 5 |              0.0704  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3528 | >20%                    |                 5 |              0.07056 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3541 | 5-10%                   |                10 |              0.03541 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.357  | >20%                    |                 2 |              0.1785  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3588 | <5%                     |                10 |              0.03588 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | >20%                    |                 5 |              0.0739  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3755 | >20%                    |                 2 |              0.18775 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3765 | >20%                    |                 2 |              0.18825 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3777 | >20%                    |                 5 |              0.07554 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.383  | >20%                    |                 2 |              0.1915  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3969 | 10-15%                  |                 2 |              0.19845 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3979 | >20%                    |                 2 |              0.19895 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4014 | >20%                    |                 5 |              0.08028 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | >20%                    |                 5 |              0.0809  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.406  | >20%                    |                 5 |              0.0812  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4091 | <5%                     |                 2 |              0.20455 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4119 | >20%                    |                 5 |              0.08238 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | >20%                    |                 2 |              0.2067  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.414  | >20%                    |                 5 |              0.0828  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4148 | <5%                     |                 2 |              0.2074  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4176 | >20%                    |                 2 |              0.2088  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.419  | >20%                    |                 2 |              0.2095  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.425  | >20%                    |                10 |              0.0425  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4266 | >20%                    |                 5 |              0.08532 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | >20%                    |                 5 |              0.08896 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.445  | >20%                    |                 5 |              0.089   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4478 | 15-20%                  |                 2 |              0.2239  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4517 | >20%                    |                 5 |              0.09034 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4532 | >20%                    |                 2 |              0.2266  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4592 | 15-20%                  |                 2 |              0.2296  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4624 | >20%                    |                 2 |              0.2312  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4641 | 15-20%                  |                 2 |              0.23205 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4643 | >20%                    |                 5 |              0.09286 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4731 | 10-15%                  |                 2 |              0.23655 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | >20%                    |                 5 |              0.09614 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4813 | >20%                    |                 5 |              0.09626 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4843 | >20%                    |                 5 |              0.09686 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4969 | >20%                    |                 5 |              0.09938 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5076 | >20%                    |                 2 |              0.2538  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5097 | >20%                    |                 2 |              0.25485 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5114 | >20%                    |                10 |              0.05114 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5121 | >20%                    |                10 |              0.05121 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5218 | >20%                    |                 5 |              0.10436 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5288 | 5-10%                   |                 2 |              0.2644  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5324 | 5-10%                   |                 5 |              0.10648 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5358 | 5-10%                   |                 2 |              0.2679  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5396 | >20%                    |                 5 |              0.10792 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5417 | 15-20%                  |                 5 |              0.10834 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5421 | >20%                    |                 2 |              0.27105 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5463 | >20%                    |                 2 |              0.27315 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5475 | >20%                    |                10 |              0.05475 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5687 | 10-15%                  |                 5 |              0.11374 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | <5%                     |                 5 |              0.11422 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5786 | 5-10%                   |                 5 |              0.11572 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5975 | >20%                    |                 2 |              0.29875 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6007 | >20%                    |                10 |              0.06007 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.603  | >20%                    |                10 |              0.0603  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6088 | >20%                    |                 5 |              0.12176 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.623  | 10-15%                  |                 2 |              0.3115  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6283 | >20%                    |                 5 |              0.12566 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6326 | >20%                    |                10 |              0.06326 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6402 | >20%                    |                 5 |              0.12804 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6465 | >20%                    |                 5 |              0.1293  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6604 | 5-10%                   |                10 |              0.06604 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6728 | >20%                    |                 5 |              0.13456 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6771 | >20%                    |                 2 |              0.33855 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6784 | >20%                    |                10 |              0.06784 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6953 | >20%                    |                 2 |              0.34765 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.702  | >20%                    |                10 |              0.0702  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7023 | >20%                    |                 5 |              0.14046 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.712  | >20%                    |                 2 |              0.356   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7152 | >20%                    |                10 |              0.07152 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7164 | >20%                    |                 5 |              0.14328 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7409 | >20%                    |                 5 |              0.14818 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.742  | >20%                    |                 5 |              0.1484  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7442 | >20%                    |                10 |              0.07442 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7536 | >20%                    |                10 |              0.07536 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7575 | >20%                    |                10 |              0.07575 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7592 | >20%                    |                10 |              0.07592 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7825 | >20%                    |                10 |              0.07825 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7872 | 5-10%                   |                10 |              0.07872 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7897 | >20%                    |                 5 |              0.15794 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7944 | >20%                    |                 2 |              0.3972  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7947 | 15-20%                  |                10 |              0.07947 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8007 | >20%                    |                 5 |              0.16014 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8054 | >20%                    |                10 |              0.08054 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8127 | 15-20%                  |                10 |              0.08127 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8154 | >20%                    |                10 |              0.08154 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8329 | >20%                    |                10 |              0.08329 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8408 | >20%                    |                 5 |              0.16816 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8588 | 15-20%                  |                10 |              0.08588 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8709 | >20%                    |                 5 |              0.17418 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.878  | 5-10%                   |                 2 |              0.439   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9245 | 15-20%                  |                10 |              0.09245 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9259 | 15-20%                  |                10 |              0.09259 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9301 | >20%                    |                 5 |              0.18602 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9356 | >20%                    |                10 |              0.09356 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9501 | >20%                    |                10 |              0.09501 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9511 | >20%                    |                10 |              0.09511 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9568 | >20%                    |                10 |              0.09568 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9656 | 10-15%                  |                10 |              0.09656 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9738 | >20%                    |                10 |              0.09738 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0051 | >20%                    |                 5 |              0.20102 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0123 | 10-15%                  |                 2 |              0.50615 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.021  | 15-20%                  |                10 |              0.1021  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0387 | >20%                    |                 5 |              0.20774 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.043  | >20%                    |                10 |              0.1043  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0463 | >20%                    |                10 |              0.10463 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.053  | 5-10%                   |                10 |              0.1053  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0963 | 10-15%                  |                10 |              0.10963 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1185 | >20%                    |                10 |              0.11185 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1185 | >20%                    |                 5 |              0.2237  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1704 | >20%                    |                10 |              0.11704 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1872 |                         |                 5 |              0.23744 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2464 | >20%                    |                 2 |              0.6232  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3268 | >20%                    |                 5 |              0.26536 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.3556 |                         |                 2 |              0.6778  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3636 | 15-20%                  |                10 |              0.13636 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3636 | >20%                    |                 5 |              0.27272 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3662 | 15-20%                  |                10 |              0.13662 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4641 | >20%                    |                10 |              0.14641 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.4722 | >20%                    |                10 |              0.14722 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5052 | >20%                    |                10 |              0.15052 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5528 |                         |                10 |              0.15528 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6216 | 15-20%                  |                 5 |              0.32432 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6412 | 5-10%                   |                 2 |              0.8206  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0974 | >20%                    |                10 |              0.30974 |