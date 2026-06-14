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

Data correct as of 2026-06-14 04:39:52.682377, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1388 | >20%                    |                 2 |              0.0694  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1657 | >20%                    |                 2 |              0.08285 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1773 | 15-20%                  |                 2 |              0.08865 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.192  | >20%                    |                 2 |              0.096   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | >20%                    |                 2 |              0.1153  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2334 | >20%                    |                 2 |              0.1167  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2338 | >20%                    |                 5 |              0.04676 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | >20%                    |                 2 |              0.1173  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.239  | 15-20%                  |                 2 |              0.1195  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2497 | >20%                    |                 2 |              0.12485 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2503 | >20%                    |                 5 |              0.05006 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | >20%                    |                 2 |              0.1277  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2559 | 10-15%                  |                 2 |              0.12795 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.264  | >20%                    |                 2 |              0.132   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2805 | 10-15%                  |                 2 |              0.14025 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2818 | 5-10%                   |                10 |              0.02818 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2867 | 15-20%                  |                 2 |              0.14335 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2961 | 15-20%                  |                 5 |              0.05922 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2985 | >20%                    |                 2 |              0.14925 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3084 | >20%                    |                 5 |              0.06168 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3226 | 5-10%                   |                10 |              0.03226 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3305 | >20%                    |                10 |              0.03305 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3313 | 10-15%                  |                 2 |              0.16565 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3335 | <5%                     |                 2 |              0.16675 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3378 | >20%                    |                 5 |              0.06756 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3388 | >20%                    |                10 |              0.03388 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3438 | >20%                    |                 2 |              0.1719  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3444 | >20%                    |                 2 |              0.1722  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | >20%                    |                 5 |              0.07128 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3624 | 5-10%                   |                10 |              0.03624 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3681 | >20%                    |                 2 |              0.18405 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3688 | >20%                    |                 5 |              0.07376 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3729 | >20%                    |                 5 |              0.07458 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | >20%                    |                 2 |              0.1873  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3791 | 15-20%                  |                 5 |              0.07582 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3793 | >20%                    |                 2 |              0.18965 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3797 | >20%                    |                 5 |              0.07594 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3842 | >20%                    |                 5 |              0.07684 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3849 | >20%                    |                 5 |              0.07698 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3857 | >20%                    |                10 |              0.03857 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4089 | >20%                    |                 5 |              0.08178 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4126 | >20%                    |                 2 |              0.2063  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4174 | >20%                    |                 2 |              0.2087  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4231 | >20%                    |                10 |              0.04231 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4247 | <5%                     |                 2 |              0.21235 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | >20%                    |                 5 |              0.08512 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.447  | >20%                    |                 5 |              0.0894  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.448  | >20%                    |                10 |              0.0448  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4507 | 15-20%                  |                 2 |              0.22535 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | <5%                     |                 2 |              0.2276  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4574 | 10-15%                  |                 2 |              0.2287  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.46   | >20%                    |                 2 |              0.23    |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4774 |                         |                 2 |              0.2387  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4822 | >20%                    |                 2 |              0.2411  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4836 | 5-10%                   |                 2 |              0.2418  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4867 | 15-20%                  |                 5 |              0.09734 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4877 | >20%                    |                 5 |              0.09754 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4905 | <5%                     |                10 |              0.04905 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4967 | 5-10%                   |                 2 |              0.24835 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5026 | >20%                    |                 5 |              0.10052 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5056 | 15-20%                  |                 2 |              0.2528  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.51   | 15-20%                  |                 2 |              0.255   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5145 | 5-10%                   |                 5 |              0.1029  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5156 | 10-15%                  |                 2 |              0.2578  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5249 | >20%                    |                 2 |              0.26245 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.533  | >20%                    |                10 |              0.0533  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5335 | >20%                    |                 5 |              0.1067  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5392 | >20%                    |                10 |              0.05392 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5425 | >20%                    |                 2 |              0.27125 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5434 | >20%                    |                 5 |              0.10868 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.545  | <5%                     |                 5 |              0.109   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5468 | 10-15%                  |                 5 |              0.10936 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5635 | >20%                    |                 2 |              0.28175 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5738 | >20%                    |                 5 |              0.11476 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5762 | >20%                    |                 2 |              0.2881  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5764 | >20%                    |                 5 |              0.11528 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5792 | >20%                    |                 5 |              0.11584 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5809 | >20%                    |                 5 |              0.11618 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5968 |                         |                 5 |              0.11936 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6097 | >20%                    |                 5 |              0.12194 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6356 | 10-15%                  |                10 |              0.06356 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.642  | 15-20%                  |                10 |              0.0642  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6463 | >20%                    |                 5 |              0.12926 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.656  | >20%                    |                10 |              0.0656  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6573 | 5-10%                   |                10 |              0.06573 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.663  | >20%                    |                10 |              0.0663  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6866 | >20%                    |                 2 |              0.3433  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6885 | >20%                    |                 5 |              0.1377  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6895 | >20%                    |                 5 |              0.1379  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6915 | 15-20%                  |                10 |              0.06915 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7031 | >20%                    |                 2 |              0.35155 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.71   | >20%                    |                 5 |              0.142   |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7123 | >20%                    |                 2 |              0.35615 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7156 | >20%                    |                 5 |              0.14312 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7255 | >20%                    |                10 |              0.07255 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7282 | >20%                    |                 5 |              0.14564 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7291 | >20%                    |                 5 |              0.14582 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7297 | 5-10%                   |                10 |              0.07297 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7311 | >20%                    |                10 |              0.07311 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7429 | >20%                    |                 5 |              0.14858 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7468 | >20%                    |                 2 |              0.3734  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7566 | >20%                    |                10 |              0.07566 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7669 | >20%                    |                 5 |              0.15338 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7702 | >20%                    |                10 |              0.07702 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7882 | >20%                    |                10 |              0.07882 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7973 | 5-10%                   |                 5 |              0.15946 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.798  | >20%                    |                10 |              0.0798  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8107 | >20%                    |                10 |              0.08107 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8201 | 15-20%                  |                10 |              0.08201 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8317 | >20%                    |                10 |              0.08317 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8388 | >20%                    |                 5 |              0.16776 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8398 |                         |                10 |              0.08398 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.84   |                         |                 2 |              0.42    |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8401 | 15-20%                  |                10 |              0.08401 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8407 | >20%                    |                10 |              0.08407 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8408 | >20%                    |                 5 |              0.16816 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8453 | 15-20%                  |                10 |              0.08453 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8476 | >20%                    |                10 |              0.08476 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9018 | >20%                    |                10 |              0.09018 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9079 | 5-10%                   |                 2 |              0.45395 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9353 | >20%                    |                10 |              0.09353 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9384 | >20%                    |                10 |              0.09384 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9388 | >20%                    |                 5 |              0.18776 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9594 | >20%                    |                10 |              0.09594 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9705 | >20%                    |                 5 |              0.1941  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9991 | >20%                    |                 5 |              0.19982 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0011 | >20%                    |                 2 |              0.50055 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0057 | >20%                    |                10 |              0.10057 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.02   | 10-15%                  |                 2 |              0.51    |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0345 | 10-15%                  |                 2 |              0.51725 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0446 |                         |                 5 |              0.20892 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0475 | >20%                    |                10 |              0.10475 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.056  | >20%                    |                 5 |              0.2112  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1002 | 15-20%                  |                10 |              0.11002 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1155 | 5-10%                   |                10 |              0.11155 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1744 | >20%                    |                10 |              0.11744 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1921 | >20%                    |                10 |              0.11921 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2187 | >20%                    |                10 |              0.12187 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2465 | 5-10%                   |                 2 |              0.62325 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3387 | >20%                    |                10 |              0.13387 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3526 | 15-20%                  |                 5 |              0.27052 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4005 | >20%                    |                10 |              0.14005 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4047 | 10-15%                  |                10 |              0.14047 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4107 | 15-20%                  |                10 |              0.14107 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4127 | >20%                    |                10 |              0.14127 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4609 | 15-20%                  |                10 |              0.14609 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4846 | >20%                    |                 5 |              0.29692 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5667 | >20%                    |                 5 |              0.31334 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8959 |                         |                10 |              0.18959 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2068 | >20%                    |                10 |              0.22068 |