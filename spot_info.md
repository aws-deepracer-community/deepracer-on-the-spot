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

Data correct as of 2026-09-05 03:44:45.155304, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1316 | >20%                    |                 2 |              0.0658  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.173  | 15-20%                  |                 2 |              0.0865  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.195  | >20%                    |                 2 |              0.0975  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2114 | >20%                    |                 2 |              0.1057  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2186 | >20%                    |                 5 |              0.04372 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2188 | 15-20%                  |                 5 |              0.04376 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2428 | 5-10%                   |                10 |              0.02428 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2478 | >20%                    |                 2 |              0.1239  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2569 | >20%                    |                 5 |              0.05138 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2603 | 15-20%                  |                 5 |              0.05206 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2671 | 15-20%                  |                 2 |              0.13355 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2687 | 15-20%                  |                 5 |              0.05374 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2791 | >20%                    |                 2 |              0.13955 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2806 | >20%                    |                 2 |              0.1403  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2823 | <5%                     |                 2 |              0.14115 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | >20%                    |                 2 |              0.1469  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3086 | >20%                    |                 2 |              0.1543  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3118 | 10-15%                  |                 2 |              0.1559  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | >20%                    |                 2 |              0.15915 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3308 | >20%                    |                 5 |              0.06616 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.331  | >20%                    |                 2 |              0.1655  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3384 | 15-20%                  |                 2 |              0.1692  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3641 | >20%                    |                 5 |              0.07282 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3739 | >20%                    |                 5 |              0.07478 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3768 | >20%                    |                 2 |              0.1884  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3799 | <5%                     |                 2 |              0.18995 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3997 | >20%                    |                 2 |              0.19985 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4001 | >20%                    |                 5 |              0.08002 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4016 | 10-15%                  |                 2 |              0.2008  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4048 | >20%                    |                 2 |              0.2024  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4079 | 15-20%                  |                 2 |              0.20395 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4121 | >20%                    |                 5 |              0.08242 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4163 | >20%                    |                 2 |              0.20815 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4287 |                         |                 5 |              0.08574 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4321 | >20%                    |                 2 |              0.21605 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4389 | 10-15%                  |                10 |              0.04389 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4399 | 10-15%                  |                 2 |              0.21995 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | >20%                    |                 5 |              0.0905  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4568 | >20%                    |                 2 |              0.2284  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4581 | >20%                    |                10 |              0.04581 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4642 | >20%                    |                 2 |              0.2321  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4774 | 15-20%                  |                 2 |              0.2387  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | >20%                    |                 5 |              0.09592 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4919 | >20%                    |                 5 |              0.09838 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4927 |                         |                 2 |              0.24635 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4943 | <5%                     |                 2 |              0.24715 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5003 | >20%                    |                 5 |              0.10006 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5035 | >20%                    |                 5 |              0.1007  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5039 | >20%                    |                 5 |              0.10078 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5042 | >20%                    |                10 |              0.05042 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5122 | >20%                    |                 5 |              0.10244 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5131 | >20%                    |                10 |              0.05131 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5239 | 15-20%                  |                10 |              0.05239 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | >20%                    |                 5 |              0.10634 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5409 | >20%                    |                 2 |              0.27045 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5418 | >20%                    |                 5 |              0.10836 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.543  | >20%                    |                 5 |              0.1086  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5454 | 10-15%                  |                 2 |              0.2727  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.552  | >20%                    |                 2 |              0.276   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5547 | >20%                    |                 2 |              0.27735 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5566 | >20%                    |                 5 |              0.11132 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5609 | >20%                    |                 2 |              0.28045 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5729 | >20%                    |                10 |              0.05729 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5823 | >20%                    |                 5 |              0.11646 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5866 | 5-10%                   |                10 |              0.05866 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5886 | >20%                    |                10 |              0.05886 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5896 | 5-10%                   |                10 |              0.05896 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5913 | >20%                    |                 5 |              0.11826 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5922 | >20%                    |                 2 |              0.2961  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5954 | >20%                    |                 5 |              0.11908 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6053 | 10-15%                  |                 5 |              0.12106 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.632  | >20%                    |                 2 |              0.316   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6372 | 5-10%                   |                 5 |              0.12744 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.638  | 5-10%                   |                 2 |              0.319   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6401 | >20%                    |                 5 |              0.12802 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6458 | 15-20%                  |                10 |              0.06458 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6541 | >20%                    |                 5 |              0.13082 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6665 | >20%                    |                 5 |              0.1333  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6821 | >20%                    |                 5 |              0.13642 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7048 | >20%                    |                10 |              0.07048 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7308 | 15-20%                  |                 5 |              0.14616 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7356 | >20%                    |                 2 |              0.3678  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7619 | >20%                    |                10 |              0.07619 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.788  | >20%                    |                 5 |              0.1576  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.791  | >20%                    |                 2 |              0.3955  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8074 | 15-20%                  |                 2 |              0.4037  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.813  | 15-20%                  |                10 |              0.0813  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8156 | >20%                    |                10 |              0.08156 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8175 | >20%                    |                10 |              0.08175 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8197 | >20%                    |                10 |              0.08197 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8275 | >20%                    |                 5 |              0.1655  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8277 | <5%                     |                10 |              0.08277 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8336 | >20%                    |                10 |              0.08336 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8548 | >20%                    |                 5 |              0.17096 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8627 | 10-15%                  |                 2 |              0.43135 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8636 | >20%                    |                 5 |              0.17272 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8776 | 5-10%                   |                10 |              0.08776 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8986 | <5%                     |                 5 |              0.17972 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9065 | >20%                    |                10 |              0.09065 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9197 | >20%                    |                 2 |              0.45985 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9232 | >20%                    |                 2 |              0.4616  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9363 | 10-15%                  |                 2 |              0.46815 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9378 |                         |                 2 |              0.4689  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9657 | >20%                    |                10 |              0.09657 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9792 | >20%                    |                10 |              0.09792 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9809 | >20%                    |                10 |              0.09809 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1      | 10-15%                  |                 2 |              0.5     |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0089 | 5-10%                   |                 2 |              0.50445 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.026  | 15-20%                  |                10 |              0.1026  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0521 | >20%                    |                 5 |              0.21042 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0571 | >20%                    |                10 |              0.10571 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0613 | >20%                    |                10 |              0.10613 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0647 | >20%                    |                 2 |              0.53235 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0818 | >20%                    |                 5 |              0.21636 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1016 | >20%                    |                10 |              0.11016 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.114  | 15-20%                  |                10 |              0.1114  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1146 | 5-10%                   |                10 |              0.11146 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1252 | >20%                    |                10 |              0.11252 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1358 | >20%                    |                 5 |              0.22716 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1448 | >20%                    |                 5 |              0.22896 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.152  |                         |                 2 |              0.576   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1766 | >20%                    |                10 |              0.11766 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.196  |                         |                 5 |              0.2392  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1965 | >20%                    |                10 |              0.11965 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2037 |                         |                 5 |              0.24074 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2047 | >20%                    |                10 |              0.12047 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.2102 | >20%                    |                 5 |              0.24204 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2385 | >20%                    |                10 |              0.12385 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2485 | >20%                    |                 5 |              0.2497  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2555 | >20%                    |                10 |              0.12555 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2667 | 10-15%                  |                10 |              0.12667 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2812 | >20%                    |                 5 |              0.25624 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3147 | >20%                    |                10 |              0.13147 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3221 | >20%                    |                10 |              0.13221 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3519 | 5-10%                   |                 5 |              0.27038 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3546 | 15-20%                  |                10 |              0.13546 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3583 |                         |                10 |              0.13583 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4633 | >20%                    |                 2 |              0.73165 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.4828 | >20%                    |                 5 |              0.29656 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.5115 |                         |                10 |              0.15115 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5534 | 15-20%                  |                10 |              0.15534 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.577  | 15-20%                  |                 5 |              0.3154  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6185 | >20%                    |                10 |              0.16185 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.6841 | >20%                    |                 5 |              0.33682 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7062 | >20%                    |                10 |              0.17062 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.7441 | >20%                    |                10 |              0.17441 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8584 |                         |                10 |              0.18584 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9069 | 15-20%                  |                10 |              0.19069 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.9399 | >20%                    |                 5 |              0.38798 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9945 | 5-10%                   |                 2 |              0.99725 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0134 | 5-10%                   |                 2 |              1.0067  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.0379 | 5-10%                   |                10 |              0.20379 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5054 | >20%                    |                10 |              0.25054 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6466 | >20%                    |                10 |              0.26466 |