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

Data correct as of 2025-08-04 02:21:53.042078, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1008 | 5-10%                   |                 2 |              0.0504  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1037 | >20%                    |                 2 |              0.05185 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1455 | <5%                     |                 5 |              0.0291  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1762 | >20%                    |                 2 |              0.0881  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2284 | >20%                    |                 5 |              0.04568 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.24   | 15-20%                  |                 2 |              0.12    |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2413 | 15-20%                  |                 2 |              0.12065 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | >20%                    |                 2 |              0.12865 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2589 | >20%                    |                 2 |              0.12945 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | >20%                    |                 2 |              0.13645 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2753 | 5-10%                   |                 2 |              0.13765 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | >20%                    |                 2 |              0.1407  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2833 | >20%                    |                 2 |              0.14165 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | 15-20%                  |                 2 |              0.15715 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | <5%                     |                 2 |              0.1577  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3225 | 5-10%                   |                 2 |              0.16125 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3324 | 5-10%                   |                 5 |              0.06648 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.338  | >20%                    |                 2 |              0.169   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3413 | >20%                    |                 2 |              0.17065 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3447 | 15-20%                  |                 2 |              0.17235 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3459 | 5-10%                   |                 2 |              0.17295 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3531 | 15-20%                  |                10 |              0.03531 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | <5%                     |                 2 |              0.1776  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.357  | >20%                    |                 5 |              0.0714  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.364  | >20%                    |                 5 |              0.0728  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3701 | 15-20%                  |                 2 |              0.18505 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3749 | >20%                    |                 5 |              0.07498 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3795 | >20%                    |                 5 |              0.0759  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3818 | >20%                    |                 2 |              0.1909  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3851 | >20%                    |                 2 |              0.19255 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3923 | >20%                    |                 2 |              0.19615 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | <5%                     |                 2 |              0.19715 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.405  | 10-15%                  |                 2 |              0.2025  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4075 | >20%                    |                 5 |              0.0815  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.428  | >20%                    |                 5 |              0.0856  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4396 | >20%                    |                 5 |              0.08792 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4455 | <5%                     |                 2 |              0.22275 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | 15-20%                  |                 5 |              0.0901  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4514 | >20%                    |                 2 |              0.2257  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.462  | 5-10%                   |                 2 |              0.231   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4625 | >20%                    |                 2 |              0.23125 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4658 | >20%                    |                 5 |              0.09316 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4681 | 15-20%                  |                10 |              0.04681 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4708 | >20%                    |                 5 |              0.09416 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4725 | 5-10%                   |                 2 |              0.23625 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4754 | <5%                     |                10 |              0.04754 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | >20%                    |                 5 |              0.09582 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4883 | 10-15%                  |                 2 |              0.24415 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4914 | >20%                    |                 2 |              0.2457  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4918 | >20%                    |                 2 |              0.2459  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4935 | >20%                    |                 2 |              0.24675 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4945 | 10-15%                  |                 5 |              0.0989  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4984 | >20%                    |                 5 |              0.09968 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5004 | >20%                    |                 2 |              0.2502  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5009 | >20%                    |                 2 |              0.25045 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5112 | >20%                    |                 2 |              0.2556  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | 5-10%                   |                 5 |              0.10372 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5226 | >20%                    |                 2 |              0.2613  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5295 | >20%                    |                 5 |              0.1059  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5333 | >20%                    |                 5 |              0.10666 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5378 | <5%                     |                 2 |              0.2689  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5378 | >20%                    |                 5 |              0.10756 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5398 | >20%                    |                10 |              0.05398 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5399 | >20%                    |                 5 |              0.10798 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5426 | 15-20%                  |                 2 |              0.2713  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5491 | 15-20%                  |                10 |              0.05491 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5526 | <5%                     |                10 |              0.05526 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.555  | 10-15%                  |                 5 |              0.111   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5688 | >20%                    |                 5 |              0.11376 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5702 | >20%                    |                 5 |              0.11404 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5756 | >20%                    |                 2 |              0.2878  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5792 | >20%                    |                 2 |              0.2896  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5856 | 10-15%                  |                 5 |              0.11712 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5892 | >20%                    |                 5 |              0.11784 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.598  | >20%                    |                 2 |              0.299   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6117 | 5-10%                   |                 2 |              0.30585 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6131 | 5-10%                   |                 5 |              0.12262 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6267 | >20%                    |                 2 |              0.31335 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6274 | >20%                    |                 5 |              0.12548 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6284 | <5%                     |                 5 |              0.12568 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6316 | 5-10%                   |                 5 |              0.12632 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.635  | >20%                    |                 5 |              0.127   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6407 | >20%                    |                 2 |              0.32035 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.642  | 10-15%                  |                 5 |              0.1284  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6586 | >20%                    |                 5 |              0.13172 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6645 | >20%                    |                10 |              0.06645 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6645 | 10-15%                  |                 2 |              0.33225 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6711 | 15-20%                  |                10 |              0.06711 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6724 | <5%                     |                 5 |              0.13448 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6792 | >20%                    |                 5 |              0.13584 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6879 | >20%                    |                 2 |              0.34395 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.69   | >20%                    |                 5 |              0.138   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6909 | 15-20%                  |                 2 |              0.34545 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7068 | >20%                    |                10 |              0.07068 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7206 | 5-10%                   |                 5 |              0.14412 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.721  | >20%                    |                 5 |              0.1442  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7258 | 15-20%                  |                10 |              0.07258 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7277 | 15-20%                  |                 2 |              0.36385 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7282 | >20%                    |                10 |              0.07282 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7282 | >20%                    |                 5 |              0.14564 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7451 | 15-20%                  |                10 |              0.07451 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7533 | >20%                    |                 5 |              0.15066 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7646 | 15-20%                  |                 5 |              0.15292 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7653 | >20%                    |                10 |              0.07653 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7707 | <5%                     |                10 |              0.07707 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7715 | >20%                    |                 5 |              0.1543  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7743 | >20%                    |                 5 |              0.15486 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.791  | >20%                    |                 2 |              0.3955  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8085 | >20%                    |                 5 |              0.1617  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8158 | >20%                    |                10 |              0.08158 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8223 | <5%                     |                 5 |              0.16446 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8255 | >20%                    |                 5 |              0.1651  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.829  | 15-20%                  |                10 |              0.0829  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8399 | >20%                    |                10 |              0.08399 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8518 | 5-10%                   |                10 |              0.08518 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8624 | >20%                    |                10 |              0.08624 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8826 | 15-20%                  |                10 |              0.08826 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8926 | 5-10%                   |                 5 |              0.17852 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9037 | >20%                    |                 5 |              0.18074 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9154 | <5%                     |                10 |              0.09154 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9225 | >20%                    |                10 |              0.09225 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9226 | 5-10%                   |                10 |              0.09226 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9232 | 5-10%                   |                10 |              0.09232 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9333 | 5-10%                   |                10 |              0.09333 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9384 | 15-20%                  |                10 |              0.09384 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9434 | 5-10%                   |                10 |              0.09434 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9443 | 5-10%                   |                10 |              0.09443 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9517 | >20%                    |                10 |              0.09517 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9714 | >20%                    |                 2 |              0.4857  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.975  | <5%                     |                10 |              0.0975  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9816 | 15-20%                  |                 5 |              0.19632 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9852 | <5%                     |                10 |              0.09852 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9959 | 15-20%                  |                10 |              0.09959 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0011 | 15-20%                  |                10 |              0.10011 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0293 | >20%                    |                10 |              0.10293 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0407 | >20%                    |                10 |              0.10407 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0419 | 5-10%                   |                10 |              0.10419 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0474 | 15-20%                  |                10 |              0.10474 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0478 | 15-20%                  |                10 |              0.10478 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0659 | <5%                     |                10 |              0.10659 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0907 | 5-10%                   |                10 |              0.10907 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1103 | >20%                    |                 2 |              0.55515 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1218 | >20%                    |                10 |              0.11218 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1336 | >20%                    |                10 |              0.11336 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1385 | >20%                    |                10 |              0.11385 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1448 | >20%                    |                10 |              0.11448 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1478 | >20%                    |                 5 |              0.22956 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.15   | >20%                    |                 5 |              0.23    |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1565 | >20%                    |                10 |              0.11565 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.162  | >20%                    |                10 |              0.1162  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1946 | >20%                    |                 5 |              0.23892 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2184 | >20%                    |                10 |              0.12184 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2464 | <5%                     |                 2 |              0.6232  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2783 | >20%                    |                 5 |              0.25566 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3359 | 15-20%                  |                 5 |              0.26718 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3609 | >20%                    |                 2 |              0.68045 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3825 | 5-10%                   |                10 |              0.13825 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4114 | >20%                    |                 5 |              0.28228 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4429 | >20%                    |                10 |              0.14429 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4484 | >20%                    |                10 |              0.14484 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4713 | <5%                     |                10 |              0.14713 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5004 | 5-10%                   |                 2 |              0.7502  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5485 | <5%                     |                 5 |              0.3097  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7057 | >20%                    |                10 |              0.17057 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8576 | 10-15%                  |                10 |              0.18576 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0845 | <5%                     |                10 |              0.20845 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1945 | 5-10%                   |                10 |              0.21945 |