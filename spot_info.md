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

Data correct as of 2025-11-06 01:52:49.440693, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1054 | 5-10%                   |                 2 |              0.0527  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.159  | >20%                    |                 5 |              0.0318  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1616 | >20%                    |                 5 |              0.03232 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1704 | >20%                    |                 2 |              0.0852  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2196 | >20%                    |                 2 |              0.1098  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | >20%                    |                 2 |              0.1181  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2445 | 10-15%                  |                 2 |              0.12225 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2494 | >20%                    |                 2 |              0.1247  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | >20%                    |                 2 |              0.12505 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | >20%                    |                 2 |              0.127   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | 5-10%                   |                 2 |              0.1324  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | 10-15%                  |                 2 |              0.13365 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2674 | 5-10%                   |                 2 |              0.1337  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2728 | >20%                    |                 2 |              0.1364  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2798 | >20%                    |                 5 |              0.05596 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2816 | >20%                    |                 2 |              0.1408  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2888 | >20%                    |                 2 |              0.1444  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2922 | >20%                    |                 5 |              0.05844 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3046 | >20%                    |                 2 |              0.1523  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | >20%                    |                 2 |              0.15315 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3112 | 10-15%                  |                 2 |              0.1556  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | 15-20%                  |                 2 |              0.15605 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3182 | >20%                    |                 2 |              0.1591  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3323 | >20%                    |                 2 |              0.16615 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.339  | >20%                    |                 2 |              0.1695  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3423 | >20%                    |                 5 |              0.06846 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.359  | >20%                    |                 2 |              0.1795  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3609 | >20%                    |                 2 |              0.18045 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3634 | 15-20%                  |                 2 |              0.1817  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3643 | >20%                    |                 2 |              0.18215 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3647 | >20%                    |                 5 |              0.07294 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3747 | <5%                     |                10 |              0.03747 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | 15-20%                  |                 2 |              0.1874  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3796 | 10-15%                  |                 2 |              0.1898  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3846 | 5-10%                   |                 2 |              0.1923  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3893 | >20%                    |                 2 |              0.19465 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3963 | >20%                    |                 5 |              0.07926 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.406  | 15-20%                  |                 2 |              0.203   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.406  | >20%                    |                 5 |              0.0812  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4065 | 5-10%                   |                 2 |              0.20325 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4108 | <5%                     |                 2 |              0.2054  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4146 | >20%                    |                 5 |              0.08292 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | 5-10%                   |                 5 |              0.08358 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4214 | >20%                    |                 5 |              0.08428 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4246 | >20%                    |                 5 |              0.08492 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4246 | >20%                    |                 2 |              0.2123  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4256 | >20%                    |                 2 |              0.2128  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4299 | >20%                    |                 2 |              0.21495 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4313 | >20%                    |                 2 |              0.21565 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4344 | >20%                    |                 5 |              0.08688 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | >20%                    |                 5 |              0.08746 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4411 | >20%                    |                 5 |              0.08822 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4424 | >20%                    |                 5 |              0.08848 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4444 | >20%                    |                 5 |              0.08888 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4485 | 5-10%                   |                 2 |              0.22425 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4495 | >20%                    |                 5 |              0.0899  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4506 | >20%                    |                 5 |              0.09012 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4541 | >20%                    |                 2 |              0.22705 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4542 | 15-20%                  |                 5 |              0.09084 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4542 | >20%                    |                 2 |              0.2271  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4548 | >20%                    |                 2 |              0.2274  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4551 | >20%                    |                10 |              0.04551 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4562 | >20%                    |                 2 |              0.2281  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4605 | >20%                    |                 2 |              0.23025 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4653 | >20%                    |                 5 |              0.09306 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4738 | >20%                    |                 5 |              0.09476 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4752 | 15-20%                  |                10 |              0.04752 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | 10-15%                  |                 2 |              0.2381  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4765 | >20%                    |                 2 |              0.23825 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4799 | >20%                    |                 5 |              0.09598 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4871 | 10-15%                  |                 2 |              0.24355 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.495  | >20%                    |                 2 |              0.2475  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4979 | 15-20%                  |                 5 |              0.09958 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5024 | >20%                    |                 2 |              0.2512  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5196 | >20%                    |                 5 |              0.10392 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5296 | >20%                    |                10 |              0.05296 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5346 | >20%                    |                 5 |              0.10692 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5417 | >20%                    |                 5 |              0.10834 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5437 | 10-15%                  |                 5 |              0.10874 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5455 | >20%                    |                 5 |              0.1091  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5531 | >20%                    |                 5 |              0.11062 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5531 | >20%                    |                 5 |              0.11062 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5549 | >20%                    |                 5 |              0.11098 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5588 | >20%                    |                 5 |              0.11176 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5795 | 15-20%                  |                 2 |              0.28975 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5987 | >20%                    |                10 |              0.05987 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6    | >20%                    |                 2 |              0.3     |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6018 | 10-15%                  |                 5 |              0.12036 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6201 | >20%                    |                 5 |              0.12402 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6232 | >20%                    |                10 |              0.06232 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.629  | >20%                    |                 2 |              0.3145  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6293 | >20%                    |                 5 |              0.12586 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6355 | <5%                     |                10 |              0.06355 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6412 | >20%                    |                 5 |              0.12824 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6443 | >20%                    |                 2 |              0.32215 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6461 | >20%                    |                10 |              0.06461 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6556 | >20%                    |                 5 |              0.13112 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6599 | >20%                    |                 5 |              0.13198 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6658 | 15-20%                  |                 5 |              0.13316 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6674 | 10-15%                  |                 5 |              0.13348 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6681 | 15-20%                  |                 2 |              0.33405 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6734 | 15-20%                  |                10 |              0.06734 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6755 | 10-15%                  |                 2 |              0.33775 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6771 | 15-20%                  |                10 |              0.06771 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6774 | 10-15%                  |                10 |              0.06774 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6795 | 15-20%                  |                10 |              0.06795 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.681  | >20%                    |                10 |              0.0681  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6814 | >20%                    |                 5 |              0.13628 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6824 | 15-20%                  |                10 |              0.06824 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6835 | >20%                    |                 5 |              0.1367  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.686  | >20%                    |                 5 |              0.1372  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6937 | >20%                    |                10 |              0.06937 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7037 | >20%                    |                10 |              0.07037 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.708  | >20%                    |                 5 |              0.1416  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7116 | 5-10%                   |                10 |              0.07116 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7128 | 15-20%                  |                 5 |              0.14256 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7159 | >20%                    |                10 |              0.07159 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7204 | 15-20%                  |                10 |              0.07204 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7212 | >20%                    |                10 |              0.07212 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7304 | >20%                    |                10 |              0.07304 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7391 | >20%                    |                10 |              0.07391 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7408 | 10-15%                  |                 5 |              0.14816 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7417 | >20%                    |                 5 |              0.14834 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7474 | >20%                    |                 5 |              0.14948 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7627 | <5%                     |                10 |              0.07627 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7634 | 15-20%                  |                10 |              0.07634 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.767  | 10-15%                  |                 2 |              0.3835  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7676 | <5%                     |                10 |              0.07676 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7717 | >20%                    |                10 |              0.07717 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7751 | >20%                    |                 5 |              0.15502 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7817 | >20%                    |                 2 |              0.39085 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7823 | 15-20%                  |                 5 |              0.15646 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7829 | 15-20%                  |                10 |              0.07829 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7987 | 15-20%                  |                10 |              0.07987 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8097 | 10-15%                  |                10 |              0.08097 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8171 | 10-15%                  |                10 |              0.08171 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8303 | >20%                    |                10 |              0.08303 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8367 | >20%                    |                10 |              0.08367 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8422 | >20%                    |                10 |              0.08422 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8464 | 5-10%                   |                10 |              0.08464 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8694 | >20%                    |                10 |              0.08694 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8736 | 5-10%                   |                10 |              0.08736 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8875 | >20%                    |                 5 |              0.1775  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8935 | 10-15%                  |                 2 |              0.44675 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8941 | >20%                    |                 2 |              0.44705 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9523 | <5%                     |                10 |              0.09523 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9705 | >20%                    |                10 |              0.09705 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.978  | >20%                    |                10 |              0.0978  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9995 | 5-10%                   |                10 |              0.09995 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0064 | 5-10%                   |                10 |              0.10064 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0145 | 10-15%                  |                 5 |              0.2029  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0149 | >20%                    |                 2 |              0.50745 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0173 | 15-20%                  |                10 |              0.10173 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0174 | >20%                    |                 5 |              0.20348 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0368 | >20%                    |                 5 |              0.20736 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0472 | 10-15%                  |                10 |              0.10472 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0655 | >20%                    |                10 |              0.10655 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0742 | 15-20%                  |                10 |              0.10742 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0768 | >20%                    |                10 |              0.10768 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0819 | >20%                    |                 5 |              0.21638 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1185 | >20%                    |                 5 |              0.2237  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1264 | >20%                    |                 2 |              0.5632  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1333 | 15-20%                  |                10 |              0.11333 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1841 | >20%                    |                10 |              0.11841 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1975 | >20%                    |                10 |              0.11975 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2276 | >20%                    |                 5 |              0.24552 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2344 | 10-15%                  |                10 |              0.12344 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2992 | >20%                    |                10 |              0.12992 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4477 | 5-10%                   |                 2 |              0.72385 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4893 | >20%                    |                10 |              0.14893 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4933 | 10-15%                  |                10 |              0.14933 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5414 | >20%                    |                10 |              0.15414 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5451 | >20%                    |                10 |              0.15451 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5656 | 10-15%                  |                 5 |              0.31312 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5714 | >20%                    |                10 |              0.15714 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3142 | 15-20%                  |                10 |              0.23142 |