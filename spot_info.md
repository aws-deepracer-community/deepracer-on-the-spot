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

Data correct as of 2026-04-18 02:48:40.482132, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1886 | 15-20%                  |                 2 |              0.0943  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1911 | >20%                    |                 2 |              0.09555 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1913 | >20%                    |                 2 |              0.09565 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | >20%                    |                 2 |              0.1145  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2317 | >20%                    |                 2 |              0.11585 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2394 | 15-20%                  |                 5 |              0.04788 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | >20%                    |                 2 |              0.12725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2633 | >20%                    |                 2 |              0.13165 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2688 | 15-20%                  |                 5 |              0.05376 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2697 | 10-15%                  |                 2 |              0.13485 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2818 | 15-20%                  |                 2 |              0.1409  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3094 | >20%                    |                 2 |              0.1547  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3105 | 15-20%                  |                 2 |              0.15525 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.314  | 15-20%                  |                 5 |              0.0628  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3219 | >20%                    |                 5 |              0.06438 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3255 | 10-15%                  |                 2 |              0.16275 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3264 | >20%                    |                10 |              0.03264 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3308 | >20%                    |                 5 |              0.06616 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3332 | <5%                     |                 2 |              0.1666  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3343 | 10-15%                  |                 2 |              0.16715 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3429 | 5-10%                   |                10 |              0.03429 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3443 | >20%                    |                 5 |              0.06886 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3476 | 5-10%                   |                10 |              0.03476 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3507 | >20%                    |                10 |              0.03507 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3507 | 5-10%                   |                10 |              0.03507 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | >20%                    |                 2 |              0.1794  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.37   | >20%                    |                 5 |              0.074   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3714 | >20%                    |                 2 |              0.1857  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3748 | <5%                     |                10 |              0.03748 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3787 | >20%                    |                 5 |              0.07574 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3791 | >20%                    |                 2 |              0.18955 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.383  | >20%                    |                 2 |              0.1915  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | >20%                    |                 2 |              0.1922  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3869 | 10-15%                  |                 2 |              0.19345 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3978 | >20%                    |                 5 |              0.07956 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | >20%                    |                 5 |              0.0809  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.409  | <5%                     |                 2 |              0.2045  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.414  | >20%                    |                 5 |              0.0828  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4145 | >20%                    |                 2 |              0.20725 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.415  | >20%                    |                 2 |              0.2075  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.416  | <5%                     |                 2 |              0.208   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4171 | >20%                    |                 5 |              0.08342 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4184 | >20%                    |                 2 |              0.2092  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.42   | >20%                    |                 5 |              0.084   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.436  | >20%                    |                10 |              0.0436  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.445  | >20%                    |                 5 |              0.089   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4466 | >20%                    |                 5 |              0.08932 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.449  | >20%                    |                 5 |              0.0898  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4538 | 15-20%                  |                 2 |              0.2269  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4559 | >20%                    |                 5 |              0.09118 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4584 | 15-20%                  |                 2 |              0.2292  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4588 | 15-20%                  |                 2 |              0.2294  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4588 | 10-15%                  |                 2 |              0.2294  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4607 | >20%                    |                 2 |              0.23035 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4624 | >20%                    |                 2 |              0.2312  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4841 | >20%                    |                 5 |              0.09682 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | >20%                    |                 5 |              0.09692 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4899 | >20%                    |                 5 |              0.09798 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5016 | >20%                    |                 5 |              0.10032 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5083 | >20%                    |                 2 |              0.25415 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5094 | >20%                    |                 2 |              0.2547  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5199 | >20%                    |                 5 |              0.10398 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5249 | >20%                    |                 2 |              0.26245 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5271 | >20%                    |                10 |              0.05271 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.528  | >20%                    |                10 |              0.0528  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5292 | 5-10%                   |                 2 |              0.2646  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5304 | 5-10%                   |                 5 |              0.10608 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.535  | >20%                    |                 5 |              0.107   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5408 | 15-20%                  |                 5 |              0.10816 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5463 | >20%                    |                 2 |              0.27315 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5475 | >20%                    |                10 |              0.05475 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5499 | 5-10%                   |                 2 |              0.27495 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5691 | <5%                     |                 5 |              0.11382 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5724 | 10-15%                  |                 5 |              0.11448 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5726 | 5-10%                   |                 5 |              0.11452 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5802 | >20%                    |                10 |              0.05802 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5945 | >20%                    |                 2 |              0.29725 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6016 | >20%                    |                 5 |              0.12032 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6022 | >20%                    |                10 |              0.06022 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6062 | >20%                    |                 5 |              0.12124 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6249 | 10-15%                  |                 2 |              0.31245 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6358 | >20%                    |                10 |              0.06358 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6394 | >20%                    |                 5 |              0.12788 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6457 | >20%                    |                 5 |              0.12914 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6585 | 5-10%                   |                10 |              0.06585 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6728 | >20%                    |                 5 |              0.13456 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6737 | >20%                    |                10 |              0.06737 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6774 | >20%                    |                 2 |              0.3387  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6788 | >20%                    |                 2 |              0.3394  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6991 | >20%                    |                10 |              0.06991 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7069 | >20%                    |                 5 |              0.14138 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7159 | >20%                    |                 2 |              0.35795 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.718  | >20%                    |                 5 |              0.1436  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.724  | >20%                    |                10 |              0.0724  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7354 | >20%                    |                10 |              0.07354 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7418 | >20%                    |                10 |              0.07418 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7447 | >20%                    |                 5 |              0.14894 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7517 | >20%                    |                10 |              0.07517 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7545 | >20%                    |                 5 |              0.1509  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7575 | >20%                    |                10 |              0.07575 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7871 | 15-20%                  |                10 |              0.07871 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7906 | >20%                    |                 5 |              0.15812 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7926 | 5-10%                   |                10 |              0.07926 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7944 | >20%                    |                 2 |              0.3972  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8017 | >20%                    |                 5 |              0.16034 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8031 | >20%                    |                10 |              0.08031 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8054 | >20%                    |                10 |              0.08054 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8228 | >20%                    |                10 |              0.08228 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8318 | 15-20%                  |                10 |              0.08318 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8408 | >20%                    |                 5 |              0.16816 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8459 | >20%                    |                 5 |              0.16918 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8638 | 15-20%                  |                10 |              0.08638 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8651 | >20%                    |                10 |              0.08651 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8673 | 5-10%                   |                 2 |              0.43365 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9017 | 15-20%                  |                10 |              0.09017 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9092 | >20%                    |                 5 |              0.18184 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9357 | 15-20%                  |                10 |              0.09357 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9395 | >20%                    |                10 |              0.09395 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9471 | >20%                    |                10 |              0.09471 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9483 | >20%                    |                10 |              0.09483 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9581 | >20%                    |                10 |              0.09581 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9638 | >20%                    |                10 |              0.09638 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9671 | 10-15%                  |                10 |              0.09671 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0101 | >20%                    |                10 |              0.10101 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0153 | 10-15%                  |                 2 |              0.50765 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0175 | >20%                    |                 5 |              0.2035  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0253 | 15-20%                  |                10 |              0.10253 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0298 | 5-10%                   |                10 |              0.10298 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0416 | >20%                    |                 5 |              0.20832 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.084  | >20%                    |                10 |              0.1084  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0963 | 10-15%                  |                10 |              0.10963 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1295 | >20%                    |                10 |              0.11295 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1489 | >20%                    |                 5 |              0.22978 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1849 | >20%                    |                10 |              0.11849 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2065 |                         |                 5 |              0.2413  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2745 | >20%                    |                 2 |              0.63725 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3001 | >20%                    |                 5 |              0.26002 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3512 | 15-20%                  |                10 |              0.13512 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.355  | >20%                    |                 5 |              0.271   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3662 | 15-20%                  |                10 |              0.13662 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.4271 |                         |                 2 |              0.71355 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.4727 | >20%                    |                10 |              0.14727 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.523  | >20%                    |                10 |              0.1523  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5507 | >20%                    |                10 |              0.15507 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5705 |                         |                10 |              0.15705 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6202 | 15-20%                  |                 5 |              0.32404 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6741 | 5-10%                   |                 2 |              0.83705 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1568 | >20%                    |                10 |              0.31568 |