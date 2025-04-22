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

Data correct as of 2025-04-22 01:48:25.698012, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1131 | >20%                    |                 2 |              0.05655 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1142 | 15-20%                  |                 2 |              0.0571  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1302 | 15-20%                  |                 5 |              0.02604 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.163  | >20%                    |                 2 |              0.0815  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1899 | <5%                     |                 2 |              0.09495 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1935 | 5-10%                   |                 2 |              0.09675 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1965 | >20%                    |                 5 |              0.0393  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2274 | 5-10%                   |                 5 |              0.04548 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | 15-20%                  |                 2 |              0.1153  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | 5-10%                   |                 2 |              0.12095 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2572 | >20%                    |                 2 |              0.1286  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2695 | 5-10%                   |                 2 |              0.13475 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | >20%                    |                 2 |              0.1396  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | <5%                     |                 2 |              0.1422  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | 15-20%                  |                 2 |              0.1426  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2858 | <5%                     |                 2 |              0.1429  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | 5-10%                   |                 2 |              0.14425 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | 15-20%                  |                 2 |              0.14545 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2941 | >20%                    |                 5 |              0.05882 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2953 | 15-20%                  |                10 |              0.02953 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | 5-10%                   |                 2 |              0.1495  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3019 | 10-15%                  |                10 |              0.03019 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | >20%                    |                 2 |              0.15315 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3103 | <5%                     |                 2 |              0.15515 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3203 | >20%                    |                 2 |              0.16015 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3267 | 15-20%                  |                 2 |              0.16335 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3271 | >20%                    |                10 |              0.03271 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3318 | <5%                     |                 5 |              0.06636 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3323 | >20%                    |                10 |              0.03323 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3326 | >20%                    |                 5 |              0.06652 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3339 | >20%                    |                 2 |              0.16695 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3415 | >20%                    |                 2 |              0.17075 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3489 | >20%                    |                 2 |              0.17445 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.351  | 15-20%                  |                10 |              0.0351  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3562 | >20%                    |                 2 |              0.1781  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3575 | 5-10%                   |                 5 |              0.0715  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3613 | >20%                    |                 2 |              0.18065 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3637 | 5-10%                   |                 2 |              0.18185 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3649 | >20%                    |                 5 |              0.07298 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3706 | 10-15%                  |                 2 |              0.1853  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3758 | >20%                    |                 5 |              0.07516 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.376  | >20%                    |                10 |              0.0376  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3782 | 5-10%                   |                 2 |              0.1891  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3791 | >20%                    |                 2 |              0.18955 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3803 | 10-15%                  |                10 |              0.03803 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3829 | >20%                    |                10 |              0.03829 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3941 | <5%                     |                 2 |              0.19705 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.398  | <5%                     |                 5 |              0.0796  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4075 | >20%                    |                 2 |              0.20375 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | 10-15%                  |                 2 |              0.2067  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4146 | >20%                    |                 5 |              0.08292 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.415  | 5-10%                   |                 5 |              0.083   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4207 | >20%                    |                 2 |              0.21035 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4228 | >20%                    |                 5 |              0.08456 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4231 | 15-20%                  |                 2 |              0.21155 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4355 | >20%                    |                 5 |              0.0871  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4447 | 15-20%                  |                 2 |              0.22235 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4517 | >20%                    |                 5 |              0.09034 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4524 | 5-10%                   |                 5 |              0.09048 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | <5%                     |                 5 |              0.09054 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4546 | >20%                    |                10 |              0.04546 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4561 | 10-15%                  |                10 |              0.04561 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4588 | 5-10%                   |                 5 |              0.09176 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4604 | >20%                    |                 2 |              0.2302  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4626 | >20%                    |                 2 |              0.2313  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | >20%                    |                 5 |              0.09298 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.467  | >20%                    |                 5 |              0.0934  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | 10-15%                  |                 5 |              0.09378 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4711 | 15-20%                  |                 5 |              0.09422 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | 5-10%                   |                 5 |              0.09552 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | <5%                     |                 5 |              0.09596 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4896 | >20%                    |                 2 |              0.2448  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5029 | >20%                    |                 2 |              0.25145 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5112 | <5%                     |                 2 |              0.2556  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5131 | >20%                    |                 5 |              0.10262 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5153 | 10-15%                  |                 2 |              0.25765 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5178 | 15-20%                  |                10 |              0.05178 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5193 | >20%                    |                 5 |              0.10386 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5222 | 15-20%                  |                 5 |              0.10444 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5331 | 15-20%                  |                 5 |              0.10662 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5383 | >20%                    |                 2 |              0.26915 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5415 | >20%                    |                10 |              0.05415 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5455 | 5-10%                   |                 5 |              0.1091  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5483 | >20%                    |                 5 |              0.10966 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5496 | >20%                    |                 5 |              0.10992 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5515 | >20%                    |                 2 |              0.27575 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5525 | 10-15%                  |                 2 |              0.27625 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5581 | >20%                    |                 5 |              0.11162 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5597 | >20%                    |                 2 |              0.27985 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5687 | >20%                    |                 5 |              0.11374 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5694 | >20%                    |                 2 |              0.2847  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | >20%                    |                 5 |              0.11422 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5795 | 10-15%                  |                 5 |              0.1159  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5809 | >20%                    |                 2 |              0.29045 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5814 | >20%                    |                 2 |              0.2907  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6047 | <5%                     |                 5 |              0.12094 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6169 | >20%                    |                 2 |              0.30845 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6175 | 15-20%                  |                10 |              0.06175 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6185 | 10-15%                  |                 5 |              0.1237  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6317 | >20%                    |                 5 |              0.12634 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6432 | >20%                    |                 2 |              0.3216  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6611 | >20%                    |                 2 |              0.33055 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6639 | 10-15%                  |                10 |              0.06639 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | <5%                     |                 5 |              0.13346 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6739 | 5-10%                   |                10 |              0.06739 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6748 | 15-20%                  |                 5 |              0.13496 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.675  | >20%                    |                 5 |              0.135   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.675  | >20%                    |                 5 |              0.135   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6759 | <5%                     |                10 |              0.06759 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6765 | 15-20%                  |                10 |              0.06765 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6838 | >20%                    |                 5 |              0.13676 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6948 | >20%                    |                 2 |              0.3474  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6977 | >20%                    |                10 |              0.06977 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7019 | >20%                    |                 5 |              0.14038 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7028 | 5-10%                   |                 5 |              0.14056 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7069 | 5-10%                   |                10 |              0.07069 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | >20%                    |                10 |              0.07112 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7143 | >20%                    |                 2 |              0.35715 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7148 | >20%                    |                 5 |              0.14296 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7175 | >20%                    |                 2 |              0.35875 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.724  | 5-10%                   |                10 |              0.0724  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7284 | >20%                    |                 5 |              0.14568 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7448 | <5%                     |                 5 |              0.14896 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7523 | 15-20%                  |                10 |              0.07523 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7577 | >20%                    |                 5 |              0.15154 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7714 | 15-20%                  |                 5 |              0.15428 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7717 | >20%                    |                10 |              0.07717 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7808 | 15-20%                  |                10 |              0.07808 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7832 | 10-15%                  |                10 |              0.07832 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7899 | >20%                    |                10 |              0.07899 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7921 | >20%                    |                10 |              0.07921 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8014 | <5%                     |                10 |              0.08014 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8182 | 5-10%                   |                10 |              0.08182 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8271 | 5-10%                   |                10 |              0.08271 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.834  | 10-15%                  |                10 |              0.0834  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8394 | 10-15%                  |                10 |              0.08394 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8408 | >20%                    |                10 |              0.08408 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8445 | >20%                    |                10 |              0.08445 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8479 | >20%                    |                10 |              0.08479 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8491 | 10-15%                  |                10 |              0.08491 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.873  | <5%                     |                10 |              0.0873  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8759 | <5%                     |                10 |              0.08759 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8879 | <5%                     |                 5 |              0.17758 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8929 | >20%                    |                 2 |              0.44645 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9015 | 15-20%                  |                10 |              0.09015 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9073 | >20%                    |                10 |              0.09073 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9081 | >20%                    |                 5 |              0.18162 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9179 | >20%                    |                 2 |              0.45895 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9362 | >20%                    |                 5 |              0.18724 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9485 | 15-20%                  |                 5 |              0.1897  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9621 | <5%                     |                10 |              0.09621 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9638 | >20%                    |                10 |              0.09638 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9764 | 5-10%                   |                10 |              0.09764 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9776 | >20%                    |                10 |              0.09776 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9883 | >20%                    |                10 |              0.09883 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.039  | >20%                    |                10 |              0.1039  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0563 | <5%                     |                10 |              0.10563 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0576 | >20%                    |                10 |              0.10576 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0975 | <5%                     |                10 |              0.10975 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1442 | >20%                    |                 2 |              0.5721  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1469 | >20%                    |                 5 |              0.22938 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.18   | >20%                    |                10 |              0.118   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.193  | >20%                    |                 5 |              0.2386  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1984 | 15-20%                  |                 2 |              0.5992  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2044 | >20%                    |                 5 |              0.24088 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2241 | 15-20%                  |                10 |              0.12241 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.248  | <5%                     |                 5 |              0.2496  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2807 | 10-15%                  |                 2 |              0.64035 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.292  | >20%                    |                 5 |              0.2584  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.306  | >20%                    |                10 |              0.1306  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3491 | 10-15%                  |                10 |              0.13491 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3979 | 15-20%                  |                10 |              0.13979 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4447 | >20%                    |                 2 |              0.72235 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6215 | >20%                    |                10 |              0.16215 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6909 | >20%                    |                10 |              0.16909 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8659 | 5-10%                   |                10 |              0.18659 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8805 | >20%                    |                10 |              0.18805 |