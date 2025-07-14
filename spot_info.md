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

Data correct as of 2025-07-14 02:06:41.177435, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1355 | >20%                    |                 2 |              0.06775 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1451 | <5%                     |                 2 |              0.07255 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1698 | >20%                    |                 5 |              0.03396 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1707 | 10-15%                  |                 5 |              0.03414 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.177  | 5-10%                   |                 2 |              0.0885  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1937 | >20%                    |                 2 |              0.09685 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2033 | >20%                    |                10 |              0.02033 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2089 | >20%                    |                 5 |              0.04178 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2161 | >20%                    |                 5 |              0.04322 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2224 | >20%                    |                 2 |              0.1112  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | 5-10%                   |                 2 |              0.11825 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2409 | 15-20%                  |                 2 |              0.12045 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.241  | >20%                    |                 2 |              0.1205  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | >20%                    |                 2 |              0.12175 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2453 | 10-15%                  |                 5 |              0.04906 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2454 | >20%                    |                 2 |              0.1227  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2529 | 15-20%                  |                 2 |              0.12645 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.253  | >20%                    |                10 |              0.0253  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2531 | >20%                    |                 2 |              0.12655 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2831 | >20%                    |                 2 |              0.14155 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2883 | 5-10%                   |                10 |              0.02883 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.297  | >20%                    |                 2 |              0.1485  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | <5%                     |                 2 |              0.14935 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3067 | >20%                    |                 5 |              0.06134 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | 5-10%                   |                 2 |              0.1552  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3132 | >20%                    |                 2 |              0.1566  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3146 | >20%                    |                10 |              0.03146 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3158 | 10-15%                  |                 2 |              0.1579  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3237 | 15-20%                  |                 2 |              0.16185 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3275 | <5%                     |                 2 |              0.16375 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3504 | >20%                    |                 2 |              0.1752  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3547 | >20%                    |                 2 |              0.17735 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.356  | >20%                    |                 2 |              0.178   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3564 | >20%                    |                 2 |              0.1782  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3584 | 10-15%                  |                 5 |              0.07168 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3599 | 15-20%                  |                 5 |              0.07198 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3721 | >20%                    |                 2 |              0.18605 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3843 | 5-10%                   |                 2 |              0.19215 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | >20%                    |                 2 |              0.19255 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | >20%                    |                 2 |              0.19365 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3877 | >20%                    |                 5 |              0.07754 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3901 | <5%                     |                 5 |              0.07802 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3916 | >20%                    |                 5 |              0.07832 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3933 | >20%                    |                 5 |              0.07866 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.394  | >20%                    |                 2 |              0.197   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4017 | >20%                    |                 2 |              0.20085 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4023 | 5-10%                   |                 2 |              0.20115 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4242 | >20%                    |                 2 |              0.2121  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | <5%                     |                 2 |              0.21675 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4348 | 15-20%                  |                 5 |              0.08696 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | 10-15%                  |                 2 |              0.22155 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4451 | >20%                    |                 5 |              0.08902 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4492 | >20%                    |                 5 |              0.08984 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4568 | >20%                    |                 5 |              0.09136 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4598 | >20%                    |                 5 |              0.09196 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4623 | >20%                    |                 5 |              0.09246 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4665 | 5-10%                   |                 2 |              0.23325 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4691 | >20%                    |                 2 |              0.23455 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.47   | >20%                    |                 2 |              0.235   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4769 | >20%                    |                 2 |              0.23845 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4856 | >20%                    |                 5 |              0.09712 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4893 | >20%                    |                 2 |              0.24465 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4896 | >20%                    |                 2 |              0.2448  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4899 | >20%                    |                 2 |              0.24495 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4903 | >20%                    |                 2 |              0.24515 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | <5%                     |                 5 |              0.09918 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4972 | <5%                     |                 2 |              0.2486  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4992 | 15-20%                  |                 5 |              0.09984 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.506  | 15-20%                  |                 2 |              0.253   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | 10-15%                  |                 5 |              0.10232 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5176 | >20%                    |                 5 |              0.10352 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5183 | 15-20%                  |                 5 |              0.10366 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5247 | >20%                    |                 2 |              0.26235 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5251 | >20%                    |                 5 |              0.10502 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5264 | <5%                     |                 5 |              0.10528 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | >20%                    |                 5 |              0.1055  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.531  | >20%                    |                10 |              0.0531  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5355 | >20%                    |                10 |              0.05355 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5389 | >20%                    |                 5 |              0.10778 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5421 | >20%                    |                 2 |              0.27105 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5456 | >20%                    |                 5 |              0.10912 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5505 | >20%                    |                10 |              0.05505 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5558 | >20%                    |                 5 |              0.11116 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5642 | >20%                    |                10 |              0.05642 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5685 | >20%                    |                 2 |              0.28425 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5733 | >20%                    |                 2 |              0.28665 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5752 | >20%                    |                 2 |              0.2876  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5815 | <5%                     |                 5 |              0.1163  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.585  | >20%                    |                 5 |              0.117   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5901 | >20%                    |                 2 |              0.29505 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5942 | >20%                    |                10 |              0.05942 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5953 | 10-15%                  |                 5 |              0.11906 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5973 | 15-20%                  |                10 |              0.05973 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6026 | >20%                    |                10 |              0.06026 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6027 | 15-20%                  |                10 |              0.06027 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6065 | 10-15%                  |                 5 |              0.1213  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6139 | 5-10%                   |                 2 |              0.30695 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6181 | >20%                    |                 5 |              0.12362 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6191 | >20%                    |                 2 |              0.30955 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6287 | >20%                    |                 5 |              0.12574 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6315 | >20%                    |                 5 |              0.1263  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6377 | >20%                    |                 2 |              0.31885 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6392 | 10-15%                  |                 2 |              0.3196  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6501 | >20%                    |                 5 |              0.13002 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6568 | >20%                    |                 5 |              0.13136 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.67   | <5%                     |                10 |              0.067   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6759 | 5-10%                   |                 5 |              0.13518 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6836 | >20%                    |                 5 |              0.13672 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6838 | >20%                    |                 5 |              0.13676 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6849 | >20%                    |                10 |              0.06849 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6856 | 5-10%                   |                 5 |              0.13712 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6879 | >20%                    |                10 |              0.06879 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6896 | >20%                    |                 5 |              0.13792 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6933 | 15-20%                  |                 5 |              0.13866 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7057 | 10-15%                  |                10 |              0.07057 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7059 | >20%                    |                 5 |              0.14118 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7172 | <5%                     |                 5 |              0.14344 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.725  | >20%                    |                 2 |              0.3625  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7588 | 10-15%                  |                10 |              0.07588 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7721 | >20%                    |                10 |              0.07721 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7787 | 15-20%                  |                10 |              0.07787 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7846 | 10-15%                  |                10 |              0.07846 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7856 | >20%                    |                 5 |              0.15712 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7924 | 5-10%                   |                10 |              0.07924 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8039 | 10-15%                  |                 5 |              0.16078 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8069 | >20%                    |                 5 |              0.16138 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8093 | 5-10%                   |                10 |              0.08093 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8128 | >20%                    |                10 |              0.08128 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8208 | >20%                    |                 5 |              0.16416 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8221 | >20%                    |                10 |              0.08221 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8303 | 5-10%                   |                10 |              0.08303 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8305 | <5%                     |                10 |              0.08305 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8509 | >20%                    |                 5 |              0.17018 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8584 | <5%                     |                 5 |              0.17168 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8627 | 10-15%                  |                10 |              0.08627 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.867  | <5%                     |                10 |              0.0867  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8868 | >20%                    |                10 |              0.08868 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8936 | 5-10%                   |                10 |              0.08936 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8978 | 15-20%                  |                10 |              0.08978 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9001 | >20%                    |                10 |              0.09001 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9047 | >20%                    |                10 |              0.09047 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9301 | >20%                    |                10 |              0.09301 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9315 | 15-20%                  |                10 |              0.09315 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9426 | 15-20%                  |                10 |              0.09426 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9447 | >20%                    |                10 |              0.09447 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9556 | >20%                    |                 5 |              0.19112 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9568 | >20%                    |                10 |              0.09568 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9616 | >20%                    |                10 |              0.09616 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9678 | 5-10%                   |                10 |              0.09678 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0131 | >20%                    |                10 |              0.10131 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0495 | <5%                     |                10 |              0.10495 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0523 | <5%                     |                10 |              0.10523 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0681 | >20%                    |                10 |              0.10681 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0683 | >20%                    |                10 |              0.10683 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0687 | <5%                     |                10 |              0.10687 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0707 | >20%                    |                 5 |              0.21414 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0861 | 15-20%                  |                10 |              0.10861 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.112  | >20%                    |                 2 |              0.556   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.126  | <5%                     |                 2 |              0.563   |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1331 | >20%                    |                 2 |              0.56655 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1536 | >20%                    |                10 |              0.11536 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1671 | >20%                    |                10 |              0.11671 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2616 | <5%                     |                 5 |              0.25232 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2637 | 15-20%                  |                10 |              0.12637 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2653 | >20%                    |                10 |              0.12653 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2657 | >20%                    |                 5 |              0.25314 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2703 | >20%                    |                 5 |              0.25406 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3032 | >20%                    |                 2 |              0.6516  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3152 | >20%                    |                 2 |              0.6576  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3192 | <5%                     |                10 |              0.13192 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4042 | 10-15%                  |                10 |              0.14042 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4184 | >20%                    |                 5 |              0.28368 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4225 | >20%                    |                10 |              0.14225 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4559 | <5%                     |                 5 |              0.29118 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5865 | 15-20%                  |                10 |              0.15865 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8594 | <5%                     |                10 |              0.18594 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.8696 | <5%                     |                 2 |              0.9348  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9495 | >20%                    |                10 |              0.19495 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9916 | 5-10%                   |                10 |              0.19916 |