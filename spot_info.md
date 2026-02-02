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

Data correct as of 2026-02-02 02:38:51.114815, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1379 | >20%                    |                 2 |              0.06895 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1703 | 5-10%                   |                 2 |              0.08515 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1831 | >20%                    |                 5 |              0.03662 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1868 | >20%                    |                 2 |              0.0934  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2    | >20%                    |                 2 |              0.1     |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2067 | >20%                    |                 2 |              0.10335 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2121 | >20%                    |                 5 |              0.04242 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2341 | >20%                    |                 2 |              0.11705 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | 10-15%                  |                 2 |              0.1197  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2401 | >20%                    |                 2 |              0.12005 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2549 | 5-10%                   |                10 |              0.02549 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2695 | 15-20%                  |                 2 |              0.13475 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | >20%                    |                 2 |              0.1374  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2761 | >20%                    |                 5 |              0.05522 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2776 | >20%                    |                 2 |              0.1388  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2809 | <5%                     |                 5 |              0.05618 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2813 | 10-15%                  |                 2 |              0.14065 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | 10-15%                  |                 2 |              0.14325 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2985 | >20%                    |                 2 |              0.14925 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3032 | >20%                    |                 2 |              0.1516  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3093 | >20%                    |                 5 |              0.06186 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3223 | 15-20%                  |                 2 |              0.16115 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3242 | >20%                    |                 5 |              0.06484 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3465 | <5%                     |                 2 |              0.17325 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3467 | 15-20%                  |                 2 |              0.17335 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3536 | >20%                    |                 5 |              0.07072 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3576 | 5-10%                   |                 5 |              0.07152 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3608 | 5-10%                   |                10 |              0.03608 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3649 | 15-20%                  |                 2 |              0.18245 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3692 | >20%                    |                 2 |              0.1846  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3787 | >20%                    |                 5 |              0.07574 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | >20%                    |                 2 |              0.1898  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | >20%                    |                 2 |              0.1901  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3807 | >20%                    |                 2 |              0.19035 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | <5%                     |                 5 |              0.07642 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3857 | 5-10%                   |                 2 |              0.19285 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3866 | 5-10%                   |                 2 |              0.1933  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.389  | >20%                    |                 5 |              0.0778  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3908 | 15-20%                  |                 2 |              0.1954  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3917 | <5%                     |                10 |              0.03917 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.397  | >20%                    |                 2 |              0.1985  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4039 | 10-15%                  |                 5 |              0.08078 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.407  | 15-20%                  |                 2 |              0.2035  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4083 | >20%                    |                 2 |              0.20415 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4088 | >20%                    |                 5 |              0.08176 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4112 | 5-10%                   |                 2 |              0.2056  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4138 | >20%                    |                 5 |              0.08276 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4144 | >20%                    |                 2 |              0.2072  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4194 | <5%                     |                 2 |              0.2097  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.421  | >20%                    |                 5 |              0.0842  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4242 | >20%                    |                 5 |              0.08484 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4244 | 5-10%                   |                 2 |              0.2122  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | >20%                    |                 5 |              0.08508 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4261 | >20%                    |                 2 |              0.21305 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4286 | >20%                    |                 5 |              0.08572 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4299 | 5-10%                   |                 2 |              0.21495 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4328 | >20%                    |                10 |              0.04328 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4362 | >20%                    |                10 |              0.04362 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4377 | 5-10%                   |                 5 |              0.08754 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | 15-20%                  |                 5 |              0.08814 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4431 | <5%                     |                 2 |              0.22155 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.447  | 15-20%                  |                10 |              0.0447  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4498 | <5%                     |                10 |              0.04498 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4508 | >20%                    |                 5 |              0.09016 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4585 | 5-10%                   |                 5 |              0.0917  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4616 | >20%                    |                 2 |              0.2308  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4617 | >20%                    |                10 |              0.04617 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4629 | <5%                     |                 2 |              0.23145 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4633 | >20%                    |                 2 |              0.23165 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4647 | >20%                    |                10 |              0.04647 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4679 | 5-10%                   |                 2 |              0.23395 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4739 | >20%                    |                10 |              0.04739 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4764 | 15-20%                  |                 5 |              0.09528 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4774 | <5%                     |                 5 |              0.09548 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4844 | >20%                    |                 2 |              0.2422  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4872 | >20%                    |                 2 |              0.2436  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | 15-20%                  |                 5 |              0.09846 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5038 | >20%                    |                 5 |              0.10076 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5061 | >20%                    |                10 |              0.05061 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5152 | >20%                    |                 2 |              0.2576  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5164 | >20%                    |                10 |              0.05164 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5198 | >20%                    |                 5 |              0.10396 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5209 | <5%                     |                 5 |              0.10418 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5243 | >20%                    |                 5 |              0.10486 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5285 | >20%                    |                 5 |              0.1057  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5299 | >20%                    |                 2 |              0.26495 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5304 | <5%                     |                 5 |              0.10608 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5325 | >20%                    |                 5 |              0.1065  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5387 | >20%                    |                 5 |              0.10774 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5606 | <5%                     |                 5 |              0.11212 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.572  | >20%                    |                 5 |              0.1144  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.581  | >20%                    |                 5 |              0.1162  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5812 | <5%                     |                 2 |              0.2906  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5851 | >20%                    |                 2 |              0.29255 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5958 | 15-20%                  |                 5 |              0.11916 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5988 | 5-10%                   |                 5 |              0.11976 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6066 | 5-10%                   |                 2 |              0.3033  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6068 | 15-20%                  |                10 |              0.06068 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6143 | >20%                    |                10 |              0.06143 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6167 | 10-15%                  |                10 |              0.06167 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6284 | >20%                    |                 5 |              0.12568 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6309 | <5%                     |                 5 |              0.12618 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6334 | >20%                    |                 5 |              0.12668 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6338 | 10-15%                  |                 5 |              0.12676 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6582 | <5%                     |                10 |              0.06582 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6606 | 5-10%                   |                 5 |              0.13212 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6656 | >20%                    |                 5 |              0.13312 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6672 | <5%                     |                10 |              0.06672 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6685 | 15-20%                  |                10 |              0.06685 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6754 | 5-10%                   |                 5 |              0.13508 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6807 | <5%                     |                 5 |              0.13614 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6808 | 15-20%                  |                 2 |              0.3404  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6862 | >20%                    |                 5 |              0.13724 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | 10-15%                  |                10 |              0.06987 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7181 | >20%                    |                10 |              0.07181 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7239 | >20%                    |                10 |              0.07239 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7244 | >20%                    |                 5 |              0.14488 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7265 | >20%                    |                10 |              0.07265 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7267 | 5-10%                   |                 2 |              0.36335 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | >20%                    |                10 |              0.0736  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7542 | >20%                    |                10 |              0.07542 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7557 | >20%                    |                10 |              0.07557 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7614 | >20%                    |                 5 |              0.15228 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7675 | 5-10%                   |                10 |              0.07675 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.769  | <5%                     |                10 |              0.0769  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7729 | >20%                    |                 5 |              0.15458 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7828 | 5-10%                   |                10 |              0.07828 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7893 | >20%                    |                 5 |              0.15786 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7919 | >20%                    |                 2 |              0.39595 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7936 | >20%                    |                 5 |              0.15872 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7937 | <5%                     |                10 |              0.07937 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.797  | >20%                    |                 2 |              0.3985  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8023 | <5%                     |                10 |              0.08023 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8029 | >20%                    |                10 |              0.08029 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8119 | <5%                     |                10 |              0.08119 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8134 | 10-15%                  |                 2 |              0.4067  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8224 | >20%                    |                 5 |              0.16448 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8374 | >20%                    |                 2 |              0.4187  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8436 | >20%                    |                10 |              0.08436 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8439 | 15-20%                  |                10 |              0.08439 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8469 | >20%                    |                 2 |              0.42345 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8639 | >20%                    |                 2 |              0.43195 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8822 | >20%                    |                 5 |              0.17644 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8861 | >20%                    |                10 |              0.08861 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8934 | >20%                    |                10 |              0.08934 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9099 | >20%                    |                10 |              0.09099 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9111 | <5%                     |                10 |              0.09111 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9141 | >20%                    |                 2 |              0.45705 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9144 | <5%                     |                10 |              0.09144 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9399 | >20%                    |                10 |              0.09399 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9416 | >20%                    |                 5 |              0.18832 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9537 | 5-10%                   |                 5 |              0.19074 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9618 | >20%                    |                10 |              0.09618 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9768 | >20%                    |                 5 |              0.19536 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9805 | >20%                    |                10 |              0.09805 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0101 | >20%                    |                10 |              0.10101 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0422 | 15-20%                  |                10 |              0.10422 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0502 | >20%                    |                10 |              0.10502 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0555 | 5-10%                   |                10 |              0.10555 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0678 | 15-20%                  |                10 |              0.10678 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0903 | >20%                    |                10 |              0.10903 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1051 | >20%                    |                10 |              0.11051 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1365 | >20%                    |                10 |              0.11365 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1735 | 10-15%                  |                 5 |              0.2347  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1812 | >20%                    |                10 |              0.11812 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1857 | >20%                    |                 2 |              0.59285 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2061 | >20%                    |                10 |              0.12061 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2672 | >20%                    |                 5 |              0.25344 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2744 | 10-15%                  |                10 |              0.12744 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2968 | <5%                     |                10 |              0.12968 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4032 | 10-15%                  |                 5 |              0.28064 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4344 | >20%                    |                 2 |              0.7172  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4461 | >20%                    |                10 |              0.14461 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8022 | 15-20%                  |                10 |              0.18022 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8755 | 10-15%                  |                10 |              0.18755 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.445  | <5%                     |                 5 |              0.489   |