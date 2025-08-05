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

Data correct as of 2025-08-05 02:09:50.736054, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.095  | 5-10%                   |                 2 |              0.0475  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1036 | >20%                    |                 2 |              0.0518  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.142  | <5%                     |                 5 |              0.0284  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | >20%                    |                 2 |              0.0933  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | 15-20%                  |                 2 |              0.1191  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | 15-20%                  |                 2 |              0.1197  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | >20%                    |                 2 |              0.1361  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 5-10%                   |                 2 |              0.1361  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | >20%                    |                 2 |              0.1417  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2855 | >20%                    |                 2 |              0.14275 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | 15-20%                  |                 2 |              0.1573  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3189 | <5%                     |                 2 |              0.15945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3239 | 5-10%                   |                 2 |              0.16195 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3255 | >20%                    |                 2 |              0.16275 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.343  | 15-20%                  |                 2 |              0.1715  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3432 | 5-10%                   |                 5 |              0.06864 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3461 | 5-10%                   |                 2 |              0.17305 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3481 | >20%                    |                 2 |              0.17405 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3551 | <5%                     |                 2 |              0.17755 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3567 | >20%                    |                 5 |              0.07134 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3649 | >20%                    |                 5 |              0.07298 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3742 | 15-20%                  |                 2 |              0.1871  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3866 | >20%                    |                 5 |              0.07732 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3879 | >20%                    |                 5 |              0.07758 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.388  | >20%                    |                 2 |              0.194   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3925 | <5%                     |                 2 |              0.19625 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3981 | >20%                    |                 2 |              0.19905 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4    | 10-15%                  |                 2 |              0.2     |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4115 | >20%                    |                 5 |              0.0823  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4348 | >20%                    |                 5 |              0.08696 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4455 | <5%                     |                 2 |              0.22275 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4497 | >20%                    |                 5 |              0.08994 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4514 | >20%                    |                 2 |              0.2257  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4564 | 15-20%                  |                 5 |              0.09128 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4568 | >20%                    |                 5 |              0.09136 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4577 | 5-10%                   |                 2 |              0.22885 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4629 | <5%                     |                10 |              0.04629 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4693 | 15-20%                  |                10 |              0.04693 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4698 | >20%                    |                 2 |              0.2349  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.47   | >20%                    |                 5 |              0.094   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4739 | >20%                    |                 2 |              0.23695 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4764 | 5-10%                   |                 2 |              0.2382  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4778 | >20%                    |                 5 |              0.09556 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4856 | 10-15%                  |                 2 |              0.2428  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.488  | >20%                    |                 2 |              0.244   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4898 | >20%                    |                 2 |              0.2449  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4957 | >20%                    |                 5 |              0.09914 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4984 | >20%                    |                 2 |              0.2492  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4989 | >20%                    |                 2 |              0.24945 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | 10-15%                  |                 5 |              0.10018 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5061 | >20%                    |                 2 |              0.25305 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5125 | >20%                    |                 2 |              0.25625 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5182 | >20%                    |                 2 |              0.2591  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5199 | >20%                    |                 2 |              0.25995 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5234 | 5-10%                   |                 5 |              0.10468 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5319 | >20%                    |                 5 |              0.10638 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5367 | >20%                    |                 5 |              0.10734 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5411 | >20%                    |                 5 |              0.10822 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5479 | <5%                     |                 2 |              0.27395 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5488 | 15-20%                  |                 2 |              0.2744  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5514 | >20%                    |                 5 |              0.11028 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.555  | 10-15%                  |                 5 |              0.111   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.56   | 15-20%                  |                10 |              0.056   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5656 | <5%                     |                10 |              0.05656 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.57   | >20%                    |                 2 |              0.285   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.574  | >20%                    |                10 |              0.0574  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5793 | >20%                    |                 5 |              0.11586 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5811 | >20%                    |                 2 |              0.29055 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5892 | >20%                    |                 5 |              0.11784 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5925 | 10-15%                  |                 5 |              0.1185  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.597  | >20%                    |                 2 |              0.2985  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6034 | 5-10%                   |                 2 |              0.3017  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6078 | >20%                    |                 5 |              0.12156 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6139 | 5-10%                   |                 5 |              0.12278 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6191 | >20%                    |                 5 |              0.12382 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6323 | >20%                    |                 2 |              0.31615 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6347 | 5-10%                   |                 5 |              0.12694 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6364 | <5%                     |                 5 |              0.12728 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6372 | >20%                    |                 2 |              0.3186  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6397 | >20%                    |                 5 |              0.12794 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6402 | 10-15%                  |                 5 |              0.12804 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6533 | >20%                    |                 5 |              0.13066 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6571 | <5%                     |                 5 |              0.13142 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6611 | >20%                    |                10 |              0.06611 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6727 | 10-15%                  |                 2 |              0.33635 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6837 | >20%                    |                 2 |              0.34185 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6852 | 15-20%                  |                 2 |              0.3426  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.686  | >20%                    |                 5 |              0.1372  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.686  | 15-20%                  |                10 |              0.0686  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7002 | >20%                    |                 5 |              0.14004 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7099 | >20%                    |                10 |              0.07099 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7109 | >20%                    |                 5 |              0.14218 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7146 | >20%                    |                 5 |              0.14292 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7204 | 5-10%                   |                 5 |              0.14408 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.726  | 15-20%                  |                 2 |              0.363   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7284 | >20%                    |                10 |              0.07284 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | 15-20%                  |                10 |              0.0736  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7513 | 15-20%                  |                10 |              0.07513 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7564 | >20%                    |                 5 |              0.15128 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7646 | 15-20%                  |                 5 |              0.15292 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7676 | >20%                    |                10 |              0.07676 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.772  | <5%                     |                10 |              0.0772  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7769 | >20%                    |                 5 |              0.15538 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7868 | >20%                    |                 5 |              0.15736 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.791  | >20%                    |                 2 |              0.3955  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7932 | 15-20%                  |                10 |              0.07932 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.808  | >20%                    |                 5 |              0.1616  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.825  | >20%                    |                10 |              0.0825  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.834  | >20%                    |                 5 |              0.1668  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8361 | >20%                    |                10 |              0.08361 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8397 | <5%                     |                 5 |              0.16794 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | >20%                    |                10 |              0.08441 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8574 | 5-10%                   |                10 |              0.08574 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8865 | >20%                    |                 5 |              0.1773  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8897 | 15-20%                  |                10 |              0.08897 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8989 | >20%                    |                10 |              0.08989 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8993 | 5-10%                   |                 5 |              0.17986 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9157 | <5%                     |                10 |              0.09157 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9177 | 5-10%                   |                10 |              0.09177 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9227 | 5-10%                   |                10 |              0.09227 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9298 | 5-10%                   |                10 |              0.09298 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9348 | 5-10%                   |                10 |              0.09348 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9423 | 5-10%                   |                10 |              0.09423 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9446 | 15-20%                  |                10 |              0.09446 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9589 | >20%                    |                10 |              0.09589 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9755 | <5%                     |                10 |              0.09755 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9758 | >20%                    |                 2 |              0.4879  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9772 | <5%                     |                10 |              0.09772 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9851 | 15-20%                  |                 5 |              0.19702 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0011 | 15-20%                  |                10 |              0.10011 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0031 | 15-20%                  |                10 |              0.10031 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0299 | >20%                    |                10 |              0.10299 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0308 | 5-10%                   |                10 |              0.10308 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0441 | 15-20%                  |                10 |              0.10441 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0491 | >20%                    |                10 |              0.10491 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0539 | 15-20%                  |                10 |              0.10539 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0717 | <5%                     |                10 |              0.10717 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.084  | 5-10%                   |                10 |              0.1084  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0872 | >20%                    |                 5 |              0.21744 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1247 | >20%                    |                10 |              0.11247 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.135  | >20%                    |                10 |              0.1135  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1385 | >20%                    |                10 |              0.11385 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1453 | >20%                    |                 2 |              0.57265 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1547 | >20%                    |                10 |              0.11547 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1572 | >20%                    |                10 |              0.11572 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1812 | >20%                    |                 5 |              0.23624 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1919 | >20%                    |                10 |              0.11919 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1992 | >20%                    |                 5 |              0.23984 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2367 | <5%                     |                 2 |              0.61835 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2381 | >20%                    |                10 |              0.12381 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2486 | >20%                    |                 5 |              0.24972 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3502 | >20%                    |                 2 |              0.6751  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3674 | 5-10%                   |                10 |              0.13674 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3702 | 15-20%                  |                 5 |              0.27404 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4114 | >20%                    |                 5 |              0.28228 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4467 | >20%                    |                10 |              0.14467 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4506 | >20%                    |                10 |              0.14506 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4897 | 5-10%                   |                 2 |              0.74485 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5078 | <5%                     |                10 |              0.15078 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5566 | <5%                     |                 5 |              0.31132 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6684 | >20%                    |                10 |              0.16684 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8854 | 10-15%                  |                10 |              0.18854 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.105  | <5%                     |                10 |              0.2105  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2235 | 5-10%                   |                10 |              0.22235 |