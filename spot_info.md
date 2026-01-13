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

Data correct as of 2026-01-13 02:00:36.430976, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.11   | >20%                    |                 2 |              0.055   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1472 | >20%                    |                 2 |              0.0736  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1499 | >20%                    |                 5 |              0.02998 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1525 | >20%                    |                 2 |              0.07625 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1714 | <5%                     |                 2 |              0.0857  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1983 | >20%                    |                 2 |              0.09915 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2156 | >20%                    |                 2 |              0.1078  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2324 | >20%                    |                 2 |              0.1162  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2408 | >20%                    |                 5 |              0.04816 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2621 | >20%                    |                 2 |              0.13105 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2646 | 15-20%                  |                 5 |              0.05292 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2697 | >20%                    |                 2 |              0.13485 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2709 | >20%                    |                 5 |              0.05418 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2736 | >20%                    |                 2 |              0.1368  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | >20%                    |                 2 |              0.1415  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2839 | >20%                    |                 5 |              0.05678 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2871 | >20%                    |                10 |              0.02871 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2888 | >20%                    |                 2 |              0.1444  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | 15-20%                  |                 2 |              0.14445 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2903 | 5-10%                   |                10 |              0.02903 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2941 | >20%                    |                 2 |              0.14705 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3113 | >20%                    |                 5 |              0.06226 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3172 | 5-10%                   |                 5 |              0.06344 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.325  | >20%                    |                 2 |              0.1625  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3254 | >20%                    |                 2 |              0.1627  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3408 | >20%                    |                 5 |              0.06816 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3419 | 5-10%                   |                10 |              0.03419 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3431 | <5%                     |                 5 |              0.06862 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3471 | 5-10%                   |                 2 |              0.17355 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3515 | >20%                    |                 5 |              0.0703  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3592 | 10-15%                  |                 2 |              0.1796  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3623 | >20%                    |                 2 |              0.18115 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3755 | 5-10%                   |                 2 |              0.18775 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3782 | >20%                    |                 5 |              0.07564 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3789 | >20%                    |                 2 |              0.18945 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3832 | >20%                    |                10 |              0.03832 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3854 | >20%                    |                 5 |              0.07708 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3933 | 15-20%                  |                10 |              0.03933 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3933 | >20%                    |                 2 |              0.19665 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | <5%                     |                 2 |              0.19855 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3977 | >20%                    |                 5 |              0.07954 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3991 | >20%                    |                 5 |              0.07982 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4001 | >20%                    |                 2 |              0.20005 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4025 | <5%                     |                10 |              0.04025 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4047 | >20%                    |                 2 |              0.20235 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4057 | 10-15%                  |                 2 |              0.20285 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4062 | >20%                    |                 2 |              0.2031  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4073 | >20%                    |                10 |              0.04073 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4075 | >20%                    |                 5 |              0.0815  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4085 | >20%                    |                 2 |              0.20425 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4119 | 15-20%                  |                10 |              0.04119 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4131 | >20%                    |                 2 |              0.20655 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4184 | >20%                    |                 5 |              0.08368 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4185 | >20%                    |                10 |              0.04185 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4188 | >20%                    |                 2 |              0.2094  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4209 | >20%                    |                 5 |              0.08418 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4234 | >20%                    |                 5 |              0.08468 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4258 | >20%                    |                10 |              0.04258 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4284 | >20%                    |                 2 |              0.2142  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4324 | <5%                     |                10 |              0.04324 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4358 | >20%                    |                10 |              0.04358 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4409 | 10-15%                  |                 2 |              0.22045 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4443 | >20%                    |                 2 |              0.22215 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.45   | <5%                     |                 2 |              0.225   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.451  | >20%                    |                 2 |              0.2255  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4539 | >20%                    |                 5 |              0.09078 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4585 | <5%                     |                 2 |              0.22925 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4587 | >20%                    |                 2 |              0.22935 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | >20%                    |                 5 |              0.09372 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4691 | 15-20%                  |                 5 |              0.09382 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4692 | >20%                    |                10 |              0.04692 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | >20%                    |                 2 |              0.23665 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | >20%                    |                 5 |              0.09478 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | >20%                    |                 5 |              0.09564 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4868 | 15-20%                  |                 2 |              0.2434  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4906 | >20%                    |                 5 |              0.09812 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4957 | <5%                     |                 5 |              0.09914 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5011 | >20%                    |                 2 |              0.25055 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5038 | >20%                    |                 2 |              0.2519  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.505  | >20%                    |                 5 |              0.101   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5125 | 15-20%                  |                 2 |              0.25625 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.518  | >20%                    |                 5 |              0.1036  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.539  | >20%                    |                 2 |              0.2695  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5424 | >20%                    |                 2 |              0.2712  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5433 | 15-20%                  |                 5 |              0.10866 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5533 | >20%                    |                 2 |              0.27665 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5537 | >20%                    |                 5 |              0.11074 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5583 | 5-10%                   |                 5 |              0.11166 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5657 | 15-20%                  |                 5 |              0.11314 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.566  | 10-15%                  |                 5 |              0.1132  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5676 | >20%                    |                 5 |              0.11352 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | 15-20%                  |                 5 |              0.11544 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5785 | >20%                    |                 5 |              0.1157  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5837 | >20%                    |                 2 |              0.29185 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5841 | 15-20%                  |                10 |              0.05841 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.597  | >20%                    |                 5 |              0.1194  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6011 | >20%                    |                 2 |              0.30055 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6097 | 5-10%                   |                 5 |              0.12194 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6165 | >20%                    |                10 |              0.06165 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6174 | >20%                    |                 5 |              0.12348 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6349 | 10-15%                  |                 2 |              0.31745 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6408 | 5-10%                   |                 5 |              0.12816 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.643  | >20%                    |                10 |              0.0643  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6462 | 15-20%                  |                10 |              0.06462 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6498 | 10-15%                  |                 5 |              0.12996 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6541 | 15-20%                  |                 5 |              0.13082 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6544 | <5%                     |                 2 |              0.3272  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6616 | >20%                    |                10 |              0.06616 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6617 | >20%                    |                 5 |              0.13234 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6654 | >20%                    |                 2 |              0.3327  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6859 | >20%                    |                 5 |              0.13718 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.692  | >20%                    |                10 |              0.0692  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6959 | 15-20%                  |                10 |              0.06959 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7039 | >20%                    |                 2 |              0.35195 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7153 | <5%                     |                10 |              0.07153 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7172 | >20%                    |                 2 |              0.3586  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7212 | 10-15%                  |                 5 |              0.14424 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7235 | <5%                     |                 5 |              0.1447  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7263 | >20%                    |                10 |              0.07263 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7274 | 15-20%                  |                 2 |              0.3637  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7338 | >20%                    |                10 |              0.07338 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | >20%                    |                10 |              0.07374 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7428 | 5-10%                   |                10 |              0.07428 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7493 | >20%                    |                 5 |              0.14986 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7534 | 15-20%                  |                10 |              0.07534 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7712 |                         |                 2 |              0.3856  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7738 | <5%                     |                10 |              0.07738 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.782  | >20%                    |                 2 |              0.391   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7851 | >20%                    |                 2 |              0.39255 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7857 | >20%                    |                10 |              0.07857 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7889 | 15-20%                  |                10 |              0.07889 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7938 | >20%                    |                 5 |              0.15876 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7943 | >20%                    |                 5 |              0.15886 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7962 | >20%                    |                10 |              0.07962 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8178 | <5%                     |                10 |              0.08178 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8202 | 15-20%                  |                 5 |              0.16404 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8256 | >20%                    |                10 |              0.08256 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8325 | 15-20%                  |                10 |              0.08325 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8466 | >20%                    |                10 |              0.08466 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8693 | 10-15%                  |                 5 |              0.17386 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8786 | 10-15%                  |                 5 |              0.17572 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8806 | >20%                    |                10 |              0.08806 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8916 | >20%                    |                10 |              0.08916 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8953 | >20%                    |                10 |              0.08953 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9021 | >20%                    |                 5 |              0.18042 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9191 | 10-15%                  |                10 |              0.09191 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9435 | >20%                    |                10 |              0.09435 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9485 | >20%                    |                 2 |              0.47425 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9901 | 15-20%                  |                10 |              0.09901 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0134 | >20%                    |                10 |              0.10134 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0268 | >20%                    |                10 |              0.10268 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0273 | >20%                    |                10 |              0.10273 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0437 | >20%                    |                 2 |              0.52185 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.055  | >20%                    |                 2 |              0.5275  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0584 | >20%                    |                10 |              0.10584 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0596 | >20%                    |                 5 |              0.21192 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0601 | >20%                    |                 5 |              0.21202 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0843 | 15-20%                  |                10 |              0.10843 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0863 | >20%                    |                10 |              0.10863 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0871 | 15-20%                  |                10 |              0.10871 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1198 | 10-15%                  |                10 |              0.11198 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1246 | >20%                    |                 2 |              0.5623  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1738 | 15-20%                  |                10 |              0.11738 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1754 | >20%                    |                10 |              0.11754 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1797 | <5%                     |                10 |              0.11797 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1969 | >20%                    |                10 |              0.11969 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1998 | >20%                    |                 5 |              0.23996 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2464 | >20%                    |                 5 |              0.24928 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.2751 | >20%                    |                 5 |              0.25502 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2788 | >20%                    |                10 |              0.12788 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3032 | >20%                    |                10 |              0.13032 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.346  | >20%                    |                 5 |              0.2692  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.3961 |                         |                 5 |              0.27922 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4291 | 10-15%                  |                 5 |              0.28582 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.449  | >20%                    |                 2 |              0.7245  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.454  | 10-15%                  |                10 |              0.1454  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5353 |                         |                10 |              0.15353 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5409 | >20%                    |                10 |              0.15409 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5491 | >20%                    |                10 |              0.15491 |