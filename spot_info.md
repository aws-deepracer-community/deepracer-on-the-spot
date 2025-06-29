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

Data correct as of 2025-06-29 02:07:49.867000, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1675 | >20%                    |                 5 |              0.0335  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1783 | <5%                     |                 2 |              0.08915 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.195  | 15-20%                  |                 5 |              0.039   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1956 | >20%                    |                 5 |              0.03912 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2016 | >20%                    |                 2 |              0.1008  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2016 | 15-20%                  |                 2 |              0.1008  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2144 | >20%                    |                 2 |              0.1072  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.216  | 15-20%                  |                 2 |              0.108   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2178 | >20%                    |                 2 |              0.1089  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | 15-20%                  |                 2 |              0.1153  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | 15-20%                  |                 2 |              0.12175 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | >20%                    |                 2 |              0.1221  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2593 | 5-10%                   |                 2 |              0.12965 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2601 | >20%                    |                10 |              0.02601 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2665 | 15-20%                  |                10 |              0.02665 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2668 | >20%                    |                 2 |              0.1334  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2692 | <5%                     |                 5 |              0.05384 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2717 | 5-10%                   |                10 |              0.02717 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2802 | 15-20%                  |                 5 |              0.05604 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2876 | >20%                    |                 5 |              0.05752 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | >20%                    |                 2 |              0.14935 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | >20%                    |                 2 |              0.1494  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | <5%                     |                 2 |              0.15305 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3097 | >20%                    |                 2 |              0.15485 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | >20%                    |                 2 |              0.1564  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3148 | >20%                    |                 2 |              0.1574  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3168 | >20%                    |                 2 |              0.1584  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3232 | >20%                    |                 2 |              0.1616  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3283 | >20%                    |                 2 |              0.16415 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3306 | >20%                    |                10 |              0.03306 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3306 | 10-15%                  |                 2 |              0.1653  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.334  | 15-20%                  |                 5 |              0.0668  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3448 | <5%                     |                 2 |              0.1724  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | 10-15%                  |                 2 |              0.17765 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3687 | 10-15%                  |                 2 |              0.18435 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.369  | 5-10%                   |                 2 |              0.1845  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3706 | >20%                    |                 2 |              0.1853  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3757 | >20%                    |                 5 |              0.07514 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3911 | >20%                    |                 2 |              0.19555 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3968 | >20%                    |                 5 |              0.07936 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | 10-15%                  |                 5 |              0.08136 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4076 | >20%                    |                 5 |              0.08152 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4096 | 15-20%                  |                10 |              0.04096 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.417  | >20%                    |                 2 |              0.2085  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4176 | >20%                    |                 5 |              0.08352 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | 10-15%                  |                 2 |              0.2116  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4244 | <5%                     |                 2 |              0.2122  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | >20%                    |                 5 |              0.08602 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | >20%                    |                 2 |              0.21675 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4448 | >20%                    |                 5 |              0.08896 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4455 | >20%                    |                 2 |              0.22275 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4541 | 10-15%                  |                 5 |              0.09082 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4584 | >20%                    |                 2 |              0.2292  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4593 | >20%                    |                 2 |              0.22965 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4602 | 15-20%                  |                 5 |              0.09204 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | >20%                    |                 2 |              0.2303  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4618 | 5-10%                   |                 2 |              0.2309  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.465  | <5%                     |                10 |              0.0465  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4665 | >20%                    |                 5 |              0.0933  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | >20%                    |                 5 |              0.09384 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | <5%                     |                 5 |              0.09462 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.475  | 15-20%                  |                 2 |              0.2375  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4753 | >20%                    |                 5 |              0.09506 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4759 | 5-10%                   |                 2 |              0.23795 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.478  | 10-15%                  |                 5 |              0.0956  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | >20%                    |                 5 |              0.09564 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4782 | >20%                    |                 2 |              0.2391  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4821 | >20%                    |                 2 |              0.24105 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | <5%                     |                 5 |              0.09698 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4886 | 15-20%                  |                 5 |              0.09772 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4918 | >20%                    |                 2 |              0.2459  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4933 | >20%                    |                 2 |              0.24665 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5086 | >20%                    |                 2 |              0.2543  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5112 | >20%                    |                 5 |              0.10224 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5131 | 5-10%                   |                 5 |              0.10262 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5192 | >20%                    |                 2 |              0.2596  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5217 | 10-15%                  |                 2 |              0.26085 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5292 | 15-20%                  |                 2 |              0.2646  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | <5%                     |                 5 |              0.10702 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5399 | 10-15%                  |                 5 |              0.10798 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5516 | >20%                    |                 5 |              0.11032 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5547 | 15-20%                  |                 2 |              0.27735 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5621 | >20%                    |                 2 |              0.28105 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5636 | >20%                    |                10 |              0.05636 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5673 | >20%                    |                10 |              0.05673 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5709 | >20%                    |                 5 |              0.11418 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5736 | >20%                    |                10 |              0.05736 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5796 | >20%                    |                 5 |              0.11592 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5813 | >20%                    |                 2 |              0.29065 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5827 | >20%                    |                 2 |              0.29135 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5887 | >20%                    |                 5 |              0.11774 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.589  | >20%                    |                 5 |              0.1178  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5911 | >20%                    |                 5 |              0.11822 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5912 | 10-15%                  |                10 |              0.05912 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5924 | >20%                    |                 5 |              0.11848 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5942 | >20%                    |                10 |              0.05942 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.595  | <5%                     |                 5 |              0.119   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5997 | >20%                    |                 5 |              0.11994 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6026 | <5%                     |                 2 |              0.3013  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6069 | >20%                    |                 5 |              0.12138 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6084 | 10-15%                  |                 5 |              0.12168 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6166 | >20%                    |                 5 |              0.12332 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6298 | >20%                    |                 5 |              0.12596 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6356 | 5-10%                   |                 2 |              0.3178  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.651  | >20%                    |                10 |              0.0651  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6577 | >20%                    |                 5 |              0.13154 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6592 | >20%                    |                 5 |              0.13184 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6684 | <5%                     |                 5 |              0.13368 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.67   | <5%                     |                 5 |              0.134   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6796 | 10-15%                  |                 2 |              0.3398  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6805 | >20%                    |                 5 |              0.1361  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6814 | >20%                    |                 2 |              0.3407  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6851 | 15-20%                  |                10 |              0.06851 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6918 | 10-15%                  |                 5 |              0.13836 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7065 | >20%                    |                 5 |              0.1413  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7124 | >20%                    |                10 |              0.07124 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7134 | >20%                    |                10 |              0.07134 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7137 | <5%                     |                 5 |              0.14274 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7172 | >20%                    |                10 |              0.07172 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7184 | <5%                     |                 5 |              0.14368 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7259 | 10-15%                  |                 5 |              0.14518 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7338 | >20%                    |                10 |              0.07338 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7373 | >20%                    |                 5 |              0.14746 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7516 | 15-20%                  |                10 |              0.07516 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7637 | >20%                    |                10 |              0.07637 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7638 | >20%                    |                10 |              0.07638 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7683 | 15-20%                  |                10 |              0.07683 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7758 | 10-15%                  |                10 |              0.07758 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7779 | <5%                     |                10 |              0.07779 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7933 | >20%                    |                10 |              0.07933 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7952 | >20%                    |                 5 |              0.15904 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7953 | 5-10%                   |                 5 |              0.15906 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7967 | >20%                    |                10 |              0.07967 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7976 | 15-20%                  |                10 |              0.07976 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8153 | <5%                     |                10 |              0.08153 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8254 | >20%                    |                10 |              0.08254 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8287 | >20%                    |                10 |              0.08287 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8357 | >20%                    |                10 |              0.08357 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8487 | <5%                     |                10 |              0.08487 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8537 | >20%                    |                10 |              0.08537 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8588 | 15-20%                  |                10 |              0.08588 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8593 | >20%                    |                10 |              0.08593 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8726 | <5%                     |                10 |              0.08726 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8868 | >20%                    |                10 |              0.08868 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8897 | >20%                    |                10 |              0.08897 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9074 | >20%                    |                10 |              0.09074 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9129 | >20%                    |                10 |              0.09129 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9236 | >20%                    |                10 |              0.09236 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9255 | 15-20%                  |                10 |              0.09255 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9563 | >20%                    |                10 |              0.09563 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9693 | >20%                    |                10 |              0.09693 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9965 | >20%                    |                10 |              0.09965 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9973 | >20%                    |                10 |              0.09973 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.011  | >20%                    |                10 |              0.1011  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0113 | >20%                    |                 2 |              0.50565 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0215 | >20%                    |                 2 |              0.51075 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0392 | <5%                     |                10 |              0.10392 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0705 | 15-20%                  |                10 |              0.10705 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0783 | 10-15%                  |                10 |              0.10783 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0801 | >20%                    |                 5 |              0.21602 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0859 | <5%                     |                 2 |              0.54295 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0868 | 15-20%                  |                10 |              0.10868 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1113 | >20%                    |                 2 |              0.55565 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1141 | >20%                    |                10 |              0.11141 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1191 | 15-20%                  |                10 |              0.11191 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1886 | >20%                    |                10 |              0.11886 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2098 | 10-15%                  |                10 |              0.12098 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2357 | <5%                     |                 5 |              0.24714 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2585 | >20%                    |                10 |              0.12585 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2743 | >20%                    |                 5 |              0.25486 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.341  | >20%                    |                 5 |              0.2682  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3887 | >20%                    |                 2 |              0.69435 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.394  | <5%                     |                 5 |              0.2788  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4235 | >20%                    |                 5 |              0.2847  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.548  | 10-15%                  |                10 |              0.1548  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8833 | <5%                     |                10 |              0.18833 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8976 | >20%                    |                10 |              0.18976 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.11   | <5%                     |                10 |              0.211   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.1206 | <5%                     |                 2 |              1.0603  |