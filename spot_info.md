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

Data correct as of 2026-02-03 02:35:17.537836, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1415 | >20%                    |                 2 |              0.07075 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1705 | 5-10%                   |                 2 |              0.08525 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1831 | >20%                    |                 5 |              0.03662 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1835 | >20%                    |                 2 |              0.09175 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1948 | >20%                    |                 2 |              0.0974  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2067 | >20%                    |                 2 |              0.10335 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2081 | >20%                    |                 5 |              0.04162 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2302 | >20%                    |                 2 |              0.1151  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | 10-15%                  |                 2 |              0.1211  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2534 | >20%                    |                 2 |              0.1267  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2597 | 5-10%                   |                10 |              0.02597 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2643 | >20%                    |                 2 |              0.13215 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.266  | 15-20%                  |                 2 |              0.133   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2678 | >20%                    |                 5 |              0.05356 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | >20%                    |                 2 |              0.13895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | >20%                    |                 2 |              0.1391  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2829 | 10-15%                  |                 2 |              0.14145 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2942 | <5%                     |                 5 |              0.05884 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | 10-15%                  |                 2 |              0.14795 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | >20%                    |                 2 |              0.14975 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | >20%                    |                 2 |              0.15315 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3129 | >20%                    |                 2 |              0.15645 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3177 | >20%                    |                 5 |              0.06354 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.321  | 15-20%                  |                 2 |              0.1605  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3261 | >20%                    |                 5 |              0.06522 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3351 | 5-10%                   |                 5 |              0.06702 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3372 | >20%                    |                 5 |              0.06744 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3462 | 15-20%                  |                 2 |              0.1731  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.351  | <5%                     |                 2 |              0.1755  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3582 | 15-20%                  |                 2 |              0.1791  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3686 | 5-10%                   |                10 |              0.03686 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3781 | >20%                    |                 2 |              0.18905 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3788 | >20%                    |                 2 |              0.1894  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3791 | >20%                    |                 2 |              0.18955 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3816 | >20%                    |                 5 |              0.07632 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3848 | <5%                     |                 5 |              0.07696 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3855 | 5-10%                   |                 2 |              0.19275 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3862 | >20%                    |                 5 |              0.07724 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3895 | >20%                    |                 2 |              0.19475 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.39   | 5-10%                   |                 2 |              0.195   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3929 | >20%                    |                 2 |              0.19645 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3944 | >20%                    |                 2 |              0.1972  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3994 | >20%                    |                 5 |              0.07988 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4012 | 15-20%                  |                 2 |              0.2006  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4023 | 10-15%                  |                 5 |              0.08046 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4121 | 15-20%                  |                 2 |              0.20605 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | >20%                    |                 5 |              0.08248 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.413  | <5%                     |                10 |              0.0413  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4141 | >20%                    |                 5 |              0.08282 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4149 | 5-10%                   |                 2 |              0.20745 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4169 | >20%                    |                 2 |              0.20845 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.42   | >20%                    |                 2 |              0.21    |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4216 | >20%                    |                 5 |              0.08432 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | <5%                     |                 2 |              0.2116  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.425  | 5-10%                   |                 2 |              0.2125  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4265 | >20%                    |                 5 |              0.0853  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4268 | 5-10%                   |                 2 |              0.2134  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4376 | 5-10%                   |                 5 |              0.08752 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4429 | >20%                    |                10 |              0.04429 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4431 | <5%                     |                 2 |              0.22155 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4441 | >20%                    |                10 |              0.04441 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.445  | >20%                    |                10 |              0.0445  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4498 | <5%                     |                10 |              0.04498 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.45   | >20%                    |                 2 |              0.225   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | 15-20%                  |                 5 |              0.0914  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4579 | <5%                     |                 2 |              0.22895 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4585 | 5-10%                   |                 5 |              0.0917  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4586 | 15-20%                  |                10 |              0.04586 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4679 | >20%                    |                 2 |              0.23395 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4689 | <5%                     |                 5 |              0.09378 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4691 | >20%                    |                 5 |              0.09382 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4704 | 5-10%                   |                 2 |              0.2352  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4727 | >20%                    |                10 |              0.04727 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | >20%                    |                 2 |              0.23905 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4792 | 15-20%                  |                 5 |              0.09584 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4809 | >20%                    |                 2 |              0.24045 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4841 | >20%                    |                10 |              0.04841 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4858 | >20%                    |                 2 |              0.2429  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4863 | >20%                    |                10 |              0.04863 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.49   | <5%                     |                 5 |              0.098   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.501  | >20%                    |                 5 |              0.1002  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5077 | >20%                    |                10 |              0.05077 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.51   | >20%                    |                 5 |              0.102   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5165 | 15-20%                  |                 5 |              0.1033  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5174 | >20%                    |                 2 |              0.2587  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5282 | >20%                    |                 5 |              0.10564 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5288 | >20%                    |                 5 |              0.10576 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5324 | >20%                    |                 5 |              0.10648 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5324 | >20%                    |                 2 |              0.2662  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5326 | <5%                     |                 5 |              0.10652 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5425 | >20%                    |                 5 |              0.1085  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5457 | <5%                     |                 5 |              0.10914 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5689 | >20%                    |                 5 |              0.11378 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5907 | >20%                    |                 2 |              0.29535 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5925 | 15-20%                  |                 5 |              0.1185  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5943 | >20%                    |                 5 |              0.11886 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5957 | 5-10%                   |                 5 |              0.11914 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6043 | 15-20%                  |                10 |              0.06043 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6087 | <5%                     |                 2 |              0.30435 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6097 | 5-10%                   |                 2 |              0.30485 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | 10-15%                  |                10 |              0.06159 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6198 | >20%                    |                10 |              0.06198 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6209 | <5%                     |                 5 |              0.12418 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6312 | >20%                    |                 5 |              0.12624 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6322 | 10-15%                  |                 5 |              0.12644 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6394 | >20%                    |                 5 |              0.12788 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6582 | 5-10%                   |                 5 |              0.13164 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6649 | 15-20%                  |                10 |              0.06649 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6669 | >20%                    |                 5 |              0.13338 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6735 | 15-20%                  |                 2 |              0.33675 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6752 | 5-10%                   |                 5 |              0.13504 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6766 | >20%                    |                10 |              0.06766 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6837 | <5%                     |                10 |              0.06837 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6854 | >20%                    |                 5 |              0.13708 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6932 | <5%                     |                 5 |              0.13864 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | 10-15%                  |                10 |              0.06987 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7018 | <5%                     |                10 |              0.07018 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7158 | >20%                    |                10 |              0.07158 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7293 | >20%                    |                10 |              0.07293 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7321 | >20%                    |                10 |              0.07321 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7369 | >20%                    |                10 |              0.07369 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7405 | 5-10%                   |                 2 |              0.37025 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7489 | >20%                    |                 5 |              0.14978 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7567 | >20%                    |                 5 |              0.15134 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7582 | >20%                    |                 5 |              0.15164 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7672 | <5%                     |                10 |              0.07672 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7699 | >20%                    |                10 |              0.07699 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7768 | >20%                    |                 2 |              0.3884  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7778 | 5-10%                   |                10 |              0.07778 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7857 | <5%                     |                10 |              0.07857 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.788  | >20%                    |                 5 |              0.1576  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7908 | >20%                    |                 5 |              0.15816 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.804  | <5%                     |                10 |              0.0804  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8063 | 5-10%                   |                10 |              0.08063 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8092 | >20%                    |                 2 |              0.4046  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8095 | <5%                     |                10 |              0.08095 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8252 | 15-20%                  |                10 |              0.08252 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8362 | >20%                    |                 2 |              0.4181  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8376 | >20%                    |                10 |              0.08376 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8394 | >20%                    |                10 |              0.08394 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8449 | 10-15%                  |                 2 |              0.42245 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8466 | >20%                    |                 5 |              0.16932 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8555 | >20%                    |                 2 |              0.42775 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8576 | >20%                    |                 5 |              0.17152 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8697 | <5%                     |                10 |              0.08697 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8701 | >20%                    |                10 |              0.08701 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8701 | >20%                    |                 2 |              0.43505 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8854 | >20%                    |                10 |              0.08854 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.897  | >20%                    |                10 |              0.0897  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9087 | <5%                     |                10 |              0.09087 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9341 | >20%                    |                10 |              0.09341 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9412 | >20%                    |                 5 |              0.18824 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9478 | >20%                    |                 2 |              0.4739  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9556 | >20%                    |                10 |              0.09556 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9624 | >20%                    |                 5 |              0.19248 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9897 | 5-10%                   |                 5 |              0.19794 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.007  | >20%                    |                10 |              0.1007  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0117 | >20%                    |                10 |              0.10117 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0187 | 15-20%                  |                10 |              0.10187 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0383 | >20%                    |                10 |              0.10383 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0506 | 5-10%                   |                10 |              0.10506 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.081  | 15-20%                  |                10 |              0.1081  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0896 | >20%                    |                10 |              0.10896 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0966 | >20%                    |                10 |              0.10966 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1263 | 10-15%                  |                 5 |              0.22526 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.127  | >20%                    |                 2 |              0.5635  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1432 | >20%                    |                10 |              0.11432 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1611 | >20%                    |                10 |              0.11611 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2472 | 10-15%                  |                10 |              0.12472 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2578 | >20%                    |                10 |              0.12578 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2936 | >20%                    |                 5 |              0.25872 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2939 | <5%                     |                10 |              0.12939 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3955 | 10-15%                  |                 5 |              0.2791  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4354 | >20%                    |                10 |              0.14354 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4455 | >20%                    |                 2 |              0.72275 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7778 | 15-20%                  |                10 |              0.17778 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.856  | 10-15%                  |                10 |              0.1856  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4423 | <5%                     |                 5 |              0.48846 |