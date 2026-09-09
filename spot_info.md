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

Data correct as of 2026-09-09 03:56:16.931033, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1275 | >20%                    |                 2 |              0.06375 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.169  | 15-20%                  |                 2 |              0.0845  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2086 | 15-20%                  |                 5 |              0.04172 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2113 | >20%                    |                 2 |              0.10565 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2121 | >20%                    |                 2 |              0.10605 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2121 | >20%                    |                 5 |              0.04242 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2564 | 15-20%                  |                 5 |              0.05128 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2597 | >20%                    |                 2 |              0.12985 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2608 | >20%                    |                 2 |              0.1304  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | 15-20%                  |                 2 |              0.1385  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2832 | >20%                    |                 2 |              0.1416  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.292  | >20%                    |                 2 |              0.146   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | >20%                    |                 2 |              0.14605 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2986 | 10-15%                  |                 2 |              0.1493  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3036 | >20%                    |                 2 |              0.1518  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3396 | >20%                    |                 5 |              0.06792 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3674 | >20%                    |                 2 |              0.1837  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3685 | 10-15%                  |                10 |              0.03685 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3699 | 15-20%                  |                 2 |              0.18495 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3711 | >20%                    |                10 |              0.03711 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3732 | >20%                    |                 5 |              0.07464 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | <5%                     |                 2 |              0.19045 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3867 |                         |                 5 |              0.07734 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3887 | >20%                    |                 2 |              0.19435 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.39   | 10-15%                  |                 2 |              0.195   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4047 | >20%                    |                 5 |              0.08094 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4082 | >20%                    |                 5 |              0.08164 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4113 | 15-20%                  |                 2 |              0.20565 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | >20%                    |                 2 |              0.2057  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4124 | >20%                    |                 5 |              0.08248 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4177 | >20%                    |                 2 |              0.20885 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4237 | >20%                    |                 2 |              0.21185 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4342 | >20%                    |                 2 |              0.2171  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4353 | >20%                    |                 5 |              0.08706 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4732 | 10-15%                  |                 2 |              0.2366  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.476  | >20%                    |                10 |              0.0476  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | >20%                    |                 5 |              0.0966  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | >20%                    |                 5 |              0.09722 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4888 | >20%                    |                 2 |              0.2444  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4907 | >20%                    |                 5 |              0.09814 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.494  |                         |                 2 |              0.247   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5    | >20%                    |                 5 |              0.1     |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5077 | >20%                    |                 5 |              0.10154 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5086 | <5%                     |                 2 |              0.2543  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5087 | 15-20%                  |                 2 |              0.25435 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5108 | >20%                    |                 2 |              0.2554  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5138 | >20%                    |                10 |              0.05138 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5158 | >20%                    |                 5 |              0.10316 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5176 | >20%                    |                10 |              0.05176 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5188 | >20%                    |                 5 |              0.10376 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5242 | >20%                    |                 5 |              0.10484 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5386 | >20%                    |                 2 |              0.2693  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5466 | >20%                    |                 2 |              0.2733  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5467 | 5-10%                   |                10 |              0.05467 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5625 | >20%                    |                 2 |              0.28125 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5658 | >20%                    |                 2 |              0.2829  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | >20%                    |                 5 |              0.1158  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5817 | >20%                    |                 5 |              0.11634 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6034 | 5-10%                   |                10 |              0.06034 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6055 | >20%                    |                 2 |              0.30275 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6067 | 10-15%                  |                 5 |              0.12134 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6122 | >20%                    |                10 |              0.06122 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6233 | >20%                    |                 5 |              0.12466 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6266 | >20%                    |                 5 |              0.12532 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6314 | 10-15%                  |                 2 |              0.3157  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6383 | >20%                    |                 2 |              0.31915 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6478 | 5-10%                   |                 5 |              0.12956 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6536 | 15-20%                  |                10 |              0.06536 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6654 | >20%                    |                10 |              0.06654 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6694 | >20%                    |                 5 |              0.13388 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6745 | 15-20%                  |                10 |              0.06745 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6808 | <5%                     |                 2 |              0.3404  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6828 | 5-10%                   |                 2 |              0.3414  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6927 | >20%                    |                 5 |              0.13854 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6959 | >20%                    |                 5 |              0.13918 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7042 | >20%                    |                 5 |              0.14084 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7115 | >20%                    |                10 |              0.07115 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7199 | >20%                    |                 5 |              0.14398 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7366 | 15-20%                  |                 5 |              0.14732 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.745  | >20%                    |                 5 |              0.149   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7473 | >20%                    |                10 |              0.07473 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7515 | >20%                    |                 2 |              0.37575 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7666 | >20%                    |                 5 |              0.15332 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8091 | 15-20%                  |                10 |              0.08091 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8125 | 15-20%                  |                 2 |              0.40625 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8226 | >20%                    |                10 |              0.08226 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8274 | <5%                     |                10 |              0.08274 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8287 | >20%                    |                10 |              0.08287 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8337 | 15-20%                  |                 5 |              0.16674 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8405 | >20%                    |                 5 |              0.1681  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8683 | >20%                    |                 2 |              0.43415 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8704 | 10-15%                  |                 2 |              0.4352  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.884  | 5-10%                   |                10 |              0.0884  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8949 | >20%                    |                 5 |              0.17898 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9074 | >20%                    |                 2 |              0.4537  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9222 | <5%                     |                 5 |              0.18444 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9378 |                         |                 2 |              0.4689  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9536 | 10-15%                  |                 2 |              0.4768  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9716 | >20%                    |                10 |              0.09716 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9772 | >20%                    |                10 |              0.09772 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9909 | >20%                    |                10 |              0.09909 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9953 | >20%                    |                10 |              0.09953 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0045 | >20%                    |                10 |              0.10045 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0092 | 10-15%                  |                 2 |              0.5046  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0115 | >20%                    |                10 |              0.10115 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0305 | >20%                    |                10 |              0.10305 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0391 | 15-20%                  |                10 |              0.10391 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0456 | >20%                    |                 5 |              0.20912 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0459 | >20%                    |                10 |              0.10459 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0953 | 15-20%                  |                10 |              0.10953 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1141 | >20%                    |                 5 |              0.22282 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1166 | 5-10%                   |                10 |              0.11166 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1409 | >20%                    |                10 |              0.11409 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1438 | >20%                    |                 5 |              0.22876 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1485 | 5-10%                   |                 2 |              0.57425 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1674 | >20%                    |                 2 |              0.5837  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1693 | >20%                    |                10 |              0.11693 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1834 |                         |                 2 |              0.5917  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1842 | >20%                    |                 5 |              0.23684 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2109 | >20%                    |                10 |              0.12109 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2192 | >20%                    |                10 |              0.12192 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2263 |                         |                 5 |              0.24526 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.2364 | >20%                    |                 5 |              0.24728 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2495 | >20%                    |                10 |              0.12495 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2625 | >20%                    |                 5 |              0.2525  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2991 |                         |                 5 |              0.25982 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.3104 |                         |                10 |              0.13104 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3306 | >20%                    |                10 |              0.13306 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3475 | 10-15%                  |                10 |              0.13475 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3582 | >20%                    |                10 |              0.13582 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3666 | >20%                    |                10 |              0.13666 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3925 | >20%                    |                 2 |              0.69625 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.396  | 15-20%                  |                10 |              0.1396  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.459  | >20%                    |                10 |              0.1459  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5088 | 5-10%                   |                 5 |              0.30176 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5089 | 15-20%                  |                10 |              0.15089 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5638 | >20%                    |                 2 |              0.7819  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5942 | >20%                    |                10 |              0.15942 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6314 | >20%                    |                10 |              0.16314 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6387 |                         |                10 |              0.16387 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6856 | >20%                    |                 5 |              0.33712 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.822  | >20%                    |                 5 |              0.3644  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8774 | >20%                    |                 5 |              0.37548 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9498 |                         |                10 |              0.19498 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9555 | 15-20%                  |                10 |              0.19555 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0254 | 5-10%                   |                 2 |              1.0127  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1104 | 15-20%                  |                 5 |              0.42208 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.1226 | 5-10%                   |                 2 |              1.0613  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2024 | 5-10%                   |                10 |              0.22024 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.656  | >20%                    |                10 |              0.2656  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.7353 | >20%                    |                10 |              0.27353 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0107 | >20%                    |                10 |              0.30107 |