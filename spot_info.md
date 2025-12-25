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

Data correct as of 2025-12-25 02:00:46.811293, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1007 | >20%                    |                 2 |              0.05035 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1357 | >20%                    |                 2 |              0.06785 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1517 | >20%                    |                 2 |              0.07585 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1669 | >20%                    |                 2 |              0.08345 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1923 | <5%                     |                 2 |              0.09615 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1925 | >20%                    |                 5 |              0.0385  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2012 | 5-10%                   |                 2 |              0.1006  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2355 | >20%                    |                 2 |              0.11775 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | >20%                    |                 2 |              0.12745 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2618 | >20%                    |                 2 |              0.1309  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2619 | >20%                    |                 5 |              0.05238 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2629 | >20%                    |                 2 |              0.13145 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2652 | 5-10%                   |                10 |              0.02652 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2727 | >20%                    |                 2 |              0.13635 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | >20%                    |                 2 |              0.13905 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2785 | >20%                    |                 2 |              0.13925 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2876 | <5%                     |                 2 |              0.1438  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | 15-20%                  |                 2 |              0.14615 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3028 | >20%                    |                10 |              0.03028 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | >20%                    |                 2 |              0.1522  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | >20%                    |                 2 |              0.15275 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3081 | 5-10%                   |                 5 |              0.06162 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3151 | >20%                    |                 2 |              0.15755 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3225 | 15-20%                  |                 5 |              0.0645  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3282 | 5-10%                   |                10 |              0.03282 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3359 | >20%                    |                 5 |              0.06718 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3416 | >20%                    |                 2 |              0.1708  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3427 | >20%                    |                 5 |              0.06854 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3488 | <5%                     |                 5 |              0.06976 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.35   | >20%                    |                 2 |              0.175   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.354  | >20%                    |                 2 |              0.177   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3599 | >20%                    |                 5 |              0.07198 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3615 | 5-10%                   |                 2 |              0.18075 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3647 | >20%                    |                 5 |              0.07294 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3665 | <5%                     |                 5 |              0.0733  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3671 | 10-15%                  |                 2 |              0.18355 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3679 | >20%                    |                 5 |              0.07358 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3688 | >20%                    |                 5 |              0.07376 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3722 | 10-15%                  |                 2 |              0.1861  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | >20%                    |                 2 |              0.18635 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3753 | >20%                    |                 5 |              0.07506 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.379  | >20%                    |                10 |              0.0379  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3804 | 15-20%                  |                10 |              0.03804 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3865 | >20%                    |                 2 |              0.19325 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | >20%                    |                 2 |              0.19445 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3899 | <5%                     |                10 |              0.03899 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.391  | >20%                    |                 2 |              0.1955  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3935 | >20%                    |                 5 |              0.0787  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3941 | >20%                    |                 5 |              0.07882 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3946 | >20%                    |                10 |              0.03946 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3966 | >20%                    |                 2 |              0.1983  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4058 | >20%                    |                10 |              0.04058 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4121 | >20%                    |                 5 |              0.08242 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | 10-15%                  |                 2 |              0.20815 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4184 | >20%                    |                 5 |              0.08368 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4192 | <5%                     |                 2 |              0.2096  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | >20%                    |                 5 |              0.0845  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4298 | >20%                    |                 2 |              0.2149  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4326 | <5%                     |                10 |              0.04326 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4339 | >20%                    |                 2 |              0.21695 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4387 | <5%                     |                 2 |              0.21935 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4525 | >20%                    |                 2 |              0.22625 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4534 | >20%                    |                10 |              0.04534 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4627 | >20%                    |                 5 |              0.09254 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4669 | >20%                    |                 2 |              0.23345 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4745 | >20%                    |                 5 |              0.0949  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4777 | >20%                    |                 2 |              0.23885 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4794 | >20%                    |                10 |              0.04794 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4848 | >20%                    |                 5 |              0.09696 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4871 | 15-20%                  |                 5 |              0.09742 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4901 | 15-20%                  |                 5 |              0.09802 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | >20%                    |                 5 |              0.0991  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4992 | >20%                    |                 2 |              0.2496  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5015 | 15-20%                  |                 2 |              0.25075 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.506  | >20%                    |                 2 |              0.253   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5073 | >20%                    |                 2 |              0.25365 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5085 | 10-15%                  |                 5 |              0.1017  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5145 | >20%                    |                 2 |              0.25725 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5171 | 10-15%                  |                 5 |              0.10342 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5244 | 15-20%                  |                 2 |              0.2622  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5253 | 15-20%                  |                10 |              0.05253 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5293 | <5%                     |                 5 |              0.10586 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5362 | >20%                    |                 2 |              0.2681  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5363 | 5-10%                   |                 5 |              0.10726 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5401 | >20%                    |                 5 |              0.10802 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5473 | >20%                    |                10 |              0.05473 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5533 | 15-20%                  |                 5 |              0.11066 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5643 | >20%                    |                 5 |              0.11286 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5653 | >20%                    |                 5 |              0.11306 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5678 | >20%                    |                 5 |              0.11356 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5696 | >20%                    |                 5 |              0.11392 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5709 | 15-20%                  |                 5 |              0.11418 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5726 | >20%                    |                 2 |              0.2863  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5847 | >20%                    |                 2 |              0.29235 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5878 | 5-10%                   |                 5 |              0.11756 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5927 | <5%                     |                 5 |              0.11854 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5938 | >20%                    |                 5 |              0.11876 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.612  | >20%                    |                10 |              0.0612  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6168 | 15-20%                  |                 5 |              0.12336 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6242 | 10-15%                  |                 2 |              0.3121  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6273 | 10-15%                  |                 5 |              0.12546 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6298 | 5-10%                   |                 5 |              0.12596 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6299 | 15-20%                  |                10 |              0.06299 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6381 | >20%                    |                 2 |              0.31905 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6386 | 10-15%                  |                 5 |              0.12772 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6422 | >20%                    |                 2 |              0.3211  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6472 | >20%                    |                 5 |              0.12944 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6708 | >20%                    |                 2 |              0.3354  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6763 | >20%                    |                 5 |              0.13526 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6953 | >20%                    |                10 |              0.06953 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7105 | >20%                    |                 2 |              0.35525 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7154 | >20%                    |                10 |              0.07154 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7213 | >20%                    |                10 |              0.07213 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7422 | >20%                    |                 5 |              0.14844 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7495 | 15-20%                  |                 2 |              0.37475 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.752  | >20%                    |                 5 |              0.1504  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7526 | 5-10%                   |                10 |              0.07526 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7539 | >20%                    |                10 |              0.07539 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7558 | >20%                    |                10 |              0.07558 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7576 | 15-20%                  |                10 |              0.07576 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7614 | 15-20%                  |                10 |              0.07614 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7645 | >20%                    |                10 |              0.07645 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.766  | >20%                    |                10 |              0.0766  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7805 | 15-20%                  |                 5 |              0.1561  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7829 | >20%                    |                 2 |              0.39145 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7847 | <5%                     |                10 |              0.07847 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7865 | 15-20%                  |                10 |              0.07865 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7912 | >20%                    |                10 |              0.07912 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7966 | >20%                    |                 5 |              0.15932 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8043 | 15-20%                  |                10 |              0.08043 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8106 | >20%                    |                10 |              0.08106 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8134 | <5%                     |                10 |              0.08134 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8159 | 15-20%                  |                10 |              0.08159 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.819  | >20%                    |                10 |              0.0819  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8209 | 15-20%                  |                10 |              0.08209 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8225 | 15-20%                  |                10 |              0.08225 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8257 | >20%                    |                 5 |              0.16514 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8327 | >20%                    |                10 |              0.08327 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8501 | <5%                     |                 2 |              0.42505 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8526 | <5%                     |                10 |              0.08526 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8593 | >20%                    |                 5 |              0.17186 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8724 | >20%                    |                 2 |              0.4362  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8831 | >20%                    |                10 |              0.08831 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9286 | >20%                    |                 5 |              0.18572 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9382 | >20%                    |                10 |              0.09382 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9483 | >20%                    |                 5 |              0.18966 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9654 | 15-20%                  |                10 |              0.09654 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.971  | >20%                    |                 2 |              0.4855  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9733 | >20%                    |                10 |              0.09733 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9862 | >20%                    |                 5 |              0.19724 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9874 | >20%                    |                 2 |              0.4937  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0003 | >20%                    |                10 |              0.10003 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0037 | >20%                    |                 2 |              0.50185 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0057 | >20%                    |                10 |              0.10057 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.006  | 10-15%                  |                10 |              0.1006  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0163 | >20%                    |                10 |              0.10163 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0164 | 10-15%                  |                 5 |              0.20328 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0339 | >20%                    |                10 |              0.10339 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0657 | >20%                    |                 2 |              0.53285 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0974 | >20%                    |                 5 |              0.21948 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0987 | >20%                    |                 5 |              0.21974 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1335 | >20%                    |                10 |              0.11335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1463 | 10-15%                  |                10 |              0.11463 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1703 | >20%                    |                10 |              0.11703 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1709 | <5%                     |                10 |              0.11709 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1941 | >20%                    |                10 |              0.11941 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2143 | >20%                    |                10 |              0.12143 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3097 | >20%                    |                10 |              0.13097 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3515 | >20%                    |                 5 |              0.2703  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3811 | >20%                    |                 2 |              0.69055 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4136 | 10-15%                  |                 5 |              0.28272 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4531 | >20%                    |                 2 |              0.72655 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4533 | >20%                    |                10 |              0.14533 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4912 | >20%                    |                 5 |              0.29824 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.576  | >20%                    |                10 |              0.1576  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6661 | 15-20%                  |                10 |              0.16661 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0213 | 10-15%                  |                10 |              0.20213 |