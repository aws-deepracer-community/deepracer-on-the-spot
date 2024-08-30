# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

vCPU - number of vCPUs

RAM (GB) - amount of memory 

GPU RAM (GB) - amount of GPU memory

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2024-08-30 10:54:22.076524, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1952 | 15-20%                  |                 2 |              0.0976  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2108 | >20%                    |                 5 |              0.04216 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | <5%                     |                 2 |              0.11625 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | 15-20%                  |                 2 |              0.1173  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2458 | <5%                     |                 2 |              0.1229  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2507 | 10-15%                  |                 2 |              0.12535 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2508 | 10-15%                  |                 2 |              0.1254  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2537 | <5%                     |                 5 |              0.05074 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | >20%                    |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2699 | <5%                     |                 2 |              0.13495 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | <5%                     |                 2 |              0.1353  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | <5%                     |                 2 |              0.14845 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | <5%                     |                 2 |              0.15325 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3149 | 10-15%                  |                 2 |              0.15745 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3174 | <5%                     |                 2 |              0.1587  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3236 | >20%                    |                 5 |              0.06472 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3264 | <5%                     |                 2 |              0.1632  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3397 | <5%                     |                 2 |              0.16985 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3424 | <5%                     |                 2 |              0.1712  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3542 | <5%                     |                 2 |              0.1771  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3749 | <5%                     |                 2 |              0.18745 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | <5%                     |                 5 |              0.075   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3831 | <5%                     |                 2 |              0.19155 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3853 | <5%                     |                 5 |              0.07706 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3861 | <5%                     |                 2 |              0.19305 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3913 | 10-15%                  |                 2 |              0.19565 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3936 | <5%                     |                 2 |              0.1968  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.3959 | <5%                     |                 2 |              0.19795 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4099 | >20%                    |                 2 |              0.20495 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | 15-20%                  |                 5 |              0.08508 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4355 | >20%                    |                 2 |              0.21775 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4366 | >20%                    |                 2 |              0.2183  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4389 | >20%                    |                10 |              0.04389 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4394 | >20%                    |                 2 |              0.2197  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.451  | 5-10%                   |                 5 |              0.0902  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | <5%                     |                 5 |              0.09084 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4555 | 10-15%                  |                 2 |              0.22775 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4643 | >20%                    |                 2 |              0.23215 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4679 | <5%                     |                 5 |              0.09358 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | >20%                    |                 5 |              0.09372 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | 10-15%                  |                 2 |              0.23445 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4732 | >20%                    |                 5 |              0.09464 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | 10-15%                  |                 5 |              0.09574 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4839 | 15-20%                  |                 5 |              0.09678 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4879 | 5-10%                   |                 5 |              0.09758 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4932 | 5-10%                   |                 5 |              0.09864 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | 5-10%                   |                 5 |              0.0992  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4968 | <5%                     |                 5 |              0.09936 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5035 | >20%                    |                 2 |              0.25175 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5039 | >20%                    |                 5 |              0.10078 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5089 | <5%                     |                 5 |              0.10178 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5207 | <5%                     |                 5 |              0.10414 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5237 | 10-15%                  |                 5 |              0.10474 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5417 | <5%                     |                 5 |              0.10834 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5511 | <5%                     |                 5 |              0.11022 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5617 | <5%                     |                 2 |              0.28085 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5663 | >20%                    |                 2 |              0.28315 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5841 | >20%                    |                 2 |              0.29205 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5846 | <5%                     |                 5 |              0.11692 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5876 | >20%                    |                 2 |              0.2938  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5877 | 10-15%                  |                 5 |              0.11754 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5921 | 10-15%                  |                 2 |              0.29605 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6085 | >20%                    |                 5 |              0.1217  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6102 | <5%                     |                10 |              0.06102 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6211 | <5%                     |                10 |              0.06211 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6213 | <5%                     |                 5 |              0.12426 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6227 | >20%                    |                 5 |              0.12454 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6345 | >20%                    |                 5 |              0.1269  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6532 | 10-15%                  |                 5 |              0.13064 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6701 | >20%                    |                 5 |              0.13402 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6828 | <5%                     |                10 |              0.06828 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6836 | >20%                    |                 5 |              0.13672 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.703  | <5%                     |                 5 |              0.1406  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.7336 | 5-10%                   |                10 |              0.07336 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7367 | <5%                     |                10 |              0.07367 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7369 | <5%                     |                10 |              0.07369 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7426 | >20%                    |                 2 |              0.3713  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7621 | >20%                    |                10 |              0.07621 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | 10-15%                  |                10 |              0.0765  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7722 | >20%                    |                 5 |              0.15444 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.781  | 10-15%                  |                10 |              0.0781  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7886 | 5-10%                   |                10 |              0.07886 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7943 | >20%                    |                 5 |              0.15886 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7959 | 15-20%                  |                10 |              0.07959 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7961 | 10-15%                  |                10 |              0.07961 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8152 | <5%                     |                10 |              0.08152 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8189 | <5%                     |                10 |              0.08189 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8198 | 10-15%                  |                10 |              0.08198 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8207 | >20%                    |                10 |              0.08207 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8258 | <5%                     |                10 |              0.08258 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8327 | <5%                     |                10 |              0.08327 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8646 | >20%                    |                10 |              0.08646 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8869 | >20%                    |                 5 |              0.17738 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8985 | <5%                     |                10 |              0.08985 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.92   | >20%                    |                10 |              0.092   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9266 | <5%                     |                10 |              0.09266 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9438 | >20%                    |                10 |              0.09438 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9527 | <5%                     |                10 |              0.09527 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9785 | >20%                    |                10 |              0.09785 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9936 | 5-10%                   |                10 |              0.09936 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0133 | >20%                    |                10 |              0.10133 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0273 | 5-10%                   |                10 |              0.10273 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      1.0351 | >20%                    |                 5 |              0.20702 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0589 | >20%                    |                10 |              0.10589 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1725 | >20%                    |                10 |              0.11725 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1842 | >20%                    |                10 |              0.11842 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2011 | >20%                    |                10 |              0.12011 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4638 | >20%                    |                10 |              0.14638 |