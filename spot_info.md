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

Data correct as of 2026-05-11 03:56:29.876401, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1412 | 15-20%                  |                 2 |              0.0706  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1441 | >20%                    |                 2 |              0.07205 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1873 | >20%                    |                 2 |              0.09365 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1981 | >20%                    |                 2 |              0.09905 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2068 | 15-20%                  |                 5 |              0.04136 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2358 | 15-20%                  |                 2 |              0.1179  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.238  | >20%                    |                 2 |              0.119   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2431 | 15-20%                  |                 5 |              0.04862 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2483 | >20%                    |                 5 |              0.04966 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2688 | >20%                    |                 5 |              0.05376 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | >20%                    |                 2 |              0.13935 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2813 | 15-20%                  |                 5 |              0.05626 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | >20%                    |                 2 |              0.14155 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2849 | >20%                    |                 2 |              0.14245 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2866 | >20%                    |                 5 |              0.05732 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | 15-20%                  |                 2 |              0.14515 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2966 | 10-15%                  |                 2 |              0.1483  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2976 | 5-10%                   |                10 |              0.02976 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3061 | >20%                    |                 5 |              0.06122 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3072 | 5-10%                   |                10 |              0.03072 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | >20%                    |                 2 |              0.1546  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3096 | 10-15%                  |                 2 |              0.1548  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3215 | >20%                    |                10 |              0.03215 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3233 | >20%                    |                 2 |              0.16165 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3246 | >20%                    |                 2 |              0.1623  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3311 | 10-15%                  |                 2 |              0.16555 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3371 | <5%                     |                 2 |              0.16855 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3376 | 10-15%                  |                 2 |              0.1688  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3499 | >20%                    |                 5 |              0.06998 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3544 | >20%                    |                 5 |              0.07088 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3587 | >20%                    |                 5 |              0.07174 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3679 | >20%                    |                 5 |              0.07358 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3745 | >20%                    |                 5 |              0.0749  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3854 | >20%                    |                 5 |              0.07708 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3893 | >20%                    |                 5 |              0.07786 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4036 | >20%                    |                 2 |              0.2018  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4103 | >20%                    |                 2 |              0.20515 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4192 | 5-10%                   |                 2 |              0.2096  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4268 | <5%                     |                 2 |              0.2134  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.437  | >20%                    |                 5 |              0.0874  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4377 | >20%                    |                 5 |              0.08754 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4384 | >20%                    |                 2 |              0.2192  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4398 | >20%                    |                 5 |              0.08796 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4445 | >20%                    |                 5 |              0.0889  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4459 | >20%                    |                10 |              0.04459 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4485 | 15-20%                  |                 2 |              0.22425 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4551 | >20%                    |                 2 |              0.22755 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.457  | <5%                     |                 2 |              0.2285  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4635 | >20%                    |                 5 |              0.0927  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4659 | >20%                    |                 2 |              0.23295 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4668 | 15-20%                  |                 2 |              0.2334  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4745 | >20%                    |                 2 |              0.23725 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | >20%                    |                 5 |              0.09518 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4775 | >20%                    |                 5 |              0.0955  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4784 | >20%                    |                 5 |              0.09568 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4799 | >20%                    |                10 |              0.04799 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4835 | >20%                    |                 5 |              0.0967  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.493  | >20%                    |                 5 |              0.0986  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4942 | 10-15%                  |                 2 |              0.2471  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4943 | >20%                    |                10 |              0.04943 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5022 | >20%                    |                 2 |              0.2511  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5153 | 5-10%                   |                 5 |              0.10306 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5212 | 15-20%                  |                 5 |              0.10424 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5259 | >20%                    |                 2 |              0.26295 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5365 | >20%                    |                10 |              0.05365 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5434 | <5%                     |                 5 |              0.10868 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.544  | 10-15%                  |                 5 |              0.1088  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5722 | >20%                    |                 5 |              0.11444 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5743 | >20%                    |                10 |              0.05743 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5822 | >20%                    |                10 |              0.05822 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5927 | 15-20%                  |                 2 |              0.29635 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5938 | 5-10%                   |                10 |              0.05938 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5952 | >20%                    |                 2 |              0.2976  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.613  | >20%                    |                 5 |              0.1226  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6257 | >20%                    |                10 |              0.06257 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6298 | >20%                    |                 5 |              0.12596 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6352 | 5-10%                   |                 2 |              0.3176  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6382 | >20%                    |                 2 |              0.3191  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6505 | >20%                    |                 2 |              0.32525 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6512 | >20%                    |                 5 |              0.13024 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6548 | >20%                    |                10 |              0.06548 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6784 | 15-20%                  |                10 |              0.06784 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6799 | >20%                    |                10 |              0.06799 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6812 | >20%                    |                 5 |              0.13624 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6813 | >20%                    |                 5 |              0.13626 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6882 | 5-10%                   |                10 |              0.06882 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.689  | 10-15%                  |                 2 |              0.3445  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6965 | >20%                    |                10 |              0.06965 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7063 | >20%                    |                 5 |              0.14126 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7105 | >20%                    |                 2 |              0.35525 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7171 | >20%                    |                 5 |              0.14342 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7222 | 5-10%                   |                 5 |              0.14444 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7293 | >20%                    |                10 |              0.07293 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7326 | 15-20%                  |                10 |              0.07326 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.743  | >20%                    |                 2 |              0.3715  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7462 | >20%                    |                 2 |              0.3731  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7539 | >20%                    |                 2 |              0.37695 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7649 | >20%                    |                 5 |              0.15298 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7705 | >20%                    |                10 |              0.07705 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7746 |                         |                 2 |              0.3873  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.783  | >20%                    |                10 |              0.0783  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7865 | >20%                    |                10 |              0.07865 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7873 | >20%                    |                 5 |              0.15746 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8411 | >20%                    |                10 |              0.08411 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8464 | >20%                    |                 5 |              0.16928 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8611 |                         |                 2 |              0.43055 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8615 | >20%                    |                10 |              0.08615 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8864 | 15-20%                  |                10 |              0.08864 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8875 | >20%                    |                 5 |              0.1775  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9067 | >20%                    |                10 |              0.09067 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9133 | >20%                    |                10 |              0.09133 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9181 | 5-10%                   |                10 |              0.09181 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9235 | 15-20%                  |                10 |              0.09235 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9265 | >20%                    |                10 |              0.09265 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9293 | 10-15%                  |                10 |              0.09293 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9417 | >20%                    |                10 |              0.09417 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9466 | >20%                    |                 5 |              0.18932 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9514 | >20%                    |                 5 |              0.19028 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9763 | >20%                    |                10 |              0.09763 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9778 | >20%                    |                 5 |              0.19556 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9903 | 15-20%                  |                10 |              0.09903 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9937 | >20%                    |                10 |              0.09937 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0037 | >20%                    |                10 |              0.10037 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0065 |                         |                 5 |              0.2013  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0173 | >20%                    |                10 |              0.10173 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0293 | >20%                    |                10 |              0.10293 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.032  | >20%                    |                 2 |              0.516   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0816 | >20%                    |                10 |              0.10816 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0878 |                         |                 5 |              0.21756 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.094  | >20%                    |                 5 |              0.2188  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1514 | 15-20%                  |                10 |              0.11514 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1756 | 10-15%                  |                10 |              0.11756 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1813 | >20%                    |                 5 |              0.23626 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2022 | 5-10%                   |                 2 |              0.6011  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2286 | 5-10%                   |                 2 |              0.6143  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2645 | >20%                    |                 5 |              0.2529  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3419 | >20%                    |                 5 |              0.26838 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.422  | 15-20%                  |                 5 |              0.2844  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4572 | >20%                    |                10 |              0.14572 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5031 | >20%                    |                10 |              0.15031 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5314 | >20%                    |                10 |              0.15314 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.532  | 15-20%                  |                10 |              0.1532  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.545  | 10-15%                  |                 2 |              0.7725  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.6089 | >20%                    |                10 |              0.16089 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6392 | 15-20%                  |                10 |              0.16392 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6458 |                         |                10 |              0.16458 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.739  |                         |                10 |              0.1739  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1783 | >20%                    |                10 |              0.21783 |