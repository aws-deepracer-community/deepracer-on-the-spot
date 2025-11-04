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

Data correct as of 2025-11-04 01:51:08.950009, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.097  | 5-10%                   |                 2 |              0.0485  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1475 | >20%                    |                 5 |              0.0295  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1533 | >20%                    |                 2 |              0.07665 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1858 | 10-15%                  |                 5 |              0.03716 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2009 | >20%                    |                 2 |              0.10045 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.246  | >20%                    |                 2 |              0.123   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | >20%                    |                 2 |              0.1264  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2546 | >20%                    |                 5 |              0.05092 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | >20%                    |                 2 |              0.1284  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2575 | 10-15%                  |                 2 |              0.12875 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2593 | >20%                    |                 2 |              0.12965 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2616 | >20%                    |                 5 |              0.05232 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2634 | >20%                    |                 2 |              0.1317  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | 10-15%                  |                 2 |              0.1332  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2682 | 5-10%                   |                 2 |              0.1341  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | 5-10%                   |                 2 |              0.1395  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2794 | >20%                    |                 2 |              0.1397  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2838 | 10-15%                  |                 2 |              0.1419  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | >20%                    |                 2 |              0.1471  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | 15-20%                  |                 2 |              0.15275 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | >20%                    |                 2 |              0.1543  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3145 | >20%                    |                 2 |              0.15725 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.327  | >20%                    |                 2 |              0.1635  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3304 | >20%                    |                 2 |              0.1652  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3346 | 15-20%                  |                 2 |              0.1673  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3371 | >20%                    |                 5 |              0.06742 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3385 | >20%                    |                 2 |              0.16925 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3472 | >20%                    |                 5 |              0.06944 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3686 | >20%                    |                 2 |              0.1843  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3695 | <5%                     |                10 |              0.03695 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3696 | >20%                    |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3709 | >20%                    |                 2 |              0.18545 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | 15-20%                  |                 2 |              0.1894  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3962 | 10-15%                  |                 2 |              0.1981  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3989 | >20%                    |                 2 |              0.19945 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | 5-10%                   |                 2 |              0.20145 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.403  | >20%                    |                 5 |              0.0806  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4131 | >20%                    |                 2 |              0.20655 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4137 | >20%                    |                 5 |              0.08274 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4145 | 5-10%                   |                 5 |              0.0829  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4161 | <5%                     |                 2 |              0.20805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4248 | >20%                    |                 5 |              0.08496 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4263 | >20%                    |                 2 |              0.21315 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4268 | >20%                    |                 2 |              0.2134  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4269 | 15-20%                  |                 2 |              0.21345 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4276 | >20%                    |                10 |              0.04276 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | >20%                    |                 5 |              0.08568 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4339 | >20%                    |                 2 |              0.21695 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4347 | 5-10%                   |                 2 |              0.21735 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4383 | >20%                    |                 5 |              0.08766 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4428 | >20%                    |                 5 |              0.08856 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4432 | 5-10%                   |                 2 |              0.2216  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4463 | >20%                    |                 5 |              0.08926 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.45   | >20%                    |                 5 |              0.09    |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4559 | >20%                    |                 2 |              0.22795 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.456  | >20%                    |                 2 |              0.228   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4579 | 15-20%                  |                 5 |              0.09158 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4582 | >20%                    |                 5 |              0.09164 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4587 | >20%                    |                 2 |              0.22935 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4591 | >20%                    |                 2 |              0.22955 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | >20%                    |                 5 |              0.09184 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4601 | >20%                    |                 5 |              0.09202 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | >20%                    |                 5 |              0.09298 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4663 | >20%                    |                 5 |              0.09326 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4775 | 10-15%                  |                 2 |              0.23875 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4804 | >20%                    |                 2 |              0.2402  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.483  | >20%                    |                 5 |              0.0966  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.485  | 10-15%                  |                 2 |              0.2425  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4875 | 15-20%                  |                10 |              0.04875 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4877 | >20%                    |                 5 |              0.09754 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4881 | >20%                    |                 2 |              0.24405 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5077 | >20%                    |                 2 |              0.25385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5078 | >20%                    |                 5 |              0.10156 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5104 | 15-20%                  |                 5 |              0.10208 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5245 | >20%                    |                10 |              0.05245 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5262 | >20%                    |                10 |              0.05262 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5434 | >20%                    |                 5 |              0.10868 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5473 | >20%                    |                 5 |              0.10946 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5596 | >20%                    |                 5 |              0.11192 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5608 | >20%                    |                 5 |              0.11216 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5615 | >20%                    |                 5 |              0.1123  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.578  | 15-20%                  |                 2 |              0.289   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5898 | >20%                    |                 5 |              0.11796 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5925 | >20%                    |                 5 |              0.1185  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5994 | >20%                    |                 2 |              0.2997  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6003 | >20%                    |                 5 |              0.12006 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6013 | 10-15%                  |                 5 |              0.12026 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6021 | >20%                    |                 5 |              0.12042 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6145 | >20%                    |                 5 |              0.1229  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.617  | >20%                    |                 5 |              0.1234  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6216 | 5-10%                   |                10 |              0.06216 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6305 | 10-15%                  |                 5 |              0.1261  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6379 | >20%                    |                 5 |              0.12758 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6426 | 15-20%                  |                 2 |              0.3213  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6495 | >20%                    |                 2 |              0.32475 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6534 | >20%                    |                 2 |              0.3267  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6575 | 15-20%                  |                10 |              0.06575 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6618 | 15-20%                  |                 5 |              0.13236 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6703 | >20%                    |                10 |              0.06703 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6718 | >20%                    |                 5 |              0.13436 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.673  | 10-15%                  |                 5 |              0.1346  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6747 | 10-15%                  |                 2 |              0.33735 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6758 | 15-20%                  |                10 |              0.06758 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6807 | 15-20%                  |                10 |              0.06807 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6848 | >20%                    |                 5 |              0.13696 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6859 | >20%                    |                 5 |              0.13718 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6873 | >20%                    |                 5 |              0.13746 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6876 | >20%                    |                 5 |              0.13752 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6886 | >20%                    |                10 |              0.06886 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7049 | 15-20%                  |                 5 |              0.14098 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7109 | >20%                    |                10 |              0.07109 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7202 | <5%                     |                10 |              0.07202 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7252 | >20%                    |                10 |              0.07252 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7268 | >20%                    |                10 |              0.07268 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7355 | >20%                    |                10 |              0.07355 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7404 | >20%                    |                 5 |              0.14808 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7406 | >20%                    |                10 |              0.07406 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7449 | >20%                    |                10 |              0.07449 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7507 | >20%                    |                10 |              0.07507 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7571 | 10-15%                  |                 5 |              0.15142 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7612 | >20%                    |                 5 |              0.15224 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7635 | 15-20%                  |                10 |              0.07635 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7695 | >20%                    |                10 |              0.07695 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7726 | 15-20%                  |                10 |              0.07726 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7787 | <5%                     |                10 |              0.07787 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7804 | 15-20%                  |                10 |              0.07804 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.79   | >20%                    |                 2 |              0.395   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7922 | 10-15%                  |                 2 |              0.3961  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7925 | >20%                    |                 5 |              0.1585  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7959 | 10-15%                  |                10 |              0.07959 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8113 | 15-20%                  |                 5 |              0.16226 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8148 | 15-20%                  |                10 |              0.08148 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8154 | 15-20%                  |                10 |              0.08154 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8233 | <5%                     |                10 |              0.08233 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8299 | >20%                    |                 5 |              0.16598 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.836  | >20%                    |                 5 |              0.1672  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8473 | >20%                    |                10 |              0.08473 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8526 | >20%                    |                10 |              0.08526 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8533 | 10-15%                  |                10 |              0.08533 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8634 | 10-15%                  |                10 |              0.08634 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8838 | >20%                    |                10 |              0.08838 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8958 | >20%                    |                 2 |              0.4479  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8959 | 5-10%                   |                10 |              0.08959 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8981 | >20%                    |                10 |              0.08981 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9354 | 15-20%                  |                10 |              0.09354 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9398 | >20%                    |                 5 |              0.18796 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9463 | >20%                    |                 2 |              0.47315 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.947  | 5-10%                   |                10 |              0.0947  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9508 | 10-15%                  |                 2 |              0.4754  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9834 | >20%                    |                10 |              0.09834 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.985  | >20%                    |                10 |              0.0985  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0095 | <5%                     |                10 |              0.10095 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0111 | 5-10%                   |                10 |              0.10111 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0198 | 5-10%                   |                10 |              0.10198 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0271 | >20%                    |                10 |              0.10271 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.042  | >20%                    |                 5 |              0.2084  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0646 | >20%                    |                10 |              0.10646 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0693 | >20%                    |                 2 |              0.53465 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0903 | 15-20%                  |                10 |              0.10903 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.091  | >20%                    |                 5 |              0.2182  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1007 | 10-15%                  |                 5 |              0.22014 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1187 | 15-20%                  |                10 |              0.11187 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1349 | >20%                    |                10 |              0.11349 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1503 | >20%                    |                 5 |              0.23006 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1536 | 10-15%                  |                10 |              0.11536 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.167  | >20%                    |                 5 |              0.2334  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2281 | >20%                    |                10 |              0.12281 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2863 | 10-15%                  |                10 |              0.12863 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3759 | >20%                    |                10 |              0.13759 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.47   | 5-10%                   |                 2 |              0.735   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5707 | 10-15%                  |                 5 |              0.31414 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5835 | >20%                    |                10 |              0.15835 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5841 | >20%                    |                10 |              0.15841 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6228 | >20%                    |                10 |              0.16228 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.634  | >20%                    |                10 |              0.1634  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6448 | 10-15%                  |                10 |              0.16448 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3111 | 15-20%                  |                10 |              0.23111 |