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

Data correct as of 2025-08-19 01:52:54.519685, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.101  | 5-10%                   |                 2 |              0.0505  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1628 | >20%                    |                 5 |              0.03256 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1875 | >20%                    |                 2 |              0.09375 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1983 | 10-15%                  |                 5 |              0.03966 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1998 | 10-15%                  |                 2 |              0.0999  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | >20%                    |                 2 |              0.10325 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2323 | >20%                    |                 5 |              0.04646 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | >20%                    |                 2 |              0.123   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | >20%                    |                 2 |              0.1272  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2629 | >20%                    |                 2 |              0.13145 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2642 | >20%                    |                 2 |              0.1321  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | >20%                    |                 2 |              0.1522  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | >20%                    |                 2 |              0.15295 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | 10-15%                  |                 2 |              0.1546  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | 10-15%                  |                 2 |              0.15575 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | 5-10%                   |                 2 |              0.1567  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | 10-15%                  |                 2 |              0.157   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3449 | >20%                    |                 2 |              0.17245 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3454 | >20%                    |                 5 |              0.06908 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3497 | >20%                    |                 2 |              0.17485 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3521 | >20%                    |                 2 |              0.17605 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3549 | >20%                    |                 2 |              0.17745 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3629 | >20%                    |                 2 |              0.18145 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | >20%                    |                 5 |              0.07366 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3842 | >20%                    |                 2 |              0.1921  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3842 | >20%                    |                 2 |              0.1921  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3888 | >20%                    |                 2 |              0.1944  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3962 | >20%                    |                 5 |              0.07924 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4097 | >20%                    |                 5 |              0.08194 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.421  | >20%                    |                 5 |              0.0842  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4243 | >20%                    |                 5 |              0.08486 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4269 | 10-15%                  |                 2 |              0.21345 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4273 | >20%                    |                 2 |              0.21365 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | >20%                    |                 5 |              0.08904 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4492 | >20%                    |                 2 |              0.2246  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4513 | 10-15%                  |                 2 |              0.22565 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4553 | >20%                    |                 5 |              0.09106 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4629 | 10-15%                  |                 2 |              0.23145 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4703 | <5%                     |                 2 |              0.23515 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.473  | 5-10%                   |                 2 |              0.2365  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | >20%                    |                 2 |              0.23795 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4833 | >20%                    |                 2 |              0.24165 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4856 | 15-20%                  |                 2 |              0.2428  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4895 | >20%                    |                 5 |              0.0979  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4909 | >20%                    |                 5 |              0.09818 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4915 | 5-10%                   |                 5 |              0.0983  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4966 | 15-20%                  |                 5 |              0.09932 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5056 | 15-20%                  |                 2 |              0.2528  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5073 | >20%                    |                 2 |              0.25365 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.508  | >20%                    |                 2 |              0.254   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5096 | >20%                    |                 5 |              0.10192 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5136 | >20%                    |                 5 |              0.10272 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5151 | >20%                    |                 2 |              0.25755 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5153 | 10-15%                  |                10 |              0.05153 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5207 | >20%                    |                 2 |              0.26035 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5276 | >20%                    |                 5 |              0.10552 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5303 | 15-20%                  |                 5 |              0.10606 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | >20%                    |                 2 |              0.2682  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5382 | >20%                    |                 2 |              0.2691  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5413 | >20%                    |                 2 |              0.27065 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5448 | 15-20%                  |                 5 |              0.10896 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5513 | >20%                    |                 2 |              0.27565 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5772 | >20%                    |                 5 |              0.11544 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5776 | >20%                    |                 5 |              0.11552 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5902 | >20%                    |                 5 |              0.11804 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5939 | 10-15%                  |                 2 |              0.29695 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5993 | >20%                    |                 5 |              0.11986 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5995 | 10-15%                  |                 2 |              0.29975 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6017 | >20%                    |                10 |              0.06017 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6027 | >20%                    |                 5 |              0.12054 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6094 | >20%                    |                 2 |              0.3047  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6116 | 15-20%                  |                 2 |              0.3058  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6128 | 15-20%                  |                 5 |              0.12256 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6162 | 15-20%                  |                 5 |              0.12324 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6189 | 10-15%                  |                 5 |              0.12378 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.622  | 15-20%                  |                 5 |              0.1244  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6223 | 10-15%                  |                 5 |              0.12446 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6287 | >20%                    |                 5 |              0.12574 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6297 | >20%                    |                 2 |              0.31485 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6306 | 15-20%                  |                 5 |              0.12612 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6403 | >20%                    |                 5 |              0.12806 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6554 | >20%                    |                 5 |              0.13108 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6622 | >20%                    |                 5 |              0.13244 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6661 | 10-15%                  |                10 |              0.06661 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6786 | 15-20%                  |                 5 |              0.13572 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6815 | 15-20%                  |                 5 |              0.1363  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6821 | 15-20%                  |                 5 |              0.13642 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6903 | 15-20%                  |                10 |              0.06903 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6921 | >20%                    |                 5 |              0.13842 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.694  | 10-15%                  |                10 |              0.0694  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6958 | <5%                     |                 2 |              0.3479  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7171 | 5-10%                   |                10 |              0.07171 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7171 | 15-20%                  |                 2 |              0.35855 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7175 | >20%                    |                10 |              0.07175 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7217 | >20%                    |                10 |              0.07217 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7246 | >20%                    |                 5 |              0.14492 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7358 | >20%                    |                10 |              0.07358 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7511 | >20%                    |                10 |              0.07511 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.757  | >20%                    |                10 |              0.0757  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7645 | >20%                    |                 5 |              0.1529  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7732 | >20%                    |                10 |              0.07732 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7811 | >20%                    |                 5 |              0.15622 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7842 | 5-10%                   |                 2 |              0.3921  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7863 | 5-10%                   |                 5 |              0.15726 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7998 | >20%                    |                10 |              0.07998 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8091 | 15-20%                  |                 5 |              0.16182 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8198 | >20%                    |                 5 |              0.16396 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8314 | >20%                    |                 5 |              0.16628 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.849  | >20%                    |                10 |              0.0849  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.854  | >20%                    |                10 |              0.0854  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8554 | >20%                    |                10 |              0.08554 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8602 | >20%                    |                 5 |              0.17204 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8832 | 5-10%                   |                10 |              0.08832 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8858 | <5%                     |                10 |              0.08858 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.897  | <5%                     |                10 |              0.0897  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8982 | 5-10%                   |                10 |              0.08982 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.902  | 5-10%                   |                10 |              0.0902  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9026 | 5-10%                   |                10 |              0.09026 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9178 | 5-10%                   |                10 |              0.09178 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9258 | 10-15%                  |                10 |              0.09258 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9347 | 10-15%                  |                10 |              0.09347 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9363 | >20%                    |                 2 |              0.46815 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9463 | >20%                    |                 2 |              0.47315 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9504 | 10-15%                  |                10 |              0.09504 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.963  | >20%                    |                10 |              0.0963  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9634 | 15-20%                  |                10 |              0.09634 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9656 | <5%                     |                10 |              0.09656 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9666 | 15-20%                  |                10 |              0.09666 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9977 | >20%                    |                 5 |              0.19954 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9995 | >20%                    |                10 |              0.09995 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0008 | 10-15%                  |                10 |              0.10008 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0095 | 15-20%                  |                10 |              0.10095 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.026  | >20%                    |                10 |              0.1026  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0609 | >20%                    |                10 |              0.10609 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0921 | <5%                     |                10 |              0.10921 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0942 | >20%                    |                10 |              0.10942 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0977 | >20%                    |                 2 |              0.54885 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0988 | >20%                    |                10 |              0.10988 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1102 | >20%                    |                10 |              0.11102 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1208 | >20%                    |                 5 |              0.22416 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1293 | >20%                    |                10 |              0.11293 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1377 | >20%                    |                10 |              0.11377 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1702 | >20%                    |                10 |              0.11702 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.178  | <5%                     |                 2 |              0.589   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1811 | >20%                    |                 2 |              0.59055 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2124 | 15-20%                  |                10 |              0.12124 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2207 | 5-10%                   |                 5 |              0.24414 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2265 | >20%                    |                 5 |              0.2453  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2612 | >20%                    |                 5 |              0.25224 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2714 | 10-15%                  |                10 |              0.12714 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2826 | >20%                    |                10 |              0.12826 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.335  | >20%                    |                10 |              0.1335  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3715 | 15-20%                  |                 2 |              0.68575 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3749 | >20%                    |                 5 |              0.27498 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4614 | 5-10%                   |                 5 |              0.29228 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4742 | 15-20%                  |                 5 |              0.29484 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4798 | >20%                    |                10 |              0.14798 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5141 | >20%                    |                10 |              0.15141 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5263 | >20%                    |                10 |              0.15263 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5392 | >20%                    |                10 |              0.15392 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6614 | >20%                    |                10 |              0.16614 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1244 | 10-15%                  |                10 |              0.21244 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2827 | 10-15%                  |                10 |              0.22827 |