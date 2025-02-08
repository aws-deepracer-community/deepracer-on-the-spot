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

Data correct as of 2025-02-08 01:27:24.584940, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1401 | >20%                    |                 2 |              0.07005 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1914 | >20%                    |                 2 |              0.0957  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 10-15%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2168 | <5%                     |                 2 |              0.1084  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2182 | <5%                     |                 5 |              0.04364 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2247 | 10-15%                  |                 2 |              0.11235 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | 5-10%                   |                 2 |              0.11315 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2307 | 10-15%                  |                 2 |              0.11535 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | 5-10%                   |                 2 |              0.11855 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | 5-10%                   |                 2 |              0.1197  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | 10-15%                  |                 2 |              0.12435 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2489 | <5%                     |                 2 |              0.12445 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2659 | >20%                    |                 2 |              0.13295 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | <5%                     |                 2 |              0.135   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | <5%                     |                 2 |              0.1437  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | <5%                     |                 2 |              0.14675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | <5%                     |                 2 |              0.1486  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | 10-15%                  |                 2 |              0.1494  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3002 | 15-20%                  |                 2 |              0.1501  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3028 | 5-10%                   |                 2 |              0.1514  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3047 | 5-10%                   |                 2 |              0.15235 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3147 | <5%                     |                 5 |              0.06294 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3189 | >20%                    |                 2 |              0.15945 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3261 | <5%                     |                 2 |              0.16305 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3289 | >20%                    |                 2 |              0.16445 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3348 | 5-10%                   |                 5 |              0.06696 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | >20%                    |                 2 |              0.16885 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3437 | <5%                     |                10 |              0.03437 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3524 | 10-15%                  |                 2 |              0.1762  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3528 | 10-15%                  |                 5 |              0.07056 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3582 | 5-10%                   |                 2 |              0.1791  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3607 | 5-10%                   |                 5 |              0.07214 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | <5%                     |                 2 |              0.1815  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3635 | 5-10%                   |                 2 |              0.18175 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3642 | 5-10%                   |                 2 |              0.1821  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3695 | 5-10%                   |                 2 |              0.18475 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3789 | <5%                     |                 5 |              0.07578 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.383  | >20%                    |                 2 |              0.1915  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | <5%                     |                 5 |              0.07834 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3923 | <5%                     |                 2 |              0.19615 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3953 | 5-10%                   |                 5 |              0.07906 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3976 | 15-20%                  |                 5 |              0.07952 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.399  | 10-15%                  |                 5 |              0.0798  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4034 | 10-15%                  |                 2 |              0.2017  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | 5-10%                   |                 2 |              0.20435 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4166 | >20%                    |                10 |              0.04166 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4183 | <5%                     |                10 |              0.04183 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4278 | 15-20%                  |                 5 |              0.08556 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4395 | 5-10%                   |                 2 |              0.21975 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4444 | 5-10%                   |                 5 |              0.08888 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4584 | <5%                     |                 2 |              0.2292  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4586 | >20%                    |                 5 |              0.09172 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4681 | <5%                     |                 2 |              0.23405 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4731 | >20%                    |                 2 |              0.23655 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4745 | <5%                     |                 5 |              0.0949  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4765 | <5%                     |                 5 |              0.0953  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | >20%                    |                 5 |              0.09564 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4798 | >20%                    |                 5 |              0.09596 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4834 | 15-20%                  |                 5 |              0.09668 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4862 | >20%                    |                 5 |              0.09724 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4919 | 10-15%                  |                 5 |              0.09838 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | <5%                     |                 5 |              0.09854 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | 10-15%                  |                 5 |              0.09946 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4978 | >20%                    |                 2 |              0.2489  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.503  | 10-15%                  |                 2 |              0.2515  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | <5%                     |                 5 |              0.10136 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.507  | 15-20%                  |                 5 |              0.1014  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5105 | <5%                     |                 5 |              0.1021  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5134 | <5%                     |                 2 |              0.2567  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5193 | 10-15%                  |                 2 |              0.25965 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5203 | 5-10%                   |                 2 |              0.26015 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5259 | 5-10%                   |                 2 |              0.26295 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5282 | 10-15%                  |                 5 |              0.10564 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5371 | 5-10%                   |                 5 |              0.10742 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5379 | <5%                     |                 5 |              0.10758 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5425 | 10-15%                  |                 5 |              0.1085  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5451 | >20%                    |                 2 |              0.27255 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.558  | <5%                     |                 5 |              0.1116  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5617 | 5-10%                   |                 5 |              0.11234 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5659 | 15-20%                  |                10 |              0.05659 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5672 | >20%                    |                10 |              0.05672 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5687 | 5-10%                   |                 5 |              0.11374 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | 5-10%                   |                 5 |              0.11458 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5732 | 15-20%                  |                 2 |              0.2866  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5736 | 5-10%                   |                 5 |              0.11472 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5775 | 10-15%                  |                10 |              0.05775 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5839 | 15-20%                  |                 2 |              0.29195 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5847 | 5-10%                   |                10 |              0.05847 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5907 | >20%                    |                 2 |              0.29535 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5946 | 5-10%                   |                10 |              0.05946 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5974 | 5-10%                   |                 5 |              0.11948 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6042 | >20%                    |                 2 |              0.3021  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6054 | 5-10%                   |                10 |              0.06054 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6218 | 15-20%                  |                 5 |              0.12436 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6235 | 5-10%                   |                 5 |              0.1247  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6246 | 5-10%                   |                10 |              0.06246 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6282 | 5-10%                   |                 5 |              0.12564 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6359 | >20%                    |                 5 |              0.12718 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.6421 | 15-20%                  |                 2 |              0.32105 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6507 | 5-10%                   |                 5 |              0.13014 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.657  | >20%                    |                 5 |              0.1314  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6744 | >20%                    |                 2 |              0.3372  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6757 | <5%                     |                10 |              0.06757 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6774 | 10-15%                  |                10 |              0.06774 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6809 | 5-10%                   |                 5 |              0.13618 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6825 | <5%                     |                10 |              0.06825 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7006 | 5-10%                   |                10 |              0.07006 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7082 | <5%                     |                10 |              0.07082 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | 5-10%                   |                10 |              0.07106 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7135 | 10-15%                  |                10 |              0.07135 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7151 | 15-20%                  |                10 |              0.07151 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7224 | >20%                    |                 5 |              0.14448 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7484 | <5%                     |                 5 |              0.14968 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7507 | >20%                    |                 5 |              0.15014 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7526 | >20%                    |                 5 |              0.15052 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.759  | 10-15%                  |                 5 |              0.1518  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7629 | >20%                    |                10 |              0.07629 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7638 | >20%                    |                 5 |              0.15276 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7651 | <5%                     |                 2 |              0.38255 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7652 | 10-15%                  |                10 |              0.07652 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7831 | 5-10%                   |                10 |              0.07831 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.796  | <5%                     |                10 |              0.0796  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8003 | 5-10%                   |                10 |              0.08003 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8062 | >20%                    |                10 |              0.08062 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8223 | 10-15%                  |                10 |              0.08223 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8248 | 15-20%                  |                10 |              0.08248 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8487 | <5%                     |                10 |              0.08487 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.856  | 15-20%                  |                 2 |              0.428   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8588 | 10-15%                  |                 2 |              0.4294  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8597 | <5%                     |                 5 |              0.17194 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8693 | >20%                    |                10 |              0.08693 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.87   | <5%                     |                10 |              0.087   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8731 | >20%                    |                10 |              0.08731 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8785 | 5-10%                   |                10 |              0.08785 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8819 | <5%                     |                10 |              0.08819 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8878 | 5-10%                   |                10 |              0.08878 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8889 | 5-10%                   |                10 |              0.08889 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8912 | <5%                     |                10 |              0.08912 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.892  | 5-10%                   |                 5 |              0.1784  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8935 | <5%                     |                10 |              0.08935 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8969 | <5%                     |                10 |              0.08969 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9057 | 5-10%                   |                10 |              0.09057 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | 5-10%                   |                10 |              0.09163 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9409 | 15-20%                  |                10 |              0.09409 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9541 | 5-10%                   |                 5 |              0.19082 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9849 | 15-20%                  |                 2 |              0.49245 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9983 | >20%                    |                10 |              0.09983 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0216 | 5-10%                   |                 5 |              0.20432 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0223 | 15-20%                  |                10 |              0.10223 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0234 | <5%                     |                10 |              0.10234 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0505 | 15-20%                  |                 5 |              0.2101  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0769 | 5-10%                   |                10 |              0.10769 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0983 | 10-15%                  |                 2 |              0.54915 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1588 | >20%                    |                10 |              0.11588 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.17   | 10-15%                  |                10 |              0.117   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1779 | 5-10%                   |                10 |              0.11779 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1793 | 10-15%                  |                10 |              0.11793 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2052 | 10-15%                  |                 2 |              0.6026  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2076 | 10-15%                  |                10 |              0.12076 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2725 | 15-20%                  |                 5 |              0.2545  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2727 | >20%                    |                10 |              0.12727 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3404 | 15-20%                  |                10 |              0.13404 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3782 | 5-10%                   |                10 |              0.13782 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4018 | 5-10%                   |                10 |              0.14018 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0633 | 5-10%                   |                10 |              0.20633 |