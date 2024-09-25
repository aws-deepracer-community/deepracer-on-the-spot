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

Data correct as of 2024-09-25 01:38:18.795520, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0932 | <5%                     |                 2 |              0.0466  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1085 |                         |                 2 |              0.05425 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1222 |                         |                 2 |              0.0611  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1241 |                         |                 2 |              0.06205 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1418 |                         |                 2 |              0.0709  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1469 |                         |                 5 |              0.02938 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1471 | 5-10%                   |                 2 |              0.07355 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1655 |                         |                 5 |              0.0331  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.168  |                         |                 5 |              0.0336  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.1919 |                         |                 5 |              0.03838 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1967 | 15-20%                  |                 2 |              0.09835 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2029 | <5%                     |                 2 |              0.10145 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2237 |                         |                10 |              0.02237 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | 5-10%                   |                 2 |              0.11505 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | <5%                     |                 2 |              0.1166  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2401 | 15-20%                  |                 2 |              0.12005 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2437 | 15-20%                  |                 5 |              0.04874 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2458 | 15-20%                  |                 5 |              0.04916 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2483 | <5%                     |                 2 |              0.12415 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2519 |                         |                10 |              0.02519 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2557 |                         |                10 |              0.02557 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2642 | <5%                     |                 2 |              0.1321  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2688 | >20%                    |                10 |              0.02688 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | <5%                     |                 2 |              0.13725 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2796 | >20%                    |                 5 |              0.05592 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 10-15%                  |                 2 |              0.1408  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | <5%                     |                 2 |              0.1433  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | <5%                     |                 2 |              0.14365 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.2921 |                         |                10 |              0.02921 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.296  | <5%                     |                 5 |              0.0592  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | 5-10%                   |                 2 |              0.14975 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | <5%                     |                 2 |              0.1518  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3522 | <5%                     |                 2 |              0.1761  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3539 | <5%                     |                 2 |              0.17695 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.355  | 15-20%                  |                10 |              0.0355  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3557 | <5%                     |                10 |              0.03557 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3562 | 10-15%                  |                 2 |              0.1781  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3562 | <5%                     |                 5 |              0.07124 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3571 | 5-10%                   |                 5 |              0.07142 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3607 | <5%                     |                10 |              0.03607 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3736 | <5%                     |                 2 |              0.1868  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3814 | <5%                     |                 5 |              0.07628 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3898 | <5%                     |                 2 |              0.1949  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3978 | >20%                    |                 2 |              0.1989  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4005 | 5-10%                   |                 5 |              0.0801  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4017 | >20%                    |                 2 |              0.20085 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4092 | >20%                    |                 2 |              0.2046  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4095 | 5-10%                   |                 2 |              0.20475 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | <5%                     |                 2 |              0.2066  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4258 | >20%                    |                 5 |              0.08516 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4275 | 15-20%                  |                 5 |              0.0855  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.437  | <5%                     |                 5 |              0.0874  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4397 | 10-15%                  |                 2 |              0.21985 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4399 | <5%                     |                 2 |              0.21995 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | 5-10%                   |                 5 |              0.0892  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4473 | <5%                     |                 5 |              0.08946 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4512 | >20%                    |                 2 |              0.2256  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4678 | 5-10%                   |                 5 |              0.09356 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | <5%                     |                 5 |              0.09358 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4736 | >20%                    |                 5 |              0.09472 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | <5%                     |                 5 |              0.09692 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4874 | 15-20%                  |                 2 |              0.2437  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4898 | >20%                    |                 2 |              0.2449  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4902 | 5-10%                   |                 5 |              0.09804 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4948 | 15-20%                  |                 5 |              0.09896 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4984 | 10-15%                  |                10 |              0.04984 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5036 | 10-15%                  |                 5 |              0.10072 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5379 | <5%                     |                 5 |              0.10758 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5398 | <5%                     |                 5 |              0.10796 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5426 | 15-20%                  |                 2 |              0.2713  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5475 | >20%                    |                 5 |              0.1095  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5501 | <5%                     |                 5 |              0.11002 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.556  | >20%                    |                10 |              0.0556  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5664 | >20%                    |                 2 |              0.2832  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5691 | >20%                    |                10 |              0.05691 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5839 | 5-10%                   |                 5 |              0.11678 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5927 | 5-10%                   |                 5 |              0.11854 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5955 | >20%                    |                 5 |              0.1191  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6085 | 15-20%                  |                 2 |              0.30425 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6107 | >20%                    |                 5 |              0.12214 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6148 | >20%                    |                10 |              0.06148 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6153 | <5%                     |                10 |              0.06153 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6166 | >20%                    |                 5 |              0.12332 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6396 | 5-10%                   |                10 |              0.06396 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6672 | >20%                    |                 5 |              0.13344 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6892 | <5%                     |                10 |              0.06892 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6932 | <5%                     |                10 |              0.06932 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7301 | >20%                    |                 2 |              0.36505 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7442 | >20%                    |                 5 |              0.14884 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7538 | 15-20%                  |                10 |              0.07538 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7604 | 10-15%                  |                10 |              0.07604 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7756 | <5%                     |                10 |              0.07756 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7792 | >20%                    |                 5 |              0.15584 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7882 | 10-15%                  |                10 |              0.07882 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7905 | >20%                    |                10 |              0.07905 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7952 | 15-20%                  |                10 |              0.07952 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8128 | >20%                    |                10 |              0.08128 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8204 | >20%                    |                10 |              0.08204 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8462 | 5-10%                   |                 2 |              0.4231  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8522 | >20%                    |                10 |              0.08522 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8655 | <5%                     |                 2 |              0.43275 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8739 | >20%                    |                 5 |              0.17478 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.884  | >20%                    |                10 |              0.0884  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8843 | <5%                     |                10 |              0.08843 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.896  | 5-10%                   |                 5 |              0.1792  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9076 | >20%                    |                10 |              0.09076 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9112 | 5-10%                   |                10 |              0.09112 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9154 | <5%                     |                10 |              0.09154 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9303 | >20%                    |                 5 |              0.18606 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9672 | 5-10%                   |                10 |              0.09672 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0002 | 5-10%                   |                10 |              0.10002 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0299 | 10-15%                  |                10 |              0.10299 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0377 | >20%                    |                10 |              0.10377 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.054  | <5%                     |                 2 |              0.527   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.082  | >20%                    |                10 |              0.1082  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1143 | 10-15%                  |                 5 |              0.22286 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1194 | >20%                    |                10 |              0.11194 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2206 | >20%                    |                10 |              0.12206 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2656 | 15-20%                  |                10 |              0.12656 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4742 | >20%                    |                10 |              0.14742 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8474 | 5-10%                   |                10 |              0.18474 |