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

Data correct as of 2025-12-01 02:12:32.581238, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1384 | >20%                    |                 2 |              0.0692  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1409 | >20%                    |                 2 |              0.07045 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1421 | 15-20%                  |                 2 |              0.07105 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1754 | <5%                     |                 2 |              0.0877  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2046 | <5%                     |                 2 |              0.1023  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2056 | >20%                    |                 2 |              0.1028  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2135 | 10-15%                  |                 2 |              0.10675 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2251 | >20%                    |                 2 |              0.11255 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | >20%                    |                 2 |              0.11795 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.245  | >20%                    |                 2 |              0.1225  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2539 | 5-10%                   |                 5 |              0.05078 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2613 | >20%                    |                 5 |              0.05226 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.267  | >20%                    |                 2 |              0.1335  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2719 | >20%                    |                 5 |              0.05438 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2753 | >20%                    |                 2 |              0.13765 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2753 | 10-15%                  |                 5 |              0.05506 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | 5-10%                   |                 2 |              0.14    |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | <5%                     |                 2 |              0.14115 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2837 | 10-15%                  |                 2 |              0.14185 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2897 | >20%                    |                 2 |              0.14485 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2921 | >20%                    |                 5 |              0.05842 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3007 | 15-20%                  |                 2 |              0.15035 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.301  | 10-15%                  |                10 |              0.0301  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3175 | >20%                    |                 5 |              0.0635  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3234 | 5-10%                   |                 2 |              0.1617  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3237 | >20%                    |                 2 |              0.16185 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.324  | 10-15%                  |                10 |              0.0324  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3422 | 5-10%                   |                10 |              0.03422 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3425 | <5%                     |                 5 |              0.0685  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.348  | 10-15%                  |                 2 |              0.174   |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.353  | >20%                    |                 2 |              0.1765  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3661 | >20%                    |                 5 |              0.07322 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3665 | >20%                    |                10 |              0.03665 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3716 | 15-20%                  |                 2 |              0.1858  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | >20%                    |                 2 |              0.18595 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3723 | >20%                    |                 2 |              0.18615 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3755 | >20%                    |                 2 |              0.18775 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.381  | <5%                     |                 2 |              0.1905  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3857 | >20%                    |                 2 |              0.19285 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3885 | 15-20%                  |                 5 |              0.0777  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3917 | 15-20%                  |                 2 |              0.19585 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3921 | >20%                    |                 5 |              0.07842 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.398  | >20%                    |                 2 |              0.199   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3981 | >20%                    |                 2 |              0.19905 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3983 | >20%                    |                 2 |              0.19915 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4013 | 10-15%                  |                 2 |              0.20065 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4098 | <5%                     |                 2 |              0.2049  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4116 | 15-20%                  |                 5 |              0.08232 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.412  | 10-15%                  |                 5 |              0.0824  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4136 | >20%                    |                 5 |              0.08272 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4266 | 10-15%                  |                10 |              0.04266 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4283 | >20%                    |                10 |              0.04283 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4289 | >20%                    |                 2 |              0.21445 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4289 | 5-10%                   |                 2 |              0.21445 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4294 | 15-20%                  |                 2 |              0.2147  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4322 | >20%                    |                 2 |              0.2161  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4348 | >20%                    |                 2 |              0.2174  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4405 | >20%                    |                 2 |              0.22025 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.444  | >20%                    |                10 |              0.0444  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4506 | 10-15%                  |                 5 |              0.09012 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4523 | >20%                    |                 5 |              0.09046 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4552 | 15-20%                  |                 5 |              0.09104 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4557 | <5%                     |                 2 |              0.22785 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4561 | >20%                    |                10 |              0.04561 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4565 | >20%                    |                 5 |              0.0913  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4717 | >20%                    |                 5 |              0.09434 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4718 | 15-20%                  |                10 |              0.04718 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4744 | >20%                    |                 5 |              0.09488 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4816 | 10-15%                  |                 2 |              0.2408  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4835 | 10-15%                  |                 2 |              0.24175 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4912 | >20%                    |                 2 |              0.2456  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4925 | 15-20%                  |                 5 |              0.0985  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4955 | >20%                    |                 5 |              0.0991  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4996 | 15-20%                  |                 5 |              0.09992 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5014 | >20%                    |                 5 |              0.10028 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5023 | >20%                    |                 2 |              0.25115 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | >20%                    |                 5 |              0.10064 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5071 | 10-15%                  |                 5 |              0.10142 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5226 | 10-15%                  |                 2 |              0.2613  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5292 | <5%                     |                10 |              0.05292 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5434 | >20%                    |                 5 |              0.10868 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5531 | >20%                    |                 5 |              0.11062 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.554  | 10-15%                  |                 5 |              0.1108  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5557 | >20%                    |                 5 |              0.11114 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5568 | 15-20%                  |                 5 |              0.11136 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5578 | >20%                    |                 5 |              0.11156 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5584 | 5-10%                   |                10 |              0.05584 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5639 | 10-15%                  |                 5 |              0.11278 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.576  | 15-20%                  |                 5 |              0.1152  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5794 | >20%                    |                 2 |              0.2897  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5795 | 15-20%                  |                10 |              0.05795 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5806 | <5%                     |                10 |              0.05806 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5819 | 15-20%                  |                 5 |              0.11638 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5992 | >20%                    |                 2 |              0.2996  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6038 | >20%                    |                 5 |              0.12076 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6074 | 15-20%                  |                 5 |              0.12148 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6094 | >20%                    |                 5 |              0.12188 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6132 | 10-15%                  |                 5 |              0.12264 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6133 | >20%                    |                 2 |              0.30665 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6174 | >20%                    |                 2 |              0.3087  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6337 | 10-15%                  |                 5 |              0.12674 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6352 | >20%                    |                 5 |              0.12704 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6365 | >20%                    |                10 |              0.06365 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.64   | >20%                    |                 5 |              0.128   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6435 | >20%                    |                10 |              0.06435 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6496 | 10-15%                  |                 5 |              0.12992 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6578 | 5-10%                   |                 2 |              0.3289  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6648 | 5-10%                   |                 5 |              0.13296 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6658 | >20%                    |                10 |              0.06658 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6734 | 5-10%                   |                10 |              0.06734 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6738 | >20%                    |                 2 |              0.3369  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6819 | >20%                    |                10 |              0.06819 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6857 | 15-20%                  |                10 |              0.06857 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6884 | >20%                    |                10 |              0.06884 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6922 | >20%                    |                10 |              0.06922 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.697  | >20%                    |                 5 |              0.1394  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6971 | <5%                     |                 5 |              0.13942 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.703  | >20%                    |                 5 |              0.1406  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7168 | >20%                    |                 2 |              0.3584  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7293 | <5%                     |                10 |              0.07293 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7298 | >20%                    |                10 |              0.07298 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7345 | >20%                    |                10 |              0.07345 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.749  | 15-20%                  |                10 |              0.0749  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7534 | >20%                    |                 2 |              0.3767  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7692 | >20%                    |                10 |              0.07692 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.77   | >20%                    |                10 |              0.077   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7737 | >20%                    |                10 |              0.07737 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7742 | >20%                    |                 5 |              0.15484 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7744 | 10-15%                  |                10 |              0.07744 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7746 | 10-15%                  |                10 |              0.07746 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7793 | >20%                    |                 5 |              0.15586 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7955 | 15-20%                  |                10 |              0.07955 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7985 | >20%                    |                10 |              0.07985 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8113 | >20%                    |                10 |              0.08113 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8141 | 15-20%                  |                 5 |              0.16282 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8446 | >20%                    |                10 |              0.08446 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8485 | 10-15%                  |                10 |              0.08485 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8584 | >20%                    |                10 |              0.08584 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.859  | >20%                    |                 5 |              0.1718  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8603 | >20%                    |                 5 |              0.17206 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8778 | 10-15%                  |                 2 |              0.4389  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8813 | >20%                    |                10 |              0.08813 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8961 | >20%                    |                 2 |              0.44805 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8984 | 10-15%                  |                10 |              0.08984 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9144 | >20%                    |                 5 |              0.18288 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9215 | >20%                    |                10 |              0.09215 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9216 | 5-10%                   |                10 |              0.09216 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9443 | >20%                    |                 5 |              0.18886 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9467 | >20%                    |                 5 |              0.18934 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9615 | 15-20%                  |                10 |              0.09615 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9654 | >20%                    |                 2 |              0.4827  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.967  | <5%                     |                10 |              0.0967  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9794 | >20%                    |                10 |              0.09794 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9987 | >20%                    |                10 |              0.09987 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.009  | >20%                    |                10 |              0.1009  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0278 | 10-15%                  |                10 |              0.10278 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.049  | >20%                    |                 2 |              0.5245  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0493 | 15-20%                  |                10 |              0.10493 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0731 | >20%                    |                10 |              0.10731 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0747 | <5%                     |                 2 |              0.53735 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1147 | 15-20%                  |                10 |              0.11147 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1667 | <5%                     |                 5 |              0.23334 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1891 | >20%                    |                10 |              0.11891 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.238  | >20%                    |                10 |              0.1238  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2416 | >20%                    |                 5 |              0.24832 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3214 | >20%                    |                10 |              0.13214 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3471 | >20%                    |                 2 |              0.67355 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3633 | >20%                    |                 2 |              0.68165 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3731 | 10-15%                  |                10 |              0.13731 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4523 | >20%                    |                 5 |              0.29046 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.56   | >20%                    |                10 |              0.156   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5605 | >20%                    |                10 |              0.15605 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5746 | 5-10%                   |                 5 |              0.31492 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9775 | 15-20%                  |                10 |              0.19775 |