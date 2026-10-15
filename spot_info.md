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

Data correct as of 2026-10-15 03:56:25.432159, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1006 | >20%                    |                 2 |              0.0503  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.147  | >20%                    |                 2 |              0.0735  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1598 | 15-20%                  |                 2 |              0.0799  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1819 | 15-20%                  |                 5 |              0.03638 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | >20%                    |                 2 |              0.10325 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2138 | >20%                    |                 5 |              0.04276 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2246 | 10-15%                  |                 2 |              0.1123  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2654 | >20%                    |                 2 |              0.1327  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2668 | >20%                    |                 2 |              0.1334  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | >20%                    |                 2 |              0.1346  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2724 | 5-10%                   |                10 |              0.02724 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | >20%                    |                 2 |              0.1392  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2924 | >20%                    |                 2 |              0.1462  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3071 | >20%                    |                 5 |              0.06142 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.309  | >20%                    |                 2 |              0.1545  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | 15-20%                  |                 2 |              0.1546  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.347  | >20%                    |                 5 |              0.0694  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3586 | >20%                    |                 2 |              0.1793  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3623 | 10-15%                  |                 2 |              0.18115 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3654 | >20%                    |                 5 |              0.07308 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | 15-20%                  |                 2 |              0.1874  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3762 | 15-20%                  |                 2 |              0.1881  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3792 | <5%                     |                10 |              0.03792 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3799 | >20%                    |                10 |              0.03799 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3822 | >20%                    |                 2 |              0.1911  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3854 | >20%                    |                10 |              0.03854 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3919 | <5%                     |                 2 |              0.19595 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3942 | >20%                    |                 5 |              0.07884 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | >20%                    |                 5 |              0.07938 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3988 | >20%                    |                10 |              0.03988 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4041 | >20%                    |                 5 |              0.08082 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4064 | >20%                    |                 5 |              0.08128 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4099 | >20%                    |                 5 |              0.08198 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.418  | 5-10%                   |                10 |              0.0418  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4269 | >20%                    |                 2 |              0.21345 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4385 | >20%                    |                 2 |              0.21925 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4515 | >20%                    |                 2 |              0.22575 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4731 | 10-15%                  |                 2 |              0.23655 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4731 | >20%                    |                 2 |              0.23655 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | >20%                    |                 5 |              0.09478 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4865 |                         |                 2 |              0.24325 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4869 | >20%                    |                 5 |              0.09738 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4903 | >20%                    |                 2 |              0.24515 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4943 | >20%                    |                 5 |              0.09886 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4949 | >20%                    |                 2 |              0.24745 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5047 | >20%                    |                 5 |              0.10094 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.508  |                         |                10 |              0.0508  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5085 | >20%                    |                 2 |              0.25425 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5176 | >20%                    |                 2 |              0.2588  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5319 | 5-10%                   |                10 |              0.05319 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5431 | >20%                    |                 5 |              0.10862 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5517 | 15-20%                  |                 2 |              0.27585 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5768 | 10-15%                  |                 5 |              0.11536 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5776 | <5%                     |                 2 |              0.2888  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5808 | >20%                    |                 5 |              0.11616 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5871 | >20%                    |                 2 |              0.29355 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | >20%                    |                 5 |              0.11776 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6169 | >20%                    |                 2 |              0.30845 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6229 | >20%                    |                 5 |              0.12458 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.626  | 10-15%                  |                 2 |              0.313   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6437 | >20%                    |                 5 |              0.12874 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6441 | >20%                    |                 5 |              0.12882 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6515 | >20%                    |                 5 |              0.1303  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.658  | >20%                    |                 5 |              0.1316  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6641 | >20%                    |                10 |              0.06641 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6653 | >20%                    |                 5 |              0.13306 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6691 | 5-10%                   |                 2 |              0.33455 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6692 | >20%                    |                10 |              0.06692 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6709 | >20%                    |                 5 |              0.13418 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6817 | <5%                     |                 2 |              0.34085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6817 | >20%                    |                 5 |              0.13634 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6926 | >20%                    |                 5 |              0.13852 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6934 | >20%                    |                 2 |              0.3467  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7148 | >20%                    |                10 |              0.07148 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7348 | 15-20%                  |                 5 |              0.14696 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7362 | >20%                    |                 5 |              0.14724 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7409 | >20%                    |                 5 |              0.14818 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7443 | 15-20%                  |                10 |              0.07443 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7466 | >20%                    |                 5 |              0.14932 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7527 | 15-20%                  |                 2 |              0.37635 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7666 | >20%                    |                10 |              0.07666 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7762 | >20%                    |                10 |              0.07762 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7824 | >20%                    |                 5 |              0.15648 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7832 | >20%                    |                10 |              0.07832 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7927 | >20%                    |                 5 |              0.15854 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.797  | 15-20%                  |                10 |              0.0797  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8166 | 5-10%                   |                 5 |              0.16332 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8223 | 15-20%                  |                10 |              0.08223 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8325 | 10-15%                  |                10 |              0.08325 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8352 | 5-10%                   |                10 |              0.08352 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8379 | >20%                    |                10 |              0.08379 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.8389 |                         |                 5 |              0.16778 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8436 | 15-20%                  |                 5 |              0.16872 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8498 | >20%                    |                 2 |              0.4249  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8584 | 10-15%                  |                 2 |              0.4292  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8596 | >20%                    |                10 |              0.08596 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8709 | >20%                    |                10 |              0.08709 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8722 | >20%                    |                10 |              0.08722 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.875  | >20%                    |                 5 |              0.175   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8833 | >20%                    |                10 |              0.08833 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8885 | 10-15%                  |                 2 |              0.44425 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8886 | >20%                    |                10 |              0.08886 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8987 | >20%                    |                 5 |              0.17974 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9047 | 15-20%                  |                10 |              0.09047 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9095 | >20%                    |                 5 |              0.1819  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9103 | <5%                     |                 5 |              0.18206 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9233 | >20%                    |                 2 |              0.46165 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9563 | >20%                    |                10 |              0.09563 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9819 | >20%                    |                10 |              0.09819 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9879 | >20%                    |                10 |              0.09879 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9879 | 15-20%                  |                10 |              0.09879 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9919 | >20%                    |                 5 |              0.19838 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9942 | >20%                    |                10 |              0.09942 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0257 | 15-20%                  |                10 |              0.10257 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.031  | >20%                    |                10 |              0.1031  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0503 | >20%                    |                10 |              0.10503 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1177 | 5-10%                   |                10 |              0.11177 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1235 | >20%                    |                 5 |              0.2247  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.1393 | >20%                    |                 2 |              0.56965 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1683 | 10-15%                  |                 2 |              0.58415 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1888 | >20%                    |                10 |              0.11888 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2064 | >20%                    |                10 |              0.12064 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.246  | >20%                    |                10 |              0.1246  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2994 | 10-15%                  |                10 |              0.12994 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.3035 |                         |                 2 |              0.65175 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3626 | 15-20%                  |                10 |              0.13626 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.367  | >20%                    |                10 |              0.1367  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3698 | >20%                    |                10 |              0.13698 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3783 | >20%                    |                 2 |              0.68915 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4157 | 15-20%                  |                10 |              0.14157 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4268 | 5-10%                   |                 2 |              0.7134  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4302 | >20%                    |                10 |              0.14302 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5223 | 5-10%                   |                 5 |              0.30446 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5339 |                         |                 2 |              0.76695 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5534 | >20%                    |                 5 |              0.31068 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5755 | >20%                    |                 2 |              0.78775 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6115 | >20%                    |                10 |              0.16115 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6195 |                         |                10 |              0.16195 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.6422 |                         |                 5 |              0.32844 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6846 | >20%                    |                10 |              0.16846 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7445 | >20%                    |                 5 |              0.3489  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8602 | >20%                    |                 5 |              0.37204 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8626 | 5-10%                   |                 2 |              0.9313  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8782 | >20%                    |                10 |              0.18782 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9578 |                         |                 5 |              0.39156 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0895 | 15-20%                  |                 5 |              0.4179  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2043 | 5-10%                   |                 2 |              1.10215 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2923 | 5-10%                   |                10 |              0.22923 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.58   | >20%                    |                10 |              0.258   |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.6144 |                         |                10 |              0.26144 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0877 | >20%                    |                10 |              0.30877 |