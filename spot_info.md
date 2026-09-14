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

Data correct as of 2026-09-14 04:10:57.100245, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1268 | >20%                    |                 2 |              0.0634  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1812 | 15-20%                  |                 2 |              0.0906  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2156 | >20%                    |                 5 |              0.04312 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2235 | >20%                    |                 2 |              0.11175 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2248 | >20%                    |                 2 |              0.1124  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2351 | >20%                    |                 2 |              0.11755 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | >20%                    |                 2 |              0.1275  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | >20%                    |                 2 |              0.1339  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2692 | 15-20%                  |                 5 |              0.05384 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | >20%                    |                 2 |              0.1426  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | 15-20%                  |                 2 |              0.14365 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3049 | >20%                    |                 2 |              0.15245 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3352 |                         |                 5 |              0.06704 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | 10-15%                  |                 2 |              0.17575 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3668 | >20%                    |                 2 |              0.1834  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.367  | 15-20%                  |                 2 |              0.1835  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3703 | >20%                    |                 2 |              0.18515 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | >20%                    |                 5 |              0.0741  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3733 | >20%                    |                 5 |              0.07466 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3805 | 10-15%                  |                 2 |              0.19025 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3809 | >20%                    |                 5 |              0.07618 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3858 | <5%                     |                 2 |              0.1929  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3917 | >20%                    |                 2 |              0.19585 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3949 | >20%                    |                 5 |              0.07898 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4009 | >20%                    |                 5 |              0.08018 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4035 | >20%                    |                 5 |              0.0807  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4137 | >20%                    |                 2 |              0.20685 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4246 | >20%                    |                10 |              0.04246 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.428  | 15-20%                  |                 2 |              0.214   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4291 | >20%                    |                 2 |              0.21455 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4324 | 10-15%                  |                10 |              0.04324 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4342 | >20%                    |                 2 |              0.2171  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4352 | >20%                    |                10 |              0.04352 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4668 | >20%                    |                 2 |              0.2334  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4765 | 10-15%                  |                 2 |              0.23825 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | >20%                    |                 5 |              0.09536 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.486  | >20%                    |                 5 |              0.0972  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4868 | >20%                    |                 5 |              0.09736 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4873 |                         |                 2 |              0.24365 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4965 | 15-20%                  |                 2 |              0.24825 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5037 | <5%                     |                 2 |              0.25185 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5041 | >20%                    |                 5 |              0.10082 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5049 | >20%                    |                 5 |              0.10098 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5055 | >20%                    |                 5 |              0.1011  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5062 | >20%                    |                 2 |              0.2531  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.523  | >20%                    |                 5 |              0.1046  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5259 | >20%                    |                10 |              0.05259 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5324 | 5-10%                   |                10 |              0.05324 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5453 | >20%                    |                 2 |              0.27265 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5483 | >20%                    |                 5 |              0.10966 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5603 | >20%                    |                 5 |              0.11206 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5755 | >20%                    |                 5 |              0.1151  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5787 | >20%                    |                 2 |              0.28935 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5853 | >20%                    |                 5 |              0.11706 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5909 | >20%                    |                 2 |              0.29545 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5954 | 10-15%                  |                 5 |              0.11908 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6158 | 5-10%                   |                10 |              0.06158 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6207 | >20%                    |                 5 |              0.12414 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.623  | >20%                    |                 2 |              0.3115  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.63   | >20%                    |                10 |              0.063   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6341 | 5-10%                   |                 5 |              0.12682 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6394 | 10-15%                  |                 2 |              0.3197  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.646  | >20%                    |                 5 |              0.1292  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6479 | >20%                    |                 2 |              0.32395 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6482 | >20%                    |                 2 |              0.3241  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6519 | 15-20%                  |                10 |              0.06519 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6625 | >20%                    |                 5 |              0.1325  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6708 | >20%                    |                 5 |              0.13416 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6794 | <5%                     |                 2 |              0.3397  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6831 | >20%                    |                10 |              0.06831 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6851 | 5-10%                   |                 2 |              0.34255 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6993 | <5%                     |                10 |              0.06993 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.716  | >20%                    |                 5 |              0.1432  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.719  | >20%                    |                10 |              0.0719  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7325 | >20%                    |                10 |              0.07325 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7332 | 15-20%                  |                10 |              0.07332 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7345 | >20%                    |                 5 |              0.1469  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7358 | 15-20%                  |                 5 |              0.14716 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7451 | >20%                    |                 5 |              0.14902 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7551 | >20%                    |                10 |              0.07551 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7699 | >20%                    |                 2 |              0.38495 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8329 | >20%                    |                 5 |              0.16658 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8347 | 15-20%                  |                10 |              0.08347 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8447 | >20%                    |                 5 |              0.16894 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8576 | >20%                    |                 2 |              0.4288  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8598 | >20%                    |                10 |              0.08598 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8623 | 15-20%                  |                 5 |              0.17246 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8677 | >20%                    |                10 |              0.08677 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8764 | >20%                    |                 2 |              0.4382  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8833 | 15-20%                  |                 2 |              0.44165 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8865 | 5-10%                   |                10 |              0.08865 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.887  | 10-15%                  |                 2 |              0.4435  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9059 | >20%                    |                 5 |              0.18118 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9088 | <5%                     |                 5 |              0.18176 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.916  | >20%                    |                10 |              0.0916  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9225 | 10-15%                  |                 2 |              0.46125 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9529 |                         |                 2 |              0.47645 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9682 | >20%                    |                10 |              0.09682 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9801 | >20%                    |                10 |              0.09801 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9823 | >20%                    |                 2 |              0.49115 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9823 | 15-20%                  |                10 |              0.09823 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.988  | >20%                    |                10 |              0.0988  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0109 | >20%                    |                 5 |              0.20218 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.011  | >20%                    |                10 |              0.1011  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0207 | >20%                    |                10 |              0.10207 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0369 | >20%                    |                 5 |              0.20738 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0427 | 15-20%                  |                10 |              0.10427 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0456 | >20%                    |                10 |              0.10456 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0745 |                         |                10 |              0.10745 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0985 | >20%                    |                 5 |              0.2197  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1066 | >20%                    |                10 |              0.11066 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1146 | 10-15%                  |                 2 |              0.5573  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.116  | 5-10%                   |                10 |              0.1116  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1174 | >20%                    |                 5 |              0.22348 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1207 | >20%                    |                10 |              0.11207 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1514 | >20%                    |                 5 |              0.23028 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1549 | 5-10%                   |                 2 |              0.57745 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1805 | >20%                    |                 5 |              0.2361  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1876 |                         |                 2 |              0.5938  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1891 | >20%                    |                10 |              0.11891 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1962 |                         |                 5 |              0.23924 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2067 | >20%                    |                10 |              0.12067 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.211  | >20%                    |                10 |              0.1211  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.236  | >20%                    |                10 |              0.1236  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2572 |                         |                 5 |              0.25144 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3301 | >20%                    |                10 |              0.13301 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3466 | 10-15%                  |                10 |              0.13466 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3501 | 15-20%                  |                10 |              0.13501 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3549 | >20%                    |                10 |              0.13549 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3754 | >20%                    |                10 |              0.13754 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.378  | >20%                    |                 2 |              0.689   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3935 | 15-20%                  |                10 |              0.13935 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4015 | >20%                    |                 5 |              0.2803  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.415  | >20%                    |                10 |              0.1415  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.508  | 5-10%                   |                 5 |              0.3016  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.55   | >20%                    |                 2 |              0.775   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.5964 | >20%                    |                 5 |              0.31928 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6409 | >20%                    |                10 |              0.16409 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7007 |                         |                10 |              0.17007 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7394 | 5-10%                   |                 2 |              0.8697  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8318 | >20%                    |                 5 |              0.36636 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.885  |                         |                10 |              0.1885  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8967 | 15-20%                  |                10 |              0.18967 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9943 | 5-10%                   |                 2 |              0.99715 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1203 | 15-20%                  |                 5 |              0.42406 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2441 | 5-10%                   |                10 |              0.22441 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.5782 | >20%                    |                10 |              0.25782 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6587 | >20%                    |                10 |              0.26587 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0117 | >20%                    |                10 |              0.30117 |