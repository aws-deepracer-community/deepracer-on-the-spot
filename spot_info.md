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

Data correct as of 2026-05-01 03:49:31.078642, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.157  | 15-20%                  |                 2 |              0.0785  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1604 | >20%                    |                 2 |              0.0802  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1685 | >20%                    |                 2 |              0.08425 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2225 | 15-20%                  |                 5 |              0.0445  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | >20%                    |                 2 |              0.1193  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2488 | 15-20%                  |                 2 |              0.1244  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2844 | 15-20%                  |                 5 |              0.05688 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2874 | 15-20%                  |                 5 |              0.05748 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2891 | >20%                    |                 2 |              0.14455 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2913 | >20%                    |                 5 |              0.05826 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | >20%                    |                 2 |              0.14595 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | 15-20%                  |                 2 |              0.14875 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3019 | 10-15%                  |                 2 |              0.15095 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3062 | 10-15%                  |                 2 |              0.1531  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3078 | >20%                    |                 5 |              0.06156 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3105 | >20%                    |                 2 |              0.15525 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3232 | >20%                    |                 5 |              0.06464 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3247 | 10-15%                  |                 2 |              0.16235 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3258 | >20%                    |                10 |              0.03258 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3369 | <5%                     |                 2 |              0.16845 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3575 | >20%                    |                 5 |              0.0715  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3603 | >20%                    |                 2 |              0.18015 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3609 | >20%                    |                 2 |              0.18045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3665 | >20%                    |                 2 |              0.18325 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3678 | >20%                    |                 5 |              0.07356 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.369  | >20%                    |                 5 |              0.0738  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.37   | 5-10%                   |                10 |              0.037   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.38   | 10-15%                  |                 2 |              0.19    |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3809 | >20%                    |                 5 |              0.07618 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3816 | 5-10%                   |                10 |              0.03816 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3903 | >20%                    |                 2 |              0.19515 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3952 | >20%                    |                 5 |              0.07904 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3986 | >20%                    |                 5 |              0.07972 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4016 | >20%                    |                 5 |              0.08032 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4032 | >20%                    |                 5 |              0.08064 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4102 | >20%                    |                 2 |              0.2051  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.411  | >20%                    |                 2 |              0.2055  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4179 | >20%                    |                10 |              0.04179 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4205 | >20%                    |                 5 |              0.0841  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4205 | <5%                     |                 2 |              0.21025 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4351 | >20%                    |                 2 |              0.21755 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4387 | >20%                    |                 5 |              0.08774 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4401 | 5-10%                   |                 2 |              0.22005 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4491 | >20%                    |                10 |              0.04491 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4507 | >20%                    |                 5 |              0.09014 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | >20%                    |                 5 |              0.09046 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4545 | <5%                     |                 2 |              0.22725 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.459  | >20%                    |                 2 |              0.2295  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | >20%                    |                 5 |              0.09218 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4614 | >20%                    |                 2 |              0.2307  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4614 | 15-20%                  |                 2 |              0.2307  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4737 | >20%                    |                 5 |              0.09474 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4771 | >20%                    |                 5 |              0.09542 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4796 | 10-15%                  |                 2 |              0.2398  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | >20%                    |                 5 |              0.09624 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4844 | >20%                    |                10 |              0.04844 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4864 | 15-20%                  |                 2 |              0.2432  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4874 | >20%                    |                 5 |              0.09748 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5015 | >20%                    |                 2 |              0.25075 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5286 | <5%                     |                 5 |              0.10572 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5308 | 5-10%                   |                 5 |              0.10616 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5352 | >20%                    |                 2 |              0.2676  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5372 | 15-20%                  |                 5 |              0.10744 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5525 | 5-10%                   |                 5 |              0.1105  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5533 | 10-15%                  |                 5 |              0.11066 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5554 | >20%                    |                10 |              0.05554 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5751 | >20%                    |                 2 |              0.28755 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.578  | >20%                    |                 5 |              0.1156  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.586  | >20%                    |                 2 |              0.293   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5873 | >20%                    |                 2 |              0.29365 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6037 | 15-20%                  |                 2 |              0.30185 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6234 | 5-10%                   |                 2 |              0.3117  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6294 | >20%                    |                 2 |              0.3147  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6403 | >20%                    |                10 |              0.06403 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6484 | >20%                    |                10 |              0.06484 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6516 | >20%                    |                10 |              0.06516 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.652  | >20%                    |                10 |              0.0652  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.653  | >20%                    |                 2 |              0.3265  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.658  | >20%                    |                 5 |              0.1316  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6643 | 5-10%                   |                10 |              0.06643 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6731 | 10-15%                  |                 2 |              0.33655 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6749 | >20%                    |                 5 |              0.13498 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6766 | >20%                    |                10 |              0.06766 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6767 | >20%                    |                 2 |              0.33835 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6798 | >20%                    |                 5 |              0.13596 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6914 | >20%                    |                10 |              0.06914 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6914 | >20%                    |                 5 |              0.13828 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7004 | >20%                    |                10 |              0.07004 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.712  | >20%                    |                10 |              0.0712  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7122 | >20%                    |                 2 |              0.3561  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7198 | >20%                    |                 5 |              0.14396 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7199 | >20%                    |                 5 |              0.14398 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7218 | >20%                    |                 5 |              0.14436 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7295 | >20%                    |                10 |              0.07295 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7357 | 15-20%                  |                10 |              0.07357 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7398 | >20%                    |                 5 |              0.14796 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7445 | >20%                    |                 5 |              0.1489  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7454 | 15-20%                  |                10 |              0.07454 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7578 | >20%                    |                 5 |              0.15156 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7683 | >20%                    |                 5 |              0.15366 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7882 | 5-10%                   |                10 |              0.07882 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7994 | 15-20%                  |                10 |              0.07994 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8014 | >20%                    |                 5 |              0.16028 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8065 | >20%                    |                10 |              0.08065 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.813  | >20%                    |                10 |              0.0813  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8612 | >20%                    |                 5 |              0.17224 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8648 | >20%                    |                10 |              0.08648 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8771 | >20%                    |                 2 |              0.43855 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8856 |                         |                 2 |              0.4428  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8919 | >20%                    |                10 |              0.08919 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8933 | >20%                    |                 5 |              0.17866 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8946 | 10-15%                  |                10 |              0.08946 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9027 | >20%                    |                10 |              0.09027 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9128 | 5-10%                   |                10 |              0.09128 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9244 | >20%                    |                10 |              0.09244 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9368 | >20%                    |                 5 |              0.18736 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.938  | >20%                    |                10 |              0.0938  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.948  | 15-20%                  |                10 |              0.0948  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9652 | >20%                    |                10 |              0.09652 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9658 | 15-20%                  |                10 |              0.09658 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9911 | >20%                    |                10 |              0.09911 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.04   | 15-20%                  |                10 |              0.104   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0668 | >20%                    |                10 |              0.10668 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1114 | 10-15%                  |                10 |              0.11114 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1489 |                         |                 2 |              0.57445 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1555 | >20%                    |                10 |              0.11555 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1741 |                         |                 5 |              0.23482 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1752 | >20%                    |                10 |              0.11752 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.18   | >20%                    |                 2 |              0.59    |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1901 | >20%                    |                 5 |              0.23802 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2588 | >20%                    |                10 |              0.12588 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2804 | 5-10%                   |                 2 |              0.6402  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2926 | >20%                    |                 5 |              0.25852 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3394 | 5-10%                   |                 2 |              0.6697  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3556 | 15-20%                  |                10 |              0.13556 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3585 | >20%                    |                10 |              0.13585 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3853 | >20%                    |                10 |              0.13853 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.407  | 10-15%                  |                 2 |              0.7035  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4419 | >20%                    |                 5 |              0.28838 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4618 | 15-20%                  |                 5 |              0.29236 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.4745 |                         |                 5 |              0.2949  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5103 | 15-20%                  |                10 |              0.15103 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5261 | >20%                    |                 5 |              0.30522 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5753 | >20%                    |                10 |              0.15753 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.5957 | >20%                    |                10 |              0.15957 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6622 |                         |                10 |              0.16622 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.2645 |                         |                10 |              0.22645 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3244 | >20%                    |                10 |              0.23244 |