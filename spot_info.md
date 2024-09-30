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

Data correct as of 2024-09-30 01:40:06.689012, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1075 | <5%                     |                 2 |              0.05375 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1296 | 5-10%                   |                 2 |              0.0648  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1306 |                         |                 2 |              0.0653  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1404 |                         |                 2 |              0.0702  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1431 |                         |                 2 |              0.07155 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1674 |                         |                 5 |              0.03348 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1682 |                         |                 2 |              0.0841  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1911 |                         |                 5 |              0.03822 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1965 |                         |                 5 |              0.0393  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1998 | 5-10%                   |                 2 |              0.0999  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2148 | 15-20%                  |                 2 |              0.1074  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2206 |                         |                 5 |              0.04412 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 15-20%                  |                 2 |              0.1172  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | <5%                     |                 2 |              0.1183  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | <5%                     |                 2 |              0.11955 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2515 |                         |                10 |              0.02515 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2533 | <5%                     |                 2 |              0.12665 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2598 | 15-20%                  |                 5 |              0.05196 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2702 | <5%                     |                 2 |              0.1351  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | <5%                     |                 2 |              0.137   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2803 | <5%                     |                 5 |              0.05606 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.285  | <5%                     |                 2 |              0.1425  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | <5%                     |                 2 |              0.1464  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2947 | 15-20%                  |                 5 |              0.05894 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | 10-15%                  |                 2 |              0.1498  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | <5%                     |                 2 |              0.15025 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3033 |                         |                10 |              0.03033 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3117 |                         |                10 |              0.03117 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3118 | >20%                    |                10 |              0.03118 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | 5-10%                   |                 2 |              0.1563  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3144 | <5%                     |                 2 |              0.1572  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3213 | <5%                     |                10 |              0.03213 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3219 | 15-20%                  |                10 |              0.03219 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3333 | 10-15%                  |                 2 |              0.16665 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.3379 |                         |                10 |              0.03379 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3401 | >20%                    |                 5 |              0.06802 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3431 | <5%                     |                 5 |              0.06862 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3555 | <5%                     |                 2 |              0.17775 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3563 | <5%                     |                 2 |              0.17815 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3657 | <5%                     |                 2 |              0.18285 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | 5-10%                   |                 5 |              0.07398 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3789 | <5%                     |                 5 |              0.07578 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3837 | 5-10%                   |                 5 |              0.07674 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3899 | <5%                     |                10 |              0.03899 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3926 | >20%                    |                 2 |              0.1963  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4102 | >20%                    |                 2 |              0.2051  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4122 | 5-10%                   |                 2 |              0.2061  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4229 | >20%                    |                 2 |              0.21145 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4245 | <5%                     |                 2 |              0.21225 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | 15-20%                  |                 5 |              0.08598 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4302 | >20%                    |                 5 |              0.08604 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4423 | <5%                     |                 2 |              0.22115 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4467 | >20%                    |                 2 |              0.22335 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4478 | 10-15%                  |                10 |              0.04478 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | <5%                     |                 5 |              0.09162 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4584 | 10-15%                  |                 2 |              0.2292  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.465  | 5-10%                   |                 5 |              0.093   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4666 | <5%                     |                 5 |              0.09332 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | <5%                     |                 5 |              0.09388 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | 15-20%                  |                 5 |              0.09468 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4814 | 15-20%                  |                 2 |              0.2407  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4861 | 5-10%                   |                 5 |              0.09722 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4879 | <5%                     |                 5 |              0.09758 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.499  | >20%                    |                 2 |              0.2495  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5    | 5-10%                   |                 5 |              0.1     |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.512  | 10-15%                  |                 5 |              0.1024  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.521  | >20%                    |                 5 |              0.1042  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5221 | <5%                     |                 5 |              0.10442 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.525  | 15-20%                  |                 2 |              0.2625  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5303 | <5%                     |                 5 |              0.10606 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5313 | 5-10%                   |                 5 |              0.10626 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5371 | <5%                     |                 5 |              0.10742 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.545  | >20%                    |                 5 |              0.109   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5463 | >20%                    |                 2 |              0.27315 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5819 | >20%                    |                10 |              0.05819 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5958 | >20%                    |                 5 |              0.11916 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6023 | 5-10%                   |                 5 |              0.12046 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6077 | >20%                    |                 5 |              0.12154 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6104 | >20%                    |                 5 |              0.12208 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.617  | 15-20%                  |                 2 |              0.3085  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6568 | 5-10%                   |                10 |              0.06568 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6606 | >20%                    |                10 |              0.06606 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6699 | >20%                    |                10 |              0.06699 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.693  | >20%                    |                 5 |              0.1386  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7004 | >20%                    |                 5 |              0.14008 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7013 | <5%                     |                10 |              0.07013 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7121 | >20%                    |                 2 |              0.35605 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7374 | <5%                     |                10 |              0.07374 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.74   | <5%                     |                10 |              0.074   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7516 | >20%                    |                 5 |              0.15032 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7681 | 10-15%                  |                10 |              0.07681 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7721 | 15-20%                  |                10 |              0.07721 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7747 | <5%                     |                10 |              0.07747 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7812 | 15-20%                  |                10 |              0.07812 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7907 | 10-15%                  |                10 |              0.07907 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8066 | >20%                    |                10 |              0.08066 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8257 | >20%                    |                10 |              0.08257 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8332 | 5-10%                   |                 2 |              0.4166  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8439 | >20%                    |                10 |              0.08439 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8514 | >20%                    |                 5 |              0.17028 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8518 | 5-10%                   |                10 |              0.08518 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8737 | <5%                     |                10 |              0.08737 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8834 | >20%                    |                10 |              0.08834 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.887  | >20%                    |                10 |              0.0887  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8986 | >20%                    |                 5 |              0.17972 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9123 | >20%                    |                10 |              0.09123 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | <5%                     |                10 |              0.09163 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.919  | <5%                     |                 2 |              0.4595  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9608 | 5-10%                   |                10 |              0.09608 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9626 | 5-10%                   |                 5 |              0.19252 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0098 | 10-15%                  |                10 |              0.10098 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0254 | >20%                    |                10 |              0.10254 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0411 | 5-10%                   |                10 |              0.10411 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1036 | <5%                     |                 2 |              0.5518  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.104  | >20%                    |                10 |              0.1104  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1325 | 10-15%                  |                 5 |              0.2265  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1608 | >20%                    |                10 |              0.11608 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1745 | >20%                    |                10 |              0.11745 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.383  | 15-20%                  |                10 |              0.1383  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4723 | >20%                    |                10 |              0.14723 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7219 | 5-10%                   |                10 |              0.17219 |