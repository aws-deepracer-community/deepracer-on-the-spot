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

Data correct as of 2026-07-14 02:48:33.417964, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1323 | >20%                    |                 2 |              0.06615 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1438 | >20%                    |                 2 |              0.0719  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1738 | >20%                    |                 2 |              0.0869  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 15-20%                  |                 2 |              0.1172  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | >20%                    |                 2 |              0.12435 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | >20%                    |                 2 |              0.1252  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | >20%                    |                 2 |              0.12605 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.253  | >20%                    |                 2 |              0.1265  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2599 | >20%                    |                 2 |              0.12995 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2696 | 15-20%                  |                 2 |              0.1348  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | >20%                    |                 2 |              0.13785 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2929 | 10-15%                  |                 2 |              0.14645 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2973 | >20%                    |                 5 |              0.05946 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | >20%                    |                 2 |              0.1517  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3049 | 15-20%                  |                 5 |              0.06098 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3092 | >20%                    |                 2 |              0.1546  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3138 | 5-10%                   |                10 |              0.03138 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3157 | 15-20%                  |                 2 |              0.15785 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3263 | >20%                    |                 5 |              0.06526 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3494 | >20%                    |                 5 |              0.06988 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3503 | 15-20%                  |                 5 |              0.07006 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3516 | >20%                    |                 5 |              0.07032 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3526 | >20%                    |                 2 |              0.1763  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | <5%                     |                 2 |              0.17995 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3637 | 15-20%                  |                 5 |              0.07274 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.364  | >20%                    |                10 |              0.0364  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3762 | >20%                    |                 2 |              0.1881  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3816 | 5-10%                   |                10 |              0.03816 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3836 | >20%                    |                 5 |              0.07672 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3872 | 5-10%                   |                10 |              0.03872 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3904 | >20%                    |                 5 |              0.07808 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3952 | 10-15%                  |                 2 |              0.1976  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4121 | >20%                    |                10 |              0.04121 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4194 | 10-15%                  |                 2 |              0.2097  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.424  | >20%                    |                 2 |              0.212   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4255 | >20%                    |                 2 |              0.21275 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4317 | >20%                    |                 2 |              0.21585 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4339 | >20%                    |                 5 |              0.08678 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4347 | 15-20%                  |                 2 |              0.21735 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4391 | >20%                    |                10 |              0.04391 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4394 | >20%                    |                 5 |              0.08788 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4436 | <5%                     |                 2 |              0.2218  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4466 | 10-15%                  |                 2 |              0.2233  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4521 | >20%                    |                 2 |              0.22605 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4561 | >20%                    |                 5 |              0.09122 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4617 | >20%                    |                10 |              0.04617 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4722 | >20%                    |                 5 |              0.09444 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4741 | >20%                    |                 5 |              0.09482 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4756 | >20%                    |                 2 |              0.2378  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4856 | <5%                     |                 2 |              0.2428  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5024 | >20%                    |                 5 |              0.10048 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5074 | >20%                    |                 5 |              0.10148 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5123 | >20%                    |                 5 |              0.10246 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5144 | >20%                    |                 5 |              0.10288 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5169 | 15-20%                  |                 2 |              0.25845 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5211 | 15-20%                  |                 2 |              0.26055 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5238 | >20%                    |                 2 |              0.2619  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5328 | >20%                    |                 2 |              0.2664  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5437 | >20%                    |                 5 |              0.10874 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5538 | >20%                    |                 5 |              0.11076 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5567 | >20%                    |                 2 |              0.27835 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5581 | >20%                    |                 5 |              0.11162 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5617 | 5-10%                   |                 2 |              0.28085 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5664 | >20%                    |                10 |              0.05664 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5677 | >20%                    |                10 |              0.05677 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5723 |                         |                 2 |              0.28615 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5735 | 5-10%                   |                 5 |              0.1147  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5755 | >20%                    |                10 |              0.05755 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5765 | >20%                    |                10 |              0.05765 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5803 | 10-15%                  |                 5 |              0.11606 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5827 | >20%                    |                 5 |              0.11654 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5929 | >20%                    |                 5 |              0.11858 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5936 | >20%                    |                 5 |              0.11872 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5956 | >20%                    |                 5 |              0.11912 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5974 | >20%                    |                10 |              0.05974 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6051 | >20%                    |                 2 |              0.30255 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.607  | 15-20%                  |                 5 |              0.1214  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6243 | >20%                    |                 2 |              0.31215 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6274 | <5%                     |                 5 |              0.12548 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6587 | 10-15%                  |                10 |              0.06587 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6597 | >20%                    |                10 |              0.06597 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6649 | >20%                    |                10 |              0.06649 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6681 | >20%                    |                10 |              0.06681 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6706 | >20%                    |                 5 |              0.13412 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6814 | >20%                    |                 5 |              0.13628 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6921 | >20%                    |                10 |              0.06921 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6963 | >20%                    |                 5 |              0.13926 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6977 | >20%                    |                 2 |              0.34885 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7    | >20%                    |                 2 |              0.35    |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7051 | >20%                    |                 2 |              0.35255 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7225 | >20%                    |                10 |              0.07225 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7302 |                         |                 2 |              0.3651  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7333 | >20%                    |                 5 |              0.14666 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7375 | >20%                    |                 5 |              0.1475  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7402 | >20%                    |                 2 |              0.3701  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7479 | 15-20%                  |                10 |              0.07479 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7513 | >20%                    |                10 |              0.07513 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7569 | 10-15%                  |                 2 |              0.37845 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7796 | >20%                    |                 5 |              0.15592 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7826 |                         |                10 |              0.07826 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7885 | >20%                    |                10 |              0.07885 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8038 | >20%                    |                 5 |              0.16076 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8086 | >20%                    |                10 |              0.08086 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8166 | >20%                    |                10 |              0.08166 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8177 | 5-10%                   |                10 |              0.08177 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.826  | >20%                    |                10 |              0.0826  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8309 | <5%                     |                10 |              0.08309 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8366 | >20%                    |                 2 |              0.4183  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8503 | 15-20%                  |                10 |              0.08503 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8541 | 5-10%                   |                 2 |              0.42705 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8598 | 10-15%                  |                 2 |              0.4299  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8745 | 15-20%                  |                10 |              0.08745 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8762 | >20%                    |                10 |              0.08762 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8999 | >20%                    |                 5 |              0.17998 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9086 | 5-10%                   |                10 |              0.09086 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.921  | 15-20%                  |                10 |              0.0921  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9215 | >20%                    |                10 |              0.09215 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9313 | >20%                    |                 5 |              0.18626 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9393 | >20%                    |                10 |              0.09393 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9552 | >20%                    |                 5 |              0.19104 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9577 |                         |                 5 |              0.19154 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.979  | >20%                    |                 5 |              0.1958  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9834 | >20%                    |                 5 |              0.19668 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.984  | >20%                    |                 5 |              0.1968  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9851 | >20%                    |                10 |              0.09851 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9933 | 5-10%                   |                 5 |              0.19866 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0224 | >20%                    |                 5 |              0.20448 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0473 | >20%                    |                10 |              0.10473 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0513 | 15-20%                  |                10 |              0.10513 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0581 | 15-20%                  |                10 |              0.10581 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0604 | >20%                    |                10 |              0.10604 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0695 | >20%                    |                10 |              0.10695 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0705 | >20%                    |                 5 |              0.2141  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0791 | >20%                    |                 2 |              0.53955 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0833 | 10-15%                  |                 2 |              0.54165 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0852 | >20%                    |                10 |              0.10852 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.158  | 5-10%                   |                10 |              0.1158  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1914 |                         |                10 |              0.11914 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2463 |                         |                 5 |              0.24926 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2549 | >20%                    |                10 |              0.12549 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2902 | 15-20%                  |                10 |              0.12902 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2936 | >20%                    |                10 |              0.12936 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.301  | >20%                    |                 5 |              0.2602  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.3925 | >20%                    |                 5 |              0.2785  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3981 | 15-20%                  |                10 |              0.13981 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4452 | >20%                    |                10 |              0.14452 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5046 | >20%                    |                10 |              0.15046 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5133 | 15-20%                  |                 5 |              0.30266 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5357 | 10-15%                  |                10 |              0.15357 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5615 | >20%                    |                 5 |              0.3123  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9431 | 5-10%                   |                 2 |              0.97155 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0912 | 5-10%                   |                 2 |              1.0456  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1945 | >20%                    |                10 |              0.21945 |