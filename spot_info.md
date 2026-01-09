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

Data correct as of 2026-01-09 02:04:22.782248, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1214 | >20%                    |                 2 |              0.0607  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1462 | >20%                    |                 2 |              0.0731  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1582 | >20%                    |                 5 |              0.03164 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1717 | >20%                    |                 2 |              0.08585 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1735 | <5%                     |                 2 |              0.08675 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2204 | <5%                     |                 5 |              0.04408 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2228 | >20%                    |                 2 |              0.1114  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2359 | >20%                    |                 2 |              0.11795 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | >20%                    |                 2 |              0.1181  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2439 | >20%                    |                 2 |              0.12195 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2522 | >20%                    |                 5 |              0.05044 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2534 | >20%                    |                 2 |              0.1267  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2652 | >20%                    |                 2 |              0.1326  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | >20%                    |                 2 |              0.13465 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | >20%                    |                 2 |              0.1398  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2868 | >20%                    |                10 |              0.02868 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2913 | 5-10%                   |                10 |              0.02913 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | 15-20%                  |                 2 |              0.1471  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2944 | 15-20%                  |                 5 |              0.05888 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | >20%                    |                 2 |              0.14795 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.303  | >20%                    |                 5 |              0.0606  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3045 | >20%                    |                 5 |              0.0609  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3048 | >20%                    |                 2 |              0.1524  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3161 | >20%                    |                 5 |              0.06322 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3287 | >20%                    |                 2 |              0.16435 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3295 | 5-10%                   |                 5 |              0.0659  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3305 | >20%                    |                 2 |              0.16525 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.331  | >20%                    |                 2 |              0.1655  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3311 | >20%                    |                 5 |              0.06622 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3445 | >20%                    |                 5 |              0.0689  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3469 | <5%                     |                 5 |              0.06938 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3509 | >20%                    |                 5 |              0.07018 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3565 | 5-10%                   |                10 |              0.03565 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.357  | >20%                    |                10 |              0.0357  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3608 | 5-10%                   |                 2 |              0.1804  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3617 | >20%                    |                 5 |              0.07234 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | 5-10%                   |                 2 |              0.1851  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3708 | >20%                    |                 2 |              0.1854  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3708 | 10-15%                  |                 2 |              0.1854  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3714 | >20%                    |                 2 |              0.1857  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | >20%                    |                 5 |              0.07546 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3778 | >20%                    |                 5 |              0.07556 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3787 | >20%                    |                 2 |              0.18935 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3804 | >20%                    |                 5 |              0.07608 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3843 | >20%                    |                 2 |              0.19215 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3865 | >20%                    |                 2 |              0.19325 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3877 | <5%                     |                10 |              0.03877 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3914 | >20%                    |                10 |              0.03914 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.397  | >20%                    |                 2 |              0.1985  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3998 | 10-15%                  |                 2 |              0.1999  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4002 | >20%                    |                 2 |              0.2001  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4003 | >20%                    |                10 |              0.04003 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.402  | >20%                    |                 2 |              0.201   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4046 | >20%                    |                 5 |              0.08092 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.405  | 15-20%                  |                10 |              0.0405  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4205 | >20%                    |                 2 |              0.21025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.422  | >20%                    |                10 |              0.0422  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4253 | >20%                    |                10 |              0.04253 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4286 | >20%                    |                 5 |              0.08572 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4301 | <5%                     |                 2 |              0.21505 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4318 | >20%                    |                 2 |              0.2159  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4335 | >20%                    |                 5 |              0.0867  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4421 | 10-15%                  |                 2 |              0.22105 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4502 | >20%                    |                 5 |              0.09004 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4511 | >20%                    |                 2 |              0.22555 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4542 | >20%                    |                 2 |              0.2271  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4552 | >20%                    |                 5 |              0.09104 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4553 | >20%                    |                 5 |              0.09106 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4567 | <5%                     |                 2 |              0.22835 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4672 | 15-20%                  |                10 |              0.04672 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4707 | >20%                    |                 5 |              0.09414 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4737 | <5%                     |                10 |              0.04737 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | <5%                     |                 5 |              0.09486 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4755 | 15-20%                  |                 2 |              0.23775 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4813 | 15-20%                  |                 5 |              0.09626 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4896 | >20%                    |                 5 |              0.09792 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4959 | 15-20%                  |                 2 |              0.24795 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.497  | <5%                     |                 2 |              0.2485  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5013 | >20%                    |                 2 |              0.25065 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | >20%                    |                 5 |              0.10388 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5209 | >20%                    |                 2 |              0.26045 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5227 | 10-15%                  |                 5 |              0.10454 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.532  | >20%                    |                 2 |              0.266   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5374 | >20%                    |                 2 |              0.2687  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | 5-10%                   |                 5 |              0.10826 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5419 | 15-20%                  |                 5 |              0.10838 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5645 | 15-20%                  |                 5 |              0.1129  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5647 | >20%                    |                 5 |              0.11294 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5733 | 15-20%                  |                 5 |              0.11466 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5736 | >20%                    |                 5 |              0.11472 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5739 | 15-20%                  |                10 |              0.05739 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.579  | >20%                    |                 5 |              0.1158  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5976 | >20%                    |                 2 |              0.2988  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6062 | >20%                    |                 5 |              0.12124 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6069 | >20%                    |                10 |              0.06069 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.613  | >20%                    |                 2 |              0.3065  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6145 | >20%                    |                 2 |              0.30725 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6284 | 5-10%                   |                 5 |              0.12568 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6288 | 10-15%                  |                 5 |              0.12576 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6325 | 5-10%                   |                 5 |              0.1265  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6333 | 10-15%                  |                 2 |              0.31665 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6335 | >20%                    |                10 |              0.06335 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6425 | >20%                    |                10 |              0.06425 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6528 | >20%                    |                 2 |              0.3264  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6607 | 15-20%                  |                 5 |              0.13214 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6637 | >20%                    |                 5 |              0.13274 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6683 | >20%                    |                 5 |              0.13366 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6687 | 15-20%                  |                10 |              0.06687 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6721 | 15-20%                  |                10 |              0.06721 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6733 | >20%                    |                 5 |              0.13466 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6782 | 10-15%                  |                 5 |              0.13564 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6889 | >20%                    |                 2 |              0.34445 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6901 | >20%                    |                10 |              0.06901 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.694  | <5%                     |                 2 |              0.347   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7073 | >20%                    |                10 |              0.07073 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.715  | <5%                     |                 5 |              0.143   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.727  | 15-20%                  |                 2 |              0.3635  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.731  | >20%                    |                10 |              0.0731  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7328 | <5%                     |                10 |              0.07328 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7374 | 5-10%                   |                10 |              0.07374 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7387 | 15-20%                  |                10 |              0.07387 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7553 | >20%                    |                 5 |              0.15106 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7713 | >20%                    |                 2 |              0.38565 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7745 | >20%                    |                10 |              0.07745 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7851 | 15-20%                  |                10 |              0.07851 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.792  | >20%                    |                 2 |              0.396   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7983 | >20%                    |                10 |              0.07983 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.802  | >20%                    |                 2 |              0.401   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8043 | <5%                     |                10 |              0.08043 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.805  | >20%                    |                10 |              0.0805  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8057 | >20%                    |                10 |              0.08057 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8095 |                         |                 2 |              0.40475 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8156 | 15-20%                  |                10 |              0.08156 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8259 | 15-20%                  |                 5 |              0.16518 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8263 | >20%                    |                 5 |              0.16526 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8319 | <5%                     |                10 |              0.08319 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8346 | 15-20%                  |                10 |              0.08346 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8551 | >20%                    |                10 |              0.08551 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8682 | 10-15%                  |                 5 |              0.17364 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8688 | 10-15%                  |                 5 |              0.17376 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8725 | >20%                    |                10 |              0.08725 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8784 | >20%                    |                 2 |              0.4392  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8954 | >20%                    |                10 |              0.08954 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9041 | >20%                    |                10 |              0.09041 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9111 | >20%                    |                10 |              0.09111 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9258 | >20%                    |                 5 |              0.18516 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9434 | >20%                    |                10 |              0.09434 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.978  | >20%                    |                10 |              0.0978  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0321 | 10-15%                  |                10 |              0.10321 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0397 | 15-20%                  |                10 |              0.10397 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0491 | >20%                    |                 5 |              0.20982 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0527 | >20%                    |                 2 |              0.52635 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0759 | >20%                    |                 5 |              0.21518 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0899 | 15-20%                  |                10 |              0.10899 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0957 | >20%                    |                10 |              0.10957 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1004 | 10-15%                  |                10 |              0.11004 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1094 | >20%                    |                10 |              0.11094 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1187 | >20%                    |                 2 |              0.55935 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1358 | >20%                    |                10 |              0.11358 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1366 | >20%                    |                 2 |              0.5683  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1896 | <5%                     |                10 |              0.11896 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1946 |                         |                 5 |              0.23892 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.203  | >20%                    |                 5 |              0.2406  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2383 | >20%                    |                10 |              0.12383 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2557 | >20%                    |                10 |              0.12557 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2892 | >20%                    |                10 |              0.12892 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.3045 | >20%                    |                 5 |              0.2609  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3162 | >20%                    |                10 |              0.13162 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3279 | >20%                    |                 5 |              0.26558 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3371 | >20%                    |                 5 |              0.26742 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3461 | 15-20%                  |                10 |              0.13461 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.419  | >20%                    |                 2 |              0.7095  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4246 | 10-15%                  |                 5 |              0.28492 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5423 | >20%                    |                10 |              0.15423 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6065 | >20%                    |                10 |              0.16065 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6105 |                         |                10 |              0.16105 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6515 | 10-15%                  |                10 |              0.16515 |