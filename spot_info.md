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

Data correct as of 2026-08-08 01:53:29.696603, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1874 | >20%                    |                 2 |              0.0937  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1894 | >20%                    |                 2 |              0.0947  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2024 | >20%                    |                 2 |              0.1012  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.213  | 15-20%                  |                 5 |              0.0426  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | >20%                    |                 2 |              0.1139  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | 15-20%                  |                 2 |              0.11755 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2447 | >20%                    |                 2 |              0.12235 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2762 | >20%                    |                 2 |              0.1381  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | 15-20%                  |                 2 |              0.1387  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2777 | >20%                    |                 5 |              0.05554 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2789 | >20%                    |                 2 |              0.13945 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | >20%                    |                 2 |              0.1438  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.303  | >20%                    |                 2 |              0.1515  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3054 | >20%                    |                 2 |              0.1527  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3089 | 5-10%                   |                10 |              0.03089 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3123 | 10-15%                  |                 2 |              0.15615 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3127 | 15-20%                  |                 2 |              0.15635 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3247 | >20%                    |                 5 |              0.06494 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.338  | >20%                    |                 5 |              0.0676  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3484 | 15-20%                  |                 5 |              0.06968 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.35   | 10-15%                  |                 2 |              0.175   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3543 | 15-20%                  |                 2 |              0.17715 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3595 | >20%                    |                 5 |              0.0719  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3638 | >20%                    |                 2 |              0.1819  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3656 | >20%                    |                10 |              0.03656 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3694 | 5-10%                   |                10 |              0.03694 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3741 | <5%                     |                 2 |              0.18705 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3843 | >20%                    |                 5 |              0.07686 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3885 | >20%                    |                 2 |              0.19425 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3905 | >20%                    |                10 |              0.03905 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.395  | >20%                    |                10 |              0.0395  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3981 | >20%                    |                10 |              0.03981 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4139 | >20%                    |                 2 |              0.20695 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4149 | 5-10%                   |                10 |              0.04149 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4156 | 15-20%                  |                 2 |              0.2078  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4256 | >20%                    |                 2 |              0.2128  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4298 | <5%                     |                 2 |              0.2149  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4371 | 10-15%                  |                10 |              0.04371 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.438  | 10-15%                  |                 2 |              0.219   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4422 | 10-15%                  |                 2 |              0.2211  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | >20%                    |                 5 |              0.08866 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | >20%                    |                 5 |              0.09086 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4551 | >20%                    |                 2 |              0.22755 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4551 | >20%                    |                10 |              0.04551 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4627 | >20%                    |                 2 |              0.23135 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4664 | >20%                    |                 5 |              0.09328 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4732 | >20%                    |                 2 |              0.2366  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4779 | >20%                    |                 5 |              0.09558 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4788 | >20%                    |                 2 |              0.2394  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4832 | >20%                    |                 5 |              0.09664 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | >20%                    |                 5 |              0.09742 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5042 | 15-20%                  |                 5 |              0.10084 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5046 | >20%                    |                 2 |              0.2523  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5118 | >20%                    |                10 |              0.05118 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5129 | >20%                    |                 5 |              0.10258 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5147 | >20%                    |                 2 |              0.25735 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5223 | >20%                    |                 5 |              0.10446 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5313 | >20%                    |                 5 |              0.10626 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5404 | >20%                    |                 5 |              0.10808 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5435 | 5-10%                   |                 2 |              0.27175 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5599 | <5%                     |                 2 |              0.27995 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5639 | >20%                    |                10 |              0.05639 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5708 | >20%                    |                 5 |              0.11416 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5788 | >20%                    |                 2 |              0.2894  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5789 | 10-15%                  |                 5 |              0.11578 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5893 | >20%                    |                 5 |              0.11786 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5966 | >20%                    |                 5 |              0.11932 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6199 | >20%                    |                 5 |              0.12398 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6219 | >20%                    |                 5 |              0.12438 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6251 | >20%                    |                 2 |              0.31255 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6257 | 15-20%                  |                10 |              0.06257 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6284 | >20%                    |                 2 |              0.3142  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6305 | >20%                    |                10 |              0.06305 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6381 | >20%                    |                 5 |              0.12762 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6439 | <5%                     |                 5 |              0.12878 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6456 | >20%                    |                 5 |              0.12912 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6463 | >20%                    |                 5 |              0.12926 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6465 | >20%                    |                 5 |              0.1293  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6603 | 5-10%                   |                 5 |              0.13206 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6624 | >20%                    |                 5 |              0.13248 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6635 | >20%                    |                 5 |              0.1327  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6693 | >20%                    |                 5 |              0.13386 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6753 | >20%                    |                10 |              0.06753 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.684  | 15-20%                  |                 5 |              0.1368  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6853 | >20%                    |                 2 |              0.34265 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6951 | >20%                    |                10 |              0.06951 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7077 | >20%                    |                 2 |              0.35385 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7298 |                         |                 2 |              0.3649  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7624 | >20%                    |                 5 |              0.15248 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.784  |                         |                 5 |              0.1568  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.786  | >20%                    |                10 |              0.0786  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7923 | >20%                    |                10 |              0.07923 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7946 | >20%                    |                10 |              0.07946 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7989 | >20%                    |                10 |              0.07989 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7999 | >20%                    |                 5 |              0.15998 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8009 | <5%                     |                10 |              0.08009 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8052 | 10-15%                  |                 2 |              0.4026  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | >20%                    |                10 |              0.08221 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8257 | >20%                    |                 2 |              0.41285 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8446 | >20%                    |                 2 |              0.4223  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8549 | >20%                    |                10 |              0.08549 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.868  | 15-20%                  |                10 |              0.0868  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8788 | 5-10%                   |                10 |              0.08788 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.884  | >20%                    |                 5 |              0.1768  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8872 | 10-15%                  |                 2 |              0.4436  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8882 | 15-20%                  |                10 |              0.08882 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9009 | >20%                    |                 5 |              0.18018 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9082 |                         |                 2 |              0.4541  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9091 | >20%                    |                 5 |              0.18182 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9142 | >20%                    |                10 |              0.09142 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9179 | >20%                    |                10 |              0.09179 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.919  | >20%                    |                10 |              0.0919  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9229 | >20%                    |                 5 |              0.18458 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.938  | 5-10%                   |                10 |              0.0938  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.939  | 15-20%                  |                10 |              0.0939  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9575 | >20%                    |                10 |              0.09575 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.972  | >20%                    |                 5 |              0.1944  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9775 | >20%                    |                 5 |              0.1955  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9844 | >20%                    |                10 |              0.09844 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0004 | >20%                    |                 2 |              0.5002  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.004  | 15-20%                  |                10 |              0.1004  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0085 | >20%                    |                10 |              0.10085 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0214 | 15-20%                  |                10 |              0.10214 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.032  | 15-20%                  |                 2 |              0.516   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0436 | >20%                    |                10 |              0.10436 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.048  | >20%                    |                10 |              0.1048  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0778 | >20%                    |                 5 |              0.21556 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0826 | 5-10%                   |                 2 |              0.5413  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0943 | >20%                    |                 2 |              0.54715 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.139  | >20%                    |                10 |              0.1139  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1456 |                         |                10 |              0.11456 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1844 | 15-20%                  |                10 |              0.11844 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2744 | >20%                    |                 5 |              0.25488 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3011 | >20%                    |                 5 |              0.26022 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3073 |                         |                 5 |              0.26146 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3112 | >20%                    |                10 |              0.13112 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.3263 | >20%                    |                10 |              0.13263 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3581 | >20%                    |                10 |              0.13581 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3614 | >20%                    |                 5 |              0.27228 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4028 | >20%                    |                10 |              0.14028 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.415  | 10-15%                  |                 2 |              0.7075  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4521 | >20%                    |                10 |              0.14521 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5132 | 5-10%                   |                 5 |              0.30264 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5354 | >20%                    |                10 |              0.15354 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5359 | 15-20%                  |                 5 |              0.30718 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5512 | 10-15%                  |                10 |              0.15512 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6188 | 5-10%                   |                 2 |              0.8094  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6533 | >20%                    |                10 |              0.16533 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7084 | 5-10%                   |                10 |              0.17084 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.783  | >20%                    |                10 |              0.1783  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7941 |                         |                10 |              0.17941 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.8246 | >20%                    |                 5 |              0.36492 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9426 | 15-20%                  |                10 |              0.19426 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1491 | 5-10%                   |                 2 |              1.07455 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7879 | >20%                    |                 5 |              0.55758 |