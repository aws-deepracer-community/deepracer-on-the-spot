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

Data correct as of 2026-04-24 03:21:08.617400, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1639 | >20%                    |                 2 |              0.08195 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1691 | 15-20%                  |                 2 |              0.08455 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1866 | >20%                    |                 2 |              0.0933  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | >20%                    |                 2 |              0.1193  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.243  | 15-20%                  |                 5 |              0.0486  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2458 | 5-10%                   |                10 |              0.02458 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2622 | 10-15%                  |                 2 |              0.1311  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2684 | >20%                    |                 2 |              0.1342  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2747 | 15-20%                  |                 2 |              0.13735 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2825 | 15-20%                  |                 5 |              0.0565  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2829 | 15-20%                  |                 2 |              0.14145 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2938 | 15-20%                  |                 5 |              0.05876 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2965 | >20%                    |                 5 |              0.0593  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3053 | >20%                    |                 2 |              0.15265 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.31   | >20%                    |                10 |              0.031   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3178 | >20%                    |                 2 |              0.1589  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3228 | >20%                    |                 5 |              0.06456 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3231 | 10-15%                  |                 2 |              0.16155 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3276 | 10-15%                  |                 2 |              0.1638  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3359 | <5%                     |                 2 |              0.16795 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3384 | >20%                    |                 5 |              0.06768 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3437 | >20%                    |                10 |              0.03437 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3477 | >20%                    |                 2 |              0.17385 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.358  | >20%                    |                 5 |              0.0716  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3586 | >20%                    |                 2 |              0.1793  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3615 | 5-10%                   |                10 |              0.03615 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3685 | 10-15%                  |                 2 |              0.18425 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3694 | >20%                    |                 2 |              0.1847  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3805 | >20%                    |                 5 |              0.0761  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3864 | >20%                    |                 5 |              0.07728 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3942 | >20%                    |                 5 |              0.07884 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3947 | >20%                    |                 5 |              0.07894 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3987 | >20%                    |                 5 |              0.07974 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4008 | 5-10%                   |                10 |              0.04008 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4028 | >20%                    |                 2 |              0.2014  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4037 | <5%                     |                 2 |              0.20185 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4088 | >20%                    |                 2 |              0.2044  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4208 | >20%                    |                 5 |              0.08416 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | >20%                    |                 5 |              0.0845  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4292 | >20%                    |                 2 |              0.2146  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4311 | <5%                     |                 2 |              0.21555 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4362 | >20%                    |                 2 |              0.2181  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4379 | >20%                    |                 2 |              0.21895 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4414 | >20%                    |                 5 |              0.08828 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.445  | >20%                    |                 2 |              0.2225  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4469 | >20%                    |                 5 |              0.08938 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4476 | >20%                    |                 5 |              0.08952 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4522 | >20%                    |                 5 |              0.09044 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4524 | >20%                    |                 2 |              0.2262  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4592 | 15-20%                  |                 2 |              0.2296  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4628 | 15-20%                  |                 2 |              0.2314  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4678 | >20%                    |                10 |              0.04678 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.47   | >20%                    |                 2 |              0.235   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4715 | 5-10%                   |                 2 |              0.23575 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4793 | >20%                    |                 2 |              0.23965 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4803 | >20%                    |                 5 |              0.09606 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4831 | >20%                    |                 5 |              0.09662 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4845 | >20%                    |                10 |              0.04845 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4847 | >20%                    |                 5 |              0.09694 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4857 | >20%                    |                 5 |              0.09714 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4963 | 10-15%                  |                 2 |              0.24815 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.504  | >20%                    |                 2 |              0.252   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5059 | >20%                    |                 5 |              0.10118 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.514  | >20%                    |                10 |              0.0514  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5313 | 5-10%                   |                 5 |              0.10626 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5468 | 15-20%                  |                 5 |              0.10936 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.549  | 5-10%                   |                 2 |              0.2745  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5493 | >20%                    |                 5 |              0.10986 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5595 | 10-15%                  |                 5 |              0.1119  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5667 | <5%                     |                 5 |              0.11334 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5782 | 5-10%                   |                 5 |              0.11564 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5852 | >20%                    |                 5 |              0.11704 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5929 | >20%                    |                 2 |              0.29645 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5949 | 15-20%                  |                 2 |              0.29745 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6001 | >20%                    |                 2 |              0.30005 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6025 | >20%                    |                10 |              0.06025 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6058 | >20%                    |                 2 |              0.3029  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6177 | >20%                    |                10 |              0.06177 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6225 | >20%                    |                10 |              0.06225 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6329 | 10-15%                  |                 2 |              0.31645 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6346 | >20%                    |                 5 |              0.12692 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6494 | >20%                    |                 2 |              0.3247  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.65   | >20%                    |                 5 |              0.13    |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6571 | >20%                    |                 5 |              0.13142 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6634 | >20%                    |                 2 |              0.3317  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6875 | >20%                    |                10 |              0.06875 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6909 | >20%                    |                10 |              0.06909 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6956 | >20%                    |                 5 |              0.13912 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6976 | >20%                    |                10 |              0.06976 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7116 | 5-10%                   |                10 |              0.07116 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.721  | >20%                    |                10 |              0.0721  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7213 | >20%                    |                 5 |              0.14426 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7227 | >20%                    |                 5 |              0.14454 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7263 | >20%                    |                10 |              0.07263 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7431 | 15-20%                  |                10 |              0.07431 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7536 | >20%                    |                 5 |              0.15072 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7546 | 15-20%                  |                10 |              0.07546 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7703 | >20%                    |                 5 |              0.15406 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7803 | >20%                    |                10 |              0.07803 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7819 | >20%                    |                10 |              0.07819 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7951 | >20%                    |                 5 |              0.15902 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.796  | 5-10%                   |                10 |              0.0796  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.798  | >20%                    |                 5 |              0.1596  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8009 | >20%                    |                10 |              0.08009 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8033 | >20%                    |                 2 |              0.40165 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8151 | >20%                    |                10 |              0.08151 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8157 | >20%                    |                 5 |              0.16314 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8383 | 15-20%                  |                10 |              0.08383 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8478 | >20%                    |                10 |              0.08478 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8564 | >20%                    |                 2 |              0.4282  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8813 | >20%                    |                10 |              0.08813 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9178 | >20%                    |                 5 |              0.18356 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9235 | >20%                    |                10 |              0.09235 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.928  | >20%                    |                 5 |              0.1856  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9286 | >20%                    |                 5 |              0.18572 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9326 | 10-15%                  |                10 |              0.09326 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.945  | 15-20%                  |                10 |              0.0945  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9477 | >20%                    |                10 |              0.09477 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9494 | >20%                    |                10 |              0.09494 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9598 | >20%                    |                10 |              0.09598 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9772 | >20%                    |                10 |              0.09772 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9912 | >20%                    |                10 |              0.09912 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0071 | 5-10%                   |                10 |              0.10071 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0317 | >20%                    |                10 |              0.10317 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0379 | 15-20%                  |                10 |              0.10379 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0388 | >20%                    |                 5 |              0.20776 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.0799 |                         |                 2 |              0.53995 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0815 | 5-10%                   |                 2 |              0.54075 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.085  | 10-15%                  |                10 |              0.1085  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0937 | >20%                    |                10 |              0.10937 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1026 | 15-20%                  |                10 |              0.11026 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.116  | >20%                    |                 2 |              0.558   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1865 | >20%                    |                10 |              0.11865 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1891 | 10-15%                  |                 2 |              0.59455 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1994 |                         |                 5 |              0.23988 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2067 | >20%                    |                 5 |              0.24134 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3029 | >20%                    |                10 |              0.13029 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3082 | 15-20%                  |                10 |              0.13082 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3136 | >20%                    |                 5 |              0.26272 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.355  | 5-10%                   |                 2 |              0.6775  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.375  | >20%                    |                 5 |              0.275   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.464  | 15-20%                  |                10 |              0.1464  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4893 | >20%                    |                10 |              0.14893 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.6032 | >20%                    |                10 |              0.16032 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6038 | 15-20%                  |                 5 |              0.32076 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6614 |                         |                10 |              0.16614 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.6988 | >20%                    |                10 |              0.26988 |