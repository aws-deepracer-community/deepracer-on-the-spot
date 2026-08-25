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

Data correct as of 2026-08-25 01:26:29.148468, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1304 | >20%                    |                 2 |              0.0652  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1543 | >20%                    |                 2 |              0.07715 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1882 | 15-20%                  |                 2 |              0.0941  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2066 | >20%                    |                 2 |              0.1033  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | >20%                    |                 2 |              0.11095 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2268 | 15-20%                  |                 2 |              0.1134  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | >20%                    |                 2 |              0.1167  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2451 | 10-15%                  |                 2 |              0.12255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | 15-20%                  |                 2 |              0.12255 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2499 | 10-15%                  |                 2 |              0.12495 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2719 | >20%                    |                 2 |              0.13595 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2821 | >20%                    |                 5 |              0.05642 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2967 | >20%                    |                 2 |              0.14835 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | >20%                    |                 2 |              0.1547  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3114 | >20%                    |                 2 |              0.1557  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3132 | 5-10%                   |                10 |              0.03132 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3163 | >20%                    |                 5 |              0.06326 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3244 | 15-20%                  |                 5 |              0.06488 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3367 | >20%                    |                 5 |              0.06734 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3497 | >20%                    |                 5 |              0.06994 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3566 | >20%                    |                10 |              0.03566 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3569 | 10-15%                  |                 2 |              0.17845 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3758 | <5%                     |                 2 |              0.1879  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3758 | >20%                    |                 2 |              0.1879  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3799 | <5%                     |                 2 |              0.18995 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | >20%                    |                 5 |              0.07652 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3913 | >20%                    |                10 |              0.03913 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3947 | >20%                    |                 5 |              0.07894 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3989 | >20%                    |                 5 |              0.07978 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3997 | >20%                    |                10 |              0.03997 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4039 | 5-10%                   |                10 |              0.04039 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4044 | >20%                    |                 5 |              0.08088 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4086 | 15-20%                  |                 2 |              0.2043  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4104 | >20%                    |                 2 |              0.2052  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | >20%                    |                 2 |              0.20635 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4129 | 15-20%                  |                 5 |              0.08258 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4214 | >20%                    |                 5 |              0.08428 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4221 | >20%                    |                10 |              0.04221 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4227 | >20%                    |                 5 |              0.08454 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 10-15%                  |                 2 |              0.21475 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4356 | >20%                    |                 2 |              0.2178  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4368 | >20%                    |                 2 |              0.2184  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.437  | >20%                    |                 5 |              0.0874  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4428 | 15-20%                  |                 2 |              0.2214  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.446  | >20%                    |                 2 |              0.223   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4616 | >20%                    |                 5 |              0.09232 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4641 | >20%                    |                 5 |              0.09282 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4649 | >20%                    |                 2 |              0.23245 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4679 | 15-20%                  |                 5 |              0.09358 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4681 | >20%                    |                10 |              0.04681 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4736 | >20%                    |                 5 |              0.09472 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4976 | >20%                    |                 2 |              0.2488  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5045 | >20%                    |                 5 |              0.1009  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5057 | <5%                     |                 5 |              0.10114 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5154 | >20%                    |                 5 |              0.10308 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5193 | >20%                    |                 2 |              0.25965 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.524  | >20%                    |                 5 |              0.1048  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5246 | >20%                    |                10 |              0.05246 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5315 | <5%                     |                 2 |              0.26575 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5347 | >20%                    |                 5 |              0.10694 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5399 | 5-10%                   |                 2 |              0.26995 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5457 | 15-20%                  |                10 |              0.05457 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5538 |                         |                 2 |              0.2769  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5544 | >20%                    |                10 |              0.05544 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5613 | >20%                    |                 2 |              0.28065 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5648 | >20%                    |                 5 |              0.11296 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5652 | >20%                    |                 5 |              0.11304 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5718 | >20%                    |                 2 |              0.2859  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5958 | >20%                    |                 5 |              0.11916 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6008 | >20%                    |                 2 |              0.3004  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.602  | 10-15%                  |                 5 |              0.1204  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6045 | >20%                    |                 5 |              0.1209  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6149 | 10-15%                  |                10 |              0.06149 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6206 | >20%                    |                10 |              0.06206 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.629  | >20%                    |                 5 |              0.1258  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6446 | >20%                    |                 2 |              0.3223  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6447 | 5-10%                   |                 5 |              0.12894 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6585 | >20%                    |                 5 |              0.1317  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6632 | >20%                    |                 2 |              0.3316  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.6646 |                         |                 5 |              0.13292 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6718 | >20%                    |                10 |              0.06718 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6781 | >20%                    |                10 |              0.06781 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6921 | 15-20%                  |                10 |              0.06921 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6958 | >20%                    |                 2 |              0.3479  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7021 | >20%                    |                10 |              0.07021 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7192 | 5-10%                   |                10 |              0.07192 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7277 | >20%                    |                 2 |              0.36385 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7315 | >20%                    |                 5 |              0.1463  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7523 | >20%                    |                10 |              0.07523 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7582 | >20%                    |                 5 |              0.15164 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7591 | 5-10%                   |                10 |              0.07591 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7625 | 5-10%                   |                10 |              0.07625 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7819 | >20%                    |                 5 |              0.15638 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7925 | 15-20%                  |                 2 |              0.39625 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | >20%                    |                10 |              0.07977 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7992 | >20%                    |                10 |              0.07992 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8    | >20%                    |                10 |              0.08    |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8011 | 15-20%                  |                10 |              0.08011 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8097 | 15-20%                  |                10 |              0.08097 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8129 | >20%                    |                10 |              0.08129 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8172 | >20%                    |                 5 |              0.16344 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8211 | <5%                     |                10 |              0.08211 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.832  | 10-15%                  |                 2 |              0.416   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8406 | >20%                    |                 5 |              0.16812 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8499 | >20%                    |                 5 |              0.16998 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8512 |                         |                10 |              0.08512 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8522 | >20%                    |                10 |              0.08522 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8657 | >20%                    |                10 |              0.08657 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8798 | >20%                    |                10 |              0.08798 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8884 | >20%                    |                10 |              0.08884 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9062 | >20%                    |                 2 |              0.4531  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9102 | 10-15%                  |                 2 |              0.4551  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9195 | >20%                    |                10 |              0.09195 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9305 |                         |                 2 |              0.46525 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9361 | >20%                    |                 5 |              0.18722 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.944  | >20%                    |                10 |              0.0944  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9453 | >20%                    |                 5 |              0.18906 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9568 | >20%                    |                 5 |              0.19136 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9638 | >20%                    |                 5 |              0.19276 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9836 | 15-20%                  |                10 |              0.09836 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0097 | >20%                    |                10 |              0.10097 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0279 | >20%                    |                 5 |              0.20558 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0362 | >20%                    |                 5 |              0.20724 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.038  | 5-10%                   |                 2 |              0.519   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0409 | >20%                    |                 5 |              0.20818 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0475 | >20%                    |                10 |              0.10475 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0495 | 5-10%                   |                 5 |              0.2099  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0512 | >20%                    |                10 |              0.10512 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0582 | >20%                    |                10 |              0.10582 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0586 | 15-20%                  |                10 |              0.10586 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0604 | >20%                    |                10 |              0.10604 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0766 | 10-15%                  |                 2 |              0.5383  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0836 | >20%                    |                 5 |              0.21672 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1748 | >20%                    |                 2 |              0.5874  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1777 |                         |                 5 |              0.23554 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1827 | 5-10%                   |                10 |              0.11827 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.1871 | >20%                    |                 5 |              0.23742 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2031 | >20%                    |                10 |              0.12031 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2316 | 15-20%                  |                10 |              0.12316 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2987 |                         |                 2 |              0.64935 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3021 | >20%                    |                 5 |              0.26042 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.335  |                         |                 5 |              0.267   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4076 | 10-15%                  |                10 |              0.14076 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5035 | >20%                    |                10 |              0.15035 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5408 | 15-20%                  |                 5 |              0.30816 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5563 | >20%                    |                10 |              0.15563 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5946 | >20%                    |                10 |              0.15946 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.6471 |                         |                10 |              0.16471 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6798 | 15-20%                  |                10 |              0.16798 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7905 |                         |                10 |              0.17905 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8816 | 5-10%                   |                 2 |              0.9408  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9229 | 5-10%                   |                 2 |              0.96145 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3018 | >20%                    |                 5 |              0.46036 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.4431 | >20%                    |                10 |              0.24431 |