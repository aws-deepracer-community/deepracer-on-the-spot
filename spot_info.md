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

Data correct as of 2025-01-04 01:35:30.665657, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1645 | 15-20%                  |                 2 |              0.08225 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1987 |                         |                 2 |              0.09935 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | <5%                     |                 2 |              0.103   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2304 | >20%                    |                 2 |              0.1152  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2316 | >20%                    |                 2 |              0.1158  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.232  |                         |                 2 |              0.116   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2382 | <5%                     |                 5 |              0.04764 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2406 | 5-10%                   |                 2 |              0.1203  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | 5-10%                   |                 2 |              0.121   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2447 | 15-20%                  |                 2 |              0.12235 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | 15-20%                  |                 2 |              0.12415 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | 15-20%                  |                 2 |              0.1246  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2693 |                         |                 5 |              0.05386 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | >20%                    |                 2 |              0.14205 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2868 | <5%                     |                 2 |              0.1434  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2926 | <5%                     |                 2 |              0.1463  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3013 | 5-10%                   |                 2 |              0.15065 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | 5-10%                   |                 2 |              0.1507  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.304  | >20%                    |                10 |              0.0304  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3056 |                         |                 5 |              0.06112 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | 5-10%                   |                 2 |              0.1554  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3213 | <5%                     |                 2 |              0.16065 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3398 | <5%                     |                 5 |              0.06796 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3423 |                         |                10 |              0.03423 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3424 | <5%                     |                 2 |              0.1712  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | 15-20%                  |                 5 |              0.06858 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3519 | >20%                    |                 5 |              0.07038 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3657 | 10-15%                  |                 2 |              0.18285 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | 10-15%                  |                 2 |              0.18355 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3771 | >20%                    |                 2 |              0.18855 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.379  | >20%                    |                 2 |              0.1895  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3807 | >20%                    |                 2 |              0.19035 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3834 | <5%                     |                 5 |              0.07668 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3851 | 5-10%                   |                10 |              0.03851 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3915 | >20%                    |                 2 |              0.19575 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3918 | >20%                    |                 5 |              0.07836 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3926 | >20%                    |                 2 |              0.1963  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3949 | 10-15%                  |                 2 |              0.19745 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3954 | 10-15%                  |                 2 |              0.1977  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4015 | 5-10%                   |                 2 |              0.20075 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.407  | 5-10%                   |                 2 |              0.2035  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4084 | <5%                     |                 5 |              0.08168 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | <5%                     |                 2 |              0.2126  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4293 |                         |                10 |              0.04293 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4298 | 10-15%                  |                 2 |              0.2149  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4332 | 5-10%                   |                 2 |              0.2166  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4352 | 5-10%                   |                 5 |              0.08704 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4375 | 5-10%                   |                 2 |              0.21875 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4444 | <5%                     |                 5 |              0.08888 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4473 | 10-15%                  |                10 |              0.04473 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4644 | 10-15%                  |                 5 |              0.09288 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4709 | <5%                     |                 5 |              0.09418 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | 15-20%                  |                 5 |              0.0944  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | 5-10%                   |                 2 |              0.2376  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4757 | >20%                    |                 5 |              0.09514 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4782 | 10-15%                  |                 5 |              0.09564 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | 5-10%                   |                 5 |              0.09582 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4795 | >20%                    |                 5 |              0.0959  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4817 | 10-15%                  |                 2 |              0.24085 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4831 | <5%                     |                 5 |              0.09662 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | >20%                    |                 5 |              0.09692 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4936 | <5%                     |                 2 |              0.2468  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4964 | 15-20%                  |                10 |              0.04964 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4998 | <5%                     |                 5 |              0.09996 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5013 | 15-20%                  |                 2 |              0.25065 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5084 | 10-15%                  |                 2 |              0.2542  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.509  | 15-20%                  |                 2 |              0.2545  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5092 | >20%                    |                 5 |              0.10184 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5167 | >20%                    |                 5 |              0.10334 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5181 | 5-10%                   |                 5 |              0.10362 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5228 | <5%                     |                 5 |              0.10456 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5324 | <5%                     |                 5 |              0.10648 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | 5-10%                   |                 5 |              0.10704 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5369 | >20%                    |                 5 |              0.10738 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5384 | 10-15%                  |                 5 |              0.10768 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.545  | 5-10%                   |                 5 |              0.109   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5613 | 5-10%                   |                 5 |              0.11226 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5661 | 5-10%                   |                10 |              0.05661 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5671 | >20%                    |                 2 |              0.28355 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5821 | <5%                     |                 5 |              0.11642 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | 15-20%                  |                 5 |              0.11644 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5863 | >20%                    |                 2 |              0.29315 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5915 | >20%                    |                 5 |              0.1183  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5957 | >20%                    |                 5 |              0.11914 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6436 | >20%                    |                 5 |              0.12872 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6437 | 5-10%                   |                10 |              0.06437 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6573 | >20%                    |                10 |              0.06573 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6643 | <5%                     |                 5 |              0.13286 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6852 | 15-20%                  |                 2 |              0.3426  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6914 | >20%                    |                 2 |              0.3457  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7089 | 15-20%                  |                 5 |              0.14178 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7105 | 10-15%                  |                10 |              0.07105 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7118 | 15-20%                  |                 5 |              0.14236 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.716  | <5%                     |                 2 |              0.358   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.716  | >20%                    |                10 |              0.0716  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.729  | 10-15%                  |                10 |              0.0729  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7337 | 5-10%                   |                 5 |              0.14674 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7357 | >20%                    |                10 |              0.07357 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7374 | <5%                     |                 2 |              0.3687  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7521 | 5-10%                   |                10 |              0.07521 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7528 | <5%                     |                10 |              0.07528 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7548 | >20%                    |                10 |              0.07548 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.759  | 5-10%                   |                10 |              0.0759  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7709 | >20%                    |                 5 |              0.15418 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7964 | >20%                    |                 5 |              0.15928 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8006 | >20%                    |                 5 |              0.16012 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8139 | >20%                    |                10 |              0.08139 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8196 | 5-10%                   |                10 |              0.08196 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8279 | 15-20%                  |                10 |              0.08279 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8314 | 15-20%                  |                10 |              0.08314 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8372 | <5%                     |                10 |              0.08372 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8388 | 5-10%                   |                10 |              0.08388 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.84   | 10-15%                  |                10 |              0.084   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8529 | <5%                     |                10 |              0.08529 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8608 | 10-15%                  |                10 |              0.08608 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8642 | >20%                    |                10 |              0.08642 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8679 | 10-15%                  |                10 |              0.08679 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8728 | 10-15%                  |                10 |              0.08728 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.875  | 5-10%                   |                10 |              0.0875  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8919 | 5-10%                   |                10 |              0.08919 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8928 | <5%                     |                 5 |              0.17856 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.916  | <5%                     |                10 |              0.0916  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9365 | 15-20%                  |                10 |              0.09365 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.94   | >20%                    |                10 |              0.094   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9411 | 5-10%                   |                 5 |              0.18822 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9432 | <5%                     |                 2 |              0.4716  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9719 | >20%                    |                10 |              0.09719 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9773 | 5-10%                   |                 5 |              0.19546 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0036 | <5%                     |                 5 |              0.20072 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0129 | 15-20%                  |                10 |              0.10129 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0262 | 5-10%                   |                10 |              0.10262 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0282 | <5%                     |                10 |              0.10282 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0386 | 10-15%                  |                 2 |              0.5193  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0463 | <5%                     |                10 |              0.10463 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1094 | >20%                    |                10 |              0.11094 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1398 | >20%                    |                10 |              0.11398 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3193 | 5-10%                   |                10 |              0.13193 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3468 | >20%                    |                10 |              0.13468 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4189 | <5%                     |                10 |              0.14189 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.466  | <5%                     |                10 |              0.1466  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4855 | 5-10%                   |                10 |              0.14855 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.539  | 5-10%                   |                 5 |              0.3078  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1388 | 10-15%                  |                10 |              0.21388 |