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

Data correct as of 2025-08-23 01:46:31.284640, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1044 | 5-10%                   |                 2 |              0.0522  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1554 | >20%                    |                 5 |              0.03108 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2001 | 10-15%                  |                 5 |              0.04002 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2094 | 10-15%                  |                 2 |              0.1047  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2123 | >20%                    |                 2 |              0.10615 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2131 | >20%                    |                 2 |              0.10655 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.214  | >20%                    |                 2 |              0.107   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2462 | >20%                    |                 5 |              0.04924 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2634 | >20%                    |                 2 |              0.1317  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | >20%                    |                 2 |              0.13365 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2905 | >20%                    |                 5 |              0.0581  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | >20%                    |                 2 |              0.14845 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | 10-15%                  |                 2 |              0.1495  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | >20%                    |                 2 |              0.1499  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | 10-15%                  |                 2 |              0.15305 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | 10-15%                  |                 2 |              0.15455 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3264 | 5-10%                   |                 2 |              0.1632  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3399 | >20%                    |                 2 |              0.16995 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3452 | >20%                    |                 2 |              0.1726  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3505 | >20%                    |                 2 |              0.17525 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3511 | >20%                    |                10 |              0.03511 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.367  | >20%                    |                 2 |              0.1835  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3694 | >20%                    |                 2 |              0.1847  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3695 | >20%                    |                 2 |              0.18475 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | >20%                    |                 2 |              0.1878  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3899 | >20%                    |                 2 |              0.19495 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3919 | >20%                    |                 5 |              0.07838 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4074 | >20%                    |                 5 |              0.08148 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4135 | >20%                    |                 2 |              0.20675 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4171 | >20%                    |                 5 |              0.08342 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4173 | 10-15%                  |                 2 |              0.20865 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4234 | 10-15%                  |                10 |              0.04234 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | >20%                    |                 2 |              0.21235 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4252 | >20%                    |                 5 |              0.08504 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4291 | >20%                    |                 5 |              0.08582 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4421 | 10-15%                  |                 2 |              0.22105 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4464 | 10-15%                  |                 2 |              0.2232  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4552 | >20%                    |                 5 |              0.09104 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4589 | 5-10%                   |                 2 |              0.22945 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4706 | <5%                     |                 2 |              0.2353  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4754 | >20%                    |                 2 |              0.2377  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | >20%                    |                 2 |              0.23905 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | >20%                    |                 5 |              0.0979  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.492  | 15-20%                  |                 2 |              0.246   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4989 | >20%                    |                 5 |              0.09978 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4998 | >20%                    |                 2 |              0.2499  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5011 | >20%                    |                 2 |              0.25055 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5017 | 15-20%                  |                 5 |              0.10034 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5028 | 15-20%                  |                 5 |              0.10056 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5041 | >20%                    |                 2 |              0.25205 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5049 | 5-10%                   |                 5 |              0.10098 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5052 | >20%                    |                 2 |              0.2526  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5075 | >20%                    |                 5 |              0.1015  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5086 | 15-20%                  |                 2 |              0.2543  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5125 | 15-20%                  |                 2 |              0.25625 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5144 | 15-20%                  |                 5 |              0.10288 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5158 | >20%                    |                10 |              0.05158 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.516  | >20%                    |                 5 |              0.1032  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5197 | >20%                    |                 2 |              0.25985 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5211 | >20%                    |                 2 |              0.26055 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5265 | 15-20%                  |                 5 |              0.1053  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5327 | >20%                    |                 2 |              0.26635 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5455 | >20%                    |                 2 |              0.27275 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5557 | >20%                    |                 2 |              0.27785 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5645 | 10-15%                  |                 2 |              0.28225 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5674 | 15-20%                  |                 5 |              0.11348 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5682 | >20%                    |                 5 |              0.11364 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5735 | >20%                    |                 5 |              0.1147  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5894 | >20%                    |                 5 |              0.11788 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5903 | >20%                    |                 5 |              0.11806 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | >20%                    |                 5 |              0.11808 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5988 | >20%                    |                 2 |              0.2994  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5996 | >20%                    |                 5 |              0.11992 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6017 | >20%                    |                 5 |              0.12034 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.603  | 10-15%                  |                 2 |              0.3015  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6059 | 10-15%                  |                 5 |              0.12118 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6174 | 10-15%                  |                 5 |              0.12348 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6255 | 15-20%                  |                 5 |              0.1251  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.626  | 15-20%                  |                 5 |              0.1252  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6266 | 10-15%                  |                10 |              0.06266 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.627  | 15-20%                  |                 5 |              0.1254  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6315 | >20%                    |                 2 |              0.31575 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.632  | 10-15%                  |                10 |              0.0632  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6428 | >20%                    |                 5 |              0.12856 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6489 | >20%                    |                 5 |              0.12978 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6548 | >20%                    |                 5 |              0.13096 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.669  | 5-10%                   |                10 |              0.0669  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6729 | 15-20%                  |                 5 |              0.13458 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6858 | 15-20%                  |                 2 |              0.3429  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6898 | <5%                     |                 2 |              0.3449  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6952 | 15-20%                  |                 5 |              0.13904 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7017 | >20%                    |                 5 |              0.14034 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7035 | 15-20%                  |                 5 |              0.1407  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7044 | >20%                    |                 5 |              0.14088 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.706  | 15-20%                  |                10 |              0.0706  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7168 | >20%                    |                10 |              0.07168 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7303 | >20%                    |                10 |              0.07303 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7359 | >20%                    |                10 |              0.07359 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7384 | >20%                    |                10 |              0.07384 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7395 | >20%                    |                 5 |              0.1479  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7454 | >20%                    |                 5 |              0.14908 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.7688 | 15-20%                  |                10 |              0.07688 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.77   | >20%                    |                10 |              0.077   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7824 | >20%                    |                10 |              0.07824 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8001 | 5-10%                   |                 5 |              0.16002 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8003 | >20%                    |                 5 |              0.16006 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8035 | >20%                    |                 5 |              0.1607  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.804  | >20%                    |                10 |              0.0804  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8103 | >20%                    |                10 |              0.08103 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8206 | >20%                    |                 5 |              0.16412 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8326 | >20%                    |                 5 |              0.16652 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8341 | 5-10%                   |                10 |              0.08341 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8343 | >20%                    |                10 |              0.08343 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8535 | >20%                    |                10 |              0.08535 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8621 | 5-10%                   |                 2 |              0.43105 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8639 | 5-10%                   |                10 |              0.08639 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8657 | >20%                    |                10 |              0.08657 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8892 | 5-10%                   |                10 |              0.08892 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8926 | <5%                     |                10 |              0.08926 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9002 | 5-10%                   |                10 |              0.09002 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9068 | 5-10%                   |                10 |              0.09068 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9107 | <5%                     |                10 |              0.09107 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9205 | >20%                    |                 2 |              0.46025 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9244 | 10-15%                  |                10 |              0.09244 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9339 | >20%                    |                 2 |              0.46695 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9439 | <5%                     |                10 |              0.09439 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9561 | 10-15%                  |                10 |              0.09561 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9648 | 15-20%                  |                10 |              0.09648 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9744 | 10-15%                  |                10 |              0.09744 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.992  | 10-15%                  |                10 |              0.0992  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9979 | 15-20%                  |                10 |              0.09979 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0258 | >20%                    |                10 |              0.10258 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0261 | >20%                    |                10 |              0.10261 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0264 | >20%                    |                10 |              0.10264 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0271 | >20%                    |                10 |              0.10271 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0416 | >20%                    |                10 |              0.10416 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0418 | >20%                    |                 2 |              0.5209  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0476 | >20%                    |                10 |              0.10476 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0673 | >20%                    |                10 |              0.10673 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0908 | <5%                     |                10 |              0.10908 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1136 | >20%                    |                10 |              0.11136 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1233 | >20%                    |                 5 |              0.22466 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.126  | >20%                    |                10 |              0.1126  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1627 | >20%                    |                 2 |              0.58135 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1659 | <5%                     |                 2 |              0.58295 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1664 | >20%                    |                10 |              0.11664 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1969 | 5-10%                   |                 5 |              0.23938 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2104 | 15-20%                  |                10 |              0.12104 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.235  | >20%                    |                 5 |              0.247   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.237  | 5-10%                   |                 5 |              0.2474  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2647 | >20%                    |                 5 |              0.25294 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3257 | 15-20%                  |                 2 |              0.66285 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3487 | >20%                    |                10 |              0.13487 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4331 | >20%                    |                 5 |              0.28662 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4715 | 15-20%                  |                 5 |              0.2943  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5272 | >20%                    |                10 |              0.15272 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5353 | >20%                    |                10 |              0.15353 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5369 | >20%                    |                10 |              0.15369 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5399 | 10-15%                  |                10 |              0.15399 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5589 | >20%                    |                10 |              0.15589 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6899 | >20%                    |                10 |              0.16899 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7691 | 10-15%                  |                10 |              0.17691 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2578 | 10-15%                  |                10 |              0.22578 |