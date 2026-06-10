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

Data correct as of 2026-06-10 04:07:42.024249, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1101 | >20%                    |                 2 |              0.05505 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.159  | >20%                    |                 2 |              0.0795  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1758 | 15-20%                  |                 2 |              0.0879  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1879 | >20%                    |                 2 |              0.09395 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2183 | 15-20%                  |                 5 |              0.04366 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2196 | 15-20%                  |                 2 |              0.1098  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2286 | >20%                    |                 2 |              0.1143  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | >20%                    |                 2 |              0.11505 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2304 | 10-15%                  |                 2 |              0.1152  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2307 | >20%                    |                 2 |              0.11535 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2343 | 5-10%                   |                10 |              0.02343 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.238  | >20%                    |                 2 |              0.119   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2522 | >20%                    |                 2 |              0.1261  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | >20%                    |                 2 |              0.1265  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2575 | >20%                    |                 5 |              0.0515  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2679 | >20%                    |                 5 |              0.05358 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2906 | 15-20%                  |                 2 |              0.1453  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2995 | 5-10%                   |                10 |              0.02995 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2999 | 15-20%                  |                 5 |              0.05998 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3012 | 10-15%                  |                 2 |              0.1506  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3034 | >20%                    |                10 |              0.03034 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | >20%                    |                 2 |              0.15295 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3161 | 15-20%                  |                 5 |              0.06322 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3183 | >20%                    |                10 |              0.03183 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3238 | >20%                    |                 2 |              0.1619  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3287 | >20%                    |                 5 |              0.06574 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3345 | <5%                     |                 2 |              0.16725 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3363 | 10-15%                  |                 2 |              0.16815 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.339  | >20%                    |                 5 |              0.0678  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3447 | 5-10%                   |                10 |              0.03447 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3458 | >20%                    |                 2 |              0.1729  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3584 | >20%                    |                 2 |              0.1792  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3622 | >20%                    |                 5 |              0.07244 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3711 | >20%                    |                 5 |              0.07422 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3769 | >20%                    |                 5 |              0.07538 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3805 | >20%                    |                 2 |              0.19025 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3816 | >20%                    |                 5 |              0.07632 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | >20%                    |                 5 |              0.07652 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3845 | >20%                    |                10 |              0.03845 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3861 | >20%                    |                 5 |              0.07722 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3923 | <5%                     |                10 |              0.03923 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.393  | >20%                    |                 5 |              0.0786  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3952 | >20%                    |                 5 |              0.07904 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.413  | 15-20%                  |                 2 |              0.2065  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4149 | >20%                    |                 2 |              0.20745 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4186 | >20%                    |                 2 |              0.2093  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4206 | >20%                    |                 5 |              0.08412 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4288 | <5%                     |                 2 |              0.2144  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4364 | >20%                    |                10 |              0.04364 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4367 | >20%                    |                 5 |              0.08734 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4451 | >20%                    |                 2 |              0.22255 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4452 |                         |                 2 |              0.2226  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4469 | 5-10%                   |                 2 |              0.22345 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4489 | >20%                    |                 5 |              0.08978 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4579 | 10-15%                  |                 2 |              0.22895 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4628 | >20%                    |                 2 |              0.2314  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4667 | <5%                     |                 2 |              0.23335 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4731 | 15-20%                  |                 5 |              0.09462 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4877 | 5-10%                   |                 2 |              0.24385 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4918 | >20%                    |                 5 |              0.09836 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4926 | >20%                    |                10 |              0.04926 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4948 | >20%                    |                 5 |              0.09896 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5069 | >20%                    |                 5 |              0.10138 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5127 | 15-20%                  |                 2 |              0.25635 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.513  | >20%                    |                 2 |              0.2565  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5208 | 10-15%                  |                 2 |              0.2604  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5221 | 5-10%                   |                 5 |              0.10442 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5262 | >20%                    |                 5 |              0.10524 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5276 | >20%                    |                10 |              0.05276 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5314 | >20%                    |                10 |              0.05314 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5318 | >20%                    |                 5 |              0.10636 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5362 | >20%                    |                 2 |              0.2681  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.545  | 10-15%                  |                 5 |              0.109   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.547  | 15-20%                  |                 2 |              0.2735  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5483 | 10-15%                  |                10 |              0.05483 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5547 | >20%                    |                 2 |              0.27735 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5564 | >20%                    |                 5 |              0.11128 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5586 | <5%                     |                 5 |              0.11172 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5863 | >20%                    |                 2 |              0.29315 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5897 | >20%                    |                 2 |              0.29485 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6067 | >20%                    |                 5 |              0.12134 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6144 | >20%                    |                 5 |              0.12288 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6209 | >20%                    |                 5 |              0.12418 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6232 | >20%                    |                 5 |              0.12464 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6496 | 15-20%                  |                10 |              0.06496 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6545 | >20%                    |                 5 |              0.1309  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.66   |                         |                 5 |              0.132   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6632 | 5-10%                   |                10 |              0.06632 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6634 | >20%                    |                10 |              0.06634 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6757 | >20%                    |                10 |              0.06757 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6803 | 15-20%                  |                10 |              0.06803 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6847 | >20%                    |                 5 |              0.13694 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6871 | >20%                    |                 5 |              0.13742 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.688  | 5-10%                   |                10 |              0.0688  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6925 | 15-20%                  |                10 |              0.06925 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6929 | >20%                    |                 2 |              0.34645 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | >20%                    |                10 |              0.06969 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.698  | >20%                    |                 2 |              0.349   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7134 | >20%                    |                 5 |              0.14268 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7222 |                         |                10 |              0.07222 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7238 | >20%                    |                 5 |              0.14476 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7466 | >20%                    |                 2 |              0.3733  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7466 | >20%                    |                 5 |              0.14932 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7567 | >20%                    |                10 |              0.07567 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.766  | 15-20%                  |                10 |              0.0766  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7679 | >20%                    |                10 |              0.07679 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7738 | >20%                    |                10 |              0.07738 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7751 | >20%                    |                10 |              0.07751 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7756 | >20%                    |                 5 |              0.15512 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7785 | >20%                    |                 2 |              0.38925 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7926 | >20%                    |                 5 |              0.15852 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8146 | >20%                    |                10 |              0.08146 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.816  | >20%                    |                10 |              0.0816  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8165 | >20%                    |                10 |              0.08165 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8301 | >20%                    |                10 |              0.08301 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8363 | 5-10%                   |                 5 |              0.16726 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8381 | >20%                    |                 5 |              0.16762 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8474 |                         |                 2 |              0.4237  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8549 | 15-20%                  |                10 |              0.08549 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8565 | >20%                    |                10 |              0.08565 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8696 | >20%                    |                 5 |              0.17392 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8823 | 10-15%                  |                 2 |              0.44115 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.927  | 5-10%                   |                 2 |              0.4635  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9424 | >20%                    |                10 |              0.09424 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9431 | >20%                    |                10 |              0.09431 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9481 | >20%                    |                 5 |              0.18962 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9582 | >20%                    |                10 |              0.09582 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9732 | >20%                    |                10 |              0.09732 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0016 | >20%                    |                10 |              0.10016 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0119 | >20%                    |                 5 |              0.20238 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0255 | >20%                    |                10 |              0.10255 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0318 | >20%                    |                10 |              0.10318 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0354 | 10-15%                  |                 2 |              0.5177  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0402 | >20%                    |                 5 |              0.20804 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.054  | >20%                    |                 2 |              0.527   |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0547 |                         |                 5 |              0.21094 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0759 | >20%                    |                 5 |              0.21518 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.113  | >20%                    |                10 |              0.1113  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.124  | 5-10%                   |                10 |              0.1124  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1307 | 15-20%                  |                10 |              0.11307 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1353 | >20%                    |                10 |              0.11353 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1916 | 5-10%                   |                 2 |              0.5958  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2002 | >20%                    |                10 |              0.12002 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.228  | 15-20%                  |                10 |              0.1228  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2925 | >20%                    |                10 |              0.12925 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3156 | >20%                    |                10 |              0.13156 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3704 | >20%                    |                 5 |              0.27408 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3792 | 15-20%                  |                 5 |              0.27584 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4225 | 10-15%                  |                10 |              0.14225 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5647 | 15-20%                  |                10 |              0.15647 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5877 | >20%                    |                 5 |              0.31754 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7457 |                         |                10 |              0.17457 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2181 | >20%                    |                10 |              0.22181 |