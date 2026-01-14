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

Data correct as of 2026-01-14 02:07:59.651164, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1173 | >20%                    |                 2 |              0.05865 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1462 | >20%                    |                 5 |              0.02924 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1491 | >20%                    |                 2 |              0.07455 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1499 | >20%                    |                 2 |              0.07495 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.175  | <5%                     |                 2 |              0.0875  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2005 | >20%                    |                 2 |              0.10025 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2083 | >20%                    |                 2 |              0.10415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2326 | >20%                    |                 2 |              0.1163  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2354 | >20%                    |                 5 |              0.04708 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2517 | >20%                    |                 2 |              0.12585 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2637 | 15-20%                  |                 5 |              0.05274 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | >20%                    |                 2 |              0.13665 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | >20%                    |                 2 |              0.13785 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2769 | >20%                    |                 5 |              0.05538 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.278  | >20%                    |                 2 |              0.139   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2822 | >20%                    |                 5 |              0.05644 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2856 | >20%                    |                 2 |              0.1428  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2858 | >20%                    |                 2 |              0.1429  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2877 | 15-20%                  |                 2 |              0.14385 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2901 | >20%                    |                 2 |              0.14505 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2911 | 5-10%                   |                10 |              0.02911 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2925 | >20%                    |                10 |              0.02925 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3046 | >20%                    |                 5 |              0.06092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3184 | >20%                    |                 2 |              0.1592  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3242 | >20%                    |                 2 |              0.1621  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3318 | 5-10%                   |                 5 |              0.06636 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3332 | >20%                    |                 5 |              0.06664 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3419 | 5-10%                   |                10 |              0.03419 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3466 | 5-10%                   |                 2 |              0.1733  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3493 | >20%                    |                 5 |              0.06986 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3524 | <5%                     |                 5 |              0.07048 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3595 | 10-15%                  |                 2 |              0.17975 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3678 | >20%                    |                 2 |              0.1839  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | >20%                    |                 2 |              0.19045 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3809 | 5-10%                   |                 2 |              0.19045 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3814 | >20%                    |                 5 |              0.07628 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.384  | >20%                    |                 5 |              0.0768  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3865 | <5%                     |                 2 |              0.19325 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3902 | 15-20%                  |                10 |              0.03902 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3962 | >20%                    |                 2 |              0.1981  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3982 | 15-20%                  |                10 |              0.03982 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4001 | >20%                    |                 2 |              0.20005 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4022 | 10-15%                  |                 2 |              0.2011  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4025 | <5%                     |                10 |              0.04025 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.404  | >20%                    |                 5 |              0.0808  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4047 | >20%                    |                 5 |              0.08094 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4047 | >20%                    |                 2 |              0.20235 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.406  | >20%                    |                 5 |              0.0812  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4085 | >20%                    |                10 |              0.04085 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4093 | >20%                    |                 5 |              0.08186 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4106 | >20%                    |                10 |              0.04106 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4113 | >20%                    |                 5 |              0.08226 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4118 | >20%                    |                 2 |              0.2059  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4133 | >20%                    |                 2 |              0.20665 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4142 | >20%                    |                 2 |              0.2071  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4167 | >20%                    |                 2 |              0.20835 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4184 | >20%                    |                 5 |              0.08368 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4185 | <5%                     |                 2 |              0.20925 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4215 | >20%                    |                 5 |              0.0843  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4216 | >20%                    |                10 |              0.04216 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4237 | >20%                    |                10 |              0.04237 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4242 | >20%                    |                10 |              0.04242 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.43   | <5%                     |                10 |              0.043   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4362 | >20%                    |                 2 |              0.2181  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4412 | 10-15%                  |                 2 |              0.2206  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4458 | >20%                    |                 2 |              0.2229  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4504 | >20%                    |                 2 |              0.2252  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | >20%                    |                 5 |              0.09046 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4548 | 15-20%                  |                 5 |              0.09096 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4603 | >20%                    |                10 |              0.04603 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4623 | >20%                    |                 2 |              0.23115 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4625 | <5%                     |                 2 |              0.23125 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4658 | >20%                    |                 5 |              0.09316 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | >20%                    |                 5 |              0.09372 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4771 | >20%                    |                 2 |              0.23855 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4854 | >20%                    |                 5 |              0.09708 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4859 | >20%                    |                 5 |              0.09718 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4957 | <5%                     |                 5 |              0.09914 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4968 | >20%                    |                 2 |              0.2484  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.498  | 15-20%                  |                 2 |              0.249   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5048 | >20%                    |                 5 |              0.10096 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5127 | >20%                    |                 5 |              0.10254 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5142 | 15-20%                  |                 2 |              0.2571  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5172 | >20%                    |                 2 |              0.2586  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5353 | >20%                    |                 2 |              0.26765 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5408 | 15-20%                  |                 5 |              0.10816 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5424 | >20%                    |                 5 |              0.10848 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5438 | >20%                    |                 2 |              0.2719  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5611 | 5-10%                   |                 5 |              0.11222 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5614 | >20%                    |                 5 |              0.11228 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5657 | 10-15%                  |                 5 |              0.11314 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5661 | >20%                    |                 2 |              0.28305 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5671 | >20%                    |                 2 |              0.28355 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.57   | 15-20%                  |                 5 |              0.114   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5737 | >20%                    |                 5 |              0.11474 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5774 | 15-20%                  |                 5 |              0.11548 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5829 | 15-20%                  |                10 |              0.05829 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5973 | >20%                    |                 5 |              0.11946 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5979 | >20%                    |                 5 |              0.11958 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6029 | 5-10%                   |                 5 |              0.12058 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6053 | >20%                    |                 2 |              0.30265 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6343 | >20%                    |                10 |              0.06343 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6348 | >20%                    |                10 |              0.06348 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6358 | 5-10%                   |                 5 |              0.12716 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6364 | 10-15%                  |                 2 |              0.3182  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6404 | <5%                     |                 2 |              0.3202  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6504 | 15-20%                  |                 5 |              0.13008 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.651  | 10-15%                  |                 5 |              0.1302  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6512 | 15-20%                  |                10 |              0.06512 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6573 | >20%                    |                 5 |              0.13146 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6631 | >20%                    |                 2 |              0.33155 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.671  | >20%                    |                10 |              0.0671  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6878 | >20%                    |                 5 |              0.13756 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6974 | >20%                    |                10 |              0.06974 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7014 | >20%                    |                 2 |              0.3507  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7153 | <5%                     |                10 |              0.07153 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7182 | >20%                    |                 2 |              0.3591  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7196 | >20%                    |                10 |              0.07196 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7214 | <5%                     |                 5 |              0.14428 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7263 | >20%                    |                10 |              0.07263 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7274 | 15-20%                  |                 2 |              0.3637  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7284 | 15-20%                  |                10 |              0.07284 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7377 | >20%                    |                10 |              0.07377 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.742  | 10-15%                  |                 5 |              0.1484  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7438 | >20%                    |                 5 |              0.14876 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7455 | 5-10%                   |                10 |              0.07455 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7489 |                         |                 2 |              0.37445 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7608 | 15-20%                  |                10 |              0.07608 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7706 | <5%                     |                10 |              0.07706 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7777 | >20%                    |                 5 |              0.15554 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7797 | >20%                    |                 2 |              0.38985 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7798 | >20%                    |                 2 |              0.3899  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7799 | >20%                    |                10 |              0.07799 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7862 | 15-20%                  |                10 |              0.07862 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7901 | >20%                    |                 5 |              0.15802 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7991 | >20%                    |                10 |              0.07991 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8018 | <5%                     |                10 |              0.08018 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8133 | >20%                    |                10 |              0.08133 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8185 | 15-20%                  |                 5 |              0.1637  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | >20%                    |                10 |              0.08221 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8479 | 15-20%                  |                10 |              0.08479 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.856  | 10-15%                  |                 5 |              0.1712  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8648 | 10-15%                  |                 5 |              0.17296 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.89   | >20%                    |                10 |              0.089   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8955 | >20%                    |                10 |              0.08955 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8962 | >20%                    |                10 |              0.08962 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9034 | 10-15%                  |                10 |              0.09034 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9282 | >20%                    |                 5 |              0.18564 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9501 | >20%                    |                10 |              0.09501 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9959 | 15-20%                  |                10 |              0.09959 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9987 | >20%                    |                 2 |              0.49935 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0061 | >20%                    |                10 |              0.10061 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0095 | >20%                    |                10 |              0.10095 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0149 | >20%                    |                10 |              0.10149 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0164 | 15-20%                  |                10 |              0.10164 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0297 | >20%                    |                 2 |              0.51485 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0508 | >20%                    |                 5 |              0.21016 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.051  | >20%                    |                 5 |              0.2102  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0526 | >20%                    |                 2 |              0.5263  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0634 | 15-20%                  |                10 |              0.10634 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0746 | >20%                    |                10 |              0.10746 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1102 | 10-15%                  |                10 |              0.11102 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1115 | >20%                    |                 2 |              0.55575 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1172 | >20%                    |                10 |              0.11172 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1322 | <5%                     |                10 |              0.11322 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1692 | >20%                    |                 5 |              0.23384 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1753 | >20%                    |                10 |              0.11753 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1889 | 15-20%                  |                10 |              0.11889 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2039 | >20%                    |                10 |              0.12039 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.2445 | >20%                    |                 5 |              0.2489  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2458 | >20%                    |                 5 |              0.24916 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.265  | >20%                    |                10 |              0.1265  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2999 | >20%                    |                10 |              0.12999 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.304  | >20%                    |                 5 |              0.2608  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.427  | 10-15%                  |                10 |              0.1427  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4304 | 10-15%                  |                 5 |              0.28608 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.449  | >20%                    |                 2 |              0.7245  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.4713 |                         |                 5 |              0.29426 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5001 |                         |                10 |              0.15001 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.53   | >20%                    |                10 |              0.153   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.553  | >20%                    |                10 |              0.1553  |