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

Data correct as of 2025-04-11 01:46:51.120245, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1214 | 10-15%                  |                 2 |              0.0607  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1231 | 15-20%                  |                 2 |              0.06155 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1289 | 5-10%                   |                 5 |              0.02578 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1717 | 10-15%                  |                 5 |              0.03434 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1745 | >20%                    |                 2 |              0.08725 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2013 | <5%                     |                 2 |              0.10065 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2079 | 15-20%                  |                 5 |              0.04158 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2085 | 5-10%                   |                 5 |              0.0417  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | >20%                    |                 2 |              0.10915 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2282 | 15-20%                  |                 2 |              0.1141  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2321 | 15-20%                  |                10 |              0.02321 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | 15-20%                  |                 2 |              0.12075 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | >20%                    |                 2 |              0.12175 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2577 | 10-15%                  |                10 |              0.02577 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2591 | 15-20%                  |                10 |              0.02591 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | 15-20%                  |                 2 |              0.13465 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2735 | >20%                    |                 2 |              0.13675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | <5%                     |                 2 |              0.13725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2755 | 10-15%                  |                 2 |              0.13775 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | 5-10%                   |                 2 |              0.138   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | 5-10%                   |                 2 |              0.14025 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | <5%                     |                 2 |              0.1426  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.293  | >20%                    |                 2 |              0.1465  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | 10-15%                  |                 2 |              0.14935 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3011 | <5%                     |                 2 |              0.15055 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3031 | 10-15%                  |                 5 |              0.06062 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | 15-20%                  |                 2 |              0.15535 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3129 | 10-15%                  |                 2 |              0.15645 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3141 | 10-15%                  |                 5 |              0.06282 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3143 | <5%                     |                10 |              0.03143 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3188 | 10-15%                  |                10 |              0.03188 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3223 | 15-20%                  |                10 |              0.03223 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | >20%                    |                 2 |              0.16655 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3376 | 5-10%                   |                 5 |              0.06752 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3434 | >20%                    |                 5 |              0.06868 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3483 | 10-15%                  |                 2 |              0.17415 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3508 | >20%                    |                10 |              0.03508 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3528 | >20%                    |                 2 |              0.1764  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.355  | >20%                    |                 2 |              0.1775  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3722 | >20%                    |                10 |              0.03722 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3762 | >20%                    |                 2 |              0.1881  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3815 | <5%                     |                 2 |              0.19075 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3848 | 10-15%                  |                 5 |              0.07696 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3859 | >20%                    |                 2 |              0.19295 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3909 | >20%                    |                 5 |              0.07818 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3931 | <5%                     |                 2 |              0.19655 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3967 | >20%                    |                 2 |              0.19835 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4013 | >20%                    |                 2 |              0.20065 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.402  | <5%                     |                 2 |              0.201   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4045 | >20%                    |                10 |              0.04045 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4048 | 15-20%                  |                 2 |              0.2024  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4113 | <5%                     |                 2 |              0.20565 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4158 | >20%                    |                 5 |              0.08316 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4173 | 15-20%                  |                 2 |              0.20865 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | 10-15%                  |                 5 |              0.08414 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4253 | 10-15%                  |                10 |              0.04253 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4298 | >20%                    |                 2 |              0.2149  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4379 | 10-15%                  |                 5 |              0.08758 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4404 | <5%                     |                 2 |              0.2202  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4407 | >20%                    |                 5 |              0.08814 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4412 | >20%                    |                 2 |              0.2206  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4432 | >20%                    |                 5 |              0.08864 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4458 | 5-10%                   |                 5 |              0.08916 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | >20%                    |                 5 |              0.09124 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4598 | 5-10%                   |                 2 |              0.2299  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4614 | 5-10%                   |                10 |              0.04614 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | >20%                    |                 5 |              0.09264 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4639 | >20%                    |                 2 |              0.23195 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | 10-15%                  |                 2 |              0.2346  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | >20%                    |                 5 |              0.09474 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | <5%                     |                 5 |              0.09488 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.482  | 5-10%                   |                 5 |              0.0964  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4843 | >20%                    |                 5 |              0.09686 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4905 | >20%                    |                 5 |              0.0981  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4996 | >20%                    |                 2 |              0.2498  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4998 | 10-15%                  |                 5 |              0.09996 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.502  | <5%                     |                 5 |              0.1004  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5083 | 5-10%                   |                 5 |              0.10166 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5102 | 15-20%                  |                 5 |              0.10204 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5113 | >20%                    |                 2 |              0.25565 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5118 | >20%                    |                10 |              0.05118 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5229 | >20%                    |                 5 |              0.10458 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5264 | >20%                    |                 2 |              0.2632  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5303 | 15-20%                  |                 2 |              0.26515 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5343 | <5%                     |                10 |              0.05343 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5438 | 5-10%                   |                 5 |              0.10876 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5454 | >20%                    |                 5 |              0.10908 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5494 | >20%                    |                 2 |              0.2747  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5556 | 15-20%                  |                 2 |              0.2778  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5771 | 15-20%                  |                 5 |              0.11542 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5909 | 5-10%                   |                 2 |              0.29545 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5987 | 10-15%                  |                 5 |              0.11974 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5996 | >20%                    |                 5 |              0.11992 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5998 | <5%                     |                 5 |              0.11996 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6031 | >20%                    |                 2 |              0.30155 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6058 | >20%                    |                10 |              0.06058 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6071 | >20%                    |                 2 |              0.30355 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6182 | 5-10%                   |                 5 |              0.12364 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6214 | <5%                     |                 5 |              0.12428 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.623  | 15-20%                  |                 5 |              0.1246  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6238 | >20%                    |                 5 |              0.12476 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6291 | >20%                    |                 5 |              0.12582 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6388 | 10-15%                  |                10 |              0.06388 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6431 | >20%                    |                10 |              0.06431 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6488 | 10-15%                  |                 5 |              0.12976 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6513 | >20%                    |                 5 |              0.13026 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6527 | >20%                    |                 5 |              0.13054 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6601 | >20%                    |                 5 |              0.13202 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6609 | >20%                    |                 2 |              0.33045 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6629 | >20%                    |                10 |              0.06629 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6636 | <5%                     |                 5 |              0.13272 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6711 | <5%                     |                10 |              0.06711 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6753 | 10-15%                  |                 2 |              0.33765 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6823 | 10-15%                  |                 5 |              0.13646 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6827 | 5-10%                   |                 5 |              0.13654 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6869 | >20%                    |                10 |              0.06869 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.696  | >20%                    |                 2 |              0.348   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7011 | >20%                    |                10 |              0.07011 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7074 | <5%                     |                10 |              0.07074 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7083 | >20%                    |                 5 |              0.14166 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | >20%                    |                10 |              0.07112 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.718  | 10-15%                  |                10 |              0.0718  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7441 | <5%                     |                10 |              0.07441 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7548 | 15-20%                  |                 5 |              0.15096 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7556 | >20%                    |                10 |              0.07556 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7575 | >20%                    |                 5 |              0.1515  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7634 | 10-15%                  |                10 |              0.07634 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7663 | <5%                     |                 5 |              0.15326 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7728 | >20%                    |                 5 |              0.15456 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7744 | 5-10%                   |                10 |              0.07744 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7744 | <5%                     |                10 |              0.07744 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7927 | <5%                     |                10 |              0.07927 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7938 | >20%                    |                 2 |              0.3969  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7993 | >20%                    |                10 |              0.07993 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8023 | <5%                     |                10 |              0.08023 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8054 | 5-10%                   |                10 |              0.08054 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.816  | 10-15%                  |                10 |              0.0816  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8204 | >20%                    |                 2 |              0.4102  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8272 | 10-15%                  |                10 |              0.08272 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8313 | 15-20%                  |                 5 |              0.16626 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8327 | 15-20%                  |                10 |              0.08327 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8402 | >20%                    |                 2 |              0.4201  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8506 | >20%                    |                10 |              0.08506 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8537 | 15-20%                  |                10 |              0.08537 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8546 | >20%                    |                10 |              0.08546 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8665 | <5%                     |                10 |              0.08665 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8731 | <5%                     |                10 |              0.08731 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8768 | <5%                     |                 2 |              0.4384  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8814 | <5%                     |                10 |              0.08814 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8834 | >20%                    |                10 |              0.08834 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8897 | >20%                    |                10 |              0.08897 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8973 | >20%                    |                10 |              0.08973 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8977 | 15-20%                  |                 5 |              0.17954 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9387 | 15-20%                  |                10 |              0.09387 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9533 | 10-15%                  |                10 |              0.09533 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9679 | >20%                    |                 5 |              0.19358 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9932 | 5-10%                   |                10 |              0.09932 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0094 | >20%                    |                 5 |              0.20188 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0409 | >20%                    |                10 |              0.10409 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1008 | <5%                     |                10 |              0.11008 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1117 | 10-15%                  |                 2 |              0.55585 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1218 | <5%                     |                10 |              0.11218 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1636 | 15-20%                  |                10 |              0.11636 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1657 | 15-20%                  |                10 |              0.11657 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1828 | >20%                    |                10 |              0.11828 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2383 | <5%                     |                 5 |              0.24766 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2608 | >20%                    |                 5 |              0.25216 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2874 | >20%                    |                 5 |              0.25748 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3124 | 15-20%                  |                10 |              0.13124 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3284 | >20%                    |                10 |              0.13284 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3336 | 5-10%                   |                 2 |              0.6668  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4554 | >20%                    |                 2 |              0.7277  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6321 | >20%                    |                10 |              0.16321 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6553 | >20%                    |                10 |              0.16553 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8469 | 15-20%                  |                10 |              0.18469 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8481 | <5%                     |                10 |              0.18481 |