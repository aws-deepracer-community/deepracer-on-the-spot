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

Data correct as of 2025-04-16 01:49:12.348611, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1137 | 10-15%                  |                 2 |              0.05685 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1184 | 15-20%                  |                 2 |              0.0592  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1501 | >20%                    |                 2 |              0.07505 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.164  | 10-15%                  |                 5 |              0.0328  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1699 | >20%                    |                 2 |              0.08495 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1909 | 15-20%                  |                 5 |              0.03818 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1952 | <5%                     |                 2 |              0.0976  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2099 | 5-10%                   |                 5 |              0.04198 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | 15-20%                  |                 2 |              0.1153  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | >20%                    |                 2 |              0.1194  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2455 | 15-20%                  |                10 |              0.02455 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.256  | 10-15%                  |                 5 |              0.0512  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2605 | 5-10%                   |                 5 |              0.0521  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2712 | 10-15%                  |                10 |              0.02712 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | 15-20%                  |                 2 |              0.13945 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | 10-15%                  |                 2 |              0.13955 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | 5-10%                   |                 2 |              0.14005 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | 15-20%                  |                 2 |              0.14085 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2839 | 5-10%                   |                 2 |              0.14195 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | <5%                     |                 2 |              0.14265 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2854 | <5%                     |                 2 |              0.1427  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2887 | 10-15%                  |                 2 |              0.14435 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | <5%                     |                 2 |              0.14765 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | >20%                    |                 2 |              0.14795 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | 10-15%                  |                 2 |              0.14995 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3011 | >20%                    |                 2 |              0.15055 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3054 | 10-15%                  |                 5 |              0.06108 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3062 | 10-15%                  |                10 |              0.03062 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.309  | <5%                     |                10 |              0.0309  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3179 | 10-15%                  |                10 |              0.03179 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3298 | 10-15%                  |                 2 |              0.1649  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3422 | >20%                    |                 5 |              0.06844 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.343  | >20%                    |                 5 |              0.0686  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3435 | >20%                    |                 2 |              0.17175 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3582 | >20%                    |                 2 |              0.1791  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3585 | >20%                    |                 2 |              0.17925 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3621 | >20%                    |                10 |              0.03621 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3623 | 15-20%                  |                 2 |              0.18115 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3648 | >20%                    |                 2 |              0.1824  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3817 | 10-15%                  |                 5 |              0.07634 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3838 | >20%                    |                 2 |              0.1919  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.384  | <5%                     |                 2 |              0.192   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3841 | <5%                     |                 2 |              0.19205 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3865 | 15-20%                  |                10 |              0.03865 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3865 | >20%                    |                 2 |              0.19325 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3867 | >20%                    |                 5 |              0.07734 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | <5%                     |                 2 |              0.19455 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | >20%                    |                 2 |              0.1962  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3927 | <5%                     |                10 |              0.03927 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3947 | >20%                    |                10 |              0.03947 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4072 | 10-15%                  |                 5 |              0.08144 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4149 | 15-20%                  |                 2 |              0.20745 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4187 | 10-15%                  |                 2 |              0.20935 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4201 | 15-20%                  |                 2 |              0.21005 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.423  | >20%                    |                 5 |              0.0846  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4298 | >20%                    |                 5 |              0.08596 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4312 | 10-15%                  |                10 |              0.04312 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4322 | 10-15%                  |                 5 |              0.08644 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4363 | >20%                    |                 5 |              0.08726 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4415 | >20%                    |                 2 |              0.22075 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4442 | 5-10%                   |                 5 |              0.08884 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4449 | <5%                     |                 2 |              0.22245 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4469 | >20%                    |                10 |              0.04469 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4511 | <5%                     |                 2 |              0.22555 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4576 | >20%                    |                 5 |              0.09152 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4578 | >20%                    |                 2 |              0.2289  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4625 | >20%                    |                 5 |              0.0925  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4634 | <5%                     |                 5 |              0.09268 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4653 | >20%                    |                 2 |              0.23265 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4722 | >20%                    |                 5 |              0.09444 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | 5-10%                   |                 5 |              0.09534 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.479  | 5-10%                   |                 2 |              0.2395  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4958 | <5%                     |                 5 |              0.09916 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4994 | 5-10%                   |                10 |              0.04994 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4998 | >20%                    |                 5 |              0.09996 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5044 | >20%                    |                 2 |              0.2522  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5067 | >20%                    |                 5 |              0.10134 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5112 | >20%                    |                 2 |              0.2556  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.513  | 15-20%                  |                 5 |              0.1026  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5148 | 10-15%                  |                 5 |              0.10296 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5266 | 15-20%                  |                 2 |              0.2633  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5293 | 5-10%                   |                 5 |              0.10586 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5359 | 15-20%                  |                 2 |              0.26795 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5376 | 5-10%                   |                 5 |              0.10752 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.551  | 5-10%                   |                 5 |              0.1102  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5515 | >20%                    |                 2 |              0.27575 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5691 | 5-10%                   |                 2 |              0.28455 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5705 | >20%                    |                 5 |              0.1141  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5739 | >20%                    |                 5 |              0.11478 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5784 | 15-20%                  |                 5 |              0.11568 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5788 | >20%                    |                 5 |              0.11576 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5835 | >20%                    |                 2 |              0.29175 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.587  | >20%                    |                 2 |              0.2935  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5873 | >20%                    |                 2 |              0.29365 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5964 | <5%                     |                 5 |              0.11928 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5975 | >20%                    |                 2 |              0.29875 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6053 | 15-20%                  |                 5 |              0.12106 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6067 | 10-15%                  |                10 |              0.06067 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.61   | >20%                    |                10 |              0.061   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6206 | 10-15%                  |                 5 |              0.12412 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6349 | >20%                    |                 5 |              0.12698 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6409 | 10-15%                  |                 5 |              0.12818 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6427 | >20%                    |                 5 |              0.12854 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6504 | <5%                     |                 5 |              0.13008 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6541 | >20%                    |                10 |              0.06541 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6626 | >20%                    |                 5 |              0.13252 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6691 | 10-15%                  |                 2 |              0.33455 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6733 | >20%                    |                10 |              0.06733 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6751 | <5%                     |                 5 |              0.13502 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6759 | >20%                    |                 2 |              0.33795 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6832 | >20%                    |                10 |              0.06832 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6904 | >20%                    |                 5 |              0.13808 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6937 | >20%                    |                 5 |              0.13874 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6958 | 5-10%                   |                 5 |              0.13916 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6964 | 5-10%                   |                10 |              0.06964 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7038 | >20%                    |                 5 |              0.14076 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.704  | >20%                    |                10 |              0.0704  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7064 | <5%                     |                10 |              0.07064 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7201 | >20%                    |                 2 |              0.36005 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7381 | 10-15%                  |                10 |              0.07381 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7403 | >20%                    |                10 |              0.07403 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7518 | <5%                     |                10 |              0.07518 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7566 | <5%                     |                 5 |              0.15132 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7577 | <5%                     |                10 |              0.07577 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7589 | >20%                    |                 2 |              0.37945 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7589 | 10-15%                  |                 5 |              0.15178 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.763  | <5%                     |                10 |              0.0763  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7671 | >20%                    |                 5 |              0.15342 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.77   | 15-20%                  |                 5 |              0.154   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7727 | 5-10%                   |                10 |              0.07727 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7737 | <5%                     |                10 |              0.07737 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7802 | >20%                    |                10 |              0.07802 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7903 | >20%                    |                10 |              0.07903 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.798  | 10-15%                  |                10 |              0.0798  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | <5%                     |                10 |              0.08015 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8178 | 15-20%                  |                 5 |              0.16356 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8254 | 10-15%                  |                10 |              0.08254 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8349 | >20%                    |                 2 |              0.41745 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8422 | 15-20%                  |                10 |              0.08422 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8435 | >20%                    |                 2 |              0.42175 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8457 | 15-20%                  |                10 |              0.08457 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8582 | 15-20%                  |                10 |              0.08582 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8607 | >20%                    |                10 |              0.08607 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8646 | 10-15%                  |                10 |              0.08646 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8716 | <5%                     |                10 |              0.08716 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8849 | >20%                    |                10 |              0.08849 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8889 | <5%                     |                10 |              0.08889 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8905 | 15-20%                  |                 5 |              0.1781  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8931 | >20%                    |                10 |              0.08931 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9009 | >20%                    |                10 |              0.09009 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9041 | >20%                    |                10 |              0.09041 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9253 | <5%                     |                10 |              0.09253 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.95   | >20%                    |                 5 |              0.19    |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9653 | 5-10%                   |                10 |              0.09653 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9732 | 10-15%                  |                10 |              0.09732 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9947 | <5%                     |                 2 |              0.49735 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0177 | >20%                    |                 5 |              0.20354 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0234 | >20%                    |                10 |              0.10234 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0575 | >20%                    |                 5 |              0.2115  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1054 | <5%                     |                10 |              0.11054 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1134 | <5%                     |                10 |              0.11134 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.118  | 10-15%                  |                 2 |              0.559   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1756 | 15-20%                  |                10 |              0.11756 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2183 | 15-20%                  |                10 |              0.12183 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2328 | <5%                     |                 5 |              0.24656 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2348 | >20%                    |                10 |              0.12348 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2414 | >20%                    |                 5 |              0.24828 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2902 | >20%                    |                 5 |              0.25804 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2974 | >20%                    |                10 |              0.12974 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2994 | 5-10%                   |                 2 |              0.6497  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3375 | 15-20%                  |                10 |              0.13375 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4387 | >20%                    |                 2 |              0.71935 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6637 | >20%                    |                10 |              0.16637 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6851 | >20%                    |                10 |              0.16851 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8191 | <5%                     |                10 |              0.18191 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9132 | 15-20%                  |                10 |              0.19132 |