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

Data correct as of 2025-08-28 01:46:54.280107, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0942 | 5-10%                   |                 2 |              0.0471  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1122 | >20%                    |                 2 |              0.0561  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.12   |                         |                 2 |              0.06    |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1646 |                         |                 5 |              0.03292 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1683 | >20%                    |                 2 |              0.08415 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1838 | >20%                    |                 5 |              0.03676 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1911 | >20%                    |                 2 |              0.09555 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.192  | 10-15%                  |                 5 |              0.0384  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2039 | >20%                    |                 2 |              0.10195 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2071 | 10-15%                  |                 2 |              0.10355 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2077 | >20%                    |                 5 |              0.04154 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2315 | >20%                    |                 5 |              0.0463  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | >20%                    |                 2 |              0.12075 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2474 |                         |                10 |              0.02474 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | >20%                    |                 2 |              0.13435 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2762 | >20%                    |                 2 |              0.1381  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2913 | >20%                    |                 2 |              0.14565 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | 10-15%                  |                 2 |              0.1461  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.317  | 10-15%                  |                 2 |              0.1585  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3186 | 5-10%                   |                 2 |              0.1593  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3242 | >20%                    |                 2 |              0.1621  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3256 | 10-15%                  |                 2 |              0.1628  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3338 | >20%                    |                 2 |              0.1669  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3363 | >20%                    |                 2 |              0.16815 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3366 | >20%                    |                 2 |              0.1683  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | >20%                    |                 5 |              0.06858 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3436 | 10-15%                  |                10 |              0.03436 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.346  | >20%                    |                 5 |              0.0692  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3526 | >20%                    |                 2 |              0.1763  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | >20%                    |                 2 |              0.1802  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3713 | >20%                    |                 2 |              0.18565 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3762 | 10-15%                  |                 2 |              0.1881  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3773 | >20%                    |                 2 |              0.18865 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.3789 | >20%                    |                 2 |              0.18945 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3797 | >20%                    |                 5 |              0.07594 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3852 | >20%                    |                 2 |              0.1926  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3901 | 15-20%                  |                 5 |              0.07802 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3975 | >20%                    |                 2 |              0.19875 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4067 | 15-20%                  |                 2 |              0.20335 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4093 | >20%                    |                 5 |              0.08186 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4115 | >20%                    |                 2 |              0.20575 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4234 | >20%                    |                 5 |              0.08468 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4239 | >20%                    |                 5 |              0.08478 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | 10-15%                  |                 2 |              0.21355 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4272 | >20%                    |                 5 |              0.08544 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4411 | 15-20%                  |                 5 |              0.08822 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4449 | 10-15%                  |                 2 |              0.22245 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.454  | >20%                    |                 2 |              0.227   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4559 | 5-10%                   |                 2 |              0.22795 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4623 | >20%                    |                10 |              0.04623 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4633 | >20%                    |                 5 |              0.09266 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4678 | 10-15%                  |                10 |              0.04678 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4716 | <5%                     |                 2 |              0.2358  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4801 | >20%                    |                 2 |              0.24005 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4822 | >20%                    |                 2 |              0.2411  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4846 | >20%                    |                 2 |              0.2423  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4886 | >20%                    |                 2 |              0.2443  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4926 | 15-20%                  |                 2 |              0.2463  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.493  | 10-15%                  |                10 |              0.0493  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | >20%                    |                 5 |              0.09938 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | 15-20%                  |                 5 |              0.10036 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.506  | 15-20%                  |                 5 |              0.1012  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5103 | 5-10%                   |                 5 |              0.10206 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5148 | >20%                    |                 2 |              0.2574  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5152 | >20%                    |                 2 |              0.2576  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5186 | 15-20%                  |                 2 |              0.2593  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5237 | >20%                    |                 2 |              0.26185 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5286 | >20%                    |                 5 |              0.10572 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5377 | >20%                    |                 5 |              0.10754 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.548  | 10-15%                  |                 2 |              0.274   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5502 | >20%                    |                 2 |              0.2751  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5588 | >20%                    |                 5 |              0.11176 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5592 | >20%                    |                 2 |              0.2796  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5677 | >20%                    |                 5 |              0.11354 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5718 | 15-20%                  |                 5 |              0.11436 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5733 | >20%                    |                 5 |              0.11466 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5735 | >20%                    |                 5 |              0.1147  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5792 | >20%                    |                 5 |              0.11584 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5799 | 10-15%                  |                 2 |              0.28995 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5807 | >20%                    |                 2 |              0.29035 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5839 | >20%                    |                 5 |              0.11678 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5907 | >20%                    |                 5 |              0.11814 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6012 | >20%                    |                 2 |              0.3006  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6143 | 10-15%                  |                 5 |              0.12286 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.617  | 15-20%                  |                10 |              0.0617  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6199 | 10-15%                  |                 5 |              0.12398 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6212 | 15-20%                  |                 5 |              0.12424 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6246 | <5%                     |                 2 |              0.3123  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6313 | >20%                    |                 5 |              0.12626 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6416 | >20%                    |                 5 |              0.12832 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6443 | 15-20%                  |                 5 |              0.12886 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6506 | >20%                    |                 2 |              0.3253  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6516 | 15-20%                  |                 5 |              0.13032 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6569 | 5-10%                   |                10 |              0.06569 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6573 | >20%                    |                 5 |              0.13146 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6764 | >20%                    |                10 |              0.06764 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6826 | 15-20%                  |                 5 |              0.13652 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6905 | 15-20%                  |                 5 |              0.1381  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6936 | 15-20%                  |                 5 |              0.13872 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6956 | >20%                    |                10 |              0.06956 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6966 | 15-20%                  |                10 |              0.06966 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6969 | 15-20%                  |                 2 |              0.34845 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7189 | >20%                    |                 5 |              0.14378 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7374 | >20%                    |                 5 |              0.14748 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7437 | >20%                    |                10 |              0.07437 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7522 | >20%                    |                 5 |              0.15044 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7552 | >20%                    |                 5 |              0.15104 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7553 | >20%                    |                10 |              0.07553 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7572 | >20%                    |                10 |              0.07572 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.7589 | >20%                    |                10 |              0.07589 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7648 | >20%                    |                10 |              0.07648 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7695 | >20%                    |                 5 |              0.1539  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7705 | 5-10%                   |                 5 |              0.1541  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7804 | >20%                    |                10 |              0.07804 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.782  | >20%                    |                10 |              0.0782  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7931 | 5-10%                   |                10 |              0.07931 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8108 | >20%                    |                 5 |              0.16216 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8215 | >20%                    |                10 |              0.08215 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8449 | >20%                    |                 5 |              0.16898 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8584 | >20%                    |                 2 |              0.4292  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8672 | >20%                    |                10 |              0.08672 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8677 | 5-10%                   |                10 |              0.08677 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8758 | 5-10%                   |                 2 |              0.4379  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8789 | >20%                    |                10 |              0.08789 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8879 | >20%                    |                 5 |              0.17758 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8959 | 5-10%                   |                10 |              0.08959 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8969 | 5-10%                   |                10 |              0.08969 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9012 | <5%                     |                10 |              0.09012 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9132 | 5-10%                   |                10 |              0.09132 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9211 | <5%                     |                10 |              0.09211 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9217 | 10-15%                  |                10 |              0.09217 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9339 | 10-15%                  |                10 |              0.09339 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9518 | <5%                     |                10 |              0.09518 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9625 | >20%                    |                 2 |              0.48125 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9671 | >20%                    |                 2 |              0.48355 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0023 | 10-15%                  |                10 |              0.10023 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0064 | 10-15%                  |                10 |              0.10064 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.009  | 15-20%                  |                10 |              0.1009  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0092 | >20%                    |                10 |              0.10092 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0254 | 15-20%                  |                10 |              0.10254 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.026  | <5%                     |                10 |              0.1026  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0415 | >20%                    |                10 |              0.10415 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.051  | >20%                    |                10 |              0.1051  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0565 | >20%                    |                10 |              0.10565 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0854 | >20%                    |                10 |              0.10854 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1073 | <5%                     |                 2 |              0.55365 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.119  | >20%                    |                10 |              0.1119  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1196 | >20%                    |                 5 |              0.22392 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1259 | >20%                    |                10 |              0.11259 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1281 | >20%                    |                10 |              0.11281 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1397 | >20%                    |                 2 |              0.56985 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.142  | >20%                    |                 5 |              0.2284  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1592 | >20%                    |                10 |              0.11592 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1636 | 5-10%                   |                 5 |              0.23272 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1919 | >20%                    |                 5 |              0.23838 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.1962 | 5-10%                   |                 5 |              0.23924 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2125 | 15-20%                  |                10 |              0.12125 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2729 | 15-20%                  |                 2 |              0.63645 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.363  | 10-15%                  |                10 |              0.1363  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3693 | >20%                    |                10 |              0.13693 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4015 | >20%                    |                 5 |              0.2803  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4787 | 10-15%                  |                10 |              0.14787 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4906 | 15-20%                  |                 5 |              0.29812 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5413 | >20%                    |                10 |              0.15413 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5427 | >20%                    |                10 |              0.15427 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5533 | >20%                    |                10 |              0.15533 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5747 | >20%                    |                10 |              0.15747 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.621  | >20%                    |                10 |              0.1621  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.3118 | 10-15%                  |                10 |              0.23118 |