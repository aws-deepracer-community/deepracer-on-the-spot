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

Data correct as of 2025-04-15 01:49:27.187308, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1127 | 10-15%                  |                 2 |              0.05635 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1214 | 15-20%                  |                 2 |              0.0607  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1575 | >20%                    |                 2 |              0.07875 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1704 | 10-15%                  |                 5 |              0.03408 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1806 | >20%                    |                 2 |              0.0903  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.191  | 15-20%                  |                 5 |              0.0382  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1977 | <5%                     |                 2 |              0.09885 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.216  | 5-10%                   |                 5 |              0.0432  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | 15-20%                  |                 2 |              0.11515 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | >20%                    |                 2 |              0.12075 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2449 | 15-20%                  |                10 |              0.02449 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2631 | 5-10%                   |                 5 |              0.05262 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.267  | 10-15%                  |                 5 |              0.0534  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2768 | 10-15%                  |                 2 |              0.1384  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.277  | 10-15%                  |                10 |              0.0277  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2773 | 15-20%                  |                 2 |              0.13865 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2802 | 5-10%                   |                 2 |              0.1401  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2807 | <5%                     |                 2 |              0.14035 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | 15-20%                  |                 2 |              0.14085 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2839 | 5-10%                   |                 2 |              0.14195 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2842 | <5%                     |                 2 |              0.1421  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2933 | >20%                    |                 2 |              0.14665 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2945 | 10-15%                  |                 2 |              0.14725 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | >20%                    |                 2 |              0.14795 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | <5%                     |                 2 |              0.14905 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | 10-15%                  |                 2 |              0.1499  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3054 | 10-15%                  |                 5 |              0.06108 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3102 | 10-15%                  |                10 |              0.03102 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3116 | <5%                     |                10 |              0.03116 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3223 | 10-15%                  |                10 |              0.03223 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3327 | 10-15%                  |                 2 |              0.16635 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3339 | >20%                    |                 5 |              0.06678 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3402 | >20%                    |                 2 |              0.1701  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3491 | >20%                    |                 5 |              0.06982 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3574 | >20%                    |                 2 |              0.1787  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3587 | >20%                    |                 2 |              0.17935 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3621 | 15-20%                  |                 2 |              0.18105 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3621 | >20%                    |                10 |              0.03621 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3656 | >20%                    |                 2 |              0.1828  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3809 | <5%                     |                 2 |              0.19045 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3813 | >20%                    |                 5 |              0.07626 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.382  | 15-20%                  |                10 |              0.0382  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3827 | 10-15%                  |                 5 |              0.07654 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3855 | <5%                     |                 2 |              0.19275 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3878 | >20%                    |                 2 |              0.1939  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3887 | <5%                     |                 2 |              0.19435 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3906 | >20%                    |                 2 |              0.1953  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | >20%                    |                 2 |              0.19715 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3947 | >20%                    |                10 |              0.03947 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4072 | 10-15%                  |                 5 |              0.08144 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4118 | 15-20%                  |                 2 |              0.2059  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4223 | >20%                    |                 5 |              0.08446 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4267 | 10-15%                  |                10 |              0.04267 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4281 | 15-20%                  |                 2 |              0.21405 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4285 | 10-15%                  |                 2 |              0.21425 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4307 | >20%                    |                 5 |              0.08614 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.432  | >20%                    |                 5 |              0.0864  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4322 | 10-15%                  |                 5 |              0.08644 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4338 | <5%                     |                10 |              0.04338 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.44   | >20%                    |                 5 |              0.088   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4428 | >20%                    |                 2 |              0.2214  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4435 | 5-10%                   |                 5 |              0.0887  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4438 | <5%                     |                 2 |              0.2219  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4449 | <5%                     |                 2 |              0.22245 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4533 | >20%                    |                 2 |              0.22665 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4609 | >20%                    |                 2 |              0.23045 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4659 | <5%                     |                 5 |              0.09318 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4676 | >20%                    |                 5 |              0.09352 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4739 | >20%                    |                10 |              0.04739 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4752 | 5-10%                   |                 2 |              0.2376  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | 5-10%                   |                 5 |              0.09624 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4879 | >20%                    |                 5 |              0.09758 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4899 | >20%                    |                 5 |              0.09798 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | <5%                     |                 5 |              0.09938 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4987 | >20%                    |                 5 |              0.09974 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5041 | >20%                    |                 2 |              0.25205 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5054 | 15-20%                  |                 5 |              0.10108 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5089 | >20%                    |                 2 |              0.25445 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5109 | 10-15%                  |                 5 |              0.10218 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5203 | 5-10%                   |                10 |              0.05203 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5222 | 15-20%                  |                 2 |              0.2611  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5235 | 15-20%                  |                 2 |              0.26175 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5314 | 5-10%                   |                 5 |              0.10628 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5388 | >20%                    |                 2 |              0.2694  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5459 | 5-10%                   |                 5 |              0.10918 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5596 | 5-10%                   |                 5 |              0.11192 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5619 | >20%                    |                 5 |              0.11238 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5735 | 5-10%                   |                 2 |              0.28675 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5772 | >20%                    |                 5 |              0.11544 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5799 | 15-20%                  |                 5 |              0.11598 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5799 | >20%                    |                 5 |              0.11598 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5815 | >20%                    |                 2 |              0.29075 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.586  | >20%                    |                 2 |              0.293   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5952 | >20%                    |                 2 |              0.2976  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5963 | >20%                    |                 2 |              0.29815 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5966 | >20%                    |                10 |              0.05966 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5993 | <5%                     |                 5 |              0.11986 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6053 | 15-20%                  |                 5 |              0.12106 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.62   | 10-15%                  |                 5 |              0.124   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.631  | 10-15%                  |                10 |              0.0631  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6326 | >20%                    |                 5 |              0.12652 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6349 | 10-15%                  |                 5 |              0.12698 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6427 | >20%                    |                 5 |              0.12854 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6533 | <5%                     |                 5 |              0.13066 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6541 | >20%                    |                10 |              0.06541 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6626 | >20%                    |                 5 |              0.13252 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6733 | >20%                    |                10 |              0.06733 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6736 | <5%                     |                 5 |              0.13472 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6751 | 10-15%                  |                 2 |              0.33755 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6791 | >20%                    |                 2 |              0.33955 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | >20%                    |                10 |              0.06795 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6944 | 10-15%                  |                10 |              0.06944 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.695  | >20%                    |                 5 |              0.139   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6965 | 5-10%                   |                 5 |              0.1393  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6998 | >20%                    |                 5 |              0.13996 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7002 | >20%                    |                 5 |              0.14004 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7064 | <5%                     |                10 |              0.07064 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7133 | 5-10%                   |                10 |              0.07133 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7156 | >20%                    |                10 |              0.07156 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7187 | >20%                    |                10 |              0.07187 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.729  | >20%                    |                 2 |              0.3645  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7409 | >20%                    |                 2 |              0.37045 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7461 | 10-15%                  |                 5 |              0.14922 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7544 | <5%                     |                10 |              0.07544 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7576 | 15-20%                  |                 5 |              0.15152 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7617 | >20%                    |                 5 |              0.15234 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.762  | <5%                     |                 5 |              0.1524  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.763  | <5%                     |                10 |              0.0763  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7679 | <5%                     |                10 |              0.07679 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | <5%                     |                10 |              0.07784 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7804 | >20%                    |                10 |              0.07804 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7848 | >20%                    |                10 |              0.07848 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7854 | 5-10%                   |                10 |              0.07854 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7951 | 10-15%                  |                10 |              0.07951 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8014 | <5%                     |                10 |              0.08014 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8178 | 15-20%                  |                 5 |              0.16356 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8188 | 10-15%                  |                10 |              0.08188 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8226 | >20%                    |                 2 |              0.4113  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8313 | >20%                    |                 2 |              0.41565 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8479 | 10-15%                  |                10 |              0.08479 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8516 | 15-20%                  |                10 |              0.08516 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8521 | 15-20%                  |                10 |              0.08521 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8527 | 15-20%                  |                10 |              0.08527 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8538 | <5%                     |                10 |              0.08538 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8699 | >20%                    |                10 |              0.08699 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8749 | >20%                    |                10 |              0.08749 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8805 | >20%                    |                10 |              0.08805 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8902 | <5%                     |                10 |              0.08902 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8913 | 15-20%                  |                 5 |              0.17826 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8924 | >20%                    |                10 |              0.08924 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | >20%                    |                10 |              0.08931 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8969 | >20%                    |                 5 |              0.17938 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9013 | <5%                     |                10 |              0.09013 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9575 | 10-15%                  |                10 |              0.09575 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9661 | 5-10%                   |                10 |              0.09661 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9872 | <5%                     |                 2 |              0.4936  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0087 | >20%                    |                 5 |              0.20174 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0215 | >20%                    |                10 |              0.10215 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0539 | >20%                    |                 5 |              0.21078 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0965 | <5%                     |                10 |              0.10965 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1122 | <5%                     |                10 |              0.11122 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.126  | 10-15%                  |                 2 |              0.563   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1797 | 15-20%                  |                10 |              0.11797 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2    | 15-20%                  |                10 |              0.12    |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2268 | <5%                     |                 5 |              0.24536 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2313 | >20%                    |                10 |              0.12313 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2667 | >20%                    |                 5 |              0.25334 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2902 | >20%                    |                 5 |              0.25804 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2947 | >20%                    |                10 |              0.12947 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3012 | 5-10%                   |                 2 |              0.6506  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3448 | 15-20%                  |                10 |              0.13448 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4595 | >20%                    |                 2 |              0.72975 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6411 | >20%                    |                10 |              0.16411 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6988 | >20%                    |                10 |              0.16988 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8191 | <5%                     |                10 |              0.18191 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9164 | 15-20%                  |                10 |              0.19164 |