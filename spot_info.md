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

Data correct as of 2025-12-29 02:09:33.334693, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0955 | >20%                    |                 2 |              0.04775 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1412 | >20%                    |                 2 |              0.0706  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1619 | >20%                    |                 2 |              0.08095 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1641 | >20%                    |                 2 |              0.08205 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.17   | <5%                     |                 2 |              0.085   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1835 | >20%                    |                 5 |              0.0367  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | >20%                    |                 2 |              0.11515 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | >20%                    |                 2 |              0.11915 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.261  | >20%                    |                 2 |              0.1305  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2613 | <5%                     |                 2 |              0.13065 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2613 | >20%                    |                 2 |              0.13065 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2645 | 5-10%                   |                 2 |              0.13225 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2672 | >20%                    |                 2 |              0.1336  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2715 | >20%                    |                 2 |              0.13575 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | >20%                    |                 2 |              0.1385  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2777 | 5-10%                   |                10 |              0.02777 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | 15-20%                  |                 2 |              0.14105 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2858 | 5-10%                   |                 5 |              0.05716 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | >20%                    |                 2 |              0.1432  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.288  | >20%                    |                 5 |              0.0576  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2965 | >20%                    |                10 |              0.02965 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | >20%                    |                 2 |              0.1507  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3195 | >20%                    |                 2 |              0.15975 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3244 | >20%                    |                 5 |              0.06488 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3259 | >20%                    |                 2 |              0.16295 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3262 | >20%                    |                 2 |              0.1631  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3447 | >20%                    |                 5 |              0.06894 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.346  | >20%                    |                 5 |              0.0692  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3468 | 5-10%                   |                10 |              0.03468 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3475 | 15-20%                  |                 5 |              0.0695  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.355  | >20%                    |                 5 |              0.071   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3569 | >20%                    |                 5 |              0.07138 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | >20%                    |                 2 |              0.1808  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3634 | 5-10%                   |                 2 |              0.1817  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3636 | >20%                    |                 5 |              0.07272 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3646 | >20%                    |                 2 |              0.1823  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | >20%                    |                 2 |              0.1851  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3725 | >20%                    |                 2 |              0.18625 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3748 | >20%                    |                 5 |              0.07496 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3754 | >20%                    |                 2 |              0.1877  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3767 | 10-15%                  |                 2 |              0.18835 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3803 | >20%                    |                 2 |              0.19015 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3847 | <5%                     |                 5 |              0.07694 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3848 | 10-15%                  |                 2 |              0.1924  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3858 | >20%                    |                 5 |              0.07716 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3862 | >20%                    |                 2 |              0.1931  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3903 | >20%                    |                 5 |              0.07806 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3918 | >20%                    |                10 |              0.03918 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3921 | >20%                    |                10 |              0.03921 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3925 | <5%                     |                 5 |              0.0785  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.399  | >20%                    |                10 |              0.0399  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4101 | <5%                     |                10 |              0.04101 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4112 | <5%                     |                10 |              0.04112 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4117 | >20%                    |                 5 |              0.08234 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4123 | 15-20%                  |                10 |              0.04123 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4157 | >20%                    |                 2 |              0.20785 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4163 | >20%                    |                 5 |              0.08326 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4193 | >20%                    |                 5 |              0.08386 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | <5%                     |                 2 |              0.20985 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4281 | 10-15%                  |                 2 |              0.21405 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4304 | >20%                    |                 2 |              0.2152  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4309 | >20%                    |                 2 |              0.21545 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.431  | >20%                    |                 5 |              0.0862  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4348 | >20%                    |                10 |              0.04348 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4362 | >20%                    |                10 |              0.04362 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4415 | >20%                    |                 5 |              0.0883  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4493 | <5%                     |                 2 |              0.22465 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4532 | >20%                    |                 5 |              0.09064 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4679 | >20%                    |                 2 |              0.23395 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4742 | >20%                    |                 2 |              0.2371  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4839 | >20%                    |                 2 |              0.24195 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4866 | >20%                    |                 5 |              0.09732 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4921 | 15-20%                  |                 2 |              0.24605 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4946 | >20%                    |                 5 |              0.09892 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4957 | >20%                    |                 2 |              0.24785 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4971 | >20%                    |                 2 |              0.24855 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5006 | 15-20%                  |                 5 |              0.10012 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5073 | >20%                    |                 5 |              0.10146 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5095 | 15-20%                  |                 2 |              0.25475 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5114 | <5%                     |                 5 |              0.10228 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5119 | >20%                    |                 2 |              0.25595 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5183 | >20%                    |                 5 |              0.10366 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5225 | 15-20%                  |                 5 |              0.1045  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5365 | >20%                    |                 2 |              0.26825 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5395 | >20%                    |                 5 |              0.1079  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5417 | >20%                    |                 5 |              0.10834 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5472 | 15-20%                  |                 5 |              0.10944 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5508 | 10-15%                  |                 5 |              0.11016 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.554  | 15-20%                  |                10 |              0.0554  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5562 | >20%                    |                 5 |              0.11124 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5604 | >20%                    |                10 |              0.05604 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5616 | >20%                    |                 5 |              0.11232 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | 5-10%                   |                 5 |              0.11276 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5681 | >20%                    |                 2 |              0.28405 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5844 | >20%                    |                 5 |              0.11688 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5862 | 10-15%                  |                 5 |              0.11724 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5993 | >20%                    |                10 |              0.05993 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6039 | 10-15%                  |                 2 |              0.30195 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6148 | 5-10%                   |                 5 |              0.12296 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6163 | <5%                     |                 5 |              0.12326 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6179 | 15-20%                  |                 5 |              0.12358 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6306 | 10-15%                  |                 5 |              0.12612 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6406 | >20%                    |                 5 |              0.12812 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6447 | 15-20%                  |                 5 |              0.12894 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6449 | >20%                    |                 2 |              0.32245 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6507 | >20%                    |                 2 |              0.32535 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6601 | >20%                    |                10 |              0.06601 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6729 | >20%                    |                 5 |              0.13458 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6768 | 5-10%                   |                 5 |              0.13536 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6787 | 15-20%                  |                10 |              0.06787 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6909 | >20%                    |                 2 |              0.34545 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6924 | >20%                    |                 2 |              0.3462  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6979 | >20%                    |                 2 |              0.34895 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7017 | >20%                    |                 5 |              0.14034 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7116 | 15-20%                  |                10 |              0.07116 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7139 | 10-15%                  |                 5 |              0.14278 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7223 | 15-20%                  |                10 |              0.07223 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.733  | 15-20%                  |                10 |              0.0733  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7334 | >20%                    |                10 |              0.07334 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7387 | 5-10%                   |                10 |              0.07387 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7399 | >20%                    |                 5 |              0.14798 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7419 | >20%                    |                10 |              0.07419 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7428 | 15-20%                  |                 2 |              0.3714  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7518 | >20%                    |                10 |              0.07518 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7548 | >20%                    |                10 |              0.07548 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7589 | <5%                     |                10 |              0.07589 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7715 | >20%                    |                10 |              0.07715 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7732 | >20%                    |                10 |              0.07732 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7801 | >20%                    |                10 |              0.07801 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.79   | >20%                    |                10 |              0.079   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7944 | >20%                    |                 5 |              0.15888 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7968 | >20%                    |                 2 |              0.3984  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8076 | >20%                    |                 2 |              0.4038  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8088 | 15-20%                  |                10 |              0.08088 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8093 | <5%                     |                 2 |              0.40465 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8126 | >20%                    |                 5 |              0.16252 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8148 | <5%                     |                10 |              0.08148 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8157 | 15-20%                  |                 5 |              0.16314 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8237 | 15-20%                  |                10 |              0.08237 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8245 | <5%                     |                10 |              0.08245 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.837  | 15-20%                  |                10 |              0.0837  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8615 | >20%                    |                 5 |              0.1723  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8745 | >20%                    |                10 |              0.08745 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9052 | >20%                    |                10 |              0.09052 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9061 | >20%                    |                 2 |              0.45305 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9201 | >20%                    |                 2 |              0.46005 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9251 | >20%                    |                10 |              0.09251 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9275 | >20%                    |                10 |              0.09275 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9387 | >20%                    |                 5 |              0.18774 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9452 | >20%                    |                10 |              0.09452 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9537 | 10-15%                  |                 5 |              0.19074 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9543 | >20%                    |                10 |              0.09543 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9682 | >20%                    |                10 |              0.09682 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9718 | 15-20%                  |                10 |              0.09718 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9873 | 10-15%                  |                10 |              0.09873 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.991  | >20%                    |                10 |              0.0991  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0089 | 15-20%                  |                10 |              0.10089 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0215 | >20%                    |                 5 |              0.2043  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0289 | >20%                    |                 5 |              0.20578 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0331 | >20%                    |                 2 |              0.51655 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0792 | >20%                    |                 5 |              0.21584 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1151 | >20%                    |                 2 |              0.55755 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1209 | <5%                     |                10 |              0.11209 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.126  | >20%                    |                 5 |              0.2252  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.132  | >20%                    |                 5 |              0.2264  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1407 | >20%                    |                10 |              0.11407 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1447 | >20%                    |                10 |              0.11447 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2279 | 10-15%                  |                10 |              0.12279 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2438 | >20%                    |                10 |              0.12438 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2818 | >20%                    |                10 |              0.12818 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2923 | >20%                    |                10 |              0.12923 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3019 | >20%                    |                 2 |              0.65095 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4064 | >20%                    |                10 |              0.14064 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4365 | 10-15%                  |                 5 |              0.2873  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.444  | >20%                    |                 2 |              0.722   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4538 | 15-20%                  |                10 |              0.14538 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4622 | >20%                    |                 5 |              0.29244 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4687 | >20%                    |                10 |              0.14687 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.642  | >20%                    |                10 |              0.1642  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9267 | 10-15%                  |                10 |              0.19267 |