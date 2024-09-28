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

Data correct as of 2024-09-28 01:36:02.399829, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1005 | <5%                     |                 2 |              0.05025 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.118  |                         |                 2 |              0.059   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1267 |                         |                 2 |              0.06335 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1276 |                         |                 2 |              0.0638  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1307 | 5-10%                   |                 2 |              0.06535 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1522 |                         |                 2 |              0.0761  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1572 |                         |                 5 |              0.03144 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.181  |                         |                 5 |              0.0362  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1819 |                         |                 5 |              0.03638 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2029 |                         |                 5 |              0.04058 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2054 | 15-20%                  |                 2 |              0.1027  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2104 | 5-10%                   |                 2 |              0.1052  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2176 | <5%                     |                 2 |              0.1088  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2339 | <5%                     |                 2 |              0.11695 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2352 | <5%                     |                 2 |              0.1176  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2362 |                         |                10 |              0.02362 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | 15-20%                  |                 2 |              0.1187  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2596 | 15-20%                  |                 5 |              0.05192 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2627 | <5%                     |                 5 |              0.05254 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2699 | <5%                     |                 2 |              0.13495 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2724 | <5%                     |                 2 |              0.1362  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.274  |                         |                10 |              0.0274  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2744 |                         |                10 |              0.02744 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2754 | 15-20%                  |                 5 |              0.05508 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | <5%                     |                 2 |              0.14615 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2926 | <5%                     |                 2 |              0.1463  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2931 | 10-15%                  |                 2 |              0.14655 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | >20%                    |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | <5%                     |                 2 |              0.1471  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3043 | >20%                    |                 5 |              0.06086 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | 5-10%                   |                 2 |              0.15545 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.3119 |                         |                10 |              0.03119 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3256 | 15-20%                  |                10 |              0.03256 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3357 | <5%                     |                10 |              0.03357 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.345  | <5%                     |                 5 |              0.069   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.35   | <5%                     |                 2 |              0.175   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3509 | 10-15%                  |                 2 |              0.17545 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3594 | <5%                     |                 2 |              0.1797  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3666 | <5%                     |                 2 |              0.1833  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3669 | 5-10%                   |                 5 |              0.07338 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3671 | <5%                     |                 2 |              0.18355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3707 | <5%                     |                10 |              0.03707 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | <5%                     |                 5 |              0.07642 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3902 | 5-10%                   |                 5 |              0.07804 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.394  | >20%                    |                 2 |              0.197   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4044 | >20%                    |                 2 |              0.2022  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4083 | 5-10%                   |                 2 |              0.20415 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4283 | <5%                     |                 2 |              0.21415 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4312 | 15-20%                  |                 5 |              0.08624 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4319 | >20%                    |                 2 |              0.21595 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4338 | >20%                    |                 5 |              0.08676 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4423 | <5%                     |                 2 |              0.22115 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4483 | <5%                     |                 5 |              0.08966 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | <5%                     |                 5 |              0.0901  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4553 | >20%                    |                 2 |              0.22765 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4561 | 5-10%                   |                 5 |              0.09122 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4589 | 10-15%                  |                 2 |              0.22945 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.471  | 10-15%                  |                10 |              0.0471  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4775 | <5%                     |                 5 |              0.0955  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4823 | 15-20%                  |                 5 |              0.09646 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4837 | <5%                     |                 5 |              0.09674 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.485  | >20%                    |                 2 |              0.2425  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4861 | 15-20%                  |                 2 |              0.24305 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.488  | 5-10%                   |                 5 |              0.0976  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5011 | 5-10%                   |                 5 |              0.10022 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5094 | >20%                    |                 5 |              0.10188 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | 10-15%                  |                 5 |              0.1032  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5254 | <5%                     |                 5 |              0.10508 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5355 | 15-20%                  |                 2 |              0.26775 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5398 | >20%                    |                 5 |              0.10796 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5419 | <5%                     |                 5 |              0.10838 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5465 | <5%                     |                 5 |              0.1093  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5522 | 5-10%                   |                 5 |              0.11044 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5567 | >20%                    |                 2 |              0.27835 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5653 | >20%                    |                10 |              0.05653 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5913 | 5-10%                   |                 5 |              0.11826 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6064 | >20%                    |                 5 |              0.12128 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6112 | 15-20%                  |                 2 |              0.3056  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6117 | >20%                    |                 5 |              0.12234 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.617  | >20%                    |                 5 |              0.1234  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6292 | >20%                    |                10 |              0.06292 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6528 | 5-10%                   |                10 |              0.06528 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6622 | >20%                    |                10 |              0.06622 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6873 | >20%                    |                 5 |              0.13746 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6959 | <5%                     |                10 |              0.06959 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7058 | <5%                     |                10 |              0.07058 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7073 | >20%                    |                 5 |              0.14146 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7081 | >20%                    |                 2 |              0.35405 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7201 | <5%                     |                10 |              0.07201 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7624 | 15-20%                  |                10 |              0.07624 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7713 | >20%                    |                 5 |              0.15426 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7733 | <5%                     |                10 |              0.07733 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7796 | 10-15%                  |                10 |              0.07796 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7821 | 15-20%                  |                10 |              0.07821 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7851 | 10-15%                  |                10 |              0.07851 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8132 | >20%                    |                10 |              0.08132 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8151 | 5-10%                   |                 2 |              0.40755 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8245 | >20%                    |                10 |              0.08245 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8266 | >20%                    |                10 |              0.08266 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8538 | >20%                    |                 5 |              0.17076 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8648 | <5%                     |                 2 |              0.4324  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8802 | <5%                     |                10 |              0.08802 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8832 | 5-10%                   |                10 |              0.08832 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8868 | >20%                    |                 5 |              0.17736 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8877 | >20%                    |                10 |              0.08877 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8923 | >20%                    |                10 |              0.08923 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9025 | >20%                    |                10 |              0.09025 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9211 | <5%                     |                10 |              0.09211 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9233 | 5-10%                   |                10 |              0.09233 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9514 | 5-10%                   |                 5 |              0.19028 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0205 | >20%                    |                10 |              0.10205 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0208 | 10-15%                  |                10 |              0.10208 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0291 | 5-10%                   |                10 |              0.10291 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0995 | >20%                    |                10 |              0.10995 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1012 | 10-15%                  |                 5 |              0.22024 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1097 | <5%                     |                 2 |              0.55485 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1513 | >20%                    |                10 |              0.11513 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2024 | >20%                    |                10 |              0.12024 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3491 | 15-20%                  |                10 |              0.13491 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4775 | >20%                    |                10 |              0.14775 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.783  | 5-10%                   |                10 |              0.1783  |