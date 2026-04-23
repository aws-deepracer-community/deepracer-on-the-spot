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

Data correct as of 2026-04-23 03:19:14.991683, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1704 | >20%                    |                 2 |              0.0852  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1715 | 15-20%                  |                 2 |              0.08575 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1896 | >20%                    |                 2 |              0.0948  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | >20%                    |                 2 |              0.11305 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | >20%                    |                 2 |              0.11845 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.243  | 15-20%                  |                 5 |              0.0486  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2607 | >20%                    |                 2 |              0.13035 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2614 | 5-10%                   |                10 |              0.02614 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.263  | 10-15%                  |                 2 |              0.1315  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | >20%                    |                 2 |              0.13335 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2832 | 15-20%                  |                 2 |              0.1416  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.285  | 15-20%                  |                 2 |              0.1425  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2859 | 15-20%                  |                 5 |              0.05718 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2938 | 15-20%                  |                 5 |              0.05876 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3029 | >20%                    |                 5 |              0.06058 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3102 | >20%                    |                10 |              0.03102 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3157 | >20%                    |                 2 |              0.15785 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3231 | 10-15%                  |                 2 |              0.16155 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3293 | 10-15%                  |                 2 |              0.16465 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3311 | >20%                    |                 5 |              0.06622 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3357 | <5%                     |                 2 |              0.16785 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.337  | >20%                    |                 5 |              0.0674  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3457 | >20%                    |                10 |              0.03457 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3484 | >20%                    |                 2 |              0.1742  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3586 | >20%                    |                 5 |              0.07172 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3626 | >20%                    |                 2 |              0.1813  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3684 | >20%                    |                 2 |              0.1842  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3752 | 10-15%                  |                 2 |              0.1876  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3811 | >20%                    |                 5 |              0.07622 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3896 | 5-10%                   |                10 |              0.03896 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3906 | >20%                    |                 5 |              0.07812 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3972 | >20%                    |                 5 |              0.07944 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | >20%                    |                 5 |              0.08136 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4084 | <5%                     |                 2 |              0.2042  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.409  | >20%                    |                 2 |              0.2045  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.41   | >20%                    |                 5 |              0.082   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4126 | >20%                    |                 5 |              0.08252 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4152 | >20%                    |                 2 |              0.2076  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4169 | >20%                    |                 2 |              0.20845 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | >20%                    |                 2 |              0.2126  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4262 | >20%                    |                 5 |              0.08524 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4272 | <5%                     |                 2 |              0.2136  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4288 | >20%                    |                 2 |              0.2144  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4362 | >20%                    |                 2 |              0.2181  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4407 | >20%                    |                 5 |              0.08814 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | >20%                    |                 5 |              0.09022 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4535 | >20%                    |                 5 |              0.0907  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4537 | >20%                    |                 2 |              0.22685 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4552 | 15-20%                  |                 2 |              0.2276  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4616 | >20%                    |                 5 |              0.09232 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4628 | 15-20%                  |                 2 |              0.2314  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4628 | >20%                    |                10 |              0.04628 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4721 | >20%                    |                 2 |              0.23605 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | >20%                    |                 5 |              0.09594 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.48   | >20%                    |                 2 |              0.24    |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4818 | 5-10%                   |                 2 |              0.2409  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4822 | >20%                    |                 5 |              0.09644 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | >20%                    |                 5 |              0.09692 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4859 | >20%                    |                10 |              0.04859 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4861 | 10-15%                  |                 2 |              0.24305 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4997 | >20%                    |                 2 |              0.24985 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5073 | >20%                    |                 5 |              0.10146 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5284 | >20%                    |                10 |              0.05284 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | 5-10%                   |                 5 |              0.10634 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5339 | 5-10%                   |                 2 |              0.26695 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5448 | >20%                    |                 5 |              0.10896 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5537 | 15-20%                  |                 5 |              0.11074 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5595 | 10-15%                  |                 5 |              0.1119  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5695 | <5%                     |                 5 |              0.1139  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5782 | 5-10%                   |                 5 |              0.11564 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5804 | >20%                    |                 2 |              0.2902  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5866 | 15-20%                  |                 2 |              0.2933  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5899 | >20%                    |                 5 |              0.11798 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6022 | >20%                    |                 2 |              0.3011  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6143 | >20%                    |                 2 |              0.30715 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6185 | >20%                    |                10 |              0.06185 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6194 | >20%                    |                10 |              0.06194 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6224 | >20%                    |                10 |              0.06224 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6329 | 10-15%                  |                 2 |              0.31645 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6403 | >20%                    |                 5 |              0.12806 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6446 | >20%                    |                 2 |              0.3223  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.658  | >20%                    |                 5 |              0.1316  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6581 | >20%                    |                 5 |              0.13162 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6693 | >20%                    |                 2 |              0.33465 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6877 | >20%                    |                10 |              0.06877 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.689  | >20%                    |                10 |              0.0689  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6951 | >20%                    |                 5 |              0.13902 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7073 | >20%                    |                10 |              0.07073 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7124 | >20%                    |                10 |              0.07124 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.719  | >20%                    |                 5 |              0.1438  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7228 | >20%                    |                 5 |              0.14456 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7327 | >20%                    |                10 |              0.07327 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7464 | 5-10%                   |                10 |              0.07464 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.756  | 15-20%                  |                10 |              0.0756  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7624 | >20%                    |                 5 |              0.15248 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.765  | >20%                    |                10 |              0.0765  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7681 | >20%                    |                 5 |              0.15362 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7692 | 15-20%                  |                10 |              0.07692 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8016 | >20%                    |                10 |              0.08016 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.802  | 5-10%                   |                10 |              0.0802  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8024 | >20%                    |                 5 |              0.16048 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8044 | >20%                    |                 5 |              0.16088 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8094 | >20%                    |                10 |              0.08094 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8252 | >20%                    |                 5 |              0.16504 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.826  | >20%                    |                 2 |              0.413   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8282 | >20%                    |                10 |              0.08282 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8408 | >20%                    |                 2 |              0.4204  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | >20%                    |                10 |              0.08441 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8471 | 15-20%                  |                10 |              0.08471 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8989 | >20%                    |                10 |              0.08989 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9036 | >20%                    |                10 |              0.09036 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9077 | 15-20%                  |                10 |              0.09077 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9178 | >20%                    |                 5 |              0.18356 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9203 | >20%                    |                 5 |              0.18406 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9326 | 10-15%                  |                10 |              0.09326 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9367 | >20%                    |                 5 |              0.18734 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9428 | >20%                    |                10 |              0.09428 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9505 | >20%                    |                10 |              0.09505 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9598 | >20%                    |                10 |              0.09598 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9719 | >20%                    |                10 |              0.09719 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9843 | >20%                    |                10 |              0.09843 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9871 | >20%                    |                10 |              0.09871 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0079 | 5-10%                   |                10 |              0.10079 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0388 | >20%                    |                 5 |              0.20776 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0436 | 15-20%                  |                10 |              0.10436 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0558 | 5-10%                   |                 2 |              0.5279  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.085  | 10-15%                  |                10 |              0.1085  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0907 | 15-20%                  |                10 |              0.10907 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1092 | >20%                    |                10 |              0.11092 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1176 | >20%                    |                 2 |              0.5588  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1299 |                         |                 2 |              0.56495 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1876 | 10-15%                  |                 2 |              0.5938  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2024 | >20%                    |                10 |              0.12024 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2047 |                         |                 5 |              0.24094 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.224  | >20%                    |                 5 |              0.2448  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2771 | >20%                    |                10 |              0.12771 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3279 | >20%                    |                 5 |              0.26558 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3536 | 15-20%                  |                10 |              0.13536 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3565 | 5-10%                   |                 2 |              0.67825 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3745 | >20%                    |                 5 |              0.2749  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4592 | 15-20%                  |                10 |              0.14592 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5163 | >20%                    |                10 |              0.15163 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.596  | >20%                    |                10 |              0.1596  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6058 | 15-20%                  |                 5 |              0.32116 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6151 |                         |                10 |              0.16151 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.7533 | >20%                    |                10 |              0.27533 |