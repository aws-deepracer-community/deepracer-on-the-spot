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

Data correct as of 2026-06-06 03:54:15.155788, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1254 | >20%                    |                 2 |              0.0627  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1637 | 15-20%                  |                 2 |              0.08185 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1745 | >20%                    |                 2 |              0.08725 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.198  | >20%                    |                 2 |              0.099   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2055 | 10-15%                  |                 2 |              0.10275 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2115 | >20%                    |                 2 |              0.10575 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.213  | 15-20%                  |                 2 |              0.1065  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2226 | >20%                    |                 2 |              0.1113  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.23   | 15-20%                  |                 5 |              0.046   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | >20%                    |                 2 |              0.1155  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2378 | 15-20%                  |                 5 |              0.04756 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2433 | >20%                    |                 2 |              0.12165 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2546 | >20%                    |                10 |              0.02546 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2591 | >20%                    |                 5 |              0.05182 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2784 | >20%                    |                 5 |              0.05568 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2854 | >20%                    |                 5 |              0.05708 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2854 | >20%                    |                 2 |              0.1427  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | 15-20%                  |                 2 |              0.1461  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.293  | 5-10%                   |                10 |              0.0293  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3039 | <5%                     |                10 |              0.03039 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | >20%                    |                 2 |              0.15245 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3128 | 10-15%                  |                 2 |              0.1564  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3134 | >20%                    |                10 |              0.03134 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3198 | 15-20%                  |                 5 |              0.06396 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3199 | >20%                    |                 5 |              0.06398 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3325 | >20%                    |                 5 |              0.0665  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3338 | >20%                    |                 2 |              0.1669  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | <5%                     |                 2 |              0.16715 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.338  | >20%                    |                 2 |              0.169   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3427 | 10-15%                  |                 2 |              0.17135 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3435 | >20%                    |                 2 |              0.17175 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3532 | >20%                    |                 5 |              0.07064 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.355  | >20%                    |                 5 |              0.071   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | >20%                    |                 5 |              0.07546 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3817 | >20%                    |                 2 |              0.19085 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3832 | >20%                    |                 5 |              0.07664 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3884 | >20%                    |                 5 |              0.07768 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3954 | >20%                    |                 5 |              0.07908 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4035 | >20%                    |                 5 |              0.0807  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | >20%                    |                 5 |              0.0809  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4086 | >20%                    |                10 |              0.04086 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.411  | >20%                    |                 5 |              0.0822  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4129 | >20%                    |                 5 |              0.08258 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4153 | 5-10%                   |                10 |              0.04153 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 10-15%                  |                 2 |              0.2083  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4196 | >20%                    |                 2 |              0.2098  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4221 | <5%                     |                 2 |              0.21105 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4245 | >20%                    |                 2 |              0.21225 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.427  | 15-20%                  |                 2 |              0.2135  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4366 | >20%                    |                10 |              0.04366 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | >20%                    |                 2 |              0.22335 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4503 |                         |                 2 |              0.22515 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.46   | 15-20%                  |                 5 |              0.092   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4648 | >20%                    |                 2 |              0.2324  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | >20%                    |                 5 |              0.09364 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4709 | <5%                     |                 2 |              0.23545 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.478  | >20%                    |                 5 |              0.0956  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4798 | 5-10%                   |                 2 |              0.2399  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4889 | >20%                    |                10 |              0.04889 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.492  | >20%                    |                 5 |              0.0984  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | >20%                    |                 5 |              0.0984  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4938 | >20%                    |                 5 |              0.09876 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4985 | >20%                    |                 2 |              0.24925 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5065 | 5-10%                   |                 2 |              0.25325 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5068 | 15-20%                  |                 2 |              0.2534  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5242 | >20%                    |                 5 |              0.10484 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5313 | 10-15%                  |                 2 |              0.26565 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5428 | 10-15%                  |                 5 |              0.10856 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.545  | >20%                    |                 2 |              0.2725  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.547  | 10-15%                  |                10 |              0.0547  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5564 | >20%                    |                 2 |              0.2782  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5587 | >20%                    |                 2 |              0.27935 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5661 | <5%                     |                 5 |              0.11322 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5695 | 15-20%                  |                 2 |              0.28475 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.574  | >20%                    |                 2 |              0.287   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5849 | >20%                    |                10 |              0.05849 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.586  | >20%                    |                10 |              0.0586  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6172 | 15-20%                  |                10 |              0.06172 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.625  | >20%                    |                 5 |              0.125   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6286 | >20%                    |                 5 |              0.12572 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6323 | >20%                    |                 5 |              0.12646 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6344 | >20%                    |                10 |              0.06344 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.646  | 15-20%                  |                10 |              0.0646  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6467 | 15-20%                  |                10 |              0.06467 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | >20%                    |                 5 |              0.13052 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.653  | >20%                    |                 5 |              0.1306  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6564 | >20%                    |                 5 |              0.13128 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6568 | >20%                    |                 5 |              0.13136 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6611 | >20%                    |                10 |              0.06611 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6612 | 5-10%                   |                10 |              0.06612 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6732 | >20%                    |                 2 |              0.3366  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6928 | >20%                    |                 5 |              0.13856 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6949 | 5-10%                   |                10 |              0.06949 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6973 | 15-20%                  |                10 |              0.06973 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6995 | >20%                    |                10 |              0.06995 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7006 | >20%                    |                 5 |              0.14012 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7101 | >20%                    |                 2 |              0.35505 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7148 | >20%                    |                10 |              0.07148 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7206 |                         |                 5 |              0.14412 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7335 | >20%                    |                 2 |              0.36675 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7386 | >20%                    |                 2 |              0.3693  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.756  | >20%                    |                10 |              0.0756  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7678 |                         |                10 |              0.07678 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7777 | >20%                    |                10 |              0.07777 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8013 | >20%                    |                10 |              0.08013 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8154 | >20%                    |                 5 |              0.16308 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8247 | 10-15%                  |                 2 |              0.41235 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8278 | >20%                    |                10 |              0.08278 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8311 | >20%                    |                10 |              0.08311 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8331 |                         |                 2 |              0.41655 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8345 | >20%                    |                 5 |              0.1669  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8366 | >20%                    |                 5 |              0.16732 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8485 | >20%                    |                10 |              0.08485 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8499 | >20%                    |                10 |              0.08499 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8521 | >20%                    |                10 |              0.08521 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8546 | >20%                    |                 5 |              0.17092 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8567 | 15-20%                  |                10 |              0.08567 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8667 | >20%                    |                10 |              0.08667 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8984 | >20%                    |                 5 |              0.17968 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9113 | 5-10%                   |                 2 |              0.45565 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9201 | 5-10%                   |                 5 |              0.18402 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9382 | >20%                    |                10 |              0.09382 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9517 | >20%                    |                 5 |              0.19034 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9526 | >20%                    |                10 |              0.09526 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9566 | >20%                    |                10 |              0.09566 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.966  | 5-10%                   |                10 |              0.0966  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9689 | >20%                    |                10 |              0.09689 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9715 | >20%                    |                 5 |              0.1943  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0013 | >20%                    |                10 |              0.10013 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0081 | >20%                    |                 2 |              0.50405 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0313 |                         |                 5 |              0.20626 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0346 | >20%                    |                10 |              0.10346 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0612 | >20%                    |                10 |              0.10612 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0656 | >20%                    |                 5 |              0.21312 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0765 | >20%                    |                 5 |              0.2153  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1119 | >20%                    |                10 |              0.11119 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1414 | 15-20%                  |                10 |              0.11414 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1514 | >20%                    |                10 |              0.11514 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1608 | 15-20%                  |                10 |              0.11608 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1662 | 10-15%                  |                 2 |              0.5831  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1795 | 5-10%                   |                 2 |              0.58975 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3059 | >20%                    |                10 |              0.13059 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3198 | 15-20%                  |                 5 |              0.26396 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3416 | >20%                    |                10 |              0.13416 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4268 | 10-15%                  |                10 |              0.14268 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.432  | >20%                    |                 5 |              0.2864  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4806 |                         |                10 |              0.14806 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5106 | 15-20%                  |                10 |              0.15106 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6065 | >20%                    |                 5 |              0.3213  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0692 | >20%                    |                10 |              0.20692 |