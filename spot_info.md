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

Data correct as of 2025-10-05 01:52:29.598637, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1851 | >20%                    |                 2 |              0.09255 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.199  | 10-15%                  |                 5 |              0.0398  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2014 | >20%                    |                 2 |              0.1007  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2099 | 10-15%                  |                 2 |              0.10495 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2377 | >20%                    |                 2 |              0.11885 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | 5-10%                   |                 2 |              0.122   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2444 | >20%                    |                 2 |              0.1222  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.259  | >20%                    |                 5 |              0.0518  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | >20%                    |                 2 |              0.1315  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2684 | >20%                    |                 2 |              0.1342  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.289  | >20%                    |                 2 |              0.1445  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | 10-15%                  |                 2 |              0.14585 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2927 | >20%                    |                 2 |              0.14635 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2952 | >20%                    |                 5 |              0.05904 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | 5-10%                   |                 2 |              0.1528  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.32   | >20%                    |                10 |              0.032   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3228 | 10-15%                  |                 2 |              0.1614  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3272 | 15-20%                  |                 2 |              0.1636  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3338 | >20%                    |                 2 |              0.1669  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | >20%                    |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3374 | 15-20%                  |                 2 |              0.1687  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.349  | >20%                    |                 2 |              0.1745  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3628 | >20%                    |                 2 |              0.1814  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3641 | 15-20%                  |                 2 |              0.18205 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3645 | >20%                    |                 2 |              0.18225 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3656 | >20%                    |                 2 |              0.1828  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3665 | >20%                    |                 5 |              0.0733  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3715 | >20%                    |                 5 |              0.0743  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3812 | >20%                    |                 2 |              0.1906  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3833 | >20%                    |                 2 |              0.19165 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.391  | >20%                    |                10 |              0.0391  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3934 | >20%                    |                 5 |              0.07868 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3995 | >20%                    |                 2 |              0.19975 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4033 | >20%                    |                 5 |              0.08066 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4076 | 5-10%                   |                 2 |              0.2038  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4112 | >20%                    |                 5 |              0.08224 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4121 | >20%                    |                 2 |              0.20605 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | 5-10%                   |                 2 |              0.2067  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4176 | >20%                    |                 5 |              0.08352 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4319 | >20%                    |                 2 |              0.21595 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4322 | >20%                    |                 5 |              0.08644 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4345 | 10-15%                  |                 5 |              0.0869  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4346 | 15-20%                  |                 2 |              0.2173  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4374 | >20%                    |                 2 |              0.2187  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4375 | <5%                     |                 2 |              0.21875 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4423 | >20%                    |                 2 |              0.22115 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4504 | >20%                    |                 5 |              0.09008 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4545 | 10-15%                  |                 2 |              0.22725 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4564 | 15-20%                  |                 5 |              0.09128 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.463  | >20%                    |                 5 |              0.0926  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4842 | 10-15%                  |                 2 |              0.2421  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | >20%                    |                 5 |              0.09844 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4924 | >20%                    |                 2 |              0.2462  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.498  | >20%                    |                 5 |              0.0996  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4995 | >20%                    |                 2 |              0.24975 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5091 | >20%                    |                 2 |              0.25455 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5152 | >20%                    |                10 |              0.05152 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5171 | 5-10%                   |                 5 |              0.10342 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5178 | >20%                    |                 5 |              0.10356 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5219 | >20%                    |                 5 |              0.10438 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5303 | 5-10%                   |                 2 |              0.26515 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5345 | >20%                    |                 2 |              0.26725 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5357 | >20%                    |                 5 |              0.10714 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5409 | >20%                    |                 5 |              0.10818 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5431 | 10-15%                  |                 2 |              0.27155 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5448 | <5%                     |                10 |              0.05448 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5485 | >20%                    |                 5 |              0.1097  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.557  | >20%                    |                 2 |              0.2785  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5659 | >20%                    |                10 |              0.05659 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5697 | 15-20%                  |                 2 |              0.28485 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5702 | 15-20%                  |                10 |              0.05702 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5732 | >20%                    |                 5 |              0.11464 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.584  | >20%                    |                 5 |              0.1168  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5856 | >20%                    |                 2 |              0.2928  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5903 | >20%                    |                 5 |              0.11806 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6089 | >20%                    |                 5 |              0.12178 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6092 | >20%                    |                 5 |              0.12184 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6104 | >20%                    |                 2 |              0.3052  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6158 | >20%                    |                 5 |              0.12316 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6237 | >20%                    |                 2 |              0.31185 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.625  | 10-15%                  |                 5 |              0.125   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6277 | 15-20%                  |                 5 |              0.12554 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6289 | 10-15%                  |                 5 |              0.12578 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6428 | >20%                    |                 5 |              0.12856 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6497 | 15-20%                  |                 2 |              0.32485 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6509 | >20%                    |                 5 |              0.13018 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6531 | >20%                    |                 5 |              0.13062 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6656 | >20%                    |                10 |              0.06656 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6685 | >20%                    |                 5 |              0.1337  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6695 | >20%                    |                 5 |              0.1339  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6731 | >20%                    |                 5 |              0.13462 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6785 | >20%                    |                 5 |              0.1357  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6903 | >20%                    |                 5 |              0.13806 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6964 | 15-20%                  |                10 |              0.06964 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6981 | >20%                    |                 5 |              0.13962 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7004 | 15-20%                  |                 5 |              0.14008 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7021 | >20%                    |                10 |              0.07021 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7061 | 5-10%                   |                10 |              0.07061 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7075 | >20%                    |                 2 |              0.35375 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7083 | 15-20%                  |                10 |              0.07083 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7101 | 15-20%                  |                10 |              0.07101 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7108 | >20%                    |                 5 |              0.14216 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7222 | 15-20%                  |                 5 |              0.14444 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7299 | >20%                    |                 2 |              0.36495 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7432 | 15-20%                  |                10 |              0.07432 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7457 | >20%                    |                10 |              0.07457 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7457 | 10-15%                  |                 2 |              0.37285 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7468 | >20%                    |                10 |              0.07468 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7779 | >20%                    |                 5 |              0.15558 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7892 | >20%                    |                10 |              0.07892 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7971 | >20%                    |                 5 |              0.15942 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8049 | >20%                    |                 5 |              0.16098 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.819  | >20%                    |                10 |              0.0819  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8241 | <5%                     |                10 |              0.08241 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8243 | >20%                    |                10 |              0.08243 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8304 | 15-20%                  |                 5 |              0.16608 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8306 | >20%                    |                 5 |              0.16612 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8377 | >20%                    |                10 |              0.08377 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8407 | 15-20%                  |                10 |              0.08407 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8475 | >20%                    |                10 |              0.08475 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8539 | 10-15%                  |                 5 |              0.17078 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.865  | >20%                    |                 5 |              0.173   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8653 | >20%                    |                10 |              0.08653 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8785 | 10-15%                  |                 2 |              0.43925 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8848 | 15-20%                  |                10 |              0.08848 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8963 | 15-20%                  |                10 |              0.08963 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9064 | 10-15%                  |                10 |              0.09064 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.907  | >20%                    |                10 |              0.0907  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9074 | 10-15%                  |                10 |              0.09074 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9076 | <5%                     |                10 |              0.09076 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9091 | <5%                     |                10 |              0.09091 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9269 | 5-10%                   |                10 |              0.09269 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.975  | >20%                    |                10 |              0.0975  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9837 | 15-20%                  |                10 |              0.09837 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9918 | 15-20%                  |                10 |              0.09918 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9925 | >20%                    |                 2 |              0.49625 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9943 | 10-15%                  |                10 |              0.09943 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0011 | >20%                    |                 2 |              0.50055 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.004  | 5-10%                   |                10 |              0.1004  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0166 | >20%                    |                 5 |              0.20332 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0375 | >20%                    |                 2 |              0.51875 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0528 | >20%                    |                10 |              0.10528 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0641 | >20%                    |                 5 |              0.21282 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0699 | 10-15%                  |                 2 |              0.53495 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0768 | >20%                    |                10 |              0.10768 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0872 | >20%                    |                10 |              0.10872 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0936 | >20%                    |                 5 |              0.21872 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.095  | >20%                    |                 5 |              0.219   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1103 | 15-20%                  |                10 |              0.11103 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1355 | 5-10%                   |                10 |              0.11355 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.136  | <5%                     |                10 |              0.1136  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1388 | 5-10%                   |                10 |              0.11388 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1421 | >20%                    |                10 |              0.11421 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1479 | >20%                    |                 5 |              0.22958 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1706 | 10-15%                  |                10 |              0.11706 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2264 | 15-20%                  |                10 |              0.12264 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2533 | 5-10%                   |                 2 |              0.62665 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2725 | >20%                    |                10 |              0.12725 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2887 | >20%                    |                10 |              0.12887 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3052 | 10-15%                  |                10 |              0.13052 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3789 | 10-15%                  |                 5 |              0.27578 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5117 | >20%                    |                10 |              0.15117 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.592  | >20%                    |                10 |              0.1592  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6397 | >20%                    |                10 |              0.16397 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6492 | 10-15%                  |                 5 |              0.32984 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7205 | >20%                    |                10 |              0.17205 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0669 | 10-15%                  |                10 |              0.20669 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2513 | 15-20%                  |                10 |              0.22513 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |