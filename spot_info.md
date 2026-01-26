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

Data correct as of 2026-01-26 02:21:07.000082, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.11   | 10-15%                  |                 2 |              0.055   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1403 | 15-20%                  |                 5 |              0.02806 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1514 | >20%                    |                 2 |              0.0757  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1696 | >20%                    |                 2 |              0.0848  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1961 | <5%                     |                 5 |              0.03922 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2035 | >20%                    |                 2 |              0.10175 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2055 | 5-10%                   |                 2 |              0.10275 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2136 | 15-20%                  |                10 |              0.02136 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2138 | >20%                    |                 2 |              0.1069  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2309 | 10-15%                  |                 2 |              0.11545 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2338 | >20%                    |                 2 |              0.1169  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2396 | >20%                    |                 5 |              0.04792 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2547 | >20%                    |                 2 |              0.12735 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2739 | 10-15%                  |                 2 |              0.13695 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | 10-15%                  |                 2 |              0.1395  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2808 | >20%                    |                 2 |              0.1404  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | >20%                    |                 2 |              0.1407  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | 15-20%                  |                 2 |              0.1435  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | >20%                    |                 2 |              0.14595 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | >20%                    |                 2 |              0.1475  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.309  | >20%                    |                 5 |              0.0618  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3112 | >20%                    |                 2 |              0.1556  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | >20%                    |                 2 |              0.1562  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3159 | >20%                    |                10 |              0.03159 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3287 | >20%                    |                 5 |              0.06574 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3347 | 5-10%                   |                10 |              0.03347 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3413 | 5-10%                   |                10 |              0.03413 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3499 | <5%                     |                 2 |              0.17495 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3592 | 15-20%                  |                 2 |              0.1796  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3597 | >20%                    |                 2 |              0.17985 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3727 | >20%                    |                 2 |              0.18635 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | >20%                    |                 5 |              0.07468 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3736 | >20%                    |                 2 |              0.1868  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3742 | 5-10%                   |                 5 |              0.07484 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3784 | >20%                    |                 2 |              0.1892  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3823 | >20%                    |                 5 |              0.07646 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3845 | 15-20%                  |                 2 |              0.19225 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.387  | 15-20%                  |                 2 |              0.1935  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3884 | 5-10%                   |                 2 |              0.1942  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | 15-20%                  |                 2 |              0.19455 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3904 | >20%                    |                 5 |              0.07808 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3947 | 5-10%                   |                 2 |              0.19735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3978 | >20%                    |                 5 |              0.07956 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3978 | <5%                     |                 5 |              0.07956 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4019 | 5-10%                   |                 2 |              0.20095 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4038 | >20%                    |                 2 |              0.2019  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4062 | >20%                    |                 5 |              0.08124 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4073 | >20%                    |                 5 |              0.08146 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4148 | >20%                    |                 5 |              0.08296 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4246 | 5-10%                   |                 2 |              0.2123  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4258 | 10-15%                  |                 5 |              0.08516 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4285 | >20%                    |                 5 |              0.0857  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | 15-20%                  |                 5 |              0.08614 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4389 | 15-20%                  |                 2 |              0.21945 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4403 | >20%                    |                 2 |              0.22015 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4411 | >20%                    |                10 |              0.04411 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.442  | <5%                     |                 2 |              0.221   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4466 | >20%                    |                 5 |              0.08932 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4482 | <5%                     |                 2 |              0.2241  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4495 | >20%                    |                10 |              0.04495 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | >20%                    |                 5 |              0.0905  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | 5-10%                   |                 2 |              0.22635 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4543 | 5-10%                   |                 5 |              0.09086 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4556 | >20%                    |                10 |              0.04556 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4642 | 5-10%                   |                 5 |              0.09284 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.465  | <5%                     |                10 |              0.0465  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4663 | >20%                    |                 2 |              0.23315 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4695 | 5-10%                   |                 2 |              0.23475 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4703 | >20%                    |                 2 |              0.23515 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4728 | >20%                    |                 2 |              0.2364  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4733 | 15-20%                  |                 5 |              0.09466 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4754 | 15-20%                  |                10 |              0.04754 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4785 | >20%                    |                 2 |              0.23925 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4787 | <5%                     |                10 |              0.04787 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4815 | >20%                    |                 2 |              0.24075 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.487  | >20%                    |                 5 |              0.0974  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4908 | <5%                     |                 5 |              0.09816 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5094 | >20%                    |                 2 |              0.2547  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.513  | 15-20%                  |                 5 |              0.1026  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5141 | 5-10%                   |                 5 |              0.10282 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5142 | >20%                    |                10 |              0.05142 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5143 | >20%                    |                 2 |              0.25715 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5188 | >20%                    |                 5 |              0.10376 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5239 | >20%                    |                 5 |              0.10478 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5331 | <5%                     |                 5 |              0.10662 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.536  | >20%                    |                 5 |              0.1072  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5395 | >20%                    |                 5 |              0.1079  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5471 | >20%                    |                 5 |              0.10942 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.552  | <5%                     |                 5 |              0.1104  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5554 | <5%                     |                 2 |              0.2777  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5563 | 15-20%                  |                10 |              0.05563 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5593 | >20%                    |                 2 |              0.27965 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5611 | >20%                    |                 2 |              0.28055 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5689 | 10-15%                  |                10 |              0.05689 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5692 | >20%                    |                10 |              0.05692 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5709 | >20%                    |                 5 |              0.11418 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5863 | >20%                    |                 5 |              0.11726 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5895 | >20%                    |                 2 |              0.29475 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5965 | >20%                    |                10 |              0.05965 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6064 | >20%                    |                10 |              0.06064 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6106 | <5%                     |                10 |              0.06106 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6126 | 5-10%                   |                 5 |              0.12252 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6167 | >20%                    |                 5 |              0.12334 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6172 | 15-20%                  |                 5 |              0.12344 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6179 | 5-10%                   |                 2 |              0.30895 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6271 | <5%                     |                 5 |              0.12542 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6299 | 10-15%                  |                 5 |              0.12598 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6333 | 15-20%                  |                10 |              0.06333 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.642  | >20%                    |                 5 |              0.1284  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6449 | <5%                     |                 2 |              0.32245 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.648  | >20%                    |                 5 |              0.1296  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6637 | >20%                    |                 5 |              0.13274 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.664  | >20%                    |                10 |              0.0664  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6655 | >20%                    |                10 |              0.06655 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6831 | >20%                    |                10 |              0.06831 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.684  | 5-10%                   |                 5 |              0.1368  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6873 | 15-20%                  |                 2 |              0.34365 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6978 | >20%                    |                 5 |              0.13956 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7052 | >20%                    |                10 |              0.07052 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7061 | <5%                     |                 5 |              0.14122 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | >20%                    |                10 |              0.07161 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7229 | 15-20%                  |                10 |              0.07229 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7231 | >20%                    |                 2 |              0.36155 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.734  | >20%                    |                 5 |              0.1468  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7347 | 5-10%                   |                10 |              0.07347 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7415 | >20%                    |                 5 |              0.1483  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.745  | >20%                    |                10 |              0.0745  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7469 | <5%                     |                 5 |              0.14938 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7476 | 5-10%                   |                 2 |              0.3738  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7503 | >20%                    |                 5 |              0.15006 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7638 | 10-15%                  |                10 |              0.07638 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7711 | <5%                     |                10 |              0.07711 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7958 | >20%                    |                 5 |              0.15916 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8006 | <5%                     |                10 |              0.08006 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8038 | <5%                     |                10 |              0.08038 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8054 | 10-15%                  |                 2 |              0.4027  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8066 | 5-10%                   |                10 |              0.08066 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.816  | >20%                    |                 2 |              0.408   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8352 | >20%                    |                10 |              0.08352 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8391 | >20%                    |                10 |              0.08391 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8392 | >20%                    |                 2 |              0.4196  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8461 | >20%                    |                 5 |              0.16922 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8574 | >20%                    |                 2 |              0.4287  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8766 | 15-20%                  |                10 |              0.08766 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8836 | >20%                    |                 5 |              0.17672 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9052 | >20%                    |                 2 |              0.4526  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9117 | >20%                    |                10 |              0.09117 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9132 | >20%                    |                10 |              0.09132 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9181 | >20%                    |                10 |              0.09181 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9206 | <5%                     |                10 |              0.09206 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9206 | >20%                    |                10 |              0.09206 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9302 | >20%                    |                 5 |              0.18604 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9393 | >20%                    |                10 |              0.09393 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9393 | <5%                     |                10 |              0.09393 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.948  | >20%                    |                 2 |              0.474   |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9608 | >20%                    |                10 |              0.09608 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9673 | >20%                    |                 5 |              0.19346 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9952 | 5-10%                   |                 5 |              0.19904 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0069 | >20%                    |                10 |              0.10069 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0486 | 5-10%                   |                10 |              0.10486 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0865 | >20%                    |                 5 |              0.2173  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0939 | <5%                     |                10 |              0.10939 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0966 | 15-20%                  |                10 |              0.10966 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1201 | >20%                    |                10 |              0.11201 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1292 | >20%                    |                10 |              0.11292 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2042 | >20%                    |                 5 |              0.24084 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2045 | >20%                    |                10 |              0.12045 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2242 | >20%                    |                10 |              0.12242 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2429 | <5%                     |                10 |              0.12429 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2891 | >20%                    |                 2 |              0.64455 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2948 | >20%                    |                10 |              0.12948 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3417 | 10-15%                  |                10 |              0.13417 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3864 | 10-15%                  |                 5 |              0.27728 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3943 | 15-20%                  |                10 |              0.13943 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4316 | >20%                    |                 2 |              0.7158  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4642 | 10-15%                  |                 5 |              0.29284 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4804 | >20%                    |                10 |              0.14804 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5827 | 15-20%                  |                10 |              0.15827 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.874  | 10-15%                  |                10 |              0.1874  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4445 | <5%                     |                 5 |              0.4889  |