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

Data correct as of 2024-10-03 01:37:12.450562, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1171 | <5%                     |                 2 |              0.05855 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1193 | <5%                     |                 2 |              0.05965 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.153  | 5-10%                   |                 2 |              0.0765  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1615 | 10-15%                  |                 2 |              0.08075 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1635 | 10-15%                  |                 2 |              0.08175 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1888 | >20%                    |                 2 |              0.0944  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1923 | 5-10%                   |                 5 |              0.03846 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1966 | 10-15%                  |                 2 |              0.0983  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2165 | >20%                    |                 2 |              0.10825 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2203 | >20%                    |                 5 |              0.04406 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2232 | 15-20%                  |                 5 |              0.04464 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2232 | 10-15%                  |                 5 |              0.04464 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | <5%                     |                 2 |              0.11625 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | >20%                    |                 2 |              0.1166  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | <5%                     |                 2 |              0.12025 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.242  | >20%                    |                 5 |              0.0484  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | 5-10%                   |                 2 |              0.1343  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2731 | <5%                     |                 2 |              0.13655 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2751 | <5%                     |                 2 |              0.13755 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | <5%                     |                 2 |              0.1398  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.289  | <5%                     |                 2 |              0.1445  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2895 | 5-10%                   |                 2 |              0.14475 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2987 | >20%                    |                 5 |              0.05974 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2991 | <5%                     |                10 |              0.02991 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | <5%                     |                 2 |              0.15035 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3045 | 15-20%                  |                 5 |              0.0609  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3061 | 15-20%                  |                10 |              0.03061 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | 10-15%                  |                 2 |              0.15635 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3189 | 15-20%                  |                 2 |              0.15945 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3244 | >20%                    |                 5 |              0.06488 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3245 | <5%                     |                 2 |              0.16225 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3401 | >20%                    |                10 |              0.03401 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3473 | >20%                    |                10 |              0.03473 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3478 | 5-10%                   |                10 |              0.03478 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3492 | <5%                     |                 2 |              0.1746  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3538 | >20%                    |                 5 |              0.07076 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3577 | >20%                    |                 5 |              0.07154 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | <5%                     |                 2 |              0.18625 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.373  | 5-10%                   |                 2 |              0.1865  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3744 | 5-10%                   |                 5 |              0.07488 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | <5%                     |                 5 |              0.075   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3793 | <5%                     |                 5 |              0.07586 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.3861 | <5%                     |                10 |              0.03861 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3887 | 15-20%                  |                 2 |              0.19435 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4068 | >20%                    |                 2 |              0.2034  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4099 | >20%                    |                 2 |              0.20495 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4175 | <5%                     |                 2 |              0.20875 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | 5-10%                   |                 2 |              0.2116  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4314 | 15-20%                  |                 5 |              0.08628 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4356 | 5-10%                   |                10 |              0.04356 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4381 | 5-10%                   |                10 |              0.04381 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4447 | <5%                     |                 2 |              0.22235 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4478 | >20%                    |                 2 |              0.2239  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | <5%                     |                 5 |              0.09084 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4574 | <5%                     |                 5 |              0.09148 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | 10-15%                  |                 5 |              0.09218 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4629 | 10-15%                  |                 5 |              0.09258 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4638 | 10-15%                  |                 2 |              0.2319  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4676 | 5-10%                   |                 5 |              0.09352 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4801 | 10-15%                  |                 2 |              0.24005 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4838 | <5%                     |                 5 |              0.09676 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4884 | <5%                     |                 5 |              0.09768 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4932 | >20%                    |                 2 |              0.2466  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4934 | 10-15%                  |                 5 |              0.09868 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4953 | <5%                     |                 5 |              0.09906 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5021 | >20%                    |                10 |              0.05021 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5075 | <5%                     |                 5 |              0.1015  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5092 | 15-20%                  |                 5 |              0.10184 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | <5%                     |                 5 |              0.1032  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.517  | >20%                    |                 2 |              0.2585  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5242 | >20%                    |                 5 |              0.10484 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5268 | >20%                    |                 2 |              0.2634  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5272 | <5%                     |                 5 |              0.10544 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | >20%                    |                 5 |              0.11644 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.604  | 15-20%                  |                 5 |              0.1208  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6088 | >20%                    |                 5 |              0.12176 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6122 | >20%                    |                 2 |              0.3061  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6129 | 10-15%                  |                 5 |              0.12258 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6305 | >20%                    |                10 |              0.06305 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6412 | >20%                    |                 5 |              0.12824 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6564 | 5-10%                   |                10 |              0.06564 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6819 | 5-10%                   |                 5 |              0.13638 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6992 | >20%                    |                 5 |              0.13984 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7062 | >20%                    |                 2 |              0.3531  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7066 | <5%                     |                10 |              0.07066 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7122 | <5%                     |                10 |              0.07122 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7415 | <5%                     |                10 |              0.07415 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.748  | 15-20%                  |                10 |              0.0748  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7568 | >20%                    |                10 |              0.07568 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7576 | >20%                    |                 5 |              0.15152 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7584 | 15-20%                  |                10 |              0.07584 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7655 | >20%                    |                10 |              0.07655 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7705 | >20%                    |                10 |              0.07705 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7798 | 10-15%                  |                10 |              0.07798 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.824  | 5-10%                   |                10 |              0.0824  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8306 | 10-15%                  |                10 |              0.08306 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8402 | >20%                    |                10 |              0.08402 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8536 | 15-20%                  |                 5 |              0.17072 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8776 | <5%                     |                10 |              0.08776 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8845 | >20%                    |                 2 |              0.44225 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8896 | <5%                     |                10 |              0.08896 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8906 | >20%                    |                10 |              0.08906 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8935 | >20%                    |                10 |              0.08935 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9008 | >20%                    |                 5 |              0.18016 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9268 | 5-10%                   |                10 |              0.09268 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.929  | <5%                     |                10 |              0.0929  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.955  | 10-15%                  |                 2 |              0.4775  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9788 | 10-15%                  |                 5 |              0.19576 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9866 | 15-20%                  |                10 |              0.09866 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0004 | 10-15%                  |                10 |              0.10004 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0196 | <5%                     |                10 |              0.10196 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0395 | >20%                    |                10 |              0.10395 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0706 | <5%                     |                 2 |              0.5353  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0768 | >20%                    |                10 |              0.10768 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1591 | >20%                    |                10 |              0.11591 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1759 | >20%                    |                10 |              0.11759 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.187  | >20%                    |                 5 |              0.2374  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3936 | 10-15%                  |                10 |              0.13936 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4566 | >20%                    |                10 |              0.14566 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6704 | 5-10%                   |                10 |              0.16704 |