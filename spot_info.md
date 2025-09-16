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

Data correct as of 2025-09-16 01:42:18.684492, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1285 | 5-10%                   |                 2 |              0.06425 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1457 | >20%                    |                 2 |              0.07285 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1697 | >20%                    |                 2 |              0.08485 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1967 | 10-15%                  |                 2 |              0.09835 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.232  | 10-15%                  |                 5 |              0.0464  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.261  | >20%                    |                 2 |              0.1305  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2879 | >20%                    |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | >20%                    |                 2 |              0.14585 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2971 | >20%                    |                 2 |              0.14855 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3053 | >20%                    |                 2 |              0.15265 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | 5-10%                   |                 2 |              0.15415 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | 15-20%                  |                 2 |              0.156   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3163 | 10-15%                  |                 2 |              0.15815 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3239 | >20%                    |                 2 |              0.16195 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3267 | 5-10%                   |                 2 |              0.16335 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3348 | >20%                    |                 2 |              0.1674  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3358 | <5%                     |                10 |              0.03358 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | 15-20%                  |                 2 |              0.17205 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3583 | >20%                    |                 5 |              0.07166 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3593 | 10-15%                  |                 2 |              0.17965 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3651 | >20%                    |                 2 |              0.18255 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3658 | >20%                    |                10 |              0.03658 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3703 | 15-20%                  |                 5 |              0.07406 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3707 | 10-15%                  |                 5 |              0.07414 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3758 | >20%                    |                 2 |              0.1879  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3782 | >20%                    |                 5 |              0.07564 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3814 | >20%                    |                 5 |              0.07628 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3823 | >20%                    |                 2 |              0.19115 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3882 | >20%                    |                 2 |              0.1941  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3888 | 15-20%                  |                10 |              0.03888 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3967 | >20%                    |                 5 |              0.07934 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3978 | >20%                    |                 2 |              0.1989  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4024 | >20%                    |                10 |              0.04024 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4033 | >20%                    |                 2 |              0.20165 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4069 | >20%                    |                 5 |              0.08138 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4195 | >20%                    |                 5 |              0.0839  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4202 | >20%                    |                 5 |              0.08404 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4265 | 15-20%                  |                 2 |              0.21325 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4291 | >20%                    |                 5 |              0.08582 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4302 | >20%                    |                 2 |              0.2151  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.445  | 15-20%                  |                 2 |              0.2225  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4518 | >20%                    |                 2 |              0.2259  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4547 | 10-15%                  |                 2 |              0.22735 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4594 | 5-10%                   |                 2 |              0.2297  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4658 | >20%                    |                 2 |              0.2329  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4671 | >20%                    |                 5 |              0.09342 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.469  | >20%                    |                 2 |              0.2345  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4712 | >20%                    |                 5 |              0.09424 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4745 | 10-15%                  |                 2 |              0.23725 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4759 | <5%                     |                 2 |              0.23795 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | >20%                    |                 5 |              0.09538 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4928 | >20%                    |                 2 |              0.2464  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5013 | >20%                    |                 5 |              0.10026 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | >20%                    |                 5 |              0.10044 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5034 | >20%                    |                 2 |              0.2517  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5108 | 5-10%                   |                 5 |              0.10216 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5119 | >20%                    |                 2 |              0.25595 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5146 | >20%                    |                 2 |              0.2573  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5187 | 10-15%                  |                 2 |              0.25935 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5202 | >20%                    |                 5 |              0.10404 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5205 | >20%                    |                 5 |              0.1041  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5255 | 15-20%                  |                 2 |              0.26275 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5281 | 5-10%                   |                 2 |              0.26405 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5318 | >20%                    |                 5 |              0.10636 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5418 | >20%                    |                 2 |              0.2709  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5571 | >20%                    |                10 |              0.05571 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5594 | >20%                    |                 5 |              0.11188 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5704 | >20%                    |                 2 |              0.2852  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5797 | >20%                    |                 5 |              0.11594 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5806 | >20%                    |                 2 |              0.2903  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5886 | >20%                    |                 5 |              0.11772 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5962 | 5-10%                   |                10 |              0.05962 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5966 | >20%                    |                 5 |              0.11932 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6007 | 10-15%                  |                 5 |              0.12014 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6056 | >20%                    |                 5 |              0.12112 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6153 | 15-20%                  |                 5 |              0.12306 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6189 | 10-15%                  |                 5 |              0.12378 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6241 | >20%                    |                 2 |              0.31205 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6291 | 15-20%                  |                10 |              0.06291 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6415 | >20%                    |                 5 |              0.1283  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6423 | >20%                    |                 2 |              0.32115 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.652  | 15-20%                  |                 2 |              0.326   |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6559 | >20%                    |                 5 |              0.13118 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6589 | >20%                    |                 5 |              0.13178 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6615 | >20%                    |                 5 |              0.1323  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6626 | 15-20%                  |                 5 |              0.13252 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.663  | 15-20%                  |                10 |              0.0663  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6678 | >20%                    |                 2 |              0.3339  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6702 | >20%                    |                 5 |              0.13404 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6789 | 15-20%                  |                 5 |              0.13578 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6859 | >20%                    |                10 |              0.06859 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6927 | >20%                    |                 5 |              0.13854 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6935 | 15-20%                  |                 5 |              0.1387  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6971 | 10-15%                  |                 2 |              0.34855 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7013 | >20%                    |                 5 |              0.14026 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7036 | >20%                    |                10 |              0.07036 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7038 | >20%                    |                 5 |              0.14076 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7072 | >20%                    |                 5 |              0.14144 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7222 | >20%                    |                 5 |              0.14444 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7239 | >20%                    |                10 |              0.07239 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7334 | >20%                    |                 5 |              0.14668 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7391 | >20%                    |                10 |              0.07391 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7464 | >20%                    |                10 |              0.07464 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7541 | <5%                     |                 2 |              0.37705 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7623 | >20%                    |                10 |              0.07623 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7802 | 15-20%                  |                10 |              0.07802 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7912 | >20%                    |                 5 |              0.15824 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7916 | >20%                    |                 5 |              0.15832 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8148 | >20%                    |                 5 |              0.16296 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8318 | >20%                    |                 5 |              0.16636 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.845  | 10-15%                  |                 2 |              0.4225  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8455 | 15-20%                  |                10 |              0.08455 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8542 | 10-15%                  |                10 |              0.08542 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8616 | <5%                     |                10 |              0.08616 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8772 | 15-20%                  |                10 |              0.08772 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8851 | 10-15%                  |                10 |              0.08851 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9055 | >20%                    |                10 |              0.09055 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9102 | >20%                    |                 5 |              0.18204 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9172 | <5%                     |                10 |              0.09172 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9175 | 5-10%                   |                10 |              0.09175 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9248 | >20%                    |                10 |              0.09248 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9487 | 10-15%                  |                10 |              0.09487 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9488 | >20%                    |                10 |              0.09488 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9495 | <5%                     |                10 |              0.09495 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9501 | 15-20%                  |                10 |              0.09501 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9564 | 15-20%                  |                10 |              0.09564 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9621 | 15-20%                  |                10 |              0.09621 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9656 | >20%                    |                 5 |              0.19312 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9665 | >20%                    |                10 |              0.09665 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9843 | 10-15%                  |                10 |              0.09843 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9926 | >20%                    |                10 |              0.09926 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0121 | >20%                    |                 2 |              0.50605 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0153 | 15-20%                  |                10 |              0.10153 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.046  | 10-15%                  |                 5 |              0.2092  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0653 | >20%                    |                10 |              0.10653 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0723 | 5-10%                   |                10 |              0.10723 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0755 | 5-10%                   |                10 |              0.10755 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0798 | >20%                    |                10 |              0.10798 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0949 | 5-10%                   |                10 |              0.10949 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1022 | >20%                    |                 2 |              0.5511  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1024 | 15-20%                  |                10 |              0.11024 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1027 | >20%                    |                 2 |              0.55135 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1082 | <5%                     |                10 |              0.11082 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.117  | 10-15%                  |                 2 |              0.5585  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.119  | >20%                    |                 5 |              0.2238  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1549 | >20%                    |                 5 |              0.23098 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1555 | >20%                    |                10 |              0.11555 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1795 | 15-20%                  |                10 |              0.11795 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2062 | 5-10%                   |                 2 |              0.6031  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2109 | >20%                    |                10 |              0.12109 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2405 | >20%                    |                 5 |              0.2481  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2486 | >20%                    |                10 |              0.12486 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2547 | >20%                    |                10 |              0.12547 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3248 | 10-15%                  |                 5 |              0.26496 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3372 | 10-15%                  |                10 |              0.13372 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3712 | >20%                    |                10 |              0.13712 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4577 | >20%                    |                10 |              0.14577 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4924 | 10-15%                  |                 5 |              0.29848 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5127 | >20%                    |                10 |              0.15127 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5725 | >20%                    |                10 |              0.15725 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6985 | >20%                    |                10 |              0.16985 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8805 | >20%                    |                10 |              0.18805 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9116 | 15-20%                  |                10 |              0.19116 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1624 | 10-15%                  |                10 |              0.21624 |