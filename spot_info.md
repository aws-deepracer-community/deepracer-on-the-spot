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

Data correct as of 2025-10-28 01:47:45.271013, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1061 | 5-10%                   |                 2 |              0.05305 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1579 | >20%                    |                 5 |              0.03158 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1908 | >20%                    |                 2 |              0.0954  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2046 | 10-15%                  |                 2 |              0.1023  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2254 | >20%                    |                 5 |              0.04508 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2379 | >20%                    |                 5 |              0.04758 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | >20%                    |                 2 |              0.12255 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2508 | 10-15%                  |                 2 |              0.1254  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | >20%                    |                 2 |              0.1307  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2625 | 5-10%                   |                 2 |              0.13125 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | 10-15%                  |                 2 |              0.1346  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2769 | >20%                    |                 2 |              0.13845 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2802 | 5-10%                   |                 2 |              0.1401  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.283  | >20%                    |                 2 |              0.1415  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2946 | 15-20%                  |                 2 |              0.1473  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2972 | >20%                    |                 5 |              0.05944 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3308 | 15-20%                  |                 2 |              0.1654  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3337 | >20%                    |                 2 |              0.16685 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3392 | >20%                    |                 2 |              0.1696  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3411 | >20%                    |                 2 |              0.17055 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3448 | >20%                    |                 2 |              0.1724  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3594 | >20%                    |                 5 |              0.07188 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.369  | <5%                     |                10 |              0.0369  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3721 | 10-15%                  |                 2 |              0.18605 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3747 | >20%                    |                 5 |              0.07494 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.383  | >20%                    |                 2 |              0.1915  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3836 | 15-20%                  |                 2 |              0.1918  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3853 | >20%                    |                10 |              0.03853 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3909 | >20%                    |                 2 |              0.19545 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3946 | >20%                    |                 2 |              0.1973  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4042 | >20%                    |                 2 |              0.2021  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.406  | 15-20%                  |                 2 |              0.203   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4062 | >20%                    |                 2 |              0.2031  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4184 | >20%                    |                 2 |              0.2092  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | >20%                    |                 5 |              0.08436 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4273 | 5-10%                   |                 2 |              0.21365 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4286 | 5-10%                   |                 5 |              0.08572 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.429  | <5%                     |                 2 |              0.2145  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.438  | >20%                    |                 5 |              0.0876  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | >20%                    |                 2 |              0.22155 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4438 | 5-10%                   |                 2 |              0.2219  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4438 | >20%                    |                 2 |              0.2219  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.447  | 5-10%                   |                10 |              0.0447  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | >20%                    |                 5 |              0.09012 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4585 | >20%                    |                 5 |              0.0917  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4612 | >20%                    |                 2 |              0.2306  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4618 | >20%                    |                 5 |              0.09236 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4677 | >20%                    |                 5 |              0.09354 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4699 | >20%                    |                 5 |              0.09398 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4699 | >20%                    |                 2 |              0.23495 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | >20%                    |                 5 |              0.09624 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4832 | >20%                    |                 2 |              0.2416  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | >20%                    |                 5 |              0.09674 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4858 | >20%                    |                 2 |              0.2429  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | 10-15%                  |                 2 |              0.24295 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4918 | 10-15%                  |                 2 |              0.2459  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4938 | >20%                    |                 5 |              0.09876 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4947 | >20%                    |                10 |              0.04947 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4956 | >20%                    |                 2 |              0.2478  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4971 | 15-20%                  |                 5 |              0.09942 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5086 | >20%                    |                 2 |              0.2543  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5221 | 15-20%                  |                10 |              0.05221 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5263 | >20%                    |                 5 |              0.10526 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5349 | >20%                    |                 5 |              0.10698 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5428 | 15-20%                  |                 5 |              0.10856 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5439 | 5-10%                   |                 2 |              0.27195 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5504 | >20%                    |                 2 |              0.2752  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.551  | >20%                    |                 5 |              0.1102  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5593 | >20%                    |                 2 |              0.27965 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5643 | >20%                    |                 5 |              0.11286 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5754 | >20%                    |                 5 |              0.11508 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5763 | >20%                    |                 5 |              0.11526 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5784 | 10-15%                  |                 5 |              0.11568 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5804 | 15-20%                  |                 2 |              0.2902  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5857 | >20%                    |                 5 |              0.11714 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.593  | >20%                    |                 5 |              0.1186  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5933 | >20%                    |                 5 |              0.11866 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6106 | >20%                    |                 5 |              0.12212 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6263 | >20%                    |                 5 |              0.12526 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6266 | 10-15%                  |                 5 |              0.12532 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6337 | >20%                    |                 5 |              0.12674 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6434 | >20%                    |                 5 |              0.12868 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6438 | 10-15%                  |                 5 |              0.12876 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6448 | 15-20%                  |                 2 |              0.3224  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6564 | >20%                    |                 5 |              0.13128 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6573 | 15-20%                  |                 5 |              0.13146 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6584 | >20%                    |                10 |              0.06584 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6606 | >20%                    |                 5 |              0.13212 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6698 | >20%                    |                 2 |              0.3349  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6738 | >20%                    |                 2 |              0.3369  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6754 | >20%                    |                 5 |              0.13508 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6884 | >20%                    |                 5 |              0.13768 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6963 | 15-20%                  |                10 |              0.06963 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6995 | >20%                    |                10 |              0.06995 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7017 | 15-20%                  |                10 |              0.07017 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.703  | 10-15%                  |                 2 |              0.3515  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | >20%                    |                 5 |              0.14076 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.704  | <5%                     |                10 |              0.0704  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7047 | >20%                    |                 5 |              0.14094 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7074 | >20%                    |                 5 |              0.14148 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7083 | >20%                    |                 5 |              0.14166 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7185 | 15-20%                  |                10 |              0.07185 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7204 | >20%                    |                10 |              0.07204 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7208 | >20%                    |                10 |              0.07208 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7267 | 15-20%                  |                 5 |              0.14534 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7288 | 15-20%                  |                10 |              0.07288 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7302 | >20%                    |                 2 |              0.3651  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7432 | >20%                    |                10 |              0.07432 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7611 | >20%                    |                10 |              0.07611 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7621 | >20%                    |                10 |              0.07621 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7642 | >20%                    |                 5 |              0.15284 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7687 | 15-20%                  |                10 |              0.07687 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7825 | >20%                    |                 5 |              0.1565  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7827 | >20%                    |                10 |              0.07827 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8143 | 15-20%                  |                 5 |              0.16286 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8282 | >20%                    |                10 |              0.08282 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8301 | 10-15%                  |                 5 |              0.16602 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8315 | <5%                     |                10 |              0.08315 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8321 | >20%                    |                10 |              0.08321 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8415 | >20%                    |                 5 |              0.1683  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8418 | <5%                     |                10 |              0.08418 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8448 | 15-20%                  |                10 |              0.08448 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8556 | 15-20%                  |                10 |              0.08556 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8598 | >20%                    |                10 |              0.08598 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.863  | 5-10%                   |                10 |              0.0863  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8654 | 10-15%                  |                 2 |              0.4327  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.878  | >20%                    |                 5 |              0.1756  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8946 | >20%                    |                10 |              0.08946 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8956 | >20%                    |                 5 |              0.17912 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9166 | 15-20%                  |                10 |              0.09166 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9231 | >20%                    |                10 |              0.09231 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9247 | >20%                    |                 2 |              0.46235 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9356 | 10-15%                  |                10 |              0.09356 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9508 | 10-15%                  |                10 |              0.09508 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9536 | 10-15%                  |                10 |              0.09536 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9617 | 15-20%                  |                10 |              0.09617 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9632 | >20%                    |                 2 |              0.4816  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9712 | >20%                    |                10 |              0.09712 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9992 | >20%                    |                 2 |              0.4996  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0151 | >20%                    |                10 |              0.10151 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0155 | 5-10%                   |                10 |              0.10155 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0437 | >20%                    |                10 |              0.10437 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0686 | >20%                    |                10 |              0.10686 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0698 | >20%                    |                 5 |              0.21396 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.076  | >20%                    |                10 |              0.1076  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0837 | 10-15%                  |                 2 |              0.54185 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0946 | 15-20%                  |                10 |              0.10946 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1165 | >20%                    |                10 |              0.11165 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1189 | >20%                    |                 5 |              0.22378 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1196 | 15-20%                  |                10 |              0.11196 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1286 | 5-10%                   |                10 |              0.11286 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1416 | >20%                    |                 5 |              0.22832 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1463 | 10-15%                  |                10 |              0.11463 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1575 | 5-10%                   |                10 |              0.11575 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1721 | <5%                     |                10 |              0.11721 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2183 | >20%                    |                 5 |              0.24366 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2505 | 10-15%                  |                10 |              0.12505 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2903 | 5-10%                   |                 2 |              0.64515 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3657 | >20%                    |                10 |              0.13657 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3676 | >20%                    |                10 |              0.13676 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3826 | 10-15%                  |                 5 |              0.27652 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5956 | >20%                    |                10 |              0.15956 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.6029 | >20%                    |                10 |              0.16029 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6572 | 10-15%                  |                 5 |              0.33144 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6692 | >20%                    |                10 |              0.16692 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7518 | >20%                    |                10 |              0.17518 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.094  | 10-15%                  |                10 |              0.2094  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4212 | 15-20%                  |                10 |              0.24212 |