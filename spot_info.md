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

Data correct as of 2026-01-25 02:21:37.108894, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1157 | 10-15%                  |                 2 |              0.05785 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1489 | 15-20%                  |                 5 |              0.02978 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1545 | >20%                    |                 2 |              0.07725 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1583 | >20%                    |                 2 |              0.07915 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1979 | >20%                    |                 2 |              0.09895 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2031 | 5-10%                   |                 2 |              0.10155 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2034 | >20%                    |                 2 |              0.1017  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2229 | 15-20%                  |                10 |              0.02229 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2324 | >20%                    |                 5 |              0.04648 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | 10-15%                  |                 2 |              0.117   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2547 | >20%                    |                 2 |              0.12735 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2551 | >20%                    |                 2 |              0.12755 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | 10-15%                  |                 2 |              0.13675 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2819 | 10-15%                  |                 2 |              0.14095 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2859 | >20%                    |                 2 |              0.14295 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | 15-20%                  |                 2 |              0.1435  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2881 | >20%                    |                 2 |              0.14405 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.291  | <5%                     |                10 |              0.0291  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2944 | >20%                    |                 2 |              0.1472  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | >20%                    |                 2 |              0.1475  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2983 | >20%                    |                 5 |              0.05966 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | >20%                    |                 2 |              0.15325 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3068 | >20%                    |                10 |              0.03068 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | >20%                    |                 2 |              0.1562  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3379 | >20%                    |                 5 |              0.06758 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3433 | 5-10%                   |                10 |              0.03433 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.348  | 5-10%                   |                10 |              0.0348  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3535 | <5%                     |                10 |              0.03535 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3555 | 15-20%                  |                 2 |              0.17775 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3565 | 5-10%                   |                 5 |              0.0713  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3577 | <5%                     |                 2 |              0.17885 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3587 | >20%                    |                 2 |              0.17935 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3614 | >20%                    |                 2 |              0.1807  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3681 | >20%                    |                 2 |              0.18405 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3784 | >20%                    |                 2 |              0.1892  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3802 | >20%                    |                 5 |              0.07604 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3825 | 15-20%                  |                 2 |              0.19125 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3838 | 15-20%                  |                 2 |              0.1919  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3855 | 15-20%                  |                 2 |              0.19275 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3886 | 5-10%                   |                 2 |              0.1943  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3995 | <5%                     |                 5 |              0.0799  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4022 | >20%                    |                 5 |              0.08044 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.403  | 5-10%                   |                 2 |              0.2015  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | >20%                    |                 5 |              0.08068 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4036 | 5-10%                   |                 2 |              0.2018  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.404  | >20%                    |                 2 |              0.202   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4056 | >20%                    |                 5 |              0.08112 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4097 | >20%                    |                 5 |              0.08194 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4184 | 10-15%                  |                 5 |              0.08368 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4227 | >20%                    |                 5 |              0.08454 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4253 | 5-10%                   |                 2 |              0.21265 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.43   | 15-20%                  |                 5 |              0.086   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4328 | >20%                    |                 5 |              0.08656 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4336 | 15-20%                  |                 2 |              0.2168  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | >20%                    |                 5 |              0.08738 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4374 | >20%                    |                 2 |              0.2187  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4453 | >20%                    |                10 |              0.04453 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4471 | <5%                     |                 2 |              0.22355 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4485 | <5%                     |                 2 |              0.22425 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4495 | >20%                    |                10 |              0.04495 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | 5-10%                   |                 2 |              0.2251  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4524 | >20%                    |                10 |              0.04524 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4586 | >20%                    |                 5 |              0.09172 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4589 | 5-10%                   |                 5 |              0.09178 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4599 | >20%                    |                 2 |              0.22995 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4702 | >20%                    |                 2 |              0.2351  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4707 | 5-10%                   |                 2 |              0.23535 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4717 | >20%                    |                 2 |              0.23585 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4729 | 5-10%                   |                 5 |              0.09458 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4735 | >20%                    |                 2 |              0.23675 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4776 | <5%                     |                10 |              0.04776 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4794 | 15-20%                  |                 5 |              0.09588 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4815 | <5%                     |                 5 |              0.0963  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4915 | >20%                    |                 2 |              0.24575 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4919 | 15-20%                  |                10 |              0.04919 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4997 | 5-10%                   |                 5 |              0.09994 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5058 | >20%                    |                 5 |              0.10116 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5111 | 15-20%                  |                 5 |              0.10222 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.513  | >20%                    |                10 |              0.0513  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.514  | >20%                    |                 2 |              0.257   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5187 | >20%                    |                 5 |              0.10374 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5198 | >20%                    |                 2 |              0.2599  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5281 | >20%                    |                 5 |              0.10562 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5339 | >20%                    |                 5 |              0.10678 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5348 | 10-15%                  |                10 |              0.05348 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5376 | >20%                    |                 5 |              0.10752 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5379 | <5%                     |                 5 |              0.10758 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5411 | 15-20%                  |                10 |              0.05411 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5469 | >20%                    |                 2 |              0.27345 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5497 | <5%                     |                 5 |              0.10994 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5516 | >20%                    |                 5 |              0.11032 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5554 | >20%                    |                 2 |              0.2777  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.569  | >20%                    |                 5 |              0.1138  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5692 | >20%                    |                10 |              0.05692 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5722 | <5%                     |                 2 |              0.2861  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5942 | >20%                    |                 2 |              0.2971  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5964 | >20%                    |                 5 |              0.11928 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.603  | >20%                    |                10 |              0.0603  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6061 | >20%                    |                 5 |              0.12122 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6134 | 5-10%                   |                 2 |              0.3067  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6136 | >20%                    |                10 |              0.06136 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6173 | 15-20%                  |                 5 |              0.12346 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6206 | <5%                     |                 5 |              0.12412 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.622  | 5-10%                   |                 5 |              0.1244  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6234 | <5%                     |                10 |              0.06234 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6328 | >20%                    |                10 |              0.06328 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6334 | >20%                    |                 5 |              0.12668 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6381 | 10-15%                  |                 5 |              0.12762 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6389 | >20%                    |                 5 |              0.12778 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6389 | 15-20%                  |                10 |              0.06389 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6444 | >20%                    |                 5 |              0.12888 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6511 | >20%                    |                10 |              0.06511 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6816 | <5%                     |                 2 |              0.3408  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6818 | 15-20%                  |                 2 |              0.3409  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.684  | 5-10%                   |                 5 |              0.1368  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6864 | >20%                    |                 5 |              0.13728 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6868 | >20%                    |                10 |              0.06868 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.706  | <5%                     |                 5 |              0.1412  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7101 | >20%                    |                 2 |              0.35505 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7172 | >20%                    |                10 |              0.07172 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7183 | >20%                    |                10 |              0.07183 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7262 | >20%                    |                 5 |              0.14524 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7276 | 15-20%                  |                10 |              0.07276 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7336 | >20%                    |                 5 |              0.14672 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.74   | >20%                    |                 5 |              0.148   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7479 | >20%                    |                10 |              0.07479 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7521 | 5-10%                   |                 2 |              0.37605 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7556 | 5-10%                   |                10 |              0.07556 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7572 | 10-15%                  |                10 |              0.07572 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7669 | <5%                     |                10 |              0.07669 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7717 | 10-15%                  |                 2 |              0.38585 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7888 | 5-10%                   |                10 |              0.07888 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7915 | <5%                     |                 5 |              0.1583  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7958 | >20%                    |                 5 |              0.15916 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7964 | <5%                     |                10 |              0.07964 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8042 | <5%                     |                10 |              0.08042 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8109 | >20%                    |                 2 |              0.40545 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8252 | >20%                    |                10 |              0.08252 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8259 | >20%                    |                 2 |              0.41295 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8376 | >20%                    |                10 |              0.08376 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8461 | >20%                    |                 5 |              0.16922 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8571 | >20%                    |                 2 |              0.42855 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8702 | >20%                    |                 5 |              0.17404 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8872 | 15-20%                  |                10 |              0.08872 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.902  | >20%                    |                10 |              0.0902  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9095 | <5%                     |                10 |              0.09095 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9117 | >20%                    |                10 |              0.09117 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9177 | >20%                    |                10 |              0.09177 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9183 | >20%                    |                10 |              0.09183 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9243 | >20%                    |                10 |              0.09243 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.925  | >20%                    |                 2 |              0.4625  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9274 | >20%                    |                 5 |              0.18548 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9469 | <5%                     |                10 |              0.09469 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.948  | >20%                    |                 2 |              0.474   |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9618 | >20%                    |                10 |              0.09618 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9947 | >20%                    |                 5 |              0.19894 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0282 | 5-10%                   |                 5 |              0.20564 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0355 | >20%                    |                10 |              0.10355 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0456 | 5-10%                   |                10 |              0.10456 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0972 | >20%                    |                 5 |              0.21944 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1024 | >20%                    |                10 |              0.11024 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1206 | <5%                     |                10 |              0.11206 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1255 | 15-20%                  |                10 |              0.11255 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1343 | >20%                    |                10 |              0.11343 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2156 | >20%                    |                 5 |              0.24312 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2162 | >20%                    |                10 |              0.12162 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2385 | >20%                    |                10 |              0.12385 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2393 | <5%                     |                10 |              0.12393 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2626 | >20%                    |                 2 |              0.6313  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3013 | >20%                    |                10 |              0.13013 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3458 | 10-15%                  |                10 |              0.13458 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3834 | 10-15%                  |                 5 |              0.27668 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4005 | >20%                    |                 2 |              0.70025 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4714 | 10-15%                  |                 5 |              0.29428 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4936 | >20%                    |                10 |              0.14936 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5128 | 15-20%                  |                10 |              0.15128 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.593  | 15-20%                  |                10 |              0.1593  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8107 | 10-15%                  |                10 |              0.18107 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.3919 | <5%                     |                 5 |              0.47838 |