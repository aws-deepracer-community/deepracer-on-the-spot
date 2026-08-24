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

Data correct as of 2026-08-24 01:36:48.208599, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.139  | >20%                    |                 2 |              0.0695  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1605 | >20%                    |                 2 |              0.08025 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1947 | 15-20%                  |                 2 |              0.09735 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2056 | >20%                    |                 2 |              0.1028  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | >20%                    |                 2 |              0.11095 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | >20%                    |                 2 |              0.1155  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2335 | 15-20%                  |                 2 |              0.11675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | 15-20%                  |                 2 |              0.1193  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2419 | 10-15%                  |                 2 |              0.12095 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2545 | 10-15%                  |                 2 |              0.12725 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | >20%                    |                 2 |              0.13535 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2728 | >20%                    |                 2 |              0.1364  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | >20%                    |                 2 |              0.1439  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2943 | >20%                    |                 5 |              0.05886 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | >20%                    |                 2 |              0.15535 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3117 | >20%                    |                 2 |              0.15585 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3248 | 15-20%                  |                 5 |              0.06496 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3325 | 5-10%                   |                10 |              0.03325 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3367 | >20%                    |                 5 |              0.06734 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3381 | >20%                    |                 5 |              0.06762 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3406 | >20%                    |                10 |              0.03406 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3506 | >20%                    |                 5 |              0.07012 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3661 | 10-15%                  |                 2 |              0.18305 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3784 | <5%                     |                 2 |              0.1892  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3789 | <5%                     |                 2 |              0.18945 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | >20%                    |                 5 |              0.07642 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3869 | >20%                    |                 5 |              0.07738 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3894 | >20%                    |                10 |              0.03894 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3902 | >20%                    |                10 |              0.03902 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3962 | >20%                    |                 2 |              0.1981  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4031 | >20%                    |                 5 |              0.08062 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | >20%                    |                 5 |              0.0809  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4094 | 15-20%                  |                 2 |              0.2047  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4137 | >20%                    |                 2 |              0.20685 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4145 | >20%                    |                10 |              0.04145 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4157 | 5-10%                   |                10 |              0.04157 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4159 | 15-20%                  |                 5 |              0.08318 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4236 | 15-20%                  |                 2 |              0.2118  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4298 | >20%                    |                 2 |              0.2149  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.431  | >20%                    |                 2 |              0.2155  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4327 | >20%                    |                 2 |              0.21635 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4354 | 10-15%                  |                 2 |              0.2177  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4359 | >20%                    |                 5 |              0.08718 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4396 | >20%                    |                 5 |              0.08792 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.443  | >20%                    |                 2 |              0.2215  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4616 | >20%                    |                 5 |              0.09232 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4621 | >20%                    |                 5 |              0.09242 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4643 | >20%                    |                 5 |              0.09286 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4681 | >20%                    |                10 |              0.04681 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4682 | >20%                    |                 5 |              0.09364 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4851 | 15-20%                  |                 5 |              0.09702 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4896 | >20%                    |                 2 |              0.2448  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4959 | >20%                    |                 2 |              0.24795 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | >20%                    |                 5 |              0.09986 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5063 | >20%                    |                 5 |              0.10126 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5136 | >20%                    |                 2 |              0.2568  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5221 | >20%                    |                 5 |              0.10442 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5276 | >20%                    |                10 |              0.05276 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.53   | <5%                     |                 5 |              0.106   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5315 | <5%                     |                 2 |              0.26575 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.541  | >20%                    |                 5 |              0.1082  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.546  | 5-10%                   |                 2 |              0.273   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5541 | >20%                    |                10 |              0.05541 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5597 | >20%                    |                 5 |              0.11194 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5632 | >20%                    |                 2 |              0.2816  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5718 | >20%                    |                 2 |              0.2859  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5766 |                         |                 2 |              0.2883  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5812 | 15-20%                  |                10 |              0.05812 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5816 | >20%                    |                 5 |              0.11632 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5924 | >20%                    |                 2 |              0.2962  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5952 | >20%                    |                 5 |              0.11904 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6005 | 10-15%                  |                 5 |              0.1201  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6066 | >20%                    |                 5 |              0.12132 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6097 | 10-15%                  |                10 |              0.06097 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6309 | >20%                    |                 5 |              0.12618 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6377 | >20%                    |                 5 |              0.12754 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6451 | >20%                    |                 2 |              0.32255 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6463 | >20%                    |                 2 |              0.32315 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6471 | >20%                    |                10 |              0.06471 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6523 | 5-10%                   |                 5 |              0.13046 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6739 | 15-20%                  |                10 |              0.06739 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6753 | >20%                    |                10 |              0.06753 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6921 | >20%                    |                 2 |              0.34605 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.6925 |                         |                 5 |              0.1385  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6985 | >20%                    |                10 |              0.06985 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.702  | >20%                    |                 2 |              0.351   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7089 | >20%                    |                10 |              0.07089 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.713  | >20%                    |                 5 |              0.1426  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7158 | 5-10%                   |                10 |              0.07158 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7268 | 5-10%                   |                10 |              0.07268 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7315 | >20%                    |                 5 |              0.1463  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7365 | >20%                    |                10 |              0.07365 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7591 | 5-10%                   |                10 |              0.07591 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7831 | >20%                    |                10 |              0.07831 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7947 | >20%                    |                 5 |              0.15894 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | >20%                    |                10 |              0.07977 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7997 | 15-20%                  |                10 |              0.07997 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.815  | >20%                    |                 5 |              0.163   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8177 | >20%                    |                10 |              0.08177 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8178 | 15-20%                  |                10 |              0.08178 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8199 | <5%                     |                10 |              0.08199 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8256 | 15-20%                  |                 2 |              0.4128  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8336 | 10-15%                  |                 2 |              0.4168  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8337 | >20%                    |                10 |              0.08337 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.846  | >20%                    |                 5 |              0.1692  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8487 | >20%                    |                10 |              0.08487 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8515 | >20%                    |                10 |              0.08515 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8627 | >20%                    |                10 |              0.08627 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8635 | >20%                    |                 5 |              0.1727  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8656 | >20%                    |                10 |              0.08656 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8704 |                         |                10 |              0.08704 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8798 | >20%                    |                10 |              0.08798 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9013 | >20%                    |                 5 |              0.18026 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9018 | >20%                    |                 2 |              0.4509  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.902  | 10-15%                  |                 2 |              0.451   |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9305 |                         |                 2 |              0.46525 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9325 | >20%                    |                 5 |              0.1865  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9526 | >20%                    |                 5 |              0.19052 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9568 | >20%                    |                 5 |              0.19136 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9679 | >20%                    |                10 |              0.09679 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9776 | >20%                    |                 5 |              0.19552 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0042 | >20%                    |                10 |              0.10042 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0068 | 15-20%                  |                10 |              0.10068 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.015  | >20%                    |                10 |              0.1015  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.036  | >20%                    |                10 |              0.1036  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0421 | >20%                    |                 5 |              0.20842 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0444 | >20%                    |                 5 |              0.20888 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0448 | >20%                    |                10 |              0.10448 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0544 | 15-20%                  |                10 |              0.10544 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0601 | >20%                    |                10 |              0.10601 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0763 | >20%                    |                 5 |              0.21526 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.08   | 5-10%                   |                 2 |              0.54    |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0844 | 5-10%                   |                 5 |              0.21688 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.116  | 10-15%                  |                 2 |              0.558   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.129  | >20%                    |                 5 |              0.2258  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1475 | >20%                    |                10 |              0.11475 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1789 | >20%                    |                 2 |              0.58945 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2026 |                         |                 5 |              0.24052 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.216  | 5-10%                   |                10 |              0.1216  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2316 | 15-20%                  |                10 |              0.12316 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2879 | >20%                    |                 5 |              0.25758 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.294  |                         |                 2 |              0.647   |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.316  |                         |                 5 |              0.2632  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4142 | 10-15%                  |                10 |              0.14142 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4205 | >20%                    |                10 |              0.14205 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5177 | >20%                    |                10 |              0.15177 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5479 | 15-20%                  |                 5 |              0.30958 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.5483 |                         |                10 |              0.15483 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5712 | >20%                    |                10 |              0.15712 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7294 | 15-20%                  |                10 |              0.17294 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8366 |                         |                10 |              0.18366 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9103 | 5-10%                   |                 2 |              0.95515 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9445 | 5-10%                   |                 2 |              0.97225 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.289  | >20%                    |                 5 |              0.4578  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.3263 | >20%                    |                10 |              0.23263 |