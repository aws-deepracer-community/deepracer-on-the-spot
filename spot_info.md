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

Data correct as of 2025-09-18 01:42:11.756534, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1396 | >20%                    |                 2 |              0.0698  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.142  | 5-10%                   |                 2 |              0.071   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.15   | >20%                    |                 5 |              0.03    |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.162  | >20%                    |                 2 |              0.081   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1709 | >20%                    |                 2 |              0.08545 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1929 | 10-15%                  |                 2 |              0.09645 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2169 | 10-15%                  |                 5 |              0.04338 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2338 | >20%                    |                 5 |              0.04676 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2353 | >20%                    |                 2 |              0.11765 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | >20%                    |                 2 |              0.1262  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | >20%                    |                 2 |              0.12845 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | >20%                    |                 2 |              0.14585 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3035 | >20%                    |                 2 |              0.15175 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3066 | 5-10%                   |                 2 |              0.1533  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3079 | >20%                    |                 2 |              0.15395 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | >20%                    |                 2 |              0.1547  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | 10-15%                  |                 2 |              0.15545 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | 15-20%                  |                 2 |              0.1572  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3276 | 15-20%                  |                 2 |              0.1638  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3282 | 5-10%                   |                 2 |              0.1641  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | >20%                    |                 2 |              0.1659  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.341  | >20%                    |                10 |              0.0341  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | 10-15%                  |                 2 |              0.17205 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3491 | >20%                    |                 2 |              0.17455 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3523 | >20%                    |                10 |              0.03523 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3541 | >20%                    |                 5 |              0.07082 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.355  | 10-15%                  |                 5 |              0.071   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3589 | >20%                    |                 5 |              0.07178 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | >20%                    |                 2 |              0.183   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3729 | >20%                    |                 2 |              0.18645 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3795 | >20%                    |                 2 |              0.18975 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.384  | >20%                    |                 2 |              0.192   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3853 | >20%                    |                 2 |              0.19265 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3868 | >20%                    |                 5 |              0.07736 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3961 | 15-20%                  |                 5 |              0.07922 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3999 | 15-20%                  |                10 |              0.03999 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4014 | >20%                    |                 2 |              0.2007  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4015 | >20%                    |                10 |              0.04015 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4133 | >20%                    |                 5 |              0.08266 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.415  | >20%                    |                 5 |              0.083   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4163 | >20%                    |                 5 |              0.08326 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | >20%                    |                 5 |              0.08448 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4277 | >20%                    |                 5 |              0.08554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4334 | 15-20%                  |                 2 |              0.2167  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4377 | >20%                    |                 2 |              0.21885 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | 5-10%                   |                 2 |              0.22335 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4475 | >20%                    |                 2 |              0.22375 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4481 | 15-20%                  |                 2 |              0.22405 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4653 | >20%                    |                 2 |              0.23265 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4655 | 10-15%                  |                 2 |              0.23275 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | >20%                    |                 5 |              0.09436 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4742 | 10-15%                  |                 2 |              0.2371  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4765 | <5%                     |                 2 |              0.23825 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4841 | >20%                    |                 5 |              0.09682 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4977 | >20%                    |                 2 |              0.24885 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | >20%                    |                 5 |              0.10006 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5044 | >20%                    |                 5 |              0.10088 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5088 | 5-10%                   |                 5 |              0.10176 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5144 | >20%                    |                 2 |              0.2572  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5149 | >20%                    |                 5 |              0.10298 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5179 | >20%                    |                 2 |              0.25895 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5222 | >20%                    |                 2 |              0.2611  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.523  | 5-10%                   |                 2 |              0.2615  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5243 | 10-15%                  |                 2 |              0.26215 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5292 | >20%                    |                 5 |              0.10584 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5312 | >20%                    |                 5 |              0.10624 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5438 | >20%                    |                 2 |              0.2719  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5467 | 15-20%                  |                 2 |              0.27335 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5616 | >20%                    |                 5 |              0.11232 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5706 | >20%                    |                 2 |              0.2853  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5792 | >20%                    |                 5 |              0.11584 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5808 | >20%                    |                 5 |              0.11616 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5812 | 5-10%                   |                10 |              0.05812 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5854 | >20%                    |                 2 |              0.2927  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5885 | >20%                    |                 5 |              0.1177  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5914 | >20%                    |                 5 |              0.11828 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6012 | >20%                    |                 5 |              0.12024 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6097 | >20%                    |                10 |              0.06097 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6116 | >20%                    |                 2 |              0.3058  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6154 | 15-20%                  |                 5 |              0.12308 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6182 | 10-15%                  |                 5 |              0.12364 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6268 | 10-15%                  |                 5 |              0.12536 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6382 | >20%                    |                 5 |              0.12764 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6455 | >20%                    |                10 |              0.06455 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6466 | 15-20%                  |                 2 |              0.3233  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6508 | 15-20%                  |                 5 |              0.13016 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6552 | 15-20%                  |                10 |              0.06552 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6556 | >20%                    |                 2 |              0.3278  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6603 | >20%                    |                 5 |              0.13206 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.666  | 15-20%                  |                 5 |              0.1332  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6702 | >20%                    |                 5 |              0.13404 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6706 | >20%                    |                 5 |              0.13412 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6715 | 15-20%                  |                10 |              0.06715 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6746 | >20%                    |                 5 |              0.13492 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6792 | >20%                    |                 2 |              0.3396  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6878 | >20%                    |                 5 |              0.13756 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6942 | >20%                    |                 5 |              0.13884 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.697  | >20%                    |                 5 |              0.1394  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7056 | >20%                    |                 5 |              0.14112 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7062 | >20%                    |                10 |              0.07062 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7148 | 10-15%                  |                 2 |              0.3574  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7242 | >20%                    |                 5 |              0.14484 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7288 | >20%                    |                 5 |              0.14576 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7359 | >20%                    |                10 |              0.07359 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7397 | 15-20%                  |                 5 |              0.14794 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7415 | >20%                    |                10 |              0.07415 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7496 | 15-20%                  |                10 |              0.07496 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7507 | >20%                    |                10 |              0.07507 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.771  | >20%                    |                10 |              0.0771  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7978 | >20%                    |                 5 |              0.15956 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7979 | >20%                    |                 5 |              0.15958 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8301 | >20%                    |                 5 |              0.16602 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8307 | 10-15%                  |                 2 |              0.41535 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8314 | >20%                    |                 5 |              0.16628 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8315 | <5%                     |                 2 |              0.41575 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8429 | 15-20%                  |                10 |              0.08429 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8523 | 10-15%                  |                10 |              0.08523 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8578 | <5%                     |                10 |              0.08578 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8853 | 15-20%                  |                10 |              0.08853 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9003 | >20%                    |                10 |              0.09003 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9065 | 5-10%                   |                10 |              0.09065 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9075 | >20%                    |                 5 |              0.1815  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9104 | <5%                     |                10 |              0.09104 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9168 | 10-15%                  |                10 |              0.09168 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9294 | 10-15%                  |                10 |              0.09294 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9364 | 15-20%                  |                10 |              0.09364 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9514 | >20%                    |                10 |              0.09514 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9522 | 15-20%                  |                10 |              0.09522 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.953  | <5%                     |                10 |              0.0953  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9583 | >20%                    |                10 |              0.09583 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9624 | 15-20%                  |                10 |              0.09624 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9683 | >20%                    |                10 |              0.09683 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9892 | >20%                    |                10 |              0.09892 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9898 | >20%                    |                 5 |              0.19796 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9922 | 15-20%                  |                10 |              0.09922 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0172 | 10-15%                  |                 5 |              0.20344 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0206 | >20%                    |                 2 |              0.5103  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0256 | >20%                    |                10 |              0.10256 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0299 | 10-15%                  |                10 |              0.10299 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.061  | 5-10%                   |                10 |              0.1061  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.07   | >20%                    |                 2 |              0.535   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.089  | 15-20%                  |                10 |              0.1089  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0905 | 5-10%                   |                10 |              0.10905 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0922 | 5-10%                   |                10 |              0.10922 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0947 | >20%                    |                10 |              0.10947 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0985 | <5%                     |                10 |              0.10985 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1185 | >20%                    |                 2 |              0.55925 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1243 | >20%                    |                 5 |              0.22486 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1315 | 10-15%                  |                 2 |              0.56575 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.157  | >20%                    |                10 |              0.1157  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1733 | >20%                    |                 5 |              0.23466 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1841 | >20%                    |                10 |              0.11841 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2018 | 15-20%                  |                10 |              0.12018 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2145 | >20%                    |                10 |              0.12145 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2158 | 5-10%                   |                 2 |              0.6079  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2307 | >20%                    |                 5 |              0.24614 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2836 | >20%                    |                10 |              0.12836 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3167 | 10-15%                  |                 5 |              0.26334 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3435 | 10-15%                  |                10 |              0.13435 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4329 | >20%                    |                10 |              0.14329 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4409 | >20%                    |                10 |              0.14409 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5226 | 10-15%                  |                 5 |              0.30452 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6001 | >20%                    |                10 |              0.16001 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.6641 | >20%                    |                10 |              0.16641 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7274 | >20%                    |                10 |              0.17274 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.834  | >20%                    |                10 |              0.1834  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9755 | 15-20%                  |                10 |              0.19755 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.177  | 10-15%                  |                10 |              0.2177  |