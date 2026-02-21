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

Data correct as of 2026-02-21 02:26:10.203790, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1419 | >20%                    |                 2 |              0.07095 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1604 | >20%                    |                 2 |              0.0802  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1925 | >20%                    |                 5 |              0.0385  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2118 | >20%                    |                 2 |              0.1059  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2161 | >20%                    |                 2 |              0.10805 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2462 | >20%                    |                 5 |              0.04924 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | 15-20%                  |                 2 |              0.1241  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | >20%                    |                 2 |              0.1262  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2556 | 10-15%                  |                 2 |              0.1278  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2653 | 5-10%                   |                10 |              0.02653 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2678 | >20%                    |                 2 |              0.1339  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2694 | >20%                    |                 2 |              0.1347  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | 10-15%                  |                 2 |              0.14545 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2931 | 5-10%                   |                 2 |              0.14655 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2967 | 5-10%                   |                 2 |              0.14835 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3002 | >20%                    |                 2 |              0.1501  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.304  | <5%                     |                 2 |              0.152   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | >20%                    |                 2 |              0.1562  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3138 | <5%                     |                 5 |              0.06276 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3339 | >20%                    |                 5 |              0.06678 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3346 | >20%                    |                 5 |              0.06692 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3397 | >20%                    |                 5 |              0.06794 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3478 | >20%                    |                 2 |              0.1739  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3479 | >20%                    |                10 |              0.03479 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3487 | >20%                    |                 2 |              0.17435 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3506 | <5%                     |                 5 |              0.07012 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3537 | 5-10%                   |                 5 |              0.07074 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3571 | >20%                    |                 2 |              0.17855 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3607 | >20%                    |                 5 |              0.07214 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3691 | >20%                    |                 5 |              0.07382 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3729 | >20%                    |                 2 |              0.18645 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3767 | 5-10%                   |                 2 |              0.18835 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3817 | >20%                    |                 2 |              0.19085 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3847 | 5-10%                   |                10 |              0.03847 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3854 | >20%                    |                 5 |              0.07708 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3862 | >20%                    |                10 |              0.03862 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | 15-20%                  |                 2 |              0.19445 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3893 | 10-15%                  |                 2 |              0.19465 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3955 | 10-15%                  |                 5 |              0.0791  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3958 | 15-20%                  |                 2 |              0.1979  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.402  | <5%                     |                10 |              0.0402  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.412  | >20%                    |                 2 |              0.206   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4145 | >20%                    |                 2 |              0.20725 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4195 | >20%                    |                 5 |              0.0839  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4195 | <5%                     |                 5 |              0.0839  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | 5-10%                   |                 2 |              0.20985 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4217 | >20%                    |                10 |              0.04217 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | >20%                    |                 5 |              0.08448 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4247 | >20%                    |                 2 |              0.21235 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4301 | >20%                    |                 2 |              0.21505 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4309 | <5%                     |                 2 |              0.21545 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4311 | 5-10%                   |                 2 |              0.21555 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4352 | 15-20%                  |                 5 |              0.08704 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4357 | <5%                     |                 2 |              0.21785 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4411 | >20%                    |                10 |              0.04411 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4412 | >20%                    |                 5 |              0.08824 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4419 | 15-20%                  |                 2 |              0.22095 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.442  | <5%                     |                 2 |              0.221   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4521 | 5-10%                   |                 2 |              0.22605 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4562 | 15-20%                  |                 2 |              0.2281  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | 5-10%                   |                 5 |              0.09126 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4577 | >20%                    |                 2 |              0.22885 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4585 | >20%                    |                 2 |              0.22925 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4586 | >20%                    |                 5 |              0.09172 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4624 | >20%                    |                 2 |              0.2312  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4657 | 5-10%                   |                 2 |              0.23285 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | >20%                    |                 5 |              0.09442 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4769 | <5%                     |                10 |              0.04769 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4952 | <5%                     |                 5 |              0.09904 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4954 | 15-20%                  |                 2 |              0.2477  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4983 | >20%                    |                10 |              0.04983 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4994 | >20%                    |                 5 |              0.09988 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5029 | >20%                    |                 2 |              0.25145 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5108 | 15-20%                  |                 5 |              0.10216 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5179 | >20%                    |                 5 |              0.10358 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.518  | >20%                    |                10 |              0.0518  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5208 | >20%                    |                 5 |              0.10416 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5229 | >20%                    |                 2 |              0.26145 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5262 | >20%                    |                 5 |              0.10524 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5282 | >20%                    |                 2 |              0.2641  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | <5%                     |                 5 |              0.10824 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5437 | 15-20%                  |                 5 |              0.10874 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5456 | >20%                    |                 5 |              0.10912 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.547  | >20%                    |                 5 |              0.1094  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5598 | >20%                    |                10 |              0.05598 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5644 | >20%                    |                 2 |              0.2822  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5677 | <5%                     |                10 |              0.05677 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5709 | 15-20%                  |                10 |              0.05709 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5767 | >20%                    |                 5 |              0.11534 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5775 | <5%                     |                10 |              0.05775 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5945 | >20%                    |                10 |              0.05945 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5981 | >20%                    |                10 |              0.05981 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.601  | 5-10%                   |                 2 |              0.3005  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6023 | 15-20%                  |                 2 |              0.30115 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6158 | >20%                    |                 5 |              0.12316 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6163 | 5-10%                   |                 5 |              0.12326 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6165 | 15-20%                  |                10 |              0.06165 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6247 | >20%                    |                 5 |              0.12494 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.628  | >20%                    |                 5 |              0.1256  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6312 | >20%                    |                10 |              0.06312 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6385 | 5-10%                   |                 5 |              0.1277  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6405 | 10-15%                  |                 5 |              0.1281  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.641  | >20%                    |                10 |              0.0641  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6432 | 15-20%                  |                10 |              0.06432 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6446 | >20%                    |                 5 |              0.12892 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6468 | >20%                    |                 2 |              0.3234  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6472 | >20%                    |                 5 |              0.12944 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6496 | 15-20%                  |                10 |              0.06496 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6712 | <5%                     |                 5 |              0.13424 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6741 | 5-10%                   |                 5 |              0.13482 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6831 | 5-10%                   |                 2 |              0.34155 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6873 | <5%                     |                10 |              0.06873 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6929 | 10-15%                  |                10 |              0.06929 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7069 | >20%                    |                 5 |              0.14138 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7145 | 5-10%                   |                 5 |              0.1429  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7234 | >20%                    |                 5 |              0.14468 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7353 | >20%                    |                10 |              0.07353 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7357 | >20%                    |                10 |              0.07357 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.743  | >20%                    |                 2 |              0.3715  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7438 | >20%                    |                 5 |              0.14876 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7454 | 15-20%                  |                 5 |              0.14908 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7494 | >20%                    |                 5 |              0.14988 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7537 | >20%                    |                10 |              0.07537 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7585 | 5-10%                   |                10 |              0.07585 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7592 | <5%                     |                 2 |              0.3796  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7691 | <5%                     |                10 |              0.07691 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7754 | >20%                    |                 2 |              0.3877  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7825 |                         |                 2 |              0.39125 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7842 | 10-15%                  |                10 |              0.07842 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7964 | >20%                    |                 5 |              0.15928 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8037 | >20%                    |                10 |              0.08037 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8119 | >20%                    |                 2 |              0.40595 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8147 | 15-20%                  |                10 |              0.08147 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8312 | >20%                    |                 2 |              0.4156  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8369 | <5%                     |                10 |              0.08369 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8392 | <5%                     |                 5 |              0.16784 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8444 | >20%                    |                10 |              0.08444 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8493 | >20%                    |                 5 |              0.16986 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8507 | >20%                    |                10 |              0.08507 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8515 | <5%                     |                10 |              0.08515 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8564 | 10-15%                  |                 2 |              0.4282  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8564 | >20%                    |                 2 |              0.4282  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8584 | <5%                     |                 5 |              0.17168 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8769 | >20%                    |                10 |              0.08769 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8815 | >20%                    |                10 |              0.08815 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8846 | >20%                    |                 5 |              0.17692 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8914 | >20%                    |                 5 |              0.17828 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8985 | 5-10%                   |                10 |              0.08985 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9001 | <5%                     |                10 |              0.09001 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9449 | <5%                     |                10 |              0.09449 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9603 | 15-20%                  |                10 |              0.09603 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9629 | >20%                    |                10 |              0.09629 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.971  | >20%                    |                10 |              0.0971  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9842 | >20%                    |                10 |              0.09842 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9843 | >20%                    |                 5 |              0.19686 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9957 | >20%                    |                10 |              0.09957 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0031 | >20%                    |                 2 |              0.50155 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0225 | 5-10%                   |                 5 |              0.2045  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0311 |                         |                 5 |              0.20622 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.047  | >20%                    |                 5 |              0.2094  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0654 | 5-10%                   |                10 |              0.10654 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0795 | 10-15%                  |                 5 |              0.2159  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0837 | >20%                    |                10 |              0.10837 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0963 | >20%                    |                10 |              0.10963 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1103 | 15-20%                  |                10 |              0.11103 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1164 | 10-15%                  |                10 |              0.11164 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1193 | >20%                    |                 5 |              0.22386 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1784 | >20%                    |                 2 |              0.5892  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1953 | >20%                    |                10 |              0.11953 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2188 | <5%                     |                10 |              0.12188 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2203 | >20%                    |                10 |              0.12203 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3928 | 10-15%                  |                 5 |              0.27856 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4159 | >20%                    |                10 |              0.14159 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4467 | >20%                    |                 2 |              0.72335 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5071 | >20%                    |                10 |              0.15071 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5501 |                         |                10 |              0.15501 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5898 | >20%                    |                10 |              0.15898 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7216 | 15-20%                  |                10 |              0.17216 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2026 | 10-15%                  |                10 |              0.22026 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |