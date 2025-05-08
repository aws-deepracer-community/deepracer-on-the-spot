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

Data correct as of 2025-05-08 01:52:46.412758, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1341 | >20%                    |                 2 |              0.06705 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1895 | >20%                    |                 5 |              0.0379  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.208  | 5-10%                   |                 5 |              0.0416  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2205 | >20%                    |                 2 |              0.11025 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2229 | >20%                    |                 5 |              0.04458 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2236 | <5%                     |                 2 |              0.1118  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | 15-20%                  |                 2 |              0.1166  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2419 | 15-20%                  |                 5 |              0.04838 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.249  | <5%                     |                 5 |              0.0498  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | 5-10%                   |                 2 |              0.1287  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | >20%                    |                 2 |              0.1289  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2657 | <5%                     |                 2 |              0.13285 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2701 | 15-20%                  |                 2 |              0.13505 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2764 | <5%                     |                 2 |              0.1382  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2782 | 5-10%                   |                 5 |              0.05564 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | 5-10%                   |                 2 |              0.13945 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | >20%                    |                 2 |              0.1404  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | >20%                    |                 2 |              0.14525 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2946 | 15-20%                  |                10 |              0.02946 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2958 | 10-15%                  |                 2 |              0.1479  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3046 | 5-10%                   |                 2 |              0.1523  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3065 | 15-20%                  |                10 |              0.03065 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3069 | 5-10%                   |                 2 |              0.15345 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | <5%                     |                 2 |              0.1539  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.31   | >20%                    |                 2 |              0.155   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.319  | 5-10%                   |                 2 |              0.1595  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3197 | >20%                    |                 2 |              0.15985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3211 | >20%                    |                 2 |              0.16055 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.334  | >20%                    |                 2 |              0.167   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3357 | >20%                    |                10 |              0.03357 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.336  | >20%                    |                 2 |              0.168   |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3419 | 10-15%                  |                10 |              0.03419 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3472 | 15-20%                  |                10 |              0.03472 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3486 | >20%                    |                 5 |              0.06972 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.355  | >20%                    |                 2 |              0.1775  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3613 | <5%                     |                 5 |              0.07226 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | >20%                    |                 5 |              0.07254 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3648 | >20%                    |                 2 |              0.1824  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3712 | 5-10%                   |                 5 |              0.07424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3726 | <5%                     |                 2 |              0.1863  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3734 | >20%                    |                 2 |              0.1867  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3775 | 10-15%                  |                10 |              0.03775 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3815 | <5%                     |                 5 |              0.0763  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3837 | >20%                    |                10 |              0.03837 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3854 | 15-20%                  |                 5 |              0.07708 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3877 | >20%                    |                 5 |              0.07754 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3906 | >20%                    |                 5 |              0.07812 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3916 | >20%                    |                 2 |              0.1958  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3946 | 10-15%                  |                 2 |              0.1973  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3972 | 5-10%                   |                 5 |              0.07944 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.406  | 10-15%                  |                 2 |              0.203   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4108 | >20%                    |                 2 |              0.2054  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4115 | 5-10%                   |                 2 |              0.20575 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4126 | >20%                    |                 2 |              0.2063  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4135 | 10-15%                  |                10 |              0.04135 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | >20%                    |                 2 |              0.2069  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4168 | >20%                    |                 5 |              0.08336 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4246 | >20%                    |                10 |              0.04246 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4287 | 10-15%                  |                 2 |              0.21435 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4351 | 15-20%                  |                 2 |              0.21755 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4374 | >20%                    |                 2 |              0.2187  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.439  | 15-20%                  |                 5 |              0.0878  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4487 | <5%                     |                 5 |              0.08974 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4547 | 10-15%                  |                 5 |              0.09094 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4563 | <5%                     |                 2 |              0.22815 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4594 | >20%                    |                 5 |              0.09188 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4623 | 5-10%                   |                 5 |              0.09246 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4635 | >20%                    |                 5 |              0.0927  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4675 | >20%                    |                 5 |              0.0935  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4681 | >20%                    |                 2 |              0.23405 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4731 | >20%                    |                 5 |              0.09462 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4741 | >20%                    |                 5 |              0.09482 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4803 | >20%                    |                 2 |              0.24015 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.481  | <5%                     |                 5 |              0.0962  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | 5-10%                   |                 5 |              0.09796 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4914 | >20%                    |                 2 |              0.2457  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.494  | >20%                    |                 5 |              0.0988  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4995 | 15-20%                  |                 5 |              0.0999  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5068 | >20%                    |                 5 |              0.10136 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5072 | 10-15%                  |                 5 |              0.10144 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5281 | >20%                    |                 2 |              0.26405 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5295 | >20%                    |                 2 |              0.26475 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.531  | >20%                    |                 2 |              0.2655  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.533  | >20%                    |                 2 |              0.2665  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5379 | 10-15%                  |                 2 |              0.26895 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5637 | 10-15%                  |                 5 |              0.11274 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5657 | 5-10%                   |                 5 |              0.11314 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5692 | <5%                     |                10 |              0.05692 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5745 | >20%                    |                 5 |              0.1149  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.575  | 10-15%                  |                10 |              0.0575  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5763 | >20%                    |                 5 |              0.11526 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5779 | >20%                    |                 5 |              0.11558 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5877 | >20%                    |                 2 |              0.29385 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5882 | >20%                    |                 5 |              0.11764 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5908 | <5%                     |                10 |              0.05908 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5927 | 10-15%                  |                 2 |              0.29635 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5954 | >20%                    |                 2 |              0.2977  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6035 | <5%                     |                 5 |              0.1207  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6108 | >20%                    |                 2 |              0.3054  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6122 | >20%                    |                 5 |              0.12244 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6234 | 10-15%                  |                 5 |              0.12468 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6355 | >20%                    |                 5 |              0.1271  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6383 | >20%                    |                 5 |              0.12766 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6443 | 15-20%                  |                10 |              0.06443 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6501 | 5-10%                   |                10 |              0.06501 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6567 | >20%                    |                 2 |              0.32835 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6569 | >20%                    |                10 |              0.06569 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6644 | 15-20%                  |                 5 |              0.13288 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6952 | >20%                    |                 2 |              0.3476  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7066 | >20%                    |                 5 |              0.14132 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7167 | >20%                    |                 2 |              0.35835 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7171 | >20%                    |                 5 |              0.14342 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.723  | >20%                    |                 5 |              0.1446  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7237 | >20%                    |                10 |              0.07237 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7279 | 5-10%                   |                10 |              0.07279 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7292 | >20%                    |                10 |              0.07292 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7303 | <5%                     |                 5 |              0.14606 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7442 | >20%                    |                10 |              0.07442 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7444 | 15-20%                  |                10 |              0.07444 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.745  | <5%                     |                 5 |              0.149   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7502 | >20%                    |                10 |              0.07502 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7674 | >20%                    |                 2 |              0.3837  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7795 | >20%                    |                 5 |              0.1559  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7798 | <5%                     |                 5 |              0.15596 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7815 | 10-15%                  |                10 |              0.07815 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.805  | >20%                    |                 5 |              0.161   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8062 | <5%                     |                10 |              0.08062 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8164 | 15-20%                  |                10 |              0.08164 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8188 | 10-15%                  |                10 |              0.08188 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.828  | 5-10%                   |                10 |              0.0828  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8282 | 15-20%                  |                10 |              0.08282 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8289 | 10-15%                  |                 5 |              0.16578 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.835  | >20%                    |                10 |              0.0835  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8366 | 10-15%                  |                10 |              0.08366 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8455 | >20%                    |                 2 |              0.42275 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8499 | 10-15%                  |                10 |              0.08499 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8523 | >20%                    |                10 |              0.08523 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8545 | 15-20%                  |                10 |              0.08545 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8592 | 15-20%                  |                10 |              0.08592 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8636 | >20%                    |                 2 |              0.4318  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8649 | >20%                    |                 2 |              0.43245 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.89   | 10-15%                  |                10 |              0.089   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8991 | >20%                    |                 5 |              0.17982 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8996 | >20%                    |                10 |              0.08996 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9004 | <5%                     |                10 |              0.09004 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9041 | >20%                    |                10 |              0.09041 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9083 | 10-15%                  |                10 |              0.09083 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9257 | <5%                     |                10 |              0.09257 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9319 | 15-20%                  |                10 |              0.09319 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9513 | >20%                    |                10 |              0.09513 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0116 | >20%                    |                 2 |              0.5058  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0231 | <5%                     |                10 |              0.10231 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0295 | >20%                    |                 5 |              0.2059  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0295 | >20%                    |                10 |              0.10295 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0322 | >20%                    |                10 |              0.10322 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.034  | >20%                    |                10 |              0.1034  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0729 | 15-20%                  |                 2 |              0.53645 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0833 | >20%                    |                 5 |              0.21666 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.094  | <5%                     |                 5 |              0.2188  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1181 | <5%                     |                10 |              0.11181 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.133  | 10-15%                  |                 5 |              0.2266  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1524 | >20%                    |                10 |              0.11524 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1666 | 10-15%                  |                 2 |              0.5833  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2258 | >20%                    |                10 |              0.12258 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2598 | >20%                    |                 5 |              0.25196 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2988 | <5%                     |                 5 |              0.25976 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3028 | >20%                    |                10 |              0.13028 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3569 | >20%                    |                 2 |              0.67845 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3728 | >20%                    |                 5 |              0.27456 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.394  | >20%                    |                10 |              0.1394  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4113 | 15-20%                  |                10 |              0.14113 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4494 | 15-20%                  |                10 |              0.14494 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5222 | 15-20%                  |                10 |              0.15222 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6782 | 5-10%                   |                10 |              0.16782 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8153 | >20%                    |                10 |              0.18153 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9917 | <5%                     |                10 |              0.19917 |