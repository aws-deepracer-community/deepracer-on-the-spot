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

Data correct as of 2025-06-26 01:56:48.152351, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1732 | >20%                    |                 5 |              0.03464 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1756 | >20%                    |                 2 |              0.0878  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1851 | <5%                     |                 2 |              0.09255 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1921 | 15-20%                  |                 2 |              0.09605 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.197  | 15-20%                  |                 5 |              0.0394  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2066 | >20%                    |                 2 |              0.1033  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2083 | 10-15%                  |                10 |              0.02083 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2179 | >20%                    |                 2 |              0.10895 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2205 | >20%                    |                 5 |              0.0441  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | 15-20%                  |                 2 |              0.11415 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2406 | 15-20%                  |                10 |              0.02406 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | 15-20%                  |                 2 |              0.1253  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.256  | >20%                    |                10 |              0.0256  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2611 | 15-20%                  |                 2 |              0.13055 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | 5-10%                   |                 2 |              0.13175 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | >20%                    |                 2 |              0.13365 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | >20%                    |                 2 |              0.13445 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2739 | 5-10%                   |                10 |              0.02739 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2748 | 15-20%                  |                 5 |              0.05496 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2777 | <5%                     |                 5 |              0.05554 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2813 | >20%                    |                 2 |              0.14065 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.297  | >20%                    |                 5 |              0.0594  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | >20%                    |                 2 |              0.14895 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3012 | <5%                     |                 2 |              0.1506  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3068 | >20%                    |                 2 |              0.1534  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3072 | >20%                    |                 2 |              0.1536  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3087 | >20%                    |                 2 |              0.15435 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3099 | >20%                    |                10 |              0.03099 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | >20%                    |                 2 |              0.1553  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3116 | 15-20%                  |                 5 |              0.06232 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.313  | >20%                    |                 2 |              0.1565  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3212 | >20%                    |                 2 |              0.1606  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3361 | 10-15%                  |                 2 |              0.16805 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.338  | <5%                     |                 2 |              0.169   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3464 | 10-15%                  |                 2 |              0.1732  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3559 | 10-15%                  |                 2 |              0.17795 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3576 | 5-10%                   |                 2 |              0.1788  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.373  | >20%                    |                 5 |              0.0746  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | >20%                    |                 5 |              0.07546 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3862 | >20%                    |                 2 |              0.1931  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4021 | 15-20%                  |                10 |              0.04021 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4026 | 10-15%                  |                 5 |              0.08052 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4069 | >20%                    |                 5 |              0.08138 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4103 | >20%                    |                 5 |              0.08206 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | 10-15%                  |                 2 |              0.20635 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4141 | >20%                    |                 5 |              0.08282 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4225 | >20%                    |                 5 |              0.0845  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4232 | >20%                    |                 2 |              0.2116  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | >20%                    |                 2 |              0.2137  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4314 | <5%                     |                 2 |              0.2157  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4392 | 15-20%                  |                 5 |              0.08784 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4463 | 10-15%                  |                 5 |              0.08926 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4553 | >20%                    |                 2 |              0.22765 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4555 | 5-10%                   |                 2 |              0.22775 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.459  | >20%                    |                 5 |              0.0918  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4598 | >20%                    |                 5 |              0.09196 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4599 | >20%                    |                 2 |              0.22995 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4607 | 15-20%                  |                 2 |              0.23035 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4695 | >20%                    |                 2 |              0.23475 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | >20%                    |                 5 |              0.09454 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4752 | <5%                     |                 5 |              0.09504 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4759 | 15-20%                  |                 5 |              0.09518 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4786 | >20%                    |                 2 |              0.2393  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | >20%                    |                 5 |              0.09596 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4814 | >20%                    |                 2 |              0.2407  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.485  | 10-15%                  |                 5 |              0.097   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.485  | >20%                    |                 5 |              0.097   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4862 | <5%                     |                 5 |              0.09724 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4874 | 5-10%                   |                 2 |              0.2437  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4914 | >20%                    |                10 |              0.04914 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4971 | <5%                     |                10 |              0.04971 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5123 | >20%                    |                 5 |              0.10246 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5146 | 15-20%                  |                 2 |              0.2573  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5155 | 10-15%                  |                 2 |              0.25775 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5184 | 5-10%                   |                 5 |              0.10368 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5218 | >20%                    |                 2 |              0.2609  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5231 | >20%                    |                 2 |              0.26155 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5378 | <5%                     |                 5 |              0.10756 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5537 | 15-20%                  |                 2 |              0.27685 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.557  | 10-15%                  |                 5 |              0.1114  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.558  | >20%                    |                 5 |              0.1116  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.561  | 10-15%                  |                10 |              0.0561  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5627 | >20%                    |                10 |              0.05627 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5708 | >20%                    |                 2 |              0.2854  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5714 | >20%                    |                 5 |              0.11428 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.572  | <5%                     |                 5 |              0.1144  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5821 | 10-15%                  |                 5 |              0.11642 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5876 | >20%                    |                 5 |              0.11752 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5942 | >20%                    |                 5 |              0.11884 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5975 | >20%                    |                10 |              0.05975 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5992 | >20%                    |                 5 |              0.11984 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6008 | >20%                    |                10 |              0.06008 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6063 | <5%                     |                 2 |              0.30315 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6065 | >20%                    |                 5 |              0.1213  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6072 | >20%                    |                 5 |              0.12144 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6076 | >20%                    |                 5 |              0.12152 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6157 | >20%                    |                 2 |              0.30785 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6277 | >20%                    |                 5 |              0.12554 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6286 | 5-10%                   |                 2 |              0.3143  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6367 | >20%                    |                 2 |              0.31835 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.638  | >20%                    |                 5 |              0.1276  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6427 | <5%                     |                 5 |              0.12854 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6496 | >20%                    |                 5 |              0.12992 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6695 | >20%                    |                 5 |              0.1339  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6722 | >20%                    |                10 |              0.06722 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6726 | >20%                    |                 5 |              0.13452 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6762 | >20%                    |                10 |              0.06762 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | 15-20%                  |                10 |              0.06795 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6853 | 10-15%                  |                 2 |              0.34265 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6865 | >20%                    |                 2 |              0.34325 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6876 | <5%                     |                 5 |              0.13752 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6936 | <5%                     |                 5 |              0.13872 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6997 | 10-15%                  |                 5 |              0.13994 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7067 | <5%                     |                 5 |              0.14134 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7096 | >20%                    |                10 |              0.07096 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7101 | >20%                    |                10 |              0.07101 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7183 | >20%                    |                10 |              0.07183 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7192 | >20%                    |                 5 |              0.14384 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7219 | 10-15%                  |                 5 |              0.14438 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7229 | <5%                     |                10 |              0.07229 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7238 | >20%                    |                10 |              0.07238 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7385 | 15-20%                  |                10 |              0.07385 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7463 | 15-20%                  |                10 |              0.07463 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7608 | >20%                    |                10 |              0.07608 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7609 | 10-15%                  |                10 |              0.07609 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | >20%                    |                10 |              0.0765  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7764 | >20%                    |                 5 |              0.15528 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7766 | >20%                    |                10 |              0.07766 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.787  | 5-10%                   |                 5 |              0.1574  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7901 | 15-20%                  |                10 |              0.07901 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7931 | >20%                    |                10 |              0.07931 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8082 | >20%                    |                10 |              0.08082 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8131 | <5%                     |                10 |              0.08131 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8134 | >20%                    |                 5 |              0.16268 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8249 | >20%                    |                10 |              0.08249 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8306 | <5%                     |                10 |              0.08306 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8478 | >20%                    |                10 |              0.08478 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8578 | 15-20%                  |                10 |              0.08578 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8696 | <5%                     |                10 |              0.08696 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8734 | >20%                    |                10 |              0.08734 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.877  | >20%                    |                10 |              0.0877  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8893 | >20%                    |                10 |              0.08893 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8911 | 15-20%                  |                10 |              0.08911 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8973 | >20%                    |                10 |              0.08973 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9116 | >20%                    |                10 |              0.09116 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9436 | >20%                    |                10 |              0.09436 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9543 | >20%                    |                10 |              0.09543 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9718 | >20%                    |                10 |              0.09718 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9917 | >20%                    |                10 |              0.09917 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9922 | >20%                    |                 2 |              0.4961  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9958 | >20%                    |                 5 |              0.19916 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0001 | >20%                    |                10 |              0.10001 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0071 | >20%                    |                10 |              0.10071 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0191 | <5%                     |                10 |              0.10191 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0203 | 15-20%                  |                10 |              0.10203 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0234 | >20%                    |                 2 |              0.5117  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0586 | 10-15%                  |                10 |              0.10586 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0664 | 15-20%                  |                10 |              0.10664 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0751 | <5%                     |                 2 |              0.53755 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0903 | >20%                    |                 2 |              0.54515 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.106  | >20%                    |                10 |              0.1106  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1184 | 15-20%                  |                10 |              0.11184 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2073 | 10-15%                  |                10 |              0.12073 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2128 | <5%                     |                 5 |              0.24256 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2257 | >20%                    |                10 |              0.12257 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2717 | >20%                    |                10 |              0.12717 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2828 | >20%                    |                 5 |              0.25656 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.339  | >20%                    |                 5 |              0.2678  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4184 | >20%                    |                 5 |              0.28368 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4428 | <5%                     |                 5 |              0.28856 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4981 | 10-15%                  |                10 |              0.14981 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5488 | >20%                    |                 2 |              0.7744  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.8301 | <5%                     |                 2 |              0.91505 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8339 | <5%                     |                10 |              0.18339 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9479 | >20%                    |                10 |              0.19479 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0931 | <5%                     |                10 |              0.20931 |