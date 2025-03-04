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

Data correct as of 2025-03-04 01:42:06.876172, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.117  | >20%                    |                 2 |              0.0585  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1393 | 10-15%                  |                 2 |              0.06965 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1454 | 5-10%                   |                 5 |              0.02908 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1913 | >20%                    |                 5 |              0.03826 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1924 | <5%                     |                 5 |              0.03848 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1955 | <5%                     |                 2 |              0.09775 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2028 | >20%                    |                 5 |              0.04056 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2134 | 5-10%                   |                 2 |              0.1067  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2312 | <5%                     |                 2 |              0.1156  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.233  | 15-20%                  |                 5 |              0.0466  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | >20%                    |                 2 |              0.11665 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2363 | >20%                    |                 2 |              0.11815 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2365 | 5-10%                   |                10 |              0.02365 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | >20%                    |                 2 |              0.11855 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2513 | <5%                     |                 5 |              0.05026 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.253  | >20%                    |                 2 |              0.1265  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | 15-20%                  |                 2 |              0.12745 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | 5-10%                   |                 2 |              0.1298  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | <5%                     |                 2 |              0.137   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2773 | 10-15%                  |                10 |              0.02773 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | 15-20%                  |                 2 |              0.1417  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2926 | 5-10%                   |                 2 |              0.1463  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2998 | 10-15%                  |                 2 |              0.1499  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3001 | 5-10%                   |                 2 |              0.15005 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | <5%                     |                 2 |              0.1549  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | <5%                     |                 2 |              0.15535 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | 15-20%                  |                 2 |              0.1578  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3249 | 5-10%                   |                 5 |              0.06498 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3262 | 10-15%                  |                 2 |              0.1631  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3356 | >20%                    |                 2 |              0.1678  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3363 |                         |                 2 |              0.16815 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3394 |                         |                 5 |              0.06788 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3453 | <5%                     |                 5 |              0.06906 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3482 | 15-20%                  |                 5 |              0.06964 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3487 | <5%                     |                 2 |              0.17435 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3499 | 5-10%                   |                10 |              0.03499 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3532 | 10-15%                  |                 5 |              0.07064 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3566 | >20%                    |                 2 |              0.1783  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3569 | 15-20%                  |                10 |              0.03569 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3592 | <5%                     |                 5 |              0.07184 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3592 | >20%                    |                 2 |              0.1796  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3632 | <5%                     |                10 |              0.03632 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3642 | >20%                    |                10 |              0.03642 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3656 | 15-20%                  |                 2 |              0.1828  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3718 | <5%                     |                 2 |              0.1859  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3757 | 5-10%                   |                 5 |              0.07514 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3816 | >20%                    |                 5 |              0.07632 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3861 | 15-20%                  |                 2 |              0.19305 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3864 | >20%                    |                 2 |              0.1932  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3922 | <5%                     |                 5 |              0.07844 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4022 | 10-15%                  |                10 |              0.04022 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4034 | <5%                     |                 2 |              0.2017  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4058 | >20%                    |                 2 |              0.2029  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4133 | >20%                    |                 2 |              0.20665 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4144 | 5-10%                   |                 2 |              0.2072  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4157 | 5-10%                   |                 2 |              0.20785 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 10-15%                  |                 2 |              0.20925 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.431  | 5-10%                   |                 2 |              0.2155  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4313 | >20%                    |                 2 |              0.21565 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4354 | 5-10%                   |                 2 |              0.2177  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4361 | >20%                    |                 5 |              0.08722 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4365 | <5%                     |                 2 |              0.21825 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4419 | >20%                    |                 5 |              0.08838 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4439 | >20%                    |                 2 |              0.22195 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4442 | >20%                    |                 2 |              0.2221  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4465 | >20%                    |                 2 |              0.22325 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | 10-15%                  |                 5 |              0.09194 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4634 | 15-20%                  |                10 |              0.04634 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | 5-10%                   |                 5 |              0.0932  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | >20%                    |                 5 |              0.0946  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | >20%                    |                 5 |              0.0954  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | 15-20%                  |                 5 |              0.09572 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | <5%                     |                 5 |              0.09654 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4878 | <5%                     |                10 |              0.04878 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.502  | 15-20%                  |                10 |              0.0502  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5021 | <5%                     |                 5 |              0.10042 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5061 | >20%                    |                 5 |              0.10122 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5077 | <5%                     |                 5 |              0.10154 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5115 |                         |                10 |              0.05115 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5143 | >20%                    |                 2 |              0.25715 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5148 | >20%                    |                 2 |              0.2574  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5165 | >20%                    |                 5 |              0.1033  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5206 | >20%                    |                 5 |              0.10412 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5241 | 5-10%                   |                 5 |              0.10482 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5268 | >20%                    |                 2 |              0.2634  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5274 | <5%                     |                 2 |              0.2637  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5438 | >20%                    |                 2 |              0.2719  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.556  | 10-15%                  |                 5 |              0.1112  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.561  | 5-10%                   |                 5 |              0.1122  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5644 | 5-10%                   |                 5 |              0.11288 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5661 | 15-20%                  |                 2 |              0.28305 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5668 | 10-15%                  |                 5 |              0.11336 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.567  | 10-15%                  |                 5 |              0.1134  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5694 | 5-10%                   |                10 |              0.05694 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.574  | 5-10%                   |                 5 |              0.1148  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5763 | >20%                    |                 2 |              0.28815 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5781 | >20%                    |                 5 |              0.11562 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5824 | 10-15%                  |                 5 |              0.11648 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5877 | 5-10%                   |                 2 |              0.29385 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5923 | 5-10%                   |                 5 |              0.11846 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6103 | <5%                     |                 5 |              0.12206 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6141 | 15-20%                  |                 5 |              0.12282 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6231 | 10-15%                  |                10 |              0.06231 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.627  | >20%                    |                 2 |              0.3135  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6275 | >20%                    |                 5 |              0.1255  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6494 | 10-15%                  |                 5 |              0.12988 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6563 | <5%                     |                10 |              0.06563 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6586 | >20%                    |                 2 |              0.3293  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6597 | 5-10%                   |                 5 |              0.13194 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6688 | >20%                    |                10 |              0.06688 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6974 | >20%                    |                 5 |              0.13948 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7015 | >20%                    |                 5 |              0.1403  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7044 | >20%                    |                10 |              0.07044 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.718  | >20%                    |                 2 |              0.359   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7269 | 5-10%                   |                 5 |              0.14538 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7322 | 15-20%                  |                 2 |              0.3661  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7342 | >20%                    |                10 |              0.07342 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7515 | 5-10%                   |                 2 |              0.37575 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7525 | >20%                    |                10 |              0.07525 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7577 | <5%                     |                 5 |              0.15154 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7588 | >20%                    |                10 |              0.07588 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.762  | >20%                    |                10 |              0.0762  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7639 | 5-10%                   |                 5 |              0.15278 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7663 | >20%                    |                 5 |              0.15326 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7734 | >20%                    |                10 |              0.07734 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7762 | >20%                    |                 5 |              0.15524 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7827 | 15-20%                  |                10 |              0.07827 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7878 | >20%                    |                 5 |              0.15756 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7887 | >20%                    |                10 |              0.07887 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7887 | 5-10%                   |                10 |              0.07887 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8042 | 10-15%                  |                10 |              0.08042 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8086 | <5%                     |                10 |              0.08086 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8134 | <5%                     |                10 |              0.08134 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8142 | >20%                    |                 5 |              0.16284 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8156 | <5%                     |                10 |              0.08156 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8165 | >20%                    |                10 |              0.08165 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8288 | >20%                    |                 5 |              0.16576 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8586 | 15-20%                  |                10 |              0.08586 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8713 | 10-15%                  |                10 |              0.08713 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8713 | <5%                     |                10 |              0.08713 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8725 | >20%                    |                 5 |              0.1745  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.88   | 5-10%                   |                10 |              0.088   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8925 | <5%                     |                10 |              0.08925 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9348 | >20%                    |                10 |              0.09348 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9351 | 5-10%                   |                10 |              0.09351 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9358 | >20%                    |                10 |              0.09358 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9406 | 10-15%                  |                10 |              0.09406 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9793 | >20%                    |                10 |              0.09793 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9837 | 5-10%                   |                10 |              0.09837 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9896 | 5-10%                   |                10 |              0.09896 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0232 | 15-20%                  |                10 |              0.10232 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0255 | 15-20%                  |                10 |              0.10255 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0475 | >20%                    |                10 |              0.10475 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0479 | 10-15%                  |                10 |              0.10479 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0816 | <5%                     |                10 |              0.10816 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0997 | 10-15%                  |                10 |              0.10997 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1035 | >20%                    |                 2 |              0.55175 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1164 | 10-15%                  |                 2 |              0.5582  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1338 | >20%                    |                10 |              0.11338 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1493 | >20%                    |                10 |              0.11493 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1778 | >20%                    |                 2 |              0.5889  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1792 | 15-20%                  |                10 |              0.11792 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2853 | 5-10%                   |                 5 |              0.25706 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3097 | >20%                    |                 5 |              0.26194 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3134 | >20%                    |                10 |              0.13134 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3343 | 10-15%                  |                 5 |              0.26686 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4075 | >20%                    |                10 |              0.14075 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5473 | 15-20%                  |                 5 |              0.30946 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.564  | >20%                    |                 2 |              0.782   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5696 | >20%                    |                 5 |              0.31392 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5699 | >20%                    |                10 |              0.15699 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7309 | >20%                    |                10 |              0.17309 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8383 | >20%                    |                10 |              0.18383 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1187 | 5-10%                   |                10 |              0.21187 |