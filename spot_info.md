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

Data correct as of 2026-03-29 02:51:28.750810, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1994 | 15-20%                  |                 2 |              0.0997  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2188 | >20%                    |                 2 |              0.1094  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | >20%                    |                 2 |              0.11095 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | >20%                    |                 2 |              0.1228  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2493 | 10-15%                  |                 2 |              0.12465 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | >20%                    |                 2 |              0.12495 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2568 | 5-10%                   |                10 |              0.02568 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | >20%                    |                 2 |              0.1329  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2693 | 15-20%                  |                 5 |              0.05386 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | 15-20%                  |                 2 |              0.1365  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2907 | >20%                    |                10 |              0.02907 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2935 | >20%                    |                 5 |              0.0587  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3088 | 15-20%                  |                 5 |              0.06176 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.309  | 5-10%                   |                10 |              0.0309  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | >20%                    |                 2 |              0.1549  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3125 | 10-15%                  |                 2 |              0.15625 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | >20%                    |                 2 |              0.1584  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3204 | <5%                     |                 5 |              0.06408 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3277 | 15-20%                  |                 5 |              0.06554 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3323 | >20%                    |                 5 |              0.06646 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3334 | <5%                     |                 2 |              0.1667  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3361 | >20%                    |                10 |              0.03361 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3368 | >20%                    |                 5 |              0.06736 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3428 | >20%                    |                 2 |              0.1714  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3451 | >20%                    |                 5 |              0.06902 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.346  | 10-15%                  |                 2 |              0.173   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3505 | <5%                     |                 2 |              0.17525 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3667 | 15-20%                  |                 2 |              0.18335 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3686 | >20%                    |                 2 |              0.1843  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3738 | >20%                    |                 5 |              0.07476 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3758 | >20%                    |                 2 |              0.1879  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3817 | >20%                    |                 5 |              0.07634 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3866 | >20%                    |                 5 |              0.07732 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3895 | 5-10%                   |                10 |              0.03895 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3898 | >20%                    |                 5 |              0.07796 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3976 | 10-15%                  |                 2 |              0.1988  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4053 | >20%                    |                10 |              0.04053 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | 10-15%                  |                 2 |              0.2057  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.413  | >20%                    |                 2 |              0.2065  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4149 | >20%                    |                 2 |              0.20745 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4172 | 15-20%                  |                 2 |              0.2086  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.419  | 15-20%                  |                10 |              0.0419  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4196 | <5%                     |                 2 |              0.2098  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4222 | >20%                    |                 2 |              0.2111  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4268 | >20%                    |                 5 |              0.08536 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | >20%                    |                 2 |              0.2141  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4365 | >20%                    |                 5 |              0.0873  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4553 | >20%                    |                 2 |              0.22765 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4555 | >20%                    |                 5 |              0.0911  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4561 | >20%                    |                 2 |              0.22805 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4683 | 15-20%                  |                 2 |              0.23415 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4736 | >20%                    |                 5 |              0.09472 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4767 | >20%                    |                 5 |              0.09534 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | >20%                    |                 5 |              0.09624 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4841 | >20%                    |                 5 |              0.09682 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4932 | 15-20%                  |                10 |              0.04932 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4967 | >20%                    |                 5 |              0.09934 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4972 | >20%                    |                 5 |              0.09944 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5015 | >20%                    |                 2 |              0.25075 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5043 | 15-20%                  |                10 |              0.05043 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5098 | >20%                    |                 5 |              0.10196 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5115 | 15-20%                  |                 2 |              0.25575 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5166 | >20%                    |                 5 |              0.10332 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5174 | 15-20%                  |                 5 |              0.10348 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.538  | 5-10%                   |                 5 |              0.1076  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5404 | >20%                    |                 2 |              0.2702  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5422 | >20%                    |                 5 |              0.10844 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5493 | 5-10%                   |                 2 |              0.27465 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.566  | >20%                    |                10 |              0.0566  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5745 | >20%                    |                 2 |              0.28725 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5793 | 10-15%                  |                 5 |              0.11586 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5806 | >20%                    |                10 |              0.05806 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5806 | <5%                     |                10 |              0.05806 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5934 | >20%                    |                 2 |              0.2967  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5975 | >20%                    |                10 |              0.05975 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.608  | >20%                    |                 5 |              0.1216  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6286 | 10-15%                  |                 2 |              0.3143  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6307 | >20%                    |                 5 |              0.12614 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6314 | >20%                    |                10 |              0.06314 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6334 | >20%                    |                 5 |              0.12668 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6386 | >20%                    |                10 |              0.06386 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6522 | >20%                    |                 5 |              0.13044 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6531 | >20%                    |                10 |              0.06531 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6604 | >20%                    |                10 |              0.06604 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.661  | >20%                    |                 5 |              0.1322  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6625 | 5-10%                   |                10 |              0.06625 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6739 | >20%                    |                10 |              0.06739 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6806 | >20%                    |                 5 |              0.13612 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6855 | >20%                    |                10 |              0.06855 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6856 | >20%                    |                 2 |              0.3428  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6885 | 5-10%                   |                 5 |              0.1377  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6942 | >20%                    |                 2 |              0.3471  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.719  | >20%                    |                 5 |              0.1438  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7317 | >20%                    |                 5 |              0.14634 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7323 | >20%                    |                 5 |              0.14646 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7326 | >20%                    |                10 |              0.07326 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7528 | >20%                    |                10 |              0.07528 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.753  | >20%                    |                10 |              0.0753  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7534 | >20%                    |                10 |              0.07534 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7558 | >20%                    |                10 |              0.07558 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7632 | 5-10%                   |                 2 |              0.3816  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7648 | >20%                    |                10 |              0.07648 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7695 | >20%                    |                 5 |              0.1539  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7735 | >20%                    |                10 |              0.07735 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7934 | >20%                    |                 5 |              0.15868 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8025 | 5-10%                   |                 2 |              0.40125 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8258 | >20%                    |                 2 |              0.4129  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.832  | >20%                    |                 2 |              0.416   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8365 | >20%                    |                10 |              0.08365 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8399 | >20%                    |                 5 |              0.16798 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8543 | >20%                    |                 5 |              0.17086 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8602 | >20%                    |                 2 |              0.4301  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8647 | >20%                    |                10 |              0.08647 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8659 | >20%                    |                10 |              0.08659 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8686 | 5-10%                   |                10 |              0.08686 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8724 | >20%                    |                10 |              0.08724 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8862 | >20%                    |                 2 |              0.4431  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9052 | 15-20%                  |                10 |              0.09052 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9169 | >20%                    |                10 |              0.09169 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9325 | >20%                    |                10 |              0.09325 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9467 | >20%                    |                10 |              0.09467 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9527 | 10-15%                  |                10 |              0.09527 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9573 | 15-20%                  |                10 |              0.09573 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9958 | 15-20%                  |                10 |              0.09958 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0262 | 5-10%                   |                10 |              0.10262 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.028  | >20%                    |                10 |              0.1028  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0421 | >20%                    |                10 |              0.10421 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0445 | >20%                    |                 5 |              0.2089  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.068  | >20%                    |                10 |              0.1068  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.071  | 10-15%                  |                 2 |              0.5355  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0718 | >20%                    |                 5 |              0.21436 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0734 | >20%                    |                10 |              0.10734 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1258 | >20%                    |                 5 |              0.22516 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1472 | 10-15%                  |                10 |              0.11472 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1724 | >20%                    |                 5 |              0.23448 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2981 | 15-20%                  |                10 |              0.12981 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3037 | 5-10%                   |                 2 |              0.65185 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3758 | >20%                    |                 5 |              0.27516 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.389  | 15-20%                  |                10 |              0.1389  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.39   | 15-20%                  |                 5 |              0.278   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4267 | >20%                    |                 2 |              0.71335 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.431  | >20%                    |                10 |              0.1431  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9117 | >20%                    |                10 |              0.19117 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.667  | >20%                    |                10 |              0.2667  |