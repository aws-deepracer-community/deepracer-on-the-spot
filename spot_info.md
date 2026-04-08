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

Data correct as of 2026-04-08 02:49:37.004157, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.18   | >20%                    |                 2 |              0.09    |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1975 | 15-20%                  |                 2 |              0.09875 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2104 | >20%                    |                 2 |              0.1052  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2212 | >20%                    |                 2 |              0.1106  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | >20%                    |                 2 |              0.12305 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | >20%                    |                 2 |              0.1244  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | >20%                    |                 2 |              0.13115 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2682 | 15-20%                  |                 5 |              0.05364 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2726 | 5-10%                   |                10 |              0.02726 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2727 | 15-20%                  |                 5 |              0.05454 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | 15-20%                  |                 2 |              0.1411  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.29   | >20%                    |                10 |              0.029   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3097 | >20%                    |                 2 |              0.15485 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3105 | >20%                    |                 5 |              0.0621  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.312  | 10-15%                  |                 2 |              0.156   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3125 | >20%                    |                 5 |              0.0625  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3127 | <5%                     |                 2 |              0.15635 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3171 | 5-10%                   |                10 |              0.03171 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3233 | 15-20%                  |                 5 |              0.06466 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3261 | 10-15%                  |                 2 |              0.16305 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3278 | >20%                    |                 2 |              0.1639  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.339  | 10-15%                  |                 2 |              0.1695  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3404 | <5%                     |                 2 |              0.1702  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3456 | 5-10%                   |                10 |              0.03456 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3465 | 15-20%                  |                 2 |              0.17325 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3475 | >20%                    |                 5 |              0.0695  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3483 | >20%                    |                 5 |              0.06966 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3504 | >20%                    |                 2 |              0.1752  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3588 | >20%                    |                10 |              0.03588 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3599 | >20%                    |                 2 |              0.17995 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3712 | 10-15%                  |                 2 |              0.1856  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.384  | >20%                    |                 2 |              0.192   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3931 | >20%                    |                 5 |              0.07862 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3966 | >20%                    |                 5 |              0.07932 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4008 | >20%                    |                 5 |              0.08016 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4064 | >20%                    |                 5 |              0.08128 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4075 | >20%                    |                 2 |              0.20375 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.415  | <5%                     |                 2 |              0.2075  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4193 | 10-15%                  |                 2 |              0.20965 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4208 | >20%                    |                 2 |              0.2104  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4269 | >20%                    |                 2 |              0.21345 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4336 | >20%                    |                 5 |              0.08672 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4337 | >20%                    |                 5 |              0.08674 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4347 | >20%                    |                 2 |              0.21735 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4361 | 15-20%                  |                 2 |              0.21805 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4386 | 15-20%                  |                 2 |              0.2193  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4414 | >20%                    |                 2 |              0.2207  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4498 | >20%                    |                 5 |              0.08996 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4545 | >20%                    |                 5 |              0.0909  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4648 | >20%                    |                 2 |              0.2324  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4687 | >20%                    |                 5 |              0.09374 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4691 | 15-20%                  |                 2 |              0.23455 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4809 | >20%                    |                 5 |              0.09618 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.481  | >20%                    |                 2 |              0.2405  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4823 | >20%                    |                 5 |              0.09646 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4829 | >20%                    |                 5 |              0.09658 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | >20%                    |                 5 |              0.09722 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4883 | >20%                    |                 5 |              0.09766 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5001 | >20%                    |                 5 |              0.10002 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5101 | >20%                    |                 2 |              0.25505 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5216 | >20%                    |                10 |              0.05216 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5325 | 5-10%                   |                 2 |              0.26625 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5331 | >20%                    |                 2 |              0.26655 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5372 | 5-10%                   |                 5 |              0.10744 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5454 | >20%                    |                10 |              0.05454 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5483 | 5-10%                   |                10 |              0.05483 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5485 | <5%                     |                 5 |              0.1097  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5527 | >20%                    |                 2 |              0.27635 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5625 | <5%                     |                10 |              0.05625 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5657 | >20%                    |                 5 |              0.11314 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5679 | >20%                    |                 2 |              0.28395 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.575  | 15-20%                  |                 5 |              0.115   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5865 | >20%                    |                 2 |              0.29325 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5882 | >20%                    |                10 |              0.05882 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5882 | >20%                    |                10 |              0.05882 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5912 | >20%                    |                 5 |              0.11824 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5922 | 10-15%                  |                 5 |              0.11844 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6092 | 5-10%                   |                 5 |              0.12184 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6121 | >20%                    |                 5 |              0.12242 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6129 | >20%                    |                10 |              0.06129 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.616  | 15-20%                  |                10 |              0.0616  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6227 | >20%                    |                 5 |              0.12454 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6279 | 10-15%                  |                 2 |              0.31395 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6347 | >20%                    |                10 |              0.06347 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6488 | >20%                    |                10 |              0.06488 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6501 | >20%                    |                 2 |              0.32505 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6511 | >20%                    |                 5 |              0.13022 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6563 | 5-10%                   |                 2 |              0.32815 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6673 | >20%                    |                10 |              0.06673 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6778 | >20%                    |                 5 |              0.13556 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6882 | >20%                    |                10 |              0.06882 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6938 | >20%                    |                 5 |              0.13876 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7013 | >20%                    |                 5 |              0.14026 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7146 | 15-20%                  |                10 |              0.07146 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7185 | >20%                    |                 5 |              0.1437  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7309 | >20%                    |                10 |              0.07309 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7348 | >20%                    |                10 |              0.07348 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7453 | >20%                    |                10 |              0.07453 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7544 | >20%                    |                 5 |              0.15088 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7556 | >20%                    |                 5 |              0.15112 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7626 | >20%                    |                 5 |              0.15252 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7695 | >20%                    |                 2 |              0.38475 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7925 | 15-20%                  |                10 |              0.07925 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7958 | >20%                    |                 5 |              0.15916 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7985 | >20%                    |                 2 |              0.39925 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8009 | >20%                    |                 5 |              0.16018 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8161 | 5-10%                   |                10 |              0.08161 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8187 | >20%                    |                10 |              0.08187 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8206 | >20%                    |                 5 |              0.16412 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8224 | >20%                    |                 5 |              0.16448 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8263 | >20%                    |                10 |              0.08263 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8282 | >20%                    |                10 |              0.08282 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8289 | >20%                    |                10 |              0.08289 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8419 | >20%                    |                10 |              0.08419 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8471 | 5-10%                   |                 2 |              0.42355 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8577 | >20%                    |                 5 |              0.17154 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8678 | >20%                    |                10 |              0.08678 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8795 | >20%                    |                10 |              0.08795 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8844 | >20%                    |                 5 |              0.17688 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8856 | 15-20%                  |                10 |              0.08856 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.888  | >20%                    |                 2 |              0.444   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8955 | >20%                    |                10 |              0.08955 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8955 | >20%                    |                10 |              0.08955 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9169 | >20%                    |                 2 |              0.45845 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.942  | 15-20%                  |                10 |              0.0942  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9461 | >20%                    |                 5 |              0.18922 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9534 | 10-15%                  |                10 |              0.09534 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9557 | >20%                    |                10 |              0.09557 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9962 | >20%                    |                10 |              0.09962 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0025 | 10-15%                  |                 2 |              0.50125 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.006  | >20%                    |                10 |              0.1006  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0176 | 5-10%                   |                10 |              0.10176 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0198 | >20%                    |                10 |              0.10198 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0353 | >20%                    |                10 |              0.10353 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0469 | 15-20%                  |                10 |              0.10469 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.109  | >20%                    |                 5 |              0.2218  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1148 | >20%                    |                10 |              0.11148 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1473 | >20%                    |                10 |              0.11473 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1944 | >20%                    |                 5 |              0.23888 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2122 | 10-15%                  |                10 |              0.12122 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2457 | 15-20%                  |                10 |              0.12457 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2858 | 15-20%                  |                10 |              0.12858 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4269 | >20%                    |                10 |              0.14269 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4486 | >20%                    |                 5 |              0.28972 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4583 | 5-10%                   |                 2 |              0.72915 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4766 | >20%                    |                 2 |              0.7383  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4817 | 15-20%                  |                 5 |              0.29634 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.6461 |                         |                 5 |              0.32922 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9664 | >20%                    |                10 |              0.19664 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.9811 |                         |                 2 |              0.99055 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.4021 |                         |                10 |              0.24021 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.028  | >20%                    |                10 |              0.3028  |