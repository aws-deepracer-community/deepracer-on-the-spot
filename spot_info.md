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

Data correct as of 2025-08-24 02:00:29.626738, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1024 | 5-10%                   |                 2 |              0.0512  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1515 | >20%                    |                 5 |              0.0303  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1609 | >20%                    |                 5 |              0.03218 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.201  | 10-15%                  |                 5 |              0.0402  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2028 | >20%                    |                 2 |              0.1014  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2097 | 10-15%                  |                 2 |              0.10485 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2097 | >20%                    |                 2 |              0.10485 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2168 | >20%                    |                 2 |              0.1084  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2496 | >20%                    |                 5 |              0.04992 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2644 | >20%                    |                 2 |              0.1322  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2669 | >20%                    |                 5 |              0.05338 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | >20%                    |                 2 |              0.13425 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | >20%                    |                 2 |              0.14625 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | 10-15%                  |                 2 |              0.14845 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3022 | >20%                    |                 2 |              0.1511  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | 10-15%                  |                 2 |              0.154   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3097 | 10-15%                  |                 2 |              0.15485 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3265 | 5-10%                   |                 2 |              0.16325 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3407 | >20%                    |                 2 |              0.17035 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3431 | >20%                    |                 2 |              0.17155 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3457 | >20%                    |                 2 |              0.17285 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3635 | >20%                    |                 5 |              0.0727  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.3642 | >20%                    |                 2 |              0.1821  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3647 | >20%                    |                 2 |              0.18235 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.365  | >20%                    |                 2 |              0.1825  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.365  | >20%                    |                10 |              0.0365  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3684 | >20%                    |                 2 |              0.1842  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3798 | >20%                    |                 2 |              0.1899  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3884 | >20%                    |                 5 |              0.07768 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3962 | >20%                    |                 2 |              0.1981  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | 10-15%                  |                 2 |              0.20305 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4065 | >20%                    |                 5 |              0.0813  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4074 | >20%                    |                 5 |              0.08148 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4112 | >20%                    |                 2 |              0.2056  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4114 | 10-15%                  |                10 |              0.04114 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4115 | >20%                    |                 5 |              0.0823  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4225 | >20%                    |                 5 |              0.0845  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4239 | 10-15%                  |                 2 |              0.21195 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4272 | >20%                    |                 2 |              0.2136  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.433  | >20%                    |                 5 |              0.0866  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4454 | 10-15%                  |                 2 |              0.2227  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.453  | 5-10%                   |                 2 |              0.2265  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4552 | >20%                    |                 5 |              0.09104 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4742 | <5%                     |                 2 |              0.2371  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4789 | >20%                    |                 2 |              0.23945 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4794 | >20%                    |                 2 |              0.2397  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4813 | 15-20%                  |                 5 |              0.09626 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4848 | >20%                    |                 5 |              0.09696 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4858 | >20%                    |                10 |              0.04858 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4866 | 15-20%                  |                 2 |              0.2433  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4895 | 15-20%                  |                 2 |              0.24475 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4981 | >20%                    |                 2 |              0.24905 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4984 | >20%                    |                 2 |              0.2492  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | 5-10%                   |                 5 |              0.0998  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5006 | >20%                    |                 5 |              0.10012 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5014 | >20%                    |                 2 |              0.2507  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5032 | >20%                    |                 2 |              0.2516  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5043 | 15-20%                  |                 5 |              0.10086 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.508  | >20%                    |                 5 |              0.1016  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5099 | >20%                    |                 2 |              0.25495 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5111 | 15-20%                  |                 5 |              0.10222 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5122 | 15-20%                  |                 2 |              0.2561  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5144 | 15-20%                  |                 5 |              0.10288 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5286 | >20%                    |                 2 |              0.2643  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.529  | >20%                    |                 5 |              0.1058  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5332 | >20%                    |                 2 |              0.2666  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5406 | >20%                    |                 2 |              0.2703  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5586 | 10-15%                  |                 2 |              0.2793  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.562  | >20%                    |                 2 |              0.281   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5656 | 15-20%                  |                 5 |              0.11312 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5725 | >20%                    |                 5 |              0.1145  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5763 | >20%                    |                 5 |              0.11526 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.585  | >20%                    |                 5 |              0.117   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5905 | >20%                    |                 5 |              0.1181  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5927 | >20%                    |                 2 |              0.29635 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5942 | >20%                    |                 5 |              0.11884 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6003 | 10-15%                  |                10 |              0.06003 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6017 | >20%                    |                 5 |              0.12034 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6052 | 10-15%                  |                10 |              0.06052 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6061 | 10-15%                  |                 2 |              0.30305 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6093 | >20%                    |                 5 |              0.12186 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6122 | 10-15%                  |                 5 |              0.12244 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6128 | 10-15%                  |                 5 |              0.12256 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6179 | >20%                    |                 5 |              0.12358 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.62   | 15-20%                  |                 5 |              0.124   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6286 | 15-20%                  |                 5 |              0.12572 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6289 | 15-20%                  |                 5 |              0.12578 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6315 | >20%                    |                 2 |              0.31575 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6524 | >20%                    |                 5 |              0.13048 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6593 | >20%                    |                 5 |              0.13186 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6661 | 5-10%                   |                10 |              0.06661 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6683 | <5%                     |                 2 |              0.33415 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6858 | 15-20%                  |                 2 |              0.3429  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6863 | 15-20%                  |                 5 |              0.13726 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6864 | 15-20%                  |                 5 |              0.13728 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6913 | 15-20%                  |                 5 |              0.13826 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7022 | 15-20%                  |                10 |              0.07022 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7057 | >20%                    |                 5 |              0.14114 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7074 | >20%                    |                 5 |              0.14148 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7178 | >20%                    |                10 |              0.07178 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7303 | >20%                    |                10 |              0.07303 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.7347 | 15-20%                  |                10 |              0.07347 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.735  | >20%                    |                10 |              0.0735  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7396 | >20%                    |                10 |              0.07396 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7423 | >20%                    |                 5 |              0.14846 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7553 | >20%                    |                 5 |              0.15106 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7713 | >20%                    |                10 |              0.07713 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.777  | >20%                    |                 5 |              0.1554  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7864 | >20%                    |                10 |              0.07864 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7889 | >20%                    |                10 |              0.07889 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7905 | >20%                    |                10 |              0.07905 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7963 | 5-10%                   |                 5 |              0.15926 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8035 | >20%                    |                 5 |              0.1607  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8176 | >20%                    |                 5 |              0.16352 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8192 | 5-10%                   |                10 |              0.08192 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8318 | >20%                    |                10 |              0.08318 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8413 | >20%                    |                10 |              0.08413 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8466 | >20%                    |                 5 |              0.16932 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8632 | 5-10%                   |                 2 |              0.4316  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8648 | 5-10%                   |                10 |              0.08648 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8727 | >20%                    |                10 |              0.08727 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8797 | 5-10%                   |                10 |              0.08797 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8946 | 5-10%                   |                10 |              0.08946 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8946 | <5%                     |                10 |              0.08946 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9058 | 5-10%                   |                10 |              0.09058 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9111 | <5%                     |                10 |              0.09111 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9171 | >20%                    |                 2 |              0.45855 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9188 | >20%                    |                 2 |              0.4594  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9275 | 10-15%                  |                10 |              0.09275 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9381 | 10-15%                  |                10 |              0.09381 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9481 | <5%                     |                10 |              0.09481 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9665 | 15-20%                  |                10 |              0.09665 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9768 | >20%                    |                10 |              0.09768 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9784 | 10-15%                  |                10 |              0.09784 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9822 | 10-15%                  |                10 |              0.09822 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9886 | 15-20%                  |                10 |              0.09886 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9897 | >20%                    |                10 |              0.09897 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0142 | >20%                    |                10 |              0.10142 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.029  | >20%                    |                 2 |              0.5145  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0437 | >20%                    |                10 |              0.10437 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0441 | >20%                    |                10 |              0.10441 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.06   | >20%                    |                10 |              0.106   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0769 | <5%                     |                10 |              0.10769 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0887 | >20%                    |                10 |              0.10887 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1106 | >20%                    |                10 |              0.11106 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.126  | >20%                    |                10 |              0.1126  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1334 | >20%                    |                 5 |              0.22668 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1412 | <5%                     |                 2 |              0.5706  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1557 | >20%                    |                 2 |              0.57785 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1678 | >20%                    |                10 |              0.11678 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.184  | 5-10%                   |                 5 |              0.2368  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2046 | 5-10%                   |                 5 |              0.24092 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2104 | 15-20%                  |                10 |              0.12104 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2145 | >20%                    |                 5 |              0.2429  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2364 | >20%                    |                 5 |              0.24728 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3107 | 15-20%                  |                 2 |              0.65535 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3414 | >20%                    |                10 |              0.13414 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4383 | >20%                    |                 5 |              0.28766 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.473  | 15-20%                  |                 5 |              0.2946  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5011 | >20%                    |                10 |              0.15011 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5062 | >20%                    |                10 |              0.15062 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5222 | >20%                    |                10 |              0.15222 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5289 | 10-15%                  |                10 |              0.15289 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5793 | >20%                    |                10 |              0.15793 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6655 | >20%                    |                10 |              0.16655 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7165 | 10-15%                  |                10 |              0.17165 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2897 | 10-15%                  |                10 |              0.22897 |