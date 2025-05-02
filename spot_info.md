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

Data correct as of 2025-05-02 01:50:25.216343, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1133 | >20%                    |                 2 |              0.05665 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1809 | >20%                    |                 2 |              0.09045 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1818 | 15-20%                  |                 5 |              0.03636 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2012 | >20%                    |                 5 |              0.04024 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2086 | <5%                     |                 5 |              0.04172 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2098 | 15-20%                  |                 2 |              0.1049  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2234 | <5%                     |                 2 |              0.1117  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | 15-20%                  |                 2 |              0.1122  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2323 | 5-10%                   |                 5 |              0.04646 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2342 | >20%                    |                 5 |              0.04684 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | 5-10%                   |                 2 |              0.1266  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | 5-10%                   |                 2 |              0.12825 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2756 | <5%                     |                 2 |              0.1378  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2787 | 15-20%                  |                10 |              0.02787 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | >20%                    |                 2 |              0.14155 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2983 | >20%                    |                 2 |              0.14915 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3014 | <5%                     |                 2 |              0.1507  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3017 | 10-15%                  |                 2 |              0.15085 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | 5-10%                   |                 2 |              0.15305 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3068 | <5%                     |                 2 |              0.1534  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3089 | >20%                    |                 2 |              0.15445 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3116 | 5-10%                   |                 2 |              0.1558  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3158 | 5-10%                   |                 2 |              0.1579  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3179 | 15-20%                  |                10 |              0.03179 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3184 | >20%                    |                 2 |              0.1592  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3201 | <5%                     |                 5 |              0.06402 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3222 | >20%                    |                 2 |              0.1611  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3226 | >20%                    |                 2 |              0.1613  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3246 | >20%                    |                10 |              0.03246 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3287 | 5-10%                   |                 5 |              0.06574 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3465 | 15-20%                  |                10 |              0.03465 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3466 | >20%                    |                 2 |              0.1733  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3554 | >20%                    |                 5 |              0.07108 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3569 | >20%                    |                 2 |              0.17845 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.359  | <5%                     |                 5 |              0.0718  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3591 | 5-10%                   |                 5 |              0.07182 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3607 | 10-15%                  |                10 |              0.03607 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | >20%                    |                 2 |              0.18175 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3661 | >20%                    |                 2 |              0.18305 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3678 | >20%                    |                 5 |              0.07356 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | >20%                    |                 2 |              0.18415 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3692 | <5%                     |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3729 | >20%                    |                10 |              0.03729 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3777 | >20%                    |                 5 |              0.07554 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3778 | >20%                    |                10 |              0.03778 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3825 | >20%                    |                10 |              0.03825 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3902 | 10-15%                  |                 2 |              0.1951  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4011 | 5-10%                   |                 2 |              0.20055 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | 10-15%                  |                 2 |              0.2016  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4112 | 5-10%                   |                 5 |              0.08224 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4146 | >20%                    |                 5 |              0.08292 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | >20%                    |                 2 |              0.20835 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | 10-15%                  |                 2 |              0.2087  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4178 | >20%                    |                 2 |              0.2089  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4224 | >20%                    |                 2 |              0.2112  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4233 | 15-20%                  |                 5 |              0.08466 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4271 | 15-20%                  |                 5 |              0.08542 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4411 | >20%                    |                10 |              0.04411 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.443  | 15-20%                  |                 2 |              0.2215  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4463 | <5%                     |                 5 |              0.08926 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.447  | >20%                    |                 5 |              0.0894  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4547 | >20%                    |                 5 |              0.09094 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4668 | >20%                    |                 5 |              0.09336 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4675 | 10-15%                  |                 5 |              0.0935  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4697 | >20%                    |                 2 |              0.23485 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4747 | >20%                    |                 2 |              0.23735 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4753 | 5-10%                   |                 5 |              0.09506 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4769 | >20%                    |                 5 |              0.09538 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4777 | 10-15%                  |                10 |              0.04777 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4857 | <5%                     |                 5 |              0.09714 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4895 | >20%                    |                 2 |              0.24475 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.494  | 15-20%                  |                 5 |              0.0988  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4958 | 5-10%                   |                 5 |              0.09916 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.497  | <5%                     |                 2 |              0.2485  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4973 | >20%                    |                 5 |              0.09946 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5045 | 10-15%                  |                 5 |              0.1009  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5145 | >20%                    |                 2 |              0.25725 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5169 | >20%                    |                 2 |              0.25845 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5172 | >20%                    |                 2 |              0.2586  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5213 | >20%                    |                 5 |              0.10426 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.525  | 10-15%                  |                 2 |              0.2625  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5256 | >20%                    |                 5 |              0.10512 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5404 | >20%                    |                 5 |              0.10808 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5426 | >20%                    |                 2 |              0.2713  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5559 | 10-15%                  |                10 |              0.05559 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5649 | >20%                    |                 2 |              0.28245 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5653 | 5-10%                   |                 5 |              0.11306 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5682 | 10-15%                  |                 2 |              0.2841  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.58   | >20%                    |                 5 |              0.116   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5805 | >20%                    |                 5 |              0.1161  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5816 | >20%                    |                 5 |              0.11632 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5823 | 10-15%                  |                 5 |              0.11646 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5825 | >20%                    |                 2 |              0.29125 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5866 | <5%                     |                 5 |              0.11732 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5929 | >20%                    |                 2 |              0.29645 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5946 | <5%                     |                10 |              0.05946 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6074 | >20%                    |                 5 |              0.12148 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6341 | 10-15%                  |                 5 |              0.12682 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6425 | >20%                    |                 2 |              0.32125 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6508 | >20%                    |                 5 |              0.13016 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6539 | 15-20%                  |                 5 |              0.13078 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6587 | 15-20%                  |                10 |              0.06587 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6718 | >20%                    |                 2 |              0.3359  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6836 | 5-10%                   |                10 |              0.06836 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6866 | >20%                    |                 2 |              0.3433  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6961 | >20%                    |                10 |              0.06961 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6995 | <5%                     |                 5 |              0.1399  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7068 | >20%                    |                 2 |              0.3534  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7205 | >20%                    |                 5 |              0.1441  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7214 | 15-20%                  |                10 |              0.07214 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7249 | <5%                     |                 5 |              0.14498 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7293 | 5-10%                   |                10 |              0.07293 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7327 | >20%                    |                10 |              0.07327 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7402 | >20%                    |                 5 |              0.14804 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7449 | >20%                    |                10 |              0.07449 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7495 | 10-15%                  |                10 |              0.07495 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7521 | >20%                    |                 5 |              0.15042 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7537 | >20%                    |                 2 |              0.37685 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7638 | <5%                     |                 5 |              0.15276 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7711 | >20%                    |                 5 |              0.15422 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7772 | >20%                    |                 5 |              0.15544 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7791 | 15-20%                  |                10 |              0.07791 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7816 | >20%                    |                10 |              0.07816 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7842 | >20%                    |                10 |              0.07842 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8011 | <5%                     |                10 |              0.08011 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8011 | <5%                     |                10 |              0.08011 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8032 | >20%                    |                 5 |              0.16064 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8064 | 10-15%                  |                10 |              0.08064 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8277 | 15-20%                  |                10 |              0.08277 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8374 | 10-15%                  |                10 |              0.08374 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8437 | 10-15%                  |                10 |              0.08437 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | 15-20%                  |                10 |              0.08441 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8478 | >20%                    |                10 |              0.08478 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.858  | >20%                    |                 5 |              0.1716  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8717 | 10-15%                  |                 5 |              0.17434 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | 10-15%                  |                10 |              0.08752 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8783 | 5-10%                   |                10 |              0.08783 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8837 | >20%                    |                10 |              0.08837 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8905 | >20%                    |                10 |              0.08905 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.893  | >20%                    |                 2 |              0.4465  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8966 | <5%                     |                10 |              0.08966 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9007 | 10-15%                  |                10 |              0.09007 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9021 | 15-20%                  |                10 |              0.09021 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9137 | <5%                     |                10 |              0.09137 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9336 | >20%                    |                10 |              0.09336 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9437 | 15-20%                  |                10 |              0.09437 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9607 | >20%                    |                 2 |              0.48035 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9824 | >20%                    |                10 |              0.09824 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9859 | >20%                    |                 2 |              0.49295 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0286 | 10-15%                  |                 5 |              0.20572 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0366 | >20%                    |                10 |              0.10366 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0456 | <5%                     |                10 |              0.10456 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0487 | >20%                    |                10 |              0.10487 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0605 | >20%                    |                 5 |              0.2121  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0735 | <5%                     |                 5 |              0.2147  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0806 | >20%                    |                 2 |              0.5403  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0922 | >20%                    |                10 |              0.10922 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1194 | <5%                     |                10 |              0.11194 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1255 | 15-20%                  |                 2 |              0.56275 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1725 | >20%                    |                10 |              0.11725 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1999 | >20%                    |                10 |              0.11999 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2053 | 10-15%                  |                 2 |              0.60265 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2262 | >20%                    |                10 |              0.12262 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2645 | <5%                     |                 5 |              0.2529  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3636 | 15-20%                  |                10 |              0.13636 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.371  | >20%                    |                 5 |              0.2742  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3984 | >20%                    |                 2 |              0.6992  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4057 | 15-20%                  |                10 |              0.14057 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4483 | >20%                    |                 5 |              0.28966 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4873 | >20%                    |                 5 |              0.29746 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5588 | 5-10%                   |                10 |              0.15588 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6132 | 15-20%                  |                10 |              0.16132 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7394 | >20%                    |                10 |              0.17394 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7876 | >20%                    |                10 |              0.17876 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9692 | <5%                     |                10 |              0.19692 |