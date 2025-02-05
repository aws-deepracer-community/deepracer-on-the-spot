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

Data correct as of 2025-02-05 01:37:06.221643, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1641 | >20%                    |                 2 |              0.08205 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1915 | >20%                    |                 2 |              0.09575 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 10-15%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2104 | <5%                     |                 2 |              0.1052  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.226  | 10-15%                  |                 2 |              0.113   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | 5-10%                   |                 2 |              0.11415 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | 5-10%                   |                 2 |              0.11745 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | 10-15%                  |                 2 |              0.118   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 10-15%                  |                 2 |              0.11935 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | 5-10%                   |                 2 |              0.1246  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | <5%                     |                 2 |              0.1265  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2542 | <5%                     |                 5 |              0.05084 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2561 | <5%                     |                 2 |              0.12805 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2743 | 15-20%                  |                10 |              0.02743 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2793 | >20%                    |                 2 |              0.13965 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | <5%                     |                 2 |              0.1467  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | <5%                     |                 2 |              0.14945 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3007 | 15-20%                  |                 2 |              0.15035 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3037 | <5%                     |                 2 |              0.15185 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.306  | 5-10%                   |                 2 |              0.153   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3068 | 5-10%                   |                 2 |              0.1534  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | 10-15%                  |                 2 |              0.1543  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3217 | <5%                     |                 2 |              0.16085 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3282 | >20%                    |                 2 |              0.1641  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3339 | 5-10%                   |                 5 |              0.06678 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3393 | >20%                    |                 2 |              0.16965 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3472 | 5-10%                   |                 2 |              0.1736  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.35   | >20%                    |                 2 |              0.175   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3548 | 10-15%                  |                 5 |              0.07096 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | <5%                     |                 2 |              0.1802  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3634 | 5-10%                   |                 2 |              0.1817  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3653 | 5-10%                   |                 2 |              0.18265 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3697 | <5%                     |                 5 |              0.07394 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | <5%                     |                 5 |              0.07424 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3724 | 5-10%                   |                 5 |              0.07448 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3733 | 5-10%                   |                 2 |              0.18665 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3907 | >20%                    |                 2 |              0.19535 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3914 | <5%                     |                 5 |              0.07828 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3941 | 10-15%                  |                 5 |              0.07882 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3944 | 10-15%                  |                 2 |              0.1972  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3977 | <5%                     |                 2 |              0.19885 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.402  | 10-15%                  |                 2 |              0.201   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4041 | 5-10%                   |                 5 |              0.08082 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.405  | 5-10%                   |                 2 |              0.2025  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.43   | 15-20%                  |                 5 |              0.086   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4468 | <5%                     |                 2 |              0.2234  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4526 | 5-10%                   |                 2 |              0.2263  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4594 | >20%                    |                 5 |              0.09188 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4631 | >20%                    |                 5 |              0.09262 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | <5%                     |                 5 |              0.0946  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4731 | >20%                    |                10 |              0.04731 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4742 | 10-15%                  |                 5 |              0.09484 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4746 | <5%                     |                 2 |              0.2373  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4778 | >20%                    |                 2 |              0.2389  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4789 | 15-20%                  |                 5 |              0.09578 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | 10-15%                  |                 5 |              0.09672 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4836 | 5-10%                   |                 5 |              0.09672 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4853 | 5-10%                   |                 2 |              0.24265 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4879 | <5%                     |                 5 |              0.09758 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4904 | 10-15%                  |                 2 |              0.2452  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | 15-20%                  |                 5 |              0.09812 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4911 | >20%                    |                 5 |              0.09822 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4924 | <5%                     |                 5 |              0.09848 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.495  | 15-20%                  |                 5 |              0.099   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4964 | >20%                    |                 2 |              0.2482  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | <5%                     |                 5 |              0.09986 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4996 | <5%                     |                10 |              0.04996 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5014 | <5%                     |                 5 |              0.10028 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5084 | >20%                    |                 5 |              0.10168 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5085 | 5-10%                   |                 5 |              0.1017  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5151 | 5-10%                   |                 5 |              0.10302 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5243 | <5%                     |                 2 |              0.26215 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5248 | 10-15%                  |                 2 |              0.2624  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5293 | 10-15%                  |                 5 |              0.10586 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5295 | 5-10%                   |                 2 |              0.26475 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5315 | <5%                     |                 5 |              0.1063  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5411 | 10-15%                  |                 5 |              0.10822 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5556 | <5%                     |                 5 |              0.11112 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5668 | 5-10%                   |                 5 |              0.11336 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5688 | 15-20%                  |                 2 |              0.2844  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5716 | >20%                    |                 5 |              0.11432 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5746 | 15-20%                  |                 5 |              0.11492 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5747 | 5-10%                   |                 5 |              0.11494 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5785 | 5-10%                   |                 5 |              0.1157  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5801 | 5-10%                   |                10 |              0.05801 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5821 | 15-20%                  |                 2 |              0.29105 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5884 | >20%                    |                 2 |              0.2942  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5917 | 10-15%                  |                10 |              0.05917 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.597  | 5-10%                   |                 5 |              0.1194  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6094 | 5-10%                   |                 5 |              0.12188 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6196 | >20%                    |                 2 |              0.3098  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6259 | <5%                     |                10 |              0.06259 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6271 | 5-10%                   |                10 |              0.06271 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.6303 | 15-20%                  |                 2 |              0.31515 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6342 | >20%                    |                 2 |              0.3171  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6357 | >20%                    |                 5 |              0.12714 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6389 | 5-10%                   |                 5 |              0.12778 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6408 | >20%                    |                 2 |              0.3204  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6454 | >20%                    |                10 |              0.06454 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6457 | 5-10%                   |                10 |              0.06457 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6493 | <5%                     |                10 |              0.06493 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6535 | 15-20%                  |                10 |              0.06535 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6655 | 5-10%                   |                 5 |              0.1331  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6679 | 10-15%                  |                10 |              0.06679 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6714 | 5-10%                   |                10 |              0.06714 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6832 | 5-10%                   |                10 |              0.06832 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6892 | <5%                     |                10 |              0.06892 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7007 | 5-10%                   |                 5 |              0.14014 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7026 | 5-10%                   |                10 |              0.07026 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7037 | >20%                    |                 5 |              0.14074 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7113 | 10-15%                  |                10 |              0.07113 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7182 | <5%                     |                 5 |              0.14364 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7329 | >20%                    |                 5 |              0.14658 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.733  | >20%                    |                10 |              0.0733  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.735  | 10-15%                  |                10 |              0.0735  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7407 | 15-20%                  |                10 |              0.07407 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7489 | <5%                     |                 2 |              0.37445 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7503 | >20%                    |                 5 |              0.15006 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7829 | 10-15%                  |                 5 |              0.15658 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7888 | 10-15%                  |                10 |              0.07888 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7929 | 5-10%                   |                10 |              0.07929 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7935 | 5-10%                   |                10 |              0.07935 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7972 | >20%                    |                10 |              0.07972 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7974 | <5%                     |                10 |              0.07974 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | 15-20%                  |                10 |              0.07977 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8012 | 15-20%                  |                 2 |              0.4006  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.8433 | >20%                    |                 5 |              0.16866 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8455 | <5%                     |                10 |              0.08455 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8456 | 5-10%                   |                10 |              0.08456 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8575 | >20%                    |                10 |              0.08575 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8659 | <5%                     |                10 |              0.08659 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8676 | 5-10%                   |                10 |              0.08676 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8786 | 10-15%                  |                 2 |              0.4393  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8809 | 5-10%                   |                 5 |              0.17618 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8853 | <5%                     |                10 |              0.08853 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8891 | <5%                     |                 5 |              0.17782 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8933 | <5%                     |                10 |              0.08933 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.896  | <5%                     |                10 |              0.0896  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9045 | >20%                    |                10 |              0.09045 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9093 | 5-10%                   |                10 |              0.09093 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9121 | 5-10%                   |                10 |              0.09121 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.924  | <5%                     |                10 |              0.0924  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9352 | 15-20%                  |                 2 |              0.4676  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9482 | 5-10%                   |                10 |              0.09482 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9518 | 5-10%                   |                 5 |              0.19036 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9603 | 15-20%                  |                10 |              0.09603 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.963  | 5-10%                   |                 5 |              0.1926  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9742 | 15-20%                  |                10 |              0.09742 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0137 | >20%                    |                10 |              0.10137 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0168 | <5%                     |                10 |              0.10168 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0586 | 15-20%                  |                 5 |              0.21172 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0739 | 5-10%                   |                10 |              0.10739 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.087  | 10-15%                  |                 2 |              0.5435  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1442 | 10-15%                  |                10 |              0.11442 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1875 | 10-15%                  |                10 |              0.11875 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1983 | 5-10%                   |                10 |              0.11983 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2042 | >20%                    |                10 |              0.12042 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2094 | 10-15%                  |                 2 |              0.6047  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.232  | >20%                    |                10 |              0.1232  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.26   | 15-20%                  |                 5 |              0.252   |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2668 | 10-15%                  |                10 |              0.12668 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3389 | 15-20%                  |                10 |              0.13389 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3558 | 5-10%                   |                10 |              0.13558 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4164 | 5-10%                   |                10 |              0.14164 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0041 | 5-10%                   |                10 |              0.20041 |