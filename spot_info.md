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

Data correct as of 2025-03-06 01:42:22.834434, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1081 | 10-15%                  |                 2 |              0.05405 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1369 | 5-10%                   |                 5 |              0.02738 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1464 | >20%                    |                 2 |              0.0732  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1793 | >20%                    |                 5 |              0.03586 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1935 | 15-20%                  |                 5 |              0.0387  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1958 | >20%                    |                 5 |              0.03916 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2046 | 5-10%                   |                 2 |              0.1023  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | 5-10%                   |                 2 |              0.10655 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 10-15%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.233  | >20%                    |                 5 |              0.0466  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | >20%                    |                 2 |              0.1165  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2354 | <5%                     |                 2 |              0.1177  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | >20%                    |                 2 |              0.11785 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2385 | 15-20%                  |                 2 |              0.11925 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2401 | 5-10%                   |                10 |              0.02401 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2503 | 10-15%                  |                 5 |              0.05006 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | 10-15%                  |                 2 |              0.1253  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | 5-10%                   |                 2 |              0.12635 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2617 | >20%                    |                 2 |              0.13085 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2633 | 15-20%                  |                 2 |              0.13165 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2644 | 10-15%                  |                10 |              0.02644 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2769 | 5-10%                   |                 2 |              0.13845 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3011 | 5-10%                   |                 2 |              0.15055 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3013 | 5-10%                   |                 2 |              0.15065 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3079 | 5-10%                   |                 5 |              0.06158 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | >20%                    |                 2 |              0.1547  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3102 | <5%                     |                 2 |              0.1551  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | <5%                     |                 2 |              0.1562  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3192 | 10-15%                  |                 5 |              0.06384 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3217 | 10-15%                  |                 2 |              0.16085 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3252 | 15-20%                  |                 2 |              0.1626  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3355 | 5-10%                   |                10 |              0.03355 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3373 | <5%                     |                 2 |              0.16865 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3434 | 15-20%                  |                 2 |              0.1717  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.346  | <5%                     |                10 |              0.0346  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3465 | >20%                    |                 5 |              0.0693  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3471 | 5-10%                   |                 2 |              0.17355 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3601 | >20%                    |                 2 |              0.18005 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3606 | >20%                    |                 2 |              0.1803  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3624 | 10-15%                  |                10 |              0.03624 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | 10-15%                  |                 5 |              0.07248 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3692 | 5-10%                   |                 5 |              0.07384 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3727 | <5%                     |                 5 |              0.07454 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3733 | <5%                     |                 2 |              0.18665 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3776 | <5%                     |                 5 |              0.07552 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3783 | >20%                    |                 2 |              0.18915 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3814 | >20%                    |                 2 |              0.1907  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3825 | >20%                    |                10 |              0.03825 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3881 | 15-20%                  |                10 |              0.03881 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3885 | >20%                    |                 5 |              0.0777  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3965 | >20%                    |                 2 |              0.19825 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3968 | >20%                    |                 2 |              0.1984  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3979 | <5%                     |                 5 |              0.07958 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4016 | >20%                    |                 2 |              0.2008  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4041 | <5%                     |                 2 |              0.20205 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4082 | 5-10%                   |                 2 |              0.2041  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4194 | 5-10%                   |                 2 |              0.2097  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4257 | 15-20%                  |                 2 |              0.21285 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.43   | 5-10%                   |                 2 |              0.215   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4319 | 5-10%                   |                 2 |              0.21595 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4418 | >20%                    |                 2 |              0.2209  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4418 | >20%                    |                 2 |              0.2209  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.446  | <5%                     |                 2 |              0.223   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4473 | >20%                    |                 5 |              0.08946 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4476 | >20%                    |                 5 |              0.08952 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4487 | >20%                    |                 2 |              0.22435 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4566 | <5%                     |                10 |              0.04566 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4587 | 15-20%                  |                 5 |              0.09174 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4592 | >20%                    |                 2 |              0.2296  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4602 | >20%                    |                10 |              0.04602 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.461  | 10-15%                  |                10 |              0.0461  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | 5-10%                   |                 5 |              0.09304 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4691 | >20%                    |                 5 |              0.09382 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4833 | <5%                     |                 5 |              0.09666 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.4837 | 5-10%                   |                10 |              0.04837 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | 5-10%                   |                 5 |              0.0977  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.491  | >20%                    |                 5 |              0.0982  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4916 | 5-10%                   |                 5 |              0.09832 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4958 | <5%                     |                 5 |              0.09916 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5166 | >20%                    |                 5 |              0.10332 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5189 | >20%                    |                 2 |              0.25945 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5206 | >20%                    |                 2 |              0.2603  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5218 | >20%                    |                 5 |              0.10436 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | 5-10%                   |                 5 |              0.10474 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5263 | 5-10%                   |                 2 |              0.26315 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5281 | >20%                    |                 5 |              0.10562 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5325 | >20%                    |                 2 |              0.26625 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.546  | 5-10%                   |                10 |              0.0546  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5465 | >20%                    |                 2 |              0.27325 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5601 | 15-20%                  |                 2 |              0.28005 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5605 | 10-15%                  |                 5 |              0.1121  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5617 | >20%                    |                 5 |              0.11234 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5639 | 10-15%                  |                 5 |              0.11278 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5647 | 5-10%                   |                 5 |              0.11294 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5661 | 5-10%                   |                 5 |              0.11322 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5701 | 10-15%                  |                 5 |              0.11402 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5701 | >20%                    |                 2 |              0.28505 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.575  | 15-20%                  |                 5 |              0.115   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5783 | 5-10%                   |                 5 |              0.11566 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5856 | 15-20%                  |                 2 |              0.2928  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5858 | >20%                    |                 5 |              0.11716 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6083 | <5%                     |                 5 |              0.12166 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6112 | 15-20%                  |                 5 |              0.12224 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6168 | >20%                    |                 5 |              0.12336 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.6218 | 15-20%                  |                 2 |              0.3109  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6325 | >20%                    |                10 |              0.06325 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6517 | >20%                    |                 2 |              0.32585 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6564 | >20%                    |                 5 |              0.13128 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.659  | <5%                     |                10 |              0.0659  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6671 | 10-15%                  |                 5 |              0.13342 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6776 | >20%                    |                10 |              0.06776 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.697  | >20%                    |                 5 |              0.1394  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7042 | >20%                    |                 5 |              0.14084 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.705  | >20%                    |                10 |              0.0705  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7101 | >20%                    |                 5 |              0.14202 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7265 | >20%                    |                 5 |              0.1453  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7339 | >20%                    |                 2 |              0.36695 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7378 | >20%                    |                10 |              0.07378 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7404 | 5-10%                   |                 2 |              0.3702  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7412 | >20%                    |                 2 |              0.3706  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7471 | >20%                    |                10 |              0.07471 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7498 | >20%                    |                10 |              0.07498 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7524 | <5%                     |                 5 |              0.15048 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.761  | >20%                    |                 5 |              0.1522  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7696 | 5-10%                   |                 5 |              0.15392 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.77   | 5-10%                   |                10 |              0.077   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7712 | >20%                    |                 5 |              0.15424 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7729 | >20%                    |                10 |              0.07729 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7854 | 15-20%                  |                10 |              0.07854 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7928 | >20%                    |                10 |              0.07928 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7933 | <5%                     |                10 |              0.07933 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7977 | >20%                    |                10 |              0.07977 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8055 | 5-10%                   |                10 |              0.08055 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8071 | >20%                    |                10 |              0.08071 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8079 | 15-20%                  |                 5 |              0.16158 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | <5%                     |                10 |              0.08277 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8361 | <5%                     |                10 |              0.08361 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8533 | >20%                    |                 5 |              0.17066 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8663 | 15-20%                  |                10 |              0.08663 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8712 | 10-15%                  |                10 |              0.08712 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8784 | >20%                    |                 5 |              0.17568 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8789 | 5-10%                   |                10 |              0.08789 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8836 | <5%                     |                10 |              0.08836 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8848 | <5%                     |                10 |              0.08848 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9338 | >20%                    |                10 |              0.09338 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9394 | >20%                    |                10 |              0.09394 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9661 | 5-10%                   |                10 |              0.09661 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9736 | <5%                     |                10 |              0.09736 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9805 | >20%                    |                10 |              0.09805 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9915 | 15-20%                  |                10 |              0.09915 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0163 | >20%                    |                10 |              0.10163 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0167 | 5-10%                   |                10 |              0.10167 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.037  | >20%                    |                10 |              0.1037  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0376 | >20%                    |                10 |              0.10376 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0484 | <5%                     |                10 |              0.10484 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0814 | 5-10%                   |                 2 |              0.5407  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0827 | <5%                     |                10 |              0.10827 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1084 | >20%                    |                10 |              0.11084 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1181 | >20%                    |                 2 |              0.55905 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1536 | >20%                    |                10 |              0.11536 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1636 | 15-20%                  |                10 |              0.11636 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1802 | 15-20%                  |                10 |              0.11802 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2716 | >20%                    |                 2 |              0.6358  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3064 | >20%                    |                 5 |              0.26128 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3294 | 5-10%                   |                 5 |              0.26588 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3353 | 5-10%                   |                 5 |              0.26706 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3392 | >20%                    |                10 |              0.13392 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3907 | >20%                    |                10 |              0.13907 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5675 | >20%                    |                10 |              0.15675 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6616 | >20%                    |                 5 |              0.33232 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6725 | >20%                    |                 2 |              0.83625 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.7486 | >20%                    |                 5 |              0.34972 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7573 | >20%                    |                10 |              0.17573 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8392 | >20%                    |                10 |              0.18392 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1213 | 5-10%                   |                10 |              0.21213 |