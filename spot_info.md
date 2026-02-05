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

Data correct as of 2026-02-05 02:31:49.301204, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1365 | >20%                    |                 2 |              0.06825 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.171  | 5-10%                   |                 2 |              0.0855  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1747 | >20%                    |                 2 |              0.08735 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1868 | >20%                    |                 2 |              0.0934  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1902 | >20%                    |                 5 |              0.03804 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1997 | >20%                    |                 5 |              0.03994 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2064 | >20%                    |                 2 |              0.1032  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2328 | >20%                    |                 2 |              0.1164  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | 10-15%                  |                 2 |              0.1245  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2517 | >20%                    |                 5 |              0.05034 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | >20%                    |                 2 |              0.1264  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2636 | 15-20%                  |                 2 |              0.1318  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2768 | 10-15%                  |                 2 |              0.1384  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2795 | >20%                    |                 2 |              0.13975 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2877 | 5-10%                   |                10 |              0.02877 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2909 | >20%                    |                 2 |              0.14545 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | >20%                    |                 2 |              0.1492  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3079 | >20%                    |                 5 |              0.06158 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | >20%                    |                 2 |              0.1572  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | >20%                    |                 2 |              0.1573  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3249 | 10-15%                  |                 2 |              0.16245 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3269 | 5-10%                   |                 5 |              0.06538 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.335  | 15-20%                  |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.337  | >20%                    |                 5 |              0.0674  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.338  | <5%                     |                 5 |              0.0676  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3519 | 15-20%                  |                 2 |              0.17595 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3581 | <5%                     |                 2 |              0.17905 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3605 | 15-20%                  |                 2 |              0.18025 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3684 | >20%                    |                 5 |              0.07368 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3686 | >20%                    |                 2 |              0.1843  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3757 | >20%                    |                 2 |              0.18785 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3787 | >20%                    |                 5 |              0.07574 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | >20%                    |                 2 |              0.1894  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3805 | >20%                    |                 5 |              0.0761  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | >20%                    |                 5 |              0.0762  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3817 | 5-10%                   |                 2 |              0.19085 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.384  | 5-10%                   |                 2 |              0.192   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3865 | 5-10%                   |                10 |              0.03865 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3942 | >20%                    |                 2 |              0.1971  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3946 | >20%                    |                 2 |              0.1973  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3951 | <5%                     |                 5 |              0.07902 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3988 | 10-15%                  |                 5 |              0.07976 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4078 | >20%                    |                 5 |              0.08156 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4081 | >20%                    |                 5 |              0.08162 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4101 | >20%                    |                10 |              0.04101 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | >20%                    |                 2 |              0.20795 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | 15-20%                  |                 2 |              0.20985 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4198 | 5-10%                   |                 2 |              0.2099  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4203 | >20%                    |                 5 |              0.08406 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4207 | >20%                    |                 2 |              0.21035 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4213 | 5-10%                   |                 2 |              0.21065 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4254 | 5-10%                   |                 2 |              0.2127  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4276 | >20%                    |                 5 |              0.08552 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4303 | 5-10%                   |                 5 |              0.08606 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4323 | >20%                    |                 2 |              0.21615 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4337 | 15-20%                  |                 2 |              0.21685 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4355 | <5%                     |                 2 |              0.21775 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4364 | >20%                    |                10 |              0.04364 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4392 | <5%                     |                 2 |              0.2196  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4428 | <5%                     |                 5 |              0.08856 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.445  | >20%                    |                10 |              0.0445  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4474 | <5%                     |                 2 |              0.2237  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4475 | >20%                    |                 5 |              0.0895  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4508 | <5%                     |                 5 |              0.09016 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4514 | <5%                     |                10 |              0.04514 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4532 | >20%                    |                 2 |              0.2266  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | 15-20%                  |                 5 |              0.09202 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | 5-10%                   |                 5 |              0.09448 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4735 | >20%                    |                 2 |              0.23675 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4746 | 5-10%                   |                 2 |              0.2373  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4786 | >20%                    |                 2 |              0.2393  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4803 | 15-20%                  |                10 |              0.04803 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4811 | >20%                    |                10 |              0.04811 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4818 | <5%                     |                10 |              0.04818 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4823 | >20%                    |                10 |              0.04823 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4843 | 15-20%                  |                 5 |              0.09686 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4894 | >20%                    |                 2 |              0.2447  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.493  | >20%                    |                 2 |              0.2465  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4971 | <5%                     |                 5 |              0.09942 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5047 | >20%                    |                 5 |              0.10094 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5062 | >20%                    |                 5 |              0.10124 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5137 | >20%                    |                 5 |              0.10274 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.515  | >20%                    |                 2 |              0.2575  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5229 | >20%                    |                 2 |              0.26145 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5286 | >20%                    |                10 |              0.05286 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.53   | >20%                    |                10 |              0.053   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5301 | >20%                    |                 5 |              0.10602 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5336 | >20%                    |                 5 |              0.10672 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.54   | <5%                     |                 5 |              0.108   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5528 | >20%                    |                 5 |              0.11056 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5562 | 15-20%                  |                 5 |              0.11124 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5673 | >20%                    |                 5 |              0.11346 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5706 | >20%                    |                 5 |              0.11412 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5837 | >20%                    |                 2 |              0.29185 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5857 | <5%                     |                 5 |              0.11714 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5869 | 15-20%                  |                 5 |              0.11738 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5895 | 5-10%                   |                 5 |              0.1179  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5939 | 15-20%                  |                10 |              0.05939 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6042 | <5%                     |                 2 |              0.3021  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.605  | 5-10%                   |                 2 |              0.3025  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.612  | >20%                    |                 5 |              0.1224  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6191 | >20%                    |                10 |              0.06191 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6224 | 10-15%                  |                 5 |              0.12448 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6275 | 10-15%                  |                10 |              0.06275 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6469 | >20%                    |                 5 |              0.12938 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6516 | 15-20%                  |                 2 |              0.3258  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6531 | 15-20%                  |                10 |              0.06531 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6546 | >20%                    |                 5 |              0.13092 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.665  | >20%                    |                 5 |              0.133   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6697 | 5-10%                   |                 5 |              0.13394 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6721 | 5-10%                   |                 5 |              0.13442 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6796 | >20%                    |                 5 |              0.13592 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6934 | >20%                    |                10 |              0.06934 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7009 | <5%                     |                10 |              0.07009 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7018 | >20%                    |                10 |              0.07018 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7156 | >20%                    |                10 |              0.07156 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7171 | 10-15%                  |                10 |              0.07171 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7232 | <5%                     |                 5 |              0.14464 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7266 | >20%                    |                 5 |              0.14532 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7338 | >20%                    |                10 |              0.07338 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.742  | >20%                    |                10 |              0.0742  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.755  | 5-10%                   |                 2 |              0.3775  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7634 | <5%                     |                10 |              0.07634 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.777  | >20%                    |                 5 |              0.1554  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7787 | >20%                    |                 5 |              0.15574 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7805 | >20%                    |                 2 |              0.39025 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7854 | >20%                    |                 5 |              0.15708 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7877 | >20%                    |                10 |              0.07877 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7883 | >20%                    |                 5 |              0.15766 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.797  | 5-10%                   |                10 |              0.0797  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7975 | <5%                     |                10 |              0.07975 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | <5%                     |                10 |              0.07977 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8013 | <5%                     |                10 |              0.08013 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8103 | 15-20%                  |                10 |              0.08103 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.813  | >20%                    |                 2 |              0.4065  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8276 | <5%                     |                10 |              0.08276 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8298 | >20%                    |                 5 |              0.16596 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8309 | 5-10%                   |                10 |              0.08309 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8385 | >20%                    |                10 |              0.08385 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8444 | >20%                    |                10 |              0.08444 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8458 | <5%                     |                10 |              0.08458 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8602 | >20%                    |                 5 |              0.17204 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8617 | >20%                    |                 2 |              0.43085 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8643 | >20%                    |                10 |              0.08643 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8652 | >20%                    |                 2 |              0.4326  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8733 | >20%                    |                10 |              0.08733 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8794 | 10-15%                  |                 2 |              0.4397  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8849 | >20%                    |                 2 |              0.44245 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9013 | >20%                    |                10 |              0.09013 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9083 | >20%                    |                10 |              0.09083 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9109 | <5%                     |                10 |              0.09109 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9509 | >20%                    |                 5 |              0.19018 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9598 | >20%                    |                 5 |              0.19196 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9709 | >20%                    |                10 |              0.09709 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9887 | 5-10%                   |                 5 |              0.19774 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9936 | >20%                    |                 2 |              0.4968  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9964 | 15-20%                  |                10 |              0.09964 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0221 | >20%                    |                10 |              0.10221 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0266 | >20%                    |                 2 |              0.5133  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0287 | >20%                    |                10 |              0.10287 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0421 | >20%                    |                10 |              0.10421 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.047  | 10-15%                  |                 5 |              0.2094  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0575 | 5-10%                   |                10 |              0.10575 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.081  | 15-20%                  |                10 |              0.1081  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1026 | >20%                    |                10 |              0.11026 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1094 | >20%                    |                10 |              0.11094 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1308 | >20%                    |                10 |              0.11308 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1673 | >20%                    |                10 |              0.11673 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2189 | 10-15%                  |                10 |              0.12189 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2798 | <5%                     |                10 |              0.12798 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2873 | >20%                    |                10 |              0.12873 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2911 | >20%                    |                 5 |              0.25822 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3804 | 10-15%                  |                 5 |              0.27608 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3962 | >20%                    |                10 |              0.13962 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4901 | >20%                    |                 2 |              0.74505 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7451 | 15-20%                  |                10 |              0.17451 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8975 | 10-15%                  |                10 |              0.18975 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.436  | <5%                     |                 5 |              0.4872  |