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

Data correct as of 2026-02-17 02:34:14.156252, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1409 | >20%                    |                 2 |              0.07045 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1593 | >20%                    |                 2 |              0.07965 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2048 | >20%                    |                 2 |              0.1024  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2082 | >20%                    |                 5 |              0.04164 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2221 | >20%                    |                 5 |              0.04442 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2274 | >20%                    |                 2 |              0.1137  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | 5-10%                   |                 2 |              0.12355 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | 15-20%                  |                 2 |              0.12605 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | >20%                    |                 2 |              0.1265  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2562 | >20%                    |                 2 |              0.1281  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2594 | 5-10%                   |                10 |              0.02594 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | 10-15%                  |                 2 |              0.1299  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2746 | <5%                     |                 5 |              0.05492 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2751 | >20%                    |                 2 |              0.13755 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | 10-15%                  |                 2 |              0.13955 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | >20%                    |                 2 |              0.1475  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2976 | >20%                    |                 5 |              0.05952 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3081 | >20%                    |                 2 |              0.15405 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | >20%                    |                 2 |              0.15425 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.31   | >20%                    |                 2 |              0.155   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3189 | >20%                    |                 2 |              0.15945 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3263 | 5-10%                   |                 2 |              0.16315 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3353 | <5%                     |                 2 |              0.16765 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3362 | <5%                     |                 5 |              0.06724 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3495 | >20%                    |                 2 |              0.17475 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.357  | >20%                    |                 5 |              0.0714  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3578 | >20%                    |                 5 |              0.07156 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3605 | >20%                    |                10 |              0.03605 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3614 | >20%                    |                 5 |              0.07228 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3654 | 15-20%                  |                 2 |              0.1827  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.369  | <5%                     |                 5 |              0.0738  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3691 | 5-10%                   |                10 |              0.03691 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3758 | >20%                    |                 2 |              0.1879  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3778 | >20%                    |                 2 |              0.1889  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3795 | 5-10%                   |                 2 |              0.18975 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3814 | >20%                    |                 5 |              0.07628 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3846 | >20%                    |                 5 |              0.07692 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | 15-20%                  |                 2 |              0.19335 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.391  | >20%                    |                 5 |              0.0782  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3929 | >20%                    |                10 |              0.03929 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3952 | 10-15%                  |                 2 |              0.1976  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3963 | 5-10%                   |                 5 |              0.07926 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3999 | <5%                     |                 2 |              0.19995 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4006 | >20%                    |                 5 |              0.08012 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4012 | >20%                    |                 5 |              0.08024 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4027 | <5%                     |                 5 |              0.08054 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4027 | >20%                    |                 2 |              0.20135 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4096 | 10-15%                  |                 5 |              0.08192 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.41   | >20%                    |                 5 |              0.082   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4133 | >20%                    |                10 |              0.04133 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4161 | >20%                    |                 2 |              0.20805 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4204 | >20%                    |                 2 |              0.2102  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4216 | 5-10%                   |                 2 |              0.2108  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | 15-20%                  |                 5 |              0.08444 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4267 | >20%                    |                 2 |              0.21335 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4323 | >20%                    |                 2 |              0.21615 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | <5%                     |                 2 |              0.2178  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | <5%                     |                 2 |              0.21985 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.445  | 5-10%                   |                 2 |              0.2225  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4471 | 15-20%                  |                 2 |              0.22355 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.448  | >20%                    |                 5 |              0.0896  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4499 | >20%                    |                 2 |              0.22495 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | 15-20%                  |                 2 |              0.2251  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4514 | >20%                    |                 5 |              0.09028 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4518 | 5-10%                   |                 2 |              0.2259  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4557 | >20%                    |                10 |              0.04557 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4599 | >20%                    |                10 |              0.04599 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4609 | >20%                    |                 2 |              0.23045 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4647 | 5-10%                   |                 2 |              0.23235 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4675 | 5-10%                   |                 5 |              0.0935  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | >20%                    |                 5 |              0.09384 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4735 | >20%                    |                 2 |              0.23675 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4767 | 15-20%                  |                 2 |              0.23835 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4817 | >20%                    |                 2 |              0.24085 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4835 | >20%                    |                10 |              0.04835 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4857 | <5%                     |                10 |              0.04857 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4961 | >20%                    |                 2 |              0.24805 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5049 | 15-20%                  |                 5 |              0.10098 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5105 | >20%                    |                 2 |              0.25525 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5107 | >20%                    |                 5 |              0.10214 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5244 | >20%                    |                 2 |              0.2622  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5316 | 15-20%                  |                 5 |              0.10632 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5362 | >20%                    |                 5 |              0.10724 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5399 | <5%                     |                 5 |              0.10798 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5433 | >20%                    |                 5 |              0.10866 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.544  | >20%                    |                 5 |              0.1088  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5503 | >20%                    |                 5 |              0.11006 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5527 | 15-20%                  |                10 |              0.05527 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5566 | >20%                    |                10 |              0.05566 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5611 | <5%                     |                 5 |              0.11222 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.572  | 15-20%                  |                10 |              0.0572  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.573  | <5%                     |                10 |              0.0573  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.587  | >20%                    |                10 |              0.0587  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6006 | 5-10%                   |                 2 |              0.3003  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6008 | >20%                    |                10 |              0.06008 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6066 | >20%                    |                 5 |              0.12132 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6079 | >20%                    |                 5 |              0.12158 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.608  | 15-20%                  |                 2 |              0.304   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6086 | 5-10%                   |                 5 |              0.12172 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6162 | <5%                     |                 2 |              0.3081  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6167 | >20%                    |                 5 |              0.12334 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6182 | 5-10%                   |                 5 |              0.12364 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6281 | >20%                    |                 2 |              0.31405 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6318 | 10-15%                  |                 5 |              0.12636 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6327 | >20%                    |                 5 |              0.12654 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6393 | <5%                     |                10 |              0.06393 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6424 | >20%                    |                 5 |              0.12848 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.644  | <5%                     |                10 |              0.0644  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6541 | 5-10%                   |                 2 |              0.32705 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.657  | >20%                    |                 5 |              0.1314  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6675 | 15-20%                  |                10 |              0.06675 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6678 | >20%                    |                10 |              0.06678 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6804 | 5-10%                   |                 5 |              0.13608 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6907 | 15-20%                  |                10 |              0.06907 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7022 | >20%                    |                10 |              0.07022 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7045 | <5%                     |                10 |              0.07045 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7082 | 10-15%                  |                10 |              0.07082 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7096 | >20%                    |                 5 |              0.14192 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7097 | >20%                    |                 5 |              0.14194 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.7114 | >20%                    |                10 |              0.07114 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7299 | 5-10%                   |                 5 |              0.14598 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7338 | >20%                    |                10 |              0.07338 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7347 | >20%                    |                 5 |              0.14694 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7375 | >20%                    |                10 |              0.07375 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7395 | 10-15%                  |                10 |              0.07395 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7434 | <5%                     |                 5 |              0.14868 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7544 | 5-10%                   |                10 |              0.07544 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7593 | >20%                    |                 2 |              0.37965 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7636 | >20%                    |                 5 |              0.15272 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7795 | >20%                    |                10 |              0.07795 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7906 | <5%                     |                10 |              0.07906 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7994 | 15-20%                  |                 5 |              0.15988 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8053 | >20%                    |                 2 |              0.40265 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8096 | 10-15%                  |                 2 |              0.4048  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8141 | >20%                    |                 5 |              0.16282 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8157 | >20%                    |                10 |              0.08157 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8273 | 15-20%                  |                10 |              0.08273 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8327 | >20%                    |                10 |              0.08327 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8354 | >20%                    |                 2 |              0.4177  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8366 | <5%                     |                10 |              0.08366 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8383 | <5%                     |                 5 |              0.16766 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.841  | >20%                    |                 5 |              0.1682  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8455 | <5%                     |                10 |              0.08455 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8547 | 15-20%                  |                10 |              0.08547 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8603 |                         |                 2 |              0.43015 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8652 | >20%                    |                 5 |              0.17304 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8748 | >20%                    |                 2 |              0.4374  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | >20%                    |                10 |              0.08752 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8788 | >20%                    |                 2 |              0.4394  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8861 | <5%                     |                10 |              0.08861 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8932 | >20%                    |                 5 |              0.17864 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9006 | >20%                    |                10 |              0.09006 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.903  | 5-10%                   |                10 |              0.0903  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9336 | 10-15%                  |                10 |              0.09336 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9421 | <5%                     |                10 |              0.09421 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9928 | >20%                    |                10 |              0.09928 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0086 | >20%                    |                 2 |              0.5043  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.012  | >20%                    |                 5 |              0.2024  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0144 | >20%                    |                10 |              0.10144 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0164 | >20%                    |                10 |              0.10164 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0304 | 5-10%                   |                 5 |              0.20608 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.035  | >20%                    |                10 |              0.1035  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0637 | >20%                    |                10 |              0.10637 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0694 | >20%                    |                 5 |              0.21388 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0742 | 5-10%                   |                10 |              0.10742 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0848 | 10-15%                  |                 5 |              0.21696 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0973 | 15-20%                  |                10 |              0.10973 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1058 | >20%                    |                10 |              0.11058 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1327 |                         |                 5 |              0.22654 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1421 | >20%                    |                 5 |              0.22842 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1948 | >20%                    |                 2 |              0.5974  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2057 | <5%                     |                10 |              0.12057 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2212 | >20%                    |                10 |              0.12212 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2469 | >20%                    |                10 |              0.12469 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2501 | >20%                    |                10 |              0.12501 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4036 | 10-15%                  |                 5 |              0.28072 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4092 | >20%                    |                10 |              0.14092 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4263 | >20%                    |                10 |              0.14263 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.439  | >20%                    |                 2 |              0.7195  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6256 | 15-20%                  |                10 |              0.16256 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7324 |                         |                10 |              0.17324 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0845 | 10-15%                  |                10 |              0.20845 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4707 | <5%                     |                 5 |              0.49414 |