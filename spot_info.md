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

Data correct as of 2025-09-14 01:49:08.610322, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1178 | 5-10%                   |                 2 |              0.0589  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1549 | >20%                    |                 2 |              0.07745 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1684 | >20%                    |                 2 |              0.0842  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2041 | 10-15%                  |                 2 |              0.10205 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | >20%                    |                 2 |              0.11625 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2336 | 10-15%                  |                 5 |              0.04672 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2524 | >20%                    |                 2 |              0.1262  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | >20%                    |                 2 |              0.13445 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2877 | >20%                    |                 2 |              0.14385 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2894 | <5%                     |                10 |              0.02894 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | >20%                    |                 2 |              0.1477  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | 15-20%                  |                 2 |              0.14995 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3113 | >20%                    |                 2 |              0.15565 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3114 | 10-15%                  |                 2 |              0.1557  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3192 | >20%                    |                 2 |              0.1596  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3227 | 5-10%                   |                 2 |              0.16135 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3391 | >20%                    |                 5 |              0.06782 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3463 | >20%                    |                 2 |              0.17315 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.35   | 15-20%                  |                 5 |              0.07    |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3569 | 15-20%                  |                 2 |              0.17845 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3646 | 10-15%                  |                 2 |              0.1823  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3662 | >20%                    |                 2 |              0.1831  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3692 | >20%                    |                 5 |              0.07384 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3726 | >20%                    |                 2 |              0.1863  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | >20%                    |                 5 |              0.07582 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3846 | 10-15%                  |                 5 |              0.07692 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3925 | >20%                    |                 2 |              0.19625 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3938 | >20%                    |                10 |              0.03938 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | >20%                    |                 2 |              0.19715 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3995 | 15-20%                  |                10 |              0.03995 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4032 | >20%                    |                 5 |              0.08064 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4082 | >20%                    |                 2 |              0.2041  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4102 | >20%                    |                 5 |              0.08204 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4136 | >20%                    |                 5 |              0.08272 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4203 | >20%                    |                10 |              0.04203 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | >20%                    |                 5 |              0.08484 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4261 | >20%                    |                 5 |              0.08522 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4268 | 15-20%                  |                 2 |              0.2134  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.438  | >20%                    |                 2 |              0.219   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4516 | >20%                    |                 2 |              0.2258  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | 10-15%                  |                 2 |              0.22635 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4557 | 10-15%                  |                 2 |              0.22785 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4595 | 15-20%                  |                 2 |              0.22975 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4621 | >20%                    |                 2 |              0.23105 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4631 | >20%                    |                 5 |              0.09262 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4634 | >20%                    |                 5 |              0.09268 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | >20%                    |                 5 |              0.09304 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | 5-10%                   |                 2 |              0.2343  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4753 | <5%                     |                 2 |              0.23765 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | >20%                    |                 2 |              0.24025 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4863 | >20%                    |                 2 |              0.24315 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4971 | >20%                    |                 2 |              0.24855 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.498  | >20%                    |                 5 |              0.0996  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5061 | 10-15%                  |                 2 |              0.25305 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5088 | 5-10%                   |                 5 |              0.10176 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5108 | >20%                    |                 5 |              0.10216 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5122 | >20%                    |                 2 |              0.2561  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5183 | >20%                    |                 5 |              0.10366 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5183 | >20%                    |                 2 |              0.25915 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5198 | 15-20%                  |                 2 |              0.2599  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5247 | >20%                    |                10 |              0.05247 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5294 | 5-10%                   |                 2 |              0.2647  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5339 | >20%                    |                 2 |              0.26695 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5485 | >20%                    |                 5 |              0.1097  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5572 | >20%                    |                 5 |              0.11144 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5639 | >20%                    |                 5 |              0.11278 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5654 | >20%                    |                 2 |              0.2827  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5777 | >20%                    |                 2 |              0.28885 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5787 | >20%                    |                 5 |              0.11574 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5871 | 10-15%                  |                 5 |              0.11742 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5928 | >20%                    |                 5 |              0.11856 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5937 | >20%                    |                 2 |              0.29685 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5971 | >20%                    |                 5 |              0.11942 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5974 | 15-20%                  |                10 |              0.05974 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6017 | 15-20%                  |                 5 |              0.12034 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6052 | >20%                    |                 5 |              0.12104 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | 10-15%                  |                 5 |              0.12312 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6164 | 5-10%                   |                10 |              0.06164 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6367 | >20%                    |                 5 |              0.12734 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6382 | 15-20%                  |                 2 |              0.3191  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6474 | >20%                    |                 5 |              0.12948 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6522 | 15-20%                  |                 5 |              0.13044 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.664  | >20%                    |                 5 |              0.1328  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.667  | 15-20%                  |                10 |              0.0667  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6683 | >20%                    |                 2 |              0.33415 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6689 | >20%                    |                 5 |              0.13378 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6728 | 15-20%                  |                 5 |              0.13456 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6741 | 15-20%                  |                 5 |              0.13482 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6779 | >20%                    |                 2 |              0.33895 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6788 | >20%                    |                 5 |              0.13576 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6819 | 10-15%                  |                 2 |              0.34095 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.682  | >20%                    |                 5 |              0.1364  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6877 | <5%                     |                 2 |              0.34385 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7072 | >20%                    |                 5 |              0.14144 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7109 | >20%                    |                 5 |              0.14218 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7234 | >20%                    |                 5 |              0.14468 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7261 | >20%                    |                 5 |              0.14522 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7293 | >20%                    |                10 |              0.07293 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7327 | >20%                    |                 5 |              0.14654 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7405 | >20%                    |                10 |              0.07405 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7425 | >20%                    |                10 |              0.07425 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.755  | >20%                    |                10 |              0.0755  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7629 | >20%                    |                10 |              0.07629 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7697 | >20%                    |                 5 |              0.15394 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7739 | >20%                    |                10 |              0.07739 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7898 | >20%                    |                 5 |              0.15796 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7927 | 15-20%                  |                10 |              0.07927 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8064 | >20%                    |                 5 |              0.16128 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8332 | 10-15%                  |                 2 |              0.4166  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8485 | 10-15%                  |                10 |              0.08485 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8491 | 15-20%                  |                10 |              0.08491 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.855  | 10-15%                  |                10 |              0.0855  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8787 | <5%                     |                10 |              0.08787 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8956 | >20%                    |                 5 |              0.17912 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8977 | >20%                    |                10 |              0.08977 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8998 | >20%                    |                 5 |              0.17996 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9117 | 15-20%                  |                10 |              0.09117 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9128 | >20%                    |                 5 |              0.18256 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.915  | 15-20%                  |                10 |              0.0915  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9168 | >20%                    |                10 |              0.09168 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.92   | <5%                     |                10 |              0.092   |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9318 | 5-10%                   |                10 |              0.09318 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9411 | 10-15%                  |                10 |              0.09411 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9464 | <5%                     |                10 |              0.09464 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9627 | 15-20%                  |                10 |              0.09627 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.963  | >20%                    |                10 |              0.0963  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9683 | 10-15%                  |                10 |              0.09683 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9704 | >20%                    |                 2 |              0.4852  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9808 | 15-20%                  |                10 |              0.09808 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9893 | >20%                    |                10 |              0.09893 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0074 | >20%                    |                10 |              0.10074 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0343 | 15-20%                  |                10 |              0.10343 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0401 | >20%                    |                10 |              0.10401 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0584 | >20%                    |                 2 |              0.5292  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0607 | 10-15%                  |                 5 |              0.21214 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0671 | 5-10%                   |                10 |              0.10671 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0676 | 5-10%                   |                10 |              0.10676 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0817 | >20%                    |                10 |              0.10817 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0946 | <5%                     |                10 |              0.10946 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0998 | 5-10%                   |                10 |              0.10998 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1198 | 10-15%                  |                 2 |              0.5599  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1233 | 15-20%                  |                10 |              0.11233 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1303 | >20%                    |                 2 |              0.56515 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1367 | >20%                    |                10 |              0.11367 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1457 | >20%                    |                 5 |              0.22914 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1492 | >20%                    |                 5 |              0.22984 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1766 | 15-20%                  |                10 |              0.11766 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1878 | >20%                    |                10 |              0.11878 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1981 | >20%                    |                10 |              0.11981 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2417 | 5-10%                   |                 2 |              0.62085 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2599 | >20%                    |                 5 |              0.25198 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2652 | >20%                    |                10 |              0.12652 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2863 | >20%                    |                10 |              0.12863 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.34   | 10-15%                  |                10 |              0.134   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3644 | 10-15%                  |                 5 |              0.27288 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4423 | 10-15%                  |                 5 |              0.28846 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5103 | >20%                    |                10 |              0.15103 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5596 | >20%                    |                10 |              0.15596 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5929 | >20%                    |                10 |              0.15929 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7295 | >20%                    |                10 |              0.17295 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8254 | >20%                    |                10 |              0.18254 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8886 | 15-20%                  |                10 |              0.18886 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1902 | 10-15%                  |                10 |              0.21902 |