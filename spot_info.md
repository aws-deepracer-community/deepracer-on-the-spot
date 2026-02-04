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

Data correct as of 2026-02-04 02:29:58.473486, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1388 | >20%                    |                 2 |              0.0694  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.171  | 5-10%                   |                 2 |              0.0855  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1788 | >20%                    |                 2 |              0.0894  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1859 | >20%                    |                 5 |              0.03718 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1893 | >20%                    |                 2 |              0.09465 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2016 | >20%                    |                 5 |              0.04032 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2063 | >20%                    |                 2 |              0.10315 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2302 | >20%                    |                 2 |              0.1151  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | 10-15%                  |                 2 |              0.12165 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2537 | >20%                    |                 2 |              0.12685 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2611 | >20%                    |                 5 |              0.05222 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | 15-20%                  |                 2 |              0.1325  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2732 | 5-10%                   |                10 |              0.02732 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2771 | >20%                    |                 2 |              0.13855 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | 10-15%                  |                 2 |              0.13935 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | >20%                    |                 2 |              0.13985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | >20%                    |                 2 |              0.14945 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | >20%                    |                 2 |              0.15315 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3115 | 10-15%                  |                 2 |              0.15575 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3148 | >20%                    |                 2 |              0.1574  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3196 | <5%                     |                 5 |              0.06392 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.324  | >20%                    |                 5 |              0.0648  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3243 | 15-20%                  |                 2 |              0.16215 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3245 | 5-10%                   |                 5 |              0.0649  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.327  | >20%                    |                 5 |              0.0654  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3489 | >20%                    |                 5 |              0.06978 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | 15-20%                  |                 2 |              0.17585 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3546 | 15-20%                  |                 2 |              0.1773  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3623 | <5%                     |                 2 |              0.18115 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3759 | >20%                    |                 2 |              0.18795 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3781 | >20%                    |                 2 |              0.18905 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3791 | >20%                    |                 2 |              0.18955 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3799 | 5-10%                   |                10 |              0.03799 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3805 | >20%                    |                 5 |              0.0761  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3841 | >20%                    |                 2 |              0.19205 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | 5-10%                   |                 2 |              0.19255 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3853 | 5-10%                   |                 2 |              0.19265 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3901 | <5%                     |                 5 |              0.07802 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3927 | >20%                    |                 2 |              0.19635 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3933 | >20%                    |                 5 |              0.07866 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3996 | 10-15%                  |                 5 |              0.07992 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4078 | >20%                    |                 5 |              0.08156 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4121 | 15-20%                  |                 2 |              0.20605 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4122 | >20%                    |                 5 |              0.08244 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | >20%                    |                 2 |              0.20635 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4181 | 5-10%                   |                 2 |              0.20905 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4187 | >20%                    |                 2 |              0.20935 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4188 | >20%                    |                 2 |              0.2094  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.419  | 15-20%                  |                 2 |              0.2095  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4251 | 5-10%                   |                 2 |              0.21255 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | 5-10%                   |                 2 |              0.2129  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4262 | >20%                    |                10 |              0.04262 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4276 | >20%                    |                 5 |              0.08552 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4339 | <5%                     |                10 |              0.04339 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4353 | 5-10%                   |                 5 |              0.08706 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | <5%                     |                 2 |              0.21905 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4438 | <5%                     |                 2 |              0.2219  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.445  | >20%                    |                10 |              0.0445  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4493 | >20%                    |                 2 |              0.22465 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4496 | <5%                     |                 2 |              0.2248  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4531 | >20%                    |                10 |              0.04531 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4588 | <5%                     |                 5 |              0.09176 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4588 | 15-20%                  |                 5 |              0.09176 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4653 | >20%                    |                10 |              0.04653 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4667 | 5-10%                   |                 5 |              0.09334 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4692 | >20%                    |                 2 |              0.2346  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4692 | 15-20%                  |                10 |              0.04692 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4739 | <5%                     |                 5 |              0.09478 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.476  | <5%                     |                10 |              0.0476  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4763 | 5-10%                   |                 2 |              0.23815 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4814 | 15-20%                  |                 5 |              0.09628 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4817 | >20%                    |                 2 |              0.24085 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4891 | >20%                    |                 2 |              0.24455 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4915 | >20%                    |                 5 |              0.0983  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4932 | >20%                    |                 2 |              0.2466  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4955 | >20%                    |                10 |              0.04955 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.501  | >20%                    |                10 |              0.0501  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5028 | >20%                    |                 5 |              0.10056 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5062 | >20%                    |                 5 |              0.10124 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5099 | >20%                    |                10 |              0.05099 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5161 | <5%                     |                 5 |              0.10322 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5181 | >20%                    |                 2 |              0.25905 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5273 | 15-20%                  |                 5 |              0.10546 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5289 | >20%                    |                 2 |              0.26445 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5307 | >20%                    |                 5 |              0.10614 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5343 | >20%                    |                 5 |              0.10686 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5396 | <5%                     |                 5 |              0.10792 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5473 | >20%                    |                 5 |              0.10946 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5593 | >20%                    |                 5 |              0.11186 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5694 | >20%                    |                 5 |              0.11388 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5879 | >20%                    |                 2 |              0.29395 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5889 | 15-20%                  |                 5 |              0.11778 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5895 | 5-10%                   |                 5 |              0.1179  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5981 | <5%                     |                 5 |              0.11962 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6014 | 15-20%                  |                10 |              0.06014 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6064 | >20%                    |                 5 |              0.12128 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6086 | <5%                     |                 2 |              0.3043  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6106 | 5-10%                   |                 2 |              0.3053  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.617  | 10-15%                  |                10 |              0.0617  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6191 | >20%                    |                10 |              0.06191 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6311 | 10-15%                  |                 5 |              0.12622 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6379 | >20%                    |                 5 |              0.12758 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.643  | >20%                    |                 5 |              0.1286  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6567 | 15-20%                  |                 2 |              0.32835 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6606 | 15-20%                  |                10 |              0.06606 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6643 | 5-10%                   |                 5 |              0.13286 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6668 | >20%                    |                 5 |              0.13336 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6738 | 5-10%                   |                 5 |              0.13476 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6766 | >20%                    |                10 |              0.06766 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6873 | >20%                    |                 5 |              0.13746 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7015 | <5%                     |                10 |              0.07015 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7087 | >20%                    |                10 |              0.07087 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7111 | <5%                     |                 5 |              0.14222 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7156 | >20%                    |                10 |              0.07156 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7201 | 10-15%                  |                10 |              0.07201 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7321 | >20%                    |                10 |              0.07321 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7389 | >20%                    |                10 |              0.07389 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7394 | <5%                     |                10 |              0.07394 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7397 | >20%                    |                 5 |              0.14794 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7543 | 5-10%                   |                 2 |              0.37715 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7567 | >20%                    |                 5 |              0.15134 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.763  | 5-10%                   |                10 |              0.0763  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7674 | >20%                    |                 2 |              0.3837  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.769  | >20%                    |                 5 |              0.1538  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.775  | >20%                    |                10 |              0.0775  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7786 | <5%                     |                10 |              0.07786 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7883 | >20%                    |                 5 |              0.15766 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.79   | >20%                    |                 5 |              0.158   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7966 | <5%                     |                10 |              0.07966 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8038 | <5%                     |                10 |              0.08038 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8187 | 15-20%                  |                10 |              0.08187 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8194 | <5%                     |                10 |              0.08194 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8279 | 5-10%                   |                10 |              0.08279 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8291 | >20%                    |                 2 |              0.41455 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8359 | >20%                    |                 2 |              0.41795 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8361 | >20%                    |                 5 |              0.16722 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8382 | >20%                    |                10 |              0.08382 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8558 | >20%                    |                 5 |              0.17116 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8585 | <5%                     |                10 |              0.08585 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8646 | >20%                    |                 2 |              0.4323  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.865  | 10-15%                  |                 2 |              0.4325  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8652 | >20%                    |                10 |              0.08652 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8689 | >20%                    |                 2 |              0.43445 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8718 | >20%                    |                10 |              0.08718 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8727 | >20%                    |                10 |              0.08727 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8729 | >20%                    |                10 |              0.08729 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9123 | <5%                     |                10 |              0.09123 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9324 | >20%                    |                10 |              0.09324 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9554 | >20%                    |                 5 |              0.19108 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9571 | >20%                    |                 5 |              0.19142 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9754 | >20%                    |                10 |              0.09754 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9793 | >20%                    |                 2 |              0.48965 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9869 | 5-10%                   |                 5 |              0.19738 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0216 | >20%                    |                10 |              0.10216 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0221 | >20%                    |                10 |              0.10221 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0279 | >20%                    |                10 |              0.10279 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0356 | 15-20%                  |                10 |              0.10356 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0521 | 5-10%                   |                10 |              0.10521 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0627 | >20%                    |                 2 |              0.53135 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0736 | 10-15%                  |                 5 |              0.21472 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.087  | 15-20%                  |                10 |              0.1087  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0966 | >20%                    |                10 |              0.10966 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0987 | >20%                    |                10 |              0.10987 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1397 | >20%                    |                10 |              0.11397 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.16   | >20%                    |                10 |              0.116   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2356 | 10-15%                  |                10 |              0.12356 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2635 | >20%                    |                10 |              0.12635 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2887 | <5%                     |                10 |              0.12887 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2911 | >20%                    |                 5 |              0.25822 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3929 | 10-15%                  |                 5 |              0.27858 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4103 | >20%                    |                10 |              0.14103 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5023 | >20%                    |                 2 |              0.75115 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7621 | 15-20%                  |                10 |              0.17621 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8476 | 10-15%                  |                10 |              0.18476 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4368 | <5%                     |                 5 |              0.48736 |