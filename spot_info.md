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

Data correct as of 2026-01-07 02:02:50.473543, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1318 | >20%                    |                 2 |              0.0659  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1471 | >20%                    |                 2 |              0.07355 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1626 | >20%                    |                 5 |              0.03252 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1662 | >20%                    |                 2 |              0.0831  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1775 | <5%                     |                 2 |              0.08875 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | >20%                    |                 2 |              0.11245 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | >20%                    |                 2 |              0.11505 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2409 | <5%                     |                 5 |              0.04818 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2466 | >20%                    |                 2 |              0.1233  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2488 | >20%                    |                 2 |              0.1244  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2572 | >20%                    |                 2 |              0.1286  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2591 | >20%                    |                 5 |              0.05182 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2629 | >20%                    |                 2 |              0.13145 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.269  | >20%                    |                 2 |              0.1345  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2807 | >20%                    |                 2 |              0.14035 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2895 | >20%                    |                10 |              0.02895 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.291  | 5-10%                   |                10 |              0.0291  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | 15-20%                  |                 2 |              0.14585 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2989 | >20%                    |                 2 |              0.14945 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3057 | >20%                    |                 2 |              0.15285 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3078 | >20%                    |                 5 |              0.06156 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3111 | >20%                    |                 5 |              0.06222 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3135 | 15-20%                  |                 5 |              0.0627  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3155 | >20%                    |                 2 |              0.15775 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3162 | >20%                    |                10 |              0.03162 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3245 | >20%                    |                 2 |              0.16225 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.325  | >20%                    |                 5 |              0.065   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3316 | >20%                    |                 2 |              0.1658  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3455 | 5-10%                   |                 5 |              0.0691  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3527 | <5%                     |                 5 |              0.07054 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3542 | >20%                    |                 5 |              0.07084 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3586 | >20%                    |                 5 |              0.07172 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3591 | 5-10%                   |                10 |              0.03591 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3635 | 5-10%                   |                 2 |              0.18175 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3641 | <5%                     |                10 |              0.03641 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3658 | >20%                    |                 2 |              0.1829  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3665 | 5-10%                   |                 2 |              0.18325 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3685 | 10-15%                  |                 2 |              0.18425 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | >20%                    |                 5 |              0.07386 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3717 | >20%                    |                 2 |              0.18585 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.377  | >20%                    |                 5 |              0.0754  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.377  | >20%                    |                 2 |              0.1885  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | >20%                    |                 5 |              0.07546 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3781 | >20%                    |                 2 |              0.18905 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3869 | >20%                    |                 2 |              0.19345 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3904 | >20%                    |                 2 |              0.1952  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.391  | >20%                    |                10 |              0.0391  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3926 | 10-15%                  |                 2 |              0.1963  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3966 | >20%                    |                 5 |              0.07932 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3972 | >20%                    |                 2 |              0.1986  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4006 | >20%                    |                 2 |              0.2003  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4067 | >20%                    |                 5 |              0.08134 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4069 | >20%                    |                10 |              0.04069 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4137 | 15-20%                  |                10 |              0.04137 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4207 | >20%                    |                 2 |              0.21035 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.429  | >20%                    |                 5 |              0.0858  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4324 | <5%                     |                 2 |              0.2162  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4341 | 10-15%                  |                 2 |              0.21705 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | >20%                    |                 2 |              0.2184  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4456 | >20%                    |                10 |              0.04456 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4538 | >20%                    |                10 |              0.04538 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.454  | >20%                    |                 5 |              0.0908  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | >20%                    |                 5 |              0.09112 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.456  | <5%                     |                 2 |              0.228   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | >20%                    |                 5 |              0.09138 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4574 | >20%                    |                 5 |              0.09148 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4592 | >20%                    |                 2 |              0.2296  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4617 | <5%                     |                 2 |              0.23085 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4639 | >20%                    |                 5 |              0.09278 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4653 | >20%                    |                 2 |              0.23265 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4654 | <5%                     |                 5 |              0.09308 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4699 | >20%                    |                 2 |              0.23495 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4748 | >20%                    |                 5 |              0.09496 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4854 | <5%                     |                10 |              0.04854 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4889 | 15-20%                  |                 2 |              0.24445 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4892 | 15-20%                  |                 2 |              0.2446  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.492  | 15-20%                  |                10 |              0.0492  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.495  | 15-20%                  |                 5 |              0.099   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5041 | >20%                    |                 2 |              0.25205 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5051 | >20%                    |                 5 |              0.10102 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5087 | >20%                    |                 2 |              0.25435 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5266 | >20%                    |                 5 |              0.10532 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5272 | 10-15%                  |                 5 |              0.10544 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5396 | >20%                    |                 2 |              0.2698  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5515 | 15-20%                  |                 5 |              0.1103  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5516 | 5-10%                   |                 5 |              0.11032 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5579 | 15-20%                  |                 5 |              0.11158 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5678 | >20%                    |                 5 |              0.11356 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.572  | >20%                    |                 2 |              0.286   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5763 | 15-20%                  |                 5 |              0.11526 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.58   | 15-20%                  |                10 |              0.058   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5814 | >20%                    |                 5 |              0.11628 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5869 | >20%                    |                 5 |              0.11738 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6125 | >20%                    |                10 |              0.06125 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.62   | >20%                    |                10 |              0.062   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6205 | >20%                    |                 2 |              0.31025 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6244 | 10-15%                  |                 5 |              0.12488 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6265 | >20%                    |                 2 |              0.31325 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6272 | 10-15%                  |                 2 |              0.3136  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6313 | >20%                    |                 2 |              0.31565 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6393 | 5-10%                   |                 5 |              0.12786 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.644  | 5-10%                   |                 5 |              0.1288  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6561 | >20%                    |                 5 |              0.13122 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6569 | 15-20%                  |                 5 |              0.13138 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.663  | >20%                    |                10 |              0.0663  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6638 | >20%                    |                 2 |              0.3319  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6658 | >20%                    |                 5 |              0.13316 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6672 | 15-20%                  |                10 |              0.06672 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6713 | >20%                    |                 5 |              0.13426 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6909 | <5%                     |                 5 |              0.13818 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6933 | >20%                    |                 2 |              0.34665 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7005 | >20%                    |                10 |              0.07005 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7084 | 10-15%                  |                 5 |              0.14168 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7125 | >20%                    |                10 |              0.07125 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7126 | 15-20%                  |                10 |              0.07126 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7172 | <5%                     |                 2 |              0.3586  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7262 | 5-10%                   |                10 |              0.07262 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7367 | 15-20%                  |                 2 |              0.36835 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7391 | <5%                     |                10 |              0.07391 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7404 | >20%                    |                 5 |              0.14808 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7458 | 15-20%                  |                10 |              0.07458 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7472 | >20%                    |                10 |              0.07472 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7661 | >20%                    |                10 |              0.07661 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7692 | >20%                    |                 5 |              0.15384 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7774 | >20%                    |                 2 |              0.3887  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7822 | >20%                    |                10 |              0.07822 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7924 | >20%                    |                 2 |              0.3962  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7953 | 15-20%                  |                10 |              0.07953 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8004 | 15-20%                  |                10 |              0.08004 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8139 | >20%                    |                10 |              0.08139 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.817  | <5%                     |                10 |              0.0817  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8229 |                         |                 2 |              0.41145 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8268 | >20%                    |                 2 |              0.4134  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8287 | >20%                    |                10 |              0.08287 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.835  | 15-20%                  |                 5 |              0.167   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8371 | >20%                    |                 5 |              0.16742 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8377 | >20%                    |                10 |              0.08377 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8403 | 15-20%                  |                10 |              0.08403 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8419 | <5%                     |                10 |              0.08419 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8508 | >20%                    |                 2 |              0.4254  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8653 | 10-15%                  |                 5 |              0.17306 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8781 | 10-15%                  |                 5 |              0.17562 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8854 | >20%                    |                10 |              0.08854 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8982 | >20%                    |                10 |              0.08982 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9074 | >20%                    |                10 |              0.09074 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.916  | >20%                    |                10 |              0.0916  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9219 | >20%                    |                10 |              0.09219 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9361 | >20%                    |                 5 |              0.18722 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9625 | >20%                    |                10 |              0.09625 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9668 | 15-20%                  |                10 |              0.09668 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0171 | >20%                    |                 2 |              0.50855 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0403 | >20%                    |                10 |              0.10403 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0644 | >20%                    |                 5 |              0.21288 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0843 | 10-15%                  |                10 |              0.10843 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0891 | >20%                    |                 5 |              0.21782 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0895 | 10-15%                  |                10 |              0.10895 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0997 | 15-20%                  |                10 |              0.10997 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1061 |                         |                 5 |              0.22122 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1266 | >20%                    |                 2 |              0.5633  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1403 | >20%                    |                10 |              0.11403 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1438 | >20%                    |                10 |              0.11438 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1578 | <5%                     |                10 |              0.11578 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1925 | >20%                    |                 2 |              0.59625 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2072 | >20%                    |                 5 |              0.24144 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2715 | >20%                    |                10 |              0.12715 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2986 | >20%                    |                10 |              0.12986 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3031 | 15-20%                  |                10 |              0.13031 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3141 | >20%                    |                 5 |              0.26282 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3439 | >20%                    |                10 |              0.13439 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3464 | >20%                    |                10 |              0.13464 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.3514 | >20%                    |                 5 |              0.27028 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.378  | >20%                    |                 5 |              0.2756  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4259 | 10-15%                  |                 5 |              0.28518 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4308 | >20%                    |                 2 |              0.7154  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5572 | >20%                    |                10 |              0.15572 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6126 | >20%                    |                10 |              0.16126 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6458 |                         |                10 |              0.16458 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6848 | 10-15%                  |                10 |              0.16848 |