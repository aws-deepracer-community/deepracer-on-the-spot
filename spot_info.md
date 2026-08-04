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

Data correct as of 2026-08-04 02:52:27.267315, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1525 | >20%                    |                 2 |              0.07625 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.199  | >20%                    |                 2 |              0.0995  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | >20%                    |                 2 |              0.11125 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2372 | 15-20%                  |                 2 |              0.1186  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2435 | 15-20%                  |                 5 |              0.0487  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | >20%                    |                 2 |              0.126   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2567 | >20%                    |                 2 |              0.12835 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2699 | >20%                    |                 2 |              0.13495 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | 15-20%                  |                 2 |              0.13935 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.284  | >20%                    |                 2 |              0.142   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3051 | >20%                    |                 5 |              0.06102 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3112 | >20%                    |                 2 |              0.1556  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3214 | >20%                    |                 2 |              0.1607  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3216 | 15-20%                  |                 2 |              0.1608  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3328 | 5-10%                   |                10 |              0.03328 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3439 | >20%                    |                10 |              0.03439 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | >20%                    |                 5 |              0.07038 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | 10-15%                  |                 2 |              0.17765 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3593 | >20%                    |                10 |              0.03593 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3666 | >20%                    |                 2 |              0.1833  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3678 | >20%                    |                 5 |              0.07356 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3725 | >20%                    |                10 |              0.03725 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3728 | 5-10%                   |                10 |              0.03728 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | <5%                     |                 2 |              0.1873  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3765 | 15-20%                  |                 5 |              0.0753  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3777 | 15-20%                  |                 2 |              0.18885 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3786 | 5-10%                   |                10 |              0.03786 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3818 | >20%                    |                 2 |              0.1909  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3837 | >20%                    |                 2 |              0.19185 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.392  | >20%                    |                 5 |              0.0784  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3956 | 10-15%                  |                 2 |              0.1978  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4012 | >20%                    |                10 |              0.04012 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4017 | >20%                    |                 5 |              0.08034 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.412  | >20%                    |                10 |              0.0412  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4182 | 10-15%                  |                 2 |              0.2091  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | >20%                    |                 5 |              0.08508 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4275 | >20%                    |                 2 |              0.21375 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4339 | <5%                     |                 2 |              0.21695 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4358 | >20%                    |                 2 |              0.2179  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | >20%                    |                 5 |              0.08716 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4406 | >20%                    |                 2 |              0.2203  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | >20%                    |                 5 |              0.08842 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4459 | >20%                    |                10 |              0.04459 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4531 | 10-15%                  |                10 |              0.04531 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4549 | 15-20%                  |                 2 |              0.22745 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4639 | 10-15%                  |                 2 |              0.23195 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4763 | >20%                    |                 2 |              0.23815 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4778 | >20%                    |                 5 |              0.09556 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4962 | >20%                    |                 2 |              0.2481  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4969 | >20%                    |                 5 |              0.09938 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5041 | >20%                    |                 5 |              0.10082 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5048 | 15-20%                  |                 5 |              0.10096 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5085 | >20%                    |                 2 |              0.25425 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5396 | >20%                    |                 5 |              0.10792 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5455 | >20%                    |                10 |              0.05455 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5482 | >20%                    |                 2 |              0.2741  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.552  | >20%                    |                 5 |              0.1104  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5527 | >20%                    |                 5 |              0.11054 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5539 | 5-10%                   |                 2 |              0.27695 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5623 | <5%                     |                 2 |              0.28115 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5623 | >20%                    |                 2 |              0.28115 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5716 | >20%                    |                 5 |              0.11432 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5748 | >20%                    |                 5 |              0.11496 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5769 | >20%                    |                 5 |              0.11538 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5775 | 10-15%                  |                 5 |              0.1155  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6005 | >20%                    |                 5 |              0.1201  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.607  | >20%                    |                 5 |              0.1214  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6082 | >20%                    |                 2 |              0.3041  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6108 | >20%                    |                 5 |              0.12216 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6242 | >20%                    |                 5 |              0.12484 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.631  | >20%                    |                 2 |              0.3155  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6456 | <5%                     |                 5 |              0.12912 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6514 | >20%                    |                 5 |              0.13028 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6566 | >20%                    |                 5 |              0.13132 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6637 | >20%                    |                 5 |              0.13274 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6798 | >20%                    |                10 |              0.06798 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6831 | >20%                    |                 5 |              0.13662 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6847 | 15-20%                  |                 5 |              0.13694 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6921 | 15-20%                  |                10 |              0.06921 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6946 | >20%                    |                 5 |              0.13892 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6951 | >20%                    |                10 |              0.06951 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6957 | 5-10%                   |                 5 |              0.13914 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7041 | >20%                    |                10 |              0.07041 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7177 | >20%                    |                10 |              0.07177 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7316 | <5%                     |                10 |              0.07316 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7349 | >20%                    |                 2 |              0.36745 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7426 | >20%                    |                 5 |              0.14852 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7445 |                         |                 2 |              0.37225 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7514 | >20%                    |                10 |              0.07514 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7544 | >20%                    |                10 |              0.07544 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7549 | >20%                    |                 5 |              0.15098 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7578 | >20%                    |                10 |              0.07578 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7755 | >20%                    |                 5 |              0.1551  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7779 | >20%                    |                10 |              0.07779 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7783 | >20%                    |                 2 |              0.38915 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.812  | 10-15%                  |                 2 |              0.406   |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8184 |                         |                 2 |              0.4092  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8237 | >20%                    |                 2 |              0.41185 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.828  | >20%                    |                 5 |              0.1656  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8417 | >20%                    |                10 |              0.08417 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8492 |                         |                 5 |              0.16984 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.858  | >20%                    |                 5 |              0.1716  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8637 | 15-20%                  |                10 |              0.08637 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.867  | >20%                    |                10 |              0.0867  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8672 | >20%                    |                 2 |              0.4336  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8821 | 5-10%                   |                10 |              0.08821 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8909 | 15-20%                  |                10 |              0.08909 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8954 | >20%                    |                 5 |              0.17908 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9003 | >20%                    |                 5 |              0.18006 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9046 | >20%                    |                10 |              0.09046 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9088 | 10-15%                  |                 2 |              0.4544  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9163 | >20%                    |                10 |              0.09163 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9181 | >20%                    |                10 |              0.09181 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9239 | >20%                    |                 2 |              0.46195 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9479 | 15-20%                  |                10 |              0.09479 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9695 | >20%                    |                10 |              0.09695 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9768 | >20%                    |                 5 |              0.19536 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9789 | >20%                    |                 5 |              0.19578 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9902 | 5-10%                   |                10 |              0.09902 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0261 | 15-20%                  |                10 |              0.10261 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0334 | >20%                    |                10 |              0.10334 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0335 | >20%                    |                 5 |              0.2067  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0383 | 15-20%                  |                 2 |              0.51915 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0466 | >20%                    |                10 |              0.10466 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0654 | >20%                    |                10 |              0.10654 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.071  | >20%                    |                10 |              0.1071  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1253 | >20%                    |                 2 |              0.56265 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1295 | >20%                    |                10 |              0.11295 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1333 | >20%                    |                 5 |              0.22666 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1403 | 15-20%                  |                10 |              0.11403 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1581 | >20%                    |                10 |              0.11581 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1678 |                         |                10 |              0.11678 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1787 | >20%                    |                10 |              0.11787 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.201  | 5-10%                   |                 2 |              0.6005  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2516 | 15-20%                  |                10 |              0.12516 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2609 | 10-15%                  |                 2 |              0.63045 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2819 | >20%                    |                 5 |              0.25638 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2861 | 5-10%                   |                 2 |              0.64305 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2937 |                         |                 5 |              0.25874 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3112 | >20%                    |                10 |              0.13112 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3469 | >20%                    |                 5 |              0.26938 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3488 | 5-10%                   |                 5 |              0.26976 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4103 | >20%                    |                10 |              0.14103 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5553 | 15-20%                  |                 5 |              0.31106 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6069 | 10-15%                  |                10 |              0.16069 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6271 | >20%                    |                10 |              0.16271 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7197 | 5-10%                   |                10 |              0.17197 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8428 |                         |                10 |              0.18428 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8705 | >20%                    |                10 |              0.18705 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8786 | >20%                    |                10 |              0.18786 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.94   | 15-20%                  |                10 |              0.194   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0805 | 5-10%                   |                 2 |              1.04025 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.1767 | >20%                    |                 5 |              0.43534 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.6387 | >20%                    |                 5 |              0.52774 |