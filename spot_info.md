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

Data correct as of 2025-04-29 01:50:16.334115, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1119 | >20%                    |                 2 |              0.05595 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1416 | <5%                     |                 2 |              0.0708  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1468 | >20%                    |                 2 |              0.0734  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.16   | 15-20%                  |                 5 |              0.032   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1885 | <5%                     |                 5 |              0.0377  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1984 | >20%                    |                 5 |              0.03968 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2033 | 15-20%                  |                 2 |              0.10165 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | <5%                     |                 2 |              0.1104  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2267 | 15-20%                  |                 2 |              0.11335 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2396 | 5-10%                   |                 2 |              0.1198  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2431 | 5-10%                   |                 5 |              0.04862 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2477 | >20%                    |                 5 |              0.04954 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | >20%                    |                 2 |              0.12835 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2626 | 15-20%                  |                10 |              0.02626 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | 5-10%                   |                 2 |              0.13275 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | >20%                    |                 2 |              0.13915 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | <5%                     |                 2 |              0.1393  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2918 | >20%                    |                 2 |              0.1459  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | 5-10%                   |                 2 |              0.1484  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.301  | <5%                     |                 2 |              0.1505  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3016 | 10-15%                  |                10 |              0.03016 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | <5%                     |                 2 |              0.15105 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3022 | <5%                     |                 5 |              0.06044 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3047 | >20%                    |                 2 |              0.15235 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | 10-15%                  |                 2 |              0.1531  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3101 | 5-10%                   |                 2 |              0.15505 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3123 | >20%                    |                 2 |              0.15615 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3197 | >20%                    |                 2 |              0.15985 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3201 | >20%                    |                10 |              0.03201 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3246 | 10-15%                  |                10 |              0.03246 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3335 | >20%                    |                 2 |              0.16675 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3344 | 5-10%                   |                 2 |              0.1672  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3346 | 15-20%                  |                10 |              0.03346 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3346 | >20%                    |                10 |              0.03346 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3458 | >20%                    |                 2 |              0.1729  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3464 | >20%                    |                 2 |              0.1732  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3569 | >20%                    |                 5 |              0.07138 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3576 | >20%                    |                 5 |              0.07152 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3578 | >20%                    |                 2 |              0.1789  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | <5%                     |                 5 |              0.072   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3603 | >20%                    |                 2 |              0.18015 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3606 | >20%                    |                 2 |              0.1803  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | 5-10%                   |                 5 |              0.0723  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3692 | >20%                    |                10 |              0.03692 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3741 | 15-20%                  |                10 |              0.03741 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3754 | >20%                    |                 5 |              0.07508 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3777 | 5-10%                   |                 5 |              0.07554 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3794 | <5%                     |                 2 |              0.1897  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3813 | 10-15%                  |                 2 |              0.19065 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4057 | 5-10%                   |                 2 |              0.20285 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4139 | 15-20%                  |                 5 |              0.08278 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | 10-15%                  |                 2 |              0.20795 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4161 | >20%                    |                 2 |              0.20805 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4177 | 10-15%                  |                 2 |              0.20885 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.418  | 15-20%                  |                 5 |              0.0836  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4183 | >20%                    |                 2 |              0.20915 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4251 | 5-10%                   |                 5 |              0.08502 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | <5%                     |                 5 |              0.08716 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4388 | >20%                    |                 2 |              0.2194  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4397 | 15-20%                  |                 2 |              0.21985 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.441  | >20%                    |                10 |              0.0441  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4623 | 10-15%                  |                 5 |              0.09246 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4638 | >20%                    |                 2 |              0.2319  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4638 | >20%                    |                 2 |              0.2319  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.468  | >20%                    |                 5 |              0.0936  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | 5-10%                   |                 5 |              0.0944  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | <5%                     |                 5 |              0.09442 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.475  | >20%                    |                 5 |              0.095   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4756 | >20%                    |                 5 |              0.09512 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4764 | >20%                    |                 5 |              0.09528 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4909 | 10-15%                  |                 5 |              0.09818 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4933 | >20%                    |                 5 |              0.09866 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.494  | >20%                    |                 5 |              0.0988  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | 5-10%                   |                 5 |              0.0992  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4969 | >20%                    |                10 |              0.04969 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5014 | >20%                    |                 2 |              0.2507  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.503  | >20%                    |                 2 |              0.2515  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5087 | <5%                     |                 2 |              0.25435 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5171 | >20%                    |                 2 |              0.25855 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5202 | 15-20%                  |                 5 |              0.10404 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5324 | 10-15%                  |                 2 |              0.2662  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5331 | >20%                    |                 5 |              0.10662 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5432 | >20%                    |                 2 |              0.2716  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5447 | 10-15%                  |                10 |              0.05447 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5548 | >20%                    |                 2 |              0.2774  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5549 | 10-15%                  |                10 |              0.05549 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5586 | >20%                    |                 5 |              0.11172 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5608 | 10-15%                  |                 2 |              0.2804  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5656 | 5-10%                   |                 5 |              0.11312 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5681 | >20%                    |                 5 |              0.11362 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.574  | >20%                    |                 5 |              0.1148  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5785 | 10-15%                  |                 5 |              0.1157  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5854 | >20%                    |                 5 |              0.11708 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5856 | >20%                    |                 2 |              0.2928  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5871 | >20%                    |                 5 |              0.11742 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5876 | >20%                    |                 2 |              0.2938  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5881 | <5%                     |                 5 |              0.11762 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5993 | >20%                    |                 2 |              0.29965 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6092 | >20%                    |                 5 |              0.12184 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6207 | 15-20%                  |                10 |              0.06207 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6341 | 10-15%                  |                 5 |              0.12682 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6461 | 15-20%                  |                10 |              0.06461 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6498 | <5%                     |                10 |              0.06498 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6589 | >20%                    |                 2 |              0.32945 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.659  | 15-20%                  |                 5 |              0.1318  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6592 | >20%                    |                 5 |              0.13184 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6684 | >20%                    |                 2 |              0.3342  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6754 | >20%                    |                 2 |              0.3377  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6767 | 10-15%                  |                10 |              0.06767 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7038 | 5-10%                   |                10 |              0.07038 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.708  | >20%                    |                 2 |              0.354   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7132 | >20%                    |                 2 |              0.3566  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7162 | >20%                    |                10 |              0.07162 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7177 | <5%                     |                 5 |              0.14354 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7191 | >20%                    |                10 |              0.07191 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7204 | <5%                     |                 5 |              0.14408 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7245 | >20%                    |                 5 |              0.1449  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7292 | >20%                    |                10 |              0.07292 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7304 | 5-10%                   |                10 |              0.07304 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7349 | >20%                    |                 5 |              0.14698 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7448 | >20%                    |                 5 |              0.14896 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7453 | <5%                     |                 5 |              0.14906 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7701 | >20%                    |                 5 |              0.15402 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7781 | >20%                    |                10 |              0.07781 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7812 | 15-20%                  |                10 |              0.07812 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.789  | >20%                    |                 5 |              0.1578  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7931 | 10-15%                  |                10 |              0.07931 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7976 | >20%                    |                10 |              0.07976 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.821  | 15-20%                  |                10 |              0.0821  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8258 | <5%                     |                10 |              0.08258 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8308 | >20%                    |                 5 |              0.16616 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.838  | 10-15%                  |                10 |              0.0838  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8514 | >20%                    |                10 |              0.08514 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8525 | 10-15%                  |                10 |              0.08525 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8664 | 10-15%                  |                10 |              0.08664 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8703 | 15-20%                  |                10 |              0.08703 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8712 | 10-15%                  |                10 |              0.08712 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8781 | >20%                    |                10 |              0.08781 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8818 | 5-10%                   |                10 |              0.08818 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8916 | <5%                     |                10 |              0.08916 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8965 | <5%                     |                10 |              0.08965 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8984 | >20%                    |                10 |              0.08984 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9009 | >20%                    |                 2 |              0.45045 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9039 | <5%                     |                10 |              0.09039 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9088 | 10-15%                  |                 5 |              0.18176 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9101 | 15-20%                  |                10 |              0.09101 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9144 | >20%                    |                 2 |              0.4572  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9287 | 10-15%                  |                 5 |              0.18574 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9389 | 15-20%                  |                10 |              0.09389 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9414 | >20%                    |                 5 |              0.18828 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9509 | >20%                    |                10 |              0.09509 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9994 | >20%                    |                10 |              0.09994 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0095 | >20%                    |                 2 |              0.50475 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0148 | >20%                    |                10 |              0.10148 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0321 | >20%                    |                10 |              0.10321 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0448 | <5%                     |                10 |              0.10448 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.067  | >20%                    |                 5 |              0.2134  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0836 | <5%                     |                 5 |              0.21672 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0853 | >20%                    |                10 |              0.10853 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0946 | <5%                     |                10 |              0.10946 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1098 | >20%                    |                 2 |              0.5549  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1414 | 15-20%                  |                 2 |              0.5707  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.154  | >20%                    |                10 |              0.1154  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1858 | >20%                    |                10 |              0.11858 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2333 | 10-15%                  |                 2 |              0.61665 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2386 | >20%                    |                10 |              0.12386 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2657 | <5%                     |                 5 |              0.25314 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2893 | >20%                    |                 5 |              0.25786 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3368 | >20%                    |                 5 |              0.26736 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3413 | 15-20%                  |                10 |              0.13413 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3467 | 5-10%                   |                10 |              0.13467 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3683 | 15-20%                  |                10 |              0.13683 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3686 | >20%                    |                 2 |              0.6843  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4451 | >20%                    |                 5 |              0.28902 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6776 | 15-20%                  |                10 |              0.16776 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7499 | >20%                    |                10 |              0.17499 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8452 | >20%                    |                10 |              0.18452 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9978 | <5%                     |                10 |              0.19978 |