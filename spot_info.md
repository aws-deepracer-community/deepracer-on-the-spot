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

Data correct as of 2025-08-30 01:41:31.339959, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.098  | 5-10%                   |                 2 |              0.049   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.113  | >20%                    |                 2 |              0.0565  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.12   | >20%                    |                 2 |              0.06    |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1641 | >20%                    |                 2 |              0.08205 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1825 | >20%                    |                 2 |              0.09125 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1836 | >20%                    |                 5 |              0.03672 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1911 | >20%                    |                 5 |              0.03822 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1924 | 10-15%                  |                 5 |              0.03848 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2026 | 15-20%                  |                 5 |              0.04052 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2029 | 10-15%                  |                 2 |              0.10145 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2057 | >20%                    |                 2 |              0.10285 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2358 | >20%                    |                 2 |              0.1179  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2588 | >20%                    |                10 |              0.02588 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2741 | >20%                    |                 2 |              0.13705 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | >20%                    |                 2 |              0.1395  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | >20%                    |                 2 |              0.1451  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | 15-20%                  |                 2 |              0.14595 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3185 | 5-10%                   |                 2 |              0.15925 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3208 | 10-15%                  |                 2 |              0.1604  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | >20%                    |                 2 |              0.16095 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.326  | >20%                    |                 5 |              0.0652  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3281 | 5-10%                   |                 2 |              0.16405 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.333  | 10-15%                  |                 5 |              0.0666  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3358 | 15-20%                  |                10 |              0.03358 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3398 | >20%                    |                 2 |              0.1699  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3433 | >20%                    |                 2 |              0.17165 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3458 | >20%                    |                 2 |              0.1729  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3474 | >20%                    |                10 |              0.03474 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3509 | >20%                    |                 2 |              0.17545 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.353  | >20%                    |                 5 |              0.0706  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3669 | >20%                    |                 5 |              0.07338 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.368  | >20%                    |                 2 |              0.184   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3701 | >20%                    |                 2 |              0.18505 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3713 | >20%                    |                 2 |              0.18565 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3747 | >20%                    |                 2 |              0.18735 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3831 | 10-15%                  |                 2 |              0.19155 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3885 | >20%                    |                 5 |              0.0777  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3914 | 15-20%                  |                 2 |              0.1957  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.396  | 10-15%                  |                 2 |              0.198   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4008 | 15-20%                  |                 2 |              0.2004  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4028 | 15-20%                  |                 2 |              0.2014  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | >20%                    |                 5 |              0.08208 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4195 | >20%                    |                 5 |              0.0839  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.423  | >20%                    |                 5 |              0.0846  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | 10-15%                  |                 2 |              0.2132  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4383 | >20%                    |                10 |              0.04383 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4386 | 10-15%                  |                 2 |              0.2193  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4494 | 15-20%                  |                10 |              0.04494 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | >20%                    |                 5 |              0.09164 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4584 | 15-20%                  |                 2 |              0.2292  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4605 | 5-10%                   |                 2 |              0.23025 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.468  | <5%                     |                 2 |              0.234   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | >20%                    |                 5 |              0.09378 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4738 | >20%                    |                 2 |              0.2369  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.476  | 15-20%                  |                 5 |              0.0952  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4802 | >20%                    |                 2 |              0.2401  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | >20%                    |                 2 |              0.24025 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4815 | >20%                    |                 2 |              0.24075 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.484  | >20%                    |                10 |              0.0484  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4963 | >20%                    |                 2 |              0.24815 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5042 | >20%                    |                 5 |              0.10084 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5047 | 5-10%                   |                 5 |              0.10094 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5083 | >20%                    |                 5 |              0.10166 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.509  | >20%                    |                 2 |              0.2545  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5097 | >20%                    |                 2 |              0.25485 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5141 | >20%                    |                 5 |              0.10282 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5349 | >20%                    |                 2 |              0.26745 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5416 | >20%                    |                 5 |              0.10832 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5436 | >20%                    |                 5 |              0.10872 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5467 | 10-15%                  |                 2 |              0.27335 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5478 | >20%                    |                 2 |              0.2739  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5498 | >20%                    |                 2 |              0.2749  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5512 | >20%                    |                 5 |              0.11024 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5576 | >20%                    |                 2 |              0.2788  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5708 | >20%                    |                 2 |              0.2854  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5734 | >20%                    |                 5 |              0.11468 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5774 | >20%                    |                 5 |              0.11548 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5784 | >20%                    |                 5 |              0.11568 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5814 | >20%                    |                 5 |              0.11628 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5816 | 5-10%                   |                 2 |              0.2908  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5867 | 15-20%                  |                 5 |              0.11734 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6007 | >20%                    |                 5 |              0.12014 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.603  | <5%                     |                 2 |              0.3015  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6144 | 10-15%                  |                 5 |              0.12288 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6146 | >20%                    |                 5 |              0.12292 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6155 | >20%                    |                 2 |              0.30775 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6198 | 10-15%                  |                 5 |              0.12396 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6226 | >20%                    |                 5 |              0.12452 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6369 | >20%                    |                 2 |              0.31845 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6409 | 15-20%                  |                 5 |              0.12818 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6431 | >20%                    |                 5 |              0.12862 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6631 | 10-15%                  |                10 |              0.06631 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6641 | >20%                    |                 5 |              0.13282 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.667  | 5-10%                   |                10 |              0.0667  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6693 | >20%                    |                 5 |              0.13386 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6705 | 15-20%                  |                 5 |              0.1341  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6898 | >20%                    |                10 |              0.06898 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6929 | 15-20%                  |                 2 |              0.34645 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6944 | 15-20%                  |                10 |              0.06944 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7013 | >20%                    |                 5 |              0.14026 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7063 | >20%                    |                 5 |              0.14126 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7097 | >20%                    |                10 |              0.07097 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.712  | >20%                    |                 5 |              0.1424  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.739  | >20%                    |                10 |              0.0739  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.7463 | >20%                    |                10 |              0.07463 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7472 | >20%                    |                 5 |              0.14944 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7541 | >20%                    |                 5 |              0.15082 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7612 | >20%                    |                 5 |              0.15224 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7657 | >20%                    |                 5 |              0.15314 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7685 | >20%                    |                 5 |              0.1537  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7701 | >20%                    |                10 |              0.07701 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7767 | >20%                    |                10 |              0.07767 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7798 | >20%                    |                10 |              0.07798 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8022 | 10-15%                  |                10 |              0.08022 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8036 | >20%                    |                10 |              0.08036 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8137 | >20%                    |                 5 |              0.16274 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8321 | 15-20%                  |                10 |              0.08321 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8369 | 15-20%                  |                10 |              0.08369 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8495 | >20%                    |                 5 |              0.1699  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8537 | >20%                    |                 2 |              0.42685 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8677 | 10-15%                  |                10 |              0.08677 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.877  | 10-15%                  |                 2 |              0.4385  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8937 | >20%                    |                10 |              0.08937 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.895  | >20%                    |                 5 |              0.179   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9005 | <5%                     |                10 |              0.09005 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9043 | <5%                     |                10 |              0.09043 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9126 | 15-20%                  |                10 |              0.09126 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9172 | 5-10%                   |                10 |              0.09172 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9324 | 5-10%                   |                10 |              0.09324 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9393 | >20%                    |                10 |              0.09393 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9523 | 15-20%                  |                10 |              0.09523 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9539 | <5%                     |                10 |              0.09539 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9548 | 5-10%                   |                10 |              0.09548 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9872 | 10-15%                  |                10 |              0.09872 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9963 | >20%                    |                 2 |              0.49815 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0136 | 15-20%                  |                10 |              0.10136 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0225 | >20%                    |                10 |              0.10225 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0262 | >20%                    |                 2 |              0.5131  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0263 | >20%                    |                10 |              0.10263 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0294 | >20%                    |                10 |              0.10294 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0308 | >20%                    |                10 |              0.10308 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0401 | 15-20%                  |                10 |              0.10401 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0404 | 15-20%                  |                10 |              0.10404 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0523 | <5%                     |                10 |              0.10523 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0861 | >20%                    |                10 |              0.10861 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1165 | 15-20%                  |                10 |              0.11165 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1191 | >20%                    |                 5 |              0.22382 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1208 | >20%                    |                10 |              0.11208 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1302 | 5-10%                   |                 2 |              0.5651  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1371 | >20%                    |                10 |              0.11371 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1382 | 10-15%                  |                 5 |              0.22764 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1448 | >20%                    |                 2 |              0.5724  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1451 | >20%                    |                 5 |              0.22902 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1565 | 15-20%                  |                10 |              0.11565 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2118 | >20%                    |                 5 |              0.24236 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2131 | 10-15%                  |                 2 |              0.60655 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2175 | 5-10%                   |                10 |              0.12175 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2438 | 10-15%                  |                 5 |              0.24876 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3644 | 10-15%                  |                10 |              0.13644 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3963 | >20%                    |                 5 |              0.27926 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.3997 | 15-20%                  |                10 |              0.13997 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.488  | 10-15%                  |                 5 |              0.2976  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5035 | >20%                    |                10 |              0.15035 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5214 | >20%                    |                10 |              0.15214 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5439 | >20%                    |                10 |              0.15439 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5691 | >20%                    |                10 |              0.15691 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6079 | >20%                    |                10 |              0.16079 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6177 | >20%                    |                10 |              0.16177 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.3218 | 10-15%                  |                10 |              0.23218 |