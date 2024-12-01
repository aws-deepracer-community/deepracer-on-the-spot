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

Data correct as of 2024-12-01 01:59:08.206289, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1356 | >20%                    |                 5 |              0.02712 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2039 | 10-15%                  |                 2 |              0.10195 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2063 | >20%                    |                 5 |              0.04126 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | 5-10%                   |                 2 |              0.1104  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | 5-10%                   |                 2 |              0.1104  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | 15-20%                  |                 2 |              0.1133  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2403 | 5-10%                   |                 2 |              0.12015 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2406 | <5%                     |                 2 |              0.1203  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | <5%                     |                 2 |              0.1217  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2602 | 15-20%                  |                 5 |              0.05204 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | 10-15%                  |                 2 |              0.1375  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2776 | >20%                    |                 5 |              0.05552 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2791 | >20%                    |                 2 |              0.13955 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | 5-10%                   |                 2 |              0.1414  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2832 | <5%                     |                 2 |              0.1416  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | 10-15%                  |                 2 |              0.1495  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3054 | <5%                     |                10 |              0.03054 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3131 | <5%                     |                 5 |              0.06262 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3161 | 5-10%                   |                 2 |              0.15805 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3236 | <5%                     |                 2 |              0.1618  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3282 | <5%                     |                 2 |              0.1641  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3306 | 5-10%                   |                 2 |              0.1653  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.334  | >20%                    |                 2 |              0.167   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3373 | >20%                    |                 2 |              0.16865 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3445 | <5%                     |                 5 |              0.0689  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3492 | >20%                    |                 5 |              0.06984 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3536 | <5%                     |                 5 |              0.07072 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | <5%                     |                 2 |              0.17875 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3611 | 15-20%                  |                 2 |              0.18055 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3708 | <5%                     |                10 |              0.03708 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3738 | >20%                    |                 2 |              0.1869  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3805 | <5%                     |                 2 |              0.19025 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3811 | 15-20%                  |                 2 |              0.19055 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3838 | 15-20%                  |                 5 |              0.07676 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3845 | >20%                    |                 2 |              0.19225 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3989 | >20%                    |                10 |              0.03989 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4045 | <5%                     |                 2 |              0.20225 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4092 | 5-10%                   |                 2 |              0.2046  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.412  | 5-10%                   |                 2 |              0.206   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4133 | 5-10%                   |                 2 |              0.20665 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4236 | 5-10%                   |                 5 |              0.08472 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4372 | >20%                    |                10 |              0.04372 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4442 | 10-15%                  |                 2 |              0.2221  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4465 | <5%                     |                 2 |              0.22325 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4521 | 15-20%                  |                 5 |              0.09042 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4533 | >20%                    |                 2 |              0.22665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | 10-15%                  |                 5 |              0.09194 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.46   | 15-20%                  |                 5 |              0.092   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.4607 |                         |                 2 |              0.23035 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4651 | >20%                    |                 2 |              0.23255 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | <5%                     |                 5 |              0.0944  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4771 | <5%                     |                 5 |              0.09542 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4822 | <5%                     |                 2 |              0.2411  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4841 | 5-10%                   |                 2 |              0.24205 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4937 | 5-10%                   |                 5 |              0.09874 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | 15-20%                  |                 5 |              0.09902 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5015 | 5-10%                   |                 2 |              0.25075 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5019 | 5-10%                   |                10 |              0.05019 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5152 | 10-15%                  |                 2 |              0.2576  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5156 | 10-15%                  |                 2 |              0.2578  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | 5-10%                   |                 5 |              0.10382 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5261 | >20%                    |                 5 |              0.10522 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | >20%                    |                 5 |              0.10634 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5369 | <5%                     |                 5 |              0.10738 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.54   | <5%                     |                 5 |              0.108   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5454 | >20%                    |                 5 |              0.10908 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5468 | 10-15%                  |                 5 |              0.10936 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5473 | >20%                    |                 2 |              0.27365 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5473 | <5%                     |                 5 |              0.10946 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5477 | 10-15%                  |                 5 |              0.10954 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5586 | 5-10%                   |                 5 |              0.11172 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.562  | 10-15%                  |                10 |              0.0562  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5692 | >20%                    |                 5 |              0.11384 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.5703 |                         |                 5 |              0.11406 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5717 | 10-15%                  |                 5 |              0.11434 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5722 | 15-20%                  |                 2 |              0.2861  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5813 | >20%                    |                10 |              0.05813 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5968 | 5-10%                   |                 2 |              0.2984  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6117 | 10-15%                  |                10 |              0.06117 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6191 | >20%                    |                10 |              0.06191 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6307 | 5-10%                   |                10 |              0.06307 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6363 | 5-10%                   |                10 |              0.06363 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6447 | 5-10%                   |                 5 |              0.12894 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6683 | >20%                    |                 2 |              0.33415 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6709 | <5%                     |                 5 |              0.13418 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6792 | >20%                    |                10 |              0.06792 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6835 | >20%                    |                10 |              0.06835 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6945 | <5%                     |                 5 |              0.1389  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6984 | 10-15%                  |                10 |              0.06984 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7158 | 5-10%                   |                 5 |              0.14316 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7167 | 15-20%                  |                10 |              0.07167 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7181 | 15-20%                  |                 5 |              0.14362 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7193 | 15-20%                  |                 5 |              0.14386 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7302 | <5%                     |                 5 |              0.14604 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7449 | 5-10%                   |                10 |              0.07449 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7531 | <5%                     |                 2 |              0.37655 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7631 | <5%                     |                 5 |              0.15262 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7649 | >20%                    |                10 |              0.07649 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7764 | 5-10%                   |                10 |              0.07764 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7784 | 5-10%                   |                10 |              0.07784 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7807 | <5%                     |                10 |              0.07807 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.793  | 5-10%                   |                 5 |              0.1586  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8213 | 5-10%                   |                10 |              0.08213 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8259 | 10-15%                  |                10 |              0.08259 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8494 | 5-10%                   |                10 |              0.08494 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8513 | >20%                    |                 5 |              0.17026 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8626 | 10-15%                  |                10 |              0.08626 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8815 | >20%                    |                10 |              0.08815 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8935 | 15-20%                  |                10 |              0.08935 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.9167 |                         |                10 |              0.09167 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9286 | 5-10%                   |                10 |              0.09286 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9331 | <5%                     |                10 |              0.09331 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9351 | <5%                     |                 5 |              0.18702 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9506 | <5%                     |                10 |              0.09506 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9743 | 5-10%                   |                10 |              0.09743 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9878 | 5-10%                   |                10 |              0.09878 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0109 | >20%                    |                10 |              0.10109 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | >20%                    |                10 |              0.10313 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0376 | 15-20%                  |                10 |              0.10376 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0406 | 5-10%                   |                10 |              0.10406 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0469 | <5%                     |                10 |              0.10469 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0692 | <5%                     |                10 |              0.10692 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1496 | 10-15%                  |                10 |              0.11496 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1748 | 15-20%                  |                10 |              0.11748 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3619 | >20%                    |                10 |              0.13619 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3977 | >20%                    |                10 |              0.13977 |