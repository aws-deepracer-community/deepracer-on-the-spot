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

Data correct as of 2026-06-02 04:22:44.460466, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1369 | >20%                    |                 2 |              0.06845 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1546 | 15-20%                  |                 2 |              0.0773  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1718 | >20%                    |                 2 |              0.0859  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2047 | 10-15%                  |                 2 |              0.10235 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2064 | >20%                    |                 2 |              0.1032  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2096 | 15-20%                  |                 2 |              0.1048  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2109 | >20%                    |                 2 |              0.10545 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2149 | 15-20%                  |                 5 |              0.04298 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2195 | >20%                    |                 2 |              0.10975 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2333 | >20%                    |                 2 |              0.11665 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2347 | >20%                    |                 5 |              0.04694 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2421 | 15-20%                  |                 5 |              0.04842 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2491 | >20%                    |                 2 |              0.12455 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | >20%                    |                 2 |              0.1264  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2763 | >20%                    |                10 |              0.02763 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2799 | >20%                    |                 5 |              0.05598 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | >20%                    |                 2 |              0.1437  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2934 | 5-10%                   |                10 |              0.02934 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.294  | >20%                    |                 5 |              0.0588  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2962 | >20%                    |                 5 |              0.05924 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | 15-20%                  |                 2 |              0.1492  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | >20%                    |                 2 |              0.1508  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3043 | >20%                    |                 5 |              0.06086 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3125 | 15-20%                  |                 5 |              0.0625  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3182 | >20%                    |                10 |              0.03182 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3319 | <5%                     |                 2 |              0.16595 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3323 | >20%                    |                 5 |              0.06646 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3332 | >20%                    |                 5 |              0.06664 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3342 | >20%                    |                 2 |              0.1671  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3366 | >20%                    |                 2 |              0.1683  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.339  | 5-10%                   |                10 |              0.0339  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3433 | 10-15%                  |                 2 |              0.17165 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3494 | >20%                    |                 5 |              0.06988 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3621 | >20%                    |                 2 |              0.18105 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3638 | 10-15%                  |                 2 |              0.1819  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3769 | >20%                    |                 5 |              0.07538 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3874 | >20%                    |                 5 |              0.07748 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3918 | >20%                    |                10 |              0.03918 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3939 | >20%                    |                 2 |              0.19695 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3941 | >20%                    |                 5 |              0.07882 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4014 | >20%                    |                 5 |              0.08028 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.403  | >20%                    |                 5 |              0.0806  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4062 | 10-15%                  |                 2 |              0.2031  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.411  | >20%                    |                 5 |              0.0822  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4169 | >20%                    |                 5 |              0.08338 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4209 | >20%                    |                 2 |              0.21045 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4241 | <5%                     |                 2 |              0.21205 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.431  | >20%                    |                 2 |              0.2155  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4319 | >20%                    |                 2 |              0.21595 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4327 | >20%                    |                10 |              0.04327 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4509 | >20%                    |                 5 |              0.09018 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4646 | 5-10%                   |                 2 |              0.2323  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4654 | <5%                     |                 2 |              0.2327  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4672 | 15-20%                  |                 2 |              0.2336  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4719 | >20%                    |                 2 |              0.23595 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4744 | 10-15%                  |                 2 |              0.2372  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.475  | 15-20%                  |                 2 |              0.2375  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4801 | >20%                    |                 5 |              0.09602 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4804 | >20%                    |                 2 |              0.2402  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4842 | >20%                    |                 5 |              0.09684 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4931 | 15-20%                  |                 2 |              0.24655 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4981 | 15-20%                  |                 5 |              0.09962 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5029 | >20%                    |                 5 |              0.10058 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5042 | >20%                    |                 5 |              0.10084 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5077 | 5-10%                   |                 5 |              0.10154 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5192 | >20%                    |                10 |              0.05192 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5245 | >20%                    |                 5 |              0.1049  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5268 |                         |                 2 |              0.2634  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5305 | >20%                    |                 2 |              0.26525 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5391 | >20%                    |                 2 |              0.26955 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5436 | 10-15%                  |                 5 |              0.10872 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5531 | >20%                    |                 2 |              0.27655 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5572 | >20%                    |                 2 |              0.2786  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.572  | <5%                     |                 5 |              0.1144  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5806 | >20%                    |                 2 |              0.2903  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5854 | >20%                    |                10 |              0.05854 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5911 | 5-10%                   |                 2 |              0.29555 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5952 | 5-10%                   |                10 |              0.05952 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5974 | >20%                    |                 5 |              0.11948 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6087 | >20%                    |                 5 |              0.12174 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6307 | 15-20%                  |                10 |              0.06307 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6416 | >20%                    |                10 |              0.06416 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6498 | >20%                    |                 5 |              0.12996 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6569 | >20%                    |                10 |              0.06569 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6693 | 15-20%                  |                10 |              0.06693 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6727 | >20%                    |                 5 |              0.13454 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6766 | 10-15%                  |                10 |              0.06766 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6775 | >20%                    |                 5 |              0.1355  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6826 | 5-10%                   |                10 |              0.06826 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6843 | >20%                    |                 2 |              0.34215 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6882 | >20%                    |                 5 |              0.13764 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6886 | >20%                    |                 5 |              0.13772 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6895 | >20%                    |                 5 |              0.1379  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6896 | >20%                    |                10 |              0.06896 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | 15-20%                  |                10 |              0.06995 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7029 | >20%                    |                10 |              0.07029 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7181 | >20%                    |                 5 |              0.14362 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7312 | >20%                    |                 2 |              0.3656  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7335 | 15-20%                  |                10 |              0.07335 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7356 | >20%                    |                 5 |              0.14712 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7373 | >20%                    |                 2 |              0.36865 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7688 |                         |                10 |              0.07688 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7711 | >20%                    |                10 |              0.07711 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7832 | >20%                    |                10 |              0.07832 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.785  | >20%                    |                 5 |              0.157   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.808  | >20%                    |                10 |              0.0808  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.818  | >20%                    |                 5 |              0.1636  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8415 |                         |                 5 |              0.1683  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8439 | >20%                    |                10 |              0.08439 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8447 | 10-15%                  |                 2 |              0.42235 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8509 | >20%                    |                 5 |              0.17018 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8545 | >20%                    |                10 |              0.08545 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8666 | 15-20%                  |                10 |              0.08666 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8704 | >20%                    |                10 |              0.08704 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8716 | >20%                    |                10 |              0.08716 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8764 |                         |                 2 |              0.4382  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8777 | >20%                    |                 5 |              0.17554 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8912 | >20%                    |                10 |              0.08912 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9207 | >20%                    |                10 |              0.09207 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9319 | 5-10%                   |                 2 |              0.46595 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9402 | >20%                    |                 5 |              0.18804 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9526 | >20%                    |                10 |              0.09526 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9535 | >20%                    |                10 |              0.09535 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9609 | >20%                    |                10 |              0.09609 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9615 | >20%                    |                 5 |              0.1923  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9623 | >20%                    |                10 |              0.09623 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9714 | 5-10%                   |                10 |              0.09714 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9921 | >20%                    |                 5 |              0.19842 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9931 | >20%                    |                10 |              0.09931 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0062 | >20%                    |                10 |              0.10062 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0116 | >20%                    |                10 |              0.10116 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.033  | >20%                    |                 2 |              0.5165  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0561 | >20%                    |                10 |              0.10561 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0629 | 5-10%                   |                 5 |              0.21258 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0721 |                         |                 5 |              0.21442 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1096 | >20%                    |                 5 |              0.22192 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1268 | >20%                    |                10 |              0.11268 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1385 | 15-20%                  |                10 |              0.11385 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1438 | 5-10%                   |                 2 |              0.5719  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1587 | 15-20%                  |                10 |              0.11587 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1853 |                         |                10 |              0.11853 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2098 | >20%                    |                10 |              0.12098 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2709 | >20%                    |                10 |              0.12709 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3223 | 15-20%                  |                 5 |              0.26446 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3294 | 10-15%                  |                10 |              0.13294 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.349  | 10-15%                  |                 2 |              0.6745  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3798 | >20%                    |                10 |              0.13798 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4089 | >20%                    |                 5 |              0.28178 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5514 | >20%                    |                 5 |              0.31028 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5999 | 15-20%                  |                10 |              0.15999 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0253 | >20%                    |                10 |              0.20253 |