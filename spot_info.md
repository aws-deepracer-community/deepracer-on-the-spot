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

Data correct as of 2024-11-22 01:42:45.732624, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1204 | >20%                    |                 5 |              0.02408 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1659 | 10-15%                  |                 2 |              0.08295 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2007 | >20%                    |                 5 |              0.04014 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2247 | 5-10%                   |                 2 |              0.11235 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | 15-20%                  |                 2 |              0.11305 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2345 | <5%                     |                 2 |              0.11725 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | 5-10%                   |                 2 |              0.118   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2511 | <5%                     |                 2 |              0.12555 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2619 | 10-15%                  |                 2 |              0.13095 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | <5%                     |                 2 |              0.138   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.291  | 5-10%                   |                 2 |              0.1455  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | 5-10%                   |                 2 |              0.14595 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | 10-15%                  |                 2 |              0.15635 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3195 | 15-20%                  |                 5 |              0.0639  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.3252 |                         |                 2 |              0.1626  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3268 | <5%                     |                 2 |              0.1634  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3346 | <5%                     |                 5 |              0.06692 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3372 | 5-10%                   |                 2 |              0.1686  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3384 | 15-20%                  |                 2 |              0.1692  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3401 | <5%                     |                10 |              0.03401 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3439 | <5%                     |                 2 |              0.17195 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3449 | 15-20%                  |                 2 |              0.17245 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3542 | <5%                     |                 5 |              0.07084 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.358  | >20%                    |                 2 |              0.179   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3605 | >20%                    |                 5 |              0.0721  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | <5%                     |                 2 |              0.18635 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3813 | >20%                    |                 5 |              0.07626 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3921 | >20%                    |                 2 |              0.19605 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3954 | >20%                    |                 5 |              0.07908 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3964 | <5%                     |                10 |              0.03964 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3975 | 5-10%                   |                 2 |              0.19875 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.398  | 5-10%                   |                 2 |              0.199   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4033 | 15-20%                  |                 5 |              0.08066 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4036 | >20%                    |                 2 |              0.2018  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4052 | >20%                    |                 2 |              0.2026  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4057 | <5%                     |                 2 |              0.20285 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4072 | <5%                     |                 2 |              0.2036  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4171 | 5-10%                   |                 2 |              0.20855 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | 5-10%                   |                 2 |              0.20915 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4322 | >20%                    |                 2 |              0.2161  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4325 | >20%                    |                 2 |              0.21625 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.4357 |                         |                 5 |              0.08714 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4379 | 10-15%                  |                 2 |              0.21895 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4409 | >20%                    |                10 |              0.04409 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4441 | 5-10%                   |                 5 |              0.08882 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4542 | 5-10%                   |                 5 |              0.09084 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | <5%                     |                 5 |              0.0914  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4577 | <5%                     |                 2 |              0.22885 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4598 | 10-15%                  |                 5 |              0.09196 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.461  | 15-20%                  |                 5 |              0.0922  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4682 | <5%                     |                 5 |              0.09364 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | 5-10%                   |                 5 |              0.09402 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4704 | 15-20%                  |                 5 |              0.09408 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | 15-20%                  |                 5 |              0.09552 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | <5%                     |                 2 |              0.24635 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4966 | 5-10%                   |                 2 |              0.2483  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | <5%                     |                 5 |              0.10196 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5106 | >20%                    |                10 |              0.05106 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5136 | 10-15%                  |                 2 |              0.2568  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5196 | 10-15%                  |                 2 |              0.2598  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5243 | 5-10%                   |                 2 |              0.26215 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5303 | <5%                     |                 5 |              0.10606 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5367 | >20%                    |                 5 |              0.10734 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5372 | <5%                     |                 5 |              0.10744 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5377 | >20%                    |                10 |              0.05377 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5385 | 10-15%                  |                 5 |              0.1077  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5501 | >20%                    |                 5 |              0.11002 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5509 | 5-10%                   |                 5 |              0.11018 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5563 | 10-15%                  |                 5 |              0.11126 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5605 | >20%                    |                 2 |              0.28025 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5614 | 10-15%                  |                 5 |              0.11228 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5656 | >20%                    |                 5 |              0.11312 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5669 | >20%                    |                10 |              0.05669 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5811 | <5%                     |                 5 |              0.11622 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5819 | 15-20%                  |                 2 |              0.29095 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5933 | 10-15%                  |                10 |              0.05933 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6248 | 5-10%                   |                10 |              0.06248 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.63   | 10-15%                  |                10 |              0.063   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6313 | 5-10%                   |                 5 |              0.12626 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6357 | >20%                    |                 5 |              0.12714 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.643  | >20%                    |                 5 |              0.1286  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.671  | <5%                     |                 5 |              0.1342  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6721 | >20%                    |                 2 |              0.33605 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6806 | <5%                     |                 5 |              0.13612 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6855 | >20%                    |                10 |              0.06855 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6863 | <5%                     |                 5 |              0.13726 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6863 | 15-20%                  |                 5 |              0.13726 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6914 | 5-10%                   |                 5 |              0.13828 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6993 | 5-10%                   |                10 |              0.06993 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7072 | >20%                    |                10 |              0.07072 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.728  | 5-10%                   |                10 |              0.0728  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7285 | <5%                     |                 5 |              0.1457  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7305 | 10-15%                  |                10 |              0.07305 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7426 | 15-20%                  |                 5 |              0.14852 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7617 | <5%                     |                 2 |              0.38085 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7686 | <5%                     |                10 |              0.07686 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7772 | 5-10%                   |                 5 |              0.15544 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7833 | 5-10%                   |                10 |              0.07833 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7835 | >20%                    |                10 |              0.07835 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8177 | 15-20%                  |                10 |              0.08177 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8219 | 5-10%                   |                10 |              0.08219 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.828  | 5-10%                   |                10 |              0.0828  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8314 | 10-15%                  |                10 |              0.08314 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8459 | >20%                    |                10 |              0.08459 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8475 | >20%                    |                 5 |              0.1695  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.854  | 10-15%                  |                10 |              0.0854  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8603 | 5-10%                   |                10 |              0.08603 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8614 | >20%                    |                10 |              0.08614 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9014 | 5-10%                   |                10 |              0.09014 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9037 | 15-20%                  |                10 |              0.09037 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9047 | 5-10%                   |                10 |              0.09047 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9343 | <5%                     |                10 |              0.09343 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9446 | <5%                     |                10 |              0.09446 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9924 | 5-10%                   |                10 |              0.09924 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0152 | <5%                     |                10 |              0.10152 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0221 | 5-10%                   |                10 |              0.10221 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.031  | >20%                    |                10 |              0.1031  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.04   | >20%                    |                10 |              0.104   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0425 | <5%                     |                10 |              0.10425 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0468 | 15-20%                  |                10 |              0.10468 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1361 | 10-15%                  |                10 |              0.11361 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1826 | 15-20%                  |                10 |              0.11826 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3457 | >20%                    |                10 |              0.13457 |