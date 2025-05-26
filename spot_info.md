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

Data correct as of 2025-05-26 01:56:34.262360, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1839 | >20%                    |                 2 |              0.09195 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1883 | >20%                    |                 2 |              0.09415 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1993 | >20%                    |                 2 |              0.09965 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2169 | 5-10%                   |                 5 |              0.04338 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | >20%                    |                 2 |              0.11135 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2324 | >20%                    |                 2 |              0.1162  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | 5-10%                   |                 2 |              0.11985 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2559 | <5%                     |                 2 |              0.12795 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2562 | >20%                    |                 2 |              0.1281  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2581 | 10-15%                  |                 2 |              0.12905 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2601 | 15-20%                  |                 2 |              0.13005 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2633 | >20%                    |                 5 |              0.05266 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2645 | >20%                    |                 2 |              0.13225 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | 15-20%                  |                 2 |              0.13235 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2657 | >20%                    |                10 |              0.02657 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2747 | 10-15%                  |                 2 |              0.13735 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | >20%                    |                 2 |              0.14135 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | <5%                     |                 2 |              0.14595 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2928 | 15-20%                  |                 5 |              0.05856 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.293  | 15-20%                  |                 2 |              0.1465  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | >20%                    |                 2 |              0.14965 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | 15-20%                  |                 2 |              0.1543  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3147 | >20%                    |                10 |              0.03147 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3152 | >20%                    |                10 |              0.03152 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | 15-20%                  |                 2 |              0.15975 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3215 | >20%                    |                 5 |              0.0643  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3234 | 15-20%                  |                 2 |              0.1617  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3295 | >20%                    |                 2 |              0.16475 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3422 | >20%                    |                 5 |              0.06844 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3438 | >20%                    |                 5 |              0.06876 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3446 | >20%                    |                 2 |              0.1723  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3498 | 10-15%                  |                 5 |              0.06996 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3529 | >20%                    |                10 |              0.03529 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3558 | 15-20%                  |                 2 |              0.1779  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3573 | >20%                    |                 2 |              0.17865 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3676 | >20%                    |                 5 |              0.07352 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3712 | 15-20%                  |                 2 |              0.1856  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | 5-10%                   |                 2 |              0.18635 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3738 | 5-10%                   |                 2 |              0.1869  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.377  | >20%                    |                 2 |              0.1885  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3787 | >20%                    |                 2 |              0.18935 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3831 | 10-15%                  |                 5 |              0.07662 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3887 | <5%                     |                 2 |              0.19435 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3956 | >20%                    |                 2 |              0.1978  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3979 | 15-20%                  |                 2 |              0.19895 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4057 | <5%                     |                 5 |              0.08114 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4159 | >20%                    |                 5 |              0.08318 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4162 | 10-15%                  |                 2 |              0.2081  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4197 | 15-20%                  |                10 |              0.04197 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4268 | >20%                    |                10 |              0.04268 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4273 | >20%                    |                 2 |              0.21365 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.432  | 15-20%                  |                 5 |              0.0864  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4321 | <5%                     |                 2 |              0.21605 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | >20%                    |                 2 |              0.21675 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4396 | 5-10%                   |                 5 |              0.08792 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4507 | 15-20%                  |                 5 |              0.09014 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4519 | >20%                    |                 2 |              0.22595 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4535 | 15-20%                  |                 5 |              0.0907  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4536 | >20%                    |                 2 |              0.2268  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4576 | <5%                     |                 5 |              0.09152 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4588 | >20%                    |                 5 |              0.09176 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4605 | 15-20%                  |                 5 |              0.0921  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.465  | 10-15%                  |                 5 |              0.093   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4702 | >20%                    |                 2 |              0.2351  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4713 | >20%                    |                 2 |              0.23565 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4729 | >20%                    |                 5 |              0.09458 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | >20%                    |                 5 |              0.0947  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4825 | >20%                    |                 2 |              0.24125 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | >20%                    |                 5 |              0.09734 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.487  | >20%                    |                 5 |              0.0974  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4875 | 15-20%                  |                10 |              0.04875 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4891 | >20%                    |                 5 |              0.09782 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.492  | 15-20%                  |                 2 |              0.246   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4968 | <5%                     |                 5 |              0.09936 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4988 | 10-15%                  |                 5 |              0.09976 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | >20%                    |                 5 |              0.0998  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5059 | 15-20%                  |                 5 |              0.10118 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5069 | >20%                    |                10 |              0.05069 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5076 | >20%                    |                10 |              0.05076 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5112 | >20%                    |                 2 |              0.2556  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5117 | 15-20%                  |                10 |              0.05117 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5159 | >20%                    |                 2 |              0.25795 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5187 | 5-10%                   |                 5 |              0.10374 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5257 | <5%                     |                 5 |              0.10514 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5313 | >20%                    |                 2 |              0.26565 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5572 | >20%                    |                 5 |              0.11144 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5622 | 10-15%                  |                10 |              0.05622 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5646 | 10-15%                  |                 2 |              0.2823  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5659 | >20%                    |                 5 |              0.11318 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5661 | >20%                    |                 2 |              0.28305 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5727 | 5-10%                   |                 5 |              0.11454 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5754 | >20%                    |                 5 |              0.11508 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5874 | >20%                    |                 5 |              0.11748 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5877 | >20%                    |                 2 |              0.29385 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5884 | >20%                    |                10 |              0.05884 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5967 | 5-10%                   |                 2 |              0.29835 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5989 | >20%                    |                 5 |              0.11978 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5991 | >20%                    |                 5 |              0.11982 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6093 | 10-15%                  |                 5 |              0.12186 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6139 | 5-10%                   |                10 |              0.06139 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6177 | 5-10%                   |                 2 |              0.30885 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6264 | >20%                    |                 2 |              0.3132  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6352 | 10-15%                  |                 2 |              0.3176  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6393 | 10-15%                  |                10 |              0.06393 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6562 | <5%                     |                10 |              0.06562 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6645 | >20%                    |                 2 |              0.33225 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6664 | >20%                    |                 5 |              0.13328 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6688 | >20%                    |                 5 |              0.13376 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6714 | 15-20%                  |                 5 |              0.13428 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6809 | <5%                     |                 5 |              0.13618 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6967 | >20%                    |                 2 |              0.34835 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | <5%                     |                10 |              0.06969 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6975 | >20%                    |                10 |              0.06975 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.698  | 10-15%                  |                 5 |              0.1396  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7137 | 10-15%                  |                10 |              0.07137 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7152 | <5%                     |                10 |              0.07152 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7273 | >20%                    |                10 |              0.07273 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7417 | 10-15%                  |                 5 |              0.14834 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7423 | >20%                    |                10 |              0.07423 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7443 | >20%                    |                10 |              0.07443 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.754  | >20%                    |                 5 |              0.1508  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7564 | >20%                    |                10 |              0.07564 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7607 | >20%                    |                 5 |              0.15214 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7608 | <5%                     |                 5 |              0.15216 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7623 | >20%                    |                10 |              0.07623 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7717 | >20%                    |                10 |              0.07717 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7771 | 10-15%                  |                10 |              0.07771 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7876 | >20%                    |                 5 |              0.15752 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.809  | 10-15%                  |                 5 |              0.1618  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8149 | 15-20%                  |                10 |              0.08149 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8166 | >20%                    |                10 |              0.08166 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8266 | 5-10%                   |                10 |              0.08266 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.828  | 15-20%                  |                10 |              0.0828  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8567 | >20%                    |                10 |              0.08567 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8656 | <5%                     |                10 |              0.08656 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8725 | >20%                    |                10 |              0.08725 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8942 | >20%                    |                10 |              0.08942 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9027 | 10-15%                  |                 5 |              0.18054 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9242 | >20%                    |                10 |              0.09242 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9278 | >20%                    |                10 |              0.09278 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.934  | >20%                    |                10 |              0.0934  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.938  | >20%                    |                 5 |              0.1876  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9386 | >20%                    |                10 |              0.09386 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9464 | >20%                    |                 2 |              0.4732  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9598 | 5-10%                   |                 2 |              0.4799  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9747 | >20%                    |                 2 |              0.48735 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9797 | >20%                    |                10 |              0.09797 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9912 | <5%                     |                10 |              0.09912 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.993  | 10-15%                  |                 5 |              0.1986  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0189 | >20%                    |                 2 |              0.50945 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0238 | >20%                    |                 5 |              0.20476 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0406 | >20%                    |                10 |              0.10406 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0469 | 15-20%                  |                10 |              0.10469 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0622 | 15-20%                  |                10 |              0.10622 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0793 | 5-10%                   |                10 |              0.10793 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1003 | <5%                     |                10 |              0.11003 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1045 | >20%                    |                 5 |              0.2209  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1333 | <5%                     |                 2 |              0.56665 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1831 | 15-20%                  |                10 |              0.11831 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2078 | 5-10%                   |                10 |              0.12078 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2261 | 10-15%                  |                10 |              0.12261 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2567 | 15-20%                  |                10 |              0.12567 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2607 | >20%                    |                10 |              0.12607 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2969 | >20%                    |                10 |              0.12969 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3561 | >20%                    |                10 |              0.13561 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3875 | <5%                     |                 5 |              0.2775  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3948 | 10-15%                  |                10 |              0.13948 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4161 | >20%                    |                 5 |              0.28322 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4878 | >20%                    |                 2 |              0.7439  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5347 | >20%                    |                10 |              0.15347 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0063 | <5%                     |                10 |              0.20063 |