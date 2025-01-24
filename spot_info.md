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

Data correct as of 2025-01-24 01:35:34.398553, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2086 | 5-10%                   |                 2 |              0.1043  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | 10-15%                  |                 2 |              0.11095 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2224 | <5%                     |                 2 |              0.1112  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | >20%                    |                 2 |              0.11195 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2354 | <5%                     |                 5 |              0.04708 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2399 | 5-10%                   |                 2 |              0.11995 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | 5-10%                   |                 2 |              0.1228  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | 10-15%                  |                 2 |              0.1298  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2777 | <5%                     |                 2 |              0.13885 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | 10-15%                  |                 2 |              0.14005 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3037 | <5%                     |                 2 |              0.15185 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3115 | 5-10%                   |                 2 |              0.15575 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3132 | >20%                    |                 2 |              0.1566  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3153 | >20%                    |                 2 |              0.15765 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.323  | 10-15%                  |                 2 |              0.1615  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3399 | 10-15%                  |                 5 |              0.06798 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3487 | <5%                     |                 2 |              0.17435 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3531 | <5%                     |                 5 |              0.07062 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | <5%                     |                 2 |              0.1798  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3615 | >20%                    |                 2 |              0.18075 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3706 | 5-10%                   |                 2 |              0.1853  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.373  | 5-10%                   |                 2 |              0.1865  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3761 | >20%                    |                 2 |              0.18805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3813 | 5-10%                   |                 5 |              0.07626 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3832 | 10-15%                  |                 5 |              0.07664 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.384  | 5-10%                   |                 2 |              0.192   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3879 | 5-10%                   |                 5 |              0.07758 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | 10-15%                  |                 2 |              0.19445 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3943 | 15-20%                  |                 2 |              0.19715 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3991 | 5-10%                   |                 2 |              0.19955 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4023 | 5-10%                   |                 2 |              0.20115 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4039 | 15-20%                  |                10 |              0.04039 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4098 | 10-15%                  |                 2 |              0.2049  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4112 | 5-10%                   |                 5 |              0.08224 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.418  | >20%                    |                 2 |              0.209   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4191 | 5-10%                   |                 2 |              0.20955 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4201 | <5%                     |                 2 |              0.21005 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4281 | <5%                     |                 5 |              0.08562 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | >20%                    |                 5 |              0.08716 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.438  | >20%                    |                 2 |              0.219   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4387 | 15-20%                  |                 5 |              0.08774 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4535 | <5%                     |                 5 |              0.0907  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | 15-20%                  |                 5 |              0.0911  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.463  | 15-20%                  |                 5 |              0.0926  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4779 | 5-10%                   |                 2 |              0.23895 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4786 | 15-20%                  |                 5 |              0.09572 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.484  | 15-20%                  |                 5 |              0.0968  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4913 | <5%                     |                 2 |              0.24565 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4957 | <5%                     |                 5 |              0.09914 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4961 | >20%                    |                 2 |              0.24805 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | 5-10%                   |                 5 |              0.09938 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4987 | <5%                     |                 2 |              0.24935 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4998 | 10-15%                  |                 5 |              0.09996 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | <5%                     |                 5 |              0.10032 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5023 | <5%                     |                 5 |              0.10046 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5073 | 5-10%                   |                 2 |              0.25365 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.514  | <5%                     |                 2 |              0.257   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5155 | 5-10%                   |                10 |              0.05155 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5166 | <5%                     |                 5 |              0.10332 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5171 | >20%                    |                 2 |              0.25855 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5261 | >20%                    |                 5 |              0.10522 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5293 | 10-15%                  |                 5 |              0.10586 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5308 | 10-15%                  |                 5 |              0.10616 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5385 | 5-10%                   |                 5 |              0.1077  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5469 | >20%                    |                 5 |              0.10938 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5576 | 5-10%                   |                 5 |              0.11152 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5586 | 10-15%                  |                 2 |              0.2793  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5587 | 5-10%                   |                 5 |              0.11174 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5629 | <5%                     |                 5 |              0.11258 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | <5%                     |                 5 |              0.11398 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5762 | 15-20%                  |                 2 |              0.2881  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5863 | >20%                    |                10 |              0.05863 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5865 | 5-10%                   |                 5 |              0.1173  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5994 | 5-10%                   |                 5 |              0.11988 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6011 | 5-10%                   |                10 |              0.06011 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6376 | 15-20%                  |                10 |              0.06376 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6386 | >20%                    |                 2 |              0.3193  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6433 | <5%                     |                10 |              0.06433 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6465 | 5-10%                   |                10 |              0.06465 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6533 | >20%                    |                10 |              0.06533 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6535 | >20%                    |                 5 |              0.1307  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6589 | 5-10%                   |                 5 |              0.13178 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6605 | >20%                    |                 5 |              0.1321  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6737 | >20%                    |                10 |              0.06737 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6747 | 5-10%                   |                10 |              0.06747 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6782 | 5-10%                   |                 5 |              0.13564 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6807 | 5-10%                   |                 5 |              0.13614 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6915 | 10-15%                  |                10 |              0.06915 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6994 | >20%                    |                 5 |              0.13988 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7122 | <5%                     |                10 |              0.07122 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7223 | <5%                     |                 5 |              0.14446 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7284 | >20%                    |                10 |              0.07284 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7325 | 15-20%                  |                 2 |              0.36625 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7346 | 10-15%                  |                10 |              0.07346 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.74   | >20%                    |                 5 |              0.148   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7527 | >20%                    |                 5 |              0.15054 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7585 | <5%                     |                 2 |              0.37925 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7592 | <5%                     |                10 |              0.07592 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7645 | 10-15%                  |                10 |              0.07645 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.772  | 5-10%                   |                10 |              0.0772  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7849 | 5-10%                   |                10 |              0.07849 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7874 | >20%                    |                 5 |              0.15748 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8001 | 15-20%                  |                10 |              0.08001 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.806  | 15-20%                  |                 2 |              0.403   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8098 | 5-10%                   |                10 |              0.08098 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8219 | 10-15%                  |                10 |              0.08219 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8238 | <5%                     |                10 |              0.08238 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8253 | 15-20%                  |                10 |              0.08253 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8308 | 15-20%                  |                10 |              0.08308 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8466 | 5-10%                   |                10 |              0.08466 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8476 | >20%                    |                10 |              0.08476 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8577 | <5%                     |                10 |              0.08577 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8925 | <5%                     |                10 |              0.08925 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8929 | 5-10%                   |                 5 |              0.17858 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9062 | 5-10%                   |                10 |              0.09062 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9236 | 5-10%                   |                10 |              0.09236 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9333 | <5%                     |                10 |              0.09333 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.963  | 5-10%                   |                10 |              0.0963  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9637 | 5-10%                   |                10 |              0.09637 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9899 | >20%                    |                10 |              0.09899 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9961 | >20%                    |                10 |              0.09961 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0138 | 15-20%                  |                10 |              0.10138 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0531 | <5%                     |                10 |              0.10531 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0772 | 10-15%                  |                10 |              0.10772 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0784 | 5-10%                   |                 5 |              0.21568 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0832 | 5-10%                   |                10 |              0.10832 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.094  | 15-20%                  |                 5 |              0.2188  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.103  | 10-15%                  |                 2 |              0.5515  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1615 | 10-15%                  |                10 |              0.11615 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.254  | 10-15%                  |                 2 |              0.627   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2683 | >20%                    |                10 |              0.12683 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4138 | 5-10%                   |                10 |              0.14138 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4241 | 15-20%                  |                 5 |              0.28482 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4445 | 5-10%                   |                10 |              0.14445 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.459  | 5-10%                   |                10 |              0.1459  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.051  | 5-10%                   |                10 |              0.2051  |