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

Data correct as of 2025-03-13 01:43:36.764931, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1291 | 10-15%                  |                 2 |              0.06455 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1357 | 5-10%                   |                 5 |              0.02714 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1589 | >20%                    |                 2 |              0.07945 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1684 | >20%                    |                 5 |              0.03368 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2046 | 5-10%                   |                 2 |              0.1023  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2054 | 5-10%                   |                 5 |              0.04108 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2075 | 15-20%                  |                 5 |              0.0415  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2145 | 5-10%                   |                 2 |              0.10725 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | 15-20%                  |                 2 |              0.11195 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2269 | 10-15%                  |                 2 |              0.11345 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | 15-20%                  |                 2 |              0.1165  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2355 | >20%                    |                 2 |              0.11775 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2358 | 5-10%                   |                10 |              0.02358 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | 5-10%                   |                 2 |              0.12025 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | >20%                    |                 2 |              0.1207  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2428 | >20%                    |                 5 |              0.04856 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | >20%                    |                 2 |              0.12175 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2456 | >20%                    |                 5 |              0.04912 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | <5%                     |                 2 |              0.12975 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.26   | 10-15%                  |                 5 |              0.052   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2619 | 5-10%                   |                10 |              0.02619 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | 5-10%                   |                 2 |              0.13425 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2718 | 10-15%                  |                 2 |              0.1359  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.278  | >20%                    |                 2 |              0.139   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.2817 |                         |                 2 |              0.14085 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.286  | 10-15%                  |                10 |              0.0286  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | 5-10%                   |                 2 |              0.1484  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | 5-10%                   |                 2 |              0.15155 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3051 | >20%                    |                 2 |              0.15255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | <5%                     |                 2 |              0.153   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3113 | >20%                    |                 2 |              0.15565 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3116 | <5%                     |                 2 |              0.1558  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.317  | 10-15%                  |                 2 |              0.1585  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3242 | 5-10%                   |                 5 |              0.06484 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3304 | >20%                    |                 2 |              0.1652  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3358 | 10-15%                  |                10 |              0.03358 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3464 | 10-15%                  |                 5 |              0.06928 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.349  | >20%                    |                 2 |              0.1745  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3501 | 10-15%                  |                 5 |              0.07002 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3528 | >20%                    |                 2 |              0.1764  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.354  | >20%                    |                 2 |              0.177   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3601 | >20%                    |                10 |              0.03601 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.362  | >20%                    |                 5 |              0.0724  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3627 | >20%                    |                 2 |              0.18135 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3708 | >20%                    |                 5 |              0.07416 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3737 | 5-10%                   |                10 |              0.03737 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3803 | >20%                    |                 2 |              0.19015 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3809 | 5-10%                   |                 5 |              0.07618 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3813 | >20%                    |                 2 |              0.19065 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3839 | >20%                    |                 5 |              0.07678 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3845 |                         |                 5 |              0.0769  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3858 | 10-15%                  |                10 |              0.03858 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3864 | <5%                     |                 2 |              0.1932  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3892 | 5-10%                   |                 5 |              0.07784 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3949 | 15-20%                  |                10 |              0.03949 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3959 | 5-10%                   |                 2 |              0.19795 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.401  | 5-10%                   |                 2 |              0.2005  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4022 | 5-10%                   |                 2 |              0.2011  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4024 | <5%                     |                 5 |              0.08048 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4092 | <5%                     |                10 |              0.04092 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4099 | 5-10%                   |                 2 |              0.20495 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4111 | <5%                     |                 2 |              0.20555 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4187 | >20%                    |                 5 |              0.08374 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4281 | >20%                    |                 5 |              0.08562 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4284 | 15-20%                  |                 2 |              0.2142  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.433  | <5%                     |                 2 |              0.2165  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4348 | >20%                    |                10 |              0.04348 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4399 | <5%                     |                 2 |              0.21995 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4425 | >20%                    |                 2 |              0.22125 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4476 | <5%                     |                 5 |              0.08952 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.448  | 5-10%                   |                 2 |              0.224   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4495 | >20%                    |                 2 |              0.22475 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4526 | >20%                    |                 2 |              0.2263  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4545 | 5-10%                   |                 5 |              0.0909  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4594 | <5%                     |                 5 |              0.09188 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4613 | >20%                    |                 5 |              0.09226 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | 5-10%                   |                 5 |              0.0957  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | <5%                     |                 5 |              0.0969  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4863 | 5-10%                   |                 5 |              0.09726 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.491  | 10-15%                  |                 2 |              0.2455  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4926 | 10-15%                  |                10 |              0.04926 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4946 | >20%                    |                 5 |              0.09892 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4989 | >20%                    |                 5 |              0.09978 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5006 | 10-15%                  |                 5 |              0.10012 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5045 | >20%                    |                 2 |              0.25225 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5111 | >20%                    |                 5 |              0.10222 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5134 | >20%                    |                 2 |              0.2567  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.517  | >20%                    |                 5 |              0.1034  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5186 | 15-20%                  |                 2 |              0.2593  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5206 | >20%                    |                 2 |              0.2603  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5242 | 5-10%                   |                10 |              0.05242 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5308 | 5-10%                   |                 5 |              0.10616 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5391 | >20%                    |                 5 |              0.10782 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5483 | >20%                    |                 2 |              0.27415 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5505 | 15-20%                  |                 2 |              0.27525 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5542 | >20%                    |                 5 |              0.11084 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5631 | <5%                     |                 5 |              0.11262 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5653 | 5-10%                   |                 5 |              0.11306 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5661 | 15-20%                  |                 5 |              0.11322 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5678 | >20%                    |                 5 |              0.11356 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5686 | 10-15%                  |                 5 |              0.11372 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5732 | 10-15%                  |                 5 |              0.11464 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.5782 |                         |                10 |              0.05782 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5847 | 5-10%                   |                 5 |              0.11694 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5855 | >20%                    |                 2 |              0.29275 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5875 | >20%                    |                 2 |              0.29375 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5921 | <5%                     |                 5 |              0.11842 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5984 | 15-20%                  |                 5 |              0.11968 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5989 | >20%                    |                 2 |              0.29945 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.605  | <5%                     |                10 |              0.0605  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6156 | >20%                    |                 2 |              0.3078  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6245 | >20%                    |                 5 |              0.1249  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.6291 | 5-10%                   |                10 |              0.06291 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6568 | 10-15%                  |                 5 |              0.13136 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6573 | >20%                    |                10 |              0.06573 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6663 | >20%                    |                10 |              0.06663 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6667 | >20%                    |                 5 |              0.13334 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6755 | >20%                    |                 5 |              0.1351  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6848 | >20%                    |                 5 |              0.13696 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7102 | >20%                    |                10 |              0.07102 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7124 | >20%                    |                10 |              0.07124 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7158 | <5%                     |                10 |              0.07158 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.717  | >20%                    |                10 |              0.0717  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7176 | >20%                    |                 5 |              0.14352 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7257 | >20%                    |                 2 |              0.36285 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7263 | >20%                    |                10 |              0.07263 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7307 | 5-10%                   |                 5 |              0.14614 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7414 | 5-10%                   |                 2 |              0.3707  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7427 | >20%                    |                 5 |              0.14854 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7518 | <5%                     |                 5 |              0.15036 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7522 | >20%                    |                10 |              0.07522 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7643 | 5-10%                   |                10 |              0.07643 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7653 | >20%                    |                 5 |              0.15306 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.768  | 5-10%                   |                10 |              0.0768  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7905 | >20%                    |                 2 |              0.39525 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8057 | >20%                    |                10 |              0.08057 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8059 | <5%                     |                10 |              0.08059 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8086 | 15-20%                  |                 5 |              0.16172 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8343 | >20%                    |                10 |              0.08343 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8369 | <5%                     |                10 |              0.08369 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.847  | <5%                     |                10 |              0.0847  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8478 | >20%                    |                 5 |              0.16956 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8602 | 15-20%                  |                10 |              0.08602 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8613 | >20%                    |                10 |              0.08613 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8728 | 5-10%                   |                10 |              0.08728 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8822 | <5%                     |                10 |              0.08822 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8825 | >20%                    |                10 |              0.08825 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8854 | >20%                    |                10 |              0.08854 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8947 | 5-10%                   |                10 |              0.08947 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9121 | >20%                    |                10 |              0.09121 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9171 | 15-20%                  |                 5 |              0.18342 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9218 | >20%                    |                10 |              0.09218 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9424 | 15-20%                  |                10 |              0.09424 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9642 | 5-10%                   |                10 |              0.09642 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9673 | <5%                     |                10 |              0.09673 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0034 | >20%                    |                 2 |              0.5017  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.018  | 10-15%                  |                10 |              0.1018  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0265 | >20%                    |                10 |              0.10265 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0412 | 5-10%                   |                10 |              0.10412 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0736 | >20%                    |                 5 |              0.21472 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0739 | >20%                    |                10 |              0.10739 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0889 | 5-10%                   |                10 |              0.10889 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.117  | <5%                     |                10 |              0.1117  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.129  | >20%                    |                 2 |              0.5645  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1356 | >20%                    |                10 |              0.11356 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1383 | >20%                    |                10 |              0.11383 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1707 | 15-20%                  |                10 |              0.11707 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1809 | 15-20%                  |                10 |              0.11809 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2542 | 5-10%                   |                 2 |              0.6271  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3024 | 5-10%                   |                 5 |              0.26048 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3567 | >20%                    |                10 |              0.13567 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4036 | >20%                    |                10 |              0.14036 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4725 | >20%                    |                 5 |              0.2945  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.492  | 10-15%                  |                 5 |              0.2984  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5152 | >20%                    |                 5 |              0.30304 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5301 | >20%                    |                10 |              0.15301 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5332 | >20%                    |                10 |              0.15332 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6987 | >20%                    |                 2 |              0.84935 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7738 | >20%                    |                10 |              0.17738 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1914 | 5-10%                   |                10 |              0.21914 |