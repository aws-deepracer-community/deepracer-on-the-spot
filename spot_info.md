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

Data correct as of 2025-02-03 16:57:23.633417, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.18   | >20%                    |                 2 |              0.09    |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1931 | >20%                    |                 2 |              0.09655 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.215  | <5%                     |                 2 |              0.1075  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2221 | 10-15%                  |                 5 |              0.04442 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2237 | 5-10%                   |                 2 |              0.11185 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | 10-15%                  |                 2 |              0.11215 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | 10-15%                  |                 2 |              0.11745 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 5-10%                   |                 2 |              0.11795 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | 10-15%                  |                 2 |              0.1208  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | <5%                     |                 2 |              0.1262  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | <5%                     |                 2 |              0.1282  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | 5-10%                   |                 2 |              0.1283  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2717 | <5%                     |                 5 |              0.05434 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | >20%                    |                 2 |              0.1397  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2879 | 15-20%                  |                10 |              0.02879 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | <5%                     |                 2 |              0.14615 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | <5%                     |                 2 |              0.1469  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2981 | 5-10%                   |                 2 |              0.14905 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | <5%                     |                 2 |              0.1502  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | 5-10%                   |                 2 |              0.15305 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.309  | 10-15%                  |                 2 |              0.1545  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3095 | 15-20%                  |                 2 |              0.15475 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3234 | >20%                    |                 2 |              0.1617  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3246 | <5%                     |                 2 |              0.1623  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3279 | 5-10%                   |                 5 |              0.06558 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.338  | >20%                    |                 2 |              0.169   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3422 | 5-10%                   |                 2 |              0.1711  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3542 | 10-15%                  |                 5 |              0.07084 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3573 | 5-10%                   |                 2 |              0.17865 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3576 | <5%                     |                 2 |              0.1788  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3633 | <5%                     |                 5 |              0.07266 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3655 | 5-10%                   |                 2 |              0.18275 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3675 | >20%                    |                 2 |              0.18375 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3722 | 5-10%                   |                 2 |              0.1861  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3754 | 5-10%                   |                 5 |              0.07508 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3856 | <5%                     |                 5 |              0.07712 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.397  | >20%                    |                 2 |              0.1985  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3976 | 5-10%                   |                 5 |              0.07952 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | 10-15%                  |                 2 |              0.1993  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3996 | <5%                     |                 5 |              0.07992 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3999 | 10-15%                  |                 5 |              0.07998 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.402  | <5%                     |                 2 |              0.201   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | 5-10%                   |                 2 |              0.2016  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | 10-15%                  |                 2 |              0.2028  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4109 | 15-20%                  |                 5 |              0.08218 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4379 | <5%                     |                 2 |              0.21895 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4418 | 5-10%                   |                 2 |              0.2209  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4535 | 10-15%                  |                 5 |              0.0907  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | <5%                     |                 5 |              0.09308 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4671 | >20%                    |                 5 |              0.09342 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | <5%                     |                 2 |              0.2403  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4809 | >20%                    |                 2 |              0.24045 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | 5-10%                   |                 2 |              0.2417  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4855 | 15-20%                  |                 5 |              0.0971  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4871 | 15-20%                  |                 5 |              0.09742 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4878 | >20%                    |                 5 |              0.09756 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4893 | 10-15%                  |                 5 |              0.09786 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4903 | 5-10%                   |                 5 |              0.09806 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4912 | >20%                    |                10 |              0.04912 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | <5%                     |                 5 |              0.09878 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | <5%                     |                 5 |              0.09918 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | 15-20%                  |                 5 |              0.09946 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4977 | 10-15%                  |                 2 |              0.24885 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4998 | >20%                    |                 2 |              0.2499  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | <5%                     |                 5 |              0.10122 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | <5%                     |                 5 |              0.10122 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5088 | >20%                    |                 5 |              0.10176 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.509  | 5-10%                   |                 5 |              0.1018  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5151 | 5-10%                   |                 5 |              0.10302 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5156 | <5%                     |                 2 |              0.2578  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5244 | 5-10%                   |                 2 |              0.2622  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5253 | 10-15%                  |                 2 |              0.26265 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5293 | <5%                     |                10 |              0.05293 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5301 | 10-15%                  |                 5 |              0.10602 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.538  | <5%                     |                 5 |              0.1076  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5432 | 10-15%                  |                 5 |              0.10864 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5493 | >20%                    |                 5 |              0.10986 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5531 | <5%                     |                 5 |              0.11062 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5568 | 5-10%                   |                 5 |              0.11136 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5614 | 15-20%                  |                 5 |              0.11228 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5638 | 15-20%                  |                 2 |              0.2819  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5721 | 15-20%                  |                 2 |              0.28605 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | 5-10%                   |                 5 |              0.11548 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | 5-10%                   |                 5 |              0.11686 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.585  | 5-10%                   |                10 |              0.0585  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5933 | 5-10%                   |                 5 |              0.11866 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5941 | 10-15%                  |                10 |              0.05941 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6022 | >20%                    |                 2 |              0.3011  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.61   | 15-20%                  |                 2 |              0.305   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6116 | 5-10%                   |                10 |              0.06116 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6239 | >20%                    |                 2 |              0.31195 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6291 | 5-10%                   |                 5 |              0.12582 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6323 | 5-10%                   |                 5 |              0.12646 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6336 | >20%                    |                 2 |              0.3168  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6349 | <5%                     |                10 |              0.06349 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.641  | <5%                     |                10 |              0.0641  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6437 | >20%                    |                 2 |              0.32185 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6553 | >20%                    |                10 |              0.06553 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6555 | >20%                    |                 5 |              0.1311  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.657  | 5-10%                   |                10 |              0.0657  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6635 | 5-10%                   |                10 |              0.06635 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6679 | 10-15%                  |                10 |              0.06679 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6721 | 5-10%                   |                 5 |              0.13442 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6802 | 15-20%                  |                10 |              0.06802 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6865 | <5%                     |                10 |              0.06865 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6961 | 5-10%                   |                 5 |              0.13922 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6998 | <5%                     |                 5 |              0.13996 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7019 | 5-10%                   |                10 |              0.07019 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7021 | >20%                    |                 5 |              0.14042 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7107 | 10-15%                  |                10 |              0.07107 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7142 | 10-15%                  |                10 |              0.07142 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7312 | >20%                    |                 5 |              0.14624 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7403 | 5-10%                   |                10 |              0.07403 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7438 | <5%                     |                 2 |              0.3719  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7438 | >20%                    |                10 |              0.07438 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7481 | >20%                    |                 5 |              0.14962 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7529 | 5-10%                   |                10 |              0.07529 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7554 | 10-15%                  |                10 |              0.07554 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.758  | 15-20%                  |                10 |              0.0758  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7938 | >20%                    |                10 |              0.07938 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7965 | 15-20%                  |                10 |              0.07965 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7989 | 15-20%                  |                 2 |              0.39945 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8038 | 10-15%                  |                 5 |              0.16076 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8077 | <5%                     |                10 |              0.08077 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8162 | 5-10%                   |                10 |              0.08162 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8263 | 5-10%                   |                10 |              0.08263 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8389 | <5%                     |                10 |              0.08389 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8616 | >20%                    |                10 |              0.08616 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8635 | <5%                     |                10 |              0.08635 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8668 | 5-10%                   |                10 |              0.08668 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8669 | <5%                     |                10 |              0.08669 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.8776 | >20%                    |                 5 |              0.17552 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8816 | 10-15%                  |                 2 |              0.4408  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8841 | 5-10%                   |                 5 |              0.17682 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8896 | <5%                     |                 5 |              0.17792 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8921 | <5%                     |                10 |              0.08921 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8971 | 5-10%                   |                10 |              0.08971 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9012 | <5%                     |                10 |              0.09012 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9088 | <5%                     |                10 |              0.09088 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9191 | 5-10%                   |                10 |              0.09191 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9332 | >20%                    |                10 |              0.09332 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9365 | 15-20%                  |                 2 |              0.46825 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9388 | 5-10%                   |                10 |              0.09388 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9485 | 15-20%                  |                10 |              0.09485 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9534 | 15-20%                  |                10 |              0.09534 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.972  | 5-10%                   |                 5 |              0.1944  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9778 | 5-10%                   |                 5 |              0.19556 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0066 | >20%                    |                10 |              0.10066 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0257 | <5%                     |                10 |              0.10257 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0867 | 15-20%                  |                 5 |              0.21734 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0977 | 10-15%                  |                 2 |              0.54885 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.101  | 5-10%                   |                10 |              0.1101  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1247 | 10-15%                  |                10 |              0.11247 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1786 | 10-15%                  |                10 |              0.11786 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.196  | 10-15%                  |                 2 |              0.598   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1986 | >20%                    |                10 |              0.11986 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2303 | >20%                    |                10 |              0.12303 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2359 | 5-10%                   |                10 |              0.12359 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2493 | 15-20%                  |                 5 |              0.24986 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2524 | 10-15%                  |                10 |              0.12524 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3548 | 15-20%                  |                10 |              0.13548 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3802 | 5-10%                   |                10 |              0.13802 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4224 | 5-10%                   |                10 |              0.14224 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9758 | 5-10%                   |                10 |              0.19758 |