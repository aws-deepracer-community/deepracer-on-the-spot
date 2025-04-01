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

Data correct as of 2025-04-01 01:56:49.925730, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1272 | 15-20%                  |                 2 |              0.0636  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1457 | 10-15%                  |                 2 |              0.07285 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2003 | <5%                     |                 2 |              0.10015 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2099 | >20%                    |                 2 |              0.10495 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2221 | 15-20%                  |                 2 |              0.11105 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | 15-20%                  |                 2 |              0.11675 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | 15-20%                  |                 2 |              0.12105 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | >20%                    |                 2 |              0.12165 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | >20%                    |                 2 |              0.1242  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2659 | 10-15%                  |                 2 |              0.13295 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | 5-10%                   |                 2 |              0.13735 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | <5%                     |                 2 |              0.1402  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2806 | >20%                    |                 2 |              0.1403  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | <5%                     |                 2 |              0.14315 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2897 | 10-15%                  |                10 |              0.02897 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 5-10%                   |                 2 |              0.1473  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2973 | <5%                     |                 2 |              0.14865 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | 15-20%                  |                 2 |              0.1509  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | 10-15%                  |                 2 |              0.1519  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | >20%                    |                 2 |              0.1547  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | 10-15%                  |                 2 |              0.15685 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3226 | >20%                    |                 2 |              0.1613  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3253 | 10-15%                  |                 5 |              0.06506 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.33   | 15-20%                  |                10 |              0.033   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | 10-15%                  |                 5 |              0.0667  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.334  | 10-15%                  |                 5 |              0.0668  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3445 | >20%                    |                 2 |              0.17225 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3557 | 15-20%                  |                 5 |              0.07114 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3601 | >20%                    |                 2 |              0.18005 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3614 | 5-10%                   |                 5 |              0.07228 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3641 | >20%                    |                 2 |              0.18205 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3649 | >20%                    |                 5 |              0.07298 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3679 | >20%                    |                 2 |              0.18395 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3737 | >20%                    |                10 |              0.03737 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3757 | >20%                    |                 5 |              0.07514 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3789 | <5%                     |                 2 |              0.18945 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3826 | >20%                    |                 2 |              0.1913  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3857 | <5%                     |                 2 |              0.19285 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3908 | 15-20%                  |                 2 |              0.1954  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3964 | 10-15%                  |                 2 |              0.1982  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3973 | >20%                    |                 5 |              0.07946 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4006 | >20%                    |                 5 |              0.08012 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4044 | 15-20%                  |                 2 |              0.2022  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4066 | >20%                    |                 2 |              0.2033  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4112 | >20%                    |                10 |              0.04112 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4125 | >20%                    |                 2 |              0.20625 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4135 | >20%                    |                 2 |              0.20675 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.415  | <5%                     |                 2 |              0.2075  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4221 | >20%                    |                 2 |              0.21105 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.423  | <5%                     |                 2 |              0.2115  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4263 | 10-15%                  |                10 |              0.04263 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | <5%                     |                 2 |              0.2132  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | 5-10%                   |                 5 |              0.08614 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4349 | >20%                    |                 2 |              0.21745 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4432 | 10-15%                  |                 2 |              0.2216  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4439 | >20%                    |                 5 |              0.08878 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | 10-15%                  |                 5 |              0.09012 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | 10-15%                  |                 5 |              0.091   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4594 | >20%                    |                 5 |              0.09188 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4596 | >20%                    |                 2 |              0.2298  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4628 | >20%                    |                 5 |              0.09256 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4647 | <5%                     |                10 |              0.04647 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4659 | >20%                    |                 5 |              0.09318 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | <5%                     |                 5 |              0.09388 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4701 | >20%                    |                 5 |              0.09402 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4765 | 5-10%                   |                 5 |              0.0953  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4784 | >20%                    |                 5 |              0.09568 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | 5-10%                   |                 5 |              0.09572 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4898 | >20%                    |                 5 |              0.09796 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4915 | 5-10%                   |                 2 |              0.24575 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.492  | >20%                    |                 5 |              0.0984  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4923 | >20%                    |                 5 |              0.09846 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4929 | >20%                    |                10 |              0.04929 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4951 | 5-10%                   |                 2 |              0.24755 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4998 | >20%                    |                 2 |              0.2499  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5052 | >20%                    |                 2 |              0.2526  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5082 | >20%                    |                 5 |              0.10164 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5115 | >20%                    |                 5 |              0.1023  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5145 | 15-20%                  |                 5 |              0.1029  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5151 | 5-10%                   |                 5 |              0.10302 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5232 | 5-10%                   |                 5 |              0.10464 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5294 | >20%                    |                 2 |              0.2647  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5298 | >20%                    |                 5 |              0.10596 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5418 | >20%                    |                 2 |              0.2709  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5423 | 5-10%                   |                 5 |              0.10846 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5474 | 15-20%                  |                 2 |              0.2737  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5475 | 10-15%                  |                 5 |              0.1095  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5557 | 15-20%                  |                 2 |              0.27785 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.556  | >20%                    |                10 |              0.0556  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5627 | 15-20%                  |                 5 |              0.11254 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5763 | >20%                    |                 5 |              0.11526 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.578  | >20%                    |                 2 |              0.289   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5788 | <5%                     |                 5 |              0.11576 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5803 | 15-20%                  |                 5 |              0.11606 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5864 | >20%                    |                 2 |              0.2932  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5921 | <5%                     |                 5 |              0.11842 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.596  | >20%                    |                 2 |              0.298   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5987 | >20%                    |                 5 |              0.11974 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5988 | <5%                     |                10 |              0.05988 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6072 | >20%                    |                 5 |              0.12144 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6097 | <5%                     |                 5 |              0.12194 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6099 | 5-10%                   |                10 |              0.06099 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6109 | 10-15%                  |                10 |              0.06109 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6178 | <5%                     |                10 |              0.06178 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6239 | 10-15%                  |                 5 |              0.12478 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6246 | >20%                    |                10 |              0.06246 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6275 | >20%                    |                 2 |              0.31375 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6329 | >20%                    |                10 |              0.06329 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6448 | 10-15%                  |                 5 |              0.12896 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6493 | >20%                    |                10 |              0.06493 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6648 | <5%                     |                 5 |              0.13296 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6656 | >20%                    |                 5 |              0.13312 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6734 | >20%                    |                 5 |              0.13468 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6755 | 10-15%                  |                 2 |              0.33775 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6836 | 10-15%                  |                 5 |              0.13672 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6846 | >20%                    |                10 |              0.06846 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7002 | >20%                    |                10 |              0.07002 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7164 | >20%                    |                 5 |              0.14328 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7254 | >20%                    |                10 |              0.07254 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7263 | <5%                     |                10 |              0.07263 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7309 | <5%                     |                 2 |              0.36545 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7382 | 10-15%                  |                10 |              0.07382 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7432 | >20%                    |                10 |              0.07432 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7434 | 15-20%                  |                 5 |              0.14868 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7605 | >20%                    |                 2 |              0.38025 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.761  | <5%                     |                10 |              0.0761  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7621 | 15-20%                  |                 5 |              0.15242 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7633 | >20%                    |                 2 |              0.38165 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7661 | <5%                     |                 5 |              0.15322 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7709 | 5-10%                   |                10 |              0.07709 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7725 | 5-10%                   |                10 |              0.07725 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7774 | <5%                     |                10 |              0.07774 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7856 | 10-15%                  |                10 |              0.07856 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7892 | >20%                    |                 5 |              0.15784 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8012 | >20%                    |                10 |              0.08012 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8161 | <5%                     |                10 |              0.08161 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.824  | <5%                     |                10 |              0.0824  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8317 | >20%                    |                10 |              0.08317 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8347 | 10-15%                  |                10 |              0.08347 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8385 | >20%                    |                10 |              0.08385 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8444 | 15-20%                  |                10 |              0.08444 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8454 | >20%                    |                10 |              0.08454 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8483 | 15-20%                  |                10 |              0.08483 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8619 | 15-20%                  |                 5 |              0.17238 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8726 | >20%                    |                 2 |              0.4363  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8786 | <5%                     |                10 |              0.08786 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8793 | >20%                    |                10 |              0.08793 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8869 | <5%                     |                10 |              0.08869 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9011 | 10-15%                  |                10 |              0.09011 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9047 | 10-15%                  |                 2 |              0.45235 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9282 | >20%                    |                10 |              0.09282 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9698 | >20%                    |                 5 |              0.19396 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9804 | 5-10%                   |                10 |              0.09804 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9985 | 10-15%                  |                10 |              0.09985 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0036 | 15-20%                  |                10 |              0.10036 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0437 | >20%                    |                10 |              0.10437 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0774 | >20%                    |                 5 |              0.21548 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1062 | <5%                     |                10 |              0.11062 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1288 | 15-20%                  |                10 |              0.11288 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1762 | >20%                    |                 5 |              0.23524 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1889 | >20%                    |                10 |              0.11889 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1922 | 15-20%                  |                10 |              0.11922 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2059 | <5%                     |                10 |              0.12059 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.233  | <5%                     |                 5 |              0.2466  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2522 | >20%                    |                 2 |              0.6261  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2632 | 15-20%                  |                10 |              0.12632 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.306  | 5-10%                   |                 2 |              0.653   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3938 | >20%                    |                10 |              0.13938 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4321 | >20%                    |                 5 |              0.28642 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5509 | 15-20%                  |                10 |              0.15509 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6169 | >20%                    |                10 |              0.16169 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6455 | >20%                    |                10 |              0.16455 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9245 | <5%                     |                10 |              0.19245 |