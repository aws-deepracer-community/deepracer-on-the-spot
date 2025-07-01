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

Data correct as of 2025-07-01 02:08:29.777784, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1652 | <5%                     |                 2 |              0.0826  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1664 | >20%                    |                 5 |              0.03328 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.184  | >20%                    |                 5 |              0.0368  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1943 | 15-20%                  |                 5 |              0.03886 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1978 | 15-20%                  |                 2 |              0.0989  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2024 | >20%                    |                 5 |              0.04048 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2113 | >20%                    |                 2 |              0.10565 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2121 | >20%                    |                 2 |              0.10605 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2123 | 15-20%                  |                 2 |              0.10615 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | >20%                    |                 2 |              0.11315 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2295 | 15-20%                  |                 2 |              0.11475 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | >20%                    |                 2 |              0.11485 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | 5-10%                   |                 2 |              0.1175  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.24   | 15-20%                  |                 2 |              0.12    |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2506 | <5%                     |                 5 |              0.05012 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2514 | >20%                    |                10 |              0.02514 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | >20%                    |                 2 |              0.127   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2745 | >20%                    |                 5 |              0.0549  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2763 | 5-10%                   |                10 |              0.02763 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | <5%                     |                 2 |              0.1489  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3006 | >20%                    |                 2 |              0.1503  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 15-20%                  |                10 |              0.03045 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3101 | 15-20%                  |                 5 |              0.06202 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3125 | >20%                    |                 2 |              0.15625 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | >20%                    |                 2 |              0.1568  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3165 | >20%                    |                 2 |              0.15825 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.318  | >20%                    |                 2 |              0.159   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3339 | >20%                    |                10 |              0.03339 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3354 | 10-15%                  |                 2 |              0.1677  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.338  | >20%                    |                 2 |              0.169   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3407 | <5%                     |                 2 |              0.17035 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | 15-20%                  |                 5 |              0.07038 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3546 | 10-15%                  |                 2 |              0.1773  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3585 | >20%                    |                 5 |              0.0717  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3587 | >20%                    |                 2 |              0.17935 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3679 | 5-10%                   |                 2 |              0.18395 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | >20%                    |                 5 |              0.07502 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.378  | >20%                    |                 2 |              0.189   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.388  | 10-15%                  |                 2 |              0.194   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3978 | >20%                    |                 2 |              0.1989  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3994 | >20%                    |                 5 |              0.07988 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4083 | >20%                    |                 2 |              0.20415 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.42   | 10-15%                  |                 5 |              0.084   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4217 | <5%                     |                 2 |              0.21085 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4256 | 15-20%                  |                10 |              0.04256 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4268 | 10-15%                  |                 2 |              0.2134  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4381 | <5%                     |                10 |              0.04381 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4383 | >20%                    |                 5 |              0.08766 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.439  | >20%                    |                 5 |              0.0878  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | >20%                    |                 2 |              0.22635 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4565 | 15-20%                  |                 5 |              0.0913  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4608 | >20%                    |                 5 |              0.09216 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4632 | >20%                    |                 2 |              0.2316  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4633 | 5-10%                   |                 2 |              0.23165 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4664 | >20%                    |                 2 |              0.2332  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.468  | >20%                    |                 2 |              0.234   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4702 | <5%                     |                 5 |              0.09404 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4707 | >20%                    |                 5 |              0.09414 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | 10-15%                  |                 5 |              0.09462 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4745 | 5-10%                   |                 2 |              0.23725 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4757 | 10-15%                  |                 5 |              0.09514 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4767 | >20%                    |                 5 |              0.09534 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.478  | >20%                    |                 5 |              0.0956  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4795 | 15-20%                  |                 2 |              0.23975 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | <5%                     |                 5 |              0.0977  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4914 | >20%                    |                 2 |              0.2457  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5024 | >20%                    |                 2 |              0.2512  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5068 | >20%                    |                 2 |              0.2534  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5069 | >20%                    |                 2 |              0.25345 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5127 | >20%                    |                 2 |              0.25635 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5129 | >20%                    |                 2 |              0.25645 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.521  | >20%                    |                 5 |              0.1042  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5252 | 5-10%                   |                 5 |              0.10504 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5289 | 15-20%                  |                 5 |              0.10578 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.529  | 10-15%                  |                 2 |              0.2645  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5324 | <5%                     |                 5 |              0.10648 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5361 | >20%                    |                10 |              0.05361 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5362 | 10-15%                  |                 5 |              0.10724 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5441 | >20%                    |                 5 |              0.10882 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5448 | >20%                    |                 2 |              0.2724  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5501 | >20%                    |                10 |              0.05501 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5507 | 15-20%                  |                 2 |              0.27535 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5625 | 15-20%                  |                 2 |              0.28125 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5722 | >20%                    |                 5 |              0.11444 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5729 | >20%                    |                10 |              0.05729 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5794 | >20%                    |                 5 |              0.11588 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5804 | >20%                    |                 2 |              0.2902  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.586  | >20%                    |                 5 |              0.1172  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5943 | >20%                    |                 5 |              0.11886 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6012 | <5%                     |                 5 |              0.12024 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6041 | <5%                     |                 2 |              0.30205 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6064 | >20%                    |                 5 |              0.12128 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.615  | >20%                    |                10 |              0.0615  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6168 | >20%                    |                 5 |              0.12336 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6189 | >20%                    |                 5 |              0.12378 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6191 | 10-15%                  |                 5 |              0.12382 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6242 | >20%                    |                 5 |              0.12484 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6286 | >20%                    |                 5 |              0.12572 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6292 | >20%                    |                 5 |              0.12584 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6294 | >20%                    |                 5 |              0.12588 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6387 | >20%                    |                10 |              0.06387 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6413 | 5-10%                   |                 2 |              0.32065 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6442 | 10-15%                  |                10 |              0.06442 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6577 | >20%                    |                 5 |              0.13154 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6611 | >20%                    |                 2 |              0.33055 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6614 | 10-15%                  |                 2 |              0.3307  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6681 | >20%                    |                10 |              0.06681 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6765 | <5%                     |                 5 |              0.1353  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6791 | <5%                     |                 5 |              0.13582 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6823 | >20%                    |                 5 |              0.13646 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6946 | 15-20%                  |                10 |              0.06946 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6994 | >20%                    |                 5 |              0.13988 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7104 | >20%                    |                10 |              0.07104 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7106 | <5%                     |                 5 |              0.14212 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7109 | 10-15%                  |                 5 |              0.14218 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7138 | >20%                    |                 5 |              0.14276 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.72   | <5%                     |                 5 |              0.144   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7218 | >20%                    |                10 |              0.07218 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7298 | 10-15%                  |                 5 |              0.14596 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7458 | 15-20%                  |                10 |              0.07458 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7674 | >20%                    |                10 |              0.07674 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7793 | >20%                    |                10 |              0.07793 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.78   | 5-10%                   |                 5 |              0.156   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.781  | >20%                    |                10 |              0.0781  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.783  | >20%                    |                 5 |              0.1566  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7898 | 10-15%                  |                10 |              0.07898 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7932 | 15-20%                  |                10 |              0.07932 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7944 | <5%                     |                10 |              0.07944 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7953 | >20%                    |                10 |              0.07953 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8009 | 15-20%                  |                10 |              0.08009 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8048 | <5%                     |                10 |              0.08048 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | >20%                    |                10 |              0.08221 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8262 | >20%                    |                10 |              0.08262 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8526 | <5%                     |                10 |              0.08526 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8663 | <5%                     |                10 |              0.08663 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8668 | >20%                    |                10 |              0.08668 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8684 | 15-20%                  |                10 |              0.08684 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8715 | >20%                    |                10 |              0.08715 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8887 | >20%                    |                10 |              0.08887 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8892 | >20%                    |                10 |              0.08892 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8952 | >20%                    |                10 |              0.08952 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8964 | >20%                    |                10 |              0.08964 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9151 | >20%                    |                10 |              0.09151 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.917  | >20%                    |                10 |              0.0917  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9293 | >20%                    |                10 |              0.09293 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9316 | 15-20%                  |                10 |              0.09316 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9519 | >20%                    |                10 |              0.09519 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9713 | >20%                    |                10 |              0.09713 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9943 | >20%                    |                10 |              0.09943 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9968 | >20%                    |                 2 |              0.4984  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0118 | >20%                    |                10 |              0.10118 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0162 | >20%                    |                10 |              0.10162 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.027  | >20%                    |                 2 |              0.5135  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.06   | >20%                    |                 5 |              0.212   |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0656 | 15-20%                  |                10 |              0.10656 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0668 | <5%                     |                10 |              0.10668 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0675 | 10-15%                  |                10 |              0.10675 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0834 | <5%                     |                 2 |              0.5417  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0979 | >20%                    |                 2 |              0.54895 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1043 | >20%                    |                10 |              0.11043 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1116 | 15-20%                  |                10 |              0.11116 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1643 | >20%                    |                10 |              0.11643 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1876 | 15-20%                  |                10 |              0.11876 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2016 | 10-15%                  |                10 |              0.12016 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2504 | >20%                    |                 2 |              0.6252  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2544 | >20%                    |                10 |              0.12544 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2629 | <5%                     |                 5 |              0.25258 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3133 | >20%                    |                 5 |              0.26266 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3381 | >20%                    |                 5 |              0.26762 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3493 | >20%                    |                 5 |              0.26986 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4136 | <5%                     |                 5 |              0.28272 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5679 | 10-15%                  |                10 |              0.15679 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8662 | <5%                     |                10 |              0.18662 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8663 | >20%                    |                10 |              0.18663 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.132  | <5%                     |                10 |              0.2132  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.2355 | <5%                     |                 2 |              1.11775 |