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

Data correct as of 2026-02-07 02:27:43.906641, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1438 | >20%                    |                 2 |              0.0719  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1704 | >20%                    |                 5 |              0.03408 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.173  | 5-10%                   |                 2 |              0.0865  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1785 | >20%                    |                 2 |              0.08925 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1788 | >20%                    |                 2 |              0.0894  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1937 | >20%                    |                 5 |              0.03874 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2039 | >20%                    |                 2 |              0.10195 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2252 | >20%                    |                 2 |              0.1126  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2443 | >20%                    |                 5 |              0.04886 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2485 | 10-15%                  |                 2 |              0.12425 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2517 | >20%                    |                 2 |              0.12585 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2588 | 15-20%                  |                 2 |              0.1294  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 10-15%                  |                 2 |              0.1363  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2766 | >20%                    |                 2 |              0.1383  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | >20%                    |                 2 |              0.14015 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2853 | >20%                    |                 5 |              0.05706 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2919 | 5-10%                   |                10 |              0.02919 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | >20%                    |                 2 |              0.14895 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3044 | >20%                    |                 2 |              0.1522  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.313  | >20%                    |                 2 |              0.1565  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | >20%                    |                 2 |              0.15715 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3164 | <5%                     |                 5 |              0.06328 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3206 | 5-10%                   |                 5 |              0.06412 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3483 | >20%                    |                 5 |              0.06966 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3493 | 15-20%                  |                 2 |              0.17465 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3519 | 15-20%                  |                 2 |              0.17595 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3541 | >20%                    |                 2 |              0.17705 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3578 | <5%                     |                 2 |              0.1789  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3581 | >20%                    |                 5 |              0.07162 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3589 | 10-15%                  |                 2 |              0.17945 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3605 | >20%                    |                 2 |              0.18025 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3736 | 5-10%                   |                 2 |              0.1868  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3772 | >20%                    |                 2 |              0.1886  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3795 | 15-20%                  |                 2 |              0.18975 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.38   | >20%                    |                 5 |              0.076   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3818 | 5-10%                   |                 2 |              0.1909  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3852 | >20%                    |                 2 |              0.1926  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3909 | <5%                     |                 5 |              0.07818 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.391  | <5%                     |                 5 |              0.0782  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3912 | 5-10%                   |                10 |              0.03912 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3932 | >20%                    |                 5 |              0.07864 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3941 | >20%                    |                 2 |              0.19705 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3942 | >20%                    |                10 |              0.03942 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3981 | >20%                    |                 5 |              0.07962 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3998 | >20%                    |                 5 |              0.07996 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4018 | 10-15%                  |                 5 |              0.08036 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4106 | >20%                    |                 5 |              0.08212 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4119 | >20%                    |                 2 |              0.20595 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4155 | >20%                    |                 5 |              0.0831  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4193 | <5%                     |                 5 |              0.08386 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4209 | 15-20%                  |                 2 |              0.21045 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4231 | <5%                     |                 2 |              0.21155 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4239 | 5-10%                   |                 2 |              0.21195 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | 5-10%                   |                 2 |              0.21235 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.425  | 5-10%                   |                 2 |              0.2125  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4263 | >20%                    |                 2 |              0.21315 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4278 | >20%                    |                10 |              0.04278 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4279 | >20%                    |                 5 |              0.08558 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4323 | >20%                    |                10 |              0.04323 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4323 | 5-10%                   |                 5 |              0.08646 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4366 | <5%                     |                 2 |              0.2183  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4454 | <5%                     |                 2 |              0.2227  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4509 | 15-20%                  |                 2 |              0.22545 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | 15-20%                  |                 5 |              0.09022 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4549 | >20%                    |                 2 |              0.22745 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4583 | <5%                     |                 5 |              0.09166 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | 5-10%                   |                 2 |              0.2303  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4629 | >20%                    |                10 |              0.04629 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | >20%                    |                 2 |              0.23665 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | 5-10%                   |                 5 |              0.09468 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4781 | >20%                    |                 2 |              0.23905 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4829 | >20%                    |                 2 |              0.24145 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4889 | 15-20%                  |                 5 |              0.09778 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4903 | >20%                    |                 2 |              0.24515 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4944 | 15-20%                  |                10 |              0.04944 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | >20%                    |                 5 |              0.10032 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5067 | 15-20%                  |                10 |              0.05067 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5081 | <5%                     |                10 |              0.05081 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.509  | >20%                    |                 2 |              0.2545  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5121 | <5%                     |                10 |              0.05121 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5167 | >20%                    |                 2 |              0.25835 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5178 | >20%                    |                 5 |              0.10356 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5204 | >20%                    |                 5 |              0.10408 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5208 | >20%                    |                 5 |              0.10416 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5298 | >20%                    |                 5 |              0.10596 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5381 | <5%                     |                 5 |              0.10762 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5382 | >20%                    |                10 |              0.05382 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5406 | >20%                    |                10 |              0.05406 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5494 | 15-20%                  |                 5 |              0.10988 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5503 | 15-20%                  |                 5 |              0.11006 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5536 | >20%                    |                 5 |              0.11072 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5567 | >20%                    |                 5 |              0.11134 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5625 | >20%                    |                10 |              0.05625 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5646 | <5%                     |                 5 |              0.11292 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5691 | <5%                     |                 2 |              0.28455 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5707 | 15-20%                  |                10 |              0.05707 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5723 | >20%                    |                 5 |              0.11446 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5772 | >20%                    |                 2 |              0.2886  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5869 | 5-10%                   |                 5 |              0.11738 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5964 | >20%                    |                 5 |              0.11928 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5996 | 5-10%                   |                 2 |              0.2998  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6063 | >20%                    |                10 |              0.06063 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.611  | 10-15%                  |                 5 |              0.1222  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6175 | 10-15%                  |                10 |              0.06175 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6216 | >20%                    |                 5 |              0.12432 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6363 | 15-20%                  |                 2 |              0.31815 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6383 | 15-20%                  |                10 |              0.06383 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.648  | >20%                    |                 5 |              0.1296  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6643 | >20%                    |                 5 |              0.13286 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6708 | >20%                    |                 5 |              0.13416 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6739 | >20%                    |                10 |              0.06739 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6745 | 5-10%                   |                 5 |              0.1349  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6752 | 5-10%                   |                 5 |              0.13504 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7038 | <5%                     |                10 |              0.07038 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7196 | >20%                    |                10 |              0.07196 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7201 | 10-15%                  |                10 |              0.07201 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7257 | >20%                    |                10 |              0.07257 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.727  | >20%                    |                 5 |              0.1454  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7284 | 5-10%                   |                 2 |              0.3642  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7369 | >20%                    |                10 |              0.07369 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7569 | <5%                     |                 5 |              0.15138 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7725 | >20%                    |                 2 |              0.38625 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.773  | >20%                    |                 2 |              0.3865  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7745 | >20%                    |                 5 |              0.1549  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7755 | >20%                    |                 5 |              0.1551  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7878 | >20%                    |                10 |              0.07878 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7878 | >20%                    |                10 |              0.07878 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7912 | >20%                    |                 5 |              0.15824 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7913 | >20%                    |                 5 |              0.15826 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7945 | <5%                     |                10 |              0.07945 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.796  | 15-20%                  |                10 |              0.0796  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8037 | <5%                     |                10 |              0.08037 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8057 | <5%                     |                10 |              0.08057 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8076 | >20%                    |                10 |              0.08076 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.812  | <5%                     |                10 |              0.0812  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8212 | 5-10%                   |                10 |              0.08212 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8218 | >20%                    |                 5 |              0.16436 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8244 | <5%                     |                10 |              0.08244 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8278 | >20%                    |                 5 |              0.16556 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8288 | 5-10%                   |                10 |              0.08288 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.838  | >20%                    |                10 |              0.0838  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8487 | >20%                    |                 2 |              0.42435 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8554 | <5%                     |                10 |              0.08554 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8561 | >20%                    |                10 |              0.08561 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8605 | >20%                    |                10 |              0.08605 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8649 | >20%                    |                 2 |              0.43245 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8767 | 10-15%                  |                 2 |              0.43835 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8797 | >20%                    |                10 |              0.08797 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8821 | >20%                    |                 2 |              0.44105 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9132 | <5%                     |                10 |              0.09132 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9283 | >20%                    |                 2 |              0.46415 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9356 | >20%                    |                10 |              0.09356 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9427 | >20%                    |                 5 |              0.18854 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9662 | 5-10%                   |                 5 |              0.19324 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9776 | 15-20%                  |                10 |              0.09776 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9789 | >20%                    |                10 |              0.09789 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0037 | >20%                    |                10 |              0.10037 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0133 | >20%                    |                 5 |              0.20266 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0354 | >20%                    |                10 |              0.10354 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0376 | >20%                    |                10 |              0.10376 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0503 | 10-15%                  |                 5 |              0.21006 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0532 | >20%                    |                 2 |              0.5266  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.061  | 5-10%                   |                10 |              0.1061  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0674 |                         |                 2 |              0.5337  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0737 | 15-20%                  |                10 |              0.10737 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0984 | >20%                    |                10 |              0.10984 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1089 | >20%                    |                10 |              0.11089 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1546 | 10-15%                  |                10 |              0.11546 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1562 | >20%                    |                10 |              0.11562 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2415 | <5%                     |                10 |              0.12415 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3025 | >20%                    |                10 |              0.13025 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3132 | >20%                    |                 5 |              0.26264 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3763 | 10-15%                  |                 5 |              0.27526 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3932 | >20%                    |                10 |              0.13932 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4244 |                         |                 5 |              0.28488 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4728 | >20%                    |                 2 |              0.7364  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7125 | 15-20%                  |                10 |              0.17125 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0314 | 10-15%                  |                10 |              0.20314 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1988 |                         |                10 |              0.21988 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.432  | <5%                     |                 5 |              0.4864  |