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

Data correct as of 2025-05-24 01:48:49.986936, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1694 | >20%                    |                 2 |              0.0847  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1976 | 5-10%                   |                 5 |              0.03952 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2103 | >20%                    |                 2 |              0.10515 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2171 | >20%                    |                 2 |              0.10855 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2199 | >20%                    |                 2 |              0.10995 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | >20%                    |                 2 |              0.117   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2391 | >20%                    |                 5 |              0.04782 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2447 | 5-10%                   |                 2 |              0.12235 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2493 | 10-15%                  |                 2 |              0.12465 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2558 | 15-20%                  |                 2 |              0.1279  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.256  | <5%                     |                 2 |              0.128   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2594 | 15-20%                  |                 2 |              0.1297  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | >20%                    |                 2 |              0.13195 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2646 | >20%                    |                 2 |              0.1323  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2734 | 10-15%                  |                 2 |              0.1367  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2831 | >20%                    |                10 |              0.02831 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | >20%                    |                 2 |              0.14255 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | 15-20%                  |                 2 |              0.14525 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2956 | <5%                     |                10 |              0.02956 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2965 | <5%                     |                 2 |              0.14825 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3023 | >20%                    |                 2 |              0.15115 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3037 | >20%                    |                10 |              0.03037 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | 15-20%                  |                 2 |              0.1546  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | 15-20%                  |                 2 |              0.1563  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3175 | 15-20%                  |                 5 |              0.0635  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3177 | >20%                    |                 5 |              0.06354 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3236 | 15-20%                  |                 2 |              0.1618  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3304 | >20%                    |                10 |              0.03304 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3311 | >20%                    |                 5 |              0.06622 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3338 | >20%                    |                 2 |              0.1669  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | >20%                    |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3436 | >20%                    |                10 |              0.03436 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.348  | 10-15%                  |                 5 |              0.0696  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3517 | >20%                    |                 5 |              0.07034 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | 15-20%                  |                 2 |              0.17615 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3529 | 10-15%                  |                 5 |              0.07058 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3574 | >20%                    |                 2 |              0.1787  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | >20%                    |                 2 |              0.1804  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3643 | 5-10%                   |                 2 |              0.18215 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3685 | >20%                    |                 5 |              0.0737  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3696 | 5-10%                   |                 2 |              0.1848  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3698 | >20%                    |                 5 |              0.07396 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3768 | 15-20%                  |                 2 |              0.1884  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3892 | >20%                    |                 2 |              0.1946  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3937 | 15-20%                  |                 2 |              0.19685 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3944 | >20%                    |                 2 |              0.1972  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3964 | <5%                     |                 2 |              0.1982  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4024 | >20%                    |                10 |              0.04024 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4057 | <5%                     |                 5 |              0.08114 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 10-15%                  |                 2 |              0.2063  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4128 | >20%                    |                 5 |              0.08256 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | 15-20%                  |                10 |              0.04161 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4212 | <5%                     |                 5 |              0.08424 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4282 | 5-10%                   |                 5 |              0.08564 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4312 | >20%                    |                 2 |              0.2156  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4388 | 15-20%                  |                 5 |              0.08776 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4469 | <5%                     |                 2 |              0.22345 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4493 | >20%                    |                 2 |              0.22465 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4509 | 15-20%                  |                 5 |              0.09018 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.456  | 15-20%                  |                 5 |              0.0912  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4579 | >20%                    |                 2 |              0.22895 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4605 | >20%                    |                 2 |              0.23025 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | >20%                    |                 5 |              0.09276 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4697 | 10-15%                  |                 5 |              0.09394 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.47   | 15-20%                  |                 5 |              0.094   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4706 | >20%                    |                10 |              0.04706 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4711 | 15-20%                  |                10 |              0.04711 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4735 | >20%                    |                10 |              0.04735 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4757 | >20%                    |                 5 |              0.09514 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4777 | >20%                    |                 2 |              0.23885 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4784 | >20%                    |                 2 |              0.2392  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4814 | >20%                    |                 5 |              0.09628 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4832 | >20%                    |                 5 |              0.09664 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4854 | >20%                    |                 5 |              0.09708 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.488  | >20%                    |                 2 |              0.244   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4882 | >20%                    |                 5 |              0.09764 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | <5%                     |                 5 |              0.09902 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4965 | 15-20%                  |                10 |              0.04965 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5007 | 15-20%                  |                 2 |              0.25035 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5026 | 15-20%                  |                 5 |              0.10052 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5071 | 10-15%                  |                 5 |              0.10142 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | >20%                    |                 5 |              0.10284 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5184 | >20%                    |                 2 |              0.2592  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5186 | >20%                    |                 2 |              0.2593  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5325 | 5-10%                   |                 5 |              0.1065  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5362 | >20%                    |                 2 |              0.2681  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5499 | 10-15%                  |                 2 |              0.27495 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5556 | <5%                     |                 5 |              0.11112 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5562 | >20%                    |                10 |              0.05562 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5577 | >20%                    |                 5 |              0.11154 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5605 | >20%                    |                 5 |              0.1121  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5611 | >20%                    |                 2 |              0.28055 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5668 | >20%                    |                 5 |              0.11336 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5678 | >20%                    |                 5 |              0.11356 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5686 | >20%                    |                 2 |              0.2843  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5751 | 5-10%                   |                 5 |              0.11502 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5786 | >20%                    |                 5 |              0.11572 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5835 | 10-15%                  |                10 |              0.05835 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5905 | >20%                    |                 5 |              0.1181  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6059 | 5-10%                   |                10 |              0.06059 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6093 | 10-15%                  |                 5 |              0.12186 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.612  | 5-10%                   |                 2 |              0.306   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6121 | >20%                    |                 2 |              0.30605 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6129 | 10-15%                  |                 2 |              0.30645 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6239 | 10-15%                  |                10 |              0.06239 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6239 | 5-10%                   |                 2 |              0.31195 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6657 | >20%                    |                 2 |              0.33285 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6676 | >20%                    |                 2 |              0.3338  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6729 | >20%                    |                 5 |              0.13458 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6731 | 15-20%                  |                 5 |              0.13462 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6733 | >20%                    |                10 |              0.06733 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.684  | <5%                     |                10 |              0.0684  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6954 | 10-15%                  |                 5 |              0.13908 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7023 | <5%                     |                 5 |              0.14046 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7096 | >20%                    |                10 |              0.07096 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.716  | <5%                     |                10 |              0.0716  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7191 | 10-15%                  |                 5 |              0.14382 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7299 | >20%                    |                 5 |              0.14598 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | <5%                     |                10 |              0.073   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7325 | >20%                    |                10 |              0.07325 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7403 | >20%                    |                10 |              0.07403 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7443 | >20%                    |                 5 |              0.14886 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7466 | 10-15%                  |                10 |              0.07466 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7541 | >20%                    |                 5 |              0.15082 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7683 | >20%                    |                10 |              0.07683 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7782 | 10-15%                  |                10 |              0.07782 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7806 | >20%                    |                10 |              0.07806 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7904 | <5%                     |                 5 |              0.15808 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7936 | >20%                    |                 5 |              0.15872 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8081 | >20%                    |                10 |              0.08081 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8171 | 5-10%                   |                10 |              0.08171 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8177 | 10-15%                  |                 5 |              0.16354 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8206 | 15-20%                  |                10 |              0.08206 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8213 | 15-20%                  |                10 |              0.08213 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.831  | >20%                    |                10 |              0.0831  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8711 | >20%                    |                10 |              0.08711 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8834 | >20%                    |                10 |              0.08834 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8872 | <5%                     |                10 |              0.08872 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9    | >20%                    |                10 |              0.09    |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9091 | 10-15%                  |                 5 |              0.18182 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.919  | >20%                    |                10 |              0.0919  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.925  | >20%                    |                10 |              0.0925  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9251 | >20%                    |                10 |              0.09251 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9431 | >20%                    |                 5 |              0.18862 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.95   | 5-10%                   |                 2 |              0.475   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9515 | >20%                    |                10 |              0.09515 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9575 | >20%                    |                10 |              0.09575 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9648 | >20%                    |                 2 |              0.4824  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9667 | >20%                    |                 2 |              0.48335 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9671 | <5%                     |                10 |              0.09671 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9936 | 10-15%                  |                 5 |              0.19872 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0143 | >20%                    |                 2 |              0.50715 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0289 | >20%                    |                 5 |              0.20578 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0409 | 15-20%                  |                10 |              0.10409 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0491 | 15-20%                  |                10 |              0.10491 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0613 | >20%                    |                10 |              0.10613 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0871 | <5%                     |                10 |              0.10871 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1175 | 5-10%                   |                10 |              0.11175 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1221 | <5%                     |                 2 |              0.56105 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1474 | >20%                    |                 5 |              0.22948 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1818 | 5-10%                   |                10 |              0.11818 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1931 | 15-20%                  |                10 |              0.11931 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2294 | 10-15%                  |                10 |              0.12294 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2514 | 15-20%                  |                10 |              0.12514 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2729 | >20%                    |                10 |              0.12729 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3285 | >20%                    |                10 |              0.13285 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3821 | >20%                    |                 5 |              0.27642 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3826 | <5%                     |                 5 |              0.27652 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4458 | >20%                    |                 2 |              0.7229  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4606 | >20%                    |                10 |              0.14606 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4663 | 10-15%                  |                10 |              0.14663 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5327 | >20%                    |                10 |              0.15327 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9598 | <5%                     |                10 |              0.19598 |