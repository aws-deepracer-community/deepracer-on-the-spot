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

Data correct as of 2025-02-10 01:38:45.645489, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1337 | >20%                    |                 2 |              0.06685 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1901 | 5-10%                   |                 2 |              0.09505 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2009 | <5%                     |                 5 |              0.04018 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2182 | 5-10%                   |                 2 |              0.1091  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.22   | >20%                    |                 2 |              0.11    |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2256 | 15-20%                  |                 2 |              0.1128  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | 15-20%                  |                 2 |              0.1169  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | >20%                    |                 2 |              0.11835 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | <5%                     |                 2 |              0.1187  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.242  | 15-20%                  |                10 |              0.0242  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | 5-10%                   |                 2 |              0.12195 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | 10-15%                  |                 2 |              0.1255  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | <5%                     |                 2 |              0.13735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2825 | <5%                     |                 5 |              0.0565  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2901 | <5%                     |                 2 |              0.14505 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2941 | <5%                     |                 2 |              0.14705 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | <5%                     |                 2 |              0.14795 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2964 | 10-15%                  |                 2 |              0.1482  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | 5-10%                   |                 2 |              0.14905 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | 5-10%                   |                 2 |              0.1498  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | 10-15%                  |                 2 |              0.15135 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3187 | 10-15%                  |                 2 |              0.15935 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3289 | >20%                    |                 5 |              0.06578 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3295 | <5%                     |                 2 |              0.16475 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3313 | <5%                     |                 2 |              0.16565 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3351 | 15-20%                  |                 2 |              0.16755 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | >20%                    |                 2 |              0.16885 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3437 | <5%                     |                10 |              0.03437 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3485 | 15-20%                  |                 5 |              0.0697  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3507 | 10-15%                  |                 2 |              0.17535 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3556 | 10-15%                  |                 5 |              0.07112 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3615 | <5%                     |                 2 |              0.18075 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | 10-15%                  |                 2 |              0.1815  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3665 | <5%                     |                10 |              0.03665 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3671 | 15-20%                  |                 5 |              0.07342 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3747 | 10-15%                  |                 2 |              0.18735 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3769 | <5%                     |                 2 |              0.18845 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | <5%                     |                 5 |              0.0756  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3806 | 10-15%                  |                10 |              0.03806 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3832 | 5-10%                   |                 2 |              0.1916  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3914 | >20%                    |                 2 |              0.1957  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3959 | 5-10%                   |                 5 |              0.07918 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3965 | <5%                     |                 5 |              0.0793  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4002 | 5-10%                   |                 5 |              0.08004 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.407  | 10-15%                  |                 2 |              0.2035  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4086 | 5-10%                   |                 2 |              0.2043  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4269 | >20%                    |                 5 |              0.08538 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4304 | <5%                     |                 2 |              0.2152  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4328 | >20%                    |                 5 |              0.08656 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4479 | >20%                    |                 5 |              0.08958 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4595 | <5%                     |                 2 |              0.22975 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4638 | >20%                    |                 5 |              0.09276 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | >20%                    |                 5 |              0.09378 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | <5%                     |                 5 |              0.09518 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4766 | <5%                     |                 2 |              0.2383  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | <5%                     |                 5 |              0.09534 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4775 | >20%                    |                 2 |              0.23875 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4913 | 5-10%                   |                 5 |              0.09826 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | >20%                    |                 5 |              0.0991  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4961 | >20%                    |                 2 |              0.24805 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4999 | 10-15%                  |                 5 |              0.09998 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5022 | 10-15%                  |                 5 |              0.10044 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | >20%                    |                 5 |              0.10044 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5034 | <5%                     |                 5 |              0.10068 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5049 | >20%                    |                 2 |              0.25245 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.508  | <5%                     |                 5 |              0.1016  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5156 | <5%                     |                 2 |              0.2578  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5167 | 15-20%                  |                10 |              0.05167 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | 15-20%                  |                 5 |              0.10372 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5202 | >20%                    |                 2 |              0.2601  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5233 | 15-20%                  |                 2 |              0.26165 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.526  | >20%                    |                 2 |              0.263   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.53   | >20%                    |                10 |              0.053   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5315 | >20%                    |                 2 |              0.26575 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.536  | >20%                    |                 5 |              0.1072  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5384 | 10-15%                  |                 5 |              0.10768 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5452 | <5%                     |                 5 |              0.10904 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5616 | 5-10%                   |                10 |              0.05616 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5622 | <5%                     |                 5 |              0.11244 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5644 | 15-20%                  |                 2 |              0.2822  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5681 | >20%                    |                 5 |              0.11362 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5698 | 10-15%                  |                 5 |              0.11396 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5706 | >20%                    |                 2 |              0.2853  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5717 | >20%                    |                10 |              0.05717 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5727 | >20%                    |                 2 |              0.28635 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5748 | 5-10%                   |                 5 |              0.11496 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5774 | 5-10%                   |                10 |              0.05774 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5839 | 5-10%                   |                 5 |              0.11678 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5934 | 5-10%                   |                 5 |              0.11868 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6062 | >20%                    |                 5 |              0.12124 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6116 | 5-10%                   |                10 |              0.06116 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.6121 | >20%                    |                 2 |              0.30605 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6143 | >20%                    |                 2 |              0.30715 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6251 | 5-10%                   |                 5 |              0.12502 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6325 | <5%                     |                10 |              0.06325 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6409 | 10-15%                  |                 5 |              0.12818 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6466 | >20%                    |                10 |              0.06466 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6522 | 15-20%                  |                 5 |              0.13044 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6572 | <5%                     |                 5 |              0.13144 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6615 | >20%                    |                 5 |              0.1323  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6678 | 15-20%                  |                 5 |              0.13356 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6748 | <5%                     |                10 |              0.06748 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6848 | >20%                    |                10 |              0.06848 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6877 | >20%                    |                 5 |              0.13754 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6943 | >20%                    |                 2 |              0.34715 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7014 | <5%                     |                10 |              0.07014 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7021 | >20%                    |                10 |              0.07021 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7082 | >20%                    |                10 |              0.07082 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7105 | >20%                    |                 5 |              0.1421  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7236 | 5-10%                   |                10 |              0.07236 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7252 | >20%                    |                 5 |              0.14504 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7546 | <5%                     |                 5 |              0.15092 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7549 | >20%                    |                 5 |              0.15098 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7584 | 15-20%                  |                10 |              0.07584 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7606 | >20%                    |                 5 |              0.15212 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7668 | 15-20%                  |                10 |              0.07668 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7677 | >20%                    |                 5 |              0.15354 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7925 | >20%                    |                10 |              0.07925 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7966 | 10-15%                  |                10 |              0.07966 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7969 | >20%                    |                10 |              0.07969 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7982 | 5-10%                   |                 2 |              0.3991  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8135 | <5%                     |                 5 |              0.1627  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.815  | 15-20%                  |                10 |              0.0815  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8176 | >20%                    |                10 |              0.08176 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8182 | <5%                     |                10 |              0.08182 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8333 | 15-20%                  |                10 |              0.08333 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8348 | 15-20%                  |                10 |              0.08348 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8356 | 5-10%                   |                 2 |              0.4178  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8618 | 5-10%                   |                10 |              0.08618 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8625 | <5%                     |                10 |              0.08625 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8683 | 10-15%                  |                10 |              0.08683 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8689 | >20%                    |                10 |              0.08689 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8725 | <5%                     |                10 |              0.08725 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8736 | 10-15%                  |                10 |              0.08736 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.874  | 15-20%                  |                 5 |              0.1748  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8763 | <5%                     |                10 |              0.08763 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8786 | >20%                    |                 2 |              0.4393  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.892  | 15-20%                  |                10 |              0.0892  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8952 | <5%                     |                10 |              0.08952 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9027 | 15-20%                  |                 5 |              0.18054 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.911  | <5%                     |                10 |              0.0911  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.913  | 10-15%                  |                10 |              0.0913  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | <5%                     |                10 |              0.09163 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.945  | >20%                    |                10 |              0.0945  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9944 | >20%                    |                10 |              0.09944 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0344 | <5%                     |                10 |              0.10344 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0422 | >20%                    |                10 |              0.10422 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.049  | >20%                    |                 2 |              0.5245  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0684 | >20%                    |                 5 |              0.21368 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0839 | 15-20%                  |                10 |              0.10839 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0906 | 15-20%                  |                 5 |              0.21812 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1072 | >20%                    |                 2 |              0.5536  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1264 | >20%                    |                10 |              0.11264 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1265 | 5-10%                   |                10 |              0.11265 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2067 | 15-20%                  |                10 |              0.12067 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2129 | 15-20%                  |                 2 |              0.60645 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2702 | 10-15%                  |                 5 |              0.25404 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2799 | 15-20%                  |                10 |              0.12799 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2816 | >20%                    |                10 |              0.12816 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3034 | 5-10%                   |                10 |              0.13034 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3073 | 15-20%                  |                10 |              0.13073 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4132 | >20%                    |                10 |              0.14132 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4185 | 15-20%                  |                10 |              0.14185 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0876 | 5-10%                   |                10 |              0.20876 |