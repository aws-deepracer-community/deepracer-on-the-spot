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

Data correct as of 2026-07-22 02:56:33.615601, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1413 | >20%                    |                 2 |              0.07065 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1554 | >20%                    |                 2 |              0.0777  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1855 | >20%                    |                 2 |              0.09275 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2126 | 15-20%                  |                 2 |              0.1063  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2377 | >20%                    |                 2 |              0.11885 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2445 | >20%                    |                 2 |              0.12225 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | >20%                    |                 2 |              0.12975 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2627 | >20%                    |                 2 |              0.13135 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | >20%                    |                 2 |              0.13365 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2755 | >20%                    |                 2 |              0.13775 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | >20%                    |                 2 |              0.138   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2838 | 15-20%                  |                 2 |              0.1419  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | >20%                    |                 2 |              0.14265 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.288  | 10-15%                  |                 2 |              0.144   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2977 | 5-10%                   |                10 |              0.02977 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3023 | 15-20%                  |                 5 |              0.06046 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | 15-20%                  |                 2 |              0.15415 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | >20%                    |                 2 |              0.15735 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.32   | >20%                    |                 5 |              0.064   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3227 | 15-20%                  |                 5 |              0.06454 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3464 | >20%                    |                 5 |              0.06928 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.347  | >20%                    |                 5 |              0.0694  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3497 | 5-10%                   |                10 |              0.03497 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.352  | >20%                    |                10 |              0.0352  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | >20%                    |                 2 |              0.17925 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | <5%                     |                 2 |              0.18175 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3768 | >20%                    |                10 |              0.03768 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | >20%                    |                 5 |              0.0757  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3817 | >20%                    |                 5 |              0.07634 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3855 | 15-20%                  |                 2 |              0.19275 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3983 | >20%                    |                 5 |              0.07966 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4019 | 10-15%                  |                 2 |              0.20095 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4029 | >20%                    |                 5 |              0.08058 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4105 | >20%                    |                 2 |              0.20525 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4109 | >20%                    |                 2 |              0.20545 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4158 | >20%                    |                 5 |              0.08316 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.416  | >20%                    |                10 |              0.0416  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4218 | >20%                    |                10 |              0.04218 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.422  | 10-15%                  |                 2 |              0.211   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4261 | >20%                    |                10 |              0.04261 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4279 | 5-10%                   |                10 |              0.04279 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4288 | >20%                    |                 5 |              0.08576 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4383 | 10-15%                  |                 2 |              0.21915 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4546 | >20%                    |                 2 |              0.2273  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4609 | >20%                    |                 2 |              0.23045 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4649 | >20%                    |                 2 |              0.23245 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4681 | >20%                    |                 2 |              0.23405 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4681 | >20%                    |                 2 |              0.23405 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4703 | >20%                    |                 5 |              0.09406 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4858 | >20%                    |                10 |              0.04858 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4875 | 15-20%                  |                 5 |              0.0975  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4964 | <5%                     |                 2 |              0.2482  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4971 | >20%                    |                 5 |              0.09942 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.498  | <5%                     |                 2 |              0.249   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5126 | >20%                    |                10 |              0.05126 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.523  | 10-15%                  |                10 |              0.0523  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5253 | >20%                    |                 2 |              0.26265 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5329 | >20%                    |                 5 |              0.10658 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5341 | >20%                    |                 5 |              0.10682 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5525 | 15-20%                  |                 2 |              0.27625 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5569 | >20%                    |                 2 |              0.27845 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5621 | >20%                    |                 5 |              0.11242 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5624 | 10-15%                  |                 5 |              0.11248 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5688 | >20%                    |                 5 |              0.11376 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5688 | >20%                    |                 2 |              0.2844  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5812 | >20%                    |                 5 |              0.11624 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5816 | 5-10%                   |                 2 |              0.2908  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5846 | >20%                    |                 5 |              0.11692 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5881 | >20%                    |                 5 |              0.11762 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5981 | >20%                    |                 5 |              0.11962 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6251 | 5-10%                   |                 5 |              0.12502 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6289 | >20%                    |                10 |              0.06289 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6403 |                         |                 2 |              0.32015 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6433 | >20%                    |                 5 |              0.12866 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6602 | 15-20%                  |                 5 |              0.13204 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6628 | >20%                    |                 2 |              0.3314  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6655 | >20%                    |                10 |              0.06655 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6699 | >20%                    |                 5 |              0.13398 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6715 | >20%                    |                 5 |              0.1343  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6833 | >20%                    |                 5 |              0.13666 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6965 |                         |                 2 |              0.34825 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7013 | 15-20%                  |                10 |              0.07013 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7141 | >20%                    |                 2 |              0.35705 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7208 | >20%                    |                10 |              0.07208 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7222 | >20%                    |                10 |              0.07222 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7242 | 15-20%                  |                 2 |              0.3621  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7287 | >20%                    |                 5 |              0.14574 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7403 | >20%                    |                10 |              0.07403 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7526 | >20%                    |                10 |              0.07526 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7546 | >20%                    |                 5 |              0.15092 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7551 | <5%                     |                 5 |              0.15102 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7694 | >20%                    |                10 |              0.07694 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.773  | >20%                    |                10 |              0.0773  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7757 | >20%                    |                 5 |              0.15514 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7758 | >20%                    |                 2 |              0.3879  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7792 | >20%                    |                10 |              0.07792 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7796 | >20%                    |                 2 |              0.3898  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7874 | 5-10%                   |                10 |              0.07874 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7906 | >20%                    |                10 |              0.07906 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | <5%                     |                10 |              0.07977 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8281 |                         |                 5 |              0.16562 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8282 | 10-15%                  |                 2 |              0.4141  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8331 | >20%                    |                 5 |              0.16662 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8337 | >20%                    |                 5 |              0.16674 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8472 | >20%                    |                10 |              0.08472 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8651 | 15-20%                  |                10 |              0.08651 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8652 | >20%                    |                10 |              0.08652 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.878  | >20%                    |                 2 |              0.439   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.882  | 15-20%                  |                10 |              0.0882  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8879 | 15-20%                  |                10 |              0.08879 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8923 | 10-15%                  |                 2 |              0.44615 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9047 | 5-10%                   |                10 |              0.09047 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.91   | >20%                    |                 5 |              0.182   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9182 | 5-10%                   |                 2 |              0.4591  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9296 | >20%                    |                 5 |              0.18592 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9347 | >20%                    |                10 |              0.09347 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9388 | >20%                    |                10 |              0.09388 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.939  | >20%                    |                10 |              0.0939  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9802 | >20%                    |                 5 |              0.19604 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9817 | 15-20%                  |                10 |              0.09817 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9963 | >20%                    |                 5 |              0.19926 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0044 | >20%                    |                 5 |              0.20088 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0208 | >20%                    |                 5 |              0.20416 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0468 | 5-10%                   |                 5 |              0.20936 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0552 | >20%                    |                 2 |              0.5276  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0628 | >20%                    |                10 |              0.10628 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0951 | 10-15%                  |                 2 |              0.54755 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0971 | >20%                    |                 2 |              0.54855 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1079 | >20%                    |                10 |              0.11079 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1102 | >20%                    |                10 |              0.11102 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1411 | >20%                    |                 5 |              0.22822 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1421 |                         |                10 |              0.11421 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1464 | >20%                    |                10 |              0.11464 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.225  | 15-20%                  |                10 |              0.1225  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2624 | >20%                    |                10 |              0.12624 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2721 |                         |                 5 |              0.25442 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.2962 |                         |                10 |              0.12962 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3043 | 15-20%                  |                10 |              0.13043 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3228 | 5-10%                   |                10 |              0.13228 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3462 | >20%                    |                 5 |              0.26924 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4097 | >20%                    |                 5 |              0.28194 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4138 | >20%                    |                10 |              0.14138 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4594 | >20%                    |                10 |              0.14594 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.474  | >20%                    |                10 |              0.1474  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5064 | 5-10%                   |                 2 |              0.7532  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5312 | 15-20%                  |                10 |              0.15312 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5632 | >20%                    |                10 |              0.15632 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5729 | 10-15%                  |                10 |              0.15729 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5903 | 15-20%                  |                 5 |              0.31806 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0641 | >20%                    |                10 |              0.20641 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1262 | 5-10%                   |                 2 |              1.0631  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2427 | >20%                    |                 5 |              0.44854 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.293  | >20%                    |                 5 |              0.4586  |