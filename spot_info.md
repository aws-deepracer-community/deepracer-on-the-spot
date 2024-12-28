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

Data correct as of 2024-12-28 01:35:22.464498, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1479 |                         |                 2 |              0.07395 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1705 |                         |                 2 |              0.08525 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1994 | >20%                    |                 2 |              0.0997  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.205  | <5%                     |                 5 |              0.041   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2081 | 15-20%                  |                 2 |              0.10405 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2173 | >20%                    |                 2 |              0.10865 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2176 |                         |                 5 |              0.04352 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2232 |                         |                 5 |              0.04464 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2293 | 15-20%                  |                 2 |              0.11465 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2309 | <5%                     |                 2 |              0.11545 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | 15-20%                  |                 2 |              0.11565 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | 5-10%                   |                 2 |              0.1166  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | 15-20%                  |                 2 |              0.1209  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | 5-10%                   |                 2 |              0.1252  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | <5%                     |                 2 |              0.14355 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2898 | 15-20%                  |                 5 |              0.05796 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2904 | <5%                     |                 2 |              0.1452  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2916 | 5-10%                   |                 2 |              0.1458  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | 5-10%                   |                 2 |              0.1507  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | >20%                    |                 2 |              0.1518  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | 5-10%                   |                 2 |              0.15335 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3292 | <5%                     |                 2 |              0.1646  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3304 |                         |                10 |              0.03304 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.337  | <5%                     |                 5 |              0.0674  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3374 | <5%                     |                 2 |              0.1687  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.342  | >20%                    |                 2 |              0.171   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3483 | >20%                    |                10 |              0.03483 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | 10-15%                  |                 2 |              0.1747  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3541 | 15-20%                  |                10 |              0.03541 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3544 | 10-15%                  |                 2 |              0.1772  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3573 |                         |                10 |              0.03573 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3628 | 10-15%                  |                 2 |              0.1814  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3632 | >20%                    |                 2 |              0.1816  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3735 | >20%                    |                 2 |              0.18675 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3754 | 5-10%                   |                10 |              0.03754 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3754 | >20%                    |                 5 |              0.07508 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3795 | <5%                     |                 5 |              0.0759  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | >20%                    |                 2 |              0.19195 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3922 | 5-10%                   |                 2 |              0.1961  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3951 | <5%                     |                 5 |              0.07902 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3965 | 10-15%                  |                 2 |              0.19825 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3973 | >20%                    |                 5 |              0.07946 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3973 | <5%                     |                 2 |              0.19865 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4043 | >20%                    |                 2 |              0.20215 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4071 | 5-10%                   |                 5 |              0.08142 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4118 | 5-10%                   |                 2 |              0.2059  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4176 | 10-15%                  |                 2 |              0.2088  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4191 | <5%                     |                 5 |              0.08382 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.426  | 5-10%                   |                 2 |              0.213   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4267 | 5-10%                   |                 5 |              0.08534 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4293 | 10-15%                  |                10 |              0.04293 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4343 | 5-10%                   |                 5 |              0.08686 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4485 | 5-10%                   |                 2 |              0.22425 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4488 | >20%                    |                 5 |              0.08976 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.45   | <5%                     |                 5 |              0.09    |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | >20%                    |                 5 |              0.0901  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4526 | 10-15%                  |                 5 |              0.09052 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4564 | >20%                    |                 5 |              0.09128 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | 5-10%                   |                 2 |              0.2317  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4637 | >20%                    |                 5 |              0.09274 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | 15-20%                  |                 2 |              0.2348  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4735 | 5-10%                   |                 5 |              0.0947  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4775 | 5-10%                   |                 5 |              0.0955  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | 15-20%                  |                 5 |              0.09596 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4803 | 10-15%                  |                 5 |              0.09606 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | <5%                     |                 5 |              0.09614 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4914 | 15-20%                  |                 2 |              0.2457  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4917 | 10-15%                  |                 2 |              0.24585 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4926 | <5%                     |                 5 |              0.09852 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | >20%                    |                 5 |              0.10032 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5029 | <5%                     |                 5 |              0.10058 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.507  | 5-10%                   |                10 |              0.0507  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5097 | 10-15%                  |                 2 |              0.25485 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5113 | <5%                     |                 2 |              0.25565 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5146 | >20%                    |                 5 |              0.10292 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5312 | <5%                     |                 5 |              0.10624 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5337 | 10-15%                  |                10 |              0.05337 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5339 | >20%                    |                 5 |              0.10678 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5357 | >20%                    |                 2 |              0.26785 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5386 | 5-10%                   |                 5 |              0.10772 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.546  | <5%                     |                 2 |              0.273   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5553 | >20%                    |                 5 |              0.11106 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5643 | 15-20%                  |                 5 |              0.11286 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.565  | 10-15%                  |                 5 |              0.113   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5744 | >20%                    |                 5 |              0.11488 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5803 | >20%                    |                 2 |              0.29015 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5985 | >20%                    |                10 |              0.05985 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6081 | >20%                    |                10 |              0.06081 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6287 | <5%                     |                 5 |              0.12574 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6431 | <5%                     |                 5 |              0.12862 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6531 | 10-15%                  |                10 |              0.06531 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6645 | 15-20%                  |                 2 |              0.33225 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6692 | <5%                     |                 5 |              0.13384 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6714 | 5-10%                   |                10 |              0.06714 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6808 | >20%                    |                10 |              0.06808 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6817 | 15-20%                  |                 5 |              0.13634 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.684  | 10-15%                  |                10 |              0.0684  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6864 | 15-20%                  |                 5 |              0.13728 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6912 | >20%                    |                10 |              0.06912 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6994 | 5-10%                   |                10 |              0.06994 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.701  | 5-10%                   |                 5 |              0.1402  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7165 | >20%                    |                10 |              0.07165 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7214 | >20%                    |                 2 |              0.3607  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7282 | <5%                     |                 2 |              0.3641  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7409 | <5%                     |                10 |              0.07409 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7447 | 5-10%                   |                10 |              0.07447 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7577 | >20%                    |                 5 |              0.15154 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7716 | >20%                    |                 5 |              0.15432 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.775  | 15-20%                  |                10 |              0.0775  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7878 | >20%                    |                 5 |              0.15756 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7955 | 15-20%                  |                10 |              0.07955 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8003 | <5%                     |                10 |              0.08003 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.802  | 5-10%                   |                10 |              0.0802  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.826  | 5-10%                   |                10 |              0.0826  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.8279 | <5%                     |                 2 |              0.41395 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8361 | 10-15%                  |                10 |              0.08361 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8439 | >20%                    |                10 |              0.08439 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8479 | 10-15%                  |                10 |              0.08479 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.849  | 10-15%                  |                10 |              0.0849  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8497 | >20%                    |                10 |              0.08497 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8604 | 5-10%                   |                10 |              0.08604 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8709 | <5%                     |                10 |              0.08709 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8724 | 5-10%                   |                10 |              0.08724 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8954 | 5-10%                   |                 5 |              0.17908 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8954 | <5%                     |                10 |              0.08954 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9382 | 15-20%                  |                10 |              0.09382 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9434 | 5-10%                   |                 5 |              0.18868 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9518 | >20%                    |                10 |              0.09518 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9624 | <5%                     |                 5 |              0.19248 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9804 | 10-15%                  |                 2 |              0.4902  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.996  | 5-10%                   |                10 |              0.0996  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9969 | 15-20%                  |                10 |              0.09969 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0559 | <5%                     |                10 |              0.10559 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0632 | <5%                     |                10 |              0.10632 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1201 | >20%                    |                10 |              0.11201 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1303 | >20%                    |                10 |              0.11303 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1312 | <5%                     |                10 |              0.11312 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.202  | 5-10%                   |                10 |              0.1202  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3219 | >20%                    |                10 |              0.13219 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3229 | <5%                     |                10 |              0.13229 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4171 | 5-10%                   |                10 |              0.14171 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5597 | 5-10%                   |                 5 |              0.31194 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0419 | 10-15%                  |                10 |              0.20419 |