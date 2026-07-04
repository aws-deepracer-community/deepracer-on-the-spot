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

Data correct as of 2026-07-04 03:33:10.635956, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1213 | >20%                    |                 2 |              0.06065 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2087 | 15-20%                  |                 2 |              0.10435 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.221  | >20%                    |                 2 |              0.1105  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2304 | >20%                    |                 2 |              0.1152  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | >20%                    |                 2 |              0.1155  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | >20%                    |                 2 |              0.1248  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.25   | 15-20%                  |                 5 |              0.05    |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2531 | >20%                    |                 2 |              0.12655 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | >20%                    |                 2 |              0.12725 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | >20%                    |                 2 |              0.1298  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2644 | >20%                    |                 2 |              0.1322  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2669 | 10-15%                  |                 2 |              0.13345 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2773 | 15-20%                  |                 2 |              0.13865 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | 15-20%                  |                 2 |              0.13955 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2845 | 5-10%                   |                10 |              0.02845 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2847 | >20%                    |                 2 |              0.14235 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2971 | 15-20%                  |                 5 |              0.05942 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3299 | >20%                    |                 2 |              0.16495 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3325 | >20%                    |                 5 |              0.0665  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3367 | >20%                    |                 5 |              0.06734 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3487 | >20%                    |                 5 |              0.06974 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3487 | >20%                    |                 5 |              0.06974 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3515 | <5%                     |                 2 |              0.17575 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3533 | >20%                    |                 2 |              0.17665 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3577 | 5-10%                   |                10 |              0.03577 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3635 | >20%                    |                 5 |              0.0727  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3668 | >20%                    |                10 |              0.03668 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3685 | 5-10%                   |                10 |              0.03685 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3706 | >20%                    |                 5 |              0.07412 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | >20%                    |                 5 |              0.07502 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3903 | >20%                    |                10 |              0.03903 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3929 | >20%                    |                 2 |              0.19645 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3935 | 10-15%                  |                 2 |              0.19675 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3938 | >20%                    |                 2 |              0.1969  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3982 | 10-15%                  |                 2 |              0.1991  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4154 | >20%                    |                 2 |              0.2077  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4161 | >20%                    |                 5 |              0.08322 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4225 | >20%                    |                10 |              0.04225 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4283 | >20%                    |                10 |              0.04283 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4312 | 10-15%                  |                 2 |              0.2156  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4333 | >20%                    |                 2 |              0.21665 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4349 | >20%                    |                 5 |              0.08698 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4397 | >20%                    |                 5 |              0.08794 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4424 | <5%                     |                 2 |              0.2212  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4425 | <5%                     |                 2 |              0.22125 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4496 | >20%                    |                 2 |              0.2248  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4502 | >20%                    |                10 |              0.04502 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4599 | 15-20%                  |                 2 |              0.22995 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | >20%                    |                 5 |              0.09276 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.471  | 15-20%                  |                 5 |              0.0942  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4722 | >20%                    |                 5 |              0.09444 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4743 | >20%                    |                 5 |              0.09486 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.475  | >20%                    |                 2 |              0.2375  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4756 | >20%                    |                 2 |              0.2378  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4814 | >20%                    |                10 |              0.04814 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | >20%                    |                 5 |              0.09824 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5026 | >20%                    |                 5 |              0.10052 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5037 | >20%                    |                 5 |              0.10074 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5063 | 15-20%                  |                 2 |              0.25315 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5095 | >20%                    |                 2 |              0.25475 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5187 | >20%                    |                10 |              0.05187 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5274 | 15-20%                  |                 2 |              0.2637  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5287 | >20%                    |                 5 |              0.10574 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5335 | 5-10%                   |                 2 |              0.26675 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5407 | >20%                    |                 5 |              0.10814 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5436 | 5-10%                   |                 5 |              0.10872 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5485 | >20%                    |                 5 |              0.1097  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5503 | 10-15%                  |                 5 |              0.11006 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5647 | 15-20%                  |                 5 |              0.11294 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5881 | >20%                    |                 5 |              0.11762 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5998 | >20%                    |                 2 |              0.2999  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6033 | >20%                    |                10 |              0.06033 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6039 | >20%                    |                10 |              0.06039 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6077 | <5%                     |                 5 |              0.12154 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6128 | >20%                    |                 5 |              0.12256 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6137 | 10-15%                  |                10 |              0.06137 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6155 | >20%                    |                 5 |              0.1231  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6263 | >20%                    |                10 |              0.06263 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.634  | >20%                    |                 5 |              0.1268  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6392 |                         |                 2 |              0.3196  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6462 | >20%                    |                 2 |              0.3231  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6505 |                         |                 2 |              0.32525 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.663  | >20%                    |                 2 |              0.3315  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6635 | >20%                    |                 2 |              0.33175 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6646 | >20%                    |                 5 |              0.13292 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6733 | >20%                    |                10 |              0.06733 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6758 | >20%                    |                 2 |              0.3379  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6812 |                         |                10 |              0.06812 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6816 | >20%                    |                 5 |              0.13632 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6825 | >20%                    |                10 |              0.06825 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6832 | >20%                    |                 5 |              0.13664 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6861 | >20%                    |                 5 |              0.13722 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6906 | 5-10%                   |                 5 |              0.13812 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7059 | >20%                    |                 2 |              0.35295 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7088 | >20%                    |                10 |              0.07088 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7239 | 5-10%                   |                 2 |              0.36195 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7242 | 10-15%                  |                 2 |              0.3621  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7245 | <5%                     |                10 |              0.07245 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7316 | >20%                    |                10 |              0.07316 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7542 | >20%                    |                 5 |              0.15084 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7554 | >20%                    |                 5 |              0.15108 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7586 | 15-20%                  |                10 |              0.07586 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7602 | 15-20%                  |                10 |              0.07602 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7683 | 5-10%                   |                10 |              0.07683 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7738 | >20%                    |                10 |              0.07738 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7998 | >20%                    |                 5 |              0.15996 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.805  | >20%                    |                 2 |              0.4025  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8068 | >20%                    |                10 |              0.08068 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8075 | >20%                    |                10 |              0.08075 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8124 | >20%                    |                 5 |              0.16248 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8548 | 5-10%                   |                10 |              0.08548 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8572 | 15-20%                  |                10 |              0.08572 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8601 | >20%                    |                10 |              0.08601 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8604 | >20%                    |                 5 |              0.17208 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8627 | >20%                    |                10 |              0.08627 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8658 | >20%                    |                10 |              0.08658 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8697 | 15-20%                  |                10 |              0.08697 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.895  | >20%                    |                10 |              0.0895  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8975 | 10-15%                  |                 2 |              0.44875 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8991 | 15-20%                  |                10 |              0.08991 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9032 | >20%                    |                 5 |              0.18064 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9152 | 10-15%                  |                 2 |              0.4576  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.924  | >20%                    |                10 |              0.0924  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9293 | >20%                    |                10 |              0.09293 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9413 | >20%                    |                10 |              0.09413 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9623 | >20%                    |                 5 |              0.19246 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9728 | 5-10%                   |                10 |              0.09728 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9757 |                         |                 5 |              0.19514 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9848 | >20%                    |                10 |              0.09848 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9938 | >20%                    |                 5 |              0.19876 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9945 | >20%                    |                10 |              0.09945 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.008  | >20%                    |                10 |              0.1008  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0181 | 15-20%                  |                10 |              0.10181 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.023  | >20%                    |                 5 |              0.2046  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0277 | >20%                    |                10 |              0.10277 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0367 | >20%                    |                 5 |              0.20734 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0696 | >20%                    |                 2 |              0.5348  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.08   | >20%                    |                10 |              0.108   |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1114 |                         |                10 |              0.11114 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1345 | >20%                    |                 5 |              0.2269  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1514 | >20%                    |                 5 |              0.23028 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1606 | >20%                    |                10 |              0.11606 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2097 |                         |                 5 |              0.24194 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2939 | 15-20%                  |                10 |              0.12939 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3113 | 5-10%                   |                 2 |              0.65565 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3492 | >20%                    |                 5 |              0.26984 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4221 | 15-20%                  |                10 |              0.14221 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4459 | >20%                    |                10 |              0.14459 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4484 | 15-20%                  |                 5 |              0.28968 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.535  | >20%                    |                 5 |              0.307   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6658 | 10-15%                  |                10 |              0.16658 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7837 | 5-10%                   |                 2 |              0.89185 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0689 | >20%                    |                10 |              0.20689 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3997 | >20%                    |                10 |              0.23997 |