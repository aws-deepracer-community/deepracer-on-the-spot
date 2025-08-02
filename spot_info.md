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

Data correct as of 2025-08-02 02:01:20.775334, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.109  | 5-10%                   |                 2 |              0.0545  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1116 | >20%                    |                 2 |              0.0558  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1282 | 5-10%                   |                 2 |              0.0641  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1544 | <5%                     |                 5 |              0.03088 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1929 | <5%                     |                 5 |              0.03858 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2166 | >20%                    |                 2 |              0.1083  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2365 | 15-20%                  |                 5 |              0.0473  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2454 | 15-20%                  |                 2 |              0.1227  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | 15-20%                  |                 2 |              0.12345 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2481 | >20%                    |                 5 |              0.04962 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.256  | >20%                    |                 2 |              0.128   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2621 | >20%                    |                 2 |              0.13105 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2656 | >20%                    |                 2 |              0.1328  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | >20%                    |                 2 |              0.13635 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2739 | 5-10%                   |                 2 |              0.13695 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | <5%                     |                 2 |              0.15605 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3151 | 15-20%                  |                 2 |              0.15755 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3223 | 5-10%                   |                 2 |              0.16115 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3308 | 5-10%                   |                 5 |              0.06616 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3401 | >20%                    |                 2 |              0.17005 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3422 | 15-20%                  |                 2 |              0.1711  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3482 | <5%                     |                 2 |              0.1741  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3486 | >20%                    |                 2 |              0.1743  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3494 | 5-10%                   |                 2 |              0.1747  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.35   | >20%                    |                 5 |              0.07    |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | >20%                    |                 5 |              0.072   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | 15-20%                  |                 2 |              0.1804  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | >20%                    |                 5 |              0.07268 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3734 | >20%                    |                 2 |              0.1867  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3744 | >20%                    |                 5 |              0.07488 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3802 | 15-20%                  |                10 |              0.03802 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3868 | >20%                    |                 2 |              0.1934  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3939 | >20%                    |                 2 |              0.19695 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4    | >20%                    |                 5 |              0.08    |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4057 | 10-15%                  |                 2 |              0.20285 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4094 | <5%                     |                 2 |              0.2047  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4262 | >20%                    |                 5 |              0.08524 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4329 | >20%                    |                 5 |              0.08658 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.446  | >20%                    |                 2 |              0.223   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.451  | 15-20%                  |                 5 |              0.0902  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4532 | >20%                    |                 2 |              0.2266  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4569 | 5-10%                   |                 2 |              0.22845 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4574 | 15-20%                  |                10 |              0.04574 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4637 | >20%                    |                 5 |              0.09274 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | 5-10%                   |                 2 |              0.2343  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4724 | >20%                    |                 2 |              0.2362  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4727 | >20%                    |                 5 |              0.09454 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | >20%                    |                 5 |              0.09574 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4869 | 10-15%                  |                 2 |              0.24345 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | >20%                    |                 5 |              0.09742 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4894 | >20%                    |                 2 |              0.2447  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | 10-15%                  |                 5 |              0.09846 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4936 | >20%                    |                 2 |              0.2468  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4949 | >20%                    |                 2 |              0.24745 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4977 | >20%                    |                 2 |              0.24885 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4995 | >20%                    |                 2 |              0.24975 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5033 | >20%                    |                10 |              0.05033 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5041 | >20%                    |                 2 |              0.25205 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5085 | >20%                    |                 2 |              0.25425 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5106 | 15-20%                  |                10 |              0.05106 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | 5-10%                   |                 5 |              0.10284 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5201 | >20%                    |                 5 |              0.10402 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | >20%                    |                 5 |              0.10418 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5242 | <5%                     |                10 |              0.05242 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5324 | >20%                    |                 5 |              0.10648 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.535  | <5%                     |                 2 |              0.2675  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5364 | <5%                     |                10 |              0.05364 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5416 | 15-20%                  |                 2 |              0.2708  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5498 | >20%                    |                 5 |              0.10996 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5514 | >20%                    |                 2 |              0.2757  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5553 | >20%                    |                 5 |              0.11106 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5619 | 10-15%                  |                 5 |              0.11238 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5673 | >20%                    |                 5 |              0.11346 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5704 | >20%                    |                 2 |              0.2852  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5754 | 10-15%                  |                 5 |              0.11508 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.577  | >20%                    |                 2 |              0.2885  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5877 | >20%                    |                 5 |              0.11754 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5938 | >20%                    |                 2 |              0.2969  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6039 | 5-10%                   |                 5 |              0.12078 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6082 | >20%                    |                 2 |              0.3041  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6097 | 5-10%                   |                 2 |              0.30485 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6116 | >20%                    |                 5 |              0.12232 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6242 | >20%                    |                 5 |              0.12484 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6265 | <5%                     |                 5 |              0.1253  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6328 | 5-10%                   |                 5 |              0.12656 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.636  | >20%                    |                 2 |              0.318   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6369 | 10-15%                  |                 2 |              0.31845 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6447 | 10-15%                  |                 5 |              0.12894 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.657  | >20%                    |                 5 |              0.1314  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6591 | >20%                    |                10 |              0.06591 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6637 | >20%                    |                 5 |              0.13274 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6641 | >20%                    |                 5 |              0.13282 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6728 | 15-20%                  |                10 |              0.06728 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6772 | <5%                     |                 5 |              0.13544 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6789 | >20%                    |                 5 |              0.13578 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6873 | >20%                    |                10 |              0.06873 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6942 | 15-20%                  |                 2 |              0.3471  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7096 | >20%                    |                 2 |              0.3548  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7216 | >20%                    |                10 |              0.07216 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7238 | 5-10%                   |                 5 |              0.14476 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7299 | 15-20%                  |                10 |              0.07299 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.734  | 15-20%                  |                 2 |              0.367   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7484 | >20%                    |                 5 |              0.14968 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | 15-20%                  |                10 |              0.07516 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7516 | >20%                    |                 5 |              0.15032 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.76   | >20%                    |                10 |              0.076   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7601 | >20%                    |                 5 |              0.15202 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7605 | <5%                     |                10 |              0.07605 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.762  | >20%                    |                 5 |              0.1524  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7797 | 15-20%                  |                 5 |              0.15594 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8031 | <5%                     |                 5 |              0.16062 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8049 | >20%                    |                10 |              0.08049 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.808  | >20%                    |                 2 |              0.404   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8209 | >20%                    |                 5 |              0.16418 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8263 | >20%                    |                 5 |              0.16526 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8415 | 5-10%                   |                10 |              0.08415 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8559 | 15-20%                  |                10 |              0.08559 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.857  | >20%                    |                10 |              0.0857  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.878  | >20%                    |                10 |              0.0878  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.887  | 5-10%                   |                10 |              0.0887  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8906 | 15-20%                  |                10 |              0.08906 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8989 | 5-10%                   |                 5 |              0.17978 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9189 | <5%                     |                10 |              0.09189 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9336 | 5-10%                   |                10 |              0.09336 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9346 | 5-10%                   |                10 |              0.09346 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.937  | >20%                    |                10 |              0.0937  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9442 | >20%                    |                 5 |              0.18884 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.945  | 5-10%                   |                10 |              0.0945  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9542 | 15-20%                  |                10 |              0.09542 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.96   | 5-10%                   |                10 |              0.096   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.961  | 15-20%                  |                 5 |              0.1922  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9694 | >20%                    |                 2 |              0.4847  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9774 | <5%                     |                10 |              0.09774 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9799 | 15-20%                  |                10 |              0.09799 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9912 | <5%                     |                10 |              0.09912 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9959 | >20%                    |                10 |              0.09959 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9995 | 15-20%                  |                10 |              0.09995 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0102 | >20%                    |                10 |              0.10102 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0222 | >20%                    |                10 |              0.10222 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0252 | 5-10%                   |                10 |              0.10252 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0409 | 15-20%                  |                10 |              0.10409 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0509 | >20%                    |                10 |              0.10509 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0513 | <5%                     |                10 |              0.10513 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0868 | 5-10%                   |                10 |              0.10868 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.089  | 15-20%                  |                10 |              0.1089  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1036 | >20%                    |                 2 |              0.5518  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1162 | >20%                    |                 5 |              0.22324 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1235 | >20%                    |                10 |              0.11235 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1308 | >20%                    |                10 |              0.11308 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1388 | >20%                    |                10 |              0.11388 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1426 | >20%                    |                10 |              0.11426 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1656 | >20%                    |                10 |              0.11656 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1948 | >20%                    |                 5 |              0.23896 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2041 | >20%                    |                10 |              0.12041 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.2483 | >20%                    |                 5 |              0.24966 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2519 | <5%                     |                 2 |              0.62595 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3074 | >20%                    |                 5 |              0.26148 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3321 | 15-20%                  |                 5 |              0.26642 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3532 | >20%                    |                 2 |              0.6766  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4009 | >20%                    |                10 |              0.14009 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4024 | 5-10%                   |                10 |              0.14024 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4094 | <5%                     |                10 |              0.14094 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4179 | >20%                    |                10 |              0.14179 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4669 | >20%                    |                 5 |              0.29338 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5124 | 5-10%                   |                 2 |              0.7562  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5543 | <5%                     |                 5 |              0.31086 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6511 | >20%                    |                10 |              0.16511 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8545 | 10-15%                  |                10 |              0.18545 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0746 | <5%                     |                10 |              0.20746 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1174 | 5-10%                   |                10 |              0.21174 |