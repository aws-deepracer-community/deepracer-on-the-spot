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

Data correct as of 2026-07-01 04:16:51.131812, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1394 | >20%                    |                 2 |              0.0697  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2055 | 15-20%                  |                 2 |              0.10275 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2185 | >20%                    |                 2 |              0.10925 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | >20%                    |                 2 |              0.1191  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | >20%                    |                 2 |              0.12245 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | >20%                    |                 2 |              0.1262  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2533 | >20%                    |                 2 |              0.12665 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.255  | 15-20%                  |                 5 |              0.051   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.258  | >20%                    |                 2 |              0.129   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | >20%                    |                 2 |              0.12955 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2596 | 10-15%                  |                 2 |              0.1298  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2696 | 15-20%                  |                 2 |              0.1348  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2777 | 15-20%                  |                 2 |              0.13885 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2788 | 15-20%                  |                 5 |              0.05576 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | >20%                    |                 2 |              0.1438  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2889 | 5-10%                   |                10 |              0.02889 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3208 | >20%                    |                 5 |              0.06416 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3311 | >20%                    |                 2 |              0.16555 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3342 | >20%                    |                 5 |              0.06684 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.343  | >20%                    |                 2 |              0.1715  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.343  | >20%                    |                 5 |              0.0686  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.35   | <5%                     |                 2 |              0.175   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3624 | 10-15%                  |                 2 |              0.1812  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3626 | >20%                    |                10 |              0.03626 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3631 | >20%                    |                 5 |              0.07262 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3738 | >20%                    |                10 |              0.03738 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3764 | 5-10%                   |                10 |              0.03764 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3767 | 5-10%                   |                10 |              0.03767 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3777 | >20%                    |                 5 |              0.07554 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3805 | >20%                    |                 5 |              0.0761  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.384  | >20%                    |                 5 |              0.0768  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3846 | >20%                    |                 2 |              0.1923  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.392  | >20%                    |                 2 |              0.196   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3927 | 10-15%                  |                 2 |              0.19635 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4139 | >20%                    |                 5 |              0.08278 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4218 | >20%                    |                 2 |              0.2109  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.423  | >20%                    |                 2 |              0.2115  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4308 | >20%                    |                 5 |              0.08616 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4398 | 10-15%                  |                 2 |              0.2199  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4409 | <5%                     |                 2 |              0.22045 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4415 | >20%                    |                 5 |              0.0883  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.445  | <5%                     |                 2 |              0.2225  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4467 | >20%                    |                10 |              0.04467 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4493 | >20%                    |                 2 |              0.22465 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4514 | >20%                    |                 2 |              0.2257  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4623 | >20%                    |                 5 |              0.09246 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4633 | >20%                    |                 5 |              0.09266 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4645 | 15-20%                  |                 2 |              0.23225 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4757 | >20%                    |                 2 |              0.23785 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4842 | >20%                    |                 2 |              0.2421  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4884 | 15-20%                  |                 5 |              0.09768 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | >20%                    |                 5 |              0.0977  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4993 | >20%                    |                10 |              0.04993 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5004 | >20%                    |                 5 |              0.10008 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5022 | 15-20%                  |                 2 |              0.2511  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5153 | 10-15%                  |                10 |              0.05153 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5187 | >20%                    |                10 |              0.05187 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5236 | 15-20%                  |                 5 |              0.10472 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5249 | >20%                    |                 5 |              0.10498 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5266 | >20%                    |                 5 |              0.10532 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5324 | >20%                    |                 5 |              0.10648 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5379 | >20%                    |                 2 |              0.26895 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5394 | 5-10%                   |                 5 |              0.10788 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5411 | 5-10%                   |                 2 |              0.27055 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5463 | >20%                    |                 5 |              0.10926 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5493 | 10-15%                  |                 5 |              0.10986 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5518 | >20%                    |                10 |              0.05518 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5661 | 15-20%                  |                 2 |              0.28305 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5892 | >20%                    |                 5 |              0.11784 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5959 | >20%                    |                 5 |              0.11918 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6102 | >20%                    |                10 |              0.06102 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6164 | >20%                    |                 5 |              0.12328 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6171 | >20%                    |                10 |              0.06171 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.618  |                         |                 2 |              0.309   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6205 | <5%                     |                 5 |              0.1241  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6224 | >20%                    |                 5 |              0.12448 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6227 | >20%                    |                10 |              0.06227 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6287 | >20%                    |                 5 |              0.12574 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6315 | >20%                    |                 2 |              0.31575 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6478 | >20%                    |                 5 |              0.12956 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6482 | >20%                    |                10 |              0.06482 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6512 | >20%                    |                 2 |              0.3256  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6564 | >20%                    |                 2 |              0.3282  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6638 | 5-10%                   |                 5 |              0.13276 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6655 | 5-10%                   |                 2 |              0.33275 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6658 |                         |                 2 |              0.3329  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6673 | >20%                    |                 2 |              0.33365 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6677 | >20%                    |                10 |              0.06677 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6788 | >20%                    |                 2 |              0.3394  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6798 | >20%                    |                10 |              0.06798 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6829 | >20%                    |                 5 |              0.13658 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7021 | >20%                    |                 5 |              0.14042 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7034 | 10-15%                  |                 2 |              0.3517  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7176 | >20%                    |                 2 |              0.3588  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7276 | >20%                    |                 5 |              0.14552 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7387 | 15-20%                  |                10 |              0.07387 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7395 | 15-20%                  |                10 |              0.07395 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7467 | >20%                    |                10 |              0.07467 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7522 | >20%                    |                10 |              0.07522 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7564 | 5-10%                   |                10 |              0.07564 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7599 | >20%                    |                10 |              0.07599 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7818 | >20%                    |                 5 |              0.15636 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7825 | >20%                    |                10 |              0.07825 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7874 | >20%                    |                 5 |              0.15748 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8075 | <5%                     |                10 |              0.08075 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8144 | >20%                    |                 2 |              0.4072  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8334 | >20%                    |                10 |              0.08334 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.844  | 15-20%                  |                10 |              0.0844  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8466 | >20%                    |                 5 |              0.16932 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8468 | 5-10%                   |                10 |              0.08468 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.852  | 15-20%                  |                10 |              0.0852  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8639 | >20%                    |                10 |              0.08639 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.872  | >20%                    |                 5 |              0.1744  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8724 | >20%                    |                10 |              0.08724 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.877  | 10-15%                  |                 2 |              0.4385  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.88   | >20%                    |                10 |              0.088   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.902  | >20%                    |                10 |              0.0902  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.91   | >20%                    |                10 |              0.091   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9138 | >20%                    |                10 |              0.09138 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9149 | 15-20%                  |                10 |              0.09149 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9169 | 10-15%                  |                 2 |              0.45845 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9279 | >20%                    |                10 |              0.09279 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9304 | 5-10%                   |                10 |              0.09304 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9384 | >20%                    |                 5 |              0.18768 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9708 | >20%                    |                 5 |              0.19416 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9739 |                         |                 5 |              0.19478 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9766 | >20%                    |                10 |              0.09766 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9904 | >20%                    |                10 |              0.09904 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9971 | >20%                    |                 5 |              0.19942 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0022 | >20%                    |                10 |              0.10022 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0095 | 15-20%                  |                10 |              0.10095 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0312 | >20%                    |                 5 |              0.20624 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.06   | >20%                    |                 2 |              0.53    |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0615 | >20%                    |                10 |              0.10615 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0715 | >20%                    |                 5 |              0.2143  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0882 | 5-10%                   |                 2 |              0.5441  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1222 | >20%                    |                 5 |              0.22444 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1468 | >20%                    |                 5 |              0.22936 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.161  | >20%                    |                10 |              0.1161  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1918 |                         |                10 |              0.11918 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2338 |                         |                 5 |              0.24676 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2416 | >20%                    |                 5 |              0.24832 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3392 | 15-20%                  |                10 |              0.13392 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.34   | 15-20%                  |                10 |              0.134   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3968 | >20%                    |                10 |              0.13968 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4249 | 15-20%                  |                 5 |              0.28498 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4857 | >20%                    |                 5 |              0.29714 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5266 | 10-15%                  |                10 |              0.15266 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7631 | 5-10%                   |                 2 |              0.88155 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.186  | >20%                    |                10 |              0.2186  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4707 | >20%                    |                10 |              0.24707 |