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

Data correct as of 2026-05-21 04:08:31.469046, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1253 | >20%                    |                 2 |              0.06265 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1467 | 15-20%                  |                 2 |              0.07335 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1479 | >20%                    |                 2 |              0.07395 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1965 | 15-20%                  |                 5 |              0.0393  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2045 | >20%                    |                 2 |              0.10225 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2196 | 15-20%                  |                 5 |              0.04392 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.221  | >20%                    |                 2 |              0.1105  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2265 | 15-20%                  |                 2 |              0.11325 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | >20%                    |                 2 |              0.1148  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | >20%                    |                 2 |              0.127   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | >20%                    |                 2 |              0.1273  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2563 | >20%                    |                 5 |              0.05126 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2664 | >20%                    |                 5 |              0.05328 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2724 | 5-10%                   |                10 |              0.02724 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2759 | >20%                    |                 5 |              0.05518 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.277  | 15-20%                  |                 5 |              0.0554  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | >20%                    |                 2 |              0.14595 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2958 | >20%                    |                 2 |              0.1479  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3042 | 15-20%                  |                 2 |              0.1521  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3072 | >20%                    |                 2 |              0.1536  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3099 | 10-15%                  |                 2 |              0.15495 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3194 | 10-15%                  |                 2 |              0.1597  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.322  | 10-15%                  |                 2 |              0.161   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3225 | >20%                    |                10 |              0.03225 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3229 | >20%                    |                 5 |              0.06458 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3241 | >20%                    |                 2 |              0.16205 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3336 | <5%                     |                 2 |              0.1668  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3345 | >20%                    |                 5 |              0.0669  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3349 | >20%                    |                 5 |              0.06698 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.336  | >20%                    |                 2 |              0.168   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.34   | >20%                    |                 2 |              0.17    |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3412 | 5-10%                   |                10 |              0.03412 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3567 | >20%                    |                 5 |              0.07134 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3719 | >20%                    |                 5 |              0.07438 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3721 | >20%                    |                 5 |              0.07442 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3757 | >20%                    |                 5 |              0.07514 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3788 | 10-15%                  |                 2 |              0.1894  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3887 | >20%                    |                 5 |              0.07774 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4051 | <5%                     |                 5 |              0.08102 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4065 | <5%                     |                 2 |              0.20325 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4132 | >20%                    |                 5 |              0.08264 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4139 | >20%                    |                 2 |              0.20695 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4167 | >20%                    |                 5 |              0.08334 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | 5-10%                   |                 2 |              0.2089  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4182 | >20%                    |                10 |              0.04182 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4244 | >20%                    |                 5 |              0.08488 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4359 | >20%                    |                 2 |              0.21795 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4365 | >20%                    |                 2 |              0.21825 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4381 | >20%                    |                 5 |              0.08762 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4417 | >20%                    |                10 |              0.04417 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4467 | >20%                    |                 5 |              0.08934 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4594 | >20%                    |                10 |              0.04594 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4594 | <5%                     |                 2 |              0.2297  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.46   | >20%                    |                 5 |              0.092   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4746 | >20%                    |                 2 |              0.2373  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4772 | >20%                    |                 2 |              0.2386  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4786 | 15-20%                  |                 2 |              0.2393  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4821 | 15-20%                  |                 2 |              0.24105 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4845 | >20%                    |                 5 |              0.0969  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | >20%                    |                 5 |              0.09812 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5069 | >20%                    |                 5 |              0.10138 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5118 | 5-10%                   |                10 |              0.05118 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5174 | >20%                    |                 2 |              0.2587  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5271 | >20%                    |                 5 |              0.10542 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5312 | >20%                    |                 5 |              0.10624 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5361 | 10-15%                  |                 2 |              0.26805 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5419 | 10-15%                  |                 5 |              0.10838 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5477 | 15-20%                  |                 2 |              0.27385 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5544 | >20%                    |                 5 |              0.11088 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5558 | >20%                    |                10 |              0.05558 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5591 | >20%                    |                10 |              0.05591 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5645 | >20%                    |                 2 |              0.28225 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.574  | 15-20%                  |                 5 |              0.1148  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5812 | >20%                    |                 2 |              0.2906  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5948 | >20%                    |                 5 |              0.11896 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.5979 | >20%                    |                10 |              0.05979 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6101 | >20%                    |                 5 |              0.12202 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.616  | >20%                    |                10 |              0.0616  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6188 | >20%                    |                 2 |              0.3094  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6217 | >20%                    |                 2 |              0.31085 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6244 | >20%                    |                 2 |              0.3122  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6451 | >20%                    |                10 |              0.06451 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6564 | >20%                    |                10 |              0.06564 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6608 |                         |                 2 |              0.3304  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.663  |                         |                 5 |              0.1326  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.669  | 15-20%                  |                10 |              0.0669  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6747 | >20%                    |                 2 |              0.33735 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6817 | 5-10%                   |                10 |              0.06817 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7062 | >20%                    |                 5 |              0.14124 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7073 | >20%                    |                 5 |              0.14146 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | >20%                    |                10 |              0.07127 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7168 | >20%                    |                10 |              0.07168 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7211 | >20%                    |                 5 |              0.14422 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7319 | >20%                    |                 2 |              0.36595 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7326 | 15-20%                  |                10 |              0.07326 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7368 | 5-10%                   |                 2 |              0.3684  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7368 | >20%                    |                 5 |              0.14736 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7465 | >20%                    |                 2 |              0.37325 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.748  | >20%                    |                 5 |              0.1496  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7577 | >20%                    |                 5 |              0.15154 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7614 | >20%                    |                10 |              0.07614 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7622 | 15-20%                  |                10 |              0.07622 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7687 | 10-15%                  |                 2 |              0.38435 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7739 | >20%                    |                 5 |              0.15478 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.779  | >20%                    |                 5 |              0.1558  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8017 | >20%                    |                10 |              0.08017 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8178 | >20%                    |                 5 |              0.16356 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8378 | >20%                    |                10 |              0.08378 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8387 | >20%                    |                 5 |              0.16774 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8408 |                         |                 2 |              0.4204  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.8505 |                         |                 5 |              0.1701  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8849 | 10-15%                  |                10 |              0.08849 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8961 | 15-20%                  |                10 |              0.08961 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9002 | >20%                    |                10 |              0.09002 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9328 | 15-20%                  |                10 |              0.09328 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9429 | >20%                    |                10 |              0.09429 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9535 | >20%                    |                 5 |              0.1907  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9594 | >20%                    |                10 |              0.09594 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9664 | >20%                    |                10 |              0.09664 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9826 | >20%                    |                10 |              0.09826 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9914 | 5-10%                   |                 5 |              0.19828 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9926 | >20%                    |                 2 |              0.4963  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9969 | >20%                    |                 5 |              0.19938 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9989 | >20%                    |                 5 |              0.19978 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0023 | >20%                    |                 5 |              0.20046 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0167 | >20%                    |                10 |              0.10167 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0249 | >20%                    |                10 |              0.10249 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0261 | >20%                    |                10 |              0.10261 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0414 | >20%                    |                10 |              0.10414 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0698 | >20%                    |                10 |              0.10698 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0791 | >20%                    |                10 |              0.10791 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0797 | 5-10%                   |                 2 |              0.53985 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0844 | >20%                    |                10 |              0.10844 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1293 | >20%                    |                10 |              0.11293 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1511 | >20%                    |                10 |              0.11511 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1522 | 15-20%                  |                10 |              0.11522 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1839 | 5-10%                   |                 2 |              0.59195 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.1888 |                         |                10 |              0.11888 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1954 | 5-10%                   |                10 |              0.11954 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2266 |                         |                10 |              0.12266 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2782 | 15-20%                  |                 5 |              0.25564 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2838 | >20%                    |                 5 |              0.25676 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2981 | 10-15%                  |                10 |              0.12981 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3317 | >20%                    |                10 |              0.13317 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3913 | >20%                    |                 5 |              0.27826 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4053 | 15-20%                  |                10 |              0.14053 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4217 | >20%                    |                10 |              0.14217 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.519  | 10-15%                  |                 2 |              0.7595  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6569 | 15-20%                  |                10 |              0.16569 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0194 | >20%                    |                10 |              0.20194 |