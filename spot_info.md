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

Data correct as of 2026-07-21 03:13:42.362659, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1466 | >20%                    |                 2 |              0.0733  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1473 | >20%                    |                 2 |              0.07365 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1855 | >20%                    |                 2 |              0.09275 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2199 | 15-20%                  |                 2 |              0.10995 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2393 | >20%                    |                 2 |              0.11965 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | >20%                    |                 2 |              0.1223  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2599 | >20%                    |                 2 |              0.12995 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | >20%                    |                 2 |              0.13365 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2691 | >20%                    |                 2 |              0.13455 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2765 | 15-20%                  |                 2 |              0.13825 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2828 | >20%                    |                 2 |              0.1414  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2835 | 10-15%                  |                 2 |              0.14175 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2847 | >20%                    |                 2 |              0.14235 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | 15-20%                  |                 2 |              0.1529  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3073 | 5-10%                   |                10 |              0.03073 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3089 | 15-20%                  |                 5 |              0.06178 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | >20%                    |                 2 |              0.15845 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3257 | >20%                    |                 5 |              0.06514 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3315 | 15-20%                  |                 5 |              0.0663  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3536 | >20%                    |                10 |              0.03536 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3545 | 5-10%                   |                10 |              0.03545 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3561 | >20%                    |                 5 |              0.07122 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3606 | >20%                    |                 2 |              0.1803  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3629 | >20%                    |                 5 |              0.07258 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3638 | <5%                     |                 2 |              0.1819  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3729 | >20%                    |                 5 |              0.07458 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3738 | >20%                    |                 5 |              0.07476 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3759 | >20%                    |                 5 |              0.07518 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3768 | >20%                    |                10 |              0.03768 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3895 | 15-20%                  |                 2 |              0.19475 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3977 | >20%                    |                 5 |              0.07954 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3989 | 10-15%                  |                 2 |              0.19945 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4092 | >20%                    |                 2 |              0.2046  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | >20%                    |                 5 |              0.08214 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4141 | >20%                    |                 2 |              0.20705 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.416  | >20%                    |                10 |              0.0416  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4202 | 10-15%                  |                 2 |              0.2101  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4288 | >20%                    |                10 |              0.04288 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4294 | 5-10%                   |                10 |              0.04294 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | >20%                    |                 5 |              0.08594 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4375 | >20%                    |                10 |              0.04375 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4544 | 10-15%                  |                 2 |              0.2272  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4546 | >20%                    |                 2 |              0.2273  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4584 | >20%                    |                 5 |              0.09168 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4595 | >20%                    |                 2 |              0.22975 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4623 | >20%                    |                 2 |              0.23115 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4624 | >20%                    |                 5 |              0.09248 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4682 | >20%                    |                 2 |              0.2341  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4738 | >20%                    |                 2 |              0.2369  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4873 | >20%                    |                10 |              0.04873 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4875 | 15-20%                  |                 5 |              0.0975  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4898 | <5%                     |                 2 |              0.2449  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4938 | <5%                     |                 2 |              0.2469  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | >20%                    |                 5 |              0.0991  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5006 | >20%                    |                 5 |              0.10012 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5249 | >20%                    |                10 |              0.05249 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.525  | >20%                    |                 5 |              0.105   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5314 | >20%                    |                 2 |              0.2657  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5379 | 15-20%                  |                 2 |              0.26895 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.545  | 10-15%                  |                10 |              0.0545  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5558 | >20%                    |                 2 |              0.2779  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5569 | >20%                    |                 2 |              0.27845 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5653 | 10-15%                  |                 5 |              0.11306 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.568  | >20%                    |                 5 |              0.1136  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | >20%                    |                 5 |              0.11398 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.573  | 5-10%                   |                 2 |              0.2865  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.584  | >20%                    |                 5 |              0.1168  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.59   | >20%                    |                 5 |              0.118   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5921 | >20%                    |                 5 |              0.11842 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5953 | >20%                    |                 5 |              0.11906 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6013 | >20%                    |                 5 |              0.12026 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6159 | 5-10%                   |                 5 |              0.12318 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6177 |                         |                 2 |              0.30885 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6352 | >20%                    |                10 |              0.06352 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6569 | >20%                    |                10 |              0.06569 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6612 | >20%                    |                 5 |              0.13224 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6749 | 15-20%                  |                 5 |              0.13498 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6813 | >20%                    |                 2 |              0.34065 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6818 | >20%                    |                 5 |              0.13636 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6822 | >20%                    |                 5 |              0.13644 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6935 | 15-20%                  |                 2 |              0.34675 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6965 |                         |                 2 |              0.34825 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7098 | >20%                    |                10 |              0.07098 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7136 | 15-20%                  |                10 |              0.07136 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7144 | >20%                    |                 2 |              0.3572  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | >20%                    |                10 |              0.07161 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7232 | >20%                    |                 5 |              0.14464 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7257 | >20%                    |                10 |              0.07257 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7379 | >20%                    |                 5 |              0.14758 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7394 | >20%                    |                 2 |              0.3697  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7433 | >20%                    |                10 |              0.07433 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7446 | >20%                    |                10 |              0.07446 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7505 | <5%                     |                 5 |              0.1501  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7535 | >20%                    |                 2 |              0.37675 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7542 | >20%                    |                 5 |              0.15084 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7721 | >20%                    |                10 |              0.07721 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7881 | >20%                    |                10 |              0.07881 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7981 | <5%                     |                10 |              0.07981 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8035 | 10-15%                  |                 2 |              0.40175 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8049 | >20%                    |                10 |              0.08049 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8054 | 5-10%                   |                10 |              0.08054 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8174 | >20%                    |                10 |              0.08174 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8257 |                         |                 5 |              0.16514 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8337 | >20%                    |                 5 |              0.16674 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8401 | >20%                    |                10 |              0.08401 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8611 | 15-20%                  |                10 |              0.08611 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8649 | 5-10%                   |                 2 |              0.43245 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8773 | 15-20%                  |                10 |              0.08773 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8866 | 15-20%                  |                10 |              0.08866 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8869 | >20%                    |                 5 |              0.17738 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8933 | 10-15%                  |                 2 |              0.44665 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9043 | >20%                    |                 5 |              0.18086 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9052 | >20%                    |                10 |              0.09052 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9076 | >20%                    |                 2 |              0.4538  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9106 | 5-10%                   |                10 |              0.09106 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9119 | >20%                    |                10 |              0.09119 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9415 | >20%                    |                10 |              0.09415 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9693 | >20%                    |                 5 |              0.19386 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9755 | >20%                    |                 5 |              0.1951  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9821 | 15-20%                  |                10 |              0.09821 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9914 | >20%                    |                 5 |              0.19828 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9932 | >20%                    |                 5 |              0.19864 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9946 | >20%                    |                 5 |              0.19892 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0158 | 5-10%                   |                 5 |              0.20316 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0362 | 10-15%                  |                 2 |              0.5181  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0384 | >20%                    |                 2 |              0.5192  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0686 | >20%                    |                10 |              0.10686 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0873 | >20%                    |                10 |              0.10873 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.095  | >20%                    |                10 |              0.1095  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0957 | >20%                    |                 2 |              0.54785 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1102 | >20%                    |                10 |              0.11102 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1404 | >20%                    |                 5 |              0.22808 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1898 |                         |                10 |              0.11898 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2032 | 15-20%                  |                10 |              0.12032 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.226  |                         |                10 |              0.1226  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2401 |                         |                 5 |              0.24802 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2437 | >20%                    |                10 |              0.12437 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2873 | 5-10%                   |                10 |              0.12873 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2985 | >20%                    |                 5 |              0.2597  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.329  | 15-20%                  |                10 |              0.1329  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.336  | >20%                    |                 5 |              0.2672  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3961 | >20%                    |                10 |              0.13961 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4976 | 15-20%                  |                10 |              0.14976 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5026 | >20%                    |                10 |              0.15026 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5166 | >20%                    |                10 |              0.15166 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5238 | >20%                    |                10 |              0.15238 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5643 | 10-15%                  |                10 |              0.15643 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5774 | 5-10%                   |                 2 |              0.7887  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5948 | 15-20%                  |                 5 |              0.31896 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0737 | 5-10%                   |                 2 |              1.03685 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0779 | >20%                    |                10 |              0.20779 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1543 | >20%                    |                 5 |              0.43086 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.1768 | >20%                    |                 5 |              0.43536 |