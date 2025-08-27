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

Data correct as of 2025-08-27 01:47:53.234424, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0954 | 5-10%                   |                 2 |              0.0477  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1111 | >20%                    |                 2 |              0.05555 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.12   |                         |                 2 |              0.06    |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1625 |                         |                 5 |              0.0325  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1763 | >20%                    |                 2 |              0.08815 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1794 | >20%                    |                 5 |              0.03588 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1944 | 10-15%                  |                 5 |              0.03888 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1961 | >20%                    |                 2 |              0.09805 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2056 | >20%                    |                 2 |              0.1028  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2057 | 10-15%                  |                 2 |              0.10285 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2185 | >20%                    |                 5 |              0.0437  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2373 | >20%                    |                 5 |              0.04746 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2426 | >20%                    |                 2 |              0.1213  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2474 |                         |                10 |              0.02474 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | >20%                    |                 2 |              0.13275 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | >20%                    |                 2 |              0.1369  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | 10-15%                  |                 2 |              0.14525 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | >20%                    |                 2 |              0.14545 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3153 | 10-15%                  |                 2 |              0.15765 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3201 | 5-10%                   |                 2 |              0.16005 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3235 | 10-15%                  |                 2 |              0.16175 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3247 | >20%                    |                 2 |              0.16235 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3316 | >20%                    |                 2 |              0.1658  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3339 | >20%                    |                 2 |              0.16695 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3392 | >20%                    |                 2 |              0.1696  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3447 | >20%                    |                10 |              0.03447 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3535 | >20%                    |                 2 |              0.17675 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.354  | >20%                    |                 5 |              0.0708  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.3598 | >20%                    |                 2 |              0.1799  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3599 | 10-15%                  |                10 |              0.03599 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3638 | >20%                    |                 5 |              0.07276 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.365  | >20%                    |                 2 |              0.1825  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3756 | >20%                    |                 2 |              0.1878  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3779 | 10-15%                  |                 2 |              0.18895 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3806 | >20%                    |                 2 |              0.1903  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3836 | >20%                    |                 5 |              0.07672 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3877 | >20%                    |                 2 |              0.19385 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4006 | >20%                    |                 2 |              0.2003  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4092 | >20%                    |                 2 |              0.2046  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4093 | >20%                    |                 5 |              0.08186 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4104 | >20%                    |                 5 |              0.08208 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4204 | 15-20%                  |                 5 |              0.08408 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | 10-15%                  |                 2 |              0.21185 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4254 | 15-20%                  |                 2 |              0.2127  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4266 | >20%                    |                 5 |              0.08532 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4267 | >20%                    |                 5 |              0.08534 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4411 | 15-20%                  |                 5 |              0.08822 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4423 | 10-15%                  |                 2 |              0.22115 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4505 | >20%                    |                10 |              0.04505 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4584 | 5-10%                   |                 2 |              0.2292  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | >20%                    |                 5 |              0.09194 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.461  | >20%                    |                 2 |              0.2305  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4721 | <5%                     |                 2 |              0.23605 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4818 | >20%                    |                 2 |              0.2409  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4883 | >20%                    |                 2 |              0.24415 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.49   | >20%                    |                 2 |              0.245   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4915 | >20%                    |                 2 |              0.24575 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4936 | 15-20%                  |                 2 |              0.2468  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4967 | >20%                    |                 5 |              0.09934 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | 15-20%                  |                 5 |              0.10036 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5044 | 15-20%                  |                 2 |              0.2522  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5066 | 10-15%                  |                10 |              0.05066 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5103 | 5-10%                   |                 5 |              0.10206 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5132 | 15-20%                  |                 5 |              0.10264 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5161 | >20%                    |                 5 |              0.10322 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5174 | >20%                    |                 2 |              0.2587  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5208 | >20%                    |                 2 |              0.2604  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5231 | 10-15%                  |                10 |              0.05231 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5273 | >20%                    |                 2 |              0.26365 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5409 | >20%                    |                 5 |              0.10818 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5462 | >20%                    |                 5 |              0.10924 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5468 | 10-15%                  |                 2 |              0.2734  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.552  | >20%                    |                 2 |              0.276   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5595 | >20%                    |                 2 |              0.27975 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5616 | 15-20%                  |                 5 |              0.11232 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5707 | >20%                    |                 5 |              0.11414 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5776 | >20%                    |                 5 |              0.11552 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5778 | >20%                    |                 5 |              0.11556 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5838 | >20%                    |                 5 |              0.11676 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5849 | >20%                    |                 2 |              0.29245 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.587  | >20%                    |                 5 |              0.1174  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5916 | >20%                    |                 5 |              0.11832 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.594  | 10-15%                  |                 2 |              0.297   |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6136 | 10-15%                  |                 5 |              0.12272 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.617  | 15-20%                  |                10 |              0.0617  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6198 | >20%                    |                 5 |              0.12396 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6244 | 10-15%                  |                 5 |              0.12488 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6256 | 15-20%                  |                 5 |              0.12512 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6368 | >20%                    |                 5 |              0.12736 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6432 | <5%                     |                 2 |              0.3216  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6456 | 15-20%                  |                 5 |              0.12912 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6482 | 15-20%                  |                 5 |              0.12964 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6501 | 5-10%                   |                10 |              0.06501 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6554 | >20%                    |                 2 |              0.3277  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6596 | >20%                    |                 5 |              0.13192 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6776 | 15-20%                  |                 5 |              0.13552 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6813 | 15-20%                  |                 5 |              0.13626 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6862 | 15-20%                  |                 5 |              0.13724 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6887 | 15-20%                  |                10 |              0.06887 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6911 | >20%                    |                10 |              0.06911 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6921 | 15-20%                  |                 2 |              0.34605 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6968 | >20%                    |                10 |              0.06968 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.714  | >20%                    |                 5 |              0.1428  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7363 | >20%                    |                10 |              0.07363 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7374 | >20%                    |                 5 |              0.14748 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.757  | >20%                    |                 5 |              0.1514  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7575 | >20%                    |                10 |              0.07575 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7593 | >20%                    |                10 |              0.07593 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7609 | >20%                    |                 5 |              0.15218 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7622 | >20%                    |                10 |              0.07622 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7634 | >20%                    |                10 |              0.07634 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7727 | >20%                    |                 5 |              0.15454 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7801 | 5-10%                   |                 5 |              0.15602 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7857 | >20%                    |                10 |              0.07857 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.7904 | >20%                    |                10 |              0.07904 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | 5-10%                   |                10 |              0.08015 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8086 | >20%                    |                 5 |              0.16172 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8324 | >20%                    |                10 |              0.08324 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8369 | >20%                    |                 5 |              0.16738 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8585 | 5-10%                   |                10 |              0.08585 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8589 | >20%                    |                10 |              0.08589 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8639 | >20%                    |                10 |              0.08639 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8664 | >20%                    |                 2 |              0.4332  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8743 | 5-10%                   |                 2 |              0.43715 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.883  | >20%                    |                 5 |              0.1766  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8832 | 5-10%                   |                10 |              0.08832 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.893  | 5-10%                   |                10 |              0.0893  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9152 | <5%                     |                10 |              0.09152 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9185 | 5-10%                   |                10 |              0.09185 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.921  | 10-15%                  |                10 |              0.0921  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9253 | >20%                    |                 2 |              0.46265 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9267 | <5%                     |                10 |              0.09267 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9285 | 10-15%                  |                10 |              0.09285 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9535 | <5%                     |                10 |              0.09535 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9649 | >20%                    |                10 |              0.09649 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9671 | >20%                    |                 2 |              0.48355 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9923 | 10-15%                  |                10 |              0.09923 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9944 | 15-20%                  |                10 |              0.09944 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9988 | 10-15%                  |                10 |              0.09988 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0194 | 15-20%                  |                10 |              0.10194 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0321 | <5%                     |                10 |              0.10321 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.046  | >20%                    |                10 |              0.1046  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0576 | >20%                    |                10 |              0.10576 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0601 | >20%                    |                10 |              0.10601 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0809 | >20%                    |                10 |              0.10809 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1068 | >20%                    |                10 |              0.11068 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1073 | <5%                     |                 2 |              0.55365 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1245 | >20%                    |                10 |              0.11245 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1292 | >20%                    |                10 |              0.11292 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1398 | >20%                    |                 5 |              0.22796 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1489 | >20%                    |                10 |              0.11489 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1515 | >20%                    |                 2 |              0.57575 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1627 | 5-10%                   |                 5 |              0.23254 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1633 | >20%                    |                 5 |              0.23266 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1752 | >20%                    |                 5 |              0.23504 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.1825 | 5-10%                   |                 5 |              0.2365  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2251 | 15-20%                  |                10 |              0.12251 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3053 | 15-20%                  |                 2 |              0.65265 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3607 | >20%                    |                10 |              0.13607 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4033 | >20%                    |                 5 |              0.28066 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4562 | 10-15%                  |                10 |              0.14562 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4898 | 10-15%                  |                10 |              0.14898 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5028 | 15-20%                  |                 5 |              0.30056 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5266 | >20%                    |                10 |              0.15266 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5286 | >20%                    |                10 |              0.15286 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.546  | >20%                    |                10 |              0.1546  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.563  | >20%                    |                10 |              0.1563  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6378 | >20%                    |                10 |              0.16378 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2923 | 10-15%                  |                10 |              0.22923 |