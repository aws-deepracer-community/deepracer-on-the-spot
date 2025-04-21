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

Data correct as of 2025-04-21 01:52:56.990047, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.111  | >20%                    |                 2 |              0.0555  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1168 | 15-20%                  |                 2 |              0.0584  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1286 | 15-20%                  |                 5 |              0.02572 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.153  | >20%                    |                 2 |              0.0765  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1816 | >20%                    |                 5 |              0.03632 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1865 | 5-10%                   |                 2 |              0.09325 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1896 | <5%                     |                 2 |              0.0948  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2245 | 5-10%                   |                 5 |              0.0449  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | 15-20%                  |                 2 |              0.1164  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | 5-10%                   |                 2 |              0.122   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | >20%                    |                 2 |              0.1293  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | 5-10%                   |                 2 |              0.1375  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2752 | 15-20%                  |                10 |              0.02752 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | >20%                    |                 2 |              0.13985 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | <5%                     |                 2 |              0.14155 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2857 | 15-20%                  |                 2 |              0.14285 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2886 | <5%                     |                 2 |              0.1443  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2889 | 10-15%                  |                10 |              0.02889 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2896 | <5%                     |                 2 |              0.1448  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | 15-20%                  |                 2 |              0.1464  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | 5-10%                   |                 2 |              0.1495  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3019 | 10-15%                  |                10 |              0.03019 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3029 | >20%                    |                 2 |              0.15145 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3105 | <5%                     |                 5 |              0.0621  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3116 | >20%                    |                10 |              0.03116 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3118 | >20%                    |                 5 |              0.06236 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3124 | <5%                     |                 2 |              0.1562  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3267 | >20%                    |                 5 |              0.06534 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3286 | >20%                    |                 2 |              0.1643  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3301 | 15-20%                  |                 2 |              0.16505 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3336 | 15-20%                  |                10 |              0.03336 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3361 | 5-10%                   |                 5 |              0.06722 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3366 | >20%                    |                10 |              0.03366 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3385 | >20%                    |                 2 |              0.16925 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3479 | >20%                    |                 2 |              0.17395 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | >20%                    |                 2 |              0.1747  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3616 | >20%                    |                 5 |              0.07232 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3622 | >20%                    |                 2 |              0.1811  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3626 | >20%                    |                 2 |              0.1813  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3647 | 5-10%                   |                 2 |              0.18235 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3776 | 10-15%                  |                 2 |              0.1888  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3782 | 5-10%                   |                 2 |              0.1891  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | >20%                    |                 5 |              0.0762  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3835 | >20%                    |                10 |              0.03835 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3897 | 10-15%                  |                10 |              0.03897 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3914 | >20%                    |                 2 |              0.1957  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.392  | >20%                    |                 2 |              0.196   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.395  | <5%                     |                 2 |              0.1975  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4048 | 10-15%                  |                 2 |              0.2024  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4051 | >20%                    |                10 |              0.04051 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4138 | 10-15%                  |                 5 |              0.08276 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4158 | <5%                     |                 5 |              0.08316 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4185 | >20%                    |                 5 |              0.0837  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4199 | 15-20%                  |                 2 |              0.20995 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | 5-10%                   |                 5 |              0.0845  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4265 | >20%                    |                 2 |              0.21325 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4301 | 15-20%                  |                 2 |              0.21505 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4355 | >20%                    |                 5 |              0.0871  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4362 | >20%                    |                10 |              0.04362 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4386 | 5-10%                   |                10 |              0.04386 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4439 | >20%                    |                 5 |              0.08878 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4449 | >20%                    |                 2 |              0.22245 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | 5-10%                   |                 5 |              0.09084 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | <5%                     |                 5 |              0.091   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4595 | >20%                    |                 2 |              0.22975 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4621 | >20%                    |                 5 |              0.09242 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4625 | 10-15%                  |                 5 |              0.0925  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.468  | >20%                    |                 5 |              0.0936  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4701 | >20%                    |                 2 |              0.23505 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4757 | 15-20%                  |                 5 |              0.09514 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4771 | 5-10%                   |                 5 |              0.09542 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4799 | <5%                     |                 5 |              0.09598 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4829 | <5%                     |                 5 |              0.09658 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4899 | 15-20%                  |                10 |              0.04899 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4997 | >20%                    |                 2 |              0.24985 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5003 | >20%                    |                 2 |              0.25015 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5045 | 10-15%                  |                 2 |              0.25225 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5112 | <5%                     |                 2 |              0.2556  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5135 | 15-20%                  |                 5 |              0.1027  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5148 | >20%                    |                10 |              0.05148 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5184 | >20%                    |                 5 |              0.10368 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5231 | >20%                    |                 5 |              0.10462 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.531  | 15-20%                  |                 5 |              0.1062  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5353 | >20%                    |                 2 |              0.26765 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5374 | >20%                    |                 2 |              0.2687  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5401 | >20%                    |                 5 |              0.10802 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5453 | 5-10%                   |                 5 |              0.10906 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.546  | 10-15%                  |                 2 |              0.273   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5528 | >20%                    |                 5 |              0.11056 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5539 | >20%                    |                 5 |              0.11078 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5558 | >20%                    |                 2 |              0.2779  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5694 | >20%                    |                 2 |              0.2847  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.579  | >20%                    |                 5 |              0.1158  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5874 | >20%                    |                 2 |              0.2937  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5878 | >20%                    |                 2 |              0.2939  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | >20%                    |                 5 |              0.11776 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5919 | 10-15%                  |                 5 |              0.11838 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.599  | <5%                     |                 5 |              0.1198  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6123 | 10-15%                  |                 5 |              0.12246 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6134 | >20%                    |                 2 |              0.3067  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6174 | 15-20%                  |                10 |              0.06174 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6226 | >20%                    |                 5 |              0.12452 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6257 | 10-15%                  |                10 |              0.06257 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6563 | >20%                    |                 2 |              0.32815 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6589 | >20%                    |                 2 |              0.32945 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | <5%                     |                 5 |              0.13346 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6726 | 15-20%                  |                10 |              0.06726 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.673  | <5%                     |                10 |              0.0673  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6738 | 10-15%                  |                10 |              0.06738 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6742 | 5-10%                   |                 5 |              0.13484 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6765 | >20%                    |                 5 |              0.1353  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6767 | >20%                    |                 5 |              0.13534 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6773 | 15-20%                  |                 5 |              0.13546 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.678  | >20%                    |                 5 |              0.1356  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6847 | >20%                    |                 2 |              0.34235 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6946 | >20%                    |                 5 |              0.13892 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.696  | >20%                    |                 2 |              0.348   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6963 | >20%                    |                10 |              0.06963 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7042 | 5-10%                   |                10 |              0.07042 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7055 | >20%                    |                 5 |              0.1411  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7099 | >20%                    |                10 |              0.07099 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7141 | >20%                    |                 2 |              0.35705 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.734  | 5-10%                   |                10 |              0.0734  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7351 | >20%                    |                 5 |              0.14702 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7376 | <5%                     |                 5 |              0.14752 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7476 | 15-20%                  |                10 |              0.07476 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7654 | 15-20%                  |                 5 |              0.15308 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7665 | >20%                    |                 5 |              0.1533  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7718 | >20%                    |                10 |              0.07718 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7827 | 10-15%                  |                10 |              0.07827 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7881 | >20%                    |                10 |              0.07881 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7916 | >20%                    |                10 |              0.07916 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7965 | >20%                    |                10 |              0.07965 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | <5%                     |                10 |              0.08007 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.814  | 5-10%                   |                10 |              0.0814  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8233 | <5%                     |                 5 |              0.16466 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8248 | 5-10%                   |                10 |              0.08248 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8294 | 10-15%                  |                10 |              0.08294 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8419 | >20%                    |                10 |              0.08419 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | 10-15%                  |                10 |              0.08441 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8444 | >20%                    |                10 |              0.08444 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8513 | 10-15%                  |                10 |              0.08513 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8543 | >20%                    |                10 |              0.08543 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8643 | >20%                    |                 5 |              0.17286 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8744 | <5%                     |                10 |              0.08744 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.879  | >20%                    |                 2 |              0.4395  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8814 | <5%                     |                10 |              0.08814 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8818 | >20%                    |                 2 |              0.4409  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9015 | 15-20%                  |                10 |              0.09015 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9057 | >20%                    |                10 |              0.09057 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9109 | <5%                     |                10 |              0.09109 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9248 | 5-10%                   |                10 |              0.09248 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9374 | >20%                    |                 5 |              0.18748 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9481 | >20%                    |                10 |              0.09481 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9494 | >20%                    |                 5 |              0.18988 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.954  | >20%                    |                10 |              0.0954  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9853 | >20%                    |                10 |              0.09853 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0352 | >20%                    |                10 |              0.10352 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0466 | >20%                    |                10 |              0.10466 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0625 | <5%                     |                10 |              0.10625 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0938 | <5%                     |                10 |              0.10938 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1223 | >20%                    |                 5 |              0.22446 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1365 | >20%                    |                 2 |              0.56825 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1643 | >20%                    |                 5 |              0.23286 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1699 | 15-20%                  |                 2 |              0.58495 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1708 | >20%                    |                10 |              0.11708 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1975 | >20%                    |                 5 |              0.2395  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2223 | 15-20%                  |                10 |              0.12223 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2312 | <5%                     |                 5 |              0.24624 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2907 | >20%                    |                10 |              0.12907 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2963 | >20%                    |                 5 |              0.25926 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2986 | 10-15%                  |                 2 |              0.6493  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3304 | 15-20%                  |                10 |              0.13304 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4073 | 15-20%                  |                10 |              0.14073 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4176 | >20%                    |                 2 |              0.7088  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6271 | >20%                    |                10 |              0.16271 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.683  | >20%                    |                10 |              0.1683  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8387 | 5-10%                   |                10 |              0.18387 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9113 | >20%                    |                10 |              0.19113 |