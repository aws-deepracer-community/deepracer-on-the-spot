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

Data correct as of 2025-07-24 02:04:29.248653, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1571 | 5-10%                   |                 2 |              0.07855 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1652 | >20%                    |                 2 |              0.0826  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1812 | 5-10%                   |                 2 |              0.0906  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1972 | >20%                    |                 2 |              0.0986  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2223 | >20%                    |                 2 |              0.11115 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2312 | <5%                     |                 5 |              0.04624 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.233  | <5%                     |                 5 |              0.0466  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 15-20%                  |                 2 |              0.1172  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2357 | 5-10%                   |                 5 |              0.04714 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2378 | >20%                    |                 2 |              0.1189  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2425 | >20%                    |                 2 |              0.12125 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | 15-20%                  |                 2 |              0.12505 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2548 | 5-10%                   |                 2 |              0.1274  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2657 | >20%                    |                 2 |              0.13285 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2756 | >20%                    |                 5 |              0.05512 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2875 | >20%                    |                 5 |              0.0575  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2934 | >20%                    |                 2 |              0.1467  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2935 | >20%                    |                 5 |              0.0587  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | <5%                     |                 2 |              0.1531  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3079 | >20%                    |                 5 |              0.06158 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3174 | >20%                    |                 5 |              0.06348 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3178 | >20%                    |                10 |              0.03178 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | 5-10%                   |                 2 |              0.15905 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3295 | >20%                    |                 2 |              0.16475 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3315 | 5-10%                   |                 2 |              0.16575 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3324 | 15-20%                  |                 2 |              0.1662  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3338 | 15-20%                  |                 5 |              0.06676 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3342 | >20%                    |                 2 |              0.1671  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | 15-20%                  |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3351 | <5%                     |                 2 |              0.16755 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3364 | 15-20%                  |                 2 |              0.1682  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3468 | 15-20%                  |                10 |              0.03468 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3558 | >20%                    |                10 |              0.03558 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | >20%                    |                 2 |              0.17895 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3673 | >20%                    |                 2 |              0.18365 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | >20%                    |                 5 |              0.07468 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3734 | >20%                    |                 5 |              0.07468 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3755 | >20%                    |                 5 |              0.0751  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3839 | >20%                    |                 2 |              0.19195 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3847 | <5%                     |                10 |              0.03847 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4037 | <5%                     |                10 |              0.04037 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4039 | >20%                    |                 5 |              0.08078 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4205 | <5%                     |                 2 |              0.21025 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4246 | 10-15%                  |                 2 |              0.2123  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4291 | >20%                    |                 2 |              0.21455 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4304 | >20%                    |                 2 |              0.2152  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.4321 | 15-20%                  |                10 |              0.04321 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4384 | >20%                    |                 2 |              0.2192  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4476 | <5%                     |                 2 |              0.2238  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4492 | >20%                    |                 2 |              0.2246  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4517 | 15-20%                  |                10 |              0.04517 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4535 | 5-10%                   |                 2 |              0.22675 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | 15-20%                  |                 5 |              0.09112 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4586 | >20%                    |                 5 |              0.09172 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | >20%                    |                 5 |              0.09194 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.463  | >20%                    |                 5 |              0.0926  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4631 | >20%                    |                 2 |              0.23155 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4708 | 10-15%                  |                 2 |              0.2354  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4721 | >20%                    |                 2 |              0.23605 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4743 | 5-10%                   |                 2 |              0.23715 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4763 | >20%                    |                10 |              0.04763 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | >20%                    |                 5 |              0.09534 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4778 | >20%                    |                 2 |              0.2389  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.497  | >20%                    |                 2 |              0.2485  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4992 | >20%                    |                 2 |              0.2496  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5052 | 5-10%                   |                 5 |              0.10104 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5055 | >20%                    |                 2 |              0.25275 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5058 | >20%                    |                 5 |              0.10116 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.507  | 10-15%                  |                 5 |              0.1014  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5252 | <5%                     |                 2 |              0.2626  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5313 | 15-20%                  |                10 |              0.05313 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5345 | 10-15%                  |                 5 |              0.1069  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5355 | 15-20%                  |                 2 |              0.26775 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5379 | >20%                    |                 5 |              0.10758 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5474 | >20%                    |                 5 |              0.10948 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5475 | 10-15%                  |                 5 |              0.1095  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5516 | >20%                    |                 5 |              0.11032 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5559 | 10-15%                  |                 2 |              0.27795 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5617 | >20%                    |                 5 |              0.11234 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5657 | >20%                    |                 2 |              0.28285 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5744 | >20%                    |                 2 |              0.2872  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5771 | 5-10%                   |                 5 |              0.11542 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5781 | >20%                    |                 5 |              0.11562 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5795 | >20%                    |                 5 |              0.1159  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5841 | >20%                    |                 2 |              0.29205 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5842 | >20%                    |                 5 |              0.11684 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.585  | 5-10%                   |                 2 |              0.2925  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6004 | <5%                     |                 5 |              0.12008 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6017 | >20%                    |                 2 |              0.30085 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6093 | 5-10%                   |                 5 |              0.12186 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6144 | >20%                    |                10 |              0.06144 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6174 | >20%                    |                 2 |              0.3087  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6202 | >20%                    |                10 |              0.06202 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6251 | >20%                    |                 5 |              0.12502 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6313 | 10-15%                  |                 5 |              0.12626 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6317 | >20%                    |                 5 |              0.12634 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.635  | >20%                    |                 5 |              0.127   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6458 | >20%                    |                10 |              0.06458 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6498 | >20%                    |                 2 |              0.3249  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6532 | >20%                    |                 5 |              0.13064 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6545 | >20%                    |                 2 |              0.32725 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6675 | >20%                    |                10 |              0.06675 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6752 | 15-20%                  |                 2 |              0.3376  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6794 | <5%                     |                10 |              0.06794 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6854 | 5-10%                   |                 5 |              0.13708 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6942 | 15-20%                  |                 2 |              0.3471  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7127 | >20%                    |                 5 |              0.14254 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7127 | >20%                    |                 5 |              0.14254 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7187 | <5%                     |                 5 |              0.14374 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7205 | 15-20%                  |                 5 |              0.1441  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7271 | <5%                     |                 5 |              0.14542 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7293 | >20%                    |                10 |              0.07293 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7384 | >20%                    |                 5 |              0.14768 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7421 | >20%                    |                 5 |              0.14842 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7484 | 15-20%                  |                10 |              0.07484 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7489 | 15-20%                  |                10 |              0.07489 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.78   | <5%                     |                10 |              0.078   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7954 | <5%                     |                10 |              0.07954 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7968 | >20%                    |                 5 |              0.15936 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8037 | >20%                    |                10 |              0.08037 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.81   | 5-10%                   |                10 |              0.081   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8137 | >20%                    |                 5 |              0.16274 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8326 | >20%                    |                 2 |              0.4163  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8355 | >20%                    |                10 |              0.08355 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8431 | >20%                    |                 5 |              0.16862 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8484 | 15-20%                  |                10 |              0.08484 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8558 | 5-10%                   |                10 |              0.08558 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8615 | >20%                    |                10 |              0.08615 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8731 | 5-10%                   |                10 |              0.08731 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8815 | 5-10%                   |                 5 |              0.1763  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8913 | <5%                     |                10 |              0.08913 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8975 | >20%                    |                 5 |              0.1795  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.913  | >20%                    |                10 |              0.0913  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9249 | 5-10%                   |                10 |              0.09249 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9252 | 5-10%                   |                10 |              0.09252 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9292 | >20%                    |                10 |              0.09292 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.946  | 15-20%                  |                10 |              0.0946  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9493 | 15-20%                  |                10 |              0.09493 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9506 | 15-20%                  |                10 |              0.09506 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9509 | >20%                    |                10 |              0.09509 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9529 | 15-20%                  |                 5 |              0.19058 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9587 | 5-10%                   |                10 |              0.09587 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9956 | 5-10%                   |                10 |              0.09956 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0002 | 15-20%                  |                10 |              0.10002 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0015 | 15-20%                  |                10 |              0.10015 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0175 | <5%                     |                10 |              0.10175 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0257 | <5%                     |                10 |              0.10257 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0359 | >20%                    |                 2 |              0.51795 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0576 | 5-10%                   |                10 |              0.10576 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0809 | >20%                    |                10 |              0.10809 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0847 | >20%                    |                10 |              0.10847 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0889 | >20%                    |                 5 |              0.21778 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.091  | >20%                    |                10 |              0.1091  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0935 | >20%                    |                10 |              0.10935 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1209 | >20%                    |                 5 |              0.22418 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1224 | >20%                    |                10 |              0.11224 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1224 | 15-20%                  |                10 |              0.11224 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1502 | >20%                    |                10 |              0.11502 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1723 | >20%                    |                10 |              0.11723 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2038 | <5%                     |                 2 |              0.6019  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2308 | >20%                    |                 2 |              0.6154  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2368 | >20%                    |                 5 |              0.24736 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2846 | >20%                    |                10 |              0.12846 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3232 | >20%                    |                 5 |              0.26464 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3296 | 15-20%                  |                 5 |              0.26592 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3478 | <5%                     |                10 |              0.13478 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3719 | >20%                    |                10 |              0.13719 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4271 | 5-10%                   |                10 |              0.14271 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.437  | >20%                    |                 2 |              0.7185  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4819 | >20%                    |                 5 |              0.29638 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5612 | <5%                     |                 5 |              0.31224 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6787 | 5-10%                   |                 2 |              0.83935 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6872 | >20%                    |                10 |              0.16872 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9011 | 10-15%                  |                10 |              0.19011 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9435 | 5-10%                   |                10 |              0.19435 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0272 | <5%                     |                10 |              0.20272 |