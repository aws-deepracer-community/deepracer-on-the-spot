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

Data correct as of 2025-02-17 01:40:51.872195, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.111  | >20%                    |                 2 |              0.0555  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1392 | <5%                     |                 5 |              0.02784 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1905 | <5%                     |                 5 |              0.0381  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1909 | <5%                     |                 5 |              0.03818 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2161 | 5-10%                   |                 2 |              0.10805 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2175 | 10-15%                  |                 2 |              0.10875 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2215 | <5%                     |                 2 |              0.11075 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | >20%                    |                 2 |              0.1129  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | 15-20%                  |                 2 |              0.11825 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | 15-20%                  |                 2 |              0.11825 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.247  | >20%                    |                 2 |              0.1235  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | 5-10%                   |                 2 |              0.12725 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2549 | 15-20%                  |                 5 |              0.05098 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | 10-15%                  |                 2 |              0.1369  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | >20%                    |                 2 |              0.13735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.2772 | <5%                     |                10 |              0.02772 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2838 | 5-10%                   |                10 |              0.02838 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | <5%                     |                 2 |              0.1422  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | <5%                     |                 2 |              0.14245 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | 15-20%                  |                 2 |              0.14355 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2916 | 5-10%                   |                 2 |              0.1458  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.294  | <5%                     |                 2 |              0.147   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3028 | 5-10%                   |                 2 |              0.1514  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3029 | <5%                     |                 2 |              0.15145 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | 10-15%                  |                 2 |              0.157   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.325  | <5%                     |                 2 |              0.1625  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3267 | 10-15%                  |                 2 |              0.16335 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3291 | >20%                    |                 2 |              0.16455 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | >20%                    |                 2 |              0.16885 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3379 | 15-20%                  |                 5 |              0.06758 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3564 | >20%                    |                 5 |              0.07128 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3564 | 10-15%                  |                 2 |              0.1782  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3587 | <5%                     |                 5 |              0.07174 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3613 | <5%                     |                 2 |              0.18065 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3641 | 10-15%                  |                 5 |              0.07282 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.367  | 5-10%                   |                 2 |              0.1835  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3688 | >20%                    |                10 |              0.03688 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.372  | <5%                     |                10 |              0.0372  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3778 | 5-10%                   |                 2 |              0.1889  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.382  | 15-20%                  |                 2 |              0.191   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3838 | 5-10%                   |                10 |              0.03838 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3843 | 15-20%                  |                10 |              0.03843 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3894 | 5-10%                   |                 5 |              0.07788 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3908 | >20%                    |                 2 |              0.1954  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3999 | 5-10%                   |                 2 |              0.19995 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4035 | <5%                     |                 2 |              0.20175 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4089 | 10-15%                  |                 2 |              0.20445 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4175 | 5-10%                   |                 5 |              0.0835  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4223 | <5%                     |                 2 |              0.21115 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4293 | >20%                    |                 5 |              0.08586 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4326 | >20%                    |                10 |              0.04326 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | >20%                    |                 5 |              0.08716 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4413 | <5%                     |                 5 |              0.08826 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4495 | 5-10%                   |                 2 |              0.22475 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4506 | <5%                     |                 2 |              0.2253  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | >20%                    |                 5 |              0.09056 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.47   | >20%                    |                 2 |              0.235   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4752 | 15-20%                  |                 5 |              0.09504 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4804 | 5-10%                   |                 5 |              0.09608 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | 10-15%                  |                 5 |              0.09698 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4876 | >20%                    |                 2 |              0.2438  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4891 | <5%                     |                 5 |              0.09782 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4916 | 10-15%                  |                 5 |              0.09832 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4986 | >20%                    |                 5 |              0.09972 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5039 | 5-10%                   |                 5 |              0.10078 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | >20%                    |                 5 |              0.10106 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.51   | 5-10%                   |                 2 |              0.255   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.511  | >20%                    |                 5 |              0.1022  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5117 | <5%                     |                 5 |              0.10234 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5225 | >20%                    |                 2 |              0.26125 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5252 | 10-15%                  |                 5 |              0.10504 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5309 | >20%                    |                 2 |              0.26545 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5379 | <5%                     |                 2 |              0.26895 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5398 | 15-20%                  |                 2 |              0.2699  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5428 | >20%                    |                 2 |              0.2714  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5435 | >20%                    |                 2 |              0.27175 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5454 | >20%                    |                 2 |              0.2727  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5469 | >20%                    |                 5 |              0.10938 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5542 | 5-10%                   |                 5 |              0.11084 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5642 | >20%                    |                 2 |              0.2821  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5645 | >20%                    |                 5 |              0.1129  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5671 | <5%                     |                 5 |              0.11342 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5705 | 10-15%                  |                 5 |              0.1141  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5717 | 10-15%                  |                 2 |              0.28585 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5751 | >20%                    |                 5 |              0.11502 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5756 | <5%                     |                 5 |              0.11512 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.588  | 10-15%                  |                 5 |              0.1176  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5884 | 5-10%                   |                10 |              0.05884 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5885 | 10-15%                  |                 5 |              0.1177  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5911 | 5-10%                   |                10 |              0.05911 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.612  | 5-10%                   |                 5 |              0.1224  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6182 | <5%                     |                10 |              0.06182 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6301 | 5-10%                   |                 5 |              0.12602 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6358 | >20%                    |                10 |              0.06358 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6374 | <5%                     |                10 |              0.06374 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6437 | 10-15%                  |                 5 |              0.12874 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6518 | >20%                    |                 2 |              0.3259  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.664  | >20%                    |                 2 |              0.332   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6674 | >20%                    |                 5 |              0.13348 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6744 | >20%                    |                 5 |              0.13488 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6792 | >20%                    |                10 |              0.06792 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6936 | >20%                    |                10 |              0.06936 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6955 | 10-15%                  |                 5 |              0.1391  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7028 | >20%                    |                 5 |              0.14056 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7122 | 15-20%                  |                 5 |              0.14244 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7139 | >20%                    |                10 |              0.07139 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7293 | >20%                    |                 5 |              0.14586 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7294 | 5-10%                   |                10 |              0.07294 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7319 | >20%                    |                10 |              0.07319 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7456 | >20%                    |                 5 |              0.14912 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7616 | <5%                     |                 5 |              0.15232 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7746 | >20%                    |                 5 |              0.15492 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.777  | >20%                    |                 5 |              0.1554  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7834 | 15-20%                  |                10 |              0.07834 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7927 | <5%                     |                10 |              0.07927 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7934 | 15-20%                  |                10 |              0.07934 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.794  | <5%                     |                 5 |              0.1588  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8079 | 5-10%                   |                10 |              0.08079 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8118 | >20%                    |                10 |              0.08118 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8139 | >20%                    |                10 |              0.08139 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8188 | 5-10%                   |                 2 |              0.4094  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8229 | 15-20%                  |                 2 |              0.41145 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8239 | >20%                    |                10 |              0.08239 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8261 | <5%                     |                10 |              0.08261 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8268 | 10-15%                  |                10 |              0.08268 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8278 | 5-10%                   |                 5 |              0.16556 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8321 | >20%                    |                10 |              0.08321 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8444 | <5%                     |                10 |              0.08444 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8452 | 15-20%                  |                10 |              0.08452 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.847  | <5%                     |                10 |              0.0847  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8513 | 10-15%                  |                10 |              0.08513 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8562 | 10-15%                  |                10 |              0.08562 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8811 | 15-20%                  |                 5 |              0.17622 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8903 | 15-20%                  |                10 |              0.08903 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8939 | <5%                     |                10 |              0.08939 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8964 | >20%                    |                 2 |              0.4482  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9106 | >20%                    |                10 |              0.09106 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9127 | <5%                     |                10 |              0.09127 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9302 | <5%                     |                10 |              0.09302 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9332 | 15-20%                  |                 5 |              0.18664 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9629 | <5%                     |                10 |              0.09629 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.976  | 10-15%                  |                10 |              0.0976  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9802 | 10-15%                  |                10 |              0.09802 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9945 | >20%                    |                10 |              0.09945 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.998  | >20%                    |                10 |              0.0998  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0603 | <5%                     |                10 |              0.10603 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0978 | 15-20%                  |                10 |              0.10978 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1224 | >20%                    |                 2 |              0.5612  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1227 | <5%                     |                10 |              0.11227 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1329 | 15-20%                  |                10 |              0.11329 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1486 | >20%                    |                10 |              0.11486 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1584 | 5-10%                   |                10 |              0.11584 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1652 | >20%                    |                 2 |              0.5826  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1921 | >20%                    |                 5 |              0.23842 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2024 | 10-15%                  |                 2 |              0.6012  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2445 | 10-15%                  |                 5 |              0.2489  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2505 | >20%                    |                 5 |              0.2501  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3303 | >20%                    |                10 |              0.13303 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3656 | >20%                    |                10 |              0.13656 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4017 | >20%                    |                10 |              0.14017 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7038 | >20%                    |                10 |              0.17038 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7717 | >20%                    |                10 |              0.17717 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0207 | 5-10%                   |                10 |              0.20207 |