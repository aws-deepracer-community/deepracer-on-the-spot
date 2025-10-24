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

Data correct as of 2025-10-24 01:43:38.443295, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1238 | 5-10%                   |                 2 |              0.0619  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1669 | 10-15%                  |                 2 |              0.08345 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1769 | >20%                    |                 5 |              0.03538 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1951 | >20%                    |                 2 |              0.09755 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2116 | >20%                    |                 2 |              0.1058  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2366 | >20%                    |                 5 |              0.04732 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | 10-15%                  |                 2 |              0.12155 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | >20%                    |                 2 |              0.12315 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2523 | >20%                    |                 5 |              0.05046 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | >20%                    |                 2 |              0.1287  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | >20%                    |                 2 |              0.12955 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | 5-10%                   |                 2 |              0.13    |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2626 | 10-15%                  |                 2 |              0.1313  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | >20%                    |                 2 |              0.13435 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2776 | >20%                    |                 5 |              0.05552 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | 5-10%                   |                 2 |              0.14075 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2833 | >20%                    |                 2 |              0.14165 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2915 | >20%                    |                 2 |              0.14575 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2941 | 15-20%                  |                 2 |              0.14705 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3345 | >20%                    |                 2 |              0.16725 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3357 | >20%                    |                 2 |              0.16785 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3432 | >20%                    |                 2 |              0.1716  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3454 | >20%                    |                 2 |              0.1727  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3586 | 5-10%                   |                10 |              0.03586 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3591 | 15-20%                  |                 2 |              0.17955 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3635 | 10-15%                  |                 2 |              0.18175 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3684 | >20%                    |                 5 |              0.07368 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | >20%                    |                 5 |              0.0741  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.374  | 15-20%                  |                 2 |              0.187   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3866 | >20%                    |                 2 |              0.1933  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3936 | >20%                    |                 2 |              0.1968  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.395  | >20%                    |                 2 |              0.1975  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3968 | >20%                    |                 2 |              0.1984  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4019 | >20%                    |                10 |              0.04019 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4025 | <5%                     |                10 |              0.04025 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4086 | >20%                    |                 2 |              0.2043  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4102 | >20%                    |                 2 |              0.2051  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | 15-20%                  |                 2 |              0.20645 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4144 | >20%                    |                 5 |              0.08288 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | >20%                    |                 5 |              0.08436 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4241 | 5-10%                   |                 2 |              0.21205 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4266 | >20%                    |                 5 |              0.08532 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4272 | >20%                    |                 2 |              0.2136  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4293 | 5-10%                   |                 5 |              0.08586 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | <5%                     |                 2 |              0.2178  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4396 | 5-10%                   |                 2 |              0.2198  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4405 | >20%                    |                 2 |              0.22025 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4425 | >20%                    |                 5 |              0.0885  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4429 | >20%                    |                 5 |              0.08858 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4509 | >20%                    |                 2 |              0.22545 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | >20%                    |                 5 |              0.09164 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4607 | >20%                    |                 5 |              0.09214 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4672 | >20%                    |                 2 |              0.2336  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4678 | >20%                    |                 5 |              0.09356 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | 10-15%                  |                 2 |              0.2344  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | >20%                    |                 5 |              0.0947  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | >20%                    |                 2 |              0.23795 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4842 | >20%                    |                 2 |              0.2421  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4862 | >20%                    |                 2 |              0.2431  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4866 | >20%                    |                10 |              0.04866 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4881 | >20%                    |                 2 |              0.24405 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.489  | >20%                    |                 5 |              0.0978  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4952 | 15-20%                  |                 5 |              0.09904 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4978 | >20%                    |                 2 |              0.2489  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5126 | 15-20%                  |                10 |              0.05126 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5237 | >20%                    |                 5 |              0.10474 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | >20%                    |                 5 |              0.1063  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5411 | >20%                    |                 5 |              0.10822 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | 10-15%                  |                 5 |              0.10826 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.543  | 10-15%                  |                 2 |              0.2715  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5436 | >20%                    |                 5 |              0.10872 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5562 | >20%                    |                 5 |              0.11124 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5562 | 5-10%                   |                 2 |              0.2781  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5576 | 15-20%                  |                 5 |              0.11152 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5584 | >20%                    |                 2 |              0.2792  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5707 | >20%                    |                 5 |              0.11414 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5775 | >20%                    |                 5 |              0.1155  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5788 | >20%                    |                 5 |              0.11576 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5875 | >20%                    |                 5 |              0.1175  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5881 | >20%                    |                 5 |              0.11762 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5904 | 15-20%                  |                 2 |              0.2952  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5943 | >20%                    |                 5 |              0.11886 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5999 | >20%                    |                 5 |              0.11998 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6028 | >20%                    |                 2 |              0.3014  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6118 | 10-15%                  |                 5 |              0.12236 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6134 | >20%                    |                 5 |              0.12268 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6224 | >20%                    |                 5 |              0.12448 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6297 | >20%                    |                 5 |              0.12594 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6346 | >20%                    |                 2 |              0.3173  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6365 | 10-15%                  |                 5 |              0.1273  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6427 | >20%                    |                 5 |              0.12854 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6455 | 15-20%                  |                 2 |              0.32275 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6538 | >20%                    |                 5 |              0.13076 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.654  | 15-20%                  |                 5 |              0.1308  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6589 | >20%                    |                 5 |              0.13178 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6634 | >20%                    |                10 |              0.06634 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6737 | >20%                    |                 2 |              0.33685 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6739 | 15-20%                  |                10 |              0.06739 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.677  | >20%                    |                 5 |              0.1354  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6772 | >20%                    |                 5 |              0.13544 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6792 | 15-20%                  |                10 |              0.06792 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6824 | >20%                    |                10 |              0.06824 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7041 | >20%                    |                 5 |              0.14082 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7045 | <5%                     |                10 |              0.07045 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7062 | 15-20%                  |                10 |              0.07062 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7183 | >20%                    |                 5 |              0.14366 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7232 | 15-20%                  |                 5 |              0.14464 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7242 | >20%                    |                10 |              0.07242 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7304 | 15-20%                  |                10 |              0.07304 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7307 | >20%                    |                 2 |              0.36535 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.733  | 10-15%                  |                 2 |              0.3665  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7334 | >20%                    |                10 |              0.07334 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7754 | >20%                    |                10 |              0.07754 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7767 | >20%                    |                 5 |              0.15534 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | >20%                    |                10 |              0.07776 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7842 | >20%                    |                10 |              0.07842 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7921 | >20%                    |                 5 |              0.15842 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7951 | 15-20%                  |                10 |              0.07951 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7954 | >20%                    |                10 |              0.07954 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8108 | 15-20%                  |                 5 |              0.16216 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8113 | >20%                    |                10 |              0.08113 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8126 | >20%                    |                10 |              0.08126 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.822  | <5%                     |                10 |              0.0822  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.844  | >20%                    |                 5 |              0.1688  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8454 | >20%                    |                10 |              0.08454 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8519 | 5-10%                   |                10 |              0.08519 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8631 | 15-20%                  |                10 |              0.08631 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8662 | 10-15%                  |                 2 |              0.4331  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8694 | 15-20%                  |                10 |              0.08694 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8719 | 10-15%                  |                 5 |              0.17438 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8724 | 15-20%                  |                10 |              0.08724 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8745 | >20%                    |                10 |              0.08745 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8812 | <5%                     |                10 |              0.08812 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8829 | >20%                    |                 5 |              0.17658 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8906 | >20%                    |                 5 |              0.17812 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8938 | >20%                    |                 2 |              0.4469  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9063 | >20%                    |                10 |              0.09063 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9452 | >20%                    |                 2 |              0.4726  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9513 | 10-15%                  |                10 |              0.09513 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9543 | 10-15%                  |                10 |              0.09543 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9857 | 15-20%                  |                10 |              0.09857 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9908 | >20%                    |                 2 |              0.4954  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9909 | 10-15%                  |                10 |              0.09909 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0099 | 5-10%                   |                10 |              0.10099 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0151 | >20%                    |                10 |              0.10151 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0188 | >20%                    |                10 |              0.10188 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0328 | >20%                    |                 5 |              0.20656 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0718 | 15-20%                  |                10 |              0.10718 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0772 | >20%                    |                10 |              0.10772 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0942 | >20%                    |                10 |              0.10942 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0984 | 10-15%                  |                 2 |              0.5492  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1058 | >20%                    |                10 |              0.11058 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.106  | 15-20%                  |                10 |              0.1106  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1066 | >20%                    |                 5 |              0.22132 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1068 | >20%                    |                10 |              0.11068 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.122  | 5-10%                   |                10 |              0.1122  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1224 | >20%                    |                10 |              0.11224 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1284 | >20%                    |                 5 |              0.22568 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1324 | 10-15%                  |                10 |              0.11324 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1501 | 5-10%                   |                10 |              0.11501 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1847 | <5%                     |                10 |              0.11847 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1956 | >20%                    |                 5 |              0.23912 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2601 | 10-15%                  |                10 |              0.12601 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2882 | 5-10%                   |                 2 |              0.6441  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.312  | >20%                    |                10 |              0.1312  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3762 | 10-15%                  |                 5 |              0.27524 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5923 | >20%                    |                10 |              0.15923 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6165 | 10-15%                  |                 5 |              0.3233  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6884 | >20%                    |                10 |              0.16884 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.7185 | >20%                    |                10 |              0.17185 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.76   | >20%                    |                10 |              0.176   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1656 | 10-15%                  |                10 |              0.21656 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3653 | 15-20%                  |                10 |              0.23653 |