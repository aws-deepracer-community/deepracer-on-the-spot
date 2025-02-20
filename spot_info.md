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

Data correct as of 2025-02-20 01:38:45.517342, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1176 | >20%                    |                 2 |              0.0588  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1368 | <5%                     |                 5 |              0.02736 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1922 | <5%                     |                 5 |              0.03844 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1944 | <5%                     |                 5 |              0.03888 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2163 | 5-10%                   |                 2 |              0.10815 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2166 | <5%                     |                 2 |              0.1083  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2218 | >20%                    |                 2 |              0.1109  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2324 | 10-15%                  |                 2 |              0.1162  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | 15-20%                  |                 2 |              0.1174  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2396 | 15-20%                  |                 5 |              0.04792 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2401 | 15-20%                  |                 2 |              0.12005 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2507 | >20%                    |                 2 |              0.12535 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2639 | 5-10%                   |                10 |              0.02639 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2666 | 5-10%                   |                 2 |              0.1333  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | 10-15%                  |                 2 |              0.1386  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | >20%                    |                 2 |              0.1386  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2798 | <5%                     |                 2 |              0.1399  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.2854 | <5%                     |                10 |              0.02854 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | 15-20%                  |                 2 |              0.1447  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2936 | 5-10%                   |                 2 |              0.1468  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2974 | <5%                     |                 2 |              0.1487  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | 5-10%                   |                 2 |              0.15025 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3054 | <5%                     |                 2 |              0.1527  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | <5%                     |                 2 |              0.1542  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | 10-15%                  |                 2 |              0.1567  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3136 | >20%                    |                 5 |              0.06272 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | <5%                     |                 2 |              0.15685 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.318  | 10-15%                  |                 2 |              0.159   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3193 | 15-20%                  |                 5 |              0.06386 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3277 | >20%                    |                 2 |              0.16385 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3309 | 15-20%                  |                10 |              0.03309 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3319 | 5-10%                   |                10 |              0.03319 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3345 | >20%                    |                10 |              0.03345 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | >20%                    |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3572 | 10-15%                  |                 2 |              0.1786  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.358  | <5%                     |                 5 |              0.0716  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.363  | 10-15%                  |                 5 |              0.0726  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3683 | <5%                     |                 2 |              0.18415 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.37   | >20%                    |                10 |              0.037   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3766 | 5-10%                   |                 2 |              0.1883  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.383  | <5%                     |                10 |              0.0383  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3886 | 5-10%                   |                 5 |              0.07772 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3922 | 5-10%                   |                 2 |              0.1961  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3923 | 15-20%                  |                 2 |              0.19615 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3993 | <5%                     |                 2 |              0.19965 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4055 | 5-10%                   |                 2 |              0.20275 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.407  | >20%                    |                 5 |              0.0814  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | 10-15%                  |                 2 |              0.2048  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4111 | >20%                    |                 5 |              0.08222 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4145 | 5-10%                   |                 5 |              0.0829  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4167 | >20%                    |                 2 |              0.20835 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4307 | <5%                     |                 2 |              0.21535 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | >20%                    |                 5 |              0.08738 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.439  | <5%                     |                 2 |              0.2195  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4413 | <5%                     |                 5 |              0.08826 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | >20%                    |                 2 |              0.22335 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4687 | 15-20%                  |                 5 |              0.09374 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4709 | 5-10%                   |                 5 |              0.09418 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | 10-15%                  |                 5 |              0.0946  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4816 | <5%                     |                 5 |              0.09632 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4898 | >20%                    |                 2 |              0.2449  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | 10-15%                  |                 5 |              0.09824 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5028 | 5-10%                   |                 2 |              0.2514  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.508  | >20%                    |                 5 |              0.1016  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5089 | >20%                    |                 5 |              0.10178 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5103 | >20%                    |                 2 |              0.25515 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5108 | >20%                    |                 2 |              0.2554  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5154 | 5-10%                   |                 2 |              0.2577  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.519  | 10-15%                  |                 5 |              0.1038  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5193 | >20%                    |                 2 |              0.25965 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5274 | <5%                     |                 2 |              0.2637  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5316 | 5-10%                   |                 5 |              0.10632 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5334 | <5%                     |                10 |              0.05334 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5359 | 10-15%                  |                 5 |              0.10718 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5443 | >20%                    |                 2 |              0.27215 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5475 | >20%                    |                 5 |              0.1095  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.548  | >20%                    |                 2 |              0.274   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5495 | 15-20%                  |                 2 |              0.27475 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5508 | <5%                     |                 5 |              0.11016 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5526 | >20%                    |                 5 |              0.11052 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5556 | >20%                    |                 2 |              0.2778  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5573 | <5%                     |                 5 |              0.11146 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5622 | >20%                    |                 2 |              0.2811  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5654 | 5-10%                   |                 5 |              0.11308 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5705 | >20%                    |                 5 |              0.1141  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5707 | 5-10%                   |                10 |              0.05707 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5721 | >20%                    |                 5 |              0.11442 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5759 | 10-15%                  |                 2 |              0.28795 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5785 | <5%                     |                 5 |              0.1157  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.58   | 10-15%                  |                 5 |              0.116   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5921 | 10-15%                  |                 5 |              0.11842 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6007 | >20%                    |                 5 |              0.12014 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6094 | 5-10%                   |                 5 |              0.12188 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6101 | 5-10%                   |                10 |              0.06101 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6243 | <5%                     |                10 |              0.06243 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6309 | 10-15%                  |                 5 |              0.12618 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6464 | >20%                    |                10 |              0.06464 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6573 | >20%                    |                 2 |              0.32865 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6642 | 15-20%                  |                10 |              0.06642 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6732 | >20%                    |                 5 |              0.13464 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6832 | 5-10%                   |                 5 |              0.13664 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.685  | 10-15%                  |                 5 |              0.137   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6911 | >20%                    |                10 |              0.06911 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6959 | 5-10%                   |                10 |              0.06959 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7001 | >20%                    |                 2 |              0.35005 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7068 | >20%                    |                 5 |              0.14136 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7186 | >20%                    |                 5 |              0.14372 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7293 | 15-20%                  |                 5 |              0.14586 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7352 | >20%                    |                10 |              0.07352 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7363 | >20%                    |                10 |              0.07363 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7571 | >20%                    |                 5 |              0.15142 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7572 | <5%                     |                 5 |              0.15144 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7635 | 15-20%                  |                10 |              0.07635 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7689 | >20%                    |                10 |              0.07689 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7726 | >20%                    |                 5 |              0.15452 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7845 | >20%                    |                 5 |              0.1569  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7894 | <5%                     |                10 |              0.07894 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7919 | <5%                     |                 5 |              0.15838 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7941 | >20%                    |                10 |              0.07941 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7959 | 5-10%                   |                10 |              0.07959 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8111 | 10-15%                  |                10 |              0.08111 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8112 | 15-20%                  |                 2 |              0.4056  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8148 | 5-10%                   |                 2 |              0.4074  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8245 | <5%                     |                10 |              0.08245 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8324 | 15-20%                  |                10 |              0.08324 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8437 | <5%                     |                10 |              0.08437 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.844  | >20%                    |                10 |              0.0844  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8547 | 10-15%                  |                10 |              0.08547 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8571 | >20%                    |                10 |              0.08571 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8628 | <5%                     |                10 |              0.08628 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8679 | 10-15%                  |                10 |              0.08679 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8821 | 15-20%                  |                10 |              0.08821 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8904 | >20%                    |                 2 |              0.4452  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8936 | <5%                     |                10 |              0.08936 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8964 | <5%                     |                10 |              0.08964 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9009 | >20%                    |                10 |              0.09009 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9259 | >20%                    |                10 |              0.09259 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9312 | 15-20%                  |                 5 |              0.18624 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9349 | 15-20%                  |                 5 |              0.18698 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9475 | <5%                     |                10 |              0.09475 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9507 | <5%                     |                10 |              0.09507 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9514 | 5-10%                   |                 5 |              0.19028 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9643 | <5%                     |                10 |              0.09643 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9886 | 10-15%                  |                10 |              0.09886 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9983 | >20%                    |                10 |              0.09983 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.003  | 10-15%                  |                10 |              0.1003  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0206 | >20%                    |                10 |              0.10206 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.044  | <5%                     |                10 |              0.1044  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0882 | 15-20%                  |                10 |              0.10882 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1215 | >20%                    |                 2 |              0.56075 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1258 | 5-10%                   |                10 |              0.11258 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1519 | 15-20%                  |                10 |              0.11519 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1533 | >20%                    |                10 |              0.11533 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1694 | 10-15%                  |                 2 |              0.5847  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1805 | >20%                    |                 5 |              0.2361  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2048 | >20%                    |                 2 |              0.6024  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2462 | >20%                    |                 5 |              0.24924 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2495 | 10-15%                  |                 5 |              0.2499  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3342 | >20%                    |                10 |              0.13342 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3642 | >20%                    |                10 |              0.13642 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6009 | >20%                    |                10 |              0.16009 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6559 | >20%                    |                10 |              0.16559 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6803 | >20%                    |                10 |              0.16803 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9981 | 5-10%                   |                10 |              0.19981 |