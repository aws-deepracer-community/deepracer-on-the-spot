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

Data correct as of 2026-02-09 02:39:46.066314, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1444 | >20%                    |                 2 |              0.0722  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1679 | >20%                    |                 5 |              0.03358 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1729 | >20%                    |                 2 |              0.08645 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1743 | >20%                    |                 2 |              0.08715 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1795 | 5-10%                   |                 2 |              0.08975 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2    | >20%                    |                 5 |              0.04    |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2045 | >20%                    |                 2 |              0.10225 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2322 | >20%                    |                 5 |              0.04644 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2522 | 10-15%                  |                 2 |              0.1261  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | 15-20%                  |                 2 |              0.12865 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | 10-15%                  |                 2 |              0.1339  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2711 | >20%                    |                 2 |              0.13555 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | >20%                    |                 2 |              0.13855 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | >20%                    |                 2 |              0.13995 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2813 | 5-10%                   |                10 |              0.02813 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2849 | <5%                     |                 5 |              0.05698 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2851 | >20%                    |                 5 |              0.05702 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2853 | >20%                    |                 2 |              0.14265 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | >20%                    |                 2 |              0.14945 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | >20%                    |                 2 |              0.1571  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | >20%                    |                 2 |              0.15795 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3315 | >20%                    |                 2 |              0.16575 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3332 | >20%                    |                 5 |              0.06664 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3428 | 5-10%                   |                 5 |              0.06856 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3472 | >20%                    |                 2 |              0.1736  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3495 | 15-20%                  |                 2 |              0.17475 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.3524 | <5%                     |                 5 |              0.07048 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3569 | 15-20%                  |                 2 |              0.17845 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3595 | <5%                     |                 2 |              0.17975 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3703 | >20%                    |                 2 |              0.18515 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3715 | 10-15%                  |                 2 |              0.18575 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3721 | 5-10%                   |                 2 |              0.18605 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3733 | >20%                    |                 5 |              0.07466 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3759 | 5-10%                   |                 2 |              0.18795 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | >20%                    |                 5 |              0.07598 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3834 | >20%                    |                 2 |              0.1917  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3842 | >20%                    |                 5 |              0.07684 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3895 | <5%                     |                 5 |              0.0779  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3917 | >20%                    |                 2 |              0.19585 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | >20%                    |                 5 |              0.07834 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3925 | 5-10%                   |                10 |              0.03925 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.397  | >20%                    |                10 |              0.0397  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4003 | 15-20%                  |                 2 |              0.20015 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4011 | <5%                     |                 5 |              0.08022 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4012 | 10-15%                  |                 5 |              0.08024 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4016 | <5%                     |                 2 |              0.2008  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4019 | >20%                    |                 5 |              0.08038 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4066 | >20%                    |                 5 |              0.08132 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4078 | <5%                     |                 5 |              0.08156 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4123 | >20%                    |                10 |              0.04123 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4164 | >20%                    |                 2 |              0.2082  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4188 | >20%                    |                 5 |              0.08376 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | >20%                    |                 5 |              0.08436 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4253 | 5-10%                   |                 2 |              0.21265 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4267 | 5-10%                   |                 2 |              0.21335 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4284 | >20%                    |                 2 |              0.2142  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4297 | 5-10%                   |                 2 |              0.21485 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4306 | >20%                    |                10 |              0.04306 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4327 | >20%                    |                 2 |              0.21635 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4349 | 15-20%                  |                 2 |              0.21745 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4365 | <5%                     |                 2 |              0.21825 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.437  | <5%                     |                 2 |              0.2185  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4444 | >20%                    |                10 |              0.04444 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4463 | 15-20%                  |                 5 |              0.08926 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4466 | >20%                    |                 2 |              0.2233  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.458  | 15-20%                  |                 2 |              0.229   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4589 | 5-10%                   |                 2 |              0.22945 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4635 | >20%                    |                 2 |              0.23175 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4664 | 5-10%                   |                 5 |              0.09328 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4694 | >20%                    |                 2 |              0.2347  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | 5-10%                   |                 5 |              0.0947  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4845 | >20%                    |                 2 |              0.24225 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4869 | 15-20%                  |                 5 |              0.09738 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4905 | >20%                    |                 5 |              0.0981  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4961 | >20%                    |                 2 |              0.24805 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.503  | <5%                     |                10 |              0.0503  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5045 | >20%                    |                 2 |              0.25225 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.51   | <5%                     |                 2 |              0.255   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5206 | >20%                    |                 5 |              0.10412 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.53   | <5%                     |                 5 |              0.106   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5302 | <5%                     |                 5 |              0.10604 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5311 | 15-20%                  |                10 |              0.05311 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5328 | >20%                    |                 5 |              0.10656 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5329 | >20%                    |                 5 |              0.10658 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.533  | 15-20%                  |                10 |              0.0533  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5353 | 15-20%                  |                 5 |              0.10706 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5415 | >20%                    |                10 |              0.05415 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5432 | <5%                     |                10 |              0.05432 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5513 | >20%                    |                10 |              0.05513 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5525 | >20%                    |                10 |              0.05525 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5542 | >20%                    |                 5 |              0.11084 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5549 | >20%                    |                 5 |              0.11098 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5591 | >20%                    |                 5 |              0.11182 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5594 | 15-20%                  |                 5 |              0.11188 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5743 | 15-20%                  |                10 |              0.05743 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5767 | >20%                    |                 5 |              0.11534 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5817 | >20%                    |                 2 |              0.29085 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5903 | 5-10%                   |                 5 |              0.11806 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6013 | 5-10%                   |                 2 |              0.30065 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6014 | >20%                    |                 5 |              0.12028 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6033 | 10-15%                  |                10 |              0.06033 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6052 | >20%                    |                 5 |              0.12104 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6053 | >20%                    |                10 |              0.06053 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6079 | 10-15%                  |                 5 |              0.12158 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6168 | 15-20%                  |                 2 |              0.3084  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | 15-20%                  |                10 |              0.06314 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6442 | >20%                    |                10 |              0.06442 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6614 | >20%                    |                 5 |              0.13228 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6646 | >20%                    |                 5 |              0.13292 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | 5-10%                   |                 5 |              0.13346 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.669  | >20%                    |                 5 |              0.1338  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6781 | 5-10%                   |                 5 |              0.13562 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.708  | <5%                     |                10 |              0.0708  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7118 | >20%                    |                 5 |              0.14236 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7173 | >20%                    |                10 |              0.07173 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7292 | >20%                    |                10 |              0.07292 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7317 | 5-10%                   |                 2 |              0.36585 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7318 | <5%                     |                10 |              0.07318 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7455 | >20%                    |                10 |              0.07455 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7541 | >20%                    |                 2 |              0.37705 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7579 | >20%                    |                 2 |              0.37895 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7594 | <5%                     |                10 |              0.07594 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7655 | >20%                    |                10 |              0.07655 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7676 | >20%                    |                10 |              0.07676 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.771  | 10-15%                  |                10 |              0.0771  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7779 | 15-20%                  |                10 |              0.07779 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.779  | >20%                    |                 5 |              0.1558  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7857 | >20%                    |                 5 |              0.15714 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8025 | >20%                    |                 5 |              0.1605  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.804  | 5-10%                   |                10 |              0.0804  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8049 | >20%                    |                 5 |              0.16098 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8066 | <5%                     |                 5 |              0.16132 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8074 | <5%                     |                10 |              0.08074 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8137 | <5%                     |                10 |              0.08137 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8204 | 5-10%                   |                10 |              0.08204 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8237 | >20%                    |                 5 |              0.16474 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.828  | >20%                    |                 5 |              0.1656  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.831  | <5%                     |                10 |              0.0831  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8366 | >20%                    |                10 |              0.08366 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8393 | >20%                    |                10 |              0.08393 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8546 | >20%                    |                10 |              0.08546 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.859  | >20%                    |                10 |              0.0859  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8632 | 10-15%                  |                 2 |              0.4316  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.871  | >20%                    |                 2 |              0.4355  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8795 | >20%                    |                10 |              0.08795 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8809 | >20%                    |                 2 |              0.44045 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8863 | >20%                    |                 2 |              0.44315 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9078 | <5%                     |                10 |              0.09078 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9248 | <5%                     |                10 |              0.09248 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9261 | >20%                    |                 5 |              0.18522 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9478 | >20%                    |                 2 |              0.4739  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9568 | >20%                    |                10 |              0.09568 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.964  | 5-10%                   |                 5 |              0.1928  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9772 | 15-20%                  |                10 |              0.09772 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9794 | >20%                    |                10 |              0.09794 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0114 | >20%                    |                10 |              0.10114 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0146 |                         |                 2 |              0.5073  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0406 | >20%                    |                10 |              0.10406 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0468 | 10-15%                  |                 5 |              0.20936 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0523 | >20%                    |                 5 |              0.21046 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0542 | 15-20%                  |                10 |              0.10542 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0728 | >20%                    |                10 |              0.10728 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0729 | 10-15%                  |                10 |              0.10729 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0779 | >20%                    |                 2 |              0.53895 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0828 | 5-10%                   |                10 |              0.10828 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1239 | >20%                    |                10 |              0.11239 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1382 | >20%                    |                10 |              0.11382 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.148  | >20%                    |                10 |              0.1148  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1728 | >20%                    |                10 |              0.11728 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2117 | <5%                     |                10 |              0.12117 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2891 | >20%                    |                 5 |              0.25782 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3247 | >20%                    |                10 |              0.13247 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.363  | 10-15%                  |                 5 |              0.2726  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3727 |                         |                 5 |              0.27454 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.411  | >20%                    |                10 |              0.1411  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.44   | >20%                    |                 2 |              0.72    |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7567 | 15-20%                  |                10 |              0.17567 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0526 | 10-15%                  |                10 |              0.20526 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0658 |                         |                10 |              0.20658 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4324 | <5%                     |                 5 |              0.48648 |