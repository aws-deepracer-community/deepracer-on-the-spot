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

Data correct as of 2025-12-30 02:01:20.423188, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0942 | >20%                    |                 2 |              0.0471  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1372 | >20%                    |                 2 |              0.0686  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1624 | >20%                    |                 2 |              0.0812  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1668 | <5%                     |                 2 |              0.0834  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1689 | >20%                    |                 2 |              0.08445 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.181  | >20%                    |                 5 |              0.0362  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2286 | >20%                    |                 2 |              0.1143  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2591 | >20%                    |                 2 |              0.12955 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2613 | >20%                    |                 2 |              0.13065 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2677 | <5%                     |                 2 |              0.13385 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | >20%                    |                 2 |              0.1346  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2716 | >20%                    |                 2 |              0.1358  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | >20%                    |                 2 |              0.13635 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2753 | 5-10%                   |                10 |              0.02753 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.276  | 5-10%                   |                 2 |              0.138   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | 15-20%                  |                 2 |              0.14105 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2839 | >20%                    |                 5 |              0.05678 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2877 | >20%                    |                10 |              0.02877 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | 5-10%                   |                 5 |              0.05764 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2913 | >20%                    |                 2 |              0.14565 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | >20%                    |                 2 |              0.15305 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3181 | >20%                    |                 2 |              0.15905 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3229 | >20%                    |                 5 |              0.06458 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3245 | >20%                    |                 2 |              0.16225 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3311 | >20%                    |                 2 |              0.16555 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3485 | 5-10%                   |                10 |              0.03485 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3502 | 15-20%                  |                 5 |              0.07004 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | >20%                    |                 5 |              0.07038 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3535 | >20%                    |                 5 |              0.0707  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3577 | >20%                    |                 5 |              0.07154 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3593 | >20%                    |                 5 |              0.07186 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | >20%                    |                 2 |              0.1802  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3615 | >20%                    |                 2 |              0.18075 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3646 | 5-10%                   |                 2 |              0.1823  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3678 | >20%                    |                 2 |              0.1839  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.37   | >20%                    |                 2 |              0.185   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3778 | >20%                    |                 2 |              0.1889  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.379  | >20%                    |                 5 |              0.0758  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3807 | >20%                    |                 5 |              0.07614 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3818 | 10-15%                  |                 2 |              0.1909  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3823 | >20%                    |                 5 |              0.07646 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3842 | <5%                     |                 5 |              0.07684 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3846 | >20%                    |                 2 |              0.1923  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3866 | >20%                    |                10 |              0.03866 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3875 | 10-15%                  |                 2 |              0.19375 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3882 | >20%                    |                 5 |              0.07764 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3891 | <5%                     |                 5 |              0.07782 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3905 | >20%                    |                10 |              0.03905 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3916 | >20%                    |                 2 |              0.1958  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4037 | >20%                    |                 5 |              0.08074 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4046 | >20%                    |                10 |              0.04046 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4049 | 15-20%                  |                10 |              0.04049 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4054 | <5%                     |                10 |              0.04054 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4075 | >20%                    |                 5 |              0.0815  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4132 | >20%                    |                 2 |              0.2066  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4135 | <5%                     |                10 |              0.04135 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4161 | <5%                     |                 2 |              0.20805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | >20%                    |                 5 |              0.08354 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4201 | >20%                    |                10 |              0.04201 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4214 | >20%                    |                 5 |              0.08428 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | 10-15%                  |                 2 |              0.21185 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4253 | >20%                    |                10 |              0.04253 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4259 | >20%                    |                 2 |              0.21295 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.426  | >20%                    |                 2 |              0.213   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4344 | >20%                    |                 5 |              0.08688 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | >20%                    |                 5 |              0.09012 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4534 | <5%                     |                 2 |              0.2267  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4684 | >20%                    |                 2 |              0.2342  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4751 | >20%                    |                 2 |              0.23755 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4802 | >20%                    |                 2 |              0.2401  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4874 | >20%                    |                 5 |              0.09748 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4908 | 15-20%                  |                 2 |              0.2454  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.491  | >20%                    |                 2 |              0.2455  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | >20%                    |                 5 |              0.09844 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4941 | >20%                    |                 2 |              0.24705 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4979 | 15-20%                  |                 5 |              0.09958 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | >20%                    |                 5 |              0.10018 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5017 | <5%                     |                 5 |              0.10034 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5064 | >20%                    |                 5 |              0.10128 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5079 | >20%                    |                 2 |              0.25395 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5189 | 15-20%                  |                 2 |              0.25945 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5337 | 15-20%                  |                 5 |              0.10674 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5346 | >20%                    |                 5 |              0.10692 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5348 | >20%                    |                 2 |              0.2674  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | >20%                    |                 5 |              0.10844 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5431 | 15-20%                  |                 5 |              0.10862 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5465 | 10-15%                  |                 5 |              0.1093  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5501 | >20%                    |                10 |              0.05501 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5524 | >20%                    |                 5 |              0.11048 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5532 | 15-20%                  |                10 |              0.05532 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5541 | >20%                    |                 5 |              0.11082 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5659 | 5-10%                   |                 5 |              0.11318 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5716 | >20%                    |                 2 |              0.2858  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5982 | >20%                    |                 5 |              0.11964 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6001 | >20%                    |                10 |              0.06001 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6021 | 10-15%                  |                 2 |              0.30105 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6157 | 10-15%                  |                 5 |              0.12314 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6176 | 5-10%                   |                 5 |              0.12352 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6218 | 15-20%                  |                 5 |              0.12436 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6254 | <5%                     |                 5 |              0.12508 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.63   | 10-15%                  |                 5 |              0.126   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6407 | >20%                    |                 2 |              0.32035 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.645  | >20%                    |                 5 |              0.129   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6492 | 15-20%                  |                 5 |              0.12984 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6602 | >20%                    |                10 |              0.06602 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6616 | >20%                    |                 2 |              0.3308  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6686 | >20%                    |                 5 |              0.13372 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6763 | 15-20%                  |                10 |              0.06763 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6848 | >20%                    |                 2 |              0.3424  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6976 | >20%                    |                 2 |              0.3488  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6981 | >20%                    |                 5 |              0.13962 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6999 | 5-10%                   |                 5 |              0.13998 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7155 | 15-20%                  |                10 |              0.07155 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7182 | >20%                    |                10 |              0.07182 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7187 | >20%                    |                 2 |              0.35935 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7205 | 15-20%                  |                10 |              0.07205 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7233 | >20%                    |                 5 |              0.14466 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7305 | >20%                    |                10 |              0.07305 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7316 | 5-10%                   |                10 |              0.07316 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7331 | 15-20%                  |                 2 |              0.36655 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7484 | >20%                    |                10 |              0.07484 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7491 | 15-20%                  |                10 |              0.07491 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7529 | <5%                     |                10 |              0.07529 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7531 | 10-15%                  |                 5 |              0.15062 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7561 | >20%                    |                10 |              0.07561 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7633 | >20%                    |                10 |              0.07633 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7703 | >20%                    |                10 |              0.07703 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7801 | >20%                    |                10 |              0.07801 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7884 | >20%                    |                 5 |              0.15768 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7915 | >20%                    |                 5 |              0.1583  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7925 | >20%                    |                 2 |              0.39625 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7969 | >20%                    |                 2 |              0.39845 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8002 | <5%                     |                 2 |              0.4001  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8036 | >20%                    |                10 |              0.08036 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8042 | 15-20%                  |                10 |              0.08042 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8189 | <5%                     |                10 |              0.08189 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8237 | 15-20%                  |                10 |              0.08237 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.824  | <5%                     |                10 |              0.0824  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8287 | 15-20%                  |                 5 |              0.16574 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8305 | 15-20%                  |                10 |              0.08305 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8656 | >20%                    |                 5 |              0.17312 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8771 | >20%                    |                10 |              0.08771 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8824 | >20%                    |                 2 |              0.4412  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9027 | >20%                    |                10 |              0.09027 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9062 | >20%                    |                 2 |              0.4531  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9127 | >20%                    |                10 |              0.09127 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9199 | >20%                    |                10 |              0.09199 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9416 | >20%                    |                 5 |              0.18832 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9434 | 10-15%                  |                 5 |              0.18868 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9441 | >20%                    |                10 |              0.09441 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.959  | >20%                    |                10 |              0.0959  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9744 | 15-20%                  |                10 |              0.09744 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9812 | >20%                    |                10 |              0.09812 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9861 | 10-15%                  |                10 |              0.09861 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.989  | >20%                    |                10 |              0.0989  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0113 | >20%                    |                 2 |              0.50565 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.02   | >20%                    |                 5 |              0.204   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0542 | >20%                    |                 5 |              0.21084 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0758 | 15-20%                  |                10 |              0.10758 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0844 | >20%                    |                 5 |              0.21688 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0918 | >20%                    |                 5 |              0.21836 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.109  | <5%                     |                10 |              0.1109  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1242 | >20%                    |                 2 |              0.5621  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1356 | >20%                    |                10 |              0.11356 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1533 | >20%                    |                10 |              0.11533 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1671 | >20%                    |                 5 |              0.23342 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2362 | 10-15%                  |                10 |              0.12362 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2584 | >20%                    |                10 |              0.12584 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2817 | >20%                    |                 2 |              0.64085 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2821 | >20%                    |                10 |              0.12821 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2934 | >20%                    |                10 |              0.12934 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3615 | 15-20%                  |                10 |              0.13615 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4206 | >20%                    |                10 |              0.14206 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4271 | >20%                    |                 5 |              0.28542 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4394 | 10-15%                  |                 5 |              0.28788 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.444  | >20%                    |                 2 |              0.722   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4633 | >20%                    |                10 |              0.14633 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6532 | >20%                    |                10 |              0.16532 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.887  | 10-15%                  |                10 |              0.1887  |