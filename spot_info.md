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

Data correct as of 2025-05-23 01:53:03.461313, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1671 | >20%                    |                 2 |              0.08355 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1949 | 5-10%                   |                 5 |              0.03898 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2182 | >20%                    |                 2 |              0.1091  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2199 | >20%                    |                 2 |              0.10995 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | >20%                    |                 2 |              0.1108  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | >20%                    |                 2 |              0.116   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2321 | >20%                    |                 5 |              0.04642 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2444 | 10-15%                  |                 2 |              0.1222  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | 5-10%                   |                 2 |              0.12305 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | 15-20%                  |                 2 |              0.1253  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | <5%                     |                 2 |              0.1277  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | >20%                    |                 2 |              0.12865 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | 15-20%                  |                 2 |              0.13335 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2672 | >20%                    |                 2 |              0.1336  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2707 | 10-15%                  |                 2 |              0.13535 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.285  | >20%                    |                 2 |              0.1425  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | 15-20%                  |                 2 |              0.14445 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2949 | <5%                     |                 2 |              0.14745 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2956 | >20%                    |                10 |              0.02956 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2983 | >20%                    |                 2 |              0.14915 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3081 | 15-20%                  |                 2 |              0.15405 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.311  | >20%                    |                10 |              0.0311  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | 15-20%                  |                 2 |              0.15695 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3172 | 15-20%                  |                 2 |              0.1586  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3181 | >20%                    |                 5 |              0.06362 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3279 | >20%                    |                 5 |              0.06558 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3304 | >20%                    |                10 |              0.03304 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3315 | 15-20%                  |                 5 |              0.0663  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3345 | >20%                    |                 2 |              0.16725 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.335  | 10-15%                  |                 5 |              0.067   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3378 | >20%                    |                10 |              0.03378 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.338  | >20%                    |                 2 |              0.169   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3442 | 10-15%                  |                 5 |              0.06884 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3472 | 15-20%                  |                 2 |              0.1736  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3544 | >20%                    |                 5 |              0.07088 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3592 | >20%                    |                 2 |              0.1796  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.364  | >20%                    |                 2 |              0.182   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3676 | >20%                    |                 5 |              0.07352 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3681 | 5-10%                   |                 2 |              0.18405 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3696 | 5-10%                   |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.371  | >20%                    |                 5 |              0.0742  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3788 | 15-20%                  |                 2 |              0.1894  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3872 | >20%                    |                10 |              0.03872 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3894 | >20%                    |                 2 |              0.1947  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3929 | >20%                    |                 2 |              0.19645 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3931 | 15-20%                  |                 2 |              0.19655 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3949 | <5%                     |                 2 |              0.19745 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4076 | >20%                    |                 5 |              0.08152 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4109 | 10-15%                  |                 2 |              0.20545 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4122 | <5%                     |                 5 |              0.08244 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | 15-20%                  |                10 |              0.04161 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4203 | <5%                     |                 5 |              0.08406 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4307 | 5-10%                   |                 5 |              0.08614 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4381 | 15-20%                  |                 5 |              0.08762 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4392 | >20%                    |                 2 |              0.2196  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4503 | <5%                     |                 2 |              0.22515 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.454  | 15-20%                  |                 5 |              0.0908  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4547 | >20%                    |                 2 |              0.22735 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | 15-20%                  |                 5 |              0.09126 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4589 | >20%                    |                 2 |              0.22945 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | >20%                    |                 5 |              0.0921  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4613 | >20%                    |                 2 |              0.23065 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4632 | 15-20%                  |                10 |              0.04632 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4666 | >20%                    |                10 |              0.04666 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.467  | >20%                    |                 5 |              0.0934  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4717 | >20%                    |                 2 |              0.23585 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4735 | >20%                    |                10 |              0.04735 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4742 | >20%                    |                 2 |              0.2371  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 10-15%                  |                 5 |              0.09494 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4751 | >20%                    |                 5 |              0.09502 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4754 | 15-20%                  |                 5 |              0.09508 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4822 | >20%                    |                 5 |              0.09644 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4846 | >20%                    |                 5 |              0.09692 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4863 | >20%                    |                 5 |              0.09726 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4894 | >20%                    |                 2 |              0.2447  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4996 | <5%                     |                 5 |              0.09992 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5003 | 15-20%                  |                10 |              0.05003 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5051 | 15-20%                  |                 2 |              0.25255 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5082 | 15-20%                  |                 5 |              0.10164 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5164 | >20%                    |                 2 |              0.2582  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5183 | >20%                    |                 2 |              0.25915 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5218 | 10-15%                  |                 5 |              0.10436 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5283 | >20%                    |                 5 |              0.10566 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5422 | >20%                    |                10 |              0.05422 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5439 | 5-10%                   |                 5 |              0.10878 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.546  | >20%                    |                 5 |              0.1092  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5461 | 10-15%                  |                 2 |              0.27305 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.56   | >20%                    |                 5 |              0.112   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5618 | >20%                    |                 5 |              0.11236 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5658 | <5%                     |                 5 |              0.11316 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5678 | >20%                    |                 5 |              0.11356 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5704 | >20%                    |                 2 |              0.2852  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5724 | >20%                    |                 2 |              0.2862  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5733 | 5-10%                   |                 5 |              0.11466 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5809 | >20%                    |                 5 |              0.11618 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5828 | >20%                    |                 5 |              0.11656 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5925 | 10-15%                  |                10 |              0.05925 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5931 | 10-15%                  |                 2 |              0.29655 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6043 | 5-10%                   |                10 |              0.06043 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6095 | 10-15%                  |                10 |              0.06095 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6141 | 10-15%                  |                 5 |              0.12282 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6145 | >20%                    |                 2 |              0.30725 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6163 | 5-10%                   |                 2 |              0.30815 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6188 | 5-10%                   |                 2 |              0.3094  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6619 | 15-20%                  |                 5 |              0.13238 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6657 | >20%                    |                10 |              0.06657 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6657 | >20%                    |                 2 |              0.33285 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6676 | >20%                    |                 2 |              0.3338  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6777 | >20%                    |                 5 |              0.13554 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6868 | 10-15%                  |                 5 |              0.13736 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6986 | 10-15%                  |                 5 |              0.13972 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | <5%                     |                 5 |              0.14076 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7096 | >20%                    |                10 |              0.07096 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.71   | <5%                     |                10 |              0.071   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.71   | >20%                    |                10 |              0.071   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7244 | >20%                    |                 5 |              0.14488 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7257 | <5%                     |                10 |              0.07257 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7285 | <5%                     |                10 |              0.07285 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7306 | >20%                    |                 5 |              0.14612 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7426 | >20%                    |                10 |              0.07426 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7443 | >20%                    |                 5 |              0.14886 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7471 | 10-15%                  |                10 |              0.07471 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.767  | 10-15%                  |                10 |              0.0767  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7866 | >20%                    |                10 |              0.07866 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7887 | <5%                     |                 5 |              0.15774 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7975 | >20%                    |                 5 |              0.1595  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7995 | >20%                    |                10 |              0.07995 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8092 | 5-10%                   |                10 |              0.08092 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8143 | 10-15%                  |                 5 |              0.16286 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.817  | >20%                    |                10 |              0.0817  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8236 | 15-20%                  |                10 |              0.08236 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8267 | 15-20%                  |                10 |              0.08267 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8558 | >20%                    |                10 |              0.08558 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8687 | >20%                    |                10 |              0.08687 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8785 | <5%                     |                10 |              0.08785 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8826 | >20%                    |                10 |              0.08826 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9    | >20%                    |                10 |              0.09    |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9127 | >20%                    |                10 |              0.09127 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9166 | 5-10%                   |                 2 |              0.4583  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9206 | >20%                    |                10 |              0.09206 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9272 | >20%                    |                 5 |              0.18544 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9391 | >20%                    |                 2 |              0.46955 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9434 | >20%                    |                 2 |              0.4717  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9449 | 10-15%                  |                 5 |              0.18898 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9464 | >20%                    |                10 |              0.09464 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9536 | >20%                    |                10 |              0.09536 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9573 | >20%                    |                10 |              0.09573 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9665 | <5%                     |                10 |              0.09665 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0122 | 10-15%                  |                 5 |              0.20244 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0283 | >20%                    |                 2 |              0.51415 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0344 | >20%                    |                 5 |              0.20688 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0404 | 15-20%                  |                10 |              0.10404 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0494 | 15-20%                  |                10 |              0.10494 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0621 | >20%                    |                10 |              0.10621 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0869 | <5%                     |                10 |              0.10869 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1184 | 5-10%                   |                10 |              0.11184 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1383 | <5%                     |                 2 |              0.56915 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1421 | >20%                    |                 5 |              0.22842 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.164  | 5-10%                   |                10 |              0.1164  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.193  | 15-20%                  |                10 |              0.1193  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2249 | 10-15%                  |                10 |              0.12249 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2455 | 15-20%                  |                10 |              0.12455 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2788 | >20%                    |                10 |              0.12788 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3309 | >20%                    |                10 |              0.13309 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3639 | <5%                     |                 5 |              0.27278 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3821 | >20%                    |                 5 |              0.27642 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.39   | >20%                    |                 2 |              0.695   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4382 | 10-15%                  |                10 |              0.14382 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4812 | >20%                    |                10 |              0.14812 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5008 | >20%                    |                10 |              0.15008 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9575 | <5%                     |                10 |              0.19575 |