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

Data correct as of 2026-03-09 02:36:04.005020, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1048 | 10-15%                  |                 2 |              0.0524  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.127  | >20%                    |                 2 |              0.0635  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1614 | >20%                    |                 2 |              0.0807  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1925 | <5%                     |                 2 |              0.09625 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | 10-15%                  |                 2 |              0.11295 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | >20%                    |                 2 |              0.12155 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | >20%                    |                 2 |              0.12315 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2471 | >20%                    |                 2 |              0.12355 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2549 | 5-10%                   |                10 |              0.02549 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2568 | >20%                    |                 5 |              0.05136 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2582 | >20%                    |                 2 |              0.1291  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | >20%                    |                 2 |              0.13045 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | 15-20%                  |                 2 |              0.13275 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2755 | >20%                    |                 5 |              0.0551  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | 10-15%                  |                 2 |              0.14965 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3024 | >20%                    |                 2 |              0.1512  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3061 | 15-20%                  |                 2 |              0.15305 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | 5-10%                   |                 2 |              0.15335 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | >20%                    |                 2 |              0.15385 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | >20%                    |                 2 |              0.154   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3093 | >20%                    |                 2 |              0.15465 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3166 | <5%                     |                 2 |              0.1583  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3197 | >20%                    |                 5 |              0.06394 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3264 | >20%                    |                 5 |              0.06528 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3293 | 5-10%                   |                10 |              0.03293 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3315 | >20%                    |                 5 |              0.0663  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3315 | <5%                     |                 5 |              0.0663  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3382 | <5%                     |                 5 |              0.06764 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3406 | >20%                    |                 5 |              0.06812 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3541 | 10-15%                  |                 2 |              0.17705 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3563 | 5-10%                   |                 2 |              0.17815 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.358  | >20%                    |                 5 |              0.0716  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3599 | >20%                    |                 2 |              0.17995 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3614 | 15-20%                  |                 2 |              0.1807  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3617 | >20%                    |                 5 |              0.07234 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3623 | <5%                     |                 2 |              0.18115 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3662 | >20%                    |                10 |              0.03662 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | <5%                     |                 5 |              0.07326 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.375  | 5-10%                   |                 2 |              0.1875  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3851 | >20%                    |                 5 |              0.07702 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3885 | 5-10%                   |                 5 |              0.0777  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.396  | >20%                    |                 2 |              0.198   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3964 | 5-10%                   |                 2 |              0.1982  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3986 | 15-20%                  |                 5 |              0.07972 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4002 | <5%                     |                 5 |              0.08004 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.401  | 5-10%                   |                 5 |              0.0802  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4022 | 5-10%                   |                 2 |              0.2011  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4085 | >20%                    |                 2 |              0.20425 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4087 | >20%                    |                10 |              0.04087 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4119 | >20%                    |                 2 |              0.20595 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4132 | 5-10%                   |                 5 |              0.08264 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4164 | 15-20%                  |                 5 |              0.08328 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | >20%                    |                 2 |              0.2089  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4213 | 15-20%                  |                 2 |              0.21065 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.425  | 10-15%                  |                 5 |              0.085   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | >20%                    |                 5 |              0.08602 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4304 | >20%                    |                 2 |              0.2152  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4305 | >20%                    |                10 |              0.04305 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4308 | <5%                     |                 2 |              0.2154  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.431  | >20%                    |                 2 |              0.2155  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4378 | >20%                    |                10 |              0.04378 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4388 | <5%                     |                10 |              0.04388 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4429 | 15-20%                  |                 5 |              0.08858 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.445  | 15-20%                  |                 2 |              0.2225  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4453 | 15-20%                  |                10 |              0.04453 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4577 | >20%                    |                 2 |              0.22885 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | >20%                    |                 5 |              0.09218 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4638 | 5-10%                   |                 2 |              0.2319  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4698 | >20%                    |                 5 |              0.09396 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4726 | 5-10%                   |                 2 |              0.2363  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4741 | >20%                    |                 5 |              0.09482 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4766 | >20%                    |                 5 |              0.09532 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | >20%                    |                 5 |              0.09788 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4979 | <5%                     |                 5 |              0.09958 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4989 | 15-20%                  |                10 |              0.04989 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5094 | >20%                    |                10 |              0.05094 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5124 | >20%                    |                 2 |              0.2562  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5139 | <5%                     |                10 |              0.05139 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5194 | 15-20%                  |                 5 |              0.10388 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5245 | >20%                    |                 2 |              0.26225 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.528  | >20%                    |                 2 |              0.264   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5342 | >20%                    |                 5 |              0.10684 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5366 | <5%                     |                 5 |              0.10732 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5386 | >20%                    |                 5 |              0.10772 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5456 | 15-20%                  |                10 |              0.05456 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5516 | >20%                    |                10 |              0.05516 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5601 | 5-10%                   |                 5 |              0.11202 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5606 | >20%                    |                 2 |              0.2803  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5607 | 15-20%                  |                10 |              0.05607 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.576  | <5%                     |                10 |              0.0576  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5776 | 5-10%                   |                 2 |              0.2888  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5823 | >20%                    |                 5 |              0.11646 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5886 | >20%                    |                 5 |              0.11772 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5929 | >20%                    |                 2 |              0.29645 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6066 | 5-10%                   |                 5 |              0.12132 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6117 | <5%                     |                10 |              0.06117 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6124 | >20%                    |                 2 |              0.3062  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6203 | 5-10%                   |                 2 |              0.31015 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6239 | >20%                    |                 5 |              0.12478 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6312 | >20%                    |                10 |              0.06312 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6344 | >20%                    |                10 |              0.06344 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6363 | 5-10%                   |                 5 |              0.12726 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6366 | >20%                    |                 5 |              0.12732 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6368 | >20%                    |                10 |              0.06368 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6371 | >20%                    |                 5 |              0.12742 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6422 | >20%                    |                10 |              0.06422 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6433 | 15-20%                  |                 2 |              0.32165 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6462 | >20%                    |                 5 |              0.12924 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6472 | >20%                    |                 5 |              0.12944 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6604 | >20%                    |                 2 |              0.3302  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6616 | >20%                    |                10 |              0.06616 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6634 | 10-15%                  |                 5 |              0.13268 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6647 | >20%                    |                 5 |              0.13294 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6819 | >20%                    |                10 |              0.06819 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6906 | <5%                     |                10 |              0.06906 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6936 | >20%                    |                10 |              0.06936 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7119 | >20%                    |                 5 |              0.14238 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7193 | >20%                    |                 5 |              0.14386 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7408 | 10-15%                  |                10 |              0.07408 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7454 | >20%                    |                10 |              0.07454 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7468 | 15-20%                  |                10 |              0.07468 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7657 | >20%                    |                10 |              0.07657 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7663 | >20%                    |                 5 |              0.15326 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7816 | <5%                     |                10 |              0.07816 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7904 | <5%                     |                10 |              0.07904 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7911 | <5%                     |                 5 |              0.15822 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7923 | >20%                    |                10 |              0.07923 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.803  | >20%                    |                 5 |              0.1606  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8189 | >20%                    |                 2 |              0.40945 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8248 | >20%                    |                 5 |              0.16496 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8269 | >20%                    |                 5 |              0.16538 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8317 | >20%                    |                10 |              0.08317 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8333 | >20%                    |                10 |              0.08333 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8381 | >20%                    |                10 |              0.08381 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.85   | >20%                    |                10 |              0.085   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8531 | >20%                    |                 5 |              0.17062 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8875 | 5-10%                   |                10 |              0.08875 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8877 | 10-15%                  |                 2 |              0.44385 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9011 | 5-10%                   |                10 |              0.09011 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9052 | >20%                    |                 2 |              0.4526  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9087 | >20%                    |                 5 |              0.18174 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9213 | <5%                     |                10 |              0.09213 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9404 | >20%                    |                10 |              0.09404 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9475 | >20%                    |                 5 |              0.1895  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9578 | >20%                    |                 2 |              0.4789  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9598 | >20%                    |                10 |              0.09598 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9625 | >20%                    |                10 |              0.09625 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9765 | 10-15%                  |                10 |              0.09765 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9902 | >20%                    |                10 |              0.09902 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0012 | 5-10%                   |                10 |              0.10012 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0139 | 5-10%                   |                 5 |              0.20278 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0316 | 15-20%                  |                10 |              0.10316 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0359 | >20%                    |                10 |              0.10359 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0405 | 15-20%                  |                10 |              0.10405 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0441 | >20%                    |                 2 |              0.52205 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1201 | >20%                    |                10 |              0.11201 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1608 | 10-15%                  |                10 |              0.11608 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1859 | 10-15%                  |                 5 |              0.23718 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.22   | <5%                     |                10 |              0.122   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2621 | >20%                    |                10 |              0.12621 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2811 | >20%                    |                 2 |              0.64055 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3454 | 15-20%                  |                10 |              0.13454 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4047 | 10-15%                  |                 5 |              0.28094 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4306 | >20%                    |                 5 |              0.28612 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4587 | >20%                    |                 2 |              0.72935 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.543  | >20%                    |                 2 |              0.7715  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6035 | >20%                    |                10 |              0.16035 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7142 | >20%                    |                10 |              0.17142 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.8238 | <5%                     |                 5 |              0.36476 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2263 | 10-15%                  |                10 |              0.22263 |