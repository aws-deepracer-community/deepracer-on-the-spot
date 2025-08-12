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

Data correct as of 2025-08-12 01:56:02.556814, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0967 | 5-10%                   |                 2 |              0.04835 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1026 | >20%                    |                 2 |              0.0513  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.148  | <5%                     |                 5 |              0.0296  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1642 | <5%                     |                 5 |              0.03284 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2118 | 15-20%                  |                 2 |              0.1059  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2151 | >20%                    |                 2 |              0.10755 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | 15-20%                  |                 2 |              0.12415 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2523 | >20%                    |                 2 |              0.12615 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | >20%                    |                 2 |              0.12955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2625 | 5-10%                   |                 2 |              0.13125 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | >20%                    |                 2 |              0.1432  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | 15-20%                  |                 2 |              0.15475 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3116 | >20%                    |                 2 |              0.1558  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3187 | <5%                     |                 2 |              0.15935 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3227 | 5-10%                   |                 2 |              0.16135 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3277 | 5-10%                   |                 2 |              0.16385 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | >20%                    |                 2 |              0.1747  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3522 | >20%                    |                 2 |              0.1761  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3577 | >20%                    |                 5 |              0.07154 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | 15-20%                  |                 2 |              0.17925 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | <5%                     |                 2 |              0.1808  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3646 | 10-15%                  |                 2 |              0.1823  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3674 | 15-20%                  |                 2 |              0.1837  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3683 | >20%                    |                 2 |              0.18415 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3763 | <5%                     |                10 |              0.03763 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | >20%                    |                 5 |              0.07694 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3862 | >20%                    |                 2 |              0.1931  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | >20%                    |                 5 |              0.08118 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4142 | >20%                    |                 5 |              0.08284 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | <5%                     |                 2 |              0.2083  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | >20%                    |                 2 |              0.2099  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.422  | >20%                    |                10 |              0.0422  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4265 | >20%                    |                 5 |              0.0853  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4309 | >20%                    |                 5 |              0.08618 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4312 | >20%                    |                 2 |              0.2156  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4392 | >20%                    |                 5 |              0.08784 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4463 | 5-10%                   |                 5 |              0.08926 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | 15-20%                  |                 5 |              0.08956 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4556 | <5%                     |                 2 |              0.2278  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4585 | >20%                    |                 2 |              0.22925 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4628 | 5-10%                   |                 2 |              0.2314  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4648 | >20%                    |                 5 |              0.09296 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4664 | 5-10%                   |                 2 |              0.2332  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4698 | >20%                    |                 2 |              0.2349  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4843 | >20%                    |                 2 |              0.24215 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.494  | 10-15%                  |                 2 |              0.247   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | 5-10%                   |                 5 |              0.09986 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.502  | >20%                    |                 5 |              0.1004  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.514  | >20%                    |                 2 |              0.257   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5162 | >20%                    |                 2 |              0.2581  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5202 | 10-15%                  |                 5 |              0.10404 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5451 | >20%                    |                 5 |              0.10902 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5495 | 10-15%                  |                 5 |              0.1099  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5504 | >20%                    |                 2 |              0.2752  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5508 | >20%                    |                 2 |              0.2754  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5517 | >20%                    |                 5 |              0.11034 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5519 | >20%                    |                 5 |              0.11038 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5532 | <5%                     |                 2 |              0.2766  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5576 | >20%                    |                 2 |              0.2788  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5596 | 15-20%                  |                10 |              0.05596 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5643 | >20%                    |                 2 |              0.28215 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5714 | 15-20%                  |                 2 |              0.2857  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5747 | >20%                    |                 5 |              0.11494 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5854 | >20%                    |                 2 |              0.2927  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5854 | 5-10%                   |                 2 |              0.2927  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6002 | >20%                    |                 5 |              0.12004 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6004 | 15-20%                  |                10 |              0.06004 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.601  | 5-10%                   |                 5 |              0.1202  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.607  | 10-15%                  |                 5 |              0.1214  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.608  | >20%                    |                 2 |              0.304   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6084 | >20%                    |                 5 |              0.12168 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6085 | >20%                    |                 5 |              0.1217  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6101 | >20%                    |                 5 |              0.12202 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6323 | 10-15%                  |                 5 |              0.12646 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6338 | >20%                    |                 5 |              0.12676 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6391 | >20%                    |                 5 |              0.12782 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.643  | >20%                    |                 2 |              0.3215  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.647  | 5-10%                   |                 5 |              0.1294  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6534 | <5%                     |                 5 |              0.13068 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6623 | >20%                    |                 5 |              0.13246 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6626 | <5%                     |                10 |              0.06626 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6627 | <5%                     |                 5 |              0.13254 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6795 | >20%                    |                 5 |              0.1359  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6814 | 15-20%                  |                 2 |              0.3407  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6879 | >20%                    |                 5 |              0.13758 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6977 | >20%                    |                 2 |              0.34885 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7033 | 15-20%                  |                10 |              0.07033 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7085 | >20%                    |                10 |              0.07085 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7177 | >20%                    |                10 |              0.07177 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7178 | 15-20%                  |                 5 |              0.14356 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7194 | 10-15%                  |                 2 |              0.3597  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7219 | >20%                    |                10 |              0.07219 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7245 | 15-20%                  |                 2 |              0.36225 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7438 | <5%                     |                10 |              0.07438 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.75   | 5-10%                   |                 5 |              0.15    |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7512 | >20%                    |                10 |              0.07512 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7587 | >20%                    |                 5 |              0.15174 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7693 | 15-20%                  |                10 |              0.07693 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7784 | >20%                    |                 5 |              0.15568 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7799 | >20%                    |                 5 |              0.15598 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7808 | >20%                    |                 5 |              0.15616 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7838 | >20%                    |                10 |              0.07838 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7856 | 15-20%                  |                10 |              0.07856 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7935 | >20%                    |                 5 |              0.1587  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.797  | 15-20%                  |                10 |              0.0797  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8193 | >20%                    |                10 |              0.08193 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8239 | >20%                    |                 2 |              0.41195 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8283 | >20%                    |                10 |              0.08283 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8321 | >20%                    |                 5 |              0.16642 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8328 | >20%                    |                 5 |              0.16656 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8369 | >20%                    |                10 |              0.08369 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8647 | >20%                    |                10 |              0.08647 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8723 | 5-10%                   |                10 |              0.08723 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.88   | 5-10%                   |                10 |              0.088   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8845 | <5%                     |                10 |              0.08845 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8973 | 5-10%                   |                10 |              0.08973 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8986 | >20%                    |                 5 |              0.17972 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9147 | 5-10%                   |                 5 |              0.18294 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9168 | <5%                     |                 5 |              0.18336 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9194 | 5-10%                   |                10 |              0.09194 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9319 | 15-20%                  |                10 |              0.09319 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9324 | 5-10%                   |                10 |              0.09324 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9428 | 15-20%                  |                10 |              0.09428 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.951  | 15-20%                  |                10 |              0.0951  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9532 | >20%                    |                 2 |              0.4766  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9588 | 5-10%                   |                10 |              0.09588 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9862 | >20%                    |                10 |              0.09862 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0016 | >20%                    |                10 |              0.10016 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.01   | <5%                     |                10 |              0.101   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0198 | 15-20%                  |                10 |              0.10198 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0266 | <5%                     |                10 |              0.10266 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0353 | 5-10%                   |                10 |              0.10353 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0517 | 15-20%                  |                10 |              0.10517 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0535 | 5-10%                   |                10 |              0.10535 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0713 | 15-20%                  |                10 |              0.10713 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0743 | <5%                     |                10 |              0.10743 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0977 | >20%                    |                10 |              0.10977 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0992 | >20%                    |                10 |              0.10992 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1134 | 15-20%                  |                 5 |              0.22268 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1476 | >20%                    |                10 |              0.11476 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1583 | >20%                    |                 5 |              0.23166 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1619 | <5%                     |                 2 |              0.58095 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.165  | >20%                    |                10 |              0.1165  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1798 | >20%                    |                10 |              0.11798 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1837 | >20%                    |                10 |              0.11837 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1899 | >20%                    |                 2 |              0.59495 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2218 | >20%                    |                 5 |              0.24436 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2311 | >20%                    |                10 |              0.12311 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2522 | >20%                    |                 2 |              0.6261  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2671 | >20%                    |                 5 |              0.25342 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2898 | >20%                    |                 5 |              0.25796 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3046 | 5-10%                   |                10 |              0.13046 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.399  | 5-10%                   |                 2 |              0.6995  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.425  | >20%                    |                10 |              0.1425  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4813 | 15-20%                  |                 5 |              0.29626 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4954 | >20%                    |                10 |              0.14954 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5097 | >20%                    |                10 |              0.15097 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5776 | >20%                    |                10 |              0.15776 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5857 | <5%                     |                 5 |              0.31714 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.594  | <5%                     |                10 |              0.1594  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6718 | 10-15%                  |                10 |              0.16718 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2197 | <5%                     |                10 |              0.22197 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2405 | 5-10%                   |                10 |              0.22405 |