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

Data correct as of 2025-07-13 02:11:26.795355, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.141  | >20%                    |                 2 |              0.0705  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1475 | <5%                     |                 2 |              0.07375 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1694 | 10-15%                  |                 5 |              0.03388 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1698 | >20%                    |                 5 |              0.03396 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.176  | 5-10%                   |                 2 |              0.088   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1965 | >20%                    |                 2 |              0.09825 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2051 | >20%                    |                10 |              0.02051 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2078 | >20%                    |                 5 |              0.04156 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2196 | >20%                    |                 2 |              0.1098  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2277 | >20%                    |                 5 |              0.04554 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | 15-20%                  |                 2 |              0.11915 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | 5-10%                   |                 2 |              0.12105 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2449 | >20%                    |                 2 |              0.12245 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | >20%                    |                 2 |              0.12305 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2466 | 10-15%                  |                 5 |              0.04932 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2534 | >20%                    |                 2 |              0.1267  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | 15-20%                  |                 2 |              0.1283  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2638 | >20%                    |                10 |              0.02638 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2764 | 5-10%                   |                10 |              0.02764 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2819 | >20%                    |                 2 |              0.14095 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2888 | >20%                    |                 2 |              0.1444  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.301  | >20%                    |                10 |              0.0301  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3038 | >20%                    |                10 |              0.03038 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3039 | <5%                     |                 2 |              0.15195 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.306  | >20%                    |                 5 |              0.0612  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3149 | 5-10%                   |                 2 |              0.15745 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3162 | 10-15%                  |                 2 |              0.1581  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 15-20%                  |                 2 |              0.1598  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3213 | >20%                    |                 2 |              0.16065 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3259 | <5%                     |                 2 |              0.16295 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3509 | >20%                    |                 2 |              0.17545 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3547 | 15-20%                  |                 5 |              0.07094 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3558 | >20%                    |                 2 |              0.1779  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3568 | 10-15%                  |                 5 |              0.07136 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3624 | >20%                    |                 2 |              0.1812  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.366  | >20%                    |                 2 |              0.183   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | >20%                    |                 2 |              0.1874  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.383  | >20%                    |                 2 |              0.1915  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3847 | 5-10%                   |                 2 |              0.19235 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3871 | >20%                    |                 2 |              0.19355 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3882 | >20%                    |                 5 |              0.07764 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3892 | >20%                    |                 5 |              0.07784 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3907 | >20%                    |                 5 |              0.07814 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | >20%                    |                 2 |              0.1962  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4023 | 5-10%                   |                 2 |              0.20115 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4042 | >20%                    |                 2 |              0.2021  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4062 | <5%                     |                 5 |              0.08124 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | >20%                    |                 2 |              0.21385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.43   | 15-20%                  |                 5 |              0.086   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4411 | <5%                     |                 2 |              0.22055 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4434 | 10-15%                  |                 2 |              0.2217  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | >20%                    |                 5 |              0.0892  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4477 | >20%                    |                 5 |              0.08954 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4625 | >20%                    |                 5 |              0.0925  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4662 | >20%                    |                 2 |              0.2331  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.468  | 5-10%                   |                 2 |              0.234   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.47   | >20%                    |                 2 |              0.235   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4765 | >20%                    |                 5 |              0.0953  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4784 | >20%                    |                 2 |              0.2392  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4835 | >20%                    |                 5 |              0.0967  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | >20%                    |                 2 |              0.24295 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4871 | >20%                    |                 2 |              0.24355 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4898 | >20%                    |                 2 |              0.2449  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4949 | <5%                     |                 2 |              0.24745 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.495  | <5%                     |                 5 |              0.099   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | 15-20%                  |                 5 |              0.09902 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4979 | >20%                    |                 2 |              0.24895 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5107 | 10-15%                  |                 5 |              0.10214 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5127 | 15-20%                  |                 2 |              0.25635 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5198 | >20%                    |                 5 |              0.10396 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5213 | 15-20%                  |                 5 |              0.10426 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5221 | >20%                    |                 5 |              0.10442 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5244 | >20%                    |                 2 |              0.2622  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5264 | <5%                     |                 5 |              0.10528 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5333 | >20%                    |                 5 |              0.10666 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5366 | >20%                    |                10 |              0.05366 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5399 | >20%                    |                10 |              0.05399 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5435 | >20%                    |                 5 |              0.1087  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5437 | >20%                    |                 2 |              0.27185 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5471 | >20%                    |                10 |              0.05471 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5497 | >20%                    |                 5 |              0.10994 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5511 | >20%                    |                 5 |              0.11022 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.565  | >20%                    |                10 |              0.0565  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5663 | >20%                    |                 2 |              0.28315 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5795 | >20%                    |                 2 |              0.28975 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5815 | <5%                     |                 5 |              0.1163  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5838 | >20%                    |                 2 |              0.2919  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5896 | >20%                    |                 5 |              0.11792 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5939 | >20%                    |                 2 |              0.29695 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5944 | 5-10%                   |                 2 |              0.2972  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5983 | >20%                    |                10 |              0.05983 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5997 | 15-20%                  |                10 |              0.05997 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6037 | 10-15%                  |                 5 |              0.12074 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6057 | >20%                    |                10 |              0.06057 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6073 | 15-20%                  |                10 |              0.06073 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6127 | 10-15%                  |                 5 |              0.12254 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | >20%                    |                 5 |              0.12312 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6204 | >20%                    |                 2 |              0.3102  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6231 | >20%                    |                 5 |              0.12462 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6253 | >20%                    |                 2 |              0.31265 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6339 | >20%                    |                 5 |              0.12678 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6438 | 10-15%                  |                 2 |              0.3219  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6496 | >20%                    |                 5 |              0.12992 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6716 | 15-20%                  |                 5 |              0.13432 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6718 | >20%                    |                 5 |              0.13436 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6737 | 5-10%                   |                 5 |              0.13474 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6801 | >20%                    |                 5 |              0.13602 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6806 | 5-10%                   |                 5 |              0.13612 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6831 | >20%                    |                10 |              0.06831 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.685  | >20%                    |                 5 |              0.137   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6853 | >20%                    |                 5 |              0.13706 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7027 | <5%                     |                 5 |              0.14054 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7064 | 10-15%                  |                10 |              0.07064 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7076 | <5%                     |                10 |              0.07076 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7094 | >20%                    |                 5 |              0.14188 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.71   | >20%                    |                10 |              0.071   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7391 | >20%                    |                 2 |              0.36955 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7588 | 10-15%                  |                10 |              0.07588 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7664 | >20%                    |                10 |              0.07664 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7737 | >20%                    |                 5 |              0.15474 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | 10-15%                  |                10 |              0.07776 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7783 | 15-20%                  |                10 |              0.07783 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7899 | 5-10%                   |                10 |              0.07899 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8053 | 5-10%                   |                10 |              0.08053 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8068 | 10-15%                  |                 5 |              0.16136 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8143 | >20%                    |                10 |              0.08143 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8149 | >20%                    |                 5 |              0.16298 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8164 | >20%                    |                 5 |              0.16328 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8275 | >20%                    |                 5 |              0.1655  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.836  | <5%                     |                 5 |              0.1672  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8369 | <5%                     |                10 |              0.08369 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8534 | 5-10%                   |                10 |              0.08534 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8637 | >20%                    |                10 |              0.08637 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8767 | <5%                     |                10 |              0.08767 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8798 | 5-10%                   |                10 |              0.08798 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.891  | >20%                    |                10 |              0.0891  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8912 | 10-15%                  |                10 |              0.08912 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8978 | 15-20%                  |                10 |              0.08978 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9006 | >20%                    |                10 |              0.09006 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9225 | >20%                    |                10 |              0.09225 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9297 | >20%                    |                 5 |              0.18594 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9327 | >20%                    |                10 |              0.09327 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9338 | 15-20%                  |                10 |              0.09338 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.944  | 15-20%                  |                10 |              0.0944  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9569 | >20%                    |                10 |              0.09569 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9606 | 5-10%                   |                10 |              0.09606 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9609 | >20%                    |                10 |              0.09609 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9628 | >20%                    |                10 |              0.09628 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0153 | >20%                    |                10 |              0.10153 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0233 | >20%                    |                10 |              0.10233 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0475 | <5%                     |                10 |              0.10475 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0497 | >20%                    |                 5 |              0.20994 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.05   | <5%                     |                10 |              0.105   |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0502 | >20%                    |                10 |              0.10502 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0599 | >20%                    |                 2 |              0.52995 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0701 | <5%                     |                10 |              0.10701 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0801 | 15-20%                  |                10 |              0.10801 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1081 | >20%                    |                 2 |              0.55405 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1189 | <5%                     |                 2 |              0.55945 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1531 | >20%                    |                10 |              0.11531 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1691 | >20%                    |                10 |              0.11691 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2471 | <5%                     |                 5 |              0.24942 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2625 | >20%                    |                10 |              0.12625 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2791 | >20%                    |                 5 |              0.25582 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2824 | 15-20%                  |                10 |              0.12824 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2854 | >20%                    |                 5 |              0.25708 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2877 | <5%                     |                10 |              0.12877 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2972 | >20%                    |                 2 |              0.6486  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3075 | >20%                    |                 2 |              0.65375 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3869 | 10-15%                  |                10 |              0.13869 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4163 | >20%                    |                 5 |              0.28326 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4541 | <5%                     |                 5 |              0.29082 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4789 | >20%                    |                10 |              0.14789 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6133 | 15-20%                  |                10 |              0.16133 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8465 | <5%                     |                10 |              0.18465 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9006 | >20%                    |                10 |              0.19006 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.9245 | <5%                     |                 2 |              0.96225 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9906 | 5-10%                   |                10 |              0.19906 |