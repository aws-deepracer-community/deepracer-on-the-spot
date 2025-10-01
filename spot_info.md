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

Data correct as of 2025-10-01 01:54:32.780531, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1937 | >20%                    |                 2 |              0.09685 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1974 | >20%                    |                 2 |              0.0987  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.208  | 10-15%                  |                 2 |              0.104   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | >20%                    |                 2 |              0.11565 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | 5-10%                   |                 2 |              0.11625 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | >20%                    |                 2 |              0.1205  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2439 | 10-15%                  |                 5 |              0.04878 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | >20%                    |                 2 |              0.1265  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2615 | >20%                    |                 5 |              0.0523  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2627 | >20%                    |                 5 |              0.05254 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | >20%                    |                 2 |              0.1339  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2914 | >20%                    |                 2 |              0.1457  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | >20%                    |                 2 |              0.1466  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | 10-15%                  |                 2 |              0.149   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | 5-10%                   |                 2 |              0.15035 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | 15-20%                  |                 2 |              0.16095 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3279 | 10-15%                  |                 2 |              0.16395 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3291 | >20%                    |                 2 |              0.16455 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3337 | >20%                    |                 2 |              0.16685 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3506 | >20%                    |                 2 |              0.1753  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3589 | >20%                    |                 5 |              0.07178 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.36   | 15-20%                  |                 2 |              0.18    |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | >20%                    |                 2 |              0.1804  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3708 | 5-10%                   |                 2 |              0.1854  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3727 | >20%                    |                10 |              0.03727 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3743 | >20%                    |                 2 |              0.18715 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3775 | 15-20%                  |                 2 |              0.18875 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | >20%                    |                 5 |              0.07568 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.379  | >20%                    |                 2 |              0.1895  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.385  | >20%                    |                 2 |              0.1925  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4009 | >20%                    |                 5 |              0.08018 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4014 | >20%                    |                 2 |              0.2007  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.405  | >20%                    |                10 |              0.0405  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4063 | >20%                    |                 2 |              0.20315 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4073 | >20%                    |                 5 |              0.08146 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4169 | >20%                    |                10 |              0.04169 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4201 | >20%                    |                 5 |              0.08402 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4212 | >20%                    |                 5 |              0.08424 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.425  | 5-10%                   |                 2 |              0.2125  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4278 | >20%                    |                 2 |              0.2139  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4307 | >20%                    |                 2 |              0.21535 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4309 | 15-20%                  |                 2 |              0.21545 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4322 | <5%                     |                 2 |              0.2161  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4334 | 10-15%                  |                 5 |              0.08668 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4348 | >20%                    |                 2 |              0.2174  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4363 | >20%                    |                 5 |              0.08726 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4472 | 15-20%                  |                 5 |              0.08944 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4511 | 10-15%                  |                 2 |              0.22555 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4519 | >20%                    |                 2 |              0.22595 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4553 | >20%                    |                 2 |              0.22765 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4572 | >20%                    |                 5 |              0.09144 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4675 | >20%                    |                 5 |              0.0935  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | >20%                    |                 5 |              0.09486 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4816 | 10-15%                  |                 2 |              0.2408  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4824 | <5%                     |                10 |              0.04824 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4849 | >20%                    |                 5 |              0.09698 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4981 | >20%                    |                 2 |              0.24905 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4989 | 5-10%                   |                 5 |              0.09978 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | >20%                    |                 5 |              0.10064 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.505  | >20%                    |                 2 |              0.2525  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5133 | >20%                    |                 2 |              0.25665 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5135 | >20%                    |                 5 |              0.1027  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5175 | >20%                    |                 5 |              0.1035  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5335 | >20%                    |                 2 |              0.26675 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5473 | >20%                    |                 2 |              0.27365 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5498 | 5-10%                   |                 2 |              0.2749  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5503 | 10-15%                  |                 2 |              0.27515 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5526 | >20%                    |                 5 |              0.11052 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5597 | >20%                    |                 5 |              0.11194 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5732 | >20%                    |                 5 |              0.11464 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5746 | >20%                    |                10 |              0.05746 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5796 | 15-20%                  |                10 |              0.05796 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5835 | >20%                    |                 2 |              0.29175 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5864 | >20%                    |                 2 |              0.2932  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5884 | >20%                    |                 5 |              0.11768 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5936 | >20%                    |                 5 |              0.11872 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5974 | 15-20%                  |                 2 |              0.2987  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6015 | >20%                    |                 5 |              0.1203  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6137 | >20%                    |                 5 |              0.12274 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.617  | >20%                    |                 2 |              0.3085  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6186 | 10-15%                  |                 5 |              0.12372 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6245 | 15-20%                  |                 5 |              0.1249  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6299 | 10-15%                  |                 5 |              0.12598 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.634  | >20%                    |                 5 |              0.1268  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6383 | >20%                    |                 5 |              0.12766 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6395 | >20%                    |                 5 |              0.1279  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6429 | 15-20%                  |                 2 |              0.32145 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6446 | >20%                    |                 5 |              0.12892 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6492 | >20%                    |                 5 |              0.12984 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6659 | >20%                    |                 5 |              0.13318 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6701 | 5-10%                   |                10 |              0.06701 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.678  | >20%                    |                 5 |              0.1356  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6792 | >20%                    |                 5 |              0.13584 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.68   | 15-20%                  |                10 |              0.068   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6835 | >20%                    |                 5 |              0.1367  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6866 | >20%                    |                 2 |              0.3433  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6898 | >20%                    |                 5 |              0.13796 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6925 | >20%                    |                10 |              0.06925 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6964 | >20%                    |                 5 |              0.13928 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6975 | >20%                    |                10 |              0.06975 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6996 | >20%                    |                 2 |              0.3498  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7045 | >20%                    |                 5 |              0.1409  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7055 | 15-20%                  |                10 |              0.07055 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7185 | 15-20%                  |                 5 |              0.1437  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7187 | >20%                    |                 5 |              0.14374 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7195 | 15-20%                  |                 5 |              0.1439  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7453 | >20%                    |                10 |              0.07453 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.753  | >20%                    |                 5 |              0.1506  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7557 | 10-15%                  |                 2 |              0.37785 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7669 | 15-20%                  |                10 |              0.07669 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.772  | >20%                    |                10 |              0.0772  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7747 | 15-20%                  |                10 |              0.07747 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7786 | >20%                    |                10 |              0.07786 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7938 | >20%                    |                10 |              0.07938 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8143 | >20%                    |                 5 |              0.16286 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8147 | >20%                    |                 5 |              0.16294 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8181 | >20%                    |                10 |              0.08181 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8229 | 15-20%                  |                 5 |              0.16458 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8332 | >20%                    |                10 |              0.08332 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8483 | <5%                     |                10 |              0.08483 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8576 | 15-20%                  |                10 |              0.08576 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8641 | >20%                    |                 5 |              0.17282 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.877  | 10-15%                  |                 2 |              0.4385  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8835 | 15-20%                  |                10 |              0.08835 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8841 | >20%                    |                10 |              0.08841 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8847 | >20%                    |                10 |              0.08847 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8876 | >20%                    |                10 |              0.08876 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8923 | <5%                     |                10 |              0.08923 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.897  | <5%                     |                10 |              0.0897  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9046 | 10-15%                  |                10 |              0.09046 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9106 | 10-15%                  |                10 |              0.09106 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9199 | 15-20%                  |                10 |              0.09199 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9233 | 5-10%                   |                10 |              0.09233 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9243 | 10-15%                  |                 5 |              0.18486 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9604 | 15-20%                  |                10 |              0.09604 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9757 | >20%                    |                 5 |              0.19514 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9911 | 10-15%                  |                10 |              0.09911 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9915 | 15-20%                  |                10 |              0.09915 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0152 | >20%                    |                10 |              0.10152 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0246 | 5-10%                   |                10 |              0.10246 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0276 | >20%                    |                 2 |              0.5138  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0395 | >20%                    |                 2 |              0.51975 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0459 | >20%                    |                 2 |              0.52295 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.063  | >20%                    |                10 |              0.1063  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0636 | >20%                    |                 5 |              0.21272 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0778 | 15-20%                  |                10 |              0.10778 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0835 | >20%                    |                10 |              0.10835 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0903 | >20%                    |                 5 |              0.21806 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0946 | 10-15%                  |                 2 |              0.5473  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1168 | >20%                    |                10 |              0.11168 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1244 | 5-10%                   |                10 |              0.11244 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1279 | >20%                    |                 5 |              0.22558 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1334 | 5-10%                   |                10 |              0.11334 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1493 | <5%                     |                10 |              0.11493 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1526 | >20%                    |                10 |              0.11526 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.166  | >20%                    |                 5 |              0.2332  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1897 | 10-15%                  |                10 |              0.11897 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.224  | 15-20%                  |                10 |              0.1224  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2331 | 5-10%                   |                 2 |              0.61655 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2945 | 10-15%                  |                10 |              0.12945 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3009 | >20%                    |                10 |              0.13009 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3136 | >20%                    |                10 |              0.13136 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3232 | 10-15%                  |                 5 |              0.26464 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.569  | >20%                    |                10 |              0.1569  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6096 | >20%                    |                10 |              0.16096 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6368 | >20%                    |                10 |              0.16368 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6416 | 10-15%                  |                 5 |              0.32832 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7211 | >20%                    |                10 |              0.17211 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.008  | 10-15%                  |                10 |              0.2008  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.246  | 15-20%                  |                10 |              0.2246  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |