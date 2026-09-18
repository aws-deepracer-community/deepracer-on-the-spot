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

Data correct as of 2026-09-18 03:58:21.321459, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1134 | >20%                    |                 2 |              0.0567  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1621 | 15-20%                  |                 2 |              0.08105 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1887 | >20%                    |                 5 |              0.03774 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2277 | >20%                    |                 2 |              0.11385 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2378 | >20%                    |                 2 |              0.1189  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2397 | 15-20%                  |                 5 |              0.04794 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2428 | >20%                    |                 2 |              0.1214  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2548 | >20%                    |                 2 |              0.1274  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2786 | >20%                    |                 2 |              0.1393  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | >20%                    |                 2 |              0.1424  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | 15-20%                  |                 2 |              0.1432  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2938 |                         |                 5 |              0.05876 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3262 | 10-15%                  |                 2 |              0.1631  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3439 | >20%                    |                 2 |              0.17195 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3561 | >20%                    |                 5 |              0.07122 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3592 | >20%                    |                 2 |              0.1796  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3638 | >20%                    |                 5 |              0.07276 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3697 | 15-20%                  |                 2 |              0.18485 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3792 | 10-15%                  |                 2 |              0.1896  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3898 | <5%                     |                 2 |              0.1949  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3937 | >20%                    |                 5 |              0.07874 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3962 | >20%                    |                 5 |              0.07924 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3967 | >20%                    |                 2 |              0.19835 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4008 | >20%                    |                10 |              0.04008 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4061 | >20%                    |                 5 |              0.08122 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4182 | >20%                    |                 2 |              0.2091  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4238 | 15-20%                  |                 2 |              0.2119  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4306 | >20%                    |                 2 |              0.2153  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4321 | >20%                    |                 2 |              0.21605 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4389 | >20%                    |                 2 |              0.21945 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4639 | 15-20%                  |                 2 |              0.23195 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4778 | >20%                    |                 5 |              0.09556 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4818 | >20%                    |                 5 |              0.09636 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4822 | >20%                    |                10 |              0.04822 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4823 | 10-15%                  |                 2 |              0.24115 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4857 |                         |                 2 |              0.24285 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4907 | >20%                    |                 5 |              0.09814 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4914 | >20%                    |                 5 |              0.09828 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4933 | >20%                    |                10 |              0.04933 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4978 | >20%                    |                 5 |              0.09956 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5014 | >20%                    |                 5 |              0.10028 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5055 | 10-15%                  |                10 |              0.05055 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5055 | >20%                    |                 2 |              0.25275 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5064 | <5%                     |                 2 |              0.2532  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5132 | >20%                    |                 5 |              0.10264 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5171 | >20%                    |                 5 |              0.10342 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5442 | >20%                    |                 2 |              0.2721  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5533 | >20%                    |                 2 |              0.27665 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5571 | >20%                    |                 5 |              0.11142 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5691 | >20%                    |                 5 |              0.11382 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5768 | >20%                    |                 2 |              0.2884  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5804 | >20%                    |                 5 |              0.11608 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5843 | <5%                     |                10 |              0.05843 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5869 | 5-10%                   |                10 |              0.05869 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5941 | 10-15%                  |                 5 |              0.11882 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.61   | 15-20%                  |                10 |              0.061   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6163 | >20%                    |                 5 |              0.12326 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.617  | 15-20%                  |                10 |              0.0617  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6213 | >20%                    |                10 |              0.06213 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6277 | 5-10%                   |                 5 |              0.12554 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6322 | >20%                    |                 5 |              0.12644 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6391 | >20%                    |                 2 |              0.31955 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.64   | 10-15%                  |                 2 |              0.32    |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6653 | >20%                    |                 5 |              0.13306 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.669  | >20%                    |                10 |              0.0669  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6769 | <5%                     |                 2 |              0.33845 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6821 | >20%                    |                10 |              0.06821 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6832 | 5-10%                   |                 2 |              0.3416  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6954 | >20%                    |                 5 |              0.13908 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7013 | >20%                    |                 5 |              0.14026 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7021 | >20%                    |                 2 |              0.35105 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7145 | >20%                    |                 5 |              0.1429  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7149 | >20%                    |                 2 |              0.35745 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7287 | >20%                    |                10 |              0.07287 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7329 | 15-20%                  |                 5 |              0.14658 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7393 | >20%                    |                 5 |              0.14786 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7424 | >20%                    |                10 |              0.07424 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7478 | >20%                    |                 2 |              0.3739  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7566 | >20%                    |                 5 |              0.15132 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.768  | >20%                    |                 5 |              0.1536  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7826 | 15-20%                  |                 2 |              0.3913  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7964 | >20%                    |                10 |              0.07964 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8398 | 10-15%                  |                 2 |              0.4199  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8453 | >20%                    |                 5 |              0.16906 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8466 | >20%                    |                 2 |              0.4233  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8471 | 15-20%                  |                10 |              0.08471 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.857  | 15-20%                  |                 5 |              0.1714  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8571 | >20%                    |                10 |              0.08571 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8697 | >20%                    |                10 |              0.08697 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8789 | 5-10%                   |                10 |              0.08789 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.891  | >20%                    |                 2 |              0.4455  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9048 | <5%                     |                 5 |              0.18096 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9098 | >20%                    |                 5 |              0.18196 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9147 | 10-15%                  |                 2 |              0.45735 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9454 |                         |                 2 |              0.4727  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9647 | >20%                    |                10 |              0.09647 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9748 | >20%                    |                 5 |              0.19496 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9751 | 15-20%                  |                10 |              0.09751 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9862 | >20%                    |                10 |              0.09862 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9931 | >20%                    |                10 |              0.09931 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9987 | >20%                    |                 5 |              0.19974 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0043 | >20%                    |                 5 |              0.20086 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.0157 | >20%                    |                 2 |              0.50785 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0188 | 15-20%                  |                10 |              0.10188 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0291 | >20%                    |                10 |              0.10291 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0704 |                         |                10 |              0.10704 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0741 | >20%                    |                10 |              0.10741 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.084  | >20%                    |                 5 |              0.2168  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0898 | >20%                    |                10 |              0.10898 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0915 | >20%                    |                10 |              0.10915 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1002 | >20%                    |                10 |              0.11002 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1018 | >20%                    |                10 |              0.11018 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1031 | >20%                    |                 5 |              0.22062 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1076 | >20%                    |                 5 |              0.22152 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1157 | 5-10%                   |                10 |              0.11157 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1201 | >20%                    |                10 |              0.11201 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1564 | 5-10%                   |                 2 |              0.5782  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1574 | 15-20%                  |                10 |              0.11574 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1812 |                         |                 2 |              0.5906  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1861 |                         |                 5 |              0.23722 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2111 | >20%                    |                10 |              0.12111 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2139 | >20%                    |                10 |              0.12139 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2174 | >20%                    |                10 |              0.12174 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2486 |                         |                 5 |              0.24972 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3118 | 10-15%                  |                 2 |              0.6559  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3306 | >20%                    |                10 |              0.13306 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.3472 | >20%                    |                 5 |              0.26944 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.353  | >20%                    |                 2 |              0.6765  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3583 | 10-15%                  |                10 |              0.13583 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3673 | >20%                    |                 5 |              0.27346 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3773 | >20%                    |                10 |              0.13773 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3859 | >20%                    |                10 |              0.13859 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3943 | 15-20%                  |                10 |              0.13943 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4834 | 5-10%                   |                 2 |              0.7417  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5335 | >20%                    |                 2 |              0.76675 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5494 | 5-10%                   |                 5 |              0.30988 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6202 | >20%                    |                10 |              0.16202 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7892 | >20%                    |                 5 |              0.35784 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8376 | 15-20%                  |                10 |              0.18376 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8802 |                         |                10 |              0.18802 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0529 | 5-10%                   |                 2 |              1.02645 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.0661 |                         |                10 |              0.20661 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1184 | 15-20%                  |                 5 |              0.42368 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2404 | 5-10%                   |                10 |              0.22404 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.619  | >20%                    |                10 |              0.2619  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6295 | >20%                    |                10 |              0.26295 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0172 | >20%                    |                10 |              0.30172 |