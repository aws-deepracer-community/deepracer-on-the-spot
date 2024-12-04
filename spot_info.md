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

Data correct as of 2024-12-04 01:46:41.536717, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1657 | >20%                    |                 5 |              0.03314 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1711 | <5%                     |                 2 |              0.08555 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.206  | 10-15%                  |                 2 |              0.103   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2171 | 5-10%                   |                 2 |              0.10855 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.228  | 5-10%                   |                 2 |              0.114   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2291 | 15-20%                  |                 2 |              0.11455 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2292 | <5%                     |                 5 |              0.04584 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2363 | <5%                     |                 2 |              0.11815 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2366 | >20%                    |                 5 |              0.04732 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | <5%                     |                 2 |              0.12025 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2419 | 15-20%                  |                 5 |              0.04838 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2461 | >20%                    |                 5 |              0.04922 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2686 | <5%                     |                10 |              0.02686 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2716 | 10-15%                  |                 2 |              0.1358  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2777 | 5-10%                   |                 2 |              0.13885 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.278  | 5-10%                   |                 2 |              0.139   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2784 | >20%                    |                 5 |              0.05568 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | <5%                     |                 2 |              0.14185 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | 10-15%                  |                 2 |              0.1467  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | <5%                     |                 2 |              0.15715 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 5-10%                   |                 2 |              0.1598  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3249 | >20%                    |                 2 |              0.16245 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3299 | >20%                    |                 2 |              0.16495 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3327 | 5-10%                   |                 2 |              0.16635 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3352 | <5%                     |                 2 |              0.1676  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3375 | >20%                    |                 2 |              0.16875 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3464 | <5%                     |                 5 |              0.06928 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3468 | 10-15%                  |                10 |              0.03468 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3496 | >20%                    |                 5 |              0.06992 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3509 | <5%                     |                 5 |              0.07018 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3526 | >20%                    |                10 |              0.03526 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3541 | <5%                     |                 2 |              0.17705 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3549 | <5%                     |                 5 |              0.07098 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.358  | 15-20%                  |                 2 |              0.179   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3678 | >20%                    |                 2 |              0.1839  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3685 | <5%                     |                 2 |              0.18425 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3704 | >20%                    |                 2 |              0.1852  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3755 | <5%                     |                10 |              0.03755 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.38   | 15-20%                  |                 2 |              0.19    |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3814 | 15-20%                  |                 5 |              0.07628 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4037 | 5-10%                   |                 2 |              0.20185 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4077 | <5%                     |                 2 |              0.20385 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4082 | 5-10%                   |                 2 |              0.2041  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4228 | 5-10%                   |                 2 |              0.2114  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4317 | 5-10%                   |                 5 |              0.08634 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4404 | 15-20%                  |                 5 |              0.08808 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4452 | <5%                     |                 2 |              0.2226  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.449  | >20%                    |                 2 |              0.2245  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4512 | 10-15%                  |                 2 |              0.2256  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4628 | 15-20%                  |                 5 |              0.09256 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | 10-15%                  |                 5 |              0.09264 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4748 | <5%                     |                 2 |              0.2374  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4761 | >20%                    |                 2 |              0.23805 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | <5%                     |                 5 |              0.0957  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4903 | 5-10%                   |                 5 |              0.09806 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4935 | 5-10%                   |                 2 |              0.24675 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4941 | <5%                     |                 5 |              0.09882 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4971 | 10-15%                  |                 2 |              0.24855 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4979 | 5-10%                   |                 2 |              0.24895 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | 15-20%                  |                 5 |              0.10132 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5073 | 10-15%                  |                 2 |              0.25365 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5093 | >20%                    |                 5 |              0.10186 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5175 | 5-10%                   |                 5 |              0.1035  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5179 | >20%                    |                10 |              0.05179 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5238 |                         |                 2 |              0.2619  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5255 | 10-15%                  |                10 |              0.05255 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5315 | >20%                    |                 5 |              0.1063  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5364 | 10-15%                  |                 5 |              0.10728 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5371 | <5%                     |                 5 |              0.10742 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5371 | <5%                     |                 5 |              0.10742 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5399 | >20%                    |                 5 |              0.10798 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5469 | >20%                    |                 2 |              0.27345 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5474 | 10-15%                  |                 5 |              0.10948 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5535 | 15-20%                  |                 2 |              0.27675 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5601 | <5%                     |                 5 |              0.11202 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5622 | 5-10%                   |                 5 |              0.11244 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5661 | >20%                    |                 5 |              0.11322 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5695 | <5%                     |                 5 |              0.1139  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | 10-15%                  |                 5 |              0.11398 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5861 | >20%                    |                 5 |              0.11722 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5908 | 5-10%                   |                10 |              0.05908 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | 10-15%                  |                10 |              0.06159 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6278 | >20%                    |                10 |              0.06278 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6297 | 5-10%                   |                10 |              0.06297 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6329 | 5-10%                   |                10 |              0.06329 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6435 | >20%                    |                10 |              0.06435 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6479 | 15-20%                  |                10 |              0.06479 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6579 | <5%                     |                 5 |              0.13158 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6635 | 5-10%                   |                 5 |              0.1327  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6719 | >20%                    |                10 |              0.06719 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6724 | >20%                    |                10 |              0.06724 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6733 | >20%                    |                 2 |              0.33665 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.6794 |                         |                 5 |              0.13588 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6829 | 10-15%                  |                10 |              0.06829 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.692  | 5-10%                   |                 5 |              0.1384  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7001 | <5%                     |                 5 |              0.14002 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7184 | 15-20%                  |                 5 |              0.14368 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7195 | 5-10%                   |                 2 |              0.35975 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7273 | 15-20%                  |                 5 |              0.14546 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7404 | 5-10%                   |                10 |              0.07404 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7524 | <5%                     |                 2 |              0.3762  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7755 | >20%                    |                10 |              0.07755 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7775 | <5%                     |                 5 |              0.1555  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7848 | 5-10%                   |                 5 |              0.15696 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7916 | <5%                     |                10 |              0.07916 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.812  | 5-10%                   |                10 |              0.0812  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8231 | >20%                    |                 5 |              0.16462 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8302 | 10-15%                  |                10 |              0.08302 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8362 | 5-10%                   |                10 |              0.08362 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8371 | 5-10%                   |                10 |              0.08371 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8404 | 10-15%                  |                10 |              0.08404 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8843 | >20%                    |                10 |              0.08843 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9076 | 5-10%                   |                10 |              0.09076 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9256 | 15-20%                  |                10 |              0.09256 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9362 | <5%                     |                10 |              0.09362 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9406 | <5%                     |                 5 |              0.18812 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.948  | 5-10%                   |                10 |              0.0948  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9588 | 5-10%                   |                10 |              0.09588 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9686 | 5-10%                   |                10 |              0.09686 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9975 | >20%                    |                10 |              0.09975 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0155 | 15-20%                  |                10 |              0.10155 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0185 | >20%                    |                10 |              0.10185 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0318 | <5%                     |                10 |              0.10318 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0438 | 5-10%                   |                10 |              0.10438 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0485 | <5%                     |                10 |              0.10485 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0861 | <5%                     |                10 |              0.10861 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.1196 |                         |                10 |              0.11196 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1793 | 10-15%                  |                10 |              0.11793 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1829 | 15-20%                  |                10 |              0.11829 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3598 | >20%                    |                10 |              0.13598 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.455  | >20%                    |                10 |              0.1455  |