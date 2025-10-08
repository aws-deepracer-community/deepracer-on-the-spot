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

Data correct as of 2025-10-08 01:43:41.671773, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.18   | >20%                    |                 5 |              0.036   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | 10-15%                  |                 2 |              0.10555 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.213  | >20%                    |                 2 |              0.1065  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2428 | >20%                    |                 2 |              0.1214  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2429 | >20%                    |                 5 |              0.04858 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | 5-10%                   |                 2 |              0.12315 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | >20%                    |                 2 |              0.12505 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2548 | >20%                    |                 2 |              0.1274  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | 10-15%                  |                 2 |              0.1424  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2909 | >20%                    |                10 |              0.02909 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | >20%                    |                 2 |              0.14795 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | 5-10%                   |                 2 |              0.1498  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3023 | >20%                    |                 2 |              0.15115 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3027 | 15-20%                  |                 2 |              0.15135 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3114 | >20%                    |                 5 |              0.06228 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.326  | 15-20%                  |                 2 |              0.163   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.33   | 10-15%                  |                 2 |              0.165   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3404 | >20%                    |                 2 |              0.1702  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3424 | >20%                    |                 2 |              0.1712  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3455 | >20%                    |                 2 |              0.17275 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3608 | >20%                    |                10 |              0.03608 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3713 | >20%                    |                 2 |              0.18565 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | >20%                    |                 2 |              0.18625 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3748 | 15-20%                  |                 2 |              0.1874  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3808 | >20%                    |                 2 |              0.1904  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3817 | >20%                    |                 5 |              0.07634 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3826 | >20%                    |                 2 |              0.1913  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3888 | >20%                    |                 2 |              0.1944  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3997 | >20%                    |                 5 |              0.07994 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4047 | >20%                    |                 2 |              0.20235 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4135 | >20%                    |                 5 |              0.0827  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4141 | >20%                    |                 5 |              0.08282 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4173 | 5-10%                   |                 2 |              0.20865 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4185 | >20%                    |                 5 |              0.0837  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | 5-10%                   |                 2 |              0.20955 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | >20%                    |                 2 |              0.2184  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4372 | 10-15%                  |                 5 |              0.08744 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4379 | >20%                    |                 2 |              0.21895 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4398 | >20%                    |                 2 |              0.2199  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4406 | 15-20%                  |                 2 |              0.2203  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4444 | >20%                    |                 5 |              0.08888 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4485 | >20%                    |                 5 |              0.0897  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4504 | >20%                    |                 2 |              0.2252  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4528 | >20%                    |                 2 |              0.2264  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4537 | >20%                    |                 5 |              0.09074 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4554 | 15-20%                  |                 5 |              0.09108 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4605 | 10-15%                  |                 2 |              0.23025 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4609 | <5%                     |                 2 |              0.23045 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4756 | >20%                    |                 2 |              0.2378  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.482  | >20%                    |                 2 |              0.241   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4891 | 10-15%                  |                 2 |              0.24455 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4978 | >20%                    |                 5 |              0.09956 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5005 | >20%                    |                 2 |              0.25025 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5047 | >20%                    |                 5 |              0.10094 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5054 | 5-10%                   |                 5 |              0.10108 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5098 | >20%                    |                 2 |              0.2549  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5174 | >20%                    |                 5 |              0.10348 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | >20%                    |                 5 |              0.10424 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5351 | 5-10%                   |                 2 |              0.26755 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5375 | >20%                    |                 5 |              0.1075  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5462 | 10-15%                  |                 2 |              0.2731  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5467 | >20%                    |                 5 |              0.10934 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5469 | >20%                    |                 5 |              0.10938 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5541 | >20%                    |                10 |              0.05541 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5553 | >20%                    |                 2 |              0.27765 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.566  | 15-20%                  |                 2 |              0.283   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5745 | >20%                    |                 5 |              0.1149  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5833 | >20%                    |                 5 |              0.11666 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5883 | 15-20%                  |                10 |              0.05883 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5944 | <5%                     |                10 |              0.05944 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5957 | >20%                    |                 5 |              0.11914 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6031 | >20%                    |                 2 |              0.30155 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6046 | >20%                    |                10 |              0.06046 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6084 | >20%                    |                 5 |              0.12168 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6134 | 10-15%                  |                 5 |              0.12268 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6141 | >20%                    |                 5 |              0.12282 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6156 | >20%                    |                 2 |              0.3078  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.622  | >20%                    |                 5 |              0.1244  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6227 | 10-15%                  |                 5 |              0.12454 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6268 | >20%                    |                 5 |              0.12536 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | >20%                    |                 2 |              0.31585 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6549 | 15-20%                  |                 2 |              0.32745 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6564 | 15-20%                  |                 5 |              0.13128 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6627 | >20%                    |                 5 |              0.13254 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6667 | >20%                    |                 5 |              0.13334 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.674  | >20%                    |                 5 |              0.1348  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6761 | >20%                    |                 5 |              0.13522 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6825 | >20%                    |                 5 |              0.1365  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6836 | 15-20%                  |                 5 |              0.13672 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6925 | >20%                    |                 5 |              0.1385  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6928 | >20%                    |                 2 |              0.3464  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6959 | >20%                    |                 5 |              0.13918 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7028 | 15-20%                  |                10 |              0.07028 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7036 | >20%                    |                 5 |              0.14072 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7046 | >20%                    |                10 |              0.07046 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7072 | >20%                    |                10 |              0.07072 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7089 | >20%                    |                 5 |              0.14178 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7089 | 15-20%                  |                10 |              0.07089 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7111 | >20%                    |                 5 |              0.14222 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7166 | 15-20%                  |                10 |              0.07166 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7203 | 15-20%                  |                 5 |              0.14406 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7358 | 5-10%                   |                10 |              0.07358 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7425 | >20%                    |                10 |              0.07425 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7531 | >20%                    |                 2 |              0.37655 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7588 | >20%                    |                10 |              0.07588 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.759  | 15-20%                  |                10 |              0.0759  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7686 | 10-15%                  |                 2 |              0.3843  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.774  | >20%                    |                10 |              0.0774  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7966 | >20%                    |                 5 |              0.15932 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8003 | 15-20%                  |                 5 |              0.16006 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8033 | >20%                    |                 5 |              0.16066 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8059 | 15-20%                  |                10 |              0.08059 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8069 | >20%                    |                10 |              0.08069 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8125 | >20%                    |                10 |              0.08125 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.815  | >20%                    |                 5 |              0.163   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.825  | >20%                    |                10 |              0.0825  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8285 | <5%                     |                10 |              0.08285 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8501 | >20%                    |                 5 |              0.17002 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8504 | >20%                    |                10 |              0.08504 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8744 | 10-15%                  |                 5 |              0.17488 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8747 | 10-15%                  |                 2 |              0.43735 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8812 | 15-20%                  |                10 |              0.08812 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8959 | >20%                    |                 5 |              0.17918 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9071 | <5%                     |                10 |              0.09071 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9133 | 5-10%                   |                10 |              0.09133 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9134 | 10-15%                  |                10 |              0.09134 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9148 | 10-15%                  |                10 |              0.09148 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9199 | 15-20%                  |                10 |              0.09199 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9343 | >20%                    |                10 |              0.09343 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.935  | >20%                    |                10 |              0.0935  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9426 | >20%                    |                 2 |              0.4713  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9626 | <5%                     |                10 |              0.09626 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9768 | >20%                    |                10 |              0.09768 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9831 | >20%                    |                 5 |              0.19662 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9904 | 5-10%                   |                10 |              0.09904 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9913 | 15-20%                  |                10 |              0.09913 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9925 | 15-20%                  |                10 |              0.09925 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0049 | >20%                    |                 2 |              0.50245 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.018  | 10-15%                  |                10 |              0.1018  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0455 | >20%                    |                 2 |              0.52275 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0536 | >20%                    |                10 |              0.10536 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0766 | >20%                    |                 5 |              0.21532 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0808 | >20%                    |                10 |              0.10808 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0824 | >20%                    |                 5 |              0.21648 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0861 | 10-15%                  |                10 |              0.10861 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0864 | 10-15%                  |                 2 |              0.5432  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1087 | >20%                    |                 5 |              0.22174 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1089 | >20%                    |                10 |              0.11089 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1089 | 15-20%                  |                10 |              0.11089 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1255 | <5%                     |                10 |              0.11255 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1378 | 5-10%                   |                10 |              0.11378 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1415 | >20%                    |                 5 |              0.2283  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1427 | 5-10%                   |                10 |              0.11427 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1558 | >20%                    |                10 |              0.11558 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2634 | 5-10%                   |                 2 |              0.6317  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2722 | 15-20%                  |                10 |              0.12722 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2723 | >20%                    |                10 |              0.12723 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2952 | 10-15%                  |                10 |              0.12952 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3181 | >20%                    |                10 |              0.13181 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3882 | 10-15%                  |                 5 |              0.27764 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4841 | >20%                    |                10 |              0.14841 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5841 | >20%                    |                10 |              0.15841 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6566 | >20%                    |                10 |              0.16566 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.667  | 10-15%                  |                 5 |              0.3334  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7348 | >20%                    |                10 |              0.17348 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0491 | 10-15%                  |                10 |              0.20491 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3462 | 15-20%                  |                10 |              0.23462 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.8745 | >20%                    |                10 |              0.28745 |