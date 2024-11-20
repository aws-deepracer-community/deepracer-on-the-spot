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

Data correct as of 2024-11-20 01:41:38.566242, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1242 | >20%                    |                 5 |              0.02484 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1709 | 10-15%                  |                 2 |              0.08545 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2147 | >20%                    |                 5 |              0.04294 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2217 | 15-20%                  |                 2 |              0.11085 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2221 | 5-10%                   |                 2 |              0.11105 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2376 | 5-10%                   |                 2 |              0.1188  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | <5%                     |                 2 |              0.1193  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | 5-10%                   |                 2 |              0.12635 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | 10-15%                  |                 2 |              0.135   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | <5%                     |                 2 |              0.1391  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2882 | 5-10%                   |                 2 |              0.1441  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | <5%                     |                 2 |              0.14585 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3213 | <5%                     |                 2 |              0.16065 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3227 | 10-15%                  |                 2 |              0.16135 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3303 | 15-20%                  |                 5 |              0.06606 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3339 | <5%                     |                 5 |              0.06678 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3385 | 5-10%                   |                 2 |              0.16925 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3414 | >20%                    |                 2 |              0.1707  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3502 | <5%                     |                 2 |              0.1751  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3514 | >20%                    |                 2 |              0.1757  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | >20%                    |                 2 |              0.17765 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3603 | <5%                     |                 5 |              0.07206 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3623 | <5%                     |                10 |              0.03623 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3637 | 5-10%                   |                 2 |              0.18185 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3711 | >20%                    |                 5 |              0.07422 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3717 | <5%                     |                 2 |              0.18585 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3884 | 15-20%                  |                 5 |              0.07768 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.394  | 5-10%                   |                 2 |              0.197   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.398  | >20%                    |                 2 |              0.199   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4021 | <5%                     |                 2 |              0.20105 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4048 | >20%                    |                 5 |              0.08096 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4049 | >20%                    |                 2 |              0.20245 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.407  | >20%                    |                 5 |              0.0814  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4141 | 5-10%                   |                 2 |              0.20705 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | 5-10%                   |                 2 |              0.20755 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4192 | 5-10%                   |                 2 |              0.2096  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4258 | >20%                    |                 2 |              0.2129  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | 10-15%                  |                 2 |              0.2151  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4335 | >20%                    |                 2 |              0.21675 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4349 | >20%                    |                 2 |              0.21745 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4444 | 5-10%                   |                 5 |              0.08888 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4487 | <5%                     |                 5 |              0.08974 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4506 | <5%                     |                10 |              0.04506 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | 5-10%                   |                 5 |              0.0911  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4574 | 10-15%                  |                 5 |              0.09148 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4589 | 5-10%                   |                 5 |              0.09178 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4596 | 5-10%                   |                 5 |              0.09192 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4616 | <5%                     |                 2 |              0.2308  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | 15-20%                  |                 5 |              0.09392 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4729 | >20%                    |                10 |              0.04729 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4786 | 15-20%                  |                 5 |              0.09572 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | 15-20%                  |                 5 |              0.09698 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.489  | <5%                     |                 2 |              0.2445  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4972 | 5-10%                   |                 2 |              0.2486  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5116 | 10-15%                  |                 2 |              0.2558  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5119 | 10-15%                  |                 2 |              0.25595 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | <5%                     |                 5 |              0.10286 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5188 | <5%                     |                 5 |              0.10376 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5239 | <5%                     |                 5 |              0.10478 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5289 | 5-10%                   |                 2 |              0.26445 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5357 | <5%                     |                 5 |              0.10714 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5391 | >20%                    |                 5 |              0.10782 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5392 | 15-20%                  |                 5 |              0.10784 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5471 | >20%                    |                10 |              0.05471 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | >20%                    |                 5 |              0.11038 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5521 | 5-10%                   |                 5 |              0.11042 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5549 | >20%                    |                10 |              0.05549 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5561 | 10-15%                  |                 5 |              0.11122 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5575 | >20%                    |                 5 |              0.1115  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5698 | >20%                    |                10 |              0.05698 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5713 | >20%                    |                 2 |              0.28565 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5765 | 10-15%                  |                 5 |              0.1153  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5807 | 10-15%                  |                10 |              0.05807 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5895 | 15-20%                  |                 2 |              0.29475 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6196 | 5-10%                   |                 5 |              0.12392 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6265 | 5-10%                   |                10 |              0.06265 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6618 | 10-15%                  |                10 |              0.06618 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6659 | >20%                    |                 5 |              0.13318 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6676 | >20%                    |                 2 |              0.3338  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6693 | >20%                    |                 5 |              0.13386 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6741 | <5%                     |                 5 |              0.13482 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6785 | 15-20%                  |                 5 |              0.1357  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6797 | 5-10%                   |                10 |              0.06797 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6908 | 5-10%                   |                 5 |              0.13816 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6927 | <5%                     |                 5 |              0.13854 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6947 | >20%                    |                10 |              0.06947 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7089 | <5%                     |                 5 |              0.14178 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.711  | >20%                    |                10 |              0.0711  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7328 | 5-10%                   |                10 |              0.07328 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7389 | 15-20%                  |                 5 |              0.14778 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7502 | <5%                     |                 5 |              0.15004 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7532 | <5%                     |                10 |              0.07532 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7615 | 10-15%                  |                10 |              0.07615 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7619 | >20%                    |                10 |              0.07619 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7728 | 10-15%                  |                10 |              0.07728 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7765 | <5%                     |                 2 |              0.38825 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7907 | 5-10%                   |                 5 |              0.15814 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7956 | 15-20%                  |                10 |              0.07956 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8079 | >20%                    |                10 |              0.08079 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8131 | 5-10%                   |                10 |              0.08131 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.821  | 5-10%                   |                10 |              0.0821  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8414 | 10-15%                  |                10 |              0.08414 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8487 | >20%                    |                 5 |              0.16974 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8566 | 5-10%                   |                10 |              0.08566 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8671 | >20%                    |                10 |              0.08671 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8834 | 5-10%                   |                10 |              0.08834 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8844 | 5-10%                   |                10 |              0.08844 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9155 | 5-10%                   |                10 |              0.09155 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9434 | 15-20%                  |                10 |              0.09434 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9716 | <5%                     |                10 |              0.09716 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9721 | <5%                     |                10 |              0.09721 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9885 | <5%                     |                10 |              0.09885 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0146 | 5-10%                   |                10 |              0.10146 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0158 | <5%                     |                10 |              0.10158 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0269 | >20%                    |                10 |              0.10269 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0338 | 15-20%                  |                10 |              0.10338 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0471 | >20%                    |                10 |              0.10471 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0635 | <5%                     |                10 |              0.10635 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1363 | 10-15%                  |                10 |              0.11363 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1689 | 15-20%                  |                10 |              0.11689 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.362  | >20%                    |                10 |              0.1362  |