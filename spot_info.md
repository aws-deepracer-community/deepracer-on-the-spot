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

Data correct as of 2025-12-22 02:05:11.531145, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1044 | >20%                    |                 2 |              0.0522  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1316 | >20%                    |                 2 |              0.0658  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1587 | 15-20%                  |                 2 |              0.07935 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.17   | >20%                    |                 2 |              0.085   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1888 | 10-15%                  |                 2 |              0.0944  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1914 | <5%                     |                 2 |              0.0957  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1997 | >20%                    |                 5 |              0.03994 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | >20%                    |                 2 |              0.11615 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | >20%                    |                 2 |              0.1194  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.24   | >20%                    |                 2 |              0.12    |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.241  | >20%                    |                 2 |              0.1205  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | >20%                    |                 2 |              0.1273  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2547 | 5-10%                   |                 5 |              0.05094 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2643 | 5-10%                   |                10 |              0.02643 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2655 | <5%                     |                 5 |              0.0531  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2715 | >20%                    |                 2 |              0.13575 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | >20%                    |                 2 |              0.1393  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | 15-20%                  |                 2 |              0.13985 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | 10-15%                  |                 2 |              0.1432  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2873 | 5-10%                   |                 2 |              0.14365 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | >20%                    |                 2 |              0.1467  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3103 | 10-15%                  |                 5 |              0.06206 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3136 | 10-15%                  |                 2 |              0.1568  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3139 | >20%                    |                 2 |              0.15695 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3238 | >20%                    |                10 |              0.03238 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3243 | 10-15%                  |                10 |              0.03243 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3311 | >20%                    |                 5 |              0.06622 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3358 | >20%                    |                 5 |              0.06716 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.348  | >20%                    |                 5 |              0.0696  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3493 | >20%                    |                 5 |              0.06986 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.354  | >20%                    |                 2 |              0.177   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | >20%                    |                 2 |              0.17765 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3554 | >20%                    |                10 |              0.03554 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3569 | >20%                    |                 5 |              0.07138 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3582 | 5-10%                   |                10 |              0.03582 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3617 | >20%                    |                10 |              0.03617 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3652 | 15-20%                  |                 2 |              0.1826  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.367  | >20%                    |                 2 |              0.1835  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | <5%                     |                 2 |              0.18595 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3725 | 5-10%                   |                 2 |              0.18625 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3762 | >20%                    |                10 |              0.03762 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3776 | >20%                    |                 5 |              0.07552 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3781 | >20%                    |                 2 |              0.18905 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3821 | 10-15%                  |                 2 |              0.19105 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3824 | >20%                    |                 5 |              0.07648 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3827 | <5%                     |                10 |              0.03827 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3834 | 15-20%                  |                 5 |              0.07668 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | >20%                    |                 5 |              0.07704 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3875 | <5%                     |                 5 |              0.0775  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | >20%                    |                 2 |              0.19445 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3891 | <5%                     |                 5 |              0.07782 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3942 | >20%                    |                 5 |              0.07884 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3954 | >20%                    |                 2 |              0.1977  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4001 | 15-20%                  |                 5 |              0.08002 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4083 | >20%                    |                 5 |              0.08166 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4162 | 10-15%                  |                 2 |              0.2081  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4295 | >20%                    |                 2 |              0.21475 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4323 | <5%                     |                 2 |              0.21615 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.436  | >20%                    |                 2 |              0.218   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.436  | >20%                    |                 5 |              0.0872  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4387 | >20%                    |                 5 |              0.08774 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4402 | <5%                     |                 2 |              0.2201  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4478 | >20%                    |                 2 |              0.2239  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4493 | <5%                     |                10 |              0.04493 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4595 | >20%                    |                10 |              0.04595 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4611 | 10-15%                  |                10 |              0.04611 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4643 | 15-20%                  |                 5 |              0.09286 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4686 | >20%                    |                 2 |              0.2343  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4702 | >20%                    |                 2 |              0.2351  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4742 | 15-20%                  |                 2 |              0.2371  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4828 | 15-20%                  |                 5 |              0.09656 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4852 | >20%                    |                 5 |              0.09704 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4899 | 15-20%                  |                 5 |              0.09798 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4907 | 15-20%                  |                 2 |              0.24535 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4943 | >20%                    |                 5 |              0.09886 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4943 | >20%                    |                 5 |              0.09886 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4957 | 5-10%                   |                 5 |              0.09914 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4995 | >20%                    |                 2 |              0.24975 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5068 | >20%                    |                 2 |              0.2534  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5075 | >20%                    |                 5 |              0.1015  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.508  | >20%                    |                 2 |              0.254   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5139 | >20%                    |                10 |              0.05139 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5191 | 15-20%                  |                 5 |              0.10382 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5257 | 15-20%                  |                10 |              0.05257 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5278 | 15-20%                  |                 2 |              0.2639  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5285 | <5%                     |                 5 |              0.1057  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5294 | >20%                    |                 2 |              0.2647  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5477 | >20%                    |                 5 |              0.10954 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5481 | >20%                    |                 2 |              0.27405 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5488 | >20%                    |                 5 |              0.10976 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5587 | >20%                    |                 5 |              0.11174 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5693 | >20%                    |                 5 |              0.11386 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5701 | >20%                    |                 5 |              0.11402 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | 10-15%                  |                 5 |              0.11422 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5796 | >20%                    |                 2 |              0.2898  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5841 | >20%                    |                 5 |              0.11682 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5994 | 5-10%                   |                 5 |              0.11988 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6042 | 5-10%                   |                 5 |              0.12084 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6051 | >20%                    |                10 |              0.06051 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6164 | >20%                    |                 5 |              0.12328 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6165 | >20%                    |                 5 |              0.1233  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6216 | >20%                    |                 2 |              0.3108  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6235 | 5-10%                   |                 5 |              0.1247  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6329 | >20%                    |                 2 |              0.31645 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6347 | 15-20%                  |                 5 |              0.12694 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6349 | >20%                    |                 2 |              0.31745 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6474 | >20%                    |                 2 |              0.3237  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6506 | >20%                    |                 5 |              0.13012 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6524 | 10-15%                  |                 5 |              0.13048 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6705 | >20%                    |                10 |              0.06705 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.673  | >20%                    |                 5 |              0.1346  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6778 | <5%                     |                10 |              0.06778 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6959 | >20%                    |                10 |              0.06959 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7042 | >20%                    |                10 |              0.07042 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | >20%                    |                10 |              0.07112 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7166 | >20%                    |                10 |              0.07166 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7175 | >20%                    |                10 |              0.07175 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7188 | 10-15%                  |                 5 |              0.14376 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7196 | >20%                    |                10 |              0.07196 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7343 | >20%                    |                10 |              0.07343 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.735  | >20%                    |                 2 |              0.3675  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7515 | >20%                    |                10 |              0.07515 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7552 | >20%                    |                 2 |              0.3776  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.764  | 5-10%                   |                10 |              0.0764  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7686 | >20%                    |                 2 |              0.3843  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7695 | >20%                    |                 5 |              0.1539  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7852 | 10-15%                  |                10 |              0.07852 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7934 | 10-15%                  |                10 |              0.07934 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7958 | >20%                    |                 5 |              0.15916 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7966 | >20%                    |                 5 |              0.15932 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7978 | 10-15%                  |                10 |              0.07978 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8044 | 15-20%                  |                10 |              0.08044 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8066 | >20%                    |                10 |              0.08066 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8092 | <5%                     |                10 |              0.08092 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.816  | 10-15%                  |                 5 |              0.1632  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8224 | >20%                    |                10 |              0.08224 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8236 | >20%                    |                10 |              0.08236 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8261 | 15-20%                  |                10 |              0.08261 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8299 | <5%                     |                 5 |              0.16598 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8478 | 5-10%                   |                10 |              0.08478 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8541 | >20%                    |                10 |              0.08541 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8779 | 15-20%                  |                 2 |              0.43895 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8806 | >20%                    |                 2 |              0.4403  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8911 | >20%                    |                 5 |              0.17822 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.896  | >20%                    |                 2 |              0.448   |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9073 | 10-15%                  |                10 |              0.09073 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9087 | >20%                    |                10 |              0.09087 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.91   | 15-20%                  |                10 |              0.091   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9133 | >20%                    |                 5 |              0.18266 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9422 | >20%                    |                 5 |              0.18844 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9467 | >20%                    |                10 |              0.09467 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9479 | >20%                    |                 5 |              0.18958 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9689 | 15-20%                  |                10 |              0.09689 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9703 | >20%                    |                10 |              0.09703 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9792 | >20%                    |                10 |              0.09792 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9925 | >20%                    |                 5 |              0.1985  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0003 | >20%                    |                10 |              0.10003 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0071 | >20%                    |                 2 |              0.50355 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0092 | 10-15%                  |                10 |              0.10092 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0141 | 5-10%                   |                 5 |              0.20282 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.04   | >20%                    |                 2 |              0.52    |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.05   | 10-15%                  |                10 |              0.105   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0504 | >20%                    |                10 |              0.10504 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1019 | 10-15%                  |                10 |              0.11019 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1357 | >20%                    |                 2 |              0.56785 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1651 | >20%                    |                10 |              0.11651 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2021 | 5-10%                   |                10 |              0.12021 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2202 | >20%                    |                10 |              0.12202 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2387 | >20%                    |                10 |              0.12387 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3449 | >20%                    |                10 |              0.13449 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.374  | >20%                    |                 2 |              0.687   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4095 | >20%                    |                10 |              0.14095 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4269 | >20%                    |                 2 |              0.71345 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4511 | 10-15%                  |                 5 |              0.29022 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5044 | >20%                    |                 5 |              0.30088 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5335 | >20%                    |                 5 |              0.3067  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5777 | 15-20%                  |                10 |              0.15777 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6563 | 15-20%                  |                10 |              0.16563 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0424 | 10-15%                  |                10 |              0.20424 |