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

Data correct as of 2026-07-18 02:48:20.733335, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1338 | >20%                    |                 2 |              0.0669  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1547 | >20%                    |                 2 |              0.07735 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1829 | >20%                    |                 2 |              0.09145 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | 15-20%                  |                 2 |              0.1181  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2423 | >20%                    |                 2 |              0.12115 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2555 | >20%                    |                 2 |              0.12775 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | >20%                    |                 2 |              0.1283  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2587 | >20%                    |                 2 |              0.12935 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | >20%                    |                 2 |              0.1325  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2721 | 15-20%                  |                 2 |              0.13605 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2744 | 5-10%                   |                10 |              0.02744 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | >20%                    |                 2 |              0.13935 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | 10-15%                  |                 2 |              0.1498  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3068 | 15-20%                  |                 2 |              0.1534  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3136 | >20%                    |                 2 |              0.1568  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3307 | >20%                    |                 2 |              0.16535 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3317 | 15-20%                  |                 5 |              0.06634 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3329 | >20%                    |                 5 |              0.06658 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3366 | 15-20%                  |                 5 |              0.06732 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3427 | >20%                    |                 5 |              0.06854 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3494 | >20%                    |                 5 |              0.06988 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3525 | 5-10%                   |                10 |              0.03525 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3543 | >20%                    |                10 |              0.03543 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.358  | >20%                    |                 2 |              0.179   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.361  | <5%                     |                 2 |              0.1805  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3676 | >20%                    |                 5 |              0.07352 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | >20%                    |                 5 |              0.07434 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3852 | >20%                    |                10 |              0.03852 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3865 | >20%                    |                 5 |              0.0773  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3989 | 10-15%                  |                 2 |              0.19945 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3992 | >20%                    |                 5 |              0.07984 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4026 | >20%                    |                 5 |              0.08052 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.404  | >20%                    |                 2 |              0.202   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4174 | 5-10%                   |                10 |              0.04174 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4175 | >20%                    |                10 |              0.04175 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4192 | 10-15%                  |                 2 |              0.2096  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4209 | >20%                    |                 2 |              0.21045 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.421  | 15-20%                  |                 2 |              0.2105  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4332 | >20%                    |                10 |              0.04332 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4338 | >20%                    |                 5 |              0.08676 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4365 | 15-20%                  |                 5 |              0.0873  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4382 | >20%                    |                 5 |              0.08764 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4528 | >20%                    |                 2 |              0.2264  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4561 | >20%                    |                 2 |              0.22805 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4653 | >20%                    |                 2 |              0.23265 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4708 | >20%                    |                 2 |              0.2354  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4726 | <5%                     |                 2 |              0.2363  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4753 | 10-15%                  |                 2 |              0.23765 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4771 | >20%                    |                 5 |              0.09542 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4788 | >20%                    |                 5 |              0.09576 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4975 | >20%                    |                10 |              0.04975 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4979 | <5%                     |                 2 |              0.24895 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5078 | >20%                    |                10 |              0.05078 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5084 | >20%                    |                 5 |              0.10168 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5174 | >20%                    |                 2 |              0.2587  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5183 | >20%                    |                 5 |              0.10366 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5262 | >20%                    |                 5 |              0.10524 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5361 | 15-20%                  |                 2 |              0.26805 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5379 |                         |                 2 |              0.26895 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5462 | >20%                    |                 5 |              0.10924 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5499 | >20%                    |                10 |              0.05499 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5502 | >20%                    |                 5 |              0.11004 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5724 | 5-10%                   |                 2 |              0.2862  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5757 | 10-15%                  |                 5 |              0.11514 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5787 | >20%                    |                 5 |              0.11574 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5797 | >20%                    |                 5 |              0.11594 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5833 | >20%                    |                 5 |              0.11666 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5898 | >20%                    |                 2 |              0.2949  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5946 | 15-20%                  |                 2 |              0.2973  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5997 | >20%                    |                10 |              0.05997 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6041 | >20%                    |                 5 |              0.12082 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6041 | 5-10%                   |                 5 |              0.12082 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6132 | 10-15%                  |                10 |              0.06132 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6141 | >20%                    |                 2 |              0.30705 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6248 | >20%                    |                 5 |              0.12496 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6431 | >20%                    |                 5 |              0.12862 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6448 | >20%                    |                10 |              0.06448 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6499 | >20%                    |                10 |              0.06499 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.651  | >20%                    |                10 |              0.0651  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6772 | >20%                    |                 2 |              0.3386  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6782 | >20%                    |                 5 |              0.13564 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6802 | <5%                     |                 5 |              0.13604 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6805 | >20%                    |                 2 |              0.34025 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6894 | 15-20%                  |                 5 |              0.13788 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6897 | >20%                    |                 5 |              0.13794 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6932 |                         |                 2 |              0.3466  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6976 | >20%                    |                 2 |              0.3488  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7047 | >20%                    |                 5 |              0.14094 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7059 | >20%                    |                10 |              0.07059 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7155 | >20%                    |                 2 |              0.35775 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7224 | >20%                    |                 5 |              0.14448 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7237 | >20%                    |                10 |              0.07237 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7325 | 15-20%                  |                10 |              0.07325 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.742  | >20%                    |                10 |              0.0742  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7469 | >20%                    |                 5 |              0.14938 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7535 | >20%                    |                10 |              0.07535 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7732 | >20%                    |                10 |              0.07732 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7819 | 10-15%                  |                 2 |              0.39095 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7872 | 5-10%                   |                10 |              0.07872 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8154 | >20%                    |                10 |              0.08154 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8201 | <5%                     |                10 |              0.08201 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8277 | >20%                    |                 5 |              0.16554 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8337 | >20%                    |                10 |              0.08337 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8364 | >20%                    |                10 |              0.08364 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.847  | >20%                    |                 5 |              0.1694  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8496 | 15-20%                  |                10 |              0.08496 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8602 | >20%                    |                 5 |              0.17204 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8728 | 15-20%                  |                10 |              0.08728 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8787 | 5-10%                   |                 2 |              0.43935 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.882  | 10-15%                  |                 2 |              0.441   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8885 | 15-20%                  |                10 |              0.08885 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8928 |                         |                 5 |              0.17856 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8982 | >20%                    |                10 |              0.08982 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9129 | >20%                    |                 2 |              0.45645 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9322 | >20%                    |                10 |              0.09322 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.938  | >20%                    |                 5 |              0.1876  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9415 | 5-10%                   |                10 |              0.09415 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9572 | >20%                    |                 2 |              0.4786  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9653 | >20%                    |                 5 |              0.19306 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9737 | >20%                    |                 5 |              0.19474 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9798 | >20%                    |                10 |              0.09798 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9886 | >20%                    |                 5 |              0.19772 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0094 | 15-20%                  |                10 |              0.10094 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0193 | 10-15%                  |                 2 |              0.50965 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.0277 |                         |                10 |              0.10277 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0393 | >20%                    |                 5 |              0.20786 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0478 | 5-10%                   |                 5 |              0.20956 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0909 | >20%                    |                 2 |              0.54545 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0918 | >20%                    |                10 |              0.10918 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0927 | >20%                    |                 5 |              0.21854 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0954 | >20%                    |                10 |              0.10954 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.108  |                         |                10 |              0.1108  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1097 | 15-20%                  |                10 |              0.11097 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1181 | >20%                    |                 5 |              0.22362 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.135  | >20%                    |                10 |              0.1135  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1469 | >20%                    |                10 |              0.11469 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2181 |                         |                 5 |              0.24362 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2235 | >20%                    |                10 |              0.12235 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2767 | 5-10%                   |                10 |              0.12767 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2933 | 15-20%                  |                10 |              0.12933 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3163 | >20%                    |                 5 |              0.26326 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3282 | >20%                    |                10 |              0.13282 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3382 | >20%                    |                10 |              0.13382 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4154 | >20%                    |                10 |              0.14154 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4357 | 15-20%                  |                10 |              0.14357 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5206 | >20%                    |                10 |              0.15206 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.598  | 10-15%                  |                10 |              0.1598  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5991 | 15-20%                  |                 5 |              0.31982 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.7392 | >20%                    |                 5 |              0.34784 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8063 | >20%                    |                 5 |              0.36126 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8516 | 5-10%                   |                 2 |              0.9258  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0407 | 5-10%                   |                 2 |              1.02035 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0843 | >20%                    |                10 |              0.20843 |