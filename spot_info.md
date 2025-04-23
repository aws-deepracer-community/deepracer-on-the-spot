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

Data correct as of 2025-04-23 01:48:34.842492, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1125 | >20%                    |                 2 |              0.05625 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1156 | >20%                    |                 2 |              0.0578  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.134  | 15-20%                  |                 5 |              0.0268  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1686 | >20%                    |                 2 |              0.0843  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1902 | <5%                     |                 2 |              0.0951  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1914 | 5-10%                   |                 2 |              0.0957  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2067 | >20%                    |                 5 |              0.04134 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2269 | 15-20%                  |                 2 |              0.11345 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2299 | 5-10%                   |                 5 |              0.04598 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | 5-10%                   |                 2 |              0.12115 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | >20%                    |                 2 |              0.12765 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2695 | 5-10%                   |                 2 |              0.13475 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | >20%                    |                 2 |              0.13945 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2806 | >20%                    |                 5 |              0.05612 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | 15-20%                  |                 2 |              0.14245 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | <5%                     |                 2 |              0.14345 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | <5%                     |                 2 |              0.1438  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | 5-10%                   |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | 10-15%                  |                 2 |              0.14585 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2951 | 10-15%                  |                10 |              0.02951 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2982 | 15-20%                  |                10 |              0.02982 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3013 | 5-10%                   |                 2 |              0.15065 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | >20%                    |                 2 |              0.15295 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3124 | <5%                     |                 2 |              0.1562  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.313  | >20%                    |                 2 |              0.1565  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3267 | >20%                    |                10 |              0.03267 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.329  | >20%                    |                 2 |              0.1645  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.33   | <5%                     |                 5 |              0.066   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3332 | >20%                    |                 2 |              0.1666  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.334  | >20%                    |                 5 |              0.0668  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3387 | >20%                    |                 2 |              0.16935 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.346  | >20%                    |                10 |              0.0346  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | >20%                    |                 2 |              0.17485 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3565 | 5-10%                   |                 2 |              0.17825 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3569 | 15-20%                  |                10 |              0.03569 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3578 | >20%                    |                 2 |              0.1789  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.36   | >20%                    |                10 |              0.036   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3618 | >20%                    |                 2 |              0.1809  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3637 | 10-15%                  |                10 |              0.03637 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3653 | >20%                    |                10 |              0.03653 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3653 | >20%                    |                 5 |              0.07306 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | 5-10%                   |                 5 |              0.07386 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3731 | >20%                    |                 2 |              0.18655 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3759 | 10-15%                  |                 2 |              0.18795 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3796 | 5-10%                   |                 2 |              0.1898  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3826 | <5%                     |                 5 |              0.07652 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3941 | <5%                     |                 2 |              0.19705 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4107 | >20%                    |                 2 |              0.20535 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4161 | 5-10%                   |                 5 |              0.08322 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4177 | 10-15%                  |                 2 |              0.20885 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4178 | >20%                    |                 5 |              0.08356 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4188 | >20%                    |                 2 |              0.2094  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4195 | 15-20%                  |                 5 |              0.0839  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.422  | 15-20%                  |                 2 |              0.211   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4286 | >20%                    |                 5 |              0.08572 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4396 | 15-20%                  |                 2 |              0.2198  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4446 | >20%                    |                 5 |              0.08892 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4509 | <5%                     |                 5 |              0.09018 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.452  | >20%                    |                 5 |              0.0904  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4532 | >20%                    |                 2 |              0.2266  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4561 | 5-10%                   |                 5 |              0.09122 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4563 | 5-10%                   |                 5 |              0.09126 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4638 | >20%                    |                 2 |              0.2319  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4666 | 10-15%                  |                10 |              0.04666 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4682 | >20%                    |                 5 |              0.09364 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | 10-15%                  |                 5 |              0.09372 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4697 | >20%                    |                 5 |              0.09394 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4719 | 15-20%                  |                 5 |              0.09438 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4763 | 5-10%                   |                 5 |              0.09526 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4777 | <5%                     |                 5 |              0.09554 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4864 | >20%                    |                 2 |              0.2432  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4869 | >20%                    |                10 |              0.04869 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4957 | >20%                    |                 2 |              0.24785 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.508  | <5%                     |                 2 |              0.254   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5131 | >20%                    |                 5 |              0.10262 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5195 | 10-15%                  |                 2 |              0.25975 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5212 | >20%                    |                 5 |              0.10424 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5227 | 15-20%                  |                 5 |              0.10454 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5283 | 15-20%                  |                10 |              0.05283 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5374 | 15-20%                  |                 5 |              0.10748 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5383 | >20%                    |                 2 |              0.26915 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5451 | >20%                    |                 5 |              0.10902 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5465 | >20%                    |                10 |              0.05465 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5469 | >20%                    |                 2 |              0.27345 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5531 | >20%                    |                 5 |              0.11062 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5533 | 5-10%                   |                 5 |              0.11066 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5601 | 10-15%                  |                 2 |              0.28005 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5612 | >20%                    |                 5 |              0.11224 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5653 | >20%                    |                 5 |              0.11306 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5683 | >20%                    |                 2 |              0.28415 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5697 | >20%                    |                 5 |              0.11394 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5774 | >20%                    |                 2 |              0.2887  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5792 | 10-15%                  |                 5 |              0.11584 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5809 | >20%                    |                 2 |              0.29045 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5985 | >20%                    |                 2 |              0.29925 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6058 | <5%                     |                 5 |              0.12116 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6186 | >20%                    |                 2 |              0.3093  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6189 | 10-15%                  |                 5 |              0.12378 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6229 | 15-20%                  |                10 |              0.06229 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6411 | >20%                    |                 2 |              0.32055 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6506 | >20%                    |                 5 |              0.13012 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6665 | >20%                    |                 2 |              0.33325 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6711 | 5-10%                   |                10 |              0.06711 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.672  | >20%                    |                 5 |              0.1344  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6752 | 5-10%                   |                10 |              0.06752 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6754 | >20%                    |                 5 |              0.13508 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6779 | <5%                     |                 5 |              0.13558 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6798 | 15-20%                  |                 5 |              0.13596 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6846 | <5%                     |                10 |              0.06846 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6947 | >20%                    |                10 |              0.06947 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7001 | >20%                    |                 5 |              0.14002 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7012 | 5-10%                   |                10 |              0.07012 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.702  | >20%                    |                10 |              0.0702  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7026 | >20%                    |                 2 |              0.3513  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.707  | >20%                    |                 5 |              0.1414  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7104 | >20%                    |                10 |              0.07104 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7105 | >20%                    |                 5 |              0.1421  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7234 | >20%                    |                 2 |              0.3617  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.724  | 5-10%                   |                10 |              0.0724  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7255 | >20%                    |                 5 |              0.1451  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7382 | 10-15%                  |                 5 |              0.14764 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.741  | 15-20%                  |                10 |              0.0741  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7465 | >20%                    |                 2 |              0.37325 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7491 | <5%                     |                 5 |              0.14982 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7616 | >20%                    |                 5 |              0.15232 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7693 | >20%                    |                10 |              0.07693 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7723 | >20%                    |                 5 |              0.15446 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7796 | >20%                    |                10 |              0.07796 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7804 | >20%                    |                10 |              0.07804 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7852 | 10-15%                  |                10 |              0.07852 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7973 | >20%                    |                10 |              0.07973 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7995 | <5%                     |                10 |              0.07995 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8162 | 5-10%                   |                10 |              0.08162 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8272 | 5-10%                   |                10 |              0.08272 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8308 | 10-15%                  |                10 |              0.08308 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8422 | >20%                    |                10 |              0.08422 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8431 | >20%                    |                10 |              0.08431 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8485 | 10-15%                  |                10 |              0.08485 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.849  | 10-15%                  |                10 |              0.0849  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8529 | >20%                    |                10 |              0.08529 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8692 | <5%                     |                10 |              0.08692 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8784 | <5%                     |                10 |              0.08784 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9082 | >20%                    |                 2 |              0.4541  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9104 | 15-20%                  |                10 |              0.09104 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.922  | >20%                    |                10 |              0.0922  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.923  | <5%                     |                 5 |              0.1846  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9289 | >20%                    |                 5 |              0.18578 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9317 | >20%                    |                 2 |              0.46585 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9366 | 15-20%                  |                 5 |              0.18732 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9623 | >20%                    |                 5 |              0.19246 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9743 | >20%                    |                10 |              0.09743 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9837 | >20%                    |                10 |              0.09837 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9896 | >20%                    |                10 |              0.09896 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0028 | <5%                     |                10 |              0.10028 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0031 | 5-10%                   |                10 |              0.10031 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.022  | >20%                    |                10 |              0.1022  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0646 | <5%                     |                10 |              0.10646 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0721 | >20%                    |                10 |              0.10721 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1018 | <5%                     |                10 |              0.11018 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1337 | >20%                    |                 2 |              0.56685 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1656 | >20%                    |                10 |              0.11656 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1731 | >20%                    |                 5 |              0.23462 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1948 | >20%                    |                 5 |              0.23896 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2173 | 15-20%                  |                10 |              0.12173 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.22   | >20%                    |                 5 |              0.244   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2493 | <5%                     |                 5 |              0.24986 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2609 | 15-20%                  |                 2 |              0.63045 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2722 | >20%                    |                10 |              0.12722 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2807 | 10-15%                  |                 2 |              0.64035 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2915 | >20%                    |                 5 |              0.2583  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3647 | 15-20%                  |                10 |              0.13647 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3981 | 15-20%                  |                10 |              0.13981 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4487 | >20%                    |                 2 |              0.72435 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6218 | >20%                    |                10 |              0.16218 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6937 | >20%                    |                10 |              0.16937 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8642 | >20%                    |                10 |              0.18642 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9074 | 5-10%                   |                10 |              0.19074 |