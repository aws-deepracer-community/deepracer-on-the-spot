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

Data correct as of 2025-04-13 03:12:47.804209, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1137 | 10-15%                  |                 2 |              0.05685 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1233 | 15-20%                  |                 2 |              0.06165 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1642 | >20%                    |                 2 |              0.0821  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1731 | 10-15%                  |                 5 |              0.03462 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1935 | 15-20%                  |                 5 |              0.0387  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1955 | >20%                    |                 2 |              0.09775 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1996 | <5%                     |                 2 |              0.0998  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2144 | 5-10%                   |                 5 |              0.04288 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | 15-20%                  |                 2 |              0.1132  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | >20%                    |                 2 |              0.12155 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2504 | 15-20%                  |                10 |              0.02504 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2533 | 15-20%                  |                 2 |              0.12665 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | 15-20%                  |                 2 |              0.13575 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2754 | <5%                     |                 2 |              0.1377  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2774 | 10-15%                  |                10 |              0.02774 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | 10-15%                  |                 2 |              0.13895 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | 5-10%                   |                 2 |              0.1394  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2814 | >20%                    |                 2 |              0.1407  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | 5-10%                   |                 2 |              0.14185 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | <5%                     |                 2 |              0.1433  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.287  | 10-15%                  |                 5 |              0.0574  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2889 | 5-10%                   |                 5 |              0.05778 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2901 | >20%                    |                 2 |              0.14505 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.297  | <5%                     |                 2 |              0.1485  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | 10-15%                  |                 2 |              0.14955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | 10-15%                  |                 2 |              0.1508  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3051 | 10-15%                  |                 5 |              0.06102 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3251 | 10-15%                  |                10 |              0.03251 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3309 | <5%                     |                10 |              0.03309 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | 15-20%                  |                 2 |              0.16625 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3345 | 10-15%                  |                 2 |              0.16725 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.339  | >20%                    |                 2 |              0.1695  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3456 | >20%                    |                 5 |              0.06912 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3526 | 15-20%                  |                10 |              0.03526 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3534 | >20%                    |                 2 |              0.1767  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.354  | >20%                    |                 2 |              0.177   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3635 | >20%                    |                 5 |              0.0727  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3714 | >20%                    |                10 |              0.03714 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3744 | >20%                    |                 2 |              0.1872  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | 10-15%                  |                 5 |              0.0757  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.38   | >20%                    |                 2 |              0.19    |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3823 | >20%                    |                 5 |              0.07646 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3841 | >20%                    |                10 |              0.03841 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3848 | <5%                     |                 2 |              0.1924  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | <5%                     |                 2 |              0.19335 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3897 | >20%                    |                10 |              0.03897 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3935 | >20%                    |                 2 |              0.19675 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | <5%                     |                 2 |              0.1998  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | >20%                    |                 2 |              0.20145 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4046 | 15-20%                  |                 2 |              0.2023  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4115 | 10-15%                  |                10 |              0.04115 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4183 | >20%                    |                 5 |              0.08366 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | 15-20%                  |                 2 |              0.2116  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4275 | 10-15%                  |                 5 |              0.0855  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4305 | 10-15%                  |                 5 |              0.0861  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4333 | <5%                     |                 2 |              0.21665 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | >20%                    |                 5 |              0.08778 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4404 | <5%                     |                 2 |              0.2202  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4411 | >20%                    |                 2 |              0.22055 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.443  | >20%                    |                 2 |              0.2215  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4431 | >20%                    |                 5 |              0.08862 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.445  | 10-15%                  |                 2 |              0.2225  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4459 | 5-10%                   |                 5 |              0.08918 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | >20%                    |                 5 |              0.0898  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4543 | >20%                    |                 2 |              0.22715 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4574 | >20%                    |                 5 |              0.09148 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | >20%                    |                 5 |              0.09304 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4655 | >20%                    |                 2 |              0.23275 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4714 | <5%                     |                 5 |              0.09428 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4714 | 5-10%                   |                 2 |              0.2357  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4763 | >20%                    |                 5 |              0.09526 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.477  | <5%                     |                10 |              0.0477  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.485  | 5-10%                   |                 5 |              0.097   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.493  | >20%                    |                 2 |              0.2465  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4954 | >20%                    |                 5 |              0.09908 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | >20%                    |                 5 |              0.09938 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4971 | >20%                    |                10 |              0.04971 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5017 | <5%                     |                 5 |              0.10034 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5082 | 10-15%                  |                 5 |              0.10164 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5085 | 5-10%                   |                10 |              0.05085 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5085 | 5-10%                   |                 5 |              0.1017  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5154 | 15-20%                  |                 5 |              0.10308 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5233 | 15-20%                  |                 2 |              0.26165 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5268 | >20%                    |                 2 |              0.2634  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5305 | >20%                    |                 2 |              0.26525 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | 5-10%                   |                 5 |              0.10804 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5417 | 15-20%                  |                 2 |              0.27085 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5451 | >20%                    |                 5 |              0.10902 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5578 | >20%                    |                 2 |              0.2789  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5741 | 15-20%                  |                 5 |              0.11482 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.578  | >20%                    |                 5 |              0.1156  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5793 | 5-10%                   |                 2 |              0.28965 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5809 | >20%                    |                 2 |              0.29045 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5818 | 5-10%                   |                 5 |              0.11636 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5924 | >20%                    |                10 |              0.05924 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5944 | >20%                    |                 2 |              0.2972  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5971 | >20%                    |                 2 |              0.29855 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6001 | <5%                     |                 5 |              0.12002 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6051 | >20%                    |                 5 |              0.12102 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6058 | 15-20%                  |                 5 |              0.12116 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6164 | 10-15%                  |                 5 |              0.12328 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.624  | >20%                    |                 5 |              0.1248  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6263 | 10-15%                  |                 5 |              0.12526 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6264 | >20%                    |                 5 |              0.12528 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.628  | <5%                     |                 5 |              0.1256  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6445 | 10-15%                  |                10 |              0.06445 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6481 | >20%                    |                10 |              0.06481 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6605 | >20%                    |                 5 |              0.1321  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6613 | <5%                     |                 5 |              0.13226 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6674 | >20%                    |                 5 |              0.13348 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6755 | >20%                    |                10 |              0.06755 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6784 | >20%                    |                10 |              0.06784 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6799 | >20%                    |                 2 |              0.33995 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6805 | 10-15%                  |                 2 |              0.34025 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6833 | 5-10%                   |                 5 |              0.13666 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6842 | >20%                    |                 5 |              0.13684 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6869 | >20%                    |                 2 |              0.34345 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6893 | 10-15%                  |                10 |              0.06893 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7042 | >20%                    |                10 |              0.07042 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7081 | >20%                    |                 5 |              0.14162 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7086 | >20%                    |                10 |              0.07086 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7184 | <5%                     |                10 |              0.07184 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.719  | 10-15%                  |                 5 |              0.1438  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7506 | >20%                    |                 2 |              0.3753  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7518 | <5%                     |                10 |              0.07518 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7549 | 15-20%                  |                 5 |              0.15098 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7585 | <5%                     |                10 |              0.07585 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7619 | <5%                     |                 5 |              0.15238 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7675 | >20%                    |                 5 |              0.1535  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7677 | <5%                     |                10 |              0.07677 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7731 | 5-10%                   |                10 |              0.07731 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7736 | >20%                    |                10 |              0.07736 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7815 | 10-15%                  |                10 |              0.07815 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7891 | <5%                     |                10 |              0.07891 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7896 | >20%                    |                10 |              0.07896 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7904 | 5-10%                   |                10 |              0.07904 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8065 | <5%                     |                10 |              0.08065 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8135 | >20%                    |                 2 |              0.40675 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8147 | >20%                    |                 2 |              0.40735 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8227 | >20%                    |                 5 |              0.16454 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8253 | 10-15%                  |                10 |              0.08253 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8274 | 15-20%                  |                10 |              0.08274 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8287 | 10-15%                  |                10 |              0.08287 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8344 | 15-20%                  |                 5 |              0.16688 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8493 | <5%                     |                10 |              0.08493 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8688 | >20%                    |                10 |              0.08688 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8742 | >20%                    |                10 |              0.08742 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8749 | 15-20%                  |                10 |              0.08749 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8776 | >20%                    |                10 |              0.08776 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.878  | >20%                    |                10 |              0.0878  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8796 | <5%                     |                10 |              0.08796 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8813 | <5%                     |                10 |              0.08813 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8927 | 15-20%                  |                10 |              0.08927 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8975 | >20%                    |                10 |              0.08975 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8993 | 15-20%                  |                 5 |              0.17986 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9173 | <5%                     |                 2 |              0.45865 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.945  | 10-15%                  |                10 |              0.0945  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9888 | 5-10%                   |                10 |              0.09888 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.99   | >20%                    |                 5 |              0.198   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0281 | >20%                    |                10 |              0.10281 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0347 | >20%                    |                 5 |              0.20694 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1037 | <5%                     |                10 |              0.11037 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1123 | <5%                     |                10 |              0.11123 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1206 | 10-15%                  |                 2 |              0.5603  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1716 | 15-20%                  |                10 |              0.11716 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.172  | 15-20%                  |                10 |              0.1172  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2429 | >20%                    |                 5 |              0.24858 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2431 | <5%                     |                 5 |              0.24862 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2454 | >20%                    |                10 |              0.12454 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2568 | >20%                    |                 5 |              0.25136 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3092 | 15-20%                  |                10 |              0.13092 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3152 | >20%                    |                10 |              0.13152 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3336 | 5-10%                   |                 2 |              0.6668  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4521 | >20%                    |                 2 |              0.72605 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6052 | >20%                    |                10 |              0.16052 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6608 | >20%                    |                10 |              0.16608 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8556 | <5%                     |                10 |              0.18556 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9281 | 15-20%                  |                10 |              0.19281 |