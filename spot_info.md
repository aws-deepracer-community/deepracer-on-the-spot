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

Data correct as of 2026-08-11 02:00:33.503722, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1855 | >20%                    |                 2 |              0.09275 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1858 | >20%                    |                 2 |              0.0929  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2009 | >20%                    |                 2 |              0.10045 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2148 | >20%                    |                 2 |              0.1074  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | 15-20%                  |                 2 |              0.1115  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2284 | >20%                    |                 2 |              0.1142  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2534 | >20%                    |                 5 |              0.05068 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2556 | >20%                    |                 2 |              0.1278  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2609 | 10-15%                  |                 2 |              0.13045 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.271  | >20%                    |                 2 |              0.1355  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2725 | 15-20%                  |                 2 |              0.13625 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2854 | 5-10%                   |                10 |              0.02854 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2872 | >20%                    |                 2 |              0.1436  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | >20%                    |                 2 |              0.14445 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3064 | 15-20%                  |                 2 |              0.1532  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3125 | 10-15%                  |                 2 |              0.15625 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3235 | >20%                    |                 5 |              0.0647  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3298 | 15-20%                  |                 2 |              0.1649  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.332  | 5-10%                   |                10 |              0.0332  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3323 | 15-20%                  |                 5 |              0.06646 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3418 | >20%                    |                 5 |              0.06836 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3522 | >20%                    |                 5 |              0.07044 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3572 | >20%                    |                 2 |              0.1786  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3701 | >20%                    |                10 |              0.03701 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3731 | <5%                     |                 2 |              0.18655 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3774 | >20%                    |                10 |              0.03774 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3854 | >20%                    |                 5 |              0.07708 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.396  | >20%                    |                10 |              0.0396  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.401  | >20%                    |                10 |              0.0401  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4055 | 15-20%                  |                 2 |              0.20275 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4097 | >20%                    |                 2 |              0.20485 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4114 | >20%                    |                 2 |              0.2057  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4139 | 10-15%                  |                 2 |              0.20695 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4187 | <5%                     |                 2 |              0.20935 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4204 | >20%                    |                 2 |              0.2102  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4309 | >20%                    |                 5 |              0.08618 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4318 | >20%                    |                 2 |              0.2159  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4325 | >20%                    |                 5 |              0.0865  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4326 | >20%                    |                 2 |              0.2163  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4394 | >20%                    |                 5 |              0.08788 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4448 | 5-10%                   |                10 |              0.04448 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4456 | >20%                    |                10 |              0.04456 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4484 | 10-15%                  |                 2 |              0.2242  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4545 | >20%                    |                 2 |              0.22725 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4622 | >20%                    |                 2 |              0.2311  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4662 | >20%                    |                 5 |              0.09324 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4761 | 15-20%                  |                 5 |              0.09522 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | >20%                    |                 5 |              0.0965  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4917 | 10-15%                  |                10 |              0.04917 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4985 | >20%                    |                 5 |              0.0997  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5088 | >20%                    |                 5 |              0.10176 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5282 | >20%                    |                 2 |              0.2641  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5299 | >20%                    |                 2 |              0.26495 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5333 | >20%                    |                 5 |              0.10666 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5355 | >20%                    |                 5 |              0.1071  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5411 | 5-10%                   |                 2 |              0.27055 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5581 | >20%                    |                10 |              0.05581 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5636 | <5%                     |                 2 |              0.2818  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.571  | >20%                    |                10 |              0.0571  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5771 | >20%                    |                 2 |              0.28855 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5814 | 10-15%                  |                 5 |              0.11628 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5831 | 15-20%                  |                10 |              0.05831 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5847 | >20%                    |                 2 |              0.29235 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5868 | >20%                    |                 2 |              0.2934  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5897 | >20%                    |                 5 |              0.11794 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5993 | >20%                    |                 5 |              0.11986 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.611  | >20%                    |                10 |              0.0611  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6168 | >20%                    |                 5 |              0.12336 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6182 | >20%                    |                 5 |              0.12364 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6244 | <5%                     |                 5 |              0.12488 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6322 | 5-10%                   |                 5 |              0.12644 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6328 | >20%                    |                 5 |              0.12656 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6369 | >20%                    |                 5 |              0.12738 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6435 | >20%                    |                 5 |              0.1287  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6507 | 15-20%                  |                 5 |              0.13014 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6553 | >20%                    |                 5 |              0.13106 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6596 | >20%                    |                 5 |              0.13192 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6607 | >20%                    |                 5 |              0.13214 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6683 | >20%                    |                10 |              0.06683 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6784 | >20%                    |                10 |              0.06784 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6791 | >20%                    |                10 |              0.06791 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6952 | >20%                    |                 2 |              0.3476  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6975 | >20%                    |                 5 |              0.1395  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.703  | >20%                    |                 2 |              0.3515  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7168 | >20%                    |                10 |              0.07168 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7295 |                         |                 2 |              0.36475 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7527 | >20%                    |                10 |              0.07527 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7678 | >20%                    |                 5 |              0.15356 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7727 | >20%                    |                 5 |              0.15454 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7991 | >20%                    |                10 |              0.07991 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8057 | 10-15%                  |                 2 |              0.40285 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8062 |                         |                 5 |              0.16124 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8089 | >20%                    |                10 |              0.08089 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.811  | <5%                     |                10 |              0.0811  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8225 | >20%                    |                 2 |              0.41125 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8349 | 5-10%                   |                10 |              0.08349 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8383 | >20%                    |                 5 |              0.16766 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8412 | >20%                    |                 2 |              0.4206  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8571 | 15-20%                  |                10 |              0.08571 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8575 | 10-15%                  |                 2 |              0.42875 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.87   | 15-20%                  |                10 |              0.087   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8702 | 15-20%                  |                10 |              0.08702 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8786 | >20%                    |                10 |              0.08786 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8865 | >20%                    |                10 |              0.08865 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8949 | >20%                    |                 5 |              0.17898 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9044 | >20%                    |                10 |              0.09044 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9126 | >20%                    |                10 |              0.09126 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9165 | >20%                    |                 5 |              0.1833  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9165 | 5-10%                   |                10 |              0.09165 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9231 |                         |                 2 |              0.46155 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9234 | >20%                    |                10 |              0.09234 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9292 | >20%                    |                 5 |              0.18584 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9383 | >20%                    |                10 |              0.09383 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9584 | 15-20%                  |                10 |              0.09584 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9827 | >20%                    |                 5 |              0.19654 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9879 | >20%                    |                 5 |              0.19758 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.001  | >20%                    |                10 |              0.1001  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0139 | 15-20%                  |                10 |              0.10139 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0236 | 15-20%                  |                 2 |              0.5118  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0269 | >20%                    |                 2 |              0.51345 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0311 | >20%                    |                10 |              0.10311 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0365 | >20%                    |                10 |              0.10365 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0404 | >20%                    |                 5 |              0.20808 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0878 |                         |                10 |              0.10878 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1173 | >20%                    |                 2 |              0.55865 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.128  | >20%                    |                10 |              0.1128  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2154 | 15-20%                  |                10 |              0.12154 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2276 | >20%                    |                10 |              0.12276 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2368 | >20%                    |                10 |              0.12368 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2383 | >20%                    |                 5 |              0.24766 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2498 | 5-10%                   |                 2 |              0.6249  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3037 |                         |                 5 |              0.26074 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.3123 | >20%                    |                10 |              0.13123 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3205 | >20%                    |                 5 |              0.2641  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3545 | >20%                    |                 5 |              0.2709  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3585 | 10-15%                  |                 2 |              0.67925 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3738 | >20%                    |                10 |              0.13738 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3979 | >20%                    |                10 |              0.13979 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4669 | >20%                    |                10 |              0.14669 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4914 | 10-15%                  |                10 |              0.14914 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.5442 | >20%                    |                 5 |              0.30884 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5576 | 15-20%                  |                 5 |              0.31152 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6316 | 5-10%                   |                 2 |              0.8158  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.662  | 5-10%                   |                10 |              0.1662  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6768 | 5-10%                   |                 5 |              0.33536 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6881 | >20%                    |                10 |              0.16881 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.746  | 15-20%                  |                10 |              0.1746  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.805  | >20%                    |                10 |              0.1805  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.823  |                         |                10 |              0.1823  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.122  | 5-10%                   |                 2 |              1.061   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.8177 | >20%                    |                 5 |              0.56354 |