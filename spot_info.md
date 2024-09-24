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

Data correct as of 2024-09-24 01:37:14.318076, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0937 | <5%                     |                 2 |              0.04685 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1533 | 5-10%                   |                 2 |              0.07665 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1971 | 15-20%                  |                 2 |              0.09855 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2105 | <5%                     |                 2 |              0.10525 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2281 | 5-10%                   |                 2 |              0.11405 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | <5%                     |                 2 |              0.1174  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.237  | 15-20%                  |                 5 |              0.0474  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2378 | 15-20%                  |                 2 |              0.1189  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2588 | <5%                     |                 2 |              0.1294  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2606 | 15-20%                  |                 5 |              0.05212 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | <5%                     |                 2 |              0.13045 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2689 | >20%                    |                10 |              0.02689 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | <5%                     |                 2 |              0.137   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2767 | 10-15%                  |                 2 |              0.13835 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2775 | >20%                    |                 5 |              0.0555  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2897 | <5%                     |                 2 |              0.14485 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2951 | <5%                     |                 2 |              0.14755 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | 5-10%                   |                 2 |              0.15135 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | <5%                     |                 2 |              0.15225 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3133 | <5%                     |                 5 |              0.06266 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.352  | 5-10%                   |                 5 |              0.0704  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.355  | <5%                     |                 2 |              0.1775  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3567 | 10-15%                  |                 2 |              0.17835 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3585 | <5%                     |                 2 |              0.17925 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.368  | <5%                     |                10 |              0.0368  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3682 | <5%                     |                 5 |              0.07364 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3693 | 15-20%                  |                10 |              0.03693 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3709 | <5%                     |                10 |              0.03709 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.372  | <5%                     |                 2 |              0.186   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3809 | <5%                     |                 5 |              0.07618 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3971 | <5%                     |                 2 |              0.19855 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4    | >20%                    |                 2 |              0.2     |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4012 | >20%                    |                 2 |              0.2006  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4021 | 5-10%                   |                 5 |              0.08042 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4029 | >20%                    |                 2 |              0.20145 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4086 | 5-10%                   |                 2 |              0.2043  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4101 | <5%                     |                 2 |              0.20505 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.416  | 15-20%                  |                 5 |              0.0832  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4204 | >20%                    |                 5 |              0.08408 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4382 | <5%                     |                 5 |              0.08764 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4397 | 10-15%                  |                 2 |              0.21985 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4399 | <5%                     |                 2 |              0.21995 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4436 | >20%                    |                 5 |              0.08872 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4473 | <5%                     |                 5 |              0.08946 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4488 | 5-10%                   |                 5 |              0.08976 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.45   | >20%                    |                 2 |              0.225   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | <5%                     |                 5 |              0.09296 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4694 | 5-10%                   |                 5 |              0.09388 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | <5%                     |                 5 |              0.09692 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4849 | 5-10%                   |                 5 |              0.09698 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4894 | 15-20%                  |                 2 |              0.2447  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4968 | >20%                    |                 2 |              0.2484  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5048 | 10-15%                  |                 5 |              0.10096 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5072 | 15-20%                  |                 5 |              0.10144 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5106 | 10-15%                  |                10 |              0.05106 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5379 | <5%                     |                 5 |              0.10758 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5418 | <5%                     |                 5 |              0.10836 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5457 | <5%                     |                 5 |              0.10914 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5464 | >20%                    |                 5 |              0.10928 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.556  | >20%                    |                10 |              0.0556  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5582 | 15-20%                  |                 2 |              0.2791  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.569  | >20%                    |                 2 |              0.2845  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5844 | <5%                     |                10 |              0.05844 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5941 | >20%                    |                10 |              0.05941 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5947 | 5-10%                   |                 5 |              0.11894 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5968 | >20%                    |                 5 |              0.11936 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5981 | >20%                    |                 5 |              0.11962 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6052 | >20%                    |                10 |              0.06052 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6085 | 15-20%                  |                 2 |              0.30425 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6101 | >20%                    |                 5 |              0.12202 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6265 | 5-10%                   |                10 |              0.06265 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6279 | 5-10%                   |                 5 |              0.12558 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6504 | >20%                    |                 5 |              0.13008 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6838 | <5%                     |                10 |              0.06838 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6882 | <5%                     |                10 |              0.06882 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7385 | 15-20%                  |                10 |              0.07385 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7407 | >20%                    |                 5 |              0.14814 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7426 | >20%                    |                 2 |              0.3713  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7574 | 10-15%                  |                10 |              0.07574 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7741 | <5%                     |                10 |              0.07741 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7764 | >20%                    |                 5 |              0.15528 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7809 | >20%                    |                10 |              0.07809 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7892 | 10-15%                  |                10 |              0.07892 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8031 | 15-20%                  |                10 |              0.08031 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.811  | >20%                    |                10 |              0.0811  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8284 | >20%                    |                10 |              0.08284 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8626 | <5%                     |                 2 |              0.4313  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8634 | 5-10%                   |                 2 |              0.4317  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8653 | >20%                    |                10 |              0.08653 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8758 | <5%                     |                10 |              0.08758 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8832 | >20%                    |                10 |              0.08832 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8897 | >20%                    |                 5 |              0.17794 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.894  | 5-10%                   |                 5 |              0.1788  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9154 | <5%                     |                10 |              0.09154 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9185 | >20%                    |                10 |              0.09185 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9195 | 5-10%                   |                10 |              0.09195 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9268 | >20%                    |                 5 |              0.18536 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.991  | 5-10%                   |                10 |              0.0991  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0002 | 5-10%                   |                10 |              0.10002 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | 10-15%                  |                10 |              0.10313 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0367 | >20%                    |                10 |              0.10367 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0414 | <5%                     |                 2 |              0.5207  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0729 | >20%                    |                10 |              0.10729 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1037 | 10-15%                  |                 5 |              0.22074 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.111  | >20%                    |                10 |              0.1111  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2031 | >20%                    |                10 |              0.12031 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2362 | 15-20%                  |                10 |              0.12362 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4783 | >20%                    |                10 |              0.14783 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7531 | 5-10%                   |                10 |              0.17531 |