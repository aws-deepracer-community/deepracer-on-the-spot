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

Data correct as of 2025-02-02 01:39:14.282170, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1982 | >20%                    |                 2 |              0.0991  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2116 | <5%                     |                 2 |              0.1058  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2206 | 5-10%                   |                 2 |              0.1103  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | 10-15%                  |                 2 |              0.11245 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | 10-15%                  |                 2 |              0.11425 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2374 | 10-15%                  |                 5 |              0.04748 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | 5-10%                   |                 2 |              0.1191  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | 10-15%                  |                 2 |              0.12245 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2523 | <5%                     |                 2 |              0.12615 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2555 | 5-10%                   |                 2 |              0.12775 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | >20%                    |                 2 |              0.14445 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2913 | <5%                     |                 5 |              0.05826 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | <5%                     |                 2 |              0.14875 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3004 | 5-10%                   |                 2 |              0.1502  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3005 | 15-20%                  |                10 |              0.03005 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3046 | >20%                    |                 2 |              0.1523  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | 10-15%                  |                 2 |              0.15835 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3183 | 5-10%                   |                 5 |              0.06366 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3264 | <5%                     |                 2 |              0.1632  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3315 | 5-10%                   |                 2 |              0.16575 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3391 | >20%                    |                 2 |              0.16955 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3416 | 10-15%                  |                 5 |              0.06832 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3476 | 5-10%                   |                 2 |              0.1738  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3533 | <5%                     |                 5 |              0.07066 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3539 | <5%                     |                 2 |              0.17695 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3564 | 5-10%                   |                 2 |              0.1782  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3662 | >20%                    |                 2 |              0.1831  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3789 | 5-10%                   |                 5 |              0.07578 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.382  | 15-20%                  |                 5 |              0.0764  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3848 | 5-10%                   |                 2 |              0.1924  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3954 | >20%                    |                 2 |              0.1977  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3987 | 5-10%                   |                 5 |              0.07974 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.403  | <5%                     |                 2 |              0.2015  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4038 | 5-10%                   |                 2 |              0.2019  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.415  | <5%                     |                 5 |              0.083   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 10-15%                  |                 2 |              0.20925 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4285 | <5%                     |                 2 |              0.21425 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4367 | 10-15%                  |                 5 |              0.08734 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4436 | 5-10%                   |                 2 |              0.2218  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | 15-20%                  |                 5 |              0.09474 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4758 | >20%                    |                 5 |              0.09516 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | 5-10%                   |                 2 |              0.23905 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4841 | <5%                     |                 2 |              0.24205 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4849 | 15-20%                  |                 5 |              0.09698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4882 | >20%                    |                 2 |              0.2441  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4887 | >20%                    |                 5 |              0.09774 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4911 | <5%                     |                 5 |              0.09822 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4936 | 10-15%                  |                 5 |              0.09872 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4957 | <5%                     |                 5 |              0.09914 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5057 | 15-20%                  |                 5 |              0.10114 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5065 | <5%                     |                 5 |              0.1013  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5067 | 10-15%                  |                 2 |              0.25335 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5072 | >20%                    |                 2 |              0.2536  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5088 | <5%                     |                 2 |              0.2544  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5099 | <5%                     |                 5 |              0.10198 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5149 | >20%                    |                 5 |              0.10298 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5216 | 5-10%                   |                 5 |              0.10432 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5322 | >20%                    |                 5 |              0.10644 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5393 | 15-20%                  |                 5 |              0.10786 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5412 | 5-10%                   |                 2 |              0.2706  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5426 | 10-15%                  |                 2 |              0.2713  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.544  | >20%                    |                10 |              0.0544  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5498 | <5%                     |                 5 |              0.10996 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5515 | 5-10%                   |                 5 |              0.1103  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5521 | 10-15%                  |                 5 |              0.11042 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5544 | <5%                     |                 5 |              0.11088 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.558  | 15-20%                  |                 2 |              0.279   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.572  | 5-10%                   |                 5 |              0.1144  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5779 | 5-10%                   |                 5 |              0.11558 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5798 | <5%                     |                10 |              0.05798 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5824 | 15-20%                  |                 2 |              0.2912  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5867 | 5-10%                   |                 5 |              0.11734 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5892 | 5-10%                   |                 5 |              0.11784 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5995 | 5-10%                   |                10 |              0.05995 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5998 | >20%                    |                 2 |              0.2999  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6181 | <5%                     |                10 |              0.06181 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6195 | 5-10%                   |                10 |              0.06195 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6234 | 5-10%                   |                 5 |              0.12468 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6292 | <5%                     |                10 |              0.06292 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6434 | 10-15%                  |                10 |              0.06434 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.648  | >20%                    |                 2 |              0.324   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.653  | 5-10%                   |                10 |              0.0653  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.665  | 5-10%                   |                10 |              0.0665  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6667 | >20%                    |                10 |              0.06667 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6839 | 5-10%                   |                 5 |              0.13678 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6843 | >20%                    |                 5 |              0.13686 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6869 | <5%                     |                 5 |              0.13738 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6898 | 10-15%                  |                10 |              0.06898 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6952 | 15-20%                  |                10 |              0.06952 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6963 | 5-10%                   |                 5 |              0.13926 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.701  | 10-15%                  |                10 |              0.0701  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7138 | >20%                    |                 5 |              0.14276 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7219 | 5-10%                   |                10 |              0.07219 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7308 | 5-10%                   |                10 |              0.07308 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7316 | <5%                     |                 2 |              0.3658  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7329 | >20%                    |                10 |              0.07329 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7472 | >20%                    |                 5 |              0.14944 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7583 | >20%                    |                 5 |              0.15166 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7608 | 10-15%                  |                10 |              0.07608 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7781 | 15-20%                  |                10 |              0.07781 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7841 | 5-10%                   |                10 |              0.07841 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8054 | 5-10%                   |                10 |              0.08054 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8076 | 15-20%                  |                 2 |              0.4038  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8137 | >20%                    |                10 |              0.08137 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.815  | 15-20%                  |                10 |              0.0815  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8299 | <5%                     |                10 |              0.08299 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8656 | 5-10%                   |                10 |              0.08656 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8686 | <5%                     |                10 |              0.08686 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8849 | 5-10%                   |                10 |              0.08849 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8849 | 15-20%                  |                 2 |              0.44245 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8863 | <5%                     |                10 |              0.08863 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8915 | >20%                    |                10 |              0.08915 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9209 | 5-10%                   |                10 |              0.09209 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9251 | <5%                     |                10 |              0.09251 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9257 | 15-20%                  |                10 |              0.09257 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.9371 | >20%                    |                 5 |              0.18742 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9407 | 5-10%                   |                 5 |              0.18814 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.941  | >20%                    |                10 |              0.0941  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9415 | 5-10%                   |                10 |              0.09415 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9742 | 5-10%                   |                 5 |              0.19484 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9962 | 15-20%                  |                10 |              0.09962 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0002 | >20%                    |                10 |              0.10002 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.027  | <5%                     |                10 |              0.1027  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0412 | 10-15%                  |                10 |              0.10412 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0912 | 10-15%                  |                 2 |              0.5456  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0936 | 15-20%                  |                 5 |              0.21872 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0998 | 5-10%                   |                10 |              0.10998 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.183  | 10-15%                  |                10 |              0.1183  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1875 | >20%                    |                10 |              0.11875 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2198 | 5-10%                   |                10 |              0.12198 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2311 | 10-15%                  |                 2 |              0.61555 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2605 | 15-20%                  |                 5 |              0.2521  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4341 | 5-10%                   |                10 |              0.14341 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4455 | 5-10%                   |                10 |              0.14455 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9508 | 5-10%                   |                10 |              0.19508 |