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

Data correct as of 2024-10-10 01:36:55.284130, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1052 | <5%                     |                 2 |              0.0526  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1413 | <5%                     |                 2 |              0.07065 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.183  | 15-20%                  |                 2 |              0.0915  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2077 | >20%                    |                 2 |              0.10385 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2143 | <5%                     |                 2 |              0.10715 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2172 | >20%                    |                 5 |              0.04344 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2194 | 15-20%                  |                 2 |              0.1097  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2202 | 10-15%                  |                 2 |              0.1101  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2248 | <5%                     |                 2 |              0.1124  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2274 | 10-15%                  |                 2 |              0.1137  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2308 | >20%                    |                 2 |              0.1154  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | <5%                     |                 2 |              0.122   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | <5%                     |                 2 |              0.1282  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.2681 | <5%                     |                 2 |              0.13405 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2694 | >20%                    |                 5 |              0.05388 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2768 | 5-10%                   |                 2 |              0.1384  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | <5%                     |                 2 |              0.1391  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.284  | <5%                     |                 2 |              0.142   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2856 | 15-20%                  |                 2 |              0.1428  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2862 | 5-10%                   |                 5 |              0.05724 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2873 | 15-20%                  |                 5 |              0.05746 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | <5%                     |                 2 |              0.14425 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2892 | 15-20%                  |                10 |              0.02892 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2937 | 5-10%                   |                 5 |              0.05874 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3035 | >20%                    |                 5 |              0.0607  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3209 | 15-20%                  |                 2 |              0.16045 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3236 | 15-20%                  |                 2 |              0.1618  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3274 | >20%                    |                 5 |              0.06548 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3355 | <5%                     |                 2 |              0.16775 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3357 | >20%                    |                 2 |              0.16785 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.3378 | 5-10%                   |                 5 |              0.06756 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3533 | 5-10%                   |                 5 |              0.07066 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3576 | <5%                     |                 2 |              0.1788  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3609 | >20%                    |                 5 |              0.07218 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | <5%                     |                 5 |              0.07292 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.385  | >20%                    |                 5 |              0.077   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3898 | <5%                     |                 5 |              0.07796 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3902 | >20%                    |                 2 |              0.1951  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3902 | 5-10%                   |                 2 |              0.1951  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4073 | >20%                    |                10 |              0.04073 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.41   | 5-10%                   |                 2 |              0.205   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4132 | >20%                    |                 2 |              0.2066  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4209 | <5%                     |                 5 |              0.08418 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4229 | 5-10%                   |                10 |              0.04229 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4254 | <5%                     |                 2 |              0.2127  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4295 | 5-10%                   |                10 |              0.04295 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4314 | 15-20%                  |                 5 |              0.08628 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4335 | 10-15%                  |                 5 |              0.0867  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4347 | 5-10%                   |                 5 |              0.08694 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.435  | <5%                     |                 2 |              0.2175  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.438  | 5-10%                   |                 2 |              0.219   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.441  | 5-10%                   |                10 |              0.0441  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4425 | >20%                    |                 2 |              0.22125 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4457 | >20%                    |                 2 |              0.22285 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4545 | 10-15%                  |                 5 |              0.0909  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | <5%                     |                 5 |              0.09154 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4591 | 15-20%                  |                 2 |              0.22955 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4629 | <5%                     |                 5 |              0.09258 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4693 | 15-20%                  |                10 |              0.04693 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4694 | 5-10%                   |                10 |              0.04694 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4794 | >20%                    |                 2 |              0.2397  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4813 | >20%                    |                10 |              0.04813 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4899 | <5%                     |                 5 |              0.09798 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4945 | 10-15%                  |                 5 |              0.0989  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4959 | >20%                    |                 2 |              0.24795 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4967 | 15-20%                  |                 5 |              0.09934 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5055 | <5%                     |                 5 |              0.1011  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5063 | >20%                    |                 2 |              0.25315 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5063 | <5%                     |                 5 |              0.10126 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5134 | <5%                     |                 5 |              0.10268 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5264 | <5%                     |                 5 |              0.10528 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5498 | >20%                    |                 5 |              0.10996 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.5548 | <5%                     |                10 |              0.05548 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5893 | 15-20%                  |                 5 |              0.11786 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5938 | >20%                    |                 5 |              0.11876 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5981 | >20%                    |                 2 |              0.29905 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6065 | >20%                    |                 5 |              0.1213  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.609  | >20%                    |                 5 |              0.1218  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6201 | >20%                    |                 5 |              0.12402 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6281 | 15-20%                  |                 5 |              0.12562 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6387 | 5-10%                   |                 5 |              0.12774 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6483 | 15-20%                  |                10 |              0.06483 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6541 | <5%                     |                10 |              0.06541 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6582 | >20%                    |                10 |              0.06582 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6597 | <5%                     |                10 |              0.06597 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6878 | >20%                    |                 2 |              0.3439  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6922 | <5%                     |                10 |              0.06922 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6933 | >20%                    |                10 |              0.06933 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | 5-10%                   |                10 |              0.06969 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7005 | 15-20%                  |                10 |              0.07005 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7338 | >20%                    |                 5 |              0.14676 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7577 | >20%                    |                10 |              0.07577 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7711 | >20%                    |                 2 |              0.38555 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7738 | 15-20%                  |                10 |              0.07738 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7789 | 5-10%                   |                10 |              0.07789 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7852 | 10-15%                  |                 5 |              0.15704 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.789  | <5%                     |                10 |              0.0789  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7891 | 10-15%                  |                10 |              0.07891 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7935 | 15-20%                  |                10 |              0.07935 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8073 | 5-10%                   |                10 |              0.08073 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8302 | >20%                    |                10 |              0.08302 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8693 | <5%                     |                10 |              0.08693 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8814 | <5%                     |                 2 |              0.4407  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8864 | >20%                    |                 5 |              0.17728 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9021 | >20%                    |                10 |              0.09021 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9028 | >20%                    |                10 |              0.09028 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.924  | <5%                     |                10 |              0.0924  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9282 | 10-15%                  |                10 |              0.09282 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9693 | 5-10%                   |                10 |              0.09693 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9776 | 10-15%                  |                 2 |              0.4888  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9905 | >20%                    |                10 |              0.09905 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9999 | 10-15%                  |                 5 |              0.19998 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0141 | <5%                     |                10 |              0.10141 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0302 | >20%                    |                10 |              0.10302 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.0956 | >20%                    |                10 |              0.10956 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1255 | >20%                    |                 5 |              0.2251  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1639 | >20%                    |                10 |              0.11639 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5073 | >20%                    |                10 |              0.15073 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5328 | 5-10%                   |                10 |              0.15328 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5862 | 5-10%                   |                10 |              0.15862 |