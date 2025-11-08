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

Data correct as of 2025-11-08 01:45:36.521288, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1128 | 5-10%                   |                 2 |              0.0564  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1775 | >20%                    |                 5 |              0.0355  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1827 | >20%                    |                 5 |              0.03654 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1849 | >20%                    |                 2 |              0.09245 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | >20%                    |                 2 |              0.11125 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | 5-10%                   |                 2 |              0.12155 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2433 | >20%                    |                 2 |              0.12165 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | 10-15%                  |                 2 |              0.12295 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | >20%                    |                 2 |              0.12395 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | >20%                    |                 2 |              0.12435 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | >20%                    |                 2 |              0.12605 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2643 | 5-10%                   |                 2 |              0.13215 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2671 | 10-15%                  |                 2 |              0.13355 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2702 | >20%                    |                 2 |              0.1351  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | >20%                    |                 2 |              0.1419  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2955 | >20%                    |                 2 |              0.14775 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3067 | >20%                    |                 2 |              0.15335 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | >20%                    |                 2 |              0.1539  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3083 | >20%                    |                 5 |              0.06166 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3085 | >20%                    |                 2 |              0.15425 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3115 | >20%                    |                 2 |              0.15575 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3141 | 15-20%                  |                 2 |              0.15705 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.327  | >20%                    |                 5 |              0.0654  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3278 | >20%                    |                 2 |              0.1639  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3375 | >20%                    |                 5 |              0.0675  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3438 | 10-15%                  |                 2 |              0.1719  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3472 | >20%                    |                 2 |              0.1736  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.352  | 10-15%                  |                 2 |              0.176   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3617 | >20%                    |                 2 |              0.18085 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3665 | >20%                    |                 5 |              0.0733  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3716 | 15-20%                  |                 2 |              0.1858  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3723 | <5%                     |                10 |              0.03723 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3744 | 5-10%                   |                 2 |              0.1872  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.379  | <5%                     |                 2 |              0.1895  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3801 | >20%                    |                 5 |              0.07602 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3805 | >20%                    |                 5 |              0.0761  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.386  | >20%                    |                 2 |              0.193   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.387  | 5-10%                   |                 2 |              0.1935  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3933 | >20%                    |                 2 |              0.19665 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4005 | >20%                    |                 5 |              0.0801  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4013 | 15-20%                  |                 2 |              0.20065 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | 15-20%                  |                 2 |              0.20155 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.406  | 15-20%                  |                 5 |              0.0812  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4129 | >20%                    |                 5 |              0.08258 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4148 | 5-10%                   |                 5 |              0.08296 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4171 | >20%                    |                 5 |              0.08342 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4229 | >20%                    |                 2 |              0.21145 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4247 | >20%                    |                 2 |              0.21235 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4267 | >20%                    |                 2 |              0.21335 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4293 | >20%                    |                 5 |              0.08586 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4332 | >20%                    |                 5 |              0.08664 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4351 | >20%                    |                 2 |              0.21755 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4355 | >20%                    |                 5 |              0.0871  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.436  | >20%                    |                 5 |              0.0872  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4388 | >20%                    |                 5 |              0.08776 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.441  | 10-15%                  |                 2 |              0.2205  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4462 | >20%                    |                 5 |              0.08924 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4527 | >20%                    |                 5 |              0.09054 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4541 | >20%                    |                 2 |              0.22705 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4607 | >20%                    |                 2 |              0.23035 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4615 | >20%                    |                 2 |              0.23075 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4651 | >20%                    |                 2 |              0.23255 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4663 | >20%                    |                 5 |              0.09326 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4664 | >20%                    |                 2 |              0.2332  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.47   | 15-20%                  |                10 |              0.047   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4762 | >20%                    |                 5 |              0.09524 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.479  | 10-15%                  |                 2 |              0.2395  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4848 | >20%                    |                 5 |              0.09696 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4865 | 5-10%                   |                 2 |              0.24325 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4914 | >20%                    |                10 |              0.04914 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.496  | >20%                    |                10 |              0.0496  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4976 | >20%                    |                 5 |              0.09952 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4992 | >20%                    |                 5 |              0.09984 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5034 | >20%                    |                 5 |              0.10068 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.505  | >20%                    |                 2 |              0.2525  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5066 | >20%                    |                 2 |              0.2533  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5077 | >20%                    |                 5 |              0.10154 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5116 | 15-20%                  |                 5 |              0.10232 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5289 | >20%                    |                 5 |              0.10578 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5313 | 10-15%                  |                 5 |              0.10626 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5372 | >20%                    |                 5 |              0.10744 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5381 | >20%                    |                 5 |              0.10762 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5451 | >20%                    |                10 |              0.05451 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5497 | >20%                    |                 5 |              0.10994 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5628 | >20%                    |                 5 |              0.11256 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.57   | >20%                    |                 5 |              0.114   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5799 | 10-15%                  |                 5 |              0.11598 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5884 | >20%                    |                10 |              0.05884 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5955 | 15-20%                  |                 2 |              0.29775 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5994 | <5%                     |                10 |              0.05994 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5995 | >20%                    |                 5 |              0.1199  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6062 | >20%                    |                 2 |              0.3031  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6117 | 10-15%                  |                 5 |              0.12234 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.62   | >20%                    |                 5 |              0.124   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6237 | 15-20%                  |                10 |              0.06237 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6243 | 15-20%                  |                10 |              0.06243 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6253 | 10-15%                  |                10 |              0.06253 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6365 | >20%                    |                10 |              0.06365 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6378 | >20%                    |                 5 |              0.12756 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6425 | >20%                    |                 2 |              0.32125 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.643  | >20%                    |                 2 |              0.3215  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6483 | >20%                    |                 5 |              0.12966 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.663  | 15-20%                  |                 2 |              0.3315  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6643 | 10-15%                  |                 2 |              0.33215 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6649 | >20%                    |                10 |              0.06649 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6668 | 15-20%                  |                10 |              0.06668 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.667  | >20%                    |                 5 |              0.1334  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6679 | 10-15%                  |                 2 |              0.33395 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6811 | 15-20%                  |                 5 |              0.13622 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6835 | 15-20%                  |                10 |              0.06835 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6866 | >20%                    |                10 |              0.06866 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6882 | >20%                    |                10 |              0.06882 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6963 | >20%                    |                 5 |              0.13926 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7023 | >20%                    |                 5 |              0.14046 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7024 | >20%                    |                10 |              0.07024 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7048 | <5%                     |                10 |              0.07048 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7052 | >20%                    |                 5 |              0.14104 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7094 | >20%                    |                10 |              0.07094 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7098 | >20%                    |                10 |              0.07098 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7128 | 15-20%                  |                 5 |              0.14256 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7163 | >20%                    |                 5 |              0.14326 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7182 | >20%                    |                 5 |              0.14364 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7245 | 15-20%                  |                 5 |              0.1449  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7368 | 15-20%                  |                10 |              0.07368 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.74   | >20%                    |                 5 |              0.148   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7439 | >20%                    |                10 |              0.07439 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7454 | 10-15%                  |                 5 |              0.14908 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7457 | <5%                     |                10 |              0.07457 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7527 | 15-20%                  |                10 |              0.07527 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7682 | 5-10%                   |                10 |              0.07682 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7702 | 10-15%                  |                10 |              0.07702 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7732 | >20%                    |                 2 |              0.3866  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7849 | 15-20%                  |                10 |              0.07849 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7917 | 15-20%                  |                10 |              0.07917 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.793  | >20%                    |                10 |              0.0793  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7985 | 5-10%                   |                10 |              0.07985 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8001 | 10-15%                  |                10 |              0.08001 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8153 | >20%                    |                10 |              0.08153 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8194 | 10-15%                  |                 2 |              0.4097  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8206 | >20%                    |                10 |              0.08206 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8324 | >20%                    |                10 |              0.08324 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8422 | 5-10%                   |                10 |              0.08422 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8443 | >20%                    |                10 |              0.08443 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9024 | >20%                    |                 2 |              0.4512  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9067 | >20%                    |                 5 |              0.18134 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9132 | <5%                     |                10 |              0.09132 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9217 | 10-15%                  |                10 |              0.09217 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9338 | >20%                    |                10 |              0.09338 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9372 | 10-15%                  |                 5 |              0.18744 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9446 | 5-10%                   |                10 |              0.09446 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9474 | >20%                    |                10 |              0.09474 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9553 | >20%                    |                 2 |              0.47765 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9773 | >20%                    |                 5 |              0.19546 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0029 | 5-10%                   |                10 |              0.10029 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0564 | 15-20%                  |                10 |              0.10564 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0593 | >20%                    |                10 |              0.10593 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0639 | >20%                    |                10 |              0.10639 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.087  | >20%                    |                 5 |              0.2174  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1088 | 15-20%                  |                10 |              0.11088 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1218 | 15-20%                  |                10 |              0.11218 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1359 | >20%                    |                 5 |              0.22718 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1416 | >20%                    |                 5 |              0.22832 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1442 | >20%                    |                10 |              0.11442 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1502 | >20%                    |                10 |              0.11502 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1585 | >20%                    |                 2 |              0.57925 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2019 | 10-15%                  |                10 |              0.12019 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2164 | >20%                    |                10 |              0.12164 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2675 | >20%                    |                 5 |              0.2535  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3482 | 10-15%                  |                10 |              0.13482 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.377  | >20%                    |                10 |              0.1377  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4421 | >20%                    |                10 |              0.14421 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4541 | 5-10%                   |                 2 |              0.72705 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.464  | >20%                    |                10 |              0.1464  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.487  | 10-15%                  |                 5 |              0.2974  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5015 | >20%                    |                10 |              0.15015 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2938 | 15-20%                  |                10 |              0.22938 |