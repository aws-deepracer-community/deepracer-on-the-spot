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

Data correct as of 2026-06-01 04:43:18.675243, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1387 | >20%                    |                 2 |              0.06935 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1469 | 15-20%                  |                 2 |              0.07345 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1717 | >20%                    |                 2 |              0.08585 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2043 | 10-15%                  |                 2 |              0.10215 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2064 | 15-20%                  |                 2 |              0.1032  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2074 | >20%                    |                 2 |              0.1037  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2106 | 15-20%                  |                 5 |              0.04212 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2124 | >20%                    |                 2 |              0.1062  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2204 | >20%                    |                 2 |              0.1102  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2285 | >20%                    |                 2 |              0.11425 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2462 | >20%                    |                 5 |              0.04924 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | >20%                    |                 2 |              0.1259  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2548 | >20%                    |                 2 |              0.1274  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2595 | 15-20%                  |                 5 |              0.0519  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2797 | >20%                    |                 5 |              0.05594 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2908 | >20%                    |                10 |              0.02908 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2927 | >20%                    |                 2 |              0.14635 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2963 | 5-10%                   |                10 |              0.02963 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2992 | >20%                    |                 2 |              0.1496  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3005 | >20%                    |                 5 |              0.0601  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3039 | >20%                    |                 5 |              0.06078 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | 15-20%                  |                 2 |              0.15225 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3051 | >20%                    |                 5 |              0.06102 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3071 | 15-20%                  |                 5 |              0.06142 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3139 | >20%                    |                 5 |              0.06278 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3205 | >20%                    |                10 |              0.03205 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3285 | 5-10%                   |                10 |              0.03285 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3307 | >20%                    |                 5 |              0.06614 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | <5%                     |                 2 |              0.16625 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3373 | >20%                    |                 2 |              0.16865 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3402 | >20%                    |                 2 |              0.1701  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3492 | 10-15%                  |                 2 |              0.1746  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | >20%                    |                 5 |              0.07024 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3696 | >20%                    |                10 |              0.03696 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3717 | >20%                    |                 2 |              0.18585 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3723 | 10-15%                  |                 2 |              0.18615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3769 | >20%                    |                 5 |              0.07538 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3885 | >20%                    |                 5 |              0.0777  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3891 | >20%                    |                 5 |              0.07782 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3954 | >20%                    |                 2 |              0.1977  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4039 | >20%                    |                 5 |              0.08078 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4048 | 10-15%                  |                 2 |              0.2024  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | >20%                    |                 5 |              0.08214 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4128 | >20%                    |                10 |              0.04128 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4203 | >20%                    |                 5 |              0.08406 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4206 | >20%                    |                 5 |              0.08412 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4268 | <5%                     |                 2 |              0.2134  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4289 | >20%                    |                 2 |              0.21445 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4307 | >20%                    |                 2 |              0.21535 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4328 | >20%                    |                 2 |              0.2164  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4437 | >20%                    |                 5 |              0.08874 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.458  | 5-10%                   |                 2 |              0.229   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4632 | 15-20%                  |                 2 |              0.2316  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.465  | <5%                     |                 2 |              0.2325  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4676 | 15-20%                  |                 2 |              0.2338  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | 10-15%                  |                 2 |              0.2348  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | >20%                    |                 5 |              0.09486 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4768 | >20%                    |                 2 |              0.2384  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4804 | >20%                    |                 2 |              0.2402  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4909 | 15-20%                  |                 2 |              0.24545 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4926 | >20%                    |                 5 |              0.09852 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5029 | >20%                    |                 5 |              0.10058 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5046 | >20%                    |                 2 |              0.2523  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5084 | 5-10%                   |                 5 |              0.10168 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | >20%                    |                 5 |              0.10372 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5194 | 15-20%                  |                 5 |              0.10388 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5222 | >20%                    |                10 |              0.05222 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5257 | >20%                    |                 5 |              0.10514 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5471 | 10-15%                  |                 5 |              0.10942 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5509 | >20%                    |                 2 |              0.27545 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.554  |                         |                 2 |              0.277   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5742 | >20%                    |                 2 |              0.2871  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5762 | <5%                     |                 5 |              0.11524 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5854 | >20%                    |                 2 |              0.2927  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5855 | 5-10%                   |                10 |              0.05855 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5897 | >20%                    |                10 |              0.05897 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5934 | >20%                    |                 5 |              0.11868 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5944 | >20%                    |                10 |              0.05944 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6077 | >20%                    |                 5 |              0.12154 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6201 | 5-10%                   |                 2 |              0.31005 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6308 | 15-20%                  |                10 |              0.06308 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6422 | >20%                    |                 5 |              0.12844 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6612 | >20%                    |                10 |              0.06612 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6648 | >20%                    |                 2 |              0.3324  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6708 | 5-10%                   |                10 |              0.06708 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6737 | >20%                    |                 5 |              0.13474 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6788 | >20%                    |                 5 |              0.13576 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.686  | >20%                    |                 5 |              0.1372  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6896 | >20%                    |                10 |              0.06896 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6905 | >20%                    |                 5 |              0.1381  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6933 | 15-20%                  |                10 |              0.06933 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7009 | 15-20%                  |                10 |              0.07009 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7033 | 10-15%                  |                10 |              0.07033 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7061 | >20%                    |                 2 |              0.35305 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7122 | >20%                    |                 5 |              0.14244 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7149 | >20%                    |                 5 |              0.14298 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7154 | >20%                    |                 5 |              0.14308 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7305 | >20%                    |                10 |              0.07305 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7347 | >20%                    |                 2 |              0.36735 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7681 | 15-20%                  |                10 |              0.07681 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7716 | >20%                    |                10 |              0.07716 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7832 | >20%                    |                10 |              0.07832 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8014 |                         |                10 |              0.08014 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8075 | >20%                    |                 5 |              0.1615  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8123 | >20%                    |                 5 |              0.16246 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8176 | >20%                    |                 5 |              0.16352 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8296 | 10-15%                  |                 2 |              0.4148  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8321 | >20%                    |                10 |              0.08321 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8499 | >20%                    |                10 |              0.08499 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8527 | >20%                    |                 5 |              0.17054 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.853  |                         |                 2 |              0.4265  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8727 | 15-20%                  |                10 |              0.08727 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8776 |                         |                 5 |              0.17552 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.88   | >20%                    |                10 |              0.088   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8832 | >20%                    |                10 |              0.08832 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8912 | >20%                    |                10 |              0.08912 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9194 | >20%                    |                10 |              0.09194 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9213 | >20%                    |                10 |              0.09213 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9371 | 5-10%                   |                 2 |              0.46855 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9402 | >20%                    |                 5 |              0.18804 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9411 | >20%                    |                10 |              0.09411 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.942  | >20%                    |                 5 |              0.1884  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9611 | >20%                    |                10 |              0.09611 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9668 | >20%                    |                10 |              0.09668 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9688 | >20%                    |                10 |              0.09688 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9798 | >20%                    |                 5 |              0.19596 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9916 | >20%                    |                10 |              0.09916 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9925 | >20%                    |                10 |              0.09925 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0009 | 5-10%                   |                10 |              0.10009 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0182 | >20%                    |                10 |              0.10182 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0479 | >20%                    |                 2 |              0.52395 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0656 | >20%                    |                10 |              0.10656 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0824 |                         |                 5 |              0.21648 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1152 | 5-10%                   |                 5 |              0.22304 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1318 |                         |                10 |              0.11318 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1332 | 5-10%                   |                 2 |              0.5666  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1416 | >20%                    |                 5 |              0.22832 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1615 | 15-20%                  |                10 |              0.11615 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1663 | >20%                    |                10 |              0.11663 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1832 | >20%                    |                10 |              0.11832 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1833 | 15-20%                  |                10 |              0.11833 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2709 | >20%                    |                10 |              0.12709 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3072 | 10-15%                  |                10 |              0.13072 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3265 | 15-20%                  |                 5 |              0.2653  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3646 | >20%                    |                10 |              0.13646 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3812 | 10-15%                  |                 2 |              0.6906  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4294 | >20%                    |                 5 |              0.28588 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5174 | >20%                    |                 5 |              0.30348 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5999 | 15-20%                  |                10 |              0.15999 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0552 | >20%                    |                10 |              0.20552 |