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

Data correct as of 2026-01-04 02:19:28.424825, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1486 | >20%                    |                 2 |              0.0743  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1508 | >20%                    |                 2 |              0.0754  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1697 | >20%                    |                 5 |              0.03394 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1709 | <5%                     |                 2 |              0.08545 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1824 | >20%                    |                 2 |              0.0912  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2235 | >20%                    |                 2 |              0.11175 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | >20%                    |                 2 |              0.11805 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2413 | >20%                    |                 2 |              0.12065 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2579 | >20%                    |                 2 |              0.12895 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2606 | >20%                    |                 2 |              0.1303  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2695 | >20%                    |                 5 |              0.0539  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | >20%                    |                 2 |              0.1361  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | >20%                    |                 2 |              0.13675 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | 15-20%                  |                 2 |              0.1395  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2857 | 5-10%                   |                10 |              0.02857 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | >20%                    |                 2 |              0.14315 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2902 | >20%                    |                10 |              0.02902 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2913 | >20%                    |                10 |              0.02913 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2943 | <5%                     |                 5 |              0.05886 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.299  | <5%                     |                 2 |              0.1495  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | >20%                    |                 2 |              0.153   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3063 | >20%                    |                 2 |              0.15315 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3149 | >20%                    |                 5 |              0.06298 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3235 | >20%                    |                 2 |              0.16175 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3311 | >20%                    |                 2 |              0.16555 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | >20%                    |                 2 |              0.16695 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3343 | 15-20%                  |                 5 |              0.06686 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3377 | 5-10%                   |                 5 |              0.06754 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3416 | >20%                    |                 5 |              0.06832 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3437 | <5%                     |                 5 |              0.06874 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3522 | >20%                    |                 5 |              0.07044 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | 5-10%                   |                 2 |              0.17615 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.361  | >20%                    |                 2 |              0.1805  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3621 | 5-10%                   |                10 |              0.03621 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3701 | 10-15%                  |                 2 |              0.18505 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3709 | >20%                    |                 2 |              0.18545 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3713 | 5-10%                   |                 2 |              0.18565 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3721 | >20%                    |                 2 |              0.18605 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3724 | >20%                    |                 5 |              0.07448 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3753 | >20%                    |                 5 |              0.07506 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.376  | <5%                     |                10 |              0.0376  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3851 | >20%                    |                 5 |              0.07702 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3868 | 10-15%                  |                 2 |              0.1934  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3879 | >20%                    |                 2 |              0.19395 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3921 | >20%                    |                 2 |              0.19605 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3935 | >20%                    |                 2 |              0.19675 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3956 | >20%                    |                10 |              0.03956 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.398  | >20%                    |                 2 |              0.199   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.402  | >20%                    |                 2 |              0.201   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4051 | >20%                    |                 5 |              0.08102 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4055 | >20%                    |                10 |              0.04055 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4062 | >20%                    |                 5 |              0.08124 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4084 | >20%                    |                 5 |              0.08168 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.412  | >20%                    |                 5 |              0.0824  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4227 | >20%                    |                 5 |              0.08454 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4229 | 10-15%                  |                 2 |              0.21145 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4236 | >20%                    |                 2 |              0.2118  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4246 | <5%                     |                 2 |              0.2123  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4291 | 15-20%                  |                10 |              0.04291 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.441  | <5%                     |                10 |              0.0441  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4524 | >20%                    |                10 |              0.04524 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4547 | >20%                    |                 2 |              0.22735 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | >20%                    |                 5 |              0.091   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4629 | <5%                     |                 2 |              0.23145 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4649 | >20%                    |                 2 |              0.23245 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4666 | >20%                    |                 5 |              0.09332 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4691 | >20%                    |                 2 |              0.23455 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | >20%                    |                 5 |              0.09402 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.471  | >20%                    |                 2 |              0.2355  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4715 | >20%                    |                 5 |              0.0943  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4744 | <5%                     |                 5 |              0.09488 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4807 | >20%                    |                 2 |              0.24035 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | >20%                    |                 5 |              0.09648 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4857 | 15-20%                  |                 2 |              0.24285 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.487  | >20%                    |                 5 |              0.0974  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4911 | >20%                    |                10 |              0.04911 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4969 | >20%                    |                 2 |              0.24845 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5036 | 15-20%                  |                 2 |              0.2518  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5144 | >20%                    |                 5 |              0.10288 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5166 | 15-20%                  |                 5 |              0.10332 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5208 | 15-20%                  |                10 |              0.05208 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5259 | 10-15%                  |                 5 |              0.10518 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5357 | >20%                    |                 5 |              0.10714 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5372 | >20%                    |                 2 |              0.2686  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5504 | 15-20%                  |                 5 |              0.11008 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5554 | 5-10%                   |                 5 |              0.11108 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5597 | >20%                    |                 5 |              0.11194 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5723 | >20%                    |                 5 |              0.11446 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5788 | 15-20%                  |                 5 |              0.11576 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5811 | >20%                    |                 5 |              0.11622 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5835 | 15-20%                  |                 5 |              0.1167  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6011 | >20%                    |                 2 |              0.30055 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6108 | >20%                    |                10 |              0.06108 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6219 | >20%                    |                10 |              0.06219 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6236 | 10-15%                  |                 2 |              0.3118  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6246 | 10-15%                  |                 5 |              0.12492 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.625  | 5-10%                   |                 5 |              0.125   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6275 | 15-20%                  |                10 |              0.06275 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6431 | >20%                    |                 2 |              0.32155 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6499 | 15-20%                  |                 5 |              0.12998 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6515 | >20%                    |                 5 |              0.1303  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6528 | >20%                    |                 2 |              0.3264  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6611 | >20%                    |                 2 |              0.33055 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6623 | 15-20%                  |                10 |              0.06623 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6664 | >20%                    |                 5 |              0.13328 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | <5%                     |                 5 |              0.13346 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6698 | >20%                    |                 5 |              0.13396 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6798 | >20%                    |                 2 |              0.3399  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6828 | 10-15%                  |                 5 |              0.13656 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.686  | 5-10%                   |                 5 |              0.1372  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6892 | >20%                    |                 5 |              0.13784 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7015 | >20%                    |                 2 |              0.35075 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7077 | 5-10%                   |                10 |              0.07077 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7184 | 15-20%                  |                 2 |              0.3592  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7204 | >20%                    |                10 |              0.07204 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7211 | >20%                    |                10 |              0.07211 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7259 | >20%                    |                10 |              0.07259 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.745  | <5%                     |                10 |              0.0745  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.749  | >20%                    |                 5 |              0.1498  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7502 | <5%                     |                 2 |              0.3751  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7587 | >20%                    |                10 |              0.07587 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7648 | >20%                    |                 2 |              0.3824  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7736 | >20%                    |                10 |              0.07736 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7778 | >20%                    |                10 |              0.07778 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7815 | 15-20%                  |                10 |              0.07815 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7822 | >20%                    |                 2 |              0.3911  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7877 | 15-20%                  |                10 |              0.07877 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7878 | >20%                    |                 5 |              0.15756 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.795  | >20%                    |                10 |              0.0795  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8027 | >20%                    |                10 |              0.08027 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8095 | <5%                     |                10 |              0.08095 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8195 | 15-20%                  |                10 |              0.08195 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8286 | 15-20%                  |                10 |              0.08286 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8334 | 15-20%                  |                 5 |              0.16668 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8417 | >20%                    |                 2 |              0.42085 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8513 | <5%                     |                10 |              0.08513 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8514 | 10-15%                  |                 5 |              0.17028 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8528 | >20%                    |                 5 |              0.17056 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8549 | >20%                    |                 2 |              0.42745 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8577 | >20%                    |                10 |              0.08577 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8578 | 15-20%                  |                10 |              0.08578 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8778 | >20%                    |                10 |              0.08778 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8914 | >20%                    |                10 |              0.08914 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9079 | >20%                    |                10 |              0.09079 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9079 | >20%                    |                10 |              0.09079 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9103 | 10-15%                  |                 5 |              0.18206 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9121 | >20%                    |                10 |              0.09121 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9132 | >20%                    |                10 |              0.09132 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9133 | >20%                    |                 5 |              0.18266 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9935 | >20%                    |                10 |              0.09935 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.994  | 15-20%                  |                10 |              0.0994  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0013 | >20%                    |                 2 |              0.50065 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0046 | 10-15%                  |                10 |              0.10046 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.025  | >20%                    |                 5 |              0.205   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0499 | >20%                    |                10 |              0.10499 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0529 | 15-20%                  |                10 |              0.10529 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0723 | >20%                    |                 5 |              0.21446 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1308 | <5%                     |                10 |              0.11308 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1416 | >20%                    |                10 |              0.11416 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1449 | >20%                    |                 5 |              0.22898 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.16   | 10-15%                  |                10 |              0.116   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1676 | >20%                    |                 2 |              0.5838  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1952 | 15-20%                  |                10 |              0.11952 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2072 | >20%                    |                 2 |              0.6036  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2351 | >20%                    |                10 |              0.12351 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2478 | >20%                    |                 5 |              0.24956 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2839 | >20%                    |                 5 |              0.25678 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3459 | >20%                    |                10 |              0.13459 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3611 | >20%                    |                10 |              0.13611 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3927 | >20%                    |                10 |              0.13927 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.4007 | >20%                    |                 5 |              0.28014 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4253 | 10-15%                  |                 5 |              0.28506 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4603 | >20%                    |                 2 |              0.73015 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4911 | >20%                    |                10 |              0.14911 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6581 | >20%                    |                10 |              0.16581 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7433 | 10-15%                  |                10 |              0.17433 |