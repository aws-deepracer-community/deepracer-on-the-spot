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

Data correct as of 2024-11-13 01:36:53.381947, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1592 | 15-20%                  |                 5 |              0.03184 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1682 | 5-10%                   |                 2 |              0.0841  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1766 | 10-15%                  |                 2 |              0.0883  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2105 | >20%                    |                 2 |              0.10525 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2109 | 15-20%                  |                 2 |              0.10545 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2213 | 5-10%                   |                 2 |              0.11065 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | 5-10%                   |                 2 |              0.12115 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | <5%                     |                 2 |              0.12335 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2645 | 5-10%                   |                 2 |              0.13225 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2687 | 10-15%                  |                 2 |              0.13435 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2687 | >20%                    |                 5 |              0.05374 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | 5-10%                   |                 2 |              0.1365  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | 5-10%                   |                 2 |              0.13665 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | <5%                     |                 2 |              0.13935 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | <5%                     |                 2 |              0.1418  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | <5%                     |                 2 |              0.1578  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3184 | >20%                    |                 2 |              0.1592  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3206 | <5%                     |                 5 |              0.06412 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3276 | 15-20%                  |                 2 |              0.1638  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | 5-10%                   |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3523 | 5-10%                   |                 5 |              0.07046 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3529 | 15-20%                  |                 2 |              0.17645 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3529 | <5%                     |                 2 |              0.17645 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3595 | >20%                    |                 2 |              0.17975 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3618 | <5%                     |                 2 |              0.1809  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3735 | 5-10%                   |                 5 |              0.0747  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3827 | 5-10%                   |                 2 |              0.19135 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3841 | >20%                    |                 5 |              0.07682 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3844 | 15-20%                  |                 5 |              0.07688 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3863 | >20%                    |                 2 |              0.19315 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3936 | <5%                     |                 2 |              0.1968  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4054 | >20%                    |                 2 |              0.2027  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4115 | >20%                    |                 2 |              0.20575 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4233 | 10-15%                  |                 5 |              0.08466 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4235 | 5-10%                   |                 2 |              0.21175 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.426  | <5%                     |                 2 |              0.213   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4262 | 5-10%                   |                 2 |              0.2131  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4281 | 10-15%                  |                 2 |              0.21405 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4303 | <5%                     |                 5 |              0.08606 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.433  | 5-10%                   |                 2 |              0.2165  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | <5%                     |                 5 |              0.08814 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4447 | 10-15%                  |                 5 |              0.08894 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | 10-15%                  |                 5 |              0.09022 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4587 | 5-10%                   |                 5 |              0.09174 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4599 | >20%                    |                 2 |              0.22995 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | >20%                    |                 2 |              0.2317  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4648 | >20%                    |                 5 |              0.09296 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.465  | 15-20%                  |                 5 |              0.093   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4669 | 10-15%                  |                 5 |              0.09338 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4696 | 15-20%                  |                 5 |              0.09392 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4753 | 10-15%                  |                 5 |              0.09506 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4834 | <5%                     |                 2 |              0.2417  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4849 | <5%                     |                 2 |              0.24245 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4862 | 15-20%                  |                 5 |              0.09724 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | 5-10%                   |                 5 |              0.09842 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5154 | 5-10%                   |                 2 |              0.2577  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5241 | <5%                     |                 5 |              0.10482 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5269 | 10-15%                  |                 2 |              0.26345 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5272 | <5%                     |                 5 |              0.10544 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5303 | >20%                    |                10 |              0.05303 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5382 | >20%                    |                 5 |              0.10764 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5465 | 5-10%                   |                 5 |              0.1093  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5486 | >20%                    |                 2 |              0.2743  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5487 | >20%                    |                10 |              0.05487 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.549  | 10-15%                  |                 5 |              0.1098  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5501 | >20%                    |                 5 |              0.11002 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5548 | <5%                     |                 5 |              0.11096 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5612 | 10-15%                  |                 5 |              0.11224 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5623 | <5%                     |                 2 |              0.28115 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5663 | 10-15%                  |                 5 |              0.11326 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5682 | 15-20%                  |                 2 |              0.2841  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5696 | >20%                    |                 5 |              0.11392 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5711 | >20%                    |                 5 |              0.11422 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5734 | 15-20%                  |                10 |              0.05734 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5772 | 10-15%                  |                10 |              0.05772 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.586  | >20%                    |                10 |              0.0586  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5933 | 5-10%                   |                10 |              0.05933 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5956 | <5%                     |                10 |              0.05956 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5976 | 5-10%                   |                 5 |              0.11952 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6067 | >20%                    |                 5 |              0.12134 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6469 | 5-10%                   |                10 |              0.06469 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6737 | 15-20%                  |                 5 |              0.13474 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6794 | >20%                    |                 2 |              0.3397  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6876 | >20%                    |                10 |              0.06876 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6942 | 5-10%                   |                 5 |              0.13884 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6943 | >20%                    |                 5 |              0.13886 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7106 | <5%                     |                 5 |              0.14212 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7185 | >20%                    |                10 |              0.07185 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7265 | 10-15%                  |                10 |              0.07265 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7334 | >20%                    |                10 |              0.07334 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7432 | <5%                     |                10 |              0.07432 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7451 | 15-20%                  |                 5 |              0.14902 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7476 | 15-20%                  |                10 |              0.07476 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.748  | 5-10%                   |                10 |              0.0748  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7951 | 10-15%                  |                10 |              0.07951 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7953 | 5-10%                   |                 5 |              0.15906 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8012 | >20%                    |                10 |              0.08012 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8014 | 10-15%                  |                10 |              0.08014 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8052 | <5%                     |                10 |              0.08052 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.827  | <5%                     |                 5 |              0.1654  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8275 | >20%                    |                10 |              0.08275 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8338 | 10-15%                  |                10 |              0.08338 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8369 | <5%                     |                 2 |              0.41845 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8395 | 10-15%                  |                10 |              0.08395 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8403 | 5-10%                   |                10 |              0.08403 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8466 | 15-20%                  |                10 |              0.08466 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8502 | 5-10%                   |                10 |              0.08502 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8694 | >20%                    |                 5 |              0.17388 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8795 | 5-10%                   |                10 |              0.08795 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8988 | >20%                    |                10 |              0.08988 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.959  | <5%                     |                10 |              0.0959  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9674 | <5%                     |                10 |              0.09674 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0004 | 10-15%                  |                10 |              0.10004 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0099 | <5%                     |                10 |              0.10099 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0204 | 10-15%                  |                10 |              0.10204 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0504 | >20%                    |                10 |              0.10504 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0627 | >20%                    |                10 |              0.10627 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0716 | <5%                     |                10 |              0.10716 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0787 | <5%                     |                10 |              0.10787 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1347 | 15-20%                  |                10 |              0.11347 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1418 | 10-15%                  |                10 |              0.11418 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3924 | >20%                    |                10 |              0.13924 |