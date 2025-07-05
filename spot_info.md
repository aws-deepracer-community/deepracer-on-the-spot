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

Data correct as of 2025-07-05 01:53:11.578088, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.162  | >20%                    |                 5 |              0.0324  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1673 | 10-15%                  |                 5 |              0.03346 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1676 | <5%                     |                 2 |              0.0838  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1789 | >20%                    |                 2 |              0.08945 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2004 | 5-10%                   |                 2 |              0.1002  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | >20%                    |                10 |              0.02014 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2023 | 10-15%                  |                 5 |              0.04046 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2052 | >20%                    |                 5 |              0.04104 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2055 | >20%                    |                 2 |              0.10275 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2115 | >20%                    |                 2 |              0.10575 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2164 | 15-20%                  |                 2 |              0.1082  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2313 | >20%                    |                 2 |              0.11565 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2378 | 15-20%                  |                 2 |              0.1189  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2404 | 5-10%                   |                 2 |              0.1202  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | >20%                    |                 2 |              0.12835 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | >20%                    |                 2 |              0.13    |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2697 | 5-10%                   |                10 |              0.02697 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2718 | >20%                    |                 5 |              0.05436 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2877 | >20%                    |                 5 |              0.05754 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | >20%                    |                 2 |              0.14675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2963 | <5%                     |                 2 |              0.14815 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3044 | >20%                    |                10 |              0.03044 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | 5-10%                   |                 2 |              0.1535  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | 10-15%                  |                 2 |              0.1537  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | >20%                    |                 2 |              0.1594  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3217 | >20%                    |                 2 |              0.16085 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3263 | 15-20%                  |                 2 |              0.16315 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3287 | >20%                    |                 5 |              0.06574 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3289 | >20%                    |                 2 |              0.16445 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3416 | <5%                     |                 2 |              0.1708  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3427 | 15-20%                  |                 5 |              0.06854 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3528 | >20%                    |                 2 |              0.1764  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3672 | <5%                     |                10 |              0.03672 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3712 | >20%                    |                 2 |              0.1856  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3746 | >20%                    |                 5 |              0.07492 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3775 | >20%                    |                10 |              0.03775 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3792 | >20%                    |                 2 |              0.1896  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | >20%                    |                 2 |              0.19045 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3882 | 5-10%                   |                 2 |              0.1941  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3952 | 5-10%                   |                 2 |              0.1976  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4037 | >20%                    |                 5 |              0.08074 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4043 | >20%                    |                 2 |              0.20215 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4069 | >20%                    |                 2 |              0.20345 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | <5%                     |                 2 |              0.20705 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4172 | >20%                    |                 2 |              0.2086  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4203 | >20%                    |                10 |              0.04203 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | >20%                    |                 2 |              0.21675 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4342 | 15-20%                  |                 5 |              0.08684 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4388 | >20%                    |                 5 |              0.08776 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4466 | 10-15%                  |                 2 |              0.2233  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.451  | >20%                    |                 5 |              0.0902  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4587 | >20%                    |                 2 |              0.22935 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4591 | >20%                    |                10 |              0.04591 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4628 | >20%                    |                 2 |              0.2314  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.468  | >20%                    |                 5 |              0.0936  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | >20%                    |                 2 |              0.2346  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4716 | <5%                     |                 2 |              0.2358  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | <5%                     |                 5 |              0.09452 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | <5%                     |                 5 |              0.0946  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.474  | 10-15%                  |                 5 |              0.0948  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4749 | 5-10%                   |                 2 |              0.23745 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4757 | >20%                    |                 5 |              0.09514 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4811 | >20%                    |                 2 |              0.24055 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4831 | >20%                    |                 5 |              0.09662 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4857 | 15-20%                  |                 5 |              0.09714 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4858 | >20%                    |                 2 |              0.2429  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4903 | >20%                    |                 2 |              0.24515 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4908 | 10-15%                  |                 5 |              0.09816 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4989 | >20%                    |                 5 |              0.09978 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5022 | >20%                    |                 5 |              0.10044 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5026 | 15-20%                  |                 2 |              0.2513  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5049 | >20%                    |                 5 |              0.10098 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5159 | <5%                     |                 5 |              0.10318 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.519  | >20%                    |                 5 |              0.1038  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | 15-20%                  |                 5 |              0.10424 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5284 | >20%                    |                 2 |              0.2642  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.532  | >20%                    |                10 |              0.0532  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5348 | >20%                    |                 2 |              0.2674  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5387 | >20%                    |                 5 |              0.10774 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5408 | >20%                    |                 2 |              0.2704  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5433 | >20%                    |                 2 |              0.27165 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5464 | >20%                    |                 2 |              0.2732  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5468 | >20%                    |                 5 |              0.10936 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5556 | <5%                     |                 5 |              0.11112 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5655 | >20%                    |                10 |              0.05655 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5689 | >20%                    |                 2 |              0.28445 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5706 | >20%                    |                 2 |              0.2853  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5744 | >20%                    |                 5 |              0.11488 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5927 | >20%                    |                 2 |              0.29635 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5952 | 10-15%                  |                 5 |              0.11904 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5965 | 5-10%                   |                 2 |              0.29825 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6015 | >20%                    |                10 |              0.06015 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6054 | >20%                    |                 5 |              0.12108 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6105 | >20%                    |                 5 |              0.1221  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | 15-20%                  |                10 |              0.06159 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6236 | 10-15%                  |                 5 |              0.12472 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6257 | >20%                    |                 5 |              0.12514 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6281 | >20%                    |                 5 |              0.12562 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6297 | 5-10%                   |                 5 |              0.12594 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6307 | >20%                    |                 5 |              0.12614 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6344 | 10-15%                  |                 2 |              0.3172  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6439 | 15-20%                  |                10 |              0.06439 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6444 | >20%                    |                 5 |              0.12888 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6469 | >20%                    |                 5 |              0.12938 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6491 | >20%                    |                 5 |              0.12982 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6499 | >20%                    |                10 |              0.06499 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6595 | >20%                    |                 2 |              0.32975 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.66   | >20%                    |                10 |              0.066   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6627 | >20%                    |                 5 |              0.13254 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.678  | 5-10%                   |                 5 |              0.1356  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6934 | <5%                     |                 5 |              0.13868 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7028 | >20%                    |                10 |              0.07028 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7117 | 10-15%                  |                10 |              0.07117 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7147 | <5%                     |                 5 |              0.14294 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7177 | >20%                    |                 5 |              0.14354 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7276 | >20%                    |                 2 |              0.3638  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7279 | 10-15%                  |                10 |              0.07279 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7409 | >20%                    |                 5 |              0.14818 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7428 | >20%                    |                 5 |              0.14856 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7489 | 5-10%                   |                10 |              0.07489 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7516 | >20%                    |                 5 |              0.15032 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.763  | 15-20%                  |                 5 |              0.1526  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7658 | >20%                    |                10 |              0.07658 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | 15-20%                  |                10 |              0.07784 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7818 | 10-15%                  |                10 |              0.07818 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7848 | >20%                    |                 5 |              0.15696 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8019 | 10-15%                  |                 5 |              0.16038 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8038 | 5-10%                   |                10 |              0.08038 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.808  | <5%                     |                10 |              0.0808  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8205 | <5%                     |                10 |              0.08205 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.829  | >20%                    |                10 |              0.0829  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8337 | 10-15%                  |                10 |              0.08337 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8379 | >20%                    |                10 |              0.08379 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8417 | 5-10%                   |                10 |              0.08417 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8553 | >20%                    |                10 |              0.08553 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8567 | 5-10%                   |                10 |              0.08567 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.858  | <5%                     |                10 |              0.0858  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8884 | >20%                    |                10 |              0.08884 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8909 | 15-20%                  |                10 |              0.08909 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8913 | >20%                    |                10 |              0.08913 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.918  | >20%                    |                10 |              0.0918  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9308 | 5-10%                   |                10 |              0.09308 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9343 | 15-20%                  |                10 |              0.09343 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9421 | >20%                    |                10 |              0.09421 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9487 | >20%                    |                 5 |              0.18974 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9531 | >20%                    |                10 |              0.09531 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9553 | 15-20%                  |                10 |              0.09553 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9885 | >20%                    |                10 |              0.09885 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9919 | >20%                    |                 2 |              0.49595 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0114 | >20%                    |                10 |              0.10114 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | <5%                     |                10 |              0.10256 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0269 | <5%                     |                10 |              0.10269 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0359 | >20%                    |                10 |              0.10359 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.041  | >20%                    |                10 |              0.1041  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0459 | 15-20%                  |                10 |              0.10459 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0536 | >20%                    |                 2 |              0.5268  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0664 | <5%                     |                 2 |              0.5332  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0842 | <5%                     |                10 |              0.10842 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0985 | <5%                     |                10 |              0.10985 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1178 | >20%                    |                10 |              0.11178 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1532 | >20%                    |                10 |              0.11532 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1817 | >20%                    |                10 |              0.11817 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1846 | >20%                    |                 2 |              0.5923  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1886 | 10-15%                  |                10 |              0.11886 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1977 | >20%                    |                 2 |              0.59885 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2579 | 15-20%                  |                10 |              0.12579 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2626 | <5%                     |                 5 |              0.25252 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.275  | >20%                    |                 5 |              0.255   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3262 | >20%                    |                 5 |              0.26524 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3588 | >20%                    |                10 |              0.13588 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4317 | <5%                     |                 5 |              0.28634 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4701 | >20%                    |                 5 |              0.29402 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6584 | 15-20%                  |                10 |              0.16584 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8181 | >20%                    |                10 |              0.18181 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8545 | <5%                     |                10 |              0.18545 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0999 | 5-10%                   |                10 |              0.20999 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.201  | <5%                     |                 2 |              1.1005  |