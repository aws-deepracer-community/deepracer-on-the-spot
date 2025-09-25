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

Data correct as of 2025-09-25 01:44:57.187167, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.183  | 10-15%                  |                 2 |              0.0915  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.184  | >20%                    |                 2 |              0.092   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1941 | >20%                    |                 2 |              0.09705 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1998 | >20%                    |                 2 |              0.0999  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2009 | 5-10%                   |                 2 |              0.10045 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2044 | >20%                    |                 5 |              0.04088 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2408 | 10-15%                  |                 5 |              0.04816 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | >20%                    |                 2 |              0.1246  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2606 | >20%                    |                 5 |              0.05212 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | >20%                    |                 2 |              0.13175 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | >20%                    |                 2 |              0.1513  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | 10-15%                  |                 2 |              0.1513  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.307  | >20%                    |                10 |              0.0307  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3081 | 5-10%                   |                 2 |              0.15405 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3093 | >20%                    |                 2 |              0.15465 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 15-20%                  |                 2 |              0.15855 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3262 | >20%                    |                 2 |              0.1631  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.331  | 5-10%                   |                 2 |              0.1655  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3312 | >20%                    |                 2 |              0.1656  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3354 | <5%                     |                10 |              0.03354 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3438 | 15-20%                  |                 2 |              0.1719  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3445 | 10-15%                  |                 2 |              0.17225 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3587 | >20%                    |                 2 |              0.17935 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3613 | >20%                    |                 2 |              0.18065 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3694 | >20%                    |                 2 |              0.1847  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3731 | >20%                    |                 2 |              0.18655 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3787 | >20%                    |                 5 |              0.07574 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3835 | >20%                    |                 5 |              0.0767  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3856 | >20%                    |                 5 |              0.07712 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3866 | <5%                     |                10 |              0.03866 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3916 | >20%                    |                10 |              0.03916 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.394  | >20%                    |                 2 |              0.197   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.399  | >20%                    |                 2 |              0.1995  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4012 | >20%                    |                 5 |              0.08024 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4147 | >20%                    |                 5 |              0.08294 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4151 | >20%                    |                 5 |              0.08302 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4161 | 15-20%                  |                 2 |              0.20805 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4213 | >20%                    |                 2 |              0.21065 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4233 | 10-15%                  |                 5 |              0.08466 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | >20%                    |                 2 |              0.2126  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4266 | >20%                    |                 5 |              0.08532 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4273 | >20%                    |                 5 |              0.08546 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4314 | 15-20%                  |                 2 |              0.2157  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4324 | >20%                    |                 2 |              0.2162  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4357 | >20%                    |                 2 |              0.21785 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4383 | >20%                    |                 2 |              0.21915 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4435 | 15-20%                  |                 5 |              0.0887  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4437 | 5-10%                   |                 2 |              0.22185 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4451 | >20%                    |                10 |              0.04451 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4517 | >20%                    |                 5 |              0.09034 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | 10-15%                  |                 2 |              0.2317  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4767 | 10-15%                  |                 2 |              0.23835 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4773 | >20%                    |                 5 |              0.09546 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4789 | <5%                     |                 2 |              0.23945 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4819 | >20%                    |                 5 |              0.09638 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4961 | 15-20%                  |                10 |              0.04961 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4965 | >20%                    |                 5 |              0.0993  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4967 | >20%                    |                 2 |              0.24835 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | 5-10%                   |                 5 |              0.10106 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5137 | >20%                    |                 5 |              0.10274 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5165 | >20%                    |                 2 |              0.25825 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5192 | >20%                    |                 5 |              0.10384 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5195 | >20%                    |                 2 |              0.25975 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5232 | >20%                    |                10 |              0.05232 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5367 | 5-10%                   |                 2 |              0.26835 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5378 | 10-15%                  |                 2 |              0.2689  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5429 | >20%                    |                 5 |              0.10858 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.544  | >20%                    |                 5 |              0.1088  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5496 | >20%                    |                 5 |              0.10992 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5523 | >20%                    |                 2 |              0.27615 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5617 | >20%                    |                 2 |              0.28085 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5683 | >20%                    |                 5 |              0.11366 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5723 | >20%                    |                 5 |              0.11446 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5787 | >20%                    |                 5 |              0.11574 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5841 | >20%                    |                 5 |              0.11682 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5901 | >20%                    |                 2 |              0.29505 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5928 | 15-20%                  |                 2 |              0.2964  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5965 | >20%                    |                 2 |              0.29825 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6037 | >20%                    |                 2 |              0.30185 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6076 | 5-10%                   |                10 |              0.06076 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6126 | >20%                    |                 5 |              0.12252 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6195 | >20%                    |                 5 |              0.1239  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6197 | 10-15%                  |                 5 |              0.12394 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6205 | 10-15%                  |                 5 |              0.1241  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6388 | 15-20%                  |                 5 |              0.12776 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6407 | >20%                    |                 5 |              0.12814 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6448 | 15-20%                  |                 2 |              0.3224  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6602 | >20%                    |                 5 |              0.13204 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6647 | >20%                    |                 5 |              0.13294 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6738 | >20%                    |                 5 |              0.13476 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6771 | >20%                    |                 5 |              0.13542 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6838 | >20%                    |                 2 |              0.3419  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6847 | 15-20%                  |                 5 |              0.13694 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6884 | 15-20%                  |                10 |              0.06884 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6886 | >20%                    |                 5 |              0.13772 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6894 | >20%                    |                 5 |              0.13788 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6962 | >20%                    |                 5 |              0.13924 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7002 | >20%                    |                 5 |              0.14004 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7026 | >20%                    |                 5 |              0.14052 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7063 | >20%                    |                 5 |              0.14126 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7065 | 15-20%                  |                10 |              0.07065 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.709  | >20%                    |                10 |              0.0709  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7196 | >20%                    |                10 |              0.07196 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7246 | >20%                    |                 2 |              0.3623  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7484 | >20%                    |                10 |              0.07484 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7508 | 15-20%                  |                 5 |              0.15016 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7597 | 15-20%                  |                10 |              0.07597 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7604 | >20%                    |                10 |              0.07604 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7648 | >20%                    |                10 |              0.07648 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7686 | 10-15%                  |                 2 |              0.3843  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8015 | >20%                    |                 5 |              0.1603  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8019 | 10-15%                  |                 2 |              0.40095 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8027 | >20%                    |                 5 |              0.16054 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.813  | >20%                    |                10 |              0.0813  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8168 | 15-20%                  |                 5 |              0.16336 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8267 | >20%                    |                10 |              0.08267 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8272 | >20%                    |                 5 |              0.16544 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8454 | >20%                    |                 5 |              0.16908 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.848  | 10-15%                  |                10 |              0.0848  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8491 | <5%                     |                10 |              0.08491 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8619 | >20%                    |                10 |              0.08619 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8701 | 15-20%                  |                10 |              0.08701 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8704 | 15-20%                  |                10 |              0.08704 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8731 | 15-20%                  |                10 |              0.08731 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.901  | <5%                     |                10 |              0.0901  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9059 | >20%                    |                10 |              0.09059 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9066 | 15-20%                  |                10 |              0.09066 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9086 | 10-15%                  |                10 |              0.09086 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9183 | >20%                    |                10 |              0.09183 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9193 | 5-10%                   |                10 |              0.09193 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9221 | >20%                    |                 5 |              0.18442 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9632 | <5%                     |                10 |              0.09632 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9779 | 15-20%                  |                10 |              0.09779 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9785 | 10-15%                  |                10 |              0.09785 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.989  | 10-15%                  |                 5 |              0.1978  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0004 | 15-20%                  |                10 |              0.10004 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0231 | >20%                    |                10 |              0.10231 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0405 | >20%                    |                10 |              0.10405 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0422 | >20%                    |                 2 |              0.5211  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.043  | 5-10%                   |                10 |              0.1043  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0456 | >20%                    |                 2 |              0.5228  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0589 | >20%                    |                 5 |              0.21178 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0632 | >20%                    |                10 |              0.10632 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.082  | >20%                    |                 2 |              0.541   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.089  | 5-10%                   |                10 |              0.1089  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0973 | >20%                    |                10 |              0.10973 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0995 | 10-15%                  |                 2 |              0.54975 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1029 | 15-20%                  |                10 |              0.11029 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.111  | <5%                     |                10 |              0.1111  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1173 | >20%                    |                 5 |              0.22346 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1309 | 5-10%                   |                10 |              0.11309 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1367 | >20%                    |                10 |              0.11367 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1642 | 10-15%                  |                10 |              0.11642 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1686 | >20%                    |                 5 |              0.23372 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1767 | >20%                    |                 5 |              0.23534 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2259 | 15-20%                  |                10 |              0.12259 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2302 | 5-10%                   |                 2 |              0.6151  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2496 | <5%                     |                 2 |              0.6248  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2837 | >20%                    |                10 |              0.12837 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2945 | >20%                    |                10 |              0.12945 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3174 | 10-15%                  |                10 |              0.13174 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3264 | 10-15%                  |                 5 |              0.26528 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4239 | >20%                    |                10 |              0.14239 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5987 | >20%                    |                10 |              0.15987 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6165 | >20%                    |                10 |              0.16165 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6342 | 10-15%                  |                 5 |              0.32684 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7083 | >20%                    |                10 |              0.17083 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.778  | >20%                    |                10 |              0.1778  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0452 | 10-15%                  |                10 |              0.20452 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1497 | 15-20%                  |                10 |              0.21497 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.5104 | >20%                    |                10 |              0.25104 |