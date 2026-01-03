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

Data correct as of 2026-01-03 01:56:51.561622, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0883 | >20%                    |                 2 |              0.04415 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1436 | >20%                    |                 2 |              0.0718  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1527 | >20%                    |                 2 |              0.07635 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1709 | <5%                     |                 2 |              0.08545 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1718 | >20%                    |                 5 |              0.03436 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1883 | >20%                    |                 2 |              0.09415 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2236 | >20%                    |                 2 |              0.1118  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2376 | >20%                    |                 2 |              0.1188  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2454 | >20%                    |                 2 |              0.1227  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2604 | >20%                    |                 2 |              0.1302  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | >20%                    |                 2 |              0.1307  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2719 | >20%                    |                 2 |              0.13595 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2727 | >20%                    |                 5 |              0.05454 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2754 | >20%                    |                 2 |              0.1377  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2785 | 15-20%                  |                 2 |              0.13925 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2841 | 5-10%                   |                10 |              0.02841 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2903 | >20%                    |                10 |              0.02903 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2915 | >20%                    |                 2 |              0.14575 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3029 | <5%                     |                 2 |              0.15145 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | >20%                    |                 2 |              0.1526  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3053 | >20%                    |                10 |              0.03053 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3114 | >20%                    |                 2 |              0.1557  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3145 | <5%                     |                 5 |              0.0629  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3165 | >20%                    |                 5 |              0.0633  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3284 | 5-10%                   |                 5 |              0.06568 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3304 | >20%                    |                 2 |              0.1652  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | >20%                    |                 2 |              0.1659  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3332 | >20%                    |                 2 |              0.1666  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3368 | 15-20%                  |                 5 |              0.06736 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3393 | 5-10%                   |                 2 |              0.16965 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3436 | <5%                     |                 5 |              0.06872 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3445 | >20%                    |                 5 |              0.0689  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3598 | >20%                    |                 2 |              0.1799  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3602 | 5-10%                   |                10 |              0.03602 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3639 | >20%                    |                 2 |              0.18195 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3691 | >20%                    |                 5 |              0.07382 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3727 | >20%                    |                 2 |              0.18635 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3731 | 10-15%                  |                 2 |              0.18655 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3733 | >20%                    |                 5 |              0.07466 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | 5-10%                   |                 2 |              0.1878  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | >20%                    |                 5 |              0.0757  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3787 | >20%                    |                 5 |              0.07574 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3803 | <5%                     |                10 |              0.03803 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.387  | 10-15%                  |                 2 |              0.1935  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3929 | >20%                    |                 2 |              0.19645 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3933 | >20%                    |                 2 |              0.19665 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3945 | >20%                    |                 5 |              0.0789  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3961 | >20%                    |                 5 |              0.07922 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3976 | >20%                    |                 2 |              0.1988  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3994 | >20%                    |                10 |              0.03994 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4014 | >20%                    |                 2 |              0.2007  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4055 | >20%                    |                10 |              0.04055 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4055 | 10-15%                  |                 2 |              0.20275 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4082 | >20%                    |                 5 |              0.08164 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4114 | >20%                    |                 2 |              0.2057  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4145 | >20%                    |                 5 |              0.0829  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4148 | >20%                    |                 5 |              0.08296 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | <5%                     |                 2 |              0.2107  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4218 | >20%                    |                 2 |              0.2109  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4219 | >20%                    |                 5 |              0.08438 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4229 | <5%                     |                10 |              0.04229 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4326 | 15-20%                  |                10 |              0.04326 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4453 | >20%                    |                10 |              0.04453 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4594 | >20%                    |                 5 |              0.09188 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.461  | <5%                     |                 2 |              0.2305  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4618 | >20%                    |                 2 |              0.2309  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4654 | >20%                    |                 2 |              0.2327  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4715 | >20%                    |                 5 |              0.0943  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4726 | >20%                    |                 2 |              0.2363  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | >20%                    |                 5 |              0.09474 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4739 | >20%                    |                 2 |              0.23695 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4776 | >20%                    |                 2 |              0.2388  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4803 | <5%                     |                 5 |              0.09606 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4803 | >20%                    |                 5 |              0.09606 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4857 | 15-20%                  |                 2 |              0.24285 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4909 | >20%                    |                 5 |              0.09818 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4936 | >20%                    |                 2 |              0.2468  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | >20%                    |                 5 |              0.09938 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4991 | >20%                    |                10 |              0.04991 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5011 | 15-20%                  |                 5 |              0.10022 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5036 | 15-20%                  |                 2 |              0.2518  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5096 | >20%                    |                 5 |              0.10192 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5117 | 10-15%                  |                 5 |              0.10234 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5319 | 15-20%                  |                10 |              0.05319 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5351 | >20%                    |                 2 |              0.26755 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5395 | >20%                    |                 5 |              0.1079  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5484 | 15-20%                  |                 5 |              0.10968 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5583 | >20%                    |                 5 |              0.11166 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5585 | 5-10%                   |                 5 |              0.1117  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5719 | >20%                    |                 5 |              0.11438 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | 15-20%                  |                 5 |              0.11458 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5946 | >20%                    |                10 |              0.05946 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5959 | >20%                    |                 5 |              0.11918 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5965 | 15-20%                  |                 5 |              0.1193  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5973 | >20%                    |                 2 |              0.29865 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6224 | 10-15%                  |                 2 |              0.3112  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6242 | 5-10%                   |                 5 |              0.12484 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6274 | 10-15%                  |                 5 |              0.12548 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6286 | >20%                    |                10 |              0.06286 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.64   | 15-20%                  |                10 |              0.064   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6457 | >20%                    |                 5 |              0.12914 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6488 | >20%                    |                 2 |              0.3244  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.649  | >20%                    |                 2 |              0.3245  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6514 | 15-20%                  |                 5 |              0.13028 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6625 | 15-20%                  |                10 |              0.06625 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6637 | <5%                     |                 5 |              0.13274 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6673 | >20%                    |                 5 |              0.13346 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6685 | >20%                    |                 2 |              0.33425 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6741 | >20%                    |                 5 |              0.13482 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6844 | 10-15%                  |                 5 |              0.13688 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6946 | >20%                    |                 5 |              0.13892 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6957 | 5-10%                   |                 5 |              0.13914 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7044 | 5-10%                   |                10 |              0.07044 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7051 | >20%                    |                 2 |              0.35255 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7149 | >20%                    |                 2 |              0.35745 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7169 | 15-20%                  |                 2 |              0.35845 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7235 | >20%                    |                10 |              0.07235 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7348 | >20%                    |                10 |              0.07348 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7364 | >20%                    |                10 |              0.07364 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7458 | >20%                    |                10 |              0.07458 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7468 | <5%                     |                10 |              0.07468 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7523 | >20%                    |                 2 |              0.37615 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7546 | >20%                    |                10 |              0.07546 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7587 | <5%                     |                 2 |              0.37935 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.761  | >20%                    |                10 |              0.0761  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7615 | >20%                    |                 2 |              0.38075 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7656 | >20%                    |                 5 |              0.15312 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7671 | >20%                    |                10 |              0.07671 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7878 | >20%                    |                 5 |              0.15756 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7879 | 15-20%                  |                10 |              0.07879 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7912 | 15-20%                  |                10 |              0.07912 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.801  | >20%                    |                10 |              0.0801  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8011 | 15-20%                  |                10 |              0.08011 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8095 | <5%                     |                10 |              0.08095 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8258 | 15-20%                  |                10 |              0.08258 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8334 | 15-20%                  |                 5 |              0.16668 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8472 | >20%                    |                 2 |              0.4236  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8495 | <5%                     |                10 |              0.08495 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8551 | 10-15%                  |                 5 |              0.17102 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8562 | >20%                    |                 5 |              0.17124 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8663 | >20%                    |                 2 |              0.43315 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8696 | >20%                    |                10 |              0.08696 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.881  | >20%                    |                10 |              0.0881  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8893 | 15-20%                  |                10 |              0.08893 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8914 | >20%                    |                10 |              0.08914 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8929 | >20%                    |                10 |              0.08929 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9112 | >20%                    |                10 |              0.09112 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9185 | >20%                    |                10 |              0.09185 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9187 | >20%                    |                 5 |              0.18374 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9219 | 10-15%                  |                 5 |              0.18438 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9352 | >20%                    |                10 |              0.09352 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9687 | 15-20%                  |                10 |              0.09687 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0034 | 10-15%                  |                10 |              0.10034 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0194 | >20%                    |                 5 |              0.20388 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0226 | >20%                    |                 2 |              0.5113  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0269 | >20%                    |                10 |              0.10269 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0489 | >20%                    |                10 |              0.10489 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0864 | >20%                    |                 5 |              0.21728 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0935 | >20%                    |                 5 |              0.2187  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0961 | 15-20%                  |                10 |              0.10961 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1074 | <5%                     |                10 |              0.11074 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1351 | >20%                    |                10 |              0.11351 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1678 | >20%                    |                 2 |              0.5839  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1841 | 10-15%                  |                10 |              0.11841 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2109 | 15-20%                  |                10 |              0.12109 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2114 | >20%                    |                10 |              0.12114 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2156 | >20%                    |                 2 |              0.6078  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2252 | >20%                    |                 5 |              0.24504 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3151 | >20%                    |                 5 |              0.26302 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3152 | >20%                    |                10 |              0.13152 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3627 | >20%                    |                10 |              0.13627 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4044 | >20%                    |                10 |              0.14044 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.4168 | >20%                    |                 5 |              0.28336 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4371 | >20%                    |                 2 |              0.71855 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4502 | 10-15%                  |                 5 |              0.29004 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.484  | >20%                    |                10 |              0.1484  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6734 | >20%                    |                10 |              0.16734 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7752 | 10-15%                  |                10 |              0.17752 |