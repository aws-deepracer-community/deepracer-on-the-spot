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

Data correct as of 2026-02-15 02:42:24.735339, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1505 | >20%                    |                 2 |              0.07525 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1619 | >20%                    |                 2 |              0.08095 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2024 | >20%                    |                 2 |              0.1012  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2071 | >20%                    |                 5 |              0.04142 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2111 | <5%                     |                 5 |              0.04222 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2165 | 5-10%                   |                 2 |              0.10825 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2355 | >20%                    |                 2 |              0.11775 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2508 | >20%                    |                 5 |              0.05016 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | >20%                    |                 2 |              0.12715 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.256  | >20%                    |                 5 |              0.0512  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.258  | 15-20%                  |                 2 |              0.129   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | 10-15%                  |                 2 |              0.1295  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2591 | >20%                    |                 2 |              0.12955 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | 10-15%                  |                 2 |              0.13445 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2715 | 5-10%                   |                10 |              0.02715 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2721 | >20%                    |                 2 |              0.13605 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2897 | >20%                    |                 2 |              0.14485 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2901 | >20%                    |                 2 |              0.14505 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3011 | >20%                    |                 2 |              0.15055 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | >20%                    |                 2 |              0.15525 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3174 | >20%                    |                 2 |              0.1587  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | >20%                    |                 2 |              0.1598  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3317 | >20%                    |                 5 |              0.06634 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3429 | <5%                     |                 5 |              0.06858 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3451 | 5-10%                   |                 2 |              0.17255 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3464 | >20%                    |                 5 |              0.06928 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3542 | >20%                    |                 5 |              0.07084 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3559 | <5%                     |                 2 |              0.17795 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3617 | 15-20%                  |                 2 |              0.18085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3663 | >20%                    |                 5 |              0.07326 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3673 | 5-10%                   |                10 |              0.03673 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3694 | <5%                     |                 2 |              0.1847  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3721 | >20%                    |                10 |              0.03721 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3726 | >20%                    |                 5 |              0.07452 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3745 | >20%                    |                 2 |              0.18725 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3759 | 5-10%                   |                 2 |              0.18795 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3761 | 15-20%                  |                 2 |              0.18805 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3842 | >20%                    |                 5 |              0.07684 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3862 | >20%                    |                 2 |              0.1931  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3871 | <5%                     |                 5 |              0.07742 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3898 | <5%                     |                 5 |              0.07796 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3913 | >20%                    |                10 |              0.03913 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3993 | >20%                    |                 5 |              0.07986 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4005 | 10-15%                  |                 2 |              0.20025 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4074 | >20%                    |                 2 |              0.2037  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4095 | 5-10%                   |                 5 |              0.0819  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.411  | 10-15%                  |                 5 |              0.0822  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4113 | >20%                    |                 5 |              0.08226 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4131 | >20%                    |                 2 |              0.20655 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4156 | >20%                    |                 5 |              0.08312 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4251 | 5-10%                   |                 2 |              0.21255 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4273 | >20%                    |                 5 |              0.08546 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4275 | >20%                    |                 5 |              0.0855  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4286 | >20%                    |                 2 |              0.2143  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4323 | <5%                     |                 2 |              0.21615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4332 | 15-20%                  |                 5 |              0.08664 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4346 | >20%                    |                 2 |              0.2173  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4361 | <5%                     |                 2 |              0.21805 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4362 | >20%                    |                 2 |              0.2181  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4379 | >20%                    |                10 |              0.04379 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4385 | 15-20%                  |                 2 |              0.21925 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4395 | >20%                    |                 5 |              0.0879  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4413 | >20%                    |                 2 |              0.22065 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4414 | 5-10%                   |                 2 |              0.2207  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4419 | 15-20%                  |                 2 |              0.22095 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4529 | 5-10%                   |                 2 |              0.22645 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4602 | >20%                    |                 2 |              0.2301  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.461  | >20%                    |                10 |              0.0461  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4639 | 5-10%                   |                 2 |              0.23195 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.473  | 15-20%                  |                 2 |              0.2365  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | 5-10%                   |                 5 |              0.09488 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4786 | >20%                    |                 2 |              0.2393  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4807 | >20%                    |                10 |              0.04807 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4825 | >20%                    |                 2 |              0.24125 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4899 | 15-20%                  |                 5 |              0.09798 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4941 | >20%                    |                 2 |              0.24705 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5039 | >20%                    |                10 |              0.05039 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5041 | <5%                     |                 5 |              0.10082 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5048 | >20%                    |                 2 |              0.2524  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5075 | >20%                    |                 2 |              0.25375 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5157 | >20%                    |                 5 |              0.10314 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5289 | <5%                     |                 5 |              0.10578 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5335 | 15-20%                  |                10 |              0.05335 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.535  | <5%                     |                10 |              0.0535  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5354 | >20%                    |                 5 |              0.10708 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5363 | 15-20%                  |                 5 |              0.10726 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5455 | >20%                    |                 5 |              0.1091  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5518 | >20%                    |                 5 |              0.11036 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5565 | >20%                    |                10 |              0.05565 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.563  | <5%                     |                10 |              0.0563  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5664 | <5%                     |                 2 |              0.2832  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5733 | >20%                    |                10 |              0.05733 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5815 | >20%                    |                 5 |              0.1163  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5834 | 15-20%                  |                10 |              0.05834 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5939 | 5-10%                   |                 2 |              0.29695 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5951 | 5-10%                   |                 5 |              0.11902 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5974 | >20%                    |                10 |              0.05974 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5976 | >20%                    |                 5 |              0.11952 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6084 | >20%                    |                 2 |              0.3042  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6099 | 15-20%                  |                 2 |              0.30495 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6155 | 10-15%                  |                 5 |              0.1231  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6174 | 5-10%                   |                 5 |              0.12348 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.623  | >20%                    |                 5 |              0.1246  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6402 | >20%                    |                 5 |              0.12804 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6405 | >20%                    |                 5 |              0.1281  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6478 | 5-10%                   |                 2 |              0.3239  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6494 | >20%                    |                 5 |              0.12988 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6574 | >20%                    |                10 |              0.06574 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6582 | >20%                    |                 5 |              0.13164 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6607 | 15-20%                  |                10 |              0.06607 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6689 | <5%                     |                 5 |              0.13378 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6748 | <5%                     |                10 |              0.06748 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6757 | 15-20%                  |                10 |              0.06757 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6766 | >20%                    |                10 |              0.06766 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6811 | 5-10%                   |                 5 |              0.13622 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6824 | <5%                     |                10 |              0.06824 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6839 | 5-10%                   |                 5 |              0.13678 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6969 | >20%                    |                 5 |              0.13938 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7115 | 10-15%                  |                10 |              0.07115 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7164 | <5%                     |                10 |              0.07164 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7187 | 10-15%                  |                10 |              0.07187 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7222 | >20%                    |                 2 |              0.3611  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.732  | >20%                    |                 5 |              0.1464  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | >20%                    |                10 |              0.07374 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7381 | >20%                    |                 5 |              0.14762 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.74   | >20%                    |                10 |              0.074   |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7437 | 15-20%                  |                 5 |              0.14874 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7677 | 5-10%                   |                10 |              0.07677 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7687 | >20%                    |                 5 |              0.15374 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7732 | >20%                    |                 2 |              0.3866  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.7734 | >20%                    |                10 |              0.07734 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7737 | 15-20%                  |                10 |              0.07737 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7812 | >20%                    |                10 |              0.07812 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7891 | <5%                     |                10 |              0.07891 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7959 | >20%                    |                 5 |              0.15918 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8202 | >20%                    |                 5 |              0.16404 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.822  | >20%                    |                10 |              0.0822  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8274 | 10-15%                  |                 2 |              0.4137  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8304 | >20%                    |                10 |              0.08304 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8341 | <5%                     |                10 |              0.08341 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8384 | >20%                    |                 5 |              0.16768 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.844  | <5%                     |                 5 |              0.1688  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8491 | >20%                    |                 2 |              0.42455 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8522 | <5%                     |                10 |              0.08522 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8607 | >20%                    |                 5 |              0.17214 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8689 | 5-10%                   |                10 |              0.08689 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8739 | >20%                    |                 2 |              0.43695 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.878  | >20%                    |                10 |              0.0878  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8881 | >20%                    |                 2 |              0.44405 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8887 | >20%                    |                10 |              0.08887 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8924 |                         |                 2 |              0.4462  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8958 | 15-20%                  |                10 |              0.08958 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.898  | 10-15%                  |                10 |              0.0898  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9195 | <5%                     |                10 |              0.09195 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9485 | <5%                     |                10 |              0.09485 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.96   | >20%                    |                 2 |              0.48    |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9606 | >20%                    |                 5 |              0.19212 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9886 | >20%                    |                10 |              0.09886 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0132 | >20%                    |                10 |              0.10132 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0182 | 5-10%                   |                 5 |              0.20364 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.033  | >20%                    |                10 |              0.1033  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0485 | >20%                    |                10 |              0.10485 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0488 | >20%                    |                10 |              0.10488 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0498 | >20%                    |                 5 |              0.20996 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0524 | 15-20%                  |                10 |              0.10524 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0823 | 5-10%                   |                10 |              0.10823 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0945 | 10-15%                  |                 5 |              0.2189  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1126 | >20%                    |                10 |              0.11126 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1457 | >20%                    |                 2 |              0.57285 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1706 | >20%                    |                 5 |              0.23412 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1825 | >20%                    |                10 |              0.11825 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1866 |                         |                 5 |              0.23732 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1876 | <5%                     |                10 |              0.11876 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2181 | >20%                    |                10 |              0.12181 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2639 | >20%                    |                10 |              0.12639 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3387 | >20%                    |                10 |              0.13387 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3744 | 10-15%                  |                 5 |              0.27488 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3925 | >20%                    |                10 |              0.13925 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4375 | >20%                    |                 2 |              0.71875 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6975 | 15-20%                  |                10 |              0.16975 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8027 |                         |                10 |              0.18027 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0837 | 10-15%                  |                10 |              0.20837 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4454 | <5%                     |                 5 |              0.48908 |