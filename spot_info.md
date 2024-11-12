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

Data correct as of 2024-11-12 01:27:43.410256, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1558 | >20%                    |                 5 |              0.03116 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1688 | 5-10%                   |                 2 |              0.0844  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1771 | 10-15%                  |                 2 |              0.08855 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2109 | 10-15%                  |                 2 |              0.10545 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2125 | >20%                    |                 2 |              0.10625 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2173 | >20%                    |                 2 |              0.10865 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2211 | 5-10%                   |                 2 |              0.11055 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2264 | 5-10%                   |                 5 |              0.04528 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | 5-10%                   |                 2 |              0.12115 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | <5%                     |                 2 |              0.12335 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2555 | 5-10%                   |                 2 |              0.12775 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2566 | <5%                     |                 5 |              0.05132 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | 5-10%                   |                 2 |              0.1325  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | 5-10%                   |                 2 |              0.13545 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | <5%                     |                 2 |              0.1391  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2807 | 5-10%                   |                 2 |              0.14035 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | <5%                     |                 2 |              0.141   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2836 | >20%                    |                 5 |              0.05672 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | 5-10%                   |                 5 |              0.06008 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3047 | >20%                    |                 2 |              0.15235 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3078 | <5%                     |                 5 |              0.06156 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.318  | <5%                     |                 5 |              0.0636  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3182 | <5%                     |                 2 |              0.1591  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3304 | 10-15%                  |                 2 |              0.1652  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3382 | 5-10%                   |                 2 |              0.1691  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3383 | 10-15%                  |                 5 |              0.06766 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3475 | 15-20%                  |                 2 |              0.17375 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3561 | <5%                     |                 2 |              0.17805 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3584 | <5%                     |                 2 |              0.1792  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3593 | >20%                    |                 2 |              0.17965 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3617 | <5%                     |                 2 |              0.18085 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3737 | 5-10%                   |                 5 |              0.07474 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.379  | 5-10%                   |                 2 |              0.1895  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | <5%                     |                 2 |              0.1901  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3851 | 5-10%                   |                 5 |              0.07702 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3857 | >20%                    |                 2 |              0.19285 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4001 | >20%                    |                 2 |              0.20005 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4062 | >20%                    |                 2 |              0.2031  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4119 | <5%                     |                 2 |              0.20595 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4271 | 5-10%                   |                 2 |              0.21355 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4277 | 10-15%                  |                 2 |              0.21385 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4291 | <5%                     |                 5 |              0.08582 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4356 | <5%                     |                 5 |              0.08712 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4373 | 5-10%                   |                 2 |              0.21865 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4389 | 10-15%                  |                 5 |              0.08778 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4394 | 10-15%                  |                 5 |              0.08788 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4453 | 10-15%                  |                 2 |              0.22265 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4517 | 5-10%                   |                 5 |              0.09034 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4604 | 15-20%                  |                 2 |              0.2302  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4634 | 15-20%                  |                 5 |              0.09268 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4636 | >20%                    |                 2 |              0.2318  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4661 | 5-10%                   |                 5 |              0.09322 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4661 | 5-10%                   |                 5 |              0.09322 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4693 | >20%                    |                 5 |              0.09386 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4754 | >20%                    |                 5 |              0.09508 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4804 | <5%                     |                 2 |              0.2402  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4838 | 5-10%                   |                 5 |              0.09676 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | <5%                     |                 2 |              0.24295 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4864 | 15-20%                  |                 5 |              0.09728 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | 10-15%                  |                 5 |              0.09926 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4983 | <5%                     |                10 |              0.04983 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5138 | >20%                    |                 5 |              0.10276 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5155 | >20%                    |                10 |              0.05155 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5203 | 5-10%                   |                 2 |              0.26015 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5215 | <5%                     |                 5 |              0.1043  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5296 | <5%                     |                 5 |              0.10592 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | <5%                     |                 5 |              0.10634 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5367 | 10-15%                  |                 2 |              0.26835 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.542  | 15-20%                  |                10 |              0.0542  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.544  | >20%                    |                 5 |              0.1088  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5464 | 5-10%                   |                 5 |              0.10928 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5465 | 5-10%                   |                 5 |              0.1093  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5508 | 15-20%                  |                 2 |              0.2754  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5567 | >20%                    |                 5 |              0.11134 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5666 | 10-15%                  |                10 |              0.05666 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5707 | >20%                    |                 5 |              0.11414 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5708 | >20%                    |                 5 |              0.11416 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5731 | 15-20%                  |                 2 |              0.28655 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5738 | 15-20%                  |                 5 |              0.11476 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.58   | 10-15%                  |                10 |              0.058   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5832 | 10-15%                  |                 5 |              0.11664 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5903 | <5%                     |                 2 |              0.29515 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5959 | <5%                     |                 5 |              0.11918 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6    | >20%                    |                10 |              0.06    |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.605  | 5-10%                   |                10 |              0.0605  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6084 | <5%                     |                10 |              0.06084 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.651  | 5-10%                   |                10 |              0.0651  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6668 | 15-20%                  |                 5 |              0.13336 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6736 | >20%                    |                 5 |              0.13472 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6766 | >20%                    |                 2 |              0.3383  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6851 | >20%                    |                10 |              0.06851 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6927 | 5-10%                   |                 5 |              0.13854 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7073 | 5-10%                   |                10 |              0.07073 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7179 | >20%                    |                10 |              0.07179 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7191 | 5-10%                   |                 5 |              0.14382 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7207 | 5-10%                   |                10 |              0.07207 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7372 | >20%                    |                10 |              0.07372 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.74   | <5%                     |                10 |              0.074   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7446 | 15-20%                  |                 5 |              0.14892 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7476 | 15-20%                  |                10 |              0.07476 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.766  | 10-15%                  |                10 |              0.0766  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7903 | 5-10%                   |                 5 |              0.15806 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8008 | 10-15%                  |                10 |              0.08008 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8012 | >20%                    |                10 |              0.08012 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8037 | <5%                     |                10 |              0.08037 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8157 | 10-15%                  |                10 |              0.08157 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8275 | >20%                    |                10 |              0.08275 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8282 | 15-20%                  |                10 |              0.08282 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8361 | 15-20%                  |                10 |              0.08361 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8427 | 5-10%                   |                10 |              0.08427 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8444 | <5%                     |                 2 |              0.4222  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8459 | <5%                     |                 5 |              0.16918 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8503 | 5-10%                   |                10 |              0.08503 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8711 | 5-10%                   |                10 |              0.08711 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8766 | >20%                    |                 5 |              0.17532 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8908 | >20%                    |                10 |              0.08908 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9559 | <5%                     |                10 |              0.09559 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.959  | <5%                     |                10 |              0.0959  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9918 | 10-15%                  |                10 |              0.09918 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.005  | <5%                     |                10 |              0.1005  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0058 | 10-15%                  |                10 |              0.10058 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0453 | >20%                    |                10 |              0.10453 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0656 | <5%                     |                10 |              0.10656 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0713 | <5%                     |                10 |              0.10713 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0754 | >20%                    |                10 |              0.10754 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.13   | 15-20%                  |                10 |              0.113   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1319 | 15-20%                  |                10 |              0.11319 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3925 | >20%                    |                10 |              0.13925 |