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

Data correct as of 2025-12-16 02:00:12.547814, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1147 | >20%                    |                 2 |              0.05735 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1524 | 15-20%                  |                 2 |              0.0762  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1577 | <5%                     |                 2 |              0.07885 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1591 | >20%                    |                 2 |              0.07955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1774 | >20%                    |                 2 |              0.0887  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1811 | >20%                    |                 2 |              0.09055 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1909 | >20%                    |                 5 |              0.03818 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2053 | >20%                    |                 2 |              0.10265 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2139 | 5-10%                   |                 5 |              0.04278 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2145 | >20%                    |                 5 |              0.0429  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2404 | 10-15%                  |                 2 |              0.1202  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2462 | >20%                    |                 2 |              0.1231  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | >20%                    |                 2 |              0.12365 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | >20%                    |                 2 |              0.1244  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2716 | 5-10%                   |                10 |              0.02716 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2765 | 10-15%                  |                 5 |              0.0553  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | 15-20%                  |                 2 |              0.13985 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2826 | <5%                     |                 5 |              0.05652 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | >20%                    |                 2 |              0.1437  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | 10-15%                  |                 2 |              0.1461  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2958 | >20%                    |                 2 |              0.1479  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2964 | 5-10%                   |                 2 |              0.1482  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2998 | >20%                    |                 2 |              0.1499  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3    | >20%                    |                 2 |              0.15    |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3118 | 10-15%                  |                 2 |              0.1559  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3126 | >20%                    |                 2 |              0.1563  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3228 | >20%                    |                 5 |              0.06456 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3231 | >20%                    |                 2 |              0.16155 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3312 | 10-15%                  |                10 |              0.03312 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3415 | 15-20%                  |                 2 |              0.17075 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3483 | >20%                    |                 2 |              0.17415 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3515 | >20%                    |                 5 |              0.0703  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3534 | 5-10%                   |                10 |              0.03534 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3561 | >20%                    |                 2 |              0.17805 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3563 | >20%                    |                10 |              0.03563 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.357  | >20%                    |                 5 |              0.0714  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | >20%                    |                 2 |              0.18355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3722 | >20%                    |                 5 |              0.07444 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3734 | <5%                     |                 5 |              0.07468 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3786 | 5-10%                   |                 2 |              0.1893  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3803 | >20%                    |                10 |              0.03803 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.383  | >20%                    |                10 |              0.0383  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3893 | <5%                     |                10 |              0.03893 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3911 | >20%                    |                 5 |              0.07822 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3933 | 15-20%                  |                 5 |              0.07866 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.394  | >20%                    |                 5 |              0.0788  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3942 | 10-15%                  |                10 |              0.03942 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3955 | >20%                    |                 5 |              0.0791  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3969 | <5%                     |                 2 |              0.19845 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3991 | >20%                    |                 5 |              0.07982 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3996 | >20%                    |                 2 |              0.1998  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4092 | 10-15%                  |                 2 |              0.2046  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4095 | 15-20%                  |                 5 |              0.0819  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4095 | >20%                    |                 5 |              0.0819  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4098 | >20%                    |                 2 |              0.2049  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | >20%                    |                 2 |              0.20645 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4161 | >20%                    |                 2 |              0.20805 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4243 | 10-15%                  |                 2 |              0.21215 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4248 | >20%                    |                10 |              0.04248 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4253 | <5%                     |                 2 |              0.21265 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4351 | <5%                     |                 2 |              0.21755 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.436  | 15-20%                  |                10 |              0.0436  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4545 | >20%                    |                 2 |              0.22725 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4547 | 15-20%                  |                 5 |              0.09094 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.459  | 15-20%                  |                 2 |              0.2295  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4603 | <5%                     |                 5 |              0.09206 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.461  | >20%                    |                 5 |              0.0922  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4652 | >20%                    |                 5 |              0.09304 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4677 | 15-20%                  |                 2 |              0.23385 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4693 | 15-20%                  |                 5 |              0.09386 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4736 | >20%                    |                 2 |              0.2368  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.474  | 15-20%                  |                 5 |              0.0948  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4772 | >20%                    |                 2 |              0.2386  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4777 | >20%                    |                 5 |              0.09554 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4782 | >20%                    |                 2 |              0.2391  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4879 | <5%                     |                10 |              0.04879 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4898 | >20%                    |                 2 |              0.2449  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4907 | >20%                    |                 5 |              0.09814 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.497  | 5-10%                   |                 5 |              0.0994  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5084 | 15-20%                  |                 2 |              0.2542  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | >20%                    |                 5 |              0.10372 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5212 | 15-20%                  |                 5 |              0.10424 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5238 | >20%                    |                 2 |              0.2619  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.527  | >20%                    |                 5 |              0.1054  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5272 | <5%                     |                10 |              0.05272 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5302 | >20%                    |                 5 |              0.10604 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5383 | >20%                    |                 5 |              0.10766 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5437 | <5%                     |                 5 |              0.10874 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5553 | >20%                    |                 2 |              0.27765 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5559 | >20%                    |                 2 |              0.27795 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5595 | >20%                    |                 5 |              0.1119  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5705 | >20%                    |                 5 |              0.1141  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5719 | 10-15%                  |                 5 |              0.11438 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5725 | >20%                    |                 5 |              0.1145  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5725 | >20%                    |                 2 |              0.28625 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5777 | >20%                    |                 2 |              0.28885 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5806 | >20%                    |                10 |              0.05806 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5972 | 5-10%                   |                 5 |              0.11944 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6049 | >20%                    |                10 |              0.06049 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6063 | >20%                    |                 5 |              0.12126 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6064 | >20%                    |                 5 |              0.12128 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6251 | 5-10%                   |                 5 |              0.12502 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.633  | 15-20%                  |                 5 |              0.1266  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6332 | >20%                    |                 2 |              0.3166  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.639  | 5-10%                   |                 5 |              0.1278  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6418 | <5%                     |                 5 |              0.12836 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6439 | >20%                    |                 2 |              0.32195 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6694 | >20%                    |                10 |              0.06694 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6783 | >20%                    |                10 |              0.06783 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6784 | 10-15%                  |                 5 |              0.13568 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6809 | 10-15%                  |                 5 |              0.13618 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6833 | >20%                    |                 5 |              0.13666 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6868 | >20%                    |                 5 |              0.13736 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6891 | >20%                    |                 2 |              0.34455 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6927 | 10-15%                  |                10 |              0.06927 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.693  | 15-20%                  |                10 |              0.0693  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7029 | >20%                    |                10 |              0.07029 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7035 | >20%                    |                 5 |              0.1407  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.708  | 5-10%                   |                10 |              0.0708  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7088 | >20%                    |                10 |              0.07088 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7093 | >20%                    |                10 |              0.07093 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.711  | >20%                    |                10 |              0.0711  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7136 | >20%                    |                10 |              0.07136 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7153 | 15-20%                  |                10 |              0.07153 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7194 | >20%                    |                 2 |              0.3597  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7446 | >20%                    |                10 |              0.07446 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7477 | >20%                    |                10 |              0.07477 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7667 | >20%                    |                10 |              0.07667 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7669 | >20%                    |                 2 |              0.38345 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7676 | >20%                    |                 5 |              0.15352 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7747 | >20%                    |                 5 |              0.15494 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7779 | 10-15%                  |                10 |              0.07779 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7831 | >20%                    |                 2 |              0.39155 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7854 | >20%                    |                10 |              0.07854 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7909 | 10-15%                  |                10 |              0.07909 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7936 | >20%                    |                10 |              0.07936 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.8037 | >20%                    |                 5 |              0.16074 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8129 | 15-20%                  |                10 |              0.08129 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8298 | <5%                     |                10 |              0.08298 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8346 | >20%                    |                 5 |              0.16692 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.835  | 10-15%                  |                 5 |              0.167   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8552 | 5-10%                   |                10 |              0.08552 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8589 | >20%                    |                 2 |              0.42945 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8812 | >20%                    |                10 |              0.08812 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8841 | >20%                    |                 2 |              0.44205 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8848 | >20%                    |                10 |              0.08848 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8973 | 10-15%                  |                10 |              0.08973 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8984 | >20%                    |                 5 |              0.17968 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8988 | >20%                    |                 5 |              0.17976 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.915  | >20%                    |                10 |              0.0915  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9167 | 15-20%                  |                 2 |              0.45835 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9192 | >20%                    |                10 |              0.09192 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9207 | >20%                    |                 5 |              0.18414 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9295 | >20%                    |                10 |              0.09295 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9358 | >20%                    |                 5 |              0.18716 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9778 | 10-15%                  |                10 |              0.09778 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0196 | 15-20%                  |                10 |              0.10196 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0408 | 10-15%                  |                10 |              0.10408 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0418 | 10-15%                  |                10 |              0.10418 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0427 | >20%                    |                10 |              0.10427 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0511 | >20%                    |                10 |              0.10511 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0688 | >20%                    |                 2 |              0.5344  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0734 | >20%                    |                 2 |              0.5367  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.075  | 5-10%                   |                 5 |              0.215   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0773 | >20%                    |                 2 |              0.53865 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1359 | >20%                    |                10 |              0.11359 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2103 | >20%                    |                10 |              0.12103 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2276 | >20%                    |                10 |              0.12276 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2564 | 5-10%                   |                10 |              0.12564 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3762 | >20%                    |                 2 |              0.6881  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3784 | >20%                    |                 5 |              0.27568 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3935 | >20%                    |                10 |              0.13935 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4189 | >20%                    |                10 |              0.14189 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4291 | >20%                    |                 5 |              0.28582 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4321 | >20%                    |                 2 |              0.71605 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4969 | 15-20%                  |                10 |              0.14969 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5299 | 10-15%                  |                 5 |              0.30598 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5891 | 15-20%                  |                10 |              0.15891 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1033 | 10-15%                  |                10 |              0.21033 |