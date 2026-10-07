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

Data correct as of 2026-10-07 05:10:18.063481, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1212 | >20%                    |                 2 |              0.0606  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | >20%                    |                 2 |              0.07305 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1954 | 15-20%                  |                 5 |              0.03908 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2003 | >20%                    |                 2 |              0.10015 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2015 | 15-20%                  |                 2 |              0.10075 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2158 | 15-20%                  |                 5 |              0.04316 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | >20%                    |                 2 |              0.12095 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.242  | >20%                    |                 5 |              0.0484  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | >20%                    |                 2 |              0.1407  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2822 | >20%                    |                 5 |              0.05644 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | >20%                    |                 2 |              0.14225 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2955 | >20%                    |                 2 |              0.14775 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | >20%                    |                 2 |              0.1489  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | 10-15%                  |                 2 |              0.15025 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3119 | 15-20%                  |                 2 |              0.15595 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3159 | >20%                    |                 5 |              0.06318 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3303 | >20%                    |                 2 |              0.16515 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | >20%                    |                 2 |              0.17615 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3569 | 10-15%                  |                 2 |              0.17845 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3579 | >20%                    |                 5 |              0.07158 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3591 | 5-10%                   |                10 |              0.03591 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3649 | >20%                    |                 2 |              0.18245 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3682 | >20%                    |                10 |              0.03682 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3721 | 15-20%                  |                 2 |              0.18605 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3809 | >20%                    |                 5 |              0.07618 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.387  | >20%                    |                 2 |              0.1935  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3878 | <5%                     |                 2 |              0.1939  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.39   | 15-20%                  |                 2 |              0.195   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3916 | >20%                    |                 2 |              0.1958  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3946 | >20%                    |                 5 |              0.07892 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3955 | >20%                    |                 2 |              0.19775 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4055 | >20%                    |                10 |              0.04055 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4112 | >20%                    |                 5 |              0.08224 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | >20%                    |                 5 |              0.08498 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4393 | >20%                    |                 2 |              0.21965 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4419 | >20%                    |                 5 |              0.08838 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4427 | >20%                    |                 5 |              0.08854 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4441 | >20%                    |                 5 |              0.08882 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4629 | >20%                    |                 5 |              0.09258 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4682 | >20%                    |                 2 |              0.2341  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4724 | 10-15%                  |                 2 |              0.2362  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4765 | >20%                    |                10 |              0.04765 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4766 | >20%                    |                 2 |              0.2383  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4815 | >20%                    |                 2 |              0.24075 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4895 |                         |                 2 |              0.24475 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4917 | >20%                    |                 2 |              0.24585 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4948 | >20%                    |                 5 |              0.09896 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5111 | >20%                    |                 5 |              0.10222 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5168 | <5%                     |                 2 |              0.2584  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | >20%                    |                 5 |              0.10388 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5299 | >20%                    |                 5 |              0.10598 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5542 | >20%                    |                 2 |              0.2771  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5781 | 10-15%                  |                 5 |              0.11562 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5813 | 15-20%                  |                 2 |              0.29065 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5825 | >20%                    |                 5 |              0.1165  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5864 | >20%                    |                 5 |              0.11728 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.6063 |                         |                10 |              0.06063 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6191 | 10-15%                  |                 2 |              0.30955 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6205 | >20%                    |                 5 |              0.1241  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.622  | >20%                    |                 5 |              0.1244  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6243 | >20%                    |                 2 |              0.31215 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.627  | >20%                    |                10 |              0.0627  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6408 | >20%                    |                 5 |              0.12816 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.66   | >20%                    |                 2 |              0.33    |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6684 | >20%                    |                10 |              0.06684 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6719 | >20%                    |                 5 |              0.13438 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6782 | >20%                    |                10 |              0.06782 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.679  | <5%                     |                 2 |              0.3395  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6797 | 5-10%                   |                 2 |              0.33985 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6815 | 5-10%                   |                10 |              0.06815 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6898 | >20%                    |                 5 |              0.13796 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6931 | >20%                    |                 5 |              0.13862 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6969 | >20%                    |                 2 |              0.34845 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6974 | 15-20%                  |                 2 |              0.3487  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | >20%                    |                10 |              0.06987 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7064 | 5-10%                   |                 5 |              0.14128 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.708  |                         |                 5 |              0.1416  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7228 | >20%                    |                 5 |              0.14456 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7251 | >20%                    |                 5 |              0.14502 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7308 | 15-20%                  |                10 |              0.07308 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7339 | 15-20%                  |                 5 |              0.14678 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7414 | >20%                    |                10 |              0.07414 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7439 | >20%                    |                 5 |              0.14878 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7503 | >20%                    |                 2 |              0.37515 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7586 | >20%                    |                10 |              0.07586 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7601 | >20%                    |                 5 |              0.15202 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7735 | 15-20%                  |                10 |              0.07735 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7844 | 15-20%                  |                10 |              0.07844 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7858 | >20%                    |                 5 |              0.15716 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7967 | >20%                    |                10 |              0.07967 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8003 | >20%                    |                 5 |              0.16006 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8317 | 5-10%                   |                10 |              0.08317 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8355 | 15-20%                  |                10 |              0.08355 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8421 | 15-20%                  |                 5 |              0.16842 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8509 | >20%                    |                 2 |              0.42545 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.857  | >20%                    |                10 |              0.0857  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8593 | 10-15%                  |                 2 |              0.42965 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8728 | >20%                    |                10 |              0.08728 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.874  | 10-15%                  |                10 |              0.0874  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8744 | >20%                    |                 5 |              0.17488 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8788 | >20%                    |                10 |              0.08788 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.881  | >20%                    |                 2 |              0.4405  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8819 | >20%                    |                10 |              0.08819 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8884 | >20%                    |                10 |              0.08884 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8893 | >20%                    |                 5 |              0.17786 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9082 | <5%                     |                 5 |              0.18164 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9115 | >20%                    |                10 |              0.09115 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.915  | >20%                    |                 5 |              0.183   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9397 | >20%                    |                 5 |              0.18794 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9654 | >20%                    |                10 |              0.09654 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9862 | 15-20%                  |                10 |              0.09862 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.991  | >20%                    |                10 |              0.0991  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0042 | 10-15%                  |                 2 |              0.5021  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.019  | >20%                    |                 5 |              0.2038  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.029  | 15-20%                  |                10 |              0.1029  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.032  | >20%                    |                10 |              0.1032  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0374 | >20%                    |                10 |              0.10374 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0554 | >20%                    |                10 |              0.10554 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0563 | >20%                    |                10 |              0.10563 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0609 | >20%                    |                10 |              0.10609 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1181 | 5-10%                   |                10 |              0.11181 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.171  | >20%                    |                 2 |              0.5855  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1801 | >20%                    |                10 |              0.11801 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1816 | >20%                    |                 5 |              0.23632 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2079 | >20%                    |                10 |              0.12079 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2348 | 5-10%                   |                 2 |              0.6174  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3188 | >20%                    |                 2 |              0.6594  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.3296 |                         |                 2 |              0.6648  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3485 | >20%                    |                10 |              0.13485 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3663 | 15-20%                  |                10 |              0.13663 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3756 | 10-15%                  |                10 |              0.13756 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4216 | >20%                    |                10 |              0.14216 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4256 | 5-10%                   |                 2 |              0.7128  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4577 | 10-15%                  |                 2 |              0.72885 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5186 | 15-20%                  |                10 |              0.15186 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5291 | 5-10%                   |                 5 |              0.30582 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5387 | >20%                    |                 2 |              0.76935 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5841 |                         |                 2 |              0.79205 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.591  | >20%                    |                 5 |              0.3182  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6164 | >20%                    |                10 |              0.16164 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7101 |                         |                10 |              0.17101 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7281 | >20%                    |                 5 |              0.34562 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.734  | >20%                    |                10 |              0.1734  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.8007 |                         |                 5 |              0.36014 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.9289 |                         |                10 |              0.19289 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9708 |                         |                 5 |              0.39416 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9894 | >20%                    |                10 |              0.19894 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0772 | 15-20%                  |                 5 |              0.41544 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2093 | 5-10%                   |                 2 |              1.10465 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2187 | >20%                    |                 5 |              0.44374 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2452 | 5-10%                   |                10 |              0.22452 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5623 | >20%                    |                10 |              0.25623 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1336 | >20%                    |                10 |              0.31336 |