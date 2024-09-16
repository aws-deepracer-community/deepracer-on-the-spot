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

Data correct as of 2024-09-16 01:38:23.930366, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2066 | 5-10%                   |                 2 |              0.1033  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2074 | >20%                    |                 5 |              0.04148 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | 15-20%                  |                 2 |              0.11695 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2364 | 15-20%                  |                 5 |              0.04728 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | 10-15%                  |                 2 |              0.11845 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | <5%                     |                 2 |              0.11935 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | 5-10%                   |                 2 |              0.126   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | <5%                     |                 2 |              0.12835 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | <5%                     |                 2 |              0.13115 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2744 | <5%                     |                 2 |              0.1372  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2798 | >20%                    |                10 |              0.02798 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2886 | 10-15%                  |                 2 |              0.1443  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2985 | <5%                     |                 5 |              0.0597  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.301  | <5%                     |                 5 |              0.0602  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | <5%                     |                 2 |              0.1526  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | <5%                     |                 2 |              0.1537  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3212 | <5%                     |                 2 |              0.1606  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3548 | 15-20%                  |                 5 |              0.07096 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3586 | <5%                     |                 2 |              0.1793  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | 5-10%                   |                 2 |              0.17975 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3618 | <5%                     |                 2 |              0.1809  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3656 | 15-20%                  |                10 |              0.03656 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3702 | 5-10%                   |                 5 |              0.07404 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3717 | >20%                    |                 5 |              0.07434 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | <5%                     |                 2 |              0.1874  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3834 | <5%                     |                 5 |              0.07668 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3836 | <5%                     |                 2 |              0.1918  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | 10-15%                  |                 2 |              0.1922  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3961 | <5%                     |                 2 |              0.19805 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3997 | <5%                     |                 2 |              0.19985 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4101 | >20%                    |                 2 |              0.20505 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4133 | >20%                    |                 2 |              0.20665 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4182 | 5-10%                   |                 2 |              0.2091  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4196 | 5-10%                   |                 2 |              0.2098  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.421  | >20%                    |                10 |              0.0421  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4229 | 15-20%                  |                 5 |              0.08458 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4509 | 10-15%                  |                 5 |              0.09018 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4519 | <5%                     |                 5 |              0.09038 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4553 | <5%                     |                 5 |              0.09106 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4607 | >20%                    |                 2 |              0.23035 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | <5%                     |                 5 |              0.09294 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4652 | >20%                    |                 2 |              0.2326  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4664 | 15-20%                  |                 5 |              0.09328 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4732 | 5-10%                   |                 5 |              0.09464 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4737 | <5%                     |                 5 |              0.09474 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4748 | 10-15%                  |                 2 |              0.2374  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4837 | <5%                     |                 5 |              0.09674 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4896 | <5%                     |                10 |              0.04896 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4929 | 5-10%                   |                 5 |              0.09858 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4959 | >20%                    |                 2 |              0.24795 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | 10-15%                  |                 5 |              0.10032 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5077 | >20%                    |                 5 |              0.10154 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.515  | <5%                     |                 5 |              0.103   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5157 | >20%                    |                 5 |              0.10314 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5244 | 15-20%                  |                 2 |              0.2622  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.533  | >20%                    |                 5 |              0.1066  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5426 | <5%                     |                 5 |              0.10852 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5456 | <5%                     |                10 |              0.05456 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5491 | <5%                     |                 5 |              0.10982 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5768 | 15-20%                  |                 2 |              0.2884  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5858 | <5%                     |                 5 |              0.11716 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5896 | >20%                    |                 5 |              0.11792 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5961 | >20%                    |                 2 |              0.29805 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5986 | >20%                    |                 5 |              0.11972 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6027 | >20%                    |                 5 |              0.12054 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6065 | >20%                    |                 5 |              0.1213  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6121 | 5-10%                   |                 5 |              0.12242 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6198 | 10-15%                  |                10 |              0.06198 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.622  | 15-20%                  |                 2 |              0.311   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.631  | 5-10%                   |                10 |              0.0631  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6822 | >20%                    |                10 |              0.06822 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6888 | <5%                     |                 2 |              0.3444  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6982 | <5%                     |                10 |              0.06982 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7014 | >20%                    |                 2 |              0.3507  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7069 | <5%                     |                10 |              0.07069 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.739  | >20%                    |                10 |              0.0739  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7547 | 15-20%                  |                10 |              0.07547 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7655 | 15-20%                  |                10 |              0.07655 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7747 | >20%                    |                 5 |              0.15494 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7777 | 10-15%                  |                10 |              0.07777 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7871 | <5%                     |                 5 |              0.15742 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7898 | >20%                    |                 5 |              0.15796 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.798  | >20%                    |                10 |              0.0798  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8271 | 10-15%                  |                10 |              0.08271 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8367 | >20%                    |                10 |              0.08367 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8381 | >20%                    |                10 |              0.08381 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8442 | <5%                     |                10 |              0.08442 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8538 | 5-10%                   |                 2 |              0.4269  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8577 | >20%                    |                10 |              0.08577 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.87   | 5-10%                   |                 5 |              0.174   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8788 | <5%                     |                10 |              0.08788 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8911 | >20%                    |                10 |              0.08911 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9144 | <5%                     |                 2 |              0.4572  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9271 | >20%                    |                 5 |              0.18542 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9321 | >20%                    |                10 |              0.09321 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9335 | >20%                    |                 5 |              0.1867  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9342 | 5-10%                   |                10 |              0.09342 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.956  | >20%                    |                10 |              0.0956  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9836 | <5%                     |                10 |              0.09836 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0265 | 5-10%                   |                10 |              0.10265 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0342 | >20%                    |                10 |              0.10342 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0355 | 10-15%                  |                10 |              0.10355 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1002 | 5-10%                   |                 5 |              0.22004 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1424 | >20%                    |                10 |              0.11424 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1473 | 15-20%                  |                10 |              0.11473 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1481 | >20%                    |                10 |              0.11481 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2197 | >20%                    |                10 |              0.12197 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2949 | <5%                     |                10 |              0.12949 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4389 | >20%                    |                10 |              0.14389 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6849 | 5-10%                   |                10 |              0.16849 |