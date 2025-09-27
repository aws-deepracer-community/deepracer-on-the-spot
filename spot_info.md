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

Data correct as of 2025-09-27 01:40:14.067409, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0894 | 5-10%                   |                 2 |              0.0447  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.188  | 10-15%                  |                 2 |              0.094   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1906 | >20%                    |                 2 |              0.0953  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1972 | >20%                    |                 2 |              0.0986  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2114 | 5-10%                   |                 2 |              0.1057  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2193 | >20%                    |                 5 |              0.04386 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2245 | >20%                    |                 2 |              0.11225 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | >20%                    |                 2 |              0.11805 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | >20%                    |                 2 |              0.12315 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2607 | >20%                    |                 2 |              0.13035 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2624 | 10-15%                  |                 5 |              0.05248 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2624 | >20%                    |                 5 |              0.05248 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 10-15%                  |                 2 |              0.1473  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3015 | >20%                    |                 2 |              0.15075 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3035 | >20%                    |                 2 |              0.15175 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | 5-10%                   |                 2 |              0.15395 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.318  | >20%                    |                10 |              0.0318  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | 15-20%                  |                 2 |              0.1602  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3258 | >20%                    |                 2 |              0.1629  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3354 | <5%                     |                10 |              0.03354 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3355 | >20%                    |                 2 |              0.16775 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3392 | 10-15%                  |                 2 |              0.1696  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3456 | 15-20%                  |                 2 |              0.1728  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3461 | 5-10%                   |                 2 |              0.17305 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3571 | >20%                    |                 2 |              0.17855 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | >20%                    |                 2 |              0.1808  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3664 | >20%                    |                 2 |              0.1832  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3706 | >20%                    |                 5 |              0.07412 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3709 | >20%                    |                 2 |              0.18545 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3838 | >20%                    |                 5 |              0.07676 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3903 | >20%                    |                 5 |              0.07806 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3941 | >20%                    |                 2 |              0.19705 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3976 | >20%                    |                 2 |              0.1988  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.407  | >20%                    |                10 |              0.0407  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | 15-20%                  |                 2 |              0.2039  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | >20%                    |                 5 |              0.08208 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4118 | <5%                     |                10 |              0.04118 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4136 | >20%                    |                 5 |              0.08272 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4155 | >20%                    |                 2 |              0.20775 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4173 | >20%                    |                 2 |              0.20865 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4206 | >20%                    |                 5 |              0.08412 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | >20%                    |                 2 |              0.2129  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4286 | 5-10%                   |                 2 |              0.2143  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | >20%                    |                 2 |              0.21545 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4313 | >20%                    |                 5 |              0.08626 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4337 | >20%                    |                 5 |              0.08674 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.442  | 15-20%                  |                 2 |              0.221   |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4432 | >20%                    |                 2 |              0.2216  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4457 | 15-20%                  |                 5 |              0.08914 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4464 | 10-15%                  |                 5 |              0.08928 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4585 | 10-15%                  |                 2 |              0.22925 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4702 | <5%                     |                 2 |              0.2351  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4705 | >20%                    |                10 |              0.04705 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | >20%                    |                 5 |              0.0946  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4789 | >20%                    |                 5 |              0.09578 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4829 | 10-15%                  |                 2 |              0.24145 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4832 | >20%                    |                 5 |              0.09664 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4838 | >20%                    |                10 |              0.04838 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5001 | >20%                    |                 5 |              0.10002 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5004 | >20%                    |                 2 |              0.2502  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5058 | 5-10%                   |                 5 |              0.10116 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5105 | >20%                    |                 2 |              0.25525 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5122 | >20%                    |                 5 |              0.10244 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5125 | >20%                    |                 2 |              0.25625 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5327 | >20%                    |                 5 |              0.10654 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5359 | 10-15%                  |                 2 |              0.26795 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5377 | 15-20%                  |                10 |              0.05377 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5386 | 5-10%                   |                 2 |              0.2693  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5508 | >20%                    |                 2 |              0.2754  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.551  | >20%                    |                 2 |              0.2755  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.554  | >20%                    |                 5 |              0.1108  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.565  | >20%                    |                 5 |              0.113   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5689 | >20%                    |                 5 |              0.11378 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.574  | >20%                    |                 5 |              0.1148  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5754 | >20%                    |                 2 |              0.2877  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5797 | >20%                    |                 5 |              0.11594 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5928 | 15-20%                  |                 2 |              0.2964  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5929 | >20%                    |                 5 |              0.11858 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.598  | >20%                    |                 2 |              0.299   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5995 | >20%                    |                 5 |              0.1199  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6012 | >20%                    |                 2 |              0.3006  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6049 | >20%                    |                 5 |              0.12098 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6201 | >20%                    |                 5 |              0.12402 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6281 | 10-15%                  |                 5 |              0.12562 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6337 | 10-15%                  |                 5 |              0.12674 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6408 | >20%                    |                 5 |              0.12816 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6459 | 15-20%                  |                 2 |              0.32295 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6485 | 15-20%                  |                 5 |              0.1297  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6564 | >20%                    |                 5 |              0.13128 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6589 | 5-10%                   |                10 |              0.06589 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6643 | >20%                    |                 5 |              0.13286 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6668 | >20%                    |                 5 |              0.13336 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6743 | >20%                    |                 5 |              0.13486 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6802 | >20%                    |                 5 |              0.13604 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6819 | >20%                    |                 5 |              0.13638 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6871 | >20%                    |                 5 |              0.13742 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6903 | >20%                    |                 5 |              0.13806 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6904 | >20%                    |                 2 |              0.3452  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6972 | >20%                    |                10 |              0.06972 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7025 | >20%                    |                 5 |              0.1405  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7067 | 15-20%                  |                 5 |              0.14134 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7095 | 15-20%                  |                10 |              0.07095 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7194 | >20%                    |                 5 |              0.14388 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7318 | >20%                    |                10 |              0.07318 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7336 | >20%                    |                 2 |              0.3668  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7362 | 15-20%                  |                 5 |              0.14724 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7425 | 15-20%                  |                10 |              0.07425 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7465 | >20%                    |                10 |              0.07465 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7568 | >20%                    |                10 |              0.07568 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7599 | >20%                    |                 5 |              0.15198 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7675 | 10-15%                  |                 2 |              0.38375 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7757 | >20%                    |                10 |              0.07757 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7981 | 15-20%                  |                10 |              0.07981 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8003 | 10-15%                  |                 2 |              0.40015 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8074 | >20%                    |                 5 |              0.16148 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8085 | >20%                    |                10 |              0.08085 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8198 | >20%                    |                 5 |              0.16396 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.822  | >20%                    |                10 |              0.0822  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.831  | 15-20%                  |                 5 |              0.1662  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8436 | 15-20%                  |                10 |              0.08436 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8483 | <5%                     |                10 |              0.08483 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8508 | >20%                    |                 5 |              0.17016 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8609 | >20%                    |                10 |              0.08609 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8637 | 10-15%                  |                10 |              0.08637 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8693 | 15-20%                  |                10 |              0.08693 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8706 | 15-20%                  |                10 |              0.08706 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8989 | 15-20%                  |                10 |              0.08989 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.908  | >20%                    |                10 |              0.0908  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9162 | <5%                     |                10 |              0.09162 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9163 | >20%                    |                10 |              0.09163 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9184 | 10-15%                  |                10 |              0.09184 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9399 | >20%                    |                 5 |              0.18798 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9454 | 5-10%                   |                10 |              0.09454 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9463 | <5%                     |                10 |              0.09463 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9691 | >20%                    |                10 |              0.09691 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9856 | 10-15%                  |                10 |              0.09856 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9884 | 15-20%                  |                10 |              0.09884 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9893 | 15-20%                  |                10 |              0.09893 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0042 | 10-15%                  |                 5 |              0.20084 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0302 | >20%                    |                10 |              0.10302 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0477 | >20%                    |                 2 |              0.52385 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0482 | 5-10%                   |                10 |              0.10482 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.056  | >20%                    |                10 |              0.1056  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0658 | >20%                    |                 2 |              0.5329  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0685 | >20%                    |                 2 |              0.53425 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.08   | >20%                    |                 5 |              0.216   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0863 | 10-15%                  |                 2 |              0.54315 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1015 | >20%                    |                10 |              0.11015 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1028 | 15-20%                  |                10 |              0.11028 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1162 | 5-10%                   |                10 |              0.11162 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1248 | >20%                    |                 5 |              0.22496 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.129  | 5-10%                   |                10 |              0.1129  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1306 | <5%                     |                10 |              0.11306 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1316 | >20%                    |                10 |              0.11316 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1514 | >20%                    |                 5 |              0.23028 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.178  | 10-15%                  |                10 |              0.1178  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1816 | >20%                    |                 5 |              0.23632 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2129 | 5-10%                   |                 2 |              0.60645 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2157 | 15-20%                  |                10 |              0.12157 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2566 | >20%                    |                10 |              0.12566 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3122 | >20%                    |                10 |              0.13122 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3227 | 10-15%                  |                10 |              0.13227 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3394 | 10-15%                  |                 5 |              0.26788 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4053 | <5%                     |                 2 |              0.70265 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4381 | >20%                    |                10 |              0.14381 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6111 | >20%                    |                10 |              0.16111 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6117 | >20%                    |                10 |              0.16117 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6535 | 10-15%                  |                 5 |              0.3307  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7041 | >20%                    |                10 |              0.17041 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7351 | >20%                    |                10 |              0.17351 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0507 | 10-15%                  |                10 |              0.20507 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1559 | 15-20%                  |                10 |              0.21559 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.7596 | >20%                    |                10 |              0.27596 |