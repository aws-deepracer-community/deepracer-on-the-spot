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

Data correct as of 2026-07-08 03:16:29.285825, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1344 | >20%                    |                 2 |              0.0672  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1778 | >20%                    |                 2 |              0.0889  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2173 | 15-20%                  |                 2 |              0.10865 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2372 | >20%                    |                 2 |              0.1186  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2441 | >20%                    |                 2 |              0.12205 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | >20%                    |                 2 |              0.12215 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2493 | >20%                    |                 2 |              0.12465 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.258  | >20%                    |                 2 |              0.129   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2671 | 15-20%                  |                 5 |              0.05342 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | >20%                    |                 2 |              0.13365 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2675 | >20%                    |                 2 |              0.13375 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2733 | 15-20%                  |                 2 |              0.13665 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | >20%                    |                 2 |              0.1424  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2892 | 5-10%                   |                10 |              0.02892 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.291  | 10-15%                  |                 2 |              0.1455  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | 15-20%                  |                 2 |              0.15125 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3074 | 15-20%                  |                 5 |              0.06148 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3201 | >20%                    |                 5 |              0.06402 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3218 | >20%                    |                 2 |              0.1609  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3301 | >20%                    |                 5 |              0.06602 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3378 | >20%                    |                 2 |              0.1689  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.338  | >20%                    |                 5 |              0.0676  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3582 | <5%                     |                 2 |              0.1791  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3613 | >20%                    |                 5 |              0.07226 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3618 | >20%                    |                 5 |              0.07236 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3636 | 5-10%                   |                10 |              0.03636 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3737 | >20%                    |                10 |              0.03737 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | >20%                    |                 5 |              0.075   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3769 | >20%                    |                 2 |              0.18845 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3819 | >20%                    |                 5 |              0.07638 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3825 | 5-10%                   |                10 |              0.03825 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3918 | 10-15%                  |                 2 |              0.1959  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4014 | 15-20%                  |                 5 |              0.08028 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4071 | >20%                    |                10 |              0.04071 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4091 | >20%                    |                10 |              0.04091 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4105 | >20%                    |                 2 |              0.20525 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4148 | 10-15%                  |                 2 |              0.2074  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4216 | >20%                    |                 2 |              0.2108  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4236 | 10-15%                  |                 2 |              0.2118  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4245 | >20%                    |                 5 |              0.0849  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4333 | <5%                     |                 2 |              0.21665 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4413 | >20%                    |                 2 |              0.22065 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4464 | >20%                    |                10 |              0.04464 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | >20%                    |                 5 |              0.08956 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4489 | >20%                    |                 2 |              0.22445 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4496 | <5%                     |                 2 |              0.2248  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.452  | >20%                    |                10 |              0.0452  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4605 | >20%                    |                 5 |              0.0921  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4624 | >20%                    |                 2 |              0.2312  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4667 | >20%                    |                 5 |              0.09334 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4729 | 15-20%                  |                 2 |              0.23645 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4734 | >20%                    |                 2 |              0.2367  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4773 | >20%                    |                 5 |              0.09546 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4837 | >20%                    |                 2 |              0.24185 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4883 | >20%                    |                10 |              0.04883 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5016 | 15-20%                  |                 2 |              0.2508  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | >20%                    |                 5 |              0.10044 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5025 | >20%                    |                 5 |              0.1005  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5074 | >20%                    |                 5 |              0.10148 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5138 | >20%                    |                 5 |              0.10276 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5141 | >20%                    |                 5 |              0.10282 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5305 | 15-20%                  |                 2 |              0.26525 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5354 | 5-10%                   |                 2 |              0.2677  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5361 | >20%                    |                 2 |              0.26805 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5476 | >20%                    |                 5 |              0.10952 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5542 | 5-10%                   |                 5 |              0.11084 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5546 | >20%                    |                 5 |              0.11092 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5549 | >20%                    |                 5 |              0.11098 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5563 | >20%                    |                10 |              0.05563 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5649 | 10-15%                  |                 5 |              0.11298 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5917 | <5%                     |                 5 |              0.11834 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5918 |                         |                 2 |              0.2959  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5936 | >20%                    |                 5 |              0.11872 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5946 | 15-20%                  |                 5 |              0.11892 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6034 | >20%                    |                 5 |              0.12068 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6118 | >20%                    |                 2 |              0.3059  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6129 | >20%                    |                 2 |              0.30645 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6189 | >20%                    |                 5 |              0.12378 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.62   | >20%                    |                10 |              0.062   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6361 | >20%                    |                10 |              0.06361 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6362 | >20%                    |                 5 |              0.12724 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6512 | >20%                    |                 5 |              0.13024 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6569 | >20%                    |                10 |              0.06569 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6599 | >20%                    |                10 |              0.06599 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6766 | >20%                    |                 2 |              0.3383  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6841 | >20%                    |                 2 |              0.34205 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6851 | >20%                    |                 5 |              0.13702 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6992 | >20%                    |                10 |              0.06992 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6998 | >20%                    |                10 |              0.06998 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7081 | >20%                    |                 2 |              0.35405 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7092 | >20%                    |                 5 |              0.14184 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7096 | 10-15%                  |                10 |              0.07096 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7181 | >20%                    |                 5 |              0.14362 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7191 | 10-15%                  |                 2 |              0.35955 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7226 | >20%                    |                10 |              0.07226 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7245 | >20%                    |                 2 |              0.36225 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7247 | >20%                    |                 5 |              0.14494 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7642 | 5-10%                   |                 2 |              0.3821  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7664 | >20%                    |                10 |              0.07664 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7877 | >20%                    |                10 |              0.07877 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7926 |                         |                 2 |              0.3963  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7927 | 5-10%                   |                10 |              0.07927 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7928 | >20%                    |                10 |              0.07928 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7944 | >20%                    |                 2 |              0.3972  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7955 | 15-20%                  |                10 |              0.07955 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.808  | <5%                     |                10 |              0.0808  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.811  | >20%                    |                10 |              0.0811  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8153 | 5-10%                   |                 5 |              0.16306 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8259 | 5-10%                   |                10 |              0.08259 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8401 | 15-20%                  |                10 |              0.08401 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8492 | >20%                    |                 5 |              0.16984 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8497 | 10-15%                  |                 2 |              0.42485 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8505 | >20%                    |                10 |              0.08505 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8519 | >20%                    |                10 |              0.08519 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8572 | 15-20%                  |                10 |              0.08572 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8634 |                         |                 5 |              0.17268 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8639 | >20%                    |                10 |              0.08639 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8645 | >20%                    |                10 |              0.08645 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8694 | >20%                    |                 5 |              0.17388 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8726 | 15-20%                  |                10 |              0.08726 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8728 | >20%                    |                 5 |              0.17456 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8848 | >20%                    |                 5 |              0.17696 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9049 | 15-20%                  |                10 |              0.09049 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9051 | >20%                    |                10 |              0.09051 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9477 | >20%                    |                10 |              0.09477 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9822 | >20%                    |                 5 |              0.19644 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9957 | 10-15%                  |                 2 |              0.49785 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0103 | >20%                    |                 5 |              0.20206 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0107 | >20%                    |                10 |              0.10107 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.031  | >20%                    |                 5 |              0.2062  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0365 | 15-20%                  |                10 |              0.10365 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0492 | >20%                    |                 5 |              0.20984 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0494 | >20%                    |                10 |              0.10494 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0722 | >20%                    |                 2 |              0.5361  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0899 | >20%                    |                10 |              0.10899 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1029 | >20%                    |                 5 |              0.22058 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1068 | 5-10%                   |                10 |              0.11068 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1676 | >20%                    |                10 |              0.11676 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1707 |                         |                10 |              0.11707 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2193 |                         |                 5 |              0.24386 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2435 | >20%                    |                10 |              0.12435 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3081 | >20%                    |                10 |              0.13081 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3661 | 15-20%                  |                10 |              0.13661 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3842 | 15-20%                  |                10 |              0.13842 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3992 | >20%                    |                 5 |              0.27984 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4549 | 15-20%                  |                 5 |              0.29098 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.461  | >20%                    |                10 |              0.1461  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5215 | >20%                    |                 5 |              0.3043  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5278 | 10-15%                  |                10 |              0.15278 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6806 | 5-10%                   |                 2 |              0.8403  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7714 | >20%                    |                10 |              0.17714 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.8576 | 5-10%                   |                 2 |              0.9288  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3383 | >20%                    |                10 |              0.23383 |