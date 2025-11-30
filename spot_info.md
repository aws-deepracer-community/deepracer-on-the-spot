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

Data correct as of 2025-11-30 02:05:08.530628, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1386 | >20%                    |                 2 |              0.0693  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1421 | 15-20%                  |                 2 |              0.07105 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1425 | >20%                    |                 2 |              0.07125 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1754 | <5%                     |                 2 |              0.0877  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.203  | <5%                     |                 2 |              0.1015  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2076 | >20%                    |                 2 |              0.1038  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2149 | 10-15%                  |                 2 |              0.10745 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2242 | >20%                    |                 2 |              0.1121  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | >20%                    |                 2 |              0.11845 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | >20%                    |                 2 |              0.1241  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2626 | 5-10%                   |                 5 |              0.05252 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2627 | >20%                    |                 5 |              0.05254 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2644 | >20%                    |                 2 |              0.1322  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2736 | >20%                    |                 2 |              0.1368  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.274  | 10-15%                  |                 5 |              0.0548  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2754 | >20%                    |                 5 |              0.05508 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | <5%                     |                 2 |              0.1394  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | 5-10%                   |                 2 |              0.14    |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2828 | 15-20%                  |                 2 |              0.1414  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2845 | 10-15%                  |                 2 |              0.14225 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2861 | >20%                    |                 5 |              0.05722 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | >20%                    |                 2 |              0.1442  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.301  | 10-15%                  |                10 |              0.0301  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3206 | >20%                    |                 5 |              0.06412 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3246 | 10-15%                  |                10 |              0.03246 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3288 | >20%                    |                 2 |              0.1644  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | 5-10%                   |                 2 |              0.1667  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3341 | <5%                     |                 5 |              0.06682 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3436 | 5-10%                   |                10 |              0.03436 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3495 | 10-15%                  |                 2 |              0.17475 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3558 | >20%                    |                 2 |              0.1779  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | >20%                    |                 5 |              0.07268 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3665 | >20%                    |                10 |              0.03665 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3676 | <5%                     |                 2 |              0.1838  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3679 | >20%                    |                 5 |              0.07358 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3679 | >20%                    |                 2 |              0.18395 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3705 | >20%                    |                 2 |              0.18525 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3757 | 15-20%                  |                 2 |              0.18785 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3813 | >20%                    |                 2 |              0.19065 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3865 | >20%                    |                 2 |              0.19325 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3871 | 10-15%                  |                 2 |              0.19355 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | 15-20%                  |                 2 |              0.19445 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3913 | 15-20%                  |                 5 |              0.07826 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3949 | >20%                    |                 5 |              0.07898 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.395  | 15-20%                  |                 5 |              0.079   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3952 | >20%                    |                 5 |              0.07904 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3988 | >20%                    |                 2 |              0.1994  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3994 | >20%                    |                 2 |              0.1997  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4004 | >20%                    |                 2 |              0.2002  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4017 | <5%                     |                 2 |              0.20085 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4047 | >20%                    |                 2 |              0.20235 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4115 | 10-15%                  |                 5 |              0.0823  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4138 | >20%                    |                10 |              0.04138 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4244 | >20%                    |                 5 |              0.08488 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4255 | 15-20%                  |                 2 |              0.21275 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4257 | 10-15%                  |                10 |              0.04257 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4322 | >20%                    |                 2 |              0.2161  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4343 | 5-10%                   |                 2 |              0.21715 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4482 | >20%                    |                 2 |              0.2241  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4524 | 10-15%                  |                 5 |              0.09048 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4529 | >20%                    |                10 |              0.04529 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4572 | >20%                    |                 5 |              0.09144 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4587 | 15-20%                  |                 5 |              0.09174 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.459  | <5%                     |                 2 |              0.2295  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4591 | >20%                    |                 2 |              0.22955 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.46   | >20%                    |                10 |              0.046   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4745 | 15-20%                  |                10 |              0.04745 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4752 | >20%                    |                 5 |              0.09504 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4775 | >20%                    |                 5 |              0.0955  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4838 | 10-15%                  |                 2 |              0.2419  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4859 | 10-15%                  |                 2 |              0.24295 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.488  | 10-15%                  |                 5 |              0.0976  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4929 | 15-20%                  |                 5 |              0.09858 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4947 | >20%                    |                 2 |              0.24735 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4952 | >20%                    |                 2 |              0.2476  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4955 | >20%                    |                 5 |              0.0991  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4963 | 15-20%                  |                 5 |              0.09926 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5    | >20%                    |                 5 |              0.1     |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | >20%                    |                 5 |              0.10044 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5111 | >20%                    |                 5 |              0.10222 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5229 | 10-15%                  |                 2 |              0.26145 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5408 | 10-15%                  |                 5 |              0.10816 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5425 | >20%                    |                 5 |              0.1085  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5465 | <5%                     |                10 |              0.05465 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5529 | >20%                    |                 5 |              0.11058 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5567 | 15-20%                  |                 5 |              0.11134 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5604 | >20%                    |                 5 |              0.11208 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5609 | 5-10%                   |                10 |              0.05609 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5633 | >20%                    |                 5 |              0.11266 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5704 | 10-15%                  |                 5 |              0.11408 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5785 | >20%                    |                 2 |              0.28925 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5819 | 15-20%                  |                10 |              0.05819 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5826 | 15-20%                  |                 5 |              0.11652 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5827 | 15-20%                  |                 5 |              0.11654 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5897 | >20%                    |                 2 |              0.29485 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5922 | <5%                     |                10 |              0.05922 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6065 | >20%                    |                 5 |              0.1213  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6082 | 15-20%                  |                 5 |              0.12164 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6085 | >20%                    |                 2 |              0.30425 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6111 | 10-15%                  |                 5 |              0.12222 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6119 | >20%                    |                 2 |              0.30595 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6139 | >20%                    |                 5 |              0.12278 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6191 | >20%                    |                10 |              0.06191 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6325 | 10-15%                  |                 5 |              0.1265  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6355 | >20%                    |                 5 |              0.1271  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.636  | >20%                    |                 5 |              0.1272  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6416 | >20%                    |                10 |              0.06416 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6484 | 10-15%                  |                 5 |              0.12968 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6491 | 5-10%                   |                 5 |              0.12982 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6617 | >20%                    |                 2 |              0.33085 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6677 | >20%                    |                10 |              0.06677 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6709 | 5-10%                   |                 2 |              0.33545 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6772 | 5-10%                   |                10 |              0.06772 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6819 | >20%                    |                10 |              0.06819 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6826 | >20%                    |                 5 |              0.13652 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6869 | 15-20%                  |                10 |              0.06869 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.699  | >20%                    |                10 |              0.0699  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7034 | >20%                    |                10 |              0.07034 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7127 | >20%                    |                 2 |              0.35635 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7139 | <5%                     |                 5 |              0.14278 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.72   | >20%                    |                 5 |              0.144   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7277 | >20%                    |                10 |              0.07277 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7355 | <5%                     |                10 |              0.07355 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7388 | 10-15%                  |                10 |              0.07388 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7427 | >20%                    |                10 |              0.07427 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7482 | 15-20%                  |                10 |              0.07482 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7514 | >20%                    |                10 |              0.07514 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7568 | >20%                    |                 2 |              0.3784  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7731 | >20%                    |                10 |              0.07731 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7747 | >20%                    |                 5 |              0.15494 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7795 | 10-15%                  |                10 |              0.07795 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7814 | >20%                    |                10 |              0.07814 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7993 | >20%                    |                10 |              0.07993 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.816  | >20%                    |                10 |              0.0816  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8182 | >20%                    |                 5 |              0.16364 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8218 | 15-20%                  |                 5 |              0.16436 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8452 | 15-20%                  |                10 |              0.08452 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8485 | >20%                    |                10 |              0.08485 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8512 | >20%                    |                10 |              0.08512 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8557 | 10-15%                  |                10 |              0.08557 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8585 | >20%                    |                 5 |              0.1717  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8641 | >20%                    |                 5 |              0.17282 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8753 | >20%                    |                 2 |              0.43765 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8855 | 10-15%                  |                 2 |              0.44275 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8936 | >20%                    |                10 |              0.08936 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9007 | 10-15%                  |                10 |              0.09007 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9038 | >20%                    |                 5 |              0.18076 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9156 | >20%                    |                 5 |              0.18312 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.925  | >20%                    |                10 |              0.0925  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9258 | 5-10%                   |                10 |              0.09258 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9566 | 15-20%                  |                10 |              0.09566 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9649 | >20%                    |                 5 |              0.19298 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9659 | <5%                     |                10 |              0.09659 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9693 | >20%                    |                 2 |              0.48465 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0031 | >20%                    |                10 |              0.10031 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0036 | >20%                    |                10 |              0.10036 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0215 | >20%                    |                10 |              0.10215 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0231 | 10-15%                  |                10 |              0.10231 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0416 | >20%                    |                 2 |              0.5208  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.047  | 15-20%                  |                10 |              0.1047  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0853 | >20%                    |                10 |              0.10853 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0936 | <5%                     |                 2 |              0.5468  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1194 | 15-20%                  |                10 |              0.11194 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1225 | <5%                     |                 5 |              0.2245  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1777 | >20%                    |                10 |              0.11777 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1958 | >20%                    |                10 |              0.11958 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2418 | >20%                    |                 5 |              0.24836 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3219 | >20%                    |                 2 |              0.66095 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3296 | >20%                    |                 2 |              0.6648  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3364 | >20%                    |                10 |              0.13364 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3605 | 10-15%                  |                10 |              0.13605 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4275 | >20%                    |                 5 |              0.2855  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5659 | >20%                    |                10 |              0.15659 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5753 | 5-10%                   |                 5 |              0.31506 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5825 | >20%                    |                10 |              0.15825 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9465 | 15-20%                  |                10 |              0.19465 |