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

Data correct as of 2025-12-10 01:58:33.806374, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1228 | >20%                    |                 2 |              0.0614  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1473 | >20%                    |                 2 |              0.07365 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1674 | <5%                     |                 2 |              0.0837  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1735 | 15-20%                  |                 2 |              0.08675 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1848 | >20%                    |                 2 |              0.0924  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 5-10%                   |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1912 | >20%                    |                 2 |              0.0956  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | >20%                    |                 2 |              0.10655 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2328 | >20%                    |                 5 |              0.04656 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.236  | >20%                    |                 5 |              0.0472  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2377 | >20%                    |                 2 |              0.11885 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | >20%                    |                 2 |              0.12195 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | >20%                    |                 2 |              0.12315 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2535 | 10-15%                  |                 2 |              0.12675 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2565 | 10-15%                  |                 5 |              0.0513  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.262  | <5%                     |                 5 |              0.0524  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2806 | >20%                    |                 2 |              0.1403  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2839 | >20%                    |                 2 |              0.14195 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | 15-20%                  |                 2 |              0.1423  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2887 | 5-10%                   |                 2 |              0.14435 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2912 | >20%                    |                 5 |              0.05824 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | >20%                    |                 2 |              0.1481  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | 10-15%                  |                 2 |              0.1493  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | 10-15%                  |                 2 |              0.15025 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3079 | >20%                    |                 5 |              0.06158 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | >20%                    |                 2 |              0.15565 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3223 | >20%                    |                 2 |              0.16115 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3248 | 10-15%                  |                10 |              0.03248 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3468 | >20%                    |                 2 |              0.1734  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3479 | 5-10%                   |                10 |              0.03479 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3485 | >20%                    |                10 |              0.03485 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | 15-20%                  |                 2 |              0.1776  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3569 | 5-10%                   |                 2 |              0.17845 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3643 | >20%                    |                 2 |              0.18215 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3657 | >20%                    |                 2 |              0.18285 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3778 | >20%                    |                 5 |              0.07556 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3779 | >20%                    |                 2 |              0.18895 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.385  | <5%                     |                10 |              0.0385  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3864 | >20%                    |                 5 |              0.07728 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3871 | >20%                    |                 2 |              0.19355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3917 | >20%                    |                10 |              0.03917 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3962 | >20%                    |                 2 |              0.1981  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3963 | 15-20%                  |                 5 |              0.07926 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3984 | 15-20%                  |                10 |              0.03984 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4002 | >20%                    |                 2 |              0.2001  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4021 | >20%                    |                 5 |              0.08042 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4043 | >20%                    |                 5 |              0.08086 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4044 | <5%                     |                 5 |              0.08088 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4045 | >20%                    |                 5 |              0.0809  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4053 | <5%                     |                 2 |              0.20265 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4058 | >20%                    |                10 |              0.04058 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4064 | <5%                     |                 2 |              0.2032  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4066 | >20%                    |                 2 |              0.2033  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4085 | 10-15%                  |                 2 |              0.20425 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4206 | 15-20%                  |                 5 |              0.08412 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4242 | >20%                    |                 5 |              0.08484 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | <5%                     |                 2 |              0.2126  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | >20%                    |                 2 |              0.21385 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4305 | 10-15%                  |                 2 |              0.21525 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4331 | <5%                     |                10 |              0.04331 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4336 | >20%                    |                10 |              0.04336 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4351 | >20%                    |                 5 |              0.08702 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4398 | 15-20%                  |                 2 |              0.2199  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4414 | >20%                    |                 5 |              0.08828 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4428 | 15-20%                  |                 5 |              0.08856 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4491 | >20%                    |                10 |              0.04491 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4518 | >20%                    |                 5 |              0.09036 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4606 | 15-20%                  |                 5 |              0.09212 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4642 | >20%                    |                 2 |              0.2321  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4668 | 10-15%                  |                10 |              0.04668 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.467  | >20%                    |                 2 |              0.2335  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.475  | 15-20%                  |                 2 |              0.2375  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4761 | >20%                    |                 2 |              0.23805 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4875 | 15-20%                  |                 5 |              0.0975  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4922 | >20%                    |                 2 |              0.2461  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | >20%                    |                 5 |              0.09846 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4979 | 5-10%                   |                 5 |              0.09958 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5024 | >20%                    |                 5 |              0.10048 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5034 | >20%                    |                 2 |              0.2517  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5091 | 10-15%                  |                 5 |              0.10182 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5176 | >20%                    |                 5 |              0.10352 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5206 | >20%                    |                 5 |              0.10412 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5206 | <5%                     |                10 |              0.05206 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5254 | 15-20%                  |                 2 |              0.2627  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5341 | >20%                    |                 5 |              0.10682 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5411 | >20%                    |                 5 |              0.10822 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.543  | >20%                    |                 2 |              0.2715  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5489 | 15-20%                  |                 5 |              0.10978 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5502 | >20%                    |                10 |              0.05502 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5645 | <5%                     |                 5 |              0.1129  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5664 | 10-15%                  |                 5 |              0.11328 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5681 | >20%                    |                 5 |              0.11362 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5716 | >20%                    |                 5 |              0.11432 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5735 | >20%                    |                 2 |              0.28675 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5746 | >20%                    |                 2 |              0.2873  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.577  | <5%                     |                 5 |              0.1154  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5837 | >20%                    |                 5 |              0.11674 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | >20%                    |                 5 |              0.11686 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5869 | >20%                    |                10 |              0.05869 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5904 | >20%                    |                 5 |              0.11808 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5906 | 5-10%                   |                 5 |              0.11812 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5922 | <5%                     |                 5 |              0.11844 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5965 | 5-10%                   |                 5 |              0.1193  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6191 | 10-15%                  |                 5 |              0.12382 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6273 | >20%                    |                 2 |              0.31365 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.63   | >20%                    |                 2 |              0.315   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6431 | 15-20%                  |                 5 |              0.12862 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6465 | >20%                    |                 2 |              0.32325 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6469 | >20%                    |                 2 |              0.32345 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6499 | >20%                    |                 2 |              0.32495 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6511 | 15-20%                  |                10 |              0.06511 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6578 | >20%                    |                 2 |              0.3289  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6695 | >20%                    |                10 |              0.06695 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6711 | 5-10%                   |                 5 |              0.13422 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6859 | 5-10%                   |                10 |              0.06859 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6876 | >20%                    |                10 |              0.06876 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6929 | >20%                    |                 5 |              0.13858 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6952 | >20%                    |                10 |              0.06952 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | >20%                    |                 5 |              0.14076 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7303 | 10-15%                  |                10 |              0.07303 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7305 | >20%                    |                10 |              0.07305 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7314 | >20%                    |                10 |              0.07314 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7322 | >20%                    |                10 |              0.07322 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7322 | >20%                    |                10 |              0.07322 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.736  | >20%                    |                 5 |              0.1472  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7399 | >20%                    |                10 |              0.07399 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7533 | >20%                    |                 5 |              0.15066 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7588 | >20%                    |                 5 |              0.15176 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7596 | >20%                    |                10 |              0.07596 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7601 | >20%                    |                10 |              0.07601 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7602 | >20%                    |                 2 |              0.3801  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7694 | 10-15%                  |                10 |              0.07694 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.78   | >20%                    |                10 |              0.078   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7811 | 15-20%                  |                10 |              0.07811 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7843 | >20%                    |                10 |              0.07843 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7937 | 15-20%                  |                10 |              0.07937 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7988 | >20%                    |                 5 |              0.15976 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8037 | >20%                    |                10 |              0.08037 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8139 | >20%                    |                 5 |              0.16278 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8176 | >20%                    |                 2 |              0.4088  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8331 | 10-15%                  |                10 |              0.08331 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8341 | <5%                     |                10 |              0.08341 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8441 | >20%                    |                 2 |              0.42205 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8698 | >20%                    |                10 |              0.08698 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8718 | >20%                    |                 5 |              0.17436 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.872  | >20%                    |                10 |              0.0872  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8883 | 10-15%                  |                 5 |              0.17766 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.897  | 10-15%                  |                10 |              0.0897  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9019 | >20%                    |                10 |              0.09019 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9028 | 10-15%                  |                10 |              0.09028 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9037 | >20%                    |                10 |              0.09037 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9199 | >20%                    |                10 |              0.09199 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9334 | >20%                    |                 5 |              0.18668 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9456 | 5-10%                   |                10 |              0.09456 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9657 | >20%                    |                 5 |              0.19314 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9714 | >20%                    |                10 |              0.09714 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9813 | >20%                    |                 2 |              0.49065 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.984  | 15-20%                  |                 2 |              0.492   |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0034 | >20%                    |                10 |              0.10034 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0158 | >20%                    |                 2 |              0.5079  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.02   | 15-20%                  |                10 |              0.102   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0219 | >20%                    |                 2 |              0.51095 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0435 | 10-15%                  |                10 |              0.10435 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0562 | 10-15%                  |                10 |              0.10562 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1629 | >20%                    |                10 |              0.11629 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1717 | 5-10%                   |                 5 |              0.23434 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2252 | >20%                    |                10 |              0.12252 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2557 | 15-20%                  |                10 |              0.12557 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2697 | >20%                    |                 5 |              0.25394 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2801 | 5-10%                   |                10 |              0.12801 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4244 | >20%                    |                10 |              0.14244 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4374 | >20%                    |                 2 |              0.7187  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4721 | >20%                    |                 2 |              0.73605 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.489  | >20%                    |                10 |              0.1489  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5137 | >20%                    |                 5 |              0.30274 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5442 | 15-20%                  |                10 |              0.15442 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6235 | 10-15%                  |                 5 |              0.3247  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0577 | 10-15%                  |                10 |              0.20577 |