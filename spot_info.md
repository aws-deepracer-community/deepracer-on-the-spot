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

Data correct as of 2025-06-16 02:00:13.359953, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1092 | >20%                    |                 2 |              0.0546  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1639 | >20%                    |                 5 |              0.03278 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1705 | >20%                    |                 5 |              0.0341  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1742 | 5-10%                   |                 2 |              0.0871  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2074 | 15-20%                  |                 2 |              0.1037  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2091 | >20%                    |                 5 |              0.04182 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2152 | >20%                    |                 2 |              0.1076  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2207 | >20%                    |                 2 |              0.11035 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.223  | >20%                    |                 2 |              0.1115  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | 15-20%                  |                 2 |              0.116   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.239  | 15-20%                  |                 2 |              0.1195  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.242  | 15-20%                  |                10 |              0.0242  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2449 | 10-15%                  |                10 |              0.02449 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | <5%                     |                 2 |              0.12335 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2495 | >20%                    |                10 |              0.02495 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2638 | >20%                    |                 2 |              0.1319  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2656 | 5-10%                   |                10 |              0.02656 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | >20%                    |                 2 |              0.13545 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | 15-20%                  |                 2 |              0.1395  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | <5%                     |                 2 |              0.1411  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | >20%                    |                 2 |              0.14465 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2906 | 15-20%                  |                 5 |              0.05812 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2928 | >20%                    |                 5 |              0.05856 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2928 | >20%                    |                 5 |              0.05856 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | >20%                    |                 2 |              0.1477  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | >20%                    |                 2 |              0.15255 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3102 | >20%                    |                 2 |              0.1551  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3155 | >20%                    |                 2 |              0.15775 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3157 | >20%                    |                 2 |              0.15785 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.317  | >20%                    |                 2 |              0.1585  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3183 | 15-20%                  |                 5 |              0.06366 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3251 | >20%                    |                 5 |              0.06502 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3258 | 10-15%                  |                 2 |              0.1629  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3363 | <5%                     |                 2 |              0.16815 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3385 | 5-10%                   |                 2 |              0.16925 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3457 | 10-15%                  |                 2 |              0.17285 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3619 | >20%                    |                10 |              0.03619 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | 10-15%                  |                 2 |              0.18355 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3797 | 10-15%                  |                 2 |              0.18985 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3806 | >20%                    |                 2 |              0.1903  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3814 | >20%                    |                 5 |              0.07628 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3857 | 10-15%                  |                 5 |              0.07714 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3921 | >20%                    |                 2 |              0.19605 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3949 | >20%                    |                 2 |              0.19745 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4002 | <5%                     |                 5 |              0.08004 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4024 | >20%                    |                 2 |              0.2012  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4088 | >20%                    |                 5 |              0.08176 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4155 | >20%                    |                 5 |              0.0831  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4182 | 15-20%                  |                 2 |              0.2091  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4184 | >20%                    |                 5 |              0.08368 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4202 | <5%                     |                 2 |              0.2101  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4208 | >20%                    |                 5 |              0.08416 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4211 | >20%                    |                10 |              0.04211 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.422  | 10-15%                  |                 5 |              0.0844  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4249 | >20%                    |                10 |              0.04249 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4277 | 15-20%                  |                10 |              0.04277 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4317 | 5-10%                   |                 2 |              0.21585 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4333 | >20%                    |                10 |              0.04333 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4349 | >20%                    |                 2 |              0.21745 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4388 | 15-20%                  |                 5 |              0.08776 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4412 | >20%                    |                 5 |              0.08824 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4467 | <5%                     |                 5 |              0.08934 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4525 | >20%                    |                 2 |              0.22625 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4527 | >20%                    |                 2 |              0.22635 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4558 | >20%                    |                 5 |              0.09116 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | >20%                    |                 5 |              0.09162 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4625 | <5%                     |                 5 |              0.0925  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4833 | >20%                    |                 2 |              0.24165 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.484  | <5%                     |                 5 |              0.0968  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4861 | >20%                    |                 2 |              0.24305 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4863 | >20%                    |                 2 |              0.24315 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4885 | >20%                    |                 5 |              0.0977  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | >20%                    |                 5 |              0.09796 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4908 | >20%                    |                10 |              0.04908 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4965 | 10-15%                  |                 5 |              0.0993  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5011 | 15-20%                  |                 2 |              0.25055 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5028 | 5-10%                   |                 5 |              0.10056 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5028 | 10-15%                  |                 5 |              0.10056 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5049 | >20%                    |                 2 |              0.25245 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5064 | 10-15%                  |                 2 |              0.2532  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5093 | 15-20%                  |                 5 |              0.10186 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5243 | 5-10%                   |                 2 |              0.26215 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5251 | <5%                     |                 5 |              0.10502 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5309 | <5%                     |                 5 |              0.10618 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5337 | >20%                    |                 2 |              0.26685 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5372 | >20%                    |                 2 |              0.2686  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5439 | >20%                    |                10 |              0.05439 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5441 | 15-20%                  |                 2 |              0.27205 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5456 | >20%                    |                 2 |              0.2728  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5493 | >20%                    |                 5 |              0.10986 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5528 | >20%                    |                 5 |              0.11056 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5634 | 10-15%                  |                10 |              0.05634 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.565  | 10-15%                  |                 5 |              0.113   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5818 | >20%                    |                 5 |              0.11636 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5971 | >20%                    |                 5 |              0.11942 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5975 | 5-10%                   |                 2 |              0.29875 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5999 | >20%                    |                 2 |              0.29995 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.604  | <5%                     |                 2 |              0.302   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6086 | >20%                    |                 5 |              0.12172 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6116 | <5%                     |                 5 |              0.12232 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6182 | >20%                    |                 2 |              0.3091  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6226 | >20%                    |                 5 |              0.12452 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.626  | >20%                    |                 5 |              0.1252  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6263 | >20%                    |                 2 |              0.31315 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6398 | >20%                    |                10 |              0.06398 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.641  | >20%                    |                 5 |              0.1282  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6441 | >20%                    |                 5 |              0.12882 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6494 | <5%                     |                 5 |              0.12988 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6571 | >20%                    |                 2 |              0.32855 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6657 | >20%                    |                 5 |              0.13314 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6699 | >20%                    |                 5 |              0.13398 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6768 | 10-15%                  |                 5 |              0.13536 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | 15-20%                  |                10 |              0.06795 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6881 | >20%                    |                10 |              0.06881 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6888 | <5%                     |                10 |              0.06888 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6901 | >20%                    |                 5 |              0.13802 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6951 | 10-15%                  |                 5 |              0.13902 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6955 | 15-20%                  |                10 |              0.06955 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6987 | 10-15%                  |                 2 |              0.34935 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7054 | 15-20%                  |                10 |              0.07054 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7114 | <5%                     |                10 |              0.07114 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7138 | >20%                    |                10 |              0.07138 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7193 | <5%                     |                 5 |              0.14386 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7193 | >20%                    |                10 |              0.07193 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7258 | >20%                    |                10 |              0.07258 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7324 | 15-20%                  |                10 |              0.07324 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7401 | >20%                    |                10 |              0.07401 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7567 | <5%                     |                10 |              0.07567 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7568 | >20%                    |                 5 |              0.15136 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7669 | >20%                    |                10 |              0.07669 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7771 | >20%                    |                10 |              0.07771 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7799 | 10-15%                  |                10 |              0.07799 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7859 | >20%                    |                10 |              0.07859 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7881 | >20%                    |                 5 |              0.15762 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7927 | 15-20%                  |                10 |              0.07927 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7972 | <5%                     |                10 |              0.07972 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7999 | >20%                    |                10 |              0.07999 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8    | 5-10%                   |                 5 |              0.16    |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.806  | >20%                    |                 2 |              0.403   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8159 | >20%                    |                10 |              0.08159 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.817  | >20%                    |                10 |              0.0817  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8244 | >20%                    |                 5 |              0.16488 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.863  | >20%                    |                10 |              0.0863  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8779 | 15-20%                  |                10 |              0.08779 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8969 | <5%                     |                10 |              0.08969 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.911  | >20%                    |                10 |              0.0911  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9296 | >20%                    |                10 |              0.09296 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9376 | >20%                    |                10 |              0.09376 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9576 | >20%                    |                10 |              0.09576 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9694 | >20%                    |                 5 |              0.19388 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9741 | >20%                    |                10 |              0.09741 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9819 | >20%                    |                10 |              0.09819 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9855 | >20%                    |                10 |              0.09855 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.998  | >20%                    |                10 |              0.0998  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0014 | >20%                    |                10 |              0.10014 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0066 | >20%                    |                 2 |              0.5033  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0098 | >20%                    |                10 |              0.10098 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0341 | 10-15%                  |                10 |              0.10341 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0552 | <5%                     |                 2 |              0.5276  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0692 | >20%                    |                10 |              0.10692 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0719 | >20%                    |                 2 |              0.53595 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0986 | >20%                    |                 5 |              0.21972 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1014 | 15-20%                  |                10 |              0.11014 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1017 | 15-20%                  |                10 |              0.11017 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1222 | 15-20%                  |                10 |              0.11222 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1222 | <5%                     |                10 |              0.11222 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1492 | <5%                     |                 5 |              0.22984 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1793 | <5%                     |                 2 |              0.58965 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2253 | 10-15%                  |                10 |              0.12253 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2319 | >20%                    |                10 |              0.12319 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2769 | >20%                    |                 5 |              0.25538 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2814 | >20%                    |                10 |              0.12814 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3442 | >20%                    |                10 |              0.13442 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4117 | <5%                     |                 5 |              0.28234 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4656 | >20%                    |                 5 |              0.29312 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5783 | >20%                    |                 2 |              0.78915 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5981 | 10-15%                  |                10 |              0.15981 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7156 | <5%                     |                10 |              0.17156 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0569 | <5%                     |                10 |              0.20569 |