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

Data correct as of 2025-02-06 01:37:39.379041, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1593 | >20%                    |                 2 |              0.07965 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.191  | >20%                    |                 2 |              0.0955  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 10-15%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2168 | <5%                     |                 2 |              0.1084  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2284 | 10-15%                  |                 2 |              0.1142  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 5-10%                   |                 2 |              0.11555 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2337 | 5-10%                   |                 2 |              0.11685 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | 10-15%                  |                 2 |              0.118   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | 10-15%                  |                 2 |              0.1217  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | 5-10%                   |                 2 |              0.12315 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2467 | <5%                     |                 5 |              0.04934 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | <5%                     |                 2 |              0.12745 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | <5%                     |                 2 |              0.12835 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.262  | 15-20%                  |                10 |              0.0262  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | >20%                    |                 2 |              0.13545 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2901 | <5%                     |                 2 |              0.14505 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | <5%                     |                 2 |              0.1492  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2999 | 15-20%                  |                 2 |              0.14995 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | <5%                     |                 2 |              0.1518  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | 5-10%                   |                 2 |              0.153   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3075 | 5-10%                   |                 2 |              0.15375 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | 10-15%                  |                 2 |              0.15445 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3207 | <5%                     |                 2 |              0.16035 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3306 | >20%                    |                 2 |              0.1653  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | 5-10%                   |                 5 |              0.0667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3393 | >20%                    |                 2 |              0.16965 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3485 | >20%                    |                 2 |              0.17425 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3542 | 5-10%                   |                 2 |              0.1771  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3548 | 10-15%                  |                 5 |              0.07096 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3562 | <5%                     |                 5 |              0.07124 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.36   | <5%                     |                 2 |              0.18    |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | 5-10%                   |                 2 |              0.1815  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3636 | 5-10%                   |                 2 |              0.1818  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | 5-10%                   |                 5 |              0.07326 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3676 | 5-10%                   |                 2 |              0.1838  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3789 | <5%                     |                 5 |              0.07578 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3863 | 10-15%                  |                 2 |              0.19315 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3901 | >20%                    |                 2 |              0.19505 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.392  | <5%                     |                 5 |              0.0784  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3941 | 10-15%                  |                 5 |              0.07882 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3956 | <5%                     |                 2 |              0.1978  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.399  | 10-15%                  |                 2 |              0.1995  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4029 | 5-10%                   |                 5 |              0.08058 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4074 | 5-10%                   |                 2 |              0.2037  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4288 | 15-20%                  |                 5 |              0.08576 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4491 | >20%                    |                 5 |              0.08982 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4493 | 5-10%                   |                 2 |              0.22465 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4582 | <5%                     |                 2 |              0.2291  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4588 | 15-20%                  |                 5 |              0.09176 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4613 | >20%                    |                10 |              0.04613 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4633 | >20%                    |                 5 |              0.09266 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4658 | 5-10%                   |                 5 |              0.09316 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4718 | <5%                     |                10 |              0.04718 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4719 | <5%                     |                 2 |              0.23595 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4744 | >20%                    |                 2 |              0.2372  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4759 | 10-15%                  |                 5 |              0.09518 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | <5%                     |                 5 |              0.09592 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4832 | <5%                     |                 5 |              0.09664 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4873 | 10-15%                  |                 2 |              0.24365 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4895 | >20%                    |                 5 |              0.0979  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | 10-15%                  |                 5 |              0.098   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4918 | 15-20%                  |                 5 |              0.09836 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4928 | <5%                     |                 5 |              0.09856 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4948 | >20%                    |                 2 |              0.2474  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4961 | 5-10%                   |                 2 |              0.24805 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4964 | <5%                     |                 5 |              0.09928 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4971 | 15-20%                  |                 5 |              0.09942 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5075 | <5%                     |                 5 |              0.1015  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5119 | 5-10%                   |                 5 |              0.10238 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.526  | 10-15%                  |                 2 |              0.263   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5262 | 5-10%                   |                 2 |              0.2631  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5286 | <5%                     |                 2 |              0.2643  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5288 | 5-10%                   |                 5 |              0.10576 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5305 | 10-15%                  |                 5 |              0.1061  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5324 | <5%                     |                 5 |              0.10648 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5377 | 10-15%                  |                 5 |              0.10754 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5596 | <5%                     |                 5 |              0.11192 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5698 | 5-10%                   |                 5 |              0.11396 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5715 | 15-20%                  |                 2 |              0.28575 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5726 | 5-10%                   |                 5 |              0.11452 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5787 | 5-10%                   |                 5 |              0.11574 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5799 | >20%                    |                 5 |              0.11598 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5801 | 5-10%                   |                10 |              0.05801 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5829 | >20%                    |                 2 |              0.29145 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5839 | 10-15%                  |                10 |              0.05839 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5908 | 5-10%                   |                 5 |              0.11816 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5911 | 15-20%                  |                 2 |              0.29555 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5943 | 15-20%                  |                 5 |              0.11886 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6043 | 5-10%                   |                 5 |              0.12086 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6086 | >20%                    |                10 |              0.06086 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6142 | >20%                    |                 2 |              0.3071  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6167 | 5-10%                   |                10 |              0.06167 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6196 | >20%                    |                 2 |              0.3098  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6262 | <5%                     |                10 |              0.06262 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6328 | >20%                    |                 5 |              0.12656 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.636  | 15-20%                  |                 2 |              0.318   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6379 | 5-10%                   |                 5 |              0.12758 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6385 | 15-20%                  |                10 |              0.06385 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6386 | >20%                    |                 2 |              0.3193  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6435 | 5-10%                   |                10 |              0.06435 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6651 | 5-10%                   |                10 |              0.06651 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6665 | <5%                     |                10 |              0.06665 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6724 | 5-10%                   |                10 |              0.06724 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6749 | 5-10%                   |                 5 |              0.13498 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6767 | 10-15%                  |                10 |              0.06767 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6827 | 5-10%                   |                10 |              0.06827 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6879 | <5%                     |                10 |              0.06879 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7026 | 5-10%                   |                 5 |              0.14052 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7105 | 10-15%                  |                10 |              0.07105 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.712  | >20%                    |                 5 |              0.1424  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7286 | 15-20%                  |                10 |              0.07286 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7389 | 10-15%                  |                10 |              0.07389 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7411 | <5%                     |                 5 |              0.14822 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7429 | >20%                    |                10 |              0.07429 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7442 | >20%                    |                 5 |              0.14884 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7465 | >20%                    |                 5 |              0.1493  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7506 | <5%                     |                 2 |              0.3753  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7822 | 5-10%                   |                10 |              0.07822 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7865 | 10-15%                  |                 5 |              0.1573  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7914 | <5%                     |                10 |              0.07914 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | 15-20%                  |                10 |              0.07977 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8015 | 10-15%                  |                10 |              0.08015 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8069 | 5-10%                   |                10 |              0.08069 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.808  | >20%                    |                10 |              0.0808  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.813  | >20%                    |                 5 |              0.1626  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8354 | 15-20%                  |                 2 |              0.4177  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8455 | <5%                     |                10 |              0.08455 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8554 | >20%                    |                10 |              0.08554 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8627 | <5%                     |                10 |              0.08627 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8645 | 5-10%                   |                10 |              0.08645 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8802 | 5-10%                   |                10 |              0.08802 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8833 | 5-10%                   |                 5 |              0.17666 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8837 | <5%                     |                10 |              0.08837 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8853 | <5%                     |                 5 |              0.17706 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8855 | 10-15%                  |                 2 |              0.44275 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8861 | >20%                    |                10 |              0.08861 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8872 | <5%                     |                10 |              0.08872 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8927 | <5%                     |                10 |              0.08927 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.91   | 5-10%                   |                10 |              0.091   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.919  | <5%                     |                10 |              0.0919  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9235 | 5-10%                   |                10 |              0.09235 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9382 | 15-20%                  |                 2 |              0.4691  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9426 | 5-10%                   |                 5 |              0.18852 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9468 | 5-10%                   |                10 |              0.09468 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9509 | 15-20%                  |                10 |              0.09509 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9872 | 5-10%                   |                 5 |              0.19744 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0022 | >20%                    |                10 |              0.10022 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0061 | 15-20%                  |                10 |              0.10061 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0168 | <5%                     |                10 |              0.10168 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0586 | 15-20%                  |                 5 |              0.21172 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0658 | 5-10%                   |                10 |              0.10658 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.087  | 10-15%                  |                 2 |              0.5435  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.161  | 10-15%                  |                10 |              0.1161  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1945 | 5-10%                   |                10 |              0.11945 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2025 | 10-15%                  |                10 |              0.12025 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2027 | 10-15%                  |                 2 |              0.60135 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2042 | >20%                    |                10 |              0.12042 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2464 | >20%                    |                10 |              0.12464 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2468 | 10-15%                  |                10 |              0.12468 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.261  | 15-20%                  |                 5 |              0.2522  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3332 | 15-20%                  |                10 |              0.13332 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3951 | 5-10%                   |                10 |              0.13951 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.406  | 5-10%                   |                10 |              0.1406  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0192 | 5-10%                   |                10 |              0.20192 |