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

Data correct as of 2025-10-02 01:42:26.845483, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1906 | >20%                    |                 2 |              0.0953  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1981 | >20%                    |                 2 |              0.09905 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2122 | 10-15%                  |                 2 |              0.1061  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2366 | 10-15%                  |                 5 |              0.04732 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2368 | 5-10%                   |                 2 |              0.1184  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | >20%                    |                 2 |              0.1209  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2543 | >20%                    |                 5 |              0.05086 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2572 | >20%                    |                 2 |              0.1286  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2695 | >20%                    |                 5 |              0.0539  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | >20%                    |                 2 |              0.13545 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2884 | >20%                    |                 2 |              0.1442  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2952 | >20%                    |                 2 |              0.1476  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2985 | 10-15%                  |                 2 |              0.14925 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2997 | 5-10%                   |                 2 |              0.14985 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | 15-20%                  |                 2 |              0.16095 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3273 | 10-15%                  |                 2 |              0.16365 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3324 | >20%                    |                 2 |              0.1662  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.333  | >20%                    |                 2 |              0.1665  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3506 | >20%                    |                 2 |              0.1753  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3585 | >20%                    |                10 |              0.03585 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3589 | >20%                    |                 5 |              0.07178 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.36   | 15-20%                  |                 2 |              0.18    |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3626 | 15-20%                  |                 2 |              0.1813  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3672 | >20%                    |                 2 |              0.1836  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3735 | >20%                    |                 2 |              0.18675 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3766 | >20%                    |                 2 |              0.1883  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3768 | 5-10%                   |                 2 |              0.1884  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3775 | >20%                    |                 5 |              0.0755  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3872 | >20%                    |                 2 |              0.1936  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3989 | >20%                    |                 2 |              0.19945 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4014 | >20%                    |                 2 |              0.2007  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4029 | >20%                    |                 5 |              0.08058 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | >20%                    |                 5 |              0.0809  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4046 | >20%                    |                10 |              0.04046 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4159 | >20%                    |                 5 |              0.08318 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4169 | >20%                    |                 2 |              0.20845 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.422  | >20%                    |                 5 |              0.0844  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | 5-10%                   |                 2 |              0.2132  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4305 | <5%                     |                 2 |              0.21525 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.431  | >20%                    |                 2 |              0.2155  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4319 | 15-20%                  |                 2 |              0.21595 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4322 | 10-15%                  |                 5 |              0.08644 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4326 | >20%                    |                10 |              0.04326 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4336 | >20%                    |                 2 |              0.2168  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.435  | >20%                    |                 5 |              0.087   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4456 | 15-20%                  |                 5 |              0.08912 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4469 | >20%                    |                 5 |              0.08938 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4528 | >20%                    |                 2 |              0.2264  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4623 | 10-15%                  |                 2 |              0.23115 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4758 | >20%                    |                 5 |              0.09516 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4858 | 10-15%                  |                 2 |              0.2429  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4872 | >20%                    |                 5 |              0.09744 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4883 | >20%                    |                 2 |              0.24415 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.498  | >20%                    |                 5 |              0.0996  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5019 | >20%                    |                 2 |              0.25095 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5042 | <5%                     |                10 |              0.05042 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5099 | >20%                    |                 5 |              0.10198 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5106 | >20%                    |                 5 |              0.10212 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5114 | >20%                    |                 2 |              0.2557  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5149 | >20%                    |                 5 |              0.10298 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5336 | >20%                    |                 2 |              0.2668  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5479 | 10-15%                  |                 2 |              0.27395 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5496 | 5-10%                   |                 2 |              0.2748  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5535 | >20%                    |                 5 |              0.1107  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.556  | >20%                    |                 2 |              0.278   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5589 | >20%                    |                 5 |              0.11178 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5699 | >20%                    |                 5 |              0.11398 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5796 | 15-20%                  |                10 |              0.05796 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5828 | >20%                    |                 2 |              0.2914  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5854 | >20%                    |                 5 |              0.11708 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5875 | >20%                    |                 5 |              0.1175  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5878 | >20%                    |                 2 |              0.2939  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5916 | 15-20%                  |                 2 |              0.2958  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5993 | >20%                    |                10 |              0.05993 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6066 | >20%                    |                 5 |              0.12132 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6091 | >20%                    |                 2 |              0.30455 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6158 | >20%                    |                 5 |              0.12316 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6175 | 10-15%                  |                 5 |              0.1235  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6216 | 10-15%                  |                 5 |              0.12432 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6294 | 15-20%                  |                 5 |              0.12588 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6342 | >20%                    |                 5 |              0.12684 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6351 | >20%                    |                 5 |              0.12702 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6431 | 15-20%                  |                 2 |              0.32155 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6511 | >20%                    |                 5 |              0.13022 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6529 | >20%                    |                 5 |              0.13058 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6558 | >20%                    |                 5 |              0.13116 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6634 | 15-20%                  |                10 |              0.06634 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6704 | >20%                    |                 5 |              0.13408 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6719 | >20%                    |                10 |              0.06719 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6753 | >20%                    |                 5 |              0.13506 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.678  | >20%                    |                 5 |              0.1356  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6807 | >20%                    |                 5 |              0.13614 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6809 | >20%                    |                 5 |              0.13618 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6823 | >20%                    |                 5 |              0.13646 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6866 | 5-10%                   |                10 |              0.06866 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6913 | >20%                    |                10 |              0.06913 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6927 | >20%                    |                 2 |              0.34635 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7065 | >20%                    |                 2 |              0.35325 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7123 | >20%                    |                 5 |              0.14246 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7132 | 15-20%                  |                10 |              0.07132 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.716  | 15-20%                  |                 5 |              0.1432  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7162 | 15-20%                  |                 5 |              0.14324 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7235 | >20%                    |                 5 |              0.1447  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.748  | >20%                    |                10 |              0.0748  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7518 | 10-15%                  |                 2 |              0.3759  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7532 | 15-20%                  |                10 |              0.07532 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7534 | >20%                    |                 5 |              0.15068 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7656 | 15-20%                  |                10 |              0.07656 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7729 | >20%                    |                10 |              0.07729 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7788 | >20%                    |                10 |              0.07788 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8044 | >20%                    |                10 |              0.08044 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8172 | >20%                    |                 5 |              0.16344 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8204 | >20%                    |                10 |              0.08204 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8238 | 15-20%                  |                 5 |              0.16476 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8282 | >20%                    |                 5 |              0.16564 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8325 | >20%                    |                10 |              0.08325 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8402 | 15-20%                  |                10 |              0.08402 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8498 | <5%                     |                10 |              0.08498 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8651 | 10-15%                  |                 2 |              0.43255 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8673 | >20%                    |                 5 |              0.17346 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8772 | 15-20%                  |                10 |              0.08772 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8824 | >20%                    |                10 |              0.08824 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8848 | <5%                     |                10 |              0.08848 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8852 | >20%                    |                10 |              0.08852 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8852 | 10-15%                  |                 5 |              0.17704 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9014 | 15-20%                  |                10 |              0.09014 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.903  | 10-15%                  |                10 |              0.0903  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9032 | >20%                    |                10 |              0.09032 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9074 | <5%                     |                10 |              0.09074 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9101 | 10-15%                  |                10 |              0.09101 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9263 | 5-10%                   |                10 |              0.09263 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9604 | 15-20%                  |                10 |              0.09604 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9758 | >20%                    |                 5 |              0.19516 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9824 | 15-20%                  |                10 |              0.09824 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9829 | 10-15%                  |                10 |              0.09829 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0009 | >20%                    |                10 |              0.10009 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0175 | >20%                    |                 2 |              0.50875 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0331 | >20%                    |                 2 |              0.51655 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0401 | 5-10%                   |                10 |              0.10401 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0496 | >20%                    |                 2 |              0.5248  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0669 | >20%                    |                 5 |              0.21338 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0683 | >20%                    |                10 |              0.10683 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0686 | >20%                    |                10 |              0.10686 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0805 | 15-20%                  |                10 |              0.10805 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0826 | 10-15%                  |                 2 |              0.5413  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1009 | >20%                    |                 5 |              0.22018 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1123 | 5-10%                   |                10 |              0.11123 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1179 | >20%                    |                 5 |              0.22358 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.12   | >20%                    |                10 |              0.112   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1208 | >20%                    |                10 |              0.11208 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1389 | 5-10%                   |                10 |              0.11389 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1397 | <5%                     |                10 |              0.11397 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1609 | >20%                    |                 5 |              0.23218 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.185  | 10-15%                  |                10 |              0.1185  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2207 | 15-20%                  |                10 |              0.12207 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2473 | 5-10%                   |                 2 |              0.62365 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2855 | 10-15%                  |                10 |              0.12855 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2947 | >20%                    |                10 |              0.12947 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3131 | >20%                    |                10 |              0.13131 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3446 | 10-15%                  |                 5 |              0.26892 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5468 | >20%                    |                10 |              0.15468 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.589  | >20%                    |                10 |              0.1589  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6257 | >20%                    |                10 |              0.16257 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6467 | 10-15%                  |                 5 |              0.32934 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7321 | >20%                    |                10 |              0.17321 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0189 | 10-15%                  |                10 |              0.20189 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2131 | 15-20%                  |                10 |              0.22131 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |