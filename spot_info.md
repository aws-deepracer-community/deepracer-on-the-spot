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

Data correct as of 2025-01-05 01:43:50.722220, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1546 | 15-20%                  |                 2 |              0.0773  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2053 |                         |                 2 |              0.10265 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | <5%                     |                 2 |              0.103   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2247 | >20%                    |                 2 |              0.11235 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2402 | 5-10%                   |                 2 |              0.1201  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2429 |                         |                 2 |              0.12145 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | 5-10%                   |                 2 |              0.12195 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2468 | 15-20%                  |                 2 |              0.1234  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2505 | <5%                     |                 5 |              0.0501  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2517 | 15-20%                  |                 2 |              0.12585 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | 15-20%                  |                 2 |              0.1275  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2766 |                         |                 5 |              0.05532 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | >20%                    |                 2 |              0.13955 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2848 | <5%                     |                 2 |              0.1424  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2892 | <5%                     |                 2 |              0.1446  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 5-10%                   |                 2 |              0.1477  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3068 | 5-10%                   |                 2 |              0.1534  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3073 | >20%                    |                10 |              0.03073 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | 5-10%                   |                 2 |              0.1567  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3214 |                         |                 5 |              0.06428 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3225 | <5%                     |                 2 |              0.16125 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3404 | <5%                     |                 5 |              0.06808 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3448 | 15-20%                  |                 5 |              0.06896 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3453 | <5%                     |                 2 |              0.17265 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3454 | >20%                    |                 5 |              0.06908 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3502 |                         |                10 |              0.03502 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3667 | 10-15%                  |                 2 |              0.18335 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3689 | 5-10%                   |                10 |              0.03689 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.369  | 10-15%                  |                 2 |              0.1845  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.374  | >20%                    |                 2 |              0.187   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3764 | >20%                    |                 2 |              0.1882  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3795 | >20%                    |                 2 |              0.18975 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3814 | <5%                     |                 5 |              0.07628 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | <5%                     |                 5 |              0.07652 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3932 | >20%                    |                 2 |              0.1966  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | 10-15%                  |                 2 |              0.19715 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3949 | 10-15%                  |                 2 |              0.19745 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3953 | >20%                    |                 5 |              0.07906 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3974 | >20%                    |                 2 |              0.1987  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4075 | 5-10%                   |                 2 |              0.20375 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4084 | 5-10%                   |                 2 |              0.2042  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | <5%                     |                 2 |              0.2126  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4309 | 10-15%                  |                 2 |              0.21545 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4332 | 5-10%                   |                 2 |              0.2166  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4357 | 10-15%                  |                10 |              0.04357 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.436  | 5-10%                   |                 5 |              0.0872  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.436  | <5%                     |                 5 |              0.0872  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4386 |                         |                10 |              0.04386 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4438 | 5-10%                   |                 2 |              0.2219  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | 10-15%                  |                 5 |              0.09248 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | 15-20%                  |                 5 |              0.09442 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4725 | >20%                    |                 5 |              0.0945  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4738 | 10-15%                  |                 5 |              0.09476 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4741 | 5-10%                   |                 2 |              0.23705 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | <5%                     |                 5 |              0.09486 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4795 | >20%                    |                 5 |              0.0959  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4812 | 10-15%                  |                 2 |              0.2406  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | <5%                     |                 5 |              0.09718 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4869 | 5-10%                   |                 5 |              0.09738 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4936 | <5%                     |                 2 |              0.2468  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4969 | >20%                    |                 5 |              0.09938 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4998 | <5%                     |                 5 |              0.09996 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5017 | 10-15%                  |                 2 |              0.25085 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.505  | 15-20%                  |                 2 |              0.2525  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5084 | 15-20%                  |                 2 |              0.2542  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5184 | >20%                    |                 5 |              0.10368 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5204 | <5%                     |                 5 |              0.10408 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | >20%                    |                 5 |              0.10424 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5271 | 5-10%                   |                 5 |              0.10542 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5319 | <5%                     |                 5 |              0.10638 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5343 | >20%                    |                 5 |              0.10686 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5366 | 5-10%                   |                10 |              0.05366 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5382 | 10-15%                  |                 5 |              0.10764 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5452 | 15-20%                  |                10 |              0.05452 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5463 | 5-10%                   |                 5 |              0.10926 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.548  | 5-10%                   |                 5 |              0.1096  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5646 | 5-10%                   |                 5 |              0.11292 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5691 | >20%                    |                 2 |              0.28455 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5812 | <5%                     |                 5 |              0.11624 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | 15-20%                  |                 5 |              0.11644 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5904 | >20%                    |                 5 |              0.11808 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5926 | >20%                    |                 2 |              0.2963  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5957 | >20%                    |                 5 |              0.11914 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6318 | 5-10%                   |                10 |              0.06318 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6498 | >20%                    |                 5 |              0.12996 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.659  | >20%                    |                10 |              0.0659  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6627 | <5%                     |                 5 |              0.13254 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.685  | >20%                    |                 2 |              0.3425  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6936 | 15-20%                  |                 2 |              0.3468  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7085 | 10-15%                  |                10 |              0.07085 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7114 | 10-15%                  |                10 |              0.07114 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7115 | 15-20%                  |                 5 |              0.1423  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7146 | 15-20%                  |                 5 |              0.14292 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7255 | >20%                    |                10 |              0.07255 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7289 | 5-10%                   |                 5 |              0.14578 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7302 | >20%                    |                10 |              0.07302 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7416 | <5%                     |                 2 |              0.3708  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7417 | 5-10%                   |                10 |              0.07417 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7437 | <5%                     |                 2 |              0.37185 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7529 | <5%                     |                10 |              0.07529 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.753  | >20%                    |                10 |              0.0753  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7709 | >20%                    |                 5 |              0.15418 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7713 | 5-10%                   |                10 |              0.07713 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8061 | >20%                    |                 5 |              0.16122 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8067 | >20%                    |                 5 |              0.16134 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8138 | 5-10%                   |                10 |              0.08138 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8289 | 15-20%                  |                10 |              0.08289 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8334 | 5-10%                   |                10 |              0.08334 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.837  | 10-15%                  |                10 |              0.0837  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8412 | 15-20%                  |                10 |              0.08412 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8416 | <5%                     |                10 |              0.08416 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8442 | <5%                     |                10 |              0.08442 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8482 | >20%                    |                10 |              0.08482 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8673 | 10-15%                  |                10 |              0.08673 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.868  | 10-15%                  |                10 |              0.0868  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8684 | 5-10%                   |                10 |              0.08684 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8731 | 10-15%                  |                10 |              0.08731 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8764 | >20%                    |                10 |              0.08764 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8885 | 5-10%                   |                10 |              0.08885 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.932  | <5%                     |                10 |              0.0932  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9342 | 15-20%                  |                10 |              0.09342 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.94   | >20%                    |                10 |              0.094   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9498 | <5%                     |                 2 |              0.4749  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9508 | <5%                     |                 5 |              0.19016 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9526 | 5-10%                   |                 5 |              0.19052 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9719 | >20%                    |                10 |              0.09719 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9775 | 5-10%                   |                 5 |              0.1955  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0113 | 15-20%                  |                10 |              0.10113 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0141 | <5%                     |                 5 |              0.20282 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0262 | 5-10%                   |                10 |              0.10262 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0273 | 10-15%                  |                 2 |              0.51365 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.032  | <5%                     |                10 |              0.1032  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0493 | <5%                     |                10 |              0.10493 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1039 | >20%                    |                10 |              0.11039 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1476 | >20%                    |                10 |              0.11476 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3425 | 5-10%                   |                10 |              0.13425 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3468 | >20%                    |                10 |              0.13468 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4357 | <5%                     |                10 |              0.14357 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5048 | 5-10%                   |                10 |              0.15048 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5244 | 5-10%                   |                 5 |              0.30488 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5351 | <5%                     |                10 |              0.15351 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1662 | 10-15%                  |                10 |              0.21662 |