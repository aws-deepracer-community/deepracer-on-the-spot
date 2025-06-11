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

Data correct as of 2025-06-11 01:56:31.682278, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.0978 | >20%                    |                 2 |              0.0489  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1323 | >20%                    |                 5 |              0.02646 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | 5-10%                   |                 2 |              0.07305 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1688 | >20%                    |                 5 |              0.03376 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1954 | >20%                    |                 5 |              0.03908 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1994 | >20%                    |                 2 |              0.0997  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2057 | >20%                    |                 2 |              0.10285 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | >20%                    |                 2 |              0.10555 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2197 | 15-20%                  |                 2 |              0.10985 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2337 | 15-20%                  |                 2 |              0.11685 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | >20%                    |                 2 |              0.1174  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2361 | >20%                    |                 5 |              0.04722 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2437 | <5%                     |                 2 |              0.12185 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2447 | >20%                    |                10 |              0.02447 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2515 | 5-10%                   |                10 |              0.02515 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2562 | 15-20%                  |                10 |              0.02562 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2584 | 15-20%                  |                 2 |              0.1292  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | 15-20%                  |                 2 |              0.13725 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2748 | >20%                    |                 5 |              0.05496 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2753 | >20%                    |                 2 |              0.13765 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | >20%                    |                 2 |              0.13785 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2793 | <5%                     |                 2 |              0.13965 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2806 | 10-15%                  |                 2 |              0.1403  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2842 | 15-20%                  |                 2 |              0.1421  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2872 | >20%                    |                 2 |              0.1436  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3039 | >20%                    |                 2 |              0.15195 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | >20%                    |                 2 |              0.15525 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.311  | >20%                    |                 5 |              0.0622  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | >20%                    |                 2 |              0.15695 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3173 | >20%                    |                 2 |              0.15865 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3222 | >20%                    |                 5 |              0.06444 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3249 | >20%                    |                 2 |              0.16245 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3287 | 15-20%                  |                 5 |              0.06574 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.333  | 15-20%                  |                 5 |              0.0666  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3417 | 5-10%                   |                 2 |              0.17085 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3425 | 5-10%                   |                 2 |              0.17125 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3433 | >20%                    |                10 |              0.03433 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.349  | 5-10%                   |                 2 |              0.1745  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3644 | >20%                    |                 2 |              0.1822  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3661 | 10-15%                  |                 2 |              0.18305 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.368  | >20%                    |                 5 |              0.0736  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | 10-15%                  |                 2 |              0.18415 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3821 | >20%                    |                10 |              0.03821 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3916 | >20%                    |                10 |              0.03916 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.393  | >20%                    |                 2 |              0.1965  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | >20%                    |                 2 |              0.19715 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3965 | 5-10%                   |                 5 |              0.0793  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3994 | >20%                    |                 2 |              0.1997  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3998 | >20%                    |                 5 |              0.07996 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4027 | <5%                     |                 5 |              0.08054 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.404  | >20%                    |                 5 |              0.0808  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4056 | >20%                    |                10 |              0.04056 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4093 | 15-20%                  |                 2 |              0.20465 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4098 | 5-10%                   |                 2 |              0.2049  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | 10-15%                  |                 5 |              0.08214 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | >20%                    |                 5 |              0.08382 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4198 | >20%                    |                10 |              0.04198 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4207 | <5%                     |                 2 |              0.21035 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4276 | >20%                    |                10 |              0.04276 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4293 | <5%                     |                 5 |              0.08586 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4365 | >20%                    |                 2 |              0.21825 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4376 | 15-20%                  |                 5 |              0.08752 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4484 | >20%                    |                 5 |              0.08968 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.449  | >20%                    |                 2 |              0.2245  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4502 | >20%                    |                 2 |              0.2251  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4553 | >20%                    |                 5 |              0.09106 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4599 | <5%                     |                 5 |              0.09198 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4633 | 15-20%                  |                 5 |              0.09266 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4644 | >20%                    |                 5 |              0.09288 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4654 | >20%                    |                 2 |              0.2327  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | >20%                    |                 5 |              0.09348 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4763 | <5%                     |                 5 |              0.09526 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4785 | 15-20%                  |                10 |              0.04785 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4851 | 15-20%                  |                 5 |              0.09702 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4853 | 5-10%                   |                 2 |              0.24265 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.492  | >20%                    |                 5 |              0.0984  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4962 | >20%                    |                 2 |              0.2481  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.503  | >20%                    |                 2 |              0.2515  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5034 | 5-10%                   |                 5 |              0.10068 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5046 | 5-10%                   |                 5 |              0.10092 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | 10-15%                  |                 5 |              0.10112 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5059 | 10-15%                  |                 2 |              0.25295 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5063 | >20%                    |                 5 |              0.10126 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5111 | 15-20%                  |                 2 |              0.25555 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5138 | 15-20%                  |                 2 |              0.2569  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5199 | <5%                     |                 5 |              0.10398 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5259 | >20%                    |                 2 |              0.26295 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5378 | >20%                    |                 2 |              0.2689  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5404 | >20%                    |                 5 |              0.10808 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5424 | >20%                    |                 5 |              0.10848 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5515 | >20%                    |                 2 |              0.27575 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.556  | 10-15%                  |                10 |              0.0556  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5771 | >20%                    |                 5 |              0.11542 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | 10-15%                  |                 5 |              0.1158  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5812 | >20%                    |                 5 |              0.11624 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.602  | >20%                    |                 2 |              0.301   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6027 | >20%                    |                10 |              0.06027 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6037 | >20%                    |                 2 |              0.30185 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6077 | 5-10%                   |                 2 |              0.30385 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6087 | <5%                     |                 2 |              0.30435 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6188 | >20%                    |                10 |              0.06188 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6208 | >20%                    |                 5 |              0.12416 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6225 | >20%                    |                 2 |              0.31125 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6318 | >20%                    |                 5 |              0.12636 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.632  | >20%                    |                 5 |              0.1264  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6342 | >20%                    |                 2 |              0.3171  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6388 | >20%                    |                 5 |              0.12776 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6445 | >20%                    |                 5 |              0.1289  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6452 | <5%                     |                10 |              0.06452 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6471 | 10-15%                  |                 5 |              0.12942 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6474 | <5%                     |                 5 |              0.12948 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6519 | >20%                    |                10 |              0.06519 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6543 | >20%                    |                 5 |              0.13086 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6679 | 10-15%                  |                 2 |              0.33395 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6737 | >20%                    |                10 |              0.06737 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6815 | >20%                    |                10 |              0.06815 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6838 | >20%                    |                10 |              0.06838 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6879 | >20%                    |                 5 |              0.13758 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.696  | 15-20%                  |                10 |              0.0696  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7034 | 15-20%                  |                10 |              0.07034 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7046 | >20%                    |                10 |              0.07046 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7049 | >20%                    |                 5 |              0.14098 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7093 | >20%                    |                10 |              0.07093 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7191 | 15-20%                  |                10 |              0.07191 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7208 | >20%                    |                 2 |              0.3604  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7219 | 10-15%                  |                 5 |              0.14438 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7261 | <5%                     |                 5 |              0.14522 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7337 | 15-20%                  |                10 |              0.07337 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7459 | <5%                     |                10 |              0.07459 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7466 | <5%                     |                 5 |              0.14932 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7544 | >20%                    |                 2 |              0.3772  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7552 | >20%                    |                10 |              0.07552 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7609 | <5%                     |                10 |              0.07609 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7785 | >20%                    |                10 |              0.07785 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7866 | >20%                    |                 5 |              0.15732 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7914 | >20%                    |                10 |              0.07914 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7931 | <5%                     |                10 |              0.07931 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7974 | >20%                    |                 5 |              0.15948 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7992 | 10-15%                  |                 5 |              0.15984 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8083 | 15-20%                  |                10 |              0.08083 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8399 | >20%                    |                10 |              0.08399 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8425 | >20%                    |                10 |              0.08425 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8492 | 15-20%                  |                10 |              0.08492 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8548 | >20%                    |                10 |              0.08548 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8613 | 10-15%                  |                10 |              0.08613 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.894  | >20%                    |                10 |              0.0894  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9214 | <5%                     |                10 |              0.09214 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9325 | >20%                    |                10 |              0.09325 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9386 | >20%                    |                10 |              0.09386 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9497 | >20%                    |                 5 |              0.18994 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9505 | >20%                    |                10 |              0.09505 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9597 | >20%                    |                10 |              0.09597 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9674 | >20%                    |                10 |              0.09674 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0036 | >20%                    |                10 |              0.10036 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.018  | >20%                    |                 5 |              0.2036  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0287 | <5%                     |                 2 |              0.51435 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0294 | >20%                    |                10 |              0.10294 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0373 | >20%                    |                10 |              0.10373 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0481 | 10-15%                  |                10 |              0.10481 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0495 | <5%                     |                 2 |              0.52475 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0548 | >20%                    |                 2 |              0.5274  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.091  | >20%                    |                 2 |              0.5455  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1194 | >20%                    |                10 |              0.11194 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1206 | 15-20%                  |                10 |              0.11206 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1222 | <5%                     |                 5 |              0.22444 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1259 | >20%                    |                 5 |              0.22518 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1462 | 15-20%                  |                10 |              0.11462 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1486 | >20%                    |                 5 |              0.22972 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2071 | 15-20%                  |                10 |              0.12071 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2122 | 10-15%                  |                10 |              0.12122 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2947 | >20%                    |                10 |              0.12947 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3353 | <5%                     |                10 |              0.13353 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3848 | >20%                    |                10 |              0.13848 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4153 | <5%                     |                 5 |              0.28306 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4597 | >20%                    |                 5 |              0.29194 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4696 | >20%                    |                 2 |              0.7348  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5531 | 10-15%                  |                10 |              0.15531 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6728 | <5%                     |                10 |              0.16728 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9904 | 5-10%                   |                10 |              0.19904 |