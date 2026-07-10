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

Data correct as of 2026-07-10 03:42:19.970010, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.15   | >20%                    |                 2 |              0.075   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1655 | >20%                    |                 2 |              0.08275 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2213 | 15-20%                  |                 2 |              0.11065 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | >20%                    |                 2 |              0.12115 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | >20%                    |                 2 |              0.12395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2556 | >20%                    |                 2 |              0.1278  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | >20%                    |                 2 |              0.1283  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2594 | 15-20%                  |                 5 |              0.05188 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2654 | 5-10%                   |                10 |              0.02654 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2739 | 15-20%                  |                 2 |              0.13695 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | >20%                    |                 2 |              0.1432  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2937 | 10-15%                  |                 2 |              0.14685 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2991 | >20%                    |                 5 |              0.05982 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | 15-20%                  |                 2 |              0.15215 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3115 | >20%                    |                 2 |              0.15575 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3247 | 15-20%                  |                 5 |              0.06494 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3294 | >20%                    |                 5 |              0.06588 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.336  | >20%                    |                 5 |              0.0672  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3406 | >20%                    |                 2 |              0.1703  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3594 | 5-10%                   |                10 |              0.03594 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3606 | <5%                     |                 2 |              0.1803  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3618 | >20%                    |                 5 |              0.07236 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | >20%                    |                 5 |              0.07268 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | >20%                    |                 2 |              0.18415 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3691 | >20%                    |                 5 |              0.07382 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3693 | 15-20%                  |                 5 |              0.07386 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3713 | >20%                    |                 5 |              0.07426 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3723 | >20%                    |                10 |              0.03723 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3788 | >20%                    |                10 |              0.03788 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3954 | 5-10%                   |                10 |              0.03954 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.397  | 10-15%                  |                 2 |              0.1985  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4111 | 10-15%                  |                 2 |              0.20555 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4181 | >20%                    |                 2 |              0.20905 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4218 | >20%                    |                10 |              0.04218 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4256 | >20%                    |                 2 |              0.2128  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4281 | 10-15%                  |                 2 |              0.21405 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4282 | >20%                    |                 5 |              0.08564 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4295 | <5%                     |                 2 |              0.21475 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4389 | >20%                    |                 2 |              0.21945 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.442  | >20%                    |                10 |              0.0442  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4455 | >20%                    |                 5 |              0.0891  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4482 | >20%                    |                 2 |              0.2241  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4507 | <5%                     |                 2 |              0.22535 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4566 | >20%                    |                 5 |              0.09132 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4569 | 15-20%                  |                 2 |              0.22845 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.463  | >20%                    |                10 |              0.0463  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4714 | >20%                    |                 5 |              0.09428 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4758 | >20%                    |                 2 |              0.2379  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.491  | >20%                    |                 5 |              0.0982  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4987 | >20%                    |                 5 |              0.09974 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4992 | >20%                    |                 2 |              0.2496  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5007 | 15-20%                  |                 2 |              0.25035 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5011 | >20%                    |                 5 |              0.10022 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | >20%                    |                 5 |              0.10106 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5055 | >20%                    |                 5 |              0.1011  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5069 | >20%                    |                 2 |              0.25345 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5096 | >20%                    |                10 |              0.05096 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5117 | 15-20%                  |                 2 |              0.25585 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.513  | >20%                    |                 5 |              0.1026  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5146 | >20%                    |                 5 |              0.10292 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5476 | 5-10%                   |                 2 |              0.2738  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5542 | >20%                    |                 5 |              0.11084 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5582 | 5-10%                   |                 5 |              0.11164 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5664 | >20%                    |                 5 |              0.11328 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5667 |                         |                 2 |              0.28335 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5677 | 10-15%                  |                 5 |              0.11354 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5709 | >20%                    |                 2 |              0.28545 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5755 | >20%                    |                10 |              0.05755 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5795 | >20%                    |                 5 |              0.1159  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5938 | 15-20%                  |                 5 |              0.11876 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5943 | >20%                    |                 2 |              0.29715 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5994 | >20%                    |                 5 |              0.11988 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5997 | <5%                     |                 5 |              0.11994 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6136 | >20%                    |                 2 |              0.3068  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6139 | >20%                    |                 5 |              0.12278 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6317 | >20%                    |                10 |              0.06317 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6322 | >20%                    |                 5 |              0.12644 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6457 | >20%                    |                 5 |              0.12914 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6508 | >20%                    |                10 |              0.06508 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6567 | >20%                    |                10 |              0.06567 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6589 | >20%                    |                 5 |              0.13178 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6704 | >20%                    |                10 |              0.06704 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6789 | >20%                    |                 2 |              0.33945 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6806 | >20%                    |                 2 |              0.3403  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6863 | 10-15%                  |                10 |              0.06863 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6913 | >20%                    |                10 |              0.06913 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7096 | >20%                    |                10 |              0.07096 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7113 | >20%                    |                10 |              0.07113 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7117 | >20%                    |                 5 |              0.14234 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.714  | >20%                    |                 2 |              0.357   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.716  | >20%                    |                 2 |              0.358   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7204 | 10-15%                  |                 2 |              0.3602  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7209 | >20%                    |                 5 |              0.14418 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.724  | >20%                    |                 5 |              0.1448  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.725  | >20%                    |                10 |              0.0725  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7663 | >20%                    |                 5 |              0.15326 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7871 | >20%                    |                10 |              0.07871 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7876 | >20%                    |                10 |              0.07876 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.788  | 15-20%                  |                10 |              0.0788  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7906 | >20%                    |                 2 |              0.3953  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7923 |                         |                 2 |              0.39615 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8065 | >20%                    |                 5 |              0.1613  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8073 | 5-10%                   |                 2 |              0.40365 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8144 | 5-10%                   |                10 |              0.08144 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8204 | <5%                     |                10 |              0.08204 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8245 | >20%                    |                10 |              0.08245 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8276 | 5-10%                   |                10 |              0.08276 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8288 | >20%                    |                10 |              0.08288 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8361 | 10-15%                  |                 2 |              0.41805 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8408 | >20%                    |                 5 |              0.16816 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8529 | >20%                    |                10 |              0.08529 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8568 | >20%                    |                10 |              0.08568 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8604 | 15-20%                  |                10 |              0.08604 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8628 | 15-20%                  |                10 |              0.08628 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.868  | >20%                    |                10 |              0.0868  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8711 | >20%                    |                 5 |              0.17422 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8815 | >20%                    |                10 |              0.08815 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8933 | 5-10%                   |                 5 |              0.17866 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8953 |                         |                 5 |              0.17906 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8994 | >20%                    |                10 |              0.08994 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9064 | 15-20%                  |                10 |              0.09064 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9205 | >20%                    |                 5 |              0.1841  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9335 | 15-20%                  |                10 |              0.09335 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9758 | >20%                    |                 5 |              0.19516 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9957 | >20%                    |                 5 |              0.19914 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0014 | >20%                    |                10 |              0.10014 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0374 | >20%                    |                10 |              0.10374 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0403 | >20%                    |                 5 |              0.20806 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0619 | 15-20%                  |                10 |              0.10619 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0645 | 10-15%                  |                 2 |              0.53225 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0649 | >20%                    |                10 |              0.10649 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0677 | >20%                    |                 2 |              0.53385 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1021 | >20%                    |                 5 |              0.22042 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1177 | 5-10%                   |                10 |              0.11177 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1754 | >20%                    |                 5 |              0.23508 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.191  |                         |                10 |              0.1191  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2298 | >20%                    |                10 |              0.12298 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2318 |                         |                 5 |              0.24636 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2322 | >20%                    |                10 |              0.12322 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2962 | >20%                    |                 5 |              0.25924 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3416 | 15-20%                  |                10 |              0.13416 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3437 | 15-20%                  |                10 |              0.13437 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3959 | >20%                    |                 5 |              0.27918 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4432 | >20%                    |                10 |              0.14432 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4792 | >20%                    |                10 |              0.14792 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4793 | 10-15%                  |                10 |              0.14793 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4825 | 15-20%                  |                 5 |              0.2965  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7173 | >20%                    |                10 |              0.17173 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8203 | 5-10%                   |                 2 |              0.91015 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9058 | 5-10%                   |                 2 |              0.9529  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2996 | >20%                    |                10 |              0.22996 |