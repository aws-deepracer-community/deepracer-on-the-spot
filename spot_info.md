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

Data correct as of 2026-06-09 03:56:27.262874, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1118 | >20%                    |                 2 |              0.0559  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1632 | >20%                    |                 2 |              0.0816  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1722 | 15-20%                  |                 2 |              0.0861  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1819 | >20%                    |                 2 |              0.09095 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2162 | 15-20%                  |                 2 |              0.1081  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.221  | 15-20%                  |                 5 |              0.0442  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2223 | >20%                    |                 2 |              0.11115 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2223 | 10-15%                  |                 2 |              0.11115 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | >20%                    |                 2 |              0.11505 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2315 | >20%                    |                 2 |              0.11575 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2407 | >20%                    |                 2 |              0.12035 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2533 | >20%                    |                 2 |              0.12665 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2536 | >20%                    |                 2 |              0.1268  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.259  | >20%                    |                 5 |              0.0518  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2793 | 15-20%                  |                 5 |              0.05586 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | >20%                    |                 2 |              0.14085 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2835 | >20%                    |                 5 |              0.0567  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2861 | >20%                    |                10 |              0.02861 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | 15-20%                  |                 2 |              0.14585 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2991 | 5-10%                   |                10 |              0.02991 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3076 | 10-15%                  |                 2 |              0.1538  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | >20%                    |                 2 |              0.15395 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3127 | >20%                    |                 5 |              0.06254 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3161 | 15-20%                  |                 5 |              0.06322 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.32   | >20%                    |                10 |              0.032   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3236 | >20%                    |                 2 |              0.1618  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3352 | <5%                     |                 2 |              0.1676  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3386 | 10-15%                  |                 2 |              0.1693  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3423 | >20%                    |                 5 |              0.06846 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3438 | >20%                    |                 2 |              0.1719  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3477 | >20%                    |                 2 |              0.17385 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3641 | 5-10%                   |                10 |              0.03641 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3706 | >20%                    |                 5 |              0.07412 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3716 | >20%                    |                 5 |              0.07432 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3721 | <5%                     |                10 |              0.03721 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3794 | >20%                    |                 5 |              0.07588 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3807 | >20%                    |                 2 |              0.19035 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.381  | >20%                    |                 5 |              0.0762  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3837 | >20%                    |                 5 |              0.07674 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.385  | >20%                    |                10 |              0.0385  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3887 | >20%                    |                 5 |              0.07774 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3917 | >20%                    |                 5 |              0.07834 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | >20%                    |                 5 |              0.07878 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4117 | >20%                    |                 5 |              0.08234 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4131 | 15-20%                  |                 2 |              0.20655 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4171 | >20%                    |                 2 |              0.20855 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4178 | >20%                    |                 2 |              0.2089  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.428  | <5%                     |                 2 |              0.214   |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4302 |                         |                 2 |              0.2151  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4327 | >20%                    |                 5 |              0.08654 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4408 | >20%                    |                10 |              0.04408 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | 10-15%                  |                 2 |              0.22225 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4493 | >20%                    |                 5 |              0.08986 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4513 | >20%                    |                 2 |              0.22565 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4639 | >20%                    |                 2 |              0.23195 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4641 | 5-10%                   |                 2 |              0.23205 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4684 | <5%                     |                 2 |              0.2342  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4754 | 15-20%                  |                 5 |              0.09508 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4871 | 5-10%                   |                 2 |              0.24355 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4918 | >20%                    |                 5 |              0.09836 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4981 | >20%                    |                 5 |              0.09962 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4985 | >20%                    |                 5 |              0.0997  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5014 | >20%                    |                10 |              0.05014 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5034 | >20%                    |                 5 |              0.10068 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5093 | 10-15%                  |                10 |              0.05093 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.512  | 15-20%                  |                 2 |              0.256   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5192 | 10-15%                  |                 2 |              0.2596  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5193 | >20%                    |                 2 |              0.25965 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | 5-10%                   |                 5 |              0.10388 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5198 | >20%                    |                 5 |              0.10396 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5268 | >20%                    |                 2 |              0.2634  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.531  | >20%                    |                10 |              0.0531  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5405 | >20%                    |                10 |              0.05405 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5426 | 10-15%                  |                 5 |              0.10852 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5486 | >20%                    |                 2 |              0.2743  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.55   | >20%                    |                 5 |              0.11    |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5622 | <5%                     |                 5 |              0.11244 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5735 | >20%                    |                 2 |              0.28675 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5832 | 15-20%                  |                 2 |              0.2916  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5837 | >20%                    |                 2 |              0.29185 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.622  | >20%                    |                 5 |              0.1244  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6253 | >20%                    |                 5 |              0.12506 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6254 | >20%                    |                 5 |              0.12508 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6305 | >20%                    |                 5 |              0.1261  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6352 | 15-20%                  |                10 |              0.06352 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6391 | >20%                    |                 5 |              0.12782 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6514 | 15-20%                  |                10 |              0.06514 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6617 | >20%                    |                 5 |              0.13234 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6621 |                         |                 5 |              0.13242 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6635 | >20%                    |                10 |              0.06635 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6675 | 5-10%                   |                10 |              0.06675 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6776 | 15-20%                  |                10 |              0.06776 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6843 | >20%                    |                10 |              0.06843 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6863 | >20%                    |                 5 |              0.13726 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6868 | >20%                    |                 5 |              0.13736 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6886 | >20%                    |                 2 |              0.3443  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6909 | >20%                    |                10 |              0.06909 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6953 | 5-10%                   |                10 |              0.06953 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.698  | >20%                    |                 2 |              0.349   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7072 | >20%                    |                 5 |              0.14144 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7304 | 15-20%                  |                10 |              0.07304 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7392 | >20%                    |                 2 |              0.3696  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7414 | >20%                    |                10 |              0.07414 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7442 |                         |                10 |              0.07442 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7476 | >20%                    |                10 |              0.07476 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7664 | >20%                    |                 5 |              0.15328 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.776  | >20%                    |                 2 |              0.388   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7825 | >20%                    |                10 |              0.07825 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7847 | >20%                    |                10 |              0.07847 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7924 | >20%                    |                10 |              0.07924 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8017 | >20%                    |                 5 |              0.16034 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8135 | >20%                    |                10 |              0.08135 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8161 | >20%                    |                 5 |              0.16322 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.82   | >20%                    |                10 |              0.082   |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8314 | >20%                    |                10 |              0.08314 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8392 | 10-15%                  |                 2 |              0.4196  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8394 | >20%                    |                 5 |              0.16788 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8396 | 5-10%                   |                 5 |              0.16792 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8488 |                         |                 2 |              0.4244  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8557 | 15-20%                  |                10 |              0.08557 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8585 | >20%                    |                 5 |              0.1717  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8598 | >20%                    |                10 |              0.08598 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8946 | >20%                    |                10 |              0.08946 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9135 | >20%                    |                 5 |              0.1827  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9256 | 5-10%                   |                 2 |              0.4628  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9437 | >20%                    |                10 |              0.09437 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9596 | >20%                    |                10 |              0.09596 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9625 | >20%                    |                10 |              0.09625 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9729 | >20%                    |                10 |              0.09729 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0024 | >20%                    |                 5 |              0.20048 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0183 | >20%                    |                10 |              0.10183 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0342 | >20%                    |                 5 |              0.20684 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0442 | 10-15%                  |                 2 |              0.5221  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0446 |                         |                 5 |              0.20892 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0451 | >20%                    |                10 |              0.10451 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0478 | >20%                    |                 2 |              0.5239  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0593 | >20%                    |                10 |              0.10593 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0881 | >20%                    |                 5 |              0.21762 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0927 | 5-10%                   |                10 |              0.10927 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0999 | >20%                    |                10 |              0.10999 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1281 | 5-10%                   |                 2 |              0.56405 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1396 | 15-20%                  |                10 |              0.11396 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.167  | 15-20%                  |                10 |              0.1167  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1998 | >20%                    |                10 |              0.11998 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3014 | >20%                    |                10 |              0.13014 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3123 | >20%                    |                10 |              0.13123 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3685 | >20%                    |                 5 |              0.2737  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3884 | 15-20%                  |                 5 |              0.27768 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4143 | 10-15%                  |                10 |              0.14143 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5058 | 15-20%                  |                10 |              0.15058 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6076 | >20%                    |                 5 |              0.32152 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7412 |                         |                10 |              0.17412 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2331 | >20%                    |                10 |              0.22331 |