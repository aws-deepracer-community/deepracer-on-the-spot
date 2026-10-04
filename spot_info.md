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

Data correct as of 2026-10-04 05:06:24.610739, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1134 | >20%                    |                 2 |              0.0567  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1478 | >20%                    |                 2 |              0.0739  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1755 | 15-20%                  |                 2 |              0.08775 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2016 | >20%                    |                 2 |              0.1008  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2127 | >20%                    |                 5 |              0.04254 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2189 | 15-20%                  |                 5 |              0.04378 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2224 | 15-20%                  |                 5 |              0.04448 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.232  | 5-10%                   |                10 |              0.0232  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | >20%                    |                 2 |              0.118   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2419 | >20%                    |                 5 |              0.04838 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2859 | >20%                    |                 2 |              0.14295 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | >20%                    |                 2 |              0.14305 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | >20%                    |                 2 |              0.1439  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | 15-20%                  |                 2 |              0.1478  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2981 | <5%                     |                10 |              0.02981 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | >20%                    |                 2 |              0.1519  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3051 | >20%                    |                 5 |              0.06102 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | >20%                    |                 2 |              0.15995 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3353 | 10-15%                  |                 2 |              0.16765 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3416 | >20%                    |                 2 |              0.1708  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3436 | 10-15%                  |                 2 |              0.1718  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3463 | >20%                    |                 5 |              0.06926 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3657 | >20%                    |                 2 |              0.18285 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3708 | >20%                    |                 2 |              0.1854  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | 15-20%                  |                 2 |              0.18645 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | >20%                    |                 2 |              0.1878  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.377  | 5-10%                   |                10 |              0.0377  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3778 | >20%                    |                 5 |              0.07556 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | >20%                    |                 2 |              0.1894  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3832 | >20%                    |                10 |              0.03832 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3885 | <5%                     |                 2 |              0.19425 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.397  | >20%                    |                 2 |              0.1985  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4131 | >20%                    |                 5 |              0.08262 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4147 | >20%                    |                 5 |              0.08294 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4206 | >20%                    |                 5 |              0.08412 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4278 | 15-20%                  |                 2 |              0.2139  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4355 | >20%                    |                10 |              0.04355 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4364 | >20%                    |                 2 |              0.2182  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4508 | >20%                    |                 5 |              0.09016 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | >20%                    |                 5 |              0.09202 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | >20%                    |                 5 |              0.09296 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4716 | >20%                    |                 5 |              0.09432 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | 10-15%                  |                 2 |              0.23795 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4798 | >20%                    |                 2 |              0.2399  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4827 | >20%                    |                 5 |              0.09654 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4837 |                         |                 2 |              0.24185 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4931 | >20%                    |                 5 |              0.09862 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4956 | >20%                    |                 2 |              0.2478  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4991 | >20%                    |                 5 |              0.09982 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5017 | >20%                    |                 2 |              0.25085 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5036 | <5%                     |                 2 |              0.2518  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5049 | >20%                    |                 2 |              0.25245 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5316 | >20%                    |                10 |              0.05316 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5437 | >20%                    |                 5 |              0.10874 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5516 | 15-20%                  |                 2 |              0.2758  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5528 | >20%                    |                 2 |              0.2764  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5782 | >20%                    |                 5 |              0.11564 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5829 | 10-15%                  |                 5 |              0.11658 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5878 | >20%                    |                10 |              0.05878 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5883 | >20%                    |                 5 |              0.11766 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6032 | >20%                    |                 2 |              0.3016  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6138 | >20%                    |                 5 |              0.12276 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6168 | 10-15%                  |                 2 |              0.3084  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6188 | >20%                    |                 2 |              0.3094  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6192 | >20%                    |                 2 |              0.3096  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6219 | >20%                    |                 5 |              0.12438 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6279 | 5-10%                   |                10 |              0.06279 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.631  |                         |                 5 |              0.1262  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6339 | >20%                    |                 5 |              0.12678 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6342 | >20%                    |                10 |              0.06342 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.6636 |                         |                10 |              0.06636 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6646 | >20%                    |                 5 |              0.13292 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6819 | 5-10%                   |                 2 |              0.34095 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6839 | <5%                     |                 2 |              0.34195 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6952 | >20%                    |                 5 |              0.13904 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6964 | 5-10%                   |                 5 |              0.13928 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7084 | >20%                    |                 2 |              0.3542  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7093 | >20%                    |                10 |              0.07093 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.725  | 15-20%                  |                 2 |              0.3625  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7272 | >20%                    |                 5 |              0.14544 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7305 | >20%                    |                 5 |              0.1461  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7313 | >20%                    |                10 |              0.07313 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7342 | 15-20%                  |                 5 |              0.14684 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7381 | 15-20%                  |                10 |              0.07381 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7462 | >20%                    |                 5 |              0.14924 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7589 | >20%                    |                 5 |              0.15178 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7625 | >20%                    |                 5 |              0.1525  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7634 | >20%                    |                 5 |              0.15268 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7641 | >20%                    |                10 |              0.07641 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7815 | 15-20%                  |                10 |              0.07815 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.782  | >20%                    |                10 |              0.0782  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7884 | 15-20%                  |                10 |              0.07884 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7998 | >20%                    |                10 |              0.07998 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8261 | >20%                    |                 5 |              0.16522 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8344 | 5-10%                   |                10 |              0.08344 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8346 | >20%                    |                10 |              0.08346 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8518 | >20%                    |                 2 |              0.4259  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8579 | 15-20%                  |                 5 |              0.17158 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.87   | 10-15%                  |                 2 |              0.435   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8705 | >20%                    |                10 |              0.08705 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8741 | 15-20%                  |                10 |              0.08741 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8761 | 10-15%                  |                10 |              0.08761 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8777 | >20%                    |                10 |              0.08777 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9032 | >20%                    |                10 |              0.09032 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9033 | >20%                    |                 5 |              0.18066 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9066 | <5%                     |                 5 |              0.18132 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9125 | >20%                    |                 5 |              0.1825  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9209 | >20%                    |                 2 |              0.46045 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9313 | >20%                    |                10 |              0.09313 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9446 | >20%                    |                10 |              0.09446 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9448 | 10-15%                  |                 2 |              0.4724  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9478 | >20%                    |                 5 |              0.18956 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9502 | >20%                    |                 5 |              0.19004 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9634 | >20%                    |                10 |              0.09634 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9857 | >20%                    |                 5 |              0.19714 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9905 | >20%                    |                10 |              0.09905 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9977 | 15-20%                  |                10 |              0.09977 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.998  | 15-20%                  |                10 |              0.0998  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.019  | >20%                    |                 2 |              0.5095  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0241 | >20%                    |                10 |              0.10241 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0318 | >20%                    |                10 |              0.10318 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0514 | >20%                    |                10 |              0.10514 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0633 | >20%                    |                10 |              0.10633 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.076  | >20%                    |                10 |              0.1076  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1187 | 5-10%                   |                10 |              0.11187 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1367 |                         |                 2 |              0.56835 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.153  | >20%                    |                 5 |              0.2306  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2077 | >20%                    |                10 |              0.12077 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2132 | 5-10%                   |                 2 |              0.6066  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2242 | >20%                    |                10 |              0.12242 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2803 | 5-10%                   |                 2 |              0.64015 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3267 | >20%                    |                 2 |              0.66335 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3513 | >20%                    |                10 |              0.13513 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.369  | 15-20%                  |                10 |              0.1369  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4062 | 10-15%                  |                10 |              0.14062 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4226 | 10-15%                  |                 2 |              0.7113  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4312 | >20%                    |                10 |              0.14312 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5331 | >20%                    |                 2 |              0.76655 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5348 | 5-10%                   |                 5 |              0.30696 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5621 |                         |                 2 |              0.78105 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5756 | >20%                    |                 5 |              0.31512 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6169 | 15-20%                  |                10 |              0.16169 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6227 | >20%                    |                10 |              0.16227 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6393 |                         |                10 |              0.16393 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7313 | >20%                    |                 5 |              0.34626 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.7621 |                         |                 5 |              0.35242 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8406 | >20%                    |                10 |              0.18406 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.8712 |                         |                 5 |              0.37424 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9416 |                         |                10 |              0.19416 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0624 | >20%                    |                10 |              0.20624 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0775 | 15-20%                  |                 5 |              0.4155  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.181  | >20%                    |                 5 |              0.4362  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2138 | 5-10%                   |                 2 |              1.1069  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2502 | 5-10%                   |                10 |              0.22502 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5645 | >20%                    |                10 |              0.25645 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1421 | >20%                    |                10 |              0.31421 |