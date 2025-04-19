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

Data correct as of 2025-04-19 01:43:14.120716, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1102 | 15-20%                  |                 2 |              0.0551  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1138 | 10-15%                  |                 2 |              0.0569  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1446 | >20%                    |                 2 |              0.0723  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1614 | 10-15%                  |                 5 |              0.03228 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1721 | >20%                    |                 2 |              0.08605 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1879 | 15-20%                  |                 5 |              0.03758 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1917 | <5%                     |                 2 |              0.09585 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2056 | 5-10%                   |                 5 |              0.04112 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2358 | 15-20%                  |                 2 |              0.1179  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2455 | 15-20%                  |                10 |              0.02455 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | >20%                    |                 2 |              0.1246  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | 10-15%                  |                 2 |              0.12865 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2761 | 5-10%                   |                 2 |              0.13805 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | 10-15%                  |                 2 |              0.1398  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2816 | 5-10%                   |                 5 |              0.05632 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | <5%                     |                 2 |              0.14205 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2845 | 10-15%                  |                10 |              0.02845 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | 15-20%                  |                 2 |              0.14255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | <5%                     |                 2 |              0.14315 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | 10-15%                  |                 2 |              0.1471  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | <5%                     |                 2 |              0.14735 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2949 | 15-20%                  |                 2 |              0.14745 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2976 | 10-15%                  |                 5 |              0.05952 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | 5-10%                   |                 2 |              0.14995 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3015 | 10-15%                  |                10 |              0.03015 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3042 | <5%                     |                10 |              0.03042 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3134 | >20%                    |                 2 |              0.1567  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3145 | >20%                    |                 2 |              0.15725 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3156 | 10-15%                  |                 5 |              0.06312 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3206 | 10-15%                  |                 2 |              0.1603  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3264 | <5%                     |                10 |              0.03264 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3325 | 10-15%                  |                10 |              0.03325 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3411 | >20%                    |                 2 |              0.17055 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3434 | >20%                    |                 5 |              0.06868 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3466 | 15-20%                  |                 2 |              0.1733  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3478 | >20%                    |                 5 |              0.06956 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3576 | >20%                    |                 2 |              0.1788  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3631 | >20%                    |                 2 |              0.18155 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3656 | >20%                    |                 2 |              0.1828  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | <5%                     |                 2 |              0.18415 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3799 | >20%                    |                10 |              0.03799 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.383  | <5%                     |                 2 |              0.1915  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3867 | 10-15%                  |                 5 |              0.07734 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3948 | <5%                     |                 2 |              0.1974  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3959 | >20%                    |                 2 |              0.19795 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3976 | >20%                    |                 2 |              0.1988  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4028 | >20%                    |                10 |              0.04028 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4095 | 10-15%                  |                 5 |              0.0819  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4156 | 10-15%                  |                 2 |              0.2078  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.421  | >20%                    |                 5 |              0.0842  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.421  | 15-20%                  |                 2 |              0.2105  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4215 | >20%                    |                 5 |              0.0843  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | >20%                    |                 5 |              0.08448 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4233 | 15-20%                  |                 2 |              0.21165 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4261 | >20%                    |                 5 |              0.08522 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4332 | >20%                    |                 2 |              0.2166  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4336 | 10-15%                  |                10 |              0.04336 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4348 | 5-10%                   |                10 |              0.04348 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4398 | >20%                    |                 5 |              0.08796 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4402 | >20%                    |                 5 |              0.08804 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4404 | <5%                     |                 2 |              0.2202  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4415 | >20%                    |                10 |              0.04415 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4468 | 15-20%                  |                10 |              0.04468 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4477 | 5-10%                   |                 5 |              0.08954 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4505 | >20%                    |                 5 |              0.0901  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4522 | <5%                     |                 5 |              0.09044 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4537 | 10-15%                  |                 5 |              0.09074 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4553 | >20%                    |                10 |              0.04553 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4633 | <5%                     |                 2 |              0.23165 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4636 | >20%                    |                 2 |              0.2318  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.467  | >20%                    |                 5 |              0.0934  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | 5-10%                   |                 5 |              0.09486 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4746 | >20%                    |                 5 |              0.09492 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4752 | >20%                    |                 2 |              0.2376  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4762 | >20%                    |                 5 |              0.09524 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4815 | <5%                     |                 5 |              0.0963  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4972 | >20%                    |                 2 |              0.2486  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4992 | 5-10%                   |                 2 |              0.2496  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4993 | >20%                    |                 2 |              0.24965 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.503  | >20%                    |                 5 |              0.1006  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5079 | >20%                    |                 2 |              0.25395 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5134 | 5-10%                   |                 5 |              0.10268 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5142 | 15-20%                  |                 5 |              0.10284 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5253 | 15-20%                  |                 2 |              0.26265 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.541  | 10-15%                  |                 5 |              0.1082  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5434 | 15-20%                  |                 2 |              0.2717  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5454 | 5-10%                   |                 5 |              0.10908 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5546 | 5-10%                   |                 5 |              0.11092 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5652 | >20%                    |                 5 |              0.11304 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5656 | 5-10%                   |                 2 |              0.2828  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5788 | >20%                    |                 2 |              0.2894  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5811 | 10-15%                  |                10 |              0.05811 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5814 | >20%                    |                 5 |              0.11628 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.583  | 15-20%                  |                 5 |              0.1166  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5848 | >20%                    |                 2 |              0.2924  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5892 | 15-20%                  |                 5 |              0.11784 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5943 | >20%                    |                 5 |              0.11886 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5969 | >20%                    |                 2 |              0.29845 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6051 | >20%                    |                10 |              0.06051 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6066 | <5%                     |                 5 |              0.12132 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6103 | >20%                    |                 2 |              0.30515 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6103 | >20%                    |                 2 |              0.30515 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.618  | 10-15%                  |                 5 |              0.1236  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6236 | >20%                    |                 5 |              0.12472 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6534 | >20%                    |                 5 |              0.13068 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6572 | >20%                    |                 2 |              0.3286  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6586 | <5%                     |                 5 |              0.13172 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6595 | >20%                    |                 2 |              0.32975 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6613 | 5-10%                   |                10 |              0.06613 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6639 | >20%                    |                 5 |              0.13278 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6666 | >20%                    |                10 |              0.06666 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6679 | <5%                     |                 5 |              0.13358 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6715 | 10-15%                  |                 5 |              0.1343  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6745 | 10-15%                  |                 2 |              0.33725 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | >20%                    |                10 |              0.06795 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6819 | 10-15%                  |                 5 |              0.13638 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6857 | >20%                    |                10 |              0.06857 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6914 | >20%                    |                 5 |              0.13828 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6958 | >20%                    |                10 |              0.06958 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6967 | >20%                    |                 5 |              0.13934 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7019 | >20%                    |                 2 |              0.35095 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7047 | <5%                     |                10 |              0.07047 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7074 | <5%                     |                10 |              0.07074 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7345 | <5%                     |                 5 |              0.1469  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.752  | <5%                     |                10 |              0.0752  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7567 | 5-10%                   |                 5 |              0.15134 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7627 | >20%                    |                10 |              0.07627 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7663 | <5%                     |                10 |              0.07663 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7686 | 15-20%                  |                 5 |              0.15372 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7699 | >20%                    |                 5 |              0.15398 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7704 | >20%                    |                 5 |              0.15408 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7746 | 15-20%                  |                 5 |              0.15492 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7793 | >20%                    |                10 |              0.07793 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7837 | 5-10%                   |                10 |              0.07837 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7948 | <5%                     |                10 |              0.07948 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8022 | 15-20%                  |                10 |              0.08022 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8107 | <5%                     |                10 |              0.08107 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8138 | 10-15%                  |                10 |              0.08138 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8271 | 10-15%                  |                10 |              0.08271 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8322 | >20%                    |                10 |              0.08322 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8382 | >20%                    |                 2 |              0.4191  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8391 | 10-15%                  |                10 |              0.08391 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8396 | 15-20%                  |                10 |              0.08396 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8425 | 15-20%                  |                10 |              0.08425 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8599 | >20%                    |                10 |              0.08599 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8683 | <5%                     |                10 |              0.08683 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.879  | >20%                    |                 2 |              0.4395  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.879  | <5%                     |                10 |              0.0879  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9099 | >20%                    |                10 |              0.09099 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9131 | 10-15%                  |                10 |              0.09131 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9138 | >20%                    |                10 |              0.09138 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9159 | 15-20%                  |                 5 |              0.18318 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9217 | <5%                     |                10 |              0.09217 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9235 | >20%                    |                10 |              0.09235 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9441 | >20%                    |                10 |              0.09441 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9529 | >20%                    |                 5 |              0.19058 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9709 | 5-10%                   |                10 |              0.09709 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0113 | 10-15%                  |                10 |              0.10113 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0424 | >20%                    |                10 |              0.10424 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0701 | >20%                    |                 5 |              0.21402 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0851 | <5%                     |                10 |              0.10851 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.086  | <5%                     |                 2 |              0.543   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0949 | >20%                    |                 5 |              0.21898 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1115 | <5%                     |                10 |              0.11115 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1201 | 10-15%                  |                 2 |              0.56005 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1668 | 15-20%                  |                10 |              0.11668 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2092 | 15-20%                  |                10 |              0.12092 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2124 | >20%                    |                 5 |              0.24248 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.236  | <5%                     |                 5 |              0.2472  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2845 | >20%                    |                10 |              0.12845 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2898 | >20%                    |                10 |              0.12898 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.29   | 5-10%                   |                 2 |              0.645   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2961 | >20%                    |                 5 |              0.25922 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3939 | 15-20%                  |                10 |              0.13939 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4226 | >20%                    |                 2 |              0.7113  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6444 | >20%                    |                10 |              0.16444 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6601 | >20%                    |                10 |              0.16601 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8569 | <5%                     |                10 |              0.18569 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8911 | 15-20%                  |                10 |              0.18911 |