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

Data correct as of 2024-10-25 01:38:14.865971, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1465 | >20%                    |                 2 |              0.07325 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1576 | 5-10%                   |                 2 |              0.0788  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1766 | <5%                     |                 2 |              0.0883  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1788 | 10-15%                  |                 2 |              0.0894  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1812 | <5%                     |                 2 |              0.0906  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1832 | <5%                     |                 2 |              0.0916  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1865 | 5-10%                   |                 5 |              0.0373  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1927 | 15-20%                  |                 2 |              0.09635 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2188 | 15-20%                  |                 2 |              0.1094  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2267 | 15-20%                  |                 2 |              0.11335 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2274 | 5-10%                   |                 2 |              0.1137  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2306 | <5%                     |                 5 |              0.04612 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2314 | <5%                     |                 2 |              0.1157  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2372 | 5-10%                   |                 5 |              0.04744 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2449 | >20%                    |                 2 |              0.12245 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2558 | <5%                     |                 2 |              0.1279  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | <5%                     |                 2 |              0.13115 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | <5%                     |                 2 |              0.13535 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | 10-15%                  |                 2 |              0.13955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | 15-20%                  |                 2 |              0.1407  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | 5-10%                   |                 5 |              0.05764 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2887 | <5%                     |                 2 |              0.14435 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2887 | 10-15%                  |                 5 |              0.05774 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.289  | <5%                     |                 5 |              0.0578  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3006 | >20%                    |                 2 |              0.1503  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3075 | >20%                    |                10 |              0.03075 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3089 | >20%                    |                 5 |              0.06178 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3115 | 15-20%                  |                 5 |              0.0623  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3129 | 10-15%                  |                 5 |              0.06258 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3194 | >20%                    |                 5 |              0.06388 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3195 | 15-20%                  |                 2 |              0.15975 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3386 | <5%                     |                 2 |              0.1693  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3419 | >20%                    |                 5 |              0.06838 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3454 | <5%                     |                 2 |              0.1727  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3462 | 10-15%                  |                10 |              0.03462 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3561 | >20%                    |                 2 |              0.17805 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3663 | >20%                    |                10 |              0.03663 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3722 | <5%                     |                 5 |              0.07444 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3751 | 5-10%                   |                 2 |              0.18755 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3832 | >20%                    |                 2 |              0.1916  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.387  | 5-10%                   |                 2 |              0.1935  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3875 | <5%                     |                10 |              0.03875 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3949 | 5-10%                   |                 5 |              0.07898 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | 5-10%                   |                10 |              0.03955 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3972 | <5%                     |                 5 |              0.07944 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3989 | >20%                    |                10 |              0.03989 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3998 | >20%                    |                 2 |              0.1999  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4009 | 15-20%                  |                 2 |              0.20045 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4044 | <5%                     |                 5 |              0.08088 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4178 | <5%                     |                 5 |              0.08356 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4189 | 10-15%                  |                 2 |              0.20945 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4196 | 5-10%                   |                 2 |              0.2098  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4301 | 5-10%                   |                10 |              0.04301 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4327 | <5%                     |                10 |              0.04327 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4366 | >20%                    |                 5 |              0.08732 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4387 | 15-20%                  |                 2 |              0.21935 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4405 | >20%                    |                 2 |              0.22025 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.444  | 15-20%                  |                 2 |              0.222   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4493 | <5%                     |                10 |              0.04493 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4568 | >20%                    |                 2 |              0.2284  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4578 | >20%                    |                 2 |              0.2289  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4607 | >20%                    |                 5 |              0.09214 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4644 | <5%                     |                 5 |              0.09288 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.466  | 5-10%                   |                 5 |              0.0932  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4663 | <5%                     |                 2 |              0.23315 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | 15-20%                  |                 5 |              0.09384 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | 15-20%                  |                 5 |              0.0939  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4736 | 5-10%                   |                 2 |              0.2368  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4856 | 5-10%                   |                 2 |              0.2428  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4929 | 10-15%                  |                10 |              0.04929 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4978 | >20%                    |                10 |              0.04978 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5027 | 15-20%                  |                 2 |              0.25135 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5118 | >20%                    |                 5 |              0.10236 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5118 | 10-15%                  |                 5 |              0.10236 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5133 | >20%                    |                 2 |              0.25665 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5215 | <5%                     |                 5 |              0.1043  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5218 | >20%                    |                 5 |              0.10436 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | 10-15%                  |                 5 |              0.10522 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5262 | 5-10%                   |                 5 |              0.10524 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5311 | 5-10%                   |                 5 |              0.10622 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5314 | 5-10%                   |                10 |              0.05314 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5329 | 5-10%                   |                 5 |              0.10658 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5387 | 15-20%                  |                 2 |              0.26935 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5434 | <5%                     |                 5 |              0.10868 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5606 | 5-10%                   |                 5 |              0.11212 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5627 | 5-10%                   |                 5 |              0.11254 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.579  | <5%                     |                10 |              0.0579  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.587  | >20%                    |                 5 |              0.1174  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5919 | >20%                    |                 2 |              0.29595 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5929 | 15-20%                  |                 5 |              0.11858 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5929 | 5-10%                   |                 5 |              0.11858 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5993 | 15-20%                  |                 5 |              0.11986 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6072 | >20%                    |                 5 |              0.12144 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.608  | 15-20%                  |                10 |              0.0608  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6207 | >20%                    |                 5 |              0.12414 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6229 | >20%                    |                10 |              0.06229 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.655  | 5-10%                   |                 5 |              0.131   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6589 | 10-15%                  |                10 |              0.06589 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6634 | 5-10%                   |                10 |              0.06634 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6703 | <5%                     |                10 |              0.06703 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6773 | >20%                    |                10 |              0.06773 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6887 | >20%                    |                10 |              0.06887 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6903 | 5-10%                   |                10 |              0.06903 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6914 | >20%                    |                 2 |              0.3457  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6988 | <5%                     |                10 |              0.06988 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7246 | >20%                    |                10 |              0.07246 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7378 | 10-15%                  |                10 |              0.07378 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7458 | >20%                    |                 5 |              0.14916 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7536 | 5-10%                   |                10 |              0.07536 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7709 | 15-20%                  |                10 |              0.07709 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7727 | <5%                     |                10 |              0.07727 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7792 | 5-10%                   |                 5 |              0.15584 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8217 | 10-15%                  |                 5 |              0.16434 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8221 | >20%                    |                10 |              0.08221 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8343 | 5-10%                   |                10 |              0.08343 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8562 | 10-15%                  |                10 |              0.08562 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8754 | <5%                     |                10 |              0.08754 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.886  | >20%                    |                10 |              0.0886  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8879 | >20%                    |                 2 |              0.44395 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8904 | >20%                    |                 5 |              0.17808 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8914 | >20%                    |                10 |              0.08914 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9214 | 15-20%                  |                10 |              0.09214 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9396 | 5-10%                   |                10 |              0.09396 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9525 | >20%                    |                10 |              0.09525 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9543 | <5%                     |                 2 |              0.47715 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9675 | 10-15%                  |                 5 |              0.1935  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9797 | 10-15%                  |                10 |              0.09797 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0162 | 10-15%                  |                10 |              0.10162 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0301 | 10-15%                  |                10 |              0.10301 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0347 | 10-15%                  |                 5 |              0.20694 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0392 | >20%                    |                10 |              0.10392 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1539 | >20%                    |                10 |              0.11539 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1638 | >20%                    |                10 |              0.11638 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2776 | <5%                     |                10 |              0.12776 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4329 | >20%                    |                10 |              0.14329 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5405 | 5-10%                   |                10 |              0.15405 |