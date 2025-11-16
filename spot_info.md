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

Data correct as of 2025-11-16 01:58:28.928828, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1401 | 15-20%                  |                 2 |              0.07005 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1577 | >20%                    |                 2 |              0.07885 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1838 | <5%                     |                 2 |              0.0919  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.188  | 5-10%                   |                 5 |              0.0376  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1976 | >20%                    |                 2 |              0.0988  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2122 | 10-15%                  |                 2 |              0.1061  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2198 | <5%                     |                 2 |              0.1099  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | >20%                    |                 2 |              0.1209  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | >20%                    |                 2 |              0.1215  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | >20%                    |                 2 |              0.12155 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2451 | >20%                    |                 5 |              0.04902 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | >20%                    |                 2 |              0.12495 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2638 | 15-20%                  |                 2 |              0.1319  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2649 | <5%                     |                 2 |              0.13245 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2664 | >20%                    |                 5 |              0.05328 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2666 | 10-15%                  |                10 |              0.02666 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | >20%                    |                 2 |              0.13575 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2769 | >20%                    |                 2 |              0.13845 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2788 | 10-15%                  |                 5 |              0.05576 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2807 | 10-15%                  |                 2 |              0.14035 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | 5-10%                   |                 2 |              0.14175 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2861 | >20%                    |                 5 |              0.05722 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | >20%                    |                 2 |              0.1492  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3232 | >20%                    |                 5 |              0.06464 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.324  | >20%                    |                 2 |              0.162   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3385 | <5%                     |                 5 |              0.0677  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.341  | >20%                    |                 2 |              0.1705  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3465 | >20%                    |                 5 |              0.0693  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3485 | 10-15%                  |                 2 |              0.17425 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3514 | 10-15%                  |                 2 |              0.1757  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3534 | 5-10%                   |                 2 |              0.1767  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3552 | >20%                    |                 2 |              0.1776  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | >20%                    |                 2 |              0.1794  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3603 | >20%                    |                10 |              0.03603 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3604 | >20%                    |                 2 |              0.1802  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3614 | <5%                     |                 2 |              0.1807  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3675 | 15-20%                  |                 2 |              0.18375 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3693 | <5%                     |                 2 |              0.18465 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.37   | >20%                    |                10 |              0.037   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3788 | 15-20%                  |                10 |              0.03788 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3833 | 15-20%                  |                 5 |              0.07666 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3874 | 15-20%                  |                 2 |              0.1937  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3915 | <5%                     |                10 |              0.03915 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3931 | >20%                    |                10 |              0.03931 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3955 | >20%                    |                 2 |              0.19775 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3985 | >20%                    |                10 |              0.03985 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.399  | >20%                    |                 2 |              0.1995  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4032 | >20%                    |                 2 |              0.2016  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4047 | >20%                    |                 2 |              0.20235 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | 10-15%                  |                 5 |              0.08136 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4107 | >20%                    |                 5 |              0.08214 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4178 | >20%                    |                 5 |              0.08356 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4233 | >20%                    |                 2 |              0.21165 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | >20%                    |                 5 |              0.08498 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.429  | 15-20%                  |                 2 |              0.2145  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | <5%                     |                 2 |              0.21475 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4308 | >20%                    |                 5 |              0.08616 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.431  | >20%                    |                 5 |              0.0862  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4325 | 10-15%                  |                 5 |              0.0865  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4327 | >20%                    |                 5 |              0.08654 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4328 | 5-10%                   |                10 |              0.04328 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4336 | 15-20%                  |                 5 |              0.08672 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4358 | 10-15%                  |                10 |              0.04358 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4359 | >20%                    |                 5 |              0.08718 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | 5-10%                   |                 2 |              0.21815 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.439  | 15-20%                  |                 5 |              0.0878  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.44   | >20%                    |                 5 |              0.088   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4406 | 15-20%                  |                 5 |              0.08812 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4406 | 15-20%                  |                 5 |              0.08812 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4453 | >20%                    |                 2 |              0.22265 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4512 | >20%                    |                 2 |              0.2256  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4591 | >20%                    |                 2 |              0.22955 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4651 | >20%                    |                 2 |              0.23255 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4652 | 5-10%                   |                10 |              0.04652 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4675 | >20%                    |                 5 |              0.0935  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | >20%                    |                 2 |              0.2343  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4706 | 10-15%                  |                 2 |              0.2353  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4711 | <5%                     |                10 |              0.04711 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4726 | >20%                    |                 2 |              0.2363  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4753 | >20%                    |                 5 |              0.09506 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4793 | 10-15%                  |                 2 |              0.23965 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4809 | >20%                    |                 5 |              0.09618 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4903 | >20%                    |                 2 |              0.24515 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4933 | 10-15%                  |                10 |              0.04933 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4972 | >20%                    |                 5 |              0.09944 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5002 | 15-20%                  |                 5 |              0.10004 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5209 | 10-15%                  |                 2 |              0.26045 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.53   | >20%                    |                10 |              0.053   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5302 | >20%                    |                 5 |              0.10604 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5393 | >20%                    |                10 |              0.05393 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5407 | 10-15%                  |                 5 |              0.10814 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5463 | >20%                    |                 5 |              0.10926 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5534 | >20%                    |                 5 |              0.11068 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5597 | 10-15%                  |                 5 |              0.11194 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5611 | 15-20%                  |                 5 |              0.11222 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5738 | 15-20%                  |                 5 |              0.11476 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5787 | >20%                    |                 2 |              0.28935 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5866 | >20%                    |                 5 |              0.11732 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5956 | >20%                    |                 2 |              0.2978  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6047 | 10-15%                  |                 5 |              0.12094 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6071 | 10-15%                  |                 5 |              0.12142 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6112 | 10-15%                  |                10 |              0.06112 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6121 | 5-10%                   |                 5 |              0.12242 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6149 | >20%                    |                 2 |              0.30745 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6149 | 10-15%                  |                 5 |              0.12298 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6181 | >20%                    |                 2 |              0.30905 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6283 | >20%                    |                 5 |              0.12566 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6286 | >20%                    |                 5 |              0.12572 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.631  | 15-20%                  |                10 |              0.0631  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6488 | 10-15%                  |                 5 |              0.12976 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6525 | >20%                    |                10 |              0.06525 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6532 | 10-15%                  |                 2 |              0.3266  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.656  | >20%                    |                 5 |              0.1312  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6577 | >20%                    |                 2 |              0.32885 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6629 | 15-20%                  |                 5 |              0.13258 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6695 | >20%                    |                 2 |              0.33475 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6777 | >20%                    |                 5 |              0.13554 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6786 | >20%                    |                10 |              0.06786 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | 15-20%                  |                10 |              0.06795 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6855 | 5-10%                   |                 2 |              0.34275 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6941 | >20%                    |                10 |              0.06941 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6948 | 5-10%                   |                10 |              0.06948 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6954 | >20%                    |                10 |              0.06954 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7033 | >20%                    |                10 |              0.07033 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7055 | >20%                    |                10 |              0.07055 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7306 | 15-20%                  |                10 |              0.07306 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7325 | >20%                    |                 5 |              0.1465  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7358 | >20%                    |                10 |              0.07358 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7409 | >20%                    |                 5 |              0.14818 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7435 | >20%                    |                 5 |              0.1487  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7453 | >20%                    |                 5 |              0.14906 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7565 | <5%                     |                10 |              0.07565 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.758  | 15-20%                  |                 5 |              0.1516  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7618 | >20%                    |                 5 |              0.15236 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7729 | >20%                    |                10 |              0.07729 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7748 | >20%                    |                10 |              0.07748 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7756 | >20%                    |                10 |              0.07756 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.796  | >20%                    |                10 |              0.0796  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7964 | <5%                     |                10 |              0.07964 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7985 | 5-10%                   |                10 |              0.07985 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8008 | <5%                     |                10 |              0.08008 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8165 | >20%                    |                 2 |              0.40825 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8391 | >20%                    |                 5 |              0.16782 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8488 | 15-20%                  |                10 |              0.08488 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8522 | 10-15%                  |                10 |              0.08522 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8627 | >20%                    |                10 |              0.08627 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.87   | >20%                    |                10 |              0.087   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8741 | >20%                    |                10 |              0.08741 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8891 | 10-15%                  |                10 |              0.08891 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9015 | <5%                     |                 5 |              0.1803  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9024 | >20%                    |                 5 |              0.18048 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9214 | >20%                    |                10 |              0.09214 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9228 | 10-15%                  |                10 |              0.09228 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9274 | >20%                    |                 2 |              0.4637  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.935  | >20%                    |                 2 |              0.4675  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9618 | <5%                     |                10 |              0.09618 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9671 | 15-20%                  |                10 |              0.09671 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9698 | 10-15%                  |                10 |              0.09698 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9867 | >20%                    |                10 |              0.09867 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0071 | <5%                     |                 5 |              0.20142 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0125 | >20%                    |                10 |              0.10125 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0154 | >20%                    |                10 |              0.10154 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0284 | >20%                    |                10 |              0.10284 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0579 | >20%                    |                10 |              0.10579 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.069  | >20%                    |                 5 |              0.2138  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0804 | >20%                    |                 5 |              0.21608 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1108 | >20%                    |                10 |              0.11108 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1275 | 15-20%                  |                10 |              0.11275 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1461 | >20%                    |                10 |              0.11461 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2026 | >20%                    |                 2 |              0.6013  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2716 | >20%                    |                 5 |              0.25432 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.295  | 15-20%                  |                10 |              0.1295  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3312 | >20%                    |                10 |              0.13312 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3458 | 10-15%                  |                10 |              0.13458 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3612 | >20%                    |                10 |              0.13612 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4222 | >20%                    |                 2 |              0.7111  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4503 | 5-10%                   |                 5 |              0.29006 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5595 | >20%                    |                10 |              0.15595 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0754 | 15-20%                  |                10 |              0.20754 |