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

Data correct as of 2025-12-13 01:53:13.874745, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1195 | >20%                    |                 2 |              0.05975 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1546 | >20%                    |                 2 |              0.0773  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1588 | <5%                     |                 2 |              0.0794  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1643 | 15-20%                  |                 2 |              0.08215 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1819 | >20%                    |                 2 |              0.09095 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1919 | 5-10%                   |                 5 |              0.03838 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1964 | >20%                    |                 2 |              0.0982  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1969 | >20%                    |                 2 |              0.09845 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2169 | >20%                    |                 5 |              0.04338 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2253 | >20%                    |                 5 |              0.04506 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | >20%                    |                 2 |              0.11955 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | >20%                    |                 2 |              0.1242  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2514 | 5-10%                   |                10 |              0.02514 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2642 | 10-15%                  |                 2 |              0.1321  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2649 | 10-15%                  |                 5 |              0.05298 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2688 | 5-10%                   |                 2 |              0.1344  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2769 | <5%                     |                 5 |              0.05538 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | >20%                    |                 2 |              0.139   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2839 | 15-20%                  |                 2 |              0.14195 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | >20%                    |                 2 |              0.14445 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | 10-15%                  |                 2 |              0.1486  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | >20%                    |                 2 |              0.14875 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3056 | >20%                    |                 5 |              0.06112 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3125 | 10-15%                  |                 2 |              0.15625 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3126 | >20%                    |                 2 |              0.1563  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3142 | >20%                    |                 5 |              0.06284 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3243 | >20%                    |                 2 |              0.16215 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3278 | 10-15%                  |                10 |              0.03278 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3374 | >20%                    |                 2 |              0.1687  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3466 | 15-20%                  |                 2 |              0.1733  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3509 | 5-10%                   |                10 |              0.03509 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3535 | <5%                     |                 5 |              0.0707  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3578 | >20%                    |                 2 |              0.1789  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3592 | >20%                    |                10 |              0.03592 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3594 | >20%                    |                 2 |              0.1797  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3632 | 5-10%                   |                 2 |              0.1816  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3654 | >20%                    |                 5 |              0.07308 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3729 | >20%                    |                 2 |              0.18645 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3822 | >20%                    |                 5 |              0.07644 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3869 | <5%                     |                10 |              0.03869 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3875 | >20%                    |                 5 |              0.0775  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3892 | >20%                    |                 2 |              0.1946  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3901 | >20%                    |                10 |              0.03901 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3926 | >20%                    |                 5 |              0.07852 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3979 | >20%                    |                 5 |              0.07958 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4    | 15-20%                  |                 5 |              0.08    |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4007 | >20%                    |                 2 |              0.20035 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | <5%                     |                 2 |              0.2028  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4069 | 10-15%                  |                 2 |              0.20345 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4071 | >20%                    |                 5 |              0.08142 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4076 | >20%                    |                10 |              0.04076 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4089 | 15-20%                  |                 5 |              0.08178 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4135 | >20%                    |                10 |              0.04135 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4137 | 15-20%                  |                10 |              0.04137 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4211 | >20%                    |                 5 |              0.08422 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4228 | >20%                    |                 2 |              0.2114  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4262 | <5%                     |                 2 |              0.2131  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4278 | 10-15%                  |                 2 |              0.2139  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4304 | 10-15%                  |                10 |              0.04304 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4306 | >20%                    |                 2 |              0.2153  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4315 | <5%                     |                 2 |              0.21575 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4464 | >20%                    |                 2 |              0.2232  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.452  | >20%                    |                 2 |              0.226   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4527 | 15-20%                  |                 5 |              0.09054 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4538 | 15-20%                  |                 2 |              0.2269  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4572 | 15-20%                  |                 5 |              0.09144 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4572 | >20%                    |                 5 |              0.09144 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4612 | 15-20%                  |                 5 |              0.09224 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4641 | >20%                    |                 5 |              0.09282 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4699 | <5%                     |                10 |              0.04699 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4724 | >20%                    |                 2 |              0.2362  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4733 | >20%                    |                 5 |              0.09466 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4784 | >20%                    |                 2 |              0.2392  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4843 | 15-20%                  |                 2 |              0.24215 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4913 | >20%                    |                 2 |              0.24565 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4929 | >20%                    |                 5 |              0.09858 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5005 | 5-10%                   |                 5 |              0.1001  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5036 | <5%                     |                10 |              0.05036 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5102 | >20%                    |                 2 |              0.2551  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | >20%                    |                 5 |              0.10232 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5135 | 15-20%                  |                 2 |              0.25675 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5201 | >20%                    |                 5 |              0.10402 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5208 | >20%                    |                 5 |              0.10416 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5311 | 15-20%                  |                 5 |              0.10622 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.534  | >20%                    |                 2 |              0.267   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5381 | >20%                    |                 5 |              0.10762 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5392 | >20%                    |                 2 |              0.2696  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5396 | >20%                    |                 5 |              0.10792 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5475 | <5%                     |                 5 |              0.1095  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5612 | >20%                    |                 5 |              0.11224 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5615 | <5%                     |                 5 |              0.1123  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.566  | >20%                    |                 2 |              0.283   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5702 | 10-15%                  |                 5 |              0.11404 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5716 | >20%                    |                 5 |              0.11432 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5845 | >20%                    |                 5 |              0.1169  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5875 | >20%                    |                10 |              0.05875 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5946 | 5-10%                   |                 5 |              0.11892 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5995 | >20%                    |                 5 |              0.1199  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6002 | >20%                    |                 2 |              0.3001  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6085 | 5-10%                   |                 5 |              0.1217  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.615  | 10-15%                  |                 5 |              0.123   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6164 | >20%                    |                10 |              0.06164 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6186 | <5%                     |                 5 |              0.12372 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6282 | >20%                    |                 2 |              0.3141  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6416 | >20%                    |                 2 |              0.3208  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6432 | 15-20%                  |                 5 |              0.12864 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6496 | >20%                    |                10 |              0.06496 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6635 | 5-10%                   |                 5 |              0.1327  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6689 | 15-20%                  |                10 |              0.06689 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6696 | 10-15%                  |                 5 |              0.13392 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6752 | >20%                    |                10 |              0.06752 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6909 | >20%                    |                 5 |              0.13818 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6999 | >20%                    |                10 |              0.06999 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7016 | 5-10%                   |                10 |              0.07016 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7037 | >20%                    |                10 |              0.07037 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7057 | >20%                    |                 2 |              0.35285 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.709  | 10-15%                  |                10 |              0.0709  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7106 | >20%                    |                 5 |              0.14212 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7147 | >20%                    |                 2 |              0.35735 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7209 | >20%                    |                10 |              0.07209 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7315 | >20%                    |                10 |              0.07315 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7317 | >20%                    |                 5 |              0.14634 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7353 | 15-20%                  |                10 |              0.07353 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7448 | >20%                    |                10 |              0.07448 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7474 | >20%                    |                10 |              0.07474 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7494 | >20%                    |                 5 |              0.14988 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7526 | >20%                    |                 5 |              0.15052 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7628 | >20%                    |                 2 |              0.3814  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7646 | >20%                    |                10 |              0.07646 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7652 | 10-15%                  |                10 |              0.07652 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7668 | >20%                    |                10 |              0.07668 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7792 | >20%                    |                10 |              0.07792 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.787  | >20%                    |                 2 |              0.3935  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7954 | 15-20%                  |                10 |              0.07954 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8076 | 10-15%                  |                10 |              0.08076 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8121 | >20%                    |                 5 |              0.16242 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8127 | >20%                    |                10 |              0.08127 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8129 | >20%                    |                 2 |              0.40645 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8144 | <5%                     |                10 |              0.08144 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8196 | >20%                    |                 2 |              0.4098  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8338 | >20%                    |                 5 |              0.16676 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8498 | >20%                    |                10 |              0.08498 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8585 | 10-15%                  |                 5 |              0.1717  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8676 | >20%                    |                10 |              0.08676 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8688 | >20%                    |                10 |              0.08688 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8735 | >20%                    |                 5 |              0.1747  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8892 | 10-15%                  |                10 |              0.08892 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8986 | >20%                    |                 5 |              0.17972 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9014 | >20%                    |                10 |              0.09014 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9045 | 5-10%                   |                10 |              0.09045 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9325 | >20%                    |                10 |              0.09325 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.938  | 10-15%                  |                10 |              0.0938  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9395 | >20%                    |                 5 |              0.1879  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9458 | 15-20%                  |                 2 |              0.4729  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9694 | >20%                    |                 5 |              0.19388 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9747 | >20%                    |                10 |              0.09747 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9843 | >20%                    |                 2 |              0.49215 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9979 | >20%                    |                 2 |              0.49895 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0086 | >20%                    |                10 |              0.10086 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0197 | 15-20%                  |                10 |              0.10197 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0282 | 10-15%                  |                10 |              0.10282 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0403 | >20%                    |                10 |              0.10403 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0486 | 10-15%                  |                10 |              0.10486 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0909 | >20%                    |                 2 |              0.54545 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.144  | 5-10%                   |                 5 |              0.2288  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2097 | >20%                    |                10 |              0.12097 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2166 | >20%                    |                10 |              0.12166 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2634 | 5-10%                   |                10 |              0.12634 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2987 | >20%                    |                 5 |              0.25974 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.416  | >20%                    |                 2 |              0.708   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4219 | 15-20%                  |                10 |              0.14219 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4283 | >20%                    |                 5 |              0.28566 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4451 | >20%                    |                10 |              0.14451 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4757 | >20%                    |                 2 |              0.73785 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4976 | >20%                    |                10 |              0.14976 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5633 | 15-20%                  |                10 |              0.15633 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5754 | 10-15%                  |                 5 |              0.31508 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0908 | 10-15%                  |                10 |              0.20908 |