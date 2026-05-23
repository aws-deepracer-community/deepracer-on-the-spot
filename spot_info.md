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

Data correct as of 2026-05-23 03:40:06.909726, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.144  | >20%                    |                 2 |              0.072   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.147  | 15-20%                  |                 2 |              0.0735  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1557 | >20%                    |                 2 |              0.07785 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1883 | >20%                    |                 2 |              0.09415 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1949 | 15-20%                  |                 5 |              0.03898 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2158 | 15-20%                  |                 5 |              0.04316 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2183 | 15-20%                  |                 2 |              0.10915 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2248 | >20%                    |                 2 |              0.1124  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2314 | >20%                    |                 2 |              0.1157  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2664 | 5-10%                   |                10 |              0.02664 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2686 | >20%                    |                 5 |              0.05372 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2755 | >20%                    |                 2 |              0.13775 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2825 | 15-20%                  |                 5 |              0.0565  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2876 | >20%                    |                 5 |              0.05752 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2899 | >20%                    |                 5 |              0.05798 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | >20%                    |                 2 |              0.14675 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | >20%                    |                 2 |              0.14935 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3009 | >20%                    |                 2 |              0.15045 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3074 | 10-15%                  |                 2 |              0.1537  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3081 | >20%                    |                 2 |              0.15405 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | 15-20%                  |                 2 |              0.15445 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3157 | 5-10%                   |                10 |              0.03157 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3193 | >20%                    |                 2 |              0.15965 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3196 | >20%                    |                 5 |              0.06392 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3231 | >20%                    |                10 |              0.03231 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.324  | 10-15%                  |                 2 |              0.162   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3247 | 10-15%                  |                 2 |              0.16235 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3291 | >20%                    |                 5 |              0.06582 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | <5%                     |                 2 |              0.1667  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3351 | >20%                    |                 5 |              0.06702 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3378 | >20%                    |                 5 |              0.06756 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | >20%                    |                 5 |              0.07386 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3734 | >20%                    |                 2 |              0.1867  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3742 | >20%                    |                 5 |              0.07484 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3838 | >20%                    |                 5 |              0.07676 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3882 | >20%                    |                 5 |              0.07764 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | 10-15%                  |                 2 |              0.1998  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4048 | <5%                     |                 5 |              0.08096 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4064 | <5%                     |                 2 |              0.2032  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4142 | >20%                    |                 2 |              0.2071  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4149 | >20%                    |                10 |              0.04149 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4194 | 5-10%                   |                 2 |              0.2097  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4216 | >20%                    |                 5 |              0.08432 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.425  | >20%                    |                 5 |              0.085   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4256 | >20%                    |                10 |              0.04256 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | >20%                    |                 5 |              0.08512 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4372 | >20%                    |                 2 |              0.2186  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4416 | >20%                    |                10 |              0.04416 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.444  | >20%                    |                 5 |              0.0888  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4507 | >20%                    |                 2 |              0.22535 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | >20%                    |                 5 |              0.09162 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4617 | <5%                     |                 2 |              0.23085 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4642 | >20%                    |                 5 |              0.09284 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.469  | >20%                    |                 2 |              0.2345  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4727 | >20%                    |                 2 |              0.23635 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4772 | 15-20%                  |                 2 |              0.2386  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.48   | >20%                    |                 2 |              0.24    |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4805 | >20%                    |                 5 |              0.0961  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4835 | 15-20%                  |                 2 |              0.24175 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4971 | >20%                    |                 5 |              0.09942 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5026 | >20%                    |                 5 |              0.10052 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5084 | 5-10%                   |                 5 |              0.10168 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5228 | >20%                    |                 5 |              0.10456 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5263 | >20%                    |                 5 |              0.10526 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5311 | 10-15%                  |                 2 |              0.26555 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5357 | 5-10%                   |                10 |              0.05357 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5465 | 10-15%                  |                 5 |              0.1093  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5481 | 15-20%                  |                 2 |              0.27405 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5571 | >20%                    |                10 |              0.05571 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5585 | 15-20%                  |                 5 |              0.1117  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.559  | >20%                    |                10 |              0.0559  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5594 | >20%                    |                 2 |              0.2797  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5621 | >20%                    |                 5 |              0.11242 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5718 | >20%                    |                 2 |              0.2859  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5728 | >20%                    |                 2 |              0.2864  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5887 | >20%                    |                 5 |              0.11774 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5914 | >20%                    |                 5 |              0.11828 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6052 | >20%                    |                10 |              0.06052 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6174 | >20%                    |                 2 |              0.3087  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.619  | >20%                    |                10 |              0.0619  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.638  |                         |                 2 |              0.319   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6545 | >20%                    |                10 |              0.06545 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6575 | >20%                    |                10 |              0.06575 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6584 | 5-10%                   |                10 |              0.06584 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.662  |                         |                 5 |              0.1324  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6668 | >20%                    |                 2 |              0.3334  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6669 | >20%                    |                 2 |              0.33345 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6754 | 15-20%                  |                10 |              0.06754 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6837 | >20%                    |                 5 |              0.13674 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6902 | 15-20%                  |                10 |              0.06902 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7071 | >20%                    |                 5 |              0.14142 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7162 | >20%                    |                10 |              0.07162 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7165 | 5-10%                   |                 2 |              0.35825 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7178 | >20%                    |                 5 |              0.14356 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7351 | >20%                    |                 2 |              0.36755 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7403 | >20%                    |                 2 |              0.37015 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7406 | >20%                    |                 5 |              0.14812 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7462 | 15-20%                  |                10 |              0.07462 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7522 | >20%                    |                10 |              0.07522 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7551 | >20%                    |                 5 |              0.15102 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7638 | >20%                    |                 5 |              0.15276 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7653 | >20%                    |                 5 |              0.15306 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.771  | 10-15%                  |                 2 |              0.3855  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7739 | >20%                    |                 5 |              0.15478 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7829 | >20%                    |                10 |              0.07829 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7871 | >20%                    |                 5 |              0.15742 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8059 | >20%                    |                10 |              0.08059 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8349 | >20%                    |                10 |              0.08349 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.852  | >20%                    |                 5 |              0.1704  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8716 | 10-15%                  |                10 |              0.08716 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.872  |                         |                 2 |              0.436   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8771 | >20%                    |                10 |              0.08771 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.891  | >20%                    |                10 |              0.0891  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.891  | 15-20%                  |                10 |              0.0891  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.9073 |                         |                 5 |              0.18146 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9175 | 15-20%                  |                10 |              0.09175 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9402 | >20%                    |                10 |              0.09402 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9408 | >20%                    |                10 |              0.09408 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9419 | >20%                    |                10 |              0.09419 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.945  | >20%                    |                 5 |              0.189   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.958  | >20%                    |                10 |              0.0958  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9775 | >20%                    |                 2 |              0.48875 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.988  | >20%                    |                 5 |              0.1976  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9929 | >20%                    |                 5 |              0.19858 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9945 | >20%                    |                 5 |              0.1989  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9992 | 5-10%                   |                 5 |              0.19984 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0097 | >20%                    |                10 |              0.10097 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0315 | >20%                    |                10 |              0.10315 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0621 | >20%                    |                10 |              0.10621 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0682 | >20%                    |                10 |              0.10682 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0753 | >20%                    |                10 |              0.10753 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0785 | 5-10%                   |                 2 |              0.53925 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.0832 |                         |                10 |              0.10832 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0841 | >20%                    |                10 |              0.10841 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1171 |                         |                10 |              0.11171 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1241 | 5-10%                   |                 2 |              0.56205 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1258 | >20%                    |                10 |              0.11258 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1566 | >20%                    |                10 |              0.11566 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1583 | 15-20%                  |                10 |              0.11583 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2107 | 5-10%                   |                10 |              0.12107 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2744 | 15-20%                  |                 5 |              0.25488 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2988 | 10-15%                  |                10 |              0.12988 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3133 | >20%                    |                 5 |              0.26266 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3432 | >20%                    |                10 |              0.13432 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3663 | 15-20%                  |                10 |              0.13663 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4184 | >20%                    |                 5 |              0.28368 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4184 | >20%                    |                10 |              0.14184 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5484 | 10-15%                  |                 2 |              0.7742  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6883 | 15-20%                  |                10 |              0.16883 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9618 | >20%                    |                10 |              0.19618 |