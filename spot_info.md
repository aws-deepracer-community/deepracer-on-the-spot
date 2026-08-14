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

Data correct as of 2026-08-14 02:14:27.058590, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1787 | >20%                    |                 2 |              0.08935 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1887 | >20%                    |                 2 |              0.09435 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1929 | >20%                    |                 2 |              0.09645 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2071 | >20%                    |                 2 |              0.10355 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2118 | 15-20%                  |                 2 |              0.1059  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2193 | >20%                    |                 2 |              0.10965 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2332 | 10-15%                  |                 2 |              0.1166  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2563 | >20%                    |                 5 |              0.05126 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2585 | 15-20%                  |                 2 |              0.12925 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2635 | >20%                    |                 2 |              0.13175 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | >20%                    |                 2 |              0.13445 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2813 | 15-20%                  |                 2 |              0.14065 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | >20%                    |                 2 |              0.1442  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | >20%                    |                 2 |              0.14525 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.301  | 10-15%                  |                 2 |              0.1505  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3064 | >20%                    |                 2 |              0.1532  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3146 | 15-20%                  |                 5 |              0.06292 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3228 | 5-10%                   |                10 |              0.03228 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3302 | >20%                    |                 5 |              0.06604 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3304 | 15-20%                  |                 2 |              0.1652  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3377 | >20%                    |                 5 |              0.06754 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3443 | 5-10%                   |                10 |              0.03443 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3459 | >20%                    |                 2 |              0.17295 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | >20%                    |                 5 |              0.07038 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3718 | <5%                     |                 2 |              0.1859  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3766 | >20%                    |                 2 |              0.1883  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3872 | >20%                    |                 5 |              0.07744 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3903 | 10-15%                  |                 2 |              0.19515 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4006 | >20%                    |                10 |              0.04006 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4026 | >20%                    |                 5 |              0.08052 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4048 | 15-20%                  |                 2 |              0.2024  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4054 | <5%                     |                 2 |              0.2027  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4108 | >20%                    |                 5 |              0.08216 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4153 | >20%                    |                 2 |              0.20765 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4197 | >20%                    |                10 |              0.04197 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4199 | >20%                    |                10 |              0.04199 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4249 | >20%                    |                 2 |              0.21245 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.425  | >20%                    |                10 |              0.0425  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4251 | >20%                    |                 5 |              0.08502 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4336 | >20%                    |                 5 |              0.08672 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4396 | >20%                    |                 2 |              0.2198  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4428 | 10-15%                  |                 2 |              0.2214  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | >20%                    |                 2 |              0.22225 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.449  | 15-20%                  |                 5 |              0.0898  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | >20%                    |                 5 |              0.09062 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4561 | >20%                    |                 2 |              0.22805 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4595 | >20%                    |                 2 |              0.22975 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4735 | >20%                    |                 2 |              0.23675 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4855 | >20%                    |                 2 |              0.24275 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.486  | 5-10%                   |                10 |              0.0486  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5049 | >20%                    |                 5 |              0.10098 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5074 | >20%                    |                 5 |              0.10148 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5101 | >20%                    |                 2 |              0.25505 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | >20%                    |                 5 |              0.10286 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5156 | >20%                    |                 5 |              0.10312 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5326 | >20%                    |                10 |              0.05326 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5451 | >20%                    |                 5 |              0.10902 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5469 | 10-15%                  |                10 |              0.05469 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5479 | 5-10%                   |                 2 |              0.27395 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5529 | <5%                     |                 2 |              0.27645 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5533 | >20%                    |                 2 |              0.27665 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5557 | >20%                    |                 2 |              0.27785 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5638 | >20%                    |                 5 |              0.11276 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5751 | 15-20%                  |                10 |              0.05751 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.576  | >20%                    |                 2 |              0.288   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5786 | >20%                    |                10 |              0.05786 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5834 | 10-15%                  |                 5 |              0.11668 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.585  | >20%                    |                10 |              0.0585  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5979 | 15-20%                  |                 5 |              0.11958 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5983 | >20%                    |                 5 |              0.11966 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.607  | >20%                    |                 5 |              0.1214  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6103 | >20%                    |                 5 |              0.12206 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6179 | <5%                     |                 5 |              0.12358 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6197 | >20%                    |                 5 |              0.12394 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6211 | >20%                    |                10 |              0.06211 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6219 | >20%                    |                 5 |              0.12438 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.634  | >20%                    |                 5 |              0.1268  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.636  | 5-10%                   |                 5 |              0.1272  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6449 | >20%                    |                 5 |              0.12898 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6781 | >20%                    |                 2 |              0.33905 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6827 | >20%                    |                 2 |              0.34135 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6851 | >20%                    |                 5 |              0.13702 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6878 | >20%                    |                10 |              0.06878 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7228 | >20%                    |                10 |              0.07228 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7292 | >20%                    |                 5 |              0.14584 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7356 | >20%                    |                10 |              0.07356 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7357 | >20%                    |                10 |              0.07357 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7513 | >20%                    |                 2 |              0.37565 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7632 | >20%                    |                 5 |              0.15264 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7684 | >20%                    |                 2 |              0.3842  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7756 | >20%                    |                 5 |              0.15512 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7781 | >20%                    |                10 |              0.07781 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.78   | >20%                    |                10 |              0.078   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7802 | >20%                    |                 5 |              0.15604 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7858 | >20%                    |                 5 |              0.15716 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8204 | <5%                     |                10 |              0.08204 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8266 | 15-20%                  |                10 |              0.08266 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8277 | 10-15%                  |                 2 |              0.41385 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8313 | 10-15%                  |                 2 |              0.41565 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8433 |                         |                 2 |              0.42165 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8714 | 5-10%                   |                10 |              0.08714 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8748 | >20%                    |                 5 |              0.17496 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8758 | >20%                    |                 5 |              0.17516 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8759 | >20%                    |                10 |              0.08759 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8902 | 15-20%                  |                10 |              0.08902 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8919 | >20%                    |                10 |              0.08919 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8965 | 15-20%                  |                10 |              0.08965 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8969 | 5-10%                   |                10 |              0.08969 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9011 | >20%                    |                10 |              0.09011 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9071 | >20%                    |                10 |              0.09071 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9078 | 15-20%                  |                10 |              0.09078 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9113 | >20%                    |                10 |              0.09113 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9156 |                         |                 2 |              0.4578  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9183 | >20%                    |                10 |              0.09183 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9416 | >20%                    |                 2 |              0.4708  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9448 | >20%                    |                 5 |              0.18896 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9719 | >20%                    |                10 |              0.09719 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9785 |                         |                 5 |              0.1957  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9887 | >20%                    |                10 |              0.09887 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9895 | >20%                    |                10 |              0.09895 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9903 | >20%                    |                 5 |              0.19806 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0118 | >20%                    |                 5 |              0.20236 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0227 | 15-20%                  |                10 |              0.10227 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0325 | >20%                    |                10 |              0.10325 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0786 | 15-20%                  |                 2 |              0.5393  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0945 | >20%                    |                 5 |              0.2189  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1102 |                         |                10 |              0.11102 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1154 | >20%                    |                 2 |              0.5577  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1217 | >20%                    |                10 |              0.11217 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2124 | >20%                    |                 5 |              0.24248 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.245  | >20%                    |                10 |              0.1245  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.252  | >20%                    |                10 |              0.1252  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2878 | >20%                    |                 5 |              0.25756 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2932 | 15-20%                  |                10 |              0.12932 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3261 |                         |                 5 |              0.26522 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.337  | >20%                    |                 5 |              0.2674  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3715 | 5-10%                   |                 2 |              0.68575 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3971 | 10-15%                  |                10 |              0.13971 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.4029 | >20%                    |                 5 |              0.28058 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4247 | >20%                    |                10 |              0.14247 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4655 | >20%                    |                10 |              0.14655 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4721 | 10-15%                  |                 2 |              0.73605 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4825 | 5-10%                   |                 2 |              0.74125 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5073 | 5-10%                   |                 5 |              0.30146 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5757 | 15-20%                  |                10 |              0.15757 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5787 | 5-10%                   |                10 |              0.15787 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5845 | 15-20%                  |                 5 |              0.3169  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5909 | >20%                    |                10 |              0.15909 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5945 | >20%                    |                10 |              0.15945 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6115 | >20%                    |                10 |              0.16115 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8397 |                         |                10 |              0.18397 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9571 | 5-10%                   |                 2 |              0.97855 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7605 | >20%                    |                 5 |              0.5521  |