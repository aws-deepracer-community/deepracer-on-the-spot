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

Data correct as of 2026-06-21 04:47:03.882680, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1749 | >20%                    |                 2 |              0.08745 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1892 | >20%                    |                 2 |              0.0946  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.192  | 15-20%                  |                 2 |              0.096   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1967 | >20%                    |                 2 |              0.09835 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.214  | 15-20%                  |                 5 |              0.0428  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2288 | >20%                    |                 2 |              0.1144  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2438 | >20%                    |                 5 |              0.04876 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | >20%                    |                 2 |              0.12295 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2561 | >20%                    |                 2 |              0.12805 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2561 | >20%                    |                 2 |              0.12805 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2627 | 10-15%                  |                 2 |              0.13135 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2634 | >20%                    |                 2 |              0.1317  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2711 | >20%                    |                 2 |              0.13555 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | 15-20%                  |                 2 |              0.13645 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2768 | 15-20%                  |                 2 |              0.1384  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2961 | 15-20%                  |                 5 |              0.05922 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | >20%                    |                 2 |              0.154   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.308  | 10-15%                  |                 2 |              0.154   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3086 | >20%                    |                 5 |              0.06172 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3228 | >20%                    |                 5 |              0.06456 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3232 | 15-20%                  |                 5 |              0.06464 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3321 | 5-10%                   |                10 |              0.03321 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3411 | >20%                    |                 2 |              0.17055 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3491 | >20%                    |                10 |              0.03491 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3513 | <5%                     |                 2 |              0.17565 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3605 | >20%                    |                 5 |              0.0721  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.367  | >20%                    |                 2 |              0.1835  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.374  | 5-10%                   |                10 |              0.0374  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | >20%                    |                 5 |              0.075   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3815 | >20%                    |                 2 |              0.19075 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3841 | 10-15%                  |                 2 |              0.19205 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3841 | 5-10%                   |                10 |              0.03841 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.397  | >20%                    |                 2 |              0.1985  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.398  | >20%                    |                 5 |              0.0796  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4002 | >20%                    |                10 |              0.04002 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4008 | >20%                    |                 2 |              0.2004  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4114 | >20%                    |                10 |              0.04114 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4128 | >20%                    |                10 |              0.04128 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | >20%                    |                 5 |              0.08354 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | >20%                    |                 5 |              0.08512 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4296 | >20%                    |                 5 |              0.08592 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4371 | <5%                     |                 2 |              0.21855 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4372 | <5%                     |                 2 |              0.2186  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4376 | >20%                    |                 2 |              0.2188  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4392 | >20%                    |                 5 |              0.08784 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4504 | >20%                    |                 2 |              0.2252  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4531 | >20%                    |                10 |              0.04531 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4541 | >20%                    |                 5 |              0.09082 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4585 | 10-15%                  |                 2 |              0.22925 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4643 | >20%                    |                 5 |              0.09286 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4665 | 15-20%                  |                 5 |              0.0933  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4756 | >20%                    |                 5 |              0.09512 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4791 | 15-20%                  |                 2 |              0.23955 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4871 | 10-15%                  |                10 |              0.04871 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4919 | >20%                    |                 2 |              0.24595 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5254 | 15-20%                  |                 2 |              0.2627  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5257 | 5-10%                   |                 5 |              0.10514 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5274 | 15-20%                  |                 2 |              0.2637  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5277 | >20%                    |                 2 |              0.26385 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5323 | 5-10%                   |                 2 |              0.26615 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.541  | 5-10%                   |                 2 |              0.2705  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5522 | >20%                    |                 5 |              0.11044 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5539 | >20%                    |                 5 |              0.11078 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5546 | >20%                    |                 5 |              0.11092 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5573 | >20%                    |                 2 |              0.27865 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5575 | 10-15%                  |                 5 |              0.1115  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5635 | >20%                    |                 5 |              0.1127  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.565  | 10-15%                  |                 2 |              0.2825  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5727 | >20%                    |                 5 |              0.11454 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5741 | >20%                    |                 5 |              0.11482 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5752 | >20%                    |                 5 |              0.11504 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5794 |                         |                 2 |              0.2897  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5888 | >20%                    |                 2 |              0.2944  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5925 | >20%                    |                10 |              0.05925 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5942 | >20%                    |                 2 |              0.2971  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5971 | <5%                     |                 5 |              0.11942 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5992 | >20%                    |                 2 |              0.2996  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.606  | >20%                    |                10 |              0.0606  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6089 | >20%                    |                 5 |              0.12178 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6092 | >20%                    |                10 |              0.06092 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6144 | >20%                    |                 5 |              0.12288 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6287 | >20%                    |                 5 |              0.12574 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6324 | >20%                    |                10 |              0.06324 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6342 | >20%                    |                10 |              0.06342 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6348 | >20%                    |                 2 |              0.3174  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6896 | 15-20%                  |                10 |              0.06896 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6925 | >20%                    |                 5 |              0.1385  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6942 | >20%                    |                 5 |              0.13884 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6983 | <5%                     |                10 |              0.06983 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7043 | >20%                    |                 2 |              0.35215 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7085 | >20%                    |                 5 |              0.1417  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | 15-20%                  |                10 |              0.07112 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7141 | >20%                    |                10 |              0.07141 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7173 | >20%                    |                10 |              0.07173 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7179 | >20%                    |                 2 |              0.35895 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7211 | >20%                    |                 5 |              0.14422 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7233 | 5-10%                   |                10 |              0.07233 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7358 | 5-10%                   |                10 |              0.07358 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7359 | >20%                    |                10 |              0.07359 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7487 | >20%                    |                 2 |              0.37435 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7571 |                         |                 2 |              0.37855 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7638 | 5-10%                   |                 5 |              0.15276 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7661 | >20%                    |                 5 |              0.15322 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7739 | >20%                    |                 5 |              0.15478 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7773 | >20%                    |                10 |              0.07773 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7964 |                         |                 5 |              0.15928 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8091 | >20%                    |                 5 |              0.16182 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8199 | >20%                    |                 5 |              0.16398 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8279 | >20%                    |                10 |              0.08279 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8409 | 15-20%                  |                10 |              0.08409 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | 15-20%                  |                10 |              0.08752 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8798 | >20%                    |                10 |              0.08798 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9027 | 15-20%                  |                10 |              0.09027 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9291 | 5-10%                   |                 2 |              0.46455 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9353 | >20%                    |                 5 |              0.18706 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9412 | >20%                    |                10 |              0.09412 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.942  | >20%                    |                10 |              0.0942  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9445 | >20%                    |                10 |              0.09445 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9488 | >20%                    |                10 |              0.09488 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.951  |                         |                10 |              0.0951  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9752 | >20%                    |                10 |              0.09752 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9786 | >20%                    |                 5 |              0.19572 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9815 | >20%                    |                10 |              0.09815 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9837 | 5-10%                   |                10 |              0.09837 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9848 | 10-15%                  |                 2 |              0.4924  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9865 | >20%                    |                10 |              0.09865 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9942 | >20%                    |                 2 |              0.4971  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.036  | >20%                    |                 5 |              0.2072  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0384 | >20%                    |                10 |              0.10384 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0403 | 15-20%                  |                10 |              0.10403 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0489 | >20%                    |                 5 |              0.20978 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0594 | >20%                    |                 5 |              0.21188 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0965 | >20%                    |                10 |              0.10965 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1003 | >20%                    |                 5 |              0.22006 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1007 |                         |                 5 |              0.22014 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.1482 | 10-15%                  |                 2 |              0.5741  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1501 | >20%                    |                10 |              0.11501 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1773 | >20%                    |                10 |              0.11773 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1923 | >20%                    |                10 |              0.11923 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2084 | >20%                    |                10 |              0.12084 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.393  | >20%                    |                 5 |              0.2786  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4187 | 15-20%                  |                 5 |              0.28374 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4318 | >20%                    |                 5 |              0.28636 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4373 | 10-15%                  |                10 |              0.14373 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4412 | 15-20%                  |                10 |              0.14412 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.4421 | 5-10%                   |                 2 |              0.72105 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.539  |                         |                10 |              0.1539  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6347 | >20%                    |                10 |              0.16347 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6781 | 15-20%                  |                10 |              0.16781 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.938  | >20%                    |                10 |              0.1938  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4675 | >20%                    |                10 |              0.24675 |