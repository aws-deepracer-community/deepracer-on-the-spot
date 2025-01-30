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

Data correct as of 2025-01-30 01:26:44.128921, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.21   | >20%                    |                 2 |              0.105   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2104 | <5%                     |                 2 |              0.1052  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2181 | 5-10%                   |                 2 |              0.10905 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | 10-15%                  |                 2 |              0.11415 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2302 | 10-15%                  |                 2 |              0.1151  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | 5-10%                   |                 2 |              0.11705 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | 10-15%                  |                 2 |              0.12365 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | 5-10%                   |                 2 |              0.127   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | <5%                     |                 2 |              0.12845 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2682 | 10-15%                  |                 5 |              0.05364 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2967 | 5-10%                   |                 2 |              0.14835 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3013 | >20%                    |                 2 |              0.15065 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | <5%                     |                 2 |              0.1522  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3058 | >20%                    |                 2 |              0.1529  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3106 | <5%                     |                 5 |              0.06212 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3209 | 10-15%                  |                 2 |              0.16045 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | 5-10%                   |                 2 |              0.16195 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3292 | 5-10%                   |                 5 |              0.06584 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3298 | 15-20%                  |                10 |              0.03298 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3322 | <5%                     |                 2 |              0.1661  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3354 | 5-10%                   |                 2 |              0.1677  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3401 | 10-15%                  |                 5 |              0.06802 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.344  | >20%                    |                 2 |              0.172   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3457 | <5%                     |                 2 |              0.17285 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3476 | <5%                     |                 5 |              0.06952 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3565 | >20%                    |                 2 |              0.17825 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3623 | 5-10%                   |                 2 |              0.18115 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3741 | 5-10%                   |                 5 |              0.07482 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3773 | 15-20%                  |                 5 |              0.07546 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3865 | 5-10%                   |                 5 |              0.0773  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3886 | 5-10%                   |                 2 |              0.1943  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4017 | 5-10%                   |                 2 |              0.20085 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4057 | <5%                     |                 2 |              0.20285 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4116 | <5%                     |                 2 |              0.2058  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4118 | >20%                    |                 2 |              0.2059  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4184 | 10-15%                  |                 2 |              0.2092  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4303 | 10-15%                  |                 5 |              0.08606 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4411 | 5-10%                   |                 2 |              0.22055 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4412 | <5%                     |                 5 |              0.08824 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | 15-20%                  |                 5 |              0.09112 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4615 | 10-15%                  |                 2 |              0.23075 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | <5%                     |                 5 |              0.0947  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4795 | 5-10%                   |                 2 |              0.23975 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4813 | 15-20%                  |                 5 |              0.09626 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4834 | <5%                     |                 5 |              0.09668 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4936 | >20%                    |                 5 |              0.09872 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4971 | <5%                     |                 2 |              0.24855 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5023 | >20%                    |                 2 |              0.25115 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5029 | 15-20%                  |                 5 |              0.10058 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5035 | >20%                    |                 2 |              0.25175 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | 10-15%                  |                 5 |              0.10122 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | <5%                     |                 5 |              0.10132 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5116 | 15-20%                  |                 5 |              0.10232 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5122 | 15-20%                  |                 2 |              0.2561  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5163 | <5%                     |                 2 |              0.25815 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.517  | <5%                     |                 5 |              0.1034  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5204 | 5-10%                   |                 5 |              0.10408 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5254 | 10-15%                  |                 5 |              0.10508 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.529  | 5-10%                   |                 2 |              0.2645  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5324 | >20%                    |                 5 |              0.10648 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5391 | >20%                    |                 2 |              0.26955 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5423 | <5%                     |                 5 |              0.10846 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5476 | 10-15%                  |                 2 |              0.2738  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5501 | <5%                     |                 5 |              0.11002 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5508 | >20%                    |                 5 |              0.11016 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5555 | 5-10%                   |                 5 |              0.1111  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5623 | 15-20%                  |                 2 |              0.28115 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | 5-10%                   |                 5 |              0.11548 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5795 | 5-10%                   |                 5 |              0.1159  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.589  | 5-10%                   |                10 |              0.0589  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.59   | <5%                     |                10 |              0.059   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5936 | 5-10%                   |                 5 |              0.11872 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6009 | >20%                    |                10 |              0.06009 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6053 | 5-10%                   |                 5 |              0.12106 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6134 | 5-10%                   |                10 |              0.06134 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6224 | <5%                     |                10 |              0.06224 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6287 | 5-10%                   |                10 |              0.06287 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.637  | 10-15%                  |                10 |              0.0637  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6452 | 5-10%                   |                 5 |              0.12904 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6485 | >20%                    |                 2 |              0.32425 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6512 | <5%                     |                10 |              0.06512 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6701 | 5-10%                   |                10 |              0.06701 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6814 | >20%                    |                10 |              0.06814 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6838 | 5-10%                   |                 5 |              0.13676 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6838 | 15-20%                  |                10 |              0.06838 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6875 | 10-15%                  |                10 |              0.06875 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6901 | <5%                     |                 5 |              0.13802 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6942 | 5-10%                   |                 5 |              0.13884 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6991 | >20%                    |                 5 |              0.13982 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6994 | 10-15%                  |                10 |              0.06994 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7391 | >20%                    |                 5 |              0.14782 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7492 | >20%                    |                 5 |              0.14984 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7496 | 10-15%                  |                10 |              0.07496 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7557 | >20%                    |                10 |              0.07557 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.763  | 5-10%                   |                10 |              0.0763  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7669 | >20%                    |                 5 |              0.15338 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.769  | 5-10%                   |                10 |              0.0769  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7699 | 15-20%                  |                 2 |              0.38495 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7723 | <5%                     |                 2 |              0.38615 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7781 | 5-10%                   |                10 |              0.07781 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7827 | 5-10%                   |                10 |              0.07827 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7838 | 15-20%                  |                10 |              0.07838 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7967 | 15-20%                  |                 2 |              0.39835 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.8266 | >20%                    |                 5 |              0.16532 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8268 | >20%                    |                10 |              0.08268 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8382 | >20%                    |                10 |              0.08382 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8427 | <5%                     |                10 |              0.08427 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8542 | 15-20%                  |                10 |              0.08542 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8555 | 5-10%                   |                10 |              0.08555 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.8883 | 10-15%                  |                10 |              0.08883 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8932 | 5-10%                   |                10 |              0.08932 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9021 | <5%                     |                10 |              0.09021 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9052 | >20%                    |                10 |              0.09052 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9113 | 15-20%                  |                10 |              0.09113 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9168 | 5-10%                   |                10 |              0.09168 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9179 | 5-10%                   |                 5 |              0.18358 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.92   | <5%                     |                10 |              0.092   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9231 | <5%                     |                10 |              0.09231 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9641 | 5-10%                   |                10 |              0.09641 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9929 | 15-20%                  |                10 |              0.09929 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0081 | 5-10%                   |                 5 |              0.20162 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0115 | >20%                    |                10 |              0.10115 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0297 | <5%                     |                10 |              0.10297 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0566 | 15-20%                  |                 5 |              0.21132 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.078  | 10-15%                  |                 2 |              0.539   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0821 | 5-10%                   |                10 |              0.10821 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1682 | >20%                    |                10 |              0.11682 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1913 | 10-15%                  |                10 |              0.11913 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2408 | 5-10%                   |                10 |              0.12408 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2475 | 10-15%                  |                 2 |              0.62375 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2793 | 15-20%                  |                 5 |              0.25586 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3813 | 5-10%                   |                10 |              0.13813 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4073 | 5-10%                   |                10 |              0.14073 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0166 | 5-10%                   |                10 |              0.20166 |