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

Data correct as of 2026-02-16 02:37:53.678856, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1442 | >20%                    |                 2 |              0.0721  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1622 | >20%                    |                 2 |              0.0811  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2046 | >20%                    |                 2 |              0.1023  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2069 | <5%                     |                 5 |              0.04138 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2079 | >20%                    |                 5 |              0.04158 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2279 | 5-10%                   |                 2 |              0.11395 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2298 | >20%                    |                 2 |              0.1149  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2339 | >20%                    |                 5 |              0.04678 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2528 | >20%                    |                 2 |              0.1264  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | >20%                    |                 2 |              0.127   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | 15-20%                  |                 2 |              0.1276  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2605 | 10-15%                  |                 2 |              0.13025 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2648 | 5-10%                   |                10 |              0.02648 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2705 | >20%                    |                 2 |              0.13525 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2752 | 10-15%                  |                 2 |              0.1376  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2888 | >20%                    |                 2 |              0.1444  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2912 | >20%                    |                 5 |              0.05824 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2933 | >20%                    |                 2 |              0.14665 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | >20%                    |                 2 |              0.1528  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3094 | >20%                    |                 2 |              0.1547  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | >20%                    |                 2 |              0.15715 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3362 | <5%                     |                 5 |              0.06724 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3388 | >20%                    |                 2 |              0.1694  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3396 | 5-10%                   |                 2 |              0.1698  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3411 | <5%                     |                 2 |              0.17055 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3456 | >20%                    |                 5 |              0.06912 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.362  | >20%                    |                 5 |              0.0724  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3654 | 15-20%                  |                 2 |              0.1827  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3664 | >20%                    |                10 |              0.03664 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3673 | >20%                    |                 5 |              0.07346 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3679 | 5-10%                   |                10 |              0.03679 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | >20%                    |                 5 |              0.07366 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3763 | >20%                    |                 2 |              0.18815 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3774 | 5-10%                   |                 2 |              0.1887  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3806 | >20%                    |                 5 |              0.07612 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.381  | 15-20%                  |                 2 |              0.1905  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3819 | <5%                     |                 5 |              0.07638 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3825 | >20%                    |                 2 |              0.19125 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3863 | <5%                     |                 2 |              0.19315 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3882 | >20%                    |                 5 |              0.07764 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3913 | >20%                    |                10 |              0.03913 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3965 | >20%                    |                 5 |              0.0793  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3975 | 10-15%                  |                 2 |              0.19875 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4007 | >20%                    |                 5 |              0.08014 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4069 | <5%                     |                 5 |              0.08138 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | 10-15%                  |                 5 |              0.08208 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4123 | >20%                    |                 5 |              0.08246 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4171 | >20%                    |                 2 |              0.20855 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4176 | 5-10%                   |                 5 |              0.08352 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4238 | >20%                    |                10 |              0.04238 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4251 | 5-10%                   |                 2 |              0.21255 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | 15-20%                  |                 5 |              0.0851  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4287 | >20%                    |                 2 |              0.21435 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4325 | >20%                    |                 5 |              0.0865  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4345 | >20%                    |                 5 |              0.0869  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4346 | <5%                     |                 2 |              0.2173  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4367 | <5%                     |                 2 |              0.21835 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4395 | >20%                    |                 2 |              0.21975 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4421 | >20%                    |                 2 |              0.22105 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.444  | 15-20%                  |                 2 |              0.222   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4446 | 5-10%                   |                 2 |              0.2223  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4529 | >20%                    |                 5 |              0.09058 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4534 | 5-10%                   |                 2 |              0.2267  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4599 | >20%                    |                10 |              0.04599 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4606 | >20%                    |                 2 |              0.2303  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4661 | 5-10%                   |                 2 |              0.23305 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4698 | >20%                    |                10 |              0.04698 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.474  | 5-10%                   |                 5 |              0.0948  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.474  | 15-20%                  |                 2 |              0.237   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4841 | >20%                    |                 2 |              0.24205 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4848 | >20%                    |                 2 |              0.2424  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4909 | >20%                    |                 2 |              0.24545 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4942 | >20%                    |                10 |              0.04942 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5047 | 15-20%                  |                 5 |              0.10094 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5079 | <5%                     |                10 |              0.05079 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.51   | >20%                    |                 2 |              0.255   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5127 | >20%                    |                 2 |              0.25635 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5141 | >20%                    |                 5 |              0.10282 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5317 | 15-20%                  |                 5 |              0.10634 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5329 | >20%                    |                 5 |              0.10658 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5363 | <5%                     |                 5 |              0.10726 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5409 | <5%                     |                 5 |              0.10818 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5483 | >20%                    |                 5 |              0.10966 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5488 | >20%                    |                 5 |              0.10976 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5492 | 15-20%                  |                10 |              0.05492 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5571 | >20%                    |                10 |              0.05571 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.563  | <5%                     |                10 |              0.0563  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5657 | >20%                    |                 5 |              0.11314 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5798 | 15-20%                  |                10 |              0.05798 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5798 | >20%                    |                10 |              0.05798 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.588  | >20%                    |                10 |              0.0588  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5945 | <5%                     |                 2 |              0.29725 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5988 | 5-10%                   |                 5 |              0.11976 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6033 | 5-10%                   |                 2 |              0.30165 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6098 | 15-20%                  |                 2 |              0.3049  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.61   | >20%                    |                 5 |              0.122   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6108 | >20%                    |                 5 |              0.12216 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6177 | >20%                    |                 2 |              0.30885 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6185 | 5-10%                   |                 5 |              0.1237  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6195 | >20%                    |                 5 |              0.1239  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.625  | 10-15%                  |                 5 |              0.125   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6371 | >20%                    |                 5 |              0.12742 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6381 | >20%                    |                 5 |              0.12762 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6478 | 5-10%                   |                 2 |              0.3239  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6542 | 15-20%                  |                10 |              0.06542 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6592 | >20%                    |                 5 |              0.13184 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6596 | <5%                     |                10 |              0.06596 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6626 | <5%                     |                10 |              0.06626 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6636 | >20%                    |                10 |              0.06636 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6766 | >20%                    |                10 |              0.06766 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6808 | 5-10%                   |                 5 |              0.13616 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6895 | 15-20%                  |                10 |              0.06895 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6931 | <5%                     |                 5 |              0.13862 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7017 | 10-15%                  |                10 |              0.07017 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7034 | >20%                    |                 5 |              0.14068 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7096 | >20%                    |                 5 |              0.14192 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7102 | 5-10%                   |                 5 |              0.14204 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7105 | <5%                     |                10 |              0.07105 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7187 | 10-15%                  |                10 |              0.07187 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.734  | >20%                    |                 2 |              0.367   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7347 | >20%                    |                 5 |              0.14694 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7363 | >20%                    |                10 |              0.07363 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7412 | >20%                    |                10 |              0.07412 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.7483 | >20%                    |                10 |              0.07483 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7559 | >20%                    |                 5 |              0.15118 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7597 | 5-10%                   |                10 |              0.07597 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7686 | 15-20%                  |                 5 |              0.15372 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7776 | >20%                    |                10 |              0.07776 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7892 | >20%                    |                 2 |              0.3946  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7928 | <5%                     |                10 |              0.07928 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8015 | 15-20%                  |                10 |              0.08015 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8096 | 10-15%                  |                 2 |              0.4048  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8129 | >20%                    |                 5 |              0.16258 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8192 | >20%                    |                10 |              0.08192 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8258 | >20%                    |                 5 |              0.16516 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8342 | <5%                     |                10 |              0.08342 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.836  | >20%                    |                10 |              0.0836  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8409 | <5%                     |                 5 |              0.16818 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8455 | <5%                     |                10 |              0.08455 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8502 | >20%                    |                 5 |              0.17004 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8552 | >20%                    |                 2 |              0.4276  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8599 | >20%                    |                 2 |              0.42995 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8745 | 15-20%                  |                10 |              0.08745 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | >20%                    |                10 |              0.08752 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8753 | >20%                    |                 5 |              0.17506 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8759 | >20%                    |                 2 |              0.43795 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8798 |                         |                 2 |              0.4399  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8809 | 5-10%                   |                10 |              0.08809 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8897 | >20%                    |                10 |              0.08897 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8958 | <5%                     |                10 |              0.08958 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9207 | 10-15%                  |                10 |              0.09207 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9404 | <5%                     |                10 |              0.09404 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9775 | >20%                    |                 2 |              0.48875 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9958 | >20%                    |                10 |              0.09958 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0072 | >20%                    |                10 |              0.10072 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0087 | >20%                    |                 5 |              0.20174 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0217 | 5-10%                   |                 5 |              0.20434 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0339 | >20%                    |                10 |              0.10339 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0487 | >20%                    |                10 |              0.10487 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0543 | >20%                    |                10 |              0.10543 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0681 | 15-20%                  |                10 |              0.10681 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0703 | >20%                    |                 5 |              0.21406 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0742 | 5-10%                   |                10 |              0.10742 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.088  | 10-15%                  |                 5 |              0.2176  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0962 | >20%                    |                10 |              0.10962 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1493 | >20%                    |                 5 |              0.22986 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1606 | >20%                    |                 2 |              0.5803  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1627 |                         |                 5 |              0.23254 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1932 | <5%                     |                10 |              0.11932 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2288 | >20%                    |                10 |              0.12288 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2292 | >20%                    |                10 |              0.12292 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2469 | >20%                    |                10 |              0.12469 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.348  | >20%                    |                10 |              0.1348  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3799 | 10-15%                  |                 5 |              0.27598 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4072 | >20%                    |                10 |              0.14072 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4357 | >20%                    |                 2 |              0.71785 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6884 | 15-20%                  |                10 |              0.16884 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7681 |                         |                10 |              0.17681 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0845 | 10-15%                  |                10 |              0.20845 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4563 | <5%                     |                 5 |              0.49126 |