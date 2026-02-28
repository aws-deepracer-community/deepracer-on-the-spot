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

Data correct as of 2026-02-28 02:20:10.770793, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1592 | >20%                    |                 2 |              0.0796  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1843 | >20%                    |                 2 |              0.09215 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.189  | >20%                    |                 2 |              0.0945  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2339 | <5%                     |                 2 |              0.11695 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | >20%                    |                 2 |              0.1242  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2555 | 15-20%                  |                 2 |              0.12775 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2573 | >20%                    |                 2 |              0.12865 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2575 | 10-15%                  |                 2 |              0.12875 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | 10-15%                  |                 2 |              0.1306  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | >20%                    |                 2 |              0.1307  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.27   | 5-10%                   |                10 |              0.027   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.273  | >20%                    |                 5 |              0.0546  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2752 | >20%                    |                 2 |              0.1376  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3038 | <5%                     |                 5 |              0.06076 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3075 | 5-10%                   |                 2 |              0.15375 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | >20%                    |                 2 |              0.15415 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | >20%                    |                 2 |              0.15415 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | >20%                    |                 2 |              0.1552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | 5-10%                   |                 2 |              0.1562  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.317  | >20%                    |                 5 |              0.0634  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3255 | >20%                    |                 5 |              0.0651  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3358 | >20%                    |                 2 |              0.1679  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3393 | 5-10%                   |                10 |              0.03393 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3399 | <5%                     |                 5 |              0.06798 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3466 | >20%                    |                 5 |              0.06932 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3523 | >20%                    |                 5 |              0.07046 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.353  | 10-15%                  |                 2 |              0.1765  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3593 | <5%                     |                10 |              0.03593 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3644 | 15-20%                  |                 2 |              0.1822  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | 5-10%                   |                 2 |              0.18645 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3737 | >20%                    |                 5 |              0.07474 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3781 | 5-10%                   |                 5 |              0.07562 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3792 | >20%                    |                 2 |              0.1896  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3824 | >20%                    |                 5 |              0.07648 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3854 | 15-20%                  |                 2 |              0.1927  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3883 | >20%                    |                 5 |              0.07766 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.392  | >20%                    |                 5 |              0.0784  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3935 | >20%                    |                 2 |              0.19675 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3985 | 15-20%                  |                 2 |              0.19925 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3998 | >20%                    |                 2 |              0.1999  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4029 | >20%                    |                 5 |              0.08058 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.403  | >20%                    |                10 |              0.0403  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4051 | >20%                    |                 2 |              0.20255 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4073 | >20%                    |                10 |              0.04073 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4087 | <5%                     |                 2 |              0.20435 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4108 | 5-10%                   |                 2 |              0.2054  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4121 | 10-15%                  |                 5 |              0.08242 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4231 | 15-20%                  |                 2 |              0.21155 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4233 | <5%                     |                10 |              0.04233 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4289 | >20%                    |                 2 |              0.21445 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4299 | >20%                    |                 2 |              0.21495 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.432  | <5%                     |                 2 |              0.216   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4343 | <5%                     |                 5 |              0.08686 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4349 | 15-20%                  |                 5 |              0.08698 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4412 | >20%                    |                10 |              0.04412 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4414 | >20%                    |                 2 |              0.2207  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4418 | <5%                     |                 2 |              0.2209  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4426 | >20%                    |                10 |              0.04426 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4434 | 5-10%                   |                 2 |              0.2217  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4441 | 5-10%                   |                 2 |              0.22205 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4455 | 5-10%                   |                 5 |              0.0891  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4462 | 5-10%                   |                 2 |              0.2231  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.448  | >20%                    |                 5 |              0.0896  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4511 | >20%                    |                 2 |              0.22555 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4543 | >20%                    |                 2 |              0.22715 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4588 | >20%                    |                 5 |              0.09176 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4623 | >20%                    |                10 |              0.04623 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4636 | 5-10%                   |                 5 |              0.09272 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4728 | >20%                    |                 5 |              0.09456 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4734 | 15-20%                  |                 2 |              0.2367  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4769 | 15-20%                  |                 5 |              0.09538 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4795 | >20%                    |                 5 |              0.0959  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4807 | >20%                    |                 2 |              0.24035 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4822 | 15-20%                  |                10 |              0.04822 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5023 | <5%                     |                 5 |              0.10046 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5208 | >20%                    |                 2 |              0.2604  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5214 | >20%                    |                 2 |              0.2607  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5251 | >20%                    |                 5 |              0.10502 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5262 | >20%                    |                 5 |              0.10524 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5269 | <5%                     |                 5 |              0.10538 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5284 | >20%                    |                 2 |              0.2642  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5374 | 15-20%                  |                10 |              0.05374 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5386 | >20%                    |                 5 |              0.10772 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5394 | >20%                    |                 5 |              0.10788 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5416 | >20%                    |                 5 |              0.10832 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5429 | 15-20%                  |                 5 |              0.10858 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5431 | 15-20%                  |                 5 |              0.10862 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5442 | >20%                    |                 5 |              0.10884 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5485 | 15-20%                  |                10 |              0.05485 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5525 | <5%                     |                 5 |              0.1105  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5569 | <5%                     |                10 |              0.05569 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.575  | >20%                    |                10 |              0.0575  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5778 | >20%                    |                10 |              0.05778 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5963 | 5-10%                   |                 2 |              0.29815 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5983 | >20%                    |                10 |              0.05983 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6037 | >20%                    |                10 |              0.06037 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6062 | >20%                    |                 2 |              0.3031  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6089 |                         |                 2 |              0.30445 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6139 | >20%                    |                 5 |              0.12278 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6142 | 15-20%                  |                 2 |              0.3071  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6142 | >20%                    |                 5 |              0.12284 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6301 | >20%                    |                 5 |              0.12602 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6348 | >20%                    |                 5 |              0.12696 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6412 | <5%                     |                10 |              0.06412 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6416 | 5-10%                   |                 2 |              0.3208  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.643  | >20%                    |                 2 |              0.3215  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.647  | >20%                    |                10 |              0.0647  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6511 | 10-15%                  |                 5 |              0.13022 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6551 | >20%                    |                10 |              0.06551 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6611 | 5-10%                   |                 5 |              0.13222 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6617 | 5-10%                   |                 5 |              0.13234 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6649 | 15-20%                  |                10 |              0.06649 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6664 | >20%                    |                 2 |              0.3332  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6811 | 5-10%                   |                 5 |              0.13622 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6827 | >20%                    |                 5 |              0.13654 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6932 | <5%                     |                10 |              0.06932 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6978 | 10-15%                  |                10 |              0.06978 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7016 | >20%                    |                 5 |              0.14032 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.703  | <5%                     |                10 |              0.0703  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7078 | 10-15%                  |                10 |              0.07078 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7095 | >20%                    |                10 |              0.07095 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7143 | >20%                    |                 5 |              0.14286 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7294 | >20%                    |                10 |              0.07294 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7454 | >20%                    |                10 |              0.07454 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7688 | >20%                    |                 5 |              0.15376 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7747 |                         |                 5 |              0.15494 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7841 | >20%                    |                 2 |              0.39205 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7891 | >20%                    |                10 |              0.07891 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.794  | 15-20%                  |                10 |              0.0794  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8094 | >20%                    |                10 |              0.08094 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8199 | <5%                     |                10 |              0.08199 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8256 | <5%                     |                10 |              0.08256 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8324 | <5%                     |                 5 |              0.16648 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.833  | >20%                    |                 2 |              0.4165  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8401 | <5%                     |                 5 |              0.16802 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8522 | >20%                    |                 5 |              0.17044 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.854  | >20%                    |                 5 |              0.1708  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.856  | >20%                    |                 5 |              0.1712  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8646 | >20%                    |                10 |              0.08646 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8688 | >20%                    |                10 |              0.08688 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8723 | 5-10%                   |                10 |              0.08723 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8792 | >20%                    |                 5 |              0.17584 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8795 | >20%                    |                 2 |              0.43975 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8936 | 10-15%                  |                 2 |              0.4468  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.914  | 5-10%                   |                10 |              0.0914  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9171 | >20%                    |                 5 |              0.18342 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9189 | >20%                    |                10 |              0.09189 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9376 | <5%                     |                10 |              0.09376 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9406 | 10-15%                  |                10 |              0.09406 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9489 | <5%                     |                10 |              0.09489 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9558 | >20%                    |                 2 |              0.4779  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9711 | >20%                    |                10 |              0.09711 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9712 | >20%                    |                10 |              0.09712 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0153 | >20%                    |                10 |              0.10153 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0324 | 5-10%                   |                 5 |              0.20648 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0378 | >20%                    |                10 |              0.10378 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0594 | 5-10%                   |                10 |              0.10594 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0637 | >20%                    |                10 |              0.10637 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0727 | >20%                    |                10 |              0.10727 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0758 | >20%                    |                 5 |              0.21516 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0911 | 10-15%                  |                 5 |              0.21822 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.0943 | <5%                     |                 2 |              0.54715 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0967 | 15-20%                  |                10 |              0.10967 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1022 | >20%                    |                10 |              0.11022 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1128 | >20%                    |                 2 |              0.5564  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1314 | 15-20%                  |                10 |              0.11314 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1816 |                         |                10 |              0.11816 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2354 | <5%                     |                10 |              0.12354 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2665 | >20%                    |                 2 |              0.63325 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2757 | >20%                    |                10 |              0.12757 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2907 | >20%                    |                10 |              0.12907 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4043 | >20%                    |                 5 |              0.28086 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4409 | >20%                    |                 2 |              0.72045 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4518 | 10-15%                  |                 5 |              0.29036 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.56   | 15-20%                  |                10 |              0.156   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6923 | >20%                    |                10 |              0.16923 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.696  | >20%                    |                10 |              0.1696  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3442 | 10-15%                  |                10 |              0.23442 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |