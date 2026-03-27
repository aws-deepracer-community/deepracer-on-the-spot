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

Data correct as of 2026-03-27 02:47:52.182752, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1092 | >20%                    |                 2 |              0.0546  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.115  | >20%                    |                 2 |              0.0575  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1347 | <5%                     |                 2 |              0.06735 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1555 | 10-15%                  |                 5 |              0.0311  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2003 | 15-20%                  |                 2 |              0.10015 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2055 | >20%                    |                 2 |              0.10275 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.228  | 15-20%                  |                 2 |              0.114   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2284 | >20%                    |                 2 |              0.1142  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.229  | 10-15%                  |                 5 |              0.0458  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2399 | >20%                    |                 2 |              0.11995 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | >20%                    |                 2 |              0.1216  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | >20%                    |                 2 |              0.126   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2592 | 10-15%                  |                 2 |              0.1296  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2605 | 5-10%                   |                10 |              0.02605 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2609 | >20%                    |                 2 |              0.13045 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2663 | 15-20%                  |                 5 |              0.05326 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | 15-20%                  |                 2 |              0.13785 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2902 | >20%                    |                10 |              0.02902 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | 5-10%                   |                 2 |              0.147   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2942 | 10-15%                  |                 2 |              0.1471  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3071 | >20%                    |                10 |              0.03071 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3146 | 10-15%                  |                 2 |              0.1573  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3185 | >20%                    |                 5 |              0.0637  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3193 | 5-10%                   |                10 |              0.03193 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3194 | <5%                     |                 5 |              0.06388 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3244 | >20%                    |                 5 |              0.06488 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3321 | >20%                    |                 5 |              0.06642 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3367 | >20%                    |                 5 |              0.06734 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3392 | >20%                    |                 5 |              0.06784 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3408 | >20%                    |                 2 |              0.1704  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3413 | <5%                     |                 2 |              0.17065 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3427 | 15-20%                  |                 5 |              0.06854 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3487 | 10-15%                  |                 2 |              0.17435 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3495 | >20%                    |                10 |              0.03495 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3507 | 15-20%                  |                 5 |              0.07014 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3512 | <5%                     |                 2 |              0.1756  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3514 | <5%                     |                 2 |              0.1757  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3552 | >20%                    |                10 |              0.03552 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3681 | >20%                    |                 2 |              0.18405 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | 15-20%                  |                 2 |              0.18415 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3725 | >20%                    |                 5 |              0.0745  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | >20%                    |                 2 |              0.18645 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.375  | 10-15%                  |                 5 |              0.075   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | <5%                     |                 5 |              0.07598 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3906 | >20%                    |                 5 |              0.07812 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | <5%                     |                10 |              0.03955 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3961 | >20%                    |                 2 |              0.19805 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4024 | 10-15%                  |                 2 |              0.2012  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4036 | >20%                    |                 5 |              0.08072 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4061 | >20%                    |                 5 |              0.08122 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4089 | 10-15%                  |                 2 |              0.20445 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4126 | <5%                     |                10 |              0.04126 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4134 | 15-20%                  |                10 |              0.04134 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4156 | >20%                    |                 2 |              0.2078  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4157 | 15-20%                  |                 2 |              0.20785 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4186 | 5-10%                   |                10 |              0.04186 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | >20%                    |                 2 |              0.20985 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4212 | >20%                    |                10 |              0.04212 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | >20%                    |                 2 |              0.21185 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4241 | 15-20%                  |                10 |              0.04241 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4248 | <5%                     |                 2 |              0.2124  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | >20%                    |                 5 |              0.08498 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | >20%                    |                 5 |              0.0851  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4264 | <5%                     |                 5 |              0.08528 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | >20%                    |                 2 |              0.21815 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4451 | >20%                    |                 2 |              0.22255 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4473 | >20%                    |                 5 |              0.08946 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4518 | >20%                    |                 5 |              0.09036 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4524 | >20%                    |                 2 |              0.2262  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4541 | >20%                    |                 5 |              0.09082 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4566 | <5%                     |                10 |              0.04566 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4598 | >20%                    |                 2 |              0.2299  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4644 | <5%                     |                10 |              0.04644 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4687 | 15-20%                  |                 2 |              0.23435 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4713 | >20%                    |                 5 |              0.09426 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4728 | >20%                    |                 5 |              0.09456 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4777 | >20%                    |                 5 |              0.09554 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4811 | >20%                    |                 5 |              0.09622 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4864 | >20%                    |                 5 |              0.09728 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4888 | >20%                    |                 2 |              0.2444  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4923 | >20%                    |                 5 |              0.09846 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4928 | >20%                    |                 5 |              0.09856 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | >20%                    |                 5 |              0.09946 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5027 | >20%                    |                 5 |              0.10054 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5045 | >20%                    |                 2 |              0.25225 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5094 | >20%                    |                 5 |              0.10188 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5205 | 15-20%                  |                 2 |              0.26025 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5242 | 15-20%                  |                 5 |              0.10484 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5308 | >20%                    |                 5 |              0.10616 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5366 | 15-20%                  |                10 |              0.05366 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5407 | >20%                    |                10 |              0.05407 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5473 | >20%                    |                 5 |              0.10946 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5487 | 5-10%                   |                 5 |              0.10974 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5551 | >20%                    |                10 |              0.05551 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5637 | >20%                    |                 2 |              0.28185 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5696 | >20%                    |                 2 |              0.2848  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5698 | 5-10%                   |                 2 |              0.2849  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5783 | >20%                    |                10 |              0.05783 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.58   | 10-15%                  |                10 |              0.058   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5803 | >20%                    |                 2 |              0.29015 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5832 | 10-15%                  |                 5 |              0.11664 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5852 | <5%                     |                10 |              0.05852 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5989 | >20%                    |                10 |              0.05989 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6109 | >20%                    |                10 |              0.06109 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.612  | >20%                    |                 2 |              0.306   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6194 | >20%                    |                 5 |              0.12388 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6216 | >20%                    |                 5 |              0.12432 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6236 | >20%                    |                 5 |              0.12472 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6302 | 10-15%                  |                 2 |              0.3151  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.637  | >20%                    |                 5 |              0.1274  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.64   | >20%                    |                 5 |              0.128   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6514 | 5-10%                   |                10 |              0.06514 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6626 | >20%                    |                10 |              0.06626 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6649 | 5-10%                   |                 5 |              0.13298 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6662 | >20%                    |                10 |              0.06662 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6722 | >20%                    |                10 |              0.06722 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6732 | >20%                    |                 5 |              0.13464 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6741 | >20%                    |                10 |              0.06741 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.68   | >20%                    |                 5 |              0.136   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6877 | >20%                    |                 2 |              0.34385 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6965 | >20%                    |                 2 |              0.34825 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7058 | >20%                    |                10 |              0.07058 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7238 | >20%                    |                 5 |              0.14476 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7301 | >20%                    |                 5 |              0.14602 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7319 | >20%                    |                10 |              0.07319 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.735  | >20%                    |                10 |              0.0735  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7355 | <5%                     |                 2 |              0.36775 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7437 | >20%                    |                 5 |              0.14874 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7469 | 5-10%                   |                 2 |              0.37345 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7485 | >20%                    |                 5 |              0.1497  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7599 | >20%                    |                10 |              0.07599 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7713 | >20%                    |                10 |              0.07713 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7741 | >20%                    |                 5 |              0.15482 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7822 | >20%                    |                 5 |              0.15644 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7831 | >20%                    |                10 |              0.07831 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8086 | >20%                    |                10 |              0.08086 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8111 | >20%                    |                10 |              0.08111 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8131 | 5-10%                   |                 2 |              0.40655 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8289 | >20%                    |                 2 |              0.41445 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8326 | >20%                    |                10 |              0.08326 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.845  | >20%                    |                 5 |              0.169   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.851  | >20%                    |                 2 |              0.4255  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8598 | >20%                    |                 5 |              0.17196 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8609 | 5-10%                   |                10 |              0.08609 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8816 | >20%                    |                10 |              0.08816 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.89   | >20%                    |                10 |              0.089   |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8928 | <5%                     |                 5 |              0.17856 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9149 | >20%                    |                 2 |              0.45745 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9237 | 15-20%                  |                10 |              0.09237 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9255 | >20%                    |                10 |              0.09255 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9301 | >20%                    |                10 |              0.09301 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9363 | >20%                    |                10 |              0.09363 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9436 | >20%                    |                 2 |              0.4718  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9456 | 10-15%                  |                10 |              0.09456 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9597 | 15-20%                  |                10 |              0.09597 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9732 | >20%                    |                10 |              0.09732 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9979 | 15-20%                  |                10 |              0.09979 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.014  | 5-10%                   |                10 |              0.1014  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0491 | >20%                    |                10 |              0.10491 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0587 | >20%                    |                10 |              0.10587 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0684 | >20%                    |                 5 |              0.21368 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0733 | >20%                    |                10 |              0.10733 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0758 | 10-15%                  |                 2 |              0.5379  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0875 | >20%                    |                 5 |              0.2175  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1076 | >20%                    |                 5 |              0.22152 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1602 | >20%                    |                10 |              0.11602 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1657 | 10-15%                  |                10 |              0.11657 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.171  | >20%                    |                 5 |              0.2342  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1988 | <5%                     |                 2 |              0.5994  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2242 | >20%                    |                 5 |              0.24484 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3043 | 5-10%                   |                 2 |              0.65215 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.3102 | <5%                     |                 5 |              0.26204 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3193 | 15-20%                  |                10 |              0.13193 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3519 | >20%                    |                 2 |              0.67595 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3641 | >20%                    |                10 |              0.13641 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4065 | 15-20%                  |                 5 |              0.2813  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4291 | 15-20%                  |                10 |              0.14291 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9184 | >20%                    |                10 |              0.19184 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.4247 | <5%                     |                10 |              0.24247 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.6375 | >20%                    |                10 |              0.26375 |