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

Data correct as of 2026-04-11 02:40:46.614180, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1726 | >20%                    |                 2 |              0.0863  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1963 | 15-20%                  |                 2 |              0.09815 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2106 | >20%                    |                 2 |              0.1053  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | >20%                    |                 2 |              0.1122  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | >20%                    |                 2 |              0.1212  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | >20%                    |                 2 |              0.1221  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.268  | 15-20%                  |                 5 |              0.0536  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | 15-20%                  |                 2 |              0.13895 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2859 | 5-10%                   |                10 |              0.02859 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2922 | >20%                    |                10 |              0.02922 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2945 | 15-20%                  |                 5 |              0.0589  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3048 | 15-20%                  |                 5 |              0.06096 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | >20%                    |                 2 |              0.15395 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3106 | >20%                    |                 5 |              0.06212 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3141 | >20%                    |                 5 |              0.06282 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3242 | >20%                    |                 2 |              0.1621  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3243 | 10-15%                  |                 2 |              0.16215 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3288 | >20%                    |                 5 |              0.06576 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.329  | 10-15%                  |                 2 |              0.1645  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3294 | 10-15%                  |                 2 |              0.1647  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.335  | 5-10%                   |                10 |              0.0335  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3361 | <5%                     |                 2 |              0.16805 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3403 | 15-20%                  |                 2 |              0.17015 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3487 | <5%                     |                 2 |              0.17435 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3559 | >20%                    |                 5 |              0.07118 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.358  | >20%                    |                 2 |              0.179   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3611 | >20%                    |                10 |              0.03611 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3622 | >20%                    |                 2 |              0.1811  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.365  | 5-10%                   |                10 |              0.0365  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.381  | >20%                    |                 2 |              0.1905  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3829 | 10-15%                  |                 2 |              0.19145 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3993 | >20%                    |                 5 |              0.07986 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4118 | >20%                    |                 5 |              0.08236 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4129 | >20%                    |                 5 |              0.08258 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4163 | >20%                    |                 2 |              0.20815 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4195 | <5%                     |                 2 |              0.20975 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | >20%                    |                 2 |              0.21075 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4222 | 10-15%                  |                 2 |              0.2111  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4232 | >20%                    |                 5 |              0.08464 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4238 | >20%                    |                 5 |              0.08476 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4307 | >20%                    |                 5 |              0.08614 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4332 | 15-20%                  |                 2 |              0.2166  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | >20%                    |                 2 |              0.21675 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | >20%                    |                 2 |              0.2184  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.438  | >20%                    |                 2 |              0.219   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4411 | >20%                    |                 5 |              0.08822 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4499 | 15-20%                  |                 2 |              0.22495 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4508 | >20%                    |                 5 |              0.09016 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4587 | 15-20%                  |                 2 |              0.22935 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4624 | >20%                    |                 5 |              0.09248 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4641 | >20%                    |                 5 |              0.09282 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4683 | >20%                    |                 2 |              0.23415 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | >20%                    |                 2 |              0.23665 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4852 | >20%                    |                 5 |              0.09704 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4891 | >20%                    |                 5 |              0.09782 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4928 | >20%                    |                 5 |              0.09856 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4931 | >20%                    |                 5 |              0.09862 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4974 | >20%                    |                 2 |              0.2487  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5074 | <5%                     |                10 |              0.05074 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5092 | >20%                    |                 2 |              0.2546  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5121 | >20%                    |                10 |              0.05121 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5128 | >20%                    |                 2 |              0.2564  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5337 | 5-10%                   |                 5 |              0.10674 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5464 | >20%                    |                10 |              0.05464 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5526 | >20%                    |                 2 |              0.2763  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5565 | 5-10%                   |                 2 |              0.27825 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5588 | <5%                     |                 5 |              0.11176 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5653 | >20%                    |                10 |              0.05653 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5706 | 15-20%                  |                 5 |              0.11412 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | >20%                    |                 5 |              0.11458 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5739 | >20%                    |                 5 |              0.11478 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5858 | 10-15%                  |                 5 |              0.11716 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5902 | >20%                    |                10 |              0.05902 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5922 | 5-10%                   |                 5 |              0.11844 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6017 | >20%                    |                10 |              0.06017 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6139 | >20%                    |                 2 |              0.30695 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6218 | >20%                    |                10 |              0.06218 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6219 | 5-10%                   |                 2 |              0.31095 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6286 | >20%                    |                 5 |              0.12572 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6287 | 10-15%                  |                 2 |              0.31435 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6312 | >20%                    |                 5 |              0.12624 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.643  | >20%                    |                 5 |              0.1286  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6473 | >20%                    |                 5 |              0.12946 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6488 | >20%                    |                10 |              0.06488 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6506 | 5-10%                   |                10 |              0.06506 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6555 | >20%                    |                 2 |              0.32775 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6716 | >20%                    |                10 |              0.06716 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6825 | >20%                    |                10 |              0.06825 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6886 | >20%                    |                 5 |              0.13772 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7003 | 15-20%                  |                10 |              0.07003 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7118 | >20%                    |                 5 |              0.14236 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7129 | >20%                    |                 5 |              0.14258 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7197 | >20%                    |                10 |              0.07197 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7361 | >20%                    |                 5 |              0.14722 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7432 | >20%                    |                10 |              0.07432 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7437 | >20%                    |                 5 |              0.14874 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7479 | >20%                    |                 2 |              0.37395 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7543 | >20%                    |                 5 |              0.15086 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7568 | >20%                    |                10 |              0.07568 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7608 | >20%                    |                 2 |              0.3804  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7684 | 15-20%                  |                10 |              0.07684 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7946 | 5-10%                   |                10 |              0.07946 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7964 | >20%                    |                10 |              0.07964 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8046 | >20%                    |                 5 |              0.16092 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8095 | >20%                    |                 5 |              0.1619  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8119 | >20%                    |                10 |              0.08119 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8138 | >20%                    |                10 |              0.08138 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8176 | >20%                    |                 5 |              0.16352 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8179 | >20%                    |                 5 |              0.16358 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8211 | >20%                    |                10 |              0.08211 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8215 | >20%                    |                 2 |              0.41075 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8438 | 5-10%                   |                 2 |              0.4219  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8515 | >20%                    |                10 |              0.08515 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8817 | 15-20%                  |                10 |              0.08817 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8839 | 15-20%                  |                10 |              0.08839 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8848 | >20%                    |                 5 |              0.17696 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8861 | >20%                    |                 5 |              0.17722 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8972 | >20%                    |                10 |              0.08972 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8998 | >20%                    |                10 |              0.08998 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9201 | >20%                    |                 2 |              0.46005 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9242 | >20%                    |                10 |              0.09242 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9325 | 10-15%                  |                10 |              0.09325 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.934  | 15-20%                  |                10 |              0.0934  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9345 | >20%                    |                10 |              0.09345 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.955  | >20%                    |                10 |              0.0955  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.97   | >20%                    |                10 |              0.097   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9702 | >20%                    |                 5 |              0.19404 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9901 | >20%                    |                10 |              0.09901 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9959 | >20%                    |                10 |              0.09959 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9979 | 10-15%                  |                 2 |              0.49895 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0229 | 5-10%                   |                10 |              0.10229 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0565 | 15-20%                  |                10 |              0.10565 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1073 | >20%                    |                10 |              0.11073 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1236 | >20%                    |                10 |              0.11236 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1258 | >20%                    |                 5 |              0.22516 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1427 | >20%                    |                10 |              0.11427 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2049 | >20%                    |                 5 |              0.24098 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2342 | 10-15%                  |                10 |              0.12342 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2547 | 15-20%                  |                10 |              0.12547 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4042 | 15-20%                  |                10 |              0.14042 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4115 | >20%                    |                 2 |              0.70575 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4813 | >20%                    |                10 |              0.14813 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4902 | >20%                    |                 5 |              0.29804 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.5033 |                         |                 5 |              0.30066 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5346 | 15-20%                  |                 5 |              0.30692 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5565 | 5-10%                   |                 2 |              0.77825 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.7867 |                         |                 2 |              0.89335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9801 | >20%                    |                10 |              0.19801 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.0942 |                         |                10 |              0.20942 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1765 | >20%                    |                10 |              0.31765 |