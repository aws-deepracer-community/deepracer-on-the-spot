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

Data correct as of 2026-05-20 03:59:19.246443, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1175 | >20%                    |                 2 |              0.05875 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1456 | 15-20%                  |                 2 |              0.0728  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1457 | >20%                    |                 2 |              0.07285 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2026 | 15-20%                  |                 5 |              0.04052 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2107 | >20%                    |                 2 |              0.10535 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2182 | >20%                    |                 2 |              0.1091  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2289 | 15-20%                  |                 2 |              0.11445 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2291 | 15-20%                  |                 5 |              0.04582 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2304 | >20%                    |                 2 |              0.1152  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | >20%                    |                 2 |              0.1266  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2545 | >20%                    |                 5 |              0.0509  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2556 | >20%                    |                 2 |              0.1278  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2687 | >20%                    |                 5 |              0.05374 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2729 | 5-10%                   |                10 |              0.02729 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2731 | >20%                    |                 5 |              0.05462 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.277  | 15-20%                  |                 5 |              0.0554  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | >20%                    |                 2 |              0.1447  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | >20%                    |                 2 |              0.14875 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | 15-20%                  |                 2 |              0.1492  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3057 | >20%                    |                 2 |              0.15285 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3096 | >20%                    |                 2 |              0.1548  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3129 | 10-15%                  |                 2 |              0.15645 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3183 | 10-15%                  |                 2 |              0.15915 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3208 | >20%                    |                10 |              0.03208 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3222 | >20%                    |                 2 |              0.1611  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3225 | >20%                    |                 5 |              0.0645  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3235 | 10-15%                  |                 2 |              0.16175 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3322 | >20%                    |                 5 |              0.06644 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3329 | >20%                    |                 2 |              0.16645 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3335 | <5%                     |                 2 |              0.16675 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3373 | >20%                    |                 5 |              0.06746 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3447 | >20%                    |                 2 |              0.17235 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3564 | 5-10%                   |                10 |              0.03564 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3709 | >20%                    |                 5 |              0.07418 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3749 | >20%                    |                 5 |              0.07498 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3774 | 10-15%                  |                 2 |              0.1887  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3777 | >20%                    |                 5 |              0.07554 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3894 | >20%                    |                 5 |              0.07788 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4006 | >20%                    |                 5 |              0.08012 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4039 | <5%                     |                 2 |              0.20195 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4141 | >20%                    |                 2 |              0.20705 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | 5-10%                   |                 2 |              0.20815 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4177 | <5%                     |                 5 |              0.08354 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4183 | >20%                    |                 5 |              0.08366 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.421  | >20%                    |                10 |              0.0421  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.424  | >20%                    |                 5 |              0.0848  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4294 | >20%                    |                 2 |              0.2147  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4361 | >20%                    |                 2 |              0.21805 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4469 | >20%                    |                 5 |              0.08938 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.45   | >20%                    |                 5 |              0.09    |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4578 | <5%                     |                 2 |              0.2289  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | >20%                    |                 5 |              0.09192 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4632 | >20%                    |                10 |              0.04632 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.472  | >20%                    |                 2 |              0.236   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4764 | >20%                    |                10 |              0.04764 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4802 | 15-20%                  |                 2 |              0.2401  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4815 | >20%                    |                 2 |              0.24075 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4848 | 15-20%                  |                 2 |              0.2424  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4849 | >20%                    |                 5 |              0.09698 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | >20%                    |                 5 |              0.0979  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5003 | 5-10%                   |                10 |              0.05003 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5038 | 5-10%                   |                 5 |              0.10076 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5097 | >20%                    |                 5 |              0.10194 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | >20%                    |                 5 |              0.10388 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5388 | 10-15%                  |                 5 |              0.10776 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5417 | 10-15%                  |                 2 |              0.27085 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5451 | 15-20%                  |                 5 |              0.10902 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5462 | >20%                    |                 2 |              0.2731  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5467 | >20%                    |                10 |              0.05467 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5476 | 15-20%                  |                 2 |              0.2738  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5531 | >20%                    |                 5 |              0.11062 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5607 | >20%                    |                10 |              0.05607 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5635 | >20%                    |                 5 |              0.1127  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5636 | >20%                    |                 2 |              0.2818  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5853 | >20%                    |                 2 |              0.29265 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5884 | >20%                    |                 2 |              0.2942  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6042 | >20%                    |                 5 |              0.12084 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6108 | >20%                    |                10 |              0.06108 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6137 | >20%                    |                10 |              0.06137 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6203 | >20%                    |                 5 |              0.12406 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6217 | >20%                    |                 2 |              0.31085 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6451 | >20%                    |                10 |              0.06451 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.653  | >20%                    |                 2 |              0.3265  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6573 | >20%                    |                10 |              0.06573 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6645 | 15-20%                  |                10 |              0.06645 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6717 | >20%                    |                 2 |              0.33585 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6761 |                         |                 5 |              0.13522 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6842 |                         |                 2 |              0.3421  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6872 | 5-10%                   |                10 |              0.06872 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6972 | >20%                    |                10 |              0.06972 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7076 | >20%                    |                10 |              0.07076 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7115 | >20%                    |                 5 |              0.1423  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7162 | >20%                    |                 5 |              0.14324 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7238 | >20%                    |                 2 |              0.3619  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.731  | >20%                    |                 5 |              0.1462  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7312 | 5-10%                   |                 2 |              0.3656  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7365 | >20%                    |                 5 |              0.1473  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7394 | 15-20%                  |                10 |              0.07394 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7455 | >20%                    |                 5 |              0.1491  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.748  | >20%                    |                 5 |              0.1496  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7509 | 10-15%                  |                 2 |              0.37545 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7603 | >20%                    |                10 |              0.07603 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.777  | >20%                    |                 2 |              0.3885  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7795 | >20%                    |                 5 |              0.1559  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7817 | >20%                    |                 5 |              0.15634 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7983 | 15-20%                  |                10 |              0.07983 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7986 | >20%                    |                 5 |              0.15972 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8027 | >20%                    |                10 |              0.08027 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8088 | >20%                    |                 5 |              0.16176 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.8168 |                         |                 5 |              0.16336 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8429 | >20%                    |                10 |              0.08429 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.875  | 10-15%                  |                10 |              0.0875  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8944 | >20%                    |                10 |              0.08944 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8948 |                         |                 2 |              0.4474  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9002 | 15-20%                  |                10 |              0.09002 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9361 | 15-20%                  |                10 |              0.09361 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9477 | >20%                    |                10 |              0.09477 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9602 | >20%                    |                 5 |              0.19204 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9706 | >20%                    |                10 |              0.09706 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9754 | >20%                    |                10 |              0.09754 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9824 | >20%                    |                10 |              0.09824 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9938 | >20%                    |                10 |              0.09938 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0021 | >20%                    |                 5 |              0.20042 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0037 | >20%                    |                 5 |              0.20074 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0044 | >20%                    |                 5 |              0.20088 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0064 | 5-10%                   |                 5 |              0.20128 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0069 | >20%                    |                 2 |              0.50345 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.029  | >20%                    |                10 |              0.1029  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0492 | >20%                    |                10 |              0.10492 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.071  | >20%                    |                10 |              0.1071  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0813 | >20%                    |                10 |              0.10813 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0829 | 5-10%                   |                 2 |              0.54145 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1059 | >20%                    |                10 |              0.11059 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1154 | >20%                    |                10 |              0.11154 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1213 | >20%                    |                10 |              0.11213 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1354 | >20%                    |                10 |              0.11354 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1522 | 15-20%                  |                10 |              0.11522 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1638 | 5-10%                   |                10 |              0.11638 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1975 | 5-10%                   |                 2 |              0.59875 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2428 | >20%                    |                 5 |              0.24856 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.2563 |                         |                10 |              0.12563 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.273  |                         |                10 |              0.1273  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2799 | 15-20%                  |                 5 |              0.25598 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2942 | 10-15%                  |                10 |              0.12942 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3017 | >20%                    |                10 |              0.13017 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3913 | >20%                    |                 5 |              0.27826 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4392 | 15-20%                  |                10 |              0.14392 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4422 | >20%                    |                10 |              0.14422 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.519  | 10-15%                  |                 2 |              0.7595  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6598 | 15-20%                  |                10 |              0.16598 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0535 | >20%                    |                10 |              0.20535 |