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

Data correct as of 2025-09-11 01:45:02.191589, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1008 | 5-10%                   |                 2 |              0.0504  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1606 | >20%                    |                 2 |              0.0803  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.174  | >20%                    |                 5 |              0.0348  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1783 | >20%                    |                 2 |              0.08915 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1825 | >20%                    |                 2 |              0.09125 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.21   | 10-15%                  |                 2 |              0.105   |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2124 | >20%                    |                 2 |              0.1062  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2294 | >20%                    |                 2 |              0.1147  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2353 | 10-15%                  |                 5 |              0.04706 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2514 | >20%                    |                 2 |              0.1257  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2632 | >20%                    |                 2 |              0.1316  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2662 | >20%                    |                 2 |              0.1331  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2965 | >20%                    |                 5 |              0.0593  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3009 | 15-20%                  |                 2 |              0.15045 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | >20%                    |                 2 |              0.15245 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3135 | >20%                    |                 2 |              0.15675 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3149 | 10-15%                  |                 2 |              0.15745 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.318  | 5-10%                   |                 2 |              0.159   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.321  | 5-10%                   |                 2 |              0.1605  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3233 | >20%                    |                 2 |              0.16165 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3298 | 15-20%                  |                 5 |              0.06596 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3483 | >20%                    |                 2 |              0.17415 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3611 | >20%                    |                 5 |              0.07222 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3617 | >20%                    |                 2 |              0.18085 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3631 | >20%                    |                 2 |              0.18155 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3675 | 10-15%                  |                 5 |              0.0735  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3722 | 10-15%                  |                 2 |              0.1861  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3827 | >20%                    |                 2 |              0.19135 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3829 | 15-20%                  |                 2 |              0.19145 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3926 | >20%                    |                 2 |              0.1963  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.396  | 15-20%                  |                10 |              0.0396  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4016 | >20%                    |                 2 |              0.2008  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4037 | >20%                    |                10 |              0.04037 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4057 | >20%                    |                 5 |              0.08114 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4165 | >20%                    |                 5 |              0.0833  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | >20%                    |                 5 |              0.08382 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4211 | 15-20%                  |                 2 |              0.21055 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | >20%                    |                 5 |              0.08548 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | >20%                    |                 2 |              0.21385 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4336 | >20%                    |                10 |              0.04336 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4343 | >20%                    |                 2 |              0.21715 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4365 | >20%                    |                10 |              0.04365 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4393 | >20%                    |                 5 |              0.08786 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4476 | 10-15%                  |                 2 |              0.2238  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4485 | >20%                    |                 5 |              0.0897  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | >20%                    |                 5 |              0.09012 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4598 | >20%                    |                 2 |              0.2299  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.462  | 5-10%                   |                 2 |              0.231   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4623 | 10-15%                  |                 2 |              0.23115 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4636 | 15-20%                  |                 2 |              0.2318  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4747 | >20%                    |                 5 |              0.09494 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4788 | >20%                    |                 5 |              0.09576 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4825 | <5%                     |                 2 |              0.24125 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4855 | >20%                    |                 2 |              0.24275 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4889 | >20%                    |                 5 |              0.09778 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4953 | 15-20%                  |                 2 |              0.24765 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | >20%                    |                 5 |              0.10014 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | >20%                    |                 2 |              0.2533  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5086 | >20%                    |                 5 |              0.10172 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5092 | >20%                    |                 5 |              0.10184 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5112 | 5-10%                   |                 5 |              0.10224 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5115 | 10-15%                  |                 2 |              0.25575 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.517  | >20%                    |                 2 |              0.2585  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5195 | >20%                    |                 2 |              0.25975 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5243 | >20%                    |                 2 |              0.26215 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5356 | 5-10%                   |                 2 |              0.2678  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5449 | 15-20%                  |                10 |              0.05449 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.546  | >20%                    |                 5 |              0.1092  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5541 | >20%                    |                 2 |              0.27705 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5604 | >20%                    |                 5 |              0.11208 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5844 | 10-15%                  |                 5 |              0.11688 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5886 | >20%                    |                 5 |              0.11772 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5891 | >20%                    |                 5 |              0.11782 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5928 | >20%                    |                 5 |              0.11856 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5961 | >20%                    |                 2 |              0.29805 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.599  | >20%                    |                 5 |              0.1198  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6037 | >20%                    |                 5 |              0.12074 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6072 | 15-20%                  |                 5 |              0.12144 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6125 | 10-15%                  |                 5 |              0.1225  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6274 | <5%                     |                 2 |              0.3137  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6332 | 5-10%                   |                10 |              0.06332 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6399 | 15-20%                  |                 2 |              0.31995 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6435 | 10-15%                  |                 2 |              0.32175 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6453 | >20%                    |                 5 |              0.12906 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6495 | 15-20%                  |                 5 |              0.1299  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6529 | >20%                    |                 5 |              0.13058 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6556 | 15-20%                  |                 5 |              0.13112 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6587 | >20%                    |                 5 |              0.13174 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6672 | 15-20%                  |                 5 |              0.13344 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6716 | >20%                    |                 2 |              0.3358  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6716 | >20%                    |                 5 |              0.13432 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6814 | 15-20%                  |                10 |              0.06814 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6867 | >20%                    |                 5 |              0.13734 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6928 | >20%                    |                 2 |              0.3464  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6992 | >20%                    |                 5 |              0.13984 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7011 | >20%                    |                 5 |              0.14022 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7031 | >20%                    |                 5 |              0.14062 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.712  | >20%                    |                 5 |              0.1424  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7122 | >20%                    |                 5 |              0.14244 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7285 | >20%                    |                 5 |              0.1457  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7302 | >20%                    |                10 |              0.07302 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7333 | >20%                    |                10 |              0.07333 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7512 | >20%                    |                 5 |              0.15024 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7545 | >20%                    |                10 |              0.07545 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7573 | >20%                    |                10 |              0.07573 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7856 | >20%                    |                10 |              0.07856 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7867 | >20%                    |                10 |              0.07867 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8048 | >20%                    |                 5 |              0.16096 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8087 | >20%                    |                 5 |              0.16174 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8088 | 15-20%                  |                10 |              0.08088 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8274 | 15-20%                  |                10 |              0.08274 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8291 | 10-15%                  |                10 |              0.08291 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8359 | 10-15%                  |                 2 |              0.41795 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8543 | 10-15%                  |                10 |              0.08543 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8545 | <5%                     |                10 |              0.08545 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8674 | >20%                    |                10 |              0.08674 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8759 | >20%                    |                 5 |              0.17518 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9058 | >20%                    |                 5 |              0.18116 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9058 | <5%                     |                10 |              0.09058 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9082 | 15-20%                  |                10 |              0.09082 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9224 | 10-15%                  |                10 |              0.09224 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9288 | 5-10%                   |                10 |              0.09288 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9371 | >20%                    |                10 |              0.09371 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9397 | 15-20%                  |                10 |              0.09397 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9454 | <5%                     |                10 |              0.09454 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.966  | 10-15%                  |                10 |              0.0966  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9832 | 15-20%                  |                10 |              0.09832 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9856 | >20%                    |                10 |              0.09856 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9948 | >20%                    |                 2 |              0.4974  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9969 | >20%                    |                10 |              0.09969 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0033 | 15-20%                  |                10 |              0.10033 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0125 | >20%                    |                 5 |              0.2025  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0195 | >20%                    |                10 |              0.10195 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0308 | 5-10%                   |                10 |              0.10308 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0471 | 5-10%                   |                10 |              0.10471 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0475 | >20%                    |                10 |              0.10475 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0578 | 15-20%                  |                10 |              0.10578 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0649 | 10-15%                  |                 5 |              0.21298 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0715 | >20%                    |                 2 |              0.53575 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0911 | >20%                    |                10 |              0.10911 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.111  | 5-10%                   |                10 |              0.1111  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1149 | <5%                     |                10 |              0.11149 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1211 | >20%                    |                 2 |              0.56055 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1238 | 15-20%                  |                10 |              0.11238 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1282 | >20%                    |                10 |              0.11282 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1403 | 10-15%                  |                 2 |              0.57015 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1422 | >20%                    |                10 |              0.11422 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.146  | >20%                    |                 5 |              0.2292  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1599 | 15-20%                  |                10 |              0.11599 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1866 | >20%                    |                 5 |              0.23732 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1923 | >20%                    |                10 |              0.11923 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2457 | >20%                    |                10 |              0.12457 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2775 | 5-10%                   |                 2 |              0.63875 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2936 | >20%                    |                 5 |              0.25872 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3286 | 10-15%                  |                10 |              0.13286 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3401 | >20%                    |                10 |              0.13401 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3959 | 10-15%                  |                 5 |              0.27918 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4159 | 10-15%                  |                 5 |              0.28318 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5225 | >20%                    |                10 |              0.15225 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5594 | >20%                    |                10 |              0.15594 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.566  | >20%                    |                10 |              0.1566  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6728 | >20%                    |                10 |              0.16728 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7444 | >20%                    |                10 |              0.17444 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8037 | 15-20%                  |                10 |              0.18037 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2371 | 10-15%                  |                10 |              0.22371 |