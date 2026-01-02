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

Data correct as of 2026-01-02 02:03:28.980611, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0896 | >20%                    |                 2 |              0.0448  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.14   | >20%                    |                 2 |              0.07    |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.155  | >20%                    |                 2 |              0.0775  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1674 | <5%                     |                 2 |              0.0837  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.174  | >20%                    |                 5 |              0.0348  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1891 | >20%                    |                 2 |              0.09455 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | >20%                    |                 2 |              0.11195 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2401 | >20%                    |                 2 |              0.12005 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2482 | >20%                    |                 2 |              0.1241  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2655 | >20%                    |                 2 |              0.13275 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | >20%                    |                 2 |              0.1346  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2745 | >20%                    |                 5 |              0.0549  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | >20%                    |                 2 |              0.1375  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2792 | 5-10%                   |                10 |              0.02792 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | 15-20%                  |                 2 |              0.1397  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2882 | >20%                    |                10 |              0.02882 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | >20%                    |                 2 |              0.14615 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3118 | <5%                     |                 2 |              0.1559  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3155 | >20%                    |                 2 |              0.15775 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3181 | >20%                    |                 5 |              0.06362 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3189 | 5-10%                   |                 5 |              0.06378 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3207 | >20%                    |                10 |              0.03207 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3238 | >20%                    |                 2 |              0.1619  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3265 | <5%                     |                 5 |              0.0653  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3306 | 5-10%                   |                 2 |              0.1653  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3341 | >20%                    |                 2 |              0.16705 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3415 | >20%                    |                 2 |              0.17075 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3426 | 15-20%                  |                 5 |              0.06852 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3463 | >20%                    |                 5 |              0.06926 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3479 | <5%                     |                 5 |              0.06958 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3544 | 5-10%                   |                10 |              0.03544 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | >20%                    |                 2 |              0.1797  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3632 | >20%                    |                 5 |              0.07264 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3639 | >20%                    |                 2 |              0.18195 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | >20%                    |                 5 |              0.07434 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3732 | >20%                    |                 2 |              0.1866  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3745 | 5-10%                   |                 2 |              0.18725 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3745 | >20%                    |                 5 |              0.0749  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3756 | 10-15%                  |                 2 |              0.1878  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3787 | >20%                    |                 5 |              0.07574 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | >20%                    |                 5 |              0.0762  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3823 | >20%                    |                 5 |              0.07646 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3851 | <5%                     |                10 |              0.03851 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3858 | 10-15%                  |                 2 |              0.1929  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3886 | >20%                    |                 2 |              0.1943  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3925 | >20%                    |                10 |              0.03925 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3967 | >20%                    |                 2 |              0.19835 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3981 | >20%                    |                 5 |              0.07962 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3981 | >20%                    |                 2 |              0.19905 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4006 | >20%                    |                10 |              0.04006 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | 10-15%                  |                 2 |              0.20145 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4051 | >20%                    |                 5 |              0.08102 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.406  | >20%                    |                 2 |              0.203   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4077 | >20%                    |                 5 |              0.08154 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4144 | >20%                    |                 2 |              0.2072  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4158 | >20%                    |                10 |              0.04158 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4173 | <5%                     |                 2 |              0.20865 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4175 | <5%                     |                10 |              0.04175 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4202 | >20%                    |                 2 |              0.2101  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4205 | >20%                    |                 5 |              0.0841  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4219 | >20%                    |                 5 |              0.08438 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4291 | 15-20%                  |                10 |              0.04291 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.45   | >20%                    |                 5 |              0.09    |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4585 | <5%                     |                 2 |              0.22925 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4691 | >20%                    |                 2 |              0.23455 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | >20%                    |                 5 |              0.09384 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.471  | >20%                    |                 5 |              0.0942  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4718 | >20%                    |                 2 |              0.2359  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4734 | >20%                    |                 2 |              0.2367  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4749 | >20%                    |                 2 |              0.23745 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4762 | >20%                    |                 5 |              0.09524 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4865 | 15-20%                  |                 2 |              0.24325 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4882 | <5%                     |                 5 |              0.09764 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4893 | >20%                    |                 5 |              0.09786 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4929 | >20%                    |                 2 |              0.24645 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4976 | 15-20%                  |                 5 |              0.09952 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5045 | 10-15%                  |                 5 |              0.1009  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5048 | >20%                    |                 5 |              0.10096 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5058 | 15-20%                  |                 2 |              0.2529  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.508  | >20%                    |                 5 |              0.1016  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5109 | >20%                    |                10 |              0.05109 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.531  | >20%                    |                 2 |              0.2655  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5388 | 15-20%                  |                10 |              0.05388 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5389 | >20%                    |                 5 |              0.10778 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5471 | 15-20%                  |                 5 |              0.10942 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5557 | >20%                    |                 5 |              0.11114 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5561 | 15-20%                  |                 5 |              0.11122 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5606 | 5-10%                   |                 5 |              0.11212 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5653 | >20%                    |                 5 |              0.11306 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5879 | >20%                    |                 2 |              0.29395 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5936 | >20%                    |                10 |              0.05936 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5999 | >20%                    |                 5 |              0.11998 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6025 | 15-20%                  |                 5 |              0.1205  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6176 | 10-15%                  |                 2 |              0.3088  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6274 | 5-10%                   |                 5 |              0.12548 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6311 | 10-15%                  |                 5 |              0.12622 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6328 | >20%                    |                10 |              0.06328 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6445 | >20%                    |                 5 |              0.1289  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6468 | >20%                    |                 2 |              0.3234  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6511 | 15-20%                  |                 5 |              0.13022 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6583 | >20%                    |                 2 |              0.32915 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6586 | 15-20%                  |                10 |              0.06586 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6604 | <5%                     |                 5 |              0.13208 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6649 | >20%                    |                 5 |              0.13298 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6653 | 15-20%                  |                10 |              0.06653 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.678  | >20%                    |                 2 |              0.339   |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6861 | >20%                    |                 5 |              0.13722 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6886 | 10-15%                  |                 5 |              0.13772 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6923 | >20%                    |                 5 |              0.13846 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7069 | 5-10%                   |                10 |              0.07069 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7072 | 5-10%                   |                 5 |              0.14144 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7135 | >20%                    |                 2 |              0.35675 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7191 | 15-20%                  |                 2 |              0.35955 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7193 | >20%                    |                10 |              0.07193 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7295 | >20%                    |                10 |              0.07295 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | >20%                    |                10 |              0.07374 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7376 | >20%                    |                10 |              0.07376 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7392 | >20%                    |                 2 |              0.3696  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.74   | >20%                    |                 2 |              0.37    |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.746  | <5%                     |                10 |              0.0746  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7462 | >20%                    |                10 |              0.07462 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.747  | >20%                    |                 2 |              0.3735  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7492 | >20%                    |                10 |              0.07492 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7503 | 15-20%                  |                10 |              0.07503 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7667 | >20%                    |                 5 |              0.15334 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7671 | >20%                    |                10 |              0.07671 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7717 | <5%                     |                 2 |              0.38585 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7904 | >20%                    |                 5 |              0.15808 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7939 | 15-20%                  |                10 |              0.07939 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8016 | >20%                    |                10 |              0.08016 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8018 | 15-20%                  |                10 |              0.08018 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.812  | <5%                     |                10 |              0.0812  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8279 | 15-20%                  |                10 |              0.08279 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8373 | 15-20%                  |                 5 |              0.16746 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8496 | <5%                     |                10 |              0.08496 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8499 | >20%                    |                 2 |              0.42495 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.859  | 10-15%                  |                 5 |              0.1718  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8651 | >20%                    |                 5 |              0.17302 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8728 | >20%                    |                 2 |              0.4364  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.879  | >20%                    |                10 |              0.0879  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8869 | >20%                    |                10 |              0.08869 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8929 | >20%                    |                10 |              0.08929 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9091 | >20%                    |                10 |              0.09091 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9171 | 15-20%                  |                10 |              0.09171 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9172 | 15-20%                  |                10 |              0.09172 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9237 | >20%                    |                10 |              0.09237 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9253 | >20%                    |                 5 |              0.18506 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9366 | 10-15%                  |                 5 |              0.18732 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9419 | >20%                    |                10 |              0.09419 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9446 | >20%                    |                10 |              0.09446 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0101 | 10-15%                  |                10 |              0.10101 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0146 | >20%                    |                 2 |              0.5073  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0192 | >20%                    |                10 |              0.10192 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0239 | >20%                    |                 5 |              0.20478 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0492 | >20%                    |                10 |              0.10492 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0547 | >20%                    |                 5 |              0.21094 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0974 | >20%                    |                 5 |              0.21948 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0979 | <5%                     |                10 |              0.10979 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1303 | 15-20%                  |                10 |              0.11303 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1373 | >20%                    |                10 |              0.11373 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1647 | >20%                    |                 2 |              0.58235 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.208  | 10-15%                  |                10 |              0.1208  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2114 | >20%                    |                10 |              0.12114 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2179 | >20%                    |                 2 |              0.60895 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2301 | 15-20%                  |                10 |              0.12301 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2309 | >20%                    |                 5 |              0.24618 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2832 | >20%                    |                10 |              0.12832 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.335  | >20%                    |                 5 |              0.267   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.373  | >20%                    |                10 |              0.1373  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.3735 | >20%                    |                 5 |              0.2747  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4117 | >20%                    |                10 |              0.14117 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4293 | >20%                    |                10 |              0.14293 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4508 | >20%                    |                 2 |              0.7254  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4659 | 10-15%                  |                 5 |              0.29318 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6988 | >20%                    |                10 |              0.16988 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7984 | 10-15%                  |                10 |              0.17984 |