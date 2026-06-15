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

Data correct as of 2026-06-15 04:52:44.775259, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1472 | >20%                    |                 2 |              0.0736  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1669 | >20%                    |                 2 |              0.08345 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1774 | 15-20%                  |                 2 |              0.0887  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1912 | >20%                    |                 2 |              0.0956  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2306 | >20%                    |                 2 |              0.1153  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2331 | >20%                    |                 5 |              0.04662 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | >20%                    |                 2 |              0.11665 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | >20%                    |                 2 |              0.11695 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | >20%                    |                 2 |              0.1223  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2447 | 15-20%                  |                 2 |              0.12235 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | >20%                    |                 2 |              0.12265 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2566 | >20%                    |                 5 |              0.05132 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2629 | 10-15%                  |                 2 |              0.13145 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.264  | >20%                    |                 2 |              0.132   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2775 | 10-15%                  |                 2 |              0.13875 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2867 | 15-20%                  |                 2 |              0.14335 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2918 | 5-10%                   |                10 |              0.02918 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2919 | 15-20%                  |                 5 |              0.05838 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | >20%                    |                 2 |              0.1484  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3082 | >20%                    |                 5 |              0.06164 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3272 | 10-15%                  |                 2 |              0.1636  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3322 | 5-10%                   |                10 |              0.03322 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | >20%                    |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3356 | <5%                     |                 2 |              0.1678  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3373 | >20%                    |                10 |              0.03373 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3445 | >20%                    |                 5 |              0.0689  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3471 | >20%                    |                 2 |              0.17355 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3557 | >20%                    |                 2 |              0.17785 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.357  | >20%                    |                 2 |              0.1785  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3612 | 5-10%                   |                10 |              0.03612 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3617 | >20%                    |                 5 |              0.07234 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3637 | 15-20%                  |                 5 |              0.07274 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3682 | >20%                    |                 5 |              0.07364 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3733 | >20%                    |                 5 |              0.07466 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3752 | >20%                    |                 2 |              0.1876  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3857 | >20%                    |                10 |              0.03857 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3874 | >20%                    |                 5 |              0.07748 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3889 | >20%                    |                 5 |              0.07778 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3925 | >20%                    |                 2 |              0.19625 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3931 | >20%                    |                 5 |              0.07862 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3986 | >20%                    |                 5 |              0.07972 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4126 | >20%                    |                 2 |              0.2063  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4159 | >20%                    |                 5 |              0.08318 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4231 | >20%                    |                10 |              0.04231 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4232 | >20%                    |                 5 |              0.08464 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4239 | >20%                    |                 2 |              0.21195 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4253 | <5%                     |                 2 |              0.21265 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4394 | >20%                    |                 5 |              0.08788 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.45   | >20%                    |                10 |              0.045   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4513 | <5%                     |                 2 |              0.22565 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4517 | 15-20%                  |                 2 |              0.22585 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4611 | 10-15%                  |                 2 |              0.23055 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4664 | >20%                    |                 2 |              0.2332  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4746 | 15-20%                  |                 5 |              0.09492 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4795 | >20%                    |                 2 |              0.23975 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | >20%                    |                 5 |              0.0966  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.486  | 5-10%                   |                 2 |              0.243   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.496  | 5-10%                   |                 2 |              0.248   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.501  | 15-20%                  |                 2 |              0.2505  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5023 |                         |                 2 |              0.25115 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5078 | >20%                    |                 5 |              0.10156 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5126 | 15-20%                  |                 2 |              0.2563  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5143 | 10-15%                  |                 2 |              0.25715 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5147 | 5-10%                   |                 5 |              0.10294 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5184 | <5%                     |                10 |              0.05184 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5276 | >20%                    |                 2 |              0.2638  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5336 | >20%                    |                10 |              0.05336 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5418 | >20%                    |                 5 |              0.10836 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5425 | >20%                    |                 2 |              0.27125 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5434 | >20%                    |                 5 |              0.10868 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5482 | <5%                     |                 5 |              0.10964 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5485 | 10-15%                  |                 5 |              0.1097  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5635 | >20%                    |                10 |              0.05635 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5682 | >20%                    |                 2 |              0.2841  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5725 | >20%                    |                 5 |              0.1145  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5739 | >20%                    |                 2 |              0.28695 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5753 | >20%                    |                 5 |              0.11506 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5757 | >20%                    |                 5 |              0.11514 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5764 | >20%                    |                 5 |              0.11528 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5848 |                         |                 5 |              0.11696 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6096 | >20%                    |                 5 |              0.12192 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6101 | >20%                    |                 5 |              0.12202 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6423 | 10-15%                  |                10 |              0.06423 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6526 | >20%                    |                 2 |              0.3263  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6564 | >20%                    |                10 |              0.06564 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6572 | 5-10%                   |                10 |              0.06572 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6623 | 15-20%                  |                10 |              0.06623 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.663  | >20%                    |                10 |              0.0663  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6834 | >20%                    |                 5 |              0.13668 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6885 | >20%                    |                 5 |              0.1377  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6947 | >20%                    |                 2 |              0.34735 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.696  | >20%                    |                 5 |              0.1392  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6977 | 15-20%                  |                10 |              0.06977 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7079 | >20%                    |                 5 |              0.14158 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7117 | >20%                    |                10 |              0.07117 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7131 | >20%                    |                 2 |              0.35655 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7282 | >20%                    |                 5 |              0.14564 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7296 | >20%                    |                 5 |              0.14592 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7297 | 5-10%                   |                10 |              0.07297 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7308 | >20%                    |                 5 |              0.14616 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7333 | >20%                    |                10 |              0.07333 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7346 | >20%                    |                 2 |              0.3673  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7508 | >20%                    |                 5 |              0.15016 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7563 | >20%                    |                10 |              0.07563 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7566 | >20%                    |                10 |              0.07566 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7968 | 5-10%                   |                 5 |              0.15936 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.798  | >20%                    |                10 |              0.0798  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8045 | >20%                    |                10 |              0.08045 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8225 | 15-20%                  |                10 |              0.08225 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8242 | >20%                    |                10 |              0.08242 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8385 | >20%                    |                 5 |              0.1677  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8439 | >20%                    |                10 |              0.08439 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8449 | >20%                    |                 5 |              0.16898 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8451 | >20%                    |                10 |              0.08451 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.846  | 15-20%                  |                10 |              0.0846  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8513 | 15-20%                  |                10 |              0.08513 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8551 |                         |                 2 |              0.42755 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8703 |                         |                10 |              0.08703 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8967 | >20%                    |                10 |              0.08967 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9113 | >20%                    |                10 |              0.09113 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9127 | 5-10%                   |                 2 |              0.45635 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9183 | >20%                    |                10 |              0.09183 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9357 | >20%                    |                10 |              0.09357 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9401 | >20%                    |                 5 |              0.18802 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9534 | >20%                    |                10 |              0.09534 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9594 | >20%                    |                 5 |              0.19188 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9747 | >20%                    |                 5 |              0.19494 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9906 | >20%                    |                10 |              0.09906 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9994 | >20%                    |                 2 |              0.4997  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0264 | 10-15%                  |                 2 |              0.5132  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0294 | >20%                    |                10 |              0.10294 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0447 | 10-15%                  |                 2 |              0.52235 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0465 |                         |                 5 |              0.2093  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.056  | >20%                    |                 5 |              0.2112  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0999 | 15-20%                  |                10 |              0.10999 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1108 | 5-10%                   |                10 |              0.11108 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1879 | >20%                    |                10 |              0.11879 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.195  | >20%                    |                10 |              0.1195  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2542 | 5-10%                   |                 2 |              0.6271  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3045 | >20%                    |                10 |              0.13045 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3102 | >20%                    |                10 |              0.13102 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3539 | 15-20%                  |                 5 |              0.27078 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3957 | 10-15%                  |                10 |              0.13957 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3992 | >20%                    |                10 |              0.13992 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4398 | >20%                    |                10 |              0.14398 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4545 | 15-20%                  |                10 |              0.14545 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4625 | >20%                    |                 5 |              0.2925  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.47   | 15-20%                  |                10 |              0.147   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5836 | >20%                    |                 5 |              0.31672 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8788 |                         |                10 |              0.18788 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2482 | >20%                    |                10 |              0.22482 |