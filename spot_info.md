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

Data correct as of 2024-09-11 01:25:25.120828, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2094 | >20%                    |                 5 |              0.04188 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.212  | 15-20%                  |                 5 |              0.0424  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | 15-20%                  |                 2 |              0.11315 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | 10-15%                  |                 2 |              0.11635 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | <5%                     |                 2 |              0.122   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2447 | 10-15%                  |                 2 |              0.12235 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2539 | 5-10%                   |                 2 |              0.12695 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | <5%                     |                 2 |              0.13115 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | <5%                     |                 2 |              0.14015 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | <5%                     |                 2 |              0.14135 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2915 | <5%                     |                 5 |              0.0583  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | 10-15%                  |                 2 |              0.14975 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | <5%                     |                 2 |              0.15715 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.316  | <5%                     |                 2 |              0.158   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3267 | <5%                     |                 2 |              0.16335 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3327 | <5%                     |                 2 |              0.16635 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3551 | 15-20%                  |                 5 |              0.07102 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3573 | <5%                     |                 2 |              0.17865 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3606 | <5%                     |                 2 |              0.1803  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3648 | 5-10%                   |                 5 |              0.07296 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3648 | <5%                     |                 2 |              0.1824  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3675 | <5%                     |                 2 |              0.18375 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3786 | >20%                    |                 5 |              0.07572 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | <5%                     |                 5 |              0.07704 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3859 | >20%                    |                10 |              0.03859 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3875 | 15-20%                  |                 5 |              0.0775  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.389  | 10-15%                  |                 2 |              0.1945  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4091 | >20%                    |                 2 |              0.20455 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4163 | 15-20%                  |                 5 |              0.08326 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4175 | >20%                    |                10 |              0.04175 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4206 | >20%                    |                 2 |              0.2103  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4301 | 5-10%                   |                 2 |              0.21505 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4312 | 5-10%                   |                 2 |              0.2156  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4415 | 15-20%                  |                 5 |              0.0883  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4527 | 10-15%                  |                 5 |              0.09054 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4681 | <5%                     |                 2 |              0.23405 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4685 | <5%                     |                 5 |              0.0937  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4723 | 10-15%                  |                 2 |              0.23615 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | 5-10%                   |                 5 |              0.09462 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | <5%                     |                 5 |              0.09478 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 10-15%                  |                 5 |              0.09494 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4751 | <5%                     |                 5 |              0.09502 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4766 | >20%                    |                 2 |              0.2383  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4792 | <5%                     |                 2 |              0.2396  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4856 | <5%                     |                10 |              0.04856 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.486  | >20%                    |                 2 |              0.243   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4924 | >20%                    |                 2 |              0.2462  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4929 | 5-10%                   |                 5 |              0.09858 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | <5%                     |                 5 |              0.10286 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5181 | <5%                     |                 5 |              0.10362 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5195 | >20%                    |                 5 |              0.1039  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5291 | 5-10%                   |                 5 |              0.10582 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.535  | >20%                    |                 2 |              0.2675  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5651 | >20%                    |                 5 |              0.11302 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5691 | >20%                    |                 5 |              0.11382 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5796 | >20%                    |                 2 |              0.2898  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5821 | <5%                     |                 5 |              0.11642 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5837 | <5%                     |                 5 |              0.11674 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5887 | <5%                     |                 5 |              0.11774 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5946 | 5-10%                   |                 5 |              0.11892 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.595  | >20%                    |                 5 |              0.119   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.6006 | >20%                    |                 2 |              0.3003  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6008 | >20%                    |                 5 |              0.12016 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6012 | 15-20%                  |                 5 |              0.12024 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6102 | <5%                     |                10 |              0.06102 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6138 | >20%                    |                 5 |              0.12276 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.62   | 10-15%                  |                 2 |              0.31    |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.658  | 5-10%                   |                 2 |              0.329   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6696 | <5%                     |                 2 |              0.3348  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6872 | 5-10%                   |                10 |              0.06872 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7017 | <5%                     |                 2 |              0.35085 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7041 | 15-20%                  |                10 |              0.07041 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7087 | <5%                     |                10 |              0.07087 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7123 | >20%                    |                 2 |              0.35615 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7133 | <5%                     |                10 |              0.07133 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7168 | <5%                     |                10 |              0.07168 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7197 | >20%                    |                10 |              0.07197 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7572 | >20%                    |                 5 |              0.15144 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7824 | 5-10%                   |                10 |              0.07824 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7838 | 15-20%                  |                10 |              0.07838 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7911 | >20%                    |                10 |              0.07911 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7957 | >20%                    |                 5 |              0.15914 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7966 | <5%                     |                10 |              0.07966 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7994 | <5%                     |                 5 |              0.15988 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8163 | >20%                    |                10 |              0.08163 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.823  | 10-15%                  |                10 |              0.0823  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8231 | 10-15%                  |                10 |              0.08231 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8261 | 5-10%                   |                 5 |              0.16522 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8368 | >20%                    |                10 |              0.08368 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8676 | >20%                    |                10 |              0.08676 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.877  | <5%                     |                10 |              0.0877  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9162 | >20%                    |                 5 |              0.18324 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9379 | <5%                     |                10 |              0.09379 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9415 | >20%                    |                10 |              0.09415 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9453 | >20%                    |                10 |              0.09453 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9582 | >20%                    |                 5 |              0.19164 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9596 | >20%                    |                10 |              0.09596 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9835 | <5%                     |                10 |              0.09835 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0028 | <5%                     |                 5 |              0.20056 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0163 | >20%                    |                10 |              0.10163 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.024  | 10-15%                  |                10 |              0.1024  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0556 | 10-15%                  |                10 |              0.10556 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0729 | 10-15%                  |                10 |              0.10729 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1467 | >20%                    |                10 |              0.11467 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1574 | >20%                    |                10 |              0.11574 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2235 | >20%                    |                10 |              0.12235 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2777 | <5%                     |                10 |              0.12777 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3312 | 5-10%                   |                10 |              0.13312 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4363 | >20%                    |                10 |              0.14363 |